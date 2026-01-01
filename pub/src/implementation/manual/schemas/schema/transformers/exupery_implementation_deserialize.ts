import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"


import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"

export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports,
    }
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return m.module(
        op_flatten_dictionary(
            _p.dictionary_literal({
                "": _p.dictionary_literal({
                    "signatures": import_.ancestor(5, "interface", _p.list_literal([
                        _p.list_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list_literal(["deserialize"]),
                    ]).flatten(($) => $), {}),
                    "out": import_.ancestor(5, "interface", _p.list_literal([
                        _p.list_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list_literal(["data types", "target"]),
                    ]).flatten(($) => $), {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["deserialize"], {}))
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
                i.implement_me(),
            ),

        )),
    )
}