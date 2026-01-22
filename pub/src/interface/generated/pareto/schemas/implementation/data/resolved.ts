
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../../core/location"

import * as i__imports_interface from "../../interface/data/resolved"

export namespace Type_Reference_ {
    
    export type _import = string
    
    export type _type = string
    
}

export type Type_Reference_ = {
    readonly 'import': Type_Reference_._import
    readonly 'type': Type_Reference_._type
}

export namespace Module_ {
    
    export namespace _type {
        
        export type serializer = null
        
        export type deserializer = null
        
        export type transformer = null
        
        export type refiner = null
        
    }
    
    export type _type = 
        | readonly ['serializer', _type.serializer]
        | readonly ['deserializer', _type.deserializer]
        | readonly ['transformer', _type.transformer]
        | readonly ['refiner', _type.refiner]
    
    export type type_imports = i__imports_interface.Imports
    
    export namespace variable_imports {
        
        export namespace D {
            
            export namespace tail {
                
                export type L = string
                
            }
            
            export type tail = _pi.List<tail.L>
            
            export namespace _type {
                
                export namespace ancestor {
                    
                    export type dependency = string
                    
                    export type number_of_steps = number
                    
                }
                
                export type ancestor = {
                    readonly 'dependency': ancestor.dependency
                    readonly 'number of steps': ancestor.number_of_steps
                }
                
                export type external = string
                
                export type sibling = string
                
            }
            
            export type _type = 
                | readonly ['ancestor', _type.ancestor]
                | readonly ['external', _type.external]
                | readonly ['sibling', _type.sibling]
            
        }
        
        export type D = {
            readonly 'tail': D.tail
            readonly 'type': D._type
        }
        
    }
    
    export type variable_imports = _pi.Dictionary<variable_imports.D>
    
    export namespace algorithms {
        
        export namespace D {
            
            export type _type = Type_Reference_
            
            export type expression = Expression_
            
            export type temp_has_error = boolean
            
            export type temp_has_lookups = boolean
            
            export type temp_has_parameters = boolean
            
        }
        
        export type D = {
            readonly 'type': D._type
            readonly 'expression': D.expression
            readonly 'temp has error': D.temp_has_error
            readonly 'temp has lookups': D.temp_has_lookups
            readonly 'temp has parameters': D.temp_has_parameters
        }
        
    }
    
    export type algorithms = _pi.Dictionary<algorithms.D>
    
}

export type Module_ = {
    readonly 'type': Module_._type
    readonly 'type imports': Module_.type_imports
    readonly 'variable imports': Module_.variable_imports
    readonly 'algorithms': Module_.algorithms
}

export namespace Module_Set_ {
    
    export namespace D {
        
        export type _module = Module_
        
        export type _set = Module_Set_
        
    }
    
    export type D = 
        | readonly ['module', D._module]
        | readonly ['set', D._set]
    
}

export type Module_Set_ = _pi.Dictionary<Module_Set_.D>

export namespace Type_Node_Reference_ {
    
    export type _type = Type_Reference_
    
    export namespace sub_selection {
        
        export namespace L {
            
            export type dictionary = null
            
            export type group = string
            
            export type list = null
            
            export type optional = null
            
            export type state_group = string
            
        }
        
        export type L = 
            | readonly ['dictionary', L.dictionary]
            | readonly ['group', L.group]
            | readonly ['list', L.list]
            | readonly ['optional', L.optional]
            | readonly ['state group', L.state_group]
        
    }
    
    export type sub_selection = _pi.List<sub_selection.L>
    
}

export type Type_Node_Reference_ = {
    readonly 'type': Type_Node_Reference_._type
    readonly 'sub selection': Type_Node_Reference_.sub_selection
}

export namespace Expression_ {
    
    export namespace special {
        
        export type abort = Expression_
        
        export namespace block {
            
            export namespace variables {
                
                export namespace D {
                    
                    export namespace _type {
                        
                        export type O = Type_Node_Reference_
                        
                    }
                    
                    export type _type = _pi.Optional_Value<_type.O>
                    
                    export type expression = Expression_
                    
                }
                
                export type D = {
                    readonly 'type': D._type
                    readonly 'expression': D.expression
                }
                
            }
            
            export type variables = _pi.Dictionary<variables.D>
            
            export namespace temp_ordered_variables {
                
                export namespace L {
                    
                    export type name = string
                    
                    export namespace _type {
                        
                        export type O = Type_Node_Reference_
                        
                    }
                    
                    export type _type = _pi.Optional_Value<_type.O>
                    
                    export type expression = Expression_
                    
                }
                
                export type L = {
                    readonly 'name': L.name
                    readonly 'type': L._type
                    readonly 'expression': L.expression
                }
                
            }
            
            export type temp_ordered_variables = _pi.List<temp_ordered_variables.L>
            
            export type expression = Expression_
            
        }
        
        export type block = {
            readonly 'variables': block.variables
            readonly 'temp ordered variables': block.temp_ordered_variables
            readonly 'expression': block.expression
        }
        
        export namespace change_context {
            
            export type new_context = Selection_
            
