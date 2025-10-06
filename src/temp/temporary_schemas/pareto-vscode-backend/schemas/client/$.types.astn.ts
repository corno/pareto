import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
	text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Position": type(t.group({
            "line": t.number_local(n.natural()),
            "character": t.number_local(n.natural()),
        })),

        "Range": type(t.group({
			"start": t.component("Position"),
			"end": t.component("Position"),
		})),

		"Format Options": type(t.group({
			"insert spaces": t.boolean(),
			"preserve delimiters": t.boolean(),
			"preserve final newline state": t.boolean(),
			"preserve commas": t.boolean(),
			"indent string": t.text_local(text('single line')),
		})),

		"Text Edit": type(t.state_group({
			"replace": t.component("Replace"),
			"delete": t.group({
				"range": t.component("Range"),
			}),
			"insert": t.group({
				"location": t.component("Position"),
				"text": t.text_local(text('multi line')),
			}),
		})),

		"Replace": type(t.group({
			"range": t.component("Range"),
			"text": t.text_local(text('multi line')),
		})),

		"Format Result": type(t.list(t.component("Text Edit"))),

		"Format Error": type(t.group({
			"message": t.text_local(text('single line')),
		})),

		"Format Parameters": type(t.group({
			"content": t.text_local(text('multi line')),
			"options": t.component("Format Options"),
		})),

		"Sort Alphabetically Parameters": type(t.group({
			"content": t.text_local(text('multi line')),
			"position": t.component("Position"),
		})),
	}
)


