
import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as _p_sl from 'pareto-core/dist/implementation/refiner/specials/lookup'

import _p_unreachable_code_path from 'pareto-core/dist/implementation/transformer/specials/unreachable_code_path'

import p_variables from 'pareto-core/dist/implementation/refiner/specials/variables'



import * as t_out from "../../../../../../../interface/generated/liana/schemas/interface/data/resolved"

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/interface/signatures/resolved/refiners/unresolved"

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
        
        const prop_imports = p_change_context(
            $['imports'],
            ($) => Imports(
                $,
                ($) => abort(
                    $,
                ),
                p_.literal.nothing(),
                p_.literal.nothing(),
            ),
        )
        
        const prop_content = p_change_context(
            $['content'],
            ($) => p_variables(
                () => {
                    
                    const var_location = $['l location']
                    return p_decide_state(
                        $['l state'],
                        ($): t_out.Package.content => {
                            switch ($[0]) {
                                case 'data modules':
                                    return p_.ss(
                                        $,
                                        ($) => ['data modules', p_.from.dictionary(
                                            $['l dictionary'],
                                        ).resolve(
                                            ($, id, $a, $c): t_out.Package.content.data_modules.D => p_change_context(
                                                $['l entry'],
                                                ($) => Value(
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
                                case 'functions':
                                    return p_.ss(
                                        $,
                                        ($) => ['functions', p_.from.dictionary(
                                            $['l dictionary'],
                                        ).resolve(
                                            ($, id, $a, $c): t_out.Package.content.functions.D => p_change_context(
                                                $['l entry'],
                                                ($) => p_.literal.group_resolve(
                                                    () => {
                                                        
                                                        const prop_result = p_change_context(
                                                            $['result'],
                                                            ($) => Value(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                p_.literal.nothing(),
                                                                p_.literal.nothing(),
                                                            ),
                                                        )
                                                        
                                                        const prop_context = p_change_context(
                                                            $['context'],
                                                            ($) => Value(
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
                                                                        ($): t_out.Package.content.functions.D.type_ => {
                                                                            switch ($[0]) {
                                                                                case 'transformer':
                                                                                    return p_.ss(
                                                                                        $,
                                                                                        ($) => ['transformer', null],
                                                                                    )
                                                                                case 'refiner':
                                                                                    return p_.ss(
                                                                                        $,
                                                                                        ($) => ['refiner', p_.literal.group_resolve(
                                                                                            () => {
                                                                                                
                                                                                                const prop_error = p_change_context(
                                                                                                    $['error'],
                                                                                                    ($) => p_.from.optional(
                                                                                                        $,
                                                                                                    ).map(
                                                                                                        ($) => Value(
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
                                                                                                        ($) => p_.from.dictionary(
                                                                                                            $['l dictionary'],
                                                                                                        ).resolve(
                                                                                                            ($, id, $a, $c): t_out.Package.content.functions.D.type_.refiner.lookups.O.D => p_change_context(
                                                                                                                $['l entry'],
                                                                                                                ($) => p_variables(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const var_location = $['l location']
                                                                                                                        return p_decide_state(
                                                                                                                            $['l state'],
                                                                                                                            ($): t_out.Package.content.functions.D.type_.refiner.lookups.O.D => {
                                                                                                                                switch ($[0]) {
                                                                                                                                    case 'acyclic':
                                                                                                                                        return p_.ss(
                                                                                                                                            $,
                                                                                                                                            ($) => ['acyclic', Value(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                p_.literal.nothing(),
                                                                                                                                                p_.literal.nothing(),
                                                                                                                                            )],
                                                                                                                                        )
                                                                                                                                    case 'cyclic':
                                                                                                                                        return p_.ss(
                                                                                                                                            $,
                                                                                                                                            ($) => ['cyclic', Value(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                p_.literal.nothing(),
                                                                                                                                                p_.literal.nothing(),
                                                                                                                                            )],
                                                                                                                                        )
                                                                                                                                    case 'stack':
                                                                                                                                        return p_.ss(
                                                                                                                                            $,
                                                                                                                                            ($) => ['stack', Value(
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
                                                                                                        ),
                                                                                                    ),
                                                                                                )
                                                                                                return {
                                                                                                    'error': prop_error,
                                                                                                    'lookups': prop_lookups,
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
                                                        
                                                        const prop_parameters = p_change_context(
                                                            $['parameters'],
                                                            ($) => p_.from.optional(
                                                                $,
                                                            ).map(
                                                                ($) => p_.from.dictionary(
                                                                    $['l dictionary'],
                                                                ).resolve(
                                                                    ($, id, $a, $c): t_out.Package.content.functions.D.parameters.O.D => p_change_context(
                                                                        $['l entry'],
                                                                        ($) => Value(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            p_.literal.nothing(),
                                                                            p_.literal.nothing(),
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        )
                                                        return {
                                                            'result': prop_result,
                                                            'context': prop_context,
                                                            'type': prop_type,
                                                            'parameters': prop_parameters,
                                                        }
                                                    },
                                                ),
                                            ),
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
            'imports': prop_imports,
            'content': prop_content,
        }
    },
)

export const Imports: t_signatures.Imports = ($, abort, $l, $p) => p_.from.dictionary(
    $['l dictionary'],
).resolve(
    ($, id, $a, $c): t_out.Imports.D => p_change_context(
        $['l entry'],
        ($) => p_.literal.group_resolve(
            () => {
                
                const prop_type = p_change_context(
                    $['type'],
                    ($) => p_variables(
                        () => {
                            
                            const var_location = $['l location']
                            return p_decide_state(
                                $['l state'],
                                ($): t_out.Imports.D.type_ => {
                                    switch ($[0]) {
                                        case 'external':
                                            return p_.ss(
                                                $,
                                                ($) => ['external', $],
                                            )
                                        case 'ancestor':
                                            return p_.ss(
                                                $,
                                                ($) => ['ancestor', p_.literal.group_resolve(
                                                    () => {
                                                        
                                                        const prop_number_of_steps = p_change_context(
                                                            $['number of steps'],
                                                            ($) => $,
                                                        )
                                                        
                                                        const prop_dependency = p_change_context(
                                                            $['dependency'],
                                                            ($) => $,
                                                        )
                                                        return {
                                                            'number of steps': prop_number_of_steps,
                                                            'dependency': prop_dependency,
                                                        }
                                                    },
                                                )],
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
                    'type': prop_type,
                    'tail': prop_tail,
                }
            },
        ),
    ),
)

export const Value: t_signatures.Value = ($, abort, $l, $p) => p_variables(
    () => {
        
        const var_location = $['l location']
        return p_decide_state(
            $['l state'],
            ($): t_out.Value => {
                switch ($[0]) {
                    case 'boolean':
                        return p_.ss(
                            $,
                            ($) => ['boolean', null],
                        )
                    case 'component':
                        return p_.ss(
                            $,
                            ($) => ['component', p_.literal.group_resolve(
                                () => {
                                    
                                    const prop_location = p_change_context(
                                        $['location'],
                                        ($) => Module_Reference(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            p_.literal.nothing(),
                                            p_.literal.nothing(),
                                        ),
                                    )
                                    return {
                                        'location': prop_location,
                                    }
                                },
                            )],
                        )
                    case 'dictionary':
                        return p_.ss(
                            $,
                            ($) => ['dictionary', Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                p_.literal.nothing(),
                                p_.literal.nothing(),
                            )],
                        )
                    case 'group':
                        return p_.ss(
                            $,
                            ($) => ['group', p_.from.dictionary(
                                $['l dictionary'],
                            ).resolve(
                                ($, id, $a, $c): t_out.Value.group.D => p_change_context(
                                    $['l entry'],
                                    ($) => Value(
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
                    case 'list':
                        return p_.ss(
                            $,
                            ($) => ['list', Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                p_.literal.nothing(),
                                p_.literal.nothing(),
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
                                        ($): t_out.Value.number_ => {
                                            switch ($[0]) {
                                                case 'exact':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['exact', p_variables(
                                                            () => {
                                                                
                                                                const var_location = $['l location']
                                                                return p_decide_state(
                                                                    $['l state'],
                                                                    ($): t_out.Value.number_.exact => {
                                                                        switch ($[0]) {
                                                                            case 'natural':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['natural', null],
                                                                                )
                                                                            case 'integer':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['integer', null],
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
                                                case 'approximation':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['approximation', null],
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
                            ($) => ['optional', Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                p_.literal.nothing(),
                                p_.literal.nothing(),
                            )],
                        )
                    case 'reference':
                        return p_.ss(
                            $,
                            ($) => ['reference', p_.literal.group_resolve(
                                () => {
                                    
                                    const prop_location = p_change_context(
                                        $['location'],
                                        ($) => Module_Reference(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            p_.literal.nothing(),
                                            p_.literal.nothing(),
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
                                                            ($): t_out.Value.reference.sub_selection.L => {
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
                                    
                                    const prop_cyclic = p_change_context(
                                        $['cyclic'],
                                        ($) => $,
                                    )
                                    return {
                                        'location': prop_location,
                                        'sub selection': prop_sub_selection,
                                        'cyclic': prop_cyclic,
                                    }
                                },
                            )],
                        )
                    case 'state':
                        return p_.ss(
                            $,
                            ($) => ['state', p_.from.dictionary(
                                $['l dictionary'],
                            ).resolve(
                                ($, id, $a, $c): t_out.Value.state.D => p_change_context(
                                    $['l entry'],
                                    ($) => Value(
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
                    case 'text':
                        return p_.ss(
                            $,
                            ($) => ['text', null],
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

export const Module_Reference: t_signatures.Module_Reference = ($, abort, $l, $p) => p_variables(
    () => {
        
        const var_location = $['l location']
        return p_decide_state(
            $['l state'],
            ($): t_out.Module_Reference => {
                switch ($[0]) {
                    case 'import':
                        return p_.ss(
                            $,
                            ($) => ['import', p_.literal.group_resolve(
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
                            )],
                        )
                    case 'local':
                        return p_.ss(
                            $,
                            ($) => ['local', $],
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
