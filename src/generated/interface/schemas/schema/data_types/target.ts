import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unresolved"

// **** TYPES

export type _T_Benchmark<M_Source> = {
    readonly 'dense': boolean
    readonly 'resulting dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
    readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
}

export type _T_Constraint<M_Source> = {
    readonly 'selection': _T_Relative_Value_Selection<M_Source>
    readonly 'type': _i_core._T_State_Group<M_Source, 
        | readonly ['optional value', {
            readonly 'selected optional value': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.optional<M_Source>>
        }]
        | readonly ['state', {
            readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
        }]
    >
}

export type _T_Dictionary<M_Source> = {
    readonly 'node': _T_Type_Node<M_Source>
    readonly 'ordered': boolean
}

export type _T_Globals<M_Source> = {
    readonly 'complexity': _i_core._T_State_Group<M_Source, 
        | readonly ['constrained', null]
        | readonly ['unconstrained', null]
    >
    readonly 'number types': _i_core._T_Dictionary<M_Source, _T_Number_Type<M_Source>>
    readonly 'text types': _i_core._T_Dictionary<M_Source, _T_Text_Type<M_Source>>
}

export type _T_Group<M_Source> = _i_core._T_Ordered_Dictionary<M_Source, {
    readonly 'description': _pt.Optional_Value<string>
    readonly 'node': _T_Type_Node<M_Source>
}>

export type _T_Guaranteed_Value_Selection<M_Source> = {
    readonly 'resulting node': _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
    readonly 'start': _i_core._T_State_Group<M_Source, 
        | readonly ['constraint', _i_core._T_State_Group<M_Source, 
            | readonly ['component', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            }]
            | readonly ['reference', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            }]
        >]
        | readonly ['linked entry', null]
        | readonly ['list cursor', null]
        | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Option_Constraints.D<M_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
        | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>]
        | readonly ['result', _i_core._T_State_Group<M_Source, 
            | readonly ['list', {
                readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            }]
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
                readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
            }]
        >]
        | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>]
    >
    readonly 'tail': _T_Relative_Value_Selection<M_Source>
}

export type _T_Imports<M_Source> = _i_core._T_Dictionary<M_Source, {
    readonly 'schema': _i_core._T_Derived_Reference<M_Source, _T_Schema<M_Source>>
    readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<M_Source, _T_Schemas.D<M_Source>>
}>

export type _T_Lookup_Selection<M_Source> = {
    readonly 'resulting dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
    readonly 'type': _i_core._T_State_Group<M_Source, 
        | readonly ['dictionary', {
            readonly 'selected dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
        }]
        | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.lookups.D<M_Source>>]
        | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>]
    >
}

export type _T_Node_Resolver<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['boolean', null]
    | readonly ['component', {
        readonly 'arguments': _pt.Optional_Value<{
            readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                | readonly ['empty stack', null]
                | readonly ['not set', null]
                | readonly ['selection', _T_Lookup_Selection<M_Source>]
                | readonly ['stack', {
                    readonly 'element': _T_Lookup_Selection<M_Source>
                    readonly 'stack': _T_Lookup_Selection<M_Source>
                }]
            >>>
            readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
            >>>
        }>
        readonly 'constraints': _T_Property_Constraints<M_Source>
        readonly 'location': _i_core._T_State_Group<M_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
        >
        readonly 'signature': _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
    }]
    | readonly ['dictionary', {
        readonly 'benchmark': _pt.Optional_Value<_T_Benchmark<M_Source>>
        readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
        readonly 'resolver': _T_Node_Resolver<M_Source>
    }]
    | readonly ['group', _T_Node_Resolver_Group<M_Source>]
    | readonly ['list', {
        readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.list<M_Source>>
        readonly 'resolver': _T_Node_Resolver<M_Source>
        readonly 'result': _pt.Optional_Value<_T_Node_Resolver_List_Result<M_Source>>
    }]
    | readonly ['nothing', null]
    | readonly ['number', null]
    | readonly ['optional', {
        readonly 'constraints': _T_Option_Constraints<M_Source>
        readonly 'resolver': _T_Node_Resolver<M_Source>
    }]
    | readonly ['reference', {
        readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
        readonly 'type': _i_core._T_State_Group<M_Source, 
            | readonly ['derived', {
                readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
            }]
            | readonly ['selected', {
                readonly 'constraints': _T_Property_Constraints<M_Source>
                readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                readonly 'lookup': _T_Lookup_Selection<M_Source>
            }]
        >
    }]
    | readonly ['state group', {
        readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
        readonly 'states': _i_core._T_Dictionary<M_Source, {
            readonly 'constraints': _T_Option_Constraints<M_Source>
            readonly 'resolver': _T_Node_Resolver<M_Source>
        }>
    }]
    | readonly ['text', null]
>

export type _T_Node_Resolver_Group<M_Source> = _i_core._T_Ordered_Dictionary<M_Source, {
    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Group.D<M_Source>>
    readonly 'resolver': _T_Node_Resolver<M_Source>
}>

export type _T_Node_Resolver_List_Result<M_Source> = _T_Type_Reference<M_Source>

export type _T_Number_Type<M_Source> = {
    readonly 'precision': _i_core._T_State_Group<M_Source, 
        | readonly ['approximation', {
            readonly 'significant digits': number
        }]
        | readonly ['exact', {
            readonly 'decimal separator offset': _pt.Optional_Value<number>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['integer', null]
                | readonly ['natural', null]
                | readonly ['positive natural', null]
            >
        }]
    >
}

export type _T_Option_Constraints<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
    | readonly ['assert is set', _T_Possible_Value_Selection<M_Source>]
    | readonly ['state', {
        readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
        readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
        readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
    }]
>>

export type _T_Optional_Value_Initialization<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['not set', null]
    | readonly ['selection', _T_Possible_Value_Selection<M_Source>]
    | readonly ['set', _T_Guaranteed_Value_Selection<M_Source>]
>

export type _T_Possible_Value_Selection<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
    | readonly ['result', _i_core._T_State_Group<M_Source, 
        | readonly ['optional value', {
            readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            readonly 'result': _T_Type_Reference<M_Source>
        }]
        | readonly ['state group', {
            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            readonly 'result': _T_Type_Reference<M_Source>
            readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
        }]
    >]
>

export type _T_Presence<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['optional', null]
    | readonly ['required', null]
>

export type _T_Property_Constraint<M_Source> = {
    readonly 'constraint': _T_Constraint<M_Source>
    readonly 'start': _i_core._T_State_Group<M_Source, 
        | readonly ['property', null]
        | readonly ['sibling', _T_Reference_To_Property_Constraint<M_Source>]
    >
}

export type _T_Property_Constraints<M_Source> = _i_core._T_Ordered_Dictionary<M_Source, _T_Property_Constraint<M_Source>>

export type _T_Reference_To_Property_Constraint<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>

export type _T_Relative_Value_Selection<M_Source> = {
    readonly 'path': _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
        | readonly ['component', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
        }]
    >>
    readonly 'resulting node': _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
}

export type _T_Resolve_Logic<M_Source> = {
    readonly 'resolvers': _T_Resolvers<M_Source>
    readonly 'signatures': {
        readonly 'types': _T_Signatures<M_Source>
    }
}

export type _T_Resolvers<M_Source> = _i_core._T_Ordered_Dictionary<M_Source, {
    readonly 'signature': _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
    readonly 'type resolver': _T_Node_Resolver<M_Source>
}>

export type _T_Schema<M_Source> = {
    readonly 'complexity': _i_core._T_State_Group<M_Source, 
        | readonly ['constrained', _T_Resolve_Logic<M_Source>]
        | readonly ['unconstrained', null]
    >
    readonly 'globals': _T_Globals<M_Source>
    readonly 'imports': _T_Imports<M_Source>
    readonly 'types': _T_Types<M_Source>
}

export type _T_Schema_Tree<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['schema', _T_Schema<M_Source>]
    | readonly ['set', _T_Schemas<M_Source>]
>

export type _T_Schemas<M_Source> = _i_core._T_Ordered_Dictionary<M_Source, _T_Schema_Tree<M_Source>>

export type _T_Signature<M_Source> = {
    readonly 'parameters': _i_core._T_State_Group<M_Source, 
        | readonly ['local', _T_Signature_Parameters<M_Source>]
        | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
    >
    readonly 'resolved parameters': _i_core._T_Derived_Reference<M_Source, _T_Signature_Parameters<M_Source>>
    readonly 'type': _i_core._T_Derived_Reference<M_Source, _T_Type<M_Source>>
}

export type _T_Signature_Parameters<M_Source> = {
    readonly 'lookups': _i_core._T_Dictionary<M_Source, {
        readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
        readonly 'presence': _T_Presence<M_Source>
        readonly 'referent': _T_Type_Reference<M_Source>
        readonly 'type': _i_core._T_State_Group<M_Source, 
            | readonly ['acyclic', null]
            | readonly ['cyclic', null]
            | readonly ['stack', null]
        >
    }>
    readonly 'values': _i_core._T_Dictionary<M_Source, {
        readonly 'data type': _T_Type_Reference<M_Source>
        readonly 'presence': _T_Presence<M_Source>
    }>
}

export type _T_Signatures<M_Source> = _i_core._T_Ordered_Dictionary<M_Source, _T_Signature<M_Source>>

export type _T_Text_Type<M_Source> = {
    readonly 'type': _i_core._T_State_Group<M_Source, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export type _T_Type<M_Source> = {
    readonly 'node': _T_Type_Node<M_Source>
    readonly 'type parameters': _T_Type_Parameters<M_Source>
}

export type _T_Type_Node<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['boolean', null]
    | readonly ['component', _i_core._T_State_Group<M_Source, 
        | readonly ['external', {
            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
        }]
        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
        | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
    >]
    | readonly ['dictionary', _T_Dictionary<M_Source>]
    | readonly ['group', _T_Group<M_Source>]
    | readonly ['list', {
        readonly 'node': _T_Type_Node<M_Source>
    }]
    | readonly ['nothing', null]
    | readonly ['number', _i_core._T_State_Group<M_Source, 
        | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.number_types.D<M_Source>>]
        | readonly ['local', _T_Number_Type<M_Source>]
    >]
    | readonly ['optional', _T_Type_Node<M_Source>]
    | readonly ['reference', {
        readonly 'referent': _T_Type_Node_Reference<M_Source>
        readonly 'type': _i_core._T_State_Group<M_Source, 
            | readonly ['derived', null]
            | readonly ['selected', {
                readonly 'dependency': _i_core._T_State_Group<M_Source, 
                    | readonly ['acyclic', null]
                    | readonly ['cyclic', null]
                    | readonly ['stack', null]
                >
                readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            }]
        >
    }]
    | readonly ['state group', _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>]
    | readonly ['text', _i_core._T_State_Group<M_Source, 
        | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
        | readonly ['local', _T_Text_Type<M_Source>]
    >]
>

export type _T_Type_Node_Reference<M_Source> = {
    readonly 'resulting node': _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
    readonly 'tail': _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
        | readonly ['dictionary', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
        | readonly ['list', null]
        | readonly ['optional', null]
        | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>]
    >>
    readonly 'type location': _T_Type_Reference<M_Source>
}

export type _T_Type_Parameters<M_Source> = _i_core._T_Dictionary<M_Source, null>

export type _T_Type_Reference<M_Source> = {
    readonly 'location': _i_core._T_State_Group<M_Source, 
        | readonly ['external', {
            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
        }]
        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
    >
    readonly 'resulting node': _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
}

