#!/usr/bin/env node

import * as _eb from 'exupery-core-bin'

import { $$ } from "../procedures/serialize_schemas"

_eb.run_unguaranteed_procedure($$)
