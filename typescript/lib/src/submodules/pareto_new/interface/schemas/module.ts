import * as p_ from 'pareto-core/interface/data'

import * as i_schemas from "./schemas.js"
import * as i_interface_command from "./interface_command.js"
import * as i_interface_query from "./interface_query.js"
import * as i_declarations_transformer from "./declarations_transformer.js"
import * as i_declarations_query from "./declarations_query.js"
import * as i_declarations_command from "./declarations_command.js"
import * as i_declarations_refiner from "./declarations_refiner.js"
import * as i_implementation_transformer from "./implementation_transformer.js"
import * as i_implementation_query from "./implementation_query.js"
import * as i_implementation_command from "./implementation_command.js"
import * as i_implementation_refiner from "./implementation_refiner.js"

export type Root = Module

export type Module = {
    'submodules': p_.Dictionary<Module>
    'interface': {
        'schemas': i_schemas.Root
        'commands': i_interface_command.Root
        'query': i_interface_query.Root
    }
    'declarations': {
        'transformers': i_declarations_transformer.Root
        'refiners': i_declarations_refiner.Root
        'queries': i_declarations_query.Root
        'commands': i_declarations_command.Root
    }
    'implementation': {
        'transformers': i_implementation_transformer.Root
        'refiners': i_implementation_refiner.Root
        'queries': i_implementation_query.Root
        'commands': i_implementation_command.Root
    }
}