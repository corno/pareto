import * as _pt from 'exupery-core-types'

import * as _i_in from "./resolved"
import * as _i_out from "../../core/astn_target"

// **** TYPES

export type _T_Value_Serializers = {
    readonly 'boolean': (
        $$_: boolean,
        $$_p: null,
    ) => string
    readonly 'custom numbers': null
    readonly 'default number': (
        $$_: number,
        $$_p: null,
    ) => string
}

export type _T_s_Benchmark = (
    $$_: _i_in._T_Benchmark,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Constraint = (
    $$_: _i_in._T_Constraint,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Dictionary = (
    $$_: _i_in._T_Dictionary,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Globals = (
    $$_: _i_in._T_Globals,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Group = (
    $$_: _i_in._T_Group,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Guaranteed_Value_Selection = (
    $$_: _i_in._T_Guaranteed_Value_Selection,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Imports = (
    $$_: _i_in._T_Imports,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Lookup_Selection = (
    $$_: _i_in._T_Lookup_Selection,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Node_Resolver = (
    $$_: _i_in._T_Node_Resolver,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Node_Resolver_Group = (
    $$_: _i_in._T_Node_Resolver_Group,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Node_Resolver_List_Result = (
    $$_: _i_in._T_Node_Resolver_List_Result,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Number_Type = (
    $$_: _i_in._T_Number_Type,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Option_Constraints = (
    $$_: _i_in._T_Option_Constraints,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Optional_Value_Initialization = (
    $$_: _i_in._T_Optional_Value_Initialization,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Possible_Value_Selection = (
    $$_: _i_in._T_Possible_Value_Selection,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Presence = (
    $$_: _i_in._T_Presence,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Property_Constraint = (
    $$_: _i_in._T_Property_Constraint,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Property_Constraints = (
    $$_: _i_in._T_Property_Constraints,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Reference_To_Property_Constraint = (
    $$_: _i_in._T_Reference_To_Property_Constraint,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Relative_Value_Selection = (
    $$_: _i_in._T_Relative_Value_Selection,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Resolve_Logic = (
    $$_: _i_in._T_Resolve_Logic,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Resolvers = (
    $$_: _i_in._T_Resolvers,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Schema = (
    $$_: _i_in._T_Schema,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Schemas = (
    $$_: _i_in._T_Schemas,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Signature = (
    $$_: _i_in._T_Signature,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Signature_Parameters = (
    $$_: _i_in._T_Signature_Parameters,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Signatures = (
    $$_: _i_in._T_Signatures,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Text_Type = (
    $$_: _i_in._T_Text_Type,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Type = (
    $$_: _i_in._T_Type,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Type_Node = (
    $$_: _i_in._T_Type_Node,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Type_Node_Reference = (
    $$_: _i_in._T_Type_Node_Reference,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Type_Parameters = (
    $$_: _i_in._T_Type_Parameters,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Type_Reference = (
    $$_: _i_in._T_Type_Reference,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Types = (
    $$_: _i_in._T_Types,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value_Serializers = _T_Value_Serializers

export type s_Benchmark = _T_s_Benchmark

export type s_Constraint = _T_s_Constraint

export type s_Dictionary = _T_s_Dictionary

export type s_Globals = _T_s_Globals

export type s_Group = _T_s_Group

export type s_Guaranteed_Value_Selection = _T_s_Guaranteed_Value_Selection

export type s_Imports = _T_s_Imports

export type s_Lookup_Selection = _T_s_Lookup_Selection

export type s_Node_Resolver = _T_s_Node_Resolver

export type s_Node_Resolver_Group = _T_s_Node_Resolver_Group

export type s_Node_Resolver_List_Result = _T_s_Node_Resolver_List_Result

export type s_Number_Type = _T_s_Number_Type

export type s_Option_Constraints = _T_s_Option_Constraints

export type s_Optional_Value_Initialization = _T_s_Optional_Value_Initialization

export type s_Possible_Value_Selection = _T_s_Possible_Value_Selection

export type s_Presence = _T_s_Presence

export type s_Property_Constraint = _T_s_Property_Constraint

export type s_Property_Constraints = _T_s_Property_Constraints

export type s_Reference_To_Property_Constraint = _T_s_Reference_To_Property_Constraint

export type s_Relative_Value_Selection = _T_s_Relative_Value_Selection

export type s_Resolve_Logic = _T_s_Resolve_Logic

export type s_Resolvers = _T_s_Resolvers

export type s_Schema = _T_s_Schema

export type s_Schemas = _T_s_Schemas

export type s_Signature = _T_s_Signature

export type s_Signature_Parameters = _T_s_Signature_Parameters

export type s_Signatures = _T_s_Signatures

export type s_Text_Type = _T_s_Text_Type

export type s_Type = _T_s_Type

export type s_Type_Node = _T_s_Type_Node

export type s_Type_Node_Reference = _T_s_Type_Node_Reference

export type s_Type_Parameters = _T_s_Type_Parameters

export type s_Type_Reference = _T_s_Type_Reference

export type s_Types = _T_s_Types

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Value_Serializers {
    
    export namespace _boolean {
        export type CONTEXT = boolean
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type _boolean = (
        $$_: boolean,
        $$_p: null,
    ) => string
    
    export namespace custom_numbers {
    }
    export type custom_numbers = null
    
    export namespace default_number {
        export type CONTEXT = number
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type default_number = (
        $$_: number,
        $$_p: null,
    ) => string
}

export namespace _T_s_Benchmark {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Benchmark
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Constraint
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Dictionary {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Dictionary
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Globals {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Globals
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Group
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Guaranteed_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Guaranteed_Value_Selection
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Imports {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Imports
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Lookup_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lookup_Selection
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Node_Resolver {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Resolver
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Node_Resolver_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Resolver_Group
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Node_Resolver_List_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Resolver_List_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Number_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Number_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Option_Constraints {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Option_Constraints
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Optional_Value_Initialization {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Optional_Value_Initialization
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Possible_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Possible_Value_Selection
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Presence {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Presence
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Property_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Property_Constraint
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Property_Constraints {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Property_Constraints
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Reference_To_Property_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Reference_To_Property_Constraint
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Relative_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Value_Selection
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Resolve_Logic {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Resolve_Logic
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Resolvers {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Resolvers
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Schema {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Schema
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Schemas {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Schemas
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Signature {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Signature
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Signature_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Signature_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Signatures {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Signatures
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Text_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Text_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Type_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Node
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Type_Node_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Node_Reference
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Type_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Type_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Reference
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Types {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Types
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Value_Serializers {
    
    export namespace _boolean {
        export type CONTEXT = boolean
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type _boolean = (
        $$_: boolean,
        $$_p: null,
    ) => string
    
    export namespace custom_numbers {
    }
    export type custom_numbers = null
    
    export namespace default_number {
        export type CONTEXT = number
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type default_number = (
        $$_: number,
        $$_p: null,
    ) => string
}

export namespace s_Benchmark {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Benchmark
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Constraint
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Dictionary {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Dictionary
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Globals {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Globals
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Group
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Guaranteed_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Guaranteed_Value_Selection
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Imports {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Imports
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Lookup_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lookup_Selection
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Node_Resolver {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Resolver
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Node_Resolver_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Resolver_Group
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Node_Resolver_List_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Resolver_List_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Number_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Number_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Option_Constraints {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Option_Constraints
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Optional_Value_Initialization {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Optional_Value_Initialization
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Possible_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Possible_Value_Selection
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Presence {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Presence
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Property_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Property_Constraint
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Property_Constraints {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Property_Constraints
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Reference_To_Property_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Reference_To_Property_Constraint
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Relative_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Value_Selection
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Resolve_Logic {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Resolve_Logic
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Resolvers {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Resolvers
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Schema {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Schema
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Schemas {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Schemas
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Signature {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Signature
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Signature_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Signature_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Signatures {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Signatures
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Text_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Text_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Type_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Node
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Type_Node_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Node_Reference
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Type_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Type_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Reference
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Types {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Types
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
