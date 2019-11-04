import {
    IInUnsafeLooseDictionary,
    IInUnsafePromise,
    IInUnsafeStrictDictionary,
    UnsafeEntryAlreadyExistsError,
    UnsafeEntryDoesNotExistError,
    UnsafeTwoWayError,
} from "pareto-api"
import { createUnsafePromise } from "../../create/Promise/Unsafe/createUnsafePromise"
import { streamifyArray } from "../../create/Stream/streamifyArray"
import { InMemoryReadOnlyDictionary} from "../volatile/InMemoryReadOnlyDictionary"
import { Stream } from "../volatile/Stream"
import { IOutUnsafePromise } from "../volatile/UnsafePromise"

export class UnsafeInMemoryDictionary<StoredData, CreateData, OpenData, CustomErrorType> extends InMemoryReadOnlyDictionary<StoredData, OpenData> implements
    IInUnsafeLooseDictionary<CreateData, OpenData, CustomErrorType>,
    IInUnsafeStrictDictionary<CreateData, OpenData, CustomErrorType> {
    private readonly creator: (createData: CreateData, entryName: string) => IInUnsafePromise<StoredData, CustomErrorType>
    private readonly copier: (storedData: StoredData) => StoredData
    private readonly deleter: (storedData: StoredData) => void
    constructor(
        dictionary: { [key: string]: StoredData },
        creator: (createData: CreateData, entryName: string) => IInUnsafePromise<StoredData, CustomErrorType>,
        opener: (storedData: StoredData, entryName: string) => OpenData,
        copier: (storedData: StoredData) => StoredData,
        deleter: (storedData: StoredData) => void
    ) {
        super(dictionary, opener)
        this.creator = creator
        this.copier = copier
        this.deleter = deleter
    }
    public getEntry(entryName: string): IOutUnsafePromise<OpenData, UnsafeEntryDoesNotExistError<CustomErrorType>> {
        const entry = this.implementation[entryName]
        if (entry === undefined) {
            return createUnsafePromise.error(["entry does not exist"])
        }
        return createUnsafePromise.success(this.opener(entry, entryName))
    }
    public copyEntry(sourceName: string, targetName: string): IOutUnsafePromise<null, UnsafeTwoWayError<CustomErrorType>> {
        const source = this.implementation[sourceName]
        const doesNotExist = source === undefined
        const alreadyExists = this.implementation[targetName] !== undefined
        if (doesNotExist || alreadyExists) {
            return createUnsafePromise.error(["twoway", { entryDoesNotExist: doesNotExist, entryAlreadyExists: alreadyExists }])
        }
        this.implementation[targetName] = this.copier(source)
        return createUnsafePromise.success(null)
    }
    public deleteEntry(entryName: string): IOutUnsafePromise<null, UnsafeEntryDoesNotExistError<CustomErrorType>> {
        const entry = this.implementation[entryName]
        if (entry === undefined) {
            return createUnsafePromise.error(["entry does not exist"])
        }
        delete this.implementation[entryName]
        this.deleter(entry)
        return createUnsafePromise.success(null)
    }
    public getKeys(): IOutUnsafePromise<Stream<string>, CustomErrorType> {
        return createUnsafePromise.success(
            streamifyArray(Object.keys(this.implementation), key => key)
        )
    }
    public createEntry(entryName: string, createData: CreateData): IOutUnsafePromise<null, UnsafeEntryAlreadyExistsError<CustomErrorType>> {
        if (this.implementation[entryName] !== undefined) {
            return createUnsafePromise.error(["entry already exists"])
        }
        return createUnsafePromise.wrap(this.creator(createData, entryName)
        ).mapErrorRaw<UnsafeEntryAlreadyExistsError<CustomErrorType>>(error =>
            ["custom", error]
        ).mapResultRaw(data => {
            this.implementation[entryName] = data
            return null
        })
    }
    public renameEntry(oldName: string, newName: string): IOutUnsafePromise<null, UnsafeTwoWayError<CustomErrorType>> {
        const entry = this.implementation[oldName]
        const doesNotExist = entry === undefined
        const alreadyExists = this.implementation[newName] !== undefined
        if (doesNotExist || alreadyExists) {
            return createUnsafePromise.error(["twoway", { entryDoesNotExist: doesNotExist, entryAlreadyExists: alreadyExists }])
        }
        this.implementation[newName] = entry
        delete this.implementation[oldName]
        return createUnsafePromise.success(null)
    }
}
