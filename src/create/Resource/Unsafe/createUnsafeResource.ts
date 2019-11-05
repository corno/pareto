import { UnsafeResource } from "../../../classes/UnsafeResource"

export const createUnsafeResource = {
    from: {
        Dictionary_x: {
            getEntry: <EntryType, ResourceType, OpenErrorType>(
                obj: { [key: string]: EntryType },
                name: string,
                buildOpenError: (name: string) => OpenErrorType,
                initResource: (entry: EntryType) => ResourceType
            ) => {
                return new UnsafeResource<ResourceType, OpenErrorType, null>((onOpenError, onSuccess) => {
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
        },
    },
}
