    import * as _p from 'pareto-core-transformer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/schema/marshall"
    import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
    
    
    export const Text_Type: _i_signatures._T_Text_Type = ($, $p) => ['verbose group', _p.dictionary.literal({
        'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'multi line': return _p.ss($, ($) => ({
                    'state': "multi line",
                    'value': ['nothing', null],
                }))
                case 'single line': return _p.ss($, ($) => ({
                    'state': "single line",
                    'value': ['nothing', null],
                }))
                default: return _p.au($[0])
            }
        })]),
    })]
    export const Number_Type: _i_signatures._T_Number_Type = ($, $p) => ['verbose group', _p.dictionary.literal({
        'precision': _p.deprecated_cc($['precision'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'approximation': return _p.ss($, ($) => ({
                    'state': "approximation",
                    'value': ['verbose group', _p.dictionary.literal({
                        'significant digits': _p.deprecated_cc($['significant digits'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })]),
                    })],
                }))
                case 'exact': return _p.ss($, ($) => ({
                    'state': "exact",
                    'value': ['verbose group', _p.dictionary.literal({
                        'decimal separator offset': _p.deprecated_cc($['decimal separator offset'], ($) => ['optional', $.__decide(
                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['default number'](
                                    $,
                                    null
                                ),
                            })]],
                            () => ['not set', null]
                        )]),
                        'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'integer': return _p.ss($, ($) => ({
                                    'state': "integer",
                                    'value': ['nothing', null],
                                }))
                                case 'natural': return _p.ss($, ($) => ({
                                    'state': "natural",
                                    'value': ['nothing', null],
                                }))
                                case 'positive natural': return _p.ss($, ($) => ({
                                    'state': "positive natural",
                                    'value': ['nothing', null],
                                }))
                                default: return _p.au($[0])
                            }
                        })]),
                    })],
                }))
                default: return _p.au($[0])
            }
        })]),
    })]
    export const Globals: _i_signatures._T_Globals = ($, $p) => ['verbose group', _p.dictionary.literal({
        'complexity': _p.deprecated_cc($['complexity'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'constrained': return _p.ss($, ($) => ({
                    'state': "constrained",
                    'value': ['nothing', null],
                }))
                case 'unconstrained': return _p.ss($, ($) => ({
                    'state': "unconstrained",
                    'value': ['nothing', null],
                }))
                default: return _p.au($[0])
            }
        })]),
        'text types': _p.deprecated_cc($['text types'], ($) => ['dictionary', $.__d_map(($) => Text_Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        ))]),
        'number types': _p.deprecated_cc($['number types'], ($) => ['dictionary', $.__d_map(($) => Number_Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        ))]),
    })]
    export const Presence: _i_signatures._T_Presence = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'optional': return _p.ss($, ($) => ({
                'state': "optional",
                'value': ['nothing', null],
            }))
            case 'required': return _p.ss($, ($) => ({
                'state': "required",
                'value': ['nothing', null],
            }))
            default: return _p.au($[0])
        }
    })]
    export const Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => ['dictionary', $.__d_map(($) => ['nothing', null])]
    export const Type: _i_signatures._T_Type = ($, $p) => ['verbose group', _p.dictionary.literal({
        'type parameters': _p.deprecated_cc($['type parameters'], ($) => Type_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'node': _p.deprecated_cc($['node'], ($) => Type_Node(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
    export const Types: _i_signatures._T_Types = ($, $p) => ['dictionary', $['dictionary'].__d_map(($) => Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]
    export const Dictionary: _i_signatures._T_Dictionary = ($, $p) => ['verbose group', _p.dictionary.literal({
        'node': _p.deprecated_cc($['node'], ($) => Type_Node(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'ordered': _p.deprecated_cc($['ordered'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['boolean'](
                $,
                null
            ),
        })]),
    })]
    export const Signatures: _i_signatures._T_Signatures = ($, $p) => ['dictionary', $['dictionary'].__d_map(($) => Signature(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]
    export const Resolvers: _i_signatures._T_Resolvers = ($, $p) => ['dictionary', $['dictionary'].__d_map(($) => ['verbose group', _p.dictionary.literal({
        'signature': _p.deprecated_cc($['signature'], ($) => ['nothing', null]),
        'type resolver': _p.deprecated_cc($['type resolver'], ($) => Node_Resolver(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })])]
    export const Resolve_Logic: _i_signatures._T_Resolve_Logic = ($, $p) => ['verbose group', _p.dictionary.literal({
        'signatures': _p.deprecated_cc($['signatures'], ($) => ['verbose group', _p.dictionary.literal({
            'types': _p.deprecated_cc($['types'], ($) => Signatures(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]),
        'resolvers': _p.deprecated_cc($['resolvers'], ($) => Resolvers(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
    export const Group: _i_signatures._T_Group = ($, $p) => ['dictionary', $['dictionary'].__d_map(($) => ['verbose group', _p.dictionary.literal({
        'description': _p.deprecated_cc($['description'], ($) => ['optional', $.__decide(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]],
            () => ['not set', null]
        )]),
        'node': _p.deprecated_cc($['node'], ($) => Type_Node(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })])]
    export const Schema: _i_signatures._T_Schema = ($, $p) => ['verbose group', _p.dictionary.literal({
        'imports': _p.deprecated_cc($['imports'], ($) => Imports(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'globals': _p.deprecated_cc($['globals'], ($) => Globals(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'types': _p.deprecated_cc($['types'], ($) => Types(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'complexity': _p.deprecated_cc($['complexity'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'constrained': return _p.ss($, ($) => ({
                    'state': "constrained",
                    'value': Resolve_Logic(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    ),
                }))
                case 'unconstrained': return _p.ss($, ($) => ({
                    'state': "unconstrained",
                    'value': ['nothing', null],
                }))
                default: return _p.au($[0])
            }
        })]),
    })]
    export const Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'schema': return _p.ss($, ($) => ({
                'state': "schema",
                'value': Schema(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'set': return _p.ss($, ($) => ({
                'state': "set",
                'value': Schemas(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            default: return _p.au($[0])
        }
    })]
    export const Schemas: _i_signatures._T_Schemas = ($, $p) => ['dictionary', $['dictionary'].__d_map(($) => Schema_Tree(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]
    export const Imports: _i_signatures._T_Imports = ($, $p) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
        'schema set child': _p.deprecated_cc($['schema set child'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'schema': _p.deprecated_cc($['schema'], ($) => ['nothing', null]),
    })])]
    export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => ({
                'state': "boolean",
                'value': ['nothing', null],
            }))
            case 'component': return _p.ss($, ($) => ({
                'state': "component",
                'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => ({
                            'state': "external",
                            'value': ['verbose group', _p.dictionary.literal({
                                'import': _p.deprecated_cc($['import'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                                'type': _p.deprecated_cc($['type'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        case 'internal': return _p.ss($, ($) => ({
                            'state': "internal",
                            'value': ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })],
                        }))
                        case 'internal cyclic': return _p.ss($, ($) => ({
                            'state': "internal cyclic",
                            'value': ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })],
            }))
            case 'dictionary': return _p.ss($, ($) => ({
                'state': "dictionary",
                'value': Dictionary(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'group': return _p.ss($, ($) => ({
                'state': "group",
                'value': Group(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'list': return _p.ss($, ($) => ({
                'state': "list",
                'value': ['verbose group', _p.dictionary.literal({
                    'node': _p.deprecated_cc($['node'], ($) => Type_Node(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'nothing': return _p.ss($, ($) => ({
                'state': "nothing",
                'value': ['nothing', null],
            }))
            case 'number': return _p.ss($, ($) => ({
                'state': "number",
                'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'global': return _p.ss($, ($) => ({
                            'state': "global",
                            'value': ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })],
                        }))
                        case 'local': return _p.ss($, ($) => ({
                            'state': "local",
                            'value': Number_Type(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        default: return _p.au($[0])
                    }
                })],
            }))
            case 'optional': return _p.ss($, ($) => ({
                'state': "optional",
                'value': Type_Node(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'reference': return _p.ss($, ($) => ({
                'state': "reference",
                'value': ['verbose group', _p.dictionary.literal({
                    'referent': _p.deprecated_cc($['referent'], ($) => Type_Node_Reference(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'derived': return _p.ss($, ($) => ({
                                'state': "derived",
                                'value': ['nothing', null],
                            }))
                            case 'selected': return _p.ss($, ($) => ({
                                'state': "selected",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'dictionary': _p.deprecated_cc($['dictionary'], ($) => ['nothing', null]),
                                    'dependency': _p.deprecated_cc($['dependency'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                        switch ($[0]) {
                                            case 'acyclic': return _p.ss($, ($) => ({
                                                'state': "acyclic",
                                                'value': ['nothing', null],
                                            }))
                                            case 'cyclic': return _p.ss($, ($) => ({
                                                'state': "cyclic",
                                                'value': ['nothing', null],
                                            }))
                                            case 'stack': return _p.ss($, ($) => ({
                                                'state': "stack",
                                                'value': ['nothing', null],
                                            }))
                                            default: return _p.au($[0])
                                        }
                                    })]),
                                })],
                            }))
                            default: return _p.au($[0])
                        }
                    })]),
                })],
            }))
            case 'state group': return _p.ss($, ($) => ({
                'state': "state group",
                'value': ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                    'description': _p.deprecated_cc($['description'], ($) => ['optional', $.__decide(
                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })]],
                        () => ['not set', null]
                    )]),
                    'node': _p.deprecated_cc($['node'], ($) => Type_Node(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })])],
            }))
            case 'text': return _p.ss($, ($) => ({
                'state': "text",
                'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'global': return _p.ss($, ($) => ({
                            'state': "global",
                            'value': ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })],
                        }))
                        case 'local': return _p.ss($, ($) => ({
                            'state': "local",
                            'value': Text_Type(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        default: return _p.au($[0])
                    }
                })],
            }))
            default: return _p.au($[0])
        }
    })]
    export const Type_Reference: _i_signatures._T_Type_Reference = ($, $p) => ['verbose group', _p.dictionary.literal({
        'location': _p.deprecated_cc($['location'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'internal': return _p.ss($, ($) => ({
                    'state': "internal",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                case 'external': return _p.ss($, ($) => ({
                    'state': "external",
                    'value': ['verbose group', _p.dictionary.literal({
                        'import': _p.deprecated_cc($['import'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                        'type': _p.deprecated_cc($['type'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _p.au($[0])
            }
        })]),
        'resulting node': _p.deprecated_cc($['resulting node'], ($) => ['nothing', null]),
    })]
    export const Type_Node_Reference: _i_signatures._T_Type_Node_Reference = ($, $p) => ['verbose group', _p.dictionary.literal({
        'type location': _p.deprecated_cc($['type location'], ($) => Type_Reference(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'tail': _p.deprecated_cc($['tail'], ($) => ['list', $.__l_map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => ({
                    'state': "dictionary",
                    'value': ['nothing', null],
                }))
                case 'group': return _p.ss($, ($) => ({
                    'state': "group",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                case 'list': return _p.ss($, ($) => ({
                    'state': "list",
                    'value': ['nothing', null],
                }))
                case 'optional': return _p.ss($, ($) => ({
                    'state': "optional",
                    'value': ['nothing', null],
                }))
                case 'state group': return _p.ss($, ($) => ({
                    'state': "state group",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                default: return _p.au($[0])
            }
        })])]),
        'resulting node': _p.deprecated_cc($['resulting node'], ($) => ['nothing', null]),
    })]
    export const Signature_Parameters: _i_signatures._T_Signature_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
        'values': _p.deprecated_cc($['values'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'data type': _p.deprecated_cc($['data type'], ($) => Type_Reference(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'presence': _p.deprecated_cc($['presence'], ($) => Presence(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })])]),
        'lookups': _p.deprecated_cc($['lookups'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'referent': _p.deprecated_cc($['referent'], ($) => Type_Reference(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'dictionary': _p.deprecated_cc($['dictionary'], ($) => ['nothing', null]),
            'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'cyclic': return _p.ss($, ($) => ({
                        'state': "cyclic",
                        'value': ['nothing', null],
                    }))
                    case 'acyclic': return _p.ss($, ($) => ({
                        'state': "acyclic",
                        'value': ['nothing', null],
                    }))
                    case 'stack': return _p.ss($, ($) => ({
                        'state': "stack",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'presence': _p.deprecated_cc($['presence'], ($) => Presence(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })])]),
    })]
    export const Signature: _i_signatures._T_Signature = ($, $p) => ['verbose group', _p.dictionary.literal({
        'type': _p.deprecated_cc($['type'], ($) => ['nothing', null]),
        'parameters': _p.deprecated_cc($['parameters'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'local': return _p.ss($, ($) => ({
                    'state': "local",
                    'value': Signature_Parameters(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    ),
                }))
                case 'same as': return _p.ss($, ($) => ({
                    'state': "same as",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                default: return _p.au($[0])
            }
        })]),
        'resolved parameters': _p.deprecated_cc($['resolved parameters'], ($) => ['nothing', null]),
    })]
    export const Relative_Value_Selection: _i_signatures._T_Relative_Value_Selection = ($, $p) => ['verbose group', _p.dictionary.literal({
        'path': _p.deprecated_cc($['path'], ($) => ['list', $.__l_map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'component': return _p.ss($, ($) => ({
                    'state': "component",
                    'value': ['nothing', null],
                }))
                case 'group': return _p.ss($, ($) => ({
                    'state': "group",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                case 'reference': return _p.ss($, ($) => ({
                    'state': "reference",
                    'value': ['verbose group', _p.dictionary.literal({
                        'definition': _p.deprecated_cc($['definition'], ($) => ['nothing', null]),
                    })],
                }))
                default: return _p.au($[0])
            }
        })])]),
        'resulting node': _p.deprecated_cc($['resulting node'], ($) => ['nothing', null]),
    })]
    export const Lookup_Selection: _i_signatures._T_Lookup_Selection = ($, $p) => ['verbose group', _p.dictionary.literal({
        'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => ({
                    'state': "dictionary",
                    'value': ['verbose group', _p.dictionary.literal({
                        'selection': _p.deprecated_cc($['selection'], ($) => Guaranteed_Value_Selection(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'selected dictionary': _p.deprecated_cc($['selected dictionary'], ($) => ['nothing', null]),
                    })],
                }))
                case 'parameter': return _p.ss($, ($) => ({
                    'state': "parameter",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                case 'not circular dependent siblings': return _p.ss($, ($) => ({
                    'state': "not circular dependent siblings",
                    'value': ['nothing', null],
                }))
                case 'possibly circular dependent siblings': return _p.ss($, ($) => ({
                    'state': "possibly circular dependent siblings",
                    'value': ['nothing', null],
                }))
                default: return _p.au($[0])
            }
        })]),
        'resulting dictionary': _p.deprecated_cc($['resulting dictionary'], ($) => ['nothing', null]),
    })]
    export const Constraint: _i_signatures._T_Constraint = ($, $p) => ['verbose group', _p.dictionary.literal({
        'selection': _p.deprecated_cc($['selection'], ($) => Relative_Value_Selection(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'state': return _p.ss($, ($) => ({
                    'state': "state",
                    'value': ['verbose group', _p.dictionary.literal({
                        'selected state group': _p.deprecated_cc($['selected state group'], ($) => ['nothing', null]),
                        'state': _p.deprecated_cc($['state'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                case 'optional value': return _p.ss($, ($) => ({
                    'state': "optional value",
                    'value': ['verbose group', _p.dictionary.literal({
                        'selected optional value': _p.deprecated_cc($['selected optional value'], ($) => ['nothing', null]),
                    })],
                }))
                default: return _p.au($[0])
            }
        })]),
    })]
    export const Option_Constraints: _i_signatures._T_Option_Constraints = ($, $p) => ['dictionary', $.__d_map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'state': return _p.ss($, ($) => ({
                'state': "state",
                'value': ['verbose group', _p.dictionary.literal({
                    'selection': _p.deprecated_cc($['selection'], ($) => Guaranteed_Value_Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'selected state group': _p.deprecated_cc($['selected state group'], ($) => ['nothing', null]),
                    'state': _p.deprecated_cc($['state'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })]),
                })],
            }))
            case 'assert is set': return _p.ss($, ($) => ({
                'state': "assert is set",
                'value': Possible_Value_Selection(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            default: return _p.au($[0])
        }
    })])]
    export const Property_Constraints: _i_signatures._T_Property_Constraints = ($, $p) => ['dictionary', $['dictionary'].__d_map(($) => Property_Constraint(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]
    export const Reference_To_Property_Constraint: _i_signatures._T_Reference_To_Property_Constraint = ($, $p) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $['key'],
    })]
    export const Property_Constraint: _i_signatures._T_Property_Constraint = ($, $p) => ['verbose group', _p.dictionary.literal({
        'start': _p.deprecated_cc($['start'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'property': return _p.ss($, ($) => ({
                    'state': "property",
                    'value': ['nothing', null],
                }))
                case 'sibling': return _p.ss($, ($) => ({
                    'state': "sibling",
                    'value': Reference_To_Property_Constraint(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    ),
                }))
                default: return _p.au($[0])
            }
        })]),
        'constraint': _p.deprecated_cc($['constraint'], ($) => Constraint(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
    export const Optional_Value_Initialization: _i_signatures._T_Optional_Value_Initialization = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'not set': return _p.ss($, ($) => ({
                'state': "not set",
                'value': ['nothing', null],
            }))
            case 'set': return _p.ss($, ($) => ({
                'state': "set",
                'value': Guaranteed_Value_Selection(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'selection': return _p.ss($, ($) => ({
                'state': "selection",
                'value': Possible_Value_Selection(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            default: return _p.au($[0])
        }
    })]
    export const Node_Resolver_Group: _i_signatures._T_Node_Resolver_Group = ($, $p) => ['dictionary', $['dictionary'].__d_map(($) => ['verbose group', _p.dictionary.literal({
        'definition': _p.deprecated_cc($['definition'], ($) => ['nothing', null]),
        'resolver': _p.deprecated_cc($['resolver'], ($) => Node_Resolver(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })])]
    export const Node_Resolver_List_Result: _i_signatures._T_Node_Resolver_List_Result = ($, $p) => Type_Reference(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
    export const Benchmark: _i_signatures._T_Benchmark = ($, $p) => ['verbose group', _p.dictionary.literal({
        'selection': _p.deprecated_cc($['selection'], ($) => Guaranteed_Value_Selection(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'resulting dictionary': _p.deprecated_cc($['resulting dictionary'], ($) => ['nothing', null]),
        'dense': _p.deprecated_cc($['dense'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['boolean'](
                $,
                null
            ),
        })]),
    })]
    export const Type_Specification: _i_signatures._T_Type_Specification = ($, $p) => ['verbose group', _p.dictionary.literal({
        'schema': _p.deprecated_cc($['schema'], ($) => Schema_Tree(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'schema path': _p.deprecated_cc($['schema path'], ($) => ['list', $.__l_map(($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
        'type': _p.deprecated_cc($['type'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })]
    export const Node_Resolver: _i_signatures._T_Node_Resolver = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => ({
                'state': "boolean",
                'value': ['nothing', null],
            }))
            case 'component': return _p.ss($, ($) => ({
                'state': "component",
                'value': ['verbose group', _p.dictionary.literal({
                    'location': _p.deprecated_cc($['location'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'external': return _p.ss($, ($) => ({
                                'state': "external",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'import': _p.deprecated_cc($['import'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                    'type': _p.deprecated_cc($['type'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                })],
                            }))
                            case 'internal': return _p.ss($, ($) => ({
                                'state': "internal",
                                'value': ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })],
                            }))
                            default: return _p.au($[0])
                        }
                    })]),
                    'signature': _p.deprecated_cc($['signature'], ($) => ['nothing', null]),
                    'arguments': _p.deprecated_cc($['arguments'], ($) => ['optional', $.__decide(
                        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _p.dictionary.literal({
                            'values': _p.deprecated_cc($['values'], ($) => ['optional', $.__decide(
                                ($): _i_out._T_Value.SG.optional => ['set', ['dictionary', $.__d_map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                    switch ($[0]) {
                                        case 'optional': return _p.ss($, ($) => ({
                                            'state': "optional",
                                            'value': Optional_Value_Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            ),
                                        }))
                                        case 'required': return _p.ss($, ($) => ({
                                            'state': "required",
                                            'value': Guaranteed_Value_Selection(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            ),
                                        }))
                                        case 'parameter': return _p.ss($, ($) => ({
                                            'state': "parameter",
                                            'value': ['text', ({
                                                'delimiter': ['backtick', null],
                                                'value': $['key'],
                                            })],
                                        }))
                                        default: return _p.au($[0])
                                    }
                                })])]],
                                () => ['not set', null]
                            )]),
                            'lookups': _p.deprecated_cc($['lookups'], ($) => ['optional', $.__decide(
                                ($): _i_out._T_Value.SG.optional => ['set', ['dictionary', $.__d_map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                    switch ($[0]) {
                                        case 'empty stack': return _p.ss($, ($) => ({
                                            'state': "empty stack",
                                            'value': ['nothing', null],
                                        }))
                                        case 'not set': return _p.ss($, ($) => ({
                                            'state': "not set",
                                            'value': ['nothing', null],
                                        }))
                                        case 'selection': return _p.ss($, ($) => ({
                                            'state': "selection",
                                            'value': Lookup_Selection(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            ),
                                        }))
                                        case 'stack': return _p.ss($, ($) => ({
                                            'state': "stack",
                                            'value': ['verbose group', _p.dictionary.literal({
                                                'stack': _p.deprecated_cc($['stack'], ($) => Lookup_Selection(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                )),
                                                'element': _p.deprecated_cc($['element'], ($) => Lookup_Selection(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                )),
                                            })],
                                        }))
                                        default: return _p.au($[0])
                                    }
                                })])]],
                                () => ['not set', null]
                            )]),
                        })]],
                        () => ['not set', null]
                    )]),
                    'constraints': _p.deprecated_cc($['constraints'], ($) => Property_Constraints(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'dictionary': return _p.ss($, ($) => ({
                'state': "dictionary",
                'value': ['verbose group', _p.dictionary.literal({
                    'definition': _p.deprecated_cc($['definition'], ($) => ['nothing', null]),
                    'resolver': _p.deprecated_cc($['resolver'], ($) => Node_Resolver(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'benchmark': _p.deprecated_cc($['benchmark'], ($) => ['optional', $.__decide(
                        ($): _i_out._T_Value.SG.optional => ['set', Benchmark(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )],
                        () => ['not set', null]
                    )]),
                })],
            }))
            case 'group': return _p.ss($, ($) => ({
                'state': "group",
                'value': Node_Resolver_Group(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'list': return _p.ss($, ($) => ({
                'state': "list",
                'value': ['verbose group', _p.dictionary.literal({
                    'definition': _p.deprecated_cc($['definition'], ($) => ['nothing', null]),
                    'resolver': _p.deprecated_cc($['resolver'], ($) => Node_Resolver(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'result': _p.deprecated_cc($['result'], ($) => ['optional', $.__decide(
                        ($): _i_out._T_Value.SG.optional => ['set', Node_Resolver_List_Result(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )],
                        () => ['not set', null]
                    )]),
                })],
            }))
            case 'nothing': return _p.ss($, ($) => ({
                'state': "nothing",
                'value': ['nothing', null],
            }))
            case 'number': return _p.ss($, ($) => ({
                'state': "number",
                'value': ['nothing', null],
            }))
            case 'optional': return _p.ss($, ($) => ({
                'state': "optional",
                'value': ['verbose group', _p.dictionary.literal({
                    'constraints': _p.deprecated_cc($['constraints'], ($) => Option_Constraints(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'resolver': _p.deprecated_cc($['resolver'], ($) => Node_Resolver(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'reference': return _p.ss($, ($) => ({
                'state': "reference",
                'value': ['verbose group', _p.dictionary.literal({
                    'definition': _p.deprecated_cc($['definition'], ($) => ['nothing', null]),
                    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'derived': return _p.ss($, ($) => ({
                                'state': "derived",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'value': _p.deprecated_cc($['value'], ($) => Guaranteed_Value_Selection(
                                        $,
                                        {
                                            'value serializers': $p['value serializers'],
                                        }
                                    )),
                                })],
                            }))
                            case 'selected': return _p.ss($, ($) => ({
                                'state': "selected",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'definition': _p.deprecated_cc($['definition'], ($) => ['nothing', null]),
                                    'lookup': _p.deprecated_cc($['lookup'], ($) => Lookup_Selection(
                                        $,
                                        {
                                            'value serializers': $p['value serializers'],
                                        }
                                    )),
                                    'constraints': _p.deprecated_cc($['constraints'], ($) => Property_Constraints(
                                        $,
                                        {
                                            'value serializers': $p['value serializers'],
                                        }
                                    )),
                                })],
                            }))
                            default: return _p.au($[0])
                        }
                    })]),
                })],
            }))
            case 'state group': return _p.ss($, ($) => ({
                'state': "state group",
                'value': ['verbose group', _p.dictionary.literal({
                    'definition': _p.deprecated_cc($['definition'], ($) => ['nothing', null]),
                    'states': _p.deprecated_cc($['states'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                        'constraints': _p.deprecated_cc($['constraints'], ($) => Option_Constraints(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'resolver': _p.deprecated_cc($['resolver'], ($) => Node_Resolver(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })])]),
                })],
            }))
            case 'text': return _p.ss($, ($) => ({
                'state': "text",
                'value': ['nothing', null],
            }))
            default: return _p.au($[0])
        }
    })]
    export const Guaranteed_Value_Selection: _i_signatures._T_Guaranteed_Value_Selection = ($, $p) => ['verbose group', _p.dictionary.literal({
        'start': _p.deprecated_cc($['start'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'sibling': return _p.ss($, ($) => ({
                    'state': "sibling",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                case 'parent sibling': return _p.ss($, ($) => ({
                    'state': "parent sibling",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                case 'option constraint': return _p.ss($, ($) => ({
                    'state': "option constraint",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                case 'list cursor': return _p.ss($, ($) => ({
                    'state': "list cursor",
                    'value': ['nothing', null],
                }))
                case 'linked entry': return _p.ss($, ($) => ({
                    'state': "linked entry",
                    'value': ['nothing', null],
                }))
                case 'constraint': return _p.ss($, ($) => ({
                    'state': "constraint",
                    'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'component': return _p.ss($, ($) => ({
                                'state': "component",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'property': _p.deprecated_cc($['property'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                    'constraint': _p.deprecated_cc($['constraint'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                })],
                            }))
                            case 'reference': return _p.ss($, ($) => ({
                                'state': "reference",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'property': _p.deprecated_cc($['property'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                    'constraint': _p.deprecated_cc($['constraint'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                })],
                            }))
                            default: return _p.au($[0])
                        }
                    })],
                }))
                case 'parameter': return _p.ss($, ($) => ({
                    'state': "parameter",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                case 'result': return _p.ss($, ($) => ({
                    'state': "result",
                    'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'list': return _p.ss($, ($) => ({
                                'state': "list",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'property': _p.deprecated_cc($['property'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                    'list result': _p.deprecated_cc($['list result'], ($) => ['nothing', null]),
                                })],
                            }))
                            case 'state group': return _p.ss($, ($) => ({
                                'state': "state group",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'property': _p.deprecated_cc($['property'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                    'state group': _p.deprecated_cc($['state group'], ($) => ['nothing', null]),
                                    'result': _p.deprecated_cc($['result'], ($) => Type_Reference(
                                        $,
                                        {
                                            'value serializers': $p['value serializers'],
                                        }
                                    )),
                                })],
                            }))
                            case 'optional value': return _p.ss($, ($) => ({
                                'state': "optional value",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'property': _p.deprecated_cc($['property'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                    'optional value': _p.deprecated_cc($['optional value'], ($) => ['nothing', null]),
                                    'result': _p.deprecated_cc($['result'], ($) => Type_Reference(
                                        $,
                                        {
                                            'value serializers': $p['value serializers'],
                                        }
                                    )),
                                })],
                            }))
                            default: return _p.au($[0])
                        }
                    })],
                }))
                default: return _p.au($[0])
            }
        })]),
        'tail': _p.deprecated_cc($['tail'], ($) => Relative_Value_Selection(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'resulting node': _p.deprecated_cc($['resulting node'], ($) => ['nothing', null]),
    })]
    export const Possible_Value_Selection: _i_signatures._T_Possible_Value_Selection = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'parameter': return _p.ss($, ($) => ({
                'state': "parameter",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            case 'result': return _p.ss($, ($) => ({
                'state': "result",
                'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'state group': return _p.ss($, ($) => ({
                            'state': "state group",
                            'value': ['verbose group', _p.dictionary.literal({
                                'property': _p.deprecated_cc($['property'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                                'state group': _p.deprecated_cc($['state group'], ($) => ['nothing', null]),
                                'result': _p.deprecated_cc($['result'], ($) => Type_Reference(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        case 'optional value': return _p.ss($, ($) => ({
                            'state': "optional value",
                            'value': ['verbose group', _p.dictionary.literal({
                                'property': _p.deprecated_cc($['property'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                                'optional value': _p.deprecated_cc($['optional value'], ($) => ['nothing', null]),
                                'result': _p.deprecated_cc($['result'], ($) => Type_Reference(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })],
            }))
            default: return _p.au($[0])
        }
    })]
