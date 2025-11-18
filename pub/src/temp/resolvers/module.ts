import * as _ea from 'exupery-core-alg'

import * as _i_generic from "../../implementation/generated/pareto/generic/resolve"
import * as _i_signatures from "../../interface/generated/pareto/schemas/module/data_types/resolve"

import * as _i_in from "../../interface/generated/pareto/schemas/module/data_types/target"
import * as _i_out from "../../interface/generated/pareto/schemas/module/data_types/source"
import * as _i_out_schema from "../../interface/generated/pareto/schemas/schema/data_types/source"

import * as _i_r_schema from "./schema"


export const Module: _i_signatures._T_Module = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.block(() => {
        const p_schema_tree: _i_out._T_Module.schema_tree = _ea.cc($['schema tree'], ($) => _i_r_schema.Schema_Tree(
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
        const p_operations: _i_out._T_Module.operations = _ea.cc($['operations'], ($) => Operations(
            $,
            {
                'location 2 string': l2s,
                'parameters': params,
            }
        ))
        return ({
            'schema tree': p_schema_tree,
            'operations': p_operations,
        })
    })
})
export const Operations: _i_signatures._T_Operations = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _i_generic.resolve_dictionary(
        $,
        {
            'location 2 string': l2s,
            'map': ($, $p) => _ea.cc($['value'], ($) => _ea.cc($['state group'], ($): _i_out._T_Operations.D => {
                switch ($[0]) {
                    case 'operation': return _ea.ss($, ($) => ['operation', _ea.block(() => {
                        return _ea.block(() => {
                            const p_type_parameters: _i_out._T_Operations.D.SG.operation.type_parameters = _ea.cc($['type parameters'], ($) => _i_r_schema.Type_Parameters(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': params,
                                }
                            ))
                            const p_context: _i_out._T_Operations.D.SG.operation.context = _ea.cc($['context'], ($) => _i_r_schema.Type_Node(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': ({
                                            'noncircular sibling types': _ea.not_set(),
                                            'possibly circular dependent sibling types': _ea.not_set(),
                                        }),
                                        'values': {
                                            'imports': _ea.not_set(),
                                            'globals': _ea.not_set(),
                                            'type parameters': p_type_parameters,
                                        },
                                    }),
                                }
                            ))
                            const p_parameters: _i_out._T_Operations.D.SG.operation.parameters = _ea.cc($['parameters'], ($) => _i_generic.resolve_dictionary(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'map': ($, $p) => _ea.cc($['value'], ($) => _i_r_schema.Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': ({
                                                    'noncircular sibling types': _ea.not_set(),
                                                    'possibly circular dependent sibling types': _ea.not_set(),
                                                }),
                                                'values': {
                                                    'imports': _ea.not_set(),
                                                    'globals': _ea.not_set(),
                                                    'type parameters': p_type_parameters,
                                                },
                                            }),
                                        }
                                    )),
                                }
                            ))
                            const p_result: _i_out._T_Operations.D.SG.operation.result = _ea.cc($['result'], ($) => _i_r_schema.Type_Node(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': ({
                                            'noncircular sibling types': _ea.not_set(),
                                            'possibly circular dependent sibling types': _ea.not_set(),
                                        }),
                                        'values': {
                                            'imports': _ea.not_set(),
                                            'globals': _ea.not_set(),
                                            'type parameters': p_type_parameters,
                                        },
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
                        return Operations(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': params,
                            }
                        )
                    })])
                    default: return _ea.au($[0])
                }
            })),
        }
    )
})
