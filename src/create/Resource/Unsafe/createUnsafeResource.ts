import { IUnsafeResource } from "pareto-api"
import { UnsafeResource } from "../../../classes/UnsafeResource"

export const createUnsafeResource = {
    from: {
        Dictionary: {
            getEntry: <EntryType, ResourceType, OpenErrorType>(
                obj: { [key: string]: EntryType },
                name: string,
                buildOpenError: (name: string) => OpenErrorType,
                initResource: (entry: EntryType) => ResourceType
            ) => {
                return new UnsafeResource((onOpenError, onSuccess) => {
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
    wrap: <T, OpenError, CloseError>(unsafeResource: IUnsafeResource<T, OpenError, CloseError>) => {
        return new UnsafeResource<T, OpenError, CloseError>((onError, onOpened) => {
            unsafeResource.open(onError, openedResource => {
                onOpened(openedResource.resource, openedResource.close)
            })
        })
    },
}
