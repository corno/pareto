import * as pd from 'exupery-core-data'

import {
    signatures, sig, lookup_parameter, value_parameter,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Resolve_Logic.signatures<pd.Source_Location> = signatures(
    {
        "Text Type": sig.local({}, {}),
        "Globals": sig.local({}, {}),

        "Group": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling types": lookup_parameter("Types"),
                "possibly circular dependent sibling types": lookup_parameter("Types", 'cyclic'),
            }
        ),

        "Dictionary": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling types": lookup_parameter("Types"),
                "possibly circular dependent sibling types": lookup_parameter("Types", 'cyclic'),
            }
        ),

        "Type Node": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling types": lookup_parameter("Types"),
                "possibly circular dependent sibling types": lookup_parameter("Types", 'cyclic'),
            }
        ),

        "Type": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling types": lookup_parameter("Types"),
                "possibly circular dependent sibling types": lookup_parameter("Types", 'cyclic'),
            }
        ),

        "Schemas": sig.local(
            {},
            {
                "sibling schemas": lookup_parameter("Schemas", 'stack'),
            }
        ),

        "Schema Tree": sig.local(
            {},
            {
                "sibling schemas": lookup_parameter("Schemas", 'stack'),
            }
        ),
        "Schema": sig.same_as("Schemas"),
        "Imports": sig.same_as("Schemas"),

        "Types": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {},
        ),

    },
)