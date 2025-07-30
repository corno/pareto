import * as pd from 'exupery-core-data'
import * as pa from 'exupery-core-alg'

import * as _in from "../../../generated/interface/schemas/schema/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/implementation/unresolved"
import * as _out_interface from "exupery/dist/generated/interface/schemas/interface/unresolved" //FIXME... should be 'unresolved'

import { m, } from "exupery/dist/shorthands/implementation"

import * as t_migration_boilerplate from "./migration_boilerplate"
import * as t_resolver from "./resolver"
import * as t_serializer from "./serializer"

import * as operations from "pareto-standard-operations"

const op = {
    'filter dictionary': operations.pure.dictionary.filter
}

export const Schemas = ($: _in.Schemas): _out.Module_Set.D<pd.Source_Location> => {
    return m.set($.dictionary.map(($, key) => pa.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return pa.ss($, ($) => {
                const imports = $.imports
                return m.set(op['filter dictionary']<_out.Module_Set.D<pd.Source_Location>>(
                    pa.dictionary_literal({
                        // "migration boilerplate.ts": pa.set(_migration_boilerplate.Types($.types, {
                        //     'key': key,
                        //     'imports': $.imports,
                        //     'constrained': $.complexity[0] === 'constrained'
                        // })),

                        "resolve.ts": pa.cc($.complexity, ($) => {
                            switch ($[0]) {
                                case 'constrained': return pa.ss($, ($) => pa.set(t_resolver.Resolvers($.resolvers, {
                                    'key': key,
                                    'imports': imports
                                })))
                                case 'unconstrained': return pa.ss($, ($) => pa.not_set())
                                default: return pa.au($[0])
                            }
                        }),
                        "serializer.ts": pa.set(t_serializer.Schema($, {
                            'key': key,
                            'imports': $.imports,
                            'constrained': $.complexity[0] === 'constrained'
                        })),
                    }))
                )
            })
            case 'set': return pa.ss($, ($): _out.Module_Set.D<pd.Source_Location> => Schemas($))
            default: return pa.au($[0])
        }
    })))
}
