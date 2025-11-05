import * as _edata from 'exupery-core-data'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"


import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/flatten"
import { $$ as op_flatten_list } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/flatten"
import { $$ as op_append_element } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/append_element"

import { Signature } from "../../../../../interface/algorithms/transformations/schema/exupery_implementation/unmarshall"

export const Schema = (
    $: _in.Schema,
    $p: {
        'path': _et.Array<string>,
        'imports': _in.Imports,
    }
): _out.Module_Set.D<_edata.Source_Location> => {
    return m.module(
        op_flatten_dictionary(
            _ea.dictionary_literal({
                "": _ea.dictionary_literal({
                    "signatures": import_.ancestor(5, "interface", op_flatten_list(_ea.array_literal([
                        _ea.array_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _ea.array_literal(["deserialize"]),
                    ])), {}),
                    "out": import_.ancestor(5, "interface", op_flatten_list(_ea.array_literal([
                        _ea.array_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _ea.array_literal(["data types", "target"]),
                    ])), {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["deserialize"], {}))
            }),
            {
                'separator': "",
            }
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