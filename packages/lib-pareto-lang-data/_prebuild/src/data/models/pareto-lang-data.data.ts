import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "lib-pareto-lang-data/dist/submodules/unresolved"

import * as g_x from "lib-pareto-lang-data/dist/submodules/unresolved"


type RawDictionary<T> = { [key: string]: T }
import * as g_this from "lib-pareto-lang-data/dist/submodules/unresolved"


function globalType(

    parameters: RawDictionary<g_this.T.Parameters.dictionary.D<pd.SourceLocation>>,
    type: g_x.T.TypeResolver<pd.SourceLocation>,
    result?: boolean,
): g_x.T.Merged__Type__Library.global__types.dictionary.D<pd.SourceLocation> {
    return {
        'declaration': {
            'parameters': {
                'annotation': pd.getLocationInfo(0),
                'dictionary': pd.d(parameters),
            },
            'result': [false]
        },
        'definition': {
            'variables': {
                'annotation': pd.getLocationInfo(0),
                'dictionary': pd.d({}),
            },
            'result': [false],
            'type': type,
        },
    }
}

import {
    array, constrainedDictionary,
    dictionary,
    globalTypeResolverDeclaration,
    globalTypeDefinition,
    group,
    state,
    optional,
    prop,
    t_grp,
    t_sg,
    stateGroup,
    typeSelection,
    component,
    typeRef,
    dictionaryReference,
    lookupConstraint,
    cyclicReference,
    lookupReference,
    constraint,
    typeLibrary,
    t_dict,
    pResolvedValue,
    pLookup,
    pCyclicLookup,
    dictionaryConstraint,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Merged__Type__Library<pd.SourceLocation> = typeLibrary(
    {},
    {
        "text": null,
        "identifier": null,
    },
    // {
    //     "Atom Types": globalTypeDefinition(
    //         dictionary(group({}))
    //     ),
    //     "Atom": globalTypeDefinition(
    //         group({
    //             "type": prop(dictionaryReference(typeSelection("Atom Types"))),
    //         })
    //     ),
    //     "Property": globalTypeDefinition(
    //         group({
    //             "type": prop(component(typeRef("Type", true))),
    //         })
    //     ),
    //     "PropertyResolver": globalTypeDefinition(
    //         group({
    //             "type": prop(component(typeRef("TypeResolver", true))),
    //         })
    //     ),
    //     "Type": globalTypeDefinition(
    //         group({
    //             "type": prop(stateGroup({
    //                 "array": state(group({
    //                     "type": prop(component(typeRef("Type", true))),
    //                 })),
    //                 "atom": state(group({
    //                     "atom": prop(component(typeRef("Atom"))),
    //                 })),
    //                 "component": state(group({
    //                     "type": prop(component(typeRef("Global Type Selection", true))),
    //                 })),
    //                 "constraint": state(component(typeRef("Type Selection", true))),
    //                 "cyclic reference": state(group({
    //                     "atom": prop(component(typeRef("Atom"))),
    //                     "sibling": component(typeRef("Global Type Selection", true)),
    //                 })),
    //                 "dictionary": state(group({
    //                     "key": prop(component(typeRef("Atom"))),
    //                     "constraints": prop(dictionary(stateGroup({
    //                         "dictionary": state(group({
    //                             "dictionary": prop(component(typeRef("Dictionary Selection", true))),
    //                             "dense": prop(stateGroup({
    //                                 "no": state(group({})),
    //                                 "yes": state(group({})),
    //                             }))
    //                         })),
    //                         "lookup": state(component(typeRef("Global Type Selection", true))),
    //                     }))),
    //                     "type": prop(component(typeRef("Type", true))),
    //                 })),
    //                 "group": state(group({
    //                     "properties": prop(dictionary(component(typeRef("Property")))),
    //                 })),
    //                 "nothing": state(group({
    //                 })),
    //                 "optional": state(group({
    //                     "type": prop(component(typeRef("Type", true))),
    //                 })),
    //                 "resolved reference": state(group({
    //                     "atom": prop(component(typeRef("Atom"))),
    //                     "value": prop(stateGroup({
    //                         "dictionary": state(component(typeRef("Dictionary Selection", true))),
    //                         "lookup": state(component(typeRef("Global Type Selection", true))),
    //                     }))
    //                 })),
    //                 "state group": state(group({
    //                     "states": prop(dictionary(group({
    //                         "type": prop(component(typeRef("Type", true))),
    //                     }))),
    //                 })),
    //             })),
    //         })
    //     ),
    //     "TypeResolver": globalTypeDefinition(
    //         group({
    //             "type": prop(stateGroup({
    //                 "array": state(group({
    //                     "type": prop(component(typeRef("TypeResolver", true))),
    //                 })),
    //                 "atom": state(group({
    //                     "atom": prop(component(typeRef("Atom"))),
    //                 })),
    //                 "component": state(group({
    //                     "type": prop(component(typeRef("Global Type Selection", true))),
    //                     "arguments": prop(dictionary(group({}))),
    //                 })),
    //                 "constraint": state(component(typeRef("Type Selection", true))),
    //                 "cyclic reference": state(group({
    //                     "atom": prop(component(typeRef("Atom"))),
    //                     "sibling": component(typeRef("Global Type Selection", true)),
    //                 })),
    //                 "dictionary": state(group({
    //                     "key": prop(component(typeRef("Atom"))),
    //                     "constraints": prop(dictionary(stateGroup({
    //                         "dictionary": state(group({
    //                             "dictionary": prop(component(typeRef("Dictionary Selection", true))),
    //                             "dense": prop(stateGroup({
    //                                 "no": state(group({})),
    //                                 "yes": state(group({})),
    //                             }))
    //                         })),
    //                         "lookup": state(component(typeRef("Global Type Selection", true))),
    //                     }))),
    //                     "type": prop(component(typeRef("TypeResolver", true))),
    //                 })),
    //                 "group": state(group({
    //                     "properties": prop(dictionary(component(typeRef("PropertyResolver")))),
    //                 })),
    //                 "nothing": state(group({
    //                 })),
    //                 "optional": state(group({
    //                     "type": prop(component(typeRef("TypeResolver", true))),
    //                 })),
    //                 "resolved reference": state(group({
    //                     "atom": prop(component(typeRef("Atom"))),
    //                     "value": prop(stateGroup({
    //                         "dictionary": state(component(typeRef("Dictionary Selection", true))),
    //                         "lookup": state(component(typeRef("Global Type Selection", true))),
    //                     }))
    //                 })),
    //                 "state group": state(group({
    //                     "states": prop(dictionary(group({
    //                         "type": prop(component(typeRef("TypeResolver", true))),
    //                     }))),
    //                 })),
    //             })),
    //         })
    //     ),
    //     "Imports": globalTypeDefinition(
    //         dictionary(
    //             group({
    //                 "library": prop(lookupReference(typeRef("Type Library", true)))
    //             })
    //         )
    //     ),
    //     "Parameters": globalTypeDefinition(
    //         dictionary(group({
    //             "type": prop(stateGroup({
    //                 "resolved value": state(cyclicReference(typeRef("Global Type Resolver Declaration", true))),
    //                 "sibling lookup": state(cyclicReference(typeRef("Global Type Resolver Declaration", true))),
    //                 "cyclic sibling lookup": state(cyclicReference(typeRef("Global Type Resolver Declaration", true))),
    //                 "key": state(group({})),
    //             })),
    //             "optional": prop(optional(group({}))),
    //         }))
    //     ),
    //     "Global Type Resolver Declaration": globalTypeDefinition(group({
    //         //"definition": prop(constraint(typeSelection("Global Type Definition", t_dict()))),
    //         "parameters": prop(component(typeRef("Parameters"))),
    //         "result": prop(optional(cyclicReference(typeRef("Global Type Resolver Declaration", true)))),
    //     })),
    //     "Global Type Resolver Declarations": globalTypeDefinition(dictionary(component(typeRef("Global Type Resolver Declaration")))),
    //     "Global Type Resolver Implementation": globalTypeDefinition(
    //         group({
    //             "variables": prop(component(typeRef("Variables"))),
    //             "type": prop(component(typeRef("TypeResolver"))),
    //             "result": prop(optional(component(typeRef("Value Selection Tail", true)))),
    //         })
    //     ),
    //     "Global Type Definition": globalTypeDefinition(
    //         group({
    //             "type": prop(component(typeRef("Type"))),
    //         })
    //     ),
    //     "Type Selection Tail": globalTypeDefinition(
    //         group({
    //             "step type": prop(stateGroup({
    //                 "dictionary": state(group({
    //                     "dictionary": prop(constraint(typeSelection("Type", t_grp("type", t_sg("dictionary"))))),
    //                     "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
    //                 })),
    //                 "optional": state(group({
    //                     "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
    //                     "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
    //                 })),
    //                 "array": state(group({
    //                     "array": prop(constraint(typeSelection("Type", t_grp("type", t_sg("array"))))),
    //                     "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
    //                 })),
    //                 "group": state(group({
    //                     "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
    //                     "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
    //                     "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
    //                 })),
    //                 "state group": state(group({
    //                     "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
    //                     "state": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))),
    //                     "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
    //                 })),
    //             })),
    //         })
    //     ),
    //     "Type Selection": globalTypeDefinition(
    //         group({
    //             "import": prop(optional(dictionaryReference(typeSelection("Imports")))),
    //             "global type": prop(lookupReference(typeRef("Global Type Definition"))),
    //             "tail": prop(optional(component(typeRef("Type Selection Tail", true)))),
    //         }),
    //     ),
    //     "Dictionary Selection": globalTypeDefinition(
    //         group({
    //             "type": prop(component(typeRef("Type Selection"))),
    //             "dictionary": constraint(typeSelection("Type", t_grp("type", t_sg("dictionary")))),
    //         })
    //     ),
    //     "Merged Type Library": globalTypeDefinition(
    //         group({
    //             "imports": prop(component(typeRef("Imports"))),
    //             "atom types": prop(component(typeRef("Atom Types"))),
    //             "global types": prop(dictionary(group({
    //                 "declaration": prop(component(typeRef("Global Type Resolver Declaration"))),
    //                 "definition": prop(component(typeRef("Global Type Resolver Implementation"))),
    //             }))),
    //         })
    //     ),
    //     "Type Library": globalTypeDefinition(
    //         group({
    //             "imports": prop(component(typeRef("Imports"))),
    //             "atom types": prop(component(typeRef("Atom Types"))),
    //             "global types": prop(group({
    //                 "definitions": prop(dictionary(component(typeRef("Global Type Definition")))),
    //                 //"selectors": prop(component(typeRef("Global Type Resolver Declarations"))),
    //                 "declarations": prop(component(typeRef("Global Type Resolver Declarations"))),
    //                 "implementations": prop(dictionary(component(typeRef("Global Type Resolver Implementation")))),
    //             })),
    //         })
    //     ),
    //     "Global Type Selection": globalTypeDefinition(
    //         stateGroup({
    //             "resolved sibling": state(group({
    //                 "type": prop(lookupReference(typeRef("Global Type Definition"))),
    //             })),
    //             "import": state(group({
    //                 "library": prop(dictionaryReference(typeSelection("Imports"))),
    //                 "type": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
    //             })),
    //             "cyclic sibling": state(group({
    //                 "type": prop(cyclicReference(typeRef("Global Type Definition"))),
    //             })),
    //         }),
    //     ),
    //     // "Model": globalTypeDefinition(
    //     //     group({
    //     //         "type library": prop(component(typeRef("Type Library"))),
    //     //         "root": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
    //     //     })
    //     // ),
    //     "Project": globalTypeDefinition(group({
    //         "type libraries": prop(dictionary(component(typeRef("Type Library")))),
    //     })),
    //     "Merged Project": globalTypeDefinition(group({
    //         "type libraries": prop(dictionary(component(typeRef("Merged Type Library")))),
    //     })),
    //     "Root": globalTypeDefinition(
    //         component(typeRef("Project"))
    //     ),
    //     "Variable": globalTypeDefinition(
    //         stateGroup({
    //             // "sibling property": state(lookupReference(typeRef("Property"))),
    //             // "state constraint": state(dictionaryReference(typeSelection("State Constraints"))),
    //             // "dictionary constraint": state(dictionaryReference(typeSelection("Dictionary Constraints"))),
    //             "parameter": state(group({
    //                 "parameter": prop(dictionaryReference(typeSelection("Parameters"))),
    //                 "resolved value": prop(constraint(typeSelection("Parameters", t_dict(t_grp("type", t_sg("resolved value"))))))
    //             })),
    //             "parent variable": state(lookupReference(typeRef("Variable", true))),
    //         })
    //     ),
    //     "Variables": globalTypeDefinition(
    //         dictionary(component(typeRef("Variable")))
    //     ),
    //     "Value Selection Tail": globalTypeDefinition(
    //         stateGroup({
    //             "reference": state(group({
    //                 "reference": prop(constraint(typeSelection("Type", t_grp("type", t_sg("resolved reference"))))),
    //                 "tail": prop(optional(component(typeRef("Value Selection Tail", true))))
    //             })),
    //             "component": state(group({
    //                 "component": prop(constraint(typeSelection("Type", t_grp("type", t_sg("component"))))),
    //                 "tail": prop(optional(component(typeRef("Value Selection Tail", true))))

    //             })),
    //             "state group": state(group({
    //                 "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
    //                 "result type": prop(component(typeRef("Global Type Selection", true))),
    //                 "states": prop(constrainedDictionary(
    //                     {
    //                         "state": dictionaryConstraint(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))), true)
    //                     },
    //                     component(typeRef("Any Value Selection", true))
    //                 ))
    //             })),
    //             // "optional": state(group({
    //             //     "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
    //             //     "set": prop(component(typeRef("Any Value Selection", true))),
    //             //     "not set": prop(component(typeRef("No Context Value Selection", true))),//validate result is equal to 'set' result
    //             // })),
    //             "group": state(group({
    //                 "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
    //                 "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
    //                 "tail": prop(optional(component(typeRef("Value Selection Tail", true))))
    //             })),
    //         }),
    //     ),
    //     // "No Context Value Selection": globalTypeDefinition(
    //     //     group({
    //     //         "start": prop(dictionaryReference(typeSelection("Variables"))),
    //     //         "tail": prop(optional(component(typeRef("Value Selection Tail"))))
    //     //     }),
    //     // ),
    //     "Any Value Selection": globalTypeDefinition(
    //         group({
    //             "start": prop(optional(dictionaryReference(typeSelection("Variables")))),
    //             "tail": prop(optional(component(typeRef("Value Selection Tail"))))
    //         }),
    //     ),
    // },
    // {
    //     "Any Value Selection": globalTypeResolverDeclaration({}),
    //     "Atom Types": globalTypeResolverDeclaration({}),
    //     "Atom": globalTypeResolverDeclaration({
    //         "atom types": pResolvedValue("Atom Types")
    //     }),
    //     "Dictionary Selection": globalTypeResolverDeclaration({
    //         "imports": pResolvedValue("Imports"),
    //         "sibling global types": pLookup("Global Type Definition"),
    //         "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
    //     }),
    //     "Global Type Resolver Declaration": globalTypeResolverDeclaration({
    //         "all siblings": pCyclicLookup("Global Type Resolver Declaration", false)
    //     }),
    //     "Global Type Resolver Declarations": globalTypeResolverDeclaration({}),
    //     "Global Type Definition": globalTypeResolverDeclaration({
    //         "key": pResolvedValue("Atom"),
    //         "all siblings": pCyclicLookup("Global Type Definition"),
    //         "non cyclic siblings": pLookup("Global Type Definition"),
    //         "atom types": pResolvedValue("Atom Types"),
    //         "imports": pResolvedValue("Imports"),
    //     }),
    //     "Global Type Resolver Implementation": globalTypeResolverDeclaration({
    //         "key": pResolvedValue("Atom"),
    //         "all siblings": pCyclicLookup("Global Type Definition"),
    //         "non cyclic siblings": pLookup("Global Type Definition"),
    //         "atom types": pResolvedValue("Atom Types"),
    //         "imports": pResolvedValue("Imports"),
    //     }),
    //     "Global Type Selection": globalTypeResolverDeclaration({
    //         "imports": pResolvedValue("Imports"),
    //         "sibling global types": pLookup("Global Type Definition"),
    //         "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
    //     }),
    //     "Imports": globalTypeResolverDeclaration({
    //         "external type libraries": pLookup("Type Library"),
    //     }),
    //     "Model": globalTypeResolverDeclaration({
    //         "external type libraries": pLookup("Type Library")
    //     }),
    //     //"No Context Value Selection": globalTypeResolverDeclaration({}),
    //     "Parameters": globalTypeResolverDeclaration({}),
    //     "Property": globalTypeResolverDeclaration({
    //         "atom types": pResolvedValue("Atom Types"),
    //         "imports": pResolvedValue("Imports"),
    //         "sibling global types": pLookup("Global Type Definition"),
    //         "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
    //     }),
    //     "PropertyResolver": globalTypeResolverDeclaration({
    //         "atom types": pResolvedValue("Atom Types"),
    //         "imports": pResolvedValue("Imports"),
    //         "sibling global types": pLookup("Global Type Definition"),
    //         "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
    //     }),
    //     "Project": globalTypeResolverDeclaration({}),
    //     "Merged Project": globalTypeResolverDeclaration({}),
    //     "Root": globalTypeResolverDeclaration({}),
    //     "Type Library": globalTypeResolverDeclaration({
    //         "external type libraries": pLookup("Type Library"),
    //     }),
    //     "Type Selection Tail": globalTypeResolverDeclaration({
    //         "context": pResolvedValue("Type"),
    //     }, "Type"),
    //     "Type Selection": globalTypeResolverDeclaration({
    //         "imports": pResolvedValue("Imports"),
    //         "sibling global types": pLookup("Global Type Definition"),
    //     }, "Type"),
    //     "Type": globalTypeResolverDeclaration({
    //         "atom types": pResolvedValue("Atom Types"),
    //         "imports": pResolvedValue("Imports"),
    //         "sibling global types": pLookup("Global Type Definition"),
    //         "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
    //     }),
    //     "TypeResolver": globalTypeResolverDeclaration({
    //         "atom types": pResolvedValue("Atom Types"),
    //         "imports": pResolvedValue("Imports"),
    //         "sibling global types": pLookup("Global Type Definition"),
    //         "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
    //     }),
    //     "Value Selection Tail": globalTypeResolverDeclaration({}),
    //     "Variable": globalTypeResolverDeclaration({}),
    //     "Variables": globalTypeResolverDeclaration({}),
    // },
    {
        "Atom Types": globalType(
            {},
            dictionary(group({}))
        ),
        "Atom": globalType(
            {
                "atom types": pResolvedValue("Atom Types")
            },
            group({
                "type": prop(dictionaryReference(typeSelection("Atom Types"))),
            })
        ),
        "Property": globalType(
            {
                "atom types": pResolvedValue("Atom Types"),
                "imports": pResolvedValue("Imports"),
                "sibling global types": pLookup("Global Type Definition"),
                "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
            },
            group({
                "type": prop(component(typeRef("Type", true), {
                    "atom types": null,
                    "imports": null,
                    "sibling global types": null,
                    "cyclic sibling global types": null,
                })),
            })
        ),
        "PropertyResolver": globalType(
            {
                "atom types": pResolvedValue("Atom Types"),
                "imports": pResolvedValue("Imports"),
                "sibling global types": pLookup("Global Type Definition"),
                "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
            },
            group({
                "type": prop(component(typeRef("TypeResolver", true), {
                    "atom types": null,
                    "imports": null,
                    "sibling global types": null,
                    "cyclic sibling global types": null,
                })),
            })
        ),
        "Type": globalType(
            {
                "atom types": pResolvedValue("Atom Types"),
                "imports": pResolvedValue("Imports"),
                "sibling global types": pLookup("Global Type Definition"),
                "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
            },
            group({
                "type": prop(stateGroup({
                    "array": state(group({
                        "type": prop(component(typeRef("Type", true), {
                            "atom types": null,
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                    })),
                    "atom": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": null,
                        })),
                    })),
                    "component": state(group({
                        "type": prop(component(typeRef("Global Type Selection", true), {
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                    })),
                    "constraint": state(component(typeRef("Type Selection", true), {
                        "imports": null,
                        "sibling global types": null,
                    })),
                    "cyclic reference": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": null
                        })),
                        "sibling": component(typeRef("Global Type Selection", true), {
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        }),
                    })),
                    "dictionary": state(group({
                        "key": prop(component(typeRef("Atom"), {
                            "atom types": null
                        })),
                        "constraints": prop(dictionary(stateGroup({
                            "dictionary": state(group({
                                "dictionary": prop(component(typeRef("Dictionary Selection", true), {
                                    "imports": null,
                                    "sibling global types": null,
                                    "cyclic sibling global types": null,
                                })),
                                "dense": prop(stateGroup({
                                    "no": state(group({})),
                                    "yes": state(group({})),
                                }))
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true), {
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                        }))),
                        "type": prop(component(typeRef("Type", true), {
                            "atom types": null,
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                    })),
                    "group": state(group({
                        "properties": prop(dictionary(component(typeRef("Property"), {}))),
                    })),
                    "nothing": state(group({
                    })),
                    "optional": state(group({
                        "type": prop(component(typeRef("Type", true), {
                            "atom types": null,
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                    })),
                    "resolved reference": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": null
                        })),
                        "value": prop(stateGroup({
                            "dictionary": state(component(typeRef("Dictionary Selection", true), {
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true), {
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                        }))
                    })),
                    "state group": state(group({
                        "states": prop(dictionary(group({
                            "type": prop(component(typeRef("Type", true), {
                                "atom types": null,
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                        }))),
                    })),
                })),
            })
        ),
        "TypeResolver": globalType(
            {
                "atom types": pResolvedValue("Atom Types"),
                "imports": pResolvedValue("Imports"),
                "sibling global types": pLookup("Global Type Definition"),
                "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
            },
            group({
                "type": prop(stateGroup({
                    "array": state(group({
                        "type": prop(component(typeRef("TypeResolver", true), {
                            "atom types": null,
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                    })),
                    "atom": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": null,
                        })),
                    })),
                    "component": state(group({
                        "type": prop(component(typeRef("Global Type Selection", true), {
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                        "arguments": prop(dictionary(group({}))),
                    })),
                    "constraint": state(component(typeRef("Type Selection", true), {
                        "imports": null,
                        "sibling global types": null,
                    })),
                    "cyclic reference": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": null
                        })),
                        "sibling": component(typeRef("Global Type Selection", true), {
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        }),
                    })),
                    "dictionary": state(group({
                        "key": prop(component(typeRef("Atom"), {
                            "atom types": null
                        })),
                        "constraints": prop(dictionary(stateGroup({
                            "dictionary": state(group({
                                "dictionary": prop(component(typeRef("Dictionary Selection", true), {
                                    "imports": null,
                                    "sibling global types": null,
                                    "cyclic sibling global types": null,
                                })),
                                "dense": prop(stateGroup({
                                    "no": state(group({})),
                                    "yes": state(group({})),
                                }))
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true), {
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                        }))),
                        "type": prop(component(typeRef("TypeResolver", true), {
                            "atom types": null,
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                    })),
                    "group": state(group({
                        "properties": prop(dictionary(component(typeRef("PropertyResolver"), {}))),
                    })),
                    "nothing": state(group({
                    })),
                    "optional": state(group({
                        "type": prop(component(typeRef("TypeResolver", true), {
                            "atom types": null,
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                    })),
                    "resolved reference": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": null
                        })),
                        "value": prop(stateGroup({
                            "dictionary": state(component(typeRef("Dictionary Selection", true), {
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true), {
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                        }))
                    })),
                    "state group": state(group({
                        "states": prop(dictionary(group({
                            "type": prop(component(typeRef("TypeResolver", true), {
                                "atom types": null,
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                        }))),
                    })),
                })),
            })
        ),
        "Imports": globalType(
            {
                "external type libraries": pLookup("Type Library"),
            },
            dictionary(
                group({
                    "library": prop(lookupReference(typeRef("Type Library", true)))
                })
            )
        ),
        "Parameters": globalType(
            {},
            dictionary(group({
                "type": prop(stateGroup({
                    "resolved value": state(cyclicReference(typeRef("Global Type Resolver Declaration", true))),
                    "sibling lookup": state(cyclicReference(typeRef("Global Type Resolver Declaration", true))),
                    "cyclic sibling lookup": state(cyclicReference(typeRef("Global Type Resolver Declaration", true))),
                    "key": state(group({})),
                })),
                "optional": prop(optional(group({}))),
            }))
        ),
        "Global Type Resolver Declaration": globalType(
            {
                "all siblings": pCyclicLookup("Global Type Resolver Declaration", false)
            },
            group({
                //"definition": prop(constraint(typeSelection("Global Type Definition", t_dict()))),
                "parameters": prop(component(typeRef("Parameters"), {})),
                "result": prop(optional(cyclicReference(typeRef("Global Type Resolver Declaration", true)))),
            })
        ),
        "Global Type Resolver Declarations": globalType(
            {},
            dictionary(component(typeRef("Global Type Resolver Declaration"), {
                "all siblings": null,
            }))
        ),
        "Global Type Resolver Implementation": globalType(
            {
                "key": pResolvedValue("Atom"),
                "all siblings": pCyclicLookup("Global Type Definition"),
                "non cyclic siblings": pLookup("Global Type Definition"),
                "atom types": pResolvedValue("Atom Types"),
                "imports": pResolvedValue("Imports"),
            },
            group({
                "variables": prop(component(typeRef("Variables"), {

                })),
                "type": prop(component(typeRef("TypeResolver"), {
                    "atom types": null,
                    "imports": null,
                    "sibling global types": null,
                    "cyclic sibling global types": null,
                })),
                "result": prop(optional(component(typeRef("Value Selection Tail", true), {}))),
            })
        ),
        "Global Type Definition": globalType(
            {
                "key": pResolvedValue("Atom"),
                "all siblings": pCyclicLookup("Global Type Definition"),
                "non cyclic siblings": pLookup("Global Type Definition"),
                "atom types": pResolvedValue("Atom Types"),
                "imports": pResolvedValue("Imports"),
            },
            group({
                "type": prop(component(typeRef("Type"), {
                    "atom types": null,
                    "imports": null,
                    "sibling global types": null,
                    "cyclic sibling global types": null,
                })),
            })
        ),
        "Type Selection Tail": globalType(
            {
                "context": pResolvedValue("Type"),
            },
            group({
                "step type": prop(stateGroup({
                    "dictionary": state(group({
                        "dictionary": prop(constraint(typeSelection("Type", t_grp("type", t_sg("dictionary"))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
                    })),
                    "optional": state(group({
                        "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
                    })),
                    "array": state(group({
                        "array": prop(constraint(typeSelection("Type", t_grp("type", t_sg("array"))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
                    })),
                    "group": state(group({
                        "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
                        "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
                    })),
                    "state group": state(group({
                        "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
                        "state": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
                    })),
                })),
            })
        ),
        "Type Selection": globalType(
            {
                "imports": pResolvedValue("Imports"),
                "sibling global types": pLookup("Global Type Definition"),
            },
            group({
                "import": prop(optional(dictionaryReference(typeSelection("Imports")))),
                "global type": prop(lookupReference(typeRef("Global Type Definition"))),
                "tail": prop(optional(component(typeRef("Type Selection Tail", true), {}))),
            }),
        ),
        "Dictionary Selection": globalType(
            {
                "imports": pResolvedValue("Imports"),
                "sibling global types": pLookup("Global Type Definition"),
                "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
            },
            group({
                "type": prop(component(typeRef("Type Selection"), {
                    "imports": null,
                    "sibling global types": null,
                })),
                "dictionary": constraint(typeSelection("Type", t_grp("type", t_sg("dictionary")))),
            })
        ),
        "Type Library": globalType(
            {
                "external type libraries": pLookup("Type Library"),
            },
            group({
                "imports": prop(component(typeRef("Imports"), {
                    "external type libraries": null,
                })),
                "atom types": prop(component(typeRef("Atom Types"), {})),
                "global types": prop(group({
                    "definitions": prop(dictionary(component(typeRef("Global Type Definition"), {
                        "key": null,
                        "all siblings": null,
                        "non cyclic siblings": null,
                        "atom types": null,
                        "imports": null,
                    }))),
                    //"selectors": prop(component(typeRef("Global Type Resolver Declarations"), {})),
                    "declarations": prop(component(typeRef("Global Type Resolver Declarations"), {})),
                    "implementations": prop(dictionary(component(typeRef("Global Type Resolver Implementation"), {
                        "key": null,
                        "all siblings": null,
                        "non cyclic siblings": null,
                        "atom types": null,
                        "imports": null,
                    }))),
                })),
            })
        ),
        "Merged Type Library": globalType(
            {},
            group({
                "imports": prop(component(typeRef("Imports"), {
                    "external type libraries": null,
                })),
                "atom types": prop(component(typeRef("Atom Types"), {})),
                "global types": prop(dictionary(group({
                    //"selectors": prop(component(typeRef("Global Type Resolver Declarations"), {})),
                    "declaration": prop(component(typeRef("Global Type Resolver Declaration"), {})),
                    "definition": prop(component(typeRef("Global Type Resolver Implementation"), {
                        "key": null,
                        "all siblings": null,
                        "non cyclic siblings": null,
                        "atom types": null,
                        "imports": null,
                    })),
                }))),
            })
        ),
        "Global Type Selection": globalType(
            {
                "imports": pResolvedValue("Imports"),
                "sibling global types": pLookup("Global Type Definition"),
                "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
            },
            stateGroup({
                "resolved sibling": state(group({
                    "type": prop(lookupReference(typeRef("Global Type Definition"))),
                })),
                "import": state(group({
                    "library": prop(dictionaryReference(typeSelection("Imports"))),
                    "type": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
                })),
                "cyclic sibling": state(group({
                    "type": prop(cyclicReference(typeRef("Global Type Definition"))),
                })),
            }),
        ),
        "Model": globalType(
            {
                "external type libraries": pLookup("Type Library")
            },
            group({
                "type library": prop(component(typeRef("Type Library"), {
                    "external type libraries": null,
                })),
                "root": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
            })
        ),
        "Project": globalType(
            {},
            group({
                "type libraries": prop(dictionary(component(typeRef("Type Library"), {
                    "external type libraries": null,
                }))),
            })
        ),
        "Merged Project": globalType(
            {},
            group({
                "type libraries": prop(dictionary(component(typeRef("Merged Type Library"), {
                    "external type libraries": null,
                }))),
            })
        ),
        "Root": globalType(
            {},
            component(typeRef("Project"), {})
        ),
        "Variable": globalType(
            {},
            stateGroup({
                // "sibling property": state(lookupReference(typeRef("Property"))),
                // "state constraint": state(dictionaryReference(typeSelection("State Constraints"))),
                // "dictionary constraint": state(dictionaryReference(typeSelection("Dictionary Constraints"))),
                "parameter": state(group({
                    "parameter": prop(dictionaryReference(typeSelection("Parameters"))),
                    "resolved value": prop(constraint(typeSelection("Parameters", t_dict(t_grp("type", t_sg("resolved value"))))))
                })),
                "parent variable": state(lookupReference(typeRef("Variable", true))),
            })
        ),
        "Variables": globalType(
            {},
            dictionary(component(typeRef("Variable"), {}))
        ),
        "Value Selection Tail": globalType(
            {},
            stateGroup({
                "reference": state(group({
                    "reference": prop(constraint(typeSelection("Type", t_grp("type", t_sg("resolved reference"))))),
                    "tail": prop(optional(component(typeRef("Value Selection Tail", true), {})))
                })),
                "component": state(group({
                    "component": prop(constraint(typeSelection("Type", t_grp("type", t_sg("component"))))),
                    "tail": prop(optional(component(typeRef("Value Selection Tail", true), {})))

                })),
                "state group": state(group({
                    "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
                    "result type": prop(component(typeRef("Global Type Selection", true), {
                        "imports": null,
                        "sibling global types": null,
                        "cyclic sibling global types": null,
                    })),
                    "states": prop(constrainedDictionary(
                        {
                            "state": dictionaryConstraint(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))), true)
                        },
                        component(typeRef("Any Value Selection", true), {})
                    ))
                })),
                // "optional": state(group({
                //     "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
                //     "set": prop(component(typeRef("Any Value Selection", true))),
                //     "not set": prop(component(typeRef("No Context Value Selection", true))),//validate result is equal to 'set' result
                // })),
                "group": state(group({
                    "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
                    "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
                    "tail": prop(optional(component(typeRef("Value Selection Tail", true), {})))
                })),
            }),
        ),
        // "No Context Value Selection": globalType(
        //     group({
        //         "start": prop(dictionaryReference(typeSelection("Variables"))),
        //         "tail": prop(optional(component(typeRef("Value Selection Tail"), {})))
        //     }),
        // ),
        "Any Value Selection": globalType(
            {},
            group({
                "start": prop(optional(dictionaryReference(typeSelection("Variables")))),
                "tail": prop(optional(component(typeRef("Value Selection Tail"), {})))
            }),
        ),
    },
)