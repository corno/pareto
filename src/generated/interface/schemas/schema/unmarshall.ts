import * as _pt from 'exupery-core-types'

import * as _i_in from "../../core/astn_source"
import * as _i_out from "./data_types/unresolved"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Benchmark = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Benchmark<_i_in._T_Range>

export type _T_Constraint = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Constraint<_i_in._T_Range>

export type _T_Dictionary = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Dictionary<_i_in._T_Range>

export type _T_Globals = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Globals<_i_in._T_Range>

export type _T_Group = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Group<_i_in._T_Range>

export type _T_Guaranteed_Value_Selection = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Guaranteed_Value_Selection<_i_in._T_Range>

export type _T_Imports = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Imports<_i_in._T_Range>

export type _T_Lookup_Selection = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Lookup_Selection<_i_in._T_Range>

export type _T_Node_Resolver = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Node_Resolver<_i_in._T_Range>

export type _T_Node_Resolver_Group = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Node_Resolver_Group<_i_in._T_Range>

export type _T_Node_Resolver_List_Result = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Node_Resolver_List_Result<_i_in._T_Range>

export type _T_Number_Type = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Number_Type<_i_in._T_Range>

export type _T_Option_Constraints = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Option_Constraints<_i_in._T_Range>

export type _T_Optional_Value_Initialization = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Optional_Value_Initialization<_i_in._T_Range>

export type _T_Possible_Value_Selection = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Possible_Value_Selection<_i_in._T_Range>

export type _T_Presence = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Presence<_i_in._T_Range>

export type _T_Property_Constraint = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Property_Constraint<_i_in._T_Range>

export type _T_Property_Constraints = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Property_Constraints<_i_in._T_Range>

export type _T_Reference_To_Property_Constraint = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Reference_To_Property_Constraint<_i_in._T_Range>

export type _T_Relative_Value_Selection = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Relative_Value_Selection<_i_in._T_Range>

export type _T_Resolve_Logic = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Resolve_Logic<_i_in._T_Range>

export type _T_Resolvers = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Resolvers<_i_in._T_Range>

export type _T_Schema = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Schema<_i_in._T_Range>

export type _T_Schema_Tree = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Schema_Tree<_i_in._T_Range>

export type _T_Schemas = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Schemas<_i_in._T_Range>

export type _T_Signature = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Signature<_i_in._T_Range>

export type _T_Signature_Parameters = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Signature_Parameters<_i_in._T_Range>

export type _T_Signatures = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Signatures<_i_in._T_Range>

export type _T_Text_Type = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Text_Type<_i_in._T_Range>

export type _T_Type = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type<_i_in._T_Range>

export type _T_Type_Node = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type_Node<_i_in._T_Range>

export type _T_Type_Node_Reference = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type_Node_Reference<_i_in._T_Range>

export type _T_Type_Parameters = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type_Parameters<_i_in._T_Range>

export type _T_Type_Reference = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type_Reference<_i_in._T_Range>

export type _T_Type_Specification = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type_Specification<_i_in._T_Range>

export type _T_Types = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Types<_i_in._T_Range>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Benchmark = _T_Benchmark

export type Constraint = _T_Constraint

export type Dictionary = _T_Dictionary

export type Globals = _T_Globals

export type Group = _T_Group

export type Guaranteed_Value_Selection = _T_Guaranteed_Value_Selection

export type Imports = _T_Imports

export type Lookup_Selection = _T_Lookup_Selection

export type Node_Resolver = _T_Node_Resolver

export type Node_Resolver_Group = _T_Node_Resolver_Group

export type Node_Resolver_List_Result = _T_Node_Resolver_List_Result

export type Number_Type = _T_Number_Type

export type Option_Constraints = _T_Option_Constraints

export type Optional_Value_Initialization = _T_Optional_Value_Initialization

export type Possible_Value_Selection = _T_Possible_Value_Selection

export type Presence = _T_Presence

export type Property_Constraint = _T_Property_Constraint

export type Property_Constraints = _T_Property_Constraints

export type Reference_To_Property_Constraint = _T_Reference_To_Property_Constraint

export type Relative_Value_Selection = _T_Relative_Value_Selection

export type Resolve_Logic = _T_Resolve_Logic

export type Resolvers = _T_Resolvers

export type Schema = _T_Schema

export type Schema_Tree = _T_Schema_Tree

export type Schemas = _T_Schemas

export type Signature = _T_Signature

export type Signature_Parameters = _T_Signature_Parameters

export type Signatures = _T_Signatures

export type Text_Type = _T_Text_Type

export type Type = _T_Type

export type Type_Node = _T_Type_Node

export type Type_Node_Reference = _T_Type_Node_Reference

export type Type_Parameters = _T_Type_Parameters

export type Type_Reference = _T_Type_Reference

export type Type_Specification = _T_Type_Specification

export type Types = _T_Types

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Benchmark {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Benchmark<_i_in._T_Range>
}

export namespace _T_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Constraint<_i_in._T_Range>
}

export namespace _T_Dictionary {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Dictionary<_i_in._T_Range>
}

export namespace _T_Globals {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Globals<_i_in._T_Range>
}

export namespace _T_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Group<_i_in._T_Range>
}

export namespace _T_Guaranteed_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Guaranteed_Value_Selection<_i_in._T_Range>
}

