
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_out from "../../../../../interface/generated/liana/schemas/implementation/data/resolved"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/resolve"

import * as t_externalinterface from "../interface/resolve"

export const Module_Set: t_signatures.Module_Set = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Module: t_signatures.Module = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_specials = _p_cc(
            $['specials'],
            ($) => _p.group.resolve(
                () => {
                    
                    const prop_abort = _p_cc(
                        $['abort'],
                        ($) => $
                    )
                    
                    const prop_change_context = _p_cc(
                        $['change context'],
                        ($) => $
                    )
                    
                    const prop_implement_me = _p_cc(
                        $['implement me'],
                        ($) => $
                    )
                    
                    const prop_iterate = _p_cc(
                        $['iterate'],
                        ($) => $
                    )
                    
                    const prop_unreachable_code_path = _p_cc(
                        $['unreachable code path'],
                        ($) => $
                    )
                    return {
                        'abort': prop_abort,
                        'change context': prop_change_context,
                        'implement me': prop_implement_me,
                        'iterate': prop_iterate,
                        'unreachable code path': prop_unreachable_code_path,
                    }
                }
            )
        )
        
        const prop_type_imports = _p_cc(
            $['type imports'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_variable_imports = _p_cc(
            $['variable imports'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_algorithms = _p_cc(
            $['algorithms'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'type': prop_type,
            'specials': prop_specials,
            'type imports': prop_type_imports,
            'variable imports': prop_variable_imports,
            'algorithms': prop_algorithms,
        }
    }
)

export const Temp_Type_Node_Reference: t_signatures.Temp_Type_Node_Reference = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p.group.resolve(
                () => {
                    
                    const prop_import = _p_cc(
                        $['import'],
                        ($) => $
                    )
                    
                    const prop_type = _p_cc(
                        $['type'],
                        ($) => $
                    )
                    return {
                        'import': prop_import,
                        'type': prop_type,
                    }
                }
            )
        )
        
        const prop_sub_selection = _p_cc(
            $['sub selection'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'type': prop_type,
            'sub selection': prop_sub_selection,
        }
    }
)

export const Expression: t_signatures.Expression = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Selection: t_signatures.Selection = ($, abort, $l, $p) => _p_unreachable_code_path(
)
