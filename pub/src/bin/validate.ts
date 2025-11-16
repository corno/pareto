#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/validate"

import * as d_resources from "../implementation/algorithms/procedures/validate"

_eb.run_main_procedure(
    ($r) => {
        return procedure(null)
    },
)
