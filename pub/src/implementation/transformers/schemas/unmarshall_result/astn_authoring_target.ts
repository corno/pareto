import * as _ea from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as _in from "../../../../interface/to_be_generated/temp_unmashall_result_types"
import * as _out from "astn/dist/interface/generated/pareto/schemas/authoring_target/data_types/target"


export const Node = (
    $: _in.Node,
    $p: null
): _out.Value => {
    return {
        'type': _ea.cc($.type, ($) => {
            switch ($[0]) {
                case 'number': return _ea.ss($, ($): _out.Value._type => ['text', {
                    'value': "FIXME_NUMBER",
                    'delimiter': ['none', null],

                }])
                case 'boolean': return _ea.ss($, ($): _out.Value._type => ['text', {
                    'value': "FIXME_BOOLEAN",
                    'delimiter': ['none', null],

                }])
                case 'nothing': return _ea.ss($, ($) => ['nothing', null])
                case 'text': return _ea.ss($, ($): _out.Value._type => ['text', {
                    'value': "FIXME_TEXT",
                    'delimiter': ['none', null],

                }])
                case 'type parameter': return _edev.implement_me("xx")
                case 'list': return _edev.implement_me("xx")
                case 'reference': return _edev.implement_me("xx")
                case 'component': return _edev.implement_me("xx")
                case 'dictionary': return _edev.implement_me("xx")
                case 'group': return _edev.implement_me("xx")
                case 'optional': return _edev.implement_me("xx")
                case 'state': return _edev.implement_me("xx")
                default: return _ea.au($[0])
            }
        })
    }
}