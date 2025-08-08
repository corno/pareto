import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/module/data_types/unresolved"
import * as _i_r_schema from "../schema/unmarshall"
import * as _i_signatures from "../../../interface/schemas/module/unmarshall"


export const Module: _i_signatures._T_Module = ($) => _i_generic.process_group(
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
                null
            )),
            'schemas': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "schemas",
                }
            ), ($) => _i_r_schema.Schemas(
                $,
                null
            )),
        }),
    }
)
export const Operations: _i_signatures._T_Operations = ($) => _i_generic.process_unresolved_dictionary(
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
                                        null
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
                                                null
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
                                        null
                                    )),
                                    'type parameters': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "type parameters",
                                        }
                                    ), ($) => _i_r_schema.Type_Parameters(
                                        $,
                                        null
                                    )),
                                }),
                            }
                        )],
                        null
                    ),
                    'set': ($): _i_out._T_Operations.D<null> => _i_generic.wrap_unresolved_state_group(
                        ['set', Operations(
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
