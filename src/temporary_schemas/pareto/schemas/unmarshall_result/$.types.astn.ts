import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"


// export type Document = {
//     'content': Node
// }

// export type Duplicate_Entry = {
//     'range': astn.d_ast.Range
//     'node': Node
// }

// // export type Key_Value_Pair = {
// //     'node': Node
// // }

// export type Property =
//     | ['missing', astn.d_ast.Range]
//     | ['unique', Node]
//     | ['multiple', pt.Array<Duplicate_Entry>]

// export type Node =
//     | ['number', Number]
//     | ['boolean', Boolean]
//     | ['list', List]
//     | ['nothing', Nothing]
//     | ['reference', Reference]
//     | ['component', Component]
//     | ['dictionary', Dictionary]
//     | ['group', Group]
//     | ['identifier value pair', Identifier_Value_Pair]
//     | ['optional', Optional]
//     | ['state', State]
//     | ['text', Text]
//     | ['type parameter', string]

// export type State = {
//     'status': State_Status
// }

// export type State_Status =
//     | ['valid', {
//         'node': Node,

//     }]
//     | ['more than 2 elements', astn.d_ast.Range]
//     | ['missing state name', astn.d_ast.Range]
//     | ['state is not a string', astn.d_ast.Range]
//     | ['missing value', astn.d_ast.Range]
//     | ['unknown state', {
//         'range': astn.d_ast.Range
//         'found': string
//         'expected': pt.Dictionary<null>
//     }]

// export type Identifier_Value_Pair = {
//   'definition': def.Type_Node.SG.identifier_value_pair
// }

// export type Optional = {
//     'definition': def.Type_Node.SG.optional
// }
// export type List = {
//     'definition': def.Type_Node.SG.list
// }

// export type Reference = {
//     'definition': def.Type_Node.SG.reference
// }

// export type Component = {
//     'definition': def.Type_Node.SG.component
// }

// export type Boolean = {
//     'definition': def.Type_Node.SG._boolean
// }
// export type Nothing = {
//     'definition': def.Type_Node.SG.nothing
// }

// export type Text = {
//     'definition': def.Type_Node.SG.text
//     'status':
//     | ['valid', null]
//     | ['invalid value type', astn.d_ast.Range]
// }

// export type Number = {
//     'definition': def.Type_Node.SG._number
//     'status':
//     | ['valid', {
//         'range': astn.d_ast.Range
//         'correct string type': boolean
//     }]
//     | ['invalid', astn.d_ast.Range]
// }

// export type Dictionary = {
//     'definition': def.Type_Node.SG.dictionary
//     'status':
//     | ['valid', pt.Dictionary<Entry>]
//     | ['invalid', astn.d_ast.Range]
// }

// export type Entry =
//     | ['unique', Node]
//     | ['multiple', pt.Array<Duplicate_Entry>]

// export type Group = {
//     'definition': def.Type_Node.SG.group
//     'type': Group_Type
// }

// export type Group_Type =
//     | ['indexed', Indexed_Group]
//     | ['ordered', {}]
//     | ['invalid', astn.d_ast.Range]

// export type Indexed_Group = {
//     'properties': pt.Dictionary<Property>
//     'superfluous entries': pt.Dictionary<pt.Array<astn.d_ast.Range>>
// }

export const $: g_.Types<pd.Source_Location> = types(
    {
        // "Document": type(t.group({
        //     "content": t.component("Node"),
        // })),

        // "Node": type(t.state_group({
        //     "number": t.component("Number"),
        //     "boolean": t.component("Boolean"),
        //     "list": t.component("List"),
        //     "nothing": t.component("Nothing"),
        //     "reference": t.component("Reference"),
        //     "component": t.component("Component"),
        //     "dictionary": t.component("Dictionary"),
        //     "group": t.component("Group"),  
        //     "identifier value pair": t.component("Identifier_Value_Pair"),
        //     "optional": t.component("Optional"),
        //     "state": t.component("State"),
        //     "text": t.component("Text"),
        //     "type parameter": t.text_local(text('single line')),
        // })),

        // "NUmber": type(t.group({
        //     "definition": t.component("Type Node SG _number"),
        //     "status": t.state_group({
        //         "valid": t.group({
        //             "range": t.component("astn.d_ast Range"),
        //             "correct string type": t.boolean(),
        //         }),
        //         "invalid": t.component("astn.d_ast Range"),
        //     }),
        // })),
    }
)