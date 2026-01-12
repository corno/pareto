import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/to_be_generated/load_pareto_document"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

export namespace signatures {
    export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>
}

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import * as t_parse_result_to_fountain_pen from "astn/dist/implementation/manual/schemas/authoring_parse_result/transformers/fountain_pen"

export const Error: signatures.Error = ($) => _p.sg($, ($) => {
    switch ($[0]) {
        case 'no schema file': return _p.ss($, ($) => sh.b.snippet(`no schema file @ ${$['file location']}`))
        case 'deserialize': return _p.ss($, ($) => _p.sg($, ($) => {
            switch ($[0]) {

                case 'schema error': return _p.ss($, ($) => {
                    return sh.b.sub([
                        sh.b.snippet(`error in schema @ ${$['file location']}: `),
                        _p.sg($.error, ($) => {
                            switch ($[0]) {
                                case 'parse error': return _p.ss($, ($) => sh.b.sub([
                                    sh.b.snippet($.range.uri),
                                    sh.b.snippet(`:`),
                                    sh.b.snippet(`${$.range.start.relative.line}`),
                                    sh.b.snippet(`:`),
                                    sh.b.snippet(`${$.range.start.relative.column}`),
                                    sh.b.snippet(` > `),
                                    _p.sg($.type, ($) => {
                                        switch ($[0]) {
                                            case 'lexical': return _p.ss($, ($) => sh.b.snippet($[0]))
                                            case 'syntactical': return _p.ss($, ($) => sh.b.sub([
                                                _p.sg($.cause, ($) => {
                                                    switch ($[0]) {
                                                        case 'missing token': return _p.ss($, ($) => sh.b.snippet(`missing token`))
                                                        case 'unexpected token':return _p.ss($, ($) => sh.b.sub([
                                                            sh.b.snippet(`unexpected token, found '${$.found[0]}'`)
                                                        ]))
                                                        default: return _p.au($[0])
                                                    }
                                                }),
                                                sh.b.sub($.expected.__l_map(($) => sh.b.snippet(`expected: ${$[0]}`)))
                                            ]))
                                            default: return _p.au($[0])
                                        }
                                    })
                                ]))
                                case 'resolve errorx': return _p.ss($, ($) => sh.b.snippet(`resolving`))
                                default: return _p.au($[0])
                            }
                        })
                    ])
                })
                case 'unmarshall error': return _p.ss($, ($) => sh.b.snippet(`error during marshalling (TBD)`))
                case 'parse error': return _p.ss($, ($) => t_parse_result_to_fountain_pen.Error($, { 'position info': ['zero based', null] }))
                default: return _p.au($[0])
            }
        }))
        default: return _p.au($[0])
    }
})