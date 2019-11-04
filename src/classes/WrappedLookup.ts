import { ISafeLookup} from "pareto-api"
import { UnsafePromise} from "./UnsafePromise"

export class WrappedLookup<NewDataType, OldDataType> implements ISafeLookup<NewDataType> {
    private readonly lookup: ISafeLookup<OldDataType>
    private readonly converter: (data: OldDataType) => NewDataType
    constructor(lookup: ISafeLookup<OldDataType>, converter: (data: OldDataType) => NewDataType) {
        this.lookup = lookup
        this.converter = converter
    }
    public getEntry(entryName: string) {
        return new UnsafePromise<NewDataType, null>((onError, onSuccess) => {
            this.lookup.getEntry(entryName).handle(
                () => onError(null),
                data => onSuccess(this.converter(data))
            )
        })
    }
}
