
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../../generic/location"

import * as i__imports_interface from "../../interface/data/resolved"

export namespace Type_Reference_ {
    
    export type import_ = string
    
    export type type_ = string
    
}

export type Type_Reference_ = {
    readonly 'import': Type_Reference_.import_
    readonly 'type': Type_Reference_.type_
}

export namespace Module_ {
    
    export namespace type_ {
        
        export type serializer = null
        
        export type deserializer = null
        
        export type transformer = null
        
        export type refiner = null
        
    }
    
    export type type_ = 
        | readonly ['serializer', type_.serializer]
        | readonly ['deserializer', type_.deserializer]
        | readonly ['transformer', type_.transformer]
        | readonly ['refiner', type_.refiner]
    
    export type type_imports = i__imports_interface.Imports
    
    export namespace variable_imports {
        
        export namespace D {
            
            export namespace tail {
                
                export type L = string
                
            }
            
            export type tail = _pi.List<tail.L>
            
            export namespace type_ {
                
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
            
            export type type_ = 
                | readonly ['ancestor', type_.ancestor]
                | readonly ['external', type_.external]
                | readonly ['sibling', type_.sibling]
            
        }
        
        export type D = {
            readonly 'tail': D.tail
            readonly 'type': D.type_
        }
        
    }
    
    export type variable_imports = _pi.Dictionary<variable_imports.D>
    
    export namespace algorithms {
        
        export namespace D {
            
            export type type_ = Type_Reference_
            
            export type expression = Expression_
            
            export type temp_has_abort = boolean
            
            export type temp_has_lookups = boolean
            
            export type temp_has_parameters = boolean
            
        }
        
        export type D = {
            readonly 'type': D.type_
            readonly 'expression': D.expression
            readonly 'temp has abort': D.temp_has_abort
            readonly 'temp has lookups': D.temp_has_lookups
            readonly 'temp has parameters': D.temp_has_parameters
        }
        
    }
    
    export type algorithms = _pi.Dictionary<algorithms.D>
    
}

export type Module_ = {
    readonly 'type': Module_.type_
    readonly 'type imports': Module_.type_imports
    readonly 'variable imports': Module_.variable_imports
    readonly 'algorithms': Module_.algorithms
}

export namespace Module_Set_ {
    
    export namespace D {
        
        export type module_ = Module_
        
        export type set_ = Module_Set_
        
    }
    
    export type D = 
        | readonly ['module', D.module_]
        | readonly ['set', D.set_]
    
}

export type Module_Set_ = _pi.Dictionary<Module_Set_.D>

export namespace Type_Node_Reference_ {
    
    export type type_ = Type_Reference_
    
    export namespace sub_selection {
        
        export namespace L {
            
            export type dictionary = null
            
            export type group = string
            
            export type list = null
            
            export type optional = null
            
            export type state = string
            
        }
        
        export type L = 
            | readonly ['dictionary', L.dictionary]
            | readonly ['group', L.group]
            | readonly ['list', L.list]
            | readonly ['optional', L.optional]
            | readonly ['state', L.state]
        
    }
    
    export type sub_selection = _pi.List<sub_selection.L>
    
}

export type Type_Node_Reference_ = {
    readonly 'type': Type_Node_Reference_.type_
    readonly 'sub selection': Type_Node_Reference_.sub_selection
}

export namespace Expression_ {
    
    export namespace special {
        
        export type abort = Expression_
        
        export namespace block {
            
            export namespace variables {
                
                export namespace D {
                    
                    export namespace type_ {
                        
                        export type O = Type_Node_Reference_
                        
                    }
                    
                    export type type_ = _pi.Optional_Value<type_.O>
                    
                    export type expression = Expression_
                    
                }
                
                export type D = {
                    readonly 'type': D.type_
                    readonly 'expression': D.expression
                }
                
            }
            
            export type variables = _pi.Dictionary<variables.D>
            
