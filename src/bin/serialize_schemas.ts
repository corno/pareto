#!/usr/bin/env node

import * as _eb from 'exupery-core-bin'

import { $$ } from "../commands/serialize_schemas"

_eb.run_unsafe_program($$)
