import * as _edata from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _in from "../../../generated/interface/schemas/schema/data_types/source"
import * as _out from "exupery/dist/generated/interface/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/generated/interface/schemas/interface/data_types/target"

import { m, } from "exupery/dist/shorthands/implementation"

import * as t_migration_boilerplate from "./migrate_boilerplate"
import * as t_resolver from "./resolve"
import * as t_marshall from "./marshall"
import * as t_unmarshall from "./unmarshall"

import * as operations from "pareto-standard-operations"

const op = {
    'filter dictionary': operations.pure.dictionary.filter,
    'append': operations.pure.list['append element'],
}

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
                return m.set(op['filter dictionary']<_out.Module_Set.D<_edata.Source_Location>>(
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
        'path': op.append($p.path, { 'element': key })
    })))
}
