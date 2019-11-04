
import { ISafeLookup } from "pareto-api"
import { error, success } from "../index"
import { UnsafePromise} from "./UnsafePromise"


// tslint:disable-next-line: max-classes-per-file
export class BuildableLookup<DataType> implements ISafeLookup<DataType> {
    private readonly dictionary: { [key: string]: DataType } = {}
    public set(key: string, element: DataType) {
        this.dictionary[key] = element
    }
    public get(key: string, initializer: () => DataType) {
        let entry = this.dictionary[key]
        if (entry === undefined) {
            entry = initializer()
            this.dictionary[key] = entry
        }
        return entry
    }
    public getEntry(key: string): UnsafePromise<DataType, null> {
        const entry = this.dictionary[key]
        if (entry === undefined) {
            return error(null)
        }
        return success(entry)
    }
}

