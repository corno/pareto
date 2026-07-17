import type * as s_out from "../../modules/pareto_new/interface/schemas/schema_reference.js"

export const submodule = (
    module: string,
    type_set: string,
): s_out.Schema_Reference => ['submodule', {
    'module': module,
    'type set': type_set,
}]
