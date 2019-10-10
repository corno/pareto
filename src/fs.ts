import * as fs from "fs"
import * as core from "steroid-promise-core"
import { wrapUnsafeFunction } from "./Promises/UnsafePromise"

export const constants = fs.constants

export function access(path: fs.PathLike, mode: number): core.IUnsafePromise<null, NodeJS.ErrnoException> {
    return wrapUnsafeFunction(
        (onError, onSucces) => {
            fs.access(path, mode, error => {
                if (error === null) {
                    onSucces(null)
                } else {
                    onError(error)
                }
            })
        }
    )
}

