import { IKeyValueStream, KeyValuePair, StreamLimiter } from "pareto-api"
import { arrayToDictionary} from "../utils"
import { Stream } from "./Stream"

export class Dictionary<Type> implements IKeyValueStream<Type> {
    public readonly raw: { [key: string]: Type }
    constructor(dictionary: { [key: string]: Type }) {
        this.raw = dictionary
    }
    public process(_limiter: StreamLimiter, onData: (data: KeyValuePair<Type>, abort: () => void) => void, onEnd: (aborted: boolean) => void) {
        //FIX handle limiter and abort
        const keys = Object.keys(this.raw)
        keys.forEach(key => {
            onData({ key: key, value: this.raw[key] }, () => { })
        })
        onEnd(false)
    }
    public toKeysStream() {
        return new Stream<string>((_limiter, onData, onEnd) => {
            //FIX implement limiter and abort
            Object.keys(this.raw).forEach(key => onData(key, () => { }))
            onEnd(false)
        })
    }
    public forEach(callback: (entry: Type, entryName: string) => void) {
        Object.keys(this.raw).forEach(entryName => callback(this.raw[entryName], entryName))
    }
    public map<NewType>(callback: (entry: Type, entryName: string) => NewType) {
        const keys = Object.keys(this.raw)
        const entriesArray = keys.map(entryName => callback(this.raw[entryName], entryName))
        return arrayToDictionary(entriesArray, keys)
    }
}