export type _T_Type_Specification<M_Source> = {
    readonly 'schema': _T_Schema_Tree<M_Source>
    readonly 'schema path': _i_core._T_List<M_Source, string>
    readonly 'type': string
}

export type _T_Types<M_Source> = _i_core._T_Ordered_Dictionary<M_Source, _T_Type<M_Source>>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Benchmark<M_Source> = _T_Benchmark<M_Source>

export type Constraint<M_Source> = _T_Constraint<M_Source>

export type Dictionary<M_Source> = _T_Dictionary<M_Source>

export type Globals<M_Source> = _T_Globals<M_Source>

export type Group<M_Source> = _T_Group<M_Source>

export type Guaranteed_Value_Selection<M_Source> = _T_Guaranteed_Value_Selection<M_Source>

export type Imports<M_Source> = _T_Imports<M_Source>

export type Lookup_Selection<M_Source> = _T_Lookup_Selection<M_Source>

export type Node_Resolver<M_Source> = _T_Node_Resolver<M_Source>

export type Node_Resolver_Group<M_Source> = _T_Node_Resolver_Group<M_Source>

export type Node_Resolver_List_Result<M_Source> = _T_Node_Resolver_List_Result<M_Source>

export type Number_Type<M_Source> = _T_Number_Type<M_Source>

export type Option_Constraints<M_Source> = _T_Option_Constraints<M_Source>

export type Optional_Value_Initialization<M_Source> = _T_Optional_Value_Initialization<M_Source>

export type Possible_Value_Selection<M_Source> = _T_Possible_Value_Selection<M_Source>

export type Presence<M_Source> = _T_Presence<M_Source>

export type Property_Constraint<M_Source> = _T_Property_Constraint<M_Source>

export type Property_Constraints<M_Source> = _T_Property_Constraints<M_Source>

export type Reference_To_Property_Constraint<M_Source> = _T_Reference_To_Property_Constraint<M_Source>

export type Relative_Value_Selection<M_Source> = _T_Relative_Value_Selection<M_Source>

export type Resolve_Logic<M_Source> = _T_Resolve_Logic<M_Source>

export type Resolvers<M_Source> = _T_Resolvers<M_Source>

export type Schema<M_Source> = _T_Schema<M_Source>

export type Schema_Tree<M_Source> = _T_Schema_Tree<M_Source>

export type Schemas<M_Source> = _T_Schemas<M_Source>

export type Signature<M_Source> = _T_Signature<M_Source>

export type Signature_Parameters<M_Source> = _T_Signature_Parameters<M_Source>

export type Signatures<M_Source> = _T_Signatures<M_Source>

export type Text_Type<M_Source> = _T_Text_Type<M_Source>

export type Type<M_Source> = _T_Type<M_Source>

export type Type_Node<M_Source> = _T_Type_Node<M_Source>

export type Type_Node_Reference<M_Source> = _T_Type_Node_Reference<M_Source>

export type Type_Parameters<M_Source> = _T_Type_Parameters<M_Source>

export type Type_Reference<M_Source> = _T_Type_Reference<M_Source>

export type Type_Specification<M_Source> = _T_Type_Specification<M_Source>

export type Types<M_Source> = _T_Types<M_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Benchmark {
    export type dense<M_Source> = boolean
    
    export namespace resulting_dictionary {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Dictionary<M_Source>
    }
    export type resulting_dictionary<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
    
    export namespace selection {
    }
    export type selection<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
}

export namespace _T_Constraint {
    
    export namespace selection {
    }
    export type selection<M_Source> = _T_Relative_Value_Selection<M_Source>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace optional_value {
                
                export namespace selected_optional_value {
                    
                    export namespace Type {
                    }
                    export type Type<M_Source> = _T_Type_Node.SG.optional<M_Source>
                }
                export type selected_optional_value<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.optional<M_Source>>
            }
            export type optional_value<M_Source> = {
                readonly 'selected optional value': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.optional<M_Source>>
            }
            
            export namespace state {
                
                export namespace selected_state_group {
                    
                    export namespace Type {
                    }
                    export type Type<M_Source> = _T_Type_Node.SG.state_group<M_Source>
                }
                export type selected_state_group<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                
                export namespace state {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Type_Node.SG.state_group.D<M_Source>
                }
                export type state<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }
            export type state<M_Source> = {
                readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }
        }
        export type SG<M_Source> = 
            | readonly ['optional value', {
                readonly 'selected optional value': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.optional<M_Source>>
            }]
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }]
    }
    export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['optional value', {
            readonly 'selected optional value': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.optional<M_Source>>
        }]
        | readonly ['state', {
            readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
        }]
    >
}

export namespace _T_Dictionary {
    
    export namespace node {
    }
    export type node<M_Source> = _T_Type_Node<M_Source>
    export type ordered<M_Source> = boolean
}

export namespace _T_Globals {
    
    export namespace complexity {
        
        export namespace SG {
            export type constrained<M_Source> = null
            export type unconstrained<M_Source> = null
        }
        export type SG<M_Source> = 
            | readonly ['constrained', null]
            | readonly ['unconstrained', null]
    }
    export type complexity<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['constrained', null]
        | readonly ['unconstrained', null]
    >
    
    export namespace number_types {
        
        export namespace D {
        }
        export type D<M_Source> = _T_Number_Type<M_Source>
    }
    export type number_types<M_Source> = _i_core._T_Dictionary<M_Source, _T_Number_Type<M_Source>>
    
    export namespace text_types {
        
        export namespace D {
        }
        export type D<M_Source> = _T_Text_Type<M_Source>
    }
    export type text_types<M_Source> = _i_core._T_Dictionary<M_Source, _T_Text_Type<M_Source>>
}

export namespace _T_Group {
    
    export namespace D {
        
        export namespace description {
            export type O<M_Source> = string
        }
        export type description<M_Source> = _pt.Optional_Value<string>
        
        export namespace node {
        }
        export type node<M_Source> = _T_Type_Node<M_Source>
    }
    export type D<M_Source> = {
        readonly 'description': _pt.Optional_Value<string>
        readonly 'node': _T_Type_Node<M_Source>
    }
}

export namespace _T_Guaranteed_Value_Selection {
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Type_Node<M_Source>
    }
    export type resulting_node<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
    
    export namespace start {
        
        export namespace SG {
            
            export namespace constraint {
                
                export namespace SG {
                    
                    export namespace component {
                        
                        export namespace constraint {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Property_Constraints.D<M_Source>
                        }
                        export type constraint<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                        }
                        export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                    export type component<M_Source> = {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                    
                    export namespace reference {
                        
                        export namespace constraint {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Property_Constraints.D<M_Source>
                        }
                        export type constraint<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                        }
                        export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                    export type reference<M_Source> = {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['component', {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }]
                    | readonly ['reference', {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }]
            }
            export type constraint<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['component', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
                | readonly ['reference', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
            >
            export type linked_entry<M_Source> = null
            export type list_cursor<M_Source> = null
            
            export namespace option_constraint {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Option_Constraints.D<M_Source>
            }
            export type option_constraint<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Option_Constraints.D<M_Source>>
            
            export namespace parameter {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Signature_Parameters.values.D<M_Source>
            }
            export type parameter<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>
            
            export namespace parent_sibling {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
            }
            export type parent_sibling<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            
            export namespace result {
                
                export namespace SG {
                    
                    export namespace list {
                        
                        export namespace list_result {
                            
                            export namespace Type {
                            }
                            export type Type<M_Source> = _T_Node_Resolver.SG.list.result.O<M_Source>
                        }
                        export type list_result<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                        }
                        export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                    export type list<M_Source> = {
                        readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                    
                    export namespace optional_value {
                        
                        export namespace optional_value {
                            
                            export namespace Type {
                            }
                            export type Type<M_Source> = _T_Node_Resolver.SG.optional<M_Source>
                        }
                        export type optional_value<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                        }
                        export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        
                        export namespace result {
                        }
                        export type result<M_Source> = _T_Type_Reference<M_Source>
                    }
                    export type optional_value<M_Source> = {
                        readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        readonly 'result': _T_Type_Reference<M_Source>
                    }
                    
                    export namespace state_group {
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                        }
                        export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        
                        export namespace result {
                        }
                        export type result<M_Source> = _T_Type_Reference<M_Source>
                        
                        export namespace state_group {
                            
                            export namespace Type {
                            }
                            export type Type<M_Source> = _T_Node_Resolver.SG.state_group<M_Source>
                        }
                        export type state_group<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                    }
                    export type state_group<M_Source> = {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        readonly 'result': _T_Type_Reference<M_Source>
                        readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['list', {
                        readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }]
                    | readonly ['optional value', {
                        readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        readonly 'result': _T_Type_Reference<M_Source>
                    }]
                    | readonly ['state group', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        readonly 'result': _T_Type_Reference<M_Source>
                        readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                    }]
            }
            export type result<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['list', {
                    readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                }]
            >
            
            export namespace sibling {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
            }
            export type sibling<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
        }
        export type SG<M_Source> = 
            | readonly ['constraint', _i_core._T_State_Group<M_Source, 
                | readonly ['component', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
                | readonly ['reference', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
            >]
            | readonly ['linked entry', null]
            | readonly ['list cursor', null]
            | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Option_Constraints.D<M_Source>>]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
            | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>]
            | readonly ['result', _i_core._T_State_Group<M_Source, 
                | readonly ['list', {
                    readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                }]
            >]
            | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>]
    }
    export type start<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['constraint', _i_core._T_State_Group<M_Source, 
            | readonly ['component', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            }]
            | readonly ['reference', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            }]
        >]
        | readonly ['linked entry', null]
        | readonly ['list cursor', null]
        | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Option_Constraints.D<M_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
        | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>]
        | readonly ['result', _i_core._T_State_Group<M_Source, 
            | readonly ['list', {
                readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            }]
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
                readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
            }]
        >]
        | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>]
    >
    
    export namespace tail {
    }
    export type tail<M_Source> = _T_Relative_Value_Selection<M_Source>
}

export namespace _T_Imports {
    
    export namespace D {
        
        export namespace schema {
            
            export namespace Type {
            }
            export type Type<M_Source> = _T_Schema<M_Source>
        }
        export type schema<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Schema<M_Source>>
        
        export namespace schema_set_child {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Schemas.D<M_Source>
        }
        export type schema_set_child<M_Source> = _i_core._T_Reference_To_Stacked_Dictionary_Entry<M_Source, _T_Schemas.D<M_Source>>
    }
    export type D<M_Source> = {
        readonly 'schema': _i_core._T_Derived_Reference<M_Source, _T_Schema<M_Source>>
        readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<M_Source, _T_Schemas.D<M_Source>>
    }
}

export namespace _T_Lookup_Selection {
    
    export namespace resulting_dictionary {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Dictionary<M_Source>
    }
    export type resulting_dictionary<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace dictionary {
                
                export namespace selected_dictionary {
                    
                    export namespace Type {
                    }
                    export type Type<M_Source> = _T_Dictionary<M_Source>
                }
                export type selected_dictionary<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                
                export namespace selection {
                }
                export type selection<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
            }
            export type dictionary<M_Source> = {
                readonly 'selected dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
            }
            
            export namespace not_circular_dependent_siblings {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Dictionary<M_Source>
            }
            export type not_circular_dependent_siblings<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            
            export namespace parameter {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Signature_Parameters.lookups.D<M_Source>
            }
            export type parameter<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.lookups.D<M_Source>>
            
