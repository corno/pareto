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

        "Diagnostic Severity": type(t.state_group({
            "error": t.group({}),
            "warning": t.group({}),
            "information": t.group({}),
            "hint": t.group({}),
        })),

        "Position": type(t.group({
            "line": t.number_local(n.natural()),
            "character": t.number_local(n.natural()),
        })),

        "Range": type(t.group({
            "start": t.component("Position"),
            "end": t.component("Position"),
        })),

        "Diagnostic": type(t.group({
            "severity": t.component("Diagnostic Severity"),
            "range": t.component("Range"),
            "message": t.text_local(text('single line')),
            "related information": t.optional(t.list(t.group({
                "location": t.group({
                    "file path": t.text_local(text('single line')),
                    "range": t.component("Range"),
                }),
                "message": t.text_local(text('single line')),
            }))),
        })),

        "Diagnostics": type(t.list(t.component("Diagnostic"))),

        "Document Data": type(t.group({
            "file path": t.text_local(text('single line')),
            "content": t.text_local(text('multi line')),
        })),

        "Hover Texts": type(t.list(t.text_local(text('single line')))),

        "Optional Hover Texts": type(t.optional(t.component("Hover Texts"))),

        "On Hover Result": type(t.group({
            "contents": t.group({
                "hover texts": t.component("Optional Hover Texts"),
            }),
        })),

        "Completion Items": type(t.list(t.group({
            "label": t.text_local(text('single line')),
        }))),

        "Optional Completion Items": type(t.optional(t.component("Completion Items"))),

        "On Completion Result": type(t.group({
            "completion items": t.component("Completion Items"),
        })),

        "On Validate Document Result": type(t.group({
            "diagnostics": t.component("Diagnostics"),
        })),

        "Convert To JSON Parameters": type(t.group({
            "content": t.text_local(text('multi line')),
        })),

        "Seal Parameters": type(t.group({
            "content": t.text_local(text('multi line')),
        })),

        "On Completion Parameters": type(t.group({
            "content": t.text_local(text('multi line')),
            "file path": t.text_local(text('single line')),
            "position": t.component("Position"),
            "indent": t.text_local(text('single line')),
        })),

        "On Hover Parameters": type(t.group({
            "content": t.text_local(text('multi line')),
            "file path": t.text_local(text('single line')),
            "position": t.component("Position"),
        })),

        "Validate Document Parameters": type(t.group({
            "content": t.text_local(text('multi line')),
            "file path": t.text_local(text('single line')),
            "tab size": t.number_local(n.natural()),
        })),
    }
)