import * as p_ from 'pareto-core/schema'

// types

namespace Value_Selection_Tail_ {
    
    export type L = string
}

type Value_Selection_Tail_ = p_.List<
    Value_Selection_Tail_.L
>

namespace Select_Value_ {
    
    export namespace call {
        
        export namespace scope {
            
            export namespace external {
                
                export type refiner = string
                
                export type function_ = string
            }
            
            export type external = {
                readonly 'refiner': external.refiner
                readonly 'function': external.function_
            }
            
            export namespace local {
                
                export type function_ = string
            }
            
            export type local = {
                readonly 'function': local.function_
            }
        }
        
        export type scope = 
            | readonly ['external', scope.external]
            | readonly ['local', scope.local]
        
        export type context = Select_Value_
        
        export namespace error {
            
            export type omit = null
            
            export type pass_through = null
            
            export namespace handle {
                
                export type expression = Expression_
            }
            
            export type handle = {
                readonly 'expression': handle.expression
            }
        }
        
        export type error = 
            | readonly ['omit', error.omit]
            | readonly ['pass through', error.pass_through]
            | readonly ['handle', error.handle]
        
        export namespace arguments_ {
            
            export type omit = null
            
            export type pass_through = null
            
            export namespace initialize {
                
                export type expression = Expression_
            }
            
            export type initialize = {
                readonly 'expression': initialize.expression
            }
        }
        
        export type arguments_ = 
            | readonly ['omit', arguments_.omit]
            | readonly ['pass through', arguments_.pass_through]
            | readonly ['initialize', arguments_.initialize]
        
        export type tail = Value_Selection_Tail_
    }
    
    export type call = {
        readonly 'scope': call.scope
        readonly 'context': call.context
        readonly 'error': call.error
        readonly 'arguments': call.arguments_
        readonly 'tail': call.tail
    }
    
    export namespace context_value {
        
        export type tail = Value_Selection_Tail_
    }
    
    export type context_value = {
        readonly 'tail': context_value.tail
    }
}

type Select_Value_ = 
    | readonly ['call', Select_Value_.call]
    | readonly ['context value', Select_Value_.context_value]

namespace Value_Reference_ {
    
    export type type_ = string
    
    export namespace subselection {
        
        export namespace L {
            
            export type dictionary = null
            
            export namespace group {
                
                export type property = string
            }
            
            export type group = {
                readonly 'property': group.property
            }
            
            export type list = null
            
            export type optional = null
            
            export namespace state {
                
                export type option = string
            }
            
            export type state = {
                readonly 'option': state.option
            }
        }
        
        export type L = 
            | readonly ['dictionary', L.dictionary]
            | readonly ['group', L.group]
            | readonly ['list', L.list]
            | readonly ['optional', L.optional]
            | readonly ['state', L.state]
    }
    
    export type subselection = p_.List<
        subselection.L
    >
}

type Value_Reference_ = {
    readonly 'type': Value_Reference_.type_
    readonly 'subselection': Value_Reference_.subselection
}

namespace Expression_ {
    
    export type abort = Expression_
    
    export namespace change_context {
        
        export type select = Select_Value_
        
        export type callback = Expression_
    }
    
    export type change_context = {
        readonly 'select': change_context.select
        readonly 'callback': change_context.callback
    }
    
    export namespace convert {
        
        export type select = Select_Value_
        
        export namespace type_ {
            
            export namespace component {
                
                export namespace transform {
                    
                    export namespace scope {
                        
                        export namespace external {
                            
                            export type refiner = string
                            
                            export type function_ = string
                        }
                        
                        export type external = {
                            readonly 'refiner': external.refiner
                            readonly 'function': external.function_
                        }
                        
                        export namespace local {
                            
                            export type function_ = string
                        }
                        
                        export type local = {
                            readonly 'function': local.function_
                        }
                    }
                    
                    export type scope = 
                        | readonly ['external', scope.external]
                        | readonly ['local', scope.local]
                    
                    export namespace error {
                        
                        export type omit = null
                        
                        export type pass_through = null
                        
                        export type handle = Expression_
                    }
                    
                    export type error = 
                        | readonly ['omit', error.omit]
                        | readonly ['pass through', error.pass_through]
                        | readonly ['handle', error.handle]
                    
                    export namespace arguments_ {
                        
                        export type omit = null
                        
                        export type pass_through = null
                        
                        export type initialize = Expression_
                    }
                    
                    export type arguments_ = 
                        | readonly ['omit', arguments_.omit]
                        | readonly ['pass through', arguments_.pass_through]
                        | readonly ['initialize', arguments_.initialize]
                }
                
                export type transform = {
                    readonly 'scope': transform.scope
                    readonly 'error': transform.error
                    readonly 'arguments': transform.arguments_
                }
            }
            
            export type component = 
                | readonly ['transform', component.transform]
            
            export namespace dictionary {
                
                export namespace map {
                    
                    export type on_entry = Expression_
                }
                
                export type map = {
                    readonly 'on entry': map.on_entry
                }
            }
            
