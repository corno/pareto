import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pr from 'pareto-core/dist/refiner'

import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../../../interface/generated/liana/schemas/typescript_light/data"

import { $$ as temp_s_identifier } from "../implementation/manual/primitives/text/serializers/identifier"


export namespace g {

    export const simple_line = (block: string): d_target.Group_Part_ => ['block', block]

    export const nested_block = (snippets: _p.Raw_Or_Normal_List<d_target.Block_.L>): d_target.Group_Part_ => ['nested block', _p.list.literal(snippets)]

    export const sub = (group_parts: _p.Raw_Or_Normal_List<d_target.Group_.L>): d_target.Group_Part_ => ['sub group', _p.list.literal(group_parts)]

    export const nothing = (): d_target.Group_Part_ => ['nothing', null]

    export const optional = (Group_Part_: _pi.Optional_Value<d_target.Group_.L>): d_target.Group_Part_ => ['optional', Group_Part_]

}

export namespace b {

    export const indent = (blocks: _p.Raw_Or_Normal_List<d_target.Group_.L>): d_target.Block_Part_ => ['indent', _p.list.literal(blocks)]

    export const snippet = (snippet: string): d_target.Block_Part_ => ['snippet', snippet]

    export const sub = (Block_Parts: _p.Raw_Or_Normal_List<d_target.Block_.L>): d_target.Block_Part_ => ['sub block', _p.list.literal(Block_Parts)]
    export const nothing = (): d_target.Block_Part_ => ['nothing', null]

    export const optional = (Block_Part_: _pi.Optional_Value<d_target.Block_.L>): d_target.Block_Part_ => ['optional', Block_Part_]

}

export namespace n {

    export const directory = (
        children: _p.Raw_Or_Normal_Dictionary<d_target.Directory.D>,
    ): d_target.Directory.D => ['directory', _p.dictionary.literal(children)]

    export const file = (statements: _p.Raw_Or_Normal_List<d_target.Statements_.L>): d_target.Directory.D => {
        return ['file', {
            'statements': _p.list.literal(statements),
        }]
    }

}

export const specifier = (
    name: string,
    as: null | string,
): d_target.Statements_.L.export_.type_.named_exports.specifiers.L => {
    return {
        'name': temp_s_identifier(name),
        'as': as === null ? _p.optional.not_set() : _p.optional.set(temp_s_identifier(as)),
    }
}

export namespace s {

    export const raw = ($: d_target.Group_): d_target.Statements_.L => ['raw', $]

    export const import_namespace = (name: string, from: string): d_target.Statements_.L => ['import', {
        'type': ['namespace', temp_s_identifier(name)],
        'from': from,

    }]

    export const export_ = (
        specifiers: _p.Raw_Or_Normal_List<d_target.Statements_.L.export_.type_.named_exports.specifiers.L>,
        from: null | string,
    ): d_target.Statements_.L => ['export', {
        'type': ['named exports', {
            'specifiers': _p.list.literal(specifiers),
            'from': from === null ? _p.optional.not_set() : _p.optional.set(from),
        }],
    }]

    export const namespace = (
        export_: boolean,
        name: string,
        block: _p.Raw_Or_Normal_List<d_target.Statements_.L>,
    ): d_target.Statements_.L => ['module declaration', {
        'export': export_,
        'name': temp_s_identifier(name),
        'block': _p.list.literal(block),
    }]

    export const type_alias = (
        export_: boolean,
        name: string,
        parameters: _p.Raw_Or_Normal_List<string>,
        type: d_target.Type,
    ): d_target.Statements_.L => ['type alias declaration', {
        'export': export_,
        'name': temp_s_identifier(name),
        'parameters': _p.list.literal(parameters).__l_map(($) => temp_s_identifier($)),
        'type': type,
    }]

    export const variable = (
        export_: boolean,
        const_: boolean,
        name: string,
        type: null | d_target.Type,
        expression: null | d_target.Expression,
    ): d_target.Statements_.L => ['variable', {
        'export': export_,
        'const': const_,
        'name': temp_s_identifier(name),
        'type': type === null ? _p.optional.not_set() : _p.optional.set(type),
        'expression': expression === null ? _p.optional.not_set() : _p.optional.set(expression),
    }]

}

// export namespace n {

//     export const file = (
//         block: _target.Group_
//     ): _target.Node => ['file', block]

//     export const directory = (
//         children: _psh.Raw_Or_Normal_Dictionary<_target.Node>,
//     ): _target.Node => ['directory', _psh.dictionary.literal(children)]
// }

// export const directory = (
//     children: _psh.Raw_Or_Normal_Dictionary<_target.Node>,
// ): _target.Directory => _psh.dictionary.literal(children)

export const group = (Group_Parts: _p.Raw_Or_Normal_List<d_target.Group_.L>): d_target.Group_ => _p.list.literal(Group_Parts)


export const parameter = (
    name: string,
    type: d_target.Type | null,
): d_target.Type.function_.parameters.L => {
    return {
        'name': name,
        'type': type === null
            ? _p.optional.not_set()
            : _p.optional.set(type),
    }
}

export const tl_propery = (
    readonly: boolean,
    type: d_target.Type,
): d_target.Type.type_literal.properties.D => {
    return {
        'readonly': readonly,
        type: type,
    }
}

