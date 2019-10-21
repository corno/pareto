import { IUnsafeOnOpenResource, IUnsafeResource } from "pareto-api"
import { UnsafeOnOpenResource } from "../../../classes/UnsafeOnOpenResource"

export const createUnsafeOnOpenResource = {
    from: {
        Dictionary: {
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
                mainSource: IUnsafeOnOpenResource<MainSourceType, MainOnOpenError>,
                onMainOpenError: (error: MainOnOpenError) => TargetError,
                supportSource: IUnsafeOnOpenResource<SupportType, SupportOnOpenError>,
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
            suppressCloseError: <T, OpenError, CloseError>(unsafeResource: IUnsafeResource<T, OpenError, CloseError>, closeErrorHandler: (error: CloseError) => void) => {
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
    wrap: <T, OpenError>(unsafeOnOpenResource: IUnsafeOnOpenResource<T, OpenError>) => {
        return new UnsafeOnOpenResource<T, OpenError>((onError, onOpened) => {
            unsafeOnOpenResource.open(onError, openedResource => {
                onOpened(openedResource.resource, openedResource.close)
            })
        })
    },
}
