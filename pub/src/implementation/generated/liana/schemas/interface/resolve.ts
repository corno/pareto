
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as _pdev from "pareto-core-dev"

import * as t_out from "../../../../../interface/generated/liana/schemas/interface/data/resolved"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/interface/resolve"

export const Module_Set: t_signatures.Module_Set = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Module: t_signatures.Module = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_imports = _p_cc(
            $['imports'],
            ($) => Imports(
                $,
                ($) => abort(
                    $
                ),
                null,
                null
            )
        )
        
        const prop_types = _p_cc(
            $['types'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'imports': prop_imports,
            'types': prop_types,
        }
    }
)

export const Imports: t_signatures.Imports = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Type_Node: t_signatures.Type_Node = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Type_Reference: t_signatures.Type_Reference = ($, abort, $l, $p) => _p_unreachable_code_path(
)
