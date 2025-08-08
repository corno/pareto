import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unresolved"

// **** TYPES

export type _T_Benchmark<G_Source> = {
    readonly 'dense': boolean
    readonly 'resulting dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
    readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
}

export type _T_Constraint<G_Source> = {
    readonly 'selection': _T_Relative_Value_Selection<G_Source>
    readonly 'type': _i_core._T_State_Group<G_Source, 
        | readonly ['optional value', {
            readonly 'selected optional value': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.optional<G_Source>>
        }]
        | readonly ['state', {
            readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
        }]
    >
}

export type _T_Dictionary<G_Source> = {
    readonly 'node': _T_Type_Node<G_Source>
    readonly 'ordered': boolean
}

export type _T_Globals<G_Source> = {
    readonly 'complexity': _i_core._T_State_Group<G_Source, 
        | readonly ['constrained', null]
        | readonly ['unconstrained', null]
    >
    readonly 'number types': _i_core._T_Dictionary<G_Source, _T_Number_Type<G_Source>>
    readonly 'text types': _i_core._T_Dictionary<G_Source, _T_Text_Type<G_Source>>
}

export type _T_Group<G_Source> = _i_core._T_Dictionary<G_Source, _T_Type_Node<G_Source>>

export type _T_Guaranteed_Value_Selection<G_Source> = {
    readonly 'resulting node': _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
    readonly 'start': _i_core._T_State_Group<G_Source, 
        | readonly ['constraint', _i_core._T_State_Group<G_Source, 
            | readonly ['component', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            }]
            | readonly ['reference', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            }]
        >]
        | readonly ['linked entry', null]
        | readonly ['list cursor', null]
        | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Option_Constraints.D<G_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
        | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>]
        | readonly ['result', _i_core._T_State_Group<G_Source, 
            | readonly ['list', {
                readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            }]
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
                readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
            }]
        >]
        | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>]
    >
    readonly 'tail': _T_Relative_Value_Selection<G_Source>
}

export type _T_Imports<G_Source> = _i_core._T_Dictionary<G_Source, {
    readonly 'schema': _i_core._T_Derived_Reference<G_Source, _T_Schemas.D.SG.schema<G_Source>>
    readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<G_Source, _T_Schemas.D<G_Source>>
}>

export type _T_Lookup_Selection<G_Source> = {
    readonly 'resulting dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
    readonly 'type': _i_core._T_State_Group<G_Source, 
        | readonly ['dictionary', {
            readonly 'selected dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
        }]
        | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.lookups.D<G_Source>>]
        | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>]
    >
}

export type _T_Node_Resolver<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['boolean', null]
    | readonly ['component', {
        readonly 'arguments': _pt.Optional_Value<{
            readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                | readonly ['empty stack', null]
                | readonly ['not set', null]
                | readonly ['selection', _T_Lookup_Selection<G_Source>]
                | readonly ['stack', {
                    readonly 'element': _T_Lookup_Selection<G_Source>
                    readonly 'stack': _T_Lookup_Selection<G_Source>
                }]
            >>>
            readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
            >>>
        }>
        readonly 'constraints': _T_Property_Constraints<G_Source>
        readonly 'location': _i_core._T_State_Group<G_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
        >
        readonly 'signature': _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
    }]
    | readonly ['dictionary', {
        readonly 'benchmark': _pt.Optional_Value<_T_Benchmark<G_Source>>
        readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
        readonly 'resolver': _T_Node_Resolver<G_Source>
    }]
    | readonly ['group', _T_Node_Resolver_Group<G_Source>]
    | readonly ['identifier value pair', _T_Node_Resolver<G_Source>]
    | readonly ['list', {
        readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.list<G_Source>>
        readonly 'resolver': _T_Node_Resolver<G_Source>
        readonly 'result': _pt.Optional_Value<_T_Node_Resolver_List_Result<G_Source>>
    }]
    | readonly ['nothing', null]
    | readonly ['number', null]
    | readonly ['optional', {
        readonly 'constraints': _T_Option_Constraints<G_Source>
        readonly 'resolver': _T_Node_Resolver<G_Source>
    }]
    | readonly ['reference', {
        readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['derived', {
                readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
            }]
            | readonly ['selected', {
                readonly 'constraints': _T_Property_Constraints<G_Source>
                readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                readonly 'lookup': _T_Lookup_Selection<G_Source>
            }]
        >
    }]
    | readonly ['state group', {
        readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
        readonly 'states': _i_core._T_Dictionary<G_Source, {
            readonly 'constraints': _T_Option_Constraints<G_Source>
            readonly 'resolver': _T_Node_Resolver<G_Source>
        }>
    }]
    | readonly ['text', null]
    | readonly ['type parameter', null]
>

export type _T_Node_Resolver_Group<G_Source> = _i_core._T_Ordered_Dictionary<G_Source, {
    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Group.D<G_Source>>
    readonly 'resolver': _T_Node_Resolver<G_Source>
}>

export type _T_Node_Resolver_List_Result<G_Source> = _T_Type_Reference<G_Source>

export type _T_Number_Type<G_Source> = {
    readonly 'precision': _i_core._T_State_Group<G_Source, 
        | readonly ['approximation', {
            readonly 'significant digits': number
        }]
        | readonly ['exact', {
            readonly 'decimal separator offset': _pt.Optional_Value<number>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['integer', null]
                | readonly ['natural', null]
                | readonly ['positive natural', null]
            >
        }]
    >
}

export type _T_Option_Constraints<G_Source> = _i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
    | readonly ['assert is set', _T_Possible_Value_Selection<G_Source>]
    | readonly ['state', {
        readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
        readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
        readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
    }]
>>

export type _T_Optional_Value_Initialization<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['not set', null]
    | readonly ['selection', _T_Possible_Value_Selection<G_Source>]
    | readonly ['set', _T_Guaranteed_Value_Selection<G_Source>]
>

export type _T_Possible_Value_Selection<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
    | readonly ['result', _i_core._T_State_Group<G_Source, 
        | readonly ['optional value', {
            readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            readonly 'result': _T_Type_Reference<G_Source>
        }]
        | readonly ['state group', {
            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            readonly 'result': _T_Type_Reference<G_Source>
            readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
        }]
    >]
>

export type _T_Presence<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['optional', null]
    | readonly ['required', null]
>

export type _T_Property_Constraint<G_Source> = {
    readonly 'constraint': _T_Constraint<G_Source>
    readonly 'start': _i_core._T_State_Group<G_Source, 
        | readonly ['property', null]
        | readonly ['sibling', _T_Reference_To_Property_Constraint<G_Source>]
    >
}

export type _T_Property_Constraints<G_Source> = _i_core._T_Ordered_Dictionary<G_Source, _T_Property_Constraint<G_Source>>

export type _T_Reference_To_Property_Constraint<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>

export type _T_Relative_Value_Selection<G_Source> = {
    readonly 'path': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
        | readonly ['component', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
        }]
    >>
    readonly 'resulting node': _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
}

export type _T_Resolve_Logic<G_Source> = {
    readonly 'resolvers': _T_Resolvers<G_Source>
    readonly 'signatures': {
        readonly 'types': _T_Signatures<G_Source>
    }
}

export type _T_Resolvers<G_Source> = _i_core._T_Ordered_Dictionary<G_Source, {
    readonly 'signature': _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
    readonly 'type resolver': _T_Node_Resolver<G_Source>
}>

export type _T_Schema<G_Source> = {
    readonly 'complexity': _i_core._T_State_Group<G_Source, 
        | readonly ['constrained', _T_Resolve_Logic<G_Source>]
        | readonly ['unconstrained', null]
    >
    readonly 'globals': _T_Globals<G_Source>
    readonly 'imports': _T_Imports<G_Source>
    readonly 'types': _T_Types<G_Source>
}

export type _T_Schemas<G_Source> = _i_core._T_Ordered_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
    | readonly ['schema', _T_Schema<G_Source>]
    | readonly ['set', _T_Schemas<G_Source>]
>>

export type _T_Signature<G_Source> = {
    readonly 'parameters': _i_core._T_State_Group<G_Source, 
        | readonly ['local', _T_Signature_Parameters<G_Source>]
        | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
    >
    readonly 'resolved parameters': _i_core._T_Derived_Reference<G_Source, _T_Signature_Parameters<G_Source>>
    readonly 'type': _i_core._T_Derived_Reference<G_Source, _T_Type<G_Source>>
}

export type _T_Signature_Parameters<G_Source> = {
    readonly 'lookups': _i_core._T_Dictionary<G_Source, {
        readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
        readonly 'presence': _T_Presence<G_Source>
        readonly 'referent': _T_Type_Reference<G_Source>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['acyclic', null]
            | readonly ['cyclic', null]
            | readonly ['stack', null]
        >
    }>
    readonly 'values': _i_core._T_Dictionary<G_Source, {
        readonly 'data type': _T_Type_Reference<G_Source>
        readonly 'presence': _T_Presence<G_Source>
    }>
}

export type _T_Signatures<G_Source> = _i_core._T_Ordered_Dictionary<G_Source, _T_Signature<G_Source>>

