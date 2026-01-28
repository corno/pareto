
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/typescript_light/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/typescript_light/data"
export const Identifier: t_signatures.Identifier = ($) => ({
    'value': _p.deprecated_cc(
        $['value'], 
        ($) => $
    ),
})
export const Function_Parameters: t_signatures.Function_Parameters = ($) => $.__l_map(
    ($) => ({
        'name': _p.deprecated_cc(
            $['name'], 
            ($) => Identifier(
                $
            )
        ),
        'type': _p.deprecated_cc(
            $['type'], 
            ($) => $.__o_map(
                ($) => Type(
                    $
                )
            )
        ),
    })
)
export const String_Literal: t_signatures.String_Literal = ($) => ({
    'delimiter': _p.deprecated_cc(
        $['delimiter'], 
        ($) => _p.decide.state(
            $, 
            ($): t_out.String_Literal.delimiter => {
                switch ($[0]) {
                    case 'quote':
                        return _p.ss(
                            $, 
                            ($) => ['quote', null]
                        )
                    case 'apostrophe':
                        return _p.ss(
                            $, 
                            ($) => ['apostrophe', null]
                        )
                    default:
                        return _p.au(
                            $[0]
                        )
                }
            }
        )
    ),
    'value': _p.deprecated_cc(
        $['value'], 
        ($) => $
    ),
})
export const Type: t_signatures.Type = ($) => _p.decide.state(
    $, 
    ($): t_out.Type => {
        switch ($[0]) {
            case 'boolean':
                return _p.ss(
                    $, 
                    ($) => ['boolean', null]
                )
            case 'function':
                return _p.ss(
                    $, 
                    ($) => ['function', ({
                        'type parameters': _p.deprecated_cc(
                            $['type parameters'], 
                            ($) => $.__l_map(
                                ($) => Type(
                                    $
                                )
                            )
                        ),
                        'parameters': _p.deprecated_cc(
                            $['parameters'], 
                            ($) => Function_Parameters(
                                $
                            )
                        ),
                        'return': _p.deprecated_cc(
                            $['return'], 
                            ($) => Type(
                                $
                            )
                        ),
                    })]
                )
            case 'literal type':
                return _p.ss(
                    $, 
                    ($) => ['literal type', String_Literal(
                        $
                    )]
                )
            case 'null':
                return _p.ss(
                    $, 
                    ($) => ['null', null]
                )
            case 'number':
                return _p.ss(
                    $, 
                    ($) => ['number', null]
                )
            case 'string':
                return _p.ss(
                    $, 
                    ($) => ['string', null]
                )
            case 'tuple':
                return _p.ss(
                    $, 
                    ($) => ['tuple', ({
                        'readonly': _p.deprecated_cc(
                            $['readonly'], 
                            ($) => $
                        ),
                        'elements': _p.deprecated_cc(
                            $['elements'], 
                            ($) => $.__l_map(
                                ($) => Type(
                                    $
                                )
                            )
                        ),
                    })]
                )
            case 'type literal':
                return _p.ss(
                    $, 
                    ($) => ['type literal', ({
                        'properties': _p.deprecated_cc(
                            $['properties'], 
                            ($) => $.__d_map(
                                ($,id) => ({
                                    'readonly': _p.deprecated_cc(
                                        $['readonly'], 
                                        ($) => $
                                    ),
                                    'type': _p.deprecated_cc(
                                        $['type'], 
                                        ($) => Type(
                                            $
                                        )
                                    ),
                                })
                            )
                        ),
                    })]
                )
            case 'type reference':
                return _p.ss(
                    $, 
                    ($) => ['type reference', ({
                        'start': _p.deprecated_cc(
                            $['start'], 
                            ($) => Identifier(
                                $
                            )
                        ),
                        'tail': _p.deprecated_cc(
                            $['tail'], 
                            ($) => $.__l_map(
                                ($) => Identifier(
                                    $
                                )
                            )
                        ),
                        'type arguments': _p.deprecated_cc(
                            $['type arguments'], 
                            ($) => $.__l_map(
                                ($) => Type(
                                    $
                                )
                            )
                        ),
                    })]
                )
            case 'union':
                return _p.ss(
                    $, 
                    ($) => ['union', $.__l_map(
                        ($) => Type(
                            $
                        )
                    )]
                )
            case 'void':
                return _p.ss(
                    $, 
                    ($) => ['void', null]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)
export const Expression: t_signatures.Expression = ($) => _p.decide.state(
    $, 
    ($): t_out.Expression => {
        switch ($[0]) {
            case 'array literal':
                return _p.ss(
                    $, 
                    ($) => ['array literal', $.__l_map(
                        ($) => Expression(
                            $
                        )
                    )]
                )
            case 'arrow function':
                return _p.ss(
                    $, 
                    ($) => ['arrow function', ({
                        'parameters': _p.deprecated_cc(
                            $['parameters'], 
                            ($) => Function_Parameters(
                                $
                            )
                        ),
                        'return type': _p.deprecated_cc(
                            $['return type'], 
                            ($) => $.__o_map(
                                ($) => Type(
                                    $
                                )
                            )
                        ),
                        'body': _p.deprecated_cc(
                            $['body'], 
                            ($) => _p.decide.state(
                                $, 
                                ($): t_out.Expression.arrow_function.body => {
                                    switch ($[0]) {
                                        case 'block':
                                            return _p.ss(
                                                $, 
                                                ($) => ['block', Statements(
                                                    $
                                                )]
                                            )
                                        case 'expression':
                                            return _p.ss(
                                                $, 
                                                ($) => ['expression', Expression(
                                                    $
                                                )]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )
                        ),
                    })]
                )
            case 'assignment':
                return _p.ss(
                    $, 
                    ($) => ['assignment', ({
                        'left': _p.deprecated_cc(
                            $['left'], 
                            ($) => Expression(
                                $
                            )
                        ),
                        'right': _p.deprecated_cc(
                            $['right'], 
                            ($) => Expression(
                                $
                            )
                        ),
                    })]
                )
            case 'call':
                return _p.ss(
                    $, 
                    ($) => ['call', ({
                        'function selection': _p.deprecated_cc(
                            $['function selection'], 
                            ($) => Expression(
                                $
                            )
                        ),
                        'arguments': _p.deprecated_cc(
                            $['arguments'], 
                            ($) => $.__l_map(
                                ($) => Expression(
                                    $
                                )
                            )
                        ),
                    })]
                )
            case 'compare':
                return _p.ss(
                    $, 
                    ($) => ['compare', ({
                        'left': _p.deprecated_cc(
                            $['left'], 
                            ($) => Expression(
                                $
                            )
                        ),
                        'operator': _p.deprecated_cc(
                            $['operator'], 
                            ($) => _p.decide.state(
                                $, 
                                ($): t_out.Expression.compare.operator => {
                                    switch ($[0]) {
                                        case 'loosely equal':
                                            return _p.ss(
                                                $, 
                                                ($) => ['loosely equal', null]
                                            )
                                        case 'strictly equal':
                                            return _p.ss(
                                                $, 
                                                ($) => ['strictly equal', null]
                                            )
                                        case 'loosely not equal':
                                            return _p.ss(
                                                $, 
                                                ($) => ['loosely not equal', null]
                                            )
                                        case 'strictly not equal':
                                            return _p.ss(
                                                $, 
                                                ($) => ['strictly not equal', null]
                                            )
                                        case 'smaller than':
                                            return _p.ss(
                                                $, 
                                                ($) => ['smaller than', null]
                                            )
                                        case 'smaller than or equal':
                                            return _p.ss(
                                                $, 
                                                ($) => ['smaller than or equal', null]
                                            )
                                        case 'greater than':
                                            return _p.ss(
                                                $, 
                                                ($) => ['greater than', null]
                                            )
                                        case 'greater than or equal':
                                            return _p.ss(
                                                $, 
                                                ($) => ['greater than or equal', null]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )
                        ),
                        'right': _p.deprecated_cc(
                            $['right'], 
                            ($) => Expression(
                                $
                            )
                        ),
                    })]
                )
            case 'conditional':
                return _p.ss(
                    $, 
                    ($) => ['conditional', ({
                        'condition': _p.deprecated_cc(
                            $['condition'], 
                            ($) => Expression(
                                $
                            )
                        ),
                        'if true': _p.deprecated_cc(
                            $['if true'], 
                            ($) => Expression(
                                $
                            )
                        ),
                        'if false': _p.deprecated_cc(
                            $['if false'], 
                            ($) => Expression(
                                $
                            )
                        ),
                    })]
                )
            case 'element access':
                return _p.ss(
                    $, 
                    ($) => ['element access', ({
                        'collection': _p.deprecated_cc(
                            $['collection'], 
                            ($) => Expression(
                                $
                            )
                        ),
                        'index': _p.deprecated_cc(
                            $['index'], 
                            ($) => Expression(
                                $
                            )
                        ),
                    })]
                )
            case 'identifier':
                return _p.ss(
                    $, 
                    ($) => ['identifier', Identifier(
                        $
                    )]
                )
            case 'false':
                return _p.ss(
                    $, 
                    ($) => ['false', null]
                )
            case 'null':
                return _p.ss(
                    $, 
                    ($) => ['null', null]
                )
            case 'number literal':
                return _p.ss(
                    $, 
                    ($) => ['number literal', $]
                )
            case 'object literal':
                return _p.ss(
                    $, 
                    ($) => ['object literal', ({
                        'properties': _p.deprecated_cc(
                            $['properties'], 
                            ($) => $.__d_map(
                                ($,id) => Expression(
                                    $
                                )
                            )
                        ),
                    })]
                )
            case 'parenthesized':
                return _p.ss(
                    $, 
                    ($) => ['parenthesized', Expression(
                        $
                    )]
                )
            case 'property access':
                return _p.ss(
                    $, 
                    ($) => ['property access', ({
                        'object': _p.deprecated_cc(
                            $['object'], 
                            ($) => Expression(
                                $
                            )
                        ),
                        'property': _p.deprecated_cc(
                            $['property'], 
                            ($) => Identifier(
                                $
                            )
                        ),
                    })]
                )
            case 'string literal':
                return _p.ss(
                    $, 
                    ($) => ['string literal', String_Literal(
                        $
                    )]
                )
            case 'true':
                return _p.ss(
                    $, 
                    ($) => ['true', null]
                )
            case 'unary operation':
                return _p.ss(
                    $, 
                    ($) => ['unary operation', ({
                        'operator': _p.deprecated_cc(
                            $['operator'], 
                            ($) => _p.decide.state(
                                $, 
                                ($): t_out.Expression.unary_operation.operator => {
                                    switch ($[0]) {
                                        case 'negation':
                                            return _p.ss(
                                                $, 
                                                ($) => ['negation', null]
                                            )
                                        case 'logical not':
                                            return _p.ss(
                                                $, 
                                                ($) => ['logical not', null]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )
                        ),
                        'operand': _p.deprecated_cc(
                            $['operand'], 
                            ($) => Expression(
                                $
                            )
                        ),
                    })]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)
export const Statements: t_signatures.Statements = ($) => $.__l_map(
    ($) => _p.decide.state(
        $, 
        ($): t_out.Statements.L => {
            switch ($[0]) {
                case 'block':
                    return _p.ss(
                        $, 
                        ($) => ['block', Statements(
                            $
                        )]
                    )
                case 'export':
                    return _p.ss(
                        $, 
                        ($) => ['export', ({
                            'type': _p.deprecated_cc(
                                $['type'], 
                                ($) => _p.decide.state(
                                    $, 
                                    ($): t_out.Statements.L.export_.type_ => {
                                        switch ($[0]) {
                                            case 'named exports':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['named exports', ({
                                                        'specifiers': _p.deprecated_cc(
                                                            $['specifiers'], 
                                                            ($) => $.__l_map(
                                                                ($) => ({
                                                                    'name': _p.deprecated_cc(
                                                                        $['name'], 
                                                                        ($) => Identifier(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'as': _p.deprecated_cc(
                                                                        $['as'], 
                                                                        ($) => $.__o_map(
                                                                            ($) => Identifier(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            )
                                                        ),
                                                        'from': _p.deprecated_cc(
                                                            $['from'], 
                                                            ($) => $.__o_map(
                                                                ($) => $
                                                            )
                                                        ),
                                                    })]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            ),
                        })]
                    )
                case 'expression':
                    return _p.ss(
                        $, 
                        ($) => ['expression', Expression(
                            $
                        )]
                    )
                case 'import':
                    return _p.ss(
                        $, 
                        ($) => ['import', ({
                            'type': _p.deprecated_cc(
                                $['type'], 
                                ($) => _p.decide.state(
                                    $, 
                                    ($): t_out.Statements.L.import_.type_ => {
                                        switch ($[0]) {
                                            case 'namespace':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['namespace', Identifier(
                                                        $
                                                    )]
                                                )
                                            case 'named':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['named', ({
                                                        'specifiers': _p.deprecated_cc(
                                                            $['specifiers'], 
                                                            ($) => $.__l_map(
                                                                ($) => ({
                                                                    'name': _p.deprecated_cc(
                                                                        $['name'], 
                                                                        ($) => Identifier(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'as': _p.deprecated_cc(
                                                                        $['as'], 
                                                                        ($) => $.__o_map(
                                                                            ($) => Identifier(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            )
                                                        ),
                                                    })]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            ),
                            'from': _p.deprecated_cc(
                                $['from'], 
                                ($) => $
                            ),
                        })]
                    )
                case 'module declaration':
                    return _p.ss(
                        $, 
                        ($) => ['module declaration', ({
                            'export': _p.deprecated_cc(
                                $['export'], 
                                ($) => $
                            ),
                            'name': _p.deprecated_cc(
                                $['name'], 
                                ($) => Identifier(
                                    $
                                )
                            ),
                            'block': _p.deprecated_cc(
                                $['block'], 
                                ($) => Statements(
                                    $
                                )
                            ),
                        })]
                    )
                case 'return':
                    return _p.ss(
                        $, 
                        ($) => ['return', $.__o_map(
                            ($) => Expression(
                                $
                            )
                        )]
                    )
                case 'switch':
                    return _p.ss(
                        $, 
                        ($) => ['switch', ({
                            'expression': _p.deprecated_cc(
                                $['expression'], 
                                ($) => Expression(
                                    $
                                )
                            ),
                            'clauses': _p.deprecated_cc(
                                $['clauses'], 
                                ($) => $.__l_map(
                                    ($) => ({
                                        'type': _p.deprecated_cc(
                                            $['type'], 
                                            ($) => _p.decide.state(
                                                $, 
                                                ($): t_out.Statements.L.switch_.clauses.L.type_ => {
                                                    switch ($[0]) {
                                                        case 'case':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ['case', Expression(
                                                                    $
                                                                )]
                                                            )
                                                        case 'default':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ['default', null]
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            )
                                        ),
                                        'statements': _p.deprecated_cc(
                                            $['statements'], 
                                            ($) => Statements(
                                                $
                                            )
                                        ),
                                    })
                                )
                            ),
                        })]
                    )
                case 'type alias declaration':
                    return _p.ss(
                        $, 
                        ($) => ['type alias declaration', ({
                            'export': _p.deprecated_cc(
                                $['export'], 
                                ($) => $
                            ),
                            'name': _p.deprecated_cc(
                                $['name'], 
                                ($) => Identifier(
                                    $
                                )
                            ),
                            'parameters': _p.deprecated_cc(
                                $['parameters'], 
                                ($) => $.__l_map(
                                    ($) => Identifier(
                                        $
                                    )
                                )
                            ),
                            'type': _p.deprecated_cc(
                                $['type'], 
                                ($) => Type(
                                    $
                                )
                            ),
                        })]
                    )
                case 'variable':
                    return _p.ss(
                        $, 
                        ($) => ['variable', ({
                            'export': _p.deprecated_cc(
                                $['export'], 
                                ($) => $
                            ),
                            'const': _p.deprecated_cc(
                                $['const'], 
                                ($) => $
                            ),
                            'name': _p.deprecated_cc(
                                $['name'], 
                                ($) => Identifier(
                                    $
                                )
                            ),
                            'type': _p.deprecated_cc(
                                $['type'], 
                                ($) => $.__o_map(
                                    ($) => Type(
                                        $
                                    )
                                )
                            ),
                            'expression': _p.deprecated_cc(
                                $['expression'], 
                                ($) => $.__o_map(
                                    ($) => Expression(
                                        $
                                    )
                                )
                            ),
                        })]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )
)
export const Directory: t_signatures.Directory = ($) => $.__d_map(
    ($,id) => _p.decide.state(
        $, 
        ($): t_out.Directory.D => {
            switch ($[0]) {
                case 'file':
                    return _p.ss(
                        $, 
                        ($) => ['file', ({
                            'statements': _p.deprecated_cc(
                                $['statements'], 
                                ($) => Statements(
                                    $
                                )
                            ),
                        })]
                    )
                case 'directory':
                    return _p.ss(
                        $, 
                        ($) => ['directory', Directory(
                            $
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
