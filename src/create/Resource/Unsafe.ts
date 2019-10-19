import { IUnsafeOpenedResource, IUnsafeResource } from "pareto-api"

export class UnsafeOpenedResource<ResourceType, CloseError> implements IUnsafeOpenedResource<ResourceType, CloseError> {
    public readonly resource: ResourceType
    private readonly closer: (onCloseError: (error: CloseError) => void) => void
    constructor(resource: ResourceType, closer: (onCloseError: (error: CloseError) => void) => void) {
        this.resource = resource
        this.closer = closer
    }
    public close(onCloseError: (error: CloseError) => void) {
        this.closer(onCloseError)
    }
}

// tslint:disable-next-line: max-classes-per-file
export class UnsafeOnOpenResource<ResourceType, OpenError, CloseError> implements IUnsafeResource<ResourceType, OpenError, CloseError> {
    private readonly openFunction: UnsafeFunction<ResourceType, OpenError, CloseError>
    constructor(openFunction: UnsafeFunction<ResourceType, OpenError, CloseError>) {
        this.openFunction = openFunction
    }
    public open(onError: (openError: OpenError) => void, onOpened: (openedResource: UnsafeOpenedResource<ResourceType, CloseError>) => void) {
        this.openFunction(
            onError,
            (resource: ResourceType, closer: (onCloseError: (closeError: CloseError) => void) => void) => {
                onOpened(new UnsafeOpenedResource(resource, closer))
            }
        )
    }
}

export type UnsafeFunction<ResultType, OpenError, CloseError> = (
    onOpenError: (error: OpenError) => void,
    onSuccessfullyOpened: (
        resource: ResultType,
        close: (onCloseError: (closeError: CloseError) => void) => void
    ) => void
) => void


export function wrapUnsafeResource<ResultType, OpenError, CloseError>(
    opener: UnsafeFunction<ResultType, OpenError, CloseError>,
) {
    return new UnsafeOnOpenResource(opener)
}


export const createUnsafeResource = {
    from: {
        Dictionary: <EntryType>(obj: { [key: string]: EntryType }) => {
            return {
                getEntry: <ResourceType, OpenErrorType>(
                    name: string,
                    buildOpenError: (name: string) => OpenErrorType,
                    initResource: (entry: EntryType) => ResourceType
                ) => {
                    return wrapUnsafeResource((onOpenError, onSuccess) => {
                        const value = obj[name]
                        if (value === undefined) {
                            onOpenError(buildOpenError(name))
                        } else {
                            onSuccess(
                                initResource(value),
                                _onCloseError => {
                                    //nothing to do
                                }
                            )
                        }
                    })
                },
            }
        },
        Functions: <T, OpenError, CloseError>(unsafeOnOpenFunction: UnsafeFunction<T, OpenError, CloseError>) => {
            return wrapUnsafeResource<T, OpenError, CloseError>(unsafeOnOpenFunction)
        },
    },
}
