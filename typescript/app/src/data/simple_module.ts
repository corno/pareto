import * as p_ from 'pareto-core/transformer'

import * as sh from "lib/modules/pareto_new/schemas/module/shorthands/target"

export const $ = sh.module(
    p_.literal.dictionary({}),
    p_.literal.dictionary({
        "schema A": sh.schema_package(
            sh.schema.schema(
                p_.literal.dictionary({
                    "schema B": sh.schema_reference.sr.sibling("schema B")
                }),
                p_.literal.dictionary({
                    "type A": sh.schema.type(
                        sh.schema.v.group(
                            p_.literal.dictionary({
                                "property A": sh.schema.v.boolean(),
                            })
                        )
                    ),
                }),
            ),
            p_.literal.dictionary({ //transformers
                "foo": sh.transformer.root(
                    true,
                    sh.schema_reference.sr.sibling("schema B"),
                    p_.literal.not_set(),
                    p_.literal.dictionary({}),
                    p_.literal.dictionary({}),
                    p_.literal.dictionary({
                        "type A": sh.transformer.declaration(
                            sh.schema_reference.value_reference(
                                "type B",
                                p_.literal.list([])
                            ),
                            p_.literal.not_set(),
                        )
                    }),
                    p_.literal.dictionary({
                        "type A": sh.transformer.implementation(
                            false,
                            sh.transformer.expr.implement_me("I MUST BE IMPLEMENTED")
                        )
                    })
                ),
            }),
            sh.serializer.root(),
            p_.literal.dictionary({
                "foo": sh.refiner.root(
                    true,
                    sh.schema_reference.sr.sibling("schema B"),
                    p_.literal.not_set(),
                    p_.literal.not_set(),
                    p_.literal.dictionary({}),
                    p_.literal.dictionary({

                        "type A": sh.refiner.declaration.refiner(
                            sh.schema_reference.value_reference(
                                "type B",
                                p_.literal.list([])
                            ),
                            p_.literal.set(sh.schema_reference.type_reference("My_Error")),
                            p_.literal.not_set(),
                        )
                    }),
                    p_.literal.dictionary({

                        "type A": sh.refiner.implementation(
                            true,
                            false,
                            sh.refiner.expr.implement_me("I MUST BE IMPLEMENTED")
                        )
                    })
                ),
            }),
            sh.deserializer.root(),
        ),
        "schema B": sh.schema_package(
            sh.schema.schema(
                p_.literal.dictionary({}),
                p_.literal.dictionary({
                    "type B": sh.schema.type(
                        sh.schema.v.optional(
                            sh.schema.v.text()
                        )
                    ),
                }),
            ),
            p_.literal.dictionary({}),
            sh.serializer.root(),
            p_.literal.dictionary({}),
            sh.deserializer.root(),
        )
    }),
    p_.literal.dictionary({}),
    p_.literal.dictionary({}),
    p_.literal.dictionary({}),
    p_.literal.dictionary({}),
    // sh.transformer.root(p_.literal.dictionary({
    //     "schema A": {
    //         'target schemas': p_.literal.dictionary({
    //             "schema B": {
    //                 'parameters schema': p_.literal.not_set(),
    //                 'declarations': {
    //                     'types': p_.literal.dictionary({
    //                         "type A": sh.transformer.decl.type(
    //                             sh.value_reference.value_reference(
    //                                 "type B",
    //                                 p_.literal.list([
    //                                     sh.value_reference.sub.optional(),
    //                                 ])
    //                             ),
    //                             p_.literal.not_set(),
    //                         )
    //                     }),
    //                     'dependencies': p_.literal.dictionary({
    //                     }),
    //                 },
    //                 'implementations': {
    //                     'dependencies': p_.literal.dictionary({}),
    //                     'types': p_.literal.dictionary({
    //                         "type A": {
    //                             'expression': ['implement me', {
    //                                 'remark': "FOO"
    //                             }]
    //                         }
    //                     })
    //                 }
    //             }
    //         }),
    //     }
    // })),
    // sh.refiner.root(p_.literal.dictionary({})),
)