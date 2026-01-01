import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m } from "exupery/dist/shorthands/interface"

import * as t_migrate_boilerplate from "./exupery_interface_migrate_boilerplate"
import * as t_resolve from "./exupery_interface_resolve"
import * as t_dummy_resolve from "./exupery_interface_dummy_resolve"
import * as t_types from "./exupery_interface_types"

import * as t_marshall from "./exupery_interface_marshall"
import * as t_unmarshall from "./exupery_interface_unmarshall"

import * as t_serialize from "./exupery_interface_serialize"
import * as t_deserialize from "./exupery_interface_deserialize"

import * as t_value_deserializers from "./exupery_interface_value_deserializers"
import * as t_value_serializers from "./exupery_interface_value_serializers"


// import * as operations from "pareto-standard-operations"

// const op = {
//     'filter dictionary': operations.pure.dictionary.filter
// }

export const Schema = ($: d_in.Schema): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    const schema = $
    const constrained: boolean = _p.cc($.complexity, ($) => {
        switch ($[0]) {
            case 'constrained': return _p.ss($, ($) => true)
            case 'unconstrained': return _p.ss($, ($) => false)
            default: return _p.au($[0])
        }
    })
    return m.set({
        "data types": m.set(_p.dictionary_literal({
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
            "resolve.ts": _p.cc($.complexity, ($) => {
                switch ($[0]) {
                    case 'constrained': return _p.ss($, ($) => t_resolve.Signatures(
                        $.signatures.types
                    ))
                    case 'unconstrained': return _p.ss($, ($) => t_dummy_resolve.Signatures(
                    ))
                    default: return _p.au($[0])
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

export const Schema_Tree = ($: d_in.Schema_Tree): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return _p.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _p.ss($, ($) => Schema($))
            case 'set': return _p.ss($, ($) => Schemas($))
            default: return _p.au($[0])
        }
    })
}


export const Schemas = ($: d_in.Schemas): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return m.set($.dictionary.map(($) => _p.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _p.ss($, ($) => Schema($))
            case 'set': return _p.ss($, ($) => Schemas($))
            default: return _p.au($[0])
        }
    })))
}
