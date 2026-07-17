import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

//interface dependencies
import type * as query_interfaces_file_in_directory_out from "pareto-common/modules/file_in_directory_out/interface/queries"

//data  types
import type * as s_serialize_prose from "../../submodules/typescript_light/schemas/serialization.js"
import type * as s_module from "../../submodules/pareto_new/interface/schemas/module.js"
import type * as s_file_in_directory_out_query from "pareto-common/modules/file_in_directory_out/schemas/query"

//dependencies
import * as t_typescript_to_directory_content from "../../submodules/typescript_light/implementation/transformers/typescript_light/directory_content.js"
import * as t_pareto_to_typescript from "../../submodules/pareto_new/implementation/transformers/module/typescript_light.js"



export const $$: p_.Query_Implementation<
    query_interfaces_file_in_directory_out.operation,
    {
        'module': s_module.Root,
        'serialization parameters': s_serialize_prose.Source_File_Parameters,
    },
    null
> = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.direct_result(null)).transform(
        ($): s_file_in_directory_out_query.Result => ({
            'data': t_typescript_to_directory_content.Directory(
                t_pareto_to_typescript.Module(
                    $s.module
                ),
                {
                    'file write parameters': {
                        'newline': '\n',
                    },
                    'serialization parameters': $s['serialization parameters'],
                }
            )
        })
    )
)
