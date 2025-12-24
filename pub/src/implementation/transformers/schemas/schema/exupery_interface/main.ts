import * as _edata from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m } from "exupery/dist/shorthands/interface"

import * as t_migrate_boilerplate from "./migrate_boilerplate"
import * as t_resolve from "./resolve"
import * as t_dummy_resolve from "./dummy_resolve"
import * as t_types from "./types"

import * as t_marshall from "./marshall"
import * as t_unmarshall from "./unmarshall"

import * as t_serialize from "./serialize"
import * as t_deserialize from "./deserialize"

import * as t_value_deserializers from "./value_deserializers"
import * as t_value_serializers from "./value_serializers"


// import * as operations from "pareto-standard-operations"

// const op = {
//     'filter dictionary': operations.pure.dictionary.filter
// }

export const Schema = ($: _in.Schema): _out.Module_Set.D<_edata.Source_Location> => {
    const schema = $
    const constrained: boolean = _ea.cc($.complexity, ($) => {
        switch ($[0]) {
            case 'constrained': return _ea.ss($, ($) => true)
            case 'unconstrained': return _ea.ss($, ($) => false)
            default: return _ea.au($[0])
        }
    })
    return m.set({
        "data types": m.set(_ea.dictionary_literal({
            "source.ts": t_types.Schema(
                schema,
                {
                    'what to generate': ['source', null],
                    'imports': schema.imports,
                }
            ),
            "target.ts": t_types.Schema(
                schema,
                {
                    'what to generate': ['target', constrained],
                    'imports': schema.imports,
                }
            ),
            "resolve.ts": _ea.cc($.complexity, ($) => {
                switch ($[0]) {
                    case 'constrained': return _ea.ss($, ($) => t_resolve.Signatures(
                        $.signatures.types
                    ))
                    case 'unconstrained': return _ea.ss($, ($) => t_dummy_resolve.Signatures(
                    ))
                    default: return _ea.au($[0])
                }
            }),
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
            }
        ),
        "serialize.ts": t_serialize.Schema(
            schema,
            {
                'imports': schema.imports,
            }
        ),
        "deserialize.ts": t_deserialize.Schema(
            schema,
            {
                'imports': schema.imports,
            }
        ),
        "value serializers.ts": t_value_serializers.Schema(
            schema,
            {
                'imports': schema.imports,
            }
        ),
        "value deserializers.ts": t_value_deserializers.Schema(
            schema,
            {
                'imports': schema.imports,
            }
        ),

    })
}

export const Schema_Tree = ($: _in.Schema_Tree): _out.Module_Set.D<_edata.Source_Location> => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => Schema($))
            case 'set': return _ea.ss($, ($) => Schemas($))
            default: return _ea.au($[0])
        }
    })
}


export const Schemas = ($: _in.Schemas): _out.Module_Set.D<_edata.Source_Location> => {
    return m.set($.dictionary.map(($) => _ea.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => Schema($))
            case 'set': return _ea.ss($, ($) => Schemas($))
            default: return _ea.au($[0])
        }
    })))
}