export namespace _T_Imports {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Imports<_i_in._T_Range>
}

export namespace _T_Lookup_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Lookup_Selection<_i_in._T_Range>
}

export namespace _T_Node_Resolver {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Node_Resolver<_i_in._T_Range>
}

export namespace _T_Node_Resolver_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Node_Resolver_Group<_i_in._T_Range>
}

export namespace _T_Node_Resolver_List_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Node_Resolver_List_Result<_i_in._T_Range>
}

export namespace _T_Number_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Number_Type<_i_in._T_Range>
}

export namespace _T_Option_Constraints {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Option_Constraints<_i_in._T_Range>
}

export namespace _T_Optional_Value_Initialization {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Optional_Value_Initialization<_i_in._T_Range>
}

export namespace _T_Possible_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Possible_Value_Selection<_i_in._T_Range>
}

export namespace _T_Presence {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Presence<_i_in._T_Range>
}

export namespace _T_Property_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Property_Constraint<_i_in._T_Range>
}

export namespace _T_Property_Constraints {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Property_Constraints<_i_in._T_Range>
}

export namespace _T_Reference_To_Property_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Reference_To_Property_Constraint<_i_in._T_Range>
}

export namespace _T_Relative_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Relative_Value_Selection<_i_in._T_Range>
}

export namespace _T_Resolve_Logic {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Resolve_Logic<_i_in._T_Range>
}

export namespace _T_Resolvers {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Resolvers<_i_in._T_Range>
}

export namespace _T_Schema {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schema<_i_in._T_Range>
}

export namespace _T_Schema_Tree {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schema_Tree<_i_in._T_Range>
}

export namespace _T_Schemas {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schemas<_i_in._T_Range>
}

export namespace _T_Signature {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Signature<_i_in._T_Range>
}

export namespace _T_Signature_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Signature_Parameters<_i_in._T_Range>
}

export namespace _T_Signatures {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Signatures<_i_in._T_Range>
}

export namespace _T_Text_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Text_Type<_i_in._T_Range>
}

export namespace _T_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type<_i_in._T_Range>
}

export namespace _T_Type_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Node<_i_in._T_Range>
}

export namespace _T_Type_Node_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Node_Reference<_i_in._T_Range>
}

export namespace _T_Type_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Parameters<_i_in._T_Range>
}

export namespace _T_Type_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Reference<_i_in._T_Range>
}

export namespace _T_Type_Specification {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Specification<_i_in._T_Range>
}

export namespace _T_Types {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Types<_i_in._T_Range>
}

// *** ALIASES FOR NESTED TYPES

export namespace Benchmark {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Benchmark<_i_in._T_Range>
}

export namespace Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Constraint<_i_in._T_Range>
}

export namespace Dictionary {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Dictionary<_i_in._T_Range>
}

export namespace Globals {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Globals<_i_in._T_Range>
}

export namespace Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Group<_i_in._T_Range>
}

export namespace Guaranteed_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Guaranteed_Value_Selection<_i_in._T_Range>
}

export namespace Imports {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Imports<_i_in._T_Range>
}

export namespace Lookup_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Lookup_Selection<_i_in._T_Range>
}

export namespace Node_Resolver {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Node_Resolver<_i_in._T_Range>
}

export namespace Node_Resolver_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Node_Resolver_Group<_i_in._T_Range>
}

export namespace Node_Resolver_List_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Node_Resolver_List_Result<_i_in._T_Range>
}

export namespace Number_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Number_Type<_i_in._T_Range>
}

export namespace Option_Constraints {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Option_Constraints<_i_in._T_Range>
}

export namespace Optional_Value_Initialization {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Optional_Value_Initialization<_i_in._T_Range>
}

export namespace Possible_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Possible_Value_Selection<_i_in._T_Range>
}

export namespace Presence {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Presence<_i_in._T_Range>
}

export namespace Property_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Property_Constraint<_i_in._T_Range>
}

export namespace Property_Constraints {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Property_Constraints<_i_in._T_Range>
}

export namespace Reference_To_Property_Constraint {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Reference_To_Property_Constraint<_i_in._T_Range>
}

export namespace Relative_Value_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Relative_Value_Selection<_i_in._T_Range>
}

export namespace Resolve_Logic {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Resolve_Logic<_i_in._T_Range>
}

export namespace Resolvers {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Resolvers<_i_in._T_Range>
}

export namespace Schema {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schema<_i_in._T_Range>
}

export namespace Schema_Tree {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schema_Tree<_i_in._T_Range>
}

export namespace Schemas {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schemas<_i_in._T_Range>
}

export namespace Signature {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Signature<_i_in._T_Range>
}

export namespace Signature_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Signature_Parameters<_i_in._T_Range>
}

export namespace Signatures {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Signatures<_i_in._T_Range>
}

export namespace Text_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Text_Type<_i_in._T_Range>
}

export namespace Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type<_i_in._T_Range>
}

export namespace Type_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Node<_i_in._T_Range>
}

export namespace Type_Node_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Node_Reference<_i_in._T_Range>
}

export namespace Type_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Parameters<_i_in._T_Range>
}

export namespace Type_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Reference<_i_in._T_Range>
}

export namespace Type_Specification {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Specification<_i_in._T_Range>
}

export namespace Types {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Types<_i_in._T_Range>
}
