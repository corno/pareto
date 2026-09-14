import * as p_di from 'pareto-core/schema'
import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../schema.js"


export namespace sr {

    export const child = (
        module: string,
        schema: string,
    ): s_out.Schema_Reference => ['child', {
        'module': module,
        'schema': schema,
    }]

    export const sibling = (
        schema: string,
    ): s_out.Schema_Reference => ['sibling', schema]

    export const external = (
        pkg: string,
        schema: string,
    ): s_out.Schema_Reference => ['external', {
        'package': pkg,
        'schema': schema,
    }]

}