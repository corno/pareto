import {
    ISafeLooseDictionary,
    ISafeStrictDictionary,
    IUnsafePromise,
    SafeEntryAlreadyExistsError,
    SafeEntryDoesNotExistError,
    SafeTwoWayError,
} from "pareto-api"
import { createSafePromise } from "../create/Promise/Safe/createSafePromise"
import { createUnsafePromise } from "../create/Promise/Unsafe/createUnsafePromise"
import { streamifyArray } from "../create/Stream/streamifyArray"
import { InMemoryReadOnlyDictionary} from "./InMemoryReadOnlyDictionary"
import { SafePromise } from "./SafePromise"
import { Stream } from "./Stream"
import { UnsafePromise } from "./UnsafePromise"


// tslint:disable-next-line: max-classes-per-file
export class SafeInMemoryDictionary<StoredData, CreateData, OpenData> extends InMemoryReadOnlyDictionary<StoredData, OpenData> implements
    ISafeStrictDictionary<CreateData, OpenData>,
    ISafeLooseDictionary<CreateData, OpenData> {
    private readonly creator: (createData: CreateData, entryName: string) => IUnsafePromise<StoredData, null>
    private readonly copier: (storedData: StoredData) => StoredData
    private readonly deleter: (storedData: StoredData) => void
    constructor(
        dictionary: { [key: string]: StoredData },
        creator: (createData: CreateData, entryName: string) => IUnsafePromise<StoredData, null>,
        opener: (storedData: StoredData, entryName: string) => OpenData,
        copier: (storedData: StoredData) => StoredData,
        deleter: (storedData: StoredData) => void
    ) {
        super(dictionary, opener)
        this.creator = creator
        this.copier = copier
        this.deleter = deleter
    }

    public copyEntry(sourceName: string, targetName: string): UnsafePromise<null, SafeTwoWayError> {
        const source = this.implementation[sourceName]
        const doesNotExist = source === undefined
        const alreadyExists = this.implementation[targetName] !== undefined
        if (doesNotExist || alreadyExists) {
            return createUnsafePromise.error({ entryDoesNotExist: doesNotExist, entryAlreadyExists: alreadyExists })
        }
        this.implementation[targetName] = this.copier(source)
        return createUnsafePromise.success(null)
    }
    public deleteEntry(entryName: string): UnsafePromise<null, SafeEntryDoesNotExistError> {
        const entry = this.implementation[entryName]
        if (entry === undefined) {
            return createUnsafePromise.error(null)
        }
        delete this.implementation[entryName]
        this.deleter(entry)
        return createUnsafePromise.success(null)
    }
    public getKeys(): SafePromise<Stream<string>> {
        return createSafePromise.result(
            streamifyArray(Object.keys(this.implementation), key => key)
        )
    }
    public getEntry(entryName: string): UnsafePromise<OpenData, SafeEntryDoesNotExistError> {
        const entry = this.implementation[entryName]
        if (entry === undefined) {
            return createUnsafePromise.error(null)
        }
        return createUnsafePromise.success(this.opener(entry, entryName))
    }
    public createEntry(entryName: string, createData: CreateData): UnsafePromise<null, SafeEntryAlreadyExistsError> {
        if (this.implementation[entryName] !== undefined) {
            return createUnsafePromise.error(null)
        }
        return createUnsafePromise.wrap(this.creator(createData, entryName)
        ).mapResult(data => {
            this.implementation[entryName] = data
            return null
        })
    }
    public renameEntry(oldName: string, newName: string): UnsafePromise<null, SafeTwoWayError> {
        const entry = this.implementation[oldName]
        const doesNotExist = entry === undefined
        const alreadyExists = this.implementation[newName] !== undefined
        if (doesNotExist || alreadyExists) {
            return createUnsafePromise.error({ entryDoesNotExist: doesNotExist, entryAlreadyExists: alreadyExists })
        }
        this.implementation[newName] = entry
        delete this.implementation[oldName]
        return createUnsafePromise.success(null)
    }
}