export type _T_Text_Type<G_Source> = {
    readonly 'type': _i_core._T_State_Group<G_Source, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export type _T_Type<G_Source> = {
    readonly 'node': _T_Type_Node<G_Source>
    readonly 'type parameters': _T_Type_Parameters<G_Source>
}

export type _T_Type_Node<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['boolean', null]
    | readonly ['component', _i_core._T_State_Group<G_Source, 
        | readonly ['external', {
            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
        }]
        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
        | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<G_Source, _T_Types.D<G_Source>>]
    >]
    | readonly ['dictionary', _T_Dictionary<G_Source>]
    | readonly ['group', _T_Group<G_Source>]
    | readonly ['identifier value pair', _T_Type_Node<G_Source>]
    | readonly ['list', {
        readonly 'node': _T_Type_Node<G_Source>
    }]
    | readonly ['nothing', null]
    | readonly ['number', _i_core._T_State_Group<G_Source, 
        | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.number_types.D<G_Source>>]
        | readonly ['local', _T_Number_Type<G_Source>]
    >]
    | readonly ['optional', _T_Type_Node<G_Source>]
    | readonly ['reference', {
        readonly 'referent': _T_Type_Node_Reference<G_Source>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['derived', null]
            | readonly ['selected', {
                readonly 'dependency': _i_core._T_State_Group<G_Source, 
                    | readonly ['acyclic', null]
                    | readonly ['cyclic', null]
                    | readonly ['stack', null]
                >
                readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            }]
        >
    }]
    | readonly ['state group', _i_core._T_Dictionary<G_Source, _T_Type_Node<G_Source>>]
    | readonly ['text', _i_core._T_State_Group<G_Source, 
        | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.text_types.D<G_Source>>]
        | readonly ['local', _T_Text_Type<G_Source>]
    >]
    | readonly ['type parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Parameters.D<G_Source>>]
>

export type _T_Type_Node_Reference<G_Source> = {
    readonly 'resulting node': _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
    readonly 'tail': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
        | readonly ['dictionary', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
        | readonly ['identifier value pair', null]
        | readonly ['list', null]
        | readonly ['optional', null]
        | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>]
    >>
    readonly 'type location': _T_Type_Reference<G_Source>
}

export type _T_Type_Parameters<G_Source> = _i_core._T_Dictionary<G_Source, null>

export type _T_Type_Reference<G_Source> = {
    readonly 'location': _i_core._T_State_Group<G_Source, 
        | readonly ['external', {
            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
        }]
        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
    >
    readonly 'resulting node': _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
}

export type _T_Types<G_Source> = _i_core._T_Ordered_Dictionary<G_Source, _T_Type<G_Source>>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Benchmark<G_Source> = _T_Benchmark<G_Source>

export type Constraint<G_Source> = _T_Constraint<G_Source>

export type Dictionary<G_Source> = _T_Dictionary<G_Source>

export type Globals<G_Source> = _T_Globals<G_Source>

export type Group<G_Source> = _T_Group<G_Source>

export type Guaranteed_Value_Selection<G_Source> = _T_Guaranteed_Value_Selection<G_Source>

export type Imports<G_Source> = _T_Imports<G_Source>

export type Lookup_Selection<G_Source> = _T_Lookup_Selection<G_Source>

export type Node_Resolver<G_Source> = _T_Node_Resolver<G_Source>

export type Node_Resolver_Group<G_Source> = _T_Node_Resolver_Group<G_Source>

export type Node_Resolver_List_Result<G_Source> = _T_Node_Resolver_List_Result<G_Source>

export type Number_Type<G_Source> = _T_Number_Type<G_Source>

export type Option_Constraints<G_Source> = _T_Option_Constraints<G_Source>

export type Optional_Value_Initialization<G_Source> = _T_Optional_Value_Initialization<G_Source>

export type Possible_Value_Selection<G_Source> = _T_Possible_Value_Selection<G_Source>

export type Presence<G_Source> = _T_Presence<G_Source>

export type Property_Constraint<G_Source> = _T_Property_Constraint<G_Source>

export type Property_Constraints<G_Source> = _T_Property_Constraints<G_Source>

export type Reference_To_Property_Constraint<G_Source> = _T_Reference_To_Property_Constraint<G_Source>

export type Relative_Value_Selection<G_Source> = _T_Relative_Value_Selection<G_Source>

export type Resolve_Logic<G_Source> = _T_Resolve_Logic<G_Source>

export type Resolvers<G_Source> = _T_Resolvers<G_Source>

export type Schema<G_Source> = _T_Schema<G_Source>

export type Schemas<G_Source> = _T_Schemas<G_Source>

export type Signature<G_Source> = _T_Signature<G_Source>

export type Signature_Parameters<G_Source> = _T_Signature_Parameters<G_Source>

export type Signatures<G_Source> = _T_Signatures<G_Source>

export type Text_Type<G_Source> = _T_Text_Type<G_Source>

export type Type<G_Source> = _T_Type<G_Source>

export type Type_Node<G_Source> = _T_Type_Node<G_Source>

export type Type_Node_Reference<G_Source> = _T_Type_Node_Reference<G_Source>

export type Type_Parameters<G_Source> = _T_Type_Parameters<G_Source>

export type Type_Reference<G_Source> = _T_Type_Reference<G_Source>

export type Types<G_Source> = _T_Types<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Benchmark {
    export type dense<G_Source> = boolean
    
    export namespace resulting_dictionary {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Dictionary<G_Source>
    }
    export type resulting_dictionary<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
    
    export namespace selection {
    }
    export type selection<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
}

export namespace _T_Constraint {
    
    export namespace selection {
    }
    export type selection<G_Source> = _T_Relative_Value_Selection<G_Source>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace optional_value {
                
                export namespace selected_optional_value {
                    
                    export namespace Type {
                    }
                    export type Type<G_Source> = _T_Type_Node.SG.optional<G_Source>
                }
                export type selected_optional_value<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.optional<G_Source>>
            }
            export type optional_value<G_Source> = {
                readonly 'selected optional value': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.optional<G_Source>>
            }
            
            export namespace state {
                
                export namespace selected_state_group {
                    
                    export namespace Type {
                    }
                    export type Type<G_Source> = _T_Type_Node.SG.state_group<G_Source>
                }
                export type selected_state_group<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                
                export namespace state {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Type_Node.SG.state_group.D<G_Source>
                }
                export type state<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }
            export type state<G_Source> = {
                readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }
        }
        export type SG<G_Source> = 
            | readonly ['optional value', {
                readonly 'selected optional value': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.optional<G_Source>>
            }]
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }]
    }
    export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['optional value', {
            readonly 'selected optional value': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.optional<G_Source>>
        }]
        | readonly ['state', {
            readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
        }]
    >
}

export namespace _T_Dictionary {
    
    export namespace node {
    }
    export type node<G_Source> = _T_Type_Node<G_Source>
    export type ordered<G_Source> = boolean
}

export namespace _T_Globals {
    
    export namespace complexity {
        
        export namespace SG {
            export type constrained<G_Source> = null
            export type unconstrained<G_Source> = null
        }
        export type SG<G_Source> = 
            | readonly ['constrained', null]
            | readonly ['unconstrained', null]
    }
    export type complexity<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['constrained', null]
        | readonly ['unconstrained', null]
    >
    
    export namespace number_types {
        
        export namespace D {
        }
        export type D<G_Source> = _T_Number_Type<G_Source>
    }
    export type number_types<G_Source> = _i_core._T_Dictionary<G_Source, _T_Number_Type<G_Source>>
    
    export namespace text_types {
        
        export namespace D {
        }
        export type D<G_Source> = _T_Text_Type<G_Source>
    }
    export type text_types<G_Source> = _i_core._T_Dictionary<G_Source, _T_Text_Type<G_Source>>
}

export namespace _T_Group {
    
    export namespace D {
    }
    export type D<G_Source> = _T_Type_Node<G_Source>
}

export namespace _T_Guaranteed_Value_Selection {
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Type_Node<G_Source>
    }
    export type resulting_node<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
    
    export namespace start {
        
        export namespace SG {
            
            export namespace constraint {
                
                export namespace SG {
                    
                    export namespace component {
                        
                        export namespace constraint {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Property_Constraints.D<G_Source>
                        }
                        export type constraint<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                        }
                        export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                    export type component<G_Source> = {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                    
                    export namespace reference {
                        
                        export namespace constraint {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Property_Constraints.D<G_Source>
                        }
                        export type constraint<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                        }
                        export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                    export type reference<G_Source> = {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['component', {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }]
                    | readonly ['reference', {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }]
            }
            export type constraint<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['component', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
                | readonly ['reference', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
            >
            export type linked_entry<G_Source> = null
            export type list_cursor<G_Source> = null
            
            export namespace option_constraint {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Option_Constraints.D<G_Source>
            }
            export type option_constraint<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Option_Constraints.D<G_Source>>
            
            export namespace parameter {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Signature_Parameters.values.D<G_Source>
            }
            export type parameter<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>
            
            export namespace parent_sibling {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
            }
            export type parent_sibling<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            
            export namespace result {
                
                export namespace SG {
                    
                    export namespace list {
                        
                        export namespace list_result {
                            
                            export namespace Type {
                            }
                            export type Type<G_Source> = _T_Node_Resolver.SG.list.result.O<G_Source>
                        }
                        export type list_result<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                        }
                        export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                    export type list<G_Source> = {
                        readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                    
                    export namespace optional_value {
                        
                        export namespace optional_value {
                            
                            export namespace Type {
                            }
                            export type Type<G_Source> = _T_Node_Resolver.SG.optional<G_Source>
                        }
                        export type optional_value<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                        }
                        export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        
                        export namespace result {
                        }
                        export type result<G_Source> = _T_Type_Reference<G_Source>
                    }
                    export type optional_value<G_Source> = {
                        readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        readonly 'result': _T_Type_Reference<G_Source>
                    }
                    
                    export namespace state_group {
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                        }
                        export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        
                        export namespace result {
                        }
                        export type result<G_Source> = _T_Type_Reference<G_Source>
                        
                        export namespace state_group {
                            
                            export namespace Type {
                            }
                            export type Type<G_Source> = _T_Node_Resolver.SG.state_group<G_Source>
                        }
                        export type state_group<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                    }
                    export type state_group<G_Source> = {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        readonly 'result': _T_Type_Reference<G_Source>
                        readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['list', {
                        readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }]
                    | readonly ['optional value', {
                        readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        readonly 'result': _T_Type_Reference<G_Source>
                    }]
                    | readonly ['state group', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        readonly 'result': _T_Type_Reference<G_Source>
                        readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                    }]
            }
            export type result<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['list', {
                    readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                }]
            >
            
            export namespace sibling {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
            }
            export type sibling<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
        }
        export type SG<G_Source> = 
            | readonly ['constraint', _i_core._T_State_Group<G_Source, 
                | readonly ['component', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
                | readonly ['reference', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
            >]
            | readonly ['linked entry', null]
            | readonly ['list cursor', null]
            | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Option_Constraints.D<G_Source>>]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
            | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>]
            | readonly ['result', _i_core._T_State_Group<G_Source, 
                | readonly ['list', {
                    readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                }]
            >]
            | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>]
    }
    export type start<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['constraint', _i_core._T_State_Group<G_Source, 
            | readonly ['component', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            }]
            | readonly ['reference', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            }]
        >]
        | readonly ['linked entry', null]
        | readonly ['list cursor', null]
        | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Option_Constraints.D<G_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
        | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>]
        | readonly ['result', _i_core._T_State_Group<G_Source, 
            | readonly ['list', {
                readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            }]
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
                readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
            }]
        >]
        | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>]
    >
    
    export namespace tail {
    }
    export type tail<G_Source> = _T_Relative_Value_Selection<G_Source>
}

export namespace _T_Imports {
    
    export namespace D {
        
        export namespace schema {
            
            export namespace Type {
            }
            export type Type<G_Source> = _T_Schemas.D.SG.schema<G_Source>
        }
        export type schema<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Schemas.D.SG.schema<G_Source>>
        
        export namespace schema_set_child {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<G_Source> = _T_Schemas.D<G_Source>
        }
        export type schema_set_child<G_Source> = _i_core._T_Reference_To_Stacked_Dictionary_Entry<G_Source, _T_Schemas.D<G_Source>>
    }
    export type D<G_Source> = {
        readonly 'schema': _i_core._T_Derived_Reference<G_Source, _T_Schemas.D.SG.schema<G_Source>>
        readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<G_Source, _T_Schemas.D<G_Source>>
    }
}

export namespace _T_Lookup_Selection {
    
    export namespace resulting_dictionary {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Dictionary<G_Source>
    }
    export type resulting_dictionary<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace dictionary {
                
                export namespace selected_dictionary {
                    
                    export namespace Type {
                    }
                    export type Type<G_Source> = _T_Dictionary<G_Source>
                }
                export type selected_dictionary<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                
                export namespace selection {
                }
                export type selection<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
            }
            export type dictionary<G_Source> = {
                readonly 'selected dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
            }
            
            export namespace not_circular_dependent_siblings {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Dictionary<G_Source>
            }
            export type not_circular_dependent_siblings<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            
            export namespace parameter {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Signature_Parameters.lookups.D<G_Source>
            }
            export type parameter<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.lookups.D<G_Source>>
            
            export namespace possibly_circular_dependent_siblings {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Dictionary<G_Source>
            }
            export type possibly_circular_dependent_siblings<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
        }
        export type SG<G_Source> = 
            | readonly ['dictionary', {
                readonly 'selected dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
            }]
            | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.lookups.D<G_Source>>]
            | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>]
    }
    export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['dictionary', {
            readonly 'selected dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
        }]
        | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.lookups.D<G_Source>>]
        | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>]
    >
}

export namespace _T_Node_Resolver {
    
    export namespace SG {
        export type _boolean<G_Source> = null
        
        export namespace component {
            
            export namespace _arguments {
                
                export namespace O {
                    
                    export namespace lookups {
                        
                        export namespace O {
                            
                            export namespace D {
                                
                                export namespace SG {
                                    export type empty_stack<G_Source> = null
                                    export type not_set<G_Source> = null
                                    
                                    export namespace selection {
                                    }
                                    export type selection<G_Source> = _T_Lookup_Selection<G_Source>
                                    
                                    export namespace stack {
                                        
                                        export namespace element {
                                        }
                                        export type element<G_Source> = _T_Lookup_Selection<G_Source>
                                        
