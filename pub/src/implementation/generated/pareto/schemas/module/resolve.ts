import * as _ea from 'pareto-core-refiner'
import * as _ed from 'pareto-core-dev'

import * as _i_generic from "../../generic/resolve"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/module/data_types/source"
import * as _i_r_schema from "../schema/resolve"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/module/data_types/resolve"


export const r_Module: _i_signatures._T_Module = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.block(() => {
        const p_schema_tree: _i_out._T_Module.schema_tree = _ea.cc($['schema tree'], ($) => _i_r_schema.r_Schema_Tree(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'sibling schemas': _ea.list_literal([
                        ]),
                    }),
                    'values': null,
                }),
            }
        ))
        const p_operations: _i_out._T_Module.operations = _ea.cc($['operations'], ($) => r_Operations(
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
export const r_Operations: _i_signatures._T_Operations = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.block(() => {
                    return _ea.cc($['value'], ($) => _ea.cc($['state group'], ($): _i_out._T_Operations.D => {
                        switch ($[0]) {
                            case 'operation': return _ea.ss($, ($) => ['operation', _ea.block(() => {
                                return _ea.block(() => {
                                    const p_type_parameters: _i_out._T_Operations.D.SG.operation.type_parameters = _ea.cc($['type parameters'], ($) => _i_r_schema.r_Type_Parameters(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': null,
                                                'values': null,
                                            }),
                                        }
                                    ))
                                    const p_context: _i_out._T_Operations.D.SG.operation.context = _ea.cc($['context'], ($) => _i_r_schema.r_Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': ({
                                                    'noncircular sibling types': _ea.not_set(),
                                                    'possibly circular dependent sibling types': _ea.not_set(),
                                                }),
                                                'values': ({
                                                    'globals': _ea.not_set(),
                                                    'imports': _ea.not_set(),
                                                    'type parameters': p_type_parameters,
                                                }),
                                            }),
                                        }
                                    ))
                                    const p_parameters: _i_out._T_Operations.D.SG.operation.parameters = _ea.cc($['parameters'], ($) => _ea.block(() => {
                                        return _i_generic.resolve_dictionary(
                                            $,
                                            {
                                                'location 2 string': l2s,
                                                'map': ($, $p) => _ea.block(() => {
                                                    return _ea.cc($['value'], ($) => _i_r_schema.r_Type_Node(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'parameters': ({
                                                                'lookups': ({
                                                                    'noncircular sibling types': _ea.not_set(),
                                                                    'possibly circular dependent sibling types': _ea.not_set(),
                                                                }),
                                                                'values': ({
                                                                    'globals': _ea.not_set(),
                                                                    'imports': _ea.not_set(),
                                                                    'type parameters': p_type_parameters,
                                                                }),
                                                            }),
                                                        }
                                                    ))
                                                }),
                                            }
                                        )
                                    }))
                                    const p_result: _i_out._T_Operations.D.SG.operation.result = _ea.cc($['result'], ($) => _i_r_schema.r_Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': ({
                                                    'noncircular sibling types': _ea.not_set(),
                                                    'possibly circular dependent sibling types': _ea.not_set(),
                                                }),
                                                'values': ({
                                                    'globals': _ea.not_set(),
                                                    'imports': _ea.not_set(),
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
                            case 'set': return _ea.ss($, ($) => ['set', _ea.block(() => {
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
