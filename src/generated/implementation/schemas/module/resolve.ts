import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../../generic/resolve"
import * as _i_out from "../../../interface/schemas/module/resolved"
import * as _i_r_schema from "../schema/resolve"
import * as _i_signatures from "../../../interface/schemas/module/resolve"


export const r_Module: _i_signatures._T_Module<_i_generic._T_Location_Info> = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_schemas: _i_out._T_Module.schemas = _pa.cc($['schemas'], ($) => _i_r_schema.r_Schemas(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'sibling schemas': _pa.array_literal([
                        ]),
                    }),
                    'values': null,
                }),
            }
        ))
        const p_operations: _i_out._T_Module.operations = _pa.cc($['operations'], ($) => r_Operations(
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
            'schemas': p_schemas,
        })
    })
})
export const r_Operations: _i_signatures._T_Operations<_i_generic._T_Location_Info> = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => _pa.cc($['state group'], ($): _i_out._T_Operations.D => {
                        switch ($[0]) {
                            case 'operation': return _pa.ss($, ($) => ['operation', _pa.block(() => {
                                return _pa.block(() => {
                                    const p_type_parameters: _i_out._T_Operations.D.SG.operation.type_parameters = _pa.cc($['type parameters'], ($) => _i_r_schema.r_Type_Parameters(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': null,
                                                'values': null,
                                            }),
                                        }
                                    ))
                                    const p_context: _i_out._T_Operations.D.SG.operation.context = _pa.cc($['context'], ($) => _i_r_schema.r_Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': ({
                                                    'noncircular sibling types': _pa.not_set(),
                                                    'possibly circular dependent sibling types': _pa.not_set(),
                                                }),
                                                'values': ({
                                                    'globals': _pa.not_set(),
                                                    'imports': _pa.not_set(),
                                                    'type parameters': p_type_parameters,
                                                }),
                                            }),
                                        }
                                    ))
                                    const p_parameters: _i_out._T_Operations.D.SG.operation.parameters = _pa.cc($['parameters'], ($) => _pa.block(() => {
                                        return _i_generic.resolve_dictionary(
                                            $,
                                            {
                                                'location 2 string': l2s,
                                                'map': ($, $p) => _pa.block(() => {
                                                    return _pa.cc($['value'], ($) => _i_r_schema.r_Type_Node(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'parameters': ({
                                                                'lookups': ({
                                                                    'noncircular sibling types': _pa.not_set(),
                                                                    'possibly circular dependent sibling types': _pa.not_set(),
                                                                }),
                                                                'values': ({
                                                                    'globals': _pa.not_set(),
                                                                    'imports': _pa.not_set(),
                                                                    'type parameters': p_type_parameters,
                                                                }),
                                                            }),
                                                        }
                                                    ))
                                                }),
                                            }
                                        )
                                    }))
                                    const p_result: _i_out._T_Operations.D.SG.operation.result = _pa.cc($['result'], ($) => _i_r_schema.r_Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': ({
                                                    'noncircular sibling types': _pa.not_set(),
                                                    'possibly circular dependent sibling types': _pa.not_set(),
                                                }),
                                                'values': ({
                                                    'globals': _pa.not_set(),
                                                    'imports': _pa.not_set(),
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
                            case 'set': return _pa.ss($, ($) => ['set', _pa.block(() => {
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
                            default: return _pa.au($[0])
                        }
                    }))
                }),
            }
        )
    })
})
