
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'


import * as resources_exupery from "exupery-resources/dist/interface/resources"
import * as resources from "../../interface/resources"

import * as D from "../../interface/to_be_generated/temp_types"

export type Query_Resources = null

export type Command_Resources = {
    'remove': resources_exupery.commands.remove
    'make directory': resources_exupery.commands.make_directory
    'write file': resources_exupery.commands.write_file
}


import { $$ as p_write_to_node } from "./write_to_node"
import { replace_space_in_context_path } from "../transformations/path/path"



export const $$: _et.Command_Procedure<resources.commands.write_to_directory, Command_Resources, Query_Resources> = _easync.create_command_procedure(
    ($p, $cr) => [
        _easync.p.sequence<D.Directory_Error>([
            _easync.p.if_(
                $p['remove before creating'],
                [
                    $cr.remove.execute(
                        {
                            'path': $p['escape spaces in path']
                                ? replace_space_in_context_path($p.path)
                                : $p.path,
                            'error if not exists': false
                        },
                        ($) => ['remove', $],
                    )
                ]
            ),
            _easync.p.dictionary.parallel(
                $p.directory,
                ($, key) => [
                    p_write_to_node(
                        {
                            'remove': $cr.remove,
                            'make directory': $cr['make directory'],
                            'write file': $cr['write file'],
                        },
                        null,
                    ).execute(
                        {
                            'escape spaces in path': $p['escape spaces in path'],
                            'node': $,
                            'path': $p['escape spaces in path']
                                ? replace_space_in_context_path($p.path)
                                : $p.path,
                            'key': key,
                            'indentation': $p.indentation,
                            'newline': $p.newline,
                            'remove before creating': false,
                        },
                        ($) => $,
                    ),
                ],
                ($): D.Directory_Error => ['nodes', $]
            )
        ])
    ]
)