            export type expression = Expression_
            
        }
        
        export type change_context = {
            readonly 'new context': change_context.new_context
            readonly 'expression': change_context.expression
        }
        
        export type implement_me = null
        
        export type selection_deprecated = Selection_
        
        export type unreachable = null
        
        export namespace deprecated_function {
            
            export type expression = Expression_
            
            export type temp_has_parameters = boolean
            
            export namespace temp_resulting_node {
                
                export type O = Type_Node_Reference_
                
            }
            
            export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
            
        }
        
        export type deprecated_function = {
            readonly 'expression': deprecated_function.expression
            readonly 'temp has parameters': deprecated_function.temp_has_parameters
            readonly 'temp resulting node': deprecated_function.temp_resulting_node
        }
        
    }
    
    export type special = 
        | readonly ['abort', special.abort]
        | readonly ['block', special.block]
        | readonly ['change context', special.change_context]
        | readonly ['implement me', special.implement_me]
        | readonly ['selection deprecated', special.selection_deprecated]
        | readonly ['unreachable', special.unreachable]
        | readonly ['deprecated function', special.deprecated_function]
    
    export namespace initialize {
        
        export namespace _boolean {
            
            export namespace literal {
                
                export type _false = null
                
                export type _true = null
                
            }
            
            export type literal = 
                | readonly ['false', literal._false]
                | readonly ['true', literal._true]
            
            export type not = Selection_
            
        }
        
        export type _boolean = 
            | readonly ['literal', _boolean.literal]
            | readonly ['not', _boolean.not]
        
        export namespace component {
            
            export namespace call {
                
                export type source = Selection_
                
                export type context = Expression_
                
                export namespace _arguments {
                    
                    export namespace O {
                        
                        export type D = Expression_
                        
                    }
                    
                    export type O = _pi.Dictionary<O.D>
                    
                }
                
                export type _arguments = _pi.Optional_Value<_arguments.O>
                
                export type abort = boolean
                
            }
            
            export type call = {
                readonly 'source': call.source
                readonly 'context': call.context
                readonly 'arguments': call._arguments
                readonly 'abort': call.abort
            }
            
        }
        
        export type component = 
            | readonly ['call', component.call]
        
        export namespace dictionary {
            
            export namespace literal {
                
                export type D = Expression_
                
            }
            
            export type literal = _pi.Dictionary<literal.D>
            
            export namespace map {
                
                export type source = Selection_
                
                export type entry_handler = Expression_
                
            }
            
            export type map = {
                readonly 'source': map.source
                readonly 'entry handler': map.entry_handler
            }
            
        }
        
        export type dictionary = 
            | readonly ['literal', dictionary.literal]
            | readonly ['map', dictionary.map]
        
        export namespace group {
            
            export type D = Expression_
            
        }
        
        export type group = _pi.Dictionary<group.D>
        
        export namespace list {
            
            export namespace literal {
                
                export type L = Expression_
                
            }
            
            export type literal = _pi.List<literal.L>
            
            export namespace map {
                
                export type source = Selection_
                
                export type element_handler = Expression_
                
            }
            
            export type map = {
                readonly 'source': map.source
                readonly 'element handler': map.element_handler
            }
            
        }
        
        export type list = 
            | readonly ['literal', list.literal]
            | readonly ['map', list.map]
        
        export type nothing = null
        
        export namespace _number {
            
            export namespace approximation {
                
                export type literal = number
                
            }
            
            export type approximation = 
                | readonly ['literal', approximation.literal]
            
            export namespace integer {
                
                export type literal = number
                
            }
            
            export type integer = 
                | readonly ['literal', integer.literal]
            
            export namespace natural {
                
                export type literal = number
                
            }
            
            export type natural = 
                | readonly ['literal', natural.literal]
            
        }
        
        export type _number = 
            | readonly ['approximation', _number.approximation]
            | readonly ['integer', _number.integer]
            | readonly ['natural', _number.natural]
        
        export namespace optional {
            
            export namespace literal {
                
                export type not_set = null
                
                export type _set = Expression_
                
            }
            
            export type literal = 
                | readonly ['not set', literal.not_set]
                | readonly ['set', literal._set]
            
            export namespace map {
                
                export type source = Selection_
                
                export type set_handler = Expression_
                
            }
            
            export type map = {
                readonly 'source': map.source
                readonly 'set handler': map.set_handler
            }
            
        }
        
        export type optional = 
            | readonly ['literal', optional.literal]
            | readonly ['map', optional.map]
        
        export namespace state_group {
            
            export namespace literal {
                
                export type state = string
                
                export type value = Expression_
                
            }
            
            export type literal = {
                readonly 'state': literal.state
                readonly 'value': literal.value
            }
            
        }
        
        export type state_group = 
            | readonly ['literal', state_group.literal]
        
        export namespace text {
            
            export namespace literal {
                
                export namespace delimiter {
                    
                    export type backtick = null
                    
                    export type quote = null
                    
                }
                
                export type delimiter = 
                    | readonly ['backtick', delimiter.backtick]
                    | readonly ['quote', delimiter.quote]
                
