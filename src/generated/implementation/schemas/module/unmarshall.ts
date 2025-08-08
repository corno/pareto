import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/module/data_types/unresolved"
import * as _i_r_schema from "../schema/unmarshall"
import * as _i_signatures from "../../../interface/schemas/module/unmarshall"


export const Module: _i_signatures._T_Module = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'operations': _pa.cc(_i_generic.get_entry(
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
            'schemas': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "schemas",
                }
            ), ($) => _i_r_schema.Schemas(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Operations: _i_signatures._T_Operations = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'operation': ($): _i_out._T_Operations.D<null> => _i_generic.wrap_unresolved_state_group(
                        ['operation', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'context': _pa.cc(_i_generic.get_entry(
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
                                    'parameters': _pa.cc(_i_generic.get_entry(
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
                                    'result': _pa.cc(_i_generic.get_entry(
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
                                    'type parameters': _pa.cc(_i_generic.get_entry(
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
                                }),
                            }
                        )],
                        null
                    ),
                    'set': ($): _i_out._T_Operations.D<null> => _i_generic.wrap_unresolved_state_group(
                        ['set', Operations(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        null
                    ),
                }),
            }
        ),
    }
)
