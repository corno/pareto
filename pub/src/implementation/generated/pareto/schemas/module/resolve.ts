    import * as _p from 'pareto-core-refiner'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_generic from "pareto-core-internals/dist/algorithm_types/refiner/resolve"
    import * as _i_out from "../../../../../interface/generated/pareto/schemas/module/data_types/source"
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/module/data_types/resolve"
    import * as _i_r_schema from "../schema/resolve"
    
    
    export const r_Operations: _i_signatures._T_Operations = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Operations.D => {
                            switch ($[0]) {
                                case 'operation': return _p.ss($, ($) => ['operation', _p.deprecated_block(() => {
                                    return _p.deprecated_block(() => {
                                        const p_type_parameters: _i_out._T_Operations.D.SG.operation.type_parameters = _p.deprecated_cc($['type parameters'], ($) => _i_r_schema.r_Type_Parameters(
                                            $,
                                            {
                                                'location 2 string': l2s,
                                                'parameters': ({
                                                    'values': null,
                                                    'lookups': null,
                                                }),
                                            }
                                        ))
                                        const p_context: _i_out._T_Operations.D.SG.operation.context = _p.deprecated_cc($['context'], ($) => _i_r_schema.r_Type_Node(
                                            $,
                                            {
                                                'location 2 string': l2s,
                                                'parameters': ({
                                                    'values': ({
                                                        'globals': _p.optional.not_set(),
                                                        'type parameters': p_type_parameters,
                                                        'imports': _p.optional.not_set(),
                                                    }),
                                                    'lookups': ({
                                                        'noncircular sibling types': _p.optional.not_set(),
                                                        'possibly circular dependent sibling types': _p.optional.not_set(),
                                                    }),
                                                }),
                                            }
                                        ))
                                        const p_parameters: _i_out._T_Operations.D.SG.operation.parameters = _p.deprecated_cc($['parameters'], ($) => _p.deprecated_block(() => {
                                            return _i_generic.resolve_dictionary(
                                                $,
                                                {
                                                    'map': ($, $p) => _p.deprecated_block(() => {
                                                        return _p.deprecated_cc($['value'], ($) => _i_r_schema.r_Type_Node(
                                                            $,
                                                            {
                                                                'location 2 string': l2s,
                                                                'parameters': ({
                                                                    'values': ({
                                                                        'globals': _p.optional.not_set(),
                                                                        'type parameters': p_type_parameters,
                                                                        'imports': _p.optional.not_set(),
                                                                    }),
                                                                    'lookups': ({
                                                                        'noncircular sibling types': _p.optional.not_set(),
                                                                        'possibly circular dependent sibling types': _p.optional.not_set(),
                                                                    }),
                                                                }),
                                                            }
                                                        ))
                                                    }),
                                                    'location 2 string': l2s,
                                                }
                                            )
                                        }))
                                        const p_result: _i_out._T_Operations.D.SG.operation.result = _p.deprecated_cc($['result'], ($) => _i_r_schema.r_Type_Node(
                                            $,
                                            {
                                                'location 2 string': l2s,
                                                'parameters': ({
                                                    'values': ({
                                                        'globals': _p.optional.not_set(),
                                                        'type parameters': p_type_parameters,
                                                        'imports': _p.optional.not_set(),
                                                    }),
                                                    'lookups': ({
                                                        'noncircular sibling types': _p.optional.not_set(),
                                                        'possibly circular dependent sibling types': _p.optional.not_set(),
                                                    }),
                                                }),
                                            }
                                        ))
                                        return ({
                                            'type parameters': p_type_parameters,
                                            'context': p_context,
                                            'parameters': p_parameters,
                                            'result': p_result,
                                        })
                                    })
                                })])
                                case 'set': return _p.ss($, ($) => ['set', _p.deprecated_block(() => {
                                    return r_Operations(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'values': params['values'],
                                                'lookups': params['lookups'],
                                            }),
                                        }
                                    )
                                })])
                                default: return _p.au($[0])
                            }
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        })
    })
    export const r_Module: _i_signatures._T_Module = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            const p_schema_tree: _i_out._T_Module.schema_tree = _p.deprecated_cc($['schema tree'], ($) => _i_r_schema.r_Schema_Tree(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': ({
                        'values': null,
                        'lookups': ({
                            'sibling schemas': _p.list.literal([
                            ]),
                        }),
                    }),
                }
            ))
            const p_operations: _i_out._T_Module.operations = _p.deprecated_cc($['operations'], ($) => r_Operations(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': ({
                        'values': null,
                        'lookups': null,
                    }),
                }
            ))
            return ({
                'schema tree': p_schema_tree,
                'operations': p_operations,
            })
        })
    })
