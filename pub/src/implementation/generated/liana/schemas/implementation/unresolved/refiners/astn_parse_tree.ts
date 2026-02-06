    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
    
    import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/unmarshall"
    
    import * as t_out from "../../../../../../../interface/generated/liana/schemas/implementation/data/unresolved"
    
    import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"
    
    import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"
    
    import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
    
    import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"
    
    import * as v_external_interface from "../../../interface/unresolved/refiners/astn_parse_tree"
    
    export const Package_Set: t_signatures.Package_Set = ($, abort) => ({
        'l location': v_parse_tree_to_location.Value(
            $,
        )['start']['relative'],
        'l dictionary': _p.dictionary.map(
            v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null],
                ),
            ),
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            ['expected a state', null],
                        ),
                    ),
                    ($) => _p.decide.text(
                        $['option']['value'],
                        ($t): t_out.Package_Set.l_dictionary.D.l_entry => {
                            switch ($t) {
                                case 'package':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l state': ['package', Package(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        }),
                                    )
                                case 'set':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l state': ['set', Package_Set(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        }),
                                    )
                                default:
                                    return abort(
                                        ['unknown option', $['option']['value']],
                                    )
                            }
                        },
                    ),
                ),
            }),
        ),
    })
    
    export const Package: t_signatures.Package = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
            'specials': _p_change_context(
                $.__get_entry(
                    'specials',
                    ($) => abort(
                        ['no such entry', "specials"],
                    ),
                ),
                ($) => _p_change_context(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null],
                        ),
                    ),
                    ($) => ({
                        'abort': _p_change_context(
                            $.__get_entry(
                                'abort',
                                ($) => abort(
                                    ['no such entry', "abort"],
                                ),
                            ),
                            ($) => v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            ),
                        ),
                        'change context': _p_change_context(
                            $.__get_entry(
                                'change context',
                                ($) => abort(
                                    ['no such entry', "change context"],
                                ),
                            ),
                            ($) => v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            ),
                        ),
                        'implement me': _p_change_context(
                            $.__get_entry(
                                'implement me',
                                ($) => abort(
                                    ['no such entry', "implement me"],
                                ),
                            ),
                            ($) => v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            ),
                        ),
                        'iterate': _p_change_context(
                            $.__get_entry(
                                'iterate',
                                ($) => abort(
                                    ['no such entry', "iterate"],
                                ),
                            ),
                            ($) => v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            ),
                        ),
                        'lookups': _p_change_context(
                            $.__get_entry(
                                'lookups',
                                ($) => abort(
                                    ['no such entry', "lookups"],
                                ),
                            ),
                            ($) => v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            ),
                        ),
                        'list from text': _p_change_context(
                            $.__get_entry(
                                'list from text',
                                ($) => abort(
                                    ['no such entry', "list from text"],
                                ),
                            ),
                            ($) => v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            ),
                        ),
                        'text from list': _p_change_context(
                            $.__get_entry(
                                'text from list',
                                ($) => abort(
                                    ['no such entry', "text from list"],
                                ),
                            ),
                            ($) => v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            ),
                        ),
                        'unreachable code path': _p_change_context(
                            $.__get_entry(
                                'unreachable code path',
                                ($) => abort(
                                    ['no such entry', "unreachable code path"],
                                ),
                            ),
                            ($) => v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            ),
                        ),
                        'variables': _p_change_context(
                            $.__get_entry(
                                'variables',
                                ($) => abort(
                                    ['no such entry', "variables"],
                                ),
                            ),
                            ($) => v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            ),
                        ),
                    }),
                ),
            ),
            'type imports': _p_change_context(
                $.__get_entry(
                    'type imports',
                    ($) => abort(
                        ['no such entry', "type imports"],
                    ),
                ),
                ($) => v_external_interface.Imports(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
            'variable imports': _p_change_context(
                $.__get_entry(
                    'variable imports',
                    ($) => abort(
                        ['no such entry', "variable imports"],
                    ),
                ),
                ($) => ({
                    'l location': v_parse_tree_to_location.Value(
                        $,
                    )['start']['relative'],
                    'l dictionary': _p.dictionary.map(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                ['expected a dictionary', null],
                            ),
                        ),
                        ($, id) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l entry': _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'tail': _p_change_context(
                                        $.__get_entry(
                                            'tail',
                                            ($) => abort(
                                                ['no such entry', "tail"],
                                            ),
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l list': _p.list.map(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a list', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l item': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        }),
                                    ),
                                    'type': _p_change_context(
                                        $.__get_entry(
                                            'type',
                                            ($) => abort(
                                                ['no such entry', "type"],
                                            ),
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
                                                ),
                                            ),
                                            ($) => _p.decide.text(
                                                $['option']['value'],
                                                ($t): t_out.Package.variable_imports.l_dictionary.D.l_entry.type_ => {
                                                    switch ($t) {
                                                        case 'ancestor':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['ancestor', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'dependency': _p_change_context(
                                                                                $.__get_entry(
                                                                                    'dependency',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "dependency"],
                                                                                    ),
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'number of steps': _p_change_context(
                                                                                $.__get_entry(
                                                                                    'number of steps',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "number of steps"],
                                                                                    ),
                                                                                ),
                                                                                ($) => v_deserialize_number.deserialize(
                                                                                    _p_list_from_text(
                                                                                        v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a text', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => $,
                                                                                    ),
                                                                                    ($) => abort(
                                                                                        ['not a valid number', null],
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'external':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['external', v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null],
                                                                        ),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'sibling':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['sibling', v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null],
                                                                        ),
                                                                    )],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                }),
            ),
            'functions': _p_change_context(
                $.__get_entry(
                    'functions',
                    ($) => abort(
                        ['no such entry', "functions"],
                    ),
                ),
                ($) => ({
                    'l location': v_parse_tree_to_location.Value(
                        $,
                    )['start']['relative'],
                    'l dictionary': _p.dictionary.map(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                ['expected a dictionary', null],
                            ),
                        ),
                        ($, id) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l entry': _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'type': _p_change_context(
                                        $.__get_entry(
                                            'type',
                                            ($) => abort(
                                                ['no such entry', "type"],
                                            ),
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'import': _p_change_context(
                                                    $.__get_entry(
                                                        'import',
                                                        ($) => abort(
                                                            ['no such entry', "import"],
                                                        ),
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                ),
                                                'type': _p_change_context(
                                                    $.__get_entry(
                                                        'type',
                                                        ($) => abort(
                                                            ['no such entry', "type"],
                                                        ),
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        ),
                                    ),
                                    'expression': _p_change_context(
                                        $.__get_entry(
                                            'expression',
                                            ($) => abort(
                                                ['no such entry', "expression"],
                                            ),
                                        ),
                                        ($) => Expression(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'temp has abort': _p_change_context(
                                        $.__get_entry(
                                            'temp has abort',
                                            ($) => abort(
                                                ['no such entry', "temp has abort"],
                                            ),
                                        ),
                                        ($) => v_deserialize_boolean.deserialize(
                                            _p_list_from_text(
                                                v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                                ($) => $,
                                            ),
                                            ($) => abort(
                                                ['not a valid boolean', null],
                                            ),
                                        ),
                                    ),
                                    'temp has lookups': _p_change_context(
                                        $.__get_entry(
                                            'temp has lookups',
                                            ($) => abort(
                                                ['no such entry', "temp has lookups"],
                                            ),
                                        ),
                                        ($) => v_deserialize_boolean.deserialize(
                                            _p_list_from_text(
                                                v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                                ($) => $,
                                            ),
                                            ($) => abort(
                                                ['not a valid boolean', null],
                                            ),
                                        ),
                                    ),
                                    'temp has parameters': _p_change_context(
                                        $.__get_entry(
                                            'temp has parameters',
                                            ($) => abort(
                                                ['no such entry', "temp has parameters"],
                                            ),
                                        ),
                                        ($) => v_deserialize_boolean.deserialize(
                                            _p_list_from_text(
                                                v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                                ($) => $,
                                            ),
                                            ($) => abort(
                                                ['not a valid boolean', null],
                                            ),
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                }),
            ),
        }),
    )
    
    export const Temp_Value_Type_Specification: t_signatures.Temp_Value_Type_Specification = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
            'type': _p_change_context(
                $.__get_entry(
                    'type',
                    ($) => abort(
                        ['no such entry', "type"],
                    ),
                ),
                ($) => _p_change_context(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null],
                        ),
                    ),
                    ($) => ({
                        'import': _p_change_context(
                            $.__get_entry(
                                'import',
                                ($) => abort(
                                    ['no such entry', "import"],
                                ),
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        ),
                        'type': _p_change_context(
                            $.__get_entry(
                                'type',
                                ($) => abort(
                                    ['no such entry', "type"],
                                ),
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        ),
                    }),
                ),
            ),
            'sub selection': _p_change_context(
                $.__get_entry(
                    'sub selection',
                    ($) => abort(
                        ['no such entry', "sub selection"],
                    ),
                ),
                ($) => ({
                    'l location': v_parse_tree_to_location.Value(
                        $,
                    )['start']['relative'],
                    'l list': _p.list.map(
                        v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                ['expected a list', null],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l item': _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Temp_Value_Type_Specification.sub_selection.l_list.L.l_item => {
                                        switch ($t) {
                                            case 'dictionary':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['dictionary', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a nothing', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'group':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['group', v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'list':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['list', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a nothing', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'optional':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['optional', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a nothing', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'state':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['state', v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }),
                    ),
                }),
            ),
        }),
    )
    
    export const Expression: t_signatures.Expression = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Expression => {
                switch ($t) {
                    case 'decide':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['decide', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'type': _p_change_context(
                                            $.__get_entry(
                                                'type',
                                                ($) => abort(
                                                    ['no such entry', "type"],
                                                ),
                                            ),
                                            ($) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.State(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a state', null],
                                                    ),
                                                ),
                                                ($) => _p.decide.text(
                                                    $['option']['value'],
                                                    ($t): t_out.Expression.l_state.decide.type_ => {
                                                        switch ($t) {
                                                            case 'boolean':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['boolean', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'source': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'source',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "source"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'temp resulting node': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'temp resulting node',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "temp resulting node"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.optional.map(
                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected an optional', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => Temp_Value_Type_Specification(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'if false': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'if false',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "if false"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'if true': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'if true',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "if true"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'dictionary':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['dictionary', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null],
                                                                                ),
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['value'],
                                                                                ($t): t_out.Expression.l_state.decide.type_.l_state.dictionary => {
                                                                                    switch ($t) {
                                                                                        case 'has entries':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    )['start']['relative'],
                                                                                                    'l state': ['has entries', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a group', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'dictionary': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'dictionary',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "dictionary"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                            'if true': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'if true',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "if true"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                            'if false': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'if false',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "if false"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    )],
                                                                                                }),
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'list':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['list', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null],
                                                                                ),
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['value'],
                                                                                ($t): t_out.Expression.l_state.decide.type_.l_state.list => {
                                                                                    switch ($t) {
                                                                                        case 'has first item':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    )['start']['relative'],
                                                                                                    'l state': ['has first item', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a group', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'list': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'list',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "list"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                            'if true': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'if true',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "if true"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                            'if false': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'if false',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "if false"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    )],
                                                                                                }),
                                                                                            )
                                                                                        case 'has last item':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    )['start']['relative'],
                                                                                                    'l state': ['has last item', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a group', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'list': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'list',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "list"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                            'if true': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'if true',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "if true"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                            'if false': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'if false',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "if false"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    )],
                                                                                                }),
                                                                                            )
                                                                                        case 'has items':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    )['start']['relative'],
                                                                                                    'l state': ['has items', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a group', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'list': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'list',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "list"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                            'if true': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'if true',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "if true"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                            'if false': _p_change_context(
                                                                                                                $.__get_entry(
                                                                                                                    'if false',
                                                                                                                    ($) => abort(
                                                                                                                        ['no such entry', "if false"],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    )],
                                                                                                }),
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'optional':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['optional', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'source': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'source',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "source"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'temp resulting node': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'temp resulting node',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "temp resulting node"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.optional.map(
                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected an optional', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => Temp_Value_Type_Specification(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'if not set': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'if not set',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "if not set"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'if set': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'if set',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "if set"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'state':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['state', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'source': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'source',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "source"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'temp resulting node': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'temp resulting node',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "temp resulting node"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.optional.map(
                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected an optional', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => Temp_Value_Type_Specification(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'type': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'type',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "type"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.l_state.decide.type_.l_state.state.type_ => {
                                                                                                switch ($t) {
                                                                                                    case 'partial':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['partial', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a group', null],
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'options': _p_change_context(
                                                                                                                            $.__get_entry(
                                                                                                                                'options',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "options"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                )['start']['relative'],
                                                                                                                                'l dictionary': _p.dictionary.map(
                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            ['expected a dictionary', null],
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    ($, id) => ({
                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                            $,
                                                                                                                                        )['start']['relative'],
                                                                                                                                        'l entry': Expression(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                    }),
                                                                                                                                ),
                                                                                                                            }),
                                                                                                                        ),
                                                                                                                        'default': _p_change_context(
                                                                                                                            $.__get_entry(
                                                                                                                                'default',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "default"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => Expression(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    }),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'full':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['full', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a group', null],
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'options': _p_change_context(
                                                                                                                            $.__get_entry(
                                                                                                                                'options',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "options"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                )['start']['relative'],
                                                                                                                                'l dictionary': _p.dictionary.map(
                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            ['expected a dictionary', null],
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    ($, id) => ({
                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                            $,
                                                                                                                                        )['start']['relative'],
                                                                                                                                        'l entry': Expression(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                    }),
                                                                                                                                ),
                                                                                                                            }),
                                                                                                                        ),
                                                                                                                    }),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'single':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['single', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a group', null],
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'option': _p_change_context(
                                                                                                                            $.__get_entry(
                                                                                                                                'option',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "option"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a text', null],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'if true': _p_change_context(
                                                                                                                            $.__get_entry(
                                                                                                                                'if true',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "if true"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => Expression(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'if false': _p_change_context(
                                                                                                                            $.__get_entry(
                                                                                                                                'if false',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "if false"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => Expression(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    }),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'text':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['text', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'source': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'source',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "source"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'temp resulting node': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'temp resulting node',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "temp resulting node"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.optional.map(
                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected an optional', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => Temp_Value_Type_Specification(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'cases': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'cases',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "cases"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l dictionary': _p.dictionary.map(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a dictionary', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($, id) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                )['start']['relative'],
                                                                                                'l entry': Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        ),
                                                                                    }),
                                                                                ),
                                                                                'default': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'default',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "default"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    }),
                                                                )
                                                            default:
                                                                return abort(
                                                                    ['unknown option', $['option']['value']],
                                                                )
                                                        }
                                                    },
                                                ),
                                            ),
                                        ),
                                    }),
                                )],
                            }),
                        )
                    case 'assign':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['assign', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            ['expected a state', null],
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Expression.l_state.assign => {
                                            switch ($t) {
                                                case 'boolean':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['boolean', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Expression.l_state.assign.l_state.boolean_ => {
                                                                        switch ($t) {
                                                                            case 'literal':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['literal', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a state', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['value'],
                                                                                                ($t): t_out.Expression.l_state.assign.l_state.boolean_.l_state.literal => {
                                                                                                    switch ($t) {
                                                                                                        case 'false':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a nothing', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'true':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a nothing', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['unknown option', $['option']['value']],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'not':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['not', Value_Selection(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'copy':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['copy', Value_Selection(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'dictionary is empty':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['dictionary is empty', Value_Selection(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'list is empty':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['list is empty', Value_Selection(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'dictionary':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['dictionary', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Expression.l_state.assign.l_state.dictionary => {
                                                                        switch ($t) {
                                                                            case 'filter':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['filter', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'entry handler': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'entry handler',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "entry handler"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'from list':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['from list', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'get id': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'get id',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "get id"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'get entry': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'get entry',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "get entry"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'abort': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'abort',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "abort"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'literal':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['literal', {
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            )['start']['relative'],
                                                                                            'l dictionary': _p.dictionary.map(
                                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a dictionary', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($, id) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    )['start']['relative'],
                                                                                                    'l entry': Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                        }],
                                                                                    }),
                                                                                )
                                                                            case 'map':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['map', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'entry handler': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'entry handler',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "entry handler"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'resolve':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['resolve', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'entry handler': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'entry handler',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "entry handler"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'temp resulting entry node': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'temp resulting entry node',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "temp resulting entry node"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'group':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['group', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Expression.l_state.assign.l_state.group => {
                                                                        switch ($t) {
                                                                            case 'literal':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['literal', {
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            )['start']['relative'],
                                                                                            'l dictionary': _p.dictionary.map(
                                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a dictionary', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($, id) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    )['start']['relative'],
                                                                                                    'l entry': Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                        }],
                                                                                    }),
                                                                                )
                                                                            case 'resolve':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['resolve', {
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            )['start']['relative'],
                                                                                            'l dictionary': _p.dictionary.map(
                                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a dictionary', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($, id) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    )['start']['relative'],
                                                                                                    'l entry': Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                        }],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'list':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['list', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Expression.l_state.assign.l_state.list => {
                                                                        switch ($t) {
                                                                            case 'filter':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['filter', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'entry handler': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'entry handler',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "entry handler"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'from dictionary':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['from dictionary', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'get item': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'get item',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "get item"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'literal':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['literal', {
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            )['start']['relative'],
                                                                                            'l list': _p.list.map(
                                                                                                v_unmarshalled_from_parse_tree.List(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a list', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    )['start']['relative'],
                                                                                                    'l item': Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                        }],
                                                                                    }),
                                                                                )
                                                                            case 'map':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['map', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'item handler': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'item handler',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "item handler"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'map with state':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['map with state', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'initial state': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'initial state',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "initial state"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'item handler': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'item handler',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "item handler"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'update state': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'update state',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "update state"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'wrap up': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'wrap up',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "wrap up"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'reduce':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['reduce', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'initial state': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'initial state',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "initial state"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'item handler': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'item handler',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "item handler"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'reverse':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['reverse', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'nothing':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a nothing', null],
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'number':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['number', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Expression.l_state.assign.l_state.number_ => {
                                                                        switch ($t) {
                                                                            case 'approximation':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['approximation', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a state', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['value'],
                                                                                                ($t): t_out.Expression.l_state.assign.l_state.number_.l_state.approximation => {
                                                                                                    switch ($t) {
                                                                                                        case 'literal':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['literal', v_deserialize_number.deserialize(
                                                                                                                        _p_list_from_text(
                                                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a text', null],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => $,
                                                                                                                        ),
                                                                                                                        ($) => abort(
                                                                                                                            ['not a valid number', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'copy':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['copy', Value_Selection(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['unknown option', $['option']['value']],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'integer':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['integer', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a state', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['value'],
                                                                                                ($t): t_out.Expression.l_state.assign.l_state.number_.l_state.integer => {
                                                                                                    switch ($t) {
                                                                                                        case 'copy':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['copy', Value_Selection(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'divide':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['divide', _p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a group', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => ({
                                                                                                                            'divident': _p_change_context(
                                                                                                                                $.__get_entry(
                                                                                                                                    'divident',
                                                                                                                                    ($) => abort(
                                                                                                                                        ['no such entry', "divident"],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => Value_Selection(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            'divisor': _p_change_context(
                                                                                                                                $.__get_entry(
                                                                                                                                    'divisor',
                                                                                                                                    ($) => abort(
                                                                                                                                        ['no such entry', "divisor"],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => Value_Selection(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            'abort': _p_change_context(
                                                                                                                                $.__get_entry(
                                                                                                                                    'abort',
                                                                                                                                    ($) => abort(
                                                                                                                                        ['no such entry', "abort"],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => Expression(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        }),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'literal':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['literal', v_deserialize_number.deserialize(
                                                                                                                        _p_list_from_text(
                                                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a text', null],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => $,
                                                                                                                        ),
                                                                                                                        ($) => abort(
                                                                                                                            ['not a valid number', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['unknown option', $['option']['value']],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'natural':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['natural', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a state', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['value'],
                                                                                                ($t): t_out.Expression.l_state.assign.l_state.number_.l_state.natural => {
                                                                                                    switch ($t) {
                                                                                                        case 'literal':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['literal', v_deserialize_number.deserialize(
                                                                                                                        _p_list_from_text(
                                                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a text', null],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => $,
                                                                                                                        ),
                                                                                                                        ($) => abort(
                                                                                                                            ['not a valid number', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'copy':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['copy', Value_Selection(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'number of dictionary entries':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['number of dictionary entries', _p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a group', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => ({
                                                                                                                            'dictionary': _p_change_context(
                                                                                                                                $.__get_entry(
                                                                                                                                    'dictionary',
                                                                                                                                    ($) => abort(
                                                                                                                                        ['no such entry', "dictionary"],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => Value_Selection(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        }),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'number of list items':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['number of list items', _p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a group', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => ({
                                                                                                                            'list': _p_change_context(
                                                                                                                                $.__get_entry(
                                                                                                                                    'list',
                                                                                                                                    ($) => abort(
                                                                                                                                        ['no such entry', "list"],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => Value_Selection(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        }),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'source column':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['source column', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a nothing', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'source line':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['source line', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a nothing', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['unknown option', $['option']['value']],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'optional':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['optional', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Expression.l_state.assign.l_state.optional => {
                                                                        switch ($t) {
                                                                            case 'from boolean':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['from boolean', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'get set': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'get set',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "get set"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'literal':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['literal', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a state', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['value'],
                                                                                                ($t): t_out.Expression.l_state.assign.l_state.optional.l_state.literal => {
                                                                                                    switch ($t) {
                                                                                                        case 'not set':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a nothing', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'set':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['set', Expression(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['unknown option', $['option']['value']],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'map':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['map', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'source': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'source',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "source"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Value_Selection(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'set handler': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'set handler',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "set handler"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'state':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['state', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Expression.l_state.assign.l_state.state => {
                                                                        switch ($t) {
                                                                            case 'literal':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['literal', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'option': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'option',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "option"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a text', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'value': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'value',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "value"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'text':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['text', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Expression.l_state.assign.l_state.text => {
                                                                        switch ($t) {
                                                                            case 'copy':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['copy', Value_Selection(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'literal':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['literal', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'type': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'type',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "type"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a state', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => _p.decide.text(
                                                                                                            $['option']['value'],
                                                                                                            ($t): t_out.Expression.l_state.assign.l_state.text.l_state.literal.type_ => {
                                                                                                                switch ($t) {
                                                                                                                    case 'identifier':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                )['start']['relative'],
                                                                                                                                'l state': ['identifier', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a nothing', null],
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            }),
                                                                                                                        )
                                                                                                                    case 'freeform':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                )['start']['relative'],
                                                                                                                                'l state': ['freeform', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a nothing', null],
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            }),
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return abort(
                                                                                                                            ['unknown option', $['option']['value']],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'value': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'value',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "value"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a text', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'source document':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['source document', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null],
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                default:
                                                    return abort(
                                                        ['unknown option', $['option']['value']],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            }),
                        )
                    case 'select':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['select', Value_Selection(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            }),
                        )
                    case 'special':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['special', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            ['expected a state', null],
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Expression.l_state.special => {
                                            switch ($t) {
                                                case 'abort':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['abort', Expression(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'assert':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['assert', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'tester': _p_change_context(
                                                                        $.__get_entry(
                                                                            'tester',
                                                                            ($) => abort(
                                                                                ['no such entry', "tester"],
                                                                            ),
                                                                        ),
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'normal flow': _p_change_context(
                                                                        $.__get_entry(
                                                                            'normal flow',
                                                                            ($) => abort(
                                                                                ['no such entry', "normal flow"],
                                                                            ),
                                                                        ),
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            )],
                                                        }),
                                                    )
                                                case 'change context':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['change context', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'new context': _p_change_context(
                                                                        $.__get_entry(
                                                                            'new context',
                                                                            ($) => abort(
                                                                                ['no such entry', "new context"],
                                                                            ),
                                                                        ),
                                                                        ($) => Value_Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'expression': _p_change_context(
                                                                        $.__get_entry(
                                                                            'expression',
                                                                            ($) => abort(
                                                                                ['no such entry', "expression"],
                                                                            ),
                                                                        ),
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            )],
                                                        }),
                                                    )
                                                case 'variables':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['variables', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'variables': _p_change_context(
                                                                        $.__get_entry(
                                                                            'variables',
                                                                            ($) => abort(
                                                                                ['no such entry', "variables"],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            )['start']['relative'],
                                                                            'l dictionary': _p.dictionary.map(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a dictionary', null],
                                                                                    ),
                                                                                ),
                                                                                ($, id) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l entry': Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                        }),
                                                                    ),
                                                                    'callback': _p_change_context(
                                                                        $.__get_entry(
                                                                            'callback',
                                                                            ($) => abort(
                                                                                ['no such entry', "callback"],
                                                                            ),
                                                                        ),
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            )],
                                                        }),
                                                    )
                                                case 'implement me':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null],
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'iterate':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['iterate', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'list': _p_change_context(
                                                                        $.__get_entry(
                                                                            'list',
                                                                            ($) => abort(
                                                                                ['no such entry', "list"],
                                                                            ),
                                                                        ),
                                                                        ($) => Value_Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'handler': _p_change_context(
                                                                        $.__get_entry(
                                                                            'handler',
                                                                            ($) => abort(
                                                                                ['no such entry', "handler"],
                                                                            ),
                                                                        ),
                                                                        ($) => Expression(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            )],
                                                        }),
                                                    )
                                                case 'unreachable':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['unreachable', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'explanation': _p_change_context(
                                                                        $.__get_entry(
                                                                            'explanation',
                                                                            ($) => abort(
                                                                                ['no such entry', "explanation"],
                                                                            ),
                                                                        ),
                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            )],
                                                        }),
                                                    )
                                                default:
                                                    return abort(
                                                        ['unknown option', $['option']['value']],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            }),
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    )
    
    export const Value_Selection: t_signatures.Value_Selection = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Value_Selection => {
                switch ($t) {
                    case 'implement me':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                )],
                            }),
                        )
                    case 'regular':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['regular', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'start': _p_change_context(
                                            $.__get_entry(
                                                'start',
                                                ($) => abort(
                                                    ['no such entry', "start"],
                                                ),
                                            ),
                                            ($) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.State(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a state', null],
                                                    ),
                                                ),
                                                ($) => _p.decide.text(
                                                    $['option']['value'],
                                                    ($t): t_out.Value_Selection.l_state.regular.start => {
                                                        switch ($t) {
                                                            case 'call':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['call', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'source': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'source',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "source"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Value_Selection.l_state.regular.start.l_state.call.source => {
                                                                                                switch ($t) {
                                                                                                    case 'local':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['local', v_unmarshalled_from_parse_tree.Text(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a text', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'imported':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['imported', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a group', null],
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'import': _p_change_context(
                                                                                                                            $.__get_entry(
                                                                                                                                'import',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "import"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a text', null],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'variable': _p_change_context(
                                                                                                                            $.__get_entry(
                                                                                                                                'variable',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "variable"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a text', null],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    }),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'context': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'context',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "context"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'abort': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'abort',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "abort"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.optional.map(
                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected an optional', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'lookups': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'lookups',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "lookups"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.optional.map(
                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected an optional', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a state', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['value'],
                                                                                                ($t): t_out.Value_Selection.l_state.regular.start.l_state.call.lookups.O => {
                                                                                                    switch ($t) {
                                                                                                        case 'initialize':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['initialize', {
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        )['start']['relative'],
                                                                                                                        'l dictionary': _p.dictionary.map(
                                                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a dictionary', null],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($, id) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                )['start']['relative'],
                                                                                                                                'l entry': Lookup_Selection(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            }),
                                                                                                                        ),
                                                                                                                    }],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'pass through':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['pass through', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a nothing', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['unknown option', $['option']['value']],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'arguments': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'arguments',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "arguments"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.optional.map(
                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected an optional', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a state', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['value'],
                                                                                                ($t): t_out.Value_Selection.l_state.regular.start.l_state.call.arguments_.O => {
                                                                                                    switch ($t) {
                                                                                                        case 'initialize':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['initialize', {
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        )['start']['relative'],
                                                                                                                        'l dictionary': _p.dictionary.map(
                                                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a dictionary', null],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($, id) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                )['start']['relative'],
                                                                                                                                'l entry': Expression(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            }),
                                                                                                                        ),
                                                                                                                    }],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'pass through':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['pass through', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a nothing', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['unknown option', $['option']['value']],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'context':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['context', v_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a nothing', null],
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'dictionary entry':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['dictionary entry', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'dictionary': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'dictionary',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "dictionary"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'id': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'id',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "id"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'abort handler': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'abort handler',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "abort handler"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'list from text':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['list from text', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'source': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'source',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "source"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'character handler': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'character handler',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "character handler"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'lookup entry':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['lookup entry', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'lookup': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'lookup',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "lookup"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Lookup_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'id': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'id',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "id"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'abort handlers': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'abort handlers',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "abort handlers"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'no such entry': _p_change_context(
                                                                                                $.__get_entry(
                                                                                                    'no such entry',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "no such entry"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'no context lookup': _p_change_context(
                                                                                                $.__get_entry(
                                                                                                    'no context lookup',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "no context lookup"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'cycle detected': _p_change_context(
                                                                                                $.__get_entry(
                                                                                                    'cycle detected',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "cycle detected"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'lookup entry depth':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['lookup entry depth', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'lookup': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'lookup',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "lookup"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Lookup_Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'id': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'id',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "id"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'abort handlers': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'abort handlers',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "abort handlers"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'no such entry': _p_change_context(
                                                                                                $.__get_entry(
                                                                                                    'no such entry',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "no such entry"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'no context lookup': _p_change_context(
                                                                                                $.__get_entry(
                                                                                                    'no context lookup',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "no context lookup"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'cycle detected': _p_change_context(
                                                                                                $.__get_entry(
                                                                                                    'cycle detected',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "cycle detected"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'parameter':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['parameter', v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'parent sibling':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['parent sibling', v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'sibling':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['sibling', v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'state':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['state', v_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a nothing', null],
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'text from list':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['text from list', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'source': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'source',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "source"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'item handler': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'item handler',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "item handler"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'variable':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l state': ['variable', v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            default:
                                                                return abort(
                                                                    ['unknown option', $['option']['value']],
                                                                )
                                                        }
                                                    },
                                                ),
                                            ),
                                        ),
                                        'tail': _p_change_context(
                                            $.__get_entry(
                                                'tail',
                                                ($) => abort(
                                                    ['no such entry', "tail"],
                                                ),
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                )['start']['relative'],
                                                'l list': _p.list.map(
                                                    v_unmarshalled_from_parse_tree.List(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a list', null],
                                                        ),
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l item': v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        ),
                                    }),
                                )],
                            }),
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    )
    
    export const Lookup_Selection: t_signatures.Lookup_Selection = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Lookup_Selection => {
                switch ($t) {
                    case 'implement me':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                )],
                            }),
                        )
                    case 'from parameter':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['from parameter', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                )],
                            }),
                        )
                    case 'stack':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['stack', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            ['expected a state', null],
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Lookup_Selection.l_state.stack => {
                                            switch ($t) {
                                                case 'empty':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a nothing', null],
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'push':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['push', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'stack': _p_change_context(
                                                                        $.__get_entry(
                                                                            'stack',
                                                                            ($) => abort(
                                                                                ['no such entry', "stack"],
                                                                            ),
                                                                        ),
                                                                        ($) => Lookup_Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'acyclic': _p_change_context(
                                                                        $.__get_entry(
                                                                            'acyclic',
                                                                            ($) => abort(
                                                                                ['no such entry', "acyclic"],
                                                                            ),
                                                                        ),
                                                                        ($) => Lookup_Selection(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            )],
                                                        }),
                                                    )
                                                default:
                                                    return abort(
                                                        ['unknown option', $['option']['value']],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            }),
                        )
                    case 'acyclic':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['acyclic', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            ['expected a state', null],
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Lookup_Selection.l_state.acyclic => {
                                            switch ($t) {
                                                case 'not set':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a nothing', null],
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'siblings':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['siblings', v_unmarshalled_from_parse_tree.Nothing(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a nothing', null],
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'resolved dictionary':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['resolved dictionary', Value_Selection(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                default:
                                                    return abort(
                                                        ['unknown option', $['option']['value']],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            }),
                        )
                    case 'cyclic':
                        return _p_change_context(
                            $['value'],
                            ($) => ({
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l state': ['cyclic', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            ['expected a state', null],
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Lookup_Selection.l_state.cyclic => {
                                            switch ($t) {
                                                case 'not set':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a nothing', null],
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                case 'siblings':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l state': ['siblings', v_unmarshalled_from_parse_tree.Nothing(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a nothing', null],
                                                                ),
                                                            )],
                                                        }),
                                                    )
                                                default:
                                                    return abort(
                                                        ['unknown option', $['option']['value']],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            }),
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    )
