export * from "steroid-promise-api"
export * from "./Promises/ExecutionType"
export * from "./Promises/mapSafePromises"
export * from "./Promises/mapUnsafePromises"
export * from "./Promises/mapUnsafePromisesObject"
export * from "./Promises/SafePromise"
export * from "./Promises/SafeResource"
export * from "./Promises/UnsafePromise"
export * from "./Promises/UnsafeOnCloseResource"
export * from "./Promises/UnsafeOnOpenResource"
export * from "./Promises/UnsafeResource"


import * as IFS from "./fs"
export const fs = {
    access: IFS.access,
    constants: IFS.constants,
    readdir: IFS.readdir,
    readFile: IFS.readFile,
}

import * as IJSON from "./JSON"
export const JSON = {
    parse: IJSON.parse,
}

import * as  IObject from "./Object"
// tslint:disable-next-line: variable-name
export const Object = {
    assertPropertyDoesNotExist: IObject.assertPropertyDoesNotExist,
    getProperty: IObject.getProperty,
}

import * as  IArray from "./Array"
// tslint:disable-next-line: variable-name
export const Array = {
    assertIsEmpty: IArray.assertIsEmpty,
    getElement: IArray.getElement,
}
