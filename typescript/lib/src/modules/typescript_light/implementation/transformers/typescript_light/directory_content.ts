import * as p_ from 'pareto-core/implementation/transformer'
import p_add_id_suffix from 'pareto-core/implementation/transformer/specials/add_id_suffix'

import * as s_in from "../../../schemas/typescript_light.js"
import * as s_out from "pareto-filesystem-unrestricted-api/modules/helpers/schemas/to_be_written_directory_content"
import * as s_file_write_parameters from "pareto-filesystem-unrestricted-api/modules/helpers/schemas/write_directory_content"
import * as s_serialization_parameters from "../../../schemas/serialization.js"

//dependencies

import * as t_to_serialized from "./serialized.js"

export const Directory: p_.Transformer_With_Parameter<
    s_in.Directory,
    s_out.Directory,
    {
        'file write parameters': s_file_write_parameters.File_Write_Parameters
        'serialization parameters': s_serialization_parameters.Source_File_Parameters
    }
> = ($, $p) => p_.from.state($.content).decide(
    ($): s_out.Directory => {
        switch ($[0]) {
            case 'files': return p_.ss($, ($) => p_.from.dictionary(
                p_add_id_suffix(
                    $,
                    ".ts"
                )
            ).map(
                ($, id): s_out.Node => ['file', {
                    'content': {
                        'lines': t_to_serialized.Source_File(
                            $,
                            $p['serialization parameters']
                        ),
                        'parameters': $p['file write parameters']
                    }
                }]
            ))
            case 'directories': return p_.ss($, ($) => p_.from.dictionary($).map(
                ($, id): s_out.Node => ['directory', Directory($, $p)]
            ))
            case 'mixed': return p_.ss($, ($) => p_.from.dictionary($).map(
                ($, id): s_out.Node => {
                    switch ($[0]) {
                        case 'file': return ['file', {
                            'content': {
                                'lines': t_to_serialized.Source_File(
                                    $[1],
                                    $p['serialization parameters']
                                ),
                                'parameters': $p['file write parameters']
                            }
                        }]
                        case 'directory': return ['directory', Directory($[1], $p)]
                        default: return p_.au($[0])
                    }
                }
            ))
            default: return p_.au($[0])
        }
    }
)