                                        export namespace stack {
                                        }
                                        export type stack<G_Source> = _T_Lookup_Selection<G_Source>
                                    }
                                    export type stack<G_Source> = {
                                        readonly 'element': _T_Lookup_Selection<G_Source>
                                        readonly 'stack': _T_Lookup_Selection<G_Source>
                                    }
                                }
                                export type SG<G_Source> = 
                                    | readonly ['empty stack', null]
                                    | readonly ['not set', null]
                                    | readonly ['selection', _T_Lookup_Selection<G_Source>]
                                    | readonly ['stack', {
                                        readonly 'element': _T_Lookup_Selection<G_Source>
                                        readonly 'stack': _T_Lookup_Selection<G_Source>
                                    }]
                            }
                            export type D<G_Source> = _i_core._T_State_Group<G_Source, 
                                | readonly ['empty stack', null]
                                | readonly ['not set', null]
                                | readonly ['selection', _T_Lookup_Selection<G_Source>]
                                | readonly ['stack', {
                                    readonly 'element': _T_Lookup_Selection<G_Source>
                                    readonly 'stack': _T_Lookup_Selection<G_Source>
                                }]
                            >
                        }
                        export type O<G_Source> = _i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                            | readonly ['empty stack', null]
                            | readonly ['not set', null]
                            | readonly ['selection', _T_Lookup_Selection<G_Source>]
                            | readonly ['stack', {
                                readonly 'element': _T_Lookup_Selection<G_Source>
                                readonly 'stack': _T_Lookup_Selection<G_Source>
                            }]
                        >>
                    }
                    export type lookups<G_Source> = _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection<G_Source>]
                        | readonly ['stack', {
                            readonly 'element': _T_Lookup_Selection<G_Source>
                            readonly 'stack': _T_Lookup_Selection<G_Source>
                        }]
                    >>>
                    
                    export namespace values {
                        
                        export namespace O {
                            
                            export namespace D {
                                
                                export namespace SG {
                                    
                                    export namespace optional {
                                    }
                                    export type optional<G_Source> = _T_Optional_Value_Initialization<G_Source>
                                    
                                    export namespace parameter {
                                        
                                        export namespace Dictionary_Entry {
                                        }
                                        export type Dictionary_Entry<G_Source> = _T_Signature_Parameters.values.D<G_Source>
                                    }
                                    export type parameter<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>
                                    
                                    export namespace required {
                                    }
                                    export type required<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
                                }
                                export type SG<G_Source> = 
                                    | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                                    | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                            }
                            export type D<G_Source> = _i_core._T_State_Group<G_Source, 
                                | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                                | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                            >
                        }
                        export type O<G_Source> = _i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                            | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                            | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                        >>
                    }
                    export type values<G_Source> = _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                        | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                        | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                    >>>
                }
                export type O<G_Source> = {
                    readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection<G_Source>]
                        | readonly ['stack', {
                            readonly 'element': _T_Lookup_Selection<G_Source>
                            readonly 'stack': _T_Lookup_Selection<G_Source>
                        }]
                    >>>
                    readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                        | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                        | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                    >>>
                }
            }
            export type _arguments<G_Source> = _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<G_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<G_Source>
                        readonly 'stack': _T_Lookup_Selection<G_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                >>>
            }>
            
            export namespace constraints {
            }
            export type constraints<G_Source> = _T_Property_Constraints<G_Source>
            
            export namespace location {
                
                export namespace SG {
                    
                    export namespace external {
                        
                        export namespace _import {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Imports.D<G_Source>
                        }
                        export type _import<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                        
                        export namespace _type {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Signatures.D<G_Source>
                        }
                        export type _type<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                    }
                    export type external<G_Source> = {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                    }
                    
                    export namespace internal {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<G_Source> = _T_Signatures.D<G_Source>
                    }
                    export type internal<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                }
                export type SG<G_Source> = 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
            }
            export type location<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
            >
            
            export namespace signature {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Signatures.D<G_Source>
            }
            export type signature<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
        }
        export type component<G_Source> = {
            readonly 'arguments': _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<G_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<G_Source>
                        readonly 'stack': _T_Lookup_Selection<G_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                >>>
            }>
            readonly 'constraints': _T_Property_Constraints<G_Source>
            readonly 'location': _i_core._T_State_Group<G_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
            >
            readonly 'signature': _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
        }
        
        export namespace dictionary {
            
            export namespace benchmark {
                
                export namespace O {
                }
                export type O<G_Source> = _T_Benchmark<G_Source>
            }
            export type benchmark<G_Source> = _pt.Optional_Value<_T_Benchmark<G_Source>>
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Dictionary<G_Source>
            }
            export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            
            export namespace resolver {
            }
            export type resolver<G_Source> = _T_Node_Resolver<G_Source>
        }
        export type dictionary<G_Source> = {
            readonly 'benchmark': _pt.Optional_Value<_T_Benchmark<G_Source>>
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            readonly 'resolver': _T_Node_Resolver<G_Source>
        }
        
        export namespace group {
        }
        export type group<G_Source> = _T_Node_Resolver_Group<G_Source>
        
        export namespace identifier_value_pair {
        }
        export type identifier_value_pair<G_Source> = _T_Node_Resolver<G_Source>
        
        export namespace list {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Type_Node.SG.list<G_Source>
            }
            export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.list<G_Source>>
            
            export namespace resolver {
            }
            export type resolver<G_Source> = _T_Node_Resolver<G_Source>
            
            export namespace result {
                
                export namespace O {
                }
                export type O<G_Source> = _T_Node_Resolver_List_Result<G_Source>
            }
            export type result<G_Source> = _pt.Optional_Value<_T_Node_Resolver_List_Result<G_Source>>
        }
        export type list<G_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.list<G_Source>>
            readonly 'resolver': _T_Node_Resolver<G_Source>
            readonly 'result': _pt.Optional_Value<_T_Node_Resolver_List_Result<G_Source>>
        }
        export type nothing<G_Source> = null
        export type _number<G_Source> = null
        
        export namespace optional {
            
            export namespace constraints {
            }
            export type constraints<G_Source> = _T_Option_Constraints<G_Source>
            
            export namespace resolver {
            }
            export type resolver<G_Source> = _T_Node_Resolver<G_Source>
        }
        export type optional<G_Source> = {
            readonly 'constraints': _T_Option_Constraints<G_Source>
            readonly 'resolver': _T_Node_Resolver<G_Source>
        }
        
        export namespace reference {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Type_Node.SG.reference<G_Source>
            }
            export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace derived {
                        
                        export namespace value {
                        }
                        export type value<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
                    }
                    export type derived<G_Source> = {
                        readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
                    }
                    
                    export namespace selected {
                        
                        export namespace constraints {
                        }
                        export type constraints<G_Source> = _T_Property_Constraints<G_Source>
                        
                        export namespace definition {
                            
                            export namespace Type {
                            }
                            export type Type<G_Source> = _T_Type_Node.SG.reference._type.SG.selected<G_Source>
                        }
                        export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                        
                        export namespace lookup {
                        }
                        export type lookup<G_Source> = _T_Lookup_Selection<G_Source>
                    }
                    export type selected<G_Source> = {
                        readonly 'constraints': _T_Property_Constraints<G_Source>
                        readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                        readonly 'lookup': _T_Lookup_Selection<G_Source>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['derived', {
                        readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
                    }]
                    | readonly ['selected', {
                        readonly 'constraints': _T_Property_Constraints<G_Source>
                        readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                        readonly 'lookup': _T_Lookup_Selection<G_Source>
                    }]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<G_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                    readonly 'lookup': _T_Lookup_Selection<G_Source>
                }]
            >
        }
        export type reference<G_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<G_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                    readonly 'lookup': _T_Lookup_Selection<G_Source>
                }]
            >
        }
        
        export namespace state_group {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Type_Node.SG.state_group<G_Source>
            }
            export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            
            export namespace states {
                
                export namespace D {
                    
                    export namespace constraints {
                    }
                    export type constraints<G_Source> = _T_Option_Constraints<G_Source>
                    
                    export namespace resolver {
                    }
                    export type resolver<G_Source> = _T_Node_Resolver<G_Source>
                }
                export type D<G_Source> = {
                    readonly 'constraints': _T_Option_Constraints<G_Source>
                    readonly 'resolver': _T_Node_Resolver<G_Source>
                }
            }
            export type states<G_Source> = _i_core._T_Dictionary<G_Source, {
                readonly 'constraints': _T_Option_Constraints<G_Source>
                readonly 'resolver': _T_Node_Resolver<G_Source>
            }>
        }
        export type state_group<G_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            readonly 'states': _i_core._T_Dictionary<G_Source, {
                readonly 'constraints': _T_Option_Constraints<G_Source>
                readonly 'resolver': _T_Node_Resolver<G_Source>
            }>
        }
        export type text<G_Source> = null
        export type type_parameter<G_Source> = null
    }
    export type SG<G_Source> = 
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'arguments': _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<G_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<G_Source>
                        readonly 'stack': _T_Lookup_Selection<G_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                >>>
            }>
            readonly 'constraints': _T_Property_Constraints<G_Source>
            readonly 'location': _i_core._T_State_Group<G_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
            >
            readonly 'signature': _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
        }]
        | readonly ['dictionary', {
            readonly 'benchmark': _pt.Optional_Value<_T_Benchmark<G_Source>>
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            readonly 'resolver': _T_Node_Resolver<G_Source>
        }]
        | readonly ['group', _T_Node_Resolver_Group<G_Source>]
        | readonly ['identifier value pair', _T_Node_Resolver<G_Source>]
        | readonly ['list', {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.list<G_Source>>
            readonly 'resolver': _T_Node_Resolver<G_Source>
            readonly 'result': _pt.Optional_Value<_T_Node_Resolver_List_Result<G_Source>>
        }]
        | readonly ['nothing', null]
        | readonly ['number', null]
        | readonly ['optional', {
            readonly 'constraints': _T_Option_Constraints<G_Source>
            readonly 'resolver': _T_Node_Resolver<G_Source>
        }]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<G_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                    readonly 'lookup': _T_Lookup_Selection<G_Source>
                }]
            >
        }]
        | readonly ['state group', {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            readonly 'states': _i_core._T_Dictionary<G_Source, {
                readonly 'constraints': _T_Option_Constraints<G_Source>
                readonly 'resolver': _T_Node_Resolver<G_Source>
            }>
        }]
        | readonly ['text', null]
        | readonly ['type parameter', null]
}

export namespace _T_Node_Resolver_Group {
    
    export namespace D {
        
        export namespace definition {
            
            export namespace Type {
            }
            export type Type<G_Source> = _T_Group.D<G_Source>
        }
        export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Group.D<G_Source>>
        
        export namespace resolver {
        }
        export type resolver<G_Source> = _T_Node_Resolver<G_Source>
    }
    export type D<G_Source> = {
        readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Group.D<G_Source>>
        readonly 'resolver': _T_Node_Resolver<G_Source>
    }
}

export namespace _T_Node_Resolver_List_Result {
}

export namespace _T_Number_Type {
    
    export namespace precision {
        
        export namespace SG {
            
            export namespace approximation {
                export type significant_digits<G_Source> = number
            }
            export type approximation<G_Source> = {
                readonly 'significant digits': number
            }
            
            export namespace exact {
                
                export namespace decimal_separator_offset {
                    export type O<G_Source> = number
                }
                export type decimal_separator_offset<G_Source> = _pt.Optional_Value<number>
                
                export namespace _type {
                    
