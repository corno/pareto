import * as p_ from 'pareto-core/schema'

import * as i_value_reference from "../value_reference/schema.js"
import * as i_type_reference from "../type_reference/schema.js"
import * as i_schema_reference from "../schema_reference/schema.js"

export type Root = {
        'error schema': string
        'parameters schema': p_.Optional_Value<string>
        'types': p_.Dictionary<Root.types_D>
}

export namespace Root {
        export type types_D = {
                'source':
                | ['value', i_value_reference.Value_Reference]
                | ['iterator', i_value_reference.Value_Reference]
                'error': p_.Optional_Value<i_type_reference.Type_Reference>
                'parameter': p_.Optional_Value<i_type_reference.Type_Reference>
        }

}
