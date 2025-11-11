#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/unguaranteed/validate"

import * as d_resources from "../implementation/algorithms/procedures/unguaranteed/validate"

_eb.run_unguaranteed_main_procedure<d_resources.Resources>(
    ($r) => {
        return null
    },
    procedure
)
