import * as pd from 'pareto-core-data'

import { boolean, data, dictionary, externalTypeReference, glossaryParameter, group, imp, member, null_, number, optional, procedure, ref, sExternalInterfaceReference, sInterface, sInterfaceReference, sfunction, string, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "out": imp(),
    }),

    'glossary parameters': d({
    }),

    'root': {
        'namespaces': d({}),
        'types': d({
            "GenerateSubmodulesParameters": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
                "data": member(group({
                    "library": member(ref(externalTypeReference("model", "Type Library"))),
                    "atom mappings": member(ref(externalTypeReference("2glossary", "Atom Mappings"))),

                })),
            }))
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "Nothing": sInterface(['group', { 'members': pd.d({}) }])
        }),
        'algorithms': d({
            "GenerateSubmodules": procedure(data(typeReference("GenerateSubmodulesParameters")), sInterfaceReference("Nothing")),
        }),
    },
}