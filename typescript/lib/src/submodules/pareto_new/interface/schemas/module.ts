import * as p_ from 'pareto-core/interface/schema'

import * as i_schemas from "./schema.js"
import * as i_interface_command from "./interface_command.js"
import * as i_interface_query from "./interface_query.js"
import * as i_refiner from "./refiner.js"
import * as i_transformer from "./transformer.js"
import * as i_query from "./query.js"
import * as i_command from "./command.js"

export type Root = Module

export type Module = {
    'submodules': p_.Dictionary<Module>
    'interface': {
        'schemas': i_schemas.Root
        'commands': i_interface_command.Root
        'queries': i_interface_query.Root
    }
    'implementation': {
        'transformers': i_transformer.Root
        'refiners': i_refiner.Root
        'queries': i_query.Root
        'commands': i_command.Root
    }
}