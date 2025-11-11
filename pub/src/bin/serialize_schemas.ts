#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/unguaranteed/serialize_schemas"

import * as d_resources from "../implementation/algorithms/procedures/unguaranteed/serialize_schemas"

_eb.run_unguaranteed_main_procedure<d_resources.Resources>(
    ($r) => {
        return {
            'procedures': {
                'write file': $r.procedures['write file']
            }
        }
    },
    procedure
)