                    export namespace SG {
                        export type integer<G_Source> = null
                        export type natural<G_Source> = null
                        export type positive_natural<G_Source> = null
                    }
                    export type SG<G_Source> = 
                        | readonly ['integer', null]
                        | readonly ['natural', null]
                        | readonly ['positive natural', null]
                }
                export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }
            export type exact<G_Source> = {
                readonly 'decimal separator offset': _pt.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<G_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }
        }
        export type SG<G_Source> = 
            | readonly ['approximation', {
                readonly 'significant digits': number
            }]
            | readonly ['exact', {
                readonly 'decimal separator offset': _pt.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<G_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }]
    }
    export type precision<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['approximation', {
            readonly 'significant digits': number
        }]
        | readonly ['exact', {
            readonly 'decimal separator offset': _pt.Optional_Value<number>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['integer', null]
                | readonly ['natural', null]
                | readonly ['positive natural', null]
            >
        }]
    >
}

export namespace _T_Option_Constraints {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace assert_is_set {
            }
            export type assert_is_set<G_Source> = _T_Possible_Value_Selection<G_Source>
            
            export namespace state {
                
                export namespace selected_state_group {
                    
                    export namespace Type {
                    }
                    export type Type<G_Source> = _T_Type_Node.SG.state_group<G_Source>
                }
                export type selected_state_group<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                
                export namespace selection {
                }
                export type selection<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
                
                export namespace state {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Type_Node.SG.state_group.D<G_Source>
                }
                export type state<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }
            export type state<G_Source> = {
                readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }
        }
        export type SG<G_Source> = 
            | readonly ['assert is set', _T_Possible_Value_Selection<G_Source>]
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['assert is set', _T_Possible_Value_Selection<G_Source>]
        | readonly ['state', {
            readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
        }]
    >
}

export namespace _T_Optional_Value_Initialization {
    
    export namespace SG {
        export type not_set<G_Source> = null
        
        export namespace selection {
        }
        export type selection<G_Source> = _T_Possible_Value_Selection<G_Source>
        
        export namespace _set {
        }
        export type _set<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
    }
    export type SG<G_Source> = 
        | readonly ['not set', null]
        | readonly ['selection', _T_Possible_Value_Selection<G_Source>]
        | readonly ['set', _T_Guaranteed_Value_Selection<G_Source>]
}

export namespace _T_Possible_Value_Selection {
    
    export namespace SG {
        
        export namespace parameter {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<G_Source> = _T_Signature_Parameters.values.D<G_Source>
        }
        export type parameter<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>
        
        export namespace result {
            
            export namespace SG {
                
                export namespace optional_value {
                    
                    export namespace optional_value {
                        
                        export namespace Type {
                        }
                        export type Type<G_Source> = _T_Node_Resolver.SG.optional<G_Source>
                    }
                    export type optional_value<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                    
                    export namespace property {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                    }
                    export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    
                    export namespace result {
                    }
                    export type result<G_Source> = _T_Type_Reference<G_Source>
                }
                export type optional_value<G_Source> = {
                    readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                }
                
                export namespace state_group {
                    
                    export namespace property {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                    }
                    export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    
                    export namespace result {
                    }
                    export type result<G_Source> = _T_Type_Reference<G_Source>
                    
                    export namespace state_group {
                        
                        export namespace Type {
                        }
                        export type Type<G_Source> = _T_Node_Resolver.SG.state_group<G_Source>
                    }
                    export type state_group<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                }
                export type state_group<G_Source> = {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                }
            }
            export type SG<G_Source> = 
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                }]
        }
        export type result<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
                readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
            }]
        >
    }
    export type SG<G_Source> = 
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
        | readonly ['result', _i_core._T_State_Group<G_Source, 
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
                readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
            }]
        >]
}

export namespace _T_Presence {
    
    export namespace SG {
        export type optional<G_Source> = null
        export type required<G_Source> = null
    }
    export type SG<G_Source> = 
        | readonly ['optional', null]
        | readonly ['required', null]
}

export namespace _T_Property_Constraint {
    
    export namespace constraint {
    }
    export type constraint<G_Source> = _T_Constraint<G_Source>
    
    export namespace start {
        
        export namespace SG {
            export type property<G_Source> = null
            
            export namespace sibling {
            }
            export type sibling<G_Source> = _T_Reference_To_Property_Constraint<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['property', null]
            | readonly ['sibling', _T_Reference_To_Property_Constraint<G_Source>]
    }
    export type start<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['property', null]
        | readonly ['sibling', _T_Reference_To_Property_Constraint<G_Source>]
    >
}

export namespace _T_Property_Constraints {
    
    export namespace D {
    }
    export type D<G_Source> = _T_Property_Constraint<G_Source>
}

export namespace _T_Reference_To_Property_Constraint {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry<G_Source> = _T_Property_Constraints.D<G_Source>
}

export namespace _T_Relative_Value_Selection {
    
    export namespace path {
        
        export namespace L {
            
            export namespace SG {
                export type component<G_Source> = null
                
                export namespace group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Group.D<G_Source>
                }
                export type group<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>
                
                export namespace reference {
                    
                    export namespace definition {
                        
                        export namespace Type {
                        }
                        export type Type<G_Source> = _T_Type_Node.SG.reference<G_Source>
                    }
                    export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
                }
                export type reference<G_Source> = {
                    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
                }
            }
            export type SG<G_Source> = 
                | readonly ['component', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
                | readonly ['reference', {
                    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
                }]
        }
        export type L<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['component', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
            | readonly ['reference', {
                readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
            }]
        >
    }
    export type path<G_Source> = _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
        | readonly ['component', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
        }]
    >>
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Type_Node<G_Source>
    }
    export type resulting_node<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
}

export namespace _T_Resolve_Logic {
    
    export namespace resolvers {
    }
    export type resolvers<G_Source> = _T_Resolvers<G_Source>
    
    export namespace signatures {
        
        export namespace types {
        }
        export type types<G_Source> = _T_Signatures<G_Source>
    }
    export type signatures<G_Source> = {
        readonly 'types': _T_Signatures<G_Source>
    }
}

export namespace _T_Resolvers {
    
    export namespace D {
        
        export namespace signature {
            
            export namespace Type {
            }
            export type Type<G_Source> = _T_Signatures.D<G_Source>
        }
        export type signature<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
        
        export namespace type_resolver {
        }
        export type type_resolver<G_Source> = _T_Node_Resolver<G_Source>
    }
    export type D<G_Source> = {
        readonly 'signature': _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
        readonly 'type resolver': _T_Node_Resolver<G_Source>
    }
}

export namespace _T_Schema {
    
    export namespace complexity {
        
        export namespace SG {
            
            export namespace constrained {
            }
            export type constrained<G_Source> = _T_Resolve_Logic<G_Source>
            export type unconstrained<G_Source> = null
        }
        export type SG<G_Source> = 
            | readonly ['constrained', _T_Resolve_Logic<G_Source>]
            | readonly ['unconstrained', null]
    }
    export type complexity<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['constrained', _T_Resolve_Logic<G_Source>]
        | readonly ['unconstrained', null]
    >
    
    export namespace globals {
    }
    export type globals<G_Source> = _T_Globals<G_Source>
    
    export namespace imports {
    }
    export type imports<G_Source> = _T_Imports<G_Source>
    
    export namespace types {
    }
    export type types<G_Source> = _T_Types<G_Source>
}

export namespace _T_Schemas {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace schema {
            }
            export type schema<G_Source> = _T_Schema<G_Source>
            
            export namespace _set {
            }
            export type _set<G_Source> = _T_Schemas<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['schema', _T_Schema<G_Source>]
            | readonly ['set', _T_Schemas<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['schema', _T_Schema<G_Source>]
        | readonly ['set', _T_Schemas<G_Source>]
    >
}

export namespace _T_Signature {
    
    export namespace parameters {
        
        export namespace SG {
            
            export namespace local {
            }
            export type local<G_Source> = _T_Signature_Parameters<G_Source>
            
            export namespace same_as {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Signatures.D<G_Source>
            }
            export type same_as<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
        }
        export type SG<G_Source> = 
            | readonly ['local', _T_Signature_Parameters<G_Source>]
            | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
    }
    export type parameters<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['local', _T_Signature_Parameters<G_Source>]
        | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
    >
    
    export namespace resolved_parameters {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Signature_Parameters<G_Source>
    }
    export type resolved_parameters<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Signature_Parameters<G_Source>>
    
    export namespace _type {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Type<G_Source>
    }
    export type _type<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type<G_Source>>
}

export namespace _T_Signature_Parameters {
    
    export namespace lookups {
        
        export namespace D {
            
            export namespace dictionary {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Dictionary<G_Source>
            }
            export type dictionary<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            
            export namespace presence {
            }
            export type presence<G_Source> = _T_Presence<G_Source>
            
            export namespace referent {
            }
            export type referent<G_Source> = _T_Type_Reference<G_Source>
            
            export namespace _type {
                
                export namespace SG {
                    export type acyclic<G_Source> = null
                    export type cyclic<G_Source> = null
                    export type stack<G_Source> = null
                }
                export type SG<G_Source> = 
                    | readonly ['acyclic', null]
                    | readonly ['cyclic', null]
                    | readonly ['stack', null]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['acyclic', null]
                | readonly ['cyclic', null]
                | readonly ['stack', null]
            >
        }
        export type D<G_Source> = {
            readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            readonly 'presence': _T_Presence<G_Source>
            readonly 'referent': _T_Type_Reference<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['acyclic', null]
                | readonly ['cyclic', null]
                | readonly ['stack', null]
            >
        }
    }
    export type lookups<G_Source> = _i_core._T_Dictionary<G_Source, {
        readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
        readonly 'presence': _T_Presence<G_Source>
        readonly 'referent': _T_Type_Reference<G_Source>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['acyclic', null]
            | readonly ['cyclic', null]
            | readonly ['stack', null]
        >
    }>
    
    export namespace values {
        
        export namespace D {
            
            export namespace data_type {
            }
            export type data_type<G_Source> = _T_Type_Reference<G_Source>
            
            export namespace presence {
            }
            export type presence<G_Source> = _T_Presence<G_Source>
        }
        export type D<G_Source> = {
            readonly 'data type': _T_Type_Reference<G_Source>
            readonly 'presence': _T_Presence<G_Source>
        }
    }
    export type values<G_Source> = _i_core._T_Dictionary<G_Source, {
        readonly 'data type': _T_Type_Reference<G_Source>
        readonly 'presence': _T_Presence<G_Source>
    }>
}

export namespace _T_Signatures {
    
    export namespace D {
    }
    export type D<G_Source> = _T_Signature<G_Source>
}

export namespace _T_Text_Type {
    
    export namespace _type {
        
        export namespace SG {
            export type multi_line<G_Source> = null
            export type single_line<G_Source> = null
        }
        export type SG<G_Source> = 
            | readonly ['multi line', null]
            | readonly ['single line', null]
    }
    export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export namespace _T_Type {
    
    export namespace node {
    }
    export type node<G_Source> = _T_Type_Node<G_Source>
    
    export namespace type_parameters {
    }
    export type type_parameters<G_Source> = _T_Type_Parameters<G_Source>
}

export namespace _T_Type_Node {
    
    export namespace SG {
        export type _boolean<G_Source> = null
        
        export namespace component {
            
            export namespace SG {
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<G_Source> = _T_Imports.D<G_Source>
                    }
                    export type _import<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    
                    export namespace _type {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<G_Source> = _T_Types.D<G_Source>
                    }
                    export type _type<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
                }
                export type external<G_Source> = {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
                }
                
                export namespace internal {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Types.D<G_Source>
                }
                export type internal<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
                
                export namespace internal_cyclic {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Types.D<G_Source>
                }
                export type internal_cyclic<G_Source> = _i_core._T_Reference_To_Circular_Dependent_Sibling<G_Source, _T_Types.D<G_Source>>
            }
            export type SG<G_Source> = 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<G_Source, _T_Types.D<G_Source>>]
        }
        export type component<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<G_Source, _T_Types.D<G_Source>>]
        >
        
