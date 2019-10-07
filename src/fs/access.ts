import { access as rawAccess, PathLike } from "fs"
import { UnsafePromise, wrapUnsafeFunction } from "steroid-promise-core"

export function access(path: PathLike, mode: number): UnsafePromise<null, NodeJS.ErrnoException> {
    return wrapUnsafeFunction(
        (onError, onSucces) => {
            rawAccess(path, mode, error => {
                if (error === null) {
                    onSucces(null)
                } else {
                    onError(error)
                }
            })
        }
    )
}

