import * as _pi from 'pareto-core-interface'
import * as _psh from 'pareto-core-shorthands/dist/unresolved_data'

import * as unresolved from "../interface/generated/pareto/schemas/module/data_types/target"

import * as unresolved_schema from "../interface/generated/pareto/schemas/schema/data_types/target"

export const module_ = (
    operations: unresolved.Operations<_pi.Deprecated_Source_Location>,
    schema_tree: unresolved_schema.Schema_Tree<_pi.Deprecated_Source_Location>
): unresolved.Module<_pi.Deprecated_Source_Location> => {
    return {
        'operations': operations,
        'schema tree': schema_tree,
    }
}

export const operations = (
    operations: _psh.Raw_Or_Normal_Dictionary<unresolved.Operations.D<_pi.Deprecated_Source_Location>>,
): unresolved.Operations<_pi.Deprecated_Source_Location> => {
    return _psh.wrap_dictionary(operations)
}

export const operation = (
    type_parameters: _psh.Raw_Or_Normal_Dictionary<unresolved_schema.Type_Parameters.D<_pi.Deprecated_Source_Location>>,
    context: unresolved.Operations.D.SG.operation.context<_pi.Deprecated_Source_Location>,
    parameters: _psh.Raw_Or_Normal_Dictionary<unresolved.Operations.D.SG.operation.parameters.D<_pi.Deprecated_Source_Location>>,
    result: unresolved.Operations.D.SG.operation.result<_pi.Deprecated_Source_Location>
): unresolved.Operations.D<_pi.Deprecated_Source_Location> => {
    return _psh.wrap_state_group(['operation', {
        'type parameters': _psh.wrap_dictionary(type_parameters),
        'context': context,
        'parameters': _psh.wrap_dictionary(parameters),
        'result': result
    }])
}

export const set = (
    operations: _psh.Raw_Or_Normal_Dictionary<unresolved.Operations.D<_pi.Deprecated_Source_Location>>
): unresolved.Operations.D<_pi.Deprecated_Source_Location> => {
    return _psh.wrap_state_group(['set', _psh.wrap_dictionary(operations)])
}