            export namespace temp_ordered_variables {
                
                export namespace L {
                    
                    export type name = string
                    
                    export namespace type_ {
                        
                        export type O = Type_Node_Reference_
                        
                    }
                    
                    export type type_ = _pi.Optional_Value<type_.O>
                    
                    export type expression = Expression_
                    
                }
                
                export type L = {
                    readonly 'name': L.name
                    readonly 'type': L.type_
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
        
        export type implement_me = string
        
        export type selection_deprecated = Selection_
        
        export type unreachable = null
        
    }
    
    export type special = 
        | readonly ['abort', special.abort]
        | readonly ['block', special.block]
        | readonly ['change context', special.change_context]
        | readonly ['implement me', special.implement_me]
        | readonly ['selection deprecated', special.selection_deprecated]
        | readonly ['unreachable', special.unreachable]
    
    export namespace initialize {
        
        export namespace boolean_ {
            
            export namespace literal {
                
                export type false_ = null
                
                export type true_ = null
                
            }
            
            export type literal = 
                | readonly ['false', literal.false_]
                | readonly ['true', literal.true_]
            
            export type not = Selection_
            
        }
        
        export type boolean_ = 
            | readonly ['literal', boolean_.literal]
            | readonly ['not', boolean_.not]
        
        export namespace component {
            
            export namespace call {
                
                export type source = Selection_
                
                export type context = Expression_
                
                export namespace arguments_ {
                    
                    export namespace O {
                        
                        export type D = Expression_
                        
                    }
                    
                    export type O = _pi.Dictionary<O.D>
                    
                }
                
                export type arguments_ = _pi.Optional_Value<arguments_.O>
                
                export type abort = boolean
                
            }
            
            export type call = {
                readonly 'source': call.source
                readonly 'context': call.context
                readonly 'arguments': call.arguments_
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
                
                export type item_handler = Expression_
                
            }
            
            export type map = {
                readonly 'source': map.source
                readonly 'item handler': map.item_handler
            }
            
        }
        
        export type list = 
            | readonly ['literal', list.literal]
            | readonly ['map', list.map]
        
        export type nothing = null
        
        export namespace number_ {
            
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
        
        export type number_ = 
            | readonly ['approximation', number_.approximation]
            | readonly ['integer', number_.integer]
            | readonly ['natural', number_.natural]
        
        export namespace optional {
            
            export namespace literal {
                
                export type not_set = null
                
                export type set_ = Expression_
                
            }
            
            export type literal = 
                | readonly ['not set', literal.not_set]
                | readonly ['set', literal.set_]
            
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
        
        export namespace state {
            
            export namespace literal {
                
                export type option = string
                
                export type value = Expression_
                
            }
            
            export type literal = {
                readonly 'option': literal.option
                readonly 'value': literal.value
            }
            
        }
        
        export type state = 
            | readonly ['literal', state.literal]
        
        export namespace text {
            
            export namespace literal {
                
                export namespace type_ {
                    
                    export type identifier = null
                    
                    export type freeform = null
                    
                }
                
                export type type_ = 
                    | readonly ['identifier', type_.identifier]
                    | readonly ['freeform', type_.freeform]
                
                export type value = string
                
            }
            
            export type literal = {
                readonly 'type': literal.type_
                readonly 'value': literal.value
            }
            
        }
        
        export type text = 
            | readonly ['literal', text.literal]
        
    }
    
    export type initialize = 
        | readonly ['boolean', initialize.boolean_]
        | readonly ['component', initialize.component]
        | readonly ['dictionary', initialize.dictionary]
        | readonly ['group', initialize.group]
        | readonly ['list', initialize.list]
        | readonly ['nothing', initialize.nothing]
        | readonly ['number', initialize.number_]
        | readonly ['optional', initialize.optional]
        | readonly ['state', initialize.state]
        | readonly ['text', initialize.text]
    
    export namespace decide {
        
