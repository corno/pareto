import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'
import * as _pinternals from 'pareto-core-internals'

//data types
import * as d_schema from "../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_parse_result from "../../../../interface/generated/pareto/core/parse_result"

//dependencies
import * as r_pareto_schema from "../../../temp/resolvers/schema"

import * as u_pareto_schema from "../../../generated/pareto/schemas/schema/unmarshall"

import * as parse from "../../../generated/pareto/generic/parse/parse"




type Element_And_Rest<T> = {
    'element': T
    'rest': _pi.List<T>
}

export const temp_pop_first_element = <T>($: _pi.List<T>): _pi.Optional_Value<Element_And_Rest<T>> => {
    const arr = $
    return $.__get_possible_element_at(0).map(
        ($) => ({
            'rest': _p.list.build(($i) => {
                let is_first = true
                arr.__for_each(($) => {
                    if (!is_first) {
                        $i['add element']($)
                    }
                    is_first = false
                })
            }),
            'element': $,
        }),
    )
}

type Error =
    | ['parse error', d_parse_result._T_Parse_Error]
    | ['resolve errorx', null]


export const $: _pi.Deserializer<d_schema.Type, Error> = ($, abort) => {


    const x = parse.parse(
        $,
        {
            'tab size': 4,
        },
        ($) => abort(['parse error', $])
    )

    const resolved_schema_schema = r_pareto_schema.Type_Specification(
        u_pareto_schema.Type_Specification(
            x.content, //if this goes wrong, the ast schema for astn and in 'generated' differ. Copy the astn one to generated
            {
                'value deserializers': {
                    'boolean': ($) => $ === "true",
                    'default number': () => 0,
                    'custom numbers': null
                }
            }
        ),
        {
            'location 2 string': ($) => `${$.start.relative.line}:${$.start.relative.column}`,
            'parameters': {
                'lookups': null,
                'values': null,
            }
        }
    )
    const temp_find_schema = (
        $: d_schema.Schema_Tree,
        schema_path: _pi.List<string>,
    ): d_schema.Schema => {
        const st = $
        return temp_pop_first_element(schema_path).transform(
            ($) => {
                const split = $
                return _pinternals.sg(st, ($) => {
                    switch ($[0]) {

                        case 'schema': return _pinternals.ss($, ($) => _pinternals.panic(`(FIXME: make this a reference) the selected tree is a schema, not a set, can't do this step: ${split.element} `))
                        case 'set': return _pinternals.ss($, ($) => $.dictionary.get_possible_entry(split.element).transform(
                            ($) => temp_find_schema($, split.rest),
                            () => _pinternals.panic(`(FIXME: make this a reference) schema not found: ${split.element}`)
                        ))
                        default: return _pinternals.au($[0])
                    }
                })
            },
            () => _pinternals.sg($, ($) => {
                switch ($[0]) {
                    case 'schema': return _pinternals.ss($, ($) => $)
                    case 'set': return _pinternals.ss($, ($) => _pinternals.panic(`(FIXME: make this a reference) the selected tree is a set, not a schema`))
                    default: return _pinternals.au($[0])
                }
            })
        )
    }
    const schema = temp_find_schema(resolved_schema_schema.schema, resolved_schema_schema['schema path'])

    const type = schema.types.dictionary.get_possible_entry(resolved_schema_schema.type).transform(
        ($) => $,
        () => {
            schema.types.dictionary.map(($, key) => {
                _pdev.log_debug_message(`available type: ${key}`, () => { })
            })
            _pinternals.panic(`(FIXME: make this a reference) root type ${resolved_schema_schema.type} not found`)
        }
    )
    
    return type
}