import { ISafeOpenedResource, IUnsafeOnOpenResource, IUnsafeResource } from "pareto-api"

export class SafeOpenedResource<ResourceType> implements ISafeOpenedResource<ResourceType> {
    public readonly resource: ResourceType
    private readonly closer: () => void
    constructor(resource: ResourceType, closer: () => void) {
        this.resource = resource
        this.closer = closer
    }
    public close() {
        this.closer()
    }
}

// tslint:disable-next-line: max-classes-per-file
export class UnsafeOnOpenResource<ResourceType, OpenError> implements IUnsafeOnOpenResource<ResourceType, OpenError> {
    private readonly openFunction: UnsafeOnOpenFunction<ResourceType, OpenError>
    constructor(openFunction: UnsafeOnOpenFunction<ResourceType, OpenError>) {
        this.openFunction = openFunction
    }
    public open(onError: (openError: OpenError) => void, onOpened: (openedResource: SafeOpenedResource<ResourceType>) => void) {
        this.openFunction(
            onError,
            (resource: ResourceType, closer: () => void) => {
                onOpened(new SafeOpenedResource(resource, closer))
            }
        )
    }
    public mapOpenError<NewErrorType>(errorConverter: (openError: OpenError) => NewErrorType) {
        return wrapUnsafeOnOpenResource<ResourceType, NewErrorType>((onOpenError, onSuccess) => {
            this.openFunction(
                error => onOpenError(errorConverter(error)),
                (resource, closer) => onSuccess(resource, closer)
            )
        })
    }
    public mapResource<NewType>(resourceConverter: (resource: ResourceType) => NewType) {
        return wrapUnsafeOnOpenResource<NewType, OpenError>((onOpenError, onSuccess) => {
            this.openFunction(
                error => onOpenError(error),
                (resource, closer) => onSuccess(resourceConverter(resource), closer)
            )
        })
    }
}

export type UnsafeOnOpenFunction<ResultType, OpenError> = (
    onOpenError: (error: OpenError) => void,
    onSuccessfullyOpened: (
        resource: ResultType,
        close: () => void
    ) => void
) => void


export function wrapUnsafeOnOpenResource<ResultType, OpenError>(
    opener: UnsafeOnOpenFunction<ResultType, OpenError>,
) {
    return new UnsafeOnOpenResource(opener)
}


export const createUnsafeOnOpenResource = {
    from: {
        Dictionary: <EntryType>(obj: { [key: string]: EntryType }) => {
            return {
                getEntry: <ResourceType, OpenErrorType>(
                    name: string,
                    buildOpenError: (name: string) => OpenErrorType,
                    initResource: (entry: EntryType) => ResourceType
                ) => {
                    return wrapUnsafeOnOpenResource<ResourceType, OpenErrorType>((onOpenError, onSuccess) => {
                        const value = obj[name]
                        if (value === undefined) {
                            onOpenError(buildOpenError(name))
                        } else {
                            onSuccess(
                                initResource(value),
                                () => {
                                    //nothing to do
                                }
                            )
                        }
                    })
                },
            }
        },
        Functions: <T, OpenError>(unsafeOnOpenFunction: UnsafeOnOpenFunction<T, OpenError>) => {
            return wrapUnsafeOnOpenResource<T, OpenError>(unsafeOnOpenFunction)
        },
        UnsafeResource: <T, OpenError, CloseError>(unsafeResource: IUnsafeResource<T, OpenError, CloseError>) => {
            return {
                suppressCloseError: (closeErrorHandler: (error: CloseError) => void) => {
                    return wrapUnsafeOnOpenResource<T, OpenError>((onOpenError, onSuccess) => {
                        unsafeResource.open(
                            onOpenError,
                            success => onSuccess(
                                success.resource,
                                () => {
                                    success.close(closeErrorHandler)
                                }
                            )
                        )
                    })
                },
            }
        },
    },
}
