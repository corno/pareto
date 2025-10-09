import * as pd from 'exupery-core-data'
import * as _edev from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import {
    wrap_dictionary,
    wrap_state_group,
    wrap_reference,
} from 'exupery-core-data/dist/shorthands/unresolved_transformation'

import { $$ as op_flatten_dictionaries } from "pareto-standard-operations/dist/pure/dictionary/flatten"

import * as _in from "../../generated/interface/schemas/schema/data_types/source"
import * as _out from "../../generated/interface/schemas/astn_schema/data_types/target"

export const Schema: _ea.Guaranteed_Transformation_Without_Parameters<_in.Schema, _out.Schema<pd.Source_Location>> = (
    $
) => {
    return {
        'globals': Globals($.globals),
        'imports': Imports($.imports),
        'types': wrap_dictionary($.types.dictionary.map(($) => Type($))),
    }
}

export const Globals: _ea.Guaranteed_Transformation_Without_Parameters<_in.Globals, _out.Globals<pd.Source_Location>> = (
    $
) => {
    return {
        //FIXME!! merge the number types with the text types in here
        'text types': wrap_dictionary(op_flatten_dictionaries(
            _ea.dictionary_literal({
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
            }
        )),
    }
}

export const Imports: _ea.Guaranteed_Transformation_Without_Parameters<_in.Imports, _out.Imports<pd.Source_Location>> = (
    $
) => {
    return wrap_dictionary($.map(($) => ({
        'schema': null,
        'schema set child': wrap_reference($['schema set child'].key)
    })))
}

export const Type: _ea.Guaranteed_Transformation_Without_Parameters<_in.Type, _out.Type<pd.Source_Location>> = (
    $
) => {
    return {
        'node': Type_Node($.node)
    }
}

export const Type_Node: _ea.Guaranteed_Transformation_Without_Parameters<_in.Type_Node, _out.Type_Node<pd.Source_Location>> = (
    $
) => {
    return wrap_state_group(_ea.cc($, ($): _out.Type_Node.SG<pd.Source_Location> => {
        switch ($[0]) {
            case 'number': return _ea.ss($, ($): _out.Type_Node.SG<pd.Source_Location> => ['text', wrap_state_group(_ea.cc($, ($): _out.Type_Node.SG.text.SG<pd.Source_Location> => {
                switch ($[0]) {
                    case 'global': return _ea.ss($, ($) => ['global', wrap_reference("n" + $.key)])
                    case 'local': return _ea.ss($, ($) => ['local', {
                        'type': wrap_state_group(['single line', null])
                    }])
                    default: return _ea.au($[0])
                }
            }))]) //FIXME
            case 'boolean': return _ea.ss($, ($) => ['text', wrap_state_group<_out.Type_Node.SG.text.SG<pd.Source_Location>>(['local', {
                'type': wrap_state_group(['single line', null])
            }])])
            case 'list': return _ea.ss($, ($) => ['list', {
                'node': Type_Node($.node)
            }])
            case 'nothing': return _ea.ss($, ($) => ['nothing', null])
            case 'reference': return _ea.ss($, ($) => ['reference', {
                'type': wrap_state_group(_ea.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'derived': return _ea.ss($, ($) => ['derived', null])
                        case 'selected': return _ea.ss($, ($) => ['selected', null])
                        default: return _ea.au($[0])
                    }
                }))
            }])
            case 'component': return _ea.ss($, ($) => ['component', wrap_state_group(_ea.cc($, ($): _out.Type_Node.SG.component.SG<pd.Source_Location> => {
                switch ($[0]) {
                    case 'external': return _ea.ss($, ($) => ['external', {
                        'import': wrap_reference($.import.key),
                        'type': wrap_reference($.type.key)
                    }])
                    case 'internal': return _ea.ss($, ($) => ['internal', wrap_reference($.key)])
                    case 'internal cyclic': return _ea.ss($, ($) => ['internal cyclic', wrap_reference($.key)])
                    default: return _ea.au($[0])
                }
            }))])
            case 'dictionary': return _ea.ss($, ($) => ['dictionary', {
                'ordered': $.ordered,
                'node': Type_Node($.node)
            }])
            case 'group': return _ea.ss($, ($) => ['group', wrap_dictionary($.map(($) => Type_Node($)))])
            case 'optional': return _ea.ss($, ($) => ['optional', Type_Node($)])
            case 'state group': return _ea.ss($, ($) => ['state group', wrap_dictionary($.map(($) => Type_Node($)))])
            case 'text': return _ea.ss($, ($) => ['text', wrap_state_group(_ea.cc($, ($): _out.Type_Node.SG.text.SG<pd.Source_Location> => {
                switch ($[0]) {
                    case 'global': return _ea.ss($, ($) => ['global', wrap_reference("t" + $.key)])
                    case 'local': return _ea.ss($, ($) => ['local', Text_Type($)])
                    default: return _ea.au($[0])
                }
            }))])
            // case 'type parameter': return _ea.ss($, ($) => _edev.implement_me())
            default: return _ea.au($[0])
        }
    }))
}

export const Text_Type: _ea.Guaranteed_Transformation_Without_Parameters<_in.Text_Type, _out.Text_Type<pd.Source_Location>> = (
    $
) => {
    return {
        'type': wrap_state_group(_ea.cc($.type, ($) => {
            switch ($[0]) {
                case 'multi line': return _ea.ss($, ($) => ['multi line', null])
                case 'single line': return _ea.ss($, ($) => ['single line', null])
                default: return _ea.au($[0])
            }
        }))
    }
}