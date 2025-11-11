#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as p_compile_temp_schemas } from "../implementation/algorithms/procedures/unguaranteed/compile_temp_schemas"

import { $$ as p_write_file } from "exupery-resources/dist/implementation/algorithms/procedures/unguaranteed/write_file"
import { $$ as p_make_directory } from "exupery-resources/dist/implementation/algorithms/procedures/unguaranteed/make_directory"
import { $$ as p_remove } from "exupery-resources/dist/implementation/algorithms/procedures/unguaranteed/remove"


_eb.run_unguaranteed_main_procedure(($p, $r) => {
    return p_compile_temp_schemas($p, {
        'procedures': {
            'write file': p_write_file,
            'make directory': p_make_directory,
            'remove': p_remove,
        }
    })
})
