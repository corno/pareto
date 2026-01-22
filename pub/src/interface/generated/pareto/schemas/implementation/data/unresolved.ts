
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../../core/location"

import * as i__imports_interface from "../../interface/data/unresolved"

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
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export type serializer = null
            
            export type deserializer = null
            
            export type transformer = null
            
            export type refiner = null
            
        }
        
        export type state_group = 
            | readonly ['serializer', state_group.serializer]
            | readonly ['deserializer', state_group.deserializer]
            | readonly ['transformer', state_group.transformer]
            | readonly ['refiner', state_group.refiner]
        
    }
    
    export type type_ = {
        readonly 'location': type_.location
        readonly 'state group': type_.state_group
    }
    
    export type type_imports = i__imports_interface.Imports
    
    export namespace variable_imports {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export namespace tail {
                        
                        export type location = i__location.Location
                        
                        export namespace list {
                            
                            export namespace L {
                                
                                export type location = i__location.Location
                                
                                export type element = string
                                
                            }
                            
                            export type L = {
                                readonly 'location': L.location
                                readonly 'element': L.element
                            }
                            
                        }
                        
                        export type list = _pi.List<list.L>
                        
                    }
                    
                    export type tail = {
                        readonly 'location': tail.location
                        readonly 'list': tail.list
                    }
                    
                    export namespace type_ {
                        
                        export type location = i__location.Location
                        
                        export namespace state_group {
                            
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
                        
                        export type state_group = 
                            | readonly ['ancestor', state_group.ancestor]
                            | readonly ['external', state_group.external]
                            | readonly ['sibling', state_group.sibling]
                        
                    }
                    
                    export type type_ = {
                        readonly 'location': type_.location
                        readonly 'state group': type_.state_group
                    }
                    
                }
                
                export type entry = {
                    readonly 'tail': entry.tail
                    readonly 'type': entry.type_
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type variable_imports = {
        readonly 'location': variable_imports.location
        readonly 'dictionary': variable_imports.dictionary
    }
    
    export namespace algorithms {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export type type_ = Type_Reference_
                    
                    export type expression = Expression_
                    
                    export type temp_has_error = boolean
                    
                    export type temp_has_lookups = boolean
                    
                    export type temp_has_parameters = boolean
                    
                }
                
                export type entry = {
                    readonly 'type': entry.type_
                    readonly 'expression': entry.expression
                    readonly 'temp has error': entry.temp_has_error
                    readonly 'temp has lookups': entry.temp_has_lookups
                    readonly 'temp has parameters': entry.temp_has_parameters
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type algorithms = {
        readonly 'location': algorithms.location
        readonly 'dictionary': algorithms.dictionary
    }
    
}

export type Module_ = {
    readonly 'type': Module_.type_
    readonly 'type imports': Module_.type_imports
    readonly 'variable imports': Module_.variable_imports
    readonly 'algorithms': Module_.algorithms
}

export namespace Module_Set_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export namespace entry {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
                    export type module_ = Module_
                    
                    export type set_ = Module_Set_
                    
                }
                
                export type state_group = 
                    | readonly ['module', state_group.module_]
                    | readonly ['set', state_group.set_]
                
            }
            
            export type entry = {
                readonly 'location': entry.location
                readonly 'state group': entry.state_group
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Module_Set_ = {
    readonly 'location': Module_Set_.location
    readonly 'dictionary': Module_Set_.dictionary
}

export namespace Type_Node_Reference_ {
    
    export type type_ = Type_Reference_
    
    export namespace sub_selection {
        
        export type location = i__location.Location
        
        export namespace list {
            
            export namespace L {
                
                export type location = i__location.Location
                
                export namespace element {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export type dictionary = null
                        
                        export type group = string
                        
                        export type list = null
                        
                        export type optional = null
                        
                        export type state_group = string
                        
                    }
                    
                    export type state_group = 
                        | readonly ['dictionary', state_group.dictionary]
                        | readonly ['group', state_group.group]
                        | readonly ['list', state_group.list]
                        | readonly ['optional', state_group.optional]
                        | readonly ['state group', state_group.state_group]
                    
                }
                
                export type element = {
                    readonly 'location': element.location
                    readonly 'state group': element.state_group
                }
                
            }
            
            export type L = {
                readonly 'location': L.location
                readonly 'element': L.element
            }
            
        }
        
        export type list = _pi.List<list.L>
        
    }
    
    export type sub_selection = {
        readonly 'location': sub_selection.location
        readonly 'list': sub_selection.list
    }
    
}

export type Type_Node_Reference_ = {
    readonly 'type': Type_Node_Reference_.type_
    readonly 'sub selection': Type_Node_Reference_.sub_selection
}

export namespace Expression_ {
    
    export type location = i__location.Location
    
    export namespace state_group {
        
        export namespace special {
            
            export type location = i__location.Location
            
            export namespace state_group {
                
                export type abort = Expression_
                
                export namespace block {
                    
                    export namespace variables {
                        
                        export type location = i__location.Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Location
                                
                                export namespace entry {
                                    
                                    export namespace type_ {
                                        
                                        export type O = Type_Node_Reference_
                                        
                                    }
                                    
                                    export type type_ = _pi.Optional_Value<type_.O>
                                    
                                    export type expression = Expression_
                                    
                                }
                                
                                export type entry = {
                                    readonly 'type': entry.type_
                                    readonly 'expression': entry.expression
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly 'entry': D.entry
                            }
                            
                        }
                        
                        export type dictionary = _pi.Dictionary<dictionary.D>
                        
                    }
                    
                    export type variables = {
                        readonly 'location': variables.location
                        readonly 'dictionary': variables.dictionary
                    }
                    
                    export namespace temp_ordered_variables {
                        
                        export type location = i__location.Location
                        
                        export namespace list {
                            
                            export namespace L {
                                
                                export type location = i__location.Location
                                
                                export namespace element {
                                    
                                    export type name = string
                                    
                                    export namespace type_ {
                                        
                                        export type O = Type_Node_Reference_
                                        
                                    }
                                    
                                    export type type_ = _pi.Optional_Value<type_.O>
                                    
                                    export type expression = Expression_
                                    
                                }
                                
                                export type element = {
                                    readonly 'name': element.name
                                    readonly 'type': element.type_
                                    readonly 'expression': element.expression
                                }
                                
                            }
                            
                            export type L = {
                                readonly 'location': L.location
                                readonly 'element': L.element
                            }
                            
                        }
                        
                        export type list = _pi.List<list.L>
                        
                    }
                    
                    export type temp_ordered_variables = {
                        readonly 'location': temp_ordered_variables.location
                        readonly 'list': temp_ordered_variables.list
                    }
                    
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
            
            export type state_group = 
                | readonly ['abort', state_group.abort]
                | readonly ['block', state_group.block]
                | readonly ['change context', state_group.change_context]
                | readonly ['implement me', state_group.implement_me]
                | readonly ['selection deprecated', state_group.selection_deprecated]
                | readonly ['unreachable', state_group.unreachable]
                | readonly ['deprecated function', state_group.deprecated_function]
            
        }
        
        export type special = {
            readonly 'location': special.location
            readonly 'state group': special.state_group
        }
        
        export namespace initialize {
            
            export type location = i__location.Location
            
            export namespace state_group {
                
                export namespace boolean_ {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export namespace literal {
                            
                            export type location = i__location.Location
                            
                            export namespace state_group {
                                
                                export type false_ = null
                                
                                export type true_ = null
                                
                            }
                            
                            export type state_group = 
                                | readonly ['false', state_group.false_]
                                | readonly ['true', state_group.true_]
                            
                        }
                        
                        export type literal = {
                            readonly 'location': literal.location
                            readonly 'state group': literal.state_group
                        }
                        
                        export type not = Selection_
                        
                    }
                    
                    export type state_group = 
                        | readonly ['literal', state_group.literal]
                        | readonly ['not', state_group.not]
                    
                }
                
                export type boolean_ = {
                    readonly 'location': boolean_.location
                    readonly 'state group': boolean_.state_group
                }
                
                export namespace component {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export namespace call {
                            
                            export type source = Selection_
                            
                            export type context = Expression_
                            
                            export namespace arguments_ {
                                
                                export namespace O {
                                    
                                    export type location = i__location.Location
                                    
                                    export namespace dictionary {
                                        
                                        export namespace D {
                                            
                                            export type location = i__location.Location
                                            
                                            export type entry = Expression_
                                            
                                        }
                                        
                                        export type D = {
                                            readonly 'location': D.location
                                            readonly 'entry': D.entry
                                        }
                                        
                                    }
                                    
                                    export type dictionary = _pi.Dictionary<dictionary.D>
                                    
                                }
                                
                                export type O = {
                                    readonly 'location': O.location
                                    readonly 'dictionary': O.dictionary
                                }
                                
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
                    
                    export type state_group = 
                        | readonly ['call', state_group.call]
                    
                }
                
                export type component = {
                    readonly 'location': component.location
                    readonly 'state group': component.state_group
                }
                
                export namespace dictionary {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export namespace literal {
                            
                            export type location = i__location.Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Location
                                    
                                    export type entry = Expression_
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly 'entry': D.entry
                                }
                                
                            }
                            
                            export type dictionary = _pi.Dictionary<dictionary.D>
                            
                        }
                        
                        export type literal = {
                            readonly 'location': literal.location
                            readonly 'dictionary': literal.dictionary
                        }
                        
                        export namespace map {
                            
                            export type source = Selection_
                            
                            export type entry_handler = Expression_
                            
                        }
                        
                        export type map = {
                            readonly 'source': map.source
                            readonly 'entry handler': map.entry_handler
                        }
                        
                    }
                    
                    export type state_group = 
                        | readonly ['literal', state_group.literal]
                        | readonly ['map', state_group.map]
                    
                }
                
                export type dictionary = {
                    readonly 'location': dictionary.location
                    readonly 'state group': dictionary.state_group
                }
                
                export namespace group {
                    
                    export type location = i__location.Location
                    
                    export namespace dictionary {
                        
                        export namespace D {
                            
                            export type location = i__location.Location
                            
                            export type entry = Expression_
                            
                        }
                        
                        export type D = {
                            readonly 'location': D.location
                            readonly 'entry': D.entry
                        }
                        
                    }
                    
                    export type dictionary = _pi.Dictionary<dictionary.D>
                    
                }
                
                export type group = {
                    readonly 'location': group.location
                    readonly 'dictionary': group.dictionary
                }
                
                export namespace list {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export namespace literal {
                            
                            export type location = i__location.Location
                            
                            export namespace list {
                                
                                export namespace L {
                                    
                                    export type location = i__location.Location
                                    
                                    export type element = Expression_
                                    
                                }
                                
                                export type L = {
                                    readonly 'location': L.location
                                    readonly 'element': L.element
                                }
                                
                            }
                            
                            export type list = _pi.List<list.L>
                            
                        }
                        
                        export type literal = {
                            readonly 'location': literal.location
                            readonly 'list': literal.list
                        }
                        
                        export namespace map {
                            
                            export type source = Selection_
                            
                            export type element_handler = Expression_
                            
                        }
                        
                        export type map = {
                            readonly 'source': map.source
                            readonly 'element handler': map.element_handler
                        }
                        
                    }
                    
                    export type state_group = 
                        | readonly ['literal', state_group.literal]
                        | readonly ['map', state_group.map]
                    
                }
                
                export type list = {
                    readonly 'location': list.location
                    readonly 'state group': list.state_group
                }
                
                export type nothing = null
                
                export namespace number_ {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export namespace approximation {
                            
                            export type location = i__location.Location
                            
                            export namespace state_group {
                                
                                export type literal = number
                                
                            }
                            
                            export type state_group = 
                                | readonly ['literal', state_group.literal]
                            
                        }
                        
                        export type approximation = {
                            readonly 'location': approximation.location
                            readonly 'state group': approximation.state_group
                        }
                        
                        export namespace integer {
                            
                            export type location = i__location.Location
                            
                            export namespace state_group {
                                
                                export type literal = number
                                
                            }
                            
                            export type state_group = 
                                | readonly ['literal', state_group.literal]
                            
                        }
                        
                        export type integer = {
                            readonly 'location': integer.location
                            readonly 'state group': integer.state_group
                        }
                        
                        export namespace natural {
                            
                            export type location = i__location.Location
                            
                            export namespace state_group {
                                
                                export type literal = number
                                
                            }
                            
                            export type state_group = 
                                | readonly ['literal', state_group.literal]
                            
                        }
                        
                        export type natural = {
                            readonly 'location': natural.location
                            readonly 'state group': natural.state_group
                        }
                        
                    }
                    
                    export type state_group = 
                        | readonly ['approximation', state_group.approximation]
                        | readonly ['integer', state_group.integer]
                        | readonly ['natural', state_group.natural]
                    
                }
                
                export type number_ = {
                    readonly 'location': number_.location
                    readonly 'state group': number_.state_group
                }
                
                export namespace optional {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export namespace literal {
                            
                            export type location = i__location.Location
                            
                            export namespace state_group {
                                
                                export type not_set = null
                                
                                export type set_ = Expression_
                                
                            }
                            
                            export type state_group = 
                                | readonly ['not set', state_group.not_set]
                                | readonly ['set', state_group.set_]
                            
                        }
                        
                        export type literal = {
                            readonly 'location': literal.location
                            readonly 'state group': literal.state_group
                        }
                        
                        export namespace map {
                            
                            export type source = Selection_
                            
                            export type set_handler = Expression_
                            
                        }
                        
                        export type map = {
                            readonly 'source': map.source
                            readonly 'set handler': map.set_handler
                        }
                        
                    }
                    
                    export type state_group = 
                        | readonly ['literal', state_group.literal]
                        | readonly ['map', state_group.map]
                    
                }
                
                export type optional = {
                    readonly 'location': optional.location
                    readonly 'state group': optional.state_group
                }
                
                export namespace state_group {
                    
                    export type location = i__location.Location
                    
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
                    
                }
                
                export type state_group = {
                    readonly 'location': state_group.location
                    readonly 'state group': state_group.state_group
                }
                
                export namespace text {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export namespace literal {
                            
                            export namespace delimiter {
                                
                                export type location = i__location.Location
                                
                                export namespace state_group {
                                    
                                    export type backtick = null
                                    
                                    export type quote = null
                                    
                                }
                                
                                export type state_group = 
                                    | readonly ['backtick', state_group.backtick]
                                    | readonly ['quote', state_group.quote]
                                
                            }
                            
                            export type delimiter = {
                                readonly 'location': delimiter.location
                                readonly 'state group': delimiter.state_group
                            }
                            
                            export type value = string
                            
                        }
                        
                        export type literal = {
                            readonly 'delimiter': literal.delimiter
                            readonly 'value': literal.value
                        }
                        
                    }
                    
                    export type state_group = 
                        | readonly ['literal', state_group.literal]
                    
                }
                
                export type text = {
                    readonly 'location': text.location
                    readonly 'state group': text.state_group
                }
                
            }
            
            export type state_group = 
                | readonly ['boolean', state_group.boolean_]
                | readonly ['component', state_group.component]
                | readonly ['dictionary', state_group.dictionary]
                | readonly ['group', state_group.group]
                | readonly ['list', state_group.list]
                | readonly ['nothing', state_group.nothing]
                | readonly ['number', state_group.number_]
                | readonly ['optional', state_group.optional]
                | readonly ['state group', state_group.state_group]
                | readonly ['text', state_group.text]
            
        }
        
        export type initialize = {
            readonly 'location': initialize.location
            readonly 'state group': initialize.state_group
        }
        
        export namespace decide {
            
            export namespace type_ {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
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
                    
                    export namespace state_group {
                        
                        export type source = Selection_
                        
                        export namespace temp_resulting_node {
                            
                            export type O = Type_Node_Reference_
                            
                        }
                        
                        export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                        
                        export namespace type_ {
                            
                            export type location = i__location.Location
                            
                            export namespace state_group {
                                
                                export namespace partial {
                                    
                                    export namespace cases {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace dictionary {
                                            
                                            export namespace D {
                                                
                                                export type location = i__location.Location
                                                
                                                export type entry = Expression_
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'location': D.location
                                                readonly 'entry': D.entry
                                            }
                                            
                                        }
                                        
                                        export type dictionary = _pi.Dictionary<dictionary.D>
                                        
                                    }
                                    
                                    export type cases = {
                                        readonly 'location': cases.location
                                        readonly 'dictionary': cases.dictionary
                                    }
                                    
                                    export type default_ = Expression_
                                    
                                }
                                
                                export type partial = {
                                    readonly 'cases': partial.cases
                                    readonly 'default': partial.default_
                                }
                                
                                export namespace full {
                                    
                                    export namespace cases {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace dictionary {
                                            
                                            export namespace D {
                                                
                                                export type location = i__location.Location
                                                
                                                export type entry = Expression_
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'location': D.location
                                                readonly 'entry': D.entry
                                            }
                                            
                                        }
                                        
                                        export type dictionary = _pi.Dictionary<dictionary.D>
                                        
                                    }
                                    
                                    export type cases = {
                                        readonly 'location': cases.location
                                        readonly 'dictionary': cases.dictionary
                                    }
                                    
                                }
                                
                                export type full = {
                                    readonly 'cases': full.cases
                                }
                                
                            }
                            
                            export type state_group = 
                                | readonly ['partial', state_group.partial]
                                | readonly ['full', state_group.full]
                            
                        }
                        
                        export type type_ = {
                            readonly 'location': type_.location
                            readonly 'state group': type_.state_group
                        }
                        
                    }
                    
                    export type state_group = {
                        readonly 'source': state_group.source
                        readonly 'temp resulting node': state_group.temp_resulting_node
                        readonly 'type': state_group.type_
                    }
                    
                }
                
                export type state_group = 
                    | readonly ['boolean', state_group.boolean_]
                    | readonly ['optional', state_group.optional]
                    | readonly ['state group', state_group.state_group]
                
            }
            
            export type type_ = {
                readonly 'location': type_.location
                readonly 'state group': type_.state_group
            }
            
        }
        
        export type decide = {
            readonly 'type': decide.type_
        }
        
    }
    
    export type state_group = 
        | readonly ['special', state_group.special]
        | readonly ['initialize', state_group.initialize]
        | readonly ['decide', state_group.decide]
    
}

