
import * as p_ from 'pareto-core/dist/implementation/refiner'

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import * as _p_sl from 'pareto-core/dist/implementation/refiner/specials/lookup'

import _p_unreachable_code_path from 'pareto-core/dist/implementation/transformer/specials/unreachable_code_path'

import p_variables from 'pareto-core/dist/implementation/refiner/specials/variables'



import * as t_out from "../../../../../../../interface/generated/liana/schemas/implementation/data/resolved"

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/signatures/resolved/refiners/unresolved"

import * as v_external_interface from "../../../interface/resolved/refiners/unresolved"

export const Package_Set: t_signatures.Package_Set = ($, abort, $l, $p) => p_.from.dictionary(
    $['l dictionary'],
).resolve(
    ($, id, $a, $c): t_out.Package_Set.D => p_change_context(
        $['l entry'],
        ($) => p_variables(
            () => {
                
                const var_location = $['l location']
                return p_decide_state(
                    $['l state'],
                    ($): t_out.Package_Set.D => {
                        switch ($[0]) {
                            case 'package':
                                return p_.ss(
                                    $,
                                    ($) => ['package', Package(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        p_.literal.nothing(),
                                        p_.literal.nothing(),
                                    )],
                                )
                            case 'set':
                                return p_.ss(
                                    $,
                                    ($) => ['set', Package_Set(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        p_.literal.nothing(),
                                        p_.literal.nothing(),
                                    )],
                                )
                            default:
                                return p_.au(
                                    $[0],
                                )
                        }
                    },
                )
            },
        ),
    ),
)

