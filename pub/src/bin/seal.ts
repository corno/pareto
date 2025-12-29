#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "../implementation/commands/seal"

import * as d_resources from "../implementation/commands/seal"

_pn.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'log error': $r.commands['log error']
            },
            null,
        )
    },
)
