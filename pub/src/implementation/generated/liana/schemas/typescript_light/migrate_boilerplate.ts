
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/typescript_light/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/typescript_light/data"

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
                            'statements': _p_cc(
                                $['statements'],
                                ($) => Statements(
                                    $
                                )
                            ),
                        }]
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

export const Block: t_signatures.Block = ($) => Statements(
    $
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
                            $
                        )]
                    )
                case 'export':
                    return _p.ss(
                        $,
                        ($) => ['export', {
                            'type': _p_cc(
                                $['type'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Statements.L.export_.type_ => {
                                        switch ($[0]) {
                                            case 'named exports':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['named exports', {
                                                        'specifiers': _p_cc(
                                                            $['specifiers'],
                                                            ($) => _p.list.map(
                                                                $,
                                                                ($) => ({
                                                                    'name': _p_cc(
                                                                        $['name'],
                                                                        ($) => Identifier(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'as': _p_cc(
                                                                        $['as'],
                                                                        ($) => _p.optional.map(
                                                                            $,
                                                                            ($) => Identifier(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            )
                                                        ),
                                                        'from': _p_cc(
                                                            $['from'],
                                                            ($) => _p.optional.map(
                                                                $,
                                                                ($) => $
                                                            )
                                                        ),
                                                    }]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            ),
                        }]
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
                        ($) => ['import', {
                            'type': _p_cc(
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
                                                    ($) => ['named', {
                                                        'specifiers': _p_cc(
                                                            $['specifiers'],
                                                            ($) => _p.list.map(
                                                                $,
                                                                ($) => ({
                                                                    'name': _p_cc(
                                                                        $['name'],
                                                                        ($) => Identifier(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'as': _p_cc(
                                                                        $['as'],
                                                                        ($) => _p.optional.map(
                                                                            $,
                                                                            ($) => Identifier(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            )
                                                        ),
                                                    }]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            ),
                            'from': _p_cc(
                                $['from'],
                                ($) => $
                            ),
                        }]
                    )
                case 'module declaration':
                    return _p.ss(
                        $,
                        ($) => ['module declaration', {
                            'export': _p_cc(
                                $['export'],
                                ($) => $
                            ),
                            'name': _p_cc(
                                $['name'],
                                ($) => Identifier(
                                    $
                                )
                            ),
                            'block': _p_cc(
                                $['block'],
                                ($) => Block(
                                    $
                                )
                            ),
                        }]
                    )
                case 'return':
                    return _p.ss(
                        $,
                        ($) => ['return', _p.optional.map(
                            $,
                            ($) => Expression(
                                $
                            )
                        )]
                    )
                case 'switch':
                    return _p.ss(
                        $,
                        ($) => ['switch', {
                            'expression': _p_cc(
                                $['expression'],
                                ($) => Expression(
                                    $
                                )
                            ),
                            'clauses': _p_cc(
                                $['clauses'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => ({
                                        'type': _p_cc(
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
                                        'statements': _p_cc(
                                            $['statements'],
                                            ($) => Statements(
                                                $
                                            )
                                        ),
                                    })
                                )
                            ),
                        }]
                    )
                case 'type alias declaration':
                    return _p.ss(
                        $,
                        ($) => ['type alias declaration', {
                            'export': _p_cc(
                                $['export'],
                                ($) => $
                            ),
                            'name': _p_cc(
                                $['name'],
                                ($) => Identifier(
                                    $
                                )
                            ),
                            'parameters': _p_cc(
                                $['parameters'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => Identifier(
                                        $
                                    )
                                )
                            ),
                            'type': _p_cc(
                                $['type'],
                                ($) => Type(
                                    $
                                )
                            ),
                        }]
                    )
                case 'variable':
                    return _p.ss(
                        $,
                        ($) => ['variable', {
                            'export': _p_cc(
                                $['export'],
                                ($) => $
                            ),
                            'const': _p_cc(
                                $['const'],
                                ($) => $
                            ),
                            'name': _p_cc(
                                $['name'],
                                ($) => Identifier(
                                    $
                                )
                            ),
                            'type': _p_cc(
                                $['type'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => Type(
                                        $
                                    )
                                )
                            ),
                            'expression': _p_cc(
                                $['expression'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => Expression(
                                        $
                                    )
                                )
                            ),
                        }]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )
)

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
                    ($) => ['function', {
                        'type parameters': _p_cc(
                            $['type parameters'],
                            ($) => _p.list.map(
                                $,
                                ($) => Type(
                                    $
                                )
                            )
                        ),
                        'parameters': _p_cc(
                            $['parameters'],
                            ($) => Function_Parameters(
                                $
                            )
                        ),
                        'return': _p_cc(
                            $['return'],
                            ($) => Type(
                                $
                            )
                        ),
                    }]
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
                    ($) => ['tuple', {
                        'readonly': _p_cc(
                            $['readonly'],
                            ($) => $
                        ),
                        'elements': _p_cc(
                            $['elements'],
                            ($) => _p.list.map(
                                $,
                                ($) => Type(
                                    $
                                )
                            )
                        ),
                    }]
                )
            case 'type literal':
                return _p.ss(
                    $,
                    ($) => ['type literal', {
                        'properties': _p_cc(
                            $['properties'],
                            ($) => _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'readonly': _p_cc(
                                        $['readonly'],
                                        ($) => $
                                    ),
                                    'type': _p_cc(
                                        $['type'],
                                        ($) => Type(
                                            $
                                        )
                                    ),
                                })
                            )
                        ),
                    }]
                )
            case 'type reference':
                return _p.ss(
                    $,
                    ($) => ['type reference', {
                        'start': _p_cc(
                            $['start'],
                            ($) => Identifier(
                                $
                            )
                        ),
                        'tail': _p_cc(
                            $['tail'],
                            ($) => _p.list.map(
                                $,
                                ($) => Identifier(
                                    $
                                )
                            )
                        ),
                        'type arguments': _p_cc(
                            $['type arguments'],
                            ($) => _p.list.map(
                                $,
                                ($) => Type(
                                    $
                                )
                            )
                        ),
                    }]
                )
            case 'union':
                return _p.ss(
                    $,
                    ($) => ['union', _p.list.map(
                        $,
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

export const Function_Parameters: t_signatures.Function_Parameters = ($) => _p.list.map(
    $,
    ($) => ({
        'name': _p_cc(
            $['name'],
            ($) => Identifier(
                $
            )
        ),
        'type': _p_cc(
            $['type'],
            ($) => _p.optional.map(
                $,
                ($) => Type(
                    $
                )
            )
        ),
    })
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
                            $
                        )
                    )]
                )
            case 'arrow function':
                return _p.ss(
                    $,
                    ($) => ['arrow function', {
                        'parameters': _p_cc(
                            $['parameters'],
                            ($) => Function_Parameters(
                                $
                            )
                        ),
                        'return type': _p_cc(
                            $['return type'],
                            ($) => _p.optional.map(
                                $,
                                ($) => Type(
                                    $
                                )
                            )
                        ),
                        'body': _p_cc(
                            $['body'],
                            ($) => _p.decide.state(
                                $,
                                ($): t_out.Expression.arrow_function.body => {
                                    switch ($[0]) {
                                        case 'block':
                                            return _p.ss(
                                                $,
                                                ($) => ['block', Block(
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
                    }]
                )
            case 'assignment':
                return _p.ss(
                    $,
                    ($) => ['assignment', {
                        'left': _p_cc(
                            $['left'],
                            ($) => Expression(
                                $
                            )
                        ),
                        'right': _p_cc(
                            $['right'],
                            ($) => Expression(
                                $
                            )
                        ),
                    }]
                )
            case 'call':
                return _p.ss(
                    $,
                    ($) => ['call', {
                        'function selection': _p_cc(
                            $['function selection'],
                            ($) => Expression(
                                $
                            )
                        ),
                        'arguments': _p_cc(
                            $['arguments'],
                            ($) => _p.list.map(
                                $,
                                ($) => Expression(
                                    $
                                )
                            )
                        ),
                    }]
                )
            case 'compare':
                return _p.ss(
                    $,
                    ($) => ['compare', {
                        'left': _p_cc(
                            $['left'],
                            ($) => Expression(
                                $
                            )
                        ),
                        'operator': _p_cc(
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
                        'right': _p_cc(
                            $['right'],
                            ($) => Expression(
                                $
                            )
                        ),
                    }]
                )
            case 'conditional':
                return _p.ss(
                    $,
                    ($) => ['conditional', {
                        'condition': _p_cc(
                            $['condition'],
                            ($) => Expression(
                                $
                            )
                        ),
                        'if true': _p_cc(
                            $['if true'],
                            ($) => Expression(
                                $
                            )
                        ),
                        'if false': _p_cc(
                            $['if false'],
                            ($) => Expression(
                                $
                            )
                        ),
                    }]
                )
            case 'element access':
                return _p.ss(
                    $,
                    ($) => ['element access', {
                        'collection': _p_cc(
                            $['collection'],
                            ($) => Expression(
                                $
                            )
                        ),
                        'index': _p_cc(
                            $['index'],
                            ($) => Expression(
                                $
                            )
                        ),
                    }]
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
                    ($) => ['object literal', {
                        'properties': _p_cc(
                            $['properties'],
                            ($) => _p.dictionary.map(
                                $,
                                ($, id) => Expression(
                                    $
                                )
                            )
                        ),
                    }]
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
                    ($) => ['property access', {
                        'object': _p_cc(
                            $['object'],
                            ($) => Expression(
                                $
                            )
                        ),
                        'property': _p_cc(
                            $['property'],
                            ($) => Identifier(
                                $
                            )
                        ),
                    }]
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
                    ($) => ['unary operation', {
                        'operator': _p_cc(
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
                        'operand': _p_cc(
                            $['operand'],
                            ($) => Expression(
                                $
                            )
                        ),
                    }]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const String_Literal: t_signatures.String_Literal = ($) => ({
    'delimiter': _p_cc(
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
    'value': _p_cc(
        $['value'],
        ($) => $
    ),
})

export const Identifier: t_signatures.Identifier = ($) => ({
    'value': _p_cc(
        $['value'],
        ($) => $
    ),
})
