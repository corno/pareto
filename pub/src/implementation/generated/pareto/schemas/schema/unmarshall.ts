import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/source"
import * as _i_in_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/schema/unmarshall"


export const Benchmark: _i_signatures._T_Benchmark = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'dense': _pa.cc(_i_generic.get_entry(
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
            'resulting dictionary': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "resulting dictionary",
                }
            ), ($) => _i_generic.process_derived_reference(
                $,
                null
            )),
            'selection': _pa.cc(_i_generic.get_entry(
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
        }),
    }
)
export const Constraint: _i_signatures._T_Constraint = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'selection': _pa.cc(_i_generic.get_entry(
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
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'optional value': ($): _i_out._T_Constraint._type.SG<_i_in_token._T_Range> => ['optional value', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'selected optional value': _pa.cc(_i_generic.get_entry(
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
                        'state': ($): _i_out._T_Constraint._type.SG<_i_in_token._T_Range> => ['state', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'selected state group': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "selected state group",
                                        }
                                    ), ($) => _i_generic.process_derived_reference(
                                        $,
                                        null
                                    )),
                                    'state': _pa.cc(_i_generic.get_entry(
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
                    }),
                }
            )),
        }),
    }
)
export const Dictionary: _i_signatures._T_Dictionary = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'node': _pa.cc(_i_generic.get_entry(
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
            'ordered': _pa.cc(_i_generic.get_entry(
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
export const Globals: _i_signatures._T_Globals = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'complexity': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "complexity",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'constrained': ($): _i_out._T_Globals.complexity.SG<_i_in_token._T_Range> => ['constrained', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'unconstrained': ($): _i_out._T_Globals.complexity.SG<_i_in_token._T_Range> => ['unconstrained', _i_generic.process_nothing(
                            $,
                            null
                        )],
                    }),
                }
            )),
            'number types': _pa.cc(_i_generic.get_entry(
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
            'text types': _pa.cc(_i_generic.get_entry(
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
                    'description': _pa.cc(_i_generic.get_entry(
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
                    'node': _pa.cc(_i_generic.get_entry(
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
export const Guaranteed_Value_Selection: _i_signatures._T_Guaranteed_Value_Selection = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'resulting node': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "resulting node",
                }
            ), ($) => _i_generic.process_derived_reference(
                $,
                null
            )),
            'start': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "start",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'constraint': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in_token._T_Range> => ['constraint', _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'component': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG<_i_in_token._T_Range> => ['component', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'constraint': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "constraint",
                                                    }
                                                ), ($) => _i_generic.process_selected_reference(
                                                    $,
                                                    null
                                                )),
                                                'property': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "property",
                                                    }
                                                ), ($) => _i_generic.process_selected_reference(
                                                    $,
                                                    null
                                                )),
                                            }),
                                        }
                                    )],
                                    'reference': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG<_i_in_token._T_Range> => ['reference', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'constraint': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "constraint",
                                                    }
                                                ), ($) => _i_generic.process_selected_reference(
                                                    $,
                                                    null
                                                )),
                                                'property': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "property",
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
                        'linked entry': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in_token._T_Range> => ['linked entry', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'list cursor': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in_token._T_Range> => ['list cursor', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'option constraint': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in_token._T_Range> => ['option constraint', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'parameter': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in_token._T_Range> => ['parameter', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'parent sibling': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in_token._T_Range> => ['parent sibling', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'result': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in_token._T_Range> => ['result', _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'list': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG<_i_in_token._T_Range> => ['list', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'list result': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "list result",
                                                    }
                                                ), ($) => _i_generic.process_derived_reference(
                                                    $,
                                                    null
                                                )),
                                                'property': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "property",
                                                    }
                                                ), ($) => _i_generic.process_selected_reference(
                                                    $,
                                                    null
                                                )),
                                            }),
                                        }
                                    )],
                                    'optional value': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG<_i_in_token._T_Range> => ['optional value', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'optional value': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "optional value",
                                                    }
                                                ), ($) => _i_generic.process_derived_reference(
                                                    $,
                                                    null
                                                )),
                                                'property': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "property",
                                                    }
                                                ), ($) => _i_generic.process_selected_reference(
                                                    $,
                                                    null
                                                )),
                                                'result': _pa.cc(_i_generic.get_entry(
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
                                    'state group': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG<_i_in_token._T_Range> => ['state group', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'property': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "property",
                                                    }
                                                ), ($) => _i_generic.process_selected_reference(
                                                    $,
                                                    null
                                                )),
                                                'result': _pa.cc(_i_generic.get_entry(
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
                                                'state group': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "state group",
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
                        )],
                        'sibling': ($): _i_out._T_Guaranteed_Value_Selection.start.SG<_i_in_token._T_Range> => ['sibling', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                    }),
                }
            )),
            'tail': _pa.cc(_i_generic.get_entry(
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
        }),
    }
)
export const Imports: _i_signatures._T_Imports = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'schema': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "schema",
                        }
                    ), ($) => _i_generic.process_derived_reference(
                        $,
                        null
                    )),
                    'schema set child': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "schema set child",
                        }
                    ), ($) => _i_generic.process_stack_reference(
                        $,
                        null
                    )),
                }),
            }
        ),
    }
)
export const Lookup_Selection: _i_signatures._T_Lookup_Selection = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'resulting dictionary': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "resulting dictionary",
                }
            ), ($) => _i_generic.process_derived_reference(
                $,
                null
            )),
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'dictionary': ($): _i_out._T_Lookup_Selection._type.SG<_i_in_token._T_Range> => ['dictionary', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'selected dictionary': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "selected dictionary",
                                        }
                                    ), ($) => _i_generic.process_derived_reference(
                                        $,
                                        null
                                    )),
                                    'selection': _pa.cc(_i_generic.get_entry(
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
                                }),
                            }
                        )],
                        'not circular dependent siblings': ($): _i_out._T_Lookup_Selection._type.SG<_i_in_token._T_Range> => ['not circular dependent siblings', _i_generic.process_derived_reference(
                            $,
                            null
                        )],
                        'parameter': ($): _i_out._T_Lookup_Selection._type.SG<_i_in_token._T_Range> => ['parameter', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'possibly circular dependent siblings': ($): _i_out._T_Lookup_Selection._type.SG<_i_in_token._T_Range> => ['possibly circular dependent siblings', _i_generic.process_derived_reference(
                            $,
                            null
                        )],
                    }),
                }
            )),
        }),
    }
)
export const Node_Resolver: _i_signatures._T_Node_Resolver = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'boolean': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['boolean', _i_generic.process_nothing(
                $,
                null
            )],
            'component': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['component', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'arguments': _pa.cc(_i_generic.get_entry(
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
                                            'lookups': _pa.cc(_i_generic.get_entry(
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
                                                                    'states': _pa.dictionary_literal({
                                                                        'empty stack': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG<_i_in_token._T_Range> => ['empty stack', _i_generic.process_nothing(
                                                                            $,
                                                                            null
                                                                        )],
                                                                        'not set': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG<_i_in_token._T_Range> => ['not set', _i_generic.process_nothing(
                                                                            $,
                                                                            null
                                                                        )],
                                                                        'selection': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG<_i_in_token._T_Range> => ['selection', Lookup_Selection(
                                                                            $,
                                                                            {
                                                                                'value deserializers': $p['value deserializers'],
                                                                            }
                                                                        )],
                                                                        'stack': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG<_i_in_token._T_Range> => ['stack', _i_generic.process_group(
                                                                            $,
                                                                            {
                                                                                'properties': ($) => ({
                                                                                    'element': _pa.cc(_i_generic.get_entry(
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
                                                                                    'stack': _pa.cc(_i_generic.get_entry(
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
                                            'values': _pa.cc(_i_generic.get_entry(
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
                                                                    'states': _pa.dictionary_literal({
                                                                        'optional': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D.SG<_i_in_token._T_Range> => ['optional', Optional_Value_Initialization(
                                                                            $,
                                                                            {
                                                                                'value deserializers': $p['value deserializers'],
                                                                            }
                                                                        )],
                                                                        'parameter': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D.SG<_i_in_token._T_Range> => ['parameter', _i_generic.process_selected_reference(
                                                                            $,
                                                                            null
                                                                        )],
                                                                        'required': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D.SG<_i_in_token._T_Range> => ['required', Guaranteed_Value_Selection(
                                                                            $,
                                                                            {
                                                                                'value deserializers': $p['value deserializers'],
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
                        'constraints': _pa.cc(_i_generic.get_entry(
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
                        'location': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "location",
                            }
                        ), ($) => _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'external': ($): _i_out._T_Node_Resolver.SG.component.location.SG<_i_in_token._T_Range> => ['external', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'import': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "import",
                                                    }
                                                ), ($) => _i_generic.process_selected_reference(
                                                    $,
                                                    null
                                                )),
                                                'type': _pa.cc(_i_generic.get_entry(
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
                                    'internal': ($): _i_out._T_Node_Resolver.SG.component.location.SG<_i_in_token._T_Range> => ['internal', _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )],
                                }),
                            }
                        )),
                        'signature': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "signature",
                            }
                        ), ($) => _i_generic.process_derived_reference(
                            $,
                            null
                        )),
                    }),
                }
            )],
            'dictionary': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['dictionary', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'benchmark': _pa.cc(_i_generic.get_entry(
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
                        'definition': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "definition",
                            }
                        ), ($) => _i_generic.process_derived_reference(
                            $,
                            null
                        )),
                        'resolver': _pa.cc(_i_generic.get_entry(
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
            'group': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['group', Node_Resolver_Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'list': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['list', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'definition': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "definition",
                            }
                        ), ($) => _i_generic.process_derived_reference(
                            $,
                            null
                        )),
                        'resolver': _pa.cc(_i_generic.get_entry(
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
                        'result': _pa.cc(_i_generic.get_entry(
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
            'nothing': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['nothing', _i_generic.process_nothing(
                $,
                null
            )],
            'number': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['number', _i_generic.process_nothing(
                $,
                null
            )],
            'optional': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['optional', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'constraints': _pa.cc(_i_generic.get_entry(
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
                        'resolver': _pa.cc(_i_generic.get_entry(
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
            'reference': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['reference', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'definition': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "definition",
                            }
                        ), ($) => _i_generic.process_derived_reference(
                            $,
                            null
                        )),
                        'type': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "type",
                            }
                        ), ($) => _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'derived': ($): _i_out._T_Node_Resolver.SG.reference._type.SG<_i_in_token._T_Range> => ['derived', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'value': _pa.cc(_i_generic.get_entry(
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
                                    'selected': ($): _i_out._T_Node_Resolver.SG.reference._type.SG<_i_in_token._T_Range> => ['selected', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'constraints': _pa.cc(_i_generic.get_entry(
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
                                                'definition': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "definition",
                                                    }
                                                ), ($) => _i_generic.process_derived_reference(
                                                    $,
                                                    null
                                                )),
                                                'lookup': _pa.cc(_i_generic.get_entry(
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
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )),
                    }),
                }
            )],
            'state group': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['state group', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'definition': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "definition",
                            }
                        ), ($) => _i_generic.process_derived_reference(
                            $,
                            null
                        )),
                        'states': _pa.cc(_i_generic.get_entry(
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
                                            'constraints': _pa.cc(_i_generic.get_entry(
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
                                            'resolver': _pa.cc(_i_generic.get_entry(
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
            'text': ($): _i_out._T_Node_Resolver.SG<_i_in_token._T_Range> => ['text', _i_generic.process_nothing(
                $,
                null
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
                    'definition': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "definition",
                        }
                    ), ($) => _i_generic.process_derived_reference(
                        $,
                        null
                    )),
                    'resolver': _pa.cc(_i_generic.get_entry(
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
export const Number_Type: _i_signatures._T_Number_Type = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'precision': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "precision",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'approximation': ($): _i_out._T_Number_Type.precision.SG<_i_in_token._T_Range> => ['approximation', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'significant digits': _pa.cc(_i_generic.get_entry(
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
                        'exact': ($): _i_out._T_Number_Type.precision.SG<_i_in_token._T_Range> => ['exact', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'decimal separator offset': _pa.cc(_i_generic.get_entry(
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
                                    'type': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "type",
                                        }
                                    ), ($) => _i_generic.process_unresolved_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'integer': ($): _i_out._T_Number_Type.precision.SG.exact._type.SG<_i_in_token._T_Range> => ['integer', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'natural': ($): _i_out._T_Number_Type.precision.SG.exact._type.SG<_i_in_token._T_Range> => ['natural', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'positive natural': ($): _i_out._T_Number_Type.precision.SG.exact._type.SG<_i_in_token._T_Range> => ['positive natural', _i_generic.process_nothing(
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
export const Option_Constraints: _i_signatures._T_Option_Constraints = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_unresolved_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'assert is set': ($): _i_out._T_Option_Constraints.D.SG<_i_in_token._T_Range> => ['assert is set', Possible_Value_Selection(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )],
                    'state': ($): _i_out._T_Option_Constraints.D.SG<_i_in_token._T_Range> => ['state', _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'selected state group': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "selected state group",
                                    }
                                ), ($) => _i_generic.process_derived_reference(
                                    $,
                                    null
                                )),
                                'selection': _pa.cc(_i_generic.get_entry(
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
                                'state': _pa.cc(_i_generic.get_entry(
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
                }),
            }
        ),
    }
)
export const Optional_Value_Initialization: _i_signatures._T_Optional_Value_Initialization = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'not set': ($): _i_out._T_Optional_Value_Initialization.SG<_i_in_token._T_Range> => ['not set', _i_generic.process_nothing(
                $,
                null
            )],
            'selection': ($): _i_out._T_Optional_Value_Initialization.SG<_i_in_token._T_Range> => ['selection', Possible_Value_Selection(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'set': ($): _i_out._T_Optional_Value_Initialization.SG<_i_in_token._T_Range> => ['set', Guaranteed_Value_Selection(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
export const Possible_Value_Selection: _i_signatures._T_Possible_Value_Selection = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'parameter': ($): _i_out._T_Possible_Value_Selection.SG<_i_in_token._T_Range> => ['parameter', _i_generic.process_selected_reference(
                $,
                null
            )],
            'result': ($): _i_out._T_Possible_Value_Selection.SG<_i_in_token._T_Range> => ['result', _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'optional value': ($): _i_out._T_Possible_Value_Selection.SG.result.SG<_i_in_token._T_Range> => ['optional value', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'optional value': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "optional value",
                                        }
                                    ), ($) => _i_generic.process_derived_reference(
                                        $,
                                        null
                                    )),
                                    'property': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "property",
                                        }
                                    ), ($) => _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )),
                                    'result': _pa.cc(_i_generic.get_entry(
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
                        'state group': ($): _i_out._T_Possible_Value_Selection.SG.result.SG<_i_in_token._T_Range> => ['state group', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'property': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "property",
                                        }
                                    ), ($) => _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )),
                                    'result': _pa.cc(_i_generic.get_entry(
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
                                    'state group': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "state group",
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
            )],
        }),
    }
)
export const Presence: _i_signatures._T_Presence = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'optional': ($): _i_out._T_Presence.SG<_i_in_token._T_Range> => ['optional', _i_generic.process_nothing(
                $,
                null
            )],
            'required': ($): _i_out._T_Presence.SG<_i_in_token._T_Range> => ['required', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Property_Constraint: _i_signatures._T_Property_Constraint = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'constraint': _pa.cc(_i_generic.get_entry(
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
            'start': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "start",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'property': ($): _i_out._T_Property_Constraint.start.SG<_i_in_token._T_Range> => ['property', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'sibling': ($): _i_out._T_Property_Constraint.start.SG<_i_in_token._T_Range> => ['sibling', Reference_To_Property_Constraint(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                    }),
                }
            )),
        }),
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
export const Relative_Value_Selection: _i_signatures._T_Relative_Value_Selection = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'path': _pa.cc(_i_generic.get_entry(
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
                            'states': _pa.dictionary_literal({
                                'component': ($): _i_out._T_Relative_Value_Selection.path.L.SG<_i_in_token._T_Range> => ['component', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'group': ($): _i_out._T_Relative_Value_Selection.path.L.SG<_i_in_token._T_Range> => ['group', _i_generic.process_selected_reference(
                                    $,
                                    null
                                )],
                                'reference': ($): _i_out._T_Relative_Value_Selection.path.L.SG<_i_in_token._T_Range> => ['reference', _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'definition': _pa.cc(_i_generic.get_entry(
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
            'resulting node': _pa.cc(_i_generic.get_entry(
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
export const Resolve_Logic: _i_signatures._T_Resolve_Logic = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'resolvers': _pa.cc(_i_generic.get_entry(
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
            'signatures': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "signatures",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'types': _pa.cc(_i_generic.get_entry(
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
        }),
    }
)
export const Resolvers: _i_signatures._T_Resolvers = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'signature': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "signature",
                        }
                    ), ($) => _i_generic.process_derived_reference(
                        $,
                        null
                    )),
                    'type resolver': _pa.cc(_i_generic.get_entry(
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
export const Schema: _i_signatures._T_Schema = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'complexity': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "complexity",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'constrained': ($): _i_out._T_Schema.complexity.SG<_i_in_token._T_Range> => ['constrained', Resolve_Logic(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        'unconstrained': ($): _i_out._T_Schema.complexity.SG<_i_in_token._T_Range> => ['unconstrained', _i_generic.process_nothing(
                            $,
                            null
                        )],
                    }),
                }
            )),
            'globals': _pa.cc(_i_generic.get_entry(
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
            'imports': _pa.cc(_i_generic.get_entry(
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
            'types': _pa.cc(_i_generic.get_entry(
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
        }),
    }
)
export const Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'schema': ($): _i_out._T_Schema_Tree.SG<_i_in_token._T_Range> => ['schema', Schema(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'set': ($): _i_out._T_Schema_Tree.SG<_i_in_token._T_Range> => ['set', Schemas(
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
export const Signature: _i_signatures._T_Signature = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'parameters': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "parameters",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'local': ($): _i_out._T_Signature.parameters.SG<_i_in_token._T_Range> => ['local', Signature_Parameters(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        'same as': ($): _i_out._T_Signature.parameters.SG<_i_in_token._T_Range> => ['same as', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                    }),
                }
            )),
            'resolved parameters': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "resolved parameters",
                }
            ), ($) => _i_generic.process_derived_reference(
                $,
                null
            )),
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
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
            'lookups': _pa.cc(_i_generic.get_entry(
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
                                'dictionary': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "dictionary",
                                    }
                                ), ($) => _i_generic.process_derived_reference(
                                    $,
                                    null
                                )),
                                'presence': _pa.cc(_i_generic.get_entry(
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
                                'referent': _pa.cc(_i_generic.get_entry(
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
                                'type': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'acyclic': ($): _i_out._T_Signature_Parameters.lookups.D._type.SG<_i_in_token._T_Range> => ['acyclic', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'cyclic': ($): _i_out._T_Signature_Parameters.lookups.D._type.SG<_i_in_token._T_Range> => ['cyclic', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'stack': ($): _i_out._T_Signature_Parameters.lookups.D._type.SG<_i_in_token._T_Range> => ['stack', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'values': _pa.cc(_i_generic.get_entry(
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
                                'data type': _pa.cc(_i_generic.get_entry(
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
                                'presence': _pa.cc(_i_generic.get_entry(
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
export const Text_Type: _i_signatures._T_Text_Type = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'multi line': ($): _i_out._T_Text_Type._type.SG<_i_in_token._T_Range> => ['multi line', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'single line': ($): _i_out._T_Text_Type._type.SG<_i_in_token._T_Range> => ['single line', _i_generic.process_nothing(
                            $,
                            null
                        )],
                    }),
                }
            )),
        }),
    }
)
export const Type: _i_signatures._T_Type = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'node': _pa.cc(_i_generic.get_entry(
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
            'type parameters': _pa.cc(_i_generic.get_entry(
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
        }),
    }
)
export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'boolean': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['boolean', _i_generic.process_nothing(
                $,
                null
            )],
            'component': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['component', _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'external': ($): _i_out._T_Type_Node.SG.component.SG<_i_in_token._T_Range> => ['external', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'import': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "import",
                                        }
                                    ), ($) => _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )),
                                    'type': _pa.cc(_i_generic.get_entry(
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
                        'internal': ($): _i_out._T_Type_Node.SG.component.SG<_i_in_token._T_Range> => ['internal', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'internal cyclic': ($): _i_out._T_Type_Node.SG.component.SG<_i_in_token._T_Range> => ['internal cyclic', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                    }),
                }
            )],
            'dictionary': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['dictionary', Dictionary(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'group': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['group', Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'list': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['list', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'node': _pa.cc(_i_generic.get_entry(
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
            'nothing': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['nothing', _i_generic.process_nothing(
                $,
                null
            )],
            'number': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['number', _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'global': ($): _i_out._T_Type_Node.SG._number.SG<_i_in_token._T_Range> => ['global', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'local': ($): _i_out._T_Type_Node.SG._number.SG<_i_in_token._T_Range> => ['local', Number_Type(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                    }),
                }
            )],
            'optional': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['optional', Type_Node(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'reference': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['reference', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'referent': _pa.cc(_i_generic.get_entry(
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
                        'type': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "type",
                            }
                        ), ($) => _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'derived': ($): _i_out._T_Type_Node.SG.reference._type.SG<_i_in_token._T_Range> => ['derived', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'selected': ($): _i_out._T_Type_Node.SG.reference._type.SG<_i_in_token._T_Range> => ['selected', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'dependency': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "dependency",
                                                    }
                                                ), ($) => _i_generic.process_unresolved_state_group(
                                                    $,
                                                    {
                                                        'states': _pa.dictionary_literal({
                                                            'acyclic': ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency.SG<_i_in_token._T_Range> => ['acyclic', _i_generic.process_nothing(
                                                                $,
                                                                null
                                                            )],
                                                            'cyclic': ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency.SG<_i_in_token._T_Range> => ['cyclic', _i_generic.process_nothing(
                                                                $,
                                                                null
                                                            )],
                                                            'stack': ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency.SG<_i_in_token._T_Range> => ['stack', _i_generic.process_nothing(
                                                                $,
                                                                null
                                                            )],
                                                        }),
                                                    }
                                                )),
                                                'dictionary': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "dictionary",
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
            )],
            'state group': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['state group', _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'description': _pa.cc(_i_generic.get_entry(
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
                                'node': _pa.cc(_i_generic.get_entry(
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
            'text': ($): _i_out._T_Type_Node.SG<_i_in_token._T_Range> => ['text', _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'global': ($): _i_out._T_Type_Node.SG.text.SG<_i_in_token._T_Range> => ['global', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'local': ($): _i_out._T_Type_Node.SG.text.SG<_i_in_token._T_Range> => ['local', Text_Type(
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
export const Type_Node_Reference: _i_signatures._T_Type_Node_Reference = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'resulting node': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "resulting node",
                }
            ), ($) => _i_generic.process_derived_reference(
                $,
                null
            )),
            'tail': _pa.cc(_i_generic.get_entry(
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
                            'states': _pa.dictionary_literal({
                                'dictionary': ($): _i_out._T_Type_Node_Reference.tail.L.SG<_i_in_token._T_Range> => ['dictionary', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'group': ($): _i_out._T_Type_Node_Reference.tail.L.SG<_i_in_token._T_Range> => ['group', _i_generic.process_selected_reference(
                                    $,
                                    null
                                )],
                                'list': ($): _i_out._T_Type_Node_Reference.tail.L.SG<_i_in_token._T_Range> => ['list', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'optional': ($): _i_out._T_Type_Node_Reference.tail.L.SG<_i_in_token._T_Range> => ['optional', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'state group': ($): _i_out._T_Type_Node_Reference.tail.L.SG<_i_in_token._T_Range> => ['state group', _i_generic.process_selected_reference(
                                    $,
                                    null
                                )],
                            }),
                        }
                    ),
                }
            )),
            'type location': _pa.cc(_i_generic.get_entry(
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
export const Type_Reference: _i_signatures._T_Type_Reference = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'location': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "location",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'external': ($): _i_out._T_Type_Reference.location.SG<_i_in_token._T_Range> => ['external', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'import': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "import",
                                        }
                                    ), ($) => _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )),
                                    'type': _pa.cc(_i_generic.get_entry(
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
                        'internal': ($): _i_out._T_Type_Reference.location.SG<_i_in_token._T_Range> => ['internal', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                    }),
                }
            )),
            'resulting node': _pa.cc(_i_generic.get_entry(
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
export const Type_Specification: _i_signatures._T_Type_Specification = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'schema': _pa.cc(_i_generic.get_entry(
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
            'schema path': _pa.cc(_i_generic.get_entry(
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
            'type': _pa.cc(_i_generic.get_entry(
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
