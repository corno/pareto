import * as _er from "exupery-core-resources"

import * as _in from "pareto-fountain-pen/dist/generated/interface/schemas/block/unconstrained"

import * as t_block_to_lines from "pareto-fountain-pen/dist/transformations/block/lines"

export const Block = (
    $: _in.Block,
    $p: {
        'indentation': string,
        'channel': 'log' | 'error'
    }
): void => {
    const channel = $p.channel === 'log' ? _er.temp_resources.console.log : _er.temp_resources.console.error
    t_block_to_lines.Block(
        $,
        {
            'indentation': $p.indentation
        }
    ).__for_each(($) => {
        channel($)
    })
}