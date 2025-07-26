import * as pd from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

import * as _in from "../../../generated/interface/schemas/schema/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/interface/unresolved" //FIXME... should be 'unresolved'

import { m } from "exupery/dist/shorthands/interface"

import * as _migration_boilerplate from "./migration_boilerplate"
import * as _resolver from "./resolver"
import * as _types from "./types"

import * as operations from "pareto-standard-operations"

const op = {
    'filter dictionary': operations.pure.dictionary.filter
}

export const Schemas = ($: _in.Schemas): _out.Module_Set.D<pd.Source_Location> => {
    return m.set($.dictionary.map(($) => _ea.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => {
                const types = $.types
                const imports = $.imports
                return m.set(_ea.cc($.complexity, ($) => {
                    switch ($[0]) {
                        case 'constrained': return _ea.ss($, ($) => _ea.dictionary_literal({
                            "resolved.ts": _types.Types(
                                types,
                                {
                                    'what to generate': ['resolved', null],
                                    'imports': imports,
                                }
                            ),
                            "unresolved.ts": _types.Types(
                                types,
                                {
                                    'what to generate': ['unresolved', null],
                                    'imports': imports,
                                }
                            ),
                            "resolve.ts": _resolver.Signatures(
                                $.signatures.types
                            ),
                            "migration boilerplate.ts": _migration_boilerplate.Types(
                                types,
                                {
                                    'imports': imports,
                                    'constrained': true
                                }
                            ),
                        }))
                        case 'unconstrained': return _ea.ss($, ($) => _ea.dictionary_literal({
                            "unconstrained.ts": _types.Types(
                                types,
                                {
                                    'what to generate': ['unconstrained', null],
                                    'imports': imports,
                                }
                            ),
                            "migration boilerplate.ts": _migration_boilerplate.Types(
                                types,
                                {
                                    'imports': imports,
                                    'constrained': false,
                                }
                            ),
                        }))
                        default: return _ea.au($[0])
                    }
                }))
            })
            case 'set': return _ea.ss($, ($) => Schemas($))
            default: return _ea.au($[0])
        }
    })))
}