                export type value = string
                
            }
            
            export type literal = {
                readonly 'delimiter': literal.delimiter
                readonly 'value': literal.value
            }
            
        }
        
        export type text = 
            | readonly ['literal', text.literal]
        
    }
    
    export type initialize = 
        | readonly ['boolean', initialize._boolean]
        | readonly ['component', initialize.component]
        | readonly ['dictionary', initialize.dictionary]
        | readonly ['group', initialize.group]
        | readonly ['list', initialize.list]
        | readonly ['nothing', initialize.nothing]
        | readonly ['number', initialize._number]
        | readonly ['optional', initialize.optional]
        | readonly ['state group', initialize.state_group]
        | readonly ['text', initialize.text]
    
    export namespace decide {
        
        export namespace _type {
            
            export namespace _boolean {
                
                export type source = Selection_
                
                export namespace temp_resulting_node {
                    
                    export type O = Type_Node_Reference_
                    
                }
                
                export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                
                export type if_false = Expression_
                
                export type if_true = Expression_
                
            }
            
            export type _boolean = {
                readonly 'source': _boolean.source
                readonly 'temp resulting node': _boolean.temp_resulting_node
                readonly 'if false': _boolean.if_false
                readonly 'if true': _boolean.if_true
            }
            
            export namespace optional {
                
                export type source = Selection_
                
                export namespace temp_resulting_node {
                    
                    export type O = Type_Node_Reference_
                    
                }
                
                export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                
                export type if_not_set = Expression_
                
                export type if_set = Expression_
                
            }
            
            export type optional = {
                readonly 'source': optional.source
                readonly 'temp resulting node': optional.temp_resulting_node
                readonly 'if not set': optional.if_not_set
                readonly 'if set': optional.if_set
            }
            
            export namespace state_group {
                
                export type source = Selection_
                
                export namespace temp_resulting_node {
                    
                    export type O = Type_Node_Reference_
                    
                }
                
                export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                
                export namespace _type {
                    
                    export namespace partial {
                        
                        export namespace cases {
                            
                            export type D = Expression_
                            
                        }
                        
                        export type cases = _pi.Dictionary<cases.D>
                        
                        export type _default = Expression_
                        
                    }
                    
                    export type partial = {
                        readonly 'cases': partial.cases
                        readonly 'default': partial._default
                    }
                    
                    export namespace full {
                        
                        export namespace cases {
                            
                            export type D = Expression_
                            
                        }
                        
                        export type cases = _pi.Dictionary<cases.D>
                        
                    }
                    
                    export type full = {
                        readonly 'cases': full.cases
                    }
                    
                }
                
                export type _type = 
                    | readonly ['partial', _type.partial]
                    | readonly ['full', _type.full]
                
            }
            
            export type state_group = {
                readonly 'source': state_group.source
                readonly 'temp resulting node': state_group.temp_resulting_node
                readonly 'type': state_group._type
            }
            
        }
        
        export type _type = 
            | readonly ['boolean', _type._boolean]
            | readonly ['optional', _type.optional]
            | readonly ['state group', _type.state_group]
        
    }
    
    export type decide = {
        readonly 'type': decide._type
    }
    
}

export type Expression_ = 
    | readonly ['special', Expression_.special]
    | readonly ['initialize', Expression_.initialize]
    | readonly ['decide', Expression_.decide]

export namespace Selection_ {
    
    export namespace start {
        
        export type implement_me = null
        
        export type abort_deprecated = null
        
        export namespace call {
            
            export type source = Selection_
            
            export type context = Selection_
            
            export namespace _arguments {
                
                export namespace O {
                    
                    export type D = Expression_
                    
                }
                
                export type O = _pi.Dictionary<O.D>
                
            }
            
            export type _arguments = _pi.Optional_Value<_arguments.O>
            
        }
        
        export type call = {
            readonly 'source': call.source
            readonly 'context': call.context
            readonly 'arguments': call._arguments
        }
        
        export type argument = string
        
        export type context = null
        
        export type variable = string
        
        export type parameter = string
        
        export namespace imported_variable {
            
            export type _import = string
            
            export type variable = string
            
        }
        
        export type imported_variable = {
            readonly 'import': imported_variable._import
            readonly 'variable': imported_variable.variable
        }
        
    }
    
    export type start = 
        | readonly ['implement me', start.implement_me]
        | readonly ['abort deprecated', start.abort_deprecated]
        | readonly ['call', start.call]
        | readonly ['argument', start.argument]
        | readonly ['context', start.context]
        | readonly ['variable', start.variable]
        | readonly ['parameter', start.parameter]
        | readonly ['imported variable', start.imported_variable]
    
    export namespace tail {
        
        export type L = string
        
    }
    
    export type tail = _pi.List<tail.L>
    
}

export type Selection_ = {
    readonly 'start': Selection_.start
    readonly 'tail': Selection_.tail
}

export { 
    Type_Reference_ as Type_Reference, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_Node_Reference_ as Type_Node_Reference, 
    Expression_ as Expression, 
    Selection_ as Selection, 
}
