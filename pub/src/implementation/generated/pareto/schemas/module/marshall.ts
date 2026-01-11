    import * as _p from 'pareto-core-transformer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/module/marshall"
    import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
    import * as _i_r_schema from "../schema/marshall"
    
    
    export const Operations: _i_signatures._T_Operations = ($, $p) => ['dictionary', $.__d_map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'operation': return _p.ss($, ($) => ({
                'state': "operation",
                'value': ['verbose group', _p.dictionary.literal({
                    'type parameters': _p.deprecated_cc($['type parameters'], ($) => _i_r_schema.Type_Parameters(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'context': _p.deprecated_cc($['context'], ($) => _i_r_schema.Type_Node(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'parameters': _p.deprecated_cc($['parameters'], ($) => ['dictionary', $.__d_map(($) => _i_r_schema.Type_Node(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    ))]),
                    'result': _p.deprecated_cc($['result'], ($) => _i_r_schema.Type_Node(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'set': return _p.ss($, ($) => ({
                'state': "set",
                'value': Operations(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            default: return _p.au($[0])
        }
    })])]
    export const Module: _i_signatures._T_Module = ($, $p) => ['verbose group', _p.dictionary.literal({
        'schema tree': _p.deprecated_cc($['schema tree'], ($) => _i_r_schema.Schema_Tree(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'operations': _p.deprecated_cc($['operations'], ($) => Operations(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
