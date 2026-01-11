import * as _pi from "pareto-core-interface"
    
    import * as _i_out from "./data_types/target"
    import * as _i_in from "./data_types/source"
    
    // **** TYPES
    
    export type _T_Text_Type = (
        $$_: _i_in._T_Text_Type,
        $$_p: null,
    ) => _i_out._T_Text_Type<null>
    
    export type _T_Number_Type = (
        $$_: _i_in._T_Number_Type,
        $$_p: null,
    ) => _i_out._T_Number_Type<null>
    
    export type _T_Globals = (
        $$_: _i_in._T_Globals,
        $$_p: null,
    ) => _i_out._T_Globals<null>
    
    export type _T_Presence = (
        $$_: _i_in._T_Presence,
        $$_p: null,
    ) => _i_out._T_Presence<null>
    
    export type _T_Type_Parameters = (
        $$_: _i_in._T_Type_Parameters,
        $$_p: null,
    ) => _i_out._T_Type_Parameters<null>
    
    export type _T_Type = (
        $$_: _i_in._T_Type,
        $$_p: null,
    ) => _i_out._T_Type<null>
    
    export type _T_Types = (
        $$_: _i_in._T_Types,
        $$_p: null,
    ) => _i_out._T_Types<null>
    
    export type _T_Dictionary = (
        $$_: _i_in._T_Dictionary,
        $$_p: null,
    ) => _i_out._T_Dictionary<null>
    
    export type _T_Signatures = (
        $$_: _i_in._T_Signatures,
        $$_p: null,
    ) => _i_out._T_Signatures<null>
    
    export type _T_Resolvers = (
        $$_: _i_in._T_Resolvers,
        $$_p: null,
    ) => _i_out._T_Resolvers<null>
    
    export type _T_Resolve_Logic = (
        $$_: _i_in._T_Resolve_Logic,
        $$_p: null,
    ) => _i_out._T_Resolve_Logic<null>
    
    export type _T_Group = (
        $$_: _i_in._T_Group,
        $$_p: null,
    ) => _i_out._T_Group<null>
    
    export type _T_Schema = (
        $$_: _i_in._T_Schema,
        $$_p: null,
    ) => _i_out._T_Schema<null>
    
    export type _T_Schema_Tree = (
        $$_: _i_in._T_Schema_Tree,
        $$_p: null,
    ) => _i_out._T_Schema_Tree<null>
    
    export type _T_Schemas = (
        $$_: _i_in._T_Schemas,
        $$_p: null,
    ) => _i_out._T_Schemas<null>
    
    export type _T_Imports = (
        $$_: _i_in._T_Imports,
        $$_p: null,
    ) => _i_out._T_Imports<null>
    
    export type _T_Type_Node = (
        $$_: _i_in._T_Type_Node,
        $$_p: null,
    ) => _i_out._T_Type_Node<null>
    
    export type _T_Type_Reference = (
        $$_: _i_in._T_Type_Reference,
        $$_p: null,
    ) => _i_out._T_Type_Reference<null>
    
    export type _T_Type_Node_Reference = (
        $$_: _i_in._T_Type_Node_Reference,
        $$_p: null,
    ) => _i_out._T_Type_Node_Reference<null>
    
    export type _T_Signature_Parameters = (
        $$_: _i_in._T_Signature_Parameters,
        $$_p: null,
    ) => _i_out._T_Signature_Parameters<null>
    
    export type _T_Signature = (
        $$_: _i_in._T_Signature,
        $$_p: null,
    ) => _i_out._T_Signature<null>
    
    export type _T_Relative_Value_Selection = (
        $$_: _i_in._T_Relative_Value_Selection,
        $$_p: null,
    ) => _i_out._T_Relative_Value_Selection<null>
    
    export type _T_Lookup_Selection = (
        $$_: _i_in._T_Lookup_Selection,
        $$_p: null,
    ) => _i_out._T_Lookup_Selection<null>
    
    export type _T_Constraint = (
        $$_: _i_in._T_Constraint,
        $$_p: null,
    ) => _i_out._T_Constraint<null>
    
    export type _T_Option_Constraints = (
        $$_: _i_in._T_Option_Constraints,
        $$_p: null,
    ) => _i_out._T_Option_Constraints<null>
    
    export type _T_Property_Constraints = (
        $$_: _i_in._T_Property_Constraints,
        $$_p: null,
    ) => _i_out._T_Property_Constraints<null>
    
    export type _T_Reference_To_Property_Constraint = (
        $$_: _i_in._T_Reference_To_Property_Constraint,
        $$_p: null,
    ) => _i_out._T_Reference_To_Property_Constraint<null>
    
    export type _T_Property_Constraint = (
        $$_: _i_in._T_Property_Constraint,
        $$_p: null,
    ) => _i_out._T_Property_Constraint<null>
    
    export type _T_Optional_Value_Initialization = (
        $$_: _i_in._T_Optional_Value_Initialization,
        $$_p: null,
    ) => _i_out._T_Optional_Value_Initialization<null>
    
    export type _T_Node_Resolver_Group = (
        $$_: _i_in._T_Node_Resolver_Group,
        $$_p: null,
    ) => _i_out._T_Node_Resolver_Group<null>
    
    export type _T_Node_Resolver_List_Result = (
        $$_: _i_in._T_Node_Resolver_List_Result,
        $$_p: null,
    ) => _i_out._T_Node_Resolver_List_Result<null>
    
    export type _T_Benchmark = (
        $$_: _i_in._T_Benchmark,
        $$_p: null,
    ) => _i_out._T_Benchmark<null>
    
    export type _T_Type_Specification = (
        $$_: _i_in._T_Type_Specification,
        $$_p: null,
    ) => _i_out._T_Type_Specification<null>
    
    export type _T_Node_Resolver = (
        $$_: _i_in._T_Node_Resolver,
        $$_p: null,
    ) => _i_out._T_Node_Resolver<null>
    
    export type _T_Guaranteed_Value_Selection = (
        $$_: _i_in._T_Guaranteed_Value_Selection,
        $$_p: null,
    ) => _i_out._T_Guaranteed_Value_Selection<null>
    
    export type _T_Possible_Value_Selection = (
        $$_: _i_in._T_Possible_Value_Selection,
        $$_p: null,
    ) => _i_out._T_Possible_Value_Selection<null>
    
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
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Text_Type
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Text_Type<null>
    }
    
    export namespace _T_Number_Type {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Number_Type
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Number_Type<null>
    }
    
    export namespace _T_Globals {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Globals
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Globals<null>
    }
    
    export namespace _T_Presence {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Presence
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Presence<null>
    }
    
    export namespace _T_Type_Parameters {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type_Parameters
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type_Parameters<null>
    }
    
    export namespace _T_Type {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type<null>
    }
    
    export namespace _T_Types {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Types
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Types<null>
    }
    
    export namespace _T_Dictionary {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Dictionary
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Dictionary<null>
    }
    
    export namespace _T_Signatures {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Signatures
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Signatures<null>
    }
    
    export namespace _T_Resolvers {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Resolvers
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Resolvers<null>
    }
    
    export namespace _T_Resolve_Logic {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Resolve_Logic
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Resolve_Logic<null>
    }
    
    export namespace _T_Group {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Group
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Group<null>
    }
    
    export namespace _T_Schema {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Schema
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Schema<null>
    }
    
    export namespace _T_Schema_Tree {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Schema_Tree
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Schema_Tree<null>
    }
    
    export namespace _T_Schemas {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Schemas
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Schemas<null>
    }
    
    export namespace _T_Imports {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Imports
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Imports<null>
    }
    
    export namespace _T_Type_Node {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type_Node
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type_Node<null>
    }
    
    export namespace _T_Type_Reference {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type_Reference
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type_Reference<null>
    }
    
    export namespace _T_Type_Node_Reference {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type_Node_Reference
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type_Node_Reference<null>
    }
    
    export namespace _T_Signature_Parameters {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Signature_Parameters
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Signature_Parameters<null>
    }
    
    export namespace _T_Signature {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Signature
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Signature<null>
    }
    
    export namespace _T_Relative_Value_Selection {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Relative_Value_Selection
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Relative_Value_Selection<null>
    }
    
    export namespace _T_Lookup_Selection {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Lookup_Selection
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Lookup_Selection<null>
    }
    
    export namespace _T_Constraint {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Constraint
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Constraint<null>
    }
    
    export namespace _T_Option_Constraints {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Option_Constraints
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Option_Constraints<null>
    }
    
    export namespace _T_Property_Constraints {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Property_Constraints
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Property_Constraints<null>
    }
    
    export namespace _T_Reference_To_Property_Constraint {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Reference_To_Property_Constraint
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Reference_To_Property_Constraint<null>
    }
    
    export namespace _T_Property_Constraint {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Property_Constraint
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Property_Constraint<null>
    }
    
    export namespace _T_Optional_Value_Initialization {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Optional_Value_Initialization
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Optional_Value_Initialization<null>
    }
    
    export namespace _T_Node_Resolver_Group {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Node_Resolver_Group
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Node_Resolver_Group<null>
    }
    
    export namespace _T_Node_Resolver_List_Result {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Node_Resolver_List_Result
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Node_Resolver_List_Result<null>
    }
    
    export namespace _T_Benchmark {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Benchmark
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Benchmark<null>
    }
    
    export namespace _T_Type_Specification {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type_Specification
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type_Specification<null>
    }
    
    export namespace _T_Node_Resolver {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Node_Resolver
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Node_Resolver<null>
    }
    
    export namespace _T_Guaranteed_Value_Selection {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Guaranteed_Value_Selection
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Guaranteed_Value_Selection<null>
    }
    
    export namespace _T_Possible_Value_Selection {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Possible_Value_Selection
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Possible_Value_Selection<null>
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Text_Type {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Text_Type
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Text_Type<null>
    }
    
    export namespace Number_Type {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Number_Type
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Number_Type<null>
    }
    
    export namespace Globals {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Globals
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Globals<null>
    }
    
    export namespace Presence {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Presence
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Presence<null>
    }
    
    export namespace Type_Parameters {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type_Parameters
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type_Parameters<null>
    }
    
    export namespace Type {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type<null>
    }
    
    export namespace Types {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Types
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Types<null>
    }
    
    export namespace Dictionary {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Dictionary
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Dictionary<null>
    }
    
    export namespace Signatures {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Signatures
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Signatures<null>
    }
    
    export namespace Resolvers {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Resolvers
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Resolvers<null>
    }
    
    export namespace Resolve_Logic {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Resolve_Logic
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Resolve_Logic<null>
    }
    
    export namespace Group {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Group
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Group<null>
    }
    
    export namespace Schema {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Schema
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Schema<null>
    }
    
    export namespace Schema_Tree {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Schema_Tree
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Schema_Tree<null>
    }
    
    export namespace Schemas {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Schemas
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Schemas<null>
    }
    
    export namespace Imports {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Imports
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Imports<null>
    }
    
    export namespace Type_Node {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type_Node
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type_Node<null>
    }
    
    export namespace Type_Reference {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type_Reference
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type_Reference<null>
    }
    
    export namespace Type_Node_Reference {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type_Node_Reference
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type_Node_Reference<null>
    }
    
    export namespace Signature_Parameters {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Signature_Parameters
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Signature_Parameters<null>
    }
    
    export namespace Signature {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Signature
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Signature<null>
    }
    
    export namespace Relative_Value_Selection {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Relative_Value_Selection
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Relative_Value_Selection<null>
    }
    
    export namespace Lookup_Selection {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Lookup_Selection
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Lookup_Selection<null>
    }
    
    export namespace Constraint {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Constraint
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Constraint<null>
    }
    
    export namespace Option_Constraints {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Option_Constraints
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Option_Constraints<null>
    }
    
    export namespace Property_Constraints {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Property_Constraints
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Property_Constraints<null>
    }
    
    export namespace Reference_To_Property_Constraint {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Reference_To_Property_Constraint
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Reference_To_Property_Constraint<null>
    }
    
    export namespace Property_Constraint {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Property_Constraint
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Property_Constraint<null>
    }
    
    export namespace Optional_Value_Initialization {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Optional_Value_Initialization
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Optional_Value_Initialization<null>
    }
    
    export namespace Node_Resolver_Group {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Node_Resolver_Group
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Node_Resolver_Group<null>
    }
    
    export namespace Node_Resolver_List_Result {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Node_Resolver_List_Result
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Node_Resolver_List_Result<null>
    }
    
    export namespace Benchmark {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Benchmark
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Benchmark<null>
    }
    
    export namespace Type_Specification {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Type_Specification
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Type_Specification<null>
    }
    
    export namespace Node_Resolver {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Node_Resolver
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Node_Resolver<null>
    }
    
    export namespace Guaranteed_Value_Selection {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Guaranteed_Value_Selection
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Guaranteed_Value_Selection<null>
    }
    
    export namespace Possible_Value_Selection {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Possible_Value_Selection
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Possible_Value_Selection<null>
    }
