import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"


export const $: g_.Types<pd.Source_Location> = types(
    {
        "Grammar": type(t.group({
            "dynamic tokens": prop(t.dictionary(t.group({

            }))),
            "types": prop(t.dictionary(t.group({
                "node": prop(t.component("Type Node")),
            }))),
        })),
        "Type Node": type(t.group({
            "type": prop(t.state_group({
                "group": tstate(t.group({
                    "properties": prop(t.dictionary(t.group({
                        "prefix": prop(t.component("Fixed token sequence")),
                        "node": prop(t.component_cyclic("Type Node")),
                    }),)), //this one must be ordered
                })),
                "state group": tstate(t.group({ // 'state group prefix' ( 'state a prefix' ... | 'state b prefix' ... )
                    "prefix": prop(t.component("Fixed token sequence")),
                    "states": prop(t.dictionary(t.group({
                        "prefix": prop(t.component("Fixed token sequence")),
                        "node": prop(t.component_cyclic("Type Node")),
                    }))),
                })),
                "list": tstate(t.group({ // 'prefix' ( ... ( 'separator' ...  )* )? 'suffix'
                    "prefix": prop(t.component("Fixed token sequence")),
                    "elements": prop(t.component_cyclic("Type Node")),
                    "separator": prop(t.component("Fixed token sequence")),
                    "suffix": prop(t.component("Fixed token sequence")),
                })),
                "optional": tstate(t.group({ // 'prefix' ( ')
                    "set": prop(t.group({
                        "prefix": prop(t.component("Fixed token sequence")),
                        "node": prop(t.component_cyclic("Type Node")),
                    })),
                    "not set": prop(t.group({
                        "tokens": prop(t.component("Fixed token sequence")),
                    })),
                })),
                "text": tstate(t.group({
                    "prefix": prop(t.component("Fixed token sequence")),
                    "dynamic token": prop(t.text_local(text('single line'))), //FIXME this should be a reference to a dynamic token
                })),
                "component": tstate(t.group({
                    "prefix": prop(t.component("Fixed token sequence")),
                    "type": prop(t.text_local(text('single line'))), //FIXME this should be a reference to a type
                })),
            })),
        })),
        "Fixed token sequence": type(t.list(t.group({ // ( 'a' 'b' 'c' )
            "type": prop(t.state_group({
                "alternatives": tstate(t.dictionary(t.component_cyclic("Fixed token sequence"))), // ( 'a' | 'b' | 'c')
                "token": tstate(t.text_local(text('single line'))), // 'a'
                "optional": tstate(t.component_cyclic("Fixed token sequence")), // 'a'?
            })),
        }))),
    }
)