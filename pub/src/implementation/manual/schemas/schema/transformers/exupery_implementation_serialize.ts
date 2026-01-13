import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/source"

import * as sh from "exupery/dist/shorthands/implementation"
import * as sh_i from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports,
        'constrained': boolean
    }
): d_out.Module_Set.D => {
    return sh.m.module(
        'serializer',
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "signatures": sh_i.import_.ancestor(5, "interface", _p.list.nested_literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["serialize"])
                    ])),
                    "serialize": sh_i.import_.ancestor(2, "generic", _p.list.nested_literal([
                        _p.list.literal(["serialize"]),
                    ])),
                    "marshall": sh_i.import_.sibling("marshall", _p.list.nested_literal([
                    ])),
                }),
                "r ": $p.imports.__d_map(($, key) => sh_i.import_.ancestor(1, $['schema set child'].key, ["serialize"]))
            }),
            {
                'separator': "",
            },
            () => _p.unreachable_code_path(),
        ),
        {},
        $.types.dictionary.__d_map(($, key) => sh.algorithm(
            sh.type_reference("signatures", key),
            false,
            false,
            false,
            sh.e.call(
                sh.s.from_variable_import(" i serialize", "Document", []),
                sh.e.call(
                    sh.s.from_variable_import(" i marshall", key, []),
                    sh.e.select_from_context_deprecated([]),
                    false,
                    {
                        'value serializers': sh.e.select_from_parameter_deprecated("value serializers", []),
                    }
                ),
                false,
            )
        )),
    )
}