            export namespace possibly_circular_dependent_siblings {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Dictionary<M_Source>
            }
            export type possibly_circular_dependent_siblings<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
        }
        export type SG<M_Source> = 
            | readonly ['dictionary', {
                readonly 'selected dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
            }]
            | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.lookups.D<M_Source>>]
            | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>]
    }
    export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['dictionary', {
            readonly 'selected dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
        }]
        | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.lookups.D<M_Source>>]
        | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>]
    >
}

export namespace _T_Node_Resolver {
    
    export namespace SG {
        export type _boolean<M_Source> = null
        
        export namespace component {
            
            export namespace _arguments {
                
                export namespace O {
                    
                    export namespace lookups {
                        
                        export namespace O {
                            
                            export namespace D {
                                
                                export namespace SG {
                                    export type empty_stack<M_Source> = null
                                    export type not_set<M_Source> = null
                                    
                                    export namespace selection {
                                    }
                                    export type selection<M_Source> = _T_Lookup_Selection<M_Source>
                                    
                                    export namespace stack {
                                        
                                        export namespace element {
                                        }
                                        export type element<M_Source> = _T_Lookup_Selection<M_Source>
                                        
                                        export namespace stack {
                                        }
                                        export type stack<M_Source> = _T_Lookup_Selection<M_Source>
                                    }
                                    export type stack<M_Source> = {
                                        readonly 'element': _T_Lookup_Selection<M_Source>
                                        readonly 'stack': _T_Lookup_Selection<M_Source>
                                    }
                                }
                                export type SG<M_Source> = 
                                    | readonly ['empty stack', null]
                                    | readonly ['not set', null]
                                    | readonly ['selection', _T_Lookup_Selection<M_Source>]
                                    | readonly ['stack', {
                                        readonly 'element': _T_Lookup_Selection<M_Source>
                                        readonly 'stack': _T_Lookup_Selection<M_Source>
                                    }]
                            }
                            export type D<M_Source> = _i_core._T_State_Group<M_Source, 
                                | readonly ['empty stack', null]
                                | readonly ['not set', null]
                                | readonly ['selection', _T_Lookup_Selection<M_Source>]
                                | readonly ['stack', {
                                    readonly 'element': _T_Lookup_Selection<M_Source>
                                    readonly 'stack': _T_Lookup_Selection<M_Source>
                                }]
                            >
                        }
                        export type O<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                            | readonly ['empty stack', null]
                            | readonly ['not set', null]
                            | readonly ['selection', _T_Lookup_Selection<M_Source>]
                            | readonly ['stack', {
                                readonly 'element': _T_Lookup_Selection<M_Source>
                                readonly 'stack': _T_Lookup_Selection<M_Source>
                            }]
                        >>
                    }
                    export type lookups<M_Source> = _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection<M_Source>]
                        | readonly ['stack', {
                            readonly 'element': _T_Lookup_Selection<M_Source>
                            readonly 'stack': _T_Lookup_Selection<M_Source>
                        }]
                    >>>
                    
                    export namespace values {
                        
                        export namespace O {
                            
                            export namespace D {
                                
                                export namespace SG {
                                    
                                    export namespace optional {
                                    }
                                    export type optional<M_Source> = _T_Optional_Value_Initialization<M_Source>
                                    
                                    export namespace parameter {
                                        
                                        export namespace Dictionary_Entry {
                                        }
                                        export type Dictionary_Entry<M_Source> = _T_Signature_Parameters.values.D<M_Source>
                                    }
                                    export type parameter<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>
                                    
                                    export namespace required {
                                    }
                                    export type required<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
                                }
                                export type SG<M_Source> = 
                                    | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                                    | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                            }
                            export type D<M_Source> = _i_core._T_State_Group<M_Source, 
                                | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                                | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                            >
                        }
                        export type O<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                            | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                            | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                        >>
                    }
                    export type values<M_Source> = _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                        | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                        | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                    >>>
                }
                export type O<M_Source> = {
                    readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection<M_Source>]
                        | readonly ['stack', {
                            readonly 'element': _T_Lookup_Selection<M_Source>
                            readonly 'stack': _T_Lookup_Selection<M_Source>
                        }]
                    >>>
                    readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                        | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                        | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                    >>>
                }
            }
            export type _arguments<M_Source> = _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<M_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<M_Source>
                        readonly 'stack': _T_Lookup_Selection<M_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                >>>
            }>
            
            export namespace constraints {
            }
            export type constraints<M_Source> = _T_Property_Constraints<M_Source>
            
            export namespace location {
                
                export namespace SG {
                    
                    export namespace external {
                        
                        export namespace _import {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Imports.D<M_Source>
                        }
                        export type _import<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                        
                        export namespace _type {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Signatures.D<M_Source>
                        }
                        export type _type<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                    }
                    export type external<M_Source> = {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                    }
                    
                    export namespace internal {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Signatures.D<M_Source>
                    }
                    export type internal<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                }
                export type SG<M_Source> = 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
            }
            export type location<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
            >
            
            export namespace signature {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Signatures.D<M_Source>
            }
            export type signature<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
        }
        export type component<M_Source> = {
            readonly 'arguments': _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<M_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<M_Source>
                        readonly 'stack': _T_Lookup_Selection<M_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                >>>
            }>
            readonly 'constraints': _T_Property_Constraints<M_Source>
            readonly 'location': _i_core._T_State_Group<M_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
            >
            readonly 'signature': _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
        }
        
        export namespace dictionary {
            
            export namespace benchmark {
                
                export namespace O {
                }
                export type O<M_Source> = _T_Benchmark<M_Source>
            }
            export type benchmark<M_Source> = _pt.Optional_Value<_T_Benchmark<M_Source>>
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Dictionary<M_Source>
            }
            export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            
            export namespace resolver {
            }
            export type resolver<M_Source> = _T_Node_Resolver<M_Source>
        }
        export type dictionary<M_Source> = {
            readonly 'benchmark': _pt.Optional_Value<_T_Benchmark<M_Source>>
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            readonly 'resolver': _T_Node_Resolver<M_Source>
        }
        
        export namespace group {
        }
        export type group<M_Source> = _T_Node_Resolver_Group<M_Source>
        
        export namespace list {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Type_Node.SG.list<M_Source>
            }
            export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.list<M_Source>>
            
            export namespace resolver {
            }
            export type resolver<M_Source> = _T_Node_Resolver<M_Source>
            
            export namespace result {
                
                export namespace O {
                }
                export type O<M_Source> = _T_Node_Resolver_List_Result<M_Source>
            }
            export type result<M_Source> = _pt.Optional_Value<_T_Node_Resolver_List_Result<M_Source>>
        }
        export type list<M_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.list<M_Source>>
            readonly 'resolver': _T_Node_Resolver<M_Source>
            readonly 'result': _pt.Optional_Value<_T_Node_Resolver_List_Result<M_Source>>
        }
        export type nothing<M_Source> = null
        export type _number<M_Source> = null
        
        export namespace optional {
            
            export namespace constraints {
            }
            export type constraints<M_Source> = _T_Option_Constraints<M_Source>
            
            export namespace resolver {
            }
            export type resolver<M_Source> = _T_Node_Resolver<M_Source>
        }
        export type optional<M_Source> = {
            readonly 'constraints': _T_Option_Constraints<M_Source>
            readonly 'resolver': _T_Node_Resolver<M_Source>
        }
        
        export namespace reference {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Type_Node.SG.reference<M_Source>
            }
            export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace derived {
                        
                        export namespace value {
                        }
                        export type value<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
                    }
                    export type derived<M_Source> = {
                        readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
                    }
                    
                    export namespace selected {
                        
                        export namespace constraints {
                        }
                        export type constraints<M_Source> = _T_Property_Constraints<M_Source>
                        
                        export namespace definition {
                            
                            export namespace Type {
                            }
                            export type Type<M_Source> = _T_Type_Node.SG.reference._type.SG.selected<M_Source>
                        }
                        export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                        
                        export namespace lookup {
                        }
                        export type lookup<M_Source> = _T_Lookup_Selection<M_Source>
                    }
                    export type selected<M_Source> = {
                        readonly 'constraints': _T_Property_Constraints<M_Source>
                        readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                        readonly 'lookup': _T_Lookup_Selection<M_Source>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['derived', {
                        readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
                    }]
                    | readonly ['selected', {
                        readonly 'constraints': _T_Property_Constraints<M_Source>
                        readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                        readonly 'lookup': _T_Lookup_Selection<M_Source>
                    }]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<M_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                    readonly 'lookup': _T_Lookup_Selection<M_Source>
                }]
            >
        }
        export type reference<M_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<M_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                    readonly 'lookup': _T_Lookup_Selection<M_Source>
                }]
            >
        }
        
        export namespace state_group {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Type_Node.SG.state_group<M_Source>
            }
            export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            
            export namespace states {
                
                export namespace D {
                    
                    export namespace constraints {
                    }
                    export type constraints<M_Source> = _T_Option_Constraints<M_Source>
                    
                    export namespace resolver {
                    }
                    export type resolver<M_Source> = _T_Node_Resolver<M_Source>
                }
                export type D<M_Source> = {
                    readonly 'constraints': _T_Option_Constraints<M_Source>
                    readonly 'resolver': _T_Node_Resolver<M_Source>
                }
            }
            export type states<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'constraints': _T_Option_Constraints<M_Source>
                readonly 'resolver': _T_Node_Resolver<M_Source>
            }>
        }
        export type state_group<M_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            readonly 'states': _i_core._T_Dictionary<M_Source, {
                readonly 'constraints': _T_Option_Constraints<M_Source>
                readonly 'resolver': _T_Node_Resolver<M_Source>
            }>
        }
        export type text<M_Source> = null
    }
    export type SG<M_Source> = 
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'arguments': _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<M_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<M_Source>
                        readonly 'stack': _T_Lookup_Selection<M_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                >>>
            }>
            readonly 'constraints': _T_Property_Constraints<M_Source>
            readonly 'location': _i_core._T_State_Group<M_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
            >
            readonly 'signature': _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
        }]
        | readonly ['dictionary', {
            readonly 'benchmark': _pt.Optional_Value<_T_Benchmark<M_Source>>
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            readonly 'resolver': _T_Node_Resolver<M_Source>
        }]
        | readonly ['group', _T_Node_Resolver_Group<M_Source>]
        | readonly ['list', {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.list<M_Source>>
            readonly 'resolver': _T_Node_Resolver<M_Source>
            readonly 'result': _pt.Optional_Value<_T_Node_Resolver_List_Result<M_Source>>
        }]
        | readonly ['nothing', null]
        | readonly ['number', null]
        | readonly ['optional', {
            readonly 'constraints': _T_Option_Constraints<M_Source>
            readonly 'resolver': _T_Node_Resolver<M_Source>
        }]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<M_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                    readonly 'lookup': _T_Lookup_Selection<M_Source>
                }]
            >
        }]
        | readonly ['state group', {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            readonly 'states': _i_core._T_Dictionary<M_Source, {
                readonly 'constraints': _T_Option_Constraints<M_Source>
                readonly 'resolver': _T_Node_Resolver<M_Source>
            }>
        }]
        | readonly ['text', null]
}

export namespace _T_Node_Resolver_Group {
    
    export namespace D {
        
        export namespace definition {
            
            export namespace Type {
            }
            export type Type<M_Source> = _T_Group.D<M_Source>
        }
        export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Group.D<M_Source>>
        
