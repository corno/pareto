import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

/**
 * these are shorthand function for the project related settings that help to build the right data.
 */
import {
    tempSubmodule,
    submodule,
    this_,
    pub,
    sibling,
    external,
    main,
    data as pdata, //need to redefine because it clashes with the glossary shorthand
    aSideEffect,
    sSideEffect,
    procedure as pprocedure, //need to redefine because it clashes with the glossary shorthand
    sfunction as psfunction, //need to redefine because it clashes with the glossary shorthand
    afunction as pafunction, //need to redefine because it clashes with the glossary shorthand
    constructor as pconstructor, //need to redefine because it clashes with the glossary shorthand
    resource as presource, //need to redefine because it clashes with the glossary shorthand
    dependent,
    algorithm,
} from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import {
    type,

    null_, //there is a trailing underscore to avoid a clash with the typescript keyword null
    boolean,
    string,
    number,
    dictionary,
    computed,
    array,
    optional,
    group,
    member,
    taggedUnion,

    parametrizedType,
    ns,
    typeParameter,
    glossaryParameter,
    ref,
    externalTypeReference,
    typeReference,
    sExternalInterfaceReference,
    sInterfaceReference,
    aExternalInterfaceReference,
    aInterfaceReference,
    data,
    sInf,
    aInterface,
    sInterface,
    constructor,
    resource,
    afunction,
    procedure,
    scallbackfunction,
    scallback,
    sfunction,
    sInterfaceMethod,
    aInterfaceMethod,
    infref,
    choice,
    streamconsumer,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

/**
 * general remarks
 * 
 * - mind the convention of quotes vs apostrophes. Apostrophes are for strings determined by the environment/schema, like 'author'.
 *   quotes are used for free to choose values, like "Corno"
 * 
 * - you will see/use d({}) a lot, this wraps an object and produces a pareto dictionary
 * 
 * - you will see this pattern a lot: [ 'a string', any ]. This is a tagged union.
 *   the string determines the selected option and the following entry contains the specific data for that option.
 *   see example below: [ 'library', { ... }]. In that specific case there are 3 options; 'library', 'resource' and 'glossary'
 */

export const $: mproject.T.Project<pd.SourceLocation> = {
    /**
     * the following 3 are used for the package.json for publishing.
     * the name of the package will be determined by the directory name
     */
    'author': "TBD",
    'description': "TBD",
    'license': "TBD",

    /**
     * dependecies are included in the package.json. they can be referenced further down this file
     */
    'dependencies': d({
        //version specification is not possible, so 'null' suffices
        "glo-pareto-common": null, //this glossary package contains common types
        "res-pareto-main": null, //this resource package contains the main function signature, we're going to use it further down
        //this file
    }),
    /**
     * there are 3 types:
     * - library
     * - glossary
     * - resource
     * this example is for a library
     */
    'type': ['library', {
        /**
         * this ('main') is a module. modules contain a 'definition' and an 'implementation'
         */
        'main': {
            /**
             * a module definition contains a glossary and an api
             */
            'definition': {
                /**
                 * a glossary defines the 'plain old data' types (in 'root/root') and the algorithmics (in 'root/asynchronous')
                 */
                'glossary': {
                    'root': {
                        /**
                         * glossary parameters are type parameters that are applied to every data type, interface and algorithm in this glossary.
                         */
                        'glossary parameters': d({
                            "a_glossary_parameter": null //spaces are not allowed :( FIXME allow spaces
                        }),
                        'imports': d({
                            /**
                             * this import is a statement that a "common" glossary has to be provided.
                             * It is provided right after the 'root' entry in which we are now, in 'imports'
                             */
                            "common": null
                        }),
                        'root': {
                            /**
                             * the root itself is a namespace, a namespace can contain namespaces and types
                             */
                            'namespaces': d({
                                "a namespace": ns(
                                    {
                                        "a type": type(string()),
                                    },
                                    {
                                        "a nested namespace": ns(
                                            {
                                            },
                                            {
                                            }

                                        )
                                    }
                                )
                            }),
                            'types': d({
                                "a type": type(number()), //every type should be wrapped in type()
                                "a type containing all flavors": type(group({
                                    "a boolean": member(boolean()),
                                    "a number": member(number()),
                                    "a string": member(string()),
                                    "a null": member(null_()),
                                    "an optional value": member(optional(string())), //the value is possilby set, possibly not
                                    "a computed value": member(computed(string())), //a computed value will have to be called to retrieve the value
                                    "an array of strings": member(array(string())),
                                    "a dictionary of strings": member(dictionary(string())),
                                    "a group": member(group({
                                        "a member": member(string()) //groups have members, they need to be wrapped in member()
                                    })),
                                    /**
                                     * a tagged union has multiple options of which one must be chosen. depending on the selected option, an additional value
                                     * has to be specified. in this case, option a requires a string, option b requires a number
                                     */
                                    "a tagged union": member(taggedUnion({
                                        "option a": string(),
                                        "option b": number(),
                                    })),
                                    /**
                                     * a reference to another specification of a data type.
                                     */
                                    "a reference": member(ref(glossaryParameter("a_glossary_parameter"))),
                                })),
                                "a parametrized type with all flavors of references": parametrizedType(
                                    {
                                        "a_type_parameter": null
                                    },
                                    group({
                                        /**
                                         * whenever a data type must be specified, there are these options:
                                         * - a type
                                         * - a glossary parameter
                                         * - a type parameter
                                         */
                                        "a reference to a type": member(ref(typeReference("a type"))),
                                        "a reference to an external type": member(ref(externalTypeReference("common", "Number"))),
                                        "a reference to a type parameter": member(ref(typeParameter("a_type_parameter"))),
                                        "a reference to a glossary parameter": member(ref(glossaryParameter("a_glossary_parameter"))),
                                    })
                                )
                            }),
                        },
                        'asynchronous': {
                            /**
                             * asynchronous interfaces allow to send data asynchronously.
                             * they are one way. It is not possible to retrieve data from them
                             */
                            'interfaces': d({
                                "an asynchronous interface": aInterface(aInterfaceMethod(null)),

                                /**
                                 * a stream consumer offers an interface with an onData method and a onEnd method
                                 */
                                "a stream consumer": aInterface(streamconsumer(
                                    aInterfaceMethod(typeReference("a type")), //the data method (to be called multiple times)
                                    aInterfaceMethod(null), //the end method (to be called only once)
                                )),
                                "an asynchronous method without data or result interface": aInterface(aInterfaceMethod(null)),
                                /**
                                 * when calling this interface method, the data has to be supplied
                                 */
                                "an asynchronous method with data": aInterface(aInterfaceMethod(typeReference("a type"), null)),
                                /**
                                 * a result interface is useful for chaining, you call an interface, and as a result you get a new interface that you can call.
                                 */
                                "an asynchronous method with result interface": aInterface(aInterfaceMethod(null, aInterfaceMethod(typeReference("a type"), null))),

                                "an asynchronous method with a type parameter": aInterface(aInterfaceMethod(null), {
                                    "a_type_parameter": null
                                }),

                                "a reference to another asynchronous interface": aInterface(infref(aInterfaceReference("a stream consumer"))),

                                "a reference to another interface with a type argument": aInterface(infref(aInterfaceReference("an asynchronous method with a type parameter", {
                                    "a_type_parameter": typeReference("a type")
                                }))),
                                /**
                                 * this is a choice interface with for each option a method. The caller should only call 1 of these methods and only once.
                                 */
                                "an interface choice": aInterface(choice({
                                    "a": aInterfaceMethod(null),
                                    "b": aInterfaceMethod(null),
                                })),
                            }),
                            'algorithms': d({
                                /**
                                 * an asynchronous function transforms an asynchonous value into another asynchronous value
                                 * an asynchronous value is similar to a typescript Promise
                                 */
                                "an asynchronous function": afunction(
                                    typeReference("a type"), //the resulting type
                                    typeReference("a type") //the input type
                                ),
                                "an asynchronous function with a type parameter": afunction(
                                    typeReference("a type"), //the resulting type
                                    typeParameter("a_type_parameter"), //the input type
                                    {
                                        "a_type_parameter": null
                                    }
                                ),
                                /**
                                 * a constructor produces an interface that can be called
                                 */
                                "a constructor": constructor(
                                    aInterfaceReference("an asynchronous interface"), //the interface that is constructed
                                    /**
                                     * downstream interfaces can be required by a constructor. the data that is sent to the constructed interface
                                     * is sent downstream after processing.
                                     * this way a pipeline can be built
                                     */
                                    {
                                        "a downstream interface": aInterfaceReference("an asynchronous interface"),
                                        "an external downstream interface": aExternalInterfaceReference("common", "Number"),
                                    }
                                ),
                                /**
                                 * a resource allows to retrieve data. It is used by calling its 'consume' method, providing data and an interface instance.
                                 * the resulting data will be provided by calling back the interface
                                 */
                                "a resource": resource(typeReference("a type"), aInterfaceReference("an asynchronous interface")),
                                "a resource with a type parameter": resource(typeReference("a type"), aInterfaceReference("an asynchronous interface"), {
                                    "a_type_parameter": null
                                })
                            }),
                        },
                        'synchronous': {
                            'interfaces': d({
                                "a synchronous interface": sInterface(sInterfaceMethod(typeReference("a type"))),
                                "an synchronous method": sInterface(sInterfaceMethod(typeReference("a type"))),
                                //TODO all possibilities
                            }),
                            'algorithms': d({
                                /**
                                 * a procedure does not have a return value.
                                 * the received data is processed and sent to the provided interface
                                 * the procedure can either accept 1 value provided during the call
                                 * or requiring a callback with an interface that allows to do more data providing calls
                                 */
                                "a procedure": procedure(
                                    data(typeReference("a type")), //this procedure accepts data
                                    sInterfaceReference("a synchronous interface")
                                ),
                                "a procedure accepting data": procedure(
                                    data(typeReference("a type")),
                                    sInterfaceReference("a synchronous interface")
                                ),
                                "a procedure accepting data with an external interface": procedure(
                                    data(typeReference("a type")),
                                    sExternalInterfaceReference("common", "Number")
                                ),
                                "a procedure providing an interface": procedure(
                                    sInf(sInterfaceReference("a synchronous interface")),
                                    sInterfaceReference("a synchronous interface")
                                ),
                                "a procedure with type parameters": procedure(
                                    data(typeReference("a type")),
                                    sInterfaceReference("a synchronous interface"),
                                    {
                                        "a_type_parameter": null
                                    }
                                ),

                                /**
                                 * functions do have return values
                                 */
                                "a synchronous function": sfunction(
                                    typeReference("a type"), //the return value, specified first
                                    data(typeReference("a type")), //the input data
                                ),
                                /**
                                 * this type of function requires a callback. This callback is called by the function with an interface
                                 * this interface can be used to build up the return data.
                                 */
                                "a synchronous function providing an interface": sfunction(
                                    typeReference("a type"), //the return value, specified first
                                    sInf(sInterfaceReference("a synchronous interface")),
                                ),

                                "a synchronous function with a type parameter": sfunction(
                                    typeReference("a type"),
                                    data(typeReference("a type")),
                                    {
                                        "a_type_parameter": null
                                    }
                                ),

                                /**
                                 * functions with callbacks provide a way to specify how to process intermediate data.
                                 * a good example of a known function that works like that is the map function on an array.
                                 * it has a callback that is called for every element
                                 */
                                "a function with a callback": scallbackfunction(
                                    typeReference("a type"), //the return value, specified first
                                    data(typeReference("a type")), //the input data,
                                    {
                                        "a callback": scallback(
                                            typeReference("a type"), //the return value, specified first
                                            typeReference("a type"), //the input data
                                        ),
                                        /**
                                         * a lookup allows to retrieve entries while processing data.
                                         * this is used for example in resolving dependencies in dictionaries,
                                         * say we want to process the input dictionary with entries 'a', 'b' and 'c'.
                                         * we map the input dictionary into the output dictionary, but while processing 'c' we need to link to the output entry 'a'.
                                         * with the lookup, we can do that, we don't have to provide a partially filled output dictionary, thus providing a pure functional style of programming
                                         */
                                        "a callback with a lookup": scallback(
                                            typeReference("a type"), //the return value, specified first
                                            typeReference("a type"), //the input data
                                            {
                                                "a lookup": typeReference("a type")
                                            }
                                        ),

                                    }
                                ),
                            }),
                        },
                    },
                    'imports': d({
                        /**
                         * the glossary indicated that it needs a "common" glossary. We provide it here
                         */
                        "common": external("glo-pareto-common"),
                    }),
                },
                'api': {
                    'imports': d({
                        "this_glossary": this_()
                    }),
                    'root': {
                        'algorithms': d({
                            "a_provided_algorithm": algorithm(
                                /**
                                 * which algorithm is provided?
                                 * a reference is given to a definition in a glossary.
                                 * In this case the 
                                 */
                                pprocedure(
                                    "this_glossary",
                                    { //type arguments
                                        "a_glossary_parameter": "string"
                                    },
                                    "a procedure"
                                ),
                            ),
                            "a_provided_algorithm_with_an_implementation_parameter": algorithm(
                                pprocedure("this_glossary", {}, "a procedure"),
                                { "an_implementation_parameter": "-not used?-" },

                            ),

                            "a_provided_algorithm_with_dependencies": algorithm(
                                pprocedure(
                                    "this_glossary",
                                    { "a_glossary_parameter": "string" },
                                    "a procedure"
                                ),
                                {

                                },
                                dependent(
                                    /**
                                     * the algorithm implementation should not contain any hardcoded data like string literals or number literals, no magic values
                                     * if the algorithm is dependent on it, it can be inserted in this way during the dependency injection phase of the initialization
                                     * this value may also be 'null' if no data needs to be provided
                                     */
                                    //pdata("this_glossary", { "a_glossary_parameter": "string" }, "a type"), //FIXME!
                                    null,
                                    /**
                                     * dependencies are specified here.
                                     * which algorithms does this algorithm need to work
                                     */
                                    {
                                        "a dependency on an algorithm": pprocedure("this_glossary", { "a_glossary_parameter": "string" }, "a procedure"),
                                    },
                                    /**
                                     * here the interfaces are specified that handle the side effects of the algorithm implementation
                                     */
                                    {
                                        //FIXME "asynchronous side effect": aSideEffect("this_glossary", { "a_glossary_parameter": "string" }, "an asynchronous interface"),
                                        //FIXME "synchronous side effect": sSideEffect("this_glossary", { "a_glossary_parameter": "string" }, "a synchronous interface"),
                                    }
                                )

                            ),

                            // "resolve2": algorithm(psfunction("resolve", {}, "Resolve"), { "Annotation": "Annotation" }),
                            // "serializeProject": algorithm(pprocedure("this", {}, "ProjectToDirectory"), { "Annotation": "Annotation" }, dependent(null, {
                            //     "createIdentifier": psfunction("ts", {}, "CreateIdentifier"),

                            //     "serializeGlossary": pprocedure("this", { "T": "GAnnotation" }, "SerializeGlossary"),
                            //     "serializeImplementation": pprocedure("this", { "T": "GAnnotation" }, "SerializeImplementation"),
                            //     "dictionaryForEach": pprocedure("foreach", {}, "DictionaryForEach"),
                            //     "enrichedDictionaryForEach": pprocedure("foreach", {}, "EnrichedDictionaryForEach"),

                            // }, {})),

                            "a_provided_procedure": algorithm(pprocedure("this_glossary", { "a_glossary_parameter": "string" }, "a procedure")),
                            "a_provided_synchronous_function": algorithm(psfunction("this_glossary", { "a_glossary_parameter": "string" }, "a synchronous function")),
                            "a_provided_asynchronous_function": algorithm(pafunction("this_glossary", { "a_glossary_parameter": "string" }, "an asynchronous function")),
                            "a_provided_constructor": algorithm(pconstructor("this_glossary", { "a_glossary_parameter": "string" }, "a constructor")),
                            "a_provided_resource": algorithm(presource("this_glossary", { "a_glossary_parameter": "string" }, "a resource")),
                        }),

                    },
                }
            },
            /**
             * for now, the only supported implementation is 'typescript'.
             * the typescript code will be scaffolded, you 'only' need to fill in the blanks.
             */
            'implementation': ['typescript', null],
        },
        'submodules': d({
        }),
        'bindings': [true, {
            'definition': {
                'glossary': {
                    'imports': d({
                        "main": external("res-pareto-main"),

                    }),
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
                                "an asynchronous binding interface": aInterface(aInterfaceMethod(null)),
                            }),
                            'algorithms': d({
                                "an asynchronous binding": constructor(aExternalInterfaceReference("main", "Main"), {}),
                            }),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                    },
                },
                'api': {
                    'imports': d({
                        "this_glossary": this_()
                    }),
                    'root': {
                        'algorithms': d({
                            "animplementedasynchronousbinding": algorithm(pconstructor("this_glossary", { }, "an asynchronous binding")),
                        }),
                    },
                },
            },
            'implementation': ['typescript', null]

        }],
        'executables': d({
            "an executable": {
                'constructor': "animplementedasynchronousbinding"
            },
        }),
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