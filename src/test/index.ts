// tslint:disable: no-console
import { create } from ".."
import { UnsafeInMemoryDictionary } from "../classes/UnsafeInMemoryDictionary"

const dict = new UnsafeInMemoryDictionary<string, string, string, null>(
    {},
    data => create.Promise.unsafe.success<string, null>(data),
    data => data,
    data => data,
    _data => {}
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
