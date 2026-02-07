    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import * as _pdev from 'pareto-core-dev'
    
    import * as _p_sl from 'pareto-core/dist/select_lookup'
    
    import _p_variables from 'pareto-core/dist/_p_variables'
    
    import * as t_out from "../../../../../../../interface/generated/liana/schemas/implementation/data/resolved"
    
    import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/resolve"
    
    import * as v_external_interface from "../../../interface/resolved/refiners/unresolved"
    
    export const Package_Set: t_signatures.Package_Set = ($, abort, $l, $p) => _p.dictionary.resolve(
        $['l dictionary'],
        ($, id, $a, $c): t_out.Package_Set.D => _p_change_context(
            $['l entry'],
            ($) => _p_variables(
                () => {
                    
                    const var_location = $['l location']
                    return _p.decide.state(
                        $['l state'],
                        ($): t_out.Package_Set.D => {
                            switch ($[0]) {
                                case 'package':
                                    return _p.ss(
                                        $,
                                        ($) => ['package', Package(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            null,
                                            null,
                                        )],
                                    )
                                case 'set':
                                    return _p.ss(
                                        $,
                                        ($) => ['set', Package_Set(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            null,
                                            null,
                                        )],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )
                },
            ),
        ),
    )
    
    export const Package: t_signatures.Package = ($, abort, $l, $p) => _p.group.resolve(
        () => {
            
            const prop_specials = _p_change_context(
                $['specials'],
                ($) => _p.group.resolve(
                    () => {
                        
                        const prop_abort = _p_change_context(
                            $['abort'],
                            ($) => $,
                        )
                        
                        const prop_change_context = _p_change_context(
                            $['change context'],
                            ($) => $,
                        )
                        
                        const prop_implement_me = _p_change_context(
                            $['implement me'],
                            ($) => $,
                        )
                        
                        const prop_iterate = _p_change_context(
                            $['iterate'],
                            ($) => $,
                        )
                        
                        const prop_lookups = _p_change_context(
                            $['lookups'],
                            ($) => $,
                        )
                        
                        const prop_list_from_text = _p_change_context(
                            $['list from text'],
                            ($) => $,
                        )
                        
                        const prop_text_from_list = _p_change_context(
                            $['text from list'],
                            ($) => $,
                        )
                        
                        const prop_unreachable_code_path = _p_change_context(
                            $['unreachable code path'],
                            ($) => $,
                        )
                        
                        const prop_variables = _p_change_context(
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
            
            const prop_type_imports = _p_change_context(
                $['type imports'],
                ($) => v_external_interface.Imports(
                    $,
                    ($) => abort(
                        $,
                    ),
                    null,
                    null,
                ),
            )
            
            const prop_variable_imports = _p_change_context(
                $['variable imports'],
                ($) => _p.dictionary.resolve(
                    $['l dictionary'],
                    ($, id, $a, $c): t_out.Package.variable_imports.D => _p_change_context(
                        $['l entry'],
                        ($) => _p.group.resolve(
                            () => {
                                
                                const prop_tail = _p_change_context(
                                    $['tail'],
                                    ($) => _p.list.map(
                                        $['l list'],
                                        ($) => _p_change_context(
                                            $['l item'],
                                            ($) => $,
                                        ),
                                    ),
                                )
                                
                                const prop_type = _p_change_context(
                                    $['type'],
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_location = $['l location']
                                            return _p.decide.state(
                                                $['l state'],
                                                ($): t_out.Package.variable_imports.D.type_ => {
                                                    switch ($[0]) {
                                                        case 'ancestor':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['ancestor', _p.group.resolve(
                                                                    () => {
                                                                        
                                                                        const prop_dependency = _p_change_context(
                                                                            $['dependency'],
                                                                            ($) => $,
                                                                        )
                                                                        
                                                                        const prop_number_of_steps = _p_change_context(
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
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['external', $],
                                                            )
                                                        case 'sibling':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['sibling', $],
                                                            )
                                                        default:
                                                            return _p.au(
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
            
            const prop_functions = _p_change_context(
                $['functions'],
                ($) => _p.dictionary.resolve(
                    $['l dictionary'],
                    ($, id, $a, $c): t_out.Package.functions.D => _p_change_context(
                        $['l entry'],
                        ($) => _p.group.resolve(
                            () => {
                                
                                const prop_type = _p_change_context(
                                    $['type'],
                                    ($) => _p.group.resolve(
                                        () => {
                                            
                                            const prop_import = _p_change_context(
                                                $['import'],
                                                ($) => $,
                                            )
                                            
                                            const prop_type = _p_change_context(
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
                                
                                const prop_expression = _p_change_context(
                                    $['expression'],
                                    ($) => Expression(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        null,
                                        null,
                                    ),
                                )
                                
                                const prop_temp_has_abort = _p_change_context(
                                    $['temp has abort'],
                                    ($) => $,
                                )
                                
                                const prop_temp_has_lookups = _p_change_context(
                                    $['temp has lookups'],
                                    ($) => $,
                                )
                                
                                const prop_temp_has_parameters = _p_change_context(
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
    
    export const Temp_Value_Type_Specification: t_signatures.Temp_Value_Type_Specification = ($, abort, $l, $p) => _p.group.resolve(
        () => {
            
            const prop_type = _p_change_context(
                $['type'],
                ($) => _p.group.resolve(
                    () => {
                        
                        const prop_import = _p_change_context(
                            $['import'],
                            ($) => $,
                        )
                        
                        const prop_type = _p_change_context(
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
            
            const prop_sub_selection = _p_change_context(
                $['sub selection'],
                ($) => _p.list.map(
                    $['l list'],
                    ($) => _p_change_context(
                        $['l item'],
                        ($) => _p_variables(
                            () => {
                                
                                const var_location = $['l location']
                                return _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Temp_Value_Type_Specification.sub_selection.L => {
                                        switch ($[0]) {
                                            case 'dictionary':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['dictionary', null],
                                                )
                                            case 'group':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['group', $],
                                                )
                                            case 'list':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['list', null],
                                                )
                                            case 'optional':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['optional', null],
                                                )
                                            case 'state':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['state', $],
                                                )
                                            default:
                                                return _p.au(
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
    
    export const Expression: t_signatures.Expression = ($, abort, $l, $p) => _p_variables(
        () => {
            
            const var_location = $['l location']
            return _p.decide.state(
                $['l state'],
                ($): t_out.Expression => {
                    switch ($[0]) {
                        case 'decide':
                            return _p.ss(
                                $,
                                ($) => ['decide', _p.group.resolve(
                                    () => {
                                        
                                        const prop_type = _p_change_context(
                                            $['type'],
                                            ($) => _p_variables(
                                                () => {
                                                    
                                                    const var_location = $['l location']
                                                    return _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Expression.decide.type_ => {
                                                            switch ($[0]) {
                                                                case 'boolean':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['boolean', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_source = _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_temp_resulting_node = _p_change_context(
                                                                                    $['temp resulting node'],
                                                                                    ($) => _p.optional.map(
                                                                                        $,
                                                                                        ($) => Temp_Value_Type_Specification(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            null,
                                                                                            null,
                                                                                        ),
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_if_false = _p_change_context(
                                                                                    $['if false'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_if_true = _p_change_context(
                                                                                    $['if true'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                return {
                                                                                    'source': prop_source,
                                                                                    'temp resulting node': prop_temp_resulting_node,
                                                                                    'if false': prop_if_false,
                                                                                    'if true': prop_if_true,
                                                                                }
                                                                            },
                                                                        )],
                                                                    )
                                                                case 'dictionary':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['dictionary', _p_variables(
                                                                            () => {
                                                                                
                                                                                const var_location = $['l location']
                                                                                return _p.decide.state(
                                                                                    $['l state'],
                                                                                    ($): t_out.Expression.decide.type_.dictionary => {
                                                                                        switch ($[0]) {
                                                                                            case 'has entries':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['has entries', _p.group.resolve(
                                                                                                        () => {
                                                                                                            
                                                                                                            const prop_dictionary = _p_change_context(
                                                                                                                $['dictionary'],
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            
                                                                                                            const prop_if_false = _p_change_context(
                                                                                                                $['if false'],
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            
                                                                                                            const prop_if_true = _p_change_context(
                                                                                                                $['if true'],
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            return {
                                                                                                                'dictionary': prop_dictionary,
                                                                                                                'if false': prop_if_false,
                                                                                                                'if true': prop_if_true,
                                                                                                            }
                                                                                                        },
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return _p.au(
                                                                                                    $[0],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                )
                                                                            },
                                                                        )],
                                                                    )
                                                                case 'list':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['list', _p_variables(
                                                                            () => {
                                                                                
                                                                                const var_location = $['l location']
                                                                                return _p.decide.state(
                                                                                    $['l state'],
                                                                                    ($): t_out.Expression.decide.type_.list => {
                                                                                        switch ($[0]) {
                                                                                            case 'has first item':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['has first item', _p.group.resolve(
                                                                                                        () => {
                                                                                                            
                                                                                                            const prop_list = _p_change_context(
                                                                                                                $['list'],
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            
                                                                                                            const prop_if_false = _p_change_context(
                                                                                                                $['if false'],
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            
                                                                                                            const prop_if_true = _p_change_context(
                                                                                                                $['if true'],
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            return {
                                                                                                                'list': prop_list,
                                                                                                                'if false': prop_if_false,
                                                                                                                'if true': prop_if_true,
                                                                                                            }
                                                                                                        },
                                                                                                    )],
                                                                                                )
                                                                                            case 'has last item':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['has last item', _p.group.resolve(
                                                                                                        () => {
                                                                                                            
                                                                                                            const prop_list = _p_change_context(
                                                                                                                $['list'],
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            
                                                                                                            const prop_if_false = _p_change_context(
                                                                                                                $['if false'],
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            
                                                                                                            const prop_if_true = _p_change_context(
                                                                                                                $['if true'],
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            return {
                                                                                                                'list': prop_list,
                                                                                                                'if false': prop_if_false,
                                                                                                                'if true': prop_if_true,
                                                                                                            }
                                                                                                        },
                                                                                                    )],
                                                                                                )
                                                                                            case 'has items':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['has items', _p.group.resolve(
                                                                                                        () => {
                                                                                                            
                                                                                                            const prop_list = _p_change_context(
                                                                                                                $['list'],
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            
                                                                                                            const prop_if_false = _p_change_context(
                                                                                                                $['if false'],
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            
                                                                                                            const prop_if_true = _p_change_context(
                                                                                                                $['if true'],
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    null,
                                                                                                                    null,
                                                                                                                ),
                                                                                                            )
                                                                                                            return {
                                                                                                                'list': prop_list,
                                                                                                                'if false': prop_if_false,
                                                                                                                'if true': prop_if_true,
                                                                                                            }
                                                                                                        },
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return _p.au(
                                                                                                    $[0],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                )
                                                                            },
                                                                        )],
                                                                    )
                                                                case 'optional':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['optional', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_source = _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_temp_resulting_node = _p_change_context(
                                                                                    $['temp resulting node'],
                                                                                    ($) => _p.optional.map(
                                                                                        $,
                                                                                        ($) => Temp_Value_Type_Specification(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            null,
                                                                                            null,
                                                                                        ),
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_if_not_set = _p_change_context(
                                                                                    $['if not set'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_if_set = _p_change_context(
                                                                                    $['if set'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                return {
                                                                                    'source': prop_source,
                                                                                    'temp resulting node': prop_temp_resulting_node,
                                                                                    'if not set': prop_if_not_set,
                                                                                    'if set': prop_if_set,
                                                                                }
                                                                            },
                                                                        )],
                                                                    )
                                                                case 'state':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['state', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_source = _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_temp_resulting_node = _p_change_context(
                                                                                    $['temp resulting node'],
                                                                                    ($) => _p.optional.map(
                                                                                        $,
                                                                                        ($) => Temp_Value_Type_Specification(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            null,
                                                                                            null,
                                                                                        ),
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_type = _p_change_context(
                                                                                    $['type'],
                                                                                    ($) => _p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_location = $['l location']
                                                                                            return _p.decide.state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Expression.decide.type_.state.type_ => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'partial':
                                                                                                            return _p.ss(
                                                                                                                $,
                                                                                                                ($) => ['partial', _p.group.resolve(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const prop_options = _p_change_context(
                                                                                                                            $['options'],
                                                                                                                            ($) => _p.dictionary.resolve(
                                                                                                                                $['l dictionary'],
                                                                                                                                ($, id, $a, $c): t_out.Expression.decide.type_.state.type_.partial.options.D => _p_change_context(
                                                                                                                                    $['l entry'],
                                                                                                                                    ($) => Expression(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        null,
                                                                                                                                        null,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        )
                                                                                                                        
                                                                                                                        const prop_default = _p_change_context(
                                                                                                                            $['default'],
                                                                                                                            ($) => Expression(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                null,
                                                                                                                                null,
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
                                                                                                            return _p.ss(
                                                                                                                $,
                                                                                                                ($) => ['full', _p.group.resolve(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const prop_options = _p_change_context(
                                                                                                                            $['options'],
                                                                                                                            ($) => _p.dictionary.resolve(
                                                                                                                                $['l dictionary'],
                                                                                                                                ($, id, $a, $c): t_out.Expression.decide.type_.state.type_.full.options.D => _p_change_context(
                                                                                                                                    $['l entry'],
                                                                                                                                    ($) => Expression(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        null,
                                                                                                                                        null,
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
                                                                                                            return _p.ss(
                                                                                                                $,
                                                                                                                ($) => ['single', _p.group.resolve(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const prop_option = _p_change_context(
                                                                                                                            $['option'],
                                                                                                                            ($) => $,
                                                                                                                        )
                                                                                                                        
                                                                                                                        const prop_if_true = _p_change_context(
                                                                                                                            $['if true'],
                                                                                                                            ($) => Expression(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                null,
                                                                                                                                null,
                                                                                                                            ),
                                                                                                                        )
                                                                                                                        
                                                                                                                        const prop_if_false = _p_change_context(
                                                                                                                            $['if false'],
                                                                                                                            ($) => Expression(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                null,
                                                                                                                                null,
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
                                                                                                            return _p.au(
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
                                                                                    'temp resulting node': prop_temp_resulting_node,
                                                                                    'type': prop_type,
                                                                                }
                                                                            },
                                                                        )],
                                                                    )
                                                                case 'text':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['text', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_source = _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_temp_resulting_node = _p_change_context(
                                                                                    $['temp resulting node'],
                                                                                    ($) => _p.optional.map(
                                                                                        $,
                                                                                        ($) => Temp_Value_Type_Specification(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            null,
                                                                                            null,
                                                                                        ),
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_cases = _p_change_context(
                                                                                    $['cases'],
                                                                                    ($) => _p.dictionary.resolve(
                                                                                        $['l dictionary'],
                                                                                        ($, id, $a, $c): t_out.Expression.decide.type_.text.cases.D => _p_change_context(
                                                                                            $['l entry'],
                                                                                            ($) => Expression(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                null,
                                                                                                null,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_default = _p_change_context(
                                                                                    $['default'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                return {
                                                                                    'source': prop_source,
                                                                                    'temp resulting node': prop_temp_resulting_node,
                                                                                    'cases': prop_cases,
                                                                                    'default': prop_default,
                                                                                }
                                                                            },
                                                                        )],
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )
                                        return {
                                            'type': prop_type,
                                        }
                                    },
                                )],
                            )
                        case 'construct':
                            return _p.ss(
                                $,
                                ($) => ['construct', _p_variables(
                                    () => {
                                        
                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Expression.construct => {
                                                switch ($[0]) {
                                                    case 'boolean':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['boolean', _p_variables(
                                                                () => {
                                                                    
                                                                    const var_location = $['l location']
                                                                    return _p.decide.state(
                                                                        $['l state'],
                                                                        ($): t_out.Expression.construct.boolean_ => {
                                                                            switch ($[0]) {
                                                                                case 'literal':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['literal', _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_location = $['l location']
                                                                                                return _p.decide.state(
                                                                                                    $['l state'],
                                                                                                    ($): t_out.Expression.construct.boolean_.literal => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'false':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['false', null],
                                                                                                                )
                                                                                                            case 'true':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['true', null],
                                                                                                                )
                                                                                                            default:
                                                                                                                return _p.au(
                                                                                                                    $[0],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                )
                                                                                            },
                                                                                        )],
                                                                                    )
                                                                                case 'source':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['source', _p.group.resolve(
                                                                                            () => {
                                                                                                
                                                                                                const prop_selection = _p_change_context(
                                                                                                    $['selection'],
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        null,
                                                                                                        null,
                                                                                                    ),
                                                                                                )
                                                                                                
                                                                                                const prop_type = _p_change_context(
                                                                                                    $['type'],
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_location = $['l location']
                                                                                                            return _p.decide.state(
                                                                                                                $['l state'],
                                                                                                                ($): t_out.Expression.construct.boolean_.source.type_ => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'boolean':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['boolean', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.boolean_.source.type_.boolean_ => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    case 'not':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['not', null],
                                                                                                                                                        )
                                                                                                                                                    case 'copy':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['copy', null],
                                                                                                                                                        )
                                                                                                                                                    default:
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'dictionary':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['dictionary', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.boolean_.source.type_.dictionary => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    case 'is empty':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['is empty', Value_Selection(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                null,
                                                                                                                                                                null,
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    default:
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'list':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['list', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.boolean_.source.type_.list => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    case 'is empty':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['is empty', Value_Selection(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                null,
                                                                                                                                                                null,
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    default:
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return _p.au(
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
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )
                                                                },
                                                            )],
                                                        )
                                                    case 'dictionary':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['dictionary', _p_variables(
                                                                () => {
                                                                    
                                                                    const var_location = $['l location']
                                                                    return _p.decide.state(
                                                                        $['l state'],
                                                                        ($): t_out.Expression.construct.dictionary => {
                                                                            switch ($[0]) {
                                                                                case 'literal':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['literal', _p.dictionary.resolve(
                                                                                            $['l dictionary'],
                                                                                            ($, id, $a, $c): t_out.Expression.construct.dictionary.literal.D => _p_change_context(
                                                                                                $['l entry'],
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    null,
                                                                                                    null,
                                                                                                ),
                                                                                            ),
                                                                                        )],
                                                                                    )
                                                                                case 'source':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['source', _p.group.resolve(
                                                                                            () => {
                                                                                                
                                                                                                const prop_selection = _p_change_context(
                                                                                                    $['selection'],
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        null,
                                                                                                        null,
                                                                                                    ),
                                                                                                )
                                                                                                
                                                                                                const prop_type = _p_change_context(
                                                                                                    $['type'],
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_location = $['l location']
                                                                                                            return _p.decide.state(
                                                                                                                $['l state'],
                                                                                                                ($): t_out.Expression.construct.dictionary.source.type_ => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'dictionary':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['dictionary', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.dictionary.source.type_.dictionary => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    case 'filter':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['filter', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_entry = _p_change_context(
                                                                                                                                                                        $['assign entry'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    return {
                                                                                                                                                                        'assign entry': prop_assign_entry,
                                                                                                                                                                    }
                                                                                                                                                                },
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    case 'map':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['map', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_entry = _p_change_context(
                                                                                                                                                                        $['assign entry'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    return {
                                                                                                                                                                        'assign entry': prop_assign_entry,
                                                                                                                                                                    }
                                                                                                                                                                },
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    case 'resolve':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['resolve', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_entry = _p_change_context(
                                                                                                                                                                        $['assign entry'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    
                                                                                                                                                                    const prop_temp_resulting_entry_node = _p_change_context(
                                                                                                                                                                        $['temp resulting entry node'],
                                                                                                                                                                        ($) => Temp_Value_Type_Specification(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
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
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'list':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['list', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.dictionary.source.type_.list => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    case 'convert':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['convert', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_id = _p_change_context(
                                                                                                                                                                        $['assign id'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_entry = _p_change_context(
                                                                                                                                                                        $['assign entry'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    
                                                                                                                                                                    const prop_abort = _p_change_context(
                                                                                                                                                                        $['abort'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
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
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return _p.au(
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
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )
                                                                },
                                                            )],
                                                        )
                                                    case 'group':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['group', _p_variables(
                                                                () => {
                                                                    
                                                                    const var_location = $['l location']
                                                                    return _p.decide.state(
                                                                        $['l state'],
                                                                        ($): t_out.Expression.construct.group => {
                                                                            switch ($[0]) {
                                                                                case 'literal':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['literal', _p.group.resolve(
                                                                                            () => {
                                                                                                
                                                                                                const prop_properties = _p_change_context(
                                                                                                    $['properties'],
                                                                                                    ($) => _p.dictionary.resolve(
                                                                                                        $['l dictionary'],
                                                                                                        ($, id, $a, $c): t_out.Expression.construct.group.literal.properties.D => _p_change_context(
                                                                                                            $['l entry'],
                                                                                                            ($) => Expression(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                null,
                                                                                                                null,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                )
                                                                                                
                                                                                                const prop_have_dependencies = _p_change_context(
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
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )
                                                                },
                                                            )],
                                                        )
                                                    case 'list':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['list', _p_variables(
                                                                () => {
                                                                    
                                                                    const var_location = $['l location']
                                                                    return _p.decide.state(
                                                                        $['l state'],
                                                                        ($): t_out.Expression.construct.list => {
                                                                            switch ($[0]) {
                                                                                case 'literal':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['literal', _p.list.map(
                                                                                            $['l list'],
                                                                                            ($) => _p_change_context(
                                                                                                $['l item'],
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    null,
                                                                                                    null,
                                                                                                ),
                                                                                            ),
                                                                                        )],
                                                                                    )
                                                                                case 'source':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['source', _p.group.resolve(
                                                                                            () => {
                                                                                                
                                                                                                const prop_selection = _p_change_context(
                                                                                                    $['selection'],
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        null,
                                                                                                        null,
                                                                                                    ),
                                                                                                )
                                                                                                
                                                                                                const prop_type = _p_change_context(
                                                                                                    $['type'],
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_location = $['l location']
                                                                                                            return _p.decide.state(
                                                                                                                $['l state'],
                                                                                                                ($): t_out.Expression.construct.list.source.type_ => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'dictionary':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['dictionary', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.list.source.type_.dictionary => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    case 'convert':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['convert', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_entry = _p_change_context(
                                                                                                                                                                        $['assign entry'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    return {
                                                                                                                                                                        'assign entry': prop_assign_entry,
                                                                                                                                                                    }
                                                                                                                                                                },
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    default:
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'group':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['group', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.list.source.type_.group => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    default:
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'list':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['list', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.list.source.type_.list => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    case 'filter':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['filter', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_item = _p_change_context(
                                                                                                                                                                        $['assign item'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    return {
                                                                                                                                                                        'assign item': prop_assign_item,
                                                                                                                                                                    }
                                                                                                                                                                },
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    case 'map':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['map', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_item = _p_change_context(
                                                                                                                                                                        $['assign item'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    return {
                                                                                                                                                                        'assign item': prop_assign_item,
                                                                                                                                                                    }
                                                                                                                                                                },
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    case 'map with state':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['map with state', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_initialize_state = _p_change_context(
                                                                                                                                                                        $['initialize state'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_item = _p_change_context(
                                                                                                                                                                        $['assign item'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    
                                                                                                                                                                    const prop_update_state = _p_change_context(
                                                                                                                                                                        $['update state'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    
                                                                                                                                                                    const prop_wrap_up = _p_change_context(
                                                                                                                                                                        $['wrap up'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
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
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['reduce', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_initialize_state = _p_change_context(
                                                                                                                                                                        $['initialize state'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_item = _p_change_context(
                                                                                                                                                                        $['assign item'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
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
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['reverse', null],
                                                                                                                                                        )
                                                                                                                                                    default:
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return _p.au(
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
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )
                                                                },
                                                            )],
                                                        )
                                                    case 'nothing':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['nothing', null],
                                                        )
                                                    case 'number':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['number', _p_variables(
                                                                () => {
                                                                    
                                                                    const var_location = $['l location']
                                                                    return _p.decide.state(
                                                                        $['l state'],
                                                                        ($): t_out.Expression.construct.number_ => {
                                                                            switch ($[0]) {
                                                                                case 'approximation':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['approximation', _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_location = $['l location']
                                                                                                return _p.decide.state(
                                                                                                    $['l state'],
                                                                                                    ($): t_out.Expression.construct.number_.approximation => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'copy':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['copy', Value_Selection(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        null,
                                                                                                                        null,
                                                                                                                    )],
                                                                                                                )
                                                                                                            case 'literal':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['literal', $],
                                                                                                                )
                                                                                                            default:
                                                                                                                return _p.au(
                                                                                                                    $[0],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                )
                                                                                            },
                                                                                        )],
                                                                                    )
                                                                                case 'integer':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['integer', _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_location = $['l location']
                                                                                                return _p.decide.state(
                                                                                                    $['l state'],
                                                                                                    ($): t_out.Expression.construct.number_.integer => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'copy':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['copy', Value_Selection(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        null,
                                                                                                                        null,
                                                                                                                    )],
                                                                                                                )
                                                                                                            case 'divide':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['divide', _p.group.resolve(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const prop_assign_dividend = _p_change_context(
                                                                                                                                $['assign dividend'],
                                                                                                                                ($) => Value_Selection(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    null,
                                                                                                                                    null,
                                                                                                                                ),
                                                                                                                            )
                                                                                                                            
                                                                                                                            const prop_assign_divisor = _p_change_context(
                                                                                                                                $['assign divisor'],
                                                                                                                                ($) => Value_Selection(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    null,
                                                                                                                                    null,
                                                                                                                                ),
                                                                                                                            )
                                                                                                                            
                                                                                                                            const prop_abort = _p_change_context(
                                                                                                                                $['abort'],
                                                                                                                                ($) => Expression(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    null,
                                                                                                                                    null,
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
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['literal', $],
                                                                                                                )
                                                                                                            default:
                                                                                                                return _p.au(
                                                                                                                    $[0],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                )
                                                                                            },
                                                                                        )],
                                                                                    )
                                                                                case 'natural':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['natural', _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_location = $['l location']
                                                                                                return _p.decide.state(
                                                                                                    $['l state'],
                                                                                                    ($): t_out.Expression.construct.number_.natural => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'copy':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['copy', Value_Selection(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        null,
                                                                                                                        null,
                                                                                                                    )],
                                                                                                                )
                                                                                                            case 'literal':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['literal', $],
                                                                                                                )
                                                                                                            case 'number of dictionary entries':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['number of dictionary entries', _p.group.resolve(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const prop_dictionary = _p_change_context(
                                                                                                                                $['dictionary'],
                                                                                                                                ($) => Value_Selection(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    null,
                                                                                                                                    null,
                                                                                                                                ),
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'dictionary': prop_dictionary,
                                                                                                                            }
                                                                                                                        },
                                                                                                                    )],
                                                                                                                )
                                                                                                            case 'number of list items':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['number of list items', _p.group.resolve(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const prop_list = _p_change_context(
                                                                                                                                $['list'],
                                                                                                                                ($) => Value_Selection(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    null,
                                                                                                                                    null,
                                                                                                                                ),
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'list': prop_list,
                                                                                                                            }
                                                                                                                        },
                                                                                                                    )],
                                                                                                                )
                                                                                                            case 'source column':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['source column', null],
                                                                                                                )
                                                                                                            case 'source line':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['source line', null],
                                                                                                                )
                                                                                                            default:
                                                                                                                return _p.au(
                                                                                                                    $[0],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                )
                                                                                            },
                                                                                        )],
                                                                                    )
                                                                                default:
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )
                                                                },
                                                            )],
                                                        )
                                                    case 'optional':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['optional', _p_variables(
                                                                () => {
                                                                    
                                                                    const var_location = $['l location']
                                                                    return _p.decide.state(
                                                                        $['l state'],
                                                                        ($): t_out.Expression.construct.optional => {
                                                                            switch ($[0]) {
                                                                                case 'literal':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['literal', _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_location = $['l location']
                                                                                                return _p.decide.state(
                                                                                                    $['l state'],
                                                                                                    ($): t_out.Expression.construct.optional.literal => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'not set':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['not set', null],
                                                                                                                )
                                                                                                            case 'set':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['set', Expression(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        null,
                                                                                                                        null,
                                                                                                                    )],
                                                                                                                )
                                                                                                            default:
                                                                                                                return _p.au(
                                                                                                                    $[0],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                )
                                                                                            },
                                                                                        )],
                                                                                    )
                                                                                case 'source':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['source', _p.group.resolve(
                                                                                            () => {
                                                                                                
                                                                                                const prop_selection = _p_change_context(
                                                                                                    $['selection'],
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        null,
                                                                                                        null,
                                                                                                    ),
                                                                                                )
                                                                                                
                                                                                                const prop_type = _p_change_context(
                                                                                                    $['type'],
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_location = $['l location']
                                                                                                            return _p.decide.state(
                                                                                                                $['l state'],
                                                                                                                ($): t_out.Expression.construct.optional.source.type_ => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'boolean':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['boolean', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.optional.source.type_.boolean_ => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    case 'convert':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['convert', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_set = _p_change_context(
                                                                                                                                                                        $['assign set'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    return {
                                                                                                                                                                        'assign set': prop_assign_set,
                                                                                                                                                                    }
                                                                                                                                                                },
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    default:
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'optional':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['optional', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.optional.source.type_.optional => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    case 'map':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['map', _p.group.resolve(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const prop_assign_set = _p_change_context(
                                                                                                                                                                        $['assign set'],
                                                                                                                                                                        ($) => Expression(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            null,
                                                                                                                                                                            null,
                                                                                                                                                                        ),
                                                                                                                                                                    )
                                                                                                                                                                    return {
                                                                                                                                                                        'assign set': prop_assign_set,
                                                                                                                                                                    }
                                                                                                                                                                },
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    default:
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return _p.au(
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
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )
                                                                },
                                                            )],
                                                        )
                                                    case 'state':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['state', _p_variables(
                                                                () => {
                                                                    
                                                                    const var_location = $['l location']
                                                                    return _p.decide.state(
                                                                        $['l state'],
                                                                        ($): t_out.Expression.construct.state => {
                                                                            switch ($[0]) {
                                                                                case 'literal':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['literal', _p.group.resolve(
                                                                                            () => {
                                                                                                
                                                                                                const prop_option = _p_change_context(
                                                                                                    $['option'],
                                                                                                    ($) => $,
                                                                                                )
                                                                                                
                                                                                                const prop_assign_option = _p_change_context(
                                                                                                    $['assign option'],
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        null,
                                                                                                        null,
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
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )
                                                                },
                                                            )],
                                                        )
                                                    case 'text':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['text', _p_variables(
                                                                () => {
                                                                    
                                                                    const var_location = $['l location']
                                                                    return _p.decide.state(
                                                                        $['l state'],
                                                                        ($): t_out.Expression.construct.text => {
                                                                            switch ($[0]) {
                                                                                case 'literal':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['literal', _p.group.resolve(
                                                                                            () => {
                                                                                                
                                                                                                const prop_type = _p_change_context(
                                                                                                    $['type'],
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_location = $['l location']
                                                                                                            return _p.decide.state(
                                                                                                                $['l state'],
                                                                                                                ($): t_out.Expression.construct.text.literal.type_ => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'identifier':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['identifier', null],
                                                                                                                            )
                                                                                                                        case 'freeform':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['freeform', null],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return _p.au(
                                                                                                                                $[0],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            )
                                                                                                        },
                                                                                                    ),
                                                                                                )
                                                                                                
                                                                                                const prop_value = _p_change_context(
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
                                                                                case 'source':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['source', _p.group.resolve(
                                                                                            () => {
                                                                                                
                                                                                                const prop_selection = _p_change_context(
                                                                                                    $['selection'],
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        null,
                                                                                                        null,
                                                                                                    ),
                                                                                                )
                                                                                                
                                                                                                const prop_type = _p_change_context(
                                                                                                    $['type'],
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_location = $['l location']
                                                                                                            return _p.decide.state(
                                                                                                                $['l state'],
                                                                                                                ($): t_out.Expression.construct.text.source.type_ => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'text':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['text', _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_location = $['l location']
                                                                                                                                        return _p.decide.state(
                                                                                                                                            $['l state'],
                                                                                                                                            ($): t_out.Expression.construct.text.source.type_.text => {
                                                                                                                                                switch ($[0]) {
                                                                                                                                                    case 'copy':
                                                                                                                                                        return _p.ss(
                                                                                                                                                            $,
                                                                                                                                                            ($) => ['copy', null],
                                                                                                                                                        )
                                                                                                                                                    default:
                                                                                                                                                        return _p.au(
                                                                                                                                                            $[0],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return _p.au(
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
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['source document', null],
                                                                                    )
                                                                                default:
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )
                                                                },
                                                            )],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                )],
                            )
                        case 'select':
                            return _p.ss(
                                $,
                                ($) => ['select', Value_Selection(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    null,
                                    null,
                                )],
                            )
                        case 'special':
                            return _p.ss(
                                $,
                                ($) => ['special', _p_variables(
                                    () => {
                                        
                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Expression.special => {
                                                switch ($[0]) {
                                                    case 'abort':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['abort', Expression(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                null,
                                                                null,
                                                            )],
                                                        )
                                                    case 'assert':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['assert', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_tester = _p_change_context(
                                                                        $['tester'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            null,
                                                                            null,
                                                                        ),
                                                                    )
                                                                    
                                                                    const prop_normal_flow = _p_change_context(
                                                                        $['normal flow'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            null,
                                                                            null,
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
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['change context', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_new_context = _p_change_context(
                                                                        $['new context'],
                                                                        ($) => Value_Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            null,
                                                                            null,
                                                                        ),
                                                                    )
                                                                    
                                                                    const prop_expression = _p_change_context(
                                                                        $['expression'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            null,
                                                                            null,
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
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['variables', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_variables = _p_change_context(
                                                                        $['variables'],
                                                                        ($) => _p.dictionary.resolve(
                                                                            $['l dictionary'],
                                                                            ($, id, $a, $c): t_out.Expression.special.variables.variables.D => _p_change_context(
                                                                                $['l entry'],
                                                                                ($) => Expression(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    null,
                                                                                    null,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    )
                                                                    
                                                                    const prop_assign = _p_change_context(
                                                                        $['assign'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            null,
                                                                            null,
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
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['implement me', $],
                                                        )
                                                    case 'iterate':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['iterate', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_list = _p_change_context(
                                                                        $['list'],
                                                                        ($) => Value_Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            null,
                                                                            null,
                                                                        ),
                                                                    )
                                                                    
                                                                    const prop_assign = _p_change_context(
                                                                        $['assign'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            null,
                                                                            null,
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
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['unreachable', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_explanation = _p_change_context(
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
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                )],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )
        },
    )
    
    export const Value_Selection: t_signatures.Value_Selection = ($, abort, $l, $p) => _p_variables(
        () => {
            
            const var_location = $['l location']
            return _p.decide.state(
                $['l state'],
                ($): t_out.Value_Selection => {
                    switch ($[0]) {
                        case 'implement me':
                            return _p.ss(
                                $,
                                ($) => ['implement me', $],
                            )
                        case 'regular':
                            return _p.ss(
                                $,
                                ($) => ['regular', _p.group.resolve(
                                    () => {
                                        
                                        const prop_start = _p_change_context(
                                            $['start'],
                                            ($) => _p_variables(
                                                () => {
                                                    
                                                    const var_location = $['l location']
                                                    return _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Value_Selection.regular.start => {
                                                            switch ($[0]) {
                                                                case 'call':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['call', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_source = _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => _p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_location = $['l location']
                                                                                            return _p.decide.state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Value_Selection.regular.start.call.source => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'local':
                                                                                                            return _p.ss(
                                                                                                                $,
                                                                                                                ($) => ['local', $],
                                                                                                            )
                                                                                                        case 'imported':
                                                                                                            return _p.ss(
                                                                                                                $,
                                                                                                                ($) => ['imported', _p.group.resolve(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const prop_import = _p_change_context(
                                                                                                                            $['import'],
                                                                                                                            ($) => $,
                                                                                                                        )
                                                                                                                        
                                                                                                                        const prop_variable = _p_change_context(
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
                                                                                                            return _p.au(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        },
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_context = _p_change_context(
                                                                                    $['context'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_abort = _p_change_context(
                                                                                    $['abort'],
                                                                                    ($) => _p.optional.map(
                                                                                        $,
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            null,
                                                                                            null,
                                                                                        ),
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_lookups = _p_change_context(
                                                                                    $['lookups'],
                                                                                    ($) => _p.optional.map(
                                                                                        $,
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_location = $['l location']
                                                                                                return _p.decide.state(
                                                                                                    $['l state'],
                                                                                                    ($): t_out.Value_Selection.regular.start.call.lookups.O => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'initialize':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['initialize', _p.dictionary.resolve(
                                                                                                                        $['l dictionary'],
                                                                                                                        ($, id, $a, $c): t_out.Value_Selection.regular.start.call.lookups.O.initialize.D => _p_change_context(
                                                                                                                            $['l entry'],
                                                                                                                            ($) => Lookup_Selection(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                null,
                                                                                                                                null,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                )
                                                                                                            case 'pass through':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['pass through', null],
                                                                                                                )
                                                                                                            default:
                                                                                                                return _p.au(
                                                                                                                    $[0],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                )
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_arguments = _p_change_context(
                                                                                    $['arguments'],
                                                                                    ($) => _p.optional.map(
                                                                                        $,
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_location = $['l location']
                                                                                                return _p.decide.state(
                                                                                                    $['l state'],
                                                                                                    ($): t_out.Value_Selection.regular.start.call.arguments_.O => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'initialize':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['initialize', _p.dictionary.resolve(
                                                                                                                        $['l dictionary'],
                                                                                                                        ($, id, $a, $c): t_out.Value_Selection.regular.start.call.arguments_.O.initialize.D => _p_change_context(
                                                                                                                            $['l entry'],
                                                                                                                            ($) => Expression(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                null,
                                                                                                                                null,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                )
                                                                                                            case 'pass through':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['pass through', null],
                                                                                                                )
                                                                                                            default:
                                                                                                                return _p.au(
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
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['context', null],
                                                                    )
                                                                case 'dictionary entry':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['dictionary entry', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_dictionary = _p_change_context(
                                                                                    $['dictionary'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_id = _p_change_context(
                                                                                    $['id'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_abort_handler = _p_change_context(
                                                                                    $['abort handler'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                return {
                                                                                    'dictionary': prop_dictionary,
                                                                                    'id': prop_id,
                                                                                    'abort handler': prop_abort_handler,
                                                                                }
                                                                            },
                                                                        )],
                                                                    )
                                                                case 'list from text':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['list from text', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_source = _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_assign_item = _p_change_context(
                                                                                    $['assign item'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
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
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['lookup entry', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_lookup = _p_change_context(
                                                                                    $['lookup'],
                                                                                    ($) => Lookup_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_id = _p_change_context(
                                                                                    $['id'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_abort_handlers = _p_change_context(
                                                                                    $['abort handlers'],
                                                                                    ($) => _p.group.resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_no_such_entry = _p_change_context(
                                                                                                $['no such entry'],
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    null,
                                                                                                    null,
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_no_context_lookup = _p_change_context(
                                                                                                $['no context lookup'],
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    null,
                                                                                                    null,
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_cycle_detected = _p_change_context(
                                                                                                $['cycle detected'],
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    null,
                                                                                                    null,
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
                                                                case 'lookup entry depth':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['lookup entry depth', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_lookup = _p_change_context(
                                                                                    $['lookup'],
                                                                                    ($) => Lookup_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_id = _p_change_context(
                                                                                    $['id'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_abort_handlers = _p_change_context(
                                                                                    $['abort handlers'],
                                                                                    ($) => _p.group.resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_no_such_entry = _p_change_context(
                                                                                                $['no such entry'],
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    null,
                                                                                                    null,
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_no_context_lookup = _p_change_context(
                                                                                                $['no context lookup'],
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    null,
                                                                                                    null,
                                                                                                ),
                                                                                            )
                                                                                            
                                                                                            const prop_cycle_detected = _p_change_context(
                                                                                                $['cycle detected'],
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    null,
                                                                                                    null,
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
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['parameter', $],
                                                                    )
                                                                case 'parent sibling':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['parent sibling', $],
                                                                    )
                                                                case 'sibling':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['sibling', $],
                                                                    )
                                                                case 'state':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['state', null],
                                                                    )
                                                                case 'text from list':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['text from list', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_source = _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
                                                                                    ),
                                                                                )
                                                                                
                                                                                const prop_assign_character = _p_change_context(
                                                                                    $['assign character'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        null,
                                                                                        null,
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
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['variable', $],
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )
                                        
                                        const prop_tail = _p_change_context(
                                            $['tail'],
                                            ($) => _p.list.map(
                                                $['l list'],
                                                ($) => _p_change_context(
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
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )
        },
    )
    
    export const Lookup_Selection: t_signatures.Lookup_Selection = ($, abort, $l, $p) => _p_variables(
        () => {
            
            const var_location = $['l location']
            return _p.decide.state(
                $['l state'],
                ($): t_out.Lookup_Selection => {
                    switch ($[0]) {
                        case 'implement me':
                            return _p.ss(
                                $,
                                ($) => ['implement me', $],
                            )
                        case 'from parameter':
                            return _p.ss(
                                $,
                                ($) => ['from parameter', $],
                            )
                        case 'acyclic':
                            return _p.ss(
                                $,
                                ($) => ['acyclic', _p_variables(
                                    () => {
                                        
                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Lookup_Selection.acyclic => {
                                                switch ($[0]) {
                                                    case 'not set':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['not set', null],
                                                        )
                                                    case 'siblings':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['siblings', null],
                                                        )
                                                    case 'resolved dictionary':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['resolved dictionary', Value_Selection(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                null,
                                                                null,
                                                            )],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                )],
                            )
                        case 'cyclic':
                            return _p.ss(
                                $,
                                ($) => ['cyclic', _p_variables(
                                    () => {
                                        
                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Lookup_Selection.cyclic => {
                                                switch ($[0]) {
                                                    case 'not set':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['not set', null],
                                                        )
                                                    case 'siblings':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['siblings', null],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                )],
                            )
                        case 'stack':
                            return _p.ss(
                                $,
                                ($) => ['stack', _p_variables(
                                    () => {
                                        
                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Lookup_Selection.stack => {
                                                switch ($[0]) {
                                                    case 'empty':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['empty', null],
                                                        )
                                                    case 'push':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['push', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_stack = _p_change_context(
                                                                        $['stack'],
                                                                        ($) => Lookup_Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            null,
                                                                            null,
                                                                        ),
                                                                    )
                                                                    
                                                                    const prop_acyclic = _p_change_context(
                                                                        $['acyclic'],
                                                                        ($) => Lookup_Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            null,
                                                                            null,
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
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                )],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )
        },
    )
