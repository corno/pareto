    import * as _p from 'pareto-core-serializer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/schema/serialize"
    import * as _i_serialize from "../../generic/serialize"
    import * as _i_marshall from "./marshall"
    
    
    export const Text_Type: _i_signatures._T_Text_Type = ($, $p) => _i_serialize.Document(
        _i_marshall.Text_Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Number_Type: _i_signatures._T_Number_Type = ($, $p) => _i_serialize.Document(
        _i_marshall.Number_Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Globals: _i_signatures._T_Globals = ($, $p) => _i_serialize.Document(
        _i_marshall.Globals(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Presence: _i_signatures._T_Presence = ($, $p) => _i_serialize.Document(
        _i_marshall.Presence(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => _i_serialize.Document(
        _i_marshall.Type_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Type: _i_signatures._T_Type = ($, $p) => _i_serialize.Document(
        _i_marshall.Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Types: _i_signatures._T_Types = ($, $p) => _i_serialize.Document(
        _i_marshall.Types(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Dictionary: _i_signatures._T_Dictionary = ($, $p) => _i_serialize.Document(
        _i_marshall.Dictionary(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Signatures: _i_signatures._T_Signatures = ($, $p) => _i_serialize.Document(
        _i_marshall.Signatures(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Resolvers: _i_signatures._T_Resolvers = ($, $p) => _i_serialize.Document(
        _i_marshall.Resolvers(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Resolve_Logic: _i_signatures._T_Resolve_Logic = ($, $p) => _i_serialize.Document(
        _i_marshall.Resolve_Logic(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Group: _i_signatures._T_Group = ($, $p) => _i_serialize.Document(
        _i_marshall.Group(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Schema: _i_signatures._T_Schema = ($, $p) => _i_serialize.Document(
        _i_marshall.Schema(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => _i_serialize.Document(
        _i_marshall.Schema_Tree(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Schemas: _i_signatures._T_Schemas = ($, $p) => _i_serialize.Document(
        _i_marshall.Schemas(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Imports: _i_signatures._T_Imports = ($, $p) => _i_serialize.Document(
        _i_marshall.Imports(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => _i_serialize.Document(
        _i_marshall.Type_Node(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Type_Reference: _i_signatures._T_Type_Reference = ($, $p) => _i_serialize.Document(
        _i_marshall.Type_Reference(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Type_Node_Reference: _i_signatures._T_Type_Node_Reference = ($, $p) => _i_serialize.Document(
        _i_marshall.Type_Node_Reference(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Signature_Parameters: _i_signatures._T_Signature_Parameters = ($, $p) => _i_serialize.Document(
        _i_marshall.Signature_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Signature: _i_signatures._T_Signature = ($, $p) => _i_serialize.Document(
        _i_marshall.Signature(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Relative_Value_Selection: _i_signatures._T_Relative_Value_Selection = ($, $p) => _i_serialize.Document(
        _i_marshall.Relative_Value_Selection(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Lookup_Selection: _i_signatures._T_Lookup_Selection = ($, $p) => _i_serialize.Document(
        _i_marshall.Lookup_Selection(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Constraint: _i_signatures._T_Constraint = ($, $p) => _i_serialize.Document(
        _i_marshall.Constraint(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Option_Constraints: _i_signatures._T_Option_Constraints = ($, $p) => _i_serialize.Document(
        _i_marshall.Option_Constraints(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Property_Constraints: _i_signatures._T_Property_Constraints = ($, $p) => _i_serialize.Document(
        _i_marshall.Property_Constraints(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Reference_To_Property_Constraint: _i_signatures._T_Reference_To_Property_Constraint = ($, $p) => _i_serialize.Document(
        _i_marshall.Reference_To_Property_Constraint(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Property_Constraint: _i_signatures._T_Property_Constraint = ($, $p) => _i_serialize.Document(
        _i_marshall.Property_Constraint(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Optional_Value_Initialization: _i_signatures._T_Optional_Value_Initialization = ($, $p) => _i_serialize.Document(
        _i_marshall.Optional_Value_Initialization(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Node_Resolver_Group: _i_signatures._T_Node_Resolver_Group = ($, $p) => _i_serialize.Document(
        _i_marshall.Node_Resolver_Group(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Node_Resolver_List_Result: _i_signatures._T_Node_Resolver_List_Result = ($, $p) => _i_serialize.Document(
        _i_marshall.Node_Resolver_List_Result(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Benchmark: _i_signatures._T_Benchmark = ($, $p) => _i_serialize.Document(
        _i_marshall.Benchmark(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Type_Specification: _i_signatures._T_Type_Specification = ($, $p) => _i_serialize.Document(
        _i_marshall.Type_Specification(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Node_Resolver: _i_signatures._T_Node_Resolver = ($, $p) => _i_serialize.Document(
        _i_marshall.Node_Resolver(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Guaranteed_Value_Selection: _i_signatures._T_Guaranteed_Value_Selection = ($, $p) => _i_serialize.Document(
        _i_marshall.Guaranteed_Value_Selection(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Possible_Value_Selection: _i_signatures._T_Possible_Value_Selection = ($, $p) => _i_serialize.Document(
        _i_marshall.Possible_Value_Selection(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
