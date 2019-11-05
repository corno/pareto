// tslint:disable: no-console
import { success, UnsafeInMemoryDictionary } from "pareto-20"

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
