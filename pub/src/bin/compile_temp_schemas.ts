#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import * as d_resources from "../implementation/commands/compile_temp_schemas"

import { $$ as p_compile_temp_schemas } from "../implementation/commands/compile_temp_schemas"
import { $$ as p_write_to_directory } from "../modules/pareto-fountain-pen-directory/implementation/commands/write_to_directory"

import { $$ as procedure } from "../implementation/commands/compile_temp_schemas"

_eb.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'make directory': $r.commands['make directory'],
                'remove': $r.commands.remove,
                'copy': $r.commands.copy,
                'log': $r.commands.log,
                'log error': $r.commands['log error'],
                'write to directory': p_write_to_directory(
                    {
                        'make directory': $r.commands['make directory'],
                        'remove': $r.commands.remove,
                        'write file': $r.commands['write file'],
                    },
                    null,
                )
            },
            null,
        )
    },
)