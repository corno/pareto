import { IUnsafeResource } from "pareto-api"
import { UnsafeOnOpenFunction, UnsafeOnOpenResource } from "../../classes/UnsafeOnOpenResource"

export const createUnsafeOnOpenResource = {
    from: {
        Dictionary: <EntryType>(obj: { [key: string]: EntryType }) => {
            return {
                getEntry: <ResourceType, OpenErrorType>(
                    name: string,
                    buildOpenError: (name: string) => OpenErrorType,
                    initResource: (entry: EntryType) => ResourceType
                ) => {
                    return new UnsafeOnOpenResource<ResourceType, OpenErrorType>((onOpenError, onSuccess) => {
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
            return new UnsafeOnOpenResource<T, OpenError>(unsafeOnOpenFunction)
        },
        UnsafeResource: <T, OpenError, CloseError>(unsafeResource: IUnsafeResource<T, OpenError, CloseError>) => {
            return {
                suppressCloseError: (closeErrorHandler: (error: CloseError) => void) => {
                    return new UnsafeOnOpenResource<T, OpenError>((onOpenError, onSuccess) => {
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
