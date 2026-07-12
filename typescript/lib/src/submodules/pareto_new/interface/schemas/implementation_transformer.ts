import * as p_ from 'pareto-core/interface/data'

export type Root = {
        'schemas': p_.Dictionary<Root.schemas_D> //this is a sparse dictionary on the schemas in the module
}

export namespace Root {
        export type schemas_D = {
                'target schemas': p_.Dictionary<schemas_D.target_schemas_D>
        }
        export namespace schemas_D {
                export type target_schemas_D = {
                        'dependencies': p_.Dictionary<target_schemas_D.dependencies_D>
                        'types': p_.Dictionary<target_schemas_D.types_D>
                }
                export namespace target_schemas_D {
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

export type Expression =
        | ['implement me', {
                'remark': string
        }]


