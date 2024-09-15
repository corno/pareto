import * as pd from 'pareto-core-data'

import { data, dictionary, externalTypeReference, glossaryParameter, group, imp, member, number, procedure, ref, sExternalInterfaceReference, sfunction, string, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "model": imp(),
        "out": imp(),
    }),

        'glossary parameters': d({
        }),

        'root': {
            'namespaces': d({}),
            'types': d({
                "Atom Mapping": type(dictionary(taggedUnion({
                    "string": group({}),
                    "number": group({}),
                    "boolean": group({}),
                }))),
                "MapParameters": type(group({
                    "atom mappings": member(dictionary(ref(typeReference("Atom Mapping")))),
                    "data": member(ref(externalTypeReference("in", "Project", { }))),
                })),
                "SourceLocation": type(group({
                    "file": member(string()),
                    "line": member(number()),
                    "column": member(number()),
                }))
            }),
        },
        'asynchronous': {
            'interfaces': d({}),
            'algorithms': d({}),
        },
        'synchronous': {
            'interfaces': d({}),
            'algorithms': d({
                "Map": sfunction(externalTypeReference("out", "Root", { "Annotation": typeReference("SourceLocation") }), data(typeReference("MapParameters"))),
            }),
        },
}