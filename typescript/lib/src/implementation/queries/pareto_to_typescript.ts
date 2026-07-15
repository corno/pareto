import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

//interface dependencies
import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"

//data  types
import type * as s_serialize_prose from "../../interface/schemas/prose_serialize.js"
import type * as s_module from "../../submodules/pareto_new/interface/schemas/module.js"
import type * as s_directory_content from "pareto-filesystem-unrestricted-api/interface/schemas/directory_content"
import type * as s_fi_do from "pareto-common/interface/schemas/file_in_directory_out_query"

//dependencies
import * as t_typescript_to_filesystem from "../../submodules/typescript_light/implementation/transformers/typescript_light/filesystem.js"
import * as t_fs_to_directory_content from "pareto-fountain-pen-file-structure/implementation/transformers/file-system/directory_content"
import * as t_pareto_to_typescript from "../../submodules/pareto_new/implementation/transformers/module/typescript_light.js"


//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose_simple/deprecated"

export const $$: p_.Query_Implementation<
    query_interfaces_pareto_common.file_in_directory_out,
    {
        'module': s_module.Root,
        'tab size': number,
        'serialization parameters': s_serialize_prose.Parameters,
    },
    null
> = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.direct_result<null, s_fi_do.Error>(null)).transform(
        ($): s_fi_do.Result => ({
            'data': t_fs_to_directory_content.Directory(
                t_typescript_to_filesystem.Directory(
                    t_pareto_to_typescript.Module(
                        $s.module
                    )
                ),
                {
                    'indentation': "    ",
                    'newline': "\n",
                }
            )
        })
    )
)
