import * as pd from 'exupery-core-data'
import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'

import * as _out$ from "../../generated/interface/core/unresolved"

import * as _in from "../../generated/interface/schemas/module/data_types/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/implementation/unresolved"

import { Schemas } from "../schema/exupery_implementation/main"
export const Module = ($: _in.Module): _out.Module_Set<pd.Source_Location> => {
    return {
        'location': pd.get_location_info(1),
        'dictionary': pa.dictionary_literal<_out.Module_Set.D<pd.Source_Location>>({
            "schemas": Schemas($.schemas)
        }).map(($) => ({
            'location': pd.get_location_info(1),
            'entry': $
        }))
    }
}