import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/unmarshall_errors/data_types/target"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as s_list_of_separated_texts } from "pareto-standard-operations/dist/implementation/serializers/schemas/list_of_separated_texts"


export const Errors = (
    $: d_in.Errors,
    $p: {
        'line offset': number
        'column offset': number
        'document path': string
    }
): d_out.Group => {
    return sh.group([ sh.g.sub($.map(($) => {
        return sh.g.nested_block([
            sh.b.snippet(`${$p['document path']}:${$.range.start.relative.line + $p['line offset']}:${$.range.start.relative.column + $p['column offset']}: `),
            _pt.cc($.type, ($) => {
                switch ($[0]) {
                    case 'error': return _pt.ss($, ($) => sh.b.sub([
                        sh.b.snippet(`Error: `),
                        Error_Type_Error($)
                    ]))
                    case 'warning': return _pt.ss($, ($) => sh.b.sub([
                        sh.b.snippet(`Warning: `),
                        Error_Type_Warning($)
                    ]))
                    default: return _pt.au($[0])
                }
            })
        ])
    }))])
}

export const Error_Type_Error = (
    $: d_in.Errors.L._type.SG.error,
): d_out.Block_Part => _pt.cc($, ($) => {
    switch ($[0]) {
        case 'duplicate property': return _pt.ss($, ($) => sh.b.snippet(`Duplicate property "${$.name}"`))
        case 'invalid value type': return _pt.ss($, ($) => sh.b.snippet(`Invalid value type, expected ${s_list_of_separated_texts($.expected.map(($) => `'${$[0]}'`), { 'separator': ` or ` })}.`))
        case 'missing property': return _pt.ss($, ($) => sh.b.snippet(`Missing property '${$.name}'`))
        case 'superfluous property': return _pt.ss($, ($) => sh.b.snippet(`Superfluous property '${$.name}'`))
        case 'state': return _pt.ss($, ($) => _pt.cc($, ($) => {
            switch ($[0]) {
                case 'missing state name': return _pt.ss($, ($) => sh.b.snippet(`Missing state name`))
                case 'missing data marker': return _pt.ss($, ($) => sh.b.snippet(`Missing data marker`))
                case 'missing value': return _pt.ss($, ($) => sh.b.snippet(`Missing value`))
                case 'more than 2 elements': return _pt.ss($, ($) => sh.b.snippet(`More than 2 elements`))
                case 'state is not a string': return _pt.ss($, ($) => sh.b.snippet(`State is not a string`))
                case 'unknown state': return _pt.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`Unknown state: ${$.found}, expected one of `),
                    sh.b.sub($.expected.to_list(($, key) => sh.b.snippet(`'${key}'`)))
                ]))
                default: return _pt.au($[0])
            }
        }))
        default: return _pt.au($[0])
    }
})

export const Error_Type_Warning = (
    $: d_in.Errors.L._type.SG.warning,
): d_out.Block_Part => _pt.cc($, ($) => {
    switch ($[0]) {
        case 'expected apostrophed string': return _pt.ss($, ($) => sh.b.snippet(`Expected apostrophed string`))
        case 'expected backticked string': return _pt.ss($, ($) => sh.b.snippet(`Expected backticked string`))
        case 'expected quoted string': return _pt.ss($, ($) => sh.b.snippet(`Expected quoted string`))
        case 'expected undelimited string': return _pt.ss($, ($) => sh.b.snippet(`Expected undelimited string`))
        default: return _pt.au($[0])
    }
})