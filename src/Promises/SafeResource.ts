import * as API from "steroid-promise-api"
import * as SP from "./SafePromise"


class SafeOpenResource<TheResource> implements API.ISafeOpenResource<TheResource> {
    public readonly resource: TheResource
    public readonly close: API.ISafePromise<null>
    constructor(resource: TheResource, close: API.ISafePromise<null>) {
        this.resource = resource
        this.close = close
    }
}

// tslint:disable-next-line: max-classes-per-file
class SafeResource<TheResource> implements API.ISafeResource<TheResource> {
    public readonly open: API.ISafePromise<SafeOpenResource<TheResource>>
    constructor(
        open: API.ISafePromise<SafeOpenResource<TheResource>>
    ) {
        this.open = open
    }
    public with<ReturnType, WithError>(
        onResult: (resource: TheResource) => API.UnsafeWrappedOrUnwrapped<ReturnType, WithError>,
    ): API.IUnsafePromise<ReturnType, WithError> {
        return this.open.try<ReturnType, WithError>(
            openResource => {
                const result = onResult(openResource.resource)
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

type SafeOpenFunction<TheResource> = (
    onOpenSuccess: (
        result: TheResource,
        closer: SafeCloseFunction
    ) => void
) => void

export function wrapSafeResource<TheResource>(
    opener: SafeOpenFunction<TheResource>,
) {
    const promise = SP.wrapSafeFunction<SafeOpenResource<TheResource>>(onResult => {
        opener(
            (resource, closeFunction) => {
                const openResource: SafeOpenResource<TheResource> = new SafeOpenResource(
                    resource,
                    SP.wrapSafeFunction<null>(myOnResult => {
                        closeFunction(
                            () => myOnResult(null)
                        )
                    })
                )
                onResult(openResource)
            }
        )
    })
    return new SafeResource(promise)
}
