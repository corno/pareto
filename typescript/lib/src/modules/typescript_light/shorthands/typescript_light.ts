import * as p_ from 'pareto-core-shorthands/dist/unconstrained'
import p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

//data types
import * as d_target from "../../../interface/generated/liana/schemas/typescript_light/data"

//dependencies
import * as t_text_to_identifier from "../implementation/manual/transformers/text/identifier"

export const identifier_raw = (
    name: string,
): d_target.Identifier => ({
    'value': name
})

export const identifier_escaped = (
    name: string,
): d_target.Identifier => ({
    'value': p_text_from_list(t_text_to_identifier.Identifier(name), ($) => $)
})



export const string_literal = (
    value: string,
    delimiter: 'quote' | 'apostrophe'
): d_target.String_Literal => ({
    'value': value,
    'delimiter': delimiter === 'quote' ? ['quote', null] : ['apostrophe', null],
})


export namespace n {

    export const directory = (
        children: p_.Raw_Or_Normal_Dictionary<d_target.Directory.D>,
    ): d_target.Directory.D => ['directory', p_.dictionary(children)]

    export const file = (
        statements: p_.Raw_Or_Normal_List<d_target.Statements.L>
    ): d_target.Directory.D => {
        return ['file', {
            'statements': p_.list(statements),
        }]
    }

}

export const specifier = (
    name: d_target.Identifier,
    as: null | d_target.Identifier,
): d_target.Statements.L.export_.type_.named_exports.specifiers.L => {
    return {
        'name': name,
        'as': as === null ? p_.optional.not_set() : p_.optional.set(as),
    }
}


export namespace sw {

    export const case_ = (
        expression: d_target.Expression,
        statements: p_.Raw_Or_Normal_List<d_target.Statements.L>,
    ): d_target.Statements.L.switch_.clauses.L => ({
        'type': ['case', expression],
        'statements': p_.list(statements),
    })

    export const default_ = (
        statements: p_.Raw_Or_Normal_List<d_target.Statements.L>,
    ): d_target.Statements.L.switch_.clauses.L => ({
        'type': ['default', null],
        'statements': p_.list(statements),
    })
}

export namespace s {

    export const block = (
        statements: p_.Raw_Or_Normal_List<d_target.Statements.L>
    ): d_target.Statements.L => ['block', p_.list(statements)]

    export const export_ = (
        specifiers: p_.Raw_Or_Normal_List<d_target.Statements.L.export_.type_.named_exports.specifiers.L>,
        from: null | d_target.String_Literal,
    ): d_target.Statements.L => ['export', {
        'type': ['named exports', {
            'specifiers': p_.list(specifiers),
            'from': from === null ? p_.optional.not_set() : p_.optional.set(from),
        }],
    }]

    export const expression = (
        expression: d_target.Expression
    ): d_target.Statements.L => ['expression', expression]

    export const import_named = (
        specifiers: p_.Raw_Or_Normal_List<d_target.Statements.L.import_.type_.named.specifiers.L>,
        from: d_target.String_Literal
    ): d_target.Statements.L => ['import', {
        'type': ['named', {
            'specifiers': p_.list(specifiers),
        }],
        'from': from,

    }]

    export const import_namespace = (
        name: d_target.Identifier,
        from: d_target.String_Literal
    ): d_target.Statements.L => ['import', {
        'type': ['namespace', name],
        'from': from,

    }]

    export const import_default = (
        name: d_target.Identifier,
        from: d_target.String_Literal
    ): d_target.Statements.L => ['import', {
        'type': ['default', name],
        'from': from,

    }]

    export const namespace = (
        export_: boolean,
        name: d_target.Identifier,
        block: p_.Raw_Or_Normal_List<d_target.Statements.L>,
    ): d_target.Statements.L => ['module declaration', {
        'export': export_,
        'name': name,
        'block': p_.list(block),
    }]

