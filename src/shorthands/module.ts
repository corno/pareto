import * as pd from 'exupery-core-data'

import * as unresolved from "../generated/interface/schemas/module/data_types/unresolved"

import * as unresolved_schema from "../generated/interface/schemas/schema/data_types/unresolved"

import {
    Raw_Or_Normal_Dictionary,
    wrap_dictionary,
    wrap_state_group,
} from 'exupery-core-data/dist/shorthands/unresolved'

export const module_ = (
    operations: unresolved.Operations<pd.Source_Location>,
    schemas: unresolved_schema.Schemas<pd.Source_Location>
): unresolved.Module<pd.Source_Location> => {
    return {
        'operations': operations,
        'schemas': schemas,
    }
}


export const operations = (
    operations: Raw_Or_Normal_Dictionary<unresolved.Operations.D<pd.Source_Location>>,
): unresolved.Operations<pd.Source_Location> => {
    return wrap_dictionary(operations)
}

export const operation = (
    type_parameters: Raw_Or_Normal_Dictionary<unresolved_schema.Type_Parameters.D<pd.Source_Location>>,
    context: unresolved.Operations.D.SG.operation.context<pd.Source_Location>,
    parameters: Raw_Or_Normal_Dictionary<unresolved.Operations.D.SG.operation.parameters.D<pd.Source_Location>>,
    result: unresolved.Operations.D.SG.operation.result<pd.Source_Location>
): unresolved.Operations.D<pd.Source_Location> => {
    return wrap_state_group(['operation', {
        'type parameters': wrap_dictionary(type_parameters),
        'context': context,
        'parameters': wrap_dictionary(parameters),
        'result': result
    }])
}

export const set = (
    operations: Raw_Or_Normal_Dictionary<unresolved.Operations.D<pd.Source_Location>>
): unresolved.Operations.D<pd.Source_Location> => {
    return wrap_state_group(['set', wrap_dictionary(operations)])
}
