import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Document": type(t.group({
            "css": prop(t.text_local(text('multi line'))),
            "root": prop(t.component("Div")),
        })),

        "Div": type(t.group({
            "classes": prop(t.component("Classes")),
            "width": prop(t.optional(t.number_local(n.natural()))),
            "height": prop(t.optional(t.number_local(n.natural()))),
            "children": prop(t.list(t.group({
                "type": prop(t.state_group({
                    "div": tstate(t.component_cyclic("Div")),
                    "table": tstate(t.group({
                        "classes": prop(t.component("Classes")),
                        "children": prop(t.list(t.group({
                            "classes": prop(t.component("Classes")),
                            "type": prop(t.state_group({
                                "header": tstate(t.nothing()),
                                "body": tstate(t.nothing()),
                                "footer": tstate(t.nothing()),
                            })),
                            "rows": prop(t.list(t.group({
                                "classes": prop(t.component("Classes")),
                                "type": prop(t.state_group({
                                    "th": tstate(t.nothing()),
                                    "td": tstate(t.nothing()),
                                })),
                                "height": prop(t.optional(t.number_local(n.natural()))),
                                "cells": prop(t.list(t.group({
                                    "classes": prop(t.component("Classes")),
                                    "div": prop(t.component_cyclic("Div")),
                                }))),
                            }))),
                        }))),
                    })),
                    "span": tstate(t.component("Span")),
                    "label": tstate(t.group({
                        "classes": prop(t.component("Classes")),
                        "text": prop(t.text_local(text('single line'))),
                        "div": prop(t.component_cyclic("Div")),
                    })),
                    "img": tstate(t.group({
                        "classes": prop(t.component("Classes")),
                        "src": prop(t.text_local(text('single line'))),
                        "alt": prop(t.text_local(text('single line'))),
                        "width": prop(t.optional(t.number_local(n.natural()))),
                        "height": prop(t.optional(t.number_local(n.natural()))),
                    })),
                    "svg": tstate(t.group({
                        "classes": prop(t.component("Classes")),
                        "content": prop(t.text_local(text('multi line'))),
                        "width": prop(t.optional(t.number_local(n.natural()))),
                        "height": prop(t.optional(t.number_local(n.natural()))),
                    })),
                })),
            }))),
        })),

        "Classes": type(t.list(t.text_local(text('single line')))),

        "Span": type(t.group({
            "classes": prop(t.component("Classes")),
            "title": prop(t.optional(t.text_local(text('single line')))),
            "children": prop(t.list(t.group({
                "classes": prop(t.component("Classes")),
                "type": prop(t.state_group({
                    "span": tstate(t.component_cyclic("Span")),
                    "a": tstate(t.group({
                        "text": prop(t.text_local(text('single line'))),
                        "href": prop(t.text_local(text('single line'))),
                    })),
                    "p": tstate(t.group({
                        "text": prop(t.text_local(text('single line'))),
                    })),
                })),
            }))),
        })),
    }
)