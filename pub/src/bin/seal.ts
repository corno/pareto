#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/commands/seal"

import * as d_resources from "../implementation/commands/seal"

_eb.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'log error': $r.commands['log error']
            },
            null,
        )
    },
)
