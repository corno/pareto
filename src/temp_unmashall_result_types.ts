import * as pt from 'exupery-core-types'

import * as d_astn_token from "astn/dist/generated/interface/schemas/token/unconstrained"

import * as d_schema from "./generated/interface/schemas/schema/data_types/resolved"

export type Document = {
    'content': Node
}

export type Duplicate_Entry = {
    'range': d_astn_token.Range
    'node': Node
}

// export type Key_Value_Pair = {
//     'node': Node
// }

export type Property =
    | ['missing', d_astn_token.Range]
    | ['unique', Node]
    | ['multiple', pt.Array<Duplicate_Entry>]

export type Node =
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
    | ['more than 2 elements', d_astn_token.Range]
    | ['missing state name', d_astn_token.Range]
    | ['state is not a string', d_astn_token.Range]
    | ['missing value', d_astn_token.Range]
    | ['unknown state', {
        'range': d_astn_token.Range
        'found': string
        'expected': pt.Dictionary<null>
    }]

export type Identifier_Value_Pair = {
  'definition': d_schema.Type_Node.SG.identifier_value_pair
}

export type Optional = {
    'definition': d_schema.Type_Node.SG.optional
}
export type List = {
    'definition': d_schema.Type_Node.SG.list
}

export type Reference = {
    'definition': d_schema.Type_Node.SG.reference
}

export type Component = {
    'definition': d_schema.Type_Node.SG.component
}

export type Boolean = {
    'definition': d_schema.Type_Node.SG._boolean
}
export type Nothing = {
    'definition': d_schema.Type_Node.SG.nothing
}

export type Text = {
    'definition': d_schema.Type_Node.SG.text
    'status':
    | ['valid', null]
    | ['invalid value type', d_astn_token.Range]
}

export type Number = {
    'definition': d_schema.Type_Node.SG._number
    'status':
    | ['valid', {
        'range': d_astn_token.Range
        'correct string type': boolean
    }]
    | ['invalid', d_astn_token.Range]
}

export type Dictionary = {
    'definition': d_schema.Type_Node.SG.dictionary
    'status':
    | ['valid', pt.Dictionary<Entry>]
    | ['invalid', d_astn_token.Range]
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
    | ['invalid', d_astn_token.Range]

export type Indexed_Group = {
    'properties': pt.Dictionary<Property>
    'superfluous entries': pt.Dictionary<pt.Array<d_astn_token.Range>>
}