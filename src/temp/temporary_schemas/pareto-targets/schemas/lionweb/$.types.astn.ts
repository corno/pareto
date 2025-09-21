import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "SerializationChunk": type(t.group({
            "serializationFormatVersion": t.text_global("String"),
            "languages": t.list(t.group({
                "key": t.text_global("Id"),
                "version": t.text_global("String"),
            })),
            "nodes": t.list(t.group({
                "id": t.text_global("Id"),
                "parent": t.optional(t.text_global("String")),
                "annotations": t.list(t.text_global("Id")),
                "classifier": t.component("MetaPointer"),
                "containments": t.list(t.group({
                    "containment": t.component("MetaPointer"),
                    "children": t.list(t.text_global("Id")),
                })),
                "properties": t.list(t.group({
                    "value": t.text_global("Id"),
                    "property": t.component("MetaPointer")
                })),
                "references": t.list(t.group({
                    "targets": t.list(t.group({
                        "reference": t.text_global("Id"),
                        "resolveInfo": t.text_global("String"),
                    })),
                    "reference": t.component("MetaPointer")
                })),
            })),
        })),
        
        "MetaPointer": type(t.group({
            "language": t.text_global("Id"),
            "version": t.text_global("String"),
            "key": t.text_global("Id"),
        })),

        "SerializationChunks": type(t.dictionary(t.component("SerializationChunk"))),
    }
)


