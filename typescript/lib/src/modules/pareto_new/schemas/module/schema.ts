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
        'interfaces': p_.Dictionary<i_command_interface.Root>
        'implementations': p_.Dictionary<i_command.Root>
    }
    'queries': {
        'interfaces': p_.Dictionary<i_query_interface.Root>
        'implementations': p_.Dictionary<i_query.Root>
    }
    'schemas': p_.Dictionary<Schema_Package>
}

export type Schema_Package = {
    'schema': i_schema.Root
    'transformers': p_.Dictionary<i_transformer.Root>
    'refiners': p_.Dictionary<i_refiner.Root>
    'deserializers': p_.Optional_Value<i_deserializer.Root>
    'serializers': p_.Optional_Value<i_serializer.Root>
}