        export namespace type_ {
            
            export namespace boolean_ {
                
                export type source = Selection_
                
                export namespace temp_resulting_node {
                    
                    export type O = Type_Node_Reference_
                    
                }
                
                export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                
                export type if_false = Expression_
                
                export type if_true = Expression_
                
            }
            
            export type boolean_ = {
                readonly 'source': boolean_.source
                readonly 'temp resulting node': boolean_.temp_resulting_node
                readonly 'if false': boolean_.if_false
                readonly 'if true': boolean_.if_true
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
            
            export namespace state {
                
                export type source = Selection_
                
                export namespace temp_resulting_node {
                    
                    export type O = Type_Node_Reference_
                    
                }
                
                export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                
                export namespace type_ {
                    
                    export namespace partial {
                        
                        export namespace cases {
                            
                            export type D = Expression_
                            
                        }
                        
                        export type cases = _pi.Dictionary<cases.D>
                        
                        export type default_ = Expression_
                        
                    }
                    
                    export type partial = {
                        readonly 'cases': partial.cases
                        readonly 'default': partial.default_
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
                
                export type type_ = 
                    | readonly ['partial', type_.partial]
                    | readonly ['full', type_.full]
                
            }
            
            export type state = {
                readonly 'source': state.source
                readonly 'temp resulting node': state.temp_resulting_node
                readonly 'type': state.type_
            }
            
        }
        
        export type type_ = 
            | readonly ['boolean', type_.boolean_]
            | readonly ['optional', type_.optional]
            | readonly ['state', type_.state]
        
    }
    
    export type decide = {
        readonly 'type': decide.type_
    }
    
}

export type Expression_ = 
    | readonly ['special', Expression_.special]
    | readonly ['initialize', Expression_.initialize]
    | readonly ['decide', Expression_.decide]

export namespace Abort_Expression_ {
    
    export type current = null
    
    export type new_ = Expression_
    
}

export type Abort_Expression_ = 
    | readonly ['current', Abort_Expression_.current]
    | readonly ['new', Abort_Expression_.new_]

export namespace Selection_ {
    
    export namespace start {
        
        export type implement_me = string
        
        export type abort_deprecated = null
        
        export type argument = string
        
        export namespace call {
            
            export type source = Selection_
            
            export type context = Selection_
            
            export namespace arguments_ {
                
                export namespace O {
                    
                    export type D = Expression_
                    
                }
                
                export type O = _pi.Dictionary<O.D>
                
            }
            
            export type arguments_ = _pi.Optional_Value<arguments_.O>
            
        }
        
        export type call = {
            readonly 'source': call.source
            readonly 'context': call.context
            readonly 'arguments': call.arguments_
        }
        
        export type context = null
        
        export namespace entry {
            
            export type dictionary = Selection_
            
            export type id = Selection_
            
            export type abort_handler = Abort_Expression_
            
        }
        
        export type entry = {
            readonly 'dictionary': entry.dictionary
            readonly 'id': entry.id
            readonly 'abort handler': entry.abort_handler
        }
        
        export namespace variable {
            
            export type local = string
            
            export namespace imported {
                
                export type import_ = string
                
                export type variable = string
                
            }
            
            export type imported = {
                readonly 'import': imported.import_
                readonly 'variable': imported.variable
            }
            
        }
        
        export type variable = 
            | readonly ['local', variable.local]
            | readonly ['imported', variable.imported]
        
        export type parameter = string
        
    }
    
    export type start = 
        | readonly ['implement me', start.implement_me]
        | readonly ['abort deprecated', start.abort_deprecated]
        | readonly ['argument', start.argument]
        | readonly ['call', start.call]
        | readonly ['context', start.context]
        | readonly ['entry', start.entry]
        | readonly ['variable', start.variable]
        | readonly ['parameter', start.parameter]
    
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
    Abort_Expression_ as Abort_Expression, 
    Selection_ as Selection, 
}
