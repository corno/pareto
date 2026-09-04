import * as p_ from 'pareto-core/implementation/query'

//interface dependencies
import type * as query_interfaces_file_in_directory_out from "pareto-common/modules/file_in_directory_out/queries/interfaces"

//data  types
import type * as s_serialize_prose from "../../../typescript_light/schemas/serialization/schema.js"
import type * as s_module from "../../schemas/module/schema.js"
import type * as s_file_in_directory_out_query from "pareto-common/modules/file_in_directory_out/schemas/query/schema"

//dependencies
import * as t_typescript_to_directory_content from "../../../typescript_light/schemas/typescript_light/transformers/to_be_written_directory_content.js"
import * as t_pareto_to_typescript from "../../schemas/module/transformers/typescript_light.js"



export const $$: p_.Query_Implementation<
    query_interfaces_file_in_directory_out.operation,
    {
        'module': s_module.Root,
        'serialization parameters': s_serialize_prose.Source_File_Parameters,
    },
    null
> = p_.query(
    (e, $s, $q) => e.transform(
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
