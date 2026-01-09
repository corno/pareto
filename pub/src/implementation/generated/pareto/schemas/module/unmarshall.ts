import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/module/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/module/data_types/target"
import * as _i_r_schema from "../schema/unmarshall"


export const Operations: _i_signatures._T_Operations = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_unresolved_state_group(
            $,
            {
                'states': _p.dictionary.literal({
                    'operation': ($): _i_out._T_Operations.D.SG<_i_in._T_Range> => ['operation', _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'type parameters': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type parameters",
                                    }
                                ), ($) => _i_r_schema.Type_Parameters(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'context': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "context",
                                    }
                                ), ($) => _i_r_schema.Type_Node(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'parameters': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "parameters",
                                    }
                                ), ($) => _i_generic.process_unresolved_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_r_schema.Type_Node(
                                            $,
                                            {
                                                'value deserializers': $p['value deserializers'],
                                            }
                                        ),
                                    }
                                )),
                                'result': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "result",
                                    }
                                ), ($) => _i_r_schema.Type_Node(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                            }),
                        }
                    )],
                    'set': ($): _i_out._T_Operations.D.SG<_i_in._T_Range> => ['set', Operations(
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
export const Module: _i_signatures._T_Module = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'schema tree': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "schema tree",
                }
            ), ($) => _i_r_schema.Schema_Tree(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'operations': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "operations",
                }
            ), ($) => Operations(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