export type Expression_ = {
    readonly 'location': Expression_.location
    readonly 'state group': Expression_.state_group
}

export namespace Abort_Expression_ {
    
    export type location = i__location.Location
    
    export namespace state_group {
        
        export type current = null
        
        export type new_ = Expression_
        
    }
    
    export type state_group = 
        | readonly ['current', state_group.current]
        | readonly ['new', state_group.new_]
    
}

export type Abort_Expression_ = {
    readonly 'location': Abort_Expression_.location
    readonly 'state group': Abort_Expression_.state_group
}

export namespace Selection_ {
    
    export namespace start {
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export type implement_me = null
            
            export type abort_deprecated = null
            
            export type argument = string
            
            export namespace call {
                
                export type source = Selection_
                
                export type context = Selection_
                
                export namespace arguments_ {
                    
                    export namespace O {
                        
                        export type location = i__location.Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Location
                                
                                export type entry = Expression_
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly 'entry': D.entry
                            }
                            
                        }
                        
                        export type dictionary = _pi.Dictionary<dictionary.D>
                        
                    }
                    
                    export type O = {
                        readonly 'location': O.location
                        readonly 'dictionary': O.dictionary
                    }
                    
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
                
                export type key = Selection_
                
                export type abort_handler = Abort_Expression_
                
            }
            
