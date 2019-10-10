export * from "steroid-promise-core"
export * from "./Promises/ExecutionType"
export * from "./Promises/mapSafePromises"
export * from "./Promises/mapUnsafePromises"
export * from "./Promises/mapUnsafePromisesObject"
export * from "./Promises/SafePromise"
export * from "./Promises/UnsafePromise"


import * as IFS from "./fs"
export const fs = {
    access: IFS.access,
    constants: IFS.constants,
}

import * as IJSON from "./JSON"
export const JSON = {
    parse: IJSON.parse,
}

import * as  IObject from "./Object"
export const Object = {
    assertPropertyDoesNotExist: IObject.assertPropertyDoesNotExist,
    getProperty: IObject.getProperty,
}

import * as  IArray from "./Array"
export const Array = {
    assertIsEmpty: IArray.assertIsEmpty
}