            export type dictionary = 
                | readonly ['map', dictionary.map]
            
            export namespace list {
                
                export namespace map {
                    
                    export type on_item = Expression_
                }
                
                export type map = {
                    readonly 'on item': map.on_item
                }
            }
            
            export type list = 
                | readonly ['map', list.map]
            
            export namespace optional {
                
                export namespace decide {
                    
                    export namespace temp_return_type {
                        
                        export type O = Value_Reference_
                    }
                    
                    export type temp_return_type = p_.Optional_Value<
                        temp_return_type.O
                    >
                    
                    export type on_set = Expression_
                    
                    export type on_not_set = Expression_
                }
                
                export type decide = {
                    readonly 'temp return type': decide.temp_return_type
                    readonly 'on set': decide.on_set
                    readonly 'on not set': decide.on_not_set
                }
                
                export namespace map {
                    
                    export type on_set = Expression_
                }
                
                export type map = {
                    readonly 'on set': map.on_set
                }
            }
            
            export type optional = 
                | readonly ['decide', optional.decide]
                | readonly ['map', optional.map]
            
            export namespace state {
                
                export namespace decide {
                    
                    export namespace temp_return_type {
                        
                        export type O = Value_Reference_
                    }
                    
                    export type temp_return_type = p_.Optional_Value<
                        temp_return_type.O
                    >
                    
                    export namespace options {
                        
                        export type D = Expression_
                    }
                    
                    export type options = p_.Dictionary<
                        options.D
                    >
                }
                
                export type decide = {
                    readonly 'temp return type': decide.temp_return_type
                    readonly 'options': decide.options
                }
            }
            
            export type state = 
                | readonly ['decide', state.decide]
            
            export namespace text {
                
                export namespace decide {
                    
                    export namespace temp_return_type {
                        
                        export type O = Value_Reference_
                    }
                    
                    export type temp_return_type = p_.Optional_Value<
                        temp_return_type.O
                    >
                    
                    export namespace matches {
                        
                        export type D = Expression_
                    }
                    
                    export type matches = p_.Dictionary<
                        matches.D
                    >
                    
                    export type no_match = Expression_
                }
                
                export type decide = {
                    readonly 'temp return type': decide.temp_return_type
                    readonly 'matches': decide.matches
                    readonly 'no match': decide.no_match
                }
            }
            
            export type text = 
                | readonly ['decide', text.decide]
        }
        
        export type type_ = 
            | readonly ['component', type_.component]
            | readonly ['dictionary', type_.dictionary]
            | readonly ['list', type_.list]
            | readonly ['optional', type_.optional]
            | readonly ['state', type_.state]
            | readonly ['text', type_.text]
    }
    
    export type convert = {
        readonly 'select': convert.select
        readonly 'type': convert.type_
    }
    
    export namespace implement_me {
        
        export type remark = string
    }
    
    export type implement_me = {
        readonly 'remark': implement_me.remark
    }
    
    export namespace initialize {
        
        export namespace boolean_ {
            
            export type false_ = null
            
            export type true_ = null
        }
        
        export type boolean_ = 
            | readonly ['false', boolean_.false_]
            | readonly ['true', boolean_.true_]
        
        export namespace dictionary {
            
            export type D = Expression_
        }
        
        export type dictionary = p_.Dictionary<
            dictionary.D
        >
        
        export namespace group {
            
            export type D = Expression_
        }
        
        export type group = p_.Dictionary<
            group.D
        >
        
        export namespace list {
            
            export type L = Expression_
        }
        
        export type list = p_.List<
            list.L
        >
        
        export type nothing = null
        
        export namespace number_ {
            
            export type natural = number
            
            export type integer = number
        }
        
        export type number_ = 
            | readonly ['natural', number_.natural]
            | readonly ['integer', number_.integer]
        
        export namespace optional {
            
            export type not_set = null
            
            export type set_ = Expression_
        }
        
        export type optional = 
            | readonly ['not set', optional.not_set]
            | readonly ['set', optional.set_]
        
        export type reference = string
        
        export namespace state {
            
            export type option = string
            
            export type data = Expression_
        }
        
        export type state = {
            readonly 'option': state.option
            readonly 'data': state.data
        }
        
        export type text = string
    }
    
    export type initialize = 
        | readonly ['boolean', initialize.boolean_]
        | readonly ['dictionary', initialize.dictionary]
        | readonly ['group', initialize.group]
        | readonly ['list', initialize.list]
        | readonly ['nothing', initialize.nothing]
        | readonly ['number', initialize.number_]
        | readonly ['optional', initialize.optional]
        | readonly ['reference', initialize.reference]
        | readonly ['state', initialize.state]
        | readonly ['text', initialize.text]
    
    export type select = Select_Value_
}

type Expression_ = 
    | readonly ['abort', Expression_.abort]
    | readonly ['change context', Expression_.change_context]
    | readonly ['convert', Expression_.convert]
    | readonly ['implement me', Expression_.implement_me]
    | readonly ['initialize', Expression_.initialize]
    | readonly ['select', Expression_.select]

