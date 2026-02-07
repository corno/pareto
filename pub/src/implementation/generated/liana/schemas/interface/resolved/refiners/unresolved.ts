
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as _pdev from 'pareto-core-dev'

import * as _p_sl from 'pareto-core/dist/select_lookup'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_out from "../../../../../../../interface/generated/liana/schemas/interface/data/resolved"

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/interface/resolve"

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
        
        const prop_imports = _p_change_context(
            $['imports'],
            ($) => Imports(
                $,
                ($) => abort(
                    $,
                ),
                null,
                null,
            ),
        )
        
        const prop_content = _p_change_context(
            $['content'],
            ($) => _p_variables(
                () => {
                    
                    const var_location = $['l location']
                    return _p.decide.state(
                        $['l state'],
                        ($): t_out.Package.content => {
                            switch ($[0]) {
                                case 'data modules':
                                    return _p.ss(
                                        $,
                                        ($) => ['data modules', _p.dictionary.resolve(
                                            $['l dictionary'],
                                            ($, id, $a, $c): t_out.Package.content.data_modules.D => _p_change_context(
                                                $['l entry'],
                                                ($) => Value(
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
                                case 'functions':
                                    return _p.ss(
                                        $,
                                        ($) => ['functions', _p.dictionary.resolve(
                                            $['l dictionary'],
                                            ($, id, $a, $c): t_out.Package.content.functions.D => _p_change_context(
                                                $['l entry'],
                                                ($) => _p.group.resolve(
                                                    () => {
                                                        
                                                        const prop_result = _p_change_context(
                                                            $['result'],
                                                            ($) => Value(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                null,
                                                                null,
                                                            ),
                                                        )
                                                        
                                                        const prop_context = _p_change_context(
                                                            $['context'],
                                                            ($) => Value(
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
                                                                        ($): t_out.Package.content.functions.D.type_ => {
                                                                            switch ($[0]) {
                                                                                case 'transformer':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['transformer', null],
                                                                                    )
                                                                                case 'refiner':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['refiner', _p.group.resolve(
                                                                                            () => {
                                                                                                
                                                                                                const prop_error = _p_change_context(
                                                                                                    $['error'],
                                                                                                    ($) => _p.optional.map(
                                                                                                        $,
                                                                                                        ($) => Value(
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
                                                                                                        ($) => _p.dictionary.resolve(
                                                                                                            $['l dictionary'],
                                                                                                            ($, id, $a, $c): t_out.Package.content.functions.D.type_.refiner.lookups.O.D => _p_change_context(
                                                                                                                $['l entry'],
                                                                                                                ($) => _p_variables(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const var_location = $['l location']
                                                                                                                        return _p.decide.state(
                                                                                                                            $['l state'],
                                                                                                                            ($): t_out.Package.content.functions.D.type_.refiner.lookups.O.D => {
                                                                                                                                switch ($[0]) {
                                                                                                                                    case 'acyclic':
                                                                                                                                        return _p.ss(
                                                                                                                                            $,
                                                                                                                                            ($) => ['acyclic', Value(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                null,
                                                                                                                                                null,
                                                                                                                                            )],
                                                                                                                                        )
                                                                                                                                    case 'cyclic':
                                                                                                                                        return _p.ss(
                                                                                                                                            $,
                                                                                                                                            ($) => ['cyclic', Value(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                null,
                                                                                                                                                null,
                                                                                                                                            )],
                                                                                                                                        )
                                                                                                                                    case 'stack':
                                                                                                                                        return _p.ss(
                                                                                                                                            $,
                                                                                                                                            ($) => ['stack', Value(
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
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )
                                                                },
                                                            ),
                                                        )
                                                        
                                                        const prop_parameters = _p_change_context(
                                                            $['parameters'],
                                                            ($) => _p.optional.map(
                                                                $,
                                                                ($) => _p.dictionary.resolve(
                                                                    $['l dictionary'],
                                                                    ($, id, $a, $c): t_out.Package.content.functions.D.parameters.O.D => _p_change_context(
                                                                        $['l entry'],
                                                                        ($) => Value(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            null,
                                                                            null,
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
            'imports': prop_imports,
            'content': prop_content,
        }
    },
)

export const Imports: t_signatures.Imports = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Imports.D => _p_change_context(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_type = _p_change_context(
                    $['type'],
                    ($) => _p_variables(
                        () => {
                            
                            const var_location = $['l location']
                            return _p.decide.state(
                                $['l state'],
                                ($): t_out.Imports.D.type_ => {
                                    switch ($[0]) {
                                        case 'external':
                                            return _p.ss(
                                                $,
                                                ($) => ['external', $],
                                            )
                                        case 'ancestor':
                                            return _p.ss(
                                                $,
                                                ($) => ['ancestor', _p.group.resolve(
                                                    () => {
                                                        
                                                        const prop_number_of_steps = _p_change_context(
                                                            $['number of steps'],
                                                            ($) => $,
                                                        )
                                                        
                                                        const prop_dependency = _p_change_context(
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
                    'type': prop_type,
                    'tail': prop_tail,
                }
            },
        ),
    ),
)

export const Value: t_signatures.Value = ($, abort, $l, $p) => _p_variables(
    () => {
        
        const var_location = $['l location']
        return _p.decide.state(
            $['l state'],
            ($): t_out.Value => {
                switch ($[0]) {
                    case 'boolean':
                        return _p.ss(
                            $,
                            ($) => ['boolean', null],
                        )
                    case 'component':
                        return _p.ss(
                            $,
                            ($) => ['component', _p.group.resolve(
                                () => {
                                    
                                    const prop_location = _p_change_context(
                                        $['location'],
                                        ($) => Module_Reference(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            null,
                                            null,
                                        ),
                                    )
                                    return {
                                        'location': prop_location,
                                    }
                                },
                            )],
                        )
                    case 'dictionary':
                        return _p.ss(
                            $,
                            ($) => ['dictionary', Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                null,
                                null,
                            )],
                        )
                    case 'group':
                        return _p.ss(
                            $,
                            ($) => ['group', _p.dictionary.resolve(
                                $['l dictionary'],
                                ($, id, $a, $c): t_out.Value.group.D => _p_change_context(
                                    $['l entry'],
                                    ($) => Value(
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
                    case 'list':
                        return _p.ss(
                            $,
                            ($) => ['list', Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                null,
                                null,
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
                                        ($): t_out.Value.number_ => {
                                            switch ($[0]) {
                                                case 'exact':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['exact', _p_variables(
                                                            () => {
                                                                
                                                                const var_location = $['l location']
                                                                return _p.decide.state(
                                                                    $['l state'],
                                                                    ($): t_out.Value.number_.exact => {
                                                                        switch ($[0]) {
                                                                            case 'natural':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['natural', null],
                                                                                )
                                                                            case 'integer':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['integer', null],
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
                                                case 'approximation':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['approximation', null],
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
                            ($) => ['optional', Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                null,
                                null,
                            )],
                        )
                    case 'reference':
                        return _p.ss(
                            $,
                            ($) => ['reference', _p.group.resolve(
                                () => {
                                    
                                    const prop_location = _p_change_context(
                                        $['location'],
                                        ($) => Module_Reference(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            null,
                                            null,
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
                                                            ($): t_out.Value.reference.sub_selection.L => {
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
                                    
                                    const prop_cyclic = _p_change_context(
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
                        return _p.ss(
                            $,
                            ($) => ['state', _p.dictionary.resolve(
                                $['l dictionary'],
                                ($, id, $a, $c): t_out.Value.state.D => _p_change_context(
                                    $['l entry'],
                                    ($) => Value(
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
                    case 'text':
                        return _p.ss(
                            $,
                            ($) => ['text', null],
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

export const Module_Reference: t_signatures.Module_Reference = ($, abort, $l, $p) => _p_variables(
    () => {
        
        const var_location = $['l location']
        return _p.decide.state(
            $['l state'],
            ($): t_out.Module_Reference => {
                switch ($[0]) {
                    case 'import':
                        return _p.ss(
                            $,
                            ($) => ['import', _p.group.resolve(
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
                            )],
                        )
                    case 'local':
                        return _p.ss(
                            $,
                            ($) => ['local', $],
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
