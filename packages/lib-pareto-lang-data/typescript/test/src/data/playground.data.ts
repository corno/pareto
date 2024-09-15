import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "../../../pub/dist/submodules/unresolved"



type RawDictionary<T> = { [key: string]: T }



import {
    array, 
    constrainedDictionary,
    dictionary,
    globalTypeResolverDeclaration,
    globalTypeResolverImplementation,
    globalTypeDefinition,
    globalType,
    group,
    state,
    optional,
    prop,
    t_dict,
    t_grp,
    t_sg,
    stateGroup,
    typeSelection,
    component,
    typeRef,
    dictionaryReference,
    lookupReference,
    lookupConstraint,
    cyclicReference,
    dictionaryConstraint,
    typeLibrary,
    constraint,
    externalTypeSelection,
    imprt,
    atom,
    pResolvedValue,
    pLookup,
    pCyclicLookup,
    pKey,
} from "../../../pub/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Merged__Project<pd.SourceLocation> = {
    'type libraries': {
        'annotation': pd.getLocationInfo(0),
        'dictionary': pd.d({
            "pareto lang data": typeLibrary(
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
            ),
            // "pareto lang data": typeLibrary(
            //     {},
            //     {
            //         "text": null,
            //         "identifier": null,
            //     },
            //     {
            //         "Atom Types": globalTypeDefinition(
            //             dictionary(group({}))
            //         ),
            //         "Atom": globalTypeDefinition(
            //             group({
            //                 "type": prop(dictionaryReference(typeSelection("Atom Types"))),
            //             })
            //         ),
            //         "Type": globalTypeDefinition(
            //             group({
            //                 "type": prop(stateGroup({
            //                     "array": state(group({
            //                         "type": prop(component(typeRef("Type", true))),
            //                     })),
            //                     "atom": state(group({
            //                         "atom": prop(component(typeRef("Atom"))),
            //                     })),
            //                     "component": state(group({
            //                         "type": prop(component(typeRef("Global Type Selection", true))),
            //                         "arguments": prop(dictionary(optional(component(typeRef("No Context Value Selection", true))))),
            //                     })),
            //                     "constraint": state(component(typeRef("Type Selection", true))),
            //                     "cyclic reference": state(group({
            //                         "atom": prop(component(typeRef("Atom"))),
            //                         "sibling": component(typeRef("Global Type Selection", true)),
            //                     })),
            //                     "dictionary": state(group({
            //                         "key": prop(component(typeRef("Atom"))),
            //                         "constraints": prop(dictionary(stateGroup({
            //                             "dictionary": state(group({
            //                                 "dictionary": prop(component(typeRef("Dictionary Selection", true))),
            //                                 "dense": prop(stateGroup({
            //                                     "no": state(group({})),
            //                                     "yes": state(group({})),
            //                                 }))
            //                             })),
            //                             "lookup": state(component(typeRef("Global Type Selection", true))),
            //                         }))),
            //                         "type": prop(component(typeRef("Type", true))),
            //                     })),
            //                     "group": state(group({
            //                         "properties": prop(dictionary(group({
            //                             "type": prop(component(typeRef("Type", true))),
            //                         }))),
            //                     })),
            //                     "nothing": state(group({
            //                     })),
            //                     "optional": state(group({
            //                         "type": prop(component(typeRef("Type", true))),
            //                     })),
            //                     "resolved reference": state(group({
            //                         "atom": prop(component(typeRef("Atom"))),
            //                         "value": prop(stateGroup({
            //                             "dictionary": state(component(typeRef("Dictionary Selection", true))),
            //                             "lookup": state(component(typeRef("Global Type Selection", true))),
            //                         }))
            //                     })),
            //                     "state group": state(group({
            //                         "states": prop(dictionary(group({
            //                             "type": prop(component(typeRef("Type", true))),
            //                         }))),
            //                     })),
            //                 })),
            //             })
            //         ),
            //         "Imports": globalTypeDefinition(
            //             dictionary(
            //                 group({
            //                     "library": prop(lookupReference(typeRef("Type Library", true)))
            //                 })
            //             )
            //         ),
            //         "Global Type Declaration": globalTypeDefinition(group({
            //             "parameters": prop(dictionary(group({
            //                 "type": prop(stateGroup({
            //                     "resolved value": state(cyclicReference(typeRef("Global Type Declaration", true))),
            //                     "sibling lookup": state(cyclicReference(typeRef("Global Type Declaration", true))),
            //                     "cyclic sibling lookup": state(cyclicReference(typeRef("Global Type Declaration", true))),
            //                     "key": state(group({})),
            //                 })),
            //                 "optional": prop(optional(group({}))),
            //             }))),
            //             "result": prop(optional(cyclicReference(typeRef("Global Type Declaration", true)))),
            //         })),
            //         "Global Type Declarations": globalTypeDefinition(dictionary(component(typeRef("Global Type Declaration")))),
            //         "Global Type Definition": globalTypeDefinition(
            //             group({
            //                 "declaration": prop(constraint(typeSelection("Global Type Declarations", t_dict()))),
            //                 "variables": prop(component(typeRef("Variables"))),
            //                 "type": prop(component(typeRef("Type"))),
            //                 "result": prop(optional(component(typeRef("Value Selection Tail", true)))),
            //             })
            //         ),
            //         "Type Selection Tail": globalTypeDefinition(
            //             group({
            //                 "step type": prop(stateGroup({
            //                     "dictionary": state(group({
            //                         "dictionary": prop(constraint(typeSelection("Type", t_grp("type", t_sg("dictionary"))))),
            //                         "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
            //                     })),
            //                     "optional": state(group({
            //                         "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
            //                         "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
            //                     })),
            //                     "array": state(group({
            //                         "array": prop(constraint(typeSelection("Type", t_grp("type", t_sg("array"))))),
            //                         "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
            //                     })),
            //                     "group": state(group({
            //                         "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
            //                         "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
            //                         "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
            //                     })),
            //                     "state group": state(group({
            //                         "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
            //                         "state": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))),
            //                         "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
            //                     })),
            //                 })),
            //             })
            //         ),
            //         "Type Selection": globalTypeDefinition(
            //             group({
            //                 "import": prop(optional(dictionaryReference(typeSelection("Imports")))),
            //                 "global type": prop(lookupReference(typeRef("Global Type Definition"))),
            //                 "tail": prop(optional(component(typeRef("Type Selection Tail", true)))),
            //             }),
            //         ),
            //         "Dictionary Selection": globalTypeDefinition(
            //             group({
            //                 "type": prop(component(typeRef("Type Selection"), {
            //                     "imports": null,
            //                     "sibling global types": null,
            //                 })),
            //                 "dictionary": constraint(typeSelection("Type", t_grp("type", t_sg("dictionary")))),
            //             })
            //         ),
            //         "Type Library": globalTypeDefinition(
            //             group({
            //                 "imports": prop(component(typeRef("Imports"), {
            //                     "external type libraries": null,
            //                 })),
            //                 "atom types": prop(component(typeRef("Atom Types"))),
            //                 "global types": prop(group({
            //                     "declarations": prop(component(typeRef("Global Type Declarations"))),
            //                     "definitions": prop(dictionary(component(typeRef("Global Type Definition"), {
            //                         "global type declarations": null,
            //                         "key": null,
            //                         "all siblings": null,
            //                         "non cyclic siblings": null,
            //                         "atom types": null,
            //                         "imports": null,
            
            //                     }))),
            //                 })),
            //             })
            //         ),
            //         "Global Type Selection": globalTypeDefinition(
            //             stateGroup({
            //                 "resolved sibling": state(group({
            //                     "type": prop(lookupReference(typeRef("Global Type Definition"))),
            //                 })),
            //                 "import": state(group({
            //                     "library": prop(dictionaryReference(typeSelection("Imports"))),
            //                     "type": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
            //                 })),
            //                 "cyclic sibling": state(group({
            //                     "type": prop(cyclicReference(typeRef("Global Type Definition"))),
            //                 })),
            //             }),
            //         ),
            //         "Model": globalTypeDefinition(
            //             group({
            //                 "type library": prop(component(typeRef("Type Library"), {
            //                     "external type libraries": null,
            //                 })),
            //                 "root": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
            //             })
            //         ),
            //         "Project": globalTypeDefinition(group({
            //             "type libraries": prop(dictionary(component(typeRef("Type Library"), {
            //                 "external type libraries": null,
            //             }))),
            //         })),
            //         "Root": globalTypeDefinition(
            //             component(typeRef("Project"))
            //         ),
            //         "Variable": globalTypeDefinition(
            //             stateGroup({
            //                 // "sibling property": state(lookupReference(typeRef("Property"))),
            //                 // "state constraint": state(dictionaryReference(typeSelection("State Constraints"))),
            //                 // "dictionary constraint": state(dictionaryReference(typeSelection("Dictionary Constraints"))),
            //                 // "parameter": state(group({
            //                 //     "parameter": prop(dictionaryReference(typeSelection("Parameters"))),
            //                 //     //"resolved value": prop(constraint(typeSelection("Parameters", t_dict(t_grp("type", t_sg("resolved value"))))))
            //                 // })),
            //                 "parent variable": state(lookupReference(typeRef("Variable", true))),
            //             })
            //         ),
            //         "Variables": globalTypeDefinition(
            //             dictionary(component(typeRef("Variable")))
            //         ),
            //         "Value Selection Tail": globalTypeDefinition(
            //             stateGroup({
            //                 "reference": state(group({
            //                     "reference": prop(constraint(typeSelection("Type", t_grp("type", t_sg("resolved reference"))))),
            //                     "tail": prop(optional(component(typeRef("Value Selection Tail", true))))
            //                 })),
            //                 "component": state(group({
            //                     "component": prop(constraint(typeSelection("Type", t_grp("type", t_sg("component"))))),
            //                     "tail": prop(optional(component(typeRef("Value Selection Tail", true))))
            
            //                 })),
            //                 "state group": state(group({
            //                     "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
            //                     "result type": prop(component(typeRef("Global Type Selection", true), {
            //                         "imports": null,
            //                         "sibling global types": null,
            //                         "cyclic sibling global types": null,
            //                     })),
            //                     "states": prop(constrainedDictionary(
            //                         {
            //                             "state": dictionaryConstraint(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))), true)
            //                         },
            //                         component(typeRef("Any Value Selection", true))
            //                     ))
            //                 })),
            //                 // "optional": state(group({
            //                 //     "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
            //                 //     "set": prop(component(typeRef("Any Value Selection", true))),
            //                 //     "not set": prop(component(typeRef("No Context Value Selection", true))),//validate result is equal to 'set' result
            //                 // })),
            //                 "group": state(group({
            //                     "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
            //                     "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
            //                     "tail": prop(optional(component(typeRef("Value Selection Tail", true))))
            //                 })),
            //             }),
            //         ),
            //         "No Context Value Selection": globalTypeDefinition(
            //             group({
            //                 "start": prop(dictionaryReference(typeSelection("Variables"))),
            //                 "tail": prop(optional(component(typeRef("Value Selection Tail"))))
            //             }),
            //         ),
            //         "Any Value Selection": globalTypeDefinition(
            //             group({
            //                 "start": prop(optional(dictionaryReference(typeSelection("Variables")))),
            //                 "tail": prop(optional(component(typeRef("Value Selection Tail"))))
            //             }),
            //         ),
            //     },
            //     {
            //         "Any Value Selection": globalTypeResolverDeclaration({}),
            //         "Atom Types": globalTypeResolverDeclaration({}),
            //         "Atom": globalTypeResolverDeclaration({
            //             "atom types": pResolvedValue("Atom Types")
            //         }),
            //         "Dictionary Selection": globalTypeResolverDeclaration({
            //             "imports": pResolvedValue("Imports"),
            //             "sibling global types": pLookup("Global Type Definition"),
            //             "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
            //         }),
            //         "Global Type Declaration": globalTypeResolverDeclaration({
            //             "all siblings": pCyclicLookup("Global Type Declaration", false)
            //         }),
            //         "Global Type Declarations": globalTypeResolverDeclaration({}),
            //         "Global Type Definition": globalTypeResolverDeclaration({
            //             "global type declarations": pResolvedValue("Global Type Declarations"),
            //             "key": pResolvedValue("Atom"),
            //             "all siblings": pCyclicLookup("Global Type Definition"),
            //             "non cyclic siblings": pLookup("Global Type Definition"),
            //             "atom types": pResolvedValue("Atom Types"),
            //             "imports": pResolvedValue("Imports"),
            //         }),
            //         "Global Type Selection": globalTypeResolverDeclaration({
            //             "imports": pResolvedValue("Imports"),
            //             "sibling global types": pLookup("Global Type Definition"),
            //             "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
            //         }),
            //         "Imports": globalTypeResolverDeclaration({
            //             "external type libraries": pLookup("Type Library"),
            //         }),
            //         "Model": globalTypeResolverDeclaration({
            //             "external type libraries": pLookup("Type Library")
            //         }),
            //         "No Context Value Selection": globalTypeResolverDeclaration({}),
            //         "Project": globalTypeResolverDeclaration({}),
            //         "Root": globalTypeResolverDeclaration({}),
            //         "Type Library": globalTypeResolverDeclaration({
            //             "external type libraries": pLookup("Type Library"),
            //         }),
            //         "Type Selection Tail": globalTypeResolverDeclaration({
            //             "context": pResolvedValue("Type"),
            //         }, "Type"),
            //         "Type Selection": globalTypeResolverDeclaration({
            //             "imports": pResolvedValue("Imports"),
            //             "sibling global types": pLookup("Global Type Definition"),
            //         }, "Type"),
            //         "Type": globalTypeResolverDeclaration({
            //             "atom types": pResolvedValue("Atom Types"),
            //             "imports": pResolvedValue("Imports"),
            //             "sibling global types": pLookup("Global Type Definition"),
            //             "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
            //         }),
            //         "Value Selection Tail": globalTypeResolverDeclaration({}),
            //         "Variable": globalTypeResolverDeclaration({}),
            //         "Variables": globalTypeResolverDeclaration({}),
            //     },
            //     {
            //         "Atom Types": globalTypeResolverImplementation(
            //             dictionary(group({}))
            //         ),
            //         "Atom": globalTypeResolverImplementation(
            //             group({
            //                 "type": prop(dictionaryReference(typeSelection("Atom Types"))),
            //             })
            //         ),
            //         "Type": globalTypeResolverImplementation(
            //             group({
            //                 "type": prop(stateGroup({
            //                     "array": state(group({
            //                         "type": prop(component(typeRef("Type", true), {
            //                             "atom types": null,
            //                             "imports": null,
            //                             "sibling global types": null,
            //                             "cyclic sibling global types": null,
            //                         })),
            //                     })),
            //                     "atom": state(group({
            //                         "atom": prop(component(typeRef("Atom"), {
            //                             "atom types": null,
            //                         })),
            //                     })),
            //                     "component": state(group({
            //                         "type": prop(component(typeRef("Global Type Selection", true), {
            //                             "imports": null,
            //                             "sibling global types": null,
            //                             "cyclic sibling global types": null,
            //                         })),
            //                         "arguments": prop(dictionary(optional(component(typeRef("No Context Value Selection", true), {})))),
            //                     })),
            //                     "constraint": state(component(typeRef("Type Selection", true), {
            //                         "imports": null,
            //                         "sibling global types": null,
            //                     })),
            //                     "cyclic reference": state(group({
            //                         "atom": prop(component(typeRef("Atom"), {
            //                             "atom types": null
            //                         })),
            //                         "sibling": component(typeRef("Global Type Selection", true), {
            //                             "imports": null,
            //                             "sibling global types": null,
            //                             "cyclic sibling global types": null,
            //                         }),
            //                     })),
            //                     "dictionary": state(group({
            //                         "key": prop(component(typeRef("Atom"), {
            //                             "atom types": null
            //                         })),
            //                         "constraints": prop(dictionary(stateGroup({
            //                             "dictionary": state(group({
            //                                 "dictionary": prop(component(typeRef("Dictionary Selection", true), {
            //                                     "imports": null,
            //                                     "sibling global types": null,
            //                                     "cyclic sibling global types": null,
            //                                 })),
            //                                 "dense": prop(stateGroup({
            //                                     "no": state(group({})),
            //                                     "yes": state(group({})),
            //                                 }))
            //                             })),
            //                             "lookup": state(component(typeRef("Global Type Selection", true), {
            //                                 "imports": null,
            //                                 "sibling global types": null,
            //                                 "cyclic sibling global types": null,
            //                             })),
            //                         }))),
            //                         "type": prop(component(typeRef("Type", true), {
            //                             "atom types": null,
            //                             "imports": null,
            //                             "sibling global types": null,
            //                             "cyclic sibling global types": null,
            //                         })),
            //                     })),
            //                     "group": state(group({
            //                         "properties": prop(dictionary(group({
            //                             "type": prop(component(typeRef("Type", true), {
            //                                 "atom types": null,
            //                                 "imports": null,
            //                                 "sibling global types": null,
            //                                 "cyclic sibling global types": null,
            //                             })),
            //                         }))),
            //                     })),
            //                     "nothing": state(group({
            //                     })),
            //                     "optional": state(group({
            //                         "type": prop(component(typeRef("Type", true), {
            //                             "atom types": null,
            //                             "imports": null,
            //                             "sibling global types": null,
            //                             "cyclic sibling global types": null,
            //                         })),
            //                     })),
            //                     "resolved reference": state(group({
            //                         "atom": prop(component(typeRef("Atom"), {
            //                             "atom types": null
            //                         })),
            //                         "value": prop(stateGroup({
            //                             "dictionary": state(component(typeRef("Dictionary Selection", true), {
            //                                 "imports": null,
            //                                 "sibling global types": null,
            //                                 "cyclic sibling global types": null,
            //                             })),
            //                             "lookup": state(component(typeRef("Global Type Selection", true), {
            //                                 "imports": null,
            //                                 "sibling global types": null,
            //                                 "cyclic sibling global types": null,
            //                             })),
            //                         }))
            //                     })),
            //                     "state group": state(group({
            //                         "states": prop(dictionary(group({
            //                             "type": prop(component(typeRef("Type", true), {
            //                                 "atom types": null,
            //                                 "imports": null,
            //                                 "sibling global types": null,
            //                                 "cyclic sibling global types": null,
            //                             })),
            //                         }))),
            //                     })),
            //                 })),
            //             })
            //         ),
            //         "Imports": globalTypeResolverImplementation(
            //             dictionary(
            //                 group({
            //                     "library": prop(lookupReference(typeRef("Type Library", true)))
            //                 })
            //             )
            //         ),
            //         "Global Type Declaration": globalTypeResolverImplementation(group({
            //             "parameters": prop(dictionary(group({
            //                 "type": prop(stateGroup({
            //                     "resolved value": state(cyclicReference(typeRef("Global Type Declaration", true))),
            //                     "sibling lookup": state(cyclicReference(typeRef("Global Type Declaration", true))),
            //                     "cyclic sibling lookup": state(cyclicReference(typeRef("Global Type Declaration", true))),
            //                     "key": state(group({})),
            //                 })),
            //                 "optional": prop(optional(group({}))),
            //             }))),
            //             "result": prop(optional(cyclicReference(typeRef("Global Type Declaration", true)))),
            //         })),
            //         "Global Type Declarations": globalTypeResolverImplementation(dictionary(component(typeRef("Global Type Declaration"), {
            //             "all siblings": null,
            //         }))),
            //         "Global Type Definition": globalTypeResolverImplementation(
            //             group({
            //                 "declaration": prop(constraint(typeSelection("Global Type Declarations", t_dict()))),
            //                 "variables": prop(component(typeRef("Variables"), {
            
            //                 })),
            //                 "type": prop(component(typeRef("Type"), {
            //                     "atom types": null,
            //                     "imports": null,
            //                     "sibling global types": null,
            //                     "cyclic sibling global types": null,
            //                 })),
            //                 "result": prop(optional(component(typeRef("Value Selection Tail", true), {}))),
            //             })
            //         ),
            //         "Type Selection Tail": globalTypeResolverImplementation(
            //             group({
            //                 "step type": prop(stateGroup({
            //                     "dictionary": state(group({
            //                         "dictionary": prop(constraint(typeSelection("Type", t_grp("type", t_sg("dictionary"))))),
            //                         "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
            //                     })),
            //                     "optional": state(group({
            //                         "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
            //                         "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
            //                     })),
            //                     "array": state(group({
            //                         "array": prop(constraint(typeSelection("Type", t_grp("type", t_sg("array"))))),
            //                         "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
            //                     })),
            //                     "group": state(group({
            //                         "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
            //                         "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
            //                         "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
            //                     })),
            //                     "state group": state(group({
            //                         "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
            //                         "state": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))),
            //                         "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
            //                     })),
            //                 })),
            //             })
            //         ),
            //         "Type Selection": globalTypeResolverImplementation(
            //             group({
            //                 "import": prop(optional(dictionaryReference(typeSelection("Imports")))),
            //                 "global type": prop(lookupReference(typeRef("Global Type Definition"))),
            //                 "tail": prop(optional(component(typeRef("Type Selection Tail", true), {}))),
            //             }),
            //         ),
            //         "Dictionary Selection": globalTypeResolverImplementation(
            //             group({
            //                 "type": prop(component(typeRef("Type Selection"), {
            //                     "imports": null,
            //                     "sibling global types": null,
            //                 })),
            //                 "dictionary": constraint(typeSelection("Type", t_grp("type", t_sg("dictionary")))),
            //             })
            //         ),
            //         "Type Library": globalTypeResolverImplementation(
            //             group({
            //                 "imports": prop(component(typeRef("Imports"), {
            //                     "external type libraries": null,
            //                 })),
            //                 "atom types": prop(component(typeRef("Atom Types"), {})),
            //                 "global types": prop(group({
            //                     "declarations": prop(component(typeRef("Global Type Declarations"), {})),
            //                     "definitions": prop(dictionary(component(typeRef("Global Type Definition"), {
            //                         "global type declarations": null,
            //                         "key": null,
            //                         "all siblings": null,
            //                         "non cyclic siblings": null,
            //                         "atom types": null,
            //                         "imports": null,
            
            //                     }))),
            //                 })),
            //             })
            //         ),
            //         "Global Type Selection": globalTypeResolverImplementation(
            //             stateGroup({
            //                 "resolved sibling": state(group({
            //                     "type": prop(lookupReference(typeRef("Global Type Definition"))),
            //                 })),
            //                 "import": state(group({
            //                     "library": prop(dictionaryReference(typeSelection("Imports"))),
            //                     "type": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
            //                 })),
            //                 "cyclic sibling": state(group({
            //                     "type": prop(cyclicReference(typeRef("Global Type Definition"))),
            //                 })),
            //             }),
            //         ),
            //         "Model": globalTypeResolverImplementation(
            //             group({
            //                 "type library": prop(component(typeRef("Type Library"), {
            //                     "external type libraries": null,
            //                 })),
            //                 "root": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
            //             })
            //         ),
            //         "Project": globalTypeResolverImplementation(group({
            //             "type libraries": prop(dictionary(component(typeRef("Type Library"), {
            //                 "external type libraries": null,
            //             }))),
            //         })),
            //         "Root": globalTypeResolverImplementation(
            //             component(typeRef("Project"), {})
            //         ),
            //         "Variable": globalTypeResolverImplementation(
            //             stateGroup({
            //                 // "sibling property": state(lookupReference(typeRef("Property"))),
            //                 // "state constraint": state(dictionaryReference(typeSelection("State Constraints"))),
            //                 // "dictionary constraint": state(dictionaryReference(typeSelection("Dictionary Constraints"))),
            //                 // "parameter": state(group({
            //                 //     "parameter": prop(dictionaryReference(typeSelection("Parameters"))),
            //                 //     //"resolved value": prop(constraint(typeSelection("Parameters", t_dict(t_grp("type", t_sg("resolved value"))))))
            //                 // })),
            //                 "parent variable": state(lookupReference(typeRef("Variable", true))),
            //             })
            //         ),
            //         "Variables": globalTypeResolverImplementation(
            //             dictionary(component(typeRef("Variable"), {}))
            //         ),
            //         "Value Selection Tail": globalTypeResolverImplementation(
            //             stateGroup({
            //                 "reference": state(group({
            //                     "reference": prop(constraint(typeSelection("Type", t_grp("type", t_sg("resolved reference"))))),
            //                     "tail": prop(optional(component(typeRef("Value Selection Tail", true), {})))
            //                 })),
            //                 "component": state(group({
            //                     "component": prop(constraint(typeSelection("Type", t_grp("type", t_sg("component"))))),
            //                     "tail": prop(optional(component(typeRef("Value Selection Tail", true), {})))
            
            //                 })),
            //                 "state group": state(group({
            //                     "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
            //                     "result type": prop(component(typeRef("Global Type Selection", true), {
            //                         "imports": null,
            //                         "sibling global types": null,
            //                         "cyclic sibling global types": null,
            //                     })),
            //                     "states": prop(constrainedDictionary(
            //                         {
            //                             "state": dictionaryConstraint(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))), true)
            //                         },
            //                         component(typeRef("Any Value Selection", true), {})
            //                     ))
            //                 })),
            //                 // "optional": state(group({
            //                 //     "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
            //                 //     "set": prop(component(typeRef("Any Value Selection", true))),
            //                 //     "not set": prop(component(typeRef("No Context Value Selection", true))),//validate result is equal to 'set' result
            //                 // })),
            //                 "group": state(group({
            //                     "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
            //                     "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
            //                     "tail": prop(optional(component(typeRef("Value Selection Tail", true), {})))
            //                 })),
            //             }),
            //         ),
            //         "No Context Value Selection": globalTypeResolverImplementation(
            //             group({
            //                 "start": prop(dictionaryReference(typeSelection("Variables"))),
            //                 "tail": prop(optional(component(typeRef("Value Selection Tail"), {})))
            //             }),
            //         ),
            //         "Any Value Selection": globalTypeResolverImplementation(
            //             group({
            //                 "start": prop(optional(dictionaryReference(typeSelection("Variables")))),
            //                 "tail": prop(optional(component(typeRef("Value Selection Tail"), {})))
            //             }),
            //         ),
            //     },
            // ),
            // "proto typesystem": typeLibrary(
            //     {
            //     },
            //     {
            //         "identifier": null,
            //     },
            //     {
            //         "Aggregated Type Parameters": globalTypeDefinition(dictionary(group({}))),
            //         "Type Parameters": globalTypeDefinition(
            //             group({
            //                 "local": prop(dictionary(group({}))),
            //                 "aggregated": prop(component(typeRef("Aggregated Type Parameters"), {}))
            //             })
            //         ),
            //         "Function Declaration": globalTypeDefinition(
            //             group({
            //                 "type parameters": prop(component(typeRef("Type Parameters"), {
            //                     "parent type parameters": null,
            //                 })),
            //                 "context": prop(component(typeRef("Type", true), {
            //                     "resolved namespaces": null,
            //                     "resolved sibling types": null,
            //                     "cyclic sibling types": null,
            //                     "type parameters": null,
            //                 })),
            //                 "parameters": prop(dictionary(component(typeRef("Type", true), {
            //                     "resolved namespaces": null,
            //                     "resolved sibling types": null,
            //                     "cyclic sibling types": null,
            //                     "type parameters": null,
            //                 }))),
            //             })
            //         ),
            //         "Imports": globalTypeDefinition(
            //             dictionary(component(typeRef("Import", true), {}))
            //         ),
            //         "Nested Namespace": globalTypeDefinition(
            //             group({
            //                 "imports": prop(component(typeRef("Imports"), {})),
            //                 "namespace": prop(component(typeRef("Namespace", true), {
            //                     "resolved sibling namespaces": null,
            //                     "parent type parameters": null,
            //                 })),
            //             })
            //         ),
            //         "Import": globalTypeDefinition(
            //             stateGroup({
            //                 "sibling": state(lookupReference(typeRef("Nested Namespace"))),
            //                 "parent import": state(dictionaryReference(typeSelection("Imports"))),
            //             })
            //         ),
            //         "Namespace": globalTypeDefinition(
            //             group({
            //                 "namespaces": prop(dictionary(component(typeRef("Nested Namespace"), {
            //                     "resolved parent sibling namespaces": null,
            //                 }))),
            //                 "parameters": prop(component(typeRef("Type Parameters"), {
            //                     "parent type parameters": null,
            //                 })),
            //                 "types": prop(dictionary(component(typeRef("Type", true), {
            //                     "resolved namespaces": null,
            //                     "resolved sibling types": null,
            //                     "cyclic sibling types": null,
            //                     "type parameters": null,
            //                 }))),
            //             }),
            //         ),
            //         "Type": globalTypeDefinition(
            //             stateGroup({
            //                 "atom": state(stateGroup({
            //                     "boolean": state(group({})),
            //                     "null": state(group({})),
            //                     "number": state(group({})),
            //                     "string": state(group({})),
            //                 })),
            //                 "array": state(component(typeRef("Type", true), {
            //                     "resolved namespaces": null,
            //                     "resolved sibling types": null,
            //                     "cyclic sibling types": null,
            //                     "type parameters": null,
            //                 })),
            //                 "computed": state(component(typeRef("Type", true), {
            //                     "resolved namespaces": null,
            //                     "resolved sibling types": null,
            //                     "cyclic sibling types": null,
            //                     "type parameters": null,
            //                 })),
            //                 "dictionary": state(component(typeRef("Type", true), {
            //                     "resolved namespaces": null,
            //                     "resolved sibling types": null,
            //                     "cyclic sibling types": null,
            //                     "type parameters": null,
            //                 })),
            //                 "group": state(dictionary(group({
            //                     "type": prop(component(typeRef("Type", true), {
            //                         "resolved namespaces": null,
            //                         "resolved sibling types": null,
            //                         "cyclic sibling types": null,
            //                         "type parameters": null,
            //                     })),
            //                     "mutable": prop(optional(group({}))),
            //                 }))),
            //                 "initialization function": state(group({
            //                     "declaration": prop(component(typeRef("Function Declaration"), {
            //                         "resolved namespaces": null,
            //                         "resolved sibling types": null,
            //                         "cyclic sibling types": null,
            //                         "type parameters": null,
            //                     })),
            //                     "return type": prop(component(typeRef("Type", true), {
            //                         "resolved namespaces": null,
            //                         "resolved sibling types": null,
            //                         "cyclic sibling types": null,
            //                         "type parameters": null,
            //                     })),
            //                 })),
            //                 "lookup": state(component(typeRef("Type", true), {
            //                     "resolved namespaces": null,
            //                     "resolved sibling types": null,
            //                     "cyclic sibling types": null,
            //                     "type parameters": null,
            //                 })),
            //                 "optional": state(component(typeRef("Type", true), {
            //                     "resolved namespaces": null,
            //                     "resolved sibling types": null,
            //                     "cyclic sibling types": null,
            //                     "type parameters": null,
            //                 })),
            //                 "procedure": state(group({
            //                     "declaration": prop(component(typeRef("Function Declaration"), {
            //                         "resolved namespaces": null,
            //                         "resolved sibling types": null,
            //                         "cyclic sibling types": null,
            //                         "type parameters": null,
            //                     })),
            //                 })),
            //                 "selection function": state(group({
            //                     "declaration": prop(component(typeRef("Function Declaration"), {
            //                         "resolved namespaces": null,
            //                         "resolved sibling types": null,
            //                         "cyclic sibling types": null,
            //                         "type parameters": null,
            //                     })),
            //                     "return type": prop(component(typeRef("Type", true), {
            //                         "resolved namespaces": null,
            //                         "resolved sibling types": null,
            //                         "cyclic sibling types": null,
            //                         "type parameters": null,
            //                     })),
            //                 })),
            //                 "tagged union": state(dictionary(component(typeRef("Type", true), {
            //                     "resolved namespaces": null,
            //                     "resolved sibling types": null,
            //                     "cyclic sibling types": null,
            //                     "type parameters": null,
            //                 }))),
            //                 "type parameter": state(dictionaryReference(typeSelection("Aggregated Type Parameters"))),
            //                 "type reference": state(stateGroup({
            //                     "external": state(group({
            //                         "namespace path": prop(component(typeRef("Namespace Selection", true), {
            //                             "resolved namespaces": null,
            //                             "resolved sibling types": null,
            //                             "cyclic sibling types": null,
            //                             "type parameters": null,
            //                         })),
            //                         "type": prop(dictionaryReference(typeSelection("Namespace", t_grp("types")))),
            
            //                     })),
            //                     "sibling": state(lookupReference(typeRef("Type", true))),
            //                     "cyclic sibling": state(cyclicReference(typeRef("Type", true))),
            //                 })),
            //             })
            //         ),
            //         "Type Arguments": globalTypeDefinition(constrainedDictionary(
            //             {
            //                 "parameter": dictionaryConstraint(typeSelection("Type Parameters", t_grp("local")), true),
            //             },
            //             group({
            //                 //link to parameter
            //                 "type": prop(component(typeRef("Type", true), {
            //                     "resolved namespaces": null,
            //                     "resolved sibling types": null,
            //                     "cyclic sibling types": null,
            //                     "type parameters": null,
            //                 })),
            //             }))),
            //         "Namespace Selection Tail": globalTypeDefinition(
            //             group({
            //                 "namespace": prop(dictionaryReference(typeSelection("Namespace", t_grp("namespaces")))),
            //                 "arguments": prop(component(typeRef("Type Arguments"), {})),
            //                 "tail": prop(optional(component(typeRef("Namespace Selection Tail", true), {})))
            //             })
            //         ),
            //         "Namespace Selection": globalTypeDefinition(
            //             group({
            //                 "start": prop(stateGroup({
            //                     "import": state(group({
            //                         "namespace": prop(dictionaryReference(typeSelection("Imports"))),
            //                         "arguments": prop(component(typeRef("Type Arguments"), {})),
            //                         "tail": prop(optional(component(typeRef("Namespace Selection Tail"), {})))
            //                     })),
            //                     "local": state(group({
            //                         "namespace": prop(component(typeRef("Namespace Selection Tail"), {})),
            //                     })),
            //                 })),
            //             })
            //         ),
            //         // "Namespace Selection": globalTypeDefinition(
            //         //     group({
            //         //         "namespace": prop(resolvedReference(lookup(typeRef("Local Namespace")))),
            //         //         "tail": prop(optional(component(typeRef("Namespace Selection"))))
            //         //     })
            //         // ),
            //         "Root": globalTypeDefinition(
            //             component(typeRef("Namespace"), {
            //                 "resolved sibling namespaces": null,
            //                 "parent type parameters": null,
            //             }),
            //         )
            //     },
            //     {
            //         "Aggregated Type Parameters": globalTypeResolverDeclaration({}),
            //         "Function Declaration": globalTypeResolverDeclaration({
            //             "resolved namespaces": pLookup("Nested Namespace"),
            //             "resolved sibling types": pLookup("Type"),
            //             "cyclic sibling types": pCyclicLookup("Type"),
            //             "type parameters": pResolvedValue("Aggregated Type Parameters"),
            //         }),
            //         "Import": globalTypeResolverDeclaration({}),
            //         "Imports": globalTypeResolverDeclaration({}),
            //         "Namespace": globalTypeResolverDeclaration({
            //             "resolved sibling namespaces": pLookup("Nested Namespace", true),
            //             "parent type parameters": pResolvedValue("Aggregated Type Parameters", true),
            //         }),
            //         "Nested Namespace": globalTypeResolverDeclaration({
            //             "resolved parent sibling namespaces": pLookup("Nested Namespace", true),
            //         }, "Namespace"),
            //         "Namespace Selection": globalTypeResolverDeclaration({
            //             "resolved namespaces": pLookup("Nested Namespace"),
            //             "resolved sibling types": pLookup("Type"),
            //             "cyclic sibling types": pCyclicLookup("Type"),
            //             "type parameters": pResolvedValue("Aggregated Type Parameters"),
            //         }, "Nested Namespace"),
            //         "Namespace Selection Tail": globalTypeResolverDeclaration({}),
            //         "Root": globalTypeResolverDeclaration({}),
            //         "Type Arguments": globalTypeResolverDeclaration({}),
            //         "Type Parameters": globalTypeResolverDeclaration({
            //             "parent type parameters": pResolvedValue("Aggregated Type Parameters", true),
            //         }),
            //         "Type": globalTypeResolverDeclaration({
            //             "resolved namespaces": pLookup("Nested Namespace"),
            //             "resolved sibling types": pLookup("Type"),
            //             "cyclic sibling types": pCyclicLookup("Type"),
            //             "type parameters": pResolvedValue("Aggregated Type Parameters"),
            //         }),
            //     },
            // ),
            // "proto implementation": typeLibrary(
            //     {
            //         "typesystem": imprt("proto typesystem"),
            //     },
            //     {
            //         "numeric literal": null,
            //         "string literal": null,
            //         "identifier": null,
            //     },
            //     {
            //         "Type Selection": globalTypeDefinition(
            //             stateGroup(
            //                 {
            //                     "current namespaceXXXXX": state(
            //                         dictionaryReference(externalTypeSelection("typesystem", "Namespace", t_grp("types"))),
            //                     ),
            //                     "child namespace": state(
            //                         group({
            //                             "namespacex": prop(dictionaryReference(externalTypeSelection("typesystem", "Namespace", t_grp("namespaces")))),
            //                             "selection": prop(component(typeRef("Type Selection", true), {})),
            //                         }),
            //                     )
            //                 }
            //             )
            //         ),
            //         "Type Arguments": globalTypeDefinition(
            //             constrainedDictionary(
            //                 { "x": dictionaryConstraint(externalTypeSelection("typesystem", "Type Parameters", t_grp("local")), true) },
            //                 group({
            //                     "type": prop(component(typeRef("Type Selection"), {}))
            //                 })
            //             )
            //         ),
            //         "Local Variables": globalTypeDefinition(
            //             dictionary(group({
            //                 "type": prop(component(typeRef("Type Selection"), {})),
            //                 "initialization": prop(component(typeRef("Initialization", true), {})),
            //             }))
            //         ),
            //         "Aggregated Variable": globalTypeDefinition(
            //             group({
            //                 "type": prop(stateGroup({
            //                     //FIXME "parameter": state(group({
            //                     //     "parameter": prop(dictionaryReference(valSel("parameters"), tempExternalTypeSelection("typesystem", "Parameters"))),
            //                     // }), tailSel(s_group("parameter", s_reference(s_group("type"))))),
            //                     "variable stack2": state(group({
            //                         "variable": prop(lookupReference(typeRef("Aggregated Variable", true))),
            //                     })),
            //                     "local": state(group({
            //                         //"variable": prop(dictionaryReference(typeSelection("Local Variables"))),
            //                     })),
            //                 })),
            //             })
            //         ),
            //         "Aggregated Variables": globalTypeDefinition(
            //             dictionary(component(typeRef("Aggregated Variable"), {}))
            //         ),
            //         "Variables": globalTypeDefinition(
            //             group({
            //                 "local": prop(component(typeRef("Local Variables"), {})),
            //                 "aggregated": prop(component(typeRef("Aggregated Variables"), {}))
            //             })
            //         ),
            //         "Target Selection Tail": globalTypeDefinition(
            //             optional(
            //                 group({
            //                     "step": prop(stateGroup({
            //                         "property": state(
            //                             group({
            //                                 "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
            //                                 "property": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("group")))),
            //                             }),
            //                         ),
            //                     })),
            //                     "tail": prop(component(typeRef("Target Selection Tail", true), {}))
            //                 }),
            //             )
            //         ),
            //         "Target Selection": globalTypeDefinition(
            //             group({
            //                 "variable": prop(dictionaryReference(typeSelection("Aggregated Variables"))),
            //                 "tail": prop(component(typeRef("Target Selection Tail"), {})),
            //             })
            //         ),
            //         "Function Call": globalTypeDefinition(
            //             group({
            //                 // "function": prop(component(typeRef("Source Selection", {
            //                 //     "namespace": aResolvedValue(valSel("namespace")),
            //                 //     "variable stack": aResolvedValue(valSel("variable stack"))
            //                 // })), /*constraint tagged union: type === address function*/
            //                 "type arguments": prop(component(typeRef("Type Arguments"), {})),
            //                 "context": prop(component(typeRef("Source Selection", true), {})),
            //                 "arguments": prop(constrainedDictionary(
            //                     {
            //                         "parameter": dictionaryConstraint(externalTypeSelection("typesystem", "Function Declaration", t_grp("parameters")), true)
            //                     },
            //                     stateGroup({
            //                         "initialization": state(component(typeRef("Initialization", true), {})),
            //                         "selection": state(group({
            //                             "selection": prop(component(typeRef("Source Selection", true), {})),
            //                         })),
            //                     })
            //                 ))
            //             })
            //         ),
            //         "Source Selection Tail": globalTypeDefinition(
            //             optional(
            //                 group({
            //                     "step": prop(stateGroup({
            //                         "call": state(group({
            //                             "selection function": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("selection function")))),
            //                             "call": prop(component(typeRef("Function Call"), {})),
            //                         })),
            //                         "property": state(
            //                             group({
            //                                 "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
            //                                 "property": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("group")))),
            //                             }),
            //                         ),
            //                     })),
            //                     "tail": prop(component(typeRef("Source Selection Tail", true), {}))
            //                 }),
            //             )
            //         ),
            //         "Source Selection": globalTypeDefinition(
            //             group({
            //                 "start": stateGroup({
            //                     "context": state(group({})),
            //                     "variable": state(dictionaryReference(typeSelection("Aggregated Variables")))
            //                 }),
            //                 "tail": prop(component(typeRef("Source Selection Tail"), {})),
            //             }),
            //         ),
            
            //         ///////////////////////////////////////////////////////////////////////////////
            //         //Expressions
            //         "String Initialization Or Selection": globalTypeDefinition(
            //             stateGroup({
            //                 "initialization": state(component(typeRef("String Initialization", true), {})),
            //                 "selection": state(group({
            //                     "selection": prop(component(typeRef("Source Selection"), {})),
            //                     "string": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("string"))))),
            //                 })),
            //             })
            //         ),
            //         "Numerical Initialization Or Selection": globalTypeDefinition(
            //             stateGroup({
            //                 "initialization": state(component(typeRef("Numerical Initialization", true), {})),
            //                 "selection": state(group({
            //                     "selection": prop(component(typeRef("Source Selection"), {})),
            //                     "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
            //                 })),
            
            //             })
            //         ),
            //         "Boolean Initialization Or Selection": globalTypeDefinition(
            //             stateGroup({
            //                 "initialization": state(component(typeRef("Boolean Initialization", true), {})),
            //                 "selection": state(group({
            //                     "selection": prop(component(typeRef("Source Selection"), {})),
            //                     "boolean": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("boolean")))))
            //                 })),
            //             })
            //         ),
            //         "Boolean Initialization": globalTypeDefinition(
            //             stateGroup({
            //                 "and": state(group({
            //                     "left hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
            //                     "right hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
            //                 })),
            //                 "or": state(group({
            //                     "left hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
            //                     "right hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
            //                 })),
            //                 "false": state(group({})),
            //                 "not": state(component(typeRef("Boolean Initialization Or Selection"), {})),
            //                 "true": state(group({})),
            //                 // //boolean/string
            //                 "string equals": state(group({
            //                     "left hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
            //                     "right hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
            //                 })),
            //                 "string not equals": state(group({
            //                     "left hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
            //                     "right hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
            //                 })),
            //                 // //boolean/number
            //                 "number equals": state(group({
            //                     "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                     "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                 })),
            //                 "number not equals": state(group({
            //                     "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                     "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                 })),
            //                 "greater than": state(group({
            //                     "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                     "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                 })),
            //                 "less than": state(group({
            //                     "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                     "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                 })),
            //             })
            //         ),
            //         "Numerical Initialization": globalTypeDefinition(
            //             stateGroup({
            //                 "minus": state(group({
            //                     "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                     "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                 })),
            //                 "plus": state(group({
            //                     "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                     "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                 })),
            //                 "predecrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                 "preincrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                 "postdecrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                 "postincrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                 "numeric literal": state(atom("numeric literal")),
            //             })
            //         ),
            //         "String Initialization": globalTypeDefinition(
            //             stateGroup({
            //                 "string literal": state(atom("string literal")),
            //             })
            //         ),
            //         "Generic Initialization": globalTypeDefinition(
            //             stateGroup({
            //                 "change context": state(group({
            //                     "source": prop(component(typeRef("Source Selection"), {})),
            //                     "initialization": prop(component(typeRef("Initialization", true), {})),
            //                 })),
            //                 "implement me": state(atom("string literal")),
            //                 "panic": state(atom("string literal")),
            //                 "switch": state(group({
            //                     "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
            //                     "temp type": prop(component(typeRef("Type Selection"), {})),
            //                     "source": prop(component(typeRef("Source Selection"), {})),
            //                     "cases": prop(constrainedDictionary(
            //                         {
            
            //                         },
            //                         component(typeRef("Initialization", true), {})
            //                     )),
            //                     "default": prop(optional(component(typeRef("Initialization", true), {})))
            //                 })),
            //                 "variables": state(group({
            //                     "variables": prop(component(typeRef("Variables"), {})),
            //                     "initialization": prop(component(typeRef("Initialization", true), {})),
            //                 }))
            //             }),
            //         ),
            //         "Initialization": globalTypeDefinition(
            //             stateGroup({
            //                 "generic": state(component(typeRef("Generic Initialization"), {})),
            //                 "call": state(group({
            //                     "function": prop(component(typeRef("Source Selection"), {})),
            //                     "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("initialization function")))),
            //                     "call": prop(component(typeRef("Function Call"), {})),
            //                 })),
            //                 // "conditional": state(group({
            //                 //     "test": prop(component(typeRef("Boolean Initialization Or Selection", {
            //                 //         "namespace": aResolvedValue(valSel("namespace")),
            //                 //         "variable stack": aResolvedValue(valSel("variable stack"))
            //                 //     })),
            //                 //     "true": prop(component(typeRef("Initialization", {
            //                 //         "variable stack": aResolvedValue(valSel("variable stack")),
            //                 //         "namespace": aResolvedValue(valSel("namespace")),
            //                 //         "type": aResolvedValue(valSel("type")),
            //                 //     })),
            //                 //     "false": prop(component(typeRef("Initialization", {
            //                 //         "expected type": aResolvedValue(valSel("expected type")),
            //                 //         "variable stack": aResolvedValue(valSel("variable stack")),
            //                 //         "namespace": aResolvedValue(valSel("namespace")),
            //                 //     })),
            //                 // })),
            //                 "type": state(stateGroup({
            //                     "array": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("array")))),
            //                         "type": prop(stateGroup({
            //                             "literal": state(group({
            //                                 "initialization": prop(array(component(typeRef("Initialization", true), {}))),
            //                             })),
            //                             "map": state(group({
            //                                 "source": prop(component(typeRef("Source Selection"), {})),
            //                                 "initialization": prop(component(typeRef("Initialization", true), {})),
            //                             })),
            //                         }))
            //                     })),
            //                     "atom": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom")))),
            //                         "type": prop(stateGroup({
            //                             "boolean": state(group({
            //                                 "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("boolean"))))),
            //                                 "initialization": prop(component(typeRef("Boolean Initialization"), {})),
            //                             })),
            //                             "copy": state(group({
            //                                 "source": prop(component(typeRef("Source Selection", true), {})),
            //                             })),
            //                             "null": state(group({
            //                                 "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("null"))))),
            //                             })),
            //                             "numerical": state(group({
            //                                 "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
            //                                 "initialization": prop(component(typeRef("Numerical Initialization"), {})),
            //                             })),
            //                             "string": state(group({
            //                                 "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("string"))))),
            //                                 "initialization": prop(component(typeRef("String Initialization"), {})),
            //                             })),
            
            //                         })),
            //                     })),
            //                     "computed": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("computed")))),
            //                         //FIXME
            //                     })),
            //                     "dictionary": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("dictionary")))),
            //                         "type": prop(stateGroup({
            //                             "literal": state(group({
            //                                 "initialization": prop(dictionary(component(typeRef("Initialization", true), {}))),
            //                             })),
            //                             "map": state(group({
            //                                 "source": prop(component(typeRef("Source Selection"), {})),
            //                                 "initialization": prop(component(typeRef("Initialization", true), {})),
            //                             })),
            //                         }))
            //                     })),
            //                     "group": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
            //                         "properties": prop(constrainedDictionary(
            //                             {
            //                                 "definition": dictionaryConstraint(externalTypeSelection("typesystem", "Type", t_sg("group")), true)
            //                             },
            //                             component(typeRef("Initialization", true), {}),
            //                         )),
            //                     })),
            //                     "initialization function": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("initialization function")))),
            //                         "temp has parameters": prop(optional(group({}))),
            //                         "variables": prop(component(typeRef("Aggregated Variables"), {})),
            //                         "initialization": prop(component(typeRef("Initialization", true), {}))
            //                     })),
            //                     "lookup": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("lookup")))),
            //                         //FIXME
            //                     })),
            //                     "optional": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("optional")))),
            //                         //"initialization": prop(component(typeRef("Boolean Initialization"), {})),
            //                     })),
            //                     "procedure": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("procedure")))),
            //                         "temp has parameters": prop(optional(group({}))),
            //                         "variables": prop(component(typeRef("Aggregated Variables"), {})),
            //                         "block": prop(component(typeRef("Block", true), {}))
            //                     })),
            //                     "selection function": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("selection function")))),
            //                         "temp has parameters": prop(optional(group({}))),
            //                         "variables": prop(component(typeRef("Aggregated Variables"), {})),
            //                         "initialization": prop(component(typeRef("Initialization", true), {}))
            //                     })),
            //                     "tagged union": state(group({
            //                         "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
            //                         "state": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
            //                         "initialization": prop(component(typeRef("Initialization", true), {})),
            //                     })),
            //                 })),
            //             })
            //         ),
            
            
            //         //Statements
            //         "Block": globalTypeDefinition(
            //             group({
            //                 "variables": prop(component(typeRef("Variables"), {})),
            //                 "statements": prop(component(typeRef("Statements", true), {}))
            //             })
            //         ),
            //         "Assign": globalTypeDefinition(
            //             group({
            //                 "target": prop(component(typeRef("Target Selection"), {})),
            //                 "initialization": prop(component(typeRef("Initialization"), {})),
            //             }),
            //         ),
            //         "Statements": globalTypeDefinition(
            //             array(stateGroup({
            //                 "block": state(component(typeRef("Block"), {})),
            //                 "call": state(group({
            //                     "function": prop(component(typeRef("Source Selection"), {})),
            //                     "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("procedure")))),
            //                     "call": prop(component(typeRef("Function Call"), {})),
            //                 })),
            //                 "change context": state(group({
            //                     "source": prop(component(typeRef("Source Selection"), {})),
            //                     "block": prop(component(typeRef("Block"), {}))
            //                 })),
            
            //                 "if": state(group({
            //                     "condition": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
            //                     "then": prop(component(typeRef("Block"), {})),
            //                     "else": prop(optional(component(typeRef("Block"), {}))),
            //                 })),
            //                 "switch": state(group({
            //                     "source": prop(component(typeRef("Source Selection"), {})),
            //                     "context definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
            //                     "cases": prop(constrainedDictionary(
            //                         {
            
            //                         },
            //                         component(typeRef("Block"), {})
            //                     )),
            //                     "default": prop(optional(component(typeRef("Block"), {})))
            //                 })),
            //                 "with": state(group({
            //                     "source": prop(component(typeRef("Source Selection"), {})),
            //                     "action": prop(stateGroup({
            //                         // "call": constrainedstate({
            //                         //     "procedure address": optionConstraint(valSel("address", s_component()), "procedure", externalTypeSelection("typesystem", "Type", [tu("procedure")]))
            //                         // }, group({
            //                         //     "type arguments": prop(component(typeRef("Type Arguments", {
            //                         //         "type parameters": aResolvedValue(valSel("function")),
            //                         //         "namespace": aResolvedValue(valSel("namespace")),
            //                         //     })),
            //                         //         "arguments": prop(constrainedDictionary(
            //                         //             { "parameter": dictConstraint(valSel("function"), externalTypeSelection("typesystem", "Parameters")) },
            //                         //             component(typeRef("Initialization", {
            //                         //                 "expected type": aResolvedValue(valSel("parameter")),
            //                         //                 "variable stack": aResolvedValue(valSel("variable stack")),
            //                         //                 "namespace": aResolvedValue(valSel("namespace")),
            //                         //             })
            //                         //             )),
            //                         //         })),
            //                         "assign": state(component(typeRef("Assign"), {})),
            //                         "minus assign": state(group({/*must be number*/
            //                             "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
            //                             "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                         })),
            //                         "plus assign": state(group({/*must be number*/
            //                             "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
            //                             "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
            //                         })),
            
            
            //                     }))
            //                 })),
            //                 // "for": state(group({
            //                 //     "condition": prop(component(typeRef("Boolean Initialization", {
            //                 //         "variable stack": aResolvedValue(valSel("variable stack")),
            //                 //         "namespace": aResolvedValue(valSel("namespace")),
            //                 //     })),
            //                 //     "incrementer": prop(component(typeRef("Assign", {
            //                 //         "namespace": aResolvedValue(valSel("namespace")),
            //                 //         "variable stack": aResolvedValue(valSel("variable stack")),
            //                 //     })),
            //                 //     "block": prop(component(typeRef("Block", {
            //                 //         "function": aResolvedValue(valSel("function")),
            //                 //         "namespace": aResolvedValue(valSel("namespace")),
            //                 //         "variable stack": aResolvedValue(valSel("variable stack")),
            //                 //     })),
            //                 ///})),
            //                 // // "labeled": composite("LabeledStatement", group({
            //                 // //     "label": member(component(typeRef("identifier"), {}),
            //                 // //     "statement": member(component(typeRef("statement"), {}),
            //                 // // })),
            //                 // // "return": state(group({
            //                 // //     "Initialization": prop(optional(component(typeRef("Initialization", {
            //                 // //         "expected type": aResolvedValue(valSel("function", s_group("return type", result()))),
            //                 // //         "variable stack": aResolvedValue(valSel("variable stack")),
            //                 // //         "namespace": aResolvedValue(valSel("namespace")),
            //                 // //     })))
            //                 // // })),
            //                 // // "throw": state(component(typeRef("Initialization", {})),
            //                 // // "try": state(group({
            //                 // //     "block": prop(component(typeRef("Block", {})),
            //                 // //     "catchClause": prop(group({
            //                 // //         "variable": prop(component(typeRef("variableDeclaration"), {}),
            //                 // //         "block": member(component(typeRef("block"), {}),
            //                 // //     }))),
            //                 // // }))),
            //                 "while": state(group({
            //                     "condition": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
            //                     "block": prop(component(typeRef("Block"), {})),
            //                 })),
            //             }))
            //         ),
            
            //         // // "Symbols": globalTypeDefinition({
            //         // //     "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
            //         // // }, dictionary(stateGroup({
            //         // //     "namespace": state(group({
            //         // //         "symbols": prop(component(typeRef("Symbols", {
            //         // //             "namespace": aResolvedValue(valSel("namespace"))
            //         // //         }))
            //         // //     })),
            //         // //     "symbol": state(group({
            //         // //         "type path": prop(component(typeRef("Type Selection", {
            //         // //             "namespace": aResolvedValue(valSel("namespace"))
            //         // //         })),
            //         // //     })),
            //         // // }))),
            //         // // "Type Selection Tail": globalTypeDefinition(
            //         // //     {
            //         // //         "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
            //         // //     },
            //         // //     optional(
            //         // //         group({
            //         // //             //"step type": prop(dictionaryReference(valSel("TBD"), externalTypeSelection("typesystem", "Type" /*constrain type to namespace*/))),
            //         // //             "tail": prop(component(typeRef("Type Selection Tail", {
            //         // //                 "namespace": aResolvedValue(valSel("namespace"))
            //         // //             })),
            //         // //         }),
            //         // //         optionalResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_group("tail", s_component())), valSel("namespace"))),
            //         // //     globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_optional()))
            //         // // ),
            
            //         "Source File": globalTypeDefinition(
            //             group({
            //                 "type": prop(component(typeRef("Type Selection"), {})),
            //                 "initialization": prop(component(typeRef("Initialization", true), {})),
            //             })
            //         ),
            //         "Root": globalTypeDefinition(
            //             component(typeRef("Source File"), {})
            //         )
            //     },
            //     {
            //         "Aggregated Variable": globalTypeResolverDeclaration({}),
            //         "Aggregated Variables": globalTypeResolverDeclaration({}),
            //         "Assign": globalTypeResolverDeclaration({}),
            //         "Block": globalTypeResolverDeclaration({}),
            //         "Boolean Initialization Or Selection": globalTypeResolverDeclaration({}),
            //         "Boolean Initialization": globalTypeResolverDeclaration({}),
            //         "Function Call": globalTypeResolverDeclaration({}),
            //         "Generic Initialization": globalTypeResolverDeclaration({}),
            //         "Initialization": globalTypeResolverDeclaration({}),
            //         "Local Variables": globalTypeResolverDeclaration({}),
            //         "Numerical Initialization Or Selection": globalTypeResolverDeclaration({}),
            //         "Numerical Initialization": globalTypeResolverDeclaration({}),
            //         "Root": globalTypeResolverDeclaration({}),
            //         "Source File": globalTypeResolverDeclaration({}),
            //         "Source Selection Tail": globalTypeResolverDeclaration({}),
            //         "Source Selection": globalTypeResolverDeclaration({}),
            //         "Statements": globalTypeResolverDeclaration({}),
            //         "String Initialization Or Selection": globalTypeResolverDeclaration({}),
            //         "String Initialization": globalTypeResolverDeclaration({}),
            //         "Target Selection Tail": globalTypeResolverDeclaration({}),
            //         "Target Selection": globalTypeResolverDeclaration({}),
            //         "Type Arguments": globalTypeResolverDeclaration({}),
            //         "Type Selection": globalTypeResolverDeclaration({}),
            //         "Variables": globalTypeResolverDeclaration({}),
            //     },
            // )
            
        })
    }
}