import * as API from "steroid-promise-api"
import * as SP from "./SafePromise"
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
class UnsafeOnCloseResource<TheResource, CloseError> implements API.IUnsafeOnCloseResource<TheResource, CloseError> {
    public readonly open: API.ISafePromise<UnsafeOpenResource<TheResource, CloseError>>
    constructor(
        open: API.ISafePromise<UnsafeOpenResource<TheResource, CloseError>>
    ) {
        this.open = open
    }
    public with<ReturnType, WithError>(
        onSuccess: (resource: TheResource) => API.UnsafeWrappedOrUnwrapped<ReturnType, WithError>,
        onCloseError: (error: CloseError) => null | API.UnsafeWrappedOrUnwrapped<ReturnType, WithError>,
    ): API.IUnsafePromise<ReturnType, WithError> {
        return this.open.try<ReturnType, WithError>(
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

type UnsafeOpenFunction<TheResource, CloseError> = (
    onOpenSuccess: (
        result: TheResource,
        closer: UnsafeCloseFunction<CloseError>
    ) => void
) => void

export function wrapUnsafeOnCloseResource<TheResource, CloseError>(
    opener: UnsafeOpenFunction<TheResource, CloseError>,
) {
    const promise = SP.wrapSafeFunction<UnsafeOpenResource<TheResource, CloseError>>(onResult => {
        opener(
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
                onResult(openResource)
            }
        )
    })
    return new UnsafeOnCloseResource(promise)
}