        export namespace resolver {
        }
        export type resolver<M_Source> = _T_Node_Resolver<M_Source>
    }
    export type D<M_Source> = {
        readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Group.D<M_Source>>
        readonly 'resolver': _T_Node_Resolver<M_Source>
    }
}

export namespace _T_Node_Resolver_List_Result {
}

export namespace _T_Number_Type {
    
    export namespace precision {
        
        export namespace SG {
            
            export namespace approximation {
                export type significant_digits<M_Source> = number
            }
            export type approximation<M_Source> = {
                readonly 'significant digits': number
            }
            
            export namespace exact {
                
                export namespace decimal_separator_offset {
                    export type O<M_Source> = number
                }
                export type decimal_separator_offset<M_Source> = _pt.Optional_Value<number>
                
                export namespace _type {
                    
                    export namespace SG {
                        export type integer<M_Source> = null
                        export type natural<M_Source> = null
                        export type positive_natural<M_Source> = null
                    }
                    export type SG<M_Source> = 
                        | readonly ['integer', null]
                        | readonly ['natural', null]
                        | readonly ['positive natural', null]
                }
                export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }
            export type exact<M_Source> = {
                readonly 'decimal separator offset': _pt.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<M_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }
        }
        export type SG<M_Source> = 
            | readonly ['approximation', {
                readonly 'significant digits': number
            }]
            | readonly ['exact', {
                readonly 'decimal separator offset': _pt.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<M_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }]
    }
    export type precision<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['approximation', {
            readonly 'significant digits': number
        }]
        | readonly ['exact', {
            readonly 'decimal separator offset': _pt.Optional_Value<number>
            readonly 'type': _i_core._T_State_Group<M_Source, 
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
            export type assert_is_set<M_Source> = _T_Possible_Value_Selection<M_Source>
            
            export namespace state {
                
                export namespace selected_state_group {
                    
                    export namespace Type {
                    }
                    export type Type<M_Source> = _T_Type_Node.SG.state_group<M_Source>
                }
                export type selected_state_group<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                
                export namespace selection {
                }
                export type selection<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
                
                export namespace state {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Type_Node.SG.state_group.D<M_Source>
                }
                export type state<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }
            export type state<M_Source> = {
                readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }
        }
        export type SG<M_Source> = 
            | readonly ['assert is set', _T_Possible_Value_Selection<M_Source>]
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }]
    }
    export type D<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['assert is set', _T_Possible_Value_Selection<M_Source>]
        | readonly ['state', {
            readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
        }]
    >
}

export namespace _T_Optional_Value_Initialization {
    
    export namespace SG {
        export type not_set<M_Source> = null
        
        export namespace selection {
        }
        export type selection<M_Source> = _T_Possible_Value_Selection<M_Source>
        
        export namespace _set {
        }
        export type _set<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
    }
    export type SG<M_Source> = 
        | readonly ['not set', null]
        | readonly ['selection', _T_Possible_Value_Selection<M_Source>]
        | readonly ['set', _T_Guaranteed_Value_Selection<M_Source>]
}

export namespace _T_Possible_Value_Selection {
    
    export namespace SG {
        
        export namespace parameter {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Signature_Parameters.values.D<M_Source>
        }
        export type parameter<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>
        
        export namespace result {
            
            export namespace SG {
                
                export namespace optional_value {
                    
                    export namespace optional_value {
                        
                        export namespace Type {
                        }
                        export type Type<M_Source> = _T_Node_Resolver.SG.optional<M_Source>
                    }
                    export type optional_value<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                    
                    export namespace property {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                    }
                    export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    
                    export namespace result {
                    }
                    export type result<M_Source> = _T_Type_Reference<M_Source>
                }
                export type optional_value<M_Source> = {
                    readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                }
                
                export namespace state_group {
                    
                    export namespace property {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                    }
                    export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    
                    export namespace result {
                    }
                    export type result<M_Source> = _T_Type_Reference<M_Source>
                    
                    export namespace state_group {
                        
                        export namespace Type {
                        }
                        export type Type<M_Source> = _T_Node_Resolver.SG.state_group<M_Source>
                    }
                    export type state_group<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                }
                export type state_group<M_Source> = {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                }
            }
            export type SG<M_Source> = 
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                }]
        }
        export type result<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
                readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
            }]
        >
    }
    export type SG<M_Source> = 
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
        | readonly ['result', _i_core._T_State_Group<M_Source, 
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
                readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
            }]
        >]
}

export namespace _T_Presence {
    
    export namespace SG {
        export type optional<M_Source> = null
        export type required<M_Source> = null
    }
    export type SG<M_Source> = 
        | readonly ['optional', null]
        | readonly ['required', null]
}

export namespace _T_Property_Constraint {
    
    export namespace constraint {
    }
    export type constraint<M_Source> = _T_Constraint<M_Source>
    
    export namespace start {
        
        export namespace SG {
            export type property<M_Source> = null
            
            export namespace sibling {
            }
            export type sibling<M_Source> = _T_Reference_To_Property_Constraint<M_Source>
        }
        export type SG<M_Source> = 
            | readonly ['property', null]
            | readonly ['sibling', _T_Reference_To_Property_Constraint<M_Source>]
    }
    export type start<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['property', null]
        | readonly ['sibling', _T_Reference_To_Property_Constraint<M_Source>]
    >
}

export namespace _T_Property_Constraints {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Property_Constraint<M_Source>
}

export namespace _T_Reference_To_Property_Constraint {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry<M_Source> = _T_Property_Constraints.D<M_Source>
}

export namespace _T_Relative_Value_Selection {
    
    export namespace path {
        
        export namespace L {
            
            export namespace SG {
                export type component<M_Source> = null
                
                export namespace group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Group.D<M_Source>
                }
                export type group<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>
                
                export namespace reference {
                    
                    export namespace definition {
                        
                        export namespace Type {
                        }
                        export type Type<M_Source> = _T_Type_Node.SG.reference<M_Source>
                    }
                    export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
                }
                export type reference<M_Source> = {
                    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
                }
            }
            export type SG<M_Source> = 
                | readonly ['component', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
                | readonly ['reference', {
                    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
                }]
        }
        export type L<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['component', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
            | readonly ['reference', {
                readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
            }]
        >
    }
    export type path<M_Source> = _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
        | readonly ['component', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
        }]
    >>
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Type_Node<M_Source>
    }
    export type resulting_node<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
}

export namespace _T_Resolve_Logic {
    
    export namespace resolvers {
    }
    export type resolvers<M_Source> = _T_Resolvers<M_Source>
    
    export namespace signatures {
        
        export namespace types {
        }
        export type types<M_Source> = _T_Signatures<M_Source>
    }
    export type signatures<M_Source> = {
        readonly 'types': _T_Signatures<M_Source>
    }
}

export namespace _T_Resolvers {
    
    export namespace D {
        
        export namespace signature {
            
            export namespace Type {
            }
            export type Type<M_Source> = _T_Signatures.D<M_Source>
        }
        export type signature<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
        
        export namespace type_resolver {
        }
        export type type_resolver<M_Source> = _T_Node_Resolver<M_Source>
    }
    export type D<M_Source> = {
        readonly 'signature': _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
        readonly 'type resolver': _T_Node_Resolver<M_Source>
    }
}

export namespace _T_Schema {
    
    export namespace complexity {
        
        export namespace SG {
            
            export namespace constrained {
            }
            export type constrained<M_Source> = _T_Resolve_Logic<M_Source>
            export type unconstrained<M_Source> = null
        }
        export type SG<M_Source> = 
            | readonly ['constrained', _T_Resolve_Logic<M_Source>]
            | readonly ['unconstrained', null]
    }
    export type complexity<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['constrained', _T_Resolve_Logic<M_Source>]
        | readonly ['unconstrained', null]
    >
    
    export namespace globals {
    }
    export type globals<M_Source> = _T_Globals<M_Source>
    
    export namespace imports {
    }
    export type imports<M_Source> = _T_Imports<M_Source>
    
    export namespace types {
    }
    export type types<M_Source> = _T_Types<M_Source>
}

export namespace _T_Schema_Tree {
    
    export namespace SG {
        
        export namespace schema {
        }
        export type schema<M_Source> = _T_Schema<M_Source>
        
        export namespace _set {
        }
        export type _set<M_Source> = _T_Schemas<M_Source>
    }
    export type SG<M_Source> = 
        | readonly ['schema', _T_Schema<M_Source>]
        | readonly ['set', _T_Schemas<M_Source>]
}

export namespace _T_Schemas {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Schema_Tree<M_Source>
}

export namespace _T_Signature {
    
    export namespace parameters {
        
        export namespace SG {
            
            export namespace local {
            }
            export type local<M_Source> = _T_Signature_Parameters<M_Source>
            
            export namespace same_as {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Signatures.D<M_Source>
            }
            export type same_as<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
        }
        export type SG<M_Source> = 
            | readonly ['local', _T_Signature_Parameters<M_Source>]
            | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
    }
    export type parameters<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['local', _T_Signature_Parameters<M_Source>]
        | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
    >
    
    export namespace resolved_parameters {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Signature_Parameters<M_Source>
    }
    export type resolved_parameters<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Signature_Parameters<M_Source>>
    
    export namespace _type {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Type<M_Source>
    }
    export type _type<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type<M_Source>>
}

export namespace _T_Signature_Parameters {
    
    export namespace lookups {
        
        export namespace D {
            
            export namespace dictionary {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Dictionary<M_Source>
            }
            export type dictionary<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            
            export namespace presence {
            }
            export type presence<M_Source> = _T_Presence<M_Source>
            
            export namespace referent {
            }
            export type referent<M_Source> = _T_Type_Reference<M_Source>
            
            export namespace _type {
                
                export namespace SG {
                    export type acyclic<M_Source> = null
                    export type cyclic<M_Source> = null
                    export type stack<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['acyclic', null]
                    | readonly ['cyclic', null]
                    | readonly ['stack', null]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['acyclic', null]
                | readonly ['cyclic', null]
                | readonly ['stack', null]
            >
        }
        export type D<M_Source> = {
            readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            readonly 'presence': _T_Presence<M_Source>
            readonly 'referent': _T_Type_Reference<M_Source>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['acyclic', null]
                | readonly ['cyclic', null]
                | readonly ['stack', null]
            >
        }
    }
    export type lookups<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
        readonly 'presence': _T_Presence<M_Source>
        readonly 'referent': _T_Type_Reference<M_Source>
        readonly 'type': _i_core._T_State_Group<M_Source, 
            | readonly ['acyclic', null]
            | readonly ['cyclic', null]
            | readonly ['stack', null]
        >
    }>
    
    export namespace values {
        
        export namespace D {
            
            export namespace data_type {
            }
            export type data_type<M_Source> = _T_Type_Reference<M_Source>
            
            export namespace presence {
            }
            export type presence<M_Source> = _T_Presence<M_Source>
        }
        export type D<M_Source> = {
            readonly 'data type': _T_Type_Reference<M_Source>
            readonly 'presence': _T_Presence<M_Source>
        }
    }
    export type values<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'data type': _T_Type_Reference<M_Source>
        readonly 'presence': _T_Presence<M_Source>
    }>
}

export namespace _T_Signatures {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Signature<M_Source>
}

export namespace _T_Text_Type {
    
    export namespace _type {
        
        export namespace SG {
            export type multi_line<M_Source> = null
            export type single_line<M_Source> = null
        }
        export type SG<M_Source> = 
            | readonly ['multi line', null]
            | readonly ['single line', null]
    }
    export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export namespace _T_Type {
    
    export namespace node {
    }
    export type node<M_Source> = _T_Type_Node<M_Source>
    
    export namespace type_parameters {
    }
    export type type_parameters<M_Source> = _T_Type_Parameters<M_Source>
}

export namespace _T_Type_Node {
    
