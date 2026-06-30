
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/typescript_light/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/typescript_light/data"

export const Directory: t_signatures.Directory = ($) => p_.from.dictionary($,
).map(
    ($, id) => p_decide_state(
        $,
        ($): t_out.Directory.D => {
            switch ($[0]) {
                case 'file':
                    return p_.option(
                        $,
                        ($) => ['file', {
                            'statements': p_change_context(
                                $['statements'],
                                ($) => Statements(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'directory':
                    return p_.option(
                        $,
                        ($) => ['directory', Directory(
                            $,
                        )],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
)

export const Block: t_signatures.Block = ($) => Statements(
    $,
)

export const Statements: t_signatures.Statements = ($) => p_.from.list($,
).map(
    ($) => p_decide_state(
        $,
        ($): t_out.Statements.L => {
            switch ($[0]) {
                case 'block':
                    return p_.option(
                        $,
                        ($) => ['block', Block(
                            $,
                        )],
                    )
                case 'export':
                    return p_.option(
                        $,
                        ($) => ['export', {
                            'type': p_change_context(
                                $['type'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Statements.L.export_.type_ => {
                                        switch ($[0]) {
                                            case 'named exports':
                                                return p_.option(
                                                    $,
                                                    ($) => ['named exports', {
                                                        'specifiers': p_change_context(
                                                            $['specifiers'],
                                                            ($) => p_.from.list($,
                                                            ).map(
                                                                ($) => ({
                                                                    'name': p_change_context(
                                                                        $['name'],
                                                                        ($) => Identifier(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    'as': p_change_context(
                                                                        $['as'],
                                                                        ($) => p_.from.optional($,
                                                                        ).map(
                                                                            ($) => Identifier(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            ),
                                                        ),
                                                        'from': p_change_context(
                                                            $['from'],
                                                            ($) => p_.from.optional($,
                                                            ).map(
                                                                ($) => String_Literal(
                                                                    $,
                                                                ),
                                                            ),
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }],
                    )
                case 'expression':
                    return p_.option(
                        $,
                        ($) => ['expression', Expression(
                            $,
                        )],
                    )
                case 'import':
                    return p_.option(
                        $,
                        ($) => ['import', {
                            'type': p_change_context(
                                $['type'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Statements.L.import_.type_ => {
                                        switch ($[0]) {
                                            case 'default':
                                                return p_.option(
                                                    $,
                                                    ($) => ['default', Identifier(
                                                        $,
                                                    )],
                                                )
                                            case 'namespace':
                                                return p_.option(
                                                    $,
                                                    ($) => ['namespace', Identifier(
                                                        $,
                                                    )],
                                                )
                                            case 'named':
                                                return p_.option(
                                                    $,
                                                    ($) => ['named', {
                                                        'specifiers': p_change_context(
                                                            $['specifiers'],
                                                            ($) => p_.from.list($,
                                                            ).map(
                                                                ($) => ({
                                                                    'name': p_change_context(
                                                                        $['name'],
                                                                        ($) => Identifier(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    'as': p_change_context(
                                                                        $['as'],
                                                                        ($) => p_.from.optional($,
                                                                        ).map(
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
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'from': p_change_context(
                                $['from'],
                                ($) => String_Literal(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'module declaration':
                    return p_.option(
                        $,
                        ($) => ['module declaration', {
                            'export': p_change_context(
                                $['export'],
                                ($) => $,
                            ),
                            'name': p_change_context(
                                $['name'],
                                ($) => Identifier(
                                    $,
                                ),
                            ),
                            'block': p_change_context(
                                $['block'],
                                ($) => Block(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'return':
                    return p_.option(
                        $,
                        ($) => ['return', p_.from.optional($,
                        ).map(
                            ($) => Expression(
                                $,
                            ),
                        )],
                    )
                case 'switch':
                    return p_.option(
                        $,
                        ($) => ['switch', {
                            'expression': p_change_context(
                                $['expression'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                            'clauses': p_change_context(
                                $['clauses'],
                                ($) => p_.from.list($,
                                ).map(
                                    ($) => ({
                                        'type': p_change_context(
                                            $['type'],
                                            ($) => p_decide_state(
                                                $,
                                                ($): t_out.Statements.L.switch_.clauses.L.type_ => {
                                                    switch ($[0]) {
                                                        case 'case':
                                                            return p_.option(
                                                                $,
                                                                ($) => ['case', Expression(
                                                                    $,
                                                                )],
                                                            )
                                                        case 'default':
                                                            return p_.option(
                                                                $,
                                                                ($) => ['default', null],
                                                            )
                                                        default:
                                                            return p_.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                        'statements': p_change_context(
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
                    return p_.option(
                        $,
                        ($) => ['type alias declaration', {
                            'export': p_change_context(
                                $['export'],
                                ($) => $,
                            ),
                            'name': p_change_context(
                                $['name'],
                                ($) => Identifier(
                                    $,
                                ),
                            ),
                            'parameters': p_change_context(
                                $['parameters'],
                                ($) => p_.from.list($,
                                ).map(
                                    ($) => Identifier(
                                        $,
                                    ),
                                ),
                            ),
                            'type': p_change_context(
                                $['type'],
                                ($) => Type(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'variable':
                    return p_.option(
                        $,
                        ($) => ['variable', {
                            'export': p_change_context(
                                $['export'],
                                ($) => $,
                            ),
                            'const': p_change_context(
                                $['const'],
                                ($) => $,
                            ),
                            'name': p_change_context(
                                $['name'],
                                ($) => Identifier(
                                    $,
                                ),
                            ),
                            'type': p_change_context(
                                $['type'],
                                ($) => p_.from.optional($,
                                ).map(
                                    ($) => Type(
                                        $,
                                    ),
                                ),
                            ),
                            'expression': p_change_context(
                                $['expression'],
                                ($) => p_.from.optional($,
                                ).map(
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                            ),
                        }],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
)

export const Type: t_signatures.Type = ($) => p_decide_state(
    $,
    ($): t_out.Type => {
        switch ($[0]) {
            case 'boolean':
                return p_.option(
                    $,
                    ($) => ['boolean', null],
                )
            case 'function':
                return p_.option(
                    $,
                    ($) => ['function', {
                        'type parameters': p_change_context(
                            $['type parameters'],
                            ($) => p_.from.list($,
                            ).map(
                                ($) => Type(
                                    $,
                                ),
                            ),
                        ),
                        'parameters': p_change_context(
                            $['parameters'],
                            ($) => Function_Parameters(
                                $,
                            ),
                        ),
                        'return': p_change_context(
                            $['return'],
                            ($) => Type(
                                $,
                            ),
                        ),
                    }],
                )
            case 'literal type':
                return p_.option(
                    $,
                    ($) => ['literal type', String_Literal(
                        $,
                    )],
                )
            case 'never':
                return p_.option(
                    $,
                    ($) => ['never', null],
                )
            case 'null':
                return p_.option(
                    $,
                    ($) => ['null', null],
                )
            case 'number':
                return p_.option(
                    $,
                    ($) => ['number', null],
                )
            case 'string':
                return p_.option(
                    $,
                    ($) => ['string', null],
                )
            case 'tuple':
                return p_.option(
                    $,
                    ($) => ['tuple', {
                        'readonly': p_change_context(
                            $['readonly'],
                            ($) => $,
                        ),
                        'elements': p_change_context(
                            $['elements'],
                            ($) => p_.from.list($,
                            ).map(
                                ($) => Type(
                                    $,
                                ),
                            ),
                        ),
                    }],
                )
            case 'type literal':
                return p_.option(
                    $,
                    ($) => ['type literal', {
                        'properties': p_change_context(
                            $['properties'],
                            ($) => p_.from.list($,
                            ).map(
                                ($) => ({
                                    'key': p_change_context(
                                        $['key'],
                                        ($) => p_decide_state(
                                            $,
                                            ($): t_out.Type.type_literal.properties.L.key => {
                                                switch ($[0]) {
                                                    case 'identifier':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['identifier', Identifier(
                                                                $,
                                                            )],
                                                        )
                                                    case 'string literal':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['string literal', String_Literal(
                                                                $,
                                                            )],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                    'readonly': p_change_context(
                                        $['readonly'],
                                        ($) => $,
                                    ),
                                    'type': p_change_context(
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
                return p_.option(
                    $,
                    ($) => ['type reference', {
                        'start': p_change_context(
                            $['start'],
                            ($) => Identifier(
                                $,
                            ),
                        ),
                        'tail': p_change_context(
                            $['tail'],
                            ($) => p_.from.list($,
                            ).map(
                                ($) => Identifier(
                                    $,
                                ),
                            ),
                        ),
                        'type arguments': p_change_context(
                            $['type arguments'],
                            ($) => p_.from.list($,
                            ).map(
                                ($) => Type(
                                    $,
                                ),
                            ),
                        ),
                    }],
                )
            case 'union':
                return p_.option(
                    $,
                    ($) => ['union', p_.from.list($,
                    ).map(
                        ($) => Type(
                            $,
                        ),
                    )],
                )
            case 'void':
                return p_.option(
                    $,
                    ($) => ['void', null],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)

export const Function_Parameters: t_signatures.Function_Parameters = ($) => p_.from.list($,
).map(
    ($) => ({
        'name': p_change_context(
            $['name'],
            ($) => Identifier(
                $,
            ),
        ),
        'type': p_change_context(
            $['type'],
            ($) => p_.from.optional($,
            ).map(
                ($) => Type(
                    $,
                ),
            ),
        ),
    }),
)

export const Expression: t_signatures.Expression = ($) => p_decide_state(
    $,
    ($): t_out.Expression => {
        switch ($[0]) {
            case 'array literal':
                return p_.option(
                    $,
                    ($) => ['array literal', p_.from.list($,
                    ).map(
                        ($) => Expression(
                            $,
                        ),
                    )],
                )
            case 'arrow function':
                return p_.option(
                    $,
                    ($) => ['arrow function', {
                        'parameters': p_change_context(
                            $['parameters'],
                            ($) => Function_Parameters(
                                $,
                            ),
                        ),
                        'return type': p_change_context(
                            $['return type'],
                            ($) => p_.from.optional($,
                            ).map(
                                ($) => Type(
                                    $,
                                ),
                            ),
                        ),
                        'body': p_change_context(
                            $['body'],
                            ($) => p_decide_state(
                                $,
                                ($): t_out.Expression.arrow_function.body => {
                                    switch ($[0]) {
                                        case 'block':
                                            return p_.option(
                                                $,
                                                ($) => ['block', Block(
                                                    $,
                                                )],
                                            )
                                        case 'expression':
                                            return p_.option(
                                                $,
                                                ($) => ['expression', Expression(
                                                    $,
                                                )],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        ),
                    }],
                )
            case 'assignment':
                return p_.option(
                    $,
                    ($) => ['assignment', {
                        'left': p_change_context(
                            $['left'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                        'right': p_change_context(
                            $['right'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                    }],
                )
            case 'call':
                return p_.option(
                    $,
                    ($) => ['call', {
                        'function selection': p_change_context(
                            $['function selection'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                        'arguments': p_change_context(
                            $['arguments'],
                            ($) => p_.from.list($,
                            ).map(
                                ($) => Expression(
                                    $,
                                ),
                            ),
                        ),
                    }],
                )
            case 'compare':
                return p_.option(
                    $,
                    ($) => ['compare', {
                        'left': p_change_context(
                            $['left'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                        'operator': p_change_context(
                            $['operator'],
                            ($) => p_decide_state(
                                $,
                                ($): t_out.Expression.compare.operator => {
                                    switch ($[0]) {
                                        case 'loosely equal':
                                            return p_.option(
                                                $,
                                                ($) => ['loosely equal', null],
                                            )
                                        case 'strictly equal':
                                            return p_.option(
                                                $,
                                                ($) => ['strictly equal', null],
                                            )
                                        case 'loosely not equal':
                                            return p_.option(
                                                $,
                                                ($) => ['loosely not equal', null],
                                            )
                                        case 'strictly not equal':
                                            return p_.option(
                                                $,
                                                ($) => ['strictly not equal', null],
                                            )
                                        case 'smaller than':
                                            return p_.option(
                                                $,
                                                ($) => ['smaller than', null],
                                            )
                                        case 'smaller than or equal':
                                            return p_.option(
                                                $,
                                                ($) => ['smaller than or equal', null],
                                            )
                                        case 'greater than':
                                            return p_.option(
                                                $,
                                                ($) => ['greater than', null],
                                            )
                                        case 'greater than or equal':
                                            return p_.option(
                                                $,
                                                ($) => ['greater than or equal', null],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        ),
                        'right': p_change_context(
                            $['right'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                    }],
                )
            case 'conditional':
                return p_.option(
                    $,
                    ($) => ['conditional', {
                        'condition': p_change_context(
                            $['condition'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                        'if true': p_change_context(
                            $['if true'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                        'if false': p_change_context(
                            $['if false'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                    }],
                )
            case 'element access':
                return p_.option(
                    $,
                    ($) => ['element access', {
                        'collection': p_change_context(
                            $['collection'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                        'index': p_change_context(
                            $['index'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                    }],
                )
            case 'identifier':
                return p_.option(
                    $,
                    ($) => ['identifier', Identifier(
                        $,
                    )],
                )
            case 'false':
                return p_.option(
                    $,
                    ($) => ['false', null],
                )
            case 'null':
                return p_.option(
                    $,
                    ($) => ['null', null],
                )
            case 'number literal':
                return p_.option(
                    $,
                    ($) => ['number literal', $],
                )
            case 'object literal':
                return p_.option(
                    $,
                    ($) => ['object literal', {
                        'properties': p_change_context(
                            $['properties'],
                            ($) => p_.from.list($,
                            ).map(
                                ($) => ({
                                    'key': p_change_context(
                                        $['key'],
                                        ($) => p_decide_state(
                                            $,
                                            ($): t_out.Expression.object_literal.properties.L.key => {
                                                switch ($[0]) {
                                                    case 'identifier':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['identifier', Identifier(
                                                                $,
                                                            )],
                                                        )
                                                    case 'string literal':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['string literal', String_Literal(
                                                                $,
                                                            )],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                    'value': p_change_context(
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
                return p_.option(
                    $,
                    ($) => ['parenthesized', Expression(
                        $,
                    )],
                )
            case 'property access':
                return p_.option(
                    $,
                    ($) => ['property access', {
                        'object': p_change_context(
                            $['object'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                        'property': p_change_context(
                            $['property'],
                            ($) => Identifier(
                                $,
                            ),
                        ),
                    }],
                )
            case 'string literal':
                return p_.option(
                    $,
                    ($) => ['string literal', String_Literal(
                        $,
                    )],
                )
            case 'true':
                return p_.option(
                    $,
                    ($) => ['true', null],
                )
            case 'unary operation':
                return p_.option(
                    $,
                    ($) => ['unary operation', {
                        'operator': p_change_context(
                            $['operator'],
                            ($) => p_decide_state(
                                $,
                                ($): t_out.Expression.unary_operation.operator => {
                                    switch ($[0]) {
                                        case 'negation':
                                            return p_.option(
                                                $,
                                                ($) => ['negation', null],
                                            )
                                        case 'logical not':
                                            return p_.option(
                                                $,
                                                ($) => ['logical not', null],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        ),
                        'operand': p_change_context(
                            $['operand'],
                            ($) => Expression(
                                $,
                            ),
                        ),
                    }],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)

export const String_Literal: t_signatures.String_Literal = ($) => ({
    'delimiter': p_change_context(
        $['delimiter'],
        ($) => p_decide_state(
            $,
            ($): t_out.String_Literal.delimiter => {
                switch ($[0]) {
                    case 'quote':
                        return p_.option(
                            $,
                            ($) => ['quote', null],
                        )
                    case 'apostrophe':
                        return p_.option(
                            $,
                            ($) => ['apostrophe', null],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        ),
    ),
    'value': p_change_context(
        $['value'],
        ($) => $,
    ),
})

export const Identifier: t_signatures.Identifier = ($) => ({
    'value': p_change_context(
        $['value'],
        ($) => $,
    ),
})
