import * as pt from 'exupery-core-types'

import * as d_astn_token from "astn/dist/generated/interface/schemas/token/data_types/unconstrained"
import * as d_astn_ast from "astn/dist/generated/interface/schemas/ast/data_types/unconstrained"

import * as d_schema from "./generated/interface/schemas/schema/data_types/resolved"

export type Document = {
    'content': Node
}

export type Document_Range = {
    'document': string,
    'range': d_astn_token.Range

}

export type Duplicate_Entry = {
    'range': Document_Range
    'node': Node
}

// export type Key_Value_Pair = {
//     'node': Node
// }

export type Property =
    | ['missing', Document_Range]
    | ['unique', Node]
    | ['multiple', pt.Array<Duplicate_Entry>]

export type Node = {
    'value': d_astn_ast.Value
    'type': Node_Type //the type is determined by the definition
}

export type Node_Type =
    | ['number', Number]
    | ['boolean', Boolean]
    | ['list', List]
    | ['nothing', Nothing]
    | ['reference', Reference]
    | ['component', Component]
    | ['dictionary', Dictionary]
    | ['group', Group]
    | ['identifier value pair', Identifier_Value_Pair]
    | ['optional', Optional]
    | ['state', State]
    | ['text', Text]
    | ['type parameter', string]

export type State = {
    'status': State_Status
}

export type State_Status =
    | ['valid', {
        'node': Node,

    }]
    | ['more than 2 elements', Document_Range]
    | ['missing state name', Document_Range]
    | ['state is not a string', Document_Range]
    | ['missing value', Document_Range]
    | ['unknown state', {
        'range': Document_Range
        'found': string
        'expected': pt.Dictionary<null>
    }]

export type Identifier_Value_Pair = {
  'definition': d_schema.Type_Node.SG.identifier_value_pair
}

export type Optional = {
    'definition': d_schema.Type_Node.SG.optional
    'status':
    | ['valid', 
        | ['set', Node]
        | ['not set', null]
    ]
    | ['invalid value type', Document_Range]
}
export type List = {
    'definition': d_schema.Type_Node.SG.list
}

export type Reference = {
    'definition': d_schema.Type_Node.SG.reference
    'status':
    | ['valid', null] //FIXME
    | ['invalid', Document_Range]
}

export type Component = {
    'definition': d_schema.Type_Node.SG.component
    'node': Node
}

export type Boolean = {
    'definition': d_schema.Type_Node.SG._boolean
    'status':
    | ['valid', {
        'range': Document_Range
        'correct string type': boolean
    }]
    | ['invalid', Document_Range]
}
export type Nothing = {
    'definition': d_schema.Type_Node.SG.nothing
    'status':
    | ['valid', null]
    | ['invalid value type', Document_Range]
}

export type Text = {
    'definition': d_schema.Type_Node.SG.text
    'status':
    | ['valid', null]
    | ['invalid value type', Document_Range]
}

export type Number = {
    'definition': d_schema.Type_Node.SG._number
    'status':
    | ['valid', {
        'range': Document_Range
        'correct string type': boolean
    }]
    | ['invalid', Document_Range]
}

export type Dictionary = {
    'definition': d_schema.Type_Node.SG.dictionary
    'status':
    | ['valid', pt.Dictionary<Entry>]
    | ['invalid', Document_Range]
}

export type Entry =
    | ['unique', Node]
    | ['multiple', pt.Array<Duplicate_Entry>]

export type Group = {
    'definition': d_schema.Type_Node.SG.group
    'type': Group_Type
}

export type Group_Type =
    | ['indexed', Indexed_Group]
    | ['ordered', {}]
    | ['invalid', Document_Range]

export type Indexed_Group = {
    'properties': pt.Dictionary<Property>
    'superfluous entries': pt.Dictionary<pt.Array<Document_Range>>
}