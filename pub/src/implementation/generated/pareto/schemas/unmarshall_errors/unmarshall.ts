    import * as _p from 'pareto-core-refiner'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_generic from "../../generic/unmarshall"
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/unmarshall_errors/unmarshall"
    import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
    import * as _i_out from "../../../../../interface/generated/pareto/schemas/unmarshall_errors/data_types/target"
    
    
    export const Relative_Location: _i_signatures._T_Relative_Location = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'line': _p.deprecated_cc(_i_generic.get_entry(
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
                'column': _p.deprecated_cc(_i_generic.get_entry(
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
            }),
        }
    )
    export const Location: _i_signatures._T_Location = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'relative': _p.deprecated_cc(_i_generic.get_entry(
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
                'absolute': _p.deprecated_cc(_i_generic.get_entry(
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
            }),
        }
    )
    export const Range: _i_signatures._T_Range = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'start': _p.deprecated_cc(_i_generic.get_entry(
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
                'end': _p.deprecated_cc(_i_generic.get_entry(
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
            }),
        }
    )
    export const Errors: _i_signatures._T_Errors = ($, $p) => _i_generic.process_unconstrained_list(
        $,
        {
            'value': ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'range': _p.deprecated_cc(_i_generic.get_entry(
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
                        'type': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "type",
                            }
                        ), ($) => _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _p.dictionary.literal({
                                    'error': ($): _i_out._T_Errors.L._type.SG => ['error', _i_generic.process_unconstrained_state_group(
                                        $,
                                        {
                                            'states': _p.dictionary.literal({
                                                'invalid value type': ($): _i_out._T_Errors.L._type.SG.error.SG => ['invalid value type', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'expected': _p.deprecated_cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "expected",
                                                                }
                                                            ), ($) => _i_generic.process_unconstrained_list(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_unconstrained_state_group(
                                                                        $,
                                                                        {
                                                                            'states': _p.dictionary.literal({
                                                                                'text': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected.L.SG => ['text', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                'verbose group': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected.L.SG => ['verbose group', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                'concise group': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected.L.SG => ['concise group', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                'dictionary': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected.L.SG => ['dictionary', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                'not set': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected.L.SG => ['not set', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                'set': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected.L.SG => ['set', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                'list': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected.L.SG => ['list', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                                'state': ($): _i_out._T_Errors.L._type.SG.error.SG.invalid_value_type.expected.L.SG => ['state', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                            }),
                                                                        }
                                                                    ),
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                'duplicate property': ($): _i_out._T_Errors.L._type.SG.error.SG => ['duplicate property', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'name': _p.deprecated_cc(_i_generic.get_entry(
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
                                                'missing property': ($): _i_out._T_Errors.L._type.SG.error.SG => ['missing property', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'name': _p.deprecated_cc(_i_generic.get_entry(
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
                                                'superfluous property': ($): _i_out._T_Errors.L._type.SG.error.SG => ['superfluous property', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'name': _p.deprecated_cc(_i_generic.get_entry(
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
                                                'state': ($): _i_out._T_Errors.L._type.SG.error.SG => ['state', _i_generic.process_unconstrained_state_group(
                                                    $,
                                                    {
                                                        'states': _p.dictionary.literal({
                                                            'more than 2 elements': ($): _i_out._T_Errors.L._type.SG.error.SG.state.SG => ['more than 2 elements', _i_generic.process_nothing(
                                                                $,
                                                                null
                                                            )],
                                                            'missing state name': ($): _i_out._T_Errors.L._type.SG.error.SG.state.SG => ['missing state name', _i_generic.process_nothing(
                                                                $,
                                                                null
                                                            )],
                                                            'state is not a string': ($): _i_out._T_Errors.L._type.SG.error.SG.state.SG => ['state is not a string', _i_generic.process_nothing(
                                                                $,
                                                                null
                                                            )],
                                                            'missing value': ($): _i_out._T_Errors.L._type.SG.error.SG.state.SG => ['missing value', _i_generic.process_nothing(
                                                                $,
                                                                null
                                                            )],
                                                            'unknown state': ($): _i_out._T_Errors.L._type.SG.error.SG.state.SG => ['unknown state', _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'found': _p.deprecated_cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "found",
                                                                            }
                                                                        ), ($) => _i_generic.process_text(
                                                                            $,
                                                                            null
                                                                        )),
                                                                        'expected': _p.deprecated_cc(_i_generic.get_entry(
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
                                                                    }),
                                                                }
                                                            )],
                                                            'missing data marker': ($): _i_out._T_Errors.L._type.SG.error.SG.state.SG => ['missing data marker', _i_generic.process_nothing(
                                                                $,
                                                                null
                                                            )],
                                                        }),
                                                    }
                                                )],
                                            }),
                                        }
                                    )],
                                    'warning': ($): _i_out._T_Errors.L._type.SG => ['warning', _i_generic.process_unconstrained_state_group(
                                        $,
                                        {
                                            'states': _p.dictionary.literal({
                                                'expected apostrophed string': ($): _i_out._T_Errors.L._type.SG.warning.SG => ['expected apostrophed string', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'expected quoted string': ($): _i_out._T_Errors.L._type.SG.warning.SG => ['expected quoted string', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'expected backticked string': ($): _i_out._T_Errors.L._type.SG.warning.SG => ['expected backticked string', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'expected undelimited string': ($): _i_out._T_Errors.L._type.SG.warning.SG => ['expected undelimited string', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )),
                    }),
                }
            ),
        }
    )
