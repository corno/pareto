import * as p_ from 'pareto-core/interface/schema'

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
            'parameters schema': target_schemas_D.parameters_schema
            'declarations': target_schemas_D.declarations
            'implementations': target_schemas_D.implementations
        }

        export namespace target_schemas_D {

            export type parameters_schema = p_.Optional_Value<string>


            export type declarations = {

                'types': p_.Dictionary<target_schemas_D.declarations.types_D>

            }

            export namespace declarations {
                export type types_D = {
                    'target value': i_value_reference.Value_Reference
                    'parameter': p_.Optional_Value<i_type_reference.Type_Reference>
                }
            }
            export type implementations = {
                'dependencies': p_.Dictionary<target_schemas_D.implementations.dependencies_D>
                'types': p_.Dictionary<target_schemas_D.implementations.types_D>
            }

            export namespace implementations {
                export type types_D = {
                    'expression': Expression
                }
                export type dependencies_D = {
                    'location':
                    | ['this module', null]
                    | ['external module', {
                        'module': string
                    }]
                    'source schema': string
                    'target schema': string
                }
            }
        }
    }
}

export type Expression =
    | ['implement me', {
        'remark': string
    }]



