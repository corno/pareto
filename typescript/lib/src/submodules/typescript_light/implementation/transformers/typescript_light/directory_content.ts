import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../interface/schemas/typescript_light.js"
import * as s_out from "pareto-filesystem-unrestricted-api/interface/schemas/directory_content"

//dependencies

import * as t_fs_to_directory_content from "pareto-fountain-pen-file-structure/implementation/transformers/file-system/directory_content"
import * as t_ts_to_fs from "../typescript_light/filesystem.js"

export const Directory: p_.Transformer<
    s_in.Directory,
    s_out.Directory
> = ($) => t_fs_to_directory_content.Directory(
    t_ts_to_fs.Directory($),
    {
        'indentation': "   ",
        'newline': "\n",
    }
)