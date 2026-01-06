import * as _ea from 'pareto-core-refiner'
import * as _ed from 'pareto-core-dev'

import * as _i_resolve from 'pareto-core-internals/dist/algorithm_types/refiner/resolve'
import * as _i_generic from 'pareto-core-internals/dist/algorithm_types/refiner/resolve'
import * as _i_out from "../../../../../interface/generated/pareto/schemas/module/data_types/source"
import * as _i_r_schema from "../schema/resolve"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/module/data_types/resolve"


export const r_Module: _i_signatures._T_Module = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_schema_tree: _i_out._T_Module.schema_tree = _ea.deprecated_cc($['schema tree'], ($) => _i_r_schema.r_Schema_Tree(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'sibling schemas': _ea.list.literal([
                        ]),
                    }),
                    'values': null,
                }),
            }
        ))
        const p_operations: _i_out._T_Module.operations = _ea.deprecated_cc($['operations'], ($) => r_Operations(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': null,
                }),
            }
        ))
        return ({
            'operations': p_operations,
            'schema tree': p_schema_tree,
        })
    })
})
export const r_Operations: _i_signatures._T_Operations = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Operations.D => {
                        switch ($[0]) {
                            case 'operation': return _ea.ss($, ($) => ['operation', _ea.deprecated_block(() => {
                                return _ea.deprecated_block(() => {
                                    const p_type_parameters: _i_out._T_Operations.D.SG.operation.type_parameters = _ea.deprecated_cc($['type parameters'], ($) => _i_r_schema.r_Type_Parameters(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': null,
                                                'values': null,
                                            }),
                                        }
                                    ))
                                    const p_context: _i_out._T_Operations.D.SG.operation.context = _ea.deprecated_cc($['context'], ($) => _i_r_schema.r_Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': ({
                                                    'noncircular sibling types': _ea.optional.not_set(),
                                                    'possibly circular dependent sibling types': _ea.optional.not_set(),
                                                }),
                                                'values': ({
                                                    'globals': _ea.optional.not_set(),
                                                    'imports': _ea.optional.not_set(),
                                                    'type parameters': p_type_parameters,
                                                }),
                                            }),
                                        }
                                    ))
                                    const p_parameters: _i_out._T_Operations.D.SG.operation.parameters = _ea.deprecated_cc($['parameters'], ($) => _ea.deprecated_block(() => {
                                        return _i_generic.resolve_dictionary(
                                            $,
                                            {
                                                'location 2 string': l2s,
                                                'map': ($, $p) => _ea.deprecated_block(() => {
                                                    return _ea.deprecated_cc($['value'], ($) => _i_r_schema.r_Type_Node(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'parameters': ({
                                                                'lookups': ({
                                                                    'noncircular sibling types': _ea.optional.not_set(),
                                                                    'possibly circular dependent sibling types': _ea.optional.not_set(),
                                                                }),
                                                                'values': ({
                                                                    'globals': _ea.optional.not_set(),
                                                                    'imports': _ea.optional.not_set(),
                                                                    'type parameters': p_type_parameters,
                                                                }),
                                                            }),
                                                        }
                                                    ))
                                                }),
                                            }
                                        )
                                    }))
                                    const p_result: _i_out._T_Operations.D.SG.operation.result = _ea.deprecated_cc($['result'], ($) => _i_r_schema.r_Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': ({
                                                    'noncircular sibling types': _ea.optional.not_set(),
                                                    'possibly circular dependent sibling types': _ea.optional.not_set(),
                                                }),
                                                'values': ({
                                                    'globals': _ea.optional.not_set(),
                                                    'imports': _ea.optional.not_set(),
                                                    'type parameters': p_type_parameters,
                                                }),
                                            }),
                                        }
                                    ))
                                    return ({
                                        'context': p_context,
                                        'parameters': p_parameters,
                                        'result': p_result,
                                        'type parameters': p_type_parameters,
                                    })
                                })
                            })])
                            case 'set': return _ea.ss($, ($) => ['set', _ea.deprecated_block(() => {
                                return r_Operations(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'lookups': params['lookups'],
                                            'values': params['values'],
                                        }),
                                    }
                                )
                            })])
                            default: return _ea.au($[0])
                        }
                    }))
                }),
            }
        )
    })
})
