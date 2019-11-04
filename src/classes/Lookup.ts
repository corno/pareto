import { IInSafeLookup} from "pareto-api"
import { IUnsafePromise} from "./volatile/UnsafePromise"

/**
 * @deprecated
 */
export class Lookup<Type> implements IInSafeLookup<Type> {
    private readonly dict: { [key: string]: Type}
    constructor(dict: { [key: string]: Type}) {
        this.dict = dict
    }
    public getEntry(entryName: string) {
        return new IUnsafePromise<Type, null>((onError, onSuccess) => {
            const entry = this.dict[entryName]
            if (entry === undefined) {
                onError(null)
            } else {
                onSuccess(entry)
            }
        })
    }
}
