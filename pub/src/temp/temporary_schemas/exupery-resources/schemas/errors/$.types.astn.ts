import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Copy": type(t.state_group({
            "source does not exist": tstate(t.nothing()),
            "node is not a file": tstate(t.nothing()),
            "permission denied": tstate(t.nothing()),
            "file too large": tstate(t.nothing()),
            "device not ready": tstate(t.nothing()),
        })),

        "Make Directory": type(t.state_group({
            "directory already exists": tstate(t.nothing()),
            "permission denied": tstate(t.nothing()),
        })),

        "Remove": type(t.state_group({
            "node does not exist": tstate(t.nothing()),
            "permission denied": tstate(t.nothing()),
        })),

        "Write File": type(t.state_group({
            "permission denied": tstate(t.nothing()),
        })),

        "Read Directory": type(t.state_group({
            "directory does not exist": tstate(t.nothing()),
            "node is not a directory": tstate(t.nothing()),
        })),

        "Read File": type(t.state_group({
            "file does not exist": tstate(t.nothing()),
            "node is not a file": tstate(t.nothing()),
            "permission denied": tstate(t.nothing()),
            "file too large": tstate(t.nothing()),
            "device not ready": tstate(t.nothing()),
        })),

        "Stat": type(t.state_group({
            "node does not exist": tstate(t.nothing()),
        })),
    }
)


