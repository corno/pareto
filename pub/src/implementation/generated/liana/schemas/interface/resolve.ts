
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
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Module.types.D => _p_cc(
                    $['l entry'],
                    ($) => _p.decide.state(
                        $['l state'],
                        ($): t_out.Module.types.D => {
                            switch ($[0]) {
                                case 'data':
                                    return _p.ss(
                                        $,
                                        ($) => ['data', Type_Node(
                                            $,
                                            ($) => abort(
                                                $
                                            ),
                                            null,
                                            null
                                        )]
                                    )
                                case 'algorithm':
                                    return _p.ss(
                                        $,
                                        ($) => ['algorithm', _p.group.resolve(
                                            () => {
                                                
                                                const prop_result = _p_cc(
                                                    $['result'],
                                                    ($) => Type_Node(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        null,
                                                        null
                                                    )
                                                )
                                                
                                                const prop_context = _p_cc(
                                                    $['context'],
                                                    ($) => Type_Node(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        null,
                                                        null
                                                    )
                                                )
                                                
                                                const prop_type = _p_cc(
                                                    $['type'],
                                                    ($) => _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Module.types.D.algorithm.type_ => {
                                                            switch ($[0]) {
                                                                case 'transformer':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['transformer', null]
                                                                    )
                                                                case 'refiner':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['refiner', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_error = _p_cc(
                                                                                    $['error'],
                                                                                    ($) => _p.optional.map(
                                                                                        $,
                                                                                        ($) => Type_Node(
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
                                                                                        ($) => _p.dictionary.resolve(
                                                                                            $['l dictionary'],
                                                                                            ($, id, $a, $c): t_out.Module.types.D.algorithm.type_.refiner.lookups.O.D => _p_cc(
                                                                                                $['l entry'],
                                                                                                ($) => _p.decide.state(
                                                                                                    $['l state'],
                                                                                                    ($): t_out.Module.types.D.algorithm.type_.refiner.lookups.O.D => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'acyclic':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['acyclic', Type_Node(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $
                                                                                                                        ),
                                                                                                                        null,
                                                                                                                        null
                                                                                                                    )]
                                                                                                                )
                                                                                                            case 'cyclic':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['cyclic', Type_Node(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $
                                                                                                                        ),
                                                                                                                        null,
                                                                                                                        null
                                                                                                                    )]
                                                                                                                )
                                                                                                            case 'stack':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ['stack', Type_Node(
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
                                                                                    )
                                                                                )
                                                                                return {
                                                                                    'error': prop_error,
                                                                                    'lookups': prop_lookups,
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
                                                
                                                const prop_parameters = _p_cc(
                                                    $['parameters'],
                                                    ($) => _p.optional.map(
                                                        $,
                                                        ($) => _p.dictionary.resolve(
                                                            $['l dictionary'],
                                                            ($, id, $a, $c): t_out.Module.types.D.algorithm.parameters.O.D => _p_cc(
                                                                $['l entry'],
                                                                ($) => Type_Node(
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
                                                )
                                                return {
                                                    'result': prop_result,
                                                    'context': prop_context,
                                                    'type': prop_type,
                                                    'parameters': prop_parameters,
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
            )
        )
        return {
            'imports': prop_imports,
            'types': prop_types,
        }
    }
)

export const Imports: t_signatures.Imports = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Imports.D => _p_cc(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_type = _p_cc(
                    $['type'],
                    ($) => _p.decide.state(
                        $['l state'],
                        ($): t_out.Imports.D.type_ => {
                            switch ($[0]) {
                                case 'external':
                                    return _p.ss(
                                        $,
                                        ($) => ['external', $]
                                    )
                                case 'ancestor':
                                    return _p.ss(
                                        $,
                                        ($) => ['ancestor', _p.group.resolve(
                                            () => {
                                                
                                                const prop_number_of_steps = _p_cc(
                                                    $['number of steps'],
                                                    ($) => $
                                                )
                                                
                                                const prop_dependency = _p_cc(
                                                    $['dependency'],
                                                    ($) => $
                                                )
                                                return {
                                                    'number of steps': prop_number_of_steps,
                                                    'dependency': prop_dependency,
                                                }
                                            }
                                        )]
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
                    'type': prop_type,
                    'tail': prop_tail,
                }
            }
        )
    )
)

export const Type_Node: t_signatures.Type_Node = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Type_Node => {
        switch ($[0]) {
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ['boolean', null]
                )
            case 'component':
                return _p.ss(
                    $,
                    ($) => ['component', _p.group.resolve(
                        () => {
                            
                            const prop_location = _p_cc(
                                $['location'],
                                ($) => Type_Reference(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    null,
                                    null
                                )
                            )
                            return {
                                'location': prop_location,
                            }
                        }
                    )]
                )
            case 'dictionary':
                return _p.ss(
                    $,
                    ($) => ['dictionary', Type_Node(
                        $,
                        ($) => abort(
                            $
                        ),
                        null,
                        null
                    )]
                )
            case 'group':
                return _p.ss(
                    $,
                    ($) => ['group', _p.dictionary.resolve(
                        $['l dictionary'],
                        ($, id, $a, $c): t_out.Type_Node.group.D => _p_cc(
                            $['l entry'],
                            ($) => Type_Node(
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
            case 'list':
                return _p.ss(
                    $,
                    ($) => ['list', Type_Node(
                        $,
                        ($) => abort(
                            $
                        ),
                        null,
                        null
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
                        ($): t_out.Type_Node.number_ => {
                            switch ($[0]) {
                                case 'exact':
                                    return _p.ss(
                                        $,
                                        ($) => ['exact', _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Type_Node.number_.exact => {
                                                switch ($[0]) {
                                                    case 'natural':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['natural', null]
                                                        )
                                                    case 'integer':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['integer', null]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    )
                                case 'approximation':
                                    return _p.ss(
                                        $,
                                        ($) => ['approximation', null]
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
                    ($) => ['optional', Type_Node(
                        $,
                        ($) => abort(
                            $
                        ),
                        null,
                        null
                    )]
                )
            case 'reference':
                return _p.ss(
                    $,
                    ($) => ['reference', _p.group.resolve(
                        () => {
                            
                            const prop_location = _p_cc(
                                $['location'],
                                ($) => Type_Reference(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    null,
                                    null
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
                                            ($): t_out.Type_Node.reference.sub_selection.L => {
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
                            
                            const prop_cyclic = _p_cc(
                                $['cyclic'],
                                ($) => $
                            )
                            return {
                                'location': prop_location,
                                'sub selection': prop_sub_selection,
                                'cyclic': prop_cyclic,
                            }
                        }
                    )]
                )
            case 'state':
                return _p.ss(
                    $,
                    ($) => ['state', _p.dictionary.resolve(
                        $['l dictionary'],
                        ($, id, $a, $c): t_out.Type_Node.state.D => _p_cc(
                            $['l entry'],
                            ($) => Type_Node(
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
            case 'text':
                return _p.ss(
                    $,
                    ($) => ['text', null]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Type_Reference: t_signatures.Type_Reference = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Type_Reference => {
        switch ($[0]) {
            case 'import':
                return _p.ss(
                    $,
                    ($) => ['import', _p.group.resolve(
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
                    )]
                )
            case 'local':
                return _p.ss(
                    $,
                    ($) => ['local', $]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)
