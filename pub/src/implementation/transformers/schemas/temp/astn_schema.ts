import * as _pdev from 'pareto-core-dev'
import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import {
    wrap_dictionary,
    wrap_state_group,
    wrap_reference,
} from 'pareto-core-transformer/dist/deprecated_shorthands_for_unresolved'

import { $$ as op_flatten_dictionaries } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"

import * as d_in from "../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "../../../../interface/generated/pareto/schemas/astn_schema/data_types/target"

export const Schema: _pi.Transformer<d_in.Schema, d_out.Schema<_pi.Deprecated_Source_Location>> = (
    $
) => {
    return {
        'globals': Globals($.globals),
        'imports': Imports($.imports),
        'types': wrap_dictionary($.types.dictionary.map(($) => Type($))),
    }
}

export const Globals: _pi.Transformer<d_in.Globals, d_out.Globals<_pi.Deprecated_Source_Location>> = (
    $
) => {
    return {
        //FIXME!! merge the number types with the text types in here
        'text types': wrap_dictionary(op_flatten_dictionaries(
            _pt.dictionary_literal({
                "t": $['text types'].map(($) => {
                    return Text_Type($)
                }),
                "n": $['number types'].map(($) => {
                    return {
                        'type': wrap_state_group(['single line', null])
                    }
                })
            }),
            {
                'separator': "",
            },
            () => _pt.unreachable_code_path(),
        )),
    }
}

export const Imports: _pi.Transformer<d_in.Imports, d_out.Imports<_pi.Deprecated_Source_Location>> = (
    $
) => {
    return wrap_dictionary($.map(($) => ({
        'schema': null,
        'schema set child': wrap_reference($['schema set child'].key)
    })))
}

export const Type: _pi.Transformer<d_in.Type, d_out.Type<_pi.Deprecated_Source_Location>> = (
    $
) => {
    return {
        'node': Type_Node($.node)
    }
}

export const Type_Node: _pi.Transformer<d_in.Type_Node, d_out.Type_Node<_pi.Deprecated_Source_Location>> = (
    $
) => {
    return wrap_state_group(_pt.cc($, ($): d_out.Type_Node.SG<_pi.Deprecated_Source_Location> => {
        switch ($[0]) {
            case 'number': return _pt.ss($, ($): d_out.Type_Node.SG<_pi.Deprecated_Source_Location> => ['text', wrap_state_group(_pt.cc($, ($): d_out.Type_Node.SG.text.SG<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'global': return _pt.ss($, ($) => ['global', wrap_reference("n" + $.key)])
                    case 'local': return _pt.ss($, ($) => ['local', {
                        'type': wrap_state_group(['single line', null])
                    }])
                    default: return _pt.au($[0])
                }
            }))]) //FIXME
            case 'boolean': return _pt.ss($, ($) => ['text', wrap_state_group<d_out.Type_Node.SG.text.SG<_pi.Deprecated_Source_Location>>(['local', {
                'type': wrap_state_group(['single line', null])
            }])])
            case 'list': return _pt.ss($, ($) => ['list', {
                'node': Type_Node($.node)
            }])
            case 'nothing': return _pt.ss($, ($) => ['nothing', null])
            case 'reference': return _pt.ss($, ($) => ['reference', {
                'type': wrap_state_group(_pt.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'derived': return _pt.ss($, ($) => ['derived', null])
                        case 'selected': return _pt.ss($, ($) => ['selected', null])
                        default: return _pt.au($[0])
                    }
                }))
            }])
            case 'component': return _pt.ss($, ($) => ['component', wrap_state_group(_pt.cc($, ($): d_out.Type_Node.SG.component.SG<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'external': return _pt.ss($, ($) => ['external', {
                        'import': wrap_reference($.import.key),
                        'type': wrap_reference($.type.key)
                    }])
                    case 'internal': return _pt.ss($, ($) => ['internal', wrap_reference($.key)])
                    case 'internal cyclic': return _pt.ss($, ($) => ['internal cyclic', wrap_reference($.key)])
                    default: return _pt.au($[0])
                }
            }))])
            case 'dictionary': return _pt.ss($, ($) => ['dictionary', {
                'ordered': $.ordered,
                'node': Type_Node($.node)
            }])
            case 'group': return _pt.ss($, ($) => ['group', wrap_dictionary($.dictionary.map(($) => Type_Node($.node)))])
            case 'optional': return _pt.ss($, ($) => ['optional', Type_Node($)])
            case 'state group': return _pt.ss($, ($) => ['state group', wrap_dictionary($.map(($) => Type_Node($.node)))])
            case 'text': return _pt.ss($, ($) => ['text', wrap_state_group(_pt.cc($, ($): d_out.Type_Node.SG.text.SG<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'global': return _pt.ss($, ($) => ['global', wrap_reference("t" + $.key)])
                    case 'local': return _pt.ss($, ($) => ['local', Text_Type($)])
                    default: return _pt.au($[0])
                }
            }))])
            // case 'type parameter': return _pt.ss($, ($) => _pdev.implement_me("xx"))
            default: return _pt.au($[0])
        }
    }))
}

export const Text_Type: _pi.Transformer<d_in.Text_Type, d_out.Text_Type<_pi.Deprecated_Source_Location>> = (
    $
) => {
    return {
        'type': wrap_state_group(_pt.cc($.type, ($) => {
            switch ($[0]) {
                case 'multi line': return _pt.ss($, ($) => ['multi line', null])
                case 'single line': return _pt.ss($, ($) => ['single line', null])
                default: return _pt.au($[0])
            }
        }))
    }
}