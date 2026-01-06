import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports,
        'constrained': boolean
    }
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return m.module(
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "signatures": import_.ancestor(5, "interface", _p.list.nested_literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["serialize"])
                    ]), {}),
                    "serialize": import_.ancestor(2, "generic", _p.list.nested_literal([
                        _p.list.literal(["serialize"]),
                    ]), {}),
                    "marshall": import_.sibling("marshall", _p.list.nested_literal([
                    ]), {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["serialize"], {}))
            }),
            {
                'separator': "",
            },
                        () => _p.unreachable_code_path(),
        ),
        {},
        $.types.dictionary.map(($, key) => variable(
            t.component_imported("signatures", key, {}, []),
            i.function_(
                true,
                i.call(
                    s.from_variable_import(" i serialize", "Document", []),
                    i.call(
                        s.from_variable_import(" i marshall", key, []),
                        i.select_from_context([]),
                        {
                            'value serializers': i.select_from_parameter("value serializers", []),
                        }
                    )
                )
            ),

        )),
    )
}
