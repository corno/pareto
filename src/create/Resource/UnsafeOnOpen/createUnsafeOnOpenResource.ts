import { IInUnsafeOnOpenResource, IInUnsafeResource } from "pareto-api"
import { UnsafeOnOpenResource } from "../../../../../pareto-20/src/UnsafeOnOpenResource"

export const createUnsafeOnOpenResource = {
    from: {
        Dictionary_x: {
            getEntry: <EntryType, ResourceType, OpenErrorType>(
                obj: { [key: string]: EntryType },
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
        },
        UnsafeOnOpenResource: {
            combine: <MainSourceType, MainOnOpenError, SupportType, SupportOnOpenError, TargetType, TargetError>(
                mainSource: IInUnsafeOnOpenResource<MainSourceType, MainOnOpenError>,
                onMainOpenError: (error: MainOnOpenError) => TargetError,
                supportSource: IInUnsafeOnOpenResource<SupportType, SupportOnOpenError>,
                onSupportOpenError: (error: SupportOnOpenError) => TargetError,
                onBothOpened: (resource1: MainSourceType, resource2: SupportType) => TargetType
            ) => {
                return new UnsafeOnOpenResource<TargetType, TargetError>((onOpenError, onOpened) => {
                    mainSource.open(
                        openError1 => {
                            onOpenError(onMainOpenError(openError1))
                        },
                        openedResource1 => {
                            supportSource.open(
                                openError2 => {
                                    openedResource1.close()
                                    onOpenError(onSupportOpenError(openError2))
                                },
                                openedResource2 => {
                                    onOpened(onBothOpened(openedResource1.resource, openedResource2.resource), () => {
                                        openedResource1.close()
                                        openedResource2.close()
                                    })
                                }
                            )
                        }
                    )
                })
            },
        },
        UnsafeResource: {
            suppressCloseError: <T, OpenError, CloseError>(unsafeResource: IInUnsafeResource<T, OpenError, CloseError>, closeErrorHandler: (error: CloseError) => void) => {
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
        },

    },
    value: {
        get: <ResourceType, OpenErrorType>(value: ResourceType) => {
            return new UnsafeOnOpenResource<ResourceType, OpenErrorType>((_onOpenError, onSuccess) => {
                onSuccess(
                    value,
                    () => {
                        //nothing to do
                    }
                )
            })
        },
    },
}
