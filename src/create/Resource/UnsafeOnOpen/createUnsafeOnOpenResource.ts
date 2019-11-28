import { IUnsafeOnOpenResource, UnsafeOnOpenResource } from "pareto-20"

export const createUnsafeOnOpenResource = {
    from: {
        UnsafeOnOpenResource: {
            combine: <MainSourceType, MainOnOpenError, SupportType, SupportOnOpenError, TargetType, TargetError>(
                mainSource: IUnsafeOnOpenResource<MainSourceType, MainOnOpenError>,
                onMainOpenError: (error: MainOnOpenError) => TargetError,
                supportSource: IUnsafeOnOpenResource<SupportType, SupportOnOpenError>,
                onSupportOpenError: (error: SupportOnOpenError) => TargetError,
                onBothOpened: (resource1: MainSourceType, resource2: SupportType) => TargetType
            ) => {
                return new UnsafeOnOpenResource<TargetType, TargetError>((onOpenError, onOpened) => {
                    mainSource.openUnsafeOpenableResource(
                        openError1 => {
                            onOpenError(onMainOpenError(openError1))
                        },
                        openedResource1 => {
                            supportSource.openUnsafeOpenableResource(
                                openError2 => {
                                    openedResource1.closeSafeOpenedResource()
                                    onOpenError(onSupportOpenError(openError2))
                                },
                                openedResource2 => {
                                    onOpened(
                                        onBothOpened(openedResource1.resource, openedResource2.resource),
                                        () => {
                                            openedResource1.closeSafeOpenedResource()
                                            openedResource2.closeSafeOpenedResource()
                                        },
                                    )
                                }
                            )
                        }
                    )
                })
            },
        },
    },
    value: {
        get: <ResourceType, OpenErrorType>(value: ResourceType) => {
            return new UnsafeOnOpenResource<ResourceType, OpenErrorType>((_onOpenError, onSuccess) => {
                onSuccess(value, () => {
                    //nothing to do
                })
            })
        },
    },
}
