import * as _pi from 'pareto-core-interface'

import * as d_astn_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/target"
import * as d_astn_ast from "astn/dist/interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"

import * as d_schema from "../generated/pareto/schemas/schema/data_types/source"

export type Document = {
    'content': Node
}

export type Entry_Data = {
    'key': d_astn_ast.String
    'node': Optional_Node
}

export type Optional_Node = _pi.Optional_Value<Node>

// export type Key_Value_Pair = {
//     'node': Node
// }

export type Property =
    | ['missing', d_astn_token.Range]
    | ['unique', Entry_Data]
    | ['multiple', _pi.List<Entry_Data>]

export type Node = {
    'definition': d_schema.Type_Node
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
    | ['optional', Optional]
    | ['state', Node_Type_SG_State]
    | ['text', Text]
    | ['type parameter', string]

export type Node_Type_SG_State = {
    'definition': d_schema.Type_Node.SG.state_group
    'found value type': Node_Type_SG_State_found_value_type
}

export type State_Definition_Found = {
    'definition': d_schema.Type_Node.SG.state_group.D
    'node': Node
}

export type Node_Type_SG_State_found_value_type_valid_value_type_SG_state = {
    'value substatus': Node_Type_SG_State_found_value_type_valid_value_type_SG_state_value_substatus
}

export type Node_Type_SG_State_found_value_type_valid_value_type_SG_state_value_substatus =
    | ['missing data', d_astn_ast.Structural_Token]
    | ['set', Node_Type_SG_State_found_value_type_valid_value_type_SG_state_value_substatus_SG_set]

export type Node_Type_SG_State_found_value_type_valid_value_type_SG_state_value_substatus_SG_set = {
    'value': d_astn_ast.Concrete_Value.SG.state.status.SG._set
    'found state definition': _pi.Optional_Value<State_Definition_Found>
}

export type Node_Type_SG_State_found_value_type_valid = {
    'value type':
    | ['state', Node_Type_SG_State_found_value_type_valid_value_type_SG_state]
    // | ['polyfill', { -> [ "state_name", ... ]
    //     'xx': {
    //         'node': Node,

    //     }
    // }]
}

export type Node_Type_SG_State_found_value_type =
    | ['valid', Node_Type_SG_State_found_value_type_valid]
    | ['invalid', d_astn_token.Range]

// export type State_Error =
//     | ['more than 2 elements', d_astn_token.Range]
//     | ['missing state name', d_astn_token.Range]
//     | ['state is not a string', d_astn_token.Range]
//     | ['missing value', d_astn_token.Range]
//     | ['unknown state', {
//         'range': d_astn_token.Range
//         'found': string
//         'expected': pt.Dictionary<null>
//     }]

export type Optional = {
    'definition': d_schema.Type_Node.SG.optional
    'found value type':
    | ['valid',
        | ['set', {
            'value': d_astn_ast.Concrete_Value.SG.set_optional_value
            'child node': Node
        }]
        | ['not set', {
            'value': d_astn_ast.Concrete_Value.SG.not_set
        }]
    ]
    | ['invalid', d_astn_token.Range]
}
export type List = {
    'definition': d_schema.Type_Node.SG.list
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Concrete_Value.SG.ordered_collection
        'elements': _pi.List<Node>
    }]
    | ['invalid', d_astn_token.Range]
}

export type Reference = {
    'definition': d_schema.Type_Node.SG.reference
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Concrete_Value.SG.text
    }] //FIXME
    | ['invalid', d_astn_token.Range]
}

export type Component = {
    'definition': d_schema.Type_Node.SG.component
    'node': Node
}

export type Boolean = {
    'definition': d_schema.Type_Node.SG._boolean
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Concrete_Value.SG.text
        'range': d_astn_token.Range
        'correct string type': boolean
    }]
    | ['invalid', d_astn_token.Range]
}
export type Nothing = {
    'definition': d_schema.Type_Node.SG.nothing
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Concrete_Value.SG.not_set
    }]
    | ['invalid', d_astn_token.Range]
}

export type Text = {
    'definition': d_schema.Type_Node.SG.text
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Concrete_Value.SG.text
    }]
    | ['invalid', d_astn_token.Range]
}

export type Number = {
    'definition': d_schema.Type_Node.SG._number
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Concrete_Value.SG.text
        'range': d_astn_token.Range
        'correct string type': boolean
    }]
    | ['invalid', d_astn_token.Range]
}

export type Dictionary = {
    'definition': d_schema.Type_Node.SG.dictionary
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Concrete_Value.SG.indexed_collection
        'entries': _pi.Dictionary<Entry>
    }]
    | ['invalid', d_astn_token.Range]
}

export type Entry =
    | ['unique', Optional_Node]
    | ['multiple', _pi.List<Entry_Data>]

export type Group = {
    'definition': d_schema.Type_Node.SG.group
    'found value type': Group_Found_Value_Type
}

export type Group_Found_Value_Type =
    | ['valid', Group_Type]
    | ['invalid', d_astn_token.Range]

export type Group_Type =
    | ['indexed', Indexed_Group]
    | ['ordered', Ordered_Group]

export type Ordered_Group = {
    'value': d_astn_ast.Concrete_Value.SG.ordered_collection
    'content': Group_Content
}

export type Indexed_Group = {
    'value': d_astn_ast.Concrete_Value.SG.indexed_collection
    'content': Group_Content
}

export type Group_Content = {
    'properties': _pi.Dictionary<Property>
    'superfluous entries': _pi.Dictionary<_pi.List<d_astn_token.Range>>

}