import * as fs from "fs"
import { UnsafePromise, wrapUnsafeFunction } from "./Promises/UnsafePromise"

export const constants = fs.constants

export function access(path: fs.PathLike, mode: number): UnsafePromise<null, NodeJS.ErrnoException> {
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

