import type * as s_out from "../../modules/pareto_new/interface/schemas/type_reference.js"

export const local = (
    name: string,
): s_out.Type_Reference => ['local', {
    'name': name,
}]

export const module = (
    name: string,
    dataset_name: string,
): s_out.Type_Reference => ['module', {
    'name': name,
    'dataset name': dataset_name,
}]
