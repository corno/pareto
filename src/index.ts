import * as fs_raw from "./fs"
import * as JSON_raw from "./JSON"

export const JSON = {
    parse: JSON_raw.parse,
}
export const fs = {
    access: fs_raw.access,
}
export * from "steroid-promise-core"
