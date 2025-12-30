import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/to_be_generated/temp_unmashall_result"
import * as d_out from "astn/dist/interface/generated/pareto/schemas/authoring_target/data_types/target"


export const Node = (
    $: d_in.Node,
    $p: null
): d_out.Value => {
    return {
        'type': _pt.cc($.type, ($) => {
            switch ($[0]) {
                case 'number': return _pt.ss($, ($): d_out.Value._type => ['text', {
                    'value': "FIXME_NUMBER",
                    'delimiter': ['none', null],

                }])
                case 'boolean': return _pt.ss($, ($): d_out.Value._type => ['text', {
                    'value': "FIXME_BOOLEAN",
                    'delimiter': ['none', null],

                }])
                case 'nothing': return _pt.ss($, ($) => ['nothing', null])
                case 'text': return _pt.ss($, ($): d_out.Value._type => ['text', {
                    'value': "FIXME_TEXT",
                    'delimiter': ['none', null],

                }])
                case 'type parameter': return _pdev.implement_me("xx")
                case 'list': return _pdev.implement_me("xx")
                case 'reference': return _pdev.implement_me("xx")
                case 'component': return _pdev.implement_me("xx")
                case 'dictionary': return _pdev.implement_me("xx")
                case 'group': return _pdev.implement_me("xx")
                case 'optional': return _pdev.implement_me("xx")
                case 'state': return _pdev.implement_me("xx")
                default: return _pt.au($[0])
            }
        })
    }
}