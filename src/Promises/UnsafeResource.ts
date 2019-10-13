import * as API from "steroid-promise-api"
import * as UP from "./UnsafePromise"

class UnsafeOpenResource<TheResource, CloseError> implements API.IUnsafeOpenResource<TheResource, CloseError> {
    public readonly resource: TheResource
    public readonly close: API.IUnsafePromise<null, CloseError>
    constructor(resource: TheResource, close: API.IUnsafePromise<null, CloseError>) {
        this.resource = resource
        this.close = close
    }
}

// tslint:disable-next-line: max-classes-per-file
class UnsafeResource<TheResource, OpenError, CloseError> implements API.IUnsafeResource<TheResource, OpenError, CloseError> {
    public readonly open: API.IUnsafePromise<UnsafeOpenResource<TheResource, CloseError>, OpenError>
    constructor(
        open: API.IUnsafePromise<UnsafeOpenResource<TheResource, CloseError>, OpenError>
    ) {
        this.open = open
    }
    public with<ReturnType, WithError>(
        onOpenError: (error: OpenError) => API.UnsafeWrappedOrUnwrapped<ReturnType, WithError>,
        onSuccess: (resource: TheResource) => API.UnsafeWrappedOrUnwrapped<ReturnType, WithError>,
        onCloseError: (error: CloseError) => null | API.UnsafeWrappedOrUnwrapped<ReturnType, WithError>,
    ): API.IUnsafePromise<ReturnType, WithError> {
        return this.open.rework<ReturnType, WithError>(
            error => onOpenError(error),
            openResource => {
                const result = onSuccess(openResource.resource)
                return openResource.close.rework<ReturnType, WithError>(
                    error => {
                        const closeResult = onCloseError(error)
                        if (closeResult === null) { return result }
                        return closeResult
                    },
                    () => {
                        return result
                    }
                )
            }
        )
    }
}

type UnsafeCloseFunction<CloseError> = (
    onCloseError: (error: CloseError) => void,
    onCloseSuccess: () => void
) => void

type UnsafeOpenFunction<TheResource, OpenError, CloseError> = (
    onOpenError: (error: OpenError) => void,
    onOpenSuccess: (
        result: TheResource,
        closer: UnsafeCloseFunction<CloseError>
    ) => void
) => void

export function wrapUnsafeResource<TheResource, OpenError, CloseError>(
    opener: UnsafeOpenFunction<TheResource, OpenError, CloseError>,
) {
    const promise = UP.wrapUnsafeFunction<UnsafeOpenResource<TheResource, CloseError>, OpenError>((onError, onSuccess) => {
        opener(
            openError => onError(openError),
            (resource, closeFunction) => {
                const openResource: UnsafeOpenResource<TheResource, CloseError> = new UnsafeOpenResource(
                    resource,
                    UP.wrapUnsafeFunction<null, CloseError>((myOnError, myOnSuccess) => {
                        closeFunction(
                            error => myOnError(error),
                            () => myOnSuccess(null)
                        )
                    })
                )
                onSuccess(openResource)
            }
        )
    })
    return new UnsafeResource(promise)
}