    export namespace SG {
        export type _boolean<M_Source> = null
        
        export namespace component {
            
            export namespace SG {
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Imports.D<M_Source>
                    }
                    export type _import<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    
                    export namespace _type {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                    }
                    export type _type<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }
                export type external<M_Source> = {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }
                
                export namespace internal {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                }
                export type internal<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                
                export namespace internal_cyclic {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                }
                export type internal_cyclic<M_Source> = _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>
            }
            export type SG<M_Source> = 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        }
        export type component<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        >
        
        export namespace dictionary {
        }
        export type dictionary<M_Source> = _T_Dictionary<M_Source>
        
        export namespace group {
        }
        export type group<M_Source> = _T_Group<M_Source>
        
        export namespace list {
            
            export namespace node {
            }
            export type node<M_Source> = _T_Type_Node<M_Source>
        }
        export type list<M_Source> = {
            readonly 'node': _T_Type_Node<M_Source>
        }
        export type nothing<M_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Globals.number_types.D<M_Source>
                }
                export type global<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.number_types.D<M_Source>>
                
                export namespace local {
                }
                export type local<M_Source> = _T_Number_Type<M_Source>
            }
            export type SG<M_Source> = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.number_types.D<M_Source>>]
                | readonly ['local', _T_Number_Type<M_Source>]
        }
        export type _number<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.number_types.D<M_Source>>]
            | readonly ['local', _T_Number_Type<M_Source>]
        >
        
        export namespace optional {
        }
        export type optional<M_Source> = _T_Type_Node<M_Source>
        
        export namespace reference {
            
            export namespace referent {
            }
            export type referent<M_Source> = _T_Type_Node_Reference<M_Source>
            
            export namespace _type {
                
                export namespace SG {
                    export type derived<M_Source> = null
                    
                    export namespace selected {
                        
                        export namespace dependency {
                            
                            export namespace SG {
                                export type acyclic<M_Source> = null
                                export type cyclic<M_Source> = null
                                export type stack<M_Source> = null
                            }
                            export type SG<M_Source> = 
                                | readonly ['acyclic', null]
                                | readonly ['cyclic', null]
                                | readonly ['stack', null]
                        }
                        export type dependency<M_Source> = _i_core._T_State_Group<M_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        
                        export namespace dictionary {
                            
                            export namespace Type {
                            }
                            export type Type<M_Source> = _T_Dictionary<M_Source>
                        }
                        export type dictionary<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                    }
                    export type selected<M_Source> = {
                        readonly 'dependency': _i_core._T_State_Group<M_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['derived', null]
                    | readonly ['selected', {
                        readonly 'dependency': _i_core._T_State_Group<M_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                    }]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<M_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                }]
            >
        }
        export type reference<M_Source> = {
            readonly 'referent': _T_Type_Node_Reference<M_Source>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<M_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                }]
            >
        }
        
        export namespace state_group {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Type_Node<M_Source>
        }
        export type state_group<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>
        
        export namespace text {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Globals.text_types.D<M_Source>
                }
                export type global<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>
                
                export namespace local {
                }
                export type local<M_Source> = _T_Text_Type<M_Source>
            }
            export type SG<M_Source> = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
                | readonly ['local', _T_Text_Type<M_Source>]
        }
        export type text<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
            | readonly ['local', _T_Text_Type<M_Source>]
        >
    }
    export type SG<M_Source> = 
        | readonly ['boolean', null]
        | readonly ['component', _i_core._T_State_Group<M_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        >]
        | readonly ['dictionary', _T_Dictionary<M_Source>]
        | readonly ['group', _T_Group<M_Source>]
        | readonly ['list', {
            readonly 'node': _T_Type_Node<M_Source>
        }]
        | readonly ['nothing', null]
        | readonly ['number', _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.number_types.D<M_Source>>]
            | readonly ['local', _T_Number_Type<M_Source>]
        >]
        | readonly ['optional', _T_Type_Node<M_Source>]
        | readonly ['reference', {
            readonly 'referent': _T_Type_Node_Reference<M_Source>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<M_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                }]
            >
        }]
        | readonly ['state group', _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>]
        | readonly ['text', _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
            | readonly ['local', _T_Text_Type<M_Source>]
        >]
}

export namespace _T_Type_Node_Reference {
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Type_Node<M_Source>
    }
    export type resulting_node<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
    
    export namespace tail {
        
        export namespace L {
            
            export namespace SG {
                export type dictionary<M_Source> = null
                
                export namespace group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Group.D<M_Source>
                }
                export type group<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>
                export type list<M_Source> = null
                export type optional<M_Source> = null
                
                export namespace state_group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Type_Node.SG.state_group.D<M_Source>
                }
                export type state_group<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }
            export type SG<M_Source> = 
                | readonly ['dictionary', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>]
        }
        export type L<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['dictionary', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
            | readonly ['list', null]
            | readonly ['optional', null]
            | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>]
        >
    }
    export type tail<M_Source> = _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
        | readonly ['dictionary', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
        | readonly ['list', null]
        | readonly ['optional', null]
        | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>]
    >>
    
    export namespace type_location {
    }
    export type type_location<M_Source> = _T_Type_Reference<M_Source>
}

export namespace _T_Type_Parameters {
    export type D<M_Source> = null
}

export namespace _T_Type_Reference {
    
    export namespace location {
        
        export namespace SG {
            
            export namespace external {
                
                export namespace _import {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Imports.D<M_Source>
                }
                export type _import<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                
                export namespace _type {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                }
                export type _type<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }
            export type external<M_Source> = {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }
            
            export namespace internal {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
            }
            export type internal<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
        }
        export type SG<M_Source> = 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
    }
    export type location<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['external', {
            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
        }]
        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
    >
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Type_Node<M_Source>
    }
    export type resulting_node<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
}

export namespace _T_Type_Specification {
    
    export namespace schema {
    }
    export type schema<M_Source> = _T_Schema_Tree<M_Source>
    
    export namespace schema_path {
        export type L<M_Source> = string
    }
    export type schema_path<M_Source> = _i_core._T_List<M_Source, string>
    export type _type<M_Source> = string
}

export namespace _T_Types {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Type<M_Source>
}

// *** ALIASES FOR NESTED TYPES

export namespace Benchmark {
    export type dense<M_Source> = boolean
    
    export namespace resulting_dictionary {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Dictionary<M_Source>
    }
    export type resulting_dictionary<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
    
    export namespace selection {
    }
    export type selection<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
}

export namespace Constraint {
    
    export namespace selection {
    }
    export type selection<M_Source> = _T_Relative_Value_Selection<M_Source>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace optional_value {
                
                export namespace selected_optional_value {
                    
                    export namespace Type {
                    }
                    export type Type<M_Source> = _T_Type_Node.SG.optional<M_Source>
                }
                export type selected_optional_value<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.optional<M_Source>>
            }
            export type optional_value<M_Source> = {
                readonly 'selected optional value': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.optional<M_Source>>
            }
            
            export namespace state {
                
                export namespace selected_state_group {
                    
                    export namespace Type {
                    }
                    export type Type<M_Source> = _T_Type_Node.SG.state_group<M_Source>
                }
                export type selected_state_group<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                
                export namespace state {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Type_Node.SG.state_group.D<M_Source>
                }
                export type state<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }
            export type state<M_Source> = {
                readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }
        }
        export type SG<M_Source> = 
            | readonly ['optional value', {
                readonly 'selected optional value': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.optional<M_Source>>
            }]
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }]
    }
    export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['optional value', {
            readonly 'selected optional value': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.optional<M_Source>>
        }]
        | readonly ['state', {
            readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
        }]
    >
}

export namespace Dictionary {
    
    export namespace node {
    }
    export type node<M_Source> = _T_Type_Node<M_Source>
    export type ordered<M_Source> = boolean
}

export namespace Globals {
    
    export namespace complexity {
        
        export namespace SG {
            export type constrained<M_Source> = null
            export type unconstrained<M_Source> = null
        }
        export type SG<M_Source> = 
            | readonly ['constrained', null]
            | readonly ['unconstrained', null]
    }
    export type complexity<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['constrained', null]
        | readonly ['unconstrained', null]
    >
    
    export namespace number_types {
        
        export namespace D {
        }
        export type D<M_Source> = _T_Number_Type<M_Source>
    }
    export type number_types<M_Source> = _i_core._T_Dictionary<M_Source, _T_Number_Type<M_Source>>
    
    export namespace text_types {
        
        export namespace D {
        }
        export type D<M_Source> = _T_Text_Type<M_Source>
    }
    export type text_types<M_Source> = _i_core._T_Dictionary<M_Source, _T_Text_Type<M_Source>>
}

export namespace Group {
    
    export namespace D {
        
        export namespace description {
            export type O<M_Source> = string
        }
        export type description<M_Source> = _pt.Optional_Value<string>
        
        export namespace node {
        }
        export type node<M_Source> = _T_Type_Node<M_Source>
    }
    export type D<M_Source> = {
        readonly 'description': _pt.Optional_Value<string>
        readonly 'node': _T_Type_Node<M_Source>
    }
}

export namespace Guaranteed_Value_Selection {
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Type_Node<M_Source>
    }
    export type resulting_node<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
    
    export namespace start {
        
        export namespace SG {
            
            export namespace constraint {
                
                export namespace SG {
                    
                    export namespace component {
                        
                        export namespace constraint {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Property_Constraints.D<M_Source>
                        }
                        export type constraint<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                        }
                        export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                    export type component<M_Source> = {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                    
                    export namespace reference {
                        
                        export namespace constraint {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Property_Constraints.D<M_Source>
                        }
                        export type constraint<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                        }
                        export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                    export type reference<M_Source> = {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['component', {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }]
                    | readonly ['reference', {
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }]
            }
            export type constraint<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['component', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
                | readonly ['reference', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
            >
            export type linked_entry<M_Source> = null
            export type list_cursor<M_Source> = null
            
            export namespace option_constraint {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Option_Constraints.D<M_Source>
            }
            export type option_constraint<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Option_Constraints.D<M_Source>>
            
            export namespace parameter {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Signature_Parameters.values.D<M_Source>
            }
            export type parameter<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>
            
            export namespace parent_sibling {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
            }
            export type parent_sibling<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            
            export namespace result {
                
                export namespace SG {
                    
                    export namespace list {
                        
                        export namespace list_result {
                            
                            export namespace Type {
                            }
                            export type Type<M_Source> = _T_Node_Resolver.SG.list.result.O<M_Source>
                        }
                        export type list_result<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                        }
                        export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                    export type list<M_Source> = {
                        readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }
                    
                    export namespace optional_value {
                        
                        export namespace optional_value {
                            
                            export namespace Type {
                            }
                            export type Type<M_Source> = _T_Node_Resolver.SG.optional<M_Source>
                        }
                        export type optional_value<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                        }
                        export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        
                        export namespace result {
                        }
                        export type result<M_Source> = _T_Type_Reference<M_Source>
                    }
                    export type optional_value<M_Source> = {
                        readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        readonly 'result': _T_Type_Reference<M_Source>
                    }
                    
                    export namespace state_group {
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                        }
                        export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        
                        export namespace result {
                        }
                        export type result<M_Source> = _T_Type_Reference<M_Source>
                        
                        export namespace state_group {
                            
                            export namespace Type {
                            }
                            export type Type<M_Source> = _T_Node_Resolver.SG.state_group<M_Source>
                        }
                        export type state_group<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                    }
                    export type state_group<M_Source> = {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        readonly 'result': _T_Type_Reference<M_Source>
                        readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['list', {
                        readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    }]
                    | readonly ['optional value', {
                        readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        readonly 'result': _T_Type_Reference<M_Source>
                    }]
                    | readonly ['state group', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                        readonly 'result': _T_Type_Reference<M_Source>
                        readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                    }]
            }
            export type result<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['list', {
                    readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                }]
            >
            
            export namespace sibling {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
            }
            export type sibling<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
        }
        export type SG<M_Source> = 
            | readonly ['constraint', _i_core._T_State_Group<M_Source, 
                | readonly ['component', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
                | readonly ['reference', {
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
            >]
            | readonly ['linked entry', null]
            | readonly ['list cursor', null]
            | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Option_Constraints.D<M_Source>>]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
            | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>]
            | readonly ['result', _i_core._T_State_Group<M_Source, 
                | readonly ['list', {
                    readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                }]
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                }]
            >]
            | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>]
    }
    export type start<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['constraint', _i_core._T_State_Group<M_Source, 
            | readonly ['component', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            }]
            | readonly ['reference', {
                readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Property_Constraints.D<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            }]
        >]
        | readonly ['linked entry', null]
        | readonly ['list cursor', null]
        | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Option_Constraints.D<M_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
        | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>]
        | readonly ['result', _i_core._T_State_Group<M_Source, 
            | readonly ['list', {
                readonly 'list result': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.list.result.O<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
            }]
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
                readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
            }]
        >]
        | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>]
    >
    
    export namespace tail {
    }
    export type tail<M_Source> = _T_Relative_Value_Selection<M_Source>
}

