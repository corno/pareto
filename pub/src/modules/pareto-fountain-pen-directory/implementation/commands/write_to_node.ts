
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as D from "../../interface/to_be_generated/temp_types"

import * as resources_exupery from "exupery-resources/dist/interface/resources"
import * as resources from "../../interface/resources"

export type Query_Resources = null

export type Command_Resources = {
    'remove': resources_exupery.commands.remove
    'make directory': resources_exupery.commands.make_directory
    'write file': resources_exupery.commands.write_file
}

import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"

import { $$ as p_write_to_file } from "./write_to_file"
import { $$ as p_write_to_directory } from "./write_to_directory"

export const $$: _et.Command_Procedure<resources.commands.write_to_node, Command_Resources, Query_Resources> = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _ea.cc($p.node, ($) => {
            switch ($[0]) {
                case 'file':
                    return _ea.ss($, ($) => {
                        return p_write_to_file($cr, $qr).execute(
                            {
                                'escape spaces in path': $p['escape spaces in path'],
                                'group': $,
                                'directory path': $p.path,
                                'filename': $p.key,
                                'indentation': $p.indentation,
                                'newline': $p.newline
                            },
                            ($): D.Node_Error => ['file', $],
                        )
                    })
                case 'directory':
                    return _ea.ss($, ($) => {
                        return p_write_to_directory($cr, $qr).execute(
                            {
                                'escape spaces in path': $p['escape spaces in path'],
                                'directory': $,
                                'path': t_path_to_path.extend_node_path($p.path, { 'addition': $p.key }),
                                'indentation': $p.indentation,
                                'newline': $p.newline,
                                'remove before creating': false,
                            },
                            ($): D.Node_Error => ['directory', $],
                        )
                    })
                default: return _ea.au($[0])
            }
        })
    ]
)