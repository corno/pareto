import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as _in from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as t_block_to_lines from "pareto-fountain-pen/dist/implementation/transformers/schemas/block/lines"

import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"


// import { Signature } from "/interface/algorithms/procedures/guaranteed/console_error"


export type Parameters = {
    'group': _in.Group,
    'indentation': string,
}

import * as resources_exupery from "exupery-resources/dist/interface/resources"

export type Command = _et.Command<null, Parameters>

export type Procedure = _et.Command_Procedure<
    Command,
    {
        'log error': resources_exupery.commands.log_error
    },
    null
>

export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr) => [
        $cr['log error'].execute(
            {
                'lines': t_block_to_lines.Group(
                    $p.group,
                    {
                        'indentation': $p.indentation
                    }
                )
            },
            ($) => $,
        )
    ]
)