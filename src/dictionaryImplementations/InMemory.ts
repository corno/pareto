import {
    ISafeDictionary,
    IUnsafeDictionary,
    IUnsafePromise,
    SafeEntryAlreadyExistsError,
    SafeEntryDoesNotExistError,
    SafeTwoWayError,
    UnsafeEntryAlreadyExistsError,
    UnsafeEntryDoesNotExistError,
    UnsafeTwoWayError,
} from "pareto-api"
import { SafePromise } from "../classes/SafePromise"
import { Stream } from "../classes/Stream"
import { UnsafePromise } from "../classes/UnsafePromise"
import { createSafePromise } from "../create/Promise/Safe/createSafePromise"
import { createUnsafePromise } from "../create/Promise/Unsafe/createUnsafePromise"
import { streamifyArray } from "../create/Stream/streamifyArray"


export class SafeInMemoryDictionary<StoredData, CreateData, OpenData, ErrorType> implements ISafeDictionary<CreateData, OpenData> {
    private readonly dictionary: { [key: string]: StoredData }
    private readonly opener: (storedData: StoredData, entryName: string) => OpenData
    private readonly creator: (createData: CreateData, entryName: string) => IUnsafePromise<StoredData, ErrorType>
    private readonly copier: (storedData: StoredData) => StoredData
    constructor(
        dictionary: { [key: string]: StoredData },
        opener: (storedData: StoredData, entryName: string) => OpenData,
        creator: (createData: CreateData, entryName: string) => IUnsafePromise<StoredData, ErrorType>,
        copier: (storedData: StoredData) => StoredData
    ) {
        this.dictionary = dictionary
        this.opener = opener
        this.creator = creator
        this.copier = copier
    }

    public copyEntry(sourceName: string, targetName: string): UnsafePromise<null, SafeTwoWayError> {
        const source = this.dictionary[sourceName]
        const doesNotExist = source === undefined
        const alreadyExists = this.dictionary[targetName] !== undefined
        if (doesNotExist || alreadyExists) {
            return createUnsafePromise.error({ entryDoesNotExist: doesNotExist, entryAlreadyExists: alreadyExists })
        }
        this.dictionary[targetName] = this.copier(source)
        return createUnsafePromise.success(null)
    }
    public deleteEntry(entryName: string): UnsafePromise<null, SafeEntryDoesNotExistError> {
        if (this.dictionary[entryName] === undefined) {
            return createUnsafePromise.error(null)
        }
        delete this.dictionary[entryName]
        return createUnsafePromise.success(null)
    }
    public getEntry(entryName: string): UnsafePromise<OpenData, SafeEntryDoesNotExistError> {
        const entry = this.dictionary[entryName]
        if (entry === undefined) {
            return createUnsafePromise.error(null)
        }
        return createUnsafePromise.success(this.opener(entry, entryName))
    }
    public getKeys(): SafePromise<Stream<string>> {
        return createSafePromise.result(
            streamifyArray(Object.keys(this.dictionary), key => key)
        )
    }
    public createEntry(entryName: string, createData: CreateData): UnsafePromise<null, SafeEntryAlreadyExistsError> {
        if (this.dictionary[entryName] !== undefined) {
            return createUnsafePromise.error(null)
        }
        return createUnsafePromise.wrap(this.creator(createData, entryName)
        ).mapError<SafeEntryAlreadyExistsError>(_error =>
            null
        ).mapResult(data => {
            this.dictionary[entryName] = data
            return null
        })
    }
    public renameEntry(oldName: string, newName: string): UnsafePromise<null, SafeTwoWayError> {
        const entry = this.dictionary[oldName]
        const doesNotExist = entry === undefined
        const alreadyExists = this.dictionary[newName] !== undefined
        if (doesNotExist || alreadyExists) {
            return createUnsafePromise.error({ entryDoesNotExist: doesNotExist, entryAlreadyExists: alreadyExists })
        }
        this.dictionary[newName] = entry
        delete this.dictionary[oldName]
        return createUnsafePromise.success(null)
    }
}


// tslint:disable-next-line: max-classes-per-file
export class UnsafeInMemoryDictionary<StoredData, CreateData, OpenData, CustomErrorType> implements IUnsafeDictionary<CreateData, OpenData, CustomErrorType> {
    private readonly dictionary: { [key: string]: StoredData }
    private readonly opener: (storedData: StoredData, entryName: string) => OpenData
    private readonly creator: (createData: CreateData, entryName: string) => IUnsafePromise<StoredData, CustomErrorType>
    private readonly copier: (storedData: StoredData) => StoredData
    constructor(
        dictionary: { [key: string]: StoredData },
        opener: (storedData: StoredData, entryName: string) => OpenData,
        creator: (createData: CreateData, entryName: string) => IUnsafePromise<StoredData, CustomErrorType>,
        copier: (storedData: StoredData) => StoredData
    ) {
        this.dictionary = dictionary
        this.opener = opener
        this.creator = creator
        this.copier = copier
    }

    public copyEntry(sourceName: string, targetName: string): UnsafePromise<null, UnsafeTwoWayError<CustomErrorType>> {
        const source = this.dictionary[sourceName]
        const doesNotExist = source === undefined
        const alreadyExists = this.dictionary[targetName] !== undefined
        if (doesNotExist || alreadyExists) {
            return createUnsafePromise.error(["twoway", { entryDoesNotExist: doesNotExist, entryAlreadyExists: alreadyExists }])
        }
        this.dictionary[targetName] = this.copier(source)
        return createUnsafePromise.success(null)
    }
    public deleteEntry(entryName: string): UnsafePromise<null, UnsafeEntryDoesNotExistError<CustomErrorType>> {
        if (this.dictionary[entryName] === undefined) {
            return createUnsafePromise.error(["entry does not exist"])
        }
        delete this.dictionary[entryName]
        return createUnsafePromise.success(null)
    }
    public getEntry(entryName: string): UnsafePromise<OpenData, UnsafeEntryDoesNotExistError<CustomErrorType>> {
        const entry = this.dictionary[entryName]
        if (entry === undefined) {
            return createUnsafePromise.error(["entry does not exist"])
        }
        return createUnsafePromise.success(this.opener(entry, entryName))
    }
    public getKeys(): UnsafePromise<Stream<string>, CustomErrorType> {
        return createUnsafePromise.success(
            streamifyArray(Object.keys(this.dictionary), key => key)
        )
    }
    public createEntry(entryName: string, createData: CreateData): UnsafePromise<null, UnsafeEntryAlreadyExistsError<CustomErrorType>> {
        if (this.dictionary[entryName] !== undefined) {
            return createUnsafePromise.error(["entry already exists"])
        }
        return createUnsafePromise.wrap(this.creator(createData, entryName)
        ).mapError<UnsafeEntryAlreadyExistsError<CustomErrorType>>(error =>
            ["custom", error]
        ).mapResult(data => {
            this.dictionary[entryName] = data
            return null
        })
    }
    public renameEntry(oldName: string, newName: string): UnsafePromise<null, UnsafeTwoWayError<CustomErrorType>> {
        const entry = this.dictionary[oldName]
        const doesNotExist = entry === undefined
        const alreadyExists = this.dictionary[newName] !== undefined
        if (doesNotExist || alreadyExists) {
            return createUnsafePromise.error(["twoway", { entryDoesNotExist: doesNotExist, entryAlreadyExists: alreadyExists }])
        }
        this.dictionary[newName] = entry
        delete this.dictionary[oldName]
        return createUnsafePromise.success(null)
    }
}
