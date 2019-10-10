import * as fs from "fs"
import * as core from "steroid-promise-core"
import { wrapUnsafeFunction } from "./Promises/UnsafePromise"

export const constants = fs.constants

export function access(path: fs.PathLike, mode: number): core.IUnsafePromise<null, NodeJS.ErrnoException> {
    return wrapUnsafeFunction(
        (onError, onSuccess) => {
            fs.access(path, mode, error => {
                if (error === null) {
                    onSuccess(null)
                } else {
                    onError(error)
                }
            })
        }
    )
}


export function readFile(path: fs.PathLike | number): core.IUnsafePromise<Buffer, NodeJS.ErrnoException> {
    return wrapUnsafeFunction(
        (onError, onSuccess) => {
            fs.readFile(path, (err, data) => {
                if (err === null) {
                    onSuccess(data)
                } else {
                    onError(err)
                }
            })
        }
    )
}

export function readdir(path: fs.PathLike, encoding: string | null): core.IUnsafePromise<fs.Dirent[], NodeJS.ErrnoException> {
    return wrapUnsafeFunction(
        (onError, onSuccess) => {
            fs.readdir(path, { encoding: encoding, withFileTypes: true}, (err, data) => {
                if (err !== null) {
                    onError(err)
                } else {
                    onSuccess(data)
                }
            })
        }
    )
}
