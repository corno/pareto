import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/schema/marshall"


export const Benchmark: _i_signatures._T_Benchmark = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'dense': _pa.cc($['dense'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'resulting dictionary': _pa.cc($['resulting dictionary'], ($) => ['nothing', null]),
    'selection': _pa.cc($['selection'], ($) => Guaranteed_Value_Selection(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Constraint: _i_signatures._T_Constraint = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'selection': _pa.cc($['selection'], ($) => Relative_Value_Selection(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'optional value': return _pa.ss($, ($) => ({
                'state': "optional value",
                'value': ['verbose group', _pa.dictionary_literal({
                    'selected optional value': _pa.cc($['selected optional value'], ($) => ['nothing', null]),
                })],
            }))
            case 'state': return _pa.ss($, ($) => ({
                'state': "state",
                'value': ['verbose group', _pa.dictionary_literal({
                    'selected state group': _pa.cc($['selected state group'], ($) => ['nothing', null]),
                    'state': _pa.cc($['state'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })]),
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Dictionary: _i_signatures._T_Dictionary = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'node': _pa.cc($['node'], ($) => Type_Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'ordered': _pa.cc($['ordered'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
})]
export const Globals: _i_signatures._T_Globals = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'complexity': _pa.cc($['complexity'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'constrained': return _pa.ss($, ($) => ({
                'state': "constrained",
                'value': ['nothing', null],
            }))
            case 'unconstrained': return _pa.ss($, ($) => ({
                'state': "unconstrained",
                'value': ['nothing', null],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'number types': _pa.cc($['number types'], ($) => ['dictionary', $.map(($) => Number_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
    'text types': _pa.cc($['text types'], ($) => ['dictionary', $.map(($) => Text_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
})]
export const Group: _i_signatures._T_Group = ($, $p) => ['dictionary', $['dictionary'].map(($) => ['verbose group', _pa.dictionary_literal({
    'description': _pa.cc($['description'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]],
        () => ['not set', null]
    )]),
    'node': _pa.cc($['node'], ($) => Type_Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Guaranteed_Value_Selection: _i_signatures._T_Guaranteed_Value_Selection = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'resulting node': _pa.cc($['resulting node'], ($) => ['nothing', null]),
    'start': _pa.cc($['start'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'constraint': return _pa.ss($, ($) => ({
                'state': "constraint",
                'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'component': return _pa.ss($, ($) => ({
                            'state': "component",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'constraint': _pa.cc($['constraint'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                                'property': _pa.cc($['property'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        case 'reference': return _pa.ss($, ($) => ({
                            'state': "reference",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'constraint': _pa.cc($['constraint'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                                'property': _pa.cc($['property'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            case 'linked entry': return _pa.ss($, ($) => ({
                'state': "linked entry",
                'value': ['nothing', null],
            }))
            case 'list cursor': return _pa.ss($, ($) => ({
                'state': "list cursor",
                'value': ['nothing', null],
            }))
            case 'option constraint': return _pa.ss($, ($) => ({
                'state': "option constraint",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            case 'parameter': return _pa.ss($, ($) => ({
                'state': "parameter",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            case 'parent sibling': return _pa.ss($, ($) => ({
                'state': "parent sibling",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            case 'result': return _pa.ss($, ($) => ({
                'state': "result",
                'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'list': return _pa.ss($, ($) => ({
                            'state': "list",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'list result': _pa.cc($['list result'], ($) => ['nothing', null]),
                                'property': _pa.cc($['property'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        case 'optional value': return _pa.ss($, ($) => ({
                            'state': "optional value",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'optional value': _pa.cc($['optional value'], ($) => ['nothing', null]),
                                'property': _pa.cc($['property'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                                'result': _pa.cc($['result'], ($) => Type_Reference(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        case 'state group': return _pa.ss($, ($) => ({
                            'state': "state group",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'property': _pa.cc($['property'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                                'result': _pa.cc($['result'], ($) => Type_Reference(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'state group': _pa.cc($['state group'], ($) => ['nothing', null]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            case 'sibling': return _pa.ss($, ($) => ({
                'state': "sibling",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'tail': _pa.cc($['tail'], ($) => Relative_Value_Selection(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Imports: _i_signatures._T_Imports = ($, $p) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'schema': _pa.cc($['schema'], ($) => ['nothing', null]),
    'schema set child': _pa.cc($['schema set child'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $['key'],
    })]),
})])]
export const Lookup_Selection: _i_signatures._T_Lookup_Selection = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'resulting dictionary': _pa.cc($['resulting dictionary'], ($) => ['nothing', null]),
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'dictionary': return _pa.ss($, ($) => ({
                'state': "dictionary",
                'value': ['verbose group', _pa.dictionary_literal({
                    'selected dictionary': _pa.cc($['selected dictionary'], ($) => ['nothing', null]),
                    'selection': _pa.cc($['selection'], ($) => Guaranteed_Value_Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'not circular dependent siblings': return _pa.ss($, ($) => ({
                'state': "not circular dependent siblings",
                'value': ['nothing', null],
            }))
            case 'parameter': return _pa.ss($, ($) => ({
                'state': "parameter",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            case 'possibly circular dependent siblings': return _pa.ss($, ($) => ({
                'state': "possibly circular dependent siblings",
                'value': ['nothing', null],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Node_Resolver: _i_signatures._T_Node_Resolver = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'boolean': return _pa.ss($, ($) => ({
            'state': "boolean",
            'value': ['nothing', null],
        }))
        case 'component': return _pa.ss($, ($) => ({
            'state': "component",
            'value': ['verbose group', _pa.dictionary_literal({
                'arguments': _pa.cc($['arguments'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _pa.dictionary_literal({
                        'lookups': _pa.cc($['lookups'], ($) => ['optional', $.transform(
                            ($): _i_out._T_Value.SG.optional => ['set', ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'empty stack': return _pa.ss($, ($) => ({
                                        'state': "empty stack",
                                        'value': ['nothing', null],
                                    }))
                                    case 'not set': return _pa.ss($, ($) => ({
                                        'state': "not set",
                                        'value': ['nothing', null],
                                    }))
                                    case 'selection': return _pa.ss($, ($) => ({
                                        'state': "selection",
                                        'value': Lookup_Selection(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ),
                                    }))
                                    case 'stack': return _pa.ss($, ($) => ({
                                        'state': "stack",
                                        'value': ['verbose group', _pa.dictionary_literal({
                                            'element': _pa.cc($['element'], ($) => Lookup_Selection(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'stack': _pa.cc($['stack'], ($) => Lookup_Selection(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                        })],
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })])]],
                            () => ['not set', null]
                        )]),
                        'values': _pa.cc($['values'], ($) => ['optional', $.transform(
                            ($): _i_out._T_Value.SG.optional => ['set', ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'optional': return _pa.ss($, ($) => ({
                                        'state': "optional",
                                        'value': Optional_Value_Initialization(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ),
                                    }))
                                    case 'parameter': return _pa.ss($, ($) => ({
                                        'state': "parameter",
                                        'value': ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['key'],
                                        })],
                                    }))
                                    case 'required': return _pa.ss($, ($) => ({
                                        'state': "required",
                                        'value': Guaranteed_Value_Selection(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ),
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })])]],
                            () => ['not set', null]
                        )]),
                    })]],
                    () => ['not set', null]
                )]),
                'constraints': _pa.cc($['constraints'], ($) => Property_Constraints(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'location': _pa.cc($['location'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'external': return _pa.ss($, ($) => ({
                            'state': "external",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'import': _pa.cc($['import'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                                'type': _pa.cc($['type'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        case 'internal': return _pa.ss($, ($) => ({
                            'state': "internal",
                            'value': ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
                'signature': _pa.cc($['signature'], ($) => ['nothing', null]),
            })],
        }))
        case 'dictionary': return _pa.ss($, ($) => ({
            'state': "dictionary",
            'value': ['verbose group', _pa.dictionary_literal({
                'benchmark': _pa.cc($['benchmark'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', Benchmark(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )],
                    () => ['not set', null]
                )]),
                'definition': _pa.cc($['definition'], ($) => ['nothing', null]),
                'resolver': _pa.cc($['resolver'], ($) => Node_Resolver(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'group': return _pa.ss($, ($) => ({
            'state': "group",
            'value': Node_Resolver_Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'list': return _pa.ss($, ($) => ({
            'state': "list",
            'value': ['verbose group', _pa.dictionary_literal({
                'definition': _pa.cc($['definition'], ($) => ['nothing', null]),
                'resolver': _pa.cc($['resolver'], ($) => Node_Resolver(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'result': _pa.cc($['result'], ($) => ['optional', $.transform(
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
        case 'nothing': return _pa.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        case 'number': return _pa.ss($, ($) => ({
            'state': "number",
            'value': ['nothing', null],
        }))
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': ['verbose group', _pa.dictionary_literal({
                'constraints': _pa.cc($['constraints'], ($) => Option_Constraints(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'resolver': _pa.cc($['resolver'], ($) => Node_Resolver(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'reference': return _pa.ss($, ($) => ({
            'state': "reference",
            'value': ['verbose group', _pa.dictionary_literal({
                'definition': _pa.cc($['definition'], ($) => ['nothing', null]),
                'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'derived': return _pa.ss($, ($) => ({
                            'state': "derived",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'value': _pa.cc($['value'], ($) => Guaranteed_Value_Selection(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        case 'selected': return _pa.ss($, ($) => ({
                            'state': "selected",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'constraints': _pa.cc($['constraints'], ($) => Property_Constraints(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'definition': _pa.cc($['definition'], ($) => ['nothing', null]),
                                'lookup': _pa.cc($['lookup'], ($) => Lookup_Selection(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })],
        }))
        case 'state group': return _pa.ss($, ($) => ({
            'state': "state group",
            'value': ['verbose group', _pa.dictionary_literal({
                'definition': _pa.cc($['definition'], ($) => ['nothing', null]),
                'states': _pa.cc($['states'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'constraints': _pa.cc($['constraints'], ($) => Option_Constraints(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'resolver': _pa.cc($['resolver'], ($) => Node_Resolver(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })])]),
            })],
        }))
        case 'text': return _pa.ss($, ($) => ({
            'state': "text",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Node_Resolver_Group: _i_signatures._T_Node_Resolver_Group = ($, $p) => ['dictionary', $['dictionary'].map(($) => ['verbose group', _pa.dictionary_literal({
    'definition': _pa.cc($['definition'], ($) => ['nothing', null]),
    'resolver': _pa.cc($['resolver'], ($) => Node_Resolver(
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
export const Number_Type: _i_signatures._T_Number_Type = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'precision': _pa.cc($['precision'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'approximation': return _pa.ss($, ($) => ({
                'state': "approximation",
                'value': ['verbose group', _pa.dictionary_literal({
                    'significant digits': _pa.cc($['significant digits'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]),
                })],
            }))
            case 'exact': return _pa.ss($, ($) => ({
                'state': "exact",
                'value': ['verbose group', _pa.dictionary_literal({
                    'decimal separator offset': _pa.cc($['decimal separator offset'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })]],
                        () => ['not set', null]
                    )]),
                    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'integer': return _pa.ss($, ($) => ({
                                'state': "integer",
                                'value': ['nothing', null],
                            }))
                            case 'natural': return _pa.ss($, ($) => ({
                                'state': "natural",
                                'value': ['nothing', null],
                            }))
                            case 'positive natural': return _pa.ss($, ($) => ({
                                'state': "positive natural",
                                'value': ['nothing', null],
                            }))
                            default: return _pa.au($[0])
                        }
                    })]),
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Option_Constraints: _i_signatures._T_Option_Constraints = ($, $p) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'assert is set': return _pa.ss($, ($) => ({
            'state': "assert is set",
            'value': Possible_Value_Selection(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'state': return _pa.ss($, ($) => ({
            'state': "state",
            'value': ['verbose group', _pa.dictionary_literal({
                'selected state group': _pa.cc($['selected state group'], ($) => ['nothing', null]),
                'selection': _pa.cc($['selection'], ($) => Guaranteed_Value_Selection(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'state': _pa.cc($['state'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})])]
export const Optional_Value_Initialization: _i_signatures._T_Optional_Value_Initialization = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'not set': return _pa.ss($, ($) => ({
            'state': "not set",
            'value': ['nothing', null],
        }))
        case 'selection': return _pa.ss($, ($) => ({
            'state': "selection",
            'value': Possible_Value_Selection(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'set': return _pa.ss($, ($) => ({
            'state': "set",
            'value': Guaranteed_Value_Selection(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
export const Possible_Value_Selection: _i_signatures._T_Possible_Value_Selection = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'parameter': return _pa.ss($, ($) => ({
            'state': "parameter",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })],
        }))
        case 'result': return _pa.ss($, ($) => ({
            'state': "result",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'optional value': return _pa.ss($, ($) => ({
                        'state': "optional value",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'optional value': _pa.cc($['optional value'], ($) => ['nothing', null]),
                            'property': _pa.cc($['property'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                            'result': _pa.cc($['result'], ($) => Type_Reference(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })],
                    }))
                    case 'state group': return _pa.ss($, ($) => ({
                        'state': "state group",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'property': _pa.cc($['property'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                            'result': _pa.cc($['result'], ($) => Type_Reference(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'state group': _pa.cc($['state group'], ($) => ['nothing', null]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Presence: _i_signatures._T_Presence = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': ['nothing', null],
        }))
        case 'required': return _pa.ss($, ($) => ({
            'state': "required",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Property_Constraint: _i_signatures._T_Property_Constraint = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'constraint': _pa.cc($['constraint'], ($) => Constraint(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'start': _pa.cc($['start'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'property': return _pa.ss($, ($) => ({
                'state': "property",
                'value': ['nothing', null],
            }))
            case 'sibling': return _pa.ss($, ($) => ({
                'state': "sibling",
                'value': Reference_To_Property_Constraint(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Property_Constraints: _i_signatures._T_Property_Constraints = ($, $p) => ['dictionary', $['dictionary'].map(($) => Property_Constraint(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Reference_To_Property_Constraint: _i_signatures._T_Reference_To_Property_Constraint = ($, $p) => ['text', ({
    'delimiter': ['backtick', null],
    'value': $['key'],
})]
export const Relative_Value_Selection: _i_signatures._T_Relative_Value_Selection = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'path': _pa.cc($['path'], ($) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'component': return _pa.ss($, ($) => ({
                'state': "component",
                'value': ['nothing', null],
            }))
            case 'group': return _pa.ss($, ($) => ({
                'state': "group",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            case 'reference': return _pa.ss($, ($) => ({
                'state': "reference",
                'value': ['verbose group', _pa.dictionary_literal({
                    'definition': _pa.cc($['definition'], ($) => ['nothing', null]),
                })],
            }))
            default: return _pa.au($[0])
        }
    })])]),
    'resulting node': _pa.cc($['resulting node'], ($) => ['nothing', null]),
})]
export const Resolve_Logic: _i_signatures._T_Resolve_Logic = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'resolvers': _pa.cc($['resolvers'], ($) => Resolvers(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'signatures': _pa.cc($['signatures'], ($) => ['verbose group', _pa.dictionary_literal({
        'types': _pa.cc($['types'], ($) => Signatures(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]),
})]
export const Resolvers: _i_signatures._T_Resolvers = ($, $p) => ['dictionary', $['dictionary'].map(($) => ['verbose group', _pa.dictionary_literal({
    'signature': _pa.cc($['signature'], ($) => ['nothing', null]),
    'type resolver': _pa.cc($['type resolver'], ($) => Node_Resolver(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Schema: _i_signatures._T_Schema = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'complexity': _pa.cc($['complexity'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'constrained': return _pa.ss($, ($) => ({
                'state': "constrained",
                'value': Resolve_Logic(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'unconstrained': return _pa.ss($, ($) => ({
                'state': "unconstrained",
                'value': ['nothing', null],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'globals': _pa.cc($['globals'], ($) => Globals(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'imports': _pa.cc($['imports'], ($) => Imports(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'types': _pa.cc($['types'], ($) => Types(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'schema': return _pa.ss($, ($) => ({
            'state': "schema",
            'value': Schema(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'set': return _pa.ss($, ($) => ({
            'state': "set",
            'value': Schemas(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
export const Schemas: _i_signatures._T_Schemas = ($, $p) => ['dictionary', $['dictionary'].map(($) => Schema_Tree(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Signature: _i_signatures._T_Signature = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'parameters': _pa.cc($['parameters'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'local': return _pa.ss($, ($) => ({
                'state': "local",
                'value': Signature_Parameters(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'same as': return _pa.ss($, ($) => ({
                'state': "same as",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'resolved parameters': _pa.cc($['resolved parameters'], ($) => ['nothing', null]),
    'type': _pa.cc($['type'], ($) => ['nothing', null]),
})]
export const Signature_Parameters: _i_signatures._T_Signature_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'lookups': _pa.cc($['lookups'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'dictionary': _pa.cc($['dictionary'], ($) => ['nothing', null]),
        'presence': _pa.cc($['presence'], ($) => Presence(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'referent': _pa.cc($['referent'], ($) => Type_Reference(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'acyclic': return _pa.ss($, ($) => ({
                    'state': "acyclic",
                    'value': ['nothing', null],
                }))
                case 'cyclic': return _pa.ss($, ($) => ({
                    'state': "cyclic",
                    'value': ['nothing', null],
                }))
                case 'stack': return _pa.ss($, ($) => ({
                    'state': "stack",
                    'value': ['nothing', null],
                }))
                default: return _pa.au($[0])
            }
        })]),
    })])]),
    'values': _pa.cc($['values'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'data type': _pa.cc($['data type'], ($) => Type_Reference(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'presence': _pa.cc($['presence'], ($) => Presence(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })])]),
})]
export const Signatures: _i_signatures._T_Signatures = ($, $p) => ['dictionary', $['dictionary'].map(($) => Signature(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Text_Type: _i_signatures._T_Text_Type = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'multi line': return _pa.ss($, ($) => ({
                'state': "multi line",
                'value': ['nothing', null],
            }))
            case 'single line': return _pa.ss($, ($) => ({
                'state': "single line",
                'value': ['nothing', null],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Type: _i_signatures._T_Type = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'node': _pa.cc($['node'], ($) => Type_Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type parameters': _pa.cc($['type parameters'], ($) => Type_Parameters(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'boolean': return _pa.ss($, ($) => ({
            'state': "boolean",
            'value': ['nothing', null],
        }))
        case 'component': return _pa.ss($, ($) => ({
            'state': "component",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'external': return _pa.ss($, ($) => ({
                        'state': "external",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'import': _pa.cc($['import'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                            'type': _pa.cc($['type'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'internal': return _pa.ss($, ($) => ({
                        'state': "internal",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })],
                    }))
                    case 'internal cyclic': return _pa.ss($, ($) => ({
                        'state': "internal cyclic",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'dictionary': return _pa.ss($, ($) => ({
            'state': "dictionary",
            'value': Dictionary(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'group': return _pa.ss($, ($) => ({
            'state': "group",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'list': return _pa.ss($, ($) => ({
            'state': "list",
            'value': ['verbose group', _pa.dictionary_literal({
                'node': _pa.cc($['node'], ($) => Type_Node(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'nothing': return _pa.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        case 'number': return _pa.ss($, ($) => ({
            'state': "number",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'global': return _pa.ss($, ($) => ({
                        'state': "global",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })],
                    }))
                    case 'local': return _pa.ss($, ($) => ({
                        'state': "local",
                        'value': Number_Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ),
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': Type_Node(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'reference': return _pa.ss($, ($) => ({
            'state': "reference",
            'value': ['verbose group', _pa.dictionary_literal({
                'referent': _pa.cc($['referent'], ($) => Type_Node_Reference(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'derived': return _pa.ss($, ($) => ({
                            'state': "derived",
                            'value': ['nothing', null],
                        }))
                        case 'selected': return _pa.ss($, ($) => ({
                            'state': "selected",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'dependency': _pa.cc($['dependency'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                    switch ($[0]) {
                                        case 'acyclic': return _pa.ss($, ($) => ({
                                            'state': "acyclic",
                                            'value': ['nothing', null],
                                        }))
                                        case 'cyclic': return _pa.ss($, ($) => ({
                                            'state': "cyclic",
                                            'value': ['nothing', null],
                                        }))
                                        case 'stack': return _pa.ss($, ($) => ({
                                            'state': "stack",
                                            'value': ['nothing', null],
                                        }))
                                        default: return _pa.au($[0])
                                    }
                                })]),
                                'dictionary': _pa.cc($['dictionary'], ($) => ['nothing', null]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })],
        }))
        case 'state group': return _pa.ss($, ($) => ({
            'state': "state group",
            'value': ['dictionary', $.map(($) => Type_Node(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'text': return _pa.ss($, ($) => ({
            'state': "text",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'global': return _pa.ss($, ($) => ({
                        'state': "global",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })],
                    }))
                    case 'local': return _pa.ss($, ($) => ({
                        'state': "local",
                        'value': Text_Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ),
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Type_Node_Reference: _i_signatures._T_Type_Node_Reference = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'resulting node': _pa.cc($['resulting node'], ($) => ['nothing', null]),
    'tail': _pa.cc($['tail'], ($) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'dictionary': return _pa.ss($, ($) => ({
                'state': "dictionary",
                'value': ['nothing', null],
            }))
            case 'group': return _pa.ss($, ($) => ({
                'state': "group",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            case 'list': return _pa.ss($, ($) => ({
                'state': "list",
                'value': ['nothing', null],
            }))
            case 'optional': return _pa.ss($, ($) => ({
                'state': "optional",
                'value': ['nothing', null],
            }))
            case 'state group': return _pa.ss($, ($) => ({
                'state': "state group",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            default: return _pa.au($[0])
        }
    })])]),
    'type location': _pa.cc($['type location'], ($) => Type_Reference(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => ['dictionary', $.map(($) => ['nothing', null])]
export const Type_Reference: _i_signatures._T_Type_Reference = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'location': _pa.cc($['location'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'external': return _pa.ss($, ($) => ({
                'state': "external",
                'value': ['verbose group', _pa.dictionary_literal({
                    'import': _pa.cc($['import'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })]),
                    'type': _pa.cc($['type'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })]),
                })],
            }))
            case 'internal': return _pa.ss($, ($) => ({
                'state': "internal",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'resulting node': _pa.cc($['resulting node'], ($) => ['nothing', null]),
})]
export const Type_Specification: _i_signatures._T_Type_Specification = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'schema': _pa.cc($['schema'], ($) => Schema_Tree(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'schema path': _pa.cc($['schema path'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
    'type': _pa.cc($['type'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Types: _i_signatures._T_Types = ($, $p) => ['dictionary', $['dictionary'].map(($) => Type(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
