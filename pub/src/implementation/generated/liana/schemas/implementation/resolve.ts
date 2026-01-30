
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as _pdev from "pareto-core-dev"

import * as t_out from "../../../../../interface/generated/liana/schemas/implementation/data/resolved"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/resolve"

import * as v_external_interface from "../interface/resolve"

export const Module_Set: t_signatures.Module_Set = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Module_Set.D => _p_cc(
        $['l entry'],
        ($) => _p_unreachable_code_path(
        )
    )
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
            ($) => v_external_interface.Imports(
                $,
                ($) => abort(
                    $
                ),
                null,
                null
            )
        )
        
        const prop_variable_imports = _p_cc(
            $['variable imports'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Module.variable_imports.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_tail = _p_cc(
                                $['tail'],
                                ($) => _p_unreachable_code_path(
                                )
                            )
                            
                            const prop_type = _p_cc(
                                $['type'],
                                ($) => _p_unreachable_code_path(
                                )
                            )
                            return {
                                'tail': prop_tail,
                                'type': prop_type,
                            }
                        }
                    )
                )
            )
        )
        
        const prop_algorithms = _p_cc(
            $['algorithms'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Module.algorithms.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
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
                            
                            const prop_expression = _p_cc(
                                $['expression'],
                                ($) => Expression(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    null,
                                    null
                                )
                            )
                            
                            const prop_temp_has_abort = _p_cc(
                                $['temp has abort'],
                                ($) => $
                            )
                            
                            const prop_temp_has_lookups = _p_cc(
                                $['temp has lookups'],
                                ($) => $
                            )
                            
                            const prop_temp_has_parameters = _p_cc(
                                $['temp has parameters'],
                                ($) => $
                            )
                            return {
                                'type': prop_type,
                                'expression': prop_expression,
                                'temp has abort': prop_temp_has_abort,
                                'temp has lookups': prop_temp_has_lookups,
                                'temp has parameters': prop_temp_has_parameters,
                            }
                        }
                    )
                )
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

export const Lookup_Selection: t_signatures.Lookup_Selection = ($, abort, $l, $p) => _p_unreachable_code_path(
)
