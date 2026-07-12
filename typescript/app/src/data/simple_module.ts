import * as p_ from 'pareto-core/implementation/transformer'

import * as sh_module from "lib/shorthands/module/target"
import * as sh_schemas from "lib/shorthands/schemas/target"
import * as sh_interface_command from "lib/shorthands/interface_command/target"
import * as sh_interface_query from "lib/shorthands/interface_query/target"
import * as sh_declarations_transformer from "lib/shorthands/declarations_transformer/target"
import * as sh_declarations_refiner from "lib/shorthands/declarations_refiner/target"
import * as sh_declarations_query from "lib/shorthands/declarations_query/target"
import * as sh_declarations_command from "lib/shorthands/declarations_command/target"
import * as sh_implementation_transformer from "lib/shorthands/implementation_transformer/target"
import * as sh_implementation_refiner from "lib/shorthands/implementation_refiner/target"
import * as sh_implementation_query from "lib/shorthands/implementation_query/target"
import * as sh_implementation_command from "lib/shorthands/implementation_command/target"

const $ = sh_module.module(
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
                        sh_schemas.v.natural()
                    ),
                }),
            ),
        })
    ),
    sh_interface_command.root(),
    sh_interface_query.root(),
    sh_declarations_transformer.root(p_.literal.dictionary({})),
    sh_declarations_refiner.root(p_.literal.dictionary({})),
    sh_declarations_query.root(),
    sh_declarations_command.root(),
    sh_implementation_transformer.root(p_.literal.dictionary({})),
    sh_implementation_refiner.root(),
    sh_implementation_query.root(),
    sh_implementation_command.root(),
    p_.literal.dictionary({}),
)