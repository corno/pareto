import * as p_ from 'pareto-core/schema'

import * as i_value_reference from "../value_reference/schema.js"
import * as i_type_reference from "../type_reference/schema.js"
import * as i_schema_reference from "../schema_reference/schema.js"

export type Root = {
        'error schema': p_.Optional_Value<string>
        'parameters schema': p_.Optional_Value<string>
        'declarations': {
                'types': p_.Dictionary<Root.declarations.types_D>
        }
        'implementation': {
                'dependencies': p_.Dictionary<Root.implementation.dependencies_D>

                'types': p_.Dictionary<Root.implementation.types_D>
        }
}

export namespace Root {
        export namespace declarations {

                export type types_D = {
                        'source':
                        | ['value', i_value_reference.Value_Reference]
                        | ['iterator', i_value_reference.Value_Reference]
                        'error': p_.Optional_Value<i_type_reference.Type_Reference>
                        'parameter': p_.Optional_Value<i_type_reference.Type_Reference>
                }
        }
        export namespace implementation {

                export type types_D = {
                }
                export type dependencies_D = {
                }
        }

}
