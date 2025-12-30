import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, } from "exupery/dist/shorthands/implementation"

import * as t_migration_boilerplate from "./migrate_boilerplate"

import * as t_resolver from "./resolve"

import * as t_serialize from "./serialize"
import * as t_deserialize from "./deserialize"

import * as t_marshall from "./marshall"
import * as t_unmarshall from "./unmarshall"

export const Schema_Tree = (
    $: d_in.Schema_Tree,
    $p: {
        'path': _pi.List<string>,
    }
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _pt.ss($, ($) => {
                const imports = $.imports
                return m.set(
                    _pt.dictionary_literal<_pi.Optional_Value<d_out.Module_Set.D<_pi.Deprecated_Source_Location>>>({
                        // "migration boilerplate.ts": pa.set(_migration_boilerplate.Types($.types, {
                        //     'key': key,
                        //     'imports': $.imports,
                        //     'constrained': $.complexity[0] === 'constrained'
                        // })),

                        "resolve.ts": _pt.cc($.complexity, ($) => {
                            switch ($[0]) {
                                case 'constrained': return _pt.ss($, ($) => _pt.set(t_resolver.Resolvers($.resolvers, {
                                    'path': $p.path,
                                    'imports': imports
                                })))
                                case 'unconstrained': return _pt.ss($, ($) => _pt.not_set())
                                default: return _pt.au($[0])
                            }
                        }),
                        "marshall.ts": _pt.set(t_marshall.Schema($, {
                            'path': $p.path,
                            'imports': $.imports,
                            'constrained': $.complexity[0] === 'constrained'
                        })),
                        "unmarshall.ts": _pt.set(t_unmarshall.Schema($, {
                            'path': $p.path,
                            'imports': $.imports,
                            'constrained': $.complexity[0] === 'constrained'
                        })),

                        "serialize.ts": _pt.set(t_serialize.Schema($, {
                            'path': $p.path,
                            'imports': $.imports,
                            'constrained': $.complexity[0] === 'constrained'
                        })),
                        "deserialize.ts": _pt.set(t_deserialize.Schema($, {
                            'path': $p.path,
                            'imports': $.imports,
                        })),
                    }).filter(($) => $)
                )
            })
            case 'set': return _pt.ss($, ($): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => Schemas(
                $,
                {
                    'path': $p.path,
                }
            ))
            default: return _pt.au($[0])
        }
    })
}

export const Schemas = (
    $: d_in.Schemas,
    $p: {
        'path': _pi.List<string>,
    }
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return m.set($.dictionary.map(($, key) => Schema_Tree($, {
        'path': $p.path.append_element(key)
    })))
}
