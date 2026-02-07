    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/typescript_light/unmarshall"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/typescript_light/data"
    
    import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"
    
    import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"
    
    import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
    
    import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"
    
    export const Directory: t_signatures.Directory = ($, abort) => _p.dictionary.map(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
        ($, id) => _p_change_context(
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    ['expected a state', null],
                ),
            ),
            ($) => _p.decide.text(
                $['option']['value'],
                ($t): t_out.Directory.D => {
                    switch ($t) {
                        case 'file':
                            return _p_change_context(
                                $['value'],
                                ($) => ['file', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'statements': _p_change_context(
                                            $.__get_entry(
                                                'statements',
                                                ($) => abort(
                                                    ['no such entry', "statements"],
                                                ),
                                            ),
                                            ($) => Statements(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }),
                                )],
                            )
                        case 'directory':
                            return _p_change_context(
                                $['value'],
                                ($) => ['directory', Directory(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        default:
                            return abort(
                                ['unknown option', $['option']['value']],
                            )
                    }
                },
            ),
        ),
    )
    
    export const Block: t_signatures.Block = ($, abort) => Statements(
        $,
        ($) => abort(
            $,
        ),
    )
    
    export const Statements: t_signatures.Statements = ($, abort) => _p.list.map(
        v_unmarshalled_from_parse_tree.List(
            $,
            ($) => abort(
                ['expected a list', null],
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
                ($t): t_out.Statements.L => {
                    switch ($t) {
                        case 'block':
                            return _p_change_context(
                                $['value'],
                                ($) => ['block', Block(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'export':
                            return _p_change_context(
                                $['value'],
                                ($) => ['export', _p_change_context(
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
                                                    ($t): t_out.Statements.L.export_.type_ => {
                                                        switch ($t) {
                                                            case 'named exports':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['named exports', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'specifiers': _p_change_context(
                                                                                $.__get_entry(
                                                                                    'specifiers',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "specifiers"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.list.map(
                                                                                    v_unmarshalled_from_parse_tree.List(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a list', null],
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
                                                                                            'name': _p_change_context(
                                                                                                $.__get_entry(
                                                                                                    'name',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "name"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Identifier(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'as': _p_change_context(
                                                                                                $.__get_entry(
                                                                                                    'as',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "as"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.optional.map(
                                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected an optional', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Identifier(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'from': _p_change_context(
                                                                                $.__get_entry(
                                                                                    'from',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "from"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.optional.map(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => String_Literal(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
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
                            )
                        case 'expression':
                            return _p_change_context(
                                $['value'],
                                ($) => ['expression', Expression(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'import':
                            return _p_change_context(
                                $['value'],
                                ($) => ['import', _p_change_context(
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
                                                    ($t): t_out.Statements.L.import_.type_ => {
                                                        switch ($t) {
                                                            case 'default':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['default', Identifier(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'namespace':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['namespace', Identifier(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'named':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['named', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'specifiers': _p_change_context(
                                                                                $.__get_entry(
                                                                                    'specifiers',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "specifiers"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.list.map(
                                                                                    v_unmarshalled_from_parse_tree.List(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a list', null],
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
                                                                                            'name': _p_change_context(
                                                                                                $.__get_entry(
                                                                                                    'name',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "name"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Identifier(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'as': _p_change_context(
                                                                                                $.__get_entry(
                                                                                                    'as',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "as"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.optional.map(
                                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected an optional', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => Identifier(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
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
                                        'from': _p_change_context(
                                            $.__get_entry(
                                                'from',
                                                ($) => abort(
                                                    ['no such entry', "from"],
                                                ),
                                            ),
                                            ($) => String_Literal(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }),
                                )],
                            )
                        case 'module declaration':
                            return _p_change_context(
                                $['value'],
                                ($) => ['module declaration', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'export': _p_change_context(
                                            $.__get_entry(
                                                'export',
                                                ($) => abort(
                                                    ['no such entry', "export"],
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
                                        'name': _p_change_context(
                                            $.__get_entry(
                                                'name',
                                                ($) => abort(
                                                    ['no such entry', "name"],
                                                ),
                                            ),
                                            ($) => Identifier(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'block': _p_change_context(
                                            $.__get_entry(
                                                'block',
                                                ($) => abort(
                                                    ['no such entry', "block"],
                                                ),
                                            ),
                                            ($) => Block(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }),
                                )],
                            )
                        case 'return':
                            return _p_change_context(
                                $['value'],
                                ($) => ['return', _p.optional.map(
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
                                )],
                            )
                        case 'switch':
                            return _p_change_context(
                                $['value'],
                                ($) => ['switch', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
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
                                        'clauses': _p_change_context(
                                            $.__get_entry(
                                                'clauses',
                                                ($) => abort(
                                                    ['no such entry', "clauses"],
                                                ),
                                            ),
                                            ($) => _p.list.map(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a list', null],
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
                                                                    ($t): t_out.Statements.L.switch_.clauses.L.type_ => {
                                                                        switch ($t) {
                                                                            case 'case':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ['case', Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                )
                                                                            case 'default':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ['default', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a nothing', null],
                                                                                        ),
                                                                                    )],
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
                                                        'statements': _p_change_context(
                                                            $.__get_entry(
                                                                'statements',
                                                                ($) => abort(
                                                                    ['no such entry', "statements"],
                                                                ),
                                                            ),
                                                            ($) => Statements(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            ),
                                        ),
                                    }),
                                )],
                            )
                        case 'type alias declaration':
                            return _p_change_context(
                                $['value'],
                                ($) => ['type alias declaration', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'export': _p_change_context(
                                            $.__get_entry(
                                                'export',
                                                ($) => abort(
                                                    ['no such entry', "export"],
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
                                        'name': _p_change_context(
                                            $.__get_entry(
                                                'name',
                                                ($) => abort(
                                                    ['no such entry', "name"],
                                                ),
                                            ),
                                            ($) => Identifier(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'parameters': _p_change_context(
                                            $.__get_entry(
                                                'parameters',
                                                ($) => abort(
                                                    ['no such entry', "parameters"],
                                                ),
                                            ),
                                            ($) => _p.list.map(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a list', null],
                                                    ),
                                                ),
                                                ($) => Identifier(
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
                                            ($) => Type(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }),
                                )],
                            )
                        case 'variable':
                            return _p_change_context(
                                $['value'],
                                ($) => ['variable', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'export': _p_change_context(
                                            $.__get_entry(
                                                'export',
                                                ($) => abort(
                                                    ['no such entry', "export"],
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
                                        'const': _p_change_context(
                                            $.__get_entry(
                                                'const',
                                                ($) => abort(
                                                    ['no such entry', "const"],
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
                                        'name': _p_change_context(
                                            $.__get_entry(
                                                'name',
                                                ($) => abort(
                                                    ['no such entry', "name"],
                                                ),
                                            ),
                                            ($) => Identifier(
                                                $,
                                                ($) => abort(
                                                    $,
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
                                            ($) => _p.optional.map(
                                                v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        ['expected an optional', null],
                                                    ),
                                                ),
                                                ($) => Type(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
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
                                    }),
                                )],
                            )
                        default:
                            return abort(
                                ['unknown option', $['option']['value']],
                            )
                    }
                },
            ),
        ),
    )
    
    export const Type: t_signatures.Type = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Type => {
                switch ($t) {
                    case 'boolean':
                        return _p_change_context(
                            $['value'],
                            ($) => ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    case 'function':
                        return _p_change_context(
                            $['value'],
                            ($) => ['function', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'type parameters': _p_change_context(
                                        $.__get_entry(
                                            'type parameters',
                                            ($) => abort(
                                                ['no such entry', "type parameters"],
                                            ),
                                        ),
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
                                                ),
                                            ),
                                            ($) => Type(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    ),
                                    'parameters': _p_change_context(
                                        $.__get_entry(
                                            'parameters',
                                            ($) => abort(
                                                ['no such entry', "parameters"],
                                            ),
                                        ),
                                        ($) => Function_Parameters(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'return': _p_change_context(
                                        $.__get_entry(
                                            'return',
                                            ($) => abort(
                                                ['no such entry', "return"],
                                            ),
                                        ),
                                        ($) => Type(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'literal type':
                        return _p_change_context(
                            $['value'],
                            ($) => ['literal type', String_Literal(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'never':
                        return _p_change_context(
                            $['value'],
                            ($) => ['never', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    case 'null':
                        return _p_change_context(
                            $['value'],
                            ($) => ['null', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    case 'number':
                        return _p_change_context(
                            $['value'],
                            ($) => ['number', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    case 'string':
                        return _p_change_context(
                            $['value'],
                            ($) => ['string', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    case 'tuple':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tuple', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'readonly': _p_change_context(
                                        $.__get_entry(
                                            'readonly',
                                            ($) => abort(
                                                ['no such entry', "readonly"],
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
                                    'elements': _p_change_context(
                                        $.__get_entry(
                                            'elements',
                                            ($) => abort(
                                                ['no such entry', "elements"],
                                            ),
                                        ),
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
                                                ),
                                            ),
                                            ($) => Type(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'type literal':
                        return _p_change_context(
                            $['value'],
                            ($) => ['type literal', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'properties': _p_change_context(
                                        $.__get_entry(
                                            'properties',
                                            ($) => abort(
                                                ['no such entry', "properties"],
                                            ),
                                        ),
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
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
                                                    'key': _p_change_context(
                                                        $.__get_entry(
                                                            'key',
                                                            ($) => abort(
                                                                ['no such entry', "key"],
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
                                                                ($t): t_out.Type.type_literal.properties.L.key => {
                                                                    switch ($t) {
                                                                        case 'identifier':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['identifier', Identifier(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                )],
                                                                            )
                                                                        case 'string literal':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['string literal', String_Literal(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                )],
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
                                                    'readonly': _p_change_context(
                                                        $.__get_entry(
                                                            'readonly',
                                                            ($) => abort(
                                                                ['no such entry', "readonly"],
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
                                                    'type': _p_change_context(
                                                        $.__get_entry(
                                                            'type',
                                                            ($) => abort(
                                                                ['no such entry', "type"],
                                                            ),
                                                        ),
                                                        ($) => Type(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'type reference':
                        return _p_change_context(
                            $['value'],
                            ($) => ['type reference', _p_change_context(
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
                                        ($) => Identifier(
                                            $,
                                            ($) => abort(
                                                $,
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
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
                                                ),
                                            ),
                                            ($) => Identifier(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    ),
                                    'type arguments': _p_change_context(
                                        $.__get_entry(
                                            'type arguments',
                                            ($) => abort(
                                                ['no such entry', "type arguments"],
                                            ),
                                        ),
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
                                                ),
                                            ),
                                            ($) => Type(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'union':
                        return _p_change_context(
                            $['value'],
                            ($) => ['union', _p.list.map(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null],
                                    ),
                                ),
                                ($) => Type(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            )],
                        )
                    case 'void':
                        return _p_change_context(
                            $['value'],
                            ($) => ['void', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    )
    
    export const Function_Parameters: t_signatures.Function_Parameters = ($, abort) => _p.list.map(
        v_unmarshalled_from_parse_tree.List(
            $,
            ($) => abort(
                ['expected a list', null],
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
                'name': _p_change_context(
                    $.__get_entry(
                        'name',
                        ($) => abort(
                            ['no such entry', "name"],
                        ),
                    ),
                    ($) => Identifier(
                        $,
                        ($) => abort(
                            $,
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
                    ($) => _p.optional.map(
                        v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                ['expected an optional', null],
                            ),
                        ),
                        ($) => Type(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                ),
            }),
        ),
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
                    case 'array literal':
                        return _p_change_context(
                            $['value'],
                            ($) => ['array literal', _p.list.map(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null],
                                    ),
                                ),
                                ($) => Expression(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            )],
                        )
                    case 'arrow function':
                        return _p_change_context(
                            $['value'],
                            ($) => ['arrow function', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'parameters': _p_change_context(
                                        $.__get_entry(
                                            'parameters',
                                            ($) => abort(
                                                ['no such entry', "parameters"],
                                            ),
                                        ),
                                        ($) => Function_Parameters(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'return type': _p_change_context(
                                        $.__get_entry(
                                            'return type',
                                            ($) => abort(
                                                ['no such entry', "return type"],
                                            ),
                                        ),
                                        ($) => _p.optional.map(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null],
                                                ),
                                            ),
                                            ($) => Type(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    ),
                                    'body': _p_change_context(
                                        $.__get_entry(
                                            'body',
                                            ($) => abort(
                                                ['no such entry', "body"],
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
                                                ($t): t_out.Expression.arrow_function.body => {
                                                    switch ($t) {
                                                        case 'block':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['block', Block(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )],
                                                            )
                                                        case 'expression':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['expression', Expression(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )],
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
                        )
                    case 'assignment':
                        return _p_change_context(
                            $['value'],
                            ($) => ['assignment', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'left': _p_change_context(
                                        $.__get_entry(
                                            'left',
                                            ($) => abort(
                                                ['no such entry', "left"],
                                            ),
                                        ),
                                        ($) => Expression(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'right': _p_change_context(
                                        $.__get_entry(
                                            'right',
                                            ($) => abort(
                                                ['no such entry', "right"],
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
                        )
                    case 'call':
                        return _p_change_context(
                            $['value'],
                            ($) => ['call', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'function selection': _p_change_context(
                                        $.__get_entry(
                                            'function selection',
                                            ($) => abort(
                                                ['no such entry', "function selection"],
                                            ),
                                        ),
                                        ($) => Expression(
                                            $,
                                            ($) => abort(
                                                $,
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
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
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
                                }),
                            )],
                        )
                    case 'compare':
                        return _p_change_context(
                            $['value'],
                            ($) => ['compare', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'left': _p_change_context(
                                        $.__get_entry(
                                            'left',
                                            ($) => abort(
                                                ['no such entry', "left"],
                                            ),
                                        ),
                                        ($) => Expression(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'operator': _p_change_context(
                                        $.__get_entry(
                                            'operator',
                                            ($) => abort(
                                                ['no such entry', "operator"],
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
                                                ($t): t_out.Expression.compare.operator => {
                                                    switch ($t) {
                                                        case 'loosely equal':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['loosely equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'strictly equal':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['strictly equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'loosely not equal':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['loosely not equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'strictly not equal':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['strictly not equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'smaller than':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['smaller than', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'smaller than or equal':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['smaller than or equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'greater than':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['greater than', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'greater than or equal':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['greater than or equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
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
                                    'right': _p_change_context(
                                        $.__get_entry(
                                            'right',
                                            ($) => abort(
                                                ['no such entry', "right"],
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
                        )
                    case 'conditional':
                        return _p_change_context(
                            $['value'],
                            ($) => ['conditional', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'condition': _p_change_context(
                                        $.__get_entry(
                                            'condition',
                                            ($) => abort(
                                                ['no such entry', "condition"],
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
                        )
                    case 'element access':
                        return _p_change_context(
                            $['value'],
                            ($) => ['element access', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'collection': _p_change_context(
                                        $.__get_entry(
                                            'collection',
                                            ($) => abort(
                                                ['no such entry', "collection"],
                                            ),
                                        ),
                                        ($) => Expression(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'index': _p_change_context(
                                        $.__get_entry(
                                            'index',
                                            ($) => abort(
                                                ['no such entry', "index"],
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
                        )
                    case 'identifier':
                        return _p_change_context(
                            $['value'],
                            ($) => ['identifier', Identifier(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'false':
                        return _p_change_context(
                            $['value'],
                            ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    case 'null':
                        return _p_change_context(
                            $['value'],
                            ($) => ['null', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    case 'number literal':
                        return _p_change_context(
                            $['value'],
                            ($) => ['number literal', v_deserialize_number.deserialize(
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
                        )
                    case 'object literal':
                        return _p_change_context(
                            $['value'],
                            ($) => ['object literal', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'properties': _p_change_context(
                                        $.__get_entry(
                                            'properties',
                                            ($) => abort(
                                                ['no such entry', "properties"],
                                            ),
                                        ),
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
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
                                                    'key': _p_change_context(
                                                        $.__get_entry(
                                                            'key',
                                                            ($) => abort(
                                                                ['no such entry', "key"],
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
                                                                ($t): t_out.Expression.object_literal.properties.L.key => {
                                                                    switch ($t) {
                                                                        case 'identifier':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['identifier', Identifier(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                )],
                                                                            )
                                                                        case 'string literal':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['string literal', String_Literal(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                )],
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
                                    ),
                                }),
                            )],
                        )
                    case 'parenthesized':
                        return _p_change_context(
                            $['value'],
                            ($) => ['parenthesized', Expression(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'property access':
                        return _p_change_context(
                            $['value'],
                            ($) => ['property access', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'object': _p_change_context(
                                        $.__get_entry(
                                            'object',
                                            ($) => abort(
                                                ['no such entry', "object"],
                                            ),
                                        ),
                                        ($) => Expression(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'property': _p_change_context(
                                        $.__get_entry(
                                            'property',
                                            ($) => abort(
                                                ['no such entry', "property"],
                                            ),
                                        ),
                                        ($) => Identifier(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'string literal':
                        return _p_change_context(
                            $['value'],
                            ($) => ['string literal', String_Literal(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'true':
                        return _p_change_context(
                            $['value'],
                            ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    case 'unary operation':
                        return _p_change_context(
                            $['value'],
                            ($) => ['unary operation', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'operator': _p_change_context(
                                        $.__get_entry(
                                            'operator',
                                            ($) => abort(
                                                ['no such entry', "operator"],
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
                                                ($t): t_out.Expression.unary_operation.operator => {
                                                    switch ($t) {
                                                        case 'negation':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['negation', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'logical not':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['logical not', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
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
                                    'operand': _p_change_context(
                                        $.__get_entry(
                                            'operand',
                                            ($) => abort(
                                                ['no such entry', "operand"],
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
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    )
    
    export const String_Literal: t_signatures.String_Literal = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
            'delimiter': _p_change_context(
                $.__get_entry(
                    'delimiter',
                    ($) => abort(
                        ['no such entry', "delimiter"],
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
                        ($t): t_out.String_Literal.delimiter => {
                            switch ($t) {
                                case 'quote':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['quote', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        )],
                                    )
                                case 'apostrophe':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['apostrophe', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        )],
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
    )
    
    export const Identifier: t_signatures.Identifier = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
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
    )
