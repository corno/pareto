import * as _pi from "pareto-core-interface"
    
    import * as _i_core from "../../../core/resolved"
    
    // **** TYPES
    
    export type _T_Text_Type = {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['multi line', null]
            | readonly ['single line', null]
        >
    }
    
    export type _T_Number_Type = {
        readonly 'precision': _i_core._T_State_Group<null, 
            | readonly ['approximation', {
                readonly 'significant digits': number
            }]
            | readonly ['exact', {
                readonly 'decimal separator offset': _pi.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }]
        >
    }
    
    export type _T_Globals = {
        readonly 'complexity': _i_core._T_State_Group<null, 
            | readonly ['constrained', null]
            | readonly ['unconstrained', null]
        >
        readonly 'text types': _i_core._T_Dictionary<null, _T_Text_Type>
        readonly 'number types': _i_core._T_Dictionary<null, _T_Number_Type>
    }
    
    export type _T_Presence = _i_core._T_State_Group<null, 
        | readonly ['optional', null]
        | readonly ['required', null]
    >
    
    export type _T_Type_Parameters = _i_core._T_Dictionary<null, null>
    
    export type _T_Type = {
        readonly 'type parameters': _T_Type_Parameters
        readonly 'node': _T_Type_Node
    }
    
    export type _T_Types = _i_core._T_Ordered_Dictionary<null, _T_Type>
    
    export type _T_Dictionary = {
        readonly 'node': _T_Type_Node
        readonly 'ordered': boolean
    }
    
    export type _T_Signatures = _i_core._T_Ordered_Dictionary<null, _T_Signature>
    
    export type _T_Resolvers = _i_core._T_Ordered_Dictionary<null, {
        readonly 'signature': _i_core._T_Derived_Reference<null, _T_Signatures.D>
        readonly 'type resolver': _T_Node_Resolver
    }>
    
    export type _T_Resolve_Logic = {
        readonly 'signatures': {
            readonly 'types': _T_Signatures
        }
        readonly 'resolvers': _T_Resolvers
    }
    
    export type _T_Group = _i_core._T_Ordered_Dictionary<null, {
        readonly 'description': _pi.Optional_Value<string>
        readonly 'node': _T_Type_Node
    }>
    
    export type _T_Schema = {
        readonly 'imports': _T_Imports
        readonly 'globals': _T_Globals
        readonly 'types': _T_Types
        readonly 'complexity': _i_core._T_State_Group<null, 
            | readonly ['constrained', _T_Resolve_Logic]
            | readonly ['unconstrained', null]
        >
    }
    
    export type _T_Schema_Tree = _i_core._T_State_Group<null, 
        | readonly ['schema', _T_Schema]
        | readonly ['set', _T_Schemas]
    >
    
    export type _T_Schemas = _i_core._T_Ordered_Dictionary<null, _T_Schema_Tree>
    
    export type _T_Imports = _i_core._T_Dictionary<null, {
        readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<null, _T_Schemas.D>
        readonly 'schema': _i_core._T_Derived_Reference<null, _T_Schema>
    }>
    
    export type _T_Type_Node = _i_core._T_State_Group<null, 
        | readonly ['boolean', null]
        | readonly ['component', _i_core._T_State_Group<null, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
        >]
        | readonly ['dictionary', _T_Dictionary]
        | readonly ['group', _T_Group]
        | readonly ['list', {
            readonly 'node': _T_Type_Node
        }]
        | readonly ['nothing', null]
        | readonly ['number', _i_core._T_State_Group<null, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.number_types.D>]
            | readonly ['local', _T_Number_Type]
        >]
        | readonly ['optional', _T_Type_Node]
        | readonly ['reference', {
            readonly 'referent': _T_Type_Node_Reference
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['derived', null]
                | readonly ['selected', {
                    readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                    readonly 'dependency': _i_core._T_State_Group<null, 
                        | readonly ['acyclic', null]
                        | readonly ['cyclic', null]
                        | readonly ['stack', null]
                    >
                }]
            >
        }]
        | readonly ['state group', _i_core._T_Dictionary<null, {
            readonly 'description': _pi.Optional_Value<string>
            readonly 'node': _T_Type_Node
        }>]
        | readonly ['text', _i_core._T_State_Group<null, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
            | readonly ['local', _T_Text_Type]
        >]
    >
    
    export type _T_Type_Reference = {
        readonly 'location': _i_core._T_State_Group<null, 
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
            }]
        >
        readonly 'resulting node': _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export type _T_Type_Node_Reference = {
        readonly 'type location': _T_Type_Reference
        readonly 'tail': _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['dictionary', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
            | readonly ['list', null]
            | readonly ['optional', null]
            | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>]
        >>
        readonly 'resulting node': _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export type _T_Signature_Parameters = {
        readonly 'values': _i_core._T_Dictionary<null, {
            readonly 'data type': _T_Type_Reference
            readonly 'presence': _T_Presence
        }>
        readonly 'lookups': _i_core._T_Dictionary<null, {
            readonly 'referent': _T_Type_Reference
            readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['cyclic', null]
                | readonly ['acyclic', null]
                | readonly ['stack', null]
            >
            readonly 'presence': _T_Presence
        }>
    }
    
    export type _T_Signature = {
        readonly 'type': _i_core._T_Derived_Reference<null, _T_Type>
        readonly 'parameters': _i_core._T_State_Group<null, 
            | readonly ['local', _T_Signature_Parameters]
            | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
        >
        readonly 'resolved parameters': _i_core._T_Derived_Reference<null, _T_Signature_Parameters>
    }
    
    export type _T_Relative_Value_Selection = {
        readonly 'path': _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['component', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
            | readonly ['reference', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
            }]
        >>
        readonly 'resulting node': _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export type _T_Lookup_Selection = {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['dictionary', {
                readonly 'selection': _T_Guaranteed_Value_Selection
                readonly 'selected dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
            }]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.lookups.D>]
            | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<null, _T_Dictionary>]
            | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<null, _T_Dictionary>]
        >
        readonly 'resulting dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
    }
    
    export type _T_Constraint = {
        readonly 'selection': _T_Relative_Value_Selection
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
            }]
            | readonly ['optional value', {
                readonly 'selected optional value': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.optional>
            }]
        >
    }
    
    export type _T_Option_Constraints = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
        | readonly ['state', {
            readonly 'selection': _T_Guaranteed_Value_Selection
            readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
            readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
        }]
        | readonly ['assert is set', _T_Possible_Value_Selection]
    >>
    
    export type _T_Property_Constraints = _i_core._T_Ordered_Dictionary<null, _T_Property_Constraint>
    
    export type _T_Reference_To_Property_Constraint = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
    
    export type _T_Property_Constraint = {
        readonly 'start': _i_core._T_State_Group<null, 
            | readonly ['property', null]
            | readonly ['sibling', _T_Reference_To_Property_Constraint]
        >
        readonly 'constraint': _T_Constraint
    }
    
    export type _T_Optional_Value_Initialization = _i_core._T_State_Group<null, 
        | readonly ['not set', null]
        | readonly ['set', _T_Guaranteed_Value_Selection]
        | readonly ['selection', _T_Possible_Value_Selection]
    >
    
    export type _T_Node_Resolver_Group = _i_core._T_Ordered_Dictionary<null, {
        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Group.D>
        readonly 'resolver': _T_Node_Resolver
    }>
    
    export type _T_Node_Resolver_List_Result = _T_Type_Reference
    
    export type _T_Benchmark = {
        readonly 'selection': _T_Guaranteed_Value_Selection
        readonly 'resulting dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
        readonly 'dense': boolean
    }
    
    export type _T_Type_Specification = {
        readonly 'schema': _T_Schema_Tree
        readonly 'schema path': _i_core._T_List<null, string>
        readonly 'type': string
    }
    
    export type _T_Node_Resolver = _i_core._T_State_Group<null, 
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'location': _i_core._T_State_Group<null, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
            >
            readonly 'signature': _i_core._T_Derived_Reference<null, _T_Signatures.D>
            readonly 'arguments': _pi.Optional_Value<{
                readonly 'values': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                    | readonly ['optional', _T_Optional_Value_Initialization]
                    | readonly ['required', _T_Guaranteed_Value_Selection]
                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                >>>
                readonly 'lookups': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                    | readonly ['empty stack', null]
                    | readonly ['not set', null]
                    | readonly ['selection', _T_Lookup_Selection]
                    | readonly ['stack', {
                        readonly 'stack': _T_Lookup_Selection
                        readonly 'element': _T_Lookup_Selection
                    }]
                >>>
            }>
            readonly 'constraints': _T_Property_Constraints
        }]
        | readonly ['dictionary', {
            readonly 'definition': _i_core._T_Derived_Reference<null, _T_Dictionary>
            readonly 'resolver': _T_Node_Resolver
            readonly 'benchmark': _pi.Optional_Value<_T_Benchmark>
        }]
        | readonly ['group', _T_Node_Resolver_Group]
        | readonly ['list', {
            readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.list>
            readonly 'resolver': _T_Node_Resolver
            readonly 'result': _pi.Optional_Value<_T_Node_Resolver_List_Result>
        }]
        | readonly ['nothing', null]
        | readonly ['number', null]
        | readonly ['optional', {
            readonly 'constraints': _T_Option_Constraints
            readonly 'resolver': _T_Node_Resolver
        }]
        | readonly ['reference', {
            readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['derived', {
                    readonly 'value': _T_Guaranteed_Value_Selection
                }]
                | readonly ['selected', {
                    readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                    readonly 'lookup': _T_Lookup_Selection
                    readonly 'constraints': _T_Property_Constraints
                }]
            >
        }]
        | readonly ['state group', {
            readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
            readonly 'states': _i_core._T_Dictionary<null, {
                readonly 'constraints': _T_Option_Constraints
                readonly 'resolver': _T_Node_Resolver
            }>
        }]
        | readonly ['text', null]
    >
    
    export type _T_Guaranteed_Value_Selection = {
        readonly 'start': _i_core._T_State_Group<null, 
            | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>]
            | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>]
            | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Option_Constraints.D>]
            | readonly ['list cursor', null]
            | readonly ['linked entry', null]
            | readonly ['constraint', _i_core._T_State_Group<null, 
                | readonly ['component', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                }]
                | readonly ['reference', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                }]
            >]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
            | readonly ['result', _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                    readonly 'result': _T_Type_Reference
                }]
                | readonly ['optional value', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                    readonly 'result': _T_Type_Reference
                }]
            >]
        >
        readonly 'tail': _T_Relative_Value_Selection
        readonly 'resulting node': _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export type _T_Possible_Value_Selection = _i_core._T_State_Group<null, 
        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
        | readonly ['result', _i_core._T_State_Group<null, 
            | readonly ['state group', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                readonly 'result': _T_Type_Reference
            }]
            | readonly ['optional value', {
                readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                readonly 'result': _T_Type_Reference
            }]
        >]
    >
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Text_Type = _T_Text_Type
    
    export type Number_Type = _T_Number_Type
    
    export type Globals = _T_Globals
    
    export type Presence = _T_Presence
    
    export type Type_Parameters = _T_Type_Parameters
    
    export type Type = _T_Type
    
    export type Types = _T_Types
    
    export type Dictionary = _T_Dictionary
    
    export type Signatures = _T_Signatures
    
    export type Resolvers = _T_Resolvers
    
    export type Resolve_Logic = _T_Resolve_Logic
    
    export type Group = _T_Group
    
    export type Schema = _T_Schema
    
    export type Schema_Tree = _T_Schema_Tree
    
    export type Schemas = _T_Schemas
    
    export type Imports = _T_Imports
    
    export type Type_Node = _T_Type_Node
    
    export type Type_Reference = _T_Type_Reference
    
    export type Type_Node_Reference = _T_Type_Node_Reference
    
    export type Signature_Parameters = _T_Signature_Parameters
    
    export type Signature = _T_Signature
    
    export type Relative_Value_Selection = _T_Relative_Value_Selection
    
    export type Lookup_Selection = _T_Lookup_Selection
    
    export type Constraint = _T_Constraint
    
    export type Option_Constraints = _T_Option_Constraints
    
    export type Property_Constraints = _T_Property_Constraints
    
    export type Reference_To_Property_Constraint = _T_Reference_To_Property_Constraint
    
    export type Property_Constraint = _T_Property_Constraint
    
    export type Optional_Value_Initialization = _T_Optional_Value_Initialization
    
    export type Node_Resolver_Group = _T_Node_Resolver_Group
    
    export type Node_Resolver_List_Result = _T_Node_Resolver_List_Result
    
    export type Benchmark = _T_Benchmark
    
    export type Type_Specification = _T_Type_Specification
    
    export type Node_Resolver = _T_Node_Resolver
    
    export type Guaranteed_Value_Selection = _T_Guaranteed_Value_Selection
    
    export type Possible_Value_Selection = _T_Possible_Value_Selection
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Text_Type {
        
        export namespace _type {
            
            export namespace SG {
                export type multi_line = null
                export type single_line = null
            }
            export type SG = 
                | readonly ['multi line', null]
                | readonly ['single line', null]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['multi line', null]
            | readonly ['single line', null]
        >
    }
    
    export namespace _T_Number_Type {
        
        export namespace precision {
            
            export namespace SG {
                
                export namespace approximation {
                    export type significant_digits = number
                }
                export type approximation = {
                    readonly 'significant digits': number
                }
                
                export namespace exact {
                    
                    export namespace decimal_separator_offset {
                        export type O = number
                    }
                    export type decimal_separator_offset = _pi.Optional_Value<number>
                    
                    export namespace _type {
                        
                        export namespace SG {
                            export type integer = null
                            export type natural = null
                            export type positive_natural = null
                        }
                        export type SG = 
                            | readonly ['integer', null]
                            | readonly ['natural', null]
                            | readonly ['positive natural', null]
                    }
                    export type _type = _i_core._T_State_Group<null, 
                        | readonly ['integer', null]
                        | readonly ['natural', null]
                        | readonly ['positive natural', null]
                    >
                }
                export type exact = {
                    readonly 'decimal separator offset': _pi.Optional_Value<number>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['integer', null]
                        | readonly ['natural', null]
                        | readonly ['positive natural', null]
                    >
                }
            }
            export type SG = 
                | readonly ['approximation', {
                    readonly 'significant digits': number
                }]
                | readonly ['exact', {
                    readonly 'decimal separator offset': _pi.Optional_Value<number>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['integer', null]
                        | readonly ['natural', null]
                        | readonly ['positive natural', null]
                    >
                }]
        }
        export type precision = _i_core._T_State_Group<null, 
            | readonly ['approximation', {
                readonly 'significant digits': number
            }]
            | readonly ['exact', {
                readonly 'decimal separator offset': _pi.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }]
        >
    }
    
    export namespace _T_Globals {
        
        export namespace complexity {
            
            export namespace SG {
                export type constrained = null
                export type unconstrained = null
            }
            export type SG = 
                | readonly ['constrained', null]
                | readonly ['unconstrained', null]
        }
        export type complexity = _i_core._T_State_Group<null, 
            | readonly ['constrained', null]
            | readonly ['unconstrained', null]
        >
        
        export namespace text_types {
            
            export namespace D {
            }
            export type D = _T_Text_Type
        }
        export type text_types = _i_core._T_Dictionary<null, _T_Text_Type>
        
        export namespace number_types {
            
            export namespace D {
            }
            export type D = _T_Number_Type
        }
        export type number_types = _i_core._T_Dictionary<null, _T_Number_Type>
    }
    
    export namespace _T_Presence {
        
        export namespace SG {
            export type optional = null
            export type required = null
        }
        export type SG = 
            | readonly ['optional', null]
            | readonly ['required', null]
    }
    
    export namespace _T_Type_Parameters {
        export type D = null
    }
    
    export namespace _T_Type {
        
        export namespace type_parameters {
        }
        export type type_parameters = _T_Type_Parameters
        
        export namespace node {
        }
        export type node = _T_Type_Node
    }
    
    export namespace _T_Types {
        
        export namespace D {
        }
        export type D = _T_Type
    }
    
    export namespace _T_Dictionary {
        
        export namespace node {
        }
        export type node = _T_Type_Node
        export type ordered = boolean
    }
    
    export namespace _T_Signatures {
        
        export namespace D {
        }
        export type D = _T_Signature
    }
    
    export namespace _T_Resolvers {
        
        export namespace D {
            
            export namespace signature {
                
                export namespace Type {
                }
                export type Type = _T_Signatures.D
            }
            export type signature = _i_core._T_Derived_Reference<null, _T_Signatures.D>
            
            export namespace type_resolver {
            }
            export type type_resolver = _T_Node_Resolver
        }
        export type D = {
            readonly 'signature': _i_core._T_Derived_Reference<null, _T_Signatures.D>
            readonly 'type resolver': _T_Node_Resolver
        }
    }
    
    export namespace _T_Resolve_Logic {
        
        export namespace signatures {
            
            export namespace types {
            }
            export type types = _T_Signatures
        }
        export type signatures = {
            readonly 'types': _T_Signatures
        }
        
        export namespace resolvers {
        }
        export type resolvers = _T_Resolvers
    }
    
    export namespace _T_Group {
        
        export namespace D {
            
            export namespace description {
                export type O = string
            }
            export type description = _pi.Optional_Value<string>
            
            export namespace node {
            }
            export type node = _T_Type_Node
        }
        export type D = {
            readonly 'description': _pi.Optional_Value<string>
            readonly 'node': _T_Type_Node
        }
    }
    
    export namespace _T_Schema {
        
        export namespace imports {
        }
        export type imports = _T_Imports
        
        export namespace globals {
        }
        export type globals = _T_Globals
        
        export namespace types {
        }
        export type types = _T_Types
        
        export namespace complexity {
            
            export namespace SG {
                
                export namespace constrained {
                }
                export type constrained = _T_Resolve_Logic
                export type unconstrained = null
            }
            export type SG = 
                | readonly ['constrained', _T_Resolve_Logic]
                | readonly ['unconstrained', null]
        }
        export type complexity = _i_core._T_State_Group<null, 
            | readonly ['constrained', _T_Resolve_Logic]
            | readonly ['unconstrained', null]
        >
    }
    
    export namespace _T_Schema_Tree {
        
        export namespace SG {
            
            export namespace schema {
            }
            export type schema = _T_Schema
            
            export namespace _set {
            }
            export type _set = _T_Schemas
        }
        export type SG = 
            | readonly ['schema', _T_Schema]
            | readonly ['set', _T_Schemas]
    }
    
    export namespace _T_Schemas {
        
        export namespace D {
        }
        export type D = _T_Schema_Tree
    }
    
    export namespace _T_Imports {
        
        export namespace D {
            
            export namespace schema_set_child {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Schemas.D
            }
            export type schema_set_child = _i_core._T_Reference_To_Stacked_Dictionary_Entry<null, _T_Schemas.D>
            
            export namespace schema {
                
                export namespace Type {
                }
                export type Type = _T_Schema
            }
            export type schema = _i_core._T_Derived_Reference<null, _T_Schema>
        }
        export type D = {
            readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<null, _T_Schemas.D>
            readonly 'schema': _i_core._T_Derived_Reference<null, _T_Schema>
        }
    }
    
    export namespace _T_Type_Node {
        
        export namespace SG {
            export type _boolean = null
            
            export namespace component {
                
                export namespace SG {
                    
                    export namespace external {
                        
                        export namespace _import {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Imports.D
                        }
                        export type _import = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        
                        export namespace _type {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Types.D
                        }
                        export type _type = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                    }
                    export type external = {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                    }
                    
                    export namespace internal {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Types.D
                    }
                    export type internal = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                    
                    export namespace internal_cyclic {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Types.D
                    }
                    export type internal_cyclic = _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>
                }
                export type SG = 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
                    | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
            }
            export type component = _i_core._T_State_Group<null, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
            >
            
            export namespace dictionary {
            }
            export type dictionary = _T_Dictionary
            
            export namespace group {
            }
            export type group = _T_Group
            
            export namespace list {
                
                export namespace node {
                }
                export type node = _T_Type_Node
            }
            export type list = {
                readonly 'node': _T_Type_Node
            }
            export type nothing = null
            
            export namespace _number {
                
                export namespace SG {
                    
                    export namespace global {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Globals.number_types.D
                    }
                    export type global = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.number_types.D>
                    
                    export namespace local {
                    }
                    export type local = _T_Number_Type
                }
                export type SG = 
                    | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.number_types.D>]
                    | readonly ['local', _T_Number_Type]
            }
            export type _number = _i_core._T_State_Group<null, 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.number_types.D>]
                | readonly ['local', _T_Number_Type]
            >
            
            export namespace optional {
            }
            export type optional = _T_Type_Node
            
            export namespace reference {
                
                export namespace referent {
                }
                export type referent = _T_Type_Node_Reference
                
                export namespace _type {
                    
                    export namespace SG {
                        export type derived = null
                        
                        export namespace selected {
                            
                            export namespace dictionary {
                                
                                export namespace Type {
                                }
                                export type Type = _T_Dictionary
                            }
                            export type dictionary = _i_core._T_Derived_Reference<null, _T_Dictionary>
                            
                            export namespace dependency {
                                
                                export namespace SG {
                                    export type acyclic = null
                                    export type cyclic = null
                                    export type stack = null
                                }
                                export type SG = 
                                    | readonly ['acyclic', null]
                                    | readonly ['cyclic', null]
                                    | readonly ['stack', null]
                            }
                            export type dependency = _i_core._T_State_Group<null, 
                                | readonly ['acyclic', null]
                                | readonly ['cyclic', null]
                                | readonly ['stack', null]
                            >
                        }
                        export type selected = {
                            readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                            readonly 'dependency': _i_core._T_State_Group<null, 
                                | readonly ['acyclic', null]
                                | readonly ['cyclic', null]
                                | readonly ['stack', null]
                            >
                        }
                    }
                    export type SG = 
                        | readonly ['derived', null]
                        | readonly ['selected', {
                            readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                            readonly 'dependency': _i_core._T_State_Group<null, 
                                | readonly ['acyclic', null]
                                | readonly ['cyclic', null]
                                | readonly ['stack', null]
                            >
                        }]
                }
                export type _type = _i_core._T_State_Group<null, 
                    | readonly ['derived', null]
                    | readonly ['selected', {
                        readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                        readonly 'dependency': _i_core._T_State_Group<null, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                    }]
                >
            }
            export type reference = {
                readonly 'referent': _T_Type_Node_Reference
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['derived', null]
                    | readonly ['selected', {
                        readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                        readonly 'dependency': _i_core._T_State_Group<null, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                    }]
                >
            }
            
            export namespace state_group {
                
                export namespace D {
                    
                    export namespace description {
                        export type O = string
                    }
                    export type description = _pi.Optional_Value<string>
                    
                    export namespace node {
                    }
                    export type node = _T_Type_Node
                }
                export type D = {
                    readonly 'description': _pi.Optional_Value<string>
                    readonly 'node': _T_Type_Node
                }
            }
            export type state_group = _i_core._T_Dictionary<null, {
                readonly 'description': _pi.Optional_Value<string>
                readonly 'node': _T_Type_Node
            }>
            
            export namespace text {
                
                export namespace SG {
                    
                    export namespace global {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Globals.text_types.D
                    }
                    export type global = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>
                    
                    export namespace local {
                    }
                    export type local = _T_Text_Type
                }
                export type SG = 
                    | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
                    | readonly ['local', _T_Text_Type]
            }
            export type text = _i_core._T_State_Group<null, 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
                | readonly ['local', _T_Text_Type]
            >
        }
        export type SG = 
            | readonly ['boolean', null]
            | readonly ['component', _i_core._T_State_Group<null, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
            >]
            | readonly ['dictionary', _T_Dictionary]
            | readonly ['group', _T_Group]
            | readonly ['list', {
                readonly 'node': _T_Type_Node
            }]
            | readonly ['nothing', null]
            | readonly ['number', _i_core._T_State_Group<null, 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.number_types.D>]
                | readonly ['local', _T_Number_Type]
            >]
            | readonly ['optional', _T_Type_Node]
            | readonly ['reference', {
                readonly 'referent': _T_Type_Node_Reference
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['derived', null]
                    | readonly ['selected', {
                        readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                        readonly 'dependency': _i_core._T_State_Group<null, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                    }]
                >
            }]
            | readonly ['state group', _i_core._T_Dictionary<null, {
                readonly 'description': _pi.Optional_Value<string>
                readonly 'node': _T_Type_Node
            }>]
            | readonly ['text', _i_core._T_State_Group<null, 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
                | readonly ['local', _T_Text_Type]
            >]
    }
    
    export namespace _T_Type_Reference {
        
        export namespace location {
            
            export namespace SG {
                
                export namespace internal {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Types.D
                }
                export type internal = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Imports.D
                    }
                    export type _import = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    
                    export namespace _type {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Types.D
                    }
                    export type _type = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }
                export type external = {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }
            }
            export type SG = 
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }]
        }
        export type location = _i_core._T_State_Group<null, 
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
            }]
        >
        
        export namespace resulting_node {
            
            export namespace Type {
            }
            export type Type = _T_Type_Node
        }
        export type resulting_node = _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export namespace _T_Type_Node_Reference {
        
        export namespace type_location {
        }
        export type type_location = _T_Type_Reference
        
        export namespace tail {
            
            export namespace L {
                
                export namespace SG {
                    export type dictionary = null
                    
                    export namespace group {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Group.D
                    }
                    export type group = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>
                    export type list = null
                    export type optional = null
                    
                    export namespace state_group {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Type_Node.SG.state_group.D
                    }
                    export type state_group = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }
                export type SG = 
                    | readonly ['dictionary', null]
                    | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
                    | readonly ['list', null]
                    | readonly ['optional', null]
                    | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>]
            }
            export type L = _i_core._T_State_Group<null, 
                | readonly ['dictionary', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>]
            >
        }
        export type tail = _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['dictionary', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
            | readonly ['list', null]
            | readonly ['optional', null]
            | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>]
        >>
        
        export namespace resulting_node {
            
            export namespace Type {
            }
            export type Type = _T_Type_Node
        }
        export type resulting_node = _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export namespace _T_Signature_Parameters {
        
        export namespace values {
            
            export namespace D {
                
                export namespace data_type {
                }
                export type data_type = _T_Type_Reference
                
                export namespace presence {
                }
                export type presence = _T_Presence
            }
            export type D = {
                readonly 'data type': _T_Type_Reference
                readonly 'presence': _T_Presence
            }
        }
        export type values = _i_core._T_Dictionary<null, {
            readonly 'data type': _T_Type_Reference
            readonly 'presence': _T_Presence
        }>
        
        export namespace lookups {
            
            export namespace D {
                
                export namespace referent {
                }
                export type referent = _T_Type_Reference
                
                export namespace dictionary {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Dictionary
                }
                export type dictionary = _i_core._T_Derived_Reference<null, _T_Dictionary>
                
                export namespace _type {
                    
                    export namespace SG {
                        export type cyclic = null
                        export type acyclic = null
                        export type stack = null
                    }
                    export type SG = 
                        | readonly ['cyclic', null]
                        | readonly ['acyclic', null]
                        | readonly ['stack', null]
                }
                export type _type = _i_core._T_State_Group<null, 
                    | readonly ['cyclic', null]
                    | readonly ['acyclic', null]
                    | readonly ['stack', null]
                >
                
                export namespace presence {
                }
                export type presence = _T_Presence
            }
            export type D = {
                readonly 'referent': _T_Type_Reference
                readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['cyclic', null]
                    | readonly ['acyclic', null]
                    | readonly ['stack', null]
                >
                readonly 'presence': _T_Presence
            }
        }
        export type lookups = _i_core._T_Dictionary<null, {
            readonly 'referent': _T_Type_Reference
            readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['cyclic', null]
                | readonly ['acyclic', null]
                | readonly ['stack', null]
            >
            readonly 'presence': _T_Presence
        }>
    }
    
    export namespace _T_Signature {
        
        export namespace _type {
            
            export namespace Type {
            }
            export type Type = _T_Type
        }
        export type _type = _i_core._T_Derived_Reference<null, _T_Type>
        
        export namespace parameters {
            
            export namespace SG {
                
                export namespace local {
                }
                export type local = _T_Signature_Parameters
                
                export namespace same_as {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Signatures.D
                }
                export type same_as = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
            }
            export type SG = 
                | readonly ['local', _T_Signature_Parameters]
                | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
        }
        export type parameters = _i_core._T_State_Group<null, 
            | readonly ['local', _T_Signature_Parameters]
            | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
        >
        
        export namespace resolved_parameters {
            
            export namespace Type {
            }
            export type Type = _T_Signature_Parameters
        }
        export type resolved_parameters = _i_core._T_Derived_Reference<null, _T_Signature_Parameters>
    }
    
    export namespace _T_Relative_Value_Selection {
        
        export namespace path {
            
            export namespace L {
                
                export namespace SG {
                    export type component = null
                    
                    export namespace group {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Group.D
                    }
                    export type group = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>
                    
                    export namespace reference {
                        
                        export namespace definition {
                            
                            export namespace Type {
                            }
                            export type Type = _T_Type_Node.SG.reference
                        }
                        export type definition = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                    }
                    export type reference = {
                        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                    }
                }
                export type SG = 
                    | readonly ['component', null]
                    | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
                    | readonly ['reference', {
                        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                    }]
            }
            export type L = _i_core._T_State_Group<null, 
                | readonly ['component', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
                | readonly ['reference', {
                    readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                }]
            >
        }
        export type path = _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['component', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
            | readonly ['reference', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
            }]
        >>
        
        export namespace resulting_node {
            
            export namespace Type {
            }
            export type Type = _T_Type_Node
        }
        export type resulting_node = _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export namespace _T_Lookup_Selection {
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace dictionary {
                    
                    export namespace selection {
                    }
                    export type selection = _T_Guaranteed_Value_Selection
                    
                    export namespace selected_dictionary {
                        
                        export namespace Type {
                        }
                        export type Type = _T_Dictionary
                    }
                    export type selected_dictionary = _i_core._T_Derived_Reference<null, _T_Dictionary>
                }
                export type dictionary = {
                    readonly 'selection': _T_Guaranteed_Value_Selection
                    readonly 'selected dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                }
                
                export namespace parameter {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Signature_Parameters.lookups.D
                }
                export type parameter = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.lookups.D>
                
                export namespace not_circular_dependent_siblings {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Dictionary
                }
                export type not_circular_dependent_siblings = _i_core._T_Derived_Reference<null, _T_Dictionary>
                
                export namespace possibly_circular_dependent_siblings {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Dictionary
                }
                export type possibly_circular_dependent_siblings = _i_core._T_Derived_Reference<null, _T_Dictionary>
            }
            export type SG = 
                | readonly ['dictionary', {
                    readonly 'selection': _T_Guaranteed_Value_Selection
                    readonly 'selected dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                }]
                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.lookups.D>]
                | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<null, _T_Dictionary>]
                | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<null, _T_Dictionary>]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['dictionary', {
                readonly 'selection': _T_Guaranteed_Value_Selection
                readonly 'selected dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
            }]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.lookups.D>]
            | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<null, _T_Dictionary>]
            | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<null, _T_Dictionary>]
        >
        
        export namespace resulting_dictionary {
            
            export namespace Type {
            }
            export type Type = _T_Dictionary
        }
        export type resulting_dictionary = _i_core._T_Derived_Reference<null, _T_Dictionary>
    }
    
    export namespace _T_Constraint {
        
        export namespace selection {
        }
        export type selection = _T_Relative_Value_Selection
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace state {
                    
                    export namespace selected_state_group {
                        
                        export namespace Type {
                        }
                        export type Type = _T_Type_Node.SG.state_group
                    }
                    export type selected_state_group = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    
                    export namespace state {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Type_Node.SG.state_group.D
                    }
                    export type state = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }
                export type state = {
                    readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }
                
                export namespace optional_value {
                    
                    export namespace selected_optional_value {
                        
                        export namespace Type {
                        }
                        export type Type = _T_Type_Node.SG.optional
                    }
                    export type selected_optional_value = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.optional>
                }
                export type optional_value = {
                    readonly 'selected optional value': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.optional>
                }
            }
            export type SG = 
                | readonly ['state', {
                    readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }]
                | readonly ['optional value', {
                    readonly 'selected optional value': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.optional>
                }]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
            }]
            | readonly ['optional value', {
                readonly 'selected optional value': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.optional>
            }]
        >
    }
    
    export namespace _T_Option_Constraints {
        
        export namespace D {
            
            export namespace SG {
                
                export namespace state {
                    
                    export namespace selection {
                    }
                    export type selection = _T_Guaranteed_Value_Selection
                    
                    export namespace selected_state_group {
                        
                        export namespace Type {
                        }
                        export type Type = _T_Type_Node.SG.state_group
                    }
                    export type selected_state_group = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    
                    export namespace state {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Type_Node.SG.state_group.D
                    }
                    export type state = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }
                export type state = {
                    readonly 'selection': _T_Guaranteed_Value_Selection
                    readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }
                
                export namespace assert_is_set {
                }
                export type assert_is_set = _T_Possible_Value_Selection
            }
            export type SG = 
                | readonly ['state', {
                    readonly 'selection': _T_Guaranteed_Value_Selection
                    readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }]
                | readonly ['assert is set', _T_Possible_Value_Selection]
        }
        export type D = _i_core._T_State_Group<null, 
            | readonly ['state', {
                readonly 'selection': _T_Guaranteed_Value_Selection
                readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
            }]
            | readonly ['assert is set', _T_Possible_Value_Selection]
        >
    }
    
    export namespace _T_Property_Constraints {
        
        export namespace D {
        }
        export type D = _T_Property_Constraint
    }
    
    export namespace _T_Reference_To_Property_Constraint {
        
        export namespace Dictionary_Entry {
        }
        export type Dictionary_Entry = _T_Property_Constraints.D
    }
    
    export namespace _T_Property_Constraint {
        
        export namespace start {
            
            export namespace SG {
                export type property = null
                
                export namespace sibling {
                }
                export type sibling = _T_Reference_To_Property_Constraint
            }
            export type SG = 
                | readonly ['property', null]
                | readonly ['sibling', _T_Reference_To_Property_Constraint]
        }
        export type start = _i_core._T_State_Group<null, 
            | readonly ['property', null]
            | readonly ['sibling', _T_Reference_To_Property_Constraint]
        >
        
        export namespace constraint {
        }
        export type constraint = _T_Constraint
    }
    
    export namespace _T_Optional_Value_Initialization {
        
        export namespace SG {
            export type not_set = null
            
            export namespace _set {
            }
            export type _set = _T_Guaranteed_Value_Selection
            
            export namespace selection {
            }
            export type selection = _T_Possible_Value_Selection
        }
        export type SG = 
            | readonly ['not set', null]
            | readonly ['set', _T_Guaranteed_Value_Selection]
            | readonly ['selection', _T_Possible_Value_Selection]
    }
    
    export namespace _T_Node_Resolver_Group {
        
        export namespace D {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type = _T_Group.D
            }
            export type definition = _i_core._T_Derived_Reference<null, _T_Group.D>
            
            export namespace resolver {
            }
            export type resolver = _T_Node_Resolver
        }
        export type D = {
            readonly 'definition': _i_core._T_Derived_Reference<null, _T_Group.D>
            readonly 'resolver': _T_Node_Resolver
        }
    }
    
    export namespace _T_Node_Resolver_List_Result {
    }
    
    export namespace _T_Benchmark {
        
        export namespace selection {
        }
        export type selection = _T_Guaranteed_Value_Selection
        
        export namespace resulting_dictionary {
            
            export namespace Type {
            }
            export type Type = _T_Dictionary
        }
        export type resulting_dictionary = _i_core._T_Derived_Reference<null, _T_Dictionary>
        export type dense = boolean
    }
    
    export namespace _T_Type_Specification {
        
        export namespace schema {
        }
        export type schema = _T_Schema_Tree
        
        export namespace schema_path {
            export type L = string
        }
        export type schema_path = _i_core._T_List<null, string>
        export type _type = string
    }
    
    export namespace _T_Node_Resolver {
        
        export namespace SG {
            export type _boolean = null
            
            export namespace component {
                
                export namespace location {
                    
                    export namespace SG {
                        
                        export namespace external {
                            
                            export namespace _import {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Imports.D
                            }
                            export type _import = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                            
                            export namespace _type {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Signatures.D
                            }
                            export type _type = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                        }
                        export type external = {
                            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                        }
                        
                        export namespace internal {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Signatures.D
                        }
                        export type internal = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                    }
                    export type SG = 
                        | readonly ['external', {
                            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                        }]
                        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
                }
                export type location = _i_core._T_State_Group<null, 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
                >
                
                export namespace signature {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Signatures.D
                }
                export type signature = _i_core._T_Derived_Reference<null, _T_Signatures.D>
                
                export namespace _arguments {
                    
                    export namespace O {
                        
                        export namespace values {
                            
                            export namespace O {
                                
                                export namespace D {
                                    
                                    export namespace SG {
                                        
                                        export namespace optional {
                                        }
                                        export type optional = _T_Optional_Value_Initialization
                                        
                                        export namespace required {
                                        }
                                        export type required = _T_Guaranteed_Value_Selection
                                        
                                        export namespace parameter {
                                            
                                            export namespace Dictionary_Entry {
                                            }
                                            export type Dictionary_Entry = _T_Signature_Parameters.values.D
                                        }
                                        export type parameter = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>
                                    }
                                    export type SG = 
                                        | readonly ['optional', _T_Optional_Value_Initialization]
                                        | readonly ['required', _T_Guaranteed_Value_Selection]
                                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                                }
                                export type D = _i_core._T_State_Group<null, 
                                    | readonly ['optional', _T_Optional_Value_Initialization]
                                    | readonly ['required', _T_Guaranteed_Value_Selection]
                                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                                >
                            }
                            export type O = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                                | readonly ['optional', _T_Optional_Value_Initialization]
                                | readonly ['required', _T_Guaranteed_Value_Selection]
                                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                            >>
                        }
                        export type values = _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                            | readonly ['optional', _T_Optional_Value_Initialization]
                            | readonly ['required', _T_Guaranteed_Value_Selection]
                            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                        >>>
                        
                        export namespace lookups {
                            
                            export namespace O {
                                
                                export namespace D {
                                    
                                    export namespace SG {
                                        export type empty_stack = null
                                        export type not_set = null
                                        
                                        export namespace selection {
                                        }
                                        export type selection = _T_Lookup_Selection
                                        
                                        export namespace stack {
                                            
                                            export namespace stack {
                                            }
                                            export type stack = _T_Lookup_Selection
                                            
                                            export namespace element {
                                            }
                                            export type element = _T_Lookup_Selection
                                        }
                                        export type stack = {
                                            readonly 'stack': _T_Lookup_Selection
                                            readonly 'element': _T_Lookup_Selection
                                        }
                                    }
                                    export type SG = 
                                        | readonly ['empty stack', null]
                                        | readonly ['not set', null]
                                        | readonly ['selection', _T_Lookup_Selection]
                                        | readonly ['stack', {
                                            readonly 'stack': _T_Lookup_Selection
                                            readonly 'element': _T_Lookup_Selection
                                        }]
                                }
                                export type D = _i_core._T_State_Group<null, 
                                    | readonly ['empty stack', null]
                                    | readonly ['not set', null]
                                    | readonly ['selection', _T_Lookup_Selection]
                                    | readonly ['stack', {
                                        readonly 'stack': _T_Lookup_Selection
                                        readonly 'element': _T_Lookup_Selection
                                    }]
                                >
                            }
                            export type O = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                                | readonly ['empty stack', null]
                                | readonly ['not set', null]
                                | readonly ['selection', _T_Lookup_Selection]
                                | readonly ['stack', {
                                    readonly 'stack': _T_Lookup_Selection
                                    readonly 'element': _T_Lookup_Selection
                                }]
                            >>
                        }
                        export type lookups = _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                            | readonly ['empty stack', null]
                            | readonly ['not set', null]
                            | readonly ['selection', _T_Lookup_Selection]
                            | readonly ['stack', {
                                readonly 'stack': _T_Lookup_Selection
                                readonly 'element': _T_Lookup_Selection
                            }]
                        >>>
                    }
                    export type O = {
                        readonly 'values': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                            | readonly ['optional', _T_Optional_Value_Initialization]
                            | readonly ['required', _T_Guaranteed_Value_Selection]
                            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                        >>>
                        readonly 'lookups': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                            | readonly ['empty stack', null]
                            | readonly ['not set', null]
                            | readonly ['selection', _T_Lookup_Selection]
                            | readonly ['stack', {
                                readonly 'stack': _T_Lookup_Selection
                                readonly 'element': _T_Lookup_Selection
                            }]
                        >>>
                    }
                }
                export type _arguments = _pi.Optional_Value<{
                    readonly 'values': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['optional', _T_Optional_Value_Initialization]
                        | readonly ['required', _T_Guaranteed_Value_Selection]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                    >>>
                    readonly 'lookups': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection]
                        | readonly ['stack', {
                            readonly 'stack': _T_Lookup_Selection
                            readonly 'element': _T_Lookup_Selection
                        }]
                    >>>
                }>
                
                export namespace constraints {
                }
                export type constraints = _T_Property_Constraints
            }
            export type component = {
                readonly 'location': _i_core._T_State_Group<null, 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
                >
                readonly 'signature': _i_core._T_Derived_Reference<null, _T_Signatures.D>
                readonly 'arguments': _pi.Optional_Value<{
                    readonly 'values': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['optional', _T_Optional_Value_Initialization]
                        | readonly ['required', _T_Guaranteed_Value_Selection]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                    >>>
                    readonly 'lookups': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection]
                        | readonly ['stack', {
                            readonly 'stack': _T_Lookup_Selection
                            readonly 'element': _T_Lookup_Selection
                        }]
                    >>>
                }>
                readonly 'constraints': _T_Property_Constraints
            }
            
            export namespace dictionary {
                
                export namespace definition {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Dictionary
                }
                export type definition = _i_core._T_Derived_Reference<null, _T_Dictionary>
                
                export namespace resolver {
                }
                export type resolver = _T_Node_Resolver
                
                export namespace benchmark {
                    
                    export namespace O {
                    }
                    export type O = _T_Benchmark
                }
                export type benchmark = _pi.Optional_Value<_T_Benchmark>
            }
            export type dictionary = {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Dictionary>
                readonly 'resolver': _T_Node_Resolver
                readonly 'benchmark': _pi.Optional_Value<_T_Benchmark>
            }
            
            export namespace group {
            }
            export type group = _T_Node_Resolver_Group
            
            export namespace list {
                
                export namespace definition {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Type_Node.SG.list
                }
                export type definition = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.list>
                
                export namespace resolver {
                }
                export type resolver = _T_Node_Resolver
                
                export namespace result {
                    
                    export namespace O {
                    }
                    export type O = _T_Node_Resolver_List_Result
                }
                export type result = _pi.Optional_Value<_T_Node_Resolver_List_Result>
            }
            export type list = {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.list>
                readonly 'resolver': _T_Node_Resolver
                readonly 'result': _pi.Optional_Value<_T_Node_Resolver_List_Result>
            }
            export type nothing = null
            export type _number = null
            
            export namespace optional {
                
                export namespace constraints {
                }
                export type constraints = _T_Option_Constraints
                
                export namespace resolver {
                }
                export type resolver = _T_Node_Resolver
            }
            export type optional = {
                readonly 'constraints': _T_Option_Constraints
                readonly 'resolver': _T_Node_Resolver
            }
            
            export namespace reference {
                
                export namespace definition {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Type_Node.SG.reference
                }
                export type definition = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                
                export namespace _type {
                    
                    export namespace SG {
                        
                        export namespace derived {
                            
                            export namespace value {
                            }
                            export type value = _T_Guaranteed_Value_Selection
                        }
                        export type derived = {
                            readonly 'value': _T_Guaranteed_Value_Selection
                        }
                        
                        export namespace selected {
                            
                            export namespace definition {
                                
                                export namespace Type {
                                }
                                export type Type = _T_Type_Node.SG.reference._type.SG.selected
                            }
                            export type definition = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                            
                            export namespace lookup {
                            }
                            export type lookup = _T_Lookup_Selection
                            
                            export namespace constraints {
                            }
                            export type constraints = _T_Property_Constraints
                        }
                        export type selected = {
                            readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                            readonly 'lookup': _T_Lookup_Selection
                            readonly 'constraints': _T_Property_Constraints
                        }
                    }
                    export type SG = 
                        | readonly ['derived', {
                            readonly 'value': _T_Guaranteed_Value_Selection
                        }]
                        | readonly ['selected', {
                            readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                            readonly 'lookup': _T_Lookup_Selection
                            readonly 'constraints': _T_Property_Constraints
                        }]
                }
                export type _type = _i_core._T_State_Group<null, 
                    | readonly ['derived', {
                        readonly 'value': _T_Guaranteed_Value_Selection
                    }]
                    | readonly ['selected', {
                        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                        readonly 'lookup': _T_Lookup_Selection
                        readonly 'constraints': _T_Property_Constraints
                    }]
                >
            }
            export type reference = {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['derived', {
                        readonly 'value': _T_Guaranteed_Value_Selection
                    }]
                    | readonly ['selected', {
                        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                        readonly 'lookup': _T_Lookup_Selection
                        readonly 'constraints': _T_Property_Constraints
                    }]
                >
            }
            
            export namespace state_group {
                
                export namespace definition {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Type_Node.SG.state_group
                }
                export type definition = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                
                export namespace states {
                    
                    export namespace D {
                        
                        export namespace constraints {
                        }
                        export type constraints = _T_Option_Constraints
                        
                        export namespace resolver {
                        }
                        export type resolver = _T_Node_Resolver
                    }
                    export type D = {
                        readonly 'constraints': _T_Option_Constraints
                        readonly 'resolver': _T_Node_Resolver
                    }
                }
                export type states = _i_core._T_Dictionary<null, {
                    readonly 'constraints': _T_Option_Constraints
                    readonly 'resolver': _T_Node_Resolver
                }>
            }
            export type state_group = {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'constraints': _T_Option_Constraints
                    readonly 'resolver': _T_Node_Resolver
                }>
            }
            export type text = null
        }
        export type SG = 
            | readonly ['boolean', null]
            | readonly ['component', {
                readonly 'location': _i_core._T_State_Group<null, 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
                >
                readonly 'signature': _i_core._T_Derived_Reference<null, _T_Signatures.D>
                readonly 'arguments': _pi.Optional_Value<{
                    readonly 'values': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['optional', _T_Optional_Value_Initialization]
                        | readonly ['required', _T_Guaranteed_Value_Selection]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                    >>>
                    readonly 'lookups': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection]
                        | readonly ['stack', {
                            readonly 'stack': _T_Lookup_Selection
                            readonly 'element': _T_Lookup_Selection
                        }]
                    >>>
                }>
                readonly 'constraints': _T_Property_Constraints
            }]
            | readonly ['dictionary', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Dictionary>
                readonly 'resolver': _T_Node_Resolver
                readonly 'benchmark': _pi.Optional_Value<_T_Benchmark>
            }]
            | readonly ['group', _T_Node_Resolver_Group]
            | readonly ['list', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.list>
                readonly 'resolver': _T_Node_Resolver
                readonly 'result': _pi.Optional_Value<_T_Node_Resolver_List_Result>
            }]
            | readonly ['nothing', null]
            | readonly ['number', null]
            | readonly ['optional', {
                readonly 'constraints': _T_Option_Constraints
                readonly 'resolver': _T_Node_Resolver
            }]
            | readonly ['reference', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['derived', {
                        readonly 'value': _T_Guaranteed_Value_Selection
                    }]
                    | readonly ['selected', {
                        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                        readonly 'lookup': _T_Lookup_Selection
                        readonly 'constraints': _T_Property_Constraints
                    }]
                >
            }]
            | readonly ['state group', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'constraints': _T_Option_Constraints
                    readonly 'resolver': _T_Node_Resolver
                }>
            }]
            | readonly ['text', null]
    }
    
    export namespace _T_Guaranteed_Value_Selection {
        
        export namespace start {
            
            export namespace SG {
                
                export namespace sibling {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Node_Resolver_Group.D
                }
                export type sibling = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                
                export namespace parent_sibling {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Node_Resolver_Group.D
                }
                export type parent_sibling = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                
                export namespace option_constraint {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Option_Constraints.D
                }
                export type option_constraint = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Option_Constraints.D>
                export type list_cursor = null
                export type linked_entry = null
                
                export namespace constraint {
                    
                    export namespace SG {
                        
                        export namespace component {
                            
                            export namespace property {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Node_Resolver_Group.D
                            }
                            export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            
                            export namespace constraint {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Property_Constraints.D
                            }
                            export type constraint = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }
                        export type component = {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }
                        
                        export namespace reference {
                            
                            export namespace property {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Node_Resolver_Group.D
                            }
                            export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            
                            export namespace constraint {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Property_Constraints.D
                            }
                            export type constraint = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }
                        export type reference = {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }
                    }
                    export type SG = 
                        | readonly ['component', {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }]
                        | readonly ['reference', {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }]
                }
                export type constraint = _i_core._T_State_Group<null, 
                    | readonly ['component', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                    }]
                    | readonly ['reference', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                    }]
                >
                
                export namespace parameter {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Signature_Parameters.values.D
                }
                export type parameter = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>
                
                export namespace result {
                    
                    export namespace SG {
                        
                        export namespace list {
                            
                            export namespace property {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Node_Resolver_Group.D
                            }
                            export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            
                            export namespace list_result {
                                
                                export namespace Type {
                                }
                                export type Type = _T_Node_Resolver.SG.list.result.O
                            }
                            export type list_result = _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                        }
                        export type list = {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                        }
                        
                        export namespace state_group {
                            
                            export namespace property {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Node_Resolver_Group.D
                            }
                            export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            
                            export namespace state_group {
                                
                                export namespace Type {
                                }
                                export type Type = _T_Node_Resolver.SG.state_group
                            }
                            export type state_group = _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                            
                            export namespace result {
                            }
                            export type result = _T_Type_Reference
                        }
                        export type state_group = {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                            readonly 'result': _T_Type_Reference
                        }
                        
                        export namespace optional_value {
                            
                            export namespace property {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Node_Resolver_Group.D
                            }
                            export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            
                            export namespace optional_value {
                                
                                export namespace Type {
                                }
                                export type Type = _T_Node_Resolver.SG.optional
                            }
                            export type optional_value = _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                            
                            export namespace result {
                            }
                            export type result = _T_Type_Reference
                        }
                        export type optional_value = {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                            readonly 'result': _T_Type_Reference
                        }
                    }
                    export type SG = 
                        | readonly ['list', {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                        }]
                        | readonly ['state group', {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                            readonly 'result': _T_Type_Reference
                        }]
                        | readonly ['optional value', {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                            readonly 'result': _T_Type_Reference
                        }]
                }
                export type result = _i_core._T_State_Group<null, 
                    | readonly ['list', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                    }]
                    | readonly ['state group', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                        readonly 'result': _T_Type_Reference
                    }]
                    | readonly ['optional value', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                        readonly 'result': _T_Type_Reference
                    }]
                >
            }
            export type SG = 
                | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>]
                | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>]
                | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Option_Constraints.D>]
                | readonly ['list cursor', null]
                | readonly ['linked entry', null]
                | readonly ['constraint', _i_core._T_State_Group<null, 
                    | readonly ['component', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                    }]
                    | readonly ['reference', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                    }]
                >]
                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                | readonly ['result', _i_core._T_State_Group<null, 
                    | readonly ['list', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                    }]
                    | readonly ['state group', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                        readonly 'result': _T_Type_Reference
                    }]
                    | readonly ['optional value', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                        readonly 'result': _T_Type_Reference
                    }]
                >]
        }
        export type start = _i_core._T_State_Group<null, 
            | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>]
            | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>]
            | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Option_Constraints.D>]
            | readonly ['list cursor', null]
            | readonly ['linked entry', null]
            | readonly ['constraint', _i_core._T_State_Group<null, 
                | readonly ['component', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                }]
                | readonly ['reference', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                }]
            >]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
            | readonly ['result', _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                    readonly 'result': _T_Type_Reference
                }]
                | readonly ['optional value', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                    readonly 'result': _T_Type_Reference
                }]
            >]
        >
        
        export namespace tail {
        }
        export type tail = _T_Relative_Value_Selection
        
        export namespace resulting_node {
            
            export namespace Type {
            }
            export type Type = _T_Type_Node
        }
        export type resulting_node = _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export namespace _T_Possible_Value_Selection {
        
        export namespace SG {
            
            export namespace parameter {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Signature_Parameters.values.D
            }
            export type parameter = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>
            
            export namespace result {
                
                export namespace SG {
                    
                    export namespace state_group {
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Node_Resolver_Group.D
                        }
                        export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        
                        export namespace state_group {
                            
                            export namespace Type {
                            }
                            export type Type = _T_Node_Resolver.SG.state_group
                        }
                        export type state_group = _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                        
                        export namespace result {
                        }
                        export type result = _T_Type_Reference
                    }
                    export type state_group = {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                        readonly 'result': _T_Type_Reference
                    }
                    
                    export namespace optional_value {
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Node_Resolver_Group.D
                        }
                        export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        
                        export namespace optional_value {
                            
                            export namespace Type {
                            }
                            export type Type = _T_Node_Resolver.SG.optional
                        }
                        export type optional_value = _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                        
                        export namespace result {
                        }
                        export type result = _T_Type_Reference
                    }
                    export type optional_value = {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                        readonly 'result': _T_Type_Reference
                    }
                }
                export type SG = 
                    | readonly ['state group', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                        readonly 'result': _T_Type_Reference
                    }]
                    | readonly ['optional value', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                        readonly 'result': _T_Type_Reference
                    }]
            }
            export type result = _i_core._T_State_Group<null, 
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                    readonly 'result': _T_Type_Reference
                }]
                | readonly ['optional value', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                    readonly 'result': _T_Type_Reference
                }]
            >
        }
        export type SG = 
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
            | readonly ['result', _i_core._T_State_Group<null, 
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                    readonly 'result': _T_Type_Reference
                }]
                | readonly ['optional value', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                    readonly 'result': _T_Type_Reference
                }]
            >]
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Text_Type {
        
        export namespace _type {
            
            export namespace SG {
                export type multi_line = null
                export type single_line = null
            }
            export type SG = 
                | readonly ['multi line', null]
                | readonly ['single line', null]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['multi line', null]
            | readonly ['single line', null]
        >
    }
    
    export namespace Number_Type {
        
        export namespace precision {
            
            export namespace SG {
                
                export namespace approximation {
                    export type significant_digits = number
                }
                export type approximation = {
                    readonly 'significant digits': number
                }
                
                export namespace exact {
                    
                    export namespace decimal_separator_offset {
                        export type O = number
                    }
                    export type decimal_separator_offset = _pi.Optional_Value<number>
                    
                    export namespace _type {
                        
                        export namespace SG {
                            export type integer = null
                            export type natural = null
                            export type positive_natural = null
                        }
                        export type SG = 
                            | readonly ['integer', null]
                            | readonly ['natural', null]
                            | readonly ['positive natural', null]
                    }
                    export type _type = _i_core._T_State_Group<null, 
                        | readonly ['integer', null]
                        | readonly ['natural', null]
                        | readonly ['positive natural', null]
                    >
                }
                export type exact = {
                    readonly 'decimal separator offset': _pi.Optional_Value<number>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['integer', null]
                        | readonly ['natural', null]
                        | readonly ['positive natural', null]
                    >
                }
            }
            export type SG = 
                | readonly ['approximation', {
                    readonly 'significant digits': number
                }]
                | readonly ['exact', {
                    readonly 'decimal separator offset': _pi.Optional_Value<number>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['integer', null]
                        | readonly ['natural', null]
                        | readonly ['positive natural', null]
                    >
                }]
        }
        export type precision = _i_core._T_State_Group<null, 
            | readonly ['approximation', {
                readonly 'significant digits': number
            }]
            | readonly ['exact', {
                readonly 'decimal separator offset': _pi.Optional_Value<number>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['integer', null]
                    | readonly ['natural', null]
                    | readonly ['positive natural', null]
                >
            }]
        >
    }
    
    export namespace Globals {
        
        export namespace complexity {
            
            export namespace SG {
                export type constrained = null
                export type unconstrained = null
            }
            export type SG = 
                | readonly ['constrained', null]
                | readonly ['unconstrained', null]
        }
        export type complexity = _i_core._T_State_Group<null, 
            | readonly ['constrained', null]
            | readonly ['unconstrained', null]
        >
        
        export namespace text_types {
            
            export namespace D {
            }
            export type D = _T_Text_Type
        }
        export type text_types = _i_core._T_Dictionary<null, _T_Text_Type>
        
        export namespace number_types {
            
            export namespace D {
            }
            export type D = _T_Number_Type
        }
        export type number_types = _i_core._T_Dictionary<null, _T_Number_Type>
    }
    
    export namespace Presence {
        
        export namespace SG {
            export type optional = null
            export type required = null
        }
        export type SG = 
            | readonly ['optional', null]
            | readonly ['required', null]
    }
    
    export namespace Type_Parameters {
        export type D = null
    }
    
    export namespace Type {
        
        export namespace type_parameters {
        }
        export type type_parameters = _T_Type_Parameters
        
        export namespace node {
        }
        export type node = _T_Type_Node
    }
    
    export namespace Types {
        
        export namespace D {
        }
        export type D = _T_Type
    }
    
    export namespace Dictionary {
        
        export namespace node {
        }
        export type node = _T_Type_Node
        export type ordered = boolean
    }
    
    export namespace Signatures {
        
        export namespace D {
        }
        export type D = _T_Signature
    }
    
    export namespace Resolvers {
        
        export namespace D {
            
            export namespace signature {
                
                export namespace Type {
                }
                export type Type = _T_Signatures.D
            }
            export type signature = _i_core._T_Derived_Reference<null, _T_Signatures.D>
            
            export namespace type_resolver {
            }
            export type type_resolver = _T_Node_Resolver
        }
        export type D = {
            readonly 'signature': _i_core._T_Derived_Reference<null, _T_Signatures.D>
            readonly 'type resolver': _T_Node_Resolver
        }
    }
    
    export namespace Resolve_Logic {
        
        export namespace signatures {
            
            export namespace types {
            }
            export type types = _T_Signatures
        }
        export type signatures = {
            readonly 'types': _T_Signatures
        }
        
        export namespace resolvers {
        }
        export type resolvers = _T_Resolvers
    }
    
    export namespace Group {
        
        export namespace D {
            
            export namespace description {
                export type O = string
            }
            export type description = _pi.Optional_Value<string>
            
            export namespace node {
            }
            export type node = _T_Type_Node
        }
        export type D = {
            readonly 'description': _pi.Optional_Value<string>
            readonly 'node': _T_Type_Node
        }
    }
    
    export namespace Schema {
        
        export namespace imports {
        }
        export type imports = _T_Imports
        
        export namespace globals {
        }
        export type globals = _T_Globals
        
        export namespace types {
        }
        export type types = _T_Types
        
        export namespace complexity {
            
            export namespace SG {
                
                export namespace constrained {
                }
                export type constrained = _T_Resolve_Logic
                export type unconstrained = null
            }
            export type SG = 
                | readonly ['constrained', _T_Resolve_Logic]
                | readonly ['unconstrained', null]
        }
        export type complexity = _i_core._T_State_Group<null, 
            | readonly ['constrained', _T_Resolve_Logic]
            | readonly ['unconstrained', null]
        >
    }
    
    export namespace Schema_Tree {
        
        export namespace SG {
            
            export namespace schema {
            }
            export type schema = _T_Schema
            
            export namespace _set {
            }
            export type _set = _T_Schemas
        }
        export type SG = 
            | readonly ['schema', _T_Schema]
            | readonly ['set', _T_Schemas]
    }
    
    export namespace Schemas {
        
        export namespace D {
        }
        export type D = _T_Schema_Tree
    }
    
    export namespace Imports {
        
        export namespace D {
            
            export namespace schema_set_child {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Schemas.D
            }
            export type schema_set_child = _i_core._T_Reference_To_Stacked_Dictionary_Entry<null, _T_Schemas.D>
            
            export namespace schema {
                
                export namespace Type {
                }
                export type Type = _T_Schema
            }
            export type schema = _i_core._T_Derived_Reference<null, _T_Schema>
        }
        export type D = {
            readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<null, _T_Schemas.D>
            readonly 'schema': _i_core._T_Derived_Reference<null, _T_Schema>
        }
    }
    
    export namespace Type_Node {
        
        export namespace SG {
            export type _boolean = null
            
            export namespace component {
                
                export namespace SG {
                    
                    export namespace external {
                        
                        export namespace _import {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Imports.D
                        }
                        export type _import = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        
                        export namespace _type {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Types.D
                        }
                        export type _type = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                    }
                    export type external = {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                    }
                    
                    export namespace internal {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Types.D
                    }
                    export type internal = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                    
                    export namespace internal_cyclic {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Types.D
                    }
                    export type internal_cyclic = _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>
                }
                export type SG = 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
                    | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
            }
            export type component = _i_core._T_State_Group<null, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
            >
            
            export namespace dictionary {
            }
            export type dictionary = _T_Dictionary
            
            export namespace group {
            }
            export type group = _T_Group
            
            export namespace list {
                
                export namespace node {
                }
                export type node = _T_Type_Node
            }
            export type list = {
                readonly 'node': _T_Type_Node
            }
            export type nothing = null
            
            export namespace _number {
                
                export namespace SG {
                    
                    export namespace global {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Globals.number_types.D
                    }
                    export type global = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.number_types.D>
                    
                    export namespace local {
                    }
                    export type local = _T_Number_Type
                }
                export type SG = 
                    | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.number_types.D>]
                    | readonly ['local', _T_Number_Type]
            }
            export type _number = _i_core._T_State_Group<null, 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.number_types.D>]
                | readonly ['local', _T_Number_Type]
            >
            
            export namespace optional {
            }
            export type optional = _T_Type_Node
            
            export namespace reference {
                
                export namespace referent {
                }
                export type referent = _T_Type_Node_Reference
                
                export namespace _type {
                    
                    export namespace SG {
                        export type derived = null
                        
                        export namespace selected {
                            
                            export namespace dictionary {
                                
                                export namespace Type {
                                }
                                export type Type = _T_Dictionary
                            }
                            export type dictionary = _i_core._T_Derived_Reference<null, _T_Dictionary>
                            
                            export namespace dependency {
                                
                                export namespace SG {
                                    export type acyclic = null
                                    export type cyclic = null
                                    export type stack = null
                                }
                                export type SG = 
                                    | readonly ['acyclic', null]
                                    | readonly ['cyclic', null]
                                    | readonly ['stack', null]
                            }
                            export type dependency = _i_core._T_State_Group<null, 
                                | readonly ['acyclic', null]
                                | readonly ['cyclic', null]
                                | readonly ['stack', null]
                            >
                        }
                        export type selected = {
                            readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                            readonly 'dependency': _i_core._T_State_Group<null, 
                                | readonly ['acyclic', null]
                                | readonly ['cyclic', null]
                                | readonly ['stack', null]
                            >
                        }
                    }
                    export type SG = 
                        | readonly ['derived', null]
                        | readonly ['selected', {
                            readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                            readonly 'dependency': _i_core._T_State_Group<null, 
                                | readonly ['acyclic', null]
                                | readonly ['cyclic', null]
                                | readonly ['stack', null]
                            >
                        }]
                }
                export type _type = _i_core._T_State_Group<null, 
                    | readonly ['derived', null]
                    | readonly ['selected', {
                        readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                        readonly 'dependency': _i_core._T_State_Group<null, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                    }]
                >
            }
            export type reference = {
                readonly 'referent': _T_Type_Node_Reference
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['derived', null]
                    | readonly ['selected', {
                        readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                        readonly 'dependency': _i_core._T_State_Group<null, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                    }]
                >
            }
            
            export namespace state_group {
                
                export namespace D {
                    
                    export namespace description {
                        export type O = string
                    }
                    export type description = _pi.Optional_Value<string>
                    
                    export namespace node {
                    }
                    export type node = _T_Type_Node
                }
                export type D = {
                    readonly 'description': _pi.Optional_Value<string>
                    readonly 'node': _T_Type_Node
                }
            }
            export type state_group = _i_core._T_Dictionary<null, {
                readonly 'description': _pi.Optional_Value<string>
                readonly 'node': _T_Type_Node
            }>
            
            export namespace text {
                
                export namespace SG {
                    
                    export namespace global {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Globals.text_types.D
                    }
                    export type global = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>
                    
                    export namespace local {
                    }
                    export type local = _T_Text_Type
                }
                export type SG = 
                    | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
                    | readonly ['local', _T_Text_Type]
            }
            export type text = _i_core._T_State_Group<null, 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
                | readonly ['local', _T_Text_Type]
            >
        }
        export type SG = 
            | readonly ['boolean', null]
            | readonly ['component', _i_core._T_State_Group<null, 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
            >]
            | readonly ['dictionary', _T_Dictionary]
            | readonly ['group', _T_Group]
            | readonly ['list', {
                readonly 'node': _T_Type_Node
            }]
            | readonly ['nothing', null]
            | readonly ['number', _i_core._T_State_Group<null, 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.number_types.D>]
                | readonly ['local', _T_Number_Type]
            >]
            | readonly ['optional', _T_Type_Node]
            | readonly ['reference', {
                readonly 'referent': _T_Type_Node_Reference
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['derived', null]
                    | readonly ['selected', {
                        readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                        readonly 'dependency': _i_core._T_State_Group<null, 
                            | readonly ['acyclic', null]
                            | readonly ['cyclic', null]
                            | readonly ['stack', null]
                        >
                    }]
                >
            }]
            | readonly ['state group', _i_core._T_Dictionary<null, {
                readonly 'description': _pi.Optional_Value<string>
                readonly 'node': _T_Type_Node
            }>]
            | readonly ['text', _i_core._T_State_Group<null, 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
                | readonly ['local', _T_Text_Type]
            >]
    }
    
    export namespace Type_Reference {
        
        export namespace location {
            
            export namespace SG {
                
                export namespace internal {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Types.D
                }
                export type internal = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Imports.D
                    }
                    export type _import = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    
                    export namespace _type {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Types.D
                    }
                    export type _type = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }
                export type external = {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }
            }
            export type SG = 
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }]
        }
        export type location = _i_core._T_State_Group<null, 
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
            }]
        >
        
        export namespace resulting_node {
            
            export namespace Type {
            }
            export type Type = _T_Type_Node
        }
        export type resulting_node = _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export namespace Type_Node_Reference {
        
        export namespace type_location {
        }
        export type type_location = _T_Type_Reference
        
        export namespace tail {
            
            export namespace L {
                
                export namespace SG {
                    export type dictionary = null
                    
                    export namespace group {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Group.D
                    }
                    export type group = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>
                    export type list = null
                    export type optional = null
                    
                    export namespace state_group {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Type_Node.SG.state_group.D
                    }
                    export type state_group = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }
                export type SG = 
                    | readonly ['dictionary', null]
                    | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
                    | readonly ['list', null]
                    | readonly ['optional', null]
                    | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>]
            }
            export type L = _i_core._T_State_Group<null, 
                | readonly ['dictionary', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>]
            >
        }
        export type tail = _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['dictionary', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
            | readonly ['list', null]
            | readonly ['optional', null]
            | readonly ['state group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>]
        >>
        
        export namespace resulting_node {
            
            export namespace Type {
            }
            export type Type = _T_Type_Node
        }
        export type resulting_node = _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export namespace Signature_Parameters {
        
        export namespace values {
            
            export namespace D {
                
                export namespace data_type {
                }
                export type data_type = _T_Type_Reference
                
                export namespace presence {
                }
                export type presence = _T_Presence
            }
            export type D = {
                readonly 'data type': _T_Type_Reference
                readonly 'presence': _T_Presence
            }
        }
        export type values = _i_core._T_Dictionary<null, {
            readonly 'data type': _T_Type_Reference
            readonly 'presence': _T_Presence
        }>
        
        export namespace lookups {
            
            export namespace D {
                
                export namespace referent {
                }
                export type referent = _T_Type_Reference
                
                export namespace dictionary {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Dictionary
                }
                export type dictionary = _i_core._T_Derived_Reference<null, _T_Dictionary>
                
                export namespace _type {
                    
                    export namespace SG {
                        export type cyclic = null
                        export type acyclic = null
                        export type stack = null
                    }
                    export type SG = 
                        | readonly ['cyclic', null]
                        | readonly ['acyclic', null]
                        | readonly ['stack', null]
                }
                export type _type = _i_core._T_State_Group<null, 
                    | readonly ['cyclic', null]
                    | readonly ['acyclic', null]
                    | readonly ['stack', null]
                >
                
                export namespace presence {
                }
                export type presence = _T_Presence
            }
            export type D = {
                readonly 'referent': _T_Type_Reference
                readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['cyclic', null]
                    | readonly ['acyclic', null]
                    | readonly ['stack', null]
                >
                readonly 'presence': _T_Presence
            }
        }
        export type lookups = _i_core._T_Dictionary<null, {
            readonly 'referent': _T_Type_Reference
            readonly 'dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['cyclic', null]
                | readonly ['acyclic', null]
                | readonly ['stack', null]
            >
            readonly 'presence': _T_Presence
        }>
    }
    
    export namespace Signature {
        
        export namespace _type {
            
            export namespace Type {
            }
            export type Type = _T_Type
        }
        export type _type = _i_core._T_Derived_Reference<null, _T_Type>
        
        export namespace parameters {
            
            export namespace SG {
                
                export namespace local {
                }
                export type local = _T_Signature_Parameters
                
                export namespace same_as {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Signatures.D
                }
                export type same_as = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
            }
            export type SG = 
                | readonly ['local', _T_Signature_Parameters]
                | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
        }
        export type parameters = _i_core._T_State_Group<null, 
            | readonly ['local', _T_Signature_Parameters]
            | readonly ['same as', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
        >
        
        export namespace resolved_parameters {
            
            export namespace Type {
            }
            export type Type = _T_Signature_Parameters
        }
        export type resolved_parameters = _i_core._T_Derived_Reference<null, _T_Signature_Parameters>
    }
    
    export namespace Relative_Value_Selection {
        
        export namespace path {
            
            export namespace L {
                
                export namespace SG {
                    export type component = null
                    
                    export namespace group {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Group.D
                    }
                    export type group = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>
                    
                    export namespace reference {
                        
                        export namespace definition {
                            
                            export namespace Type {
                            }
                            export type Type = _T_Type_Node.SG.reference
                        }
                        export type definition = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                    }
                    export type reference = {
                        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                    }
                }
                export type SG = 
                    | readonly ['component', null]
                    | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
                    | readonly ['reference', {
                        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                    }]
            }
            export type L = _i_core._T_State_Group<null, 
                | readonly ['component', null]
                | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
                | readonly ['reference', {
                    readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                }]
            >
        }
        export type path = _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['component', null]
            | readonly ['group', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Group.D>]
            | readonly ['reference', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
            }]
        >>
        
        export namespace resulting_node {
            
            export namespace Type {
            }
            export type Type = _T_Type_Node
        }
        export type resulting_node = _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export namespace Lookup_Selection {
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace dictionary {
                    
                    export namespace selection {
                    }
                    export type selection = _T_Guaranteed_Value_Selection
                    
                    export namespace selected_dictionary {
                        
                        export namespace Type {
                        }
                        export type Type = _T_Dictionary
                    }
                    export type selected_dictionary = _i_core._T_Derived_Reference<null, _T_Dictionary>
                }
                export type dictionary = {
                    readonly 'selection': _T_Guaranteed_Value_Selection
                    readonly 'selected dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                }
                
                export namespace parameter {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Signature_Parameters.lookups.D
                }
                export type parameter = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.lookups.D>
                
                export namespace not_circular_dependent_siblings {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Dictionary
                }
                export type not_circular_dependent_siblings = _i_core._T_Derived_Reference<null, _T_Dictionary>
                
                export namespace possibly_circular_dependent_siblings {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Dictionary
                }
                export type possibly_circular_dependent_siblings = _i_core._T_Derived_Reference<null, _T_Dictionary>
            }
            export type SG = 
                | readonly ['dictionary', {
                    readonly 'selection': _T_Guaranteed_Value_Selection
                    readonly 'selected dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
                }]
                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.lookups.D>]
                | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<null, _T_Dictionary>]
                | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<null, _T_Dictionary>]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['dictionary', {
                readonly 'selection': _T_Guaranteed_Value_Selection
                readonly 'selected dictionary': _i_core._T_Derived_Reference<null, _T_Dictionary>
            }]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.lookups.D>]
            | readonly ['not circular dependent siblings', _i_core._T_Derived_Reference<null, _T_Dictionary>]
            | readonly ['possibly circular dependent siblings', _i_core._T_Derived_Reference<null, _T_Dictionary>]
        >
        
        export namespace resulting_dictionary {
            
            export namespace Type {
            }
            export type Type = _T_Dictionary
        }
        export type resulting_dictionary = _i_core._T_Derived_Reference<null, _T_Dictionary>
    }
    
    export namespace Constraint {
        
        export namespace selection {
        }
        export type selection = _T_Relative_Value_Selection
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace state {
                    
                    export namespace selected_state_group {
                        
                        export namespace Type {
                        }
                        export type Type = _T_Type_Node.SG.state_group
                    }
                    export type selected_state_group = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    
                    export namespace state {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Type_Node.SG.state_group.D
                    }
                    export type state = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }
                export type state = {
                    readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }
                
                export namespace optional_value {
                    
                    export namespace selected_optional_value {
                        
                        export namespace Type {
                        }
                        export type Type = _T_Type_Node.SG.optional
                    }
                    export type selected_optional_value = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.optional>
                }
                export type optional_value = {
                    readonly 'selected optional value': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.optional>
                }
            }
            export type SG = 
                | readonly ['state', {
                    readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }]
                | readonly ['optional value', {
                    readonly 'selected optional value': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.optional>
                }]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['state', {
                readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
            }]
            | readonly ['optional value', {
                readonly 'selected optional value': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.optional>
            }]
        >
    }
    
    export namespace Option_Constraints {
        
        export namespace D {
            
            export namespace SG {
                
                export namespace state {
                    
                    export namespace selection {
                    }
                    export type selection = _T_Guaranteed_Value_Selection
                    
                    export namespace selected_state_group {
                        
                        export namespace Type {
                        }
                        export type Type = _T_Type_Node.SG.state_group
                    }
                    export type selected_state_group = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    
                    export namespace state {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Type_Node.SG.state_group.D
                    }
                    export type state = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }
                export type state = {
                    readonly 'selection': _T_Guaranteed_Value_Selection
                    readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }
                
                export namespace assert_is_set {
                }
                export type assert_is_set = _T_Possible_Value_Selection
            }
            export type SG = 
                | readonly ['state', {
                    readonly 'selection': _T_Guaranteed_Value_Selection
                    readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                    readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
                }]
                | readonly ['assert is set', _T_Possible_Value_Selection]
        }
        export type D = _i_core._T_State_Group<null, 
            | readonly ['state', {
                readonly 'selection': _T_Guaranteed_Value_Selection
                readonly 'selected state group': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                readonly 'state': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Type_Node.SG.state_group.D>
            }]
            | readonly ['assert is set', _T_Possible_Value_Selection]
        >
    }
    
    export namespace Property_Constraints {
        
        export namespace D {
        }
        export type D = _T_Property_Constraint
    }
    
    export namespace Reference_To_Property_Constraint {
        
        export namespace Dictionary_Entry {
        }
        export type Dictionary_Entry = _T_Property_Constraints.D
    }
    
    export namespace Property_Constraint {
        
        export namespace start {
            
            export namespace SG {
                export type property = null
                
                export namespace sibling {
                }
                export type sibling = _T_Reference_To_Property_Constraint
            }
            export type SG = 
                | readonly ['property', null]
                | readonly ['sibling', _T_Reference_To_Property_Constraint]
        }
        export type start = _i_core._T_State_Group<null, 
            | readonly ['property', null]
            | readonly ['sibling', _T_Reference_To_Property_Constraint]
        >
        
        export namespace constraint {
        }
        export type constraint = _T_Constraint
    }
    
    export namespace Optional_Value_Initialization {
        
        export namespace SG {
            export type not_set = null
            
            export namespace _set {
            }
            export type _set = _T_Guaranteed_Value_Selection
            
            export namespace selection {
            }
            export type selection = _T_Possible_Value_Selection
        }
        export type SG = 
            | readonly ['not set', null]
            | readonly ['set', _T_Guaranteed_Value_Selection]
            | readonly ['selection', _T_Possible_Value_Selection]
    }
    
    export namespace Node_Resolver_Group {
        
        export namespace D {
            
            export namespace definition {
                
                export namespace Type {
                }
                export type Type = _T_Group.D
            }
            export type definition = _i_core._T_Derived_Reference<null, _T_Group.D>
            
            export namespace resolver {
            }
            export type resolver = _T_Node_Resolver
        }
        export type D = {
            readonly 'definition': _i_core._T_Derived_Reference<null, _T_Group.D>
            readonly 'resolver': _T_Node_Resolver
        }
    }
    
    export namespace Node_Resolver_List_Result {
    }
    
    export namespace Benchmark {
        
        export namespace selection {
        }
        export type selection = _T_Guaranteed_Value_Selection
        
        export namespace resulting_dictionary {
            
            export namespace Type {
            }
            export type Type = _T_Dictionary
        }
        export type resulting_dictionary = _i_core._T_Derived_Reference<null, _T_Dictionary>
        export type dense = boolean
    }
    
    export namespace Type_Specification {
        
        export namespace schema {
        }
        export type schema = _T_Schema_Tree
        
        export namespace schema_path {
            export type L = string
        }
        export type schema_path = _i_core._T_List<null, string>
        export type _type = string
    }
    
    export namespace Node_Resolver {
        
        export namespace SG {
            export type _boolean = null
            
            export namespace component {
                
                export namespace location {
                    
                    export namespace SG {
                        
                        export namespace external {
                            
                            export namespace _import {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Imports.D
                            }
                            export type _import = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                            
                            export namespace _type {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Signatures.D
                            }
                            export type _type = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                        }
                        export type external = {
                            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                        }
                        
                        export namespace internal {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Signatures.D
                        }
                        export type internal = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                    }
                    export type SG = 
                        | readonly ['external', {
                            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                        }]
                        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
                }
                export type location = _i_core._T_State_Group<null, 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
                >
                
                export namespace signature {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Signatures.D
                }
                export type signature = _i_core._T_Derived_Reference<null, _T_Signatures.D>
                
                export namespace _arguments {
                    
                    export namespace O {
                        
                        export namespace values {
                            
                            export namespace O {
                                
                                export namespace D {
                                    
                                    export namespace SG {
                                        
                                        export namespace optional {
                                        }
                                        export type optional = _T_Optional_Value_Initialization
                                        
                                        export namespace required {
                                        }
                                        export type required = _T_Guaranteed_Value_Selection
                                        
                                        export namespace parameter {
                                            
                                            export namespace Dictionary_Entry {
                                            }
                                            export type Dictionary_Entry = _T_Signature_Parameters.values.D
                                        }
                                        export type parameter = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>
                                    }
                                    export type SG = 
                                        | readonly ['optional', _T_Optional_Value_Initialization]
                                        | readonly ['required', _T_Guaranteed_Value_Selection]
                                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                                }
                                export type D = _i_core._T_State_Group<null, 
                                    | readonly ['optional', _T_Optional_Value_Initialization]
                                    | readonly ['required', _T_Guaranteed_Value_Selection]
                                    | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                                >
                            }
                            export type O = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                                | readonly ['optional', _T_Optional_Value_Initialization]
                                | readonly ['required', _T_Guaranteed_Value_Selection]
                                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                            >>
                        }
                        export type values = _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                            | readonly ['optional', _T_Optional_Value_Initialization]
                            | readonly ['required', _T_Guaranteed_Value_Selection]
                            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                        >>>
                        
                        export namespace lookups {
                            
                            export namespace O {
                                
                                export namespace D {
                                    
                                    export namespace SG {
                                        export type empty_stack = null
                                        export type not_set = null
                                        
                                        export namespace selection {
                                        }
                                        export type selection = _T_Lookup_Selection
                                        
                                        export namespace stack {
                                            
                                            export namespace stack {
                                            }
                                            export type stack = _T_Lookup_Selection
                                            
                                            export namespace element {
                                            }
                                            export type element = _T_Lookup_Selection
                                        }
                                        export type stack = {
                                            readonly 'stack': _T_Lookup_Selection
                                            readonly 'element': _T_Lookup_Selection
                                        }
                                    }
                                    export type SG = 
                                        | readonly ['empty stack', null]
                                        | readonly ['not set', null]
                                        | readonly ['selection', _T_Lookup_Selection]
                                        | readonly ['stack', {
                                            readonly 'stack': _T_Lookup_Selection
                                            readonly 'element': _T_Lookup_Selection
                                        }]
                                }
                                export type D = _i_core._T_State_Group<null, 
                                    | readonly ['empty stack', null]
                                    | readonly ['not set', null]
                                    | readonly ['selection', _T_Lookup_Selection]
                                    | readonly ['stack', {
                                        readonly 'stack': _T_Lookup_Selection
                                        readonly 'element': _T_Lookup_Selection
                                    }]
                                >
                            }
                            export type O = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                                | readonly ['empty stack', null]
                                | readonly ['not set', null]
                                | readonly ['selection', _T_Lookup_Selection]
                                | readonly ['stack', {
                                    readonly 'stack': _T_Lookup_Selection
                                    readonly 'element': _T_Lookup_Selection
                                }]
                            >>
                        }
                        export type lookups = _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                            | readonly ['empty stack', null]
                            | readonly ['not set', null]
                            | readonly ['selection', _T_Lookup_Selection]
                            | readonly ['stack', {
                                readonly 'stack': _T_Lookup_Selection
                                readonly 'element': _T_Lookup_Selection
                            }]
                        >>>
                    }
                    export type O = {
                        readonly 'values': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                            | readonly ['optional', _T_Optional_Value_Initialization]
                            | readonly ['required', _T_Guaranteed_Value_Selection]
                            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                        >>>
                        readonly 'lookups': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                            | readonly ['empty stack', null]
                            | readonly ['not set', null]
                            | readonly ['selection', _T_Lookup_Selection]
                            | readonly ['stack', {
                                readonly 'stack': _T_Lookup_Selection
                                readonly 'element': _T_Lookup_Selection
                            }]
                        >>>
                    }
                }
                export type _arguments = _pi.Optional_Value<{
                    readonly 'values': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['optional', _T_Optional_Value_Initialization]
                        | readonly ['required', _T_Guaranteed_Value_Selection]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                    >>>
                    readonly 'lookups': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection]
                        | readonly ['stack', {
                            readonly 'stack': _T_Lookup_Selection
                            readonly 'element': _T_Lookup_Selection
                        }]
                    >>>
                }>
                
                export namespace constraints {
                }
                export type constraints = _T_Property_Constraints
            }
            export type component = {
                readonly 'location': _i_core._T_State_Group<null, 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
                >
                readonly 'signature': _i_core._T_Derived_Reference<null, _T_Signatures.D>
                readonly 'arguments': _pi.Optional_Value<{
                    readonly 'values': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['optional', _T_Optional_Value_Initialization]
                        | readonly ['required', _T_Guaranteed_Value_Selection]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                    >>>
                    readonly 'lookups': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection]
                        | readonly ['stack', {
                            readonly 'stack': _T_Lookup_Selection
                            readonly 'element': _T_Lookup_Selection
                        }]
                    >>>
                }>
                readonly 'constraints': _T_Property_Constraints
            }
            
            export namespace dictionary {
                
                export namespace definition {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Dictionary
                }
                export type definition = _i_core._T_Derived_Reference<null, _T_Dictionary>
                
                export namespace resolver {
                }
                export type resolver = _T_Node_Resolver
                
                export namespace benchmark {
                    
                    export namespace O {
                    }
                    export type O = _T_Benchmark
                }
                export type benchmark = _pi.Optional_Value<_T_Benchmark>
            }
            export type dictionary = {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Dictionary>
                readonly 'resolver': _T_Node_Resolver
                readonly 'benchmark': _pi.Optional_Value<_T_Benchmark>
            }
            
            export namespace group {
            }
            export type group = _T_Node_Resolver_Group
            
            export namespace list {
                
                export namespace definition {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Type_Node.SG.list
                }
                export type definition = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.list>
                
                export namespace resolver {
                }
                export type resolver = _T_Node_Resolver
                
                export namespace result {
                    
                    export namespace O {
                    }
                    export type O = _T_Node_Resolver_List_Result
                }
                export type result = _pi.Optional_Value<_T_Node_Resolver_List_Result>
            }
            export type list = {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.list>
                readonly 'resolver': _T_Node_Resolver
                readonly 'result': _pi.Optional_Value<_T_Node_Resolver_List_Result>
            }
            export type nothing = null
            export type _number = null
            
            export namespace optional {
                
                export namespace constraints {
                }
                export type constraints = _T_Option_Constraints
                
                export namespace resolver {
                }
                export type resolver = _T_Node_Resolver
            }
            export type optional = {
                readonly 'constraints': _T_Option_Constraints
                readonly 'resolver': _T_Node_Resolver
            }
            
            export namespace reference {
                
                export namespace definition {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Type_Node.SG.reference
                }
                export type definition = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                
                export namespace _type {
                    
                    export namespace SG {
                        
                        export namespace derived {
                            
                            export namespace value {
                            }
                            export type value = _T_Guaranteed_Value_Selection
                        }
                        export type derived = {
                            readonly 'value': _T_Guaranteed_Value_Selection
                        }
                        
                        export namespace selected {
                            
                            export namespace definition {
                                
                                export namespace Type {
                                }
                                export type Type = _T_Type_Node.SG.reference._type.SG.selected
                            }
                            export type definition = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                            
                            export namespace lookup {
                            }
                            export type lookup = _T_Lookup_Selection
                            
                            export namespace constraints {
                            }
                            export type constraints = _T_Property_Constraints
                        }
                        export type selected = {
                            readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                            readonly 'lookup': _T_Lookup_Selection
                            readonly 'constraints': _T_Property_Constraints
                        }
                    }
                    export type SG = 
                        | readonly ['derived', {
                            readonly 'value': _T_Guaranteed_Value_Selection
                        }]
                        | readonly ['selected', {
                            readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                            readonly 'lookup': _T_Lookup_Selection
                            readonly 'constraints': _T_Property_Constraints
                        }]
                }
                export type _type = _i_core._T_State_Group<null, 
                    | readonly ['derived', {
                        readonly 'value': _T_Guaranteed_Value_Selection
                    }]
                    | readonly ['selected', {
                        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                        readonly 'lookup': _T_Lookup_Selection
                        readonly 'constraints': _T_Property_Constraints
                    }]
                >
            }
            export type reference = {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['derived', {
                        readonly 'value': _T_Guaranteed_Value_Selection
                    }]
                    | readonly ['selected', {
                        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                        readonly 'lookup': _T_Lookup_Selection
                        readonly 'constraints': _T_Property_Constraints
                    }]
                >
            }
            
            export namespace state_group {
                
                export namespace definition {
                    
                    export namespace Type {
                    }
                    export type Type = _T_Type_Node.SG.state_group
                }
                export type definition = _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                
                export namespace states {
                    
                    export namespace D {
                        
                        export namespace constraints {
                        }
                        export type constraints = _T_Option_Constraints
                        
                        export namespace resolver {
                        }
                        export type resolver = _T_Node_Resolver
                    }
                    export type D = {
                        readonly 'constraints': _T_Option_Constraints
                        readonly 'resolver': _T_Node_Resolver
                    }
                }
                export type states = _i_core._T_Dictionary<null, {
                    readonly 'constraints': _T_Option_Constraints
                    readonly 'resolver': _T_Node_Resolver
                }>
            }
            export type state_group = {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'constraints': _T_Option_Constraints
                    readonly 'resolver': _T_Node_Resolver
                }>
            }
            export type text = null
        }
        export type SG = 
            | readonly ['boolean', null]
            | readonly ['component', {
                readonly 'location': _i_core._T_State_Group<null, 
                    | readonly ['external', {
                        readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                        readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>
                    }]
                    | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signatures.D>]
                >
                readonly 'signature': _i_core._T_Derived_Reference<null, _T_Signatures.D>
                readonly 'arguments': _pi.Optional_Value<{
                    readonly 'values': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['optional', _T_Optional_Value_Initialization]
                        | readonly ['required', _T_Guaranteed_Value_Selection]
                        | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                    >>>
                    readonly 'lookups': _pi.Optional_Value<_i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
                        | readonly ['empty stack', null]
                        | readonly ['not set', null]
                        | readonly ['selection', _T_Lookup_Selection]
                        | readonly ['stack', {
                            readonly 'stack': _T_Lookup_Selection
                            readonly 'element': _T_Lookup_Selection
                        }]
                    >>>
                }>
                readonly 'constraints': _T_Property_Constraints
            }]
            | readonly ['dictionary', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Dictionary>
                readonly 'resolver': _T_Node_Resolver
                readonly 'benchmark': _pi.Optional_Value<_T_Benchmark>
            }]
            | readonly ['group', _T_Node_Resolver_Group]
            | readonly ['list', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.list>
                readonly 'resolver': _T_Node_Resolver
                readonly 'result': _pi.Optional_Value<_T_Node_Resolver_List_Result>
            }]
            | readonly ['nothing', null]
            | readonly ['number', null]
            | readonly ['optional', {
                readonly 'constraints': _T_Option_Constraints
                readonly 'resolver': _T_Node_Resolver
            }]
            | readonly ['reference', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['derived', {
                        readonly 'value': _T_Guaranteed_Value_Selection
                    }]
                    | readonly ['selected', {
                        readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.reference._type.SG.selected>
                        readonly 'lookup': _T_Lookup_Selection
                        readonly 'constraints': _T_Property_Constraints
                    }]
                >
            }]
            | readonly ['state group', {
                readonly 'definition': _i_core._T_Derived_Reference<null, _T_Type_Node.SG.state_group>
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'constraints': _T_Option_Constraints
                    readonly 'resolver': _T_Node_Resolver
                }>
            }]
            | readonly ['text', null]
    }
    
    export namespace Guaranteed_Value_Selection {
        
        export namespace start {
            
            export namespace SG {
                
                export namespace sibling {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Node_Resolver_Group.D
                }
                export type sibling = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                
                export namespace parent_sibling {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Node_Resolver_Group.D
                }
                export type parent_sibling = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                
                export namespace option_constraint {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Option_Constraints.D
                }
                export type option_constraint = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Option_Constraints.D>
                export type list_cursor = null
                export type linked_entry = null
                
                export namespace constraint {
                    
                    export namespace SG {
                        
                        export namespace component {
                            
                            export namespace property {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Node_Resolver_Group.D
                            }
                            export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            
                            export namespace constraint {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Property_Constraints.D
                            }
                            export type constraint = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }
                        export type component = {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }
                        
                        export namespace reference {
                            
                            export namespace property {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Node_Resolver_Group.D
                            }
                            export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            
                            export namespace constraint {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Property_Constraints.D
                            }
                            export type constraint = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }
                        export type reference = {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }
                    }
                    export type SG = 
                        | readonly ['component', {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }]
                        | readonly ['reference', {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                        }]
                }
                export type constraint = _i_core._T_State_Group<null, 
                    | readonly ['component', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                    }]
                    | readonly ['reference', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                    }]
                >
                
                export namespace parameter {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Signature_Parameters.values.D
                }
                export type parameter = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>
                
                export namespace result {
                    
                    export namespace SG {
                        
                        export namespace list {
                            
                            export namespace property {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Node_Resolver_Group.D
                            }
                            export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            
                            export namespace list_result {
                                
                                export namespace Type {
                                }
                                export type Type = _T_Node_Resolver.SG.list.result.O
                            }
                            export type list_result = _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                        }
                        export type list = {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                        }
                        
                        export namespace state_group {
                            
                            export namespace property {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Node_Resolver_Group.D
                            }
                            export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            
                            export namespace state_group {
                                
                                export namespace Type {
                                }
                                export type Type = _T_Node_Resolver.SG.state_group
                            }
                            export type state_group = _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                            
                            export namespace result {
                            }
                            export type result = _T_Type_Reference
                        }
                        export type state_group = {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                            readonly 'result': _T_Type_Reference
                        }
                        
                        export namespace optional_value {
                            
                            export namespace property {
                                
                                export namespace Dictionary_Entry {
                                }
                                export type Dictionary_Entry = _T_Node_Resolver_Group.D
                            }
                            export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            
                            export namespace optional_value {
                                
                                export namespace Type {
                                }
                                export type Type = _T_Node_Resolver.SG.optional
                            }
                            export type optional_value = _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                            
                            export namespace result {
                            }
                            export type result = _T_Type_Reference
                        }
                        export type optional_value = {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                            readonly 'result': _T_Type_Reference
                        }
                    }
                    export type SG = 
                        | readonly ['list', {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                        }]
                        | readonly ['state group', {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                            readonly 'result': _T_Type_Reference
                        }]
                        | readonly ['optional value', {
                            readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                            readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                            readonly 'result': _T_Type_Reference
                        }]
                }
                export type result = _i_core._T_State_Group<null, 
                    | readonly ['list', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                    }]
                    | readonly ['state group', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                        readonly 'result': _T_Type_Reference
                    }]
                    | readonly ['optional value', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                        readonly 'result': _T_Type_Reference
                    }]
                >
            }
            export type SG = 
                | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>]
                | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>]
                | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Option_Constraints.D>]
                | readonly ['list cursor', null]
                | readonly ['linked entry', null]
                | readonly ['constraint', _i_core._T_State_Group<null, 
                    | readonly ['component', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                    }]
                    | readonly ['reference', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                    }]
                >]
                | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
                | readonly ['result', _i_core._T_State_Group<null, 
                    | readonly ['list', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                    }]
                    | readonly ['state group', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                        readonly 'result': _T_Type_Reference
                    }]
                    | readonly ['optional value', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                        readonly 'result': _T_Type_Reference
                    }]
                >]
        }
        export type start = _i_core._T_State_Group<null, 
            | readonly ['sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>]
            | readonly ['parent sibling', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>]
            | readonly ['option constraint', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Option_Constraints.D>]
            | readonly ['list cursor', null]
            | readonly ['linked entry', null]
            | readonly ['constraint', _i_core._T_State_Group<null, 
                | readonly ['component', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                }]
                | readonly ['reference', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'constraint': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Property_Constraints.D>
                }]
            >]
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
            | readonly ['result', _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'list result': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.list.result.O>
                }]
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                    readonly 'result': _T_Type_Reference
                }]
                | readonly ['optional value', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                    readonly 'result': _T_Type_Reference
                }]
            >]
        >
        
        export namespace tail {
        }
        export type tail = _T_Relative_Value_Selection
        
        export namespace resulting_node {
            
            export namespace Type {
            }
            export type Type = _T_Type_Node
        }
        export type resulting_node = _i_core._T_Derived_Reference<null, _T_Type_Node>
    }
    
    export namespace Possible_Value_Selection {
        
        export namespace SG {
            
            export namespace parameter {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Signature_Parameters.values.D
            }
            export type parameter = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>
            
            export namespace result {
                
                export namespace SG {
                    
                    export namespace state_group {
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Node_Resolver_Group.D
                        }
                        export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        
                        export namespace state_group {
                            
                            export namespace Type {
                            }
                            export type Type = _T_Node_Resolver.SG.state_group
                        }
                        export type state_group = _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                        
                        export namespace result {
                        }
                        export type result = _T_Type_Reference
                    }
                    export type state_group = {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                        readonly 'result': _T_Type_Reference
                    }
                    
                    export namespace optional_value {
                        
                        export namespace property {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Node_Resolver_Group.D
                        }
                        export type property = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        
                        export namespace optional_value {
                            
                            export namespace Type {
                            }
                            export type Type = _T_Node_Resolver.SG.optional
                        }
                        export type optional_value = _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                        
                        export namespace result {
                        }
                        export type result = _T_Type_Reference
                    }
                    export type optional_value = {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                        readonly 'result': _T_Type_Reference
                    }
                }
                export type SG = 
                    | readonly ['state group', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                        readonly 'result': _T_Type_Reference
                    }]
                    | readonly ['optional value', {
                        readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                        readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                        readonly 'result': _T_Type_Reference
                    }]
            }
            export type result = _i_core._T_State_Group<null, 
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                    readonly 'result': _T_Type_Reference
                }]
                | readonly ['optional value', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                    readonly 'result': _T_Type_Reference
                }]
            >
        }
        export type SG = 
            | readonly ['parameter', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Signature_Parameters.values.D>]
            | readonly ['result', _i_core._T_State_Group<null, 
                | readonly ['state group', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'state group': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.state_group>
                    readonly 'result': _T_Type_Reference
                }]
                | readonly ['optional value', {
                    readonly 'property': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Node_Resolver_Group.D>
                    readonly 'optional value': _i_core._T_Derived_Reference<null, _T_Node_Resolver.SG.optional>
                    readonly 'result': _T_Type_Reference
                }]
            >]
    }
