
import * as p_ from 'pareto-core/implementation/refiner'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/interface/signatures/unresolved/refiners/list_of_characters.js"

import * as v_deserialize from "astn-core/implementation/refiners/parse_tree/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree.js"

export const Package_Set: t_signatures.Package_Set = ($, abort, $p) => v_unmarshall.Package_Set(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Package: t_signatures.Package = ($, abort, $p) => v_unmarshall.Package(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Imports: t_signatures.Imports = ($, abort, $p) => v_unmarshall.Imports(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Value: t_signatures.Value = ($, abort, $p) => v_unmarshall.Value(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Module_Reference: t_signatures.Module_Reference = ($, abort, $p) => v_unmarshall.Module_Reference(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)
