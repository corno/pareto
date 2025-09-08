//core
import * as _ea from 'exupery-core-alg'
import * as _er from 'exupery-core-resources'
import * as _ed from 'exupery-core-data'

//data
import { $ as poormans_modules } from "../temporary_schemas/all"

import * as d_module from "../generated/interface/schemas/module/data_types/unresolved"

import * as r_pareto_module from "../resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../transformations/module/temp_typescript"

import * as wtd from "pareto-fountain-pen/dist/other/write_to_disk"

export const $: (
    $: null,
    $p: {
        'path': string,
    }
) => void = ($, $p) => {

    poormans_modules.map(($, key) => {
        const module_path = `${$p.path}/${key}`
        wtd.Directory(
            t_pareto_module_to_fountain_pen_block.Module(
                r_pareto_module.Module(
                    $,
                    {
                        'parameters': {
                            'lookups': null,
                            'values': null,
                        },
                        'location 2 string': _ed.location_to_string
                    }
                ),
            ),
            {
                'path': module_path,
                'indentation': "    ",
                'newline': "\n"
            }
        )
        _er.temp_resources.fs['write file sync'](module_path + "/implementation/generic/resolve.ts", _er.temp_resources.fs['read file sync']("./src/generated/implementation/generic/resolve.ts", true), true)
        _er.temp_resources.fs['write file sync'](module_path + "/implementation/generic/unmarshall.ts", _er.temp_resources.fs['read file sync']("./src/generated/implementation/generic/unmarshall.ts", true), true)
        _er.temp_resources.fs['write file sync'](module_path + "/interface/core/resolve.ts", _er.temp_resources.fs['read file sync']("./src/generated/interface/core/resolve.ts", true), true)
        _er.temp_resources.fs['write file sync'](module_path + "/interface/core/astn_target.ts", _er.temp_resources.fs['read file sync']("./src/generated/interface/core/astn_target.ts", true), true)
        _er.temp_resources.fs['write file sync'](module_path + "/interface/core/astn_source.ts", _er.temp_resources.fs['read file sync']("./src/generated/interface/core/astn_source.ts", true), true)
    })
}