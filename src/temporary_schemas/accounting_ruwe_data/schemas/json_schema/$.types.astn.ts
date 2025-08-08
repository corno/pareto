import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Document": type(t.group({
            "$schema": t.text_global("url"),
            "$id": t.text_global("url"),
            "type": t.component("Type"),
        })),

        "Type": type(t.state_group({
            "array": t.group({
                "minItems": t.optional(t.number_global("amount")),
                "maxItems": t.optional(t.number_global("amount")),
                "uniqueItems": t.optional(t.boolean()),
                "oneOf": t.optional(t.list(t.component_cyclic("Type"))),
                "maxContains": t.optional(t.number_global("amount")),
                "minContains": t.optional(t.number_global("amount")),
            }),
            "number": t.group({
                "multipleOf": t.optional(t.number_global("amount")),
                "minimum": t.optional(t.number_global("amount")),
                "maximum": t.optional(t.number_global("amount")),
                "exclusiveMinimum": t.optional(t.number_global("amount")),
                "exclusiveMaximum": t.optional(t.number_global("amount")),
            }),
            "object": t.group({
                "minProperties": t.optional(t.number_global("amount")),
                "maxProperties": t.optional(t.number_global("amount")),
                "required": t.optional(t.list(t.text_global("identifier"))),
                "dependentRequired": t.optional(t.list(t.text_global("identifier"))),
                
                // "properties": t.optional(t.dictionary(t.component("Type"))),
                // "additionalProperties": t.optional(t.component("Type")),
                // "patternProperties": t.optional(t.dictionary(t.component("Type"))),
                // "propertyNames": t.optional(t.component("Type")),
                // "dependencies": t.optional(t.dictionary(t.component("Type"))),
                // "propertyDependencies": t.optional(t.dictionary(t.list(t.text_global("identifier")))),
                // "unevaluatedProperties": t.optional(t.component("Type")),
                // "unevaluatedItems": t.optional(t.component("Type")),
                // "additionalItems": t.optional(t.component("Type")),
                // "minContains": t.optional(t.number_global("amount")),
                // "maxContains": t.optional(t.number_global("amount")),
            }),
            "string": t.group({
                "minLength": t.optional(t.number_global("amount")),
                "maxLength": t.optional(t.number_global("amount")),
                "pattern": t.optional(t.text_global("regex")),
            }),
        }))
    }
)


