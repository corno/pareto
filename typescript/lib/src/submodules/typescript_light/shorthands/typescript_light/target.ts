import * as p_ from 'pareto-core-shorthands/unconstrained_target'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

//schemas
import type * as s_target from "../../interface/schemas/typescript_light.js"

//dependencies
import * as t_text_to_identifier from "../../implementation/transformers/text/identifier.js"

export const identifier_raw = (
    name: string,
): s_target.Identifier => ({
    'value': name
})

export const identifier_escaped = (
    name: string,
): s_target.Identifier => ({
    'value': p_text_from_list(
        t_text_to_identifier.Identifier(name),
        ($) => $
    )
})



export const string_literal = (
    value: string,
    delimiter: 'quote' | 'apostrophe'
): s_target.String_Literal => ({
    'value': value,
    'delimiter': delimiter === 'quote' ? ['quote', null] : ['apostrophe', null],
})


export namespace n {

    export const directory = (
        children: p_.Normal_Dictionary<s_target.Directory.D>,
    ): s_target.Directory.D => ['directory', p_.dictionary(children)]

    export const file = (
        statements: p_.Normal_List<s_target.Statements.L>
    ): s_target.Directory.D => {
        return ['file', {
            'statements': p_.list(statements),
        }]
    }

}

export const specifier = (
    name: s_target.Identifier,
    as: null | s_target.Identifier,
): s_target.Statements.L.export_.type_.named_exports.specifiers.L => {
    return {
        'name': name,
        'as': as === null ? p_.optional.not_set() : p_.optional.set(as),
    }
}


export namespace sw {

    export const case_ = (
        expression: s_target.Expression,
        statements: p_.Normal_List<s_target.Statements.L>,
    ): s_target.Statements.L.switch_.clauses.L => ({
        'type': ['case', expression],
        'statements': p_.list(statements),
    })

    export const default_ = (
        statements: p_.Normal_List<s_target.Statements.L>,
    ): s_target.Statements.L.switch_.clauses.L => ({
        'type': ['default', null],
        'statements': p_.list(statements),
    })
}

export namespace s {

    export const block = (
        statements: p_.Normal_List<s_target.Statements.L>
    ): s_target.Statements.L => ['block', p_.list(statements)]

    export const export_ = (
        specifiers: p_.Normal_List<s_target.Statements.L.export_.type_.named_exports.specifiers.L>,
        from: null | s_target.String_Literal,
    ): s_target.Statements.L => ['export', {
        'type': ['named exports', {
            'specifiers': p_.list(specifiers),
            'from': from === null ? p_.optional.not_set() : p_.optional.set(from),
        }],
    }]

    export const expression = (
        expression: s_target.Expression
    ): s_target.Statements.L => ['expression', expression]

    export const import_named = (
        specifiers: p_.Normal_List<s_target.Statements.L.import_.type_.named.specifiers.L>,
        from: s_target.String_Literal
    ): s_target.Statements.L => ['import', {
        'type': ['named', {
            'specifiers': p_.list(specifiers),
        }],
        'from': from,

    }]

    export const import_namespace = (
        name: s_target.Identifier,
        from: s_target.String_Literal
    ): s_target.Statements.L => ['import', {
        'type': ['namespace', name],
        'from': from,

    }]

    export const import_default = (
        name: s_target.Identifier,
        from: s_target.String_Literal
    ): s_target.Statements.L => ['import', {
        'type': ['default', name],
        'from': from,

    }]

    export const namespace = (
        export_: boolean,
        name: s_target.Identifier,
        block: p_.Normal_List<s_target.Statements.L>,
    ): s_target.Statements.L => ['module declaration', {
        'export': export_,
        'name': name,
        'block': p_.list(block),
    }]

    export const return_ = (
        expression: null | s_target.Expression
    ): s_target.Statements.L => ['return', expression === null ? p_.optional.not_set() : p_.optional.set(expression)]

    export const switch_ = (
        expression: s_target.Expression,
        clauses: p_.Normal_List<s_target.Statements.L.switch_.clauses.L>,
    ): s_target.Statements.L => ['switch', {
        'expression': expression,
        'clauses': p_.list(clauses),
    }]