        export namespace dictionary {
        }
        export type dictionary<G_Source> = _T_Dictionary<G_Source>
        
        export namespace group {
        }
        export type group<G_Source> = _T_Group<G_Source>
        
        export namespace identifier_value_pair {
        }
        export type identifier_value_pair<G_Source> = _T_Type_Node<G_Source>
        
        export namespace list {
            
            export namespace node {
            }
            export type node<G_Source> = _T_Type_Node<G_Source>
        }
        export type list<G_Source> = {
            readonly 'node': _T_Type_Node<G_Source>
        }
        export type nothing<G_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Globals.number_types.D<G_Source>
                }
                export type global<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.number_types.D<G_Source>>
                
                export namespace local {
                }
                export type local<G_Source> = _T_Number_Type<G_Source>
            }
            export type SG<G_Source> = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.number_types.D<G_Source>>]
                | readonly ['local', _T_Number_Type<G_Source>]
        }
        export type _number<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.number_types.D<G_Source>>]
            | readonly ['local', _T_Number_Type<G_Source>]
        >
        
        export namespace optional {
        }
        export type optional<G_Source> = _T_Type_Node<G_Source>
        
        export namespace reference {
            
            export namespace referent {
            }
            export type referent<G_Source> = _T_Type_Node_Reference<G_Source>
            
            export namespace _type {
                
                export namespace SG {
                    export type derived<G_Source> = null
                    
                    export namespace selected {
                        
                        export namespace dependency {
                            
                            export namespace SG {
                                export type acyclic<G_Source> = null
                                export type cyclic<G_Source> = null
                                export type stack<G_Source> = null
                            }
                            export type SG<G_Source> = 
                                | readonly ['acyclic', null]
                                | readonly ['cyclic', null]
                                | readonly ['stack', null]
                        }
                        export type dependency<G_Source> = _i_core._T_State_Group<G_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        
                        export namespace dictionary {
                            
                            export namespace Type {
                            }
                            export type Type<G_Source> = _T_Dictionary<G_Source>
                        }
                        export type dictionary<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                    }
                    export type selected<G_Source> = {
                        readonly 'dependency': _i_core._T_State_Group<G_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['derived', null]
                    | readonly ['selected', {
                        readonly 'dependency': _i_core._T_State_Group<G_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                    }]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<G_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                }]
            >
        }
        export type reference<G_Source> = {
            readonly 'referent': _T_Type_Node_Reference<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<G_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                }]
            >
        }
        
        export namespace state_group {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Type_Node<G_Source>
        }
        export type state_group<G_Source> = _i_core._T_Dictionary<G_Source, _T_Type_Node<G_Source>>
        
        export namespace text {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Globals.text_types.D<G_Source>
                }
                export type global<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.text_types.D<G_Source>>
                
                export namespace local {
                }
                export type local<G_Source> = _T_Text_Type<G_Source>
            }
            export type SG<G_Source> = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.text_types.D<G_Source>>]
                | readonly ['local', _T_Text_Type<G_Source>]
        }
        export type text<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.text_types.D<G_Source>>]
            | readonly ['local', _T_Text_Type<G_Source>]
        >
        
        export namespace type_parameter {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<G_Source> = _T_Type_Parameters.D<G_Source>
        }
        export type type_parameter<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Parameters.D<G_Source>>
    }
    export type SG<G_Source> = 
        | readonly ['boolean', null]
        | readonly ['component', _i_core._T_State_Group<G_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<G_Source, _T_Types.D<G_Source>>]
        >]
        | readonly ['dictionary', _T_Dictionary<G_Source>]
        | readonly ['group', _T_Group<G_Source>]
        | readonly ['identifier value pair', _T_Type_Node<G_Source>]
        | readonly ['list', {
            readonly 'node': _T_Type_Node<G_Source>
        }]
        | readonly ['nothing', null]
        | readonly ['number', _i_core._T_State_Group<G_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.number_types.D<G_Source>>]
            | readonly ['local', _T_Number_Type<G_Source>]
        >]
        | readonly ['optional', _T_Type_Node<G_Source>]
        | readonly ['reference', {
            readonly 'referent': _T_Type_Node_Reference<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<G_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                }]
            >
        }]
        | readonly ['state group', _i_core._T_Dictionary<G_Source, _T_Type_Node<G_Source>>]
        | readonly ['text', _i_core._T_State_Group<G_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.text_types.D<G_Source>>]
            | readonly ['local', _T_Text_Type<G_Source>]
        >]
        | readonly ['type parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Parameters.D<G_Source>>]
}

export namespace _T_Type_Node_Reference {
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Type_Node<G_Source>
    }
    export type resulting_node<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
    
    export namespace tail {
        
        export namespace L {
            
            export namespace SG {
                export type dictionary<G_Source> = null
                
                export namespace group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Group.D<G_Source>
                }
                export type group<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>
                export type identifier_value_pair<G_Source> = null
                export type list<G_Source> = null
                export type optional<G_Source> = null
                
                export namespace state_group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Type_Node.SG.state_group.D<G_Source>
                }
                export type state_group<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }
            export type SG<G_Source> = 
                | readonly ['dictionary', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
                | readonly ['identifier value pair', null]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>]
        }
        export type L<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['dictionary', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
            | readonly ['identifier value pair', null]
            | readonly ['list', null]
            | readonly ['optional', null]
            | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>]
        >
    }
    export type tail<G_Source> = _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
        | readonly ['dictionary', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
        | readonly ['identifier value pair', null]
        | readonly ['list', null]
        | readonly ['optional', null]
        | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>]
    >>
    
    export namespace type_location {
    }
    export type type_location<G_Source> = _T_Type_Reference<G_Source>
}

export namespace _T_Type_Parameters {
    export type D<G_Source> = null
}

export namespace _T_Type_Reference {
    
    export namespace location {
        
        export namespace SG {
            
            export namespace external {
                
                export namespace _import {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Imports.D<G_Source>
                }
                export type _import<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                
                export namespace _type {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Types.D<G_Source>
                }
                export type _type<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
            }
            export type external<G_Source> = {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
            }
            
            export namespace internal {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Types.D<G_Source>
            }
            export type internal<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
        }
        export type SG<G_Source> = 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
    }
    export type location<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['external', {
            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
        }]
        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
    >
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Type_Node<G_Source>
    }
    export type resulting_node<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
}

export namespace _T_Types {
    
    export namespace D {
    }
    export type D<G_Source> = _T_Type<G_Source>
}

// *** ALIASES FOR NESTED TYPES

export namespace Benchmark {
    export type dense<G_Source> = boolean
    
    export namespace resulting_dictionary {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Dictionary<G_Source>
    }
    export type resulting_dictionary<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
    
    export namespace selection {
    }
    export type selection<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
}

export namespace Constraint {
    
    export namespace selection {
    }
    export type selection<G_Source> = _T_Relative_Value_Selection<G_Source>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace optional_value {
                
                export namespace selected_optional_value {
                    
                    export namespace Type {
                    }
                    export type Type<G_Source> = _T_Type_Node.SG.optional<G_Source>
                }
                export type selected_optional_value<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.optional<G_Source>>
            }
            export type optional_value<G_Source> = {
                readonly 'selected optional value': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.optional<G_Source>>
            }
            
            export namespace state {
                
                export namespace selected_state_group {
                    
                    export namespace Type {
                    }
                    export type Type<G_Source> = _T_Type_Node.SG.state_group<G_Source>
                }
                export type selected_state_group<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                
                export namespace state {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Type_Node.SG.state_group.D<G_Source>
                }
                export type state<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }
            export type state<G_Source> = {
                readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }
        }
        export type SG<G_Source> = 
            | readonly ['optional value', {
                readonly 'selected optional value': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.optional<G_Source>>
            }]
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }]
    }
    export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['optional value', {
            readonly 'selected optional value': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.optional<G_Source>>
        }]
        | readonly ['state', {
            readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
        }]
    >
}

export namespace Dictionary {
    
    export namespace node {
    }
    export type node<G_Source> = _T_Type_Node<G_Source>
    export type ordered<G_Source> = boolean
}

export namespace Globals {
    
    export namespace complexity {
        
        export namespace SG {
            export type constrained<G_Source> = null
            export type unconstrained<G_Source> = null
        }
        export type SG<G_Source> = 
            | readonly ['constrained', null]
            | readonly ['unconstrained', null]
    }
    export type complexity<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['constrained', null]
        | readonly ['unconstrained', null]
    >
    
    export namespace number_types {
        
        export namespace D {
        }
        export type D<G_Source> = _T_Number_Type<G_Source>
    }
    export type number_types<G_Source> = _i_core._T_Dictionary<G_Source, _T_Number_Type<G_Source>>
    
    export namespace text_types {
        
        export namespace D {
        }
        export type D<G_Source> = _T_Text_Type<G_Source>
    }
    export type text_types<G_Source> = _i_core._T_Dictionary<G_Source, _T_Text_Type<G_Source>>
}

export namespace Group {
    
    export namespace D {
    }
    export type D<G_Source> = _T_Type_Node<G_Source>
}

export namespace Guaranteed_Value_Selection {
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Type_Node<G_Source>
    }
    export type resulting_node<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
    
    export namespace start {
        
        export namespace SG {
            
            export namespace constraint {
                
                export namespace SG {
                    
                    export namespace component {
                        
                        export namespace constraint {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Property_Constraints.D<G_Source>
                        }
                        export type constraint<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                        }
                        export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                    export type component<G_Source> = {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                    
                    export namespace reference {
                        
                        export namespace constraint {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Property_Constraints.D<G_Source>
                        }
                        export type constraint<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                        }
                        export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                    export type reference<G_Source> = {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['component', {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }]
                    | readonly ['reference', {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }]
            }
            export type constraint<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['component', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
                | readonly ['reference', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
            >
            export type linked_entry<G_Source> = null
            export type list_cursor<G_Source> = null
            
            export namespace option_constraint {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Option_Constraints.D<G_Source>
            }
            export type option_constraint<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Option_Constraints.D<G_Source>>
            
            export namespace parameter {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Signature_Parameters.values.D<G_Source>
            }
            export type parameter<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>
            
            export namespace parent_sibling {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
            }
            export type parent_sibling<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            
            export namespace result {
                
                export namespace SG {
                    
                    export namespace list {
                        
                        export namespace list_result {
                            
                            export namespace Type {
                            }
                            export type Type<G_Source> = _T_Node_Resolver.SG.list.result.O<G_Source>
                        }
                        export type list_result<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                        }
                        export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                    export type list<G_Source> = {
                        readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }
                    
                    export namespace optional_value {
                        
                        export namespace optional_value {
                            
                            export namespace Type {
                            }
                            export type Type<G_Source> = _T_Node_Resolver.SG.optional<G_Source>
                        }
                        export type optional_value<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                        }
                        export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        
                        export namespace result {
                        }
                        export type result<G_Source> = _T_Type_Reference<G_Source>
                    }
                    export type optional_value<G_Source> = {
                        readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        readonly 'result': _T_Type_Reference<G_Source>
                    }
                    
                    export namespace state_group {
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                        }
                        export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        
                        export namespace result {
                        }
                        export type result<G_Source> = _T_Type_Reference<G_Source>
                        
                        export namespace state_group {
                            
                            export namespace Type {
                            }
                            export type Type<G_Source> = _T_Node_Resolver.SG.state_group<G_Source>
                        }
                        export type state_group<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                    }
                    export type state_group<G_Source> = {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        readonly 'result': _T_Type_Reference<G_Source>
                        readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['list', {
                        readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    }]
                    | readonly ['optional value', {
                        readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        readonly 'result': _T_Type_Reference<G_Source>
                    }]
                    | readonly ['state group', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                        readonly 'result': _T_Type_Reference<G_Source>
                        readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                    }]
            }
            export type result<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['list', {
                    readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                }]
            >
            
            export namespace sibling {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
            }
            export type sibling<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
        }
        export type SG<G_Source> = 
            | readonly ['constraint', _i_core._T_State_Group<G_Source, 
                | readonly ['component', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
                | readonly ['reference', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
            >]
            | readonly ['linked entry', null]
            | readonly ['list cursor', null]
            | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Option_Constraints.D<G_Source>>]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
            | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>]
            | readonly ['result', _i_core._T_State_Group<G_Source, 
                | readonly ['list', {
                    readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                }]
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                }]
            >]
            | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>]
    }
    export type start<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['constraint', _i_core._T_State_Group<G_Source, 
            | readonly ['component', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            }]
            | readonly ['reference', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Property_Constraints.D<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            }]
        >]
        | readonly ['linked entry', null]
        | readonly ['list cursor', null]
        | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Option_Constraints.D<G_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
        | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>]
        | readonly ['result', _i_core._T_State_Group<G_Source, 
            | readonly ['list', {
                readonly 'list result': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.list.result.O<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
            }]
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
                readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
            }]
        >]
        | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>]
    >
    
    export namespace tail {
    }
    export type tail<G_Source> = _T_Relative_Value_Selection<G_Source>
}

