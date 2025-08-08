import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/unmarshall_errors/data_types/unconstrained"
import * as _i_signatures from "../../../interface/schemas/unmarshall_errors/unmarshall"


export const Errors: _i_signatures._T_Errors = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'range': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "range",
                        }
                    ), ($) => Range(
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
                    ), ($) => _i_generic.process_state_group(
                        $,
                        {
                            'states': _pa.dictionary_literal({
                                'error': ($): _i_out._T_Errors.L._type => _i_generic.wrap_unconstrained_state_group(
                                    ['error', _i_generic.process_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'duplicate property': ($): _i_out._T_Errors.L._type.SG.error => _i_generic.wrap_unconstrained_state_group(
                                                    ['duplicate property', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'name': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "name",
                                                                    }
                                                                ), ($) => _i_generic.process_text(
                                                                    $,
                                                                    null
                                                                )),
                                                            }),
                                                        }
                                                    )],
                                                    null
                                                ),
                                                'invalid value type': ($): _i_out._T_Errors.L._type.SG.error => _i_generic.wrap_unconstrained_state_group(
                                                    ['invalid value type', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'expected': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "expected",
                                                                    }
                                                                ), ($) => _i_generic.process_state_group(
                                                                    $,
                                                                    {
                                                                        'states': _pa.dictionary_literal({
                                                                            'dictionary': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected => _i_generic.wrap_unconstrained_state_group(
                                                                                ['dictionary', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                null
                                                                            ),
                                                                            'group': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected => _i_generic.wrap_unconstrained_state_group(
                                                                                ['group', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                null
                                                                            ),
                                                                            'text': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected => _i_generic.wrap_unconstrained_state_group(
                                                                                ['text', _i_generic.process_nothing(
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
                                                'missing property': ($): _i_out._T_Errors.L._type.SG.error => _i_generic.wrap_unconstrained_state_group(
                                                    ['missing property', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'name': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "name",
                                                                    }
                                                                ), ($) => _i_generic.process_text(
                                                                    $,
                                                                    null
                                                                )),
                                                            }),
                                                        }
                                                    )],
                                                    null
                                                ),
                                                'state': ($): _i_out._T_Errors.L._type.SG.error => _i_generic.wrap_unconstrained_state_group(
                                                    ['state', _i_generic.process_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary_literal({
                                                                'missing state name': ($): _i_out._T_Errors.L._type.SG.error.SG.state => _i_generic.wrap_unconstrained_state_group(
                                                                    ['missing state name', _i_generic.process_nothing(
                                                                        $,
                                                                        null
                                                                    )],
                                                                    null
                                                                ),
                                                                'missing value': ($): _i_out._T_Errors.L._type.SG.error.SG.state => _i_generic.wrap_unconstrained_state_group(
                                                                    ['missing value', _i_generic.process_nothing(
                                                                        $,
                                                                        null
                                                                    )],
                                                                    null
                                                                ),
                                                                'more than 2 elements': ($): _i_out._T_Errors.L._type.SG.error.SG.state => _i_generic.wrap_unconstrained_state_group(
                                                                    ['more than 2 elements', _i_generic.process_nothing(
                                                                        $,
                                                                        null
                                                                    )],
                                                                    null
                                                                ),
                                                                'state is not a string': ($): _i_out._T_Errors.L._type.SG.error.SG.state => _i_generic.wrap_unconstrained_state_group(
                                                                    ['state is not a string', _i_generic.process_nothing(
                                                                        $,
                                                                        null
                                                                    )],
                                                                    null
                                                                ),
                                                                'unknown state': ($): _i_out._T_Errors.L._type.SG.error.SG.state => _i_generic.wrap_unconstrained_state_group(
                                                                    ['unknown state', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => ({
                                                                                'expected': _pa.cc(_i_generic.get_entry(
                                                                                    $,
                                                                                    {
                                                                                        'key': "expected",
                                                                                    }
                                                                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                                                                    $,
                                                                                    {
                                                                                        'value': ($) => _i_generic.process_nothing(
                                                                                            $,
                                                                                            null
                                                                                        ),
                                                                                    }
                                                                                )),
                                                                                'found': _pa.cc(_i_generic.get_entry(
                                                                                    $,
                                                                                    {
                                                                                        'key': "found",
                                                                                    }
                                                                                ), ($) => _i_generic.process_text(
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
                                    )],
                                    null
                                ),
                                'warning': ($): _i_out._T_Errors.L._type => _i_generic.wrap_unconstrained_state_group(
                                    ['warning', _i_generic.process_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'expected apostrophed string': ($): _i_out._T_Errors.L._type.SG.warning => _i_generic.wrap_unconstrained_state_group(
                                                    ['expected apostrophed string', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                    null
                                                ),
                                                'expected backticked string': ($): _i_out._T_Errors.L._type.SG.warning => _i_generic.wrap_unconstrained_state_group(
                                                    ['expected backticked string', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                    null
                                                ),
                                                'expected quoted string': ($): _i_out._T_Errors.L._type.SG.warning => _i_generic.wrap_unconstrained_state_group(
                                                    ['expected quoted string', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                    null
                                                ),
                                                'expected undelimited string': ($): _i_out._T_Errors.L._type.SG.warning => _i_generic.wrap_unconstrained_state_group(
                                                    ['expected undelimited string', _i_generic.process_nothing(
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
                            }),
                        }
                    )),
                }),
            }
        ),
    }
)
export const Location: _i_signatures._T_Location = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'absolute': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "absolute",
                }
            ), ($) => _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )),
            'relative': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "relative",
                }
            ), ($) => Relative_Location(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Range: _i_signatures._T_Range = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'end': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "end",
                }
            ), ($) => Location(
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
            ), ($) => Location(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Relative_Location: _i_signatures._T_Relative_Location = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'column': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "column",
                }
            ), ($) => _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )),
            'line': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "line",
                }
            ), ($) => _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )),
        }),
    }
)
