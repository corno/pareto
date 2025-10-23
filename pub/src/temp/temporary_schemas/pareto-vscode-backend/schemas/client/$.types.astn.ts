import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
	text,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Position": type(t.group({
            "line": prop(t.number_local(n.natural())),
            "character": prop(t.number_local(n.natural())),
        })),

        "Range": type(t.group({
			"start": prop(t.component("Position")),
			"end": prop(t.component("Position")),
		})),

		"Format Options": type(t.group({
			"insert spaces": prop(t.boolean()),
			"preserve delimiters": prop(t.boolean()),
			"preserve final newline state": prop(t.boolean()),
			"preserve commas": prop(t.boolean()),
			"indent string": prop(t.text_local(text('single line'))),
		})),

		"Text Edit": type(t.state_group({
			"replace": tstate(t.component("Replace")),
			"delete": tstate(t.group({
				"range": prop(t.component("Range")),
			})),
			"insert": tstate(t.group({
				"location": prop(t.component("Position")),
				"text": prop(t.text_local(text('multi line'))),
			})),
		})),

		"Replace": type(t.group({
			"range": prop(t.component("Range")),
			"text": prop(t.text_local(text('multi line'))),
		})),

		"Format Result": type(t.list(t.component("Text Edit"))),

		"Format Error": type(t.group({
			"message": prop(t.text_local(text('single line'))),
		})),

		"Format Parameters": type(t.group({
			"content": prop(t.text_local(text('multi line'))),
			"options": prop(t.component("Format Options")),
		})),

		"Sort Alphabetically Parameters": type(t.group({
			"content": prop(t.text_local(text('multi line'))),
			"position": prop(t.component("Position")),
		})),
	}
)


