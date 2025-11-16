#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/serialize_schemas"

import * as d_resources from "../implementation/algorithms/procedures/serialize_schemas"

_eb.run_main_procedure(
    ($r) => {
        return procedure({
            'procedures': {
                'write file': $r.commands['write file']
            }
        })
    },
)
