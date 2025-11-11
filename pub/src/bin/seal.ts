#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/unguaranteed/seal"

import * as d_resources from "../implementation/algorithms/procedures/unguaranteed/seal"

_eb.run_unguaranteed_main_procedure<d_resources.Resources>(
    ($r) => {
        return {
            'procedures': {
                'log error': $r.procedures['log error']
            }
        }
    },
    procedure
)