export namespace Imports {
    
    export namespace D {
        
        export namespace schema {
            
            export namespace Type {
            }
            export type Type<G_Source> = _T_Schemas.D.SG.schema<G_Source>
        }
        export type schema<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Schemas.D.SG.schema<G_Source>>
        
        export namespace schema_set_child {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<G_Source> = _T_Schemas.D<G_Source>
        }
        export type schema_set_child<G_Source> = _i_core._T_Reference_To_Stacked_Dictionary_Entry<G_Source, _T_Schemas.D<G_Source>>
    }
    export type D<G_Source> = {
        readonly 'schema': _i_core._T_Derived_Reference<G_Source, _T_Schemas.D.SG.schema<G_Source>>
        readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<G_Source, _T_Schemas.D<G_Source>>
    }
}

export namespace Lookup_Selection {
    
    export namespace resulting_dictionary {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Dictionary<G_Source>
    }
    export type resulting_dictionary<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace dictionary {
                
                export namespace selected_dictionary {
                    
                    export namespace Type {
                    }
                    export type Type<G_Source> = _T_Dictionary<G_Source>
                }
                export type selected_dictionary<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                
                export namespace selection {
                }
                export type selection<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
            }
            export type dictionary<G_Source> = {
                readonly 'selected dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
            }
            
            export namespace not_circular_dependent_siblings {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Dictionary<G_Source>
            }
            export type not_circular_dependent_siblings<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            
            export namespace parameter {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Signature_Parameters.lookups.D<G_Source>
            }
            export type parameter<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.lookups.D<G_Source>>
            
            export namespace possibly_circular_dependent_siblings {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Dictionary<G_Source>
            }
            export type possibly_circular_dependent_siblings<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
        }
        export type SG<G_Source> = 
            | readonly ['dictionary', {
                readonly 'selected dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
            }]
            | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.lookups.D<G_Source>>]
            | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>]
    }
    export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['dictionary', {
            readonly 'selected dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
        }]
        | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.lookups.D<G_Source>>]
        | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>]
    >
}

export namespace Node_Resolver {
    
    export namespace SG {
        export type _boolean<G_Source> = null
        
        export namespace component {
            
            export namespace _arguments {
                
                export namespace O {
                    
                    export namespace lookups {
                        
                        export namespace O {
                            
                            export namespace D {
                                
                                export namespace SG {
                                    export type empty_stack<G_Source> = null
                                    export type not_set<G_Source> = null
                                    
                                    export namespace selection {
                                    }
                                    export type selection<G_Source> = _T_Lookup_Selection<G_Source>
                                    
                                    export namespace stack {
                                        
                                        export namespace element {
                                        }
                                        export type element<G_Source> = _T_Lookup_Selection<G_Source>
                                        
                                        export namespace stack {
                                        }
                                        export type stack<G_Source> = _T_Lookup_Selection<G_Source>
                                    }
                                    export type stack<G_Source> = {
                                        readonly 'element': _T_Lookup_Selection<G_Source>
                                        readonly 'stack': _T_Lookup_Selection<G_Source>
                                    }
                                }
                                export type SG<G_Source> = 
                                    | readonly ['empty stack', null]
                                    | readonly ['not set', null]
                                    | readonly ['selection', _T_Lookup_Selection<G_Source>]
                                    | readonly ['stack', {
                                        readonly 'element': _T_Lookup_Selection<G_Source>
                                        readonly 'stack': _T_Lookup_Selection<G_Source>
                                    }]
                            }
                            export type D<G_Source> = _i_core._T_State_Group<G_Source, 
                                | readonly ['empty stack', null]
                                | readonly ['not set', null]
                                | readonly ['selection', _T_Lookup_Selection<G_Source>]
                                | readonly ['stack', {
                                    readonly 'element': _T_Lookup_Selection<G_Source>
                                    readonly 'stack': _T_Lookup_Selection<G_Source>
                                }]
                            >
                        }
                        export type O<G_Source> = _i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                            | readonly ['empty stack', null]
                            | readonly ['not set', null]
                            | readonly ['selection', _T_Lookup_Selection<G_Source>]
                            | readonly ['stack', {
                                readonly 'element': _T_Lookup_Selection<G_Source>
                                readonly 'stack': _T_Lookup_Selection<G_Source>
                            }]
                        >>
                    }
                    export type lookups<G_Source> = _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection<G_Source>]
                        | readonly ['stack', {
                            readonly 'element': _T_Lookup_Selection<G_Source>
                            readonly 'stack': _T_Lookup_Selection<G_Source>
                        }]
                    >>>
                    
                    export namespace values {
                        
                        export namespace O {
                            
                            export namespace D {
                                
                                export namespace SG {
                                    
                                    export namespace optional {
                                    }
                                    export type optional<G_Source> = _T_Optional_Value_Initialization<G_Source>
                                    
                                    export namespace parameter {
                                        
                                        export namespace Dictionary_Entry {
                                        }
                                        export type Dictionary_Entry<G_Source> = _T_Signature_Parameters.values.D<G_Source>
                                    }
                                    export type parameter<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>
                                    
                                    export namespace required {
                                    }
                                    export type required<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
                                }
                                export type SG<G_Source> = 
                                    | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                                    | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                            }
                            export type D<G_Source> = _i_core._T_State_Group<G_Source, 
                                | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                                | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                            >
                        }
                        export type O<G_Source> = _i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                            | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                            | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                        >>
                    }
                    export type values<G_Source> = _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                        | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                        | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                    >>>
                }
                export type O<G_Source> = {
                    readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection<G_Source>]
                        | readonly ['stack', {
                            readonly 'element': _T_Lookup_Selection<G_Source>
                            readonly 'stack': _T_Lookup_Selection<G_Source>
                        }]
                    >>>
                    readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                        | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                        | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                    >>>
                }
            }
            export type _arguments<G_Source> = _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<G_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<G_Source>
                        readonly 'stack': _T_Lookup_Selection<G_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                >>>
            }>
            
            export namespace constraints {
            }
            export type constraints<G_Source> = _T_Property_Constraints<G_Source>
            
            export namespace location {
                
                export namespace SG {
                    
                    export namespace external {
                        
                        export namespace _import {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Imports.D<G_Source>
                        }
                        export type _import<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                        
                        export namespace _type {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<G_Source> = _T_Signatures.D<G_Source>
                        }
                        export type _type<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                    }
                    export type external<G_Source> = {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                    }
                    
                    export namespace internal {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<G_Source> = _T_Signatures.D<G_Source>
                    }
                    export type internal<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                }
                export type SG<G_Source> = 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
            }
            export type location<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
            >
            
            export namespace signature {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Signatures.D<G_Source>
            }
            export type signature<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
        }
        export type component<G_Source> = {
            readonly 'arguments': _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<G_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<G_Source>
                        readonly 'stack': _T_Lookup_Selection<G_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                >>>
            }>
            readonly 'constraints': _T_Property_Constraints<G_Source>
            readonly 'location': _i_core._T_State_Group<G_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
            >
            readonly 'signature': _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
        }
        
        export namespace dictionary {
            
            export namespace benchmark {
                
                export namespace O {
                }
                export type O<G_Source> = _T_Benchmark<G_Source>
            }
            export type benchmark<G_Source> = _pt.Optional_Value<_T_Benchmark<G_Source>>
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Dictionary<G_Source>
            }
            export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            
            export namespace resolver {
            }
            export type resolver<G_Source> = _T_Node_Resolver<G_Source>
        }
        export type dictionary<G_Source> = {
            readonly 'benchmark': _pt.Optional_Value<_T_Benchmark<G_Source>>
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            readonly 'resolver': _T_Node_Resolver<G_Source>
        }
        
        export namespace group {
        }
        export type group<G_Source> = _T_Node_Resolver_Group<G_Source>
        
        export namespace identifier_value_pair {
        }
        export type identifier_value_pair<G_Source> = _T_Node_Resolver<G_Source>
        
        export namespace list {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Type_Node.SG.list<G_Source>
            }
            export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.list<G_Source>>
            
            export namespace resolver {
            }
            export type resolver<G_Source> = _T_Node_Resolver<G_Source>
            
            export namespace result {
                
                export namespace O {
                }
                export type O<G_Source> = _T_Node_Resolver_List_Result<G_Source>
            }
            export type result<G_Source> = _pt.Optional_Value<_T_Node_Resolver_List_Result<G_Source>>
        }
        export type list<G_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.list<G_Source>>
            readonly 'resolver': _T_Node_Resolver<G_Source>
            readonly 'result': _pt.Optional_Value<_T_Node_Resolver_List_Result<G_Source>>
        }
        export type nothing<G_Source> = null
        export type _number<G_Source> = null
        
        export namespace optional {
            
            export namespace constraints {
            }
            export type constraints<G_Source> = _T_Option_Constraints<G_Source>
            
            export namespace resolver {
            }
            export type resolver<G_Source> = _T_Node_Resolver<G_Source>
        }
        export type optional<G_Source> = {
            readonly 'constraints': _T_Option_Constraints<G_Source>
            readonly 'resolver': _T_Node_Resolver<G_Source>
        }
        
        export namespace reference {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Type_Node.SG.reference<G_Source>
            }
            export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace derived {
                        
                        export namespace value {
                        }
                        export type value<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
                    }
                    export type derived<G_Source> = {
                        readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
                    }
                    
                    export namespace selected {
                        
                        export namespace constraints {
                        }
                        export type constraints<G_Source> = _T_Property_Constraints<G_Source>
                        
                        export namespace definition {
                            
                            export namespace Type {
                            }
                            export type Type<G_Source> = _T_Type_Node.SG.reference._type.SG.selected<G_Source>
                        }
                        export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                        
                        export namespace lookup {
                        }
                        export type lookup<G_Source> = _T_Lookup_Selection<G_Source>
                    }
                    export type selected<G_Source> = {
                        readonly 'constraints': _T_Property_Constraints<G_Source>
                        readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                        readonly 'lookup': _T_Lookup_Selection<G_Source>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['derived', {
                        readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
                    }]
                    | readonly ['selected', {
                        readonly 'constraints': _T_Property_Constraints<G_Source>
                        readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                        readonly 'lookup': _T_Lookup_Selection<G_Source>
                    }]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<G_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                    readonly 'lookup': _T_Lookup_Selection<G_Source>
                }]
            >
        }
        export type reference<G_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<G_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                    readonly 'lookup': _T_Lookup_Selection<G_Source>
                }]
            >
        }
        
        export namespace state_group {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Type_Node.SG.state_group<G_Source>
            }
            export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            
            export namespace states {
                
                export namespace D {
                    
                    export namespace constraints {
                    }
                    export type constraints<G_Source> = _T_Option_Constraints<G_Source>
                    
                    export namespace resolver {
                    }
                    export type resolver<G_Source> = _T_Node_Resolver<G_Source>
                }
                export type D<G_Source> = {
                    readonly 'constraints': _T_Option_Constraints<G_Source>
                    readonly 'resolver': _T_Node_Resolver<G_Source>
                }
            }
            export type states<G_Source> = _i_core._T_Dictionary<G_Source, {
                readonly 'constraints': _T_Option_Constraints<G_Source>
                readonly 'resolver': _T_Node_Resolver<G_Source>
            }>
        }
        export type state_group<G_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            readonly 'states': _i_core._T_Dictionary<G_Source, {
                readonly 'constraints': _T_Option_Constraints<G_Source>
                readonly 'resolver': _T_Node_Resolver<G_Source>
            }>
        }
        export type text<G_Source> = null
        export type type_parameter<G_Source> = null
    }
    export type SG<G_Source> = 
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'arguments': _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<G_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<G_Source>
                        readonly 'stack': _T_Lookup_Selection<G_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<G_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<G_Source>]
                >>>
            }>
            readonly 'constraints': _T_Property_Constraints<G_Source>
            readonly 'location': _i_core._T_State_Group<G_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
            >
            readonly 'signature': _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
        }]
        | readonly ['dictionary', {
            readonly 'benchmark': _pt.Optional_Value<_T_Benchmark<G_Source>>
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            readonly 'resolver': _T_Node_Resolver<G_Source>
        }]
        | readonly ['group', _T_Node_Resolver_Group<G_Source>]
        | readonly ['identifier value pair', _T_Node_Resolver<G_Source>]
        | readonly ['list', {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.list<G_Source>>
            readonly 'resolver': _T_Node_Resolver<G_Source>
            readonly 'result': _pt.Optional_Value<_T_Node_Resolver_List_Result<G_Source>>
        }]
        | readonly ['nothing', null]
        | readonly ['number', null]
        | readonly ['optional', {
            readonly 'constraints': _T_Option_Constraints<G_Source>
            readonly 'resolver': _T_Node_Resolver<G_Source>
        }]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<G_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<G_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference._type.SG.selected<G_Source>>
                    readonly 'lookup': _T_Lookup_Selection<G_Source>
                }]
            >
        }]
        | readonly ['state group', {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            readonly 'states': _i_core._T_Dictionary<G_Source, {
                readonly 'constraints': _T_Option_Constraints<G_Source>
                readonly 'resolver': _T_Node_Resolver<G_Source>
            }>
        }]
        | readonly ['text', null]
        | readonly ['type parameter', null]
}

