
import * as _p from "pareto-core/dist/deserializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"

import * as v_r_interface from "../interface/deserialize"

export const Module: t_signatures.Module = ($, abort, $p) => v_unmarshall.Module(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Module_Set: t_signatures.Module_Set = ($, abort, $p) => v_unmarshall.Module_Set(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Temp_Type_Node_Reference: t_signatures.Temp_Type_Node_Reference = ($, abort, $p) => v_unmarshall.Temp_Type_Node_Reference(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Selection: t_signatures.Selection = ($, abort, $p) => v_unmarshall.Selection(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Expression: t_signatures.Expression = ($, abort, $p) => v_unmarshall.Expression(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)