            export type entry = {
                readonly 'dictionary': entry.dictionary
                readonly 'key': entry.key
                readonly 'abort handler': entry.abort_handler
            }
            
            export namespace variable {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
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
                
                export type state_group = 
                    | readonly ['local', state_group.local]
                    | readonly ['imported', state_group.imported]
                
            }
            
            export type variable = {
                readonly 'location': variable.location
                readonly 'state group': variable.state_group
            }
            
            export type parameter = string
            
        }
        
        export type state_group = 
            | readonly ['implement me', state_group.implement_me]
            | readonly ['abort deprecated', state_group.abort_deprecated]
            | readonly ['argument', state_group.argument]
            | readonly ['call', state_group.call]
            | readonly ['context', state_group.context]
            | readonly ['entry', state_group.entry]
            | readonly ['variable', state_group.variable]
            | readonly ['parameter', state_group.parameter]
        
    }
    
    export type start = {
        readonly 'location': start.location
        readonly 'state group': start.state_group
    }
    
    export namespace tail {
        
        export type location = i__location.Location
        
        export namespace list {
            
            export namespace L {
                
                export type location = i__location.Location
                
                export type element = string
                
            }
            
            export type L = {
                readonly 'location': L.location
                readonly 'element': L.element
            }
            
        }
        
        export type list = _pi.List<list.L>
        
    }
    
    export type tail = {
        readonly 'location': tail.location
        readonly 'list': tail.list
    }
    
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