    export const type_alias = (
        export_: boolean,
        name: s_target.Identifier,
        parameters: p_.Normal_List<s_target.Identifier>,
        type: s_target.Type,
    ): s_target.Statements.L => ['type alias declaration', {
        'export': export_,
        'name': name,
        'parameters': p_.list(parameters),
        'type': type,
    }]

    export const variable = (
        export_: boolean,
        const_: boolean,
        name: s_target.Identifier,
        type: null | s_target.Type,
        expression: null | s_target.Expression,
    ): s_target.Statements.L => ['variable', {
        'export': export_,
        'const': const_,
        'name': name,
        'type': type === null ? p_.optional.not_set() : p_.optional.set(type),
        'expression': expression === null ? p_.optional.not_set() : p_.optional.set(expression),
    }]

}

export const parameter = (
    name: s_target.Identifier,
    type: s_target.Type | null,
): s_target.Function_Parameters.L => {
    return {
        'name': name,
        'type': type === null
            ? p_.optional.not_set()
            : p_.optional.set(type),
    }
}

export const tl_propery = (
    key: string,
    key_type: 'identifier' | 'quoted string literal' | 'apostrophized string literal',
    readonly: boolean,
    type: s_target.Type,
): s_target.Type.type_literal.properties.L => {
    return {
        'key': key_type === 'identifier'
            ? ['identifier', {
                'value': key,
            }]
            : ['string literal', {
                'value': key,
                'delimiter': key_type === 'quoted string literal' ? ['quote', null] : ['apostrophe', null],
            }],
        'readonly': readonly,
        'type': type,
    }
}

export namespace t {

    export const boolean = (
    ): s_target.Type => {
        return ['boolean', null]
    }

    export const function_ = (
        type_parameters: p_.Normal_List<s_target.Type>,
        parameters: p_.Normal_List<s_target.Function_Parameters.L>,
        return_: s_target.Type,
    ): s_target.Type => {
        return ['function', {
            'type parameters': p_.list(type_parameters),
            'parameters': p_.list(parameters),
            'return': return_,
        }]
    }

    export const literal_type = (
        string_literal: s_target.String_Literal,
    ): s_target.Type => {
        return ['literal type', string_literal]
    }

    export const never = (
    ): s_target.Type => {
        return ['never', null]
    }

    export const null_ = (
    ): s_target.Type => {
        return ['null', null]
    }

    export const number = (
    ): s_target.Type => {
        return ['number', null]
    }

    export const string = (
    ): s_target.Type => {
        return ['string', null]
    }

    export const tuple = (
        read_only: 'readonly' | '',
        elements: p_.Normal_List<s_target.Type>): s_target.Type => {
        return ['tuple', {
            'readonly': read_only === 'readonly',
            'elements': p_.list(elements)
        }]
    }

    export const type_literal = (
        properties: p_.Normal_List<s_target.Type.type_literal.properties.L>
    ): s_target.Type => {
        return ['type literal', {
            'properties': p_.list(properties),
        }]
    }

    export const type_reference = (
        start: s_target.Identifier,
        tail: p_.Normal_List<s_target.Identifier>,
        type_arguments: p_.Normal_List<s_target.Type>,
    ): s_target.Type => {
        return ['type reference', {
            'start': start,
            'tail': p_.list(tail),
            'type arguments': p_.list(type_arguments),
        }]
    }

    export const union = (
        cases: p_.Normal_List<s_target.Type>
    ): s_target.Type => {
        return ['union', p_.list(cases)]
    }

    export const void_ = (
    ): s_target.Type => {
        return ['void', null]
    }

}


export namespace e {

    export const array_literal = (
        elements: p_.Normal_List<s_target.Expression>
    ): s_target.Expression => ['array literal', p_.list(elements)]

    export const arrow_function_with_expression = (
        parameters: p_.Normal_List<s_target.Function_Parameters.L>,
        return_type: null | s_target.Type,
        expression: s_target.Expression,
    ): s_target.Expression => ['arrow function', {
        'parameters': p_.list(parameters),
        'return type': return_type === null ? p_.optional.not_set() : p_.optional.set(return_type),
        'body': ['expression', expression],
    }]

