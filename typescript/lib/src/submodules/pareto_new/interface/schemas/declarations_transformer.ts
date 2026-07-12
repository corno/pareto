import * as p_ from 'pareto-core/interface/data'

import * as i_value_reference from "./value_reference.js"
import * as i_type_reference from "./type_reference.js"

export type Root = {
        'schemas': p_.Dictionary<Root.schemas_D> //this is a sparse dictionary on the schemas in the module
}

export namespace Root {

        export type schemas_D = {
                'target schemas': p_.Dictionary<schemas_D.target_schemas_D>
        }

        export namespace schemas_D {

                export type target_schemas_D = {
                        'parameters schema': p_.Optional_Value<string>
                        'types': p_.Dictionary<target_schemas_D.types_D>
                }

                export namespace target_schemas_D {

                        export type types_D = {
                                'target value': i_value_reference.Value_Reference
                                'parameter': p_.Optional_Value<i_type_reference.Type_Reference>
                        }

                }

        }

}
