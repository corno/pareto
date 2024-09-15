import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "TBD",
    'description': "TBD",
    'license': "TBD",

    'dependencies': d({
    }),
    'type': ['library', {
        'main': {
            'definition': {
                'glossary': {
                    'root': {
                        'glossary parameters': d({}),
                        'imports': d({
                        }),
                        'root': {
                            'namespaces': d({}),
                            'types': d({
                            }),
                        },
                        'asynchronous': {
                            'interfaces': d({
                            }),
                            'algorithms': d({
                            }),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({
                            }),
                        },
                    },
                    'imports': d({
                    }),
                },
                'api': {
                    'root': {
                        'algorithms': d({

                        }),
                    },
                    'imports': d({
                    }),
                }
            },
            'implementation': ['typescript', null],
        },
        'submodules': d({
        }),
        'bindings': [true, {
            'definition': {
                'glossary': {
                    'root': {
                        'glossary parameters': d({}),
                        'imports': d({
                        }),
                        'root': {
                            'namespaces': d({}),
                            'types': d({
                            }),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({
                            }),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                    },
                    'imports': d({
                    }),
                },
                'api': {
                    'root': {
                        'algorithms': d({
                        }),
                    },
                    'imports': d({
                    }),
                },
            },
            'implementation': ['typescript', null]

        }],
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-build": null,
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'glossary parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        },
    }],
}