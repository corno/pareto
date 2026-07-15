import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import type * as p_di from 'pareto-core/interface/schema'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//schemas
import type * as s_out_fs from "../../../interface/schemas/filesystem.js"
import type * as s_in from "../../../interface/schemas/typescript_light.js"

//dependencies
import * as t_to_prose from "./paragraph.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose_simple/deprecated"

namespace declarations {

    export type Directory = p_i.Transformer<
        s_in.Directory,
        s_out_fs.Directory
    >

}

export const Directory: declarations.Directory = ($) => p_.from.dictionary($).map(
    ($, id) => p_.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'file': return p_.option($, ($) => ['file', t_to_prose.Statements(
                    $['statements'],
                    { 'replace empty type literals by symbol': true }
                )])
                case 'directory': return p_.option($, ($) => ['directory', Directory($)])
                default: return p_.exhaustive($[0])
            }
        }
    )
)