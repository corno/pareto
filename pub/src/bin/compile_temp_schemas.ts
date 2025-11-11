#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import * as d_resources from "../implementation/algorithms/procedures/unguaranteed/compile_temp_schemas"

import { $$ as p_compile_temp_schemas } from "../implementation/algorithms/procedures/unguaranteed/compile_temp_schemas"

import { $$ as procedure } from "../implementation/algorithms/procedures/unguaranteed/compile_temp_schemas"

_eb.run_unguaranteed_main_procedure<d_resources.Resources>(
    ($r) => {
        return {
            'procedures': {
                'write file': $r.procedures['write file'],
                'make directory': $r.procedures['make directory'],
                'remove': $r.procedures.remove,
                'copy': $r.procedures.copy,
                'log': $r.procedures.log,
                'log error': $r.procedures['log error']
            }
        }
    },
    procedure
)