export namespace Node_Resolver_Group {
    
    export namespace D {
        
        export namespace definition {
            
            export namespace Type {
            }
            export type Type<G_Source> = _T_Group.D<G_Source>
        }
        export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Group.D<G_Source>>
        
        export namespace resolver {
        }
        export type resolver<G_Source> = _T_Node_Resolver<G_Source>
    }
    export type D<G_Source> = {
        readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Group.D<G_Source>>
        readonly 'resolver': _T_Node_Resolver<G_Source>
    }
}

export namespace Node_Resolver_List_Result {
}

export namespace Number_Type {
    
    export namespace precision {
        
        export namespace SG {
            
            export namespace approximation {
                export type significant_digits<G_Source> = number
            }
            export type approximation<G_Source> = {
                readonly 'significant digits': number
            }
            
            export namespace exact {
                
                export namespace decimal_separator_offset {
                    export type O<G_Source> = number
                }
                export type decimal_separator_offset<G_Source> = _pt.Optional_Value<number>
                
                export namespace _type {
                    
                    export namespace SG {
                        export type integer<G_Source> = null
                        export type natural<G_Source> = null
                        export type positive_natural<G_Source> = null
                    }
                    export type SG<G_Source> = 
                        | readonly ['integer', null]
                        | readonly ['natural', null]
                        | readonly ['positive natural', null]
                }
                export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }
            export type exact<G_Source> = {
                readonly 'decimal separator offset': _pt.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<G_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }
        }
        export type SG<G_Source> = 
            | readonly ['approximation', {
                readonly 'significant digits': number
            }]
            | readonly ['exact', {
                readonly 'decimal separator offset': _pt.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<G_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }]
    }
    export type precision<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['approximation', {
            readonly 'significant digits': number
        }]
        | readonly ['exact', {
            readonly 'decimal separator offset': _pt.Optional_Value<number>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['integer', null]
                | readonly ['natural', null]
                | readonly ['positive natural', null]
            >
        }]
    >
}

export namespace Option_Constraints {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace assert_is_set {
            }
            export type assert_is_set<G_Source> = _T_Possible_Value_Selection<G_Source>
            
            export namespace state {
                
                export namespace selected_state_group {
                    
                    export namespace Type {
                    }
                    export type Type<G_Source> = _T_Type_Node.SG.state_group<G_Source>
                }
                export type selected_state_group<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                
                export namespace selection {
                }
                export type selection<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
                
                export namespace state {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Type_Node.SG.state_group.D<G_Source>
                }
                export type state<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }
            export type state<G_Source> = {
                readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }
        }
        export type SG<G_Source> = 
            | readonly ['assert is set', _T_Possible_Value_Selection<G_Source>]
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['assert is set', _T_Possible_Value_Selection<G_Source>]
        | readonly ['state', {
            readonly 'selected state group': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.state_group<G_Source>>
            readonly 'selection': _T_Guaranteed_Value_Selection<G_Source>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
        }]
    >
}

export namespace Optional_Value_Initialization {
    
    export namespace SG {
        export type not_set<G_Source> = null
        
        export namespace selection {
        }
        export type selection<G_Source> = _T_Possible_Value_Selection<G_Source>
        
        export namespace _set {
        }
        export type _set<G_Source> = _T_Guaranteed_Value_Selection<G_Source>
    }
    export type SG<G_Source> = 
        | readonly ['not set', null]
        | readonly ['selection', _T_Possible_Value_Selection<G_Source>]
        | readonly ['set', _T_Guaranteed_Value_Selection<G_Source>]
}

export namespace Possible_Value_Selection {
    
    export namespace SG {
        
        export namespace parameter {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<G_Source> = _T_Signature_Parameters.values.D<G_Source>
        }
        export type parameter<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>
        
        export namespace result {
            
            export namespace SG {
                
                export namespace optional_value {
                    
                    export namespace optional_value {
                        
                        export namespace Type {
                        }
                        export type Type<G_Source> = _T_Node_Resolver.SG.optional<G_Source>
                    }
                    export type optional_value<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                    
                    export namespace property {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                    }
                    export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    
                    export namespace result {
                    }
                    export type result<G_Source> = _T_Type_Reference<G_Source>
                }
                export type optional_value<G_Source> = {
                    readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                }
                
                export namespace state_group {
                    
                    export namespace property {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<G_Source> = _T_Node_Resolver_Group.D<G_Source>
                    }
                    export type property<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    
                    export namespace result {
                    }
                    export type result<G_Source> = _T_Type_Reference<G_Source>
                    
                    export namespace state_group {
                        
                        export namespace Type {
                        }
                        export type Type<G_Source> = _T_Node_Resolver.SG.state_group<G_Source>
                    }
                    export type state_group<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                }
                export type state_group<G_Source> = {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                }
            }
            export type SG<G_Source> = 
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                    readonly 'result': _T_Type_Reference<G_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
                }]
        }
        export type result<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
                readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
            }]
        >
    }
    export type SG<G_Source> = 
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signature_Parameters.values.D<G_Source>>]
        | readonly ['result', _i_core._T_State_Group<G_Source, 
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.optional<G_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Node_Resolver_Group.D<G_Source>>
                readonly 'result': _T_Type_Reference<G_Source>
                readonly 'state group': _i_core._T_Derived_Reference<G_Source, _T_Node_Resolver.SG.state_group<G_Source>>
            }]
        >]
}

export namespace Presence {
    
    export namespace SG {
        export type optional<G_Source> = null
        export type required<G_Source> = null
    }
    export type SG<G_Source> = 
        | readonly ['optional', null]
        | readonly ['required', null]
}

export namespace Property_Constraint {
    
    export namespace constraint {
    }
    export type constraint<G_Source> = _T_Constraint<G_Source>
    
    export namespace start {
        
        export namespace SG {
            export type property<G_Source> = null
            
            export namespace sibling {
            }
            export type sibling<G_Source> = _T_Reference_To_Property_Constraint<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['property', null]
            | readonly ['sibling', _T_Reference_To_Property_Constraint<G_Source>]
    }
    export type start<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['property', null]
        | readonly ['sibling', _T_Reference_To_Property_Constraint<G_Source>]
    >
}

export namespace Property_Constraints {
    
    export namespace D {
    }
    export type D<G_Source> = _T_Property_Constraint<G_Source>
}

export namespace Reference_To_Property_Constraint {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry<G_Source> = _T_Property_Constraints.D<G_Source>
}

export namespace Relative_Value_Selection {
    
    export namespace path {
        
        export namespace L {
            
            export namespace SG {
                export type component<G_Source> = null
                
                export namespace group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Group.D<G_Source>
                }
                export type group<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>
                
                export namespace reference {
                    
                    export namespace definition {
                        
                        export namespace Type {
                        }
                        export type Type<G_Source> = _T_Type_Node.SG.reference<G_Source>
                    }
                    export type definition<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
                }
                export type reference<G_Source> = {
                    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
                }
            }
            export type SG<G_Source> = 
                | readonly ['component', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
                | readonly ['reference', {
                    readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
                }]
        }
        export type L<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['component', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
            | readonly ['reference', {
                readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
            }]
        >
    }
    export type path<G_Source> = _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
        | readonly ['component', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<G_Source, _T_Type_Node.SG.reference<G_Source>>
        }]
    >>
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Type_Node<G_Source>
    }
    export type resulting_node<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
}

export namespace Resolve_Logic {
    
    export namespace resolvers {
    }
    export type resolvers<G_Source> = _T_Resolvers<G_Source>
    
    export namespace signatures {
        
        export namespace types {
        }
        export type types<G_Source> = _T_Signatures<G_Source>
    }
    export type signatures<G_Source> = {
        readonly 'types': _T_Signatures<G_Source>
    }
}

export namespace Resolvers {
    
    export namespace D {
        
        export namespace signature {
            
            export namespace Type {
            }
            export type Type<G_Source> = _T_Signatures.D<G_Source>
        }
        export type signature<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
        
        export namespace type_resolver {
        }
        export type type_resolver<G_Source> = _T_Node_Resolver<G_Source>
    }
    export type D<G_Source> = {
        readonly 'signature': _i_core._T_Derived_Reference<G_Source, _T_Signatures.D<G_Source>>
        readonly 'type resolver': _T_Node_Resolver<G_Source>
    }
}

export namespace Schema {
    
    export namespace complexity {
        
        export namespace SG {
            
            export namespace constrained {
            }
            export type constrained<G_Source> = _T_Resolve_Logic<G_Source>
            export type unconstrained<G_Source> = null
        }
        export type SG<G_Source> = 
            | readonly ['constrained', _T_Resolve_Logic<G_Source>]
            | readonly ['unconstrained', null]
    }
    export type complexity<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['constrained', _T_Resolve_Logic<G_Source>]
        | readonly ['unconstrained', null]
    >
    
    export namespace globals {
    }
    export type globals<G_Source> = _T_Globals<G_Source>
    
