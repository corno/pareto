import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/schema/unresolved"
import * as _i_signatures from "../../../interface/schemas/schema/unmarshall"


export const Benchmark: _i_signatures._T_Benchmark = ($) => _i_generic.process_group(
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
                null
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
                null
            )),
        }),
    }
)
export const Constraint: _i_signatures._T_Constraint = ($) => _i_generic.process_group(
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
                null
            )),
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'optional value': ($): _i_out._T_Constraint._type<null> => _i_generic.wrap_unresolved_state_group(
                            ['optional value', _i_generic.process_group(
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
                            null
                        ),
                        'state': ($): _i_out._T_Constraint._type<null> => _i_generic.wrap_unresolved_state_group(
                            ['state', _i_generic.process_group(
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
                            null
                        ),
                    }),
                }
            )),
        }),
    }
)
export const Dictionary: _i_signatures._T_Dictionary = ($) => _i_generic.process_group(
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
                null
            )),
            'ordered': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "ordered",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                null
            )),
        }),
    }
)
export const Globals: _i_signatures._T_Globals = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'complexity': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "complexity",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'constrained': ($): _i_out._T_Globals.complexity<null> => _i_generic.wrap_unresolved_state_group(
                            ['constrained', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'unconstrained': ($): _i_out._T_Globals.complexity<null> => _i_generic.wrap_unresolved_state_group(
                            ['unconstrained', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
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
                        null
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
                        null
                    ),
                }
            )),
        }),
    }
)
export const Group: _i_signatures._T_Group = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => Type_Node(
            $,
            null
        ),
    }
)
export const Guaranteed_Value_Selection: _i_signatures._T_Guaranteed_Value_Selection = ($) => _i_generic.process_group(
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
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'constraint': ($): _i_out._T_Guaranteed_Value_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['constraint', _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'component': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.constraint<null> => _i_generic.wrap_unresolved_state_group(
                                            ['component', _i_generic.process_group(
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
                                            null
                                        ),
                                        'reference': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.constraint<null> => _i_generic.wrap_unresolved_state_group(
                                            ['reference', _i_generic.process_group(
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
                                            null
                                        ),
                                    }),
                                }
                            )],
                            null
                        ),
                        'linked entry': ($): _i_out._T_Guaranteed_Value_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['linked entry', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'list cursor': ($): _i_out._T_Guaranteed_Value_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['list cursor', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'option constraint': ($): _i_out._T_Guaranteed_Value_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['option constraint', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            null
                        ),
                        'parameter': ($): _i_out._T_Guaranteed_Value_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['parameter', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            null
                        ),
                        'parent sibling': ($): _i_out._T_Guaranteed_Value_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['parent sibling', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            null
                        ),
                        'result': ($): _i_out._T_Guaranteed_Value_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['result', _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'list': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result<null> => _i_generic.wrap_unresolved_state_group(
                                            ['list', _i_generic.process_group(
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
                                            null
                                        ),
                                        'optional value': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result<null> => _i_generic.wrap_unresolved_state_group(
                                            ['optional value', _i_generic.process_group(
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
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'state group': ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result<null> => _i_generic.wrap_unresolved_state_group(
                                            ['state group', _i_generic.process_group(
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
                                                            null
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
                                            null
                                        ),
                                    }),
                                }
                            )],
                            null
                        ),
                        'sibling': ($): _i_out._T_Guaranteed_Value_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['sibling', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            null
                        ),
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
                null
            )),
        }),
    }
)
export const Imports: _i_signatures._T_Imports = ($) => _i_generic.process_unresolved_dictionary(
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
export const Lookup_Selection: _i_signatures._T_Lookup_Selection = ($) => _i_generic.process_group(
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
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'dictionary': ($): _i_out._T_Lookup_Selection._type<null> => _i_generic.wrap_unresolved_state_group(
                            ['dictionary', _i_generic.process_group(
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
                                            null
                                        )),
                                    }),
                                }
                            )],
                            null
                        ),
                        'not circular dependent siblings': ($): _i_out._T_Lookup_Selection._type<null> => _i_generic.wrap_unresolved_state_group(
                            ['not circular dependent siblings', _i_generic.process_derived_reference(
                                $,
                                null
                            )],
                            null
                        ),
                        'parameter': ($): _i_out._T_Lookup_Selection._type<null> => _i_generic.wrap_unresolved_state_group(
                            ['parameter', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            null
                        ),
                        'possibly circular dependent siblings': ($): _i_out._T_Lookup_Selection._type<null> => _i_generic.wrap_unresolved_state_group(
                            ['possibly circular dependent siblings', _i_generic.process_derived_reference(
                                $,
                                null
                            )],
                            null
                        ),
                    }),
                }
            )),
        }),
    }
)
export const Node_Resolver: _i_signatures._T_Node_Resolver = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'boolean': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['boolean', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'component': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['component', _i_generic.process_group(
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
                                                                'value': ($) => _i_generic.process_state_group(
                                                                    $,
                                                                    {
                                                                        'states': _pa.dictionary_literal({
                                                                            'empty stack': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D<null> => _i_generic.wrap_unresolved_state_group(
                                                                                ['empty stack', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                null
                                                                            ),
                                                                            'not set': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D<null> => _i_generic.wrap_unresolved_state_group(
                                                                                ['not set', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                null
                                                                            ),
                                                                            'selection': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D<null> => _i_generic.wrap_unresolved_state_group(
                                                                                ['selection', Lookup_Selection(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                null
                                                                            ),
                                                                            'stack': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D<null> => _i_generic.wrap_unresolved_state_group(
                                                                                ['stack', _i_generic.process_group(
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
                                                                                                null
                                                                                            )),
                                                                                            'stack': _pa.cc(_i_generic.get_entry(
                                                                                                $,
                                                                                                {
                                                                                                    'key': "stack",
                                                                                                }
                                                                                            ), ($) => Lookup_Selection(
                                                                                                $,
                                                                                                null
                                                                                            )),
                                                                                        }),
                                                                                    }
                                                                                )],
                                                                                null
                                                                            ),
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
                                                                'value': ($) => _i_generic.process_state_group(
                                                                    $,
                                                                    {
                                                                        'states': _pa.dictionary_literal({
                                                                            'optional': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D<null> => _i_generic.wrap_unresolved_state_group(
                                                                                ['optional', Optional_Value_Initialization(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                null
                                                                            ),
                                                                            'parameter': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D<null> => _i_generic.wrap_unresolved_state_group(
                                                                                ['parameter', _i_generic.process_selected_reference(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                null
                                                                            ),
                                                                            'required': ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D<null> => _i_generic.wrap_unresolved_state_group(
                                                                                ['required', Guaranteed_Value_Selection(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                null
                                                                            ),
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
                                null
                            )),
                            'location': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "location",
                                }
                            ), ($) => _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'external': ($): _i_out._T_Node_Resolver.SG.component.location<null> => _i_generic.wrap_unresolved_state_group(
                                            ['external', _i_generic.process_group(
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
                                            null
                                        ),
                                        'internal': ($): _i_out._T_Node_Resolver.SG.component.location<null> => _i_generic.wrap_unresolved_state_group(
                                            ['internal', _i_generic.process_selected_reference(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
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
                null
            ),
            'dictionary': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['dictionary', _i_generic.process_group(
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
                                        null
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
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
            'group': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['group', Node_Resolver_Group(
                    $,
                    null
                )],
                null
            ),
            'identifier value pair': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['identifier value pair', Node_Resolver(
                    $,
                    null
                )],
                null
            ),
            'list': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['list', _i_generic.process_group(
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
                                null
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
                                        null
                                    ),
                                }
                            )),
                        }),
                    }
                )],
                null
            ),
            'nothing': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['nothing', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'number': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['number', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'optional': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['optional', _i_generic.process_group(
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
                                null
                            )),
                            'resolver': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "resolver",
                                }
                            ), ($) => Node_Resolver(
                                $,
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
            'reference': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['reference', _i_generic.process_group(
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
                            ), ($) => _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'derived': ($): _i_out._T_Node_Resolver.SG.reference._type<null> => _i_generic.wrap_unresolved_state_group(
                                            ['derived', _i_generic.process_group(
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
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'selected': ($): _i_out._T_Node_Resolver.SG.reference._type<null> => _i_generic.wrap_unresolved_state_group(
                                            ['selected', _i_generic.process_group(
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
                                                            null
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
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                    }),
                                }
                            )),
                        }),
                    }
                )],
                null
            ),
            'state group': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['state group', _i_generic.process_group(
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
                                                    null
                                                )),
                                                'resolver': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "resolver",
                                                    }
                                                ), ($) => Node_Resolver(
                                                    $,
                                                    null
                                                )),
                                            }),
                                        }
                                    ),
                                }
                            )),
                        }),
                    }
                )],
                null
            ),
            'text': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['text', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'type parameter': ($): _i_out._T_Node_Resolver<null> => _i_generic.wrap_unresolved_state_group(
                ['type parameter', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
        }),
    }
)
export const Node_Resolver_Group: _i_signatures._T_Node_Resolver_Group = ($) => _i_generic.process_unresolved_dictionary(
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
                        null
                    )),
                }),
            }
        ),
    }
)
export const Node_Resolver_List_Result: _i_signatures._T_Node_Resolver_List_Result = ($) => Type_Reference(
    $,
    null
)
export const Number_Type: _i_signatures._T_Number_Type = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'precision': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "precision",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'approximation': ($): _i_out._T_Number_Type.precision<null> => _i_generic.wrap_unresolved_state_group(
                            ['approximation', _i_generic.process_group(
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
                                            null
                                        )),
                                    }),
                                }
                            )],
                            null
                        ),
                        'exact': ($): _i_out._T_Number_Type.precision<null> => _i_generic.wrap_unresolved_state_group(
                            ['exact', _i_generic.process_group(
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
                                                    null
                                                ),
                                            }
                                        )),
                                        'type': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "type",
                                            }
                                        ), ($) => _i_generic.process_state_group(
                                            $,
                                            {
                                                'states': _pa.dictionary_literal({
                                                    'integer': ($): _i_out._T_Number_Type.precision.SG.exact._type<null> => _i_generic.wrap_unresolved_state_group(
                                                        ['integer', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        null
                                                    ),
                                                    'natural': ($): _i_out._T_Number_Type.precision.SG.exact._type<null> => _i_generic.wrap_unresolved_state_group(
                                                        ['natural', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        null
                                                    ),
                                                    'positive natural': ($): _i_out._T_Number_Type.precision.SG.exact._type<null> => _i_generic.wrap_unresolved_state_group(
                                                        ['positive natural', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        null
                                                    ),
                                                }),
                                            }
                                        )),
                                    }),
                                }
                            )],
                            null
                        ),
                    }),
                }
            )),
        }),
    }
)
export const Option_Constraints: _i_signatures._T_Option_Constraints = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'assert is set': ($): _i_out._T_Option_Constraints.D<null> => _i_generic.wrap_unresolved_state_group(
                        ['assert is set', Possible_Value_Selection(
                            $,
                            null
                        )],
                        null
                    ),
                    'state': ($): _i_out._T_Option_Constraints.D<null> => _i_generic.wrap_unresolved_state_group(
                        ['state', _i_generic.process_group(
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
                        null
                    ),
                }),
            }
        ),
    }
)
export const Optional_Value_Initialization: _i_signatures._T_Optional_Value_Initialization = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'not set': ($): _i_out._T_Optional_Value_Initialization<null> => _i_generic.wrap_unresolved_state_group(
                ['not set', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'selection': ($): _i_out._T_Optional_Value_Initialization<null> => _i_generic.wrap_unresolved_state_group(
                ['selection', Possible_Value_Selection(
                    $,
                    null
                )],
                null
            ),
            'set': ($): _i_out._T_Optional_Value_Initialization<null> => _i_generic.wrap_unresolved_state_group(
                ['set', Guaranteed_Value_Selection(
                    $,
                    null
                )],
                null
            ),
        }),
    }
)
export const Possible_Value_Selection: _i_signatures._T_Possible_Value_Selection = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'parameter': ($): _i_out._T_Possible_Value_Selection<null> => _i_generic.wrap_unresolved_state_group(
                ['parameter', _i_generic.process_selected_reference(
                    $,
                    null
                )],
                null
            ),
            'result': ($): _i_out._T_Possible_Value_Selection<null> => _i_generic.wrap_unresolved_state_group(
                ['result', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'optional value': ($): _i_out._T_Possible_Value_Selection.SG.result<null> => _i_generic.wrap_unresolved_state_group(
                                ['optional value', _i_generic.process_group(
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
                                                null
                                            )),
                                        }),
                                    }
                                )],
                                null
                            ),
                            'state group': ($): _i_out._T_Possible_Value_Selection.SG.result<null> => _i_generic.wrap_unresolved_state_group(
                                ['state group', _i_generic.process_group(
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
                                                null
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
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
        }),
    }
)
export const Presence: _i_signatures._T_Presence = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'optional': ($): _i_out._T_Presence<null> => _i_generic.wrap_unresolved_state_group(
                ['optional', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'required': ($): _i_out._T_Presence<null> => _i_generic.wrap_unresolved_state_group(
                ['required', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
        }),
    }
)
export const Property_Constraint: _i_signatures._T_Property_Constraint = ($) => _i_generic.process_group(
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
                null
            )),
            'start': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "start",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'property': ($): _i_out._T_Property_Constraint.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['property', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'sibling': ($): _i_out._T_Property_Constraint.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['sibling', Reference_To_Property_Constraint(
                                $,
                                null
                            )],
                            null
                        ),
                    }),
                }
            )),
        }),
    }
)
export const Property_Constraints: _i_signatures._T_Property_Constraints = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => Property_Constraint(
            $,
            null
        ),
    }
)
export const Reference_To_Property_Constraint: _i_signatures._T_Reference_To_Property_Constraint = ($) => _i_generic.process_selected_reference(
    $,
    null
)
export const Relative_Value_Selection: _i_signatures._T_Relative_Value_Selection = ($) => _i_generic.process_group(
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
                    'value': ($) => _i_generic.process_state_group(
                        $,
                        {
                            'states': _pa.dictionary_literal({
                                'component': ($): _i_out._T_Relative_Value_Selection.path.L<null> => _i_generic.wrap_unresolved_state_group(
                                    ['component', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    null
                                ),
                                'group': ($): _i_out._T_Relative_Value_Selection.path.L<null> => _i_generic.wrap_unresolved_state_group(
                                    ['group', _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )],
                                    null
                                ),
                                'reference': ($): _i_out._T_Relative_Value_Selection.path.L<null> => _i_generic.wrap_unresolved_state_group(
                                    ['reference', _i_generic.process_group(
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
                                    null
                                ),
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
export const Resolve_Logic: _i_signatures._T_Resolve_Logic = ($) => _i_generic.process_group(
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
                null
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
                            null
                        )),
                    }),
                }
            )),
        }),
    }
)
export const Resolvers: _i_signatures._T_Resolvers = ($) => _i_generic.process_unresolved_dictionary(
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
                        null
                    )),
                }),
            }
        ),
    }
)
export const Schema: _i_signatures._T_Schema = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'complexity': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "complexity",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'constrained': ($): _i_out._T_Schema.complexity<null> => _i_generic.wrap_unresolved_state_group(
                            ['constrained', Resolve_Logic(
                                $,
                                null
                            )],
                            null
                        ),
                        'unconstrained': ($): _i_out._T_Schema.complexity<null> => _i_generic.wrap_unresolved_state_group(
                            ['unconstrained', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
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
                null
            )),
            'imports': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "imports",
                }
            ), ($) => Imports(
                $,
                null
            )),
            'types': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "types",
                }
            ), ($) => Types(
                $,
                null
            )),
        }),
    }
)
export const Schemas: _i_signatures._T_Schemas = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'schema': ($): _i_out._T_Schemas.D<null> => _i_generic.wrap_unresolved_state_group(
                        ['schema', Schema(
                            $,
                            null
                        )],
                        null
                    ),
                    'set': ($): _i_out._T_Schemas.D<null> => _i_generic.wrap_unresolved_state_group(
                        ['set', Schemas(
                            $,
                            null
                        )],
                        null
                    ),
                }),
            }
        ),
    }
)
export const Signature: _i_signatures._T_Signature = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'parameters': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "parameters",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'local': ($): _i_out._T_Signature.parameters<null> => _i_generic.wrap_unresolved_state_group(
                            ['local', Signature_Parameters(
                                $,
                                null
                            )],
                            null
                        ),
                        'same as': ($): _i_out._T_Signature.parameters<null> => _i_generic.wrap_unresolved_state_group(
                            ['same as', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            null
                        ),
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
export const Signature_Parameters: _i_signatures._T_Signature_Parameters = ($) => _i_generic.process_group(
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
                                    null
                                )),
                                'referent': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "referent",
                                    }
                                ), ($) => Type_Reference(
                                    $,
                                    null
                                )),
                                'type': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'acyclic': ($): _i_out._T_Signature_Parameters.lookups.D._type<null> => _i_generic.wrap_unresolved_state_group(
                                                ['acyclic', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                null
                                            ),
                                            'cyclic': ($): _i_out._T_Signature_Parameters.lookups.D._type<null> => _i_generic.wrap_unresolved_state_group(
                                                ['cyclic', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                null
                                            ),
                                            'stack': ($): _i_out._T_Signature_Parameters.lookups.D._type<null> => _i_generic.wrap_unresolved_state_group(
                                                ['stack', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                null
                                            ),
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
                                    null
                                )),
                                'presence': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "presence",
                                    }
                                ), ($) => Presence(
                                    $,
                                    null
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Signatures: _i_signatures._T_Signatures = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => Signature(
            $,
            null
        ),
    }
)
export const Text_Type: _i_signatures._T_Text_Type = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'multi line': ($): _i_out._T_Text_Type._type<null> => _i_generic.wrap_unresolved_state_group(
                            ['multi line', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'single line': ($): _i_out._T_Text_Type._type<null> => _i_generic.wrap_unresolved_state_group(
                            ['single line', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                    }),
                }
            )),
        }),
    }
)
export const Type: _i_signatures._T_Type = ($) => _i_generic.process_group(
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
                null
            )),
            'type parameters': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type parameters",
                }
            ), ($) => Type_Parameters(
                $,
                null
            )),
        }),
    }
)
export const Type_Node: _i_signatures._T_Type_Node = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'boolean': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['boolean', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'component': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['component', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'external': ($): _i_out._T_Type_Node.SG.component<null> => _i_generic.wrap_unresolved_state_group(
                                ['external', _i_generic.process_group(
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
                                null
                            ),
                            'internal': ($): _i_out._T_Type_Node.SG.component<null> => _i_generic.wrap_unresolved_state_group(
                                ['internal', _i_generic.process_selected_reference(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'internal cyclic': ($): _i_out._T_Type_Node.SG.component<null> => _i_generic.wrap_unresolved_state_group(
                                ['internal cyclic', _i_generic.process_selected_reference(
                                    $,
                                    null
                                )],
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
            'dictionary': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['dictionary', Dictionary(
                    $,
                    null
                )],
                null
            ),
            'group': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['group', Group(
                    $,
                    null
                )],
                null
            ),
            'identifier value pair': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['identifier value pair', Type_Node(
                    $,
                    null
                )],
                null
            ),
            'list': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['list', _i_generic.process_group(
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
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
            'nothing': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['nothing', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'number': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['number', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'global': ($): _i_out._T_Type_Node.SG._number<null> => _i_generic.wrap_unresolved_state_group(
                                ['global', _i_generic.process_selected_reference(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'local': ($): _i_out._T_Type_Node.SG._number<null> => _i_generic.wrap_unresolved_state_group(
                                ['local', Number_Type(
                                    $,
                                    null
                                )],
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
            'optional': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['optional', Type_Node(
                    $,
                    null
                )],
                null
            ),
            'reference': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['reference', _i_generic.process_group(
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
                                null
                            )),
                            'type': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "type",
                                }
                            ), ($) => _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'derived': ($): _i_out._T_Type_Node.SG.reference._type<null> => _i_generic.wrap_unresolved_state_group(
                                            ['derived', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'selected': ($): _i_out._T_Type_Node.SG.reference._type<null> => _i_generic.wrap_unresolved_state_group(
                                            ['selected', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'dependency': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "dependency",
                                                            }
                                                        ), ($) => _i_generic.process_state_group(
                                                            $,
                                                            {
                                                                'states': _pa.dictionary_literal({
                                                                    'acyclic': ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency<null> => _i_generic.wrap_unresolved_state_group(
                                                                        ['acyclic', _i_generic.process_nothing(
                                                                            $,
                                                                            null
                                                                        )],
                                                                        null
                                                                    ),
                                                                    'cyclic': ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency<null> => _i_generic.wrap_unresolved_state_group(
                                                                        ['cyclic', _i_generic.process_nothing(
                                                                            $,
                                                                            null
                                                                        )],
                                                                        null
                                                                    ),
                                                                    'stack': ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency<null> => _i_generic.wrap_unresolved_state_group(
                                                                        ['stack', _i_generic.process_nothing(
                                                                            $,
                                                                            null
                                                                        )],
                                                                        null
                                                                    ),
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
                                            null
                                        ),
                                    }),
                                }
                            )),
                        }),
                    }
                )],
                null
            ),
            'state group': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['state group', _i_generic.process_unresolved_dictionary(
                    $,
                    {
                        'value': ($) => Type_Node(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
            'text': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['text', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'global': ($): _i_out._T_Type_Node.SG.text<null> => _i_generic.wrap_unresolved_state_group(
                                ['global', _i_generic.process_selected_reference(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'local': ($): _i_out._T_Type_Node.SG.text<null> => _i_generic.wrap_unresolved_state_group(
                                ['local', Text_Type(
                                    $,
                                    null
                                )],
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
            'type parameter': ($): _i_out._T_Type_Node<null> => _i_generic.wrap_unresolved_state_group(
                ['type parameter', _i_generic.process_selected_reference(
                    $,
                    null
                )],
                null
            ),
        }),
    }
)
export const Type_Node_Reference: _i_signatures._T_Type_Node_Reference = ($) => _i_generic.process_group(
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
                    'value': ($) => _i_generic.process_state_group(
                        $,
                        {
                            'states': _pa.dictionary_literal({
                                'dictionary': ($): _i_out._T_Type_Node_Reference.tail.L<null> => _i_generic.wrap_unresolved_state_group(
                                    ['dictionary', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    null
                                ),
                                'group': ($): _i_out._T_Type_Node_Reference.tail.L<null> => _i_generic.wrap_unresolved_state_group(
                                    ['group', _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )],
                                    null
                                ),
                                'identifier value pair': ($): _i_out._T_Type_Node_Reference.tail.L<null> => _i_generic.wrap_unresolved_state_group(
                                    ['identifier value pair', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    null
                                ),
                                'list': ($): _i_out._T_Type_Node_Reference.tail.L<null> => _i_generic.wrap_unresolved_state_group(
                                    ['list', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    null
                                ),
                                'optional': ($): _i_out._T_Type_Node_Reference.tail.L<null> => _i_generic.wrap_unresolved_state_group(
                                    ['optional', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    null
                                ),
                                'state group': ($): _i_out._T_Type_Node_Reference.tail.L<null> => _i_generic.wrap_unresolved_state_group(
                                    ['state group', _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )],
                                    null
                                ),
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
                null
            )),
        }),
    }
)
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_nothing(
            $,
            null
        ),
    }
)
export const Type_Reference: _i_signatures._T_Type_Reference = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'location': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "location",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'external': ($): _i_out._T_Type_Reference.location<null> => _i_generic.wrap_unresolved_state_group(
                            ['external', _i_generic.process_group(
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
                            null
                        ),
                        'internal': ($): _i_out._T_Type_Reference.location<null> => _i_generic.wrap_unresolved_state_group(
                            ['internal', _i_generic.process_selected_reference(
                                $,
                                null
                            )],
                            null
                        ),
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
export const Types: _i_signatures._T_Types = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => Type(
            $,
            null
        ),
    }
)
