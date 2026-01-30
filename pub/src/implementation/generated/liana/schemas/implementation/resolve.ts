
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
        ($) => _p.decide.state(
            $['l state'],
            ($): t_out.Module_Set.D => {
                switch ($[0]) {
                    case 'module':
                        return _p.ss(
                            $,
                            ($) => ['module', Module(
                                $,
                                ($) => abort(
                                    $
                                ),
                                null,
                                null
                            )]
                        )
                    case 'set':
                        return _p.ss(
                            $,
                            ($) => ['set', Module_Set(
                                $,
                                ($) => abort(
                                    $
                                ),
                                null,
                                null
                            )]
                        )
                    default:
                        return _p.au(
                            $[0]
                        )
                }
            }
        )
    )
)

export const Module: t_signatures.Module = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Module.type_ => {
                    switch ($[0]) {
                        case 'serializer':
                            return _p.ss(
                                $,
                                ($) => ['serializer', null]
                            )
                        case 'deserializer':
                            return _p.ss(
                                $,
                                ($) => ['deserializer', null]
                            )
                        case 'transformer':
                            return _p.ss(
                                $,
                                ($) => ['transformer', null]
                            )
                        case 'refiner':
                            return _p.ss(
                                $,
                                ($) => ['refiner', null]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
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
                                ($) => _p.list.map(
                                    $['l list'],
                                    ($) => _p_cc(
                                        $['l item'],
                                        ($) => $
                                    )
                                )
                            )
                            
                            const prop_type = _p_cc(
                                $['type'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Module.variable_imports.D.type_ => {
                                        switch ($[0]) {
                                            case 'ancestor':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['ancestor', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_dependency = _p_cc(
                                                                $['dependency'],
                                                                ($) => $
                                                            )
                                                            
                                                            const prop_number_of_steps = _p_cc(
                                                                $['number of steps'],
                                                                ($) => $
                                                            )
                                                            return {
                                                                'dependency': prop_dependency,
                                                                'number of steps': prop_number_of_steps,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'external':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['external', $]
                                                )
                                            case 'sibling':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['sibling', $]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
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
            ($) => _p.list.map(
                $['l list'],
                ($) => _p_cc(
                    $['l item'],
                    ($) => _p.decide.state(
                        $['l state'],
                        ($): t_out.Temp_Type_Node_Reference.sub_selection.L => {
                            switch ($[0]) {
                                case 'dictionary':
                                    return _p.ss(
                                        $,
                                        ($) => ['dictionary', null]
                                    )
                                case 'group':
                                    return _p.ss(
                                        $,
                                        ($) => ['group', $]
                                    )
                                case 'list':
                                    return _p.ss(
                                        $,
                                        ($) => ['list', null]
                                    )
                                case 'optional':
                                    return _p.ss(
                                        $,
                                        ($) => ['optional', null]
                                    )
                                case 'state':
                                    return _p.ss(
                                        $,
                                        ($) => ['state', $]
                                    )
                                default:
                                    return _p.au(
                                        $[0]
                                    )
                            }
                        }
                    )
                )
            )
        )
        return {
            'type': prop_type,
            'sub selection': prop_sub_selection,
        }
    }
)

export const Expression: t_signatures.Expression = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Expression => {
        switch ($[0]) {
            case 'decide':
                return _p.ss(
                    $,
                    ($) => ['decide', _p.group.resolve(
                        () => {
                            
                            const prop_type = _p_cc(
                                $['type'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Expression.decide.type_ => {
                                        switch ($[0]) {
                                            case 'boolean':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['boolean', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_source = _p_cc(
                                                                $['source'],
                                                                ($) => Selection(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            
                                                            const prop_temp_resulting_node = _p_cc(
                                                                $['temp resulting node'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Temp_Type_Node_Reference(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        ),
                                                                        null,
                                                                        null
                                                                    )
                                                                )
                                                            )
                                                            
                                                            const prop_if_false = _p_cc(
                                                                $['if false'],
                                                                ($) => Expression(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            
                                                            const prop_if_true = _p_cc(
                                                                $['if true'],
                                                                ($) => Expression(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            return {
                                                                'source': prop_source,
                                                                'temp resulting node': prop_temp_resulting_node,
                                                                'if false': prop_if_false,
                                                                'if true': prop_if_true,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'dictionary':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['dictionary', _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Expression.decide.type_.dictionary => {
                                                            switch ($[0]) {
                                                                case 'has entries':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['has entries', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_dictionary = _p_cc(
                                                                                    $['dictionary'],
                                                                                    ($) => Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                
                                                                                const prop_if_false = _p_cc(
                                                                                    $['if false'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                
                                                                                const prop_if_true = _p_cc(
                                                                                    $['if true'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                return {
                                                                                    'dictionary': prop_dictionary,
                                                                                    'if false': prop_if_false,
                                                                                    'if true': prop_if_true,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'list':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['list', _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Expression.decide.type_.list => {
                                                            switch ($[0]) {
                                                                case 'has first item':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['has first item', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_list = _p_cc(
                                                                                    $['list'],
                                                                                    ($) => Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                
                                                                                const prop_if_false = _p_cc(
                                                                                    $['if false'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                
                                                                                const prop_if_true = _p_cc(
                                                                                    $['if true'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                return {
                                                                                    'list': prop_list,
                                                                                    'if false': prop_if_false,
                                                                                    'if true': prop_if_true,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                case 'has last item':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['has last item', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_list = _p_cc(
                                                                                    $['list'],
                                                                                    ($) => Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                
                                                                                const prop_if_false = _p_cc(
                                                                                    $['if false'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                
                                                                                const prop_if_true = _p_cc(
                                                                                    $['if true'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                return {
                                                                                    'list': prop_list,
                                                                                    'if false': prop_if_false,
                                                                                    'if true': prop_if_true,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                case 'has items':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['has items', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_list = _p_cc(
                                                                                    $['list'],
                                                                                    ($) => Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                
                                                                                const prop_if_false = _p_cc(
                                                                                    $['if false'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                
                                                                                const prop_if_true = _p_cc(
                                                                                    $['if true'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        ),
                                                                                        null,
                                                                                        null
                                                                                    )
                                                                                )
                                                                                return {
                                                                                    'list': prop_list,
                                                                                    'if false': prop_if_false,
                                                                                    'if true': prop_if_true,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'optional':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['optional', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_source = _p_cc(
                                                                $['source'],
                                                                ($) => Selection(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            
                                                            const prop_temp_resulting_node = _p_cc(
                                                                $['temp resulting node'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Temp_Type_Node_Reference(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        ),
                                                                        null,
                                                                        null
                                                                    )
                                                                )
                                                            )
                                                            
                                                            const prop_if_not_set = _p_cc(
                                                                $['if not set'],
                                                                ($) => Expression(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            
                                                            const prop_if_set = _p_cc(
                                                                $['if set'],
                                                                ($) => Expression(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            return {
                                                                'source': prop_source,
                                                                'temp resulting node': prop_temp_resulting_node,
                                                                'if not set': prop_if_not_set,
                                                                'if set': prop_if_set,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'state':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['state', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_source = _p_cc(
                                                                $['source'],
                                                                ($) => Selection(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            
                                                            const prop_temp_resulting_node = _p_cc(
                                                                $['temp resulting node'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Temp_Type_Node_Reference(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        ),
                                                                        null,
                                                                        null
                                                                    )
                                                                )
                                                            )
                                                            
                                                            const prop_type = _p_cc(
                                                                $['type'],
                                                                ($) => _p.decide.state(
                                                                    $['l state'],
                                                                    ($): t_out.Expression.decide.type_.state.type_ => {
                                                                        switch ($[0]) {
                                                                            case 'partial':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['partial', _p.group.resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_options = _p_cc(
                                                                                                $['options'],
                                                                                                ($) => _p.dictionary.resolve(
                                                                                                    $['l dictionary'],
                                                                                                    ($, id, $a, $c): t_out.Expression.decide.type_.state.type_.partial.options.D => _p_cc(
                                                                                                        $['l entry'],
                                                                                                        ($) => Expression(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $
                                                                                                            ),
                                                                                                            null,
                                                                                                            null
                                                                                                        )
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                            
                                                                                            const prop_default = _p_cc(
                                                                                                $['default'],
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    ),
                                                                                                    null,
                                                                                                    null
                                                                                                )
                                                                                            )
                                                                                            return {
                                                                                                'options': prop_options,
                                                                                                'default': prop_default,
                                                                                            }
                                                                                        }
                                                                                    )]
                                                                                )
                                                                            case 'full':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['full', _p.group.resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_options = _p_cc(
                                                                                                $['options'],
                                                                                                ($) => _p.dictionary.resolve(
                                                                                                    $['l dictionary'],
                                                                                                    ($, id, $a, $c): t_out.Expression.decide.type_.state.type_.full.options.D => _p_cc(
                                                                                                        $['l entry'],
                                                                                                        ($) => Expression(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $
                                                                                                            ),
                                                                                                            null,
                                                                                                            null
                                                                                                        )
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                            return {
                                                                                                'options': prop_options,
                                                                                            }
                                                                                        }
                                                                                    )]
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0]
                                                                                )
                                                                        }
                                                                    }
                                                                )
                                                            )
                                                            return {
                                                                'source': prop_source,
                                                                'temp resulting node': prop_temp_resulting_node,
                                                                'type': prop_type,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'text':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['text', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_source = _p_cc(
                                                                $['source'],
                                                                ($) => Selection(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            
                                                            const prop_temp_resulting_node = _p_cc(
                                                                $['temp resulting node'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Temp_Type_Node_Reference(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        ),
                                                                        null,
                                                                        null
                                                                    )
                                                                )
                                                            )
                                                            
                                                            const prop_cases = _p_cc(
                                                                $['cases'],
                                                                ($) => _p.dictionary.resolve(
                                                                    $['l dictionary'],
                                                                    ($, id, $a, $c): t_out.Expression.decide.type_.text.cases.D => _p_cc(
                                                                        $['l entry'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                            
                                                            const prop_default = _p_cc(
                                                                $['default'],
                                                                ($) => Expression(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            return {
                                                                'source': prop_source,
                                                                'temp resulting node': prop_temp_resulting_node,
                                                                'cases': prop_cases,
                                                                'default': prop_default,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            return {
                                'type': prop_type,
                            }
                        }
                    )]
                )
            case 'initialize':
                return _p.ss(
                    $,
                    ($) => ['initialize', _p.decide.state(
                        $['l state'],
                        ($): t_out.Expression.initialize => {
                            switch ($[0]) {
                                case 'boolean':
                                    return _p.ss(
                                        $,
                                        ($) => ['boolean', _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Expression.initialize.boolean_ => {
                                                switch ($[0]) {
                                                    case 'literal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['literal', _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Expression.initialize.boolean_.literal => {
                                                                    switch ($[0]) {
                                                                        case 'false':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['false', null]
                                                                            )
                                                                        case 'true':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['true', null]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'not':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['not', Selection(
                                                                $,
                                                                ($) => abort(
                                                                    $
                                                                ),
                                                                null,
                                                                null
                                                            )]
                                                        )
                                                    case 'copy':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['copy', Selection(
                                                                $,
                                                                ($) => abort(
                                                                    $
                                                                ),
                                                                null,
                                                                null
                                                            )]
                                                        )
                                                    case 'dictionary is empty':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['dictionary is empty', Selection(
                                                                $,
                                                                ($) => abort(
                                                                    $
                                                                ),
                                                                null,
                                                                null
                                                            )]
                                                        )
                                                    case 'list is empty':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['list is empty', Selection(
                                                                $,
                                                                ($) => abort(
                                                                    $
                                                                ),
                                                                null,
                                                                null
                                                            )]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    )
                                case 'dictionary':
                                    return _p.ss(
                                        $,
                                        ($) => ['dictionary', _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Expression.initialize.dictionary => {
                                                switch ($[0]) {
                                                    case 'filter':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['filter', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_entry_handler = _p_cc(
                                                                        $['entry handler'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'entry handler': prop_entry_handler,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'from list':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['from list', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_get_id = _p_cc(
                                                                        $['get id'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_get_entry = _p_cc(
                                                                        $['get entry'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_abort = _p_cc(
                                                                        $['abort'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'get id': prop_get_id,
                                                                        'get entry': prop_get_entry,
                                                                        'abort': prop_abort,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'literal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['literal', _p.dictionary.resolve(
                                                                $['l dictionary'],
                                                                ($, id, $a, $c): t_out.Expression.initialize.dictionary.literal.D => _p_cc(
                                                                    $['l entry'],
                                                                    ($) => Expression(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        ),
                                                                        null,
                                                                        null
                                                                    )
                                                                )
                                                            )]
                                                        )
                                                    case 'map':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['map', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_entry_handler = _p_cc(
                                                                        $['entry handler'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'entry handler': prop_entry_handler,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'resolve':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['resolve', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_entry_handler = _p_cc(
                                                                        $['entry handler'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_temp_resulting_entry_node = _p_cc(
                                                                        $['temp resulting entry node'],
                                                                        ($) => Temp_Type_Node_Reference(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'entry handler': prop_entry_handler,
                                                                        'temp resulting entry node': prop_temp_resulting_entry_node,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    )
                                case 'group':
                                    return _p.ss(
                                        $,
                                        ($) => ['group', _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Expression.initialize.group => {
                                                switch ($[0]) {
                                                    case 'literal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['literal', _p.dictionary.resolve(
                                                                $['l dictionary'],
                                                                ($, id, $a, $c): t_out.Expression.initialize.group.literal.D => _p_cc(
                                                                    $['l entry'],
                                                                    ($) => Expression(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        ),
                                                                        null,
                                                                        null
                                                                    )
                                                                )
                                                            )]
                                                        )
                                                    case 'resolve':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['resolve', _p.dictionary.resolve(
                                                                $['l dictionary'],
                                                                ($, id, $a, $c): t_out.Expression.initialize.group.resolve.D => _p_cc(
                                                                    $['l entry'],
                                                                    ($) => Expression(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        ),
                                                                        null,
                                                                        null
                                                                    )
                                                                )
                                                            )]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    )
                                case 'list':
                                    return _p.ss(
                                        $,
                                        ($) => ['list', _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Expression.initialize.list => {
                                                switch ($[0]) {
                                                    case 'filter':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['filter', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_entry_handler = _p_cc(
                                                                        $['entry handler'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'entry handler': prop_entry_handler,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'from dictionary':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['from dictionary', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_get_item = _p_cc(
                                                                        $['get item'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'get item': prop_get_item,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'literal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['literal', _p.list.map(
                                                                $['l list'],
                                                                ($) => _p_cc(
                                                                    $['l item'],
                                                                    ($) => Expression(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        ),
                                                                        null,
                                                                        null
                                                                    )
                                                                )
                                                            )]
                                                        )
                                                    case 'map':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['map', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_item_handler = _p_cc(
                                                                        $['item handler'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'item handler': prop_item_handler,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'map with state':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['map with state', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_initial_state = _p_cc(
                                                                        $['initial state'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_item_handler = _p_cc(
                                                                        $['item handler'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_update_state = _p_cc(
                                                                        $['update state'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_wrap_up = _p_cc(
                                                                        $['wrap up'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'initial state': prop_initial_state,
                                                                        'item handler': prop_item_handler,
                                                                        'update state': prop_update_state,
                                                                        'wrap up': prop_wrap_up,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'reduce':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['reduce', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_initial_state = _p_cc(
                                                                        $['initial state'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_item_handler = _p_cc(
                                                                        $['item handler'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'initial state': prop_initial_state,
                                                                        'item handler': prop_item_handler,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'reverse':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['reverse', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    )
                                case 'nothing':
                                    return _p.ss(
                                        $,
                                        ($) => ['nothing', null]
                                    )
                                case 'number':
                                    return _p.ss(
                                        $,
                                        ($) => ['number', _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Expression.initialize.number_ => {
                                                switch ($[0]) {
                                                    case 'approximation':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['approximation', _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Expression.initialize.number_.approximation => {
                                                                    switch ($[0]) {
                                                                        case 'copy':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['copy', Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    ),
                                                                                    null,
                                                                                    null
                                                                                )]
                                                                            )
                                                                        case 'literal':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['literal', $]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'integer':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['integer', _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Expression.initialize.number_.integer => {
                                                                    switch ($[0]) {
                                                                        case 'copy':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['copy', Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    ),
                                                                                    null,
                                                                                    null
                                                                                )]
                                                                            )
                                                                        case 'divide':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['divide', _p.group.resolve(
                                                                                    () => {
                                                                                        
                                                                                        const prop_divident = _p_cc(
                                                                                            $['divident'],
                                                                                            ($) => Selection(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $
                                                                                                ),
                                                                                                null,
                                                                                                null
                                                                                            )
                                                                                        )
                                                                                        
                                                                                        const prop_divisor = _p_cc(
                                                                                            $['divisor'],
                                                                                            ($) => Selection(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $
                                                                                                ),
                                                                                                null,
                                                                                                null
                                                                                            )
                                                                                        )
                                                                                        
                                                                                        const prop_abort = _p_cc(
                                                                                            $['abort'],
                                                                                            ($) => Expression(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $
                                                                                                ),
                                                                                                null,
                                                                                                null
                                                                                            )
                                                                                        )
                                                                                        return {
                                                                                            'divident': prop_divident,
                                                                                            'divisor': prop_divisor,
                                                                                            'abort': prop_abort,
                                                                                        }
                                                                                    }
                                                                                )]
                                                                            )
                                                                        case 'literal':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['literal', $]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'natural':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['natural', _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Expression.initialize.number_.natural => {
                                                                    switch ($[0]) {
                                                                        case 'copy':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['copy', Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    ),
                                                                                    null,
                                                                                    null
                                                                                )]
                                                                            )
                                                                        case 'literal':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['literal', $]
                                                                            )
                                                                        case 'number of dictionary entries':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['number of dictionary entries', _p.group.resolve(
                                                                                    () => {
                                                                                        
                                                                                        const prop_dictionary = _p_cc(
                                                                                            $['dictionary'],
                                                                                            ($) => Selection(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $
                                                                                                ),
                                                                                                null,
                                                                                                null
                                                                                            )
                                                                                        )
                                                                                        return {
                                                                                            'dictionary': prop_dictionary,
                                                                                        }
                                                                                    }
                                                                                )]
                                                                            )
                                                                        case 'number of list items':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['number of list items', _p.group.resolve(
                                                                                    () => {
                                                                                        
                                                                                        const prop_list = _p_cc(
                                                                                            $['list'],
                                                                                            ($) => Selection(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $
                                                                                                ),
                                                                                                null,
                                                                                                null
                                                                                            )
                                                                                        )
                                                                                        return {
                                                                                            'list': prop_list,
                                                                                        }
                                                                                    }
                                                                                )]
                                                                            )
                                                                        case 'source column':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['source column', null]
                                                                            )
                                                                        case 'source line':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['source line', null]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    )
                                case 'optional':
                                    return _p.ss(
                                        $,
                                        ($) => ['optional', _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Expression.initialize.optional => {
                                                switch ($[0]) {
                                                    case 'from boolean':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['from boolean', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_get_set = _p_cc(
                                                                        $['get set'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'get set': prop_get_set,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'literal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['literal', _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Expression.initialize.optional.literal => {
                                                                    switch ($[0]) {
                                                                        case 'not set':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['not set', null]
                                                                            )
                                                                        case 'set':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['set', Expression(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    ),
                                                                                    null,
                                                                                    null
                                                                                )]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'map':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['map', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_source = _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_set_handler = _p_cc(
                                                                        $['set handler'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'source': prop_source,
                                                                        'set handler': prop_set_handler,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    )
                                case 'state':
                                    return _p.ss(
                                        $,
                                        ($) => ['state', _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Expression.initialize.state => {
                                                switch ($[0]) {
                                                    case 'literal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['literal', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_option = _p_cc(
                                                                        $['option'],
                                                                        ($) => $
                                                                    )
                                                                    
                                                                    const prop_value = _p_cc(
                                                                        $['value'],
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            ),
                                                                            null,
                                                                            null
                                                                        )
                                                                    )
                                                                    return {
                                                                        'option': prop_option,
                                                                        'value': prop_value,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    )
                                case 'text':
                                    return _p.ss(
                                        $,
                                        ($) => ['text', _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Expression.initialize.text => {
                                                switch ($[0]) {
                                                    case 'copy':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['copy', Selection(
                                                                $,
                                                                ($) => abort(
                                                                    $
                                                                ),
                                                                null,
                                                                null
                                                            )]
                                                        )
                                                    case 'literal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['literal', _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_type = _p_cc(
                                                                        $['type'],
                                                                        ($) => _p.decide.state(
                                                                            $['l state'],
                                                                            ($): t_out.Expression.initialize.text.literal.type_ => {
                                                                                switch ($[0]) {
                                                                                    case 'identifier':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['identifier', null]
                                                                                        )
                                                                                    case 'freeform':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['freeform', null]
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        )
                                                                    )
                                                                    
                                                                    const prop_value = _p_cc(
                                                                        $['value'],
                                                                        ($) => $
                                                                    )
                                                                    return {
                                                                        'type': prop_type,
                                                                        'value': prop_value,
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    case 'source document':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['source document', null]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    )
                                default:
                                    return _p.au(
                                        $[0]
                                    )
                            }
                        }
                    )]
                )
            case 'select':
                return _p.ss(
                    $,
                    ($) => ['select', Selection(
                        $,
                        ($) => abort(
                            $
                        ),
                        null,
                        null
                    )]
                )
            case 'special':
                return _p.ss(
                    $,
                    ($) => ['special', _p.decide.state(
                        $['l state'],
                        ($): t_out.Expression.special => {
                            switch ($[0]) {
                                case 'abort':
                                    return _p.ss(
                                        $,
                                        ($) => ['abort', Expression(
                                            $,
                                            ($) => abort(
                                                $
                                            ),
                                            null,
                                            null
                                        )]
                                    )
                                case 'assert':
                                    return _p.ss(
                                        $,
                                        ($) => ['assert', _p.group.resolve(
                                            () => {
                                                
                                                const prop_tester = _p_cc(
                                                    $['tester'],
                                                    ($) => Expression(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        null,
                                                        null
                                                    )
                                                )
                                                
                                                const prop_normal_flow = _p_cc(
                                                    $['normal flow'],
                                                    ($) => Expression(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        null,
                                                        null
                                                    )
                                                )
                                                return {
                                                    'tester': prop_tester,
                                                    'normal flow': prop_normal_flow,
                                                }
                                            }
                                        )]
                                    )
                                case 'change context':
                                    return _p.ss(
                                        $,
                                        ($) => ['change context', _p.group.resolve(
                                            () => {
                                                
                                                const prop_new_context = _p_cc(
                                                    $['new context'],
                                                    ($) => Selection(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        null,
                                                        null
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
                                                return {
                                                    'new context': prop_new_context,
                                                    'expression': prop_expression,
                                                }
                                            }
                                        )]
                                    )
                                case 'implement me':
                                    return _p.ss(
                                        $,
                                        ($) => ['implement me', $]
                                    )
                                case 'iterate':
                                    return _p.ss(
                                        $,
                                        ($) => ['iterate', _p.group.resolve(
                                            () => {
                                                
                                                const prop_list = _p_cc(
                                                    $['list'],
                                                    ($) => Selection(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        null,
                                                        null
                                                    )
                                                )
                                                
                                                const prop_handler = _p_cc(
                                                    $['handler'],
                                                    ($) => Expression(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        null,
                                                        null
                                                    )
                                                )
                                                return {
                                                    'list': prop_list,
                                                    'handler': prop_handler,
                                                }
                                            }
                                        )]
                                    )
                                case 'unreachable':
                                    return _p.ss(
                                        $,
                                        ($) => ['unreachable', null]
                                    )
                                default:
                                    return _p.au(
                                        $[0]
                                    )
                            }
                        }
                    )]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Selection: t_signatures.Selection = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Selection => {
        switch ($[0]) {
            case 'implement me':
                return _p.ss(
                    $,
                    ($) => ['implement me', $]
                )
            case 'regular':
                return _p.ss(
                    $,
                    ($) => ['regular', _p.group.resolve(
                        () => {
                            
                            const prop_start = _p_cc(
                                $['start'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Selection.regular.start => {
                                        switch ($[0]) {
                                            case 'call':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['call', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_source = _p_cc(
                                                                $['source'],
                                                                ($) => _p.decide.state(
                                                                    $['l state'],
                                                                    ($): t_out.Selection.regular.start.call.source => {
                                                                        switch ($[0]) {
                                                                            case 'local':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['local', $]
                                                                                )
                                                                            case 'imported':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['imported', _p.group.resolve(
                                                                                        () => {
                                                                                            
                                                                                            const prop_import = _p_cc(
                                                                                                $['import'],
                                                                                                ($) => $
                                                                                            )
                                                                                            
                                                                                            const prop_variable = _p_cc(
                                                                                                $['variable'],
                                                                                                ($) => $
                                                                                            )
                                                                                            return {
                                                                                                'import': prop_import,
                                                                                                'variable': prop_variable,
                                                                                            }
                                                                                        }
                                                                                    )]
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0]
                                                                                )
                                                                        }
                                                                    }
                                                                )
                                                            )
                                                            
                                                            const prop_context = _p_cc(
                                                                $['context'],
                                                                ($) => Expression(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            
                                                            const prop_abort = _p_cc(
                                                                $['abort'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Expression(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        ),
                                                                        null,
                                                                        null
                                                                    )
                                                                )
                                                            )
                                                            
                                                            const prop_lookups = _p_cc(
                                                                $['lookups'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => _p.decide.state(
                                                                        $['l state'],
                                                                        ($): t_out.Selection.regular.start.call.lookups.O => {
                                                                            switch ($[0]) {
                                                                                case 'initialize':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['initialize', _p.dictionary.resolve(
                                                                                            $['l dictionary'],
                                                                                            ($, id, $a, $c): t_out.Selection.regular.start.call.lookups.O.initialize.D => _p_cc(
                                                                                                $['l entry'],
                                                                                                ($) => Lookup_Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    ),
                                                                                                    null,
                                                                                                    null
                                                                                                )
                                                                                            )
                                                                                        )]
                                                                                    )
                                                                                case 'pass through':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['pass through', null]
                                                                                    )
                                                                                default:
                                                                                    return _p.au(
                                                                                        $[0]
                                                                                    )
                                                                            }
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                            
                                                            const prop_arguments = _p_cc(
                                                                $['arguments'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => _p.decide.state(
                                                                        $['l state'],
                                                                        ($): t_out.Selection.regular.start.call.arguments_.O => {
                                                                            switch ($[0]) {
                                                                                case 'initialize':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['initialize', _p.dictionary.resolve(
                                                                                            $['l dictionary'],
                                                                                            ($, id, $a, $c): t_out.Selection.regular.start.call.arguments_.O.initialize.D => _p_cc(
                                                                                                $['l entry'],
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    ),
                                                                                                    null,
                                                                                                    null
                                                                                                )
                                                                                            )
                                                                                        )]
                                                                                    )
                                                                                case 'pass through':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['pass through', null]
                                                                                    )
                                                                                default:
                                                                                    return _p.au(
                                                                                        $[0]
                                                                                    )
                                                                            }
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                            return {
                                                                'source': prop_source,
                                                                'context': prop_context,
                                                                'abort': prop_abort,
                                                                'lookups': prop_lookups,
                                                                'arguments': prop_arguments,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'context':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['context', null]
                                                )
                                            case 'entry':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['entry', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_dictionary = _p_cc(
                                                                $['dictionary'],
                                                                ($) => Selection(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            
                                                            const prop_id = _p_cc(
                                                                $['id'],
                                                                ($) => Expression(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            
                                                            const prop_abort_handler = _p_cc(
                                                                $['abort handler'],
                                                                ($) => Expression(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    null
                                                                )
                                                            )
                                                            return {
                                                                'dictionary': prop_dictionary,
                                                                'id': prop_id,
                                                                'abort handler': prop_abort_handler,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'parameter':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['parameter', $]
                                                )
                                            case 'variable':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['variable', _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Selection.regular.start.variable => {
                                                            switch ($[0]) {
                                                                case 'local':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['local', $]
                                                                    )
                                                                case 'imported':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['imported', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_import = _p_cc(
                                                                                    $['import'],
                                                                                    ($) => $
                                                                                )
                                                                                
                                                                                const prop_variable = _p_cc(
                                                                                    $['variable'],
                                                                                    ($) => $
                                                                                )
                                                                                return {
                                                                                    'import': prop_import,
                                                                                    'variable': prop_variable,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_tail = _p_cc(
                                $['tail'],
                                ($) => _p.list.map(
                                    $['l list'],
                                    ($) => _p_cc(
                                        $['l item'],
                                        ($) => $
                                    )
                                )
                            )
                            return {
                                'start': prop_start,
                                'tail': prop_tail,
                            }
                        }
                    )]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Lookup_Selection: t_signatures.Lookup_Selection = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Lookup_Selection => {
        switch ($[0]) {
            case 'implement me':
                return _p.ss(
                    $,
                    ($) => ['implement me', $]
                )
            case 'from resolved dictionary':
                return _p.ss(
                    $,
                    ($) => ['from resolved dictionary', Selection(
                        $,
                        ($) => abort(
                            $
                        ),
                        null,
                        null
                    )]
                )
            case 'from siblings':
                return _p.ss(
                    $,
                    ($) => ['from siblings', _p.group.resolve(
                        () => {
                            
                            const prop_cycles_allowed = _p_cc(
                                $['cycles allowed'],
                                ($) => $
                            )
                            return {
                                'cycles allowed': prop_cycles_allowed,
                            }
                        }
                    )]
                )
            case 'from parameter':
                return _p.ss(
                    $,
                    ($) => ['from parameter', $]
                )
            case 'not set':
                return _p.ss(
                    $,
                    ($) => ['not set', null]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)