export namespace Imports {
    
    export namespace D {
        
        export namespace schema {
            
            export namespace Type {
            }
            export type Type<M_Source> = _T_Schema<M_Source>
        }
        export type schema<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Schema<M_Source>>
        
        export namespace schema_set_child {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Schemas.D<M_Source>
        }
        export type schema_set_child<M_Source> = _i_core._T_Reference_To_Stacked_Dictionary_Entry<M_Source, _T_Schemas.D<M_Source>>
    }
    export type D<M_Source> = {
        readonly 'schema': _i_core._T_Derived_Reference<M_Source, _T_Schema<M_Source>>
        readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<M_Source, _T_Schemas.D<M_Source>>
    }
}

export namespace Lookup_Selection {
    
    export namespace resulting_dictionary {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Dictionary<M_Source>
    }
    export type resulting_dictionary<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace dictionary {
                
                export namespace selected_dictionary {
                    
                    export namespace Type {
                    }
                    export type Type<M_Source> = _T_Dictionary<M_Source>
                }
                export type selected_dictionary<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                
                export namespace selection {
                }
                export type selection<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
            }
            export type dictionary<M_Source> = {
                readonly 'selected dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
            }
            
            export namespace not_circular_dependent_siblings {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Dictionary<M_Source>
            }
            export type not_circular_dependent_siblings<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            
            export namespace parameter {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Signature_Parameters.lookups.D<M_Source>
            }
            export type parameter<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.lookups.D<M_Source>>
            
            export namespace possibly_circular_dependent_siblings {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Dictionary<M_Source>
            }
            export type possibly_circular_dependent_siblings<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
        }
        export type SG<M_Source> = 
            | readonly ['dictionary', {
                readonly 'selected dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
            }]
            | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.lookups.D<M_Source>>]
            | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>]
    }
    export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['dictionary', {
            readonly 'selected dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
        }]
        | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>]
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.lookups.D<M_Source>>]
        | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>]
    >
}

export namespace Node_Resolver {
    
    export namespace SG {
        export type _boolean<M_Source> = null
        
        export namespace component {
            
            export namespace _arguments {
                
                export namespace O {
                    
                    export namespace lookups {
                        
                        export namespace O {
                            
                            export namespace D {
                                
                                export namespace SG {
                                    export type empty_stack<M_Source> = null
                                    export type not_set<M_Source> = null
                                    
                                    export namespace selection {
                                    }
                                    export type selection<M_Source> = _T_Lookup_Selection<M_Source>
                                    
                                    export namespace stack {
                                        
                                        export namespace element {
                                        }
                                        export type element<M_Source> = _T_Lookup_Selection<M_Source>
                                        
                                        export namespace stack {
                                        }
                                        export type stack<M_Source> = _T_Lookup_Selection<M_Source>
                                    }
                                    export type stack<M_Source> = {
                                        readonly 'element': _T_Lookup_Selection<M_Source>
                                        readonly 'stack': _T_Lookup_Selection<M_Source>
                                    }
                                }
                                export type SG<M_Source> = 
                                    | readonly ['empty stack', null]
                                    | readonly ['not set', null]
                                    | readonly ['selection', _T_Lookup_Selection<M_Source>]
                                    | readonly ['stack', {
                                        readonly 'element': _T_Lookup_Selection<M_Source>
                                        readonly 'stack': _T_Lookup_Selection<M_Source>
                                    }]
                            }
                            export type D<M_Source> = _i_core._T_State_Group<M_Source, 
                                | readonly ['empty stack', null]
                                | readonly ['not set', null]
                                | readonly ['selection', _T_Lookup_Selection<M_Source>]
                                | readonly ['stack', {
                                    readonly 'element': _T_Lookup_Selection<M_Source>
                                    readonly 'stack': _T_Lookup_Selection<M_Source>
                                }]
                            >
                        }
                        export type O<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                            | readonly ['empty stack', null]
                            | readonly ['not set', null]
                            | readonly ['selection', _T_Lookup_Selection<M_Source>]
                            | readonly ['stack', {
                                readonly 'element': _T_Lookup_Selection<M_Source>
                                readonly 'stack': _T_Lookup_Selection<M_Source>
                            }]
                        >>
                    }
                    export type lookups<M_Source> = _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection<M_Source>]
                        | readonly ['stack', {
                            readonly 'element': _T_Lookup_Selection<M_Source>
                            readonly 'stack': _T_Lookup_Selection<M_Source>
                        }]
                    >>>
                    
                    export namespace values {
                        
                        export namespace O {
                            
                            export namespace D {
                                
                                export namespace SG {
                                    
                                    export namespace optional {
                                    }
                                    export type optional<M_Source> = _T_Optional_Value_Initialization<M_Source>
                                    
                                    export namespace parameter {
                                        
                                        export namespace Dictionary_Entry {
                                        }
                                        export type Dictionary_Entry<M_Source> = _T_Signature_Parameters.values.D<M_Source>
                                    }
                                    export type parameter<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>
                                    
                                    export namespace required {
                                    }
                                    export type required<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
                                }
                                export type SG<M_Source> = 
                                    | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                                    | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                            }
                            export type D<M_Source> = _i_core._T_State_Group<M_Source, 
                                | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                                | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                            >
                        }
                        export type O<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                            | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                            | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                        >>
                    }
                    export type values<M_Source> = _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                        | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                        | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                    >>>
                }
                export type O<M_Source> = {
                    readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection<M_Source>]
                        | readonly ['stack', {
                            readonly 'element': _T_Lookup_Selection<M_Source>
                            readonly 'stack': _T_Lookup_Selection<M_Source>
                        }]
                    >>>
                    readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                        | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                        | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                    >>>
                }
            }
            export type _arguments<M_Source> = _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<M_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<M_Source>
                        readonly 'stack': _T_Lookup_Selection<M_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                >>>
            }>
            
            export namespace constraints {
            }
            export type constraints<M_Source> = _T_Property_Constraints<M_Source>
            
            export namespace location {
                
                export namespace SG {
                    
                    export namespace external {
                        
                        export namespace _import {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Imports.D<M_Source>
                        }
                        export type _import<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                        
                        export namespace _type {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Signatures.D<M_Source>
                        }
                        export type _type<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                    }
                    export type external<M_Source> = {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                    }
                    
                    export namespace internal {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Signatures.D<M_Source>
                    }
                    export type internal<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                }
                export type SG<M_Source> = 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
            }
            export type location<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
            >
            
            export namespace signature {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Signatures.D<M_Source>
            }
            export type signature<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
        }
        export type component<M_Source> = {
            readonly 'arguments': _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<M_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<M_Source>
                        readonly 'stack': _T_Lookup_Selection<M_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                >>>
            }>
            readonly 'constraints': _T_Property_Constraints<M_Source>
            readonly 'location': _i_core._T_State_Group<M_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
            >
            readonly 'signature': _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
        }
        
        export namespace dictionary {
            
            export namespace benchmark {
                
                export namespace O {
                }
                export type O<M_Source> = _T_Benchmark<M_Source>
            }
            export type benchmark<M_Source> = _pt.Optional_Value<_T_Benchmark<M_Source>>
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Dictionary<M_Source>
            }
            export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            
            export namespace resolver {
            }
            export type resolver<M_Source> = _T_Node_Resolver<M_Source>
        }
        export type dictionary<M_Source> = {
            readonly 'benchmark': _pt.Optional_Value<_T_Benchmark<M_Source>>
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            readonly 'resolver': _T_Node_Resolver<M_Source>
        }
        
        export namespace group {
        }
        export type group<M_Source> = _T_Node_Resolver_Group<M_Source>
        
        export namespace list {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Type_Node.SG.list<M_Source>
            }
            export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.list<M_Source>>
            
            export namespace resolver {
            }
            export type resolver<M_Source> = _T_Node_Resolver<M_Source>
            
            export namespace result {
                
                export namespace O {
                }
                export type O<M_Source> = _T_Node_Resolver_List_Result<M_Source>
            }
            export type result<M_Source> = _pt.Optional_Value<_T_Node_Resolver_List_Result<M_Source>>
        }
        export type list<M_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.list<M_Source>>
            readonly 'resolver': _T_Node_Resolver<M_Source>
            readonly 'result': _pt.Optional_Value<_T_Node_Resolver_List_Result<M_Source>>
        }
        export type nothing<M_Source> = null
        export type _number<M_Source> = null
        
        export namespace optional {
            
            export namespace constraints {
            }
            export type constraints<M_Source> = _T_Option_Constraints<M_Source>
            
            export namespace resolver {
            }
            export type resolver<M_Source> = _T_Node_Resolver<M_Source>
        }
        export type optional<M_Source> = {
            readonly 'constraints': _T_Option_Constraints<M_Source>
            readonly 'resolver': _T_Node_Resolver<M_Source>
        }
        
        export namespace reference {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Type_Node.SG.reference<M_Source>
            }
            export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace derived {
                        
                        export namespace value {
                        }
                        export type value<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
                    }
                    export type derived<M_Source> = {
                        readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
                    }
                    
                    export namespace selected {
                        
                        export namespace constraints {
                        }
                        export type constraints<M_Source> = _T_Property_Constraints<M_Source>
                        
                        export namespace definition {
                            
                            export namespace Type {
                            }
                            export type Type<M_Source> = _T_Type_Node.SG.reference._type.SG.selected<M_Source>
                        }
                        export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                        
                        export namespace lookup {
                        }
                        export type lookup<M_Source> = _T_Lookup_Selection<M_Source>
                    }
                    export type selected<M_Source> = {
                        readonly 'constraints': _T_Property_Constraints<M_Source>
                        readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                        readonly 'lookup': _T_Lookup_Selection<M_Source>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['derived', {
                        readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
                    }]
                    | readonly ['selected', {
                        readonly 'constraints': _T_Property_Constraints<M_Source>
                        readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                        readonly 'lookup': _T_Lookup_Selection<M_Source>
                    }]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<M_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                    readonly 'lookup': _T_Lookup_Selection<M_Source>
                }]
            >
        }
        export type reference<M_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<M_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                    readonly 'lookup': _T_Lookup_Selection<M_Source>
                }]
            >
        }
        
        export namespace state_group {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Type_Node.SG.state_group<M_Source>
            }
            export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            
            export namespace states {
                
                export namespace D {
                    
                    export namespace constraints {
                    }
                    export type constraints<M_Source> = _T_Option_Constraints<M_Source>
                    
                    export namespace resolver {
                    }
                    export type resolver<M_Source> = _T_Node_Resolver<M_Source>
                }
                export type D<M_Source> = {
                    readonly 'constraints': _T_Option_Constraints<M_Source>
                    readonly 'resolver': _T_Node_Resolver<M_Source>
                }
            }
            export type states<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'constraints': _T_Option_Constraints<M_Source>
                readonly 'resolver': _T_Node_Resolver<M_Source>
            }>
        }
        export type state_group<M_Source> = {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            readonly 'states': _i_core._T_Dictionary<M_Source, {
                readonly 'constraints': _T_Option_Constraints<M_Source>
                readonly 'resolver': _T_Node_Resolver<M_Source>
            }>
        }
        export type text<M_Source> = null
    }
    export type SG<M_Source> = 
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'arguments': _pt.Optional_Value<{
                readonly 'lookups': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection<M_Source>]
                    | readonly ['stack', {
                        readonly 'element': _T_Lookup_Selection<M_Source>
                        readonly 'stack': _T_Lookup_Selection<M_Source>
                    }]
                >>>
                readonly 'values': _pt.Optional_Value<_i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
                    | readonly ['optional', _T_Optional_Value_Initialization<M_Source>]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
                    | readonly ['required', _T_Guaranteed_Value_Selection<M_Source>]
                >>>
            }>
            readonly 'constraints': _T_Property_Constraints<M_Source>
            readonly 'location': _i_core._T_State_Group<M_Source, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
            >
            readonly 'signature': _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
        }]
        | readonly ['dictionary', {
            readonly 'benchmark': _pt.Optional_Value<_T_Benchmark<M_Source>>
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            readonly 'resolver': _T_Node_Resolver<M_Source>
        }]
        | readonly ['group', _T_Node_Resolver_Group<M_Source>]
        | readonly ['list', {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.list<M_Source>>
            readonly 'resolver': _T_Node_Resolver<M_Source>
            readonly 'result': _pt.Optional_Value<_T_Node_Resolver_List_Result<M_Source>>
        }]
        | readonly ['nothing', null]
        | readonly ['number', null]
        | readonly ['optional', {
            readonly 'constraints': _T_Option_Constraints<M_Source>
            readonly 'resolver': _T_Node_Resolver<M_Source>
        }]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection<M_Source>
                }]
                | readonly ['selected', {
                    readonly 'constraints': _T_Property_Constraints<M_Source>
                    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference._type.SG.selected<M_Source>>
                    readonly 'lookup': _T_Lookup_Selection<M_Source>
                }]
            >
        }]
        | readonly ['state group', {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            readonly 'states': _i_core._T_Dictionary<M_Source, {
                readonly 'constraints': _T_Option_Constraints<M_Source>
                readonly 'resolver': _T_Node_Resolver<M_Source>
            }>
        }]
        | readonly ['text', null]
}