namespace Schema_Reference_ {
    
    export type sibling = string
    
    export namespace external {
        
        export type package_ = string
        
        export type module_ = string
        
        export type schema = string
    }
    
    export type external = {
        readonly 'package': external.package_
        readonly 'module': external.module_
        readonly 'schema': external.schema
    }
}

type Schema_Reference_ = 
    | readonly ['sibling', Schema_Reference_.sibling]
    | readonly ['external', Schema_Reference_.external]

namespace Type_Reference_ {
    
    export type type_ = string
}

type Type_Reference_ = {
    readonly 'type': Type_Reference_.type_
}

namespace Root_ {
    
    export type development_mode = boolean
    
    export type source_schema = Schema_Reference_
    
    export namespace error_schema {
        
        export type O = Schema_Reference_
    }
    
    export type error_schema = p_.Optional_Value<
        error_schema.O
    >
    
    export namespace parameters_schema {
        
        export type O = Schema_Reference_
    }
    
    export type parameters_schema = p_.Optional_Value<
        parameters_schema.O
    >
    
    export namespace dependencies {
        
        export namespace deserializers {
            
            export namespace D {
                
                export type this_schema = null
                
                export namespace cousin {
                    
                    export type schema = string
                }
                
                export type cousin = {
                    readonly 'schema': cousin.schema
                }
                
                export namespace external {
                    
                    export type package_ = string
                    
                    export type module_ = string
                    
                    export type schema = string
                }
                
                export type external = {
                    readonly 'package': external.package_
                    readonly 'module': external.module_
                    readonly 'schema': external.schema
                }
            }
            
            export type D = 
                | readonly ['this schema', D.this_schema]
                | readonly ['cousin', D.cousin]
                | readonly ['external', D.external]
        }
        
        export type deserializers = p_.Dictionary<
            deserializers.D
        >
        
        export namespace refiners {
            
            export namespace D {
                
                export namespace sibling {
                    
                    export type refiner = string
                }
                
                export type sibling = {
                    readonly 'refiner': sibling.refiner
                }
                
                export namespace cousin {
                    
                    export type schema = string
                    
                    export type refiner = string
                }
                
                export type cousin = {
                    readonly 'schema': cousin.schema
                    readonly 'refiner': cousin.refiner
                }
                
                export namespace external {
                    
                    export type package_ = string
                    
                    export type module_ = string
                    
                    export type schema = string
                    
                    export type refiner = string
                }
                
                export type external = {
                    readonly 'package': external.package_
                    readonly 'module': external.module_
                    readonly 'schema': external.schema
                    readonly 'refiner': external.refiner
                }
            }
            
            export type D = 
                | readonly ['sibling', D.sibling]
                | readonly ['cousin', D.cousin]
                | readonly ['external', D.external]
        }
        
        export type refiners = p_.Dictionary<
            refiners.D
        >
    }
    
    export type dependencies = {
        readonly 'deserializers': dependencies.deserializers
        readonly 'refiners': dependencies.refiners
    }
    
    export namespace declarations {
        
        export namespace D {
            
            export namespace source {
                
                export type value = Value_Reference_
                
                export type iterator = Value_Reference_
            }
            
            export type source = 
                | readonly ['value', source.value]
                | readonly ['iterator', source.iterator]
            
            export namespace error {
                
                export type O = Type_Reference_
            }
            
            export type error = p_.Optional_Value<
                error.O
            >
            
            export namespace parameters {
                
                export type O = Type_Reference_
            }
            
            export type parameters = p_.Optional_Value<
                parameters.O
            >
        }
        
        export type D = {
            readonly 'source': D.source
            readonly 'error': D.error
            readonly 'parameters': D.parameters
        }
    }
    
    export type declarations = p_.Dictionary<
        declarations.D
    >
    
    export namespace implementations {
        
        export namespace D {
            
            export type temp_has_error = boolean
            
            export type temp_has_parameters = boolean
            
            export type expression = Expression_
        }
        
        export type D = {
            readonly 'temp has error': D.temp_has_error
            readonly 'temp has parameters': D.temp_has_parameters
            readonly 'expression': D.expression
        }
    }
    
    export type implementations = p_.Dictionary<
        implementations.D
    >
}

type Root_ = {
    readonly 'development mode': Root_.development_mode
    readonly 'source schema': Root_.source_schema
    readonly 'error schema': Root_.error_schema
    readonly 'parameters schema': Root_.parameters_schema
    readonly 'dependencies': Root_.dependencies
    readonly 'declarations': Root_.declarations
    readonly 'implementations': Root_.implementations
}

// exported root types
export { 
    type Value_Selection_Tail_ as Value_Selection_Tail, 
    type Select_Value_ as Select_Value, 
    type Value_Reference_ as Value_Reference, 
    type Expression_ as Expression, 
    type Schema_Reference_ as Schema_Reference, 
    type Type_Reference_ as Type_Reference, 
    type Root_ as Root, 
}
