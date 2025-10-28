import * as pd from 'exupery-core-data'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Globals<pd.Source_Location> = globals(
    'constrained',
    {
        "Bestandsnaam": text('single line'),
        "Wachtwoord": text('single line'),
        "Benaming": text('single line'),
        "Omschrijving": text('multi line'),
    },
    {
        "Bedrag": n.integer(2),
        "Dagen": n.positive_natural(0),
        "Datum": n.integer(0),
        "Promillage": n.natural(0),

    },
)


