import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.deprecated"
import { $ as glossary } from "./glossary.deprecated"
import { external, sibling, submodule, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "common": external("glo-pareto-common"),
                "model": sibling("resolved"),
                //"out": external("lib-pareto-typescript-project/dist/submodules/glossary"),
                "2glossary": sibling("2glossary"),

            }),

        },
        'api': {
            'root': api,
            'imports': d({
                "this": this_(),
                "fp": external("lib-fountain-pen"),
                "2glossary": sibling("2glossary"),
                "array": external("res-pareto-array"),
                "glossary": external("lib-pareto-typescript-project/dist/submodules/glossary_serialize"),
                // "dictionary": external("res-pareto-dictionary")
            }),
        },
    },
    'implementation': ['typescript', null],
    // 'implementation': {
    //     'implementations': d({}),
    // },
}