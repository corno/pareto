import * as _edata from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, } from "exupery/dist/shorthands/implementation"

import * as t_migration_boilerplate from "./migrate_boilerplate"

import * as t_resolver from "./resolve"

import * as t_serialize from "./serialize"
import * as t_deserialize from "./deserialize"

import * as t_marshall from "./marshall"
import * as t_unmarshall from "./unmarshall"

import { $$ as op_append_element } from "pareto-standard-operations/dist/implementation/operations/pure/list/append_element"
import { $$ as op_filter_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/filter"
import { Signature } from "../../../../../interface/algorithms/transformations/schema/exupery_implementation/main"


export const Schema_Tree = (
    $: _in.Schema_Tree,
    $p: {
        'path': _et.Array<string>,
    }
): _out.Module_Set.D<_edata.Source_Location> => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => {
                const imports = $.imports
                return m.set(op_filter_dictionary<_out.Module_Set.D<_edata.Source_Location>>(
                    _ea.dictionary_literal({
                        // "migration boilerplate.ts": pa.set(_migration_boilerplate.Types($.types, {
                        //     'key': key,
                        //     'imports': $.imports,
                        //     'constrained': $.complexity[0] === 'constrained'
                        // })),

                        "resolve.ts": _ea.cc($.complexity, ($) => {
                            switch ($[0]) {
                                case 'constrained': return _ea.ss($, ($) => _ea.set(t_resolver.Resolvers($.resolvers, {
                                    'path': $p.path,
                                    'imports': imports
                                })))
                                case 'unconstrained': return _ea.ss($, ($) => _ea.not_set())
                                default: return _ea.au($[0])
                            }
                        }),
                        "marshall.ts": _ea.set(t_marshall.Schema($, {
                            'path': $p.path,
                            'imports': $.imports,
                            'constrained': $.complexity[0] === 'constrained'
                        })),
                        "unmarshall.ts": _ea.set(t_unmarshall.Schema($, {
                            'path': $p.path,
                            'imports': $.imports,
                            'constrained': $.complexity[0] === 'constrained'
                        })),

                        "serialize.ts": _ea.set(t_serialize.Schema($, {
                            'path': $p.path,
                            'imports': $.imports,
                            'constrained': $.complexity[0] === 'constrained'
                        })),
                        "deserialize.ts": _ea.set(t_deserialize.Schema($, {
                            'path': $p.path,
                            'imports': $.imports,
                        })),
                    }))
                )
            })
            case 'set': return _ea.ss($, ($): _out.Module_Set.D<_edata.Source_Location> => Schemas(
                $,
                {
                    'path': $p.path,
                }
            ))
            default: return _ea.au($[0])
        }
    })
}

export const Schemas = (
    $: _in.Schemas,
    $p: {
        'path': _et.Array<string>,
    }
): _out.Module_Set.D<_edata.Source_Location> => {
    return m.set($.dictionary.map(($, key) => Schema_Tree($, {
        'path': op_append_element($p.path, { 'element': key })
    })))
}
