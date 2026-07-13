import * as p_ from 'pareto-core/implementation/transformer'

import * as sh_module from "lib/shorthands/module/target"
import * as sh_schemas from "lib/shorthands/schemas/target"
import * as sh_interface_command from "lib/shorthands/interface_command/target"
import * as sh_interface_query from "lib/shorthands/interface_query/target"
import * as sh_transformer from "lib/shorthands/transformer/target"
import * as sh_refiner from "lib/shorthands/refiner/target"
import * as sh_query from "lib/shorthands/query/target"
import * as sh_command from "lib/shorthands/command/target"
import * as sh_value_reference from "lib/shorthands/value_reference/target"

export const $ = sh_module.module(
    sh_schemas.root(
        p_.literal.dictionary({
            "schema A": sh_schemas.schema(
                p_.literal.dictionary({}),
                p_.literal.dictionary({
                    "type A": sh_schemas.type(
                        sh_schemas.v.group(
                            p_.literal.dictionary({
                                "property A": sh_schemas.v.boolean(),
                            })
                        )
                    ),
                }),
            ),
            "schema B": sh_schemas.schema(
                p_.literal.dictionary({}),
                p_.literal.dictionary({
                    "type B": sh_schemas.type(
                        sh_schemas.v.optional(
                            sh_schemas.v.text()
                        )
                    ),
                }),
            ),
        })
    ),
    sh_interface_command.root(),
    sh_interface_query.root(),
    sh_transformer.root(p_.literal.dictionary({
        "schema A": {
            'target schemas': p_.literal.dictionary({
                "schema B": {
                    'parameters schema': p_.literal.not_set(),
                    'declarations': {
                        'types': p_.literal.dictionary({
                            "type A": sh_transformer.decl.type(
                                sh_value_reference.value_reference(
                                    "type B",
                                    p_.literal.list([
                                        sh_value_reference.sub.optional(),
                                    ])
                                ),
                                p_.literal.not_set(),
                            )
                        }),
                        'dependencies': p_.literal.dictionary({
                        }),
                    },
                    'implementations': {
                        'dependencies': p_.literal.dictionary({}),
                        'types': p_.literal.dictionary({
                            "type A": {
                                'expression': ['implement me', {
                                    'remark': "FOO"
                                }]
                            }
                        })
                    }
                }
            }),
        }
    })),
    sh_refiner.root(p_.literal.dictionary({})),
    sh_query.root(),
    sh_command.root(),
    p_.literal.dictionary({}),
)