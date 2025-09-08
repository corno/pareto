import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_r_schema from "../schema/marshall"
import * as _i_signatures from "../../../interface/schemas/module/marshall"


export const Module: _i_signatures._T_Module = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'operations': _pa.cc($['operations'], ($) => Operations(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'schema tree': _pa.cc($['schema tree'], ($) => _i_r_schema.Schema_Tree(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Operations: _i_signatures._T_Operations = ($, $p) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'operation': return _pa.ss($, ($) => ({
            'state': "operation",
            'value': ['verbose group', _pa.dictionary_literal({
                'context': _pa.cc($['context'], ($) => _i_r_schema.Type_Node(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'parameters': _pa.cc($['parameters'], ($) => ['dictionary', $.map(($) => _i_r_schema.Type_Node(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
                'result': _pa.cc($['result'], ($) => _i_r_schema.Type_Node(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'type parameters': _pa.cc($['type parameters'], ($) => _i_r_schema.Type_Parameters(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'set': return _pa.ss($, ($) => ({
            'state': "set",
            'value': Operations(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})])]
