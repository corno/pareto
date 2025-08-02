//core
import * as pd from 'exupery-core-data'
import * as pdev from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'
import * as _er from 'exupery-core-resources'


import * as sh from "pareto-fountain-pen/dist/shorthands/lines"

//shorthands

//data
import { $ as poormans_modules } from "../temporary_schemas/all"

//resolvers
import * as r_module from "../resolvers/module"

//orchestration
import * as write_to_disk from "pareto-fountain-pen/dist/other/write_to_disk"

//transformations
import * as generate_and_write_to_disk from "./generate_and_write_to_disk"

export const get_module = ($: string) => {

    pdev.log_debug_message("resolving -start-")
    const astn_module = r_module.r_Module(
        poormans_modules.__get_entry($).transform(
            ($) => $,
            () => _ea.panic("Module not found: " + $),
        ),
        {
            'parameters': {
                'lookups': null,
                'values': null,
            },
            'location 2 string': pd.location_to_string
        }
    )
    pdev.log_debug_message("resolving -end-")
    return astn_module
}

export const generate_source_code: (
    $: null,
    $p: {
        'path': string,
    }
) => void = ($, $p) => {

    poormans_modules.map(($, key) => {
        generate_and_write_to_disk.$$(
            $,
            {
                'path': $p.path + "/" + key,
                'target': ['typescript', null]
            }
        )
        _er.temp_resources.fs['write file sync']($p.path + "/" + key + "/implementation/generic/resolve.ts", _er.temp_resources.fs['read file sync']("./src/generated/implementation/generic/resolve.ts", true), true)
        _er.temp_resources.fs['write file sync']($p.path + "/" + key + "/interface/core/resolve.ts", _er.temp_resources.fs['read file sync']("./src/generated/interface/core/resolve.ts", true), true)
        _er.temp_resources.fs['write file sync']($p.path + "/" + key + "/interface/core/astn_target.ts", _er.temp_resources.fs['read file sync']("./src/generated/interface/core/astn_target.ts", true), true)
        _er.temp_resources.fs['write file sync']($p.path + "/" + key + "/interface/core/astn_source.ts", _er.temp_resources.fs['read file sync']("./src/generated/interface/core/astn_source.ts", true), true)
    })


}

export const generate_rest: (
    $: null,
    $p: {
        'path': string,
    }
) => void = ($, $p) => {
    pdev.log_debug_message("FIX THE REST")
    // write_to_disk.Directory(
    //     poormans_modules.map(($, key) => {
    //         return sh.d.directory(t_astn_module_to_astn_out.Module_REST(
    //             get_module(key),
    //         ))
    //     }),
    //     {
    //         'path': $p.path,
    //     }
    // )


}