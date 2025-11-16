#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import * as d_resources from "../implementation/algorithms/procedures/compile_temp_schemas"

import { $$ as p_compile_temp_schemas } from "../implementation/algorithms/procedures/compile_temp_schemas"

import { $$ as procedure } from "../implementation/algorithms/procedures/compile_temp_schemas"

_eb.run_main_procedure(
    ($r) => {
        return procedure({
            'commands': {
                'write file': $r.commands['write file'],
                'make directory': $r.commands['make directory'],
                'remove': $r.commands.remove,
                'copy': $r.commands.copy,
                'log': $r.commands.log,
                'log error': $r.commands['log error']
            }
        })
    },
)