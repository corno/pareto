import * as p_ from 'pareto-core/implementation/transformer'

import * as sh_module from "lib/modules/pareto_new/schemas/module/shorthands/target"
import * as sh_schema from "lib/modules/pareto_new/schemas/schema/shorthands/target"
import * as sh_interface_command from "lib/modules/pareto_new/schemas/interface_command/shorthands/target"
import * as sh_interface_query from "lib/modules/pareto_new/schemas/interface_query/shorthands/target"
import * as sh_transformer from "lib/modules/pareto_new/schemas/transformer/shorthands/target"
import * as sh_refiner from "lib/modules/pareto_new/schemas/refiner/shorthands/target"
import * as sh_query from "lib/modules/pareto_new/schemas/query/shorthands/target"
import * as sh_command from "lib/modules/pareto_new/schemas/command/shorthands/target"
import * as sh_value_reference from "lib/modules/pareto_new/schemas/value_reference/shorthands/target"

export const $ = sh_module.module(
    sh_schema.root(
        p_.literal.dictionary({
            "schema A": sh_schema.schema(
                p_.literal.dictionary({}),
                p_.literal.dictionary({
                    "type A": sh_schema.type(
                        sh_schema.v.group(
                            p_.literal.dictionary({
                                "property A": sh_schema.v.boolean(),
                            })
                        )
                    ),
                }),
            ),
            "schema B": sh_schema.schema(
                p_.literal.dictionary({}),
                p_.literal.dictionary({
                    "type B": sh_schema.type(
                        sh_schema.v.optional(
                            sh_schema.v.text()
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