    export const return_ = (
        expression: null | d_target.Expression
    ): d_target.Statements.L => ['return', expression === null ? p_.optional.not_set() : p_.optional.set(expression)]

    export const switch_ = (
        expression: d_target.Expression,
        clauses: p_.Raw_Or_Normal_List<d_target.Statements.L.switch_.clauses.L>,
    ): d_target.Statements.L => ['switch', {
        'expression': expression,
        'clauses': p_.list(clauses),
    }]

    export const type_alias = (
        export_: boolean,
        name: d_target.Identifier,
        parameters: p_.Raw_Or_Normal_List<d_target.Identifier>,
        type: d_target.Type,
    ): d_target.Statements.L => ['type alias declaration', {
        'export': export_,
        'name': name,
        'parameters': p_.list(parameters),
        'type': type,
    }]

    export const variable = (
        export_: boolean,
        const_: boolean,
        name: d_target.Identifier,
        type: null | d_target.Type,
        expression: null | d_target.Expression,
    ): d_target.Statements.L => ['variable', {
        'export': export_,
        'const': const_,
        'name': name,
        'type': type === null ? p_.optional.not_set() : p_.optional.set(type),
        'expression': expression === null ? p_.optional.not_set() : p_.optional.set(expression),
    }]

}

export const parameter = (
    name: d_target.Identifier,
    type: d_target.Type | null,
): d_target.Function_Parameters.L => {
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
    type: d_target.Type,
): d_target.Type.type_literal.properties.L => {
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
    ): d_target.Type => {
        return ['boolean', null]
    }

    export const function_ = (
        type_parameters: p_.Raw_Or_Normal_List<d_target.Type>,
        parameters: p_.Raw_Or_Normal_List<d_target.Function_Parameters.L>,
        return_: d_target.Type,
    ): d_target.Type => {
        return ['function', {
            'type parameters': p_.list(type_parameters),
            'parameters': p_.list(parameters),
            'return': return_,
        }]
    }

    export const literal_type = (
        string_literal: d_target.String_Literal,
    ): d_target.Type => {
        return ['literal type', string_literal]
    }

    export const never = (
    ): d_target.Type => {
        return ['never', null]
    }

    export const null_ = (
    ): d_target.Type => {
        return ['null', null]
    }

    export const number = (
    ): d_target.Type => {
        return ['number', null]
    }

    export const string = (
    ): d_target.Type => {
        return ['string', null]
    }
    
    export const tuple = (
        read_only: 'readonly' | '',
        elements: p_.Raw_Or_Normal_List<d_target.Type>): d_target.Type => {
        return ['tuple', {
            'readonly': read_only === 'readonly',
            'elements': p_.list(elements)
        }]
    }

    export const type_literal = (
        properties: p_.Raw_Or_Normal_List<d_target.Type.type_literal.properties.L>
    ): d_target.Type => {
        return ['type literal', {
            'properties': p_.list(properties),
        }]
    }

    export const type_reference = (
        start: d_target.Identifier,
        tail: p_.Raw_Or_Normal_List<d_target.Identifier>,
        type_arguments: p_.Raw_Or_Normal_List<d_target.Type>,
    ): d_target.Type => {
        return ['type reference', {
            'start': start,
            'tail': p_.list(tail),
            'type arguments': p_.list(type_arguments),
        }]
    }

    export const union = (
        cases: p_.Raw_Or_Normal_List<d_target.Type>
    ): d_target.Type => {
        return ['union', p_.list(cases)]
    }

    export const void_ = (
    ): d_target.Type => {
        return ['void', null]
    }

}


export namespace e {

    export const array_literal = (
        elements: p_.Raw_Or_Normal_List<d_target.Expression>
    ): d_target.Expression => ['array literal', p_.list(elements)]

    export const arrow_function_with_expression = (
        parameters: p_.Raw_Or_Normal_List<d_target.Function_Parameters.L>,
        return_type: null | d_target.Type,
        expression: d_target.Expression,
    ): d_target.Expression => ['arrow function', {
        'parameters': p_.list(parameters),
        'return type': return_type === null ? p_.optional.not_set() : p_.optional.set(return_type),
        'body': ['expression', expression],
    }]

    export const arrow_function_with_block = (
        parameters: p_.Raw_Or_Normal_List<d_target.Function_Parameters.L>,
        return_type: null | d_target.Type,
        block: p_.Raw_Or_Normal_List<d_target.Statements.L>,
    ): d_target.Expression => ['arrow function', {
        'parameters': p_.list(parameters),
        'return type': return_type === null ? p_.optional.not_set() : p_.optional.set(return_type),
        'body': ['block', p_.list(block)],
    }]

    export const assignment = (
        left: d_target.Expression,
        right: d_target.Expression,
    ): d_target.Expression => ['assignment', {
        'left': left,
        'right': right,
    }]

    export const call = (
        function_selection: d_target.Expression,
        // type_arguments: p_.Raw_Or_Normal_List<d_target.Type>,
        arguments_: p_.Raw_Or_Normal_List<d_target.Expression>,
    ): d_target.Expression => ['call', {
        'function selection': function_selection,
        'arguments': p_.list(arguments_),
    }]

    export const compare = (
        left: d_target.Expression,
        operator: 'loosely equal' | 'strictly equal' | 'loosely not equal' | 'strictly not equal' | 'smaller than' | 'smaller than or equal' | 'greater than' | 'greater than or equal',
        right: d_target.Expression,
    ): d_target.Expression => ['compare', {
        'left': left,
        'operator': ((): d_target.Expression.compare.operator => {
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
        condition: d_target.Expression,
        if_true: d_target.Expression,
        if_false: d_target.Expression,
    ): d_target.Expression => ['conditional', {
        'condition': condition,
        'if true': if_true,
        'if false': if_false,
    }]

    export const element_access = (
        collection: d_target.Expression,
        index: d_target.Expression,
    ): d_target.Expression => ['element access', {
        'collection': collection,
        'index': index,
    }]

    export const false_ = (

    ): d_target.Expression => ['false', null]

    export const identifier_raw = (
        name: string,
    ): d_target.Expression => ['identifier', {
        'value': name,
    }]
    export const identifier_escaped = (
        name: string,
    ): d_target.Expression => ['identifier', {
        'value': p_text_from_list(t_text_to_identifier.Identifier(name), ($) => $),
    }]

    export const not = (
        operand: d_target.Expression,
    ): d_target.Expression => ['unary operation', {
        'operator': ['logical not', null],
        'operand': operand,
    }]
    export const negate = (
        operand: d_target.Expression,
    ): d_target.Expression => ['unary operation', {
        'operator': ['negation', null],
        'operand': operand,
    }]

    export const null_ = (

    ): d_target.Expression => ['null', null]

    export const number_literal = (
        value: number
    ): d_target.Expression => ['number literal', value]

    export const object_literal = (
        properties: p_.Raw_Or_Normal_List<d_target.Expression.object_literal.properties.L>
    ): d_target.Expression => ['object literal', {
        'properties': p_.list(properties),
    }]

    export const parenthesized = (
        expression: d_target.Expression
    ): d_target.Expression => ['parenthesized', expression]

    export const property_access = (
        object: d_target.Expression,
        property: d_target.Identifier,
    ): d_target.Expression => ['property access', {
        'object': object,
        'property': property,
    }]

    export const string_literal = (
        string_literal: d_target.String_Literal,
    ): d_target.Expression => ['string literal', string_literal]

    export const true_ = (): d_target.Expression => ['true', null]

}

export const object_property = (
    key: string,
    key_type: 'identifier' | 'quoted string literal' | 'apostrophized string literal',
    value: d_target.Expression,
): d_target.Expression.object_literal.properties.L => {
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