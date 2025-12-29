import * as _et from 'pareto-core-interface'

import * as _i_resolve from "../../../core/resolve"
import * as _i_resolved from "./source"
import * as _i_unresolved from "./target"

// **** TYPES

export type _T_Benchmark = <F_Source>(
    $$_: _i_unresolved._T_Benchmark<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Benchmark

export type _T_Constraint = <F_Source>(
    $$_: _i_unresolved._T_Constraint<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
    },
) => _i_resolved._T_Constraint

export type _T_Dictionary = <F_Source>(
    $$_: _i_unresolved._T_Dictionary<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
    },
) => _i_resolved._T_Dictionary

export type _T_Globals = <F_Source>(
    $$_: _i_unresolved._T_Globals<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Globals

export type _T_Group = <F_Source>(
    $$_: _i_unresolved._T_Group<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
    },
) => _i_resolved._T_Group

export type _T_Guaranteed_Value_Selection = <F_Source>(
    $$_: _i_unresolved._T_Guaranteed_Value_Selection<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Guaranteed_Value_Selection

export type _T_Imports = <F_Source>(
    $$_: _i_unresolved._T_Imports<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Imports

export type _T_Lookup_Selection = <F_Source>(
    $$_: _i_unresolved._T_Lookup_Selection<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Lookup_Selection

export type _T_Node_Resolver = <F_Source>(
    $$_: _i_unresolved._T_Node_Resolver<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Node_Resolver

export type _T_Node_Resolver_Group = <F_Source>(
    $$_: _i_unresolved._T_Node_Resolver_Group<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Group
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Node_Resolver_Group

export type _T_Node_Resolver_List_Result = <F_Source>(
    $$_: _i_unresolved._T_Node_Resolver_List_Result<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    },
) => _i_resolved._T_Node_Resolver_List_Result

export type _T_Number_Type = <F_Source>(
    $$_: _i_unresolved._T_Number_Type<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Number_Type

export type _T_Option_Constraints = <F_Source>(
    $$_: _i_unresolved._T_Option_Constraints<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Option_Constraints

export type _T_Optional_Value_Initialization = <F_Source>(
    $$_: _i_unresolved._T_Optional_Value_Initialization<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Optional_Value_Initialization

export type _T_Possible_Value_Selection = <F_Source>(
    $$_: _i_unresolved._T_Possible_Value_Selection<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Possible_Value_Selection

export type _T_Presence = <F_Source>(
    $$_: _i_unresolved._T_Presence<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Presence

export type _T_Property_Constraint = <F_Source>(
    $$_: _i_unresolved._T_Property_Constraint<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'property constraints': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Property_Constraint

export type _T_Property_Constraints = <F_Source>(
    $$_: _i_unresolved._T_Property_Constraints<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
    },
) => _i_resolved._T_Property_Constraints

export type _T_Reference_To_Property_Constraint = <F_Source>(
    $$_: _i_unresolved._T_Reference_To_Property_Constraint<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'property constraints': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Reference_To_Property_Constraint

export type _T_Relative_Value_Selection = <F_Source>(
    $$_: _i_unresolved._T_Relative_Value_Selection<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
    },
) => _i_resolved._T_Relative_Value_Selection

export type _T_Resolve_Logic = <F_Source>(
    $$_: _i_unresolved._T_Resolve_Logic<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Resolve_Logic

export type _T_Resolvers = <F_Source>(
    $$_: _i_unresolved._T_Resolvers<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Resolvers

export type _T_Schema = <F_Source>(
    $$_: _i_unresolved._T_Schema<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Schema

export type _T_Schema_Tree = <F_Source>(
    $$_: _i_unresolved._T_Schema_Tree<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Schema_Tree

export type _T_Schemas = <F_Source>(
    $$_: _i_unresolved._T_Schemas<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Schemas

export type _T_Signature = <F_Source>(
    $$_: _i_unresolved._T_Signature<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'sibling signatures': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Signatures.D>
            }
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'type': _i_resolved._T_Type
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Signature

export type _T_Signature_Parameters = <F_Source>(
    $$_: _i_unresolved._T_Signature_Parameters<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Signature_Parameters

export type _T_Signatures = <F_Source>(
    $$_: _i_unresolved._T_Signatures<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
    },
) => _i_resolved._T_Signatures

export type _T_Text_Type = <F_Source>(
    $$_: _i_unresolved._T_Text_Type<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Text_Type

export type _T_Type = <F_Source>(
    $$_: _i_unresolved._T_Type<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    },
) => _i_resolved._T_Type

export type _T_Type_Node = <F_Source>(
    $$_: _i_unresolved._T_Type_Node<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
    },
) => _i_resolved._T_Type_Node

export type _T_Type_Node_Reference = <F_Source>(
    $$_: _i_unresolved._T_Type_Node_Reference<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    },
) => _i_resolved._T_Type_Node_Reference

export type _T_Type_Parameters = <F_Source>(
    $$_: _i_unresolved._T_Type_Parameters<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Type_Parameters

export type _T_Type_Reference = <F_Source>(
    $$_: _i_unresolved._T_Type_Reference<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    },
) => _i_resolved._T_Type_Reference

export type _T_Type_Specification = <F_Source>(
    $$_: _i_unresolved._T_Type_Specification<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Type_Specification

export type _T_Types = <F_Source>(
    $$_: _i_unresolved._T_Types<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    },
) => _i_resolved._T_Types

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
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Benchmark<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Benchmark
}

export namespace _T_Constraint {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Constraint<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace node {
                }
                export type node<F_Source> = _i_resolved._T_Type_Node
            }
            export type values<F_Source> = {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Constraint
}

export namespace _T_Dictionary {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Dictionary<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _et.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace type_parameters {
                }
                export type type_parameters<F_Source> = _i_resolved._T_Type_Parameters
            }
            export type values<F_Source> = {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Dictionary
}

export namespace _T_Globals {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Globals<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Globals
}

export namespace _T_Group {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Group<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _et.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace type_parameters {
                }
                export type type_parameters<F_Source> = _i_resolved._T_Type_Parameters
            }
            export type values<F_Source> = {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Group
}

export namespace _T_Guaranteed_Value_Selection {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Guaranteed_Value_Selection<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Guaranteed_Value_Selection
}

export namespace _T_Imports {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Imports<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Imports
}

export namespace _T_Lookup_Selection {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Lookup_Selection<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Lookup_Selection
}

export namespace _T_Node_Resolver {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Node_Resolver<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Node_Resolver
}

export namespace _T_Node_Resolver_Group {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Node_Resolver_Group<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Group
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Group
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Group
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Node_Resolver_Group
}

export namespace _T_Node_Resolver_List_Result {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Node_Resolver_List_Result<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Node_Resolver_List_Result
}

export namespace _T_Number_Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Number_Type<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Number_Type
}

export namespace _T_Option_Constraints {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Option_Constraints<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Option_Constraints
}

export namespace _T_Optional_Value_Initialization {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Optional_Value_Initialization<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Optional_Value_Initialization
}

export namespace _T_Possible_Value_Selection {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Possible_Value_Selection<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Possible_Value_Selection
}

export namespace _T_Presence {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Presence<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Presence
}

export namespace _T_Property_Constraint {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Property_Constraint<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace property_constraints {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Property_Constraints.D
                }
                export type property_constraints<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            export type lookups<F_Source> = {
                readonly 'property constraints': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'property constraints': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Property_Constraint
}

export namespace _T_Property_Constraints {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Property_Constraints<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace node {
                }
                export type node<F_Source> = _i_resolved._T_Type_Node
            }
            export type values<F_Source> = {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Property_Constraints
}

export namespace _T_Reference_To_Property_Constraint {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Reference_To_Property_Constraint<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace property_constraints {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Property_Constraints.D
                }
                export type property_constraints<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            export type lookups<F_Source> = {
                readonly 'property constraints': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'property constraints': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Reference_To_Property_Constraint
}

export namespace _T_Relative_Value_Selection {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Relative_Value_Selection<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace node {
                }
                export type node<F_Source> = _i_resolved._T_Type_Node
            }
            export type values<F_Source> = {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Relative_Value_Selection
}

export namespace _T_Resolve_Logic {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Resolve_Logic<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace imports {
                }
                export type imports<F_Source> = _i_resolved._T_Imports
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Resolve_Logic
}

export namespace _T_Resolvers {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Resolvers<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace imports {
                }
                export type imports<F_Source> = _i_resolved._T_Imports
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Resolvers
}

export namespace _T_Schema {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schema<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schema
}

export namespace _T_Schema_Tree {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schema_Tree<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schema_Tree
}

export namespace _T_Schemas {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schemas<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schemas
}

export namespace _T_Signature {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Signature<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_signatures {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Signatures.D
                }
                export type sibling_signatures<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Signatures.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling signatures': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Signatures.D>
            }
            
            export namespace values {
                
                export namespace imports {
                }
                export type imports<F_Source> = _i_resolved._T_Imports
                
                export namespace _type {
                }
                export type _type<F_Source> = _i_resolved._T_Type
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'type': _i_resolved._T_Type
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling signatures': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Signatures.D>
            }
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'type': _i_resolved._T_Type
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Signature
}

export namespace _T_Signature_Parameters {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Signature_Parameters<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace imports {
                }
                export type imports<F_Source> = _i_resolved._T_Imports
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Signature_Parameters
}

export namespace _T_Signatures {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Signatures<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace imports {
                }
                export type imports<F_Source> = _i_resolved._T_Imports
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Signatures
}

export namespace _T_Text_Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Text_Type<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Text_Type
}

export namespace _T_Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _et.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type
}

export namespace _T_Type_Node {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Node<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _et.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace type_parameters {
                }
                export type type_parameters<F_Source> = _i_resolved._T_Type_Parameters
            }
            export type values<F_Source> = {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Node
}

export namespace _T_Type_Node_Reference {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Node_Reference<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Node_Reference
}

export namespace _T_Type_Parameters {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Parameters<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Parameters
}

export namespace _T_Type_Reference {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Reference<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Reference
}

export namespace _T_Type_Specification {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Specification<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Specification
}

export namespace _T_Types {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Types<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _et.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Types
}

// *** ALIASES FOR NESTED TYPES

export namespace Benchmark {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Benchmark<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Benchmark
}

export namespace Constraint {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Constraint<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace node {
                }
                export type node<F_Source> = _i_resolved._T_Type_Node
            }
            export type values<F_Source> = {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Constraint
}

export namespace Dictionary {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Dictionary<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _et.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace type_parameters {
                }
                export type type_parameters<F_Source> = _i_resolved._T_Type_Parameters
            }
            export type values<F_Source> = {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Dictionary
}

export namespace Globals {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Globals<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Globals
}

export namespace Group {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Group<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _et.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace type_parameters {
                }
                export type type_parameters<F_Source> = _i_resolved._T_Type_Parameters
            }
            export type values<F_Source> = {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Group
}

export namespace Guaranteed_Value_Selection {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Guaranteed_Value_Selection<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Guaranteed_Value_Selection
}

export namespace Imports {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Imports<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Imports
}

export namespace Lookup_Selection {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Lookup_Selection<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Lookup_Selection
}

export namespace Node_Resolver {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Node_Resolver<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Node_Resolver
}

export namespace Node_Resolver_Group {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Node_Resolver_Group<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Group
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Group
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Group
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Node_Resolver_Group
}

export namespace Node_Resolver_List_Result {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Node_Resolver_List_Result<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Node_Resolver_List_Result
}

export namespace Number_Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Number_Type<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Number_Type
}

export namespace Option_Constraints {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Option_Constraints<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Option_Constraints
}

export namespace Optional_Value_Initialization {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Optional_Value_Initialization<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Optional_Value_Initialization
}

export namespace Possible_Value_Selection {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Possible_Value_Selection<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace parent_sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type parent_sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                
                export namespace sibling_property_resolvers {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Node_Resolver_Group.D
                }
                export type sibling_property_resolvers<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            export type lookups<F_Source> = {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            
            export namespace values {
                
                export namespace current_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace current_ordered_dictionary {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Dictionary
                }
                export type current_ordered_dictionary<F_Source> = _et.Optional_Value<_i_resolved._T_Dictionary>
                
                export namespace definition {
                }
                export type definition<F_Source> = _i_resolved._T_Type_Node
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace linked_entry {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Benchmark
                }
                export type linked_entry<F_Source> = _et.Optional_Value<_i_resolved._T_Benchmark>
                
                export namespace list_cursor {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Node_Resolver_List_Result
                }
                export type list_cursor<F_Source> = _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                
                export namespace option_constraints {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Option_Constraints
                }
                export type option_constraints<F_Source> = _et.Optional_Value<_i_resolved._T_Option_Constraints>
                
                export namespace signature {
                }
                export type signature<F_Source> = _i_resolved._T_Signature
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'parent sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
                readonly 'sibling property resolvers': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Node_Resolver_Group.D>
            }
            readonly 'values': {
                readonly 'current dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'current ordered dictionary': _et.Optional_Value<_i_resolved._T_Dictionary>
                readonly 'definition': _i_resolved._T_Type_Node
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'linked entry': _et.Optional_Value<_i_resolved._T_Benchmark>
                readonly 'list cursor': _et.Optional_Value<_i_resolved._T_Node_Resolver_List_Result>
                readonly 'option constraints': _et.Optional_Value<_i_resolved._T_Option_Constraints>
                readonly 'signature': _i_resolved._T_Signature
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Possible_Value_Selection
}

export namespace Presence {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Presence<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Presence
}

export namespace Property_Constraint {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Property_Constraint<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace property_constraints {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Property_Constraints.D
                }
                export type property_constraints<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            export type lookups<F_Source> = {
                readonly 'property constraints': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'property constraints': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Property_Constraint
}

export namespace Property_Constraints {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Property_Constraints<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace node {
                }
                export type node<F_Source> = _i_resolved._T_Type_Node
            }
            export type values<F_Source> = {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Property_Constraints
}

export namespace Reference_To_Property_Constraint {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Reference_To_Property_Constraint<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace property_constraints {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Property_Constraints.D
                }
                export type property_constraints<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            export type lookups<F_Source> = {
                readonly 'property constraints': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'property constraints': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Property_Constraints.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Reference_To_Property_Constraint
}

export namespace Relative_Value_Selection {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Relative_Value_Selection<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace node {
                }
                export type node<F_Source> = _i_resolved._T_Type_Node
            }
            export type values<F_Source> = {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'node': _i_resolved._T_Type_Node
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Relative_Value_Selection
}

export namespace Resolve_Logic {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Resolve_Logic<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace imports {
                }
                export type imports<F_Source> = _i_resolved._T_Imports
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Resolve_Logic
}

export namespace Resolvers {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Resolvers<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace imports {
                }
                export type imports<F_Source> = _i_resolved._T_Imports
                
                export namespace signatures {
                }
                export type signatures<F_Source> = _i_resolved._T_Signatures
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'signatures': _i_resolved._T_Signatures
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Resolvers
}

export namespace Schema {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schema<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schema
}

export namespace Schema_Tree {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schema_Tree<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schema_Tree
}

export namespace Schemas {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schemas<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schemas
}

export namespace Signature {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Signature<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_signatures {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Signatures.D
                }
                export type sibling_signatures<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Signatures.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling signatures': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Signatures.D>
            }
            
            export namespace values {
                
                export namespace imports {
                }
                export type imports<F_Source> = _i_resolved._T_Imports
                
                export namespace _type {
                }
                export type _type<F_Source> = _i_resolved._T_Type
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'type': _i_resolved._T_Type
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling signatures': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Signatures.D>
            }
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'type': _i_resolved._T_Type
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Signature
}

export namespace Signature_Parameters {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Signature_Parameters<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace imports {
                }
                export type imports<F_Source> = _i_resolved._T_Imports
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Signature_Parameters
}

export namespace Signatures {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Signatures<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace imports {
                }
                export type imports<F_Source> = _i_resolved._T_Imports
                
                export namespace types {
                }
                export type types<F_Source> = _i_resolved._T_Types
            }
            export type values<F_Source> = {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'imports': _i_resolved._T_Imports
                readonly 'types': _i_resolved._T_Types
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Signatures
}

export namespace Text_Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Text_Type<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Text_Type
}

export namespace Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _et.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type
}

export namespace Type_Node {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Node<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _et.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
                
                export namespace type_parameters {
                }
                export type type_parameters<F_Source> = _i_resolved._T_Type_Parameters
            }
            export type values<F_Source> = {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
                readonly 'type parameters': _i_resolved._T_Type_Parameters
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Node
}

export namespace Type_Node_Reference {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Node_Reference<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Node_Reference
}

export namespace Type_Parameters {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Parameters<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Parameters
}

export namespace Type_Reference {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Reference<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Reference
}

export namespace Type_Specification {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Specification<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Specification
}

export namespace Types {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Types<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _et.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _et.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'globals': _et.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _et.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Types
}