export const Package: t_signatures.Package = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {
        
        const prop_specials = p_change_context(
            $['specials'],
            ($) => p_.literal.group_resolve(
                () => {
                    
                    const prop_abort = p_change_context(
                        $['abort'],
                        ($) => $,
                    )
                    
                    const prop_change_context = p_change_context(
                        $['change context'],
                        ($) => $,
                    )
                    
                    const prop_implement_me = p_change_context(
                        $['implement me'],
                        ($) => $,
                    )
                    
                    const prop_iterate = p_change_context(
                        $['iterate'],
                        ($) => $,
                    )
                    
                    const prop_lookups = p_change_context(
                        $['lookups'],
                        ($) => $,
                    )
                    
                    const prop_list_from_text = p_change_context(
                        $['list from text'],
                        ($) => $,
                    )
                    
                    const prop_text_from_list = p_change_context(
                        $['text from list'],
                        ($) => $,
                    )
                    
                    const prop_unreachable_code_path = p_change_context(
                        $['unreachable code path'],
                        ($) => $,
                    )
                    
                    const prop_variables = p_change_context(
                        $['variables'],
                        ($) => $,
                    )
                    return {
                        'abort': prop_abort,
                        'change context': prop_change_context,
                        'implement me': prop_implement_me,
                        'iterate': prop_iterate,
                        'lookups': prop_lookups,
                        'list from text': prop_list_from_text,
                        'text from list': prop_text_from_list,
                        'unreachable code path': prop_unreachable_code_path,
                        'variables': prop_variables,
                    }
                },
            ),
        )
        
        const prop_type_imports = p_change_context(
            $['type imports'],
            ($) => v_external_interface.Imports(
                $,
                ($) => abort(
                    $,
                ),
                p_.literal.nothing(),
                p_.literal.nothing(),
            ),
        )
        
        const prop_variable_imports = p_change_context(
            $['variable imports'],
            ($) => p_.from.dictionary(
                $['l dictionary'],
            ).resolve(
                ($, id, $a, $c): t_out.Package.variable_imports.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {
                            
                            const prop_tail = p_change_context(
                                $['tail'],
                                ($) => p_.from.list(
                                    $['l list'],
                                ).map(
                                    ($) => p_change_context(
                                        $['l item'],
                                        ($) => $,
                                    ),
                                ),
                            )
                            
                            const prop_type = p_change_context(
                                $['type'],
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_location = $['l location']
                                        return p_decide_state(
                                            $['l state'],
                                            ($): t_out.Package.variable_imports.D.type_ => {
                                                switch ($[0]) {
                                                    case 'ancestor':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['ancestor', p_.literal.group_resolve(
                                                                () => {
                                                                    
                                                                    const prop_dependency = p_change_context(
                                                                        $['dependency'],
                                                                        ($) => $,
                                                                    )
                                                                    
                                                                    const prop_number_of_steps = p_change_context(
                                                                        $['number of steps'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'dependency': prop_dependency,
                                                                        'number of steps': prop_number_of_steps,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'external':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['external', $],
                                                        )
                                                    case 'sibling':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['sibling', $],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )
                            return {
                                'tail': prop_tail,
                                'type': prop_type,
                            }
                        },
                    ),
                ),
            ),
        )
        
        const prop_functions = p_change_context(
            $['functions'],
            ($) => p_.from.dictionary(
                $['l dictionary'],
            ).resolve(
                ($, id, $a, $c): t_out.Package.functions.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {
                            
                            const prop_type = p_change_context(
                                $['type'],
                                ($) => p_.literal.group_resolve(
                                    () => {
                                        
                                        const prop_import = p_change_context(
                                            $['import'],
                                            ($) => $,
                                        )
                                        
                                        const prop_type = p_change_context(
                                            $['type'],
                                            ($) => $,
                                        )
                                        return {
                                            'import': prop_import,
                                            'type': prop_type,
                                        }
                                    },
                                ),
                            )
                            
                            const prop_expression = p_change_context(
                                $['expression'],
                                ($) => Assign(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    p_.literal.nothing(),
                                    p_.literal.nothing(),
                                ),
                            )
                            
                            const prop_temp_has_abort = p_change_context(
                                $['temp has abort'],
                                ($) => $,
                            )
                            
                            const prop_temp_has_lookups = p_change_context(
                                $['temp has lookups'],
                                ($) => $,
                            )
                            
                            const prop_temp_has_parameters = p_change_context(
                                $['temp has parameters'],
                                ($) => $,
                            )
                            return {
                                'type': prop_type,
                                'expression': prop_expression,
                                'temp has abort': prop_temp_has_abort,
                                'temp has lookups': prop_temp_has_lookups,
                                'temp has parameters': prop_temp_has_parameters,
                            }
                        },
                    ),
                ),
            ),
        )
        return {
            'specials': prop_specials,
            'type imports': prop_type_imports,
            'variable imports': prop_variable_imports,
            'functions': prop_functions,
        }
    },
)

export const Temp_Value_Type_Specification: t_signatures.Temp_Value_Type_Specification = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {
        
        const prop_type = p_change_context(
            $['type'],
            ($) => p_.literal.group_resolve(
                () => {
                    
                    const prop_import = p_change_context(
                        $['import'],
                        ($) => $,
                    )
                    
                    const prop_type = p_change_context(
                        $['type'],
                        ($) => $,
                    )
                    return {
                        'import': prop_import,
                        'type': prop_type,
                    }
                },
            ),
        )
        
        const prop_sub_selection = p_change_context(
            $['sub selection'],
            ($) => p_.from.list(
                $['l list'],
            ).map(
                ($) => p_change_context(
                    $['l item'],
                    ($) => p_variables(
                        () => {
                            
                            const var_location = $['l location']
                            return p_decide_state(
                                $['l state'],
                                ($): t_out.Temp_Value_Type_Specification.sub_selection.L => {
                                    switch ($[0]) {
                                        case 'dictionary':
                                            return p_.ss(
                                                $,
                                                ($) => ['dictionary', null],
                                            )
                                        case 'group':
                                            return p_.ss(
                                                $,
                                                ($) => ['group', $],
                                            )
                                        case 'list':
                                            return p_.ss(
                                                $,
                                                ($) => ['list', null],
                                            )
                                        case 'optional':
                                            return p_.ss(
                                                $,
                                                ($) => ['optional', null],
                                            )
                                        case 'state':
                                            return p_.ss(
                                                $,
                                                ($) => ['state', $],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )
                        },
                    ),
                ),
            ),
        )
        return {
            'type': prop_type,
            'sub selection': prop_sub_selection,
        }
    },
)

export const Assign: t_signatures.Assign = ($, abort, $l, $p) => p_variables(
    () => {
        
        const var_location = $['l location']
        return p_decide_state(
            $['l state'],
            ($): t_out.Assign => {
                switch ($[0]) {
                    case 'decide':
                        return p_.ss(
                            $,
                            ($) => ['decide', p_.literal.group_resolve(
                                () => {
                                    
                                    const prop_source = p_change_context(
                                        $['source'],
                                        ($) => Select_Value(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            p_.literal.nothing(),
                                            p_.literal.nothing(),
                                        ),
                                    )
                                    
                                    const prop_type = p_change_context(
                                        $['type'],
                                        ($) => p_variables(
                                            () => {
                                                
                                                const var_location = $['l location']
                                                return p_decide_state(
                                                    $['l state'],
                                                    ($): t_out.Assign.decide.type_ => {
                                                        switch ($[0]) {
                                                            case 'boolean':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['boolean', p_.literal.group_resolve(
                                                                        () => {
                                                                            
                                                                            const prop_temp_resulting_node = p_change_context(
                                                                                $['temp resulting node'],
                                                                                ($) => p_.from.optional(
                                                                                    $,
                                                                                ).map(
                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        p_.literal.nothing(),
                                                                                        p_.literal.nothing(),
                                                                                    ),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_if_false = p_change_context(
                                                                                $['if false'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_if_true = p_change_context(
                                                                                $['if true'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            return {
                                                                                'temp resulting node': prop_temp_resulting_node,
                                                                                'if false': prop_if_false,
                                                                                'if true': prop_if_true,
                                                                            }
                                                                        },
                                                                    )],
                                                                )
                                                            case 'optional':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['optional', p_.literal.group_resolve(
                                                                        () => {
                                                                            
                                                                            const prop_temp_resulting_node = p_change_context(
                                                                                $['temp resulting node'],
                                                                                ($) => p_.from.optional(
                                                                                    $,
                                                                                ).map(
                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        p_.literal.nothing(),
                                                                                        p_.literal.nothing(),
                                                                                    ),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_if_not_set = p_change_context(
                                                                                $['if not set'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_if_set = p_change_context(
                                                                                $['if set'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            return {
                                                                                'temp resulting node': prop_temp_resulting_node,
                                                                                'if not set': prop_if_not_set,
                                                                                'if set': prop_if_set,
                                                                            }
                                                                        },
                                                                    )],
                                                                )
                                                            case 'state':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['state', p_.literal.group_resolve(
                                                                        () => {
                                                                            
                                                                            const prop_temp_resulting_node = p_change_context(
                                                                                $['temp resulting node'],
                                                                                ($) => p_.from.optional(
                                                                                    $,
                                                                                ).map(
                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        p_.literal.nothing(),
                                                                                        p_.literal.nothing(),
                                                                                    ),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_type = p_change_context(
                                                                                $['type'],
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_location = $['l location']
                                                                                        return p_decide_state(
                                                                                            $['l state'],
                                                                                            ($): t_out.Assign.decide.type_.state.type_ => {
                                                                                                switch ($[0]) {
                                                                                                    case 'partial':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['partial', p_.literal.group_resolve(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const prop_options = p_change_context(
                                                                                                                        $['options'],
                                                                                                                        ($) => p_.from.dictionary(
                                                                                                                            $['l dictionary'],
                                                                                                                        ).resolve(
                                                                                                                            ($, id, $a, $c): t_out.Assign.decide.type_.state.type_.partial.options.D => p_change_context(
                                                                                                                                $['l entry'],
                                                                                                                                ($) => Assign(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    p_.literal.nothing(),
                                                                                                                                    p_.literal.nothing(),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    )
                                                                                                                    
                                                                                                                    const prop_default = p_change_context(
                                                                                                                        $['default'],
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            p_.literal.nothing(),
                                                                                                                            p_.literal.nothing(),
                                                                                                                        ),
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'options': prop_options,
                                                                                                                        'default': prop_default,
                                                                                                                    }
                                                                                                                },
                                                                                                            )],
                                                                                                        )
                                                                                                    case 'full':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['full', p_.literal.group_resolve(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const prop_options = p_change_context(
                                                                                                                        $['options'],
                                                                                                                        ($) => p_.from.dictionary(
                                                                                                                            $['l dictionary'],
                                                                                                                        ).resolve(
                                                                                                                            ($, id, $a, $c): t_out.Assign.decide.type_.state.type_.full.options.D => p_change_context(
                                                                                                                                $['l entry'],
                                                                                                                                ($) => Assign(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    p_.literal.nothing(),
                                                                                                                                    p_.literal.nothing(),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'options': prop_options,
                                                                                                                    }
                                                                                                                },
                                                                                                            )],
                                                                                                        )
                                                                                                    case 'single':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['single', p_.literal.group_resolve(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const prop_option = p_change_context(
                                                                                                                        $['option'],
                                                                                                                        ($) => $,
                                                                                                                    )
                                                                                                                    
                                                                                                                    const prop_if_true = p_change_context(
                                                                                                                        $['if true'],
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            p_.literal.nothing(),
                                                                                                                            p_.literal.nothing(),
                                                                                                                        ),
                                                                                                                    )
                                                                                                                    
                                                                                                                    const prop_if_false = p_change_context(
                                                                                                                        $['if false'],
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            p_.literal.nothing(),
                                                                                                                            p_.literal.nothing(),
                                                                                                                        ),
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'option': prop_option,
                                                                                                                        'if true': prop_if_true,
                                                                                                                        'if false': prop_if_false,
                                                                                                                    }
                                                                                                                },
                                                                                                            )],
                                                                                                        )
                                                                                                    default:
                                                                                                        return p_.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                    },
                                                                                ),
                                                                            )
                                                                            return {
                                                                                'temp resulting node': prop_temp_resulting_node,
                                                                                'type': prop_type,
                                                                            }
                                                                        },
                                                                    )],
                                                                )
                                                            case 'text':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['text', p_.literal.group_resolve(
                                                                        () => {
                                                                            
                                                                            const prop_temp_resulting_node = p_change_context(
                                                                                $['temp resulting node'],
                                                                                ($) => p_.from.optional(
                                                                                    $,
                                                                                ).map(
                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        p_.literal.nothing(),
                                                                                        p_.literal.nothing(),
                                                                                    ),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_cases = p_change_context(
                                                                                $['cases'],
                                                                                ($) => p_.from.dictionary(
                                                                                    $['l dictionary'],
                                                                                ).resolve(
                                                                                    ($, id, $a, $c): t_out.Assign.decide.type_.text.cases.D => p_change_context(
                                                                                        $['l entry'],
                                                                                        ($) => Assign(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            p_.literal.nothing(),
                                                                                            p_.literal.nothing(),
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_default = p_change_context(
                                                                                $['default'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            return {
                                                                                'temp resulting node': prop_temp_resulting_node,
                                                                                'cases': prop_cases,
                                                                                'default': prop_default,
                                                                            }
                                                                        },
                                                                    )],
                                                                )
                                                            default:
                                                                return p_.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                )
                                            },
                                        ),
                                    )
                                    return {
                                        'source': prop_source,
                                        'type': prop_type,
                                    }
                                },
                            )],
                        )
                    case 'construct':
                        return p_.ss(
                            $,
                            ($) => ['construct', p_variables(
                                () => {
                                    
                                    const var_location = $['l location']
                                    return p_decide_state(
                                        $['l state'],
                                        ($): t_out.Assign.construct => {
                                            switch ($[0]) {
                                                case 'boolean':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['boolean', p_variables(
                                                            () => {
                                                                
                                                                const var_location = $['l location']
                                                                return p_decide_state(
                                                                    $['l state'],
                                                                    ($): t_out.Assign.construct.boolean_ => {
                                                                        switch ($[0]) {
                                                                            case 'literal':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['literal', p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_location = $['l location']
                                                                                            return p_decide_state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Assign.construct.boolean_.literal => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'false':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['false', null],
                                                                                                            )
                                                                                                        case 'true':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['true', null],
                                                                                                            )
                                                                                                        default:
                                                                                                            return p_.au(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            case 'from':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['from', p_.literal.group_resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_selection = p_change_context(
                                                                                                $['selection'],
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    p_.literal.nothing(),
                                                                                                    p_.literal.nothing(),
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_type = p_change_context(
                                                                                                $['type'],
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_location = $['l location']
                                                                                                        return p_decide_state(
                                                                                                            $['l state'],
                                                                                                            ($): t_out.Assign.construct.boolean_.from_.type_ => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'boolean':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['boolean', p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_location = $['l location']
                                                                                                                                    return p_decide_state(
                                                                                                                                        $['l state'],
                                                                                                                                        ($): t_out.Assign.construct.boolean_.from_.type_.boolean_ => {
                                                                                                                                            switch ($[0]) {
                                                                                                                                                case 'not':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['not', null],
                                                                                                                                                    )
                                                                                                                                                case 'copy':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['copy', null],
                                                                                                                                                    )
                                                                                                                                                default:
                                                                                                                                                    return p_.au(
                                                                                                                                                        $[0],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                },
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    case 'dictionary':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['dictionary', p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_location = $['l location']
                                                                                                                                    return p_decide_state(
                                                                                                                                        $['l state'],
                                                                                                                                        ($): t_out.Assign.construct.boolean_.from_.type_.dictionary => {
                                                                                                                                            switch ($[0]) {
                                                                                                                                                case 'is empty':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['is empty', null],
                                                                                                                                                    )
                                                                                                                                                default:
                                                                                                                                                    return p_.au(
                                                                                                                                                        $[0],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                },
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    case 'list':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['list', p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_location = $['l location']
                                                                                                                                    return p_decide_state(
                                                                                                                                        $['l state'],
                                                                                                                                        ($): t_out.Assign.construct.boolean_.from_.type_.list => {
                                                                                                                                            switch ($[0]) {
                                                                                                                                                case 'is empty':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['is empty', null],
                                                                                                                                                    )
                                                                                                                                                default:
                                                                                                                                                    return p_.au(
                                                                                                                                                        $[0],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                },
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return p_.au(
                                                                                                                            $[0],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        )
                                                                                                    },
                                                                                                ),
                                                                                            )
                                                                                            return {
                                                                                                'selection': prop_selection,
                                                                                                'type': prop_type,
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )
                                                            },
                                                        )],
                                                    )
                                                case 'dictionary':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['dictionary', p_variables(
                                                            () => {
                                                                
                                                                const var_location = $['l location']
                                                                return p_decide_state(
                                                                    $['l state'],
                                                                    ($): t_out.Assign.construct.dictionary => {
                                                                        switch ($[0]) {
                                                                            case 'literal':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['literal', p_.from.dictionary(
                                                                                        $['l dictionary'],
                                                                                    ).resolve(
                                                                                        ($, id, $a, $c): t_out.Assign.construct.dictionary.literal.D => p_change_context(
                                                                                            $['l entry'],
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                p_.literal.nothing(),
                                                                                                p_.literal.nothing(),
                                                                                            ),
                                                                                        ),
                                                                                    )],
                                                                                )
                                                                            case 'from':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['from', p_.literal.group_resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_selection = p_change_context(
                                                                                                $['selection'],
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    p_.literal.nothing(),
                                                                                                    p_.literal.nothing(),
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_type = p_change_context(
                                                                                                $['type'],
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_location = $['l location']
                                                                                                        return p_decide_state(
                                                                                                            $['l state'],
                                                                                                            ($): t_out.Assign.construct.dictionary.from_.type_ => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'dictionary':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['dictionary', p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_location = $['l location']
                                                                                                                                    return p_decide_state(
                                                                                                                                        $['l state'],
                                                                                                                                        ($): t_out.Assign.construct.dictionary.from_.type_.dictionary => {
                                                                                                                                            switch ($[0]) {
                                                                                                                                                case 'filter':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['filter', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_assign_entry = p_change_context(
                                                                                                                                                                    $['assign entry'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'assign entry': prop_assign_entry,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                case 'map':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['map', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_assign_entry = p_change_context(
                                                                                                                                                                    $['assign entry'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'assign entry': prop_assign_entry,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                case 'resolve':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['resolve', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_assign_entry = p_change_context(
                                                                                                                                                                    $['assign entry'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                
                                                                                                                                                                const prop_temp_resulting_entry_node = p_change_context(
                                                                                                                                                                    $['temp resulting entry node'],
                                                                                                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'assign entry': prop_assign_entry,
                                                                                                                                                                    'temp resulting entry node': prop_temp_resulting_entry_node,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                default:
                                                                                                                                                    return p_.au(
                                                                                                                                                        $[0],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                },
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    case 'list':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['list', p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_location = $['l location']
                                                                                                                                    return p_decide_state(
                                                                                                                                        $['l state'],
                                                                                                                                        ($): t_out.Assign.construct.dictionary.from_.type_.list => {
                                                                                                                                            switch ($[0]) {
                                                                                                                                                case 'convert':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['convert', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_assign_id = p_change_context(
                                                                                                                                                                    $['assign id'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                
                                                                                                                                                                const prop_assign_entry = p_change_context(
                                                                                                                                                                    $['assign entry'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                
                                                                                                                                                                const prop_abort = p_change_context(
                                                                                                                                                                    $['abort'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'assign id': prop_assign_id,
                                                                                                                                                                    'assign entry': prop_assign_entry,
                                                                                                                                                                    'abort': prop_abort,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                default:
                                                                                                                                                    return p_.au(
                                                                                                                                                        $[0],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                },
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return p_.au(
                                                                                                                            $[0],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        )
                                                                                                    },
                                                                                                ),
                                                                                            )
                                                                                            return {
                                                                                                'selection': prop_selection,
                                                                                                'type': prop_type,
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )
                                                            },
                                                        )],
                                                    )
                                                case 'group':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['group', p_variables(
                                                            () => {
                                                                
                                                                const var_location = $['l location']
                                                                return p_decide_state(
                                                                    $['l state'],
                                                                    ($): t_out.Assign.construct.group => {
                                                                        switch ($[0]) {
                                                                            case 'literal':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['literal', p_.literal.group_resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_properties = p_change_context(
                                                                                                $['properties'],
                                                                                                ($) => p_.from.dictionary(
                                                                                                    $['l dictionary'],
                                                                                                ).resolve(
                                                                                                    ($, id, $a, $c): t_out.Assign.construct.group.literal.properties.D => p_change_context(
                                                                                                        $['l entry'],
                                                                                                        ($) => Assign(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            p_.literal.nothing(),
                                                                                                            p_.literal.nothing(),
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_have_dependencies = p_change_context(
                                                                                                $['have dependencies'],
                                                                                                ($) => $,
                                                                                            )
                                                                                            return {
                                                                                                'properties': prop_properties,
                                                                                                'have dependencies': prop_have_dependencies,
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )
                                                            },
                                                        )],
                                                    )
                                                case 'list':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['list', p_variables(
                                                            () => {
                                                                
                                                                const var_location = $['l location']
                                                                return p_decide_state(
                                                                    $['l state'],
                                                                    ($): t_out.Assign.construct.list => {
                                                                        switch ($[0]) {
                                                                            case 'literal':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['literal', p_.from.list(
                                                                                        $['l list'],
                                                                                    ).map(
                                                                                        ($) => p_change_context(
                                                                                            $['l item'],
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                p_.literal.nothing(),
                                                                                                p_.literal.nothing(),
                                                                                            ),
                                                                                        ),
                                                                                    )],
                                                                                )
                                                                            case 'from':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['from', p_.literal.group_resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_selection = p_change_context(
                                                                                                $['selection'],
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    p_.literal.nothing(),
                                                                                                    p_.literal.nothing(),
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_type = p_change_context(
                                                                                                $['type'],
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_location = $['l location']
                                                                                                        return p_decide_state(
                                                                                                            $['l state'],
                                                                                                            ($): t_out.Assign.construct.list.from_.type_ => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'dictionary':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['dictionary', p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_location = $['l location']
                                                                                                                                    return p_decide_state(
                                                                                                                                        $['l state'],
                                                                                                                                        ($): t_out.Assign.construct.list.from_.type_.dictionary => {
                                                                                                                                            switch ($[0]) {
                                                                                                                                                case 'convert':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['convert', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_assign_entry = p_change_context(
                                                                                                                                                                    $['assign entry'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'assign entry': prop_assign_entry,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                default:
                                                                                                                                                    return p_.au(
                                                                                                                                                        $[0],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                },
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    case 'list':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['list', p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_location = $['l location']
                                                                                                                                    return p_decide_state(
                                                                                                                                        $['l state'],
                                                                                                                                        ($): t_out.Assign.construct.list.from_.type_.list => {
                                                                                                                                            switch ($[0]) {
                                                                                                                                                case 'filter':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['filter', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_assign_item = p_change_context(
                                                                                                                                                                    $['assign item'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'assign item': prop_assign_item,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                case 'map':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['map', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_assign_item = p_change_context(
                                                                                                                                                                    $['assign item'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'assign item': prop_assign_item,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                case 'map with state':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['map with state', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_initialize_state = p_change_context(
                                                                                                                                                                    $['initialize state'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                
                                                                                                                                                                const prop_assign_item = p_change_context(
                                                                                                                                                                    $['assign item'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                
                                                                                                                                                                const prop_update_state = p_change_context(
                                                                                                                                                                    $['update state'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                
                                                                                                                                                                const prop_wrap_up = p_change_context(
                                                                                                                                                                    $['wrap up'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'initialize state': prop_initialize_state,
                                                                                                                                                                    'assign item': prop_assign_item,
                                                                                                                                                                    'update state': prop_update_state,
                                                                                                                                                                    'wrap up': prop_wrap_up,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                case 'reduce':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['reduce', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_initialize_state = p_change_context(
                                                                                                                                                                    $['initialize state'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                
                                                                                                                                                                const prop_assign_item = p_change_context(
                                                                                                                                                                    $['assign item'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'initialize state': prop_initialize_state,
                                                                                                                                                                    'assign item': prop_assign_item,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                case 'reverse':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['reverse', null],
                                                                                                                                                    )
                                                                                                                                                default:
                                                                                                                                                    return p_.au(
                                                                                                                                                        $[0],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                },
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return p_.au(
                                                                                                                            $[0],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        )
                                                                                                    },
                                                                                                ),
                                                                                            )
                                                                                            return {
                                                                                                'selection': prop_selection,
                                                                                                'type': prop_type,
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )
                                                            },
                                                        )],
                                                    )
                                                case 'nothing':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['nothing', null],
                                                    )
                                                case 'number':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['number', p_variables(
                                                            () => {
                                                                
                                                                const var_location = $['l location']
                                                                return p_decide_state(
                                                                    $['l state'],
                                                                    ($): t_out.Assign.construct.number_ => {
                                                                        switch ($[0]) {
                                                                            case 'approximation':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['approximation', p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_location = $['l location']
                                                                                            return p_decide_state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Assign.construct.number_.approximation => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'copy':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['copy', Select_Value(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    p_.literal.nothing(),
                                                                                                                    p_.literal.nothing(),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'literal':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['literal', $],
                                                                                                            )
                                                                                                        default:
                                                                                                            return p_.au(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            case 'integer':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['integer', p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_location = $['l location']
                                                                                            return p_decide_state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Assign.construct.number_.integer => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'copy':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['copy', Select_Value(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    p_.literal.nothing(),
                                                                                                                    p_.literal.nothing(),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'divide':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['divide', p_.literal.group_resolve(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const prop_assign_dividend = p_change_context(
                                                                                                                            $['assign dividend'],
                                                                                                                            ($) => Select_Value(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                p_.literal.nothing(),
                                                                                                                                p_.literal.nothing(),
                                                                                                                            ),
                                                                                                                        )
                                                                                                                        
                                                                                                                        const prop_assign_divisor = p_change_context(
                                                                                                                            $['assign divisor'],
                                                                                                                            ($) => Select_Value(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                p_.literal.nothing(),
                                                                                                                                p_.literal.nothing(),
                                                                                                                            ),
                                                                                                                        )
                                                                                                                        
                                                                                                                        const prop_abort = p_change_context(
                                                                                                                            $['abort'],
                                                                                                                            ($) => Assign(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                p_.literal.nothing(),
                                                                                                                                p_.literal.nothing(),
                                                                                                                            ),
                                                                                                                        )
                                                                                                                        return {
                                                                                                                            'assign dividend': prop_assign_dividend,
                                                                                                                            'assign divisor': prop_assign_divisor,
                                                                                                                            'abort': prop_abort,
                                                                                                                        }
                                                                                                                    },
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'literal':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['literal', $],
                                                                                                            )
                                                                                                        default:
                                                                                                            return p_.au(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            case 'natural':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['natural', p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_location = $['l location']
                                                                                            return p_decide_state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Assign.construct.number_.natural => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'copy':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['copy', Select_Value(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    p_.literal.nothing(),
                                                                                                                    p_.literal.nothing(),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'literal':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['literal', $],
                                                                                                            )
                                                                                                        case 'number of dictionary entries':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['number of dictionary entries', p_.literal.group_resolve(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const prop_dictionary = p_change_context(
                                                                                                                            $['dictionary'],
                                                                                                                            ($) => Select_Value(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                p_.literal.nothing(),
                                                                                                                                p_.literal.nothing(),
                                                                                                                            ),
                                                                                                                        )
                                                                                                                        return {
                                                                                                                            'dictionary': prop_dictionary,
                                                                                                                        }
                                                                                                                    },
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'number of list items':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['number of list items', p_.literal.group_resolve(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const prop_list = p_change_context(
                                                                                                                            $['list'],
                                                                                                                            ($) => Select_Value(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                p_.literal.nothing(),
                                                                                                                                p_.literal.nothing(),
                                                                                                                            ),
                                                                                                                        )
                                                                                                                        return {
                                                                                                                            'list': prop_list,
                                                                                                                        }
                                                                                                                    },
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'source column':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['source column', null],
                                                                                                            )
                                                                                                        case 'source line':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['source line', null],
                                                                                                            )
                                                                                                        default:
                                                                                                            return p_.au(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )
                                                            },
                                                        )],
                                                    )
                                                case 'optional':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['optional', p_variables(
                                                            () => {
                                                                
                                                                const var_location = $['l location']
                                                                return p_decide_state(
                                                                    $['l state'],
                                                                    ($): t_out.Assign.construct.optional => {
                                                                        switch ($[0]) {
                                                                            case 'literal':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['literal', p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_location = $['l location']
                                                                                            return p_decide_state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Assign.construct.optional.literal => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'not set':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['not set', null],
                                                                                                            )
                                                                                                        case 'set':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['set', Assign(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    p_.literal.nothing(),
                                                                                                                    p_.literal.nothing(),
                                                                                                                )],
                                                                                                            )
                                                                                                        default:
                                                                                                            return p_.au(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            case 'from':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['from', p_.literal.group_resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_selection = p_change_context(
                                                                                                $['selection'],
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    p_.literal.nothing(),
                                                                                                    p_.literal.nothing(),
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_type = p_change_context(
                                                                                                $['type'],
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_location = $['l location']
                                                                                                        return p_decide_state(
                                                                                                            $['l state'],
                                                                                                            ($): t_out.Assign.construct.optional.from_.type_ => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'boolean':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['boolean', p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_location = $['l location']
                                                                                                                                    return p_decide_state(
                                                                                                                                        $['l state'],
                                                                                                                                        ($): t_out.Assign.construct.optional.from_.type_.boolean_ => {
                                                                                                                                            switch ($[0]) {
                                                                                                                                                case 'convert':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['convert', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_assign_set = p_change_context(
                                                                                                                                                                    $['assign set'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'assign set': prop_assign_set,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                default:
                                                                                                                                                    return p_.au(
                                                                                                                                                        $[0],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                },
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    case 'optional':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['optional', p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_location = $['l location']
                                                                                                                                    return p_decide_state(
                                                                                                                                        $['l state'],
                                                                                                                                        ($): t_out.Assign.construct.optional.from_.type_.optional => {
                                                                                                                                            switch ($[0]) {
                                                                                                                                                case 'map':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['map', p_.literal.group_resolve(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const prop_assign_set = p_change_context(
                                                                                                                                                                    $['assign set'],
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                        p_.literal.nothing(),
                                                                                                                                                                    ),
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'assign set': prop_assign_set,
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                default:
                                                                                                                                                    return p_.au(
                                                                                                                                                        $[0],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                },
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return p_.au(
                                                                                                                            $[0],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        )
                                                                                                    },
                                                                                                ),
                                                                                            )
                                                                                            return {
                                                                                                'selection': prop_selection,
                                                                                                'type': prop_type,
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )
                                                            },
                                                        )],
                                                    )
                                                case 'state':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['state', p_variables(
                                                            () => {
                                                                
                                                                const var_location = $['l location']
                                                                return p_decide_state(
                                                                    $['l state'],
                                                                    ($): t_out.Assign.construct.state => {
                                                                        switch ($[0]) {
                                                                            case 'literal':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['literal', p_.literal.group_resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_option = p_change_context(
                                                                                                $['option'],
                                                                                                ($) => $,
                                                                                            )
                                                                                            
                                                                                            const prop_assign_option = p_change_context(
                                                                                                $['assign option'],
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    p_.literal.nothing(),
                                                                                                    p_.literal.nothing(),
                                                                                                ),
                                                                                            )
                                                                                            return {
                                                                                                'option': prop_option,
                                                                                                'assign option': prop_assign_option,
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )
                                                            },
                                                        )],
                                                    )
                                                case 'text':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['text', p_variables(
                                                            () => {
                                                                
                                                                const var_location = $['l location']
                                                                return p_decide_state(
                                                                    $['l state'],
                                                                    ($): t_out.Assign.construct.text => {
                                                                        switch ($[0]) {
                                                                            case 'literal':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['literal', p_.literal.group_resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_type = p_change_context(
                                                                                                $['type'],
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_location = $['l location']
                                                                                                        return p_decide_state(
                                                                                                            $['l state'],
                                                                                                            ($): t_out.Assign.construct.text.literal.type_ => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'identifier':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['identifier', null],
                                                                                                                        )
                                                                                                                    case 'freeform':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['freeform', null],
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return p_.au(
                                                                                                                            $[0],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        )
                                                                                                    },
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_value = p_change_context(
                                                                                                $['value'],
                                                                                                ($) => $,
                                                                                            )
                                                                                            return {
                                                                                                'type': prop_type,
                                                                                                'value': prop_value,
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            case 'from':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['from', p_.literal.group_resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_selection = p_change_context(
                                                                                                $['selection'],
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    p_.literal.nothing(),
                                                                                                    p_.literal.nothing(),
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_type = p_change_context(
                                                                                                $['type'],
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_location = $['l location']
                                                                                                        return p_decide_state(
                                                                                                            $['l state'],
                                                                                                            ($): t_out.Assign.construct.text.from_.type_ => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'text':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['text', p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_location = $['l location']
                                                                                                                                    return p_decide_state(
                                                                                                                                        $['l state'],
                                                                                                                                        ($): t_out.Assign.construct.text.from_.type_.text => {
                                                                                                                                            switch ($[0]) {
                                                                                                                                                case 'copy':
                                                                                                                                                    return p_.ss(
                                                                                                                                                        $,
                                                                                                                                                        ($) => ['copy', null],
                                                                                                                                                    )
                                                                                                                                                default:
                                                                                                                                                    return p_.au(
                                                                                                                                                        $[0],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                },
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return p_.au(
                                                                                                                            $[0],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        )
                                                                                                    },
                                                                                                ),
                                                                                            )
                                                                                            return {
                                                                                                'selection': prop_selection,
                                                                                                'type': prop_type,
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                )
                                                                            case 'source document':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['source document', null],
                                                                                )
                                                                            case 'entry id':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['entry id', null],
                                                                                )
                                                                            case 'option name':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['option name', null],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )
                                                            },
                                                        )],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )
                                },
                            )],
                        )
                    case 'select':
                        return p_.ss(
                            $,
                            ($) => ['select', Select_Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                p_.literal.nothing(),
                                p_.literal.nothing(),
                            )],
                        )
                    case 'special':
                        return p_.ss(
                            $,
                            ($) => ['special', p_variables(
                                () => {
                                    
                                    const var_location = $['l location']
                                    return p_decide_state(
                                        $['l state'],
                                        ($): t_out.Assign.special => {
                                            switch ($[0]) {
                                                case 'abort':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['abort', Assign(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            p_.literal.nothing(),
                                                            p_.literal.nothing(),
                                                        )],
                                                    )
                                                case 'assert':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['assert', p_.literal.group_resolve(
                                                            () => {
                                                                
                                                                const prop_tester = p_change_context(
                                                                    $['tester'],
                                                                    ($) => Assign(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        p_.literal.nothing(),
                                                                        p_.literal.nothing(),
                                                                    ),
                                                                )
                                                                
                                                                const prop_normal_flow = p_change_context(
                                                                    $['normal flow'],
                                                                    ($) => Assign(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        p_.literal.nothing(),
                                                                        p_.literal.nothing(),
                                                                    ),
                                                                )
                                                                return {
                                                                    'tester': prop_tester,
                                                                    'normal flow': prop_normal_flow,
                                                                }
                                                            },
                                                        )],
                                                    )
                                                case 'change context':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['change context', p_.literal.group_resolve(
                                                            () => {
                                                                
                                                                const prop_new_context = p_change_context(
                                                                    $['new context'],
                                                                    ($) => Select_Value(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        p_.literal.nothing(),
                                                                        p_.literal.nothing(),
                                                                    ),
                                                                )
                                                                
                                                                const prop_expression = p_change_context(
                                                                    $['expression'],
                                                                    ($) => Assign(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        p_.literal.nothing(),
                                                                        p_.literal.nothing(),
                                                                    ),
                                                                )
                                                                return {
                                                                    'new context': prop_new_context,
                                                                    'expression': prop_expression,
                                                                }
                                                            },
                                                        )],
                                                    )
                                                case 'variables':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['variables', p_.literal.group_resolve(
                                                            () => {
                                                                
                                                                const prop_variables = p_change_context(
                                                                    $['variables'],
                                                                    ($) => p_.from.dictionary(
                                                                        $['l dictionary'],
                                                                    ).resolve(
                                                                        ($, id, $a, $c): t_out.Assign.special.variables.variables.D => p_change_context(
                                                                            $['l entry'],
                                                                            ($) => Assign(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                p_.literal.nothing(),
                                                                                p_.literal.nothing(),
                                                                            ),
                                                                        ),
                                                                    ),
                                                                )
                                                                
                                                                const prop_assign = p_change_context(
                                                                    $['assign'],
                                                                    ($) => Assign(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        p_.literal.nothing(),
                                                                        p_.literal.nothing(),
                                                                    ),
                                                                )
                                                                return {
                                                                    'variables': prop_variables,
                                                                    'assign': prop_assign,
                                                                }
                                                            },
                                                        )],
                                                    )
                                                case 'implement me':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['implement me', $],
                                                    )
                                                case 'iterate':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['iterate', p_.literal.group_resolve(
                                                            () => {
                                                                
                                                                const prop_list = p_change_context(
                                                                    $['list'],
                                                                    ($) => Select_Value(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        p_.literal.nothing(),
                                                                        p_.literal.nothing(),
                                                                    ),
                                                                )
                                                                
                                                                const prop_assign = p_change_context(
                                                                    $['assign'],
                                                                    ($) => Assign(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        p_.literal.nothing(),
                                                                        p_.literal.nothing(),
                                                                    ),
                                                                )
                                                                return {
                                                                    'list': prop_list,
                                                                    'assign': prop_assign,
                                                                }
                                                            },
                                                        )],
                                                    )
                                                case 'unreachable':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['unreachable', p_.literal.group_resolve(
                                                            () => {
                                                                
                                                                const prop_explanation = p_change_context(
                                                                    $['explanation'],
                                                                    ($) => $,
                                                                )
                                                                return {
                                                                    'explanation': prop_explanation,
                                                                }
                                                            },
                                                        )],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )
                                },
                            )],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        )
    },
)

export const Select_Value: t_signatures.Select_Value = ($, abort, $l, $p) => p_variables(
    () => {
        
        const var_location = $['l location']
        return p_decide_state(
            $['l state'],
            ($): t_out.Select_Value => {
                switch ($[0]) {
                    case 'implement me':
                        return p_.ss(
                            $,
                            ($) => ['implement me', $],
                        )
                    case 'regular':
                        return p_.ss(
                            $,
                            ($) => ['regular', p_.literal.group_resolve(
                                () => {
                                    
                                    const prop_start = p_change_context(
                                        $['start'],
                                        ($) => p_variables(
                                            () => {
                                                
                                                const var_location = $['l location']
                                                return p_decide_state(
                                                    $['l state'],
                                                    ($): t_out.Select_Value.regular.start => {
                                                        switch ($[0]) {
                                                            case 'call':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['call', p_.literal.group_resolve(
                                                                        () => {
                                                                            
                                                                            const prop_source = p_change_context(
                                                                                $['source'],
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_location = $['l location']
                                                                                        return p_decide_state(
                                                                                            $['l state'],
                                                                                            ($): t_out.Select_Value.regular.start.call.source => {
                                                                                                switch ($[0]) {
                                                                                                    case 'local':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['local', $],
                                                                                                        )
                                                                                                    case 'imported':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['imported', p_.literal.group_resolve(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const prop_import = p_change_context(
                                                                                                                        $['import'],
                                                                                                                        ($) => $,
                                                                                                                    )
                                                                                                                    
                                                                                                                    const prop_variable = p_change_context(
                                                                                                                        $['variable'],
                                                                                                                        ($) => $,
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'import': prop_import,
                                                                                                                        'variable': prop_variable,
                                                                                                                    }
                                                                                                                },
                                                                                                            )],
                                                                                                        )
                                                                                                    default:
                                                                                                        return p_.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                    },
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_context = p_change_context(
                                                                                $['context'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_abort = p_change_context(
                                                                                $['abort'],
                                                                                ($) => p_.from.optional(
                                                                                    $,
                                                                                ).map(
                                                                                    ($) => Assign(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        p_.literal.nothing(),
                                                                                        p_.literal.nothing(),
                                                                                    ),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_lookups = p_change_context(
                                                                                $['lookups'],
                                                                                ($) => p_.from.optional(
                                                                                    $,
                                                                                ).map(
                                                                                    ($) => p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_location = $['l location']
                                                                                            return p_decide_state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Select_Value.regular.start.call.lookups.O => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'initialize':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['initialize', p_.from.dictionary(
                                                                                                                    $['l dictionary'],
                                                                                                                ).resolve(
                                                                                                                    ($, id, $a, $c): t_out.Select_Value.regular.start.call.lookups.O.initialize.D => p_change_context(
                                                                                                                        $['l entry'],
                                                                                                                        ($) => Select_Lookup(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            p_.literal.nothing(),
                                                                                                                            p_.literal.nothing(),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'pass through':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['pass through', null],
                                                                                                            )
                                                                                                        default:
                                                                                                            return p_.au(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        },
                                                                                    ),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_arguments = p_change_context(
                                                                                $['arguments'],
                                                                                ($) => p_.from.optional(
                                                                                    $,
                                                                                ).map(
                                                                                    ($) => p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_location = $['l location']
                                                                                            return p_decide_state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Select_Value.regular.start.call.arguments_.O => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'initialize':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['initialize', p_.from.dictionary(
                                                                                                                    $['l dictionary'],
                                                                                                                ).resolve(
                                                                                                                    ($, id, $a, $c): t_out.Select_Value.regular.start.call.arguments_.O.initialize.D => p_change_context(
                                                                                                                        $['l entry'],
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            p_.literal.nothing(),
                                                                                                                            p_.literal.nothing(),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'pass through':
                                                                                                            return p_.ss(
                                                                                                                $,
                                                                                                                ($) => ['pass through', null],
                                                                                                            )
                                                                                                        default:
                                                                                                            return p_.au(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        },
                                                                                    ),
                                                                                ),
                                                                            )
                                                                            return {
                                                                                'source': prop_source,
                                                                                'context': prop_context,
                                                                                'abort': prop_abort,
                                                                                'lookups': prop_lookups,
                                                                                'arguments': prop_arguments,
                                                                            }
                                                                        },
                                                                    )],
                                                                )
                                                            case 'context':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['context', null],
                                                                )
                                                            case 'dictionary entry':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['dictionary entry', p_.literal.group_resolve(
                                                                        () => {
                                                                            
                                                                            const prop_dictionary = p_change_context(
                                                                                $['dictionary'],
                                                                                ($) => Select_Value(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_id = p_change_context(
                                                                                $['id'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_no_such_entry_handler = p_change_context(
                                                                                $['no such entry handler'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            return {
                                                                                'dictionary': prop_dictionary,
                                                                                'id': prop_id,
                                                                                'no such entry handler': prop_no_such_entry_handler,
                                                                            }
                                                                        },
                                                                    )],
                                                                )
                                                            case 'list from text':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['list from text', p_.literal.group_resolve(
                                                                        () => {
                                                                            
                                                                            const prop_source = p_change_context(
                                                                                $['source'],
                                                                                ($) => Select_Value(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_assign_item = p_change_context(
                                                                                $['assign item'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            return {
                                                                                'source': prop_source,
                                                                                'assign item': prop_assign_item,
                                                                            }
                                                                        },
                                                                    )],
                                                                )
                                                            case 'lookup entry':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['lookup entry', p_.literal.group_resolve(
                                                                        () => {
                                                                            
                                                                            const prop_lookup = p_change_context(
                                                                                $['lookup'],
                                                                                ($) => Select_Lookup(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_id = p_change_context(
                                                                                $['id'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_type = p_change_context(
                                                                                $['type'],
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_location = $['l location']
                                                                                        return p_decide_state(
                                                                                            $['l state'],
                                                                                            ($): t_out.Select_Value.regular.start.lookup_entry.type_ => {
                                                                                                switch ($[0]) {
                                                                                                    case 'acyclic':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['acyclic', p_.literal.group_resolve(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const prop_abort_handlers = p_change_context(
                                                                                                                        $['abort handlers'],
                                                                                                                        ($) => p_.literal.group_resolve(
                                                                                                                            () => {
                                                                                                                                
                                                                                                                                const prop_no_such_entry = p_change_context(
                                                                                                                                    $['no such entry'],
                                                                                                                                    ($) => Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                    ),
                                                                                                                                )
                                                                                                                                
                                                                                                                                const prop_no_context_lookup = p_change_context(
                                                                                                                                    $['no context lookup'],
                                                                                                                                    ($) => Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                    ),
                                                                                                                                )
                                                                                                                                
                                                                                                                                const prop_cycle_detected = p_change_context(
                                                                                                                                    $['cycle detected'],
                                                                                                                                    ($) => Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                    ),
                                                                                                                                )
                                                                                                                                return {
                                                                                                                                    'no such entry': prop_no_such_entry,
                                                                                                                                    'no context lookup': prop_no_context_lookup,
                                                                                                                                    'cycle detected': prop_cycle_detected,
                                                                                                                                }
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'abort handlers': prop_abort_handlers,
                                                                                                                    }
                                                                                                                },
                                                                                                            )],
                                                                                                        )
                                                                                                    case 'cyclic':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['cyclic', p_.literal.group_resolve(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const prop_abort_handlers = p_change_context(
                                                                                                                        $['abort handlers'],
                                                                                                                        ($) => p_.literal.group_resolve(
                                                                                                                            () => {
                                                                                                                                
                                                                                                                                const prop_no_such_entry = p_change_context(
                                                                                                                                    $['no such entry'],
                                                                                                                                    ($) => Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                    ),
                                                                                                                                )
                                                                                                                                
                                                                                                                                const prop_no_context_lookup = p_change_context(
                                                                                                                                    $['no context lookup'],
                                                                                                                                    ($) => Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                    ),
                                                                                                                                )
                                                                                                                                
                                                                                                                                const prop_accessing_cyclic_sibling_before_it_is_resolved = p_change_context(
                                                                                                                                    $['accessing cyclic sibling before it is resolved'],
                                                                                                                                    ($) => Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                    ),
                                                                                                                                )
                                                                                                                                return {
                                                                                                                                    'no such entry': prop_no_such_entry,
                                                                                                                                    'no context lookup': prop_no_context_lookup,
                                                                                                                                    'accessing cyclic sibling before it is resolved': prop_accessing_cyclic_sibling_before_it_is_resolved,
                                                                                                                                }
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'abort handlers': prop_abort_handlers,
                                                                                                                    }
                                                                                                                },
                                                                                                            )],
                                                                                                        )
                                                                                                    case 'stack':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['stack', p_.literal.group_resolve(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const prop_abort_handlers = p_change_context(
                                                                                                                        $['abort handlers'],
                                                                                                                        ($) => p_.literal.group_resolve(
                                                                                                                            () => {
                                                                                                                                
                                                                                                                                const prop_no_such_entry = p_change_context(
                                                                                                                                    $['no such entry'],
                                                                                                                                    ($) => Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                    ),
                                                                                                                                )
                                                                                                                                
                                                                                                                                const prop_no_context_lookup = p_change_context(
                                                                                                                                    $['no context lookup'],
                                                                                                                                    ($) => Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                    ),
                                                                                                                                )
                                                                                                                                
                                                                                                                                const prop_cycle_detected = p_change_context(
                                                                                                                                    $['cycle detected'],
                                                                                                                                    ($) => Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                        p_.literal.nothing(),
                                                                                                                                    ),
                                                                                                                                )
                                                                                                                                return {
                                                                                                                                    'no such entry': prop_no_such_entry,
                                                                                                                                    'no context lookup': prop_no_context_lookup,
                                                                                                                                    'cycle detected': prop_cycle_detected,
                                                                                                                                }
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'abort handlers': prop_abort_handlers,
                                                                                                                    }
                                                                                                                },
                                                                                                            )],
                                                                                                        )
                                                                                                    default:
                                                                                                        return p_.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                    },
                                                                                ),
                                                                            )
                                                                            return {
                                                                                'lookup': prop_lookup,
                                                                                'id': prop_id,
                                                                                'type': prop_type,
                                                                            }
                                                                        },
                                                                    )],
                                                                )
                                                            case 'lookup entry depth':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['lookup entry depth', p_.literal.group_resolve(
                                                                        () => {
                                                                            
                                                                            const prop_lookup = p_change_context(
                                                                                $['lookup'],
                                                                                ($) => Select_Lookup(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_id = p_change_context(
                                                                                $['id'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_abort_handlers = p_change_context(
                                                                                $['abort handlers'],
                                                                                ($) => p_.literal.group_resolve(
                                                                                    () => {
                                                                                        
                                                                                        const prop_no_such_entry = p_change_context(
                                                                                            $['no such entry'],
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                p_.literal.nothing(),
                                                                                                p_.literal.nothing(),
                                                                                            ),
                                                                                        )
                                                                                        
                                                                                        const prop_no_context_lookup = p_change_context(
                                                                                            $['no context lookup'],
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                p_.literal.nothing(),
                                                                                                p_.literal.nothing(),
                                                                                            ),
                                                                                        )
                                                                                        
                                                                                        const prop_cycle_detected = p_change_context(
                                                                                            $['cycle detected'],
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                p_.literal.nothing(),
                                                                                                p_.literal.nothing(),
                                                                                            ),
                                                                                        )
                                                                                        return {
                                                                                            'no such entry': prop_no_such_entry,
                                                                                            'no context lookup': prop_no_context_lookup,
                                                                                            'cycle detected': prop_cycle_detected,
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )
                                                                            return {
                                                                                'lookup': prop_lookup,
                                                                                'id': prop_id,
                                                                                'abort handlers': prop_abort_handlers,
                                                                            }
                                                                        },
                                                                    )],
                                                                )
                                                            case 'parameter':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['parameter', $],
                                                                )
                                                            case 'parent sibling':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['parent sibling', $],
                                                                )
                                                            case 'sibling':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['sibling', $],
                                                                )
                                                            case 'state':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['state', null],
                                                                )
                                                            case 'text from list':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['text from list', p_.literal.group_resolve(
                                                                        () => {
                                                                            
                                                                            const prop_source = p_change_context(
                                                                                $['source'],
                                                                                ($) => Select_Value(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            
                                                                            const prop_assign_character = p_change_context(
                                                                                $['assign character'],
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    p_.literal.nothing(),
                                                                                    p_.literal.nothing(),
                                                                                ),
                                                                            )
                                                                            return {
                                                                                'source': prop_source,
                                                                                'assign character': prop_assign_character,
                                                                            }
                                                                        },
                                                                    )],
                                                                )
                                                            case 'variable':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['variable', $],
                                                                )
                                                            default:
                                                                return p_.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                )
                                            },
                                        ),
                                    )
                                    
                                    const prop_tail = p_change_context(
                                        $['tail'],
                                        ($) => p_.from.list(
                                            $['l list'],
                                        ).map(
                                            ($) => p_change_context(
                                                $['l item'],
                                                ($) => $,
                                            ),
                                        ),
                                    )
                                    return {
                                        'start': prop_start,
                                        'tail': prop_tail,
                                    }
                                },
                            )],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        )
    },
)

export const Select_Lookup: t_signatures.Select_Lookup = ($, abort, $l, $p) => p_variables(
    () => {
        
        const var_location = $['l location']
        return p_decide_state(
            $['l state'],
            ($): t_out.Select_Lookup => {
                switch ($[0]) {
                    case 'implement me':
                        return p_.ss(
                            $,
                            ($) => ['implement me', $],
                        )
                    case 'from parameter':
                        return p_.ss(
                            $,
                            ($) => ['from parameter', $],
                        )
                    case 'acyclic':
                        return p_.ss(
                            $,
                            ($) => ['acyclic', p_variables(
                                () => {
                                    
                                    const var_location = $['l location']
                                    return p_decide_state(
                                        $['l state'],
                                        ($): t_out.Select_Lookup.acyclic => {
                                            switch ($[0]) {
                                                case 'not set':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['not set', null],
                                                    )
                                                case 'siblings':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['siblings', null],
                                                    )
                                                case 'resolved dictionary':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['resolved dictionary', Select_Value(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            p_.literal.nothing(),
                                                            p_.literal.nothing(),
                                                        )],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )
                                },
                            )],
                        )
                    case 'cyclic':
                        return p_.ss(
                            $,
                            ($) => ['cyclic', p_variables(
                                () => {
                                    
                                    const var_location = $['l location']
                                    return p_decide_state(
                                        $['l state'],
                                        ($): t_out.Select_Lookup.cyclic => {
                                            switch ($[0]) {
                                                case 'not set':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['not set', null],
                                                    )
                                                case 'siblings':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['siblings', null],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )
                                },
                            )],
                        )
                    case 'stack':
                        return p_.ss(
                            $,
                            ($) => ['stack', p_variables(
                                () => {
                                    
                                    const var_location = $['l location']
                                    return p_decide_state(
                                        $['l state'],
                                        ($): t_out.Select_Lookup.stack => {
                                            switch ($[0]) {
                                                case 'empty':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['empty', null],
                                                    )
                                                case 'push':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['push', p_.literal.group_resolve(
                                                            () => {
                                                                
                                                                const prop_stack = p_change_context(
                                                                    $['stack'],
                                                                    ($) => Select_Lookup(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        p_.literal.nothing(),
                                                                        p_.literal.nothing(),
                                                                    ),
                                                                )
                                                                
                                                                const prop_acyclic = p_change_context(
                                                                    $['acyclic'],
                                                                    ($) => Select_Lookup(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        p_.literal.nothing(),
                                                                        p_.literal.nothing(),
                                                                    ),
                                                                )
                                                                return {
                                                                    'stack': prop_stack,
                                                                    'acyclic': prop_acyclic,
                                                                }
                                                            },
                                                        )],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )
                                },
                            )],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        )
    },
)
