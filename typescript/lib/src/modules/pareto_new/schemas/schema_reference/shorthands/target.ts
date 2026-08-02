import type * as s_out from "../schema.js"

export const submodule = (
    module: string,
    type_set: string,
): s_out.Schema_Reference => ['submodule', {
    'module': module,
    'type set': type_set,
}]
