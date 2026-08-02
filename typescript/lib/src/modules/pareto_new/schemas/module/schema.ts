import * as p_ from 'pareto-core/interface/schema'

import * as i_command from "../command_implementation/schema.js"
import * as i_command_interface from "../command_interface/schema.js"
import * as i_deserializer from "../deserializer/schema.js"
import * as i_query from "../query_implementation/schema.js"
import * as i_query_interface from "../query_interface/schema.js"
import * as i_refiner from "../refiner/schema.js"
import * as i_schema from "../schema/schema.js"
import * as i_serializer from "../serializer/schema.js"
import * as i_transformer from "../transformer/schema.js"

export type Root = Module

export type Module = {
    'modules': p_.Dictionary<Module>
    'commands': {
        'interfaces': i_command_interface.Root
        'implementations': i_command.Root
    }
    'queries': {
        'interfaces': i_query_interface.Root
        'implementations': i_query.Root
    }
    'schemas': p_.Dictionary<Schema_Package>
}

export type Schema_Package = {
    'schema': i_schema.schema
    'transformers': i_transformer.Root
    'serializers': i_serializer.Root
    'refiners': i_refiner.Root
    'deserializers': i_deserializer.Root
}