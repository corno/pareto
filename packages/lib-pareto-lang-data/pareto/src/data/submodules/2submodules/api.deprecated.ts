import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "generateSubmodules": algorithm(procedure("this", {}, "GenerateSubmodules"), {}, dependent(null, {
            "createFile": procedure("fp", {}, "CreateFile"),
            "map2Glossary": sfunction("2glossary", {}, "Map"),
            "merge": sfunction("array", {}, "Merge"),
            "serializeGlossary": procedure("glossary", { "Annotation": "null" }, "Serialize")
        }, {}))
    }),
}