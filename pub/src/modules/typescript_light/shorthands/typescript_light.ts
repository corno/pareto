import * as _p from 'pareto-core-shorthands/dist/unconstrained'

import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../../../interface/generated/pareto/schemas/typescript_light/data"

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
        'name': name,
        'as': as === null ? _p.optional.not_set() : _p.optional.set(as),
    }
}

export namespace s {

    export const raw = ($: d_target.Group_): d_target.Statements_.L => ['raw', $]

    export const import_namespace = (name: string, from: string): d_target.Statements_.L => ['import', {
        'type': ['namespace', name],
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
        'name': name,
        'block': _p.list.literal(block),
    }]

    export const type_alias = (
        export_: boolean,
        name: string,
        parameters: _p.Raw_Or_Normal_List<string>,
        type: d_target.Type,
    ): d_target.Statements_.L => ['type alias declaration', {
        'export': export_,
        'name': name,
        'parameters': _p.list.literal(parameters),
        'type': type,
    }]

    export const variable = (
        export_: boolean,
        const_: boolean,
        name: string,
        type: null | d_target.Type,
        expression: null | d_target.Expression_,
    ): d_target.Statements_.L => ['variable', {
        'export': export_,
        'const': const_,
        'name': name,
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
            'start': start,
            'tail': _p.list.literal(tail),
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
    export const true_ = (): d_target.Expression_ => {
        return ['true', null]
    }
    export const false_ = (): d_target.Expression_ => {
        return ['false', null]
    }
    export const null_ = (): d_target.Expression_ => {
        return ['null', null]
    }
    export const string_literal = (value: string, delimiter: 'apostrophe' | 'quote'): d_target.Expression_ => {
        return ['string literal', {
            'value': value,
            'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
        }]
    }
    export const object_literal = (properties: _p.Raw_Or_Normal_Dictionary<d_target.Expression_.object_literal.properties.D>): d_target.Expression_ => {
        return ['object literal', {
            'properties': _p.dictionary.literal(properties),
        }]
    }
    export const list_literal = (
        elements: _p.Raw_Or_Normal_List<d_target.Expression_>
    ): d_target.Expression_ => {
        return ['array literal', _p.list.literal(elements)]
    }
    // export const arrowfunction_ = (
    //     parameters: unresolved.Expression_.arrowfunction_.parameters.L[],
    //     returntype_: unresolved.Type | null,
    //     //type: unresolved.Expression_.arrowfunction_.type,
    // ): unresolved.Expression_ => {
    //     return ['arrow function', {
    //         'parameters': pd.a(parameters),
    //         'return type': returntype_,
    //         'type': type
    //     }]
    // }
}