import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/unmarshall_errors/marshall"


export const Errors: _i_signatures._T_Errors = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'range': _pa.cc($['range'], ($) => Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'error': return _pa.ss($, ($) => ({
                'state': "error",
                'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'duplicate property': return _pa.ss($, ($) => ({
                            'state': "duplicate property",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'name': _pa.cc($['name'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'invalid value type': return _pa.ss($, ($) => ({
                            'state': "invalid value type",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'expected': _pa.cc($['expected'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                    switch ($[0]) {
                                        case 'dictionary': return _pa.ss($, ($) => ({
                                            'state': "dictionary",
                                            'value': ['nothing', null],
                                        }))
                                        case 'group': return _pa.ss($, ($) => ({
                                            'state': "group",
                                            'value': ['nothing', null],
                                        }))
                                        case 'text': return _pa.ss($, ($) => ({
                                            'state': "text",
                                            'value': ['nothing', null],
                                        }))
                                        default: return _pa.au($[0])
                                    }
                                })]),
                            })],
                        }))
                        case 'missing property': return _pa.ss($, ($) => ({
                            'state': "missing property",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'name': _pa.cc($['name'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'state': return _pa.ss($, ($) => ({
                            'state': "state",
                            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'missing state name': return _pa.ss($, ($) => ({
                                        'state': "missing state name",
                                        'value': ['nothing', null],
                                    }))
                                    case 'missing value': return _pa.ss($, ($) => ({
                                        'state': "missing value",
                                        'value': ['nothing', null],
                                    }))
                                    case 'more than 2 elements': return _pa.ss($, ($) => ({
                                        'state': "more than 2 elements",
                                        'value': ['nothing', null],
                                    }))
                                    case 'state is not a string': return _pa.ss($, ($) => ({
                                        'state': "state is not a string",
                                        'value': ['nothing', null],
                                    }))
                                    case 'unknown state': return _pa.ss($, ($) => ({
                                        'state': "unknown state",
                                        'value': ['verbose group', _pa.dictionary_literal({
                                            'expected': _pa.cc($['expected'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
                                            'found': _pa.cc($['found'], ($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]),
                                        })],
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            case 'warning': return _pa.ss($, ($) => ({
                'state': "warning",
                'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'expected apostrophed string': return _pa.ss($, ($) => ({
                            'state': "expected apostrophed string",
                            'value': ['nothing', null],
                        }))
                        case 'expected backticked string': return _pa.ss($, ($) => ({
                            'state': "expected backticked string",
                            'value': ['nothing', null],
                        }))
                        case 'expected quoted string': return _pa.ss($, ($) => ({
                            'state': "expected quoted string",
                            'value': ['nothing', null],
                        }))
                        case 'expected undelimited string': return _pa.ss($, ($) => ({
                            'state': "expected undelimited string",
                            'value': ['nothing', null],
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})])]
export const Location: _i_signatures._T_Location = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'absolute': _pa.cc($['absolute'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': _pd.implement_me(),
    })]),
    'relative': _pa.cc($['relative'], ($) => Relative_Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Range: _i_signatures._T_Range = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'end': _pa.cc($['end'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'start': _pa.cc($['start'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Relative_Location: _i_signatures._T_Relative_Location = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'column': _pa.cc($['column'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': _pd.implement_me(),
    })]),
    'line': _pa.cc($['line'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': _pd.implement_me(),
    })]),
})]
