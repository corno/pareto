    import * as _p from 'pareto-core-refiner'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_generic from "../../generic/unmarshall"
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/schema/unmarshall"
    import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
    import * as _i_out from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"
    
    
    export const Text_Type: _i_signatures._T_Text_Type = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'type': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "type",
                    }
                ), ($) => _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'multi line': ($): _i_out._T_Text_Type._type.SG<_i_in._T_Range> => ['multi line', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            'single line': ($): _i_out._T_Text_Type._type.SG<_i_in._T_Range> => ['single line', _i_generic.process_nothing(
                                $,
                                null
                            )],
                        }),
                    }
                )),
            }),
        }
    )
    export const Number_Type: _i_signatures._T_Number_Type = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'precision': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "precision",
                    }
                ), ($) => _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'approximation': ($): _i_out._T_Number_Type.precision.SG<_i_in._T_Range> => ['approximation', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'significant digits': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "significant digits",
                                            }
                                        ), ($) => _i_generic.process_number(
                                            $,
                                            {
                                                'deserializer': $p['value deserializers']['default number'],
                                            }
                                        )),
                                    }),
                                }
                            )],
                            'exact': ($): _i_out._T_Number_Type.precision.SG<_i_in._T_Range> => ['exact', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'decimal separator offset': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "decimal separator offset",
                                            }
                                        ), ($) => _i_generic.process_optional(
                                            $,
                                            {
                                                'value': ($) => _i_generic.process_number(
                                                    $,
                                                    {
                                                        'deserializer': $p['value deserializers']['default number'],
                                                    }
                                                ),
                                            }
                                        )),
                                        'type': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "type",
                                            }
                                        ), ($) => _i_generic.process_unresolved_state_group(
                                            $,
                                            {
                                                'states': _p.dictionary.literal({
                                                    'integer': ($): _i_out._T_Number_Type.precision.SG.exact._type.SG<_i_in._T_Range> => ['integer', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                    'natural': ($): _i_out._T_Number_Type.precision.SG.exact._type.SG<_i_in._T_Range> => ['natural', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                    'positive natural': ($): _i_out._T_Number_Type.precision.SG.exact._type.SG<_i_in._T_Range> => ['positive natural', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                }),
                                            }
                                        )),
                                    }),
                                }
                            )],
                        }),
                    }
                )),
            }),
        }
    )
    export const Globals: _i_signatures._T_Globals = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'complexity': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "complexity",
                    }
                ), ($) => _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'constrained': ($): _i_out._T_Globals.complexity.SG<_i_in._T_Range> => ['constrained', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            'unconstrained': ($): _i_out._T_Globals.complexity.SG<_i_in._T_Range> => ['unconstrained', _i_generic.process_nothing(
                                $,
                                null
                            )],
                        }),
                    }
                )),
                'text types': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "text types",
                    }
                ), ($) => _i_generic.process_unresolved_dictionary(
                    $,
                    {
                        'value': ($) => Text_Type(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        ),
                    }
                )),
                'number types': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "number types",
                    }
                ), ($) => _i_generic.process_unresolved_dictionary(
                    $,
                    {
                        'value': ($) => Number_Type(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        ),
                    }
                )),
            }),
        }
    )
    export const Presence: _i_signatures._T_Presence = ($, $p) => _i_generic.process_unresolved_state_group(
        $,
        {
            'states': _p.dictionary.literal({
                'optional': ($): _i_out._T_Presence.SG<_i_in._T_Range> => ['optional', _i_generic.process_nothing(
                    $,
                    null
                )],
                'required': ($): _i_out._T_Presence.SG<_i_in._T_Range> => ['required', _i_generic.process_nothing(
                    $,
                    null
                )],
            }),
        }
    )
    export const Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => _i_generic.process_unresolved_dictionary(
        $,
        {
            'value': ($) => _i_generic.process_nothing(
                $,
                null
            ),
        }
    )
    export const Type: _i_signatures._T_Type = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'type parameters': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "type parameters",
                    }
                ), ($) => Type_Parameters(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
                'node': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "node",
                    }
                ), ($) => Type_Node(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
            }),
        }
    )
    export const Types: _i_signatures._T_Types = ($, $p) => _i_generic.process_unresolved_dictionary(
        $,
        {
            'value': ($) => Type(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            ),
        }
    )
    export const Dictionary: _i_signatures._T_Dictionary = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'node': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "node",
                    }
                ), ($) => Type_Node(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
                'ordered': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "ordered",
                    }
                ), ($) => _i_generic.process_boolean(
                    $,
                    {
                        'deserializer': $p['value deserializers']['boolean'],
                    }
                )),
            }),
        }
    )
    export const Signatures: _i_signatures._T_Signatures = ($, $p) => _i_generic.process_unresolved_dictionary(
        $,
        {
            'value': ($) => Signature(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            ),
        }
    )
    export const Resolvers: _i_signatures._T_Resolvers = ($, $p) => _i_generic.process_unresolved_dictionary(
        $,
        {
            'value': ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'signature': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "signature",
                            }
                        ), ($) => _i_generic.process_derived_reference(
                            $,
                            null
                        )),
                        'type resolver': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "type resolver",
                            }
                        ), ($) => Node_Resolver(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            ),
        }
    )
    export const Resolve_Logic: _i_signatures._T_Resolve_Logic = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'signatures': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "signatures",
                    }
                ), ($) => _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'types': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "types",
                                }
                            ), ($) => Signatures(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )),
                        }),
                    }
                )),
                'resolvers': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "resolvers",
                    }
                ), ($) => Resolvers(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
            }),
        }
    )
    export const Group: _i_signatures._T_Group = ($, $p) => _i_generic.process_unresolved_dictionary(
        $,
        {
            'value': ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'description': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "description",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_generic.process_text(
                                    $,
                                    null
                                ),
                            }
                        )),
                        'node': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "node",
                            }
                        ), ($) => Type_Node(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            ),
        }
    )
    export const Schema: _i_signatures._T_Schema = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'imports': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "imports",
                    }
                ), ($) => Imports(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
                'globals': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "globals",
                    }
                ), ($) => Globals(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
                'types': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "types",
                    }
                ), ($) => Types(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
                'complexity': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "complexity",
                    }
                ), ($) => _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'constrained': ($): _i_out._T_Schema.complexity.SG<_i_in._T_Range> => ['constrained', Resolve_Logic(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )],
                            'unconstrained': ($): _i_out._T_Schema.complexity.SG<_i_in._T_Range> => ['unconstrained', _i_generic.process_nothing(
                                $,
                                null
                            )],
                        }),
                    }
                )),
            }),
        }
    )
    export const Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => _i_generic.process_unresolved_state_group(
        $,
        {
            'states': _p.dictionary.literal({
                'schema': ($): _i_out._T_Schema_Tree.SG<_i_in._T_Range> => ['schema', Schema(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                'set': ($): _i_out._T_Schema_Tree.SG<_i_in._T_Range> => ['set', Schemas(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
            }),
        }
    )
    export const Schemas: _i_signatures._T_Schemas = ($, $p) => _i_generic.process_unresolved_dictionary(
        $,
        {
            'value': ($) => Schema_Tree(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            ),
        }
    )
    export const Imports: _i_signatures._T_Imports = ($, $p) => _i_generic.process_unresolved_dictionary(
        $,
        {
            'value': ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'schema set child': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "schema set child",
                            }
                        ), ($) => _i_generic.process_stack_reference(
                            $,
                            null
                        )),
                        'schema': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "schema",
                            }
                        ), ($) => _i_generic.process_derived_reference(
                            $,
                            null
                        )),
                    }),
                }
            ),
        }
    )
    export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => _i_generic.process_unresolved_state_group(
        $,
        {
            'states': _p.dictionary.literal({
                'boolean': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['boolean', _i_generic.process_nothing(
                    $,
                    null
                )],
                'component': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['component', _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'external': ($): _i_out._T_Type_Node.SG.component.SG<_i_in._T_Range> => ['external', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'import': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "import",
                                            }
                                        ), ($) => _i_generic.process_selected_reference(
                                            $,
                                            null
                                        )),
                                        'type': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "type",
                                            }
                                        ), ($) => _i_generic.process_selected_reference(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            )],
                            'internal': ($): _i_out._T_Type_Node.SG.component.SG<_i_in._T_Range> => ['internal', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            'internal cyclic': ($): _i_out._T_Type_Node.SG.component.SG<_i_in._T_Range> => ['internal cyclic', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                        }),
                    }
                )],
                'dictionary': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['dictionary', Dictionary(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                'group': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['group', Group(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                'list': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['list', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'node': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "node",
                                }
                            ), ($) => Type_Node(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )),
                        }),
                    }
                )],
                'nothing': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['nothing', _i_generic.process_nothing(
                    $,
                    null
                )],
                'number': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['number', _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'global': ($): _i_out._T_Type_Node.SG._number.SG<_i_in._T_Range> => ['global', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            'local': ($): _i_out._T_Type_Node.SG._number.SG<_i_in._T_Range> => ['local', Number_Type(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )],
                        }),
                    }
                )],
                'optional': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['optional', Type_Node(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                'reference': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['reference', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'referent': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "referent",
                                }
                            ), ($) => Type_Node_Reference(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )),
                            'type': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "type",
                                }
                            ), ($) => _i_generic.process_unresolved_state_group(
                                $,
                                {
                                    'states': _p.dictionary.literal({
                                        'derived': ($): _i_out._T_Type_Node.SG.reference._type.SG<_i_in._T_Range> => ['derived', _i_generic.process_nothing(
                                            $,
                                            null
                                        )],
                                        'selected': ($): _i_out._T_Type_Node.SG.reference._type.SG<_i_in._T_Range> => ['selected', _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'dictionary': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "dictionary",
                                                        }
                                                    ), ($) => _i_generic.process_derived_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'dependency': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "dependency",
                                                        }
                                                    ), ($) => _i_generic.process_unresolved_state_group(
                                                        $,
                                                        {
                                                            'states': _p.dictionary.literal({
                                                                'acyclic': ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency.SG<_i_in._T_Range> => ['acyclic', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                'cyclic': ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency.SG<_i_in._T_Range> => ['cyclic', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                'stack': ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency.SG<_i_in._T_Range> => ['stack', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                            }),
                                                        }
                                                    )),
                                                }),
                                            }
                                        )],
                                    }),
                                }
                            )),
                        }),
                    }
                )],
                'state group': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['state group', _i_generic.process_unresolved_dictionary(
                    $,
                    {
                        'value': ($) => _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'description': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "description",
                                        }
                                    ), ($) => _i_generic.process_optional(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_text(
                                                $,
                                                null
                                            ),
                                        }
                                    )),
                                    'node': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "node",
                                        }
                                    ), ($) => Type_Node(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        ),
                    }
                )],
                'text': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['text', _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'global': ($): _i_out._T_Type_Node.SG.text.SG<_i_in._T_Range> => ['global', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            'local': ($): _i_out._T_Type_Node.SG.text.SG<_i_in._T_Range> => ['local', Text_Type(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )],
                        }),
                    }
                )],
            }),
        }
    )
    export const Type_Reference: _i_signatures._T_Type_Reference = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'location': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "location",
                    }
                ), ($) => _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'internal': ($): _i_out._T_Type_Reference.location.SG<_i_in._T_Range> => ['internal', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            'external': ($): _i_out._T_Type_Reference.location.SG<_i_in._T_Range> => ['external', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'import': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "import",
                                            }
                                        ), ($) => _i_generic.process_selected_reference(
                                            $,
                                            null
                                        )),
                                        'type': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "type",
                                            }
                                        ), ($) => _i_generic.process_selected_reference(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            )],
                        }),
                    }
                )),
                'resulting node': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "resulting node",
                    }
                ), ($) => _i_generic.process_derived_reference(
                    $,
                    null
                )),
            }),
        }
    )
    export const Type_Node_Reference: _i_signatures._T_Type_Node_Reference = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'type location': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "type location",
                    }
                ), ($) => Type_Reference(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
                'tail': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "tail",
                    }
                ), ($) => _i_generic.process_unresolved_list(
                    $,
                    {
                        'value': ($) => _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _p.dictionary.literal({
                                    'dictionary': ($): _i_out._T_Type_Node_Reference.tail.L.SG<_i_in._T_Range> => ['dictionary', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'group': ($): _i_out._T_Type_Node_Reference.tail.L.SG<_i_in._T_Range> => ['group', _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )],
                                    'list': ($): _i_out._T_Type_Node_Reference.tail.L.SG<_i_in._T_Range> => ['list', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'optional': ($): _i_out._T_Type_Node_Reference.tail.L.SG<_i_in._T_Range> => ['optional', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'state group': ($): _i_out._T_Type_Node_Reference.tail.L.SG<_i_in._T_Range> => ['state group', _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )],
                                }),
                            }
                        ),
                    }
                )),
                'resulting node': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "resulting node",
                    }
                ), ($) => _i_generic.process_derived_reference(
                    $,
                    null
                )),
            }),
        }
    )
    export const Signature_Parameters: _i_signatures._T_Signature_Parameters = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'values': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "values",
                    }
                ), ($) => _i_generic.process_unresolved_dictionary(
                    $,
                    {
                        'value': ($) => _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'data type': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "data type",
                                        }
                                    ), ($) => Type_Reference(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'presence': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "presence",
                                        }
                                    ), ($) => Presence(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        ),
                    }
                )),
                'lookups': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "lookups",
                    }
                ), ($) => _i_generic.process_unresolved_dictionary(
                    $,
                    {
                        'value': ($) => _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'referent': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "referent",
                                        }
                                    ), ($) => Type_Reference(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'dictionary': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "dictionary",
                                        }
                                    ), ($) => _i_generic.process_derived_reference(
                                        $,
                                        null
                                    )),
                                    'type': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "type",
                                        }
                                    ), ($) => _i_generic.process_unresolved_state_group(
                                        $,
                                        {
                                            'states': _p.dictionary.literal({
                                                'cyclic': ($): _i_out._T_Signature_Parameters.lookups.D._type.SG<_i_in._T_Range> => ['cyclic', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'acyclic': ($): _i_out._T_Signature_Parameters.lookups.D._type.SG<_i_in._T_Range> => ['acyclic', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'stack': ($): _i_out._T_Signature_Parameters.lookups.D._type.SG<_i_in._T_Range> => ['stack', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                            }),
                                        }
                                    )),
                                    'presence': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "presence",
                                        }
                                    ), ($) => Presence(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        ),
                    }
                )),
            }),
        }
    )
    export const Signature: _i_signatures._T_Signature = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'type': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "type",
                    }
                ), ($) => _i_generic.process_derived_reference(
                    $,
                    null
                )),
                'parameters': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "parameters",
                    }
                ), ($) => _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'local': ($): _i_out._T_Signature.parameters.SG<_i_in._T_Range> => ['local', Signature_Parameters(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )],
                            'same as': ($): _i_out._T_Signature.parameters.SG<_i_in._T_Range> => ['same as', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                        }),
                    }
                )),
                'resolved parameters': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "resolved parameters",
                    }
                ), ($) => _i_generic.process_derived_reference(
                    $,
                    null
                )),
            }),
        }
    )
    export const Relative_Value_Selection: _i_signatures._T_Relative_Value_Selection = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'path': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "path",
                    }
                ), ($) => _i_generic.process_unresolved_list(
                    $,
                    {
                        'value': ($) => _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _p.dictionary.literal({
                                    'component': ($): _i_out._T_Relative_Value_Selection.path.L.SG<_i_in._T_Range> => ['component', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'group': ($): _i_out._T_Relative_Value_Selection.path.L.SG<_i_in._T_Range> => ['group', _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )],
                                    'reference': ($): _i_out._T_Relative_Value_Selection.path.L.SG<_i_in._T_Range> => ['reference', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'definition': _p.deprecated_cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "definition",
                                                    }
                                                ), ($) => _i_generic.process_derived_reference(
                                                    $,
                                                    null
                                                )),
                                            }),
                                        }
                                    )],
                                }),
                            }
                        ),
                    }
                )),
                'resulting node': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "resulting node",
                    }
                ), ($) => _i_generic.process_derived_reference(
                    $,
                    null
                )),
            }),
        }
    )
    export const Lookup_Selection: _i_signatures._T_Lookup_Selection = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'type': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "type",
                    }
                ), ($) => _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'dictionary': ($): _i_out._T_Lookup_Selection._type.SG<_i_in._T_Range> => ['dictionary', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'selection': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "selection",
                                            }
                                        ), ($) => Guaranteed_Value_Selection(
                                            $,
                                            {
                                                'value deserializers': $p['value deserializers'],
                                            }
                                        )),
                                        'selected dictionary': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "selected dictionary",
                                            }
                                        ), ($) => _i_generic.process_derived_reference(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            )],
                            'parameter': ($): _i_out._T_Lookup_Selection._type.SG<_i_in._T_Range> => ['parameter', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            'not circular dependent siblings': ($): _i_out._T_Lookup_Selection._type.SG<_i_in._T_Range> => ['not circular dependent siblings', _i_generic.process_derived_reference(
                                $,
                                null
                            )],
                            'possibly circular dependent siblings': ($): _i_out._T_Lookup_Selection._type.SG<_i_in._T_Range> => ['possibly circular dependent siblings', _i_generic.process_derived_reference(
                                $,
                                null
                            )],
                        }),
                    }
                )),
                'resulting dictionary': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "resulting dictionary",
                    }
                ), ($) => _i_generic.process_derived_reference(
                    $,
                    null
                )),
            }),
        }
    )
    export const Constraint: _i_signatures._T_Constraint = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'selection': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "selection",
                    }
                ), ($) => Relative_Value_Selection(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
                'type': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "type",
                    }
                ), ($) => _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'state': ($): _i_out._T_Constraint._type.SG<_i_in._T_Range> => ['state', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'selected state group': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "selected state group",
                                            }
                                        ), ($) => _i_generic.process_derived_reference(
                                            $,
                                            null
                                        )),
                                        'state': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "state",
                                            }
                                        ), ($) => _i_generic.process_selected_reference(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            )],
                            'optional value': ($): _i_out._T_Constraint._type.SG<_i_in._T_Range> => ['optional value', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'selected optional value': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "selected optional value",
                                            }
                                        ), ($) => _i_generic.process_derived_reference(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            )],
                        }),
                    }
                )),
            }),
        }
    )
    export const Option_Constraints: _i_signatures._T_Option_Constraints = ($, $p) => _i_generic.process_unresolved_dictionary(
        $,
        {
            'value': ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'state': ($): _i_out._T_Option_Constraints.D.SG<_i_in._T_Range> => ['state', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'selection': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "selection",
                                        }
                                    ), ($) => Guaranteed_Value_Selection(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'selected state group': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "selected state group",
                                        }
                                    ), ($) => _i_generic.process_derived_reference(
                                        $,
                                        null
                                    )),
                                    'state': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "state",
                                        }
                                    ), ($) => _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )),
                                }),
                            }
                        )],
                        'assert is set': ($): _i_out._T_Option_Constraints.D.SG<_i_in._T_Range> => ['assert is set', Possible_Value_Selection(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                    }),
                }
            ),
        }
    )
    export const Property_Constraints: _i_signatures._T_Property_Constraints = ($, $p) => _i_generic.process_unresolved_dictionary(
        $,
        {
            'value': ($) => Property_Constraint(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            ),
        }
    )
    export const Reference_To_Property_Constraint: _i_signatures._T_Reference_To_Property_Constraint = ($, $p) => _i_generic.process_selected_reference(
        $,
        null
    )
    export const Property_Constraint: _i_signatures._T_Property_Constraint = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'start': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "start",
                    }
                ), ($) => _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'property': ($): _i_out._T_Property_Constraint.start.SG<_i_in._T_Range> => ['property', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            'sibling': ($): _i_out._T_Property_Constraint.start.SG<_i_in._T_Range> => ['sibling', Reference_To_Property_Constraint(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )],
                        }),
                    }
                )),
                'constraint': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "constraint",
                    }
                ), ($) => Constraint(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
            }),
        }
    )
    export const Optional_Value_Initialization: _i_signatures._T_Optional_Value_Initialization = ($, $p) => _i_generic.process_unresolved_state_group(
        $,
        {
            'states': _p.dictionary.literal({
                'not set': ($): _i_out._T_Optional_Value_Initialization.SG<_i_in._T_Range> => ['not set', _i_generic.process_nothing(
                    $,
                    null
                )],
                'set': ($): _i_out._T_Optional_Value_Initialization.SG<_i_in._T_Range> => ['set', Guaranteed_Value_Selection(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                'selection': ($): _i_out._T_Optional_Value_Initialization.SG<_i_in._T_Range> => ['selection', Possible_Value_Selection(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
            }),
        }
    )
    export const Node_Resolver_Group: _i_signatures._T_Node_Resolver_Group = ($, $p) => _i_generic.process_unresolved_dictionary(
        $,
        {
            'value': ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'definition': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "definition",
                            }
                        ), ($) => _i_generic.process_derived_reference(
                            $,
                            null
                        )),
                        'resolver': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "resolver",
                            }
                        ), ($) => Node_Resolver(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            ),
        }
    )
    export const Node_Resolver_List_Result: _i_signatures._T_Node_Resolver_List_Result = ($, $p) => Type_Reference(
        $,
        {
            'value deserializers': $p['value deserializers'],
        }
    )
    export const Benchmark: _i_signatures._T_Benchmark = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'selection': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "selection",
                    }
                ), ($) => Guaranteed_Value_Selection(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
                'resulting dictionary': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "resulting dictionary",
                    }
                ), ($) => _i_generic.process_derived_reference(
                    $,
                    null
                )),
                'dense': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "dense",
                    }
                ), ($) => _i_generic.process_boolean(
                    $,
                    {
                        'deserializer': $p['value deserializers']['boolean'],
                    }
                )),
            }),
        }
    )
    export const Type_Specification: _i_signatures._T_Type_Specification = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'schema': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "schema",
                    }
                ), ($) => Schema_Tree(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
                'schema path': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "schema path",
                    }
                ), ($) => _i_generic.process_unresolved_list(
                    $,
                    {
                        'value': ($) => _i_generic.process_text(
                            $,
                            null
                        ),
                    }
                )),
                'type': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "type",
                    }
                ), ($) => _i_generic.process_text(
                    $,
                    null
                )),
            }),
        }
    )
    export const Node_Resolver: _i_signatures._T_Node_Resolver = ($, $p) => _i_generic.process_unresolved_state_group(
        $,
        {
            'states': _p.dictionary.literal({
                'boolean': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['boolean', _i_generic.process_nothing(
                    $,
                    null
                )],
                'component': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['component', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'location': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "location",
                                }
                            ), ($) => _i_generic.process_unresolved_state_group(
                                $,
                                {
                                    'states': _p.dictionary.literal({
                                        'external': ($): _i_out._T_Node_Resolver.SG.component.location.SG<_i_in._T_Range> => ['external', _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'import': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "import",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'type': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "type",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                }),
                                            }
                                        )],
                                        'internal': ($): _i_out._T_Node_Resolver.SG.component.location.SG<_i_in._T_Range> => ['internal', _i_generic.process_selected_reference(
                                            $,
                                            null
                                        )],
                                    }),
                                }
                            )),
                            'signature': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "signature",
                                }
                            ), ($) => _i_generic.process_derived_reference(
                                $,
                                null
                            )),
                            'arguments': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "arguments",
                                }
                            ), ($) => _i_generic.process_optional(
                                $,
                                {
                                    'value': ($) => _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'values': _p.deprecated_cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "values",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_unresolved_dictionary(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_unresolved_state_group(
                                                                    $,
                                                                    {
                                                                        'states': _p.dictionary.literal({
                                                                            'optional': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D.SG<_i_in._T_Range> => ['optional', Optional_Value_Initialization(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            )],
                                                                            'required': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D.SG<_i_in._T_Range> => ['required', Guaranteed_Value_Selection(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            )],
                                                                            'parameter': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D.SG<_i_in._T_Range> => ['parameter', _i_generic.process_selected_reference(
                                                                                $,
                                                                                null
                                                                            )],
                                                                        }),
                                                                    }
                                                                ),
                                                            }
                                                        ),
                                                    }
                                                )),
                                                'lookups': _p.deprecated_cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "lookups",
                                                    }
                                                ), ($) => _i_generic.process_optional(
                                                    $,
                                                    {
                                                        'value': ($) => _i_generic.process_unresolved_dictionary(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_unresolved_state_group(
                                                                    $,
                                                                    {
                                                                        'states': _p.dictionary.literal({
                                                                            'empty stack': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG<_i_in._T_Range> => ['empty stack', _i_generic.process_nothing(
                                                                                $,
                                                                                null
                                                                            )],
                                                                            'not set': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG<_i_in._T_Range> => ['not set', _i_generic.process_nothing(
                                                                                $,
                                                                                null
                                                                            )],
                                                                            'selection': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG<_i_in._T_Range> => ['selection', Lookup_Selection(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            )],
                                                                            'stack': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG<_i_in._T_Range> => ['stack', _i_generic.process_group(
                                                                                $,
                                                                                {
                                                                                    'properties': ($) => ({
                                                                                        'stack': _p.deprecated_cc(_i_generic.get_entry(
                                                                                            $,
                                                                                            {
                                                                                                'key': "stack",
                                                                                            }
                                                                                        ), ($) => Lookup_Selection(
                                                                                            $,
                                                                                            {
                                                                                                'value deserializers': $p['value deserializers'],
                                                                                            }
                                                                                        )),
                                                                                        'element': _p.deprecated_cc(_i_generic.get_entry(
                                                                                            $,
                                                                                            {
                                                                                                'key': "element",
                                                                                            }
                                                                                        ), ($) => Lookup_Selection(
                                                                                            $,
                                                                                            {
                                                                                                'value deserializers': $p['value deserializers'],
                                                                                            }
                                                                                        )),
                                                                                    }),
                                                                                }
                                                                            )],
                                                                        }),
                                                                    }
                                                                ),
                                                            }
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    ),
                                }
                            )),
                            'constraints': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "constraints",
                                }
                            ), ($) => Property_Constraints(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )),
                        }),
                    }
                )],
                'dictionary': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['dictionary', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'definition': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "definition",
                                }
                            ), ($) => _i_generic.process_derived_reference(
                                $,
                                null
                            )),
                            'resolver': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "resolver",
                                }
                            ), ($) => Node_Resolver(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )),
                            'benchmark': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "benchmark",
                                }
                            ), ($) => _i_generic.process_optional(
                                $,
                                {
                                    'value': ($) => Benchmark(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    ),
                                }
                            )),
                        }),
                    }
                )],
                'group': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['group', Node_Resolver_Group(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                'list': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['list', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'definition': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "definition",
                                }
                            ), ($) => _i_generic.process_derived_reference(
                                $,
                                null
                            )),
                            'resolver': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "resolver",
                                }
                            ), ($) => Node_Resolver(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )),
                            'result': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "result",
                                }
                            ), ($) => _i_generic.process_optional(
                                $,
                                {
                                    'value': ($) => Node_Resolver_List_Result(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    ),
                                }
                            )),
                        }),
                    }
                )],
                'nothing': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['nothing', _i_generic.process_nothing(
                    $,
                    null
                )],
                'number': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['number', _i_generic.process_nothing(
                    $,
                    null
                )],
                'optional': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['optional', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'constraints': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "constraints",
                                }
                            ), ($) => Option_Constraints(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )),
                            'resolver': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "resolver",
                                }
                            ), ($) => Node_Resolver(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )),
                        }),
                    }
                )],
                'reference': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['reference', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'definition': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "definition",
                                }
                            ), ($) => _i_generic.process_derived_reference(
                                $,
                                null
                            )),
                            'type': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "type",
                                }
                            ), ($) => _i_generic.process_unresolved_state_group(
                                $,
                                {
                                    'states': _p.dictionary.literal({
                                        'derived': ($): _i_out._T_Node_Resolver.SG.reference._type.SG<_i_in._T_Range> => ['derived', _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'value': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "value",
                                                        }
                                                    ), ($) => Guaranteed_Value_Selection(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                }),
                                            }
                                        )],
                                        'selected': ($): _i_out._T_Node_Resolver.SG.reference._type.SG<_i_in._T_Range> => ['selected', _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'definition': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "definition",
                                                        }
                                                    ), ($) => _i_generic.process_derived_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'lookup': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "lookup",
                                                        }
                                                    ), ($) => Lookup_Selection(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                    'constraints': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "constraints",
                                                        }
                                                    ), ($) => Property_Constraints(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                }),
                                            }
                                        )],
                                    }),
                                }
                            )),
                        }),
                    }
                )],
                'state group': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['state group', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'definition': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "definition",
                                }
                            ), ($) => _i_generic.process_derived_reference(
                                $,
                                null
                            )),
                            'states': _p.deprecated_cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "states",
                                }
                            ), ($) => _i_generic.process_unresolved_dictionary(
                                $,
                                {
                                    'value': ($) => _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'constraints': _p.deprecated_cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "constraints",
                                                    }
                                                ), ($) => Option_Constraints(
                                                    $,
                                                    {
                                                        'value deserializers': $p['value deserializers'],
                                                    }
                                                )),
                                                'resolver': _p.deprecated_cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "resolver",
                                                    }
                                                ), ($) => Node_Resolver(
                                                    $,
                                                    {
                                                        'value deserializers': $p['value deserializers'],
                                                    }
                                                )),
                                            }),
                                        }
                                    ),
                                }
                            )),
                        }),
                    }
                )],
                'text': ($): _i_out._T_Node_Resolver.SG<_i_in._T_Range> => ['text', _i_generic.process_nothing(
                    $,
                    null
                )],
            }),
        }
    )
    export const Guaranteed_Value_Selection: _i_signatures._T_Guaranteed_Value_Selection = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'start': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "start",
                    }
                ), ($) => _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'sibling': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in._T_Range> => ['sibling', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            'parent sibling': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in._T_Range> => ['parent sibling', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            'option constraint': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in._T_Range> => ['option constraint', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            'list cursor': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in._T_Range> => ['list cursor', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            'linked entry': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in._T_Range> => ['linked entry', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            'constraint': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in._T_Range> => ['constraint', _i_generic.process_unresolved_state_group(
                                $,
                                {
                                    'states': _p.dictionary.literal({
                                        'component': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG<_i_in._T_Range> => ['component', _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'property': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "property",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'constraint': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "constraint",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                }),
                                            }
                                        )],
                                        'reference': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG<_i_in._T_Range> => ['reference', _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'property': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "property",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'constraint': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "constraint",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                }),
                                            }
                                        )],
                                    }),
                                }
                            )],
                            'parameter': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in._T_Range> => ['parameter', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            'result': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in._T_Range> => ['result', _i_generic.process_unresolved_state_group(
                                $,
                                {
                                    'states': _p.dictionary.literal({
                                        'list': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG<_i_in._T_Range> => ['list', _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'property': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "property",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'list result': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "list result",
                                                        }
                                                    ), ($) => _i_generic.process_derived_reference(
                                                        $,
                                                        null
                                                    )),
                                                }),
                                            }
                                        )],
                                        'state group': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG<_i_in._T_Range> => ['state group', _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'property': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "property",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'state group': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "state group",
                                                        }
                                                    ), ($) => _i_generic.process_derived_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'result': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "result",
                                                        }
                                                    ), ($) => Type_Reference(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                }),
                                            }
                                        )],
                                        'optional value': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG<_i_in._T_Range> => ['optional value', _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'property': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "property",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'optional value': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "optional value",
                                                        }
                                                    ), ($) => _i_generic.process_derived_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'result': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "result",
                                                        }
                                                    ), ($) => Type_Reference(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                }),
                                            }
                                        )],
                                    }),
                                }
                            )],
                        }),
                    }
                )),
                'tail': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "tail",
                    }
                ), ($) => Relative_Value_Selection(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
                'resulting node': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "resulting node",
                    }
                ), ($) => _i_generic.process_derived_reference(
                    $,
                    null
                )),
            }),
        }
    )
    export const Possible_Value_Selection: _i_signatures._T_Possible_Value_Selection = ($, $p) => _i_generic.process_unresolved_state_group(
        $,
        {
            'states': _p.dictionary.literal({
                'parameter': ($): _i_out._T_Possible_Value_Selection.SG<_i_in._T_Range> => ['parameter', _i_generic.process_selected_reference(
                    $,
                    null
                )],
                'result': ($): _i_out._T_Possible_Value_Selection.SG<_i_in._T_Range> => ['result', _i_generic.process_unresolved_state_group(
                    $,
                    {
                        'states': _p.dictionary.literal({
                            'state group': ($): _i_out._T_Possible_Value_Selection.SG.result.SG<_i_in._T_Range> => ['state group', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'property': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "property",
                                            }
                                        ), ($) => _i_generic.process_selected_reference(
                                            $,
                                            null
                                        )),
                                        'state group': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "state group",
                                            }
                                        ), ($) => _i_generic.process_derived_reference(
                                            $,
                                            null
                                        )),
                                        'result': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "result",
                                            }
                                        ), ($) => Type_Reference(
                                            $,
                                            {
                                                'value deserializers': $p['value deserializers'],
                                            }
                                        )),
                                    }),
                                }
                            )],
                            'optional value': ($): _i_out._T_Possible_Value_Selection.SG.result.SG<_i_in._T_Range> => ['optional value', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'property': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "property",
                                            }
                                        ), ($) => _i_generic.process_selected_reference(
                                            $,
                                            null
                                        )),
                                        'optional value': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "optional value",
                                            }
                                        ), ($) => _i_generic.process_derived_reference(
                                            $,
                                            null
                                        )),
                                        'result': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "result",
                                            }
                                        ), ($) => Type_Reference(
                                            $,
                                            {
                                                'value deserializers': $p['value deserializers'],
                                            }
                                        )),
                                    }),
                                }
                            )],
                        }),
                    }
                )],
            }),
        }
    )
