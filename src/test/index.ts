// tslint:disable: no-console
import { create } from ".."
import { UnsafeInMemoryDictionary } from "../dictionaryImplementations/InMemory"

const dict = new UnsafeInMemoryDictionary<string, string, string, null>(
    {},
    data => data,
    data => create.Promise.unsafe.success<string, null>(data),
    data => data
)

console.log(dict)


dict.createEntry("TEST", "foo").handle(
    error => {
        console.log(error)
    },
    _success => {
        console.log("SUCCESS")
    }
)
