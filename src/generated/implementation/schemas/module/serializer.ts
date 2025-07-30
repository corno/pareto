import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_r_schema from "../schema/serializer"
import * as _i_signatures from "../../../interface/schemas/module/serializer"


export const Module: _i_signatures._T_Module = ($) => ['verbose group', _pa.dictionary_literal({
    'operations': _pa.cc($['operations'], ($) => Operations(
        $,
        null
    )),
    'schemas': _pa.cc($['schemas'], ($) => _i_r_schema.Schemas(
        $,
        null
    )),
})]
export const Operations: _i_signatures._T_Operations = ($) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'operation': return _pa.ss($, ($) => ({
            'state': `operation`,
            'value': ['verbose group', _pa.dictionary_literal({
                'context': _pa.cc($['context'], ($) => _i_r_schema.Type_Node(
                    $,
                    null
                )),
                'parameters': _pa.cc($['parameters'], ($) => ['dictionary', $.map(($) => _i_r_schema.Type_Node(
                    $,
                    null
                ))]),
                'result': _pa.cc($['result'], ($) => _i_r_schema.Type_Node(
                    $,
                    null
                )),
                'type parameters': _pa.cc($['type parameters'], ($) => _i_r_schema.Type_Parameters(
                    $,
                    null
                )),
            })],
        }))
        case 'set': return _pa.ss($, ($) => ({
            'state': `set`,
            'value': Operations(
                $,
                null
            ),
        }))
        default: return _pa.au($[0])
    }
})])]