    export const arrow_function_with_block = (
        parameters: p_.Normal_List<s_target.Function_Parameters.L>,
        return_type: null | s_target.Type,
        block: p_.Normal_List<s_target.Statements.L>,
    ): s_target.Expression => ['arrow function', {
        'parameters': p_.list(parameters),
        'return type': return_type === null ? p_.optional.not_set() : p_.optional.set(return_type),
        'body': ['block', p_.list(block)],
    }]

    export const assignment = (
        left: s_target.Expression,
        right: s_target.Expression,
    ): s_target.Expression => ['assignment', {
        'left': left,
        'right': right,
    }]

    export const call = (
        function_selection: s_target.Expression,
        // type_arguments: p_.Normal_List<s_target.Type>,
        arguments_: p_.Normal_List<s_target.Expression>,
    ): s_target.Expression => ['call', {
        'function selection': function_selection,
        'arguments': p_.list(arguments_),
    }]

    export const compare = (
        left: s_target.Expression,
        operator: 'loosely equal' | 'strictly equal' | 'loosely not equal' | 'strictly not equal' | 'smaller than' | 'smaller than or equal' | 'greater than' | 'greater than or equal',
        right: s_target.Expression,
    ): s_target.Expression => ['compare', {
        'left': left,
        'operator': ((): s_target.Expression.compare.operator => {
            switch (operator) {
                case 'loosely equal': return ['loosely equal', null]
                case 'strictly equal': return ['strictly equal', null]
                case 'loosely not equal': return ['loosely not equal', null]
                case 'strictly not equal': return ['strictly not equal', null]
                case 'smaller than': return ['smaller than', null]
                case 'smaller than or equal': return ['smaller than or equal', null]
                case 'greater than': return ['greater than', null]
                case 'greater than or equal': return ['greater than or equal', null]
                default: return p_.au(operator)
            }
        })(),
        'right': right,
    }]

    export const conditional = (
        condition: s_target.Expression,
        if_true: s_target.Expression,
        if_false: s_target.Expression,
    ): s_target.Expression => ['conditional', {
        'condition': condition,
        'if true': if_true,
        'if false': if_false,
    }]

    export const element_access = (
        collection: s_target.Expression,
        index: s_target.Expression,
    ): s_target.Expression => ['element access', {
        'collection': collection,
        'index': index,
    }]

    export const false_ = (

    ): s_target.Expression => ['false', null]

    export const identifier_raw = (
        name: string,
    ): s_target.Expression => ['identifier', {
        'value': name,
    }]
    export const identifier_escaped = (
        name: string,
    ): s_target.Expression => ['identifier', {
        'value': p_text_from_list(
            t_text_to_identifier.Identifier(name),
            ($) => $
        ),
    }]

    export const not = (
        operand: s_target.Expression,
    ): s_target.Expression => ['unary operation', {
        'operator': ['logical not', null],
        'operand': operand,
    }]
    export const negate = (
        operand: s_target.Expression,
    ): s_target.Expression => ['unary operation', {
        'operator': ['negation', null],
        'operand': operand,
    }]

    export const null_ = (

    ): s_target.Expression => ['null', null]

    export const number_literal = (
        value: number
    ): s_target.Expression => ['number literal', value]

    export const object_literal = (
        properties: p_.Normal_List<s_target.Expression.object_literal.properties.L>
    ): s_target.Expression => ['object literal', {
        'properties': p_.list(properties),
    }]

    export const parenthesized = (
        expression: s_target.Expression
    ): s_target.Expression => ['parenthesized', expression]

    export const property_access = (
        object: s_target.Expression,
        property: s_target.Identifier,
    ): s_target.Expression => ['property access', {
        'object': object,
        'property': property,
    }]

    export const string_literal = (
        string_literal: s_target.String_Literal,
    ): s_target.Expression => ['string literal', string_literal]

    export const true_ = (): s_target.Expression => ['true', null]

}

export const object_property = (
    key: string,
    key_type: 'identifier' | 'quoted string literal' | 'apostrophized string literal',
    value: s_target.Expression,
): s_target.Expression.object_literal.properties.L => {
    return {
        'key': key_type === 'identifier'
            ? ['identifier', {
                'value': key,
            }]
            : ['string literal', {
                'value': key,
                'delimiter': key_type === 'quoted string literal' ? ['quote', null] : ['apostrophe', null],
            }],
        'value': value,
    }
}