export namespace t {
    export const boolean = (): d_target.Type => {
        return ['boolean', null]
    }
    export const function_ = (
        type_parameters: _p.Raw_Or_Normal_List<d_target.Type>,
        parameters: _p.Raw_Or_Normal_List<d_target.Type.function_.parameters.L>,
        return_: d_target.Type,
    ): d_target.Type => {
        return ['function', {
            'type parameters': _p.list.literal(type_parameters),
            'parameters': _p.list.literal(parameters),
            'return': return_,
        }]
    }
    export const literal_type = (value: string, delimiter: 'apostrophe' | 'quote'): d_target.Type => {
        return ['literal type', {
            'value': value,
            'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
        }]
    }
    export const null_ = (): d_target.Type => {
        return ['null', null]
    }
    export const number = (): d_target.Type => {
        return ['number', null]
    }
    export const string = (): d_target.Type => {
        return ['string', null]
    }
    export const tuple = (
        read_only: 'readonly' | '',
        elements: _p.Raw_Or_Normal_List<d_target.Type>): d_target.Type => {
        return ['tuple', {
            'readonly': read_only === 'readonly',
            'elements': _p.list.literal(elements)
        }]
    }
    export const type_literal = (properties: _p.Raw_Or_Normal_Dictionary<d_target.Type.type_literal.properties.D>): d_target.Type => {
        return ['type literal', {
            'properties': _p.dictionary.literal(properties),
        }]
    }



    export const type_reference = (
        start: string,
        tail: _p.Raw_Or_Normal_List<string>,
        type_arguments: _p.Raw_Or_Normal_List<d_target.Type>,
    ): d_target.Type => {
        return ['type reference', {
            'start': temp_s_identifier(start),
            'tail': _p.list.literal(tail).__l_map(($) => temp_s_identifier($)),
            'type arguments': _p.list.literal(type_arguments),
        }]
    }
    export const union = (cases: _p.Raw_Or_Normal_List<d_target.Type>): d_target.Type => {
        return ['union', _p.list.literal(cases)]
    }
    export const void_ = (): d_target.Type => {
        return ['void', null]
    }
}




export namespace e {

    export const raw = (expression: d_target.Block_Part_): d_target.Expression => ['raw', expression]

    export const array_literal = (
        elements: _p.Raw_Or_Normal_List<d_target.Expression>
    ): d_target.Expression => ['array literal', _p.list.literal(elements)]

    export const arrow_function = (
        parameters: _p.Raw_Or_Normal_List<d_target.Expression.arrow_function.parameters.L>,
        return_type: null | d_target.Type,
        type: d_target.Expression.arrow_function.type_,
    ): d_target.Expression => ['arrow function', {
        'parameters': _p.list.literal(parameters),
        'return type': return_type === null ? _p.optional.not_set() : _p.optional.set(return_type),
        'type': type,
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
        // type_arguments: _p.Raw_Or_Normal_List<d_target.Type>,
        arguments_: _p.Raw_Or_Normal_List<d_target.Expression>,
    ): d_target.Expression => ['call', {
        'function selection': function_selection,
        'arguments': _p.list.literal(arguments_),
    }]

    export const compare = (
        left: d_target.Expression,
        operator: 'loosely equal' | 'strictly equal' | 'loosely not equal' | 'strictly not equal' | 'smaller than' | 'smaller than or equal' | 'greater than' | 'greater than or equal',
        right: d_target.Expression,
    ): d_target.Expression => ['compare', {
        'left': left,
        'operator': (() => {
            switch (operator) {
                case 'loosely equal': return ['loosely equal', null]
                case 'strictly equal': return ['strictly equal', null]
                case 'loosely not equal': return ['loosely not equal', null]
                case 'strictly not equal': return ['strictly not equal', null]
                case 'smaller than': return ['smaller than', null]
                case 'smaller than or equal': return ['smaller than or equal', null]
                case 'greater than': return ['greater than', null]
                case 'greater than or equal': return ['greater than or equal', null]
                default: return _pr.au(operator)
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

    export const false_ = (): d_target.Expression => ['false', null]

    export const identifier = (
        name: string,
        escape: 'escape' | 'raw'
    ): d_target.Expression => ['identifier', escape === 'escape'
        ? temp_s_identifier(name)
        : name
    ]

    export const null_ = (): d_target.Expression => ['null', null]

    export const number_literal = (value: number): d_target.Expression => ['number literal', value]

    export const object_literal = (properties: _p.Raw_Or_Normal_Dictionary<d_target.Expression.object_literal.properties.D>): d_target.Expression => ['object literal', {
        'properties': _p.dictionary.literal(properties),
    }]

    export const parenthesized = (expression: d_target.Expression): d_target.Expression => ['parenthesized', expression]

    export const property_access = (
        object: d_target.Expression,
        property: string,
        escape: 'escape' | 'raw'
    ): d_target.Expression => ['property access', {
        'object': object,
        'property': escape === 'escape'
            ? temp_s_identifier(property)
            : property,
    }]

    export const string_literal = (value: string, delimiter: 'apostrophe' | 'quote'): d_target.Expression => ['string literal', {
        'value': value,
        'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
    }]

    export const true_ = (): d_target.Expression => ['true', null]
    
}