#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ } from "../procedures/seal"

_eb.run_unguaranteed_main_procedure($$)
