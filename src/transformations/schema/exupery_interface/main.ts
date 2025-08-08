import * as pd from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

import * as _in from "../../../generated/interface/schemas/schema/data_types/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/interface/unresolved" //FIXME... should be 'unresolved'

import { m } from "exupery/dist/shorthands/interface"

import * as t_marshall from "./marshall"
import * as t_migrate_boilerplate from "./migrate_boilerplate"
import * as t_resolve from "./resolve"
import * as t_types from "./types"
import * as t_unmarshall from "./unmarshall"
import * as t_value_deserializers from "./value_deserializers"
import * as t_value_serializers from "./value_serializers"

// import * as operations from "pareto-standard-operations"

// const op = {
//     'filter dictionary': operations.pure.dictionary.filter
// }

export const Schema = ($: _in.Schema): _out.Module_Set.D<pd.Source_Location> => {
    const schema = $
    const constrained: boolean = _ea.cc($.complexity, ($) => {
        switch ($[0]) {
            case 'constrained': return _ea.ss($, ($) => true)
            case 'unconstrained': return _ea.ss($, ($) => false)
            default: return _ea.au($[0])
        }
    })
    return m.set({
        "data types": m.set(_ea.cc($.complexity, ($) => {
            switch ($[0]) {
                case 'constrained': return _ea.ss($, ($) => _ea.dictionary_literal({
                    "resolved.ts": t_types.Schema(
                        schema,
                        {
                            'what to generate': ['resolved', null],
                            'imports': schema.imports,
                        }
                    ),
                    "unresolved.ts": t_types.Schema(
                        schema,
                        {
                            'what to generate': ['unresolved', null],
                            'imports': schema.imports,
                        }
                    ),
                    "resolve.ts": t_resolve.Signatures(
                        $.signatures.types
                    ),
                }))
                case 'unconstrained': return _ea.ss($, ($) => _ea.dictionary_literal({
                    "unconstrained.ts": t_types.Schema(
                        schema,
                        {
                            'what to generate': ['unconstrained', null],
                            'imports': schema.imports,
                        }
                    ),
                }))
                default: return _ea.au($[0])
            }
        })),
        "migrate boilerplate.ts": t_migrate_boilerplate.Schema(
            schema,
            {
                'imports': schema.imports,
                'constrained': constrained
            }
        ),
        "unmarshall.ts": t_unmarshall.Schema(
            schema,
            {
                'imports': schema.imports,
                'constrained': constrained
            }
        ),
        "marshall.ts": t_marshall.Schema(
            schema,
            {
                'imports': schema.imports,
                'constrained': constrained
            }
        ),
        "value serializers.ts": t_value_serializers.Schema(
            schema,
            {
                'imports': schema.imports,
                'constrained': constrained
            }
        ),
        "value deserializers.ts": t_value_deserializers.Schema(
            schema,
            {
                'imports': schema.imports,
                'constrained': constrained
            }
        ),

    })
}

export const Schemas = ($: _in.Schemas): _out.Module_Set.D<pd.Source_Location> => {
    return m.set($.dictionary.map(($) => _ea.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => Schema($))
            case 'set': return _ea.ss($, ($) => Schemas($))
            default: return _ea.au($[0])
        }
    })))
}