export namespace Node_Resolver_Group {
    
    export namespace D {
        
        export namespace definition {
            
            export namespace Type {
            }
            export type Type<M_Source> = _T_Group.D<M_Source>
        }
        export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Group.D<M_Source>>
        
        export namespace resolver {
        }
        export type resolver<M_Source> = _T_Node_Resolver<M_Source>
    }
    export type D<M_Source> = {
        readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Group.D<M_Source>>
        readonly 'resolver': _T_Node_Resolver<M_Source>
    }
}

export namespace Node_Resolver_List_Result {
}

export namespace Number_Type {
    
    export namespace precision {
        
        export namespace SG {
            
            export namespace approximation {
                export type significant_digits<M_Source> = number
            }
            export type approximation<M_Source> = {
                readonly 'significant digits': number
            }
            
            export namespace exact {
                
                export namespace decimal_separator_offset {
                    export type O<M_Source> = number
                }
                export type decimal_separator_offset<M_Source> = _pt.Optional_Value<number>
                
                export namespace _type {
                    
                    export namespace SG {
                        export type integer<M_Source> = null
                        export type natural<M_Source> = null
                        export type positive_natural<M_Source> = null
                    }
                    export type SG<M_Source> = 
                        | readonly ['integer', null]
                        | readonly ['natural', null]
                        | readonly ['positive natural', null]
                }
                export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }
            export type exact<M_Source> = {
                readonly 'decimal separator offset': _pt.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<M_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }
        }
        export type SG<M_Source> = 
            | readonly ['approximation', {
                readonly 'significant digits': number
            }]
            | readonly ['exact', {
                readonly 'decimal separator offset': _pt.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<M_Source, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }]
    }
    export type precision<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['approximation', {
            readonly 'significant digits': number
        }]
        | readonly ['exact', {
            readonly 'decimal separator offset': _pt.Optional_Value<number>
            readonly 'type': _i_core._T_State_Group<M_Source, 
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
            export type assert_is_set<M_Source> = _T_Possible_Value_Selection<M_Source>
            
            export namespace state {
                
                export namespace selected_state_group {
                    
                    export namespace Type {
                    }
                    export type Type<M_Source> = _T_Type_Node.SG.state_group<M_Source>
                }
                export type selected_state_group<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                
                export namespace selection {
                }
                export type selection<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
                
                export namespace state {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Type_Node.SG.state_group.D<M_Source>
                }
                export type state<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }
            export type state<M_Source> = {
                readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }
        }
        export type SG<M_Source> = 
            | readonly ['assert is set', _T_Possible_Value_Selection<M_Source>]
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
                readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }]
    }
    export type D<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['assert is set', _T_Possible_Value_Selection<M_Source>]
        | readonly ['state', {
            readonly 'selected state group': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.state_group<M_Source>>
            readonly 'selection': _T_Guaranteed_Value_Selection<M_Source>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
        }]
    >
}

export namespace Optional_Value_Initialization {
    
    export namespace SG {
        export type not_set<M_Source> = null
        
        export namespace selection {
        }
        export type selection<M_Source> = _T_Possible_Value_Selection<M_Source>
        
        export namespace _set {
        }
        export type _set<M_Source> = _T_Guaranteed_Value_Selection<M_Source>
    }
    export type SG<M_Source> = 
        | readonly ['not set', null]
        | readonly ['selection', _T_Possible_Value_Selection<M_Source>]
        | readonly ['set', _T_Guaranteed_Value_Selection<M_Source>]
}

export namespace Possible_Value_Selection {
    
    export namespace SG {
        
        export namespace parameter {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Signature_Parameters.values.D<M_Source>
        }
        export type parameter<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>
        
        export namespace result {
            
            export namespace SG {
                
                export namespace optional_value {
                    
                    export namespace optional_value {
                        
                        export namespace Type {
                        }
                        export type Type<M_Source> = _T_Node_Resolver.SG.optional<M_Source>
                    }
                    export type optional_value<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                    
                    export namespace property {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                    }
                    export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    
                    export namespace result {
                    }
                    export type result<M_Source> = _T_Type_Reference<M_Source>
                }
                export type optional_value<M_Source> = {
                    readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                }
                
                export namespace state_group {
                    
                    export namespace property {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Node_Resolver_Group.D<M_Source>
                    }
                    export type property<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    
                    export namespace result {
                    }
                    export type result<M_Source> = _T_Type_Reference<M_Source>
                    
                    export namespace state_group {
                        
                        export namespace Type {
                        }
                        export type Type<M_Source> = _T_Node_Resolver.SG.state_group<M_Source>
                    }
                    export type state_group<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                }
                export type state_group<M_Source> = {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                }
            }
            export type SG<M_Source> = 
                | readonly ['optional value', {
                    readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                    readonly 'result': _T_Type_Reference<M_Source>
                    readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
                }]
        }
        export type result<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
                readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
            }]
        >
    }
    export type SG<M_Source> = 
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signature_Parameters.values.D<M_Source>>]
        | readonly ['result', _i_core._T_State_Group<M_Source, 
            | readonly ['optional value', {
                readonly 'optional value': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.optional<M_Source>>
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
            }]
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Node_Resolver_Group.D<M_Source>>
                readonly 'result': _T_Type_Reference<M_Source>
                readonly 'state group': _i_core._T_Derived_Reference<M_Source, _T_Node_Resolver.SG.state_group<M_Source>>
            }]
        >]
}

export namespace Presence {
    
    export namespace SG {
        export type optional<M_Source> = null
        export type required<M_Source> = null
    }
    export type SG<M_Source> = 
        | readonly ['optional', null]
        | readonly ['required', null]
}

export namespace Property_Constraint {
    
    export namespace constraint {
    }
    export type constraint<M_Source> = _T_Constraint<M_Source>
    
    export namespace start {
        
        export namespace SG {
            export type property<M_Source> = null
            
            export namespace sibling {
            }
            export type sibling<M_Source> = _T_Reference_To_Property_Constraint<M_Source>
        }
        export type SG<M_Source> = 
            | readonly ['property', null]
            | readonly ['sibling', _T_Reference_To_Property_Constraint<M_Source>]
    }
    export type start<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['property', null]
        | readonly ['sibling', _T_Reference_To_Property_Constraint<M_Source>]
    >
}

export namespace Property_Constraints {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Property_Constraint<M_Source>
}

export namespace Reference_To_Property_Constraint {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry<M_Source> = _T_Property_Constraints.D<M_Source>
}

export namespace Relative_Value_Selection {
    
    export namespace path {
        
        export namespace L {
            
            export namespace SG {
                export type component<M_Source> = null
                
                export namespace group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Group.D<M_Source>
                }
                export type group<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>
                
                export namespace reference {
                    
                    export namespace definition {
                        
                        export namespace Type {
                        }
                        export type Type<M_Source> = _T_Type_Node.SG.reference<M_Source>
                    }
                    export type definition<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
                }
                export type reference<M_Source> = {
                    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
                }
            }
            export type SG<M_Source> = 
                | readonly ['component', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
                | readonly ['reference', {
                    readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
                }]
        }
        export type L<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['component', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
            | readonly ['reference', {
                readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
            }]
        >
    }
    export type path<M_Source> = _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
        | readonly ['component', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<M_Source, _T_Type_Node.SG.reference<M_Source>>
        }]
    >>
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Type_Node<M_Source>
    }
    export type resulting_node<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
}

export namespace Resolve_Logic {
    
    export namespace resolvers {
    }
    export type resolvers<M_Source> = _T_Resolvers<M_Source>
    
    export namespace signatures {
        
        export namespace types {
        }
        export type types<M_Source> = _T_Signatures<M_Source>
    }
    export type signatures<M_Source> = {
        readonly 'types': _T_Signatures<M_Source>
    }
}

export namespace Resolvers {
    
    export namespace D {
        
        export namespace signature {
            
            export namespace Type {
            }
            export type Type<M_Source> = _T_Signatures.D<M_Source>
        }
        export type signature<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
        
