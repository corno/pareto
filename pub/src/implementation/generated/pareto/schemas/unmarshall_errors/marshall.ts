import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/unmarshall_errors/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Relative_Location: _i_signatures._T_Relative_Location = ($, $p) => ['verbose group', _p.dictionary.literal({
    'line': _p.deprecated_cc($['line'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
    'column': _p.deprecated_cc($['column'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
})]
export const Location: _i_signatures._T_Location = ($, $p) => ['verbose group', _p.dictionary.literal({
    'relative': _p.deprecated_cc($['relative'], ($) => Relative_Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'absolute': _p.deprecated_cc($['absolute'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
})]
export const Range: _i_signatures._T_Range = ($, $p) => ['verbose group', _p.dictionary.literal({
    'start': _p.deprecated_cc($['start'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'end': _p.deprecated_cc($['end'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Errors: _i_signatures._T_Errors = ($, $p) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
    'range': _p.deprecated_cc($['range'], ($) => Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'error': return _p.ss($, ($) => ({
                'state': "error",
                'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'invalid value type': return _p.ss($, ($) => ({
                            'state': "invalid value type",
                            'value': ['verbose group', _p.dictionary.literal({
                                'expected': _p.deprecated_cc($['expected'], ($) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                    switch ($[0]) {
                                        case 'text': return _p.ss($, ($) => ({
                                            'state': "text",
                                            'value': ['nothing', null],
                                        }))
                                        case 'verbose group': return _p.ss($, ($) => ({
                                            'state': "verbose group",
                                            'value': ['nothing', null],
                                        }))
                                        case 'concise group': return _p.ss($, ($) => ({
                                            'state': "concise group",
                                            'value': ['nothing', null],
                                        }))
                                        case 'dictionary': return _p.ss($, ($) => ({
                                            'state': "dictionary",
                                            'value': ['nothing', null],
                                        }))
                                        case 'not set': return _p.ss($, ($) => ({
                                            'state': "not set",
                                            'value': ['nothing', null],
                                        }))
                                        case 'set': return _p.ss($, ($) => ({
                                            'state': "set",
                                            'value': ['nothing', null],
                                        }))
                                        case 'list': return _p.ss($, ($) => ({
                                            'state': "list",
                                            'value': ['nothing', null],
                                        }))
                                        case 'state': return _p.ss($, ($) => ({
                                            'state': "state",
                                            'value': ['nothing', null],
                                        }))
                                        default: return _p.au($[0])
                                    }
                                })])]),
                            })],
                        }))
                        case 'duplicate property': return _p.ss($, ($) => ({
                            'state': "duplicate property",
                            'value': ['verbose group', _p.dictionary.literal({
                                'name': _p.deprecated_cc($['name'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'missing property': return _p.ss($, ($) => ({
                            'state': "missing property",
                            'value': ['verbose group', _p.dictionary.literal({
                                'name': _p.deprecated_cc($['name'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'superfluous property': return _p.ss($, ($) => ({
                            'state': "superfluous property",
                            'value': ['verbose group', _p.dictionary.literal({
                                'name': _p.deprecated_cc($['name'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'state': return _p.ss($, ($) => ({
                            'state': "state",
                            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'more than 2 elements': return _p.ss($, ($) => ({
                                        'state': "more than 2 elements",
                                        'value': ['nothing', null],
                                    }))
                                    case 'missing state name': return _p.ss($, ($) => ({
                                        'state': "missing state name",
                                        'value': ['nothing', null],
                                    }))
                                    case 'state is not a string': return _p.ss($, ($) => ({
                                        'state': "state is not a string",
                                        'value': ['nothing', null],
                                    }))
                                    case 'missing value': return _p.ss($, ($) => ({
                                        'state': "missing value",
                                        'value': ['nothing', null],
                                    }))
                                    case 'unknown state': return _p.ss($, ($) => ({
                                        'state': "unknown state",
                                        'value': ['verbose group', _p.dictionary.literal({
                                            'found': _p.deprecated_cc($['found'], ($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]),
                                            'expected': _p.deprecated_cc($['expected'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
                                        })],
                                    }))
                                    case 'missing data marker': return _p.ss($, ($) => ({
                                        'state': "missing data marker",
                                        'value': ['nothing', null],
                                    }))
                                    default: return _p.au($[0])
                                }
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })],
            }))
            case 'warning': return _p.ss($, ($) => ({
                'state': "warning",
                'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'expected apostrophed string': return _p.ss($, ($) => ({
                            'state': "expected apostrophed string",
                            'value': ['nothing', null],
                        }))
                        case 'expected quoted string': return _p.ss($, ($) => ({
                            'state': "expected quoted string",
                            'value': ['nothing', null],
                        }))
                        case 'expected backticked string': return _p.ss($, ($) => ({
                            'state': "expected backticked string",
                            'value': ['nothing', null],
                        }))
                        case 'expected undelimited string': return _p.ss($, ($) => ({
                            'state': "expected undelimited string",
                            'value': ['nothing', null],
                        }))
                        default: return _p.au($[0])
                    }
                })],
            }))
            default: return _p.au($[0])
        }
    })]),
})])]
