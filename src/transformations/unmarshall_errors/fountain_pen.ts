import * as _ea from 'exupery-core-alg'
import * as pt from 'exupery-core-types'
import * as pdev from 'exupery-core-dev'

import * as _in from "../../generated/interface/schemas/unmarshall_errors/data_types/target"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { impure, pure } from "pareto-standard-operations"

const op = {
    'dictionary to list': impure.dictionary['to list, sorted by code point'],
    'join': impure.text['join list of texts with separator']
}

export const Errors = (
    $: _in.Errors,
    $p: {
        'line offset': number
        'column offset': number
        'document path': string
    }
): _out.Block => {
    return sh.block([sh.b.sub_decorated($.map(($) => {
        return sh.b.nested_line([
            sh.l.snippet(`${$p['document path']}:${$.range.start.relative.line + $p['line offset']}:${$.range.start.relative.column + $p['column offset']}: `),
            _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'error': return _ea.ss($, ($) => sh.l.sub([
                        sh.l.snippet(`Error: `),
                        Error_Type_Error($)
                    ]))
                    case 'warning': return _ea.ss($, ($) => sh.l.sub([
                        sh.l.snippet(`Warning: `),
                        Error_Type_Warning($)
                    ]))
                    default: return _ea.au($[0])
                }
            })
        ])
    }))])
}

export const Error_Type_Error = (
    $: _in.Errors.L._type.SG.error,
): _out.Line_Part => _ea.cc($, ($) => {
    switch ($[0]) {
        case 'duplicate property': return _ea.ss($, ($) => sh.l.snippet(`Duplicate property "${$.name}"`))
        case 'invalid value type': return _ea.ss($, ($) => sh.l.snippet(`Invalid value type, expected ${op.join($.expected.map(($) => `'${$[0]}'`), { 'separator': ` or ` })}.`))
        case 'missing property': return _ea.ss($, ($) => sh.l.snippet(`Missing property '${$.name}'`))
        case 'superfluous property': return _ea.ss($, ($) => sh.l.snippet(`Superfluous property '${$.name}'`))
        case 'state': return _ea.ss($, ($) => _ea.cc($, ($) => {
            switch ($[0]) {
                case 'missing state name': return _ea.ss($, ($) => sh.l.snippet(`Missing state name`))
                case 'missing value': return _ea.ss($, ($) => sh.l.snippet(`Missing value`))
                case 'more than 2 elements': return _ea.ss($, ($) => sh.l.snippet(`More than 2 elements`))
                case 'state is not a string': return _ea.ss($, ($) => sh.l.snippet(`State is not a string`))
                case 'unknown state': return _ea.ss($, ($) => sh.l.sub([
                    sh.l.snippet(`Unknown state: ${$.found}, expected one of `),
                    sh.l.sub_decorated(op['dictionary to list']($.expected).map(($) => sh.l.snippet(`'${$.key}'`)))
                ]))
                default: return _ea.au($[0])
            }
        }))
        default: return _ea.au($[0])
    }
})

export const Error_Type_Warning = (
    $: _in.Errors.L._type.SG.warning,
): _out.Line_Part => _ea.cc($, ($) => {
    switch ($[0]) {
        case 'expected apostrophed string': return _ea.ss($, ($) => sh.l.snippet(`Expected apostrophed string`))
        case 'expected backticked string': return _ea.ss($, ($) => sh.l.snippet(`Expected backticked string`))
        case 'expected quoted string': return _ea.ss($, ($) => sh.l.snippet(`Expected quoted string`))
        case 'expected undelimited string': return _ea.ss($, ($) => sh.l.snippet(`Expected undelimited string`))
        default: return _ea.au($[0])
    }
})