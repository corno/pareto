import * as p_ from 'pareto-core/interface/schema'

import * as i_value_reference from "./value_reference.js"
import * as i_type_reference from "./type_reference.js"
import * as i_schema_reference from "./schema_reference.js"

export type Root = {
        'schemas': p_.Dictionary<Root.schemas_D> //this is a sparse dictionary on the schemas in the module
}

export namespace Root {

        export type schemas_D = {
                'source schemas': p_.Dictionary<schemas_D.source_schemas_D>
        }

        export namespace schemas_D {

                export type source_schemas_D = {
                        'error schema': string
                        'parameters schema': p_.Optional_Value<string>
                        'types': p_.Dictionary<source_schemas_D.types_D>
                }

                export namespace source_schemas_D {

                        export type types_D = {
                                'source':
                                | ['value', i_value_reference.Value_Reference]
                                | ['iterator', i_value_reference.Value_Reference]
                                'error': p_.Optional_Value<i_type_reference.Type_Reference>
                                'parameter': p_.Optional_Value<i_type_reference.Type_Reference>
                        }

                }

        }

}
