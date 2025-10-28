import * as _edata from 'exupery-core-data'

import {
    Raw_Or_Normal_Dictionary,
    wrap_dictionary,
    wrap_state_group,
} from 'exupery-core-data/dist/shorthands/unresolved_data'

import * as unresolved from "../interface/generated/pareto/schemas/module/data_types/target"

import * as unresolved_schema from "../interface/generated/pareto/schemas/schema/data_types/target"

export const module_ = (
    operations: unresolved.Operations<_edata.Source_Location>,
    schema_tree: unresolved_schema.Schema_Tree<_edata.Source_Location>
): unresolved.Module<_edata.Source_Location> => {
    return {
        'operations': operations,
        'schema tree': schema_tree,
    }
}

export const operations = (
    operations: Raw_Or_Normal_Dictionary<unresolved.Operations.D<_edata.Source_Location>>,
): unresolved.Operations<_edata.Source_Location> => {
    return wrap_dictionary(operations)
}

export const operation = (
    type_parameters: Raw_Or_Normal_Dictionary<unresolved_schema.Type_Parameters.D<_edata.Source_Location>>,
    context: unresolved.Operations.D.SG.operation.context<_edata.Source_Location>,
    parameters: Raw_Or_Normal_Dictionary<unresolved.Operations.D.SG.operation.parameters.D<_edata.Source_Location>>,
    result: unresolved.Operations.D.SG.operation.result<_edata.Source_Location>
): unresolved.Operations.D<_edata.Source_Location> => {
    return wrap_state_group(['operation', {
        'type parameters': wrap_dictionary(type_parameters),
        'context': context,
        'parameters': wrap_dictionary(parameters),
        'result': result
    }])
}

export const set = (
    operations: Raw_Or_Normal_Dictionary<unresolved.Operations.D<_edata.Source_Location>>
): unresolved.Operations.D<_edata.Source_Location> => {
    return wrap_state_group(['set', wrap_dictionary(operations)])
}
