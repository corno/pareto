import * as pd from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

import * as _in from "../../../generated/interface/schemas/schema/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/interface/unresolved" //FIXME... should be 'unresolved'

import { m } from "exupery/dist/shorthands/interface"

import * as t_migration_boilerplate from "./migration_boilerplate"
import * as t_serializer from "./serializer"
import * as t_resolver from "./resolver"
import * as t_types from "./types"

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
                            "resolved.ts": t_types.Types(
                                types,
                                {
                                    'what to generate': ['resolved', null],
                                    'imports': imports,
                                }
                            ),
                            "unresolved.ts": t_types.Types(
                                types,
                                {
                                    'what to generate': ['unresolved', null],
                                    'imports': imports,
                                }
                            ),
                            "resolve.ts": t_resolver.Signatures(
                                $.signatures.types
                            ),
                            "migration boilerplate.ts": t_migration_boilerplate.Types(
                                types,
                                {
                                    'imports': imports,
                                    'constrained': true
                                }
                            ),
                            "serializer.ts": t_migration_boilerplate.Types(
                                types,
                                {
                                    'imports': imports,
                                    'constrained': true
                                }
                            ),
                        }))
                        case 'unconstrained': return _ea.ss($, ($) => _ea.dictionary_literal({
                            "unconstrained.ts": t_types.Types(
                                types,
                                {
                                    'what to generate': ['unconstrained', null],
                                    'imports': imports,
                                }
                            ),
                            "migration boilerplate.ts": t_migration_boilerplate.Types(
                                types,
                                {
                                    'imports': imports,
                                    'constrained': false,
                                }
                            ),
                            "serializer.ts": t_serializer.Types(
                                types,
                                {
                                    'imports': imports,
                                    'constrained': false
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
