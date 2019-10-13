import * as API from "steroid-promise-api"
import * as SP from "./SafePromise"
import * as UP from "./UnsafePromise"

class SafeOpenResource<TheResource> implements API.ISafeOpenResource<TheResource> {
    public readonly resource: TheResource
    public readonly close: API.ISafePromise<null>
    constructor(resource: TheResource, close: API.ISafePromise<null>) {
        this.resource = resource
        this.close = close
    }
}

// tslint:disable-next-line: max-classes-per-file
class UnsafeResource<TheResource, OpenError> implements API.IUnsafeOnOpenResource<TheResource, OpenError> {
    public readonly open: API.IUnsafePromise<SafeOpenResource<TheResource>, OpenError>
    constructor(
        open: API.IUnsafePromise<SafeOpenResource<TheResource>, OpenError>
    ) {
        this.open = open
    }
    public with<ReturnType, WithError>(
        onOpenError: (error: OpenError) => API.UnsafeWrappedOrUnwrapped<ReturnType, WithError>,
        onSuccess: (resource: TheResource) => API.UnsafeWrappedOrUnwrapped<ReturnType, WithError>,
    ): API.IUnsafePromise<ReturnType, WithError> {
        return this.open.rework<ReturnType, WithError>(
            error => onOpenError(error),
            openResource => {
                const result = onSuccess(openResource.resource)
                return openResource.close.try<ReturnType, WithError>(
                    () => {
                        return result
                    }
                )
            }
        )
    }
}

type SafeCloseFunction = (
    onCloseSuccess: () => void
) => void

type UnsafeOpenFunction<TheResource, OpenError> = (
    onOpenError: (error: OpenError) => void,
    onOpenSuccess: (
        result: TheResource,
        closer: SafeCloseFunction
    ) => void
) => void

export function wrapUnsafeOnOpenResource<TheResource, OpenError>(
    opener: UnsafeOpenFunction<TheResource, OpenError>,
) {
    const promise = UP.wrapUnsafeFunction<SafeOpenResource<TheResource>, OpenError>((onError, onSuccess) => {
        opener(
            openError => onError(openError),
            (resource, closeFunction) => {
                const openResource: SafeOpenResource<TheResource> = new SafeOpenResource(
                    resource,
                    SP.wrapSafeFunction<null>(myOnResult => {
                        closeFunction(
                            () => myOnResult(null)
                        )
                    })
                )
                onSuccess(openResource)
            }
        )
    })
    return new UnsafeResource(promise)
}
