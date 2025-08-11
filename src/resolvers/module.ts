import * as pa from 'exupery-core-alg'

import * as _i_generic from "../generated/implementation/generic/resolve"
import * as _i_signatures from "../generated/interface/schemas/module/data_types/resolve"

import * as _i_in from "../generated/interface/schemas/module/data_types/unresolved"
import * as _i_out from "../generated/interface/schemas/module/data_types/resolved"
import * as _i_out_schema from "../generated/interface/schemas/schema/data_types/resolved"

import * as _i_r_schema from "./schema"


export const r_Module: _i_signatures._T_Module = ($, $p) => pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return pa.block(() => {
        const p_schemas: _i_out._T_Module.schemas = pa.cc($['schemas'], ($) => _i_r_schema.r_Schemas(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'sibling schemas': pa.array_literal([
                        ]),
                    }),
                    'values': null,
                }),
            }
        ))
        const p_operations: _i_out._T_Module.operations = pa.cc($['operations'], ($) => r_Operations(
            $,
            {
                'location 2 string': l2s,
                'parameters': params,
            }
        ))
        return ({
            'schemas': p_schemas,
            'operations': p_operations,
        })
    })
})
export const r_Operations: _i_signatures._T_Operations = ($, $p) => pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _i_generic.resolve_dictionary(
        $,
        {
            'location 2 string': l2s,
            'map': ($, $p) => pa.cc($['value'], ($) => pa.cc($['state group'], ($): _i_out._T_Operations.D => {
                switch ($[0]) {
                    case 'operation': return pa.ss($, ($) => ['operation', pa.block(() => {
                        return pa.block(() => {
                            const p_type_parameters: _i_out._T_Operations.D.SG.operation.type_parameters = pa.cc($['type parameters'], ($) => _i_r_schema.r_Type_Parameters(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': params,
                                }
                            ))
                            const p_context: _i_out._T_Operations.D.SG.operation.context = pa.cc($['context'], ($) => _i_r_schema.r_Type_Node(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': ({
                                            'noncircular sibling types': pa.not_set(),
                                            'possibly circular dependent sibling types': pa.not_set(),
                                        }),
                                        'values': {
                                            'imports': pa.not_set(),
                                            'globals': pa.not_set(),
                                            'type parameters': p_type_parameters,
                                        },
                                    }),
                                }
                            ))
                            const p_parameters: _i_out._T_Operations.D.SG.operation.parameters = pa.cc($['parameters'], ($) => _i_generic.resolve_dictionary(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'map': ($, $p) => pa.cc($['value'], ($) => _i_r_schema.r_Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': ({
                                                    'noncircular sibling types': pa.not_set(),
                                                    'possibly circular dependent sibling types': pa.not_set(),
                                                }),
                                                'values': {
                                                    'imports': pa.not_set(),
                                                    'globals': pa.not_set(),
                                                    'type parameters': p_type_parameters,
                                                },
                                            }),
                                        }
                                    )),
                                }
                            ))
                            const p_result: _i_out._T_Operations.D.SG.operation.result = pa.cc($['result'], ($) => _i_r_schema.r_Type_Node(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': ({
                                            'noncircular sibling types': pa.not_set(),
                                            'possibly circular dependent sibling types': pa.not_set(),
                                        }),
                                        'values': {
                                            'imports': pa.not_set(),
                                            'globals': pa.not_set(),
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
                    case 'set': return pa.ss($, ($) => ['set', pa.block(() => {
                        return r_Operations(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': params,
                            }
                        )
                    })])
                    default: return pa.au($[0])
                }
            })),
        }
    )
})