        export namespace type_resolver {
        }
        export type type_resolver<M_Source> = _T_Node_Resolver<M_Source>
    }
    export type D<M_Source> = {
        readonly 'signature': _i_core._T_Derived_Reference<M_Source, _T_Signatures.D<M_Source>>
        readonly 'type resolver': _T_Node_Resolver<M_Source>
    }
}

export namespace Schema {
    
    export namespace complexity {
        
        export namespace SG {
            
            export namespace constrained {
            }
            export type constrained<M_Source> = _T_Resolve_Logic<M_Source>
            export type unconstrained<M_Source> = null
        }
        export type SG<M_Source> = 
            | readonly ['constrained', _T_Resolve_Logic<M_Source>]
            | readonly ['unconstrained', null]
    }
    export type complexity<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['constrained', _T_Resolve_Logic<M_Source>]
        | readonly ['unconstrained', null]
    >
    
    export namespace globals {
    }
    export type globals<M_Source> = _T_Globals<M_Source>
    
    export namespace imports {
    }
    export type imports<M_Source> = _T_Imports<M_Source>
    
    export namespace types {
    }
    export type types<M_Source> = _T_Types<M_Source>
}

export namespace Schema_Tree {
    
    export namespace SG {
        
        export namespace schema {
        }
        export type schema<M_Source> = _T_Schema<M_Source>
        
        export namespace _set {
        }
        export type _set<M_Source> = _T_Schemas<M_Source>
    }
    export type SG<M_Source> = 
        | readonly ['schema', _T_Schema<M_Source>]
        | readonly ['set', _T_Schemas<M_Source>]
}

export namespace Schemas {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Schema_Tree<M_Source>
}

export namespace Signature {
    
    export namespace parameters {
        
        export namespace SG {
            
            export namespace local {
            }
            export type local<M_Source> = _T_Signature_Parameters<M_Source>
            
            export namespace same_as {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Signatures.D<M_Source>
            }
            export type same_as<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>
        }
        export type SG<M_Source> = 
            | readonly ['local', _T_Signature_Parameters<M_Source>]
            | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
    }
    export type parameters<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['local', _T_Signature_Parameters<M_Source>]
        | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Signatures.D<M_Source>>]
    >
    
    export namespace resolved_parameters {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Signature_Parameters<M_Source>
    }
    export type resolved_parameters<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Signature_Parameters<M_Source>>
    
    export namespace _type {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Type<M_Source>
    }
    export type _type<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type<M_Source>>
}

export namespace Signature_Parameters {
    
    export namespace lookups {
        
        export namespace D {
            
            export namespace dictionary {
                
                export namespace Type {
                }
                export type Type<M_Source> = _T_Dictionary<M_Source>
            }
            export type dictionary<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            
            export namespace presence {
            }
            export type presence<M_Source> = _T_Presence<M_Source>
            
            export namespace referent {
            }
            export type referent<M_Source> = _T_Type_Reference<M_Source>
            
            export namespace _type {
                
                export namespace SG {
                    export type acyclic<M_Source> = null
                    export type cyclic<M_Source> = null
                    export type stack<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['acyclic', null]
                    | readonly ['cyclic', null]
                    | readonly ['stack', null]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['acyclic', null]
                | readonly ['cyclic', null]
                | readonly ['stack', null]
            >
        }
        export type D<M_Source> = {
            readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
            readonly 'presence': _T_Presence<M_Source>
            readonly 'referent': _T_Type_Reference<M_Source>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['acyclic', null]
                | readonly ['cyclic', null]
                | readonly ['stack', null]
            >
        }
    }
    export type lookups<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
        readonly 'presence': _T_Presence<M_Source>
        readonly 'referent': _T_Type_Reference<M_Source>
        readonly 'type': _i_core._T_State_Group<M_Source, 
            | readonly ['acyclic', null]
            | readonly ['cyclic', null]
            | readonly ['stack', null]
        >
    }>
    
    export namespace values {
        
        export namespace D {
            
            export namespace data_type {
            }
            export type data_type<M_Source> = _T_Type_Reference<M_Source>
            
            export namespace presence {
            }
            export type presence<M_Source> = _T_Presence<M_Source>
        }
        export type D<M_Source> = {
            readonly 'data type': _T_Type_Reference<M_Source>
            readonly 'presence': _T_Presence<M_Source>
        }
    }
    export type values<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'data type': _T_Type_Reference<M_Source>
        readonly 'presence': _T_Presence<M_Source>
    }>
}

export namespace Signatures {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Signature<M_Source>
}

export namespace Text_Type {
    
    export namespace _type {
        
        export namespace SG {
            export type multi_line<M_Source> = null
            export type single_line<M_Source> = null
        }
        export type SG<M_Source> = 
            | readonly ['multi line', null]
            | readonly ['single line', null]
    }
    export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export namespace Type {
    
    export namespace node {
    }
    export type node<M_Source> = _T_Type_Node<M_Source>
    
    export namespace type_parameters {
    }
    export type type_parameters<M_Source> = _T_Type_Parameters<M_Source>
}

export namespace Type_Node {
    
    export namespace SG {
        export type _boolean<M_Source> = null
        
        export namespace component {
            
            export namespace SG {
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Imports.D<M_Source>
                    }
                    export type _import<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    
                    export namespace _type {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                    }
                    export type _type<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }
                export type external<M_Source> = {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }
                
                export namespace internal {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                }
                export type internal<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                
                export namespace internal_cyclic {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                }
                export type internal_cyclic<M_Source> = _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>
            }
            export type SG<M_Source> = 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        }
        export type component<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        >
        
        export namespace dictionary {
        }
        export type dictionary<M_Source> = _T_Dictionary<M_Source>
        
        export namespace group {
        }
        export type group<M_Source> = _T_Group<M_Source>
        
        export namespace list {
            
            export namespace node {
            }
            export type node<M_Source> = _T_Type_Node<M_Source>
        }
        export type list<M_Source> = {
            readonly 'node': _T_Type_Node<M_Source>
        }
        export type nothing<M_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Globals.number_types.D<M_Source>
                }
                export type global<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.number_types.D<M_Source>>
                
                export namespace local {
                }
                export type local<M_Source> = _T_Number_Type<M_Source>
            }
            export type SG<M_Source> = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.number_types.D<M_Source>>]
                | readonly ['local', _T_Number_Type<M_Source>]
        }
        export type _number<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.number_types.D<M_Source>>]
            | readonly ['local', _T_Number_Type<M_Source>]
        >
        
        export namespace optional {
        }
        export type optional<M_Source> = _T_Type_Node<M_Source>
        
        export namespace reference {
            
            export namespace referent {
            }
            export type referent<M_Source> = _T_Type_Node_Reference<M_Source>
            
            export namespace _type {
                
                export namespace SG {
                    export type derived<M_Source> = null
                    
                    export namespace selected {
                        
                        export namespace dependency {
                            
                            export namespace SG {
                                export type acyclic<M_Source> = null
                                export type cyclic<M_Source> = null
                                export type stack<M_Source> = null
                            }
                            export type SG<M_Source> = 
                                | readonly ['acyclic', null]
                                | readonly ['cyclic', null]
                                | readonly ['stack', null]
                        }
                        export type dependency<M_Source> = _i_core._T_State_Group<M_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        
                        export namespace dictionary {
                            
                            export namespace Type {
                            }
                            export type Type<M_Source> = _T_Dictionary<M_Source>
                        }
                        export type dictionary<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                    }
                    export type selected<M_Source> = {
                        readonly 'dependency': _i_core._T_State_Group<M_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['derived', null]
                    | readonly ['selected', {
                        readonly 'dependency': _i_core._T_State_Group<M_Source, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                        readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                    }]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<M_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                }]
            >
        }
        export type reference<M_Source> = {
            readonly 'referent': _T_Type_Node_Reference<M_Source>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<M_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                }]
            >
        }
        
        export namespace state_group {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Type_Node<M_Source>
        }
        export type state_group<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>
        
        export namespace text {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Globals.text_types.D<M_Source>
                }
                export type global<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>
                
                export namespace local {
                }
                export type local<M_Source> = _T_Text_Type<M_Source>
            }
            export type SG<M_Source> = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
                | readonly ['local', _T_Text_Type<M_Source>]
        }
        export type text<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
            | readonly ['local', _T_Text_Type<M_Source>]
        >
    }
    export type SG<M_Source> = 
        | readonly ['boolean', null]
        | readonly ['component', _i_core._T_State_Group<M_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        >]
        | readonly ['dictionary', _T_Dictionary<M_Source>]
        | readonly ['group', _T_Group<M_Source>]
        | readonly ['list', {
            readonly 'node': _T_Type_Node<M_Source>
        }]
        | readonly ['nothing', null]
        | readonly ['number', _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.number_types.D<M_Source>>]
            | readonly ['local', _T_Number_Type<M_Source>]
        >]
        | readonly ['optional', _T_Type_Node<M_Source>]
        | readonly ['reference', {
            readonly 'referent': _T_Type_Node_Reference<M_Source>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dependency': _i_core._T_State_Group<M_Source, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                    readonly 'dictionary': _i_core._T_Derived_Reference<M_Source, _T_Dictionary<M_Source>>
                }]
            >
        }]
        | readonly ['state group', _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>]
        | readonly ['text', _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
            | readonly ['local', _T_Text_Type<M_Source>]
        >]
}

export namespace Type_Node_Reference {
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Type_Node<M_Source>
    }
    export type resulting_node<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
    
    export namespace tail {
        
        export namespace L {
            
            export namespace SG {
                export type dictionary<M_Source> = null
                
                export namespace group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Group.D<M_Source>
                }
                export type group<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>
                export type list<M_Source> = null
                export type optional<M_Source> = null
                
                export namespace state_group {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Type_Node.SG.state_group.D<M_Source>
                }
                export type state_group<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>
            }
            export type SG<M_Source> = 
                | readonly ['dictionary', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>]
        }
        export type L<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['dictionary', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
            | readonly ['list', null]
            | readonly ['optional', null]
            | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>]
        >
    }
    export type tail<M_Source> = _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
        | readonly ['dictionary', null]
        | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Group.D<M_Source>>]
        | readonly ['list', null]
        | readonly ['optional', null]
        | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Type_Node.SG.state_group.D<M_Source>>]
    >>
    
    export namespace type_location {
    }
    export type type_location<M_Source> = _T_Type_Reference<M_Source>
}

export namespace Type_Parameters {
    export type D<M_Source> = null
}

export namespace Type_Reference {
    
    export namespace location {
        
        export namespace SG {
            
            export namespace external {
                
                export namespace _import {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Imports.D<M_Source>
                }
                export type _import<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                
                export namespace _type {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                }
                export type _type<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }
            export type external<M_Source> = {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }
            
            export namespace internal {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
            }
            export type internal<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
        }
        export type SG<M_Source> = 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
    }
    export type location<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['external', {
            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
        }]
        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
    >
    
    export namespace resulting_node {
        
        export namespace Type {
        }
        export type Type<M_Source> = _T_Type_Node<M_Source>
    }
    export type resulting_node<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Type_Node<M_Source>>
}

export namespace Type_Specification {
    
    export namespace schema {
    }
    export type schema<M_Source> = _T_Schema_Tree<M_Source>
    
    export namespace schema_path {
        export type L<M_Source> = string
    }
    export type schema_path<M_Source> = _i_core._T_List<M_Source, string>
    export type _type<M_Source> = string
}

export namespace Types {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Type<M_Source>
}