    export namespace imports {
    }
    export type imports<G_Source> = _T_Imports<G_Source>
    
    export namespace types {
    }
    export type types<G_Source> = _T_Types<G_Source>
}

export namespace Schemas {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace schema {
            }
            export type schema<G_Source> = _T_Schema<G_Source>
            
            export namespace _set {
            }
            export type _set<G_Source> = _T_Schemas<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['schema', _T_Schema<G_Source>]
            | readonly ['set', _T_Schemas<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['schema', _T_Schema<G_Source>]
        | readonly ['set', _T_Schemas<G_Source>]
    >
}

export namespace Signature {
    
    export namespace parameters {
        
        export namespace SG {
            
            export namespace local {
            }
            export type local<G_Source> = _T_Signature_Parameters<G_Source>
            
            export namespace same_as {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Signatures.D<G_Source>
            }
            export type same_as<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>
        }
        export type SG<G_Source> = 
            | readonly ['local', _T_Signature_Parameters<G_Source>]
            | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
    }
    export type parameters<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['local', _T_Signature_Parameters<G_Source>]
        | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Signatures.D<G_Source>>]
    >
    
    export namespace resolved_parameters {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Signature_Parameters<G_Source>
    }
    export type resolved_parameters<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Signature_Parameters<G_Source>>
    
    export namespace _type {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Type<G_Source>
    }
    export type _type<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type<G_Source>>
}

export namespace Signature_Parameters {
    
    export namespace lookups {
        
        export namespace D {
            
            export namespace dictionary {
                
                export namespace Type {
                }
                export type Type<G_Source> = _T_Dictionary<G_Source>
            }
            export type dictionary<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            
            export namespace presence {
            }
            export type presence<G_Source> = _T_Presence<G_Source>
            
            export namespace referent {
            }
            export type referent<G_Source> = _T_Type_Reference<G_Source>
            
            export namespace _type {
                
                export namespace SG {
                    export type acyclic<G_Source> = null
                    export type cyclic<G_Source> = null
                    export type stack<G_Source> = null
                }
                export type SG<G_Source> = 
                    | readonly ['acyclic', null]
                    | readonly ['cyclic', null]
                    | readonly ['stack', null]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['acyclic', null]
                | readonly ['cyclic', null]
                | readonly ['stack', null]
            >
        }
        export type D<G_Source> = {
            readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
            readonly 'presence': _T_Presence<G_Source>
            readonly 'referent': _T_Type_Reference<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['acyclic', null]
                | readonly ['cyclic', null]
                | readonly ['stack', null]
            >
        }
    }
    export type lookups<G_Source> = _i_core._T_Dictionary<G_Source, {
        readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
        readonly 'presence': _T_Presence<G_Source>
        readonly 'referent': _T_Type_Reference<G_Source>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['acyclic', null]
            | readonly ['cyclic', null]
            | readonly ['stack', null]
        >
    }>
    
    export namespace values {
        
        export namespace D {
            
            export namespace data_type {
            }
            export type data_type<G_Source> = _T_Type_Reference<G_Source>
            
            export namespace presence {
            }
            export type presence<G_Source> = _T_Presence<G_Source>
        }
        export type D<G_Source> = {
            readonly 'data type': _T_Type_Reference<G_Source>
            readonly 'presence': _T_Presence<G_Source>
        }
    }
    export type values<G_Source> = _i_core._T_Dictionary<G_Source, {
        readonly 'data type': _T_Type_Reference<G_Source>
        readonly 'presence': _T_Presence<G_Source>
    }>
}

export namespace Signatures {
    
    export namespace D {
    }
    export type D<G_Source> = _T_Signature<G_Source>
}

export namespace Text_Type {
    
    export namespace _type {
        
        export namespace SG {
            export type multi_line<G_Source> = null
            export type single_line<G_Source> = null
        }
        export type SG<G_Source> = 
            | readonly ['multi line', null]
            | readonly ['single line', null]
    }
    export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export namespace Type {
    
    export namespace node {
    }
    export type node<G_Source> = _T_Type_Node<G_Source>
    
    export namespace type_parameters {
    }
    export type type_parameters<G_Source> = _T_Type_Parameters<G_Source>
}

export namespace Type_Node {
    
    export namespace SG {
        export type _boolean<G_Source> = null
        
        export namespace component {
            
            export namespace SG {
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<G_Source> = _T_Imports.D<G_Source>
                    }
                    export type _import<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    
                    export namespace _type {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<G_Source> = _T_Types.D<G_Source>
                    }
                    export type _type<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
                }
                export type external<G_Source> = {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
                }
                
                export namespace internal {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Types.D<G_Source>
                }
                export type internal<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
                
                export namespace internal_cyclic {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Types.D<G_Source>
                }
                export type internal_cyclic<G_Source> = _i_core._T_Reference_To_Circular_Dependent_Sibling<G_Source, _T_Types.D<G_Source>>
            }
            export type SG<G_Source> = 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<G_Source, _T_Types.D<G_Source>>]
        }
        export type component<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<G_Source, _T_Types.D<G_Source>>]
        >
        
        export namespace dictionary {
        }
        export type dictionary<G_Source> = _T_Dictionary<G_Source>
        
        export namespace group {
        }
        export type group<G_Source> = _T_Group<G_Source>
        
        export namespace identifier_value_pair {
        }
        export type identifier_value_pair<G_Source> = _T_Type_Node<G_Source>
        
        export namespace list {
            
            export namespace node {
            }
            export type node<G_Source> = _T_Type_Node<G_Source>
        }
        export type list<G_Source> = {
            readonly 'node': _T_Type_Node<G_Source>
        }
        export type nothing<G_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Globals.number_types.D<G_Source>
                }
                export type global<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.number_types.D<G_Source>>
                
                export namespace local {
                }
                export type local<G_Source> = _T_Number_Type<G_Source>
            }
            export type SG<G_Source> = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.number_types.D<G_Source>>]
                | readonly ['local', _T_Number_Type<G_Source>]
        }
        export type _number<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.number_types.D<G_Source>>]
            | readonly ['local', _T_Number_Type<G_Source>]
        >
        
        export namespace optional {
        }
        export type optional<G_Source> = _T_Type_Node<G_Source>
        
        export namespace reference {
            
            export namespace referent {
            }
            export type referent<G_Source> = _T_Type_Node_Reference<G_Source>
            
            export namespace _type {
                
                export namespace SG {
                    export type derived<G_Source> = null
                    
                    export namespace selected {
                        
                        export namespace dependency {
                            
                            export namespace SG {
                                export type acyclic<G_Source> = null
                                export type cyclic<G_Source> = null
                                export type stack<G_Source> = null
                            }
                            export type SG<G_Source> = 
                                | readonly ['acyclic', null]
                                | readonly ['cyclic', null]
                                | readonly ['stack', null]
                        }
                        export type dependency<G_Source> = _i_core._T_State_Group<G_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        
                        export namespace dictionary {
                            
                            export namespace Type {
                            }
                            export type Type<G_Source> = _T_Dictionary<G_Source>
                        }
                        export type dictionary<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                    }
                    export type selected<G_Source> = {
                        readonly 'dependency': _i_core._T_State_Group<G_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['derived', null]
                    | readonly ['selected', {
                        readonly 'dependency': _i_core._T_State_Group<G_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                    }]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<G_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                }]
            >
        }
        export type reference<G_Source> = {
            readonly 'referent': _T_Type_Node_Reference<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<G_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                }]
            >
        }
        
        export namespace state_group {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Type_Node<G_Source>
        }
        export type state_group<G_Source> = _i_core._T_Dictionary<G_Source, _T_Type_Node<G_Source>>
        
        export namespace text {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Globals.text_types.D<G_Source>
                }
                export type global<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.text_types.D<G_Source>>
                
                export namespace local {
                }
                export type local<G_Source> = _T_Text_Type<G_Source>
            }
            export type SG<G_Source> = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.text_types.D<G_Source>>]
                | readonly ['local', _T_Text_Type<G_Source>]
        }
        export type text<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.text_types.D<G_Source>>]
            | readonly ['local', _T_Text_Type<G_Source>]
        >
        
        export namespace type_parameter {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<G_Source> = _T_Type_Parameters.D<G_Source>
        }
        export type type_parameter<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Parameters.D<G_Source>>
    }
    export type SG<G_Source> = 
        | readonly ['boolean', null]
        | readonly ['component', _i_core._T_State_Group<G_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<G_Source, _T_Types.D<G_Source>>]
        >]
        | readonly ['dictionary', _T_Dictionary<G_Source>]
        | readonly ['group', _T_Group<G_Source>]
        | readonly ['identifier value pair', _T_Type_Node<G_Source>]
        | readonly ['list', {
            readonly 'node': _T_Type_Node<G_Source>
        }]
        | readonly ['nothing', null]
        | readonly ['number', _i_core._T_State_Group<G_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.number_types.D<G_Source>>]
            | readonly ['local', _T_Number_Type<G_Source>]
        >]
        | readonly ['optional', _T_Type_Node<G_Source>]
        | readonly ['reference', {
            readonly 'referent': _T_Type_Node_Reference<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<G_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<G_Source, _T_Dictionary<G_Source>>
                }]
            >
        }]
        | readonly ['state group', _i_core._T_Dictionary<G_Source, _T_Type_Node<G_Source>>]
        | readonly ['text', _i_core._T_State_Group<G_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Globals.text_types.D<G_Source>>]
            | readonly ['local', _T_Text_Type<G_Source>]
        >]
        | readonly ['type parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Parameters.D<G_Source>>]
}

export namespace Type_Node_Reference {
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Type_Node<G_Source>
    }
    export type resulting_node<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
    
    export namespace tail {
        
        export namespace L {
            
            export namespace SG {
                export type dictionary<G_Source> = null
                
                export namespace group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Group.D<G_Source>
                }
                export type group<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>
                export type identifier_value_pair<G_Source> = null
                export type list<G_Source> = null
                export type optional<G_Source> = null
                
                export namespace state_group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Type_Node.SG.state_group.D<G_Source>
                }
                export type state_group<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>
            }
            export type SG<G_Source> = 
                | readonly ['dictionary', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
                | readonly ['identifier value pair', null]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>]
        }
        export type L<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['dictionary', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
            | readonly ['identifier value pair', null]
            | readonly ['list', null]
            | readonly ['optional', null]
            | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>]
        >
    }
    export type tail<G_Source> = _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
        | readonly ['dictionary', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Group.D<G_Source>>]
        | readonly ['identifier value pair', null]
        | readonly ['list', null]
        | readonly ['optional', null]
        | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Type_Node.SG.state_group.D<G_Source>>]
    >>
    
    export namespace type_location {
    }
    export type type_location<G_Source> = _T_Type_Reference<G_Source>
}

export namespace Type_Parameters {
    export type D<G_Source> = null
}

export namespace Type_Reference {
    
    export namespace location {
        
        export namespace SG {
            
            export namespace external {
                
                export namespace _import {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Imports.D<G_Source>
                }
                export type _import<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                
                export namespace _type {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<G_Source> = _T_Types.D<G_Source>
                }
                export type _type<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
            }
            export type external<G_Source> = {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
            }
            
            export namespace internal {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<G_Source> = _T_Types.D<G_Source>
            }
            export type internal<G_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
        }
        export type SG<G_Source> = 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
    }
    export type location<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['external', {
            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Imports.D<G_Source>>
            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>
        }]
        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<G_Source, _T_Types.D<G_Source>>]
    >
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<G_Source> = _T_Type_Node<G_Source>
    }
    export type resulting_node<G_Source> = _i_core._T_Derived_Reference<G_Source, _T_Type_Node<G_Source>>
}

export namespace Types {
    
    export namespace D {
    }
    export type D<G_Source> = _T_Type<G_Source>
}
