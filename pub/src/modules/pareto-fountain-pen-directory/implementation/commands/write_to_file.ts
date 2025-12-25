
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as t_block_2_lines from "pareto-fountain-pen/dist/implementation/transformers/schemas/block/lines"

import * as D from "../../interface/to_be_generated/temp_types"
import * as d_make_directory from "exupery-resources/dist/interface/generated/pareto/schemas/make_directory/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"

import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/implementation/serializers/schemas/list_of_texts"

import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import { replace_space_in_context_path } from '../transformers/schemas/path/path'

import * as resources_exupery from "exupery-resources/dist/interface/resources"

export type Query_Resources = null

export type Command_Resources = {
    'make directory': resources_exupery.commands.make_directory
    'write file': resources_exupery.commands.write_file
}

export type Command = _et.Command<D.File_Error, D.File_Parameters>


export const $$: _et.Command_Procedure<Command, Command_Resources, Query_Resources> = _easync.create_command_procedure(
    ($p, $cr) => [
        _easync.p.sequence<D.File_Error>([
            $cr['make directory'].execute(
                $p['directory path'],
                ($) => ['make directory', $],
            ),
            $cr['write file'].execute(
                {
                    'path': _ea.cc(
                        t_path_to_path.extend_node_path($p['directory path'], { 'addition': $p.filename }),
                        ($) => $p['escape spaces in path']
                            ? replace_space_in_context_path($)
                            : $,
                    ),
                    'data': op_join_list_of_texts(
                        t_block_2_lines.Group($p.group, { 'indentation': $p.indentation }).map(($) => $ + $p.newline),
                    ),
                },
                ($) => ['write file', $],
            )
        ])
    ]
)