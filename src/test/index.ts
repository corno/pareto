// tslint:disable: no-console
import { UnsafeInMemoryDictionary } from "../classes/heap/UnsafeInMemoryDictionary"
import { success } from "../create/Promise/Unsafe/createUnsafePromise"

const dict = new UnsafeInMemoryDictionary<string, string, string, null>(
    {},
    data => success<string, null>(data),
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
