    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/typescript_light/boilerplate_for_migrate"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/typescript_light/data"
    
    export const Directory: t_signatures.Directory = ($) => _p.dictionary.map(
        $,
        ($, id) => _p.decide.state(
            $,
            ($): t_out.Directory.D => {
                switch ($[0]) {
                    case 'file':
                        return _p.ss(
                            $,
                            ($) => ['file', {
                                'statements': _p_change_context(
                                    $['statements'],
                                    ($) => Statements(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'directory':
                        return _p.ss(
                            $,
                            ($) => ['directory', Directory(
                                $,
                            )],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    )
    
    export const Block: t_signatures.Block = ($) => Statements(
        $,
    )
    
    export const Statements: t_signatures.Statements = ($) => _p.list.map(
        $,
        ($) => _p.decide.state(
            $,
            ($): t_out.Statements.L => {
                switch ($[0]) {
                    case 'block':
                        return _p.ss(
                            $,
                            ($) => ['block', Block(
                                $,
                            )],
                        )
                    case 'export':
                        return _p.ss(
                            $,
                            ($) => ['export', {
                                'type': _p_change_context(
                                    $['type'],
                                    ($) => _p.decide.state(
                                        $,
                                        ($): t_out.Statements.L.export_.type_ => {
                                            switch ($[0]) {
                                                case 'named exports':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['named exports', {
                                                            'specifiers': _p_change_context(
                                                                $['specifiers'],
                                                                ($) => _p.list.map(
                                                                    $,
                                                                    ($) => ({
                                                                        'name': _p_change_context(
                                                                            $['name'],
                                                                            ($) => Identifier(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        'as': _p_change_context(
                                                                            $['as'],
                                                                            ($) => _p.optional.map(
                                                                                $,
                                                                                ($) => Identifier(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            ),
                                                            'from': _p_change_context(
                                                                $['from'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => String_Literal(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                            }],
                        )
                    case 'expression':
                        return _p.ss(
                            $,
                            ($) => ['expression', Expression(
                                $,
                            )],
                        )
                    case 'import':
                        return _p.ss(
                            $,
                            ($) => ['import', {
                                'type': _p_change_context(
                                    $['type'],
                                    ($) => _p.decide.state(
                                        $,
                                        ($): t_out.Statements.L.import_.type_ => {
                                            switch ($[0]) {
                                                case 'default':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['default', Identifier(
                                                            $,
                                                        )],
                                                    )
                                                case 'namespace':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['namespace', Identifier(
                                                            $,
                                                        )],
                                                    )
                                                case 'named':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['named', {
                                                            'specifiers': _p_change_context(
                                                                $['specifiers'],
                                                                ($) => _p.list.map(
                                                                    $,
                                                                    ($) => ({
                                                                        'name': _p_change_context(
                                                                            $['name'],
                                                                            ($) => Identifier(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        'as': _p_change_context(
                                                                            $['as'],
                                                                            ($) => _p.optional.map(
                                                                                $,
                                                                                ($) => Identifier(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                                'from': _p_change_context(
                                    $['from'],
                                    ($) => String_Literal(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'module declaration':
                        return _p.ss(
                            $,
                            ($) => ['module declaration', {
                                'export': _p_change_context(
                                    $['export'],
                                    ($) => $,
                                ),
                                'name': _p_change_context(
                                    $['name'],
                                    ($) => Identifier(
                                        $,
                                    ),
                                ),
                                'block': _p_change_context(
                                    $['block'],
                                    ($) => Block(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'return':
                        return _p.ss(
                            $,
                            ($) => ['return', _p.optional.map(
                                $,
                                ($) => Expression(
                                    $,
                                ),
                            )],
                        )
                    case 'switch':
                        return _p.ss(
                            $,
                            ($) => ['switch', {
                                'expression': _p_change_context(
                                    $['expression'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                                'clauses': _p_change_context(
                                    $['clauses'],
                                    ($) => _p.list.map(
                                        $,
                                        ($) => ({
                                            'type': _p_change_context(
                                                $['type'],
                                                ($) => _p.decide.state(
                                                    $,
                                                    ($): t_out.Statements.L.switch_.clauses.L.type_ => {
                                                        switch ($[0]) {
                                                            case 'case':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['case', Expression(
                                                                        $,
                                                                    )],
                                                                )
                                                            case 'default':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['default', null],
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                ),
                                            ),
                                            'statements': _p_change_context(
                                                $['statements'],
                                                ($) => Statements(
                                                    $,
                                                ),
                                            ),
                                        }),
                                    ),
                                ),
                            }],
                        )
                    case 'type alias declaration':
                        return _p.ss(
                            $,
                            ($) => ['type alias declaration', {
                                'export': _p_change_context(
                                    $['export'],
                                    ($) => $,
                                ),
                                'name': _p_change_context(
                                    $['name'],
                                    ($) => Identifier(
                                        $,
                                    ),
                                ),
                                'parameters': _p_change_context(
                                    $['parameters'],
                                    ($) => _p.list.map(
                                        $,
                                        ($) => Identifier(
                                            $,
                                        ),
                                    ),
                                ),
                                'type': _p_change_context(
                                    $['type'],
                                    ($) => Type(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'variable':
                        return _p.ss(
                            $,
                            ($) => ['variable', {
                                'export': _p_change_context(
                                    $['export'],
                                    ($) => $,
                                ),
                                'const': _p_change_context(
                                    $['const'],
                                    ($) => $,
                                ),
                                'name': _p_change_context(
                                    $['name'],
                                    ($) => Identifier(
                                        $,
                                    ),
                                ),
                                'type': _p_change_context(
                                    $['type'],
                                    ($) => _p.optional.map(
                                        $,
                                        ($) => Type(
                                            $,
                                        ),
                                    ),
                                ),
                                'expression': _p_change_context(
                                    $['expression'],
                                    ($) => _p.optional.map(
                                        $,
                                        ($) => Expression(
                                            $,
                                        ),
                                    ),
                                ),
                            }],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    )
    
    export const Type: t_signatures.Type = ($) => _p.decide.state(
        $,
        ($): t_out.Type => {
            switch ($[0]) {
                case 'boolean':
                    return _p.ss(
                        $,
                        ($) => ['boolean', null],
                    )
                case 'function':
                    return _p.ss(
                        $,
                        ($) => ['function', {
                            'type parameters': _p_change_context(
                                $['type parameters'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => Type(
                                        $,
                                    ),
                                ),
                            ),
                            'parameters': _p_change_context(
                                $['parameters'],
                                ($) => Function_Parameters(
                                    $,
                                ),
                            ),
                            'return': _p_change_context(
                                $['return'],
                                ($) => Type(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'literal type':
                    return _p.ss(
                        $,
                        ($) => ['literal type', String_Literal(
                            $,
                        )],
                    )
                case 'never':
                    return _p.ss(
                        $,
                        ($) => ['never', null],
                    )
                case 'null':
                    return _p.ss(
                        $,
                        ($) => ['null', null],
                    )
                case 'number':
                    return _p.ss(
                        $,
                        ($) => ['number', null],
                    )
                case 'string':
                    return _p.ss(
                        $,
                        ($) => ['string', null],
                    )
                case 'tuple':
                    return _p.ss(
                        $,
                        ($) => ['tuple', {
                            'readonly': _p_change_context(
                                $['readonly'],
                                ($) => $,
                            ),
                            'elements': _p_change_context(
                                $['elements'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => Type(
                                        $,
                                    ),
                                ),
                            ),
                        }],
                    )
                case 'type literal':
                    return _p.ss(
                        $,
                        ($) => ['type literal', {
                            'properties': _p_change_context(
                                $['properties'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => ({
                                        'key': _p_change_context(
                                            $['key'],
                                            ($) => _p.decide.state(
                                                $,
                                                ($): t_out.Type.type_literal.properties.L.key => {
                                                    switch ($[0]) {
                                                        case 'identifier':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['identifier', Identifier(
                                                                    $,
                                                                )],
                                                            )
                                                        case 'string literal':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['string literal', String_Literal(
                                                                    $,
                                                                )],
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                        'readonly': _p_change_context(
                                            $['readonly'],
                                            ($) => $,
                                        ),
                                        'type': _p_change_context(
                                            $['type'],
                                            ($) => Type(
                                                $,
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                        }],
                    )
                case 'type reference':
                    return _p.ss(
                        $,
                        ($) => ['type reference', {
                            'start': _p_change_context(
                                $['start'],
                                ($) => Identifier(
                                    $,
                                ),
                            ),
                            'tail': _p_change_context(
                                $['tail'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => Identifier(
                                        $,
                                    ),
                                ),
                            ),
                            'type arguments': _p_change_context(
                                $['type arguments'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => Type(
                                        $,
                                    ),
                                ),
                            ),
                        }],
                    )
                case 'union':
                    return _p.ss(
                        $,
                        ($) => ['union', _p.list.map(
                            $,
                            ($) => Type(
                                $,
                            ),
                        )],
                    )
                case 'void':
                    return _p.ss(
                        $,
                        ($) => ['void', null],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )
    
    export const Function_Parameters: t_signatures.Function_Parameters = ($) => _p.list.map(
        $,
        ($) => ({
            'name': _p_change_context(
                $['name'],
                ($) => Identifier(
                    $,
                ),
            ),
            'type': _p_change_context(
                $['type'],
                ($) => _p.optional.map(
                    $,
                    ($) => Type(
                        $,
                    ),
                ),
            ),
        }),
    )
    
    export const Expression: t_signatures.Expression = ($) => _p.decide.state(
        $,
        ($): t_out.Expression => {
            switch ($[0]) {
                case 'array literal':
                    return _p.ss(
                        $,
                        ($) => ['array literal', _p.list.map(
                            $,
                            ($) => Expression(
                                $,
                            ),
                        )],
                    )
                case 'arrow function':
                    return _p.ss(
                        $,
                        ($) => ['arrow function', {
                            'parameters': _p_change_context(
                                $['parameters'],
                                ($) => Function_Parameters(
                                    $,
                                ),
                            ),
                            'return type': _p_change_context(
                                $['return type'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => Type(
                                        $,
                                    ),
                                ),
                            ),
                            'body': _p_change_context(
                                $['body'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Expression.arrow_function.body => {
                                        switch ($[0]) {
                                            case 'block':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['block', Block(
                                                        $,
                                                    )],
                                                )
                                            case 'expression':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['expression', Expression(
                                                        $,
                                                    )],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }],
                    )
                case 'assignment':
                    return _p.ss(
                        $,
                        ($) => ['assignment', {
                            'left': _p_change_context(
                                $['left'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                            'right': _p_change_context(
                                $['right'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'call':
                    return _p.ss(
                        $,
                        ($) => ['call', {
                            'function selection': _p_change_context(
                                $['function selection'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                            'arguments': _p_change_context(
                                $['arguments'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                            ),
                        }],
                    )
                case 'compare':
                    return _p.ss(
                        $,
                        ($) => ['compare', {
                            'left': _p_change_context(
                                $['left'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                            'operator': _p_change_context(
                                $['operator'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Expression.compare.operator => {
                                        switch ($[0]) {
                                            case 'loosely equal':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['loosely equal', null],
                                                )
                                            case 'strictly equal':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['strictly equal', null],
                                                )
                                            case 'loosely not equal':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['loosely not equal', null],
                                                )
                                            case 'strictly not equal':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['strictly not equal', null],
                                                )
                                            case 'smaller than':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['smaller than', null],
                                                )
                                            case 'smaller than or equal':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['smaller than or equal', null],
                                                )
                                            case 'greater than':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['greater than', null],
                                                )
                                            case 'greater than or equal':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['greater than or equal', null],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'right': _p_change_context(
                                $['right'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'conditional':
                    return _p.ss(
                        $,
                        ($) => ['conditional', {
                            'condition': _p_change_context(
                                $['condition'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                            'if true': _p_change_context(
                                $['if true'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                            'if false': _p_change_context(
                                $['if false'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'element access':
                    return _p.ss(
                        $,
                        ($) => ['element access', {
                            'collection': _p_change_context(
                                $['collection'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                            'index': _p_change_context(
                                $['index'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'identifier':
                    return _p.ss(
                        $,
                        ($) => ['identifier', Identifier(
                            $,
                        )],
                    )
                case 'false':
                    return _p.ss(
                        $,
                        ($) => ['false', null],
                    )
                case 'null':
                    return _p.ss(
                        $,
                        ($) => ['null', null],
                    )
                case 'number literal':
                    return _p.ss(
                        $,
                        ($) => ['number literal', $],
                    )
                case 'object literal':
                    return _p.ss(
                        $,
                        ($) => ['object literal', {
                            'properties': _p_change_context(
                                $['properties'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => ({
                                        'key': _p_change_context(
                                            $['key'],
                                            ($) => _p.decide.state(
                                                $,
                                                ($): t_out.Expression.object_literal.properties.L.key => {
                                                    switch ($[0]) {
                                                        case 'identifier':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['identifier', Identifier(
                                                                    $,
                                                                )],
                                                            )
                                                        case 'string literal':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['string literal', String_Literal(
                                                                    $,
                                                                )],
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                        'value': _p_change_context(
                                            $['value'],
                                            ($) => Expression(
                                                $,
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                        }],
                    )
                case 'parenthesized':
                    return _p.ss(
                        $,
                        ($) => ['parenthesized', Expression(
                            $,
                        )],
                    )
                case 'property access':
                    return _p.ss(
                        $,
                        ($) => ['property access', {
                            'object': _p_change_context(
                                $['object'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                            'property': _p_change_context(
                                $['property'],
                                ($) => Identifier(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'string literal':
                    return _p.ss(
                        $,
                        ($) => ['string literal', String_Literal(
                            $,
                        )],
                    )
                case 'true':
                    return _p.ss(
                        $,
                        ($) => ['true', null],
                    )
                case 'unary operation':
                    return _p.ss(
                        $,
                        ($) => ['unary operation', {
                            'operator': _p_change_context(
                                $['operator'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Expression.unary_operation.operator => {
                                        switch ($[0]) {
                                            case 'negation':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['negation', null],
                                                )
                                            case 'logical not':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['logical not', null],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'operand': _p_change_context(
                                $['operand'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                        }],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )
    
    export const String_Literal: t_signatures.String_Literal = ($) => ({
        'delimiter': _p_change_context(
            $['delimiter'],
            ($) => _p.decide.state(
                $,
                ($): t_out.String_Literal.delimiter => {
                    switch ($[0]) {
                        case 'quote':
                            return _p.ss(
                                $,
                                ($) => ['quote', null],
                            )
                        case 'apostrophe':
                            return _p.ss(
                                $,
                                ($) => ['apostrophe', null],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        ),
        'value': _p_change_context(
            $['value'],
            ($) => $,
        ),
    })
    
    export const Identifier: t_signatures.Identifier = ($) => ({
        'value': _p_change_context(
            $['value'],
            ($) => $,
        ),
    })
