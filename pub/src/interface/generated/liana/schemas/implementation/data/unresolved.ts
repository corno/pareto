
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

import * as i__imports_interface from "../../interface/data/unresolved"

export namespace Module_ {
    
    export namespace type_ {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export type serializer = null
            
            export type deserializer = null
            
            export type transformer = null
            
            export type refiner = null
            
        }
        
        export type l_state = 
            | readonly ['serializer', l_state.serializer]
            | readonly ['deserializer', l_state.deserializer]
            | readonly ['transformer', l_state.transformer]
            | readonly ['refiner', l_state.refiner]
        
    }
    
    export type type_ = {
        readonly 'l location': type_.l_location
        readonly 'l state': type_.l_state
    }
    
    export namespace specials {
        
        export type abort = boolean
        
        export type change_context = boolean
        
        export type implement_me = boolean
        
        export type iterate = boolean
        
        export type unreachable_code_path = boolean
        
    }
    
    export type specials = {
        readonly 'abort': specials.abort
        readonly 'change context': specials.change_context
        readonly 'implement me': specials.implement_me
        readonly 'iterate': specials.iterate
        readonly 'unreachable code path': specials.unreachable_code_path
    }
    
    export type type_imports = i__imports_interface.Imports
    
    export namespace variable_imports {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_entry {
                    
                    export namespace tail {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_list {
                            
                            export namespace L {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_item = string
                                
                            }
                            
                            export type L = {
                                readonly 'l location': L.l_location
                                readonly 'l item': L.l_item
                            }
                            
                        }
                        
                        export type l_list = _pi.List<l_list.L>
                        
                    }
                    
                    export type tail = {
                        readonly 'l location': tail.l_location
                        readonly 'l list': tail.l_list
                    }
                    
                    export namespace type_ {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_state {
                            
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
                        
                        export type l_state = 
                            | readonly ['ancestor', l_state.ancestor]
                            | readonly ['external', l_state.external]
                            | readonly ['sibling', l_state.sibling]
                        
                    }
                    
                    export type type_ = {
                        readonly 'l location': type_.l_location
                        readonly 'l state': type_.l_state
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'tail': l_entry.tail
                    readonly 'type': l_entry.type_
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
        
    }
    
    export type variable_imports = {
        readonly 'l location': variable_imports.l_location
        readonly 'l dictionary': variable_imports.l_dictionary
    }
    
    export namespace algorithms {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_entry {
                    
                    export namespace type_ {
                        
                        export type import_ = string
                        
                        export type type_ = string
                        
                    }
                    
                    export type type_ = {
                        readonly 'import': type_.import_
                        readonly 'type': type_.type_
                    }
                    
                    export type expression = Expression_
                    
                    export type temp_has_abort = boolean
                    
                    export type temp_has_lookups = boolean
                    
                    export type temp_has_parameters = boolean
                    
                }
                
                export type l_entry = {
                    readonly 'type': l_entry.type_
                    readonly 'expression': l_entry.expression
                    readonly 'temp has abort': l_entry.temp_has_abort
                    readonly 'temp has lookups': l_entry.temp_has_lookups
                    readonly 'temp has parameters': l_entry.temp_has_parameters
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
        
    }
    
    export type algorithms = {
        readonly 'l location': algorithms.l_location
        readonly 'l dictionary': algorithms.l_dictionary
    }
    
}

export type Module_ = {
    readonly 'type': Module_.type_
    readonly 'specials': Module_.specials
    readonly 'type imports': Module_.type_imports
    readonly 'variable imports': Module_.variable_imports
    readonly 'algorithms': Module_.algorithms
}

export namespace Module_Set_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export type module_ = Module_
                    
                    export type set_ = Module_Set_
                    
                }
                
                export type l_state = 
                    | readonly ['module', l_state.module_]
                    | readonly ['set', l_state.set_]
                
            }
            
            export type l_entry = {
                readonly 'l location': l_entry.l_location
                readonly 'l state': l_entry.l_state
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Module_Set_ = {
    readonly 'l location': Module_Set_.l_location
    readonly 'l dictionary': Module_Set_.l_dictionary
}

export namespace Temp_Type_Node_Reference_ {
    
    export namespace type_ {
        
        export type import_ = string
        
        export type type_ = string
        
    }
    
    export type type_ = {
        readonly 'import': type_.import_
        readonly 'type': type_.type_
    }
    
    export namespace sub_selection {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_list {
            
            export namespace L {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_item {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export type dictionary = null
                        
                        export type group = string
                        
                        export type list = null
                        
                        export type optional = null
                        
                        export type state = string
                        
                    }
                    
                    export type l_state = 
                        | readonly ['dictionary', l_state.dictionary]
                        | readonly ['group', l_state.group]
                        | readonly ['list', l_state.list]
                        | readonly ['optional', l_state.optional]
                        | readonly ['state', l_state.state]
                    
                }
                
                export type l_item = {
                    readonly 'l location': l_item.l_location
                    readonly 'l state': l_item.l_state
                }
                
            }
            
            export type L = {
                readonly 'l location': L.l_location
                readonly 'l item': L.l_item
            }
            
        }
        
        export type l_list = _pi.List<l_list.L>
        
    }
    
    export type sub_selection = {
        readonly 'l location': sub_selection.l_location
        readonly 'l list': sub_selection.l_list
    }
    
}

export type Temp_Type_Node_Reference_ = {
    readonly 'type': Temp_Type_Node_Reference_.type_
    readonly 'sub selection': Temp_Type_Node_Reference_.sub_selection
}

export namespace Selection_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export type implement_me = string
        
        export namespace regular {
            
            export namespace start {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export namespace call {
                        
                        export namespace source {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_state {
                                
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
                            
                            export type l_state = 
                                | readonly ['local', l_state.local]
                                | readonly ['imported', l_state.imported]
                            
                        }
                        
                        export type source = {
                            readonly 'l location': source.l_location
                            readonly 'l state': source.l_state
                        }
                        
                        export type context = Expression_
                        
                        export namespace abort {
                            
                            export type O = Expression_
                            
                        }
                        
                        export type abort = _pi.Optional_Value<abort.O>
                        
                        export namespace lookups {
                            
                            export namespace O {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_state {
                                    
                                    export namespace initialize {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_dictionary {
                                            
                                            export namespace D {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_entry = Lookup_Selection_
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'l location': D.l_location
                                                readonly 'l entry': D.l_entry
                                            }
                                            
                                        }
                                        
                                        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                                        
                                    }
                                    
                                    export type initialize = {
                                        readonly 'l location': initialize.l_location
                                        readonly 'l dictionary': initialize.l_dictionary
                                    }
                                    
                                    export type pass_through = null
                                    
                                }
                                
                                export type l_state = 
                                    | readonly ['initialize', l_state.initialize]
                                    | readonly ['pass through', l_state.pass_through]
                                
                            }
                            
                            export type O = {
                                readonly 'l location': O.l_location
                                readonly 'l state': O.l_state
                            }
                            
                        }
                        
                        export type lookups = _pi.Optional_Value<lookups.O>
                        
                        export namespace arguments_ {
                            
                            export namespace O {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_state {
                                    
                                    export namespace initialize {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_dictionary {
                                            
                                            export namespace D {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_entry = Expression_
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'l location': D.l_location
                                                readonly 'l entry': D.l_entry
                                            }
                                            
                                        }
                                        
                                        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                                        
                                    }
                                    
                                    export type initialize = {
                                        readonly 'l location': initialize.l_location
                                        readonly 'l dictionary': initialize.l_dictionary
                                    }
                                    
                                    export type pass_through = null
                                    
                                }
                                
                                export type l_state = 
                                    | readonly ['initialize', l_state.initialize]
                                    | readonly ['pass through', l_state.pass_through]
                                
                            }
                            
                            export type O = {
                                readonly 'l location': O.l_location
                                readonly 'l state': O.l_state
                            }
                            
                        }
                        
                        export type arguments_ = _pi.Optional_Value<arguments_.O>
                        
                    }
                    
                    export type call = {
                        readonly 'source': call.source
                        readonly 'context': call.context
                        readonly 'abort': call.abort
                        readonly 'lookups': call.lookups
                        readonly 'arguments': call.arguments_
                    }
                    
                    export type context = null
                    
                    export namespace entry {
                        
                        export type dictionary = Selection_
                        
                        export type id = Expression_
                        
                        export type abort_handler = Expression_
                        
                    }
                    
                    export type entry = {
                        readonly 'dictionary': entry.dictionary
                        readonly 'id': entry.id
                        readonly 'abort handler': entry.abort_handler
                    }
                    
                    export namespace variable {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_state {
                            
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
                        
                        export type l_state = 
                            | readonly ['local', l_state.local]
                            | readonly ['imported', l_state.imported]
                        
                    }
                    
                    export type variable = {
                        readonly 'l location': variable.l_location
                        readonly 'l state': variable.l_state
                    }
                    
                    export type parameter = string
                    
                }
                
                export type l_state = 
                    | readonly ['call', l_state.call]
                    | readonly ['context', l_state.context]
                    | readonly ['entry', l_state.entry]
                    | readonly ['variable', l_state.variable]
                    | readonly ['parameter', l_state.parameter]
                
            }
            
            export type start = {
                readonly 'l location': start.l_location
                readonly 'l state': start.l_state
            }
            
            export namespace tail {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_list {
                    
                    export namespace L {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_item = string
                        
                    }
                    
                    export type L = {
                        readonly 'l location': L.l_location
                        readonly 'l item': L.l_item
                    }
                    
                }
                
                export type l_list = _pi.List<l_list.L>
                
            }
            
            export type tail = {
                readonly 'l location': tail.l_location
                readonly 'l list': tail.l_list
            }
            
        }
        
        export type regular = {
            readonly 'start': regular.start
            readonly 'tail': regular.tail
        }
        
    }
    
    export type l_state = 
        | readonly ['implement me', l_state.implement_me]
        | readonly ['regular', l_state.regular]
    
}

export type Selection_ = {
    readonly 'l location': Selection_.l_location
    readonly 'l state': Selection_.l_state
}

export namespace Expression_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export namespace decide {
            
            export namespace type_ {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export namespace boolean_ {
                        
                        export type source = Selection_
                        
                        export namespace temp_resulting_node {
                            
                            export type O = Temp_Type_Node_Reference_
                            
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
                    
                    export namespace dictionary {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_state {
                            
                            export namespace has_entries {
                                
                                export type dictionary = Selection_
                                
                                export type if_true = Expression_
                                
                                export type if_false = Expression_
                                
                            }
                            
                            export type has_entries = {
                                readonly 'dictionary': has_entries.dictionary
                                readonly 'if true': has_entries.if_true
                                readonly 'if false': has_entries.if_false
                            }
                            
                        }
                        
                        export type l_state = 
                            | readonly ['has entries', l_state.has_entries]
                        
                    }
                    
                    export type dictionary = {
                        readonly 'l location': dictionary.l_location
                        readonly 'l state': dictionary.l_state
                    }
                    
                    export namespace list {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_state {
                            
                            export namespace has_first_item {
                                
                                export type list = Selection_
                                
                                export type if_true = Expression_
                                
                                export type if_false = Expression_
                                
                            }
                            
                            export type has_first_item = {
                                readonly 'list': has_first_item.list
                                readonly 'if true': has_first_item.if_true
                                readonly 'if false': has_first_item.if_false
                            }
                            
                            export namespace has_last_item {
                                
                                export type list = Selection_
                                
                                export type if_true = Expression_
                                
                                export type if_false = Expression_
                                
                            }
                            
                            export type has_last_item = {
                                readonly 'list': has_last_item.list
                                readonly 'if true': has_last_item.if_true
                                readonly 'if false': has_last_item.if_false
                            }
                            
                            export namespace has_items {
                                
                                export type list = Selection_
                                
                                export type if_true = Expression_
                                
                                export type if_false = Expression_
                                
                            }
                            
                            export type has_items = {
                                readonly 'list': has_items.list
                                readonly 'if true': has_items.if_true
                                readonly 'if false': has_items.if_false
                            }
                            
                        }
                        
                        export type l_state = 
                            | readonly ['has first item', l_state.has_first_item]
                            | readonly ['has last item', l_state.has_last_item]
                            | readonly ['has items', l_state.has_items]
                        
                    }
                    
                    export type list = {
                        readonly 'l location': list.l_location
                        readonly 'l state': list.l_state
                    }
                    
                    export namespace optional {
                        
                        export type source = Selection_
                        
                        export namespace temp_resulting_node {
                            
                            export type O = Temp_Type_Node_Reference_
                            
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
                            
                            export type O = Temp_Type_Node_Reference_
                            
                        }
                        
                        export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                        
                        export namespace type_ {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_state {
                                
                                export namespace partial {
                                    
                                    export namespace options {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_dictionary {
                                            
                                            export namespace D {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_entry = Expression_
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'l location': D.l_location
                                                readonly 'l entry': D.l_entry
                                            }
                                            
                                        }
                                        
                                        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                                        
                                    }
                                    
                                    export type options = {
                                        readonly 'l location': options.l_location
                                        readonly 'l dictionary': options.l_dictionary
                                    }
                                    
                                    export type default_ = Expression_
                                    
                                }
                                
                                export type partial = {
                                    readonly 'options': partial.options
                                    readonly 'default': partial.default_
                                }
                                
                                export namespace full {
                                    
                                    export namespace options {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_dictionary {
                                            
                                            export namespace D {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_entry = Expression_
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'l location': D.l_location
                                                readonly 'l entry': D.l_entry
                                            }
                                            
                                        }
                                        
                                        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                                        
                                    }
                                    
                                    export type options = {
                                        readonly 'l location': options.l_location
                                        readonly 'l dictionary': options.l_dictionary
                                    }
                                    
                                }
                                
                                export type full = {
                                    readonly 'options': full.options
                                }
                                
                            }
                            
                            export type l_state = 
                                | readonly ['partial', l_state.partial]
                                | readonly ['full', l_state.full]
                            
                        }
                        
                        export type type_ = {
                            readonly 'l location': type_.l_location
                            readonly 'l state': type_.l_state
                        }
                        
                    }
                    
                    export type state = {
                        readonly 'source': state.source
                        readonly 'temp resulting node': state.temp_resulting_node
                        readonly 'type': state.type_
                    }
                    
                    export namespace text {
                        
                        export type source = Selection_
                        
                        export namespace temp_resulting_node {
                            
                            export type O = Temp_Type_Node_Reference_
                            
                        }
                        
                        export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                        
                        export namespace cases {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export type l_entry = Expression_
                                    
                                }
                                
                                export type D = {
                                    readonly 'l location': D.l_location
                                    readonly 'l entry': D.l_entry
                                }
                                
                            }
                            
                            export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                            
                        }
                        
                        export type cases = {
                            readonly 'l location': cases.l_location
                            readonly 'l dictionary': cases.l_dictionary
                        }
                        
                        export type default_ = Expression_
                        
                    }
                    
                    export type text = {
                        readonly 'source': text.source
                        readonly 'temp resulting node': text.temp_resulting_node
                        readonly 'cases': text.cases
                        readonly 'default': text.default_
                    }
                    
                }
                
                export type l_state = 
                    | readonly ['boolean', l_state.boolean_]
                    | readonly ['dictionary', l_state.dictionary]
                    | readonly ['list', l_state.list]
                    | readonly ['optional', l_state.optional]
                    | readonly ['state', l_state.state]
                    | readonly ['text', l_state.text]
                
            }
            
            export type type_ = {
                readonly 'l location': type_.l_location
                readonly 'l state': type_.l_state
            }
            
        }
        
        export type decide = {
            readonly 'type': decide.type_
        }
        
        export namespace initialize {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export namespace boolean_ {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export namespace literal {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_state {
                                
                                export type false_ = null
                                
                                export type true_ = null
                                
                            }
                            
                            export type l_state = 
                                | readonly ['false', l_state.false_]
                                | readonly ['true', l_state.true_]
                            
                        }
                        
                        export type literal = {
                            readonly 'l location': literal.l_location
                            readonly 'l state': literal.l_state
                        }
                        
                        export type not = Selection_
                        
                        export type copy = Selection_
                        
                        export type dictionary_is_empty = Selection_
                        
                        export type list_is_empty = Selection_
                        
                    }
                    
                    export type l_state = 
                        | readonly ['literal', l_state.literal]
                        | readonly ['not', l_state.not]
                        | readonly ['copy', l_state.copy]
                        | readonly ['dictionary is empty', l_state.dictionary_is_empty]
                        | readonly ['list is empty', l_state.list_is_empty]
                    
                }
                
                export type boolean_ = {
                    readonly 'l location': boolean_.l_location
                    readonly 'l state': boolean_.l_state
                }
                
                export namespace dictionary {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export namespace filter {
                            
                            export type source = Selection_
                            
                            export type entry_handler = Expression_
                            
                        }
                        
                        export type filter = {
                            readonly 'source': filter.source
                            readonly 'entry handler': filter.entry_handler
                        }
                        
                        export namespace from_list {
                            
                            export type source = Selection_
                            
                            export type get_id = Expression_
                            
                            export type get_entry = Expression_
                            
                            export type abort = Expression_
                            
                        }
                        
                        export type from_list = {
                            readonly 'source': from_list.source
                            readonly 'get id': from_list.get_id
                            readonly 'get entry': from_list.get_entry
                            readonly 'abort': from_list.abort
                        }
                        
                        export namespace literal {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export type l_entry = Expression_
                                    
                                }
                                
                                export type D = {
                                    readonly 'l location': D.l_location
                                    readonly 'l entry': D.l_entry
                                }
                                
                            }
                            
                            export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                            
                        }
                        
                        export type literal = {
                            readonly 'l location': literal.l_location
                            readonly 'l dictionary': literal.l_dictionary
                        }
                        
                        export namespace map {
                            
                            export type source = Selection_
                            
                            export type entry_handler = Expression_
                            
                        }
                        
                        export type map = {
                            readonly 'source': map.source
                            readonly 'entry handler': map.entry_handler
                        }
                        
                        export namespace resolve {
                            
                            export type source = Selection_
                            
                            export type entry_handler = Expression_
                            
                            export type temp_resulting_entry_node = Temp_Type_Node_Reference_
                            
                        }
                        
                        export type resolve = {
                            readonly 'source': resolve.source
                            readonly 'entry handler': resolve.entry_handler
                            readonly 'temp resulting entry node': resolve.temp_resulting_entry_node
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['filter', l_state.filter]
                        | readonly ['from list', l_state.from_list]
                        | readonly ['literal', l_state.literal]
                        | readonly ['map', l_state.map]
                        | readonly ['resolve', l_state.resolve]
                    
                }
                
                export type dictionary = {
                    readonly 'l location': dictionary.l_location
                    readonly 'l state': dictionary.l_state
                }
                
                export namespace group {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export namespace literal {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export type l_entry = Expression_
                                    
                                }
                                
                                export type D = {
                                    readonly 'l location': D.l_location
                                    readonly 'l entry': D.l_entry
                                }
                                
                            }
                            
                            export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                            
                        }
                        
                        export type literal = {
                            readonly 'l location': literal.l_location
                            readonly 'l dictionary': literal.l_dictionary
                        }
                        
                        export namespace resolve {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export type l_entry = Expression_
                                    
                                }
                                
                                export type D = {
                                    readonly 'l location': D.l_location
                                    readonly 'l entry': D.l_entry
                                }
                                
                            }
                            
                            export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                            
                        }
                        
                        export type resolve = {
                            readonly 'l location': resolve.l_location
                            readonly 'l dictionary': resolve.l_dictionary
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['literal', l_state.literal]
                        | readonly ['resolve', l_state.resolve]
                    
                }
                
                export type group = {
                    readonly 'l location': group.l_location
                    readonly 'l state': group.l_state
                }
                
                export namespace list {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export namespace filter {
                            
                            export type source = Selection_
                            
                            export type entry_handler = Expression_
                            
                        }
                        
                        export type filter = {
                            readonly 'source': filter.source
                            readonly 'entry handler': filter.entry_handler
                        }
                        
                        export namespace from_dictionary {
                            
                            export type source = Selection_
                            
                            export type get_item = Expression_
                            
                        }
                        
                        export type from_dictionary = {
                            readonly 'source': from_dictionary.source
                            readonly 'get item': from_dictionary.get_item
                        }
                        
                        export namespace literal {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_list {
                                
                                export namespace L {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export type l_item = Expression_
                                    
                                }
                                
                                export type L = {
                                    readonly 'l location': L.l_location
                                    readonly 'l item': L.l_item
                                }
                                
                            }
                            
                            export type l_list = _pi.List<l_list.L>
                            
                        }
                        
                        export type literal = {
                            readonly 'l location': literal.l_location
                            readonly 'l list': literal.l_list
                        }
                        
                        export namespace map {
                            
                            export type source = Selection_
                            
                            export type item_handler = Expression_
                            
                        }
                        
                        export type map = {
                            readonly 'source': map.source
                            readonly 'item handler': map.item_handler
                        }
                        
                        export namespace map_with_state {
                            
                            export type source = Selection_
                            
                            export type initial_state = Expression_
                            
                            export type item_handler = Expression_
                            
                            export type update_state = Expression_
                            
                            export type wrap_up = Expression_
                            
                        }
                        
                        export type map_with_state = {
                            readonly 'source': map_with_state.source
                            readonly 'initial state': map_with_state.initial_state
                            readonly 'item handler': map_with_state.item_handler
                            readonly 'update state': map_with_state.update_state
                            readonly 'wrap up': map_with_state.wrap_up
                        }
                        
                        export namespace reduce {
                            
                            export type source = Selection_
                            
                            export type initial_state = Expression_
                            
                            export type item_handler = Expression_
                            
                        }
                        
                        export type reduce = {
                            readonly 'source': reduce.source
                            readonly 'initial state': reduce.initial_state
                            readonly 'item handler': reduce.item_handler
                        }
                        
                        export namespace reverse {
                            
                            export type source = Selection_
                            
                        }
                        
                        export type reverse = {
                            readonly 'source': reverse.source
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['filter', l_state.filter]
                        | readonly ['from dictionary', l_state.from_dictionary]
                        | readonly ['literal', l_state.literal]
                        | readonly ['map', l_state.map]
                        | readonly ['map with state', l_state.map_with_state]
                        | readonly ['reduce', l_state.reduce]
                        | readonly ['reverse', l_state.reverse]
                    
                }
                
                export type list = {
                    readonly 'l location': list.l_location
                    readonly 'l state': list.l_state
                }
                
                export type nothing = null
                
                export namespace number_ {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export namespace approximation {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_state {
                                
                                export type literal = number
                                
                                export type copy = Selection_
                                
                            }
                            
                            export type l_state = 
                                | readonly ['literal', l_state.literal]
                                | readonly ['copy', l_state.copy]
                            
                        }
                        
                        export type approximation = {
                            readonly 'l location': approximation.l_location
                            readonly 'l state': approximation.l_state
                        }
                        
                        export namespace integer {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_state {
                                
                                export type copy = Selection_
                                
                                export namespace divide {
                                    
                                    export type divident = Selection_
                                    
                                    export type divisor = Selection_
                                    
                                    export type abort = Expression_
                                    
                                }
                                
                                export type divide = {
                                    readonly 'divident': divide.divident
                                    readonly 'divisor': divide.divisor
                                    readonly 'abort': divide.abort
                                }
                                
                                export type literal = number
                                
                            }
                            
                            export type l_state = 
                                | readonly ['copy', l_state.copy]
                                | readonly ['divide', l_state.divide]
                                | readonly ['literal', l_state.literal]
                            
                        }
                        
                        export type integer = {
                            readonly 'l location': integer.l_location
                            readonly 'l state': integer.l_state
                        }
                        
                        export namespace natural {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_state {
                                
                                export type literal = number
                                
                                export type copy = Selection_
                                
                                export namespace number_of_dictionary_entries {
                                    
                                    export type dictionary = Selection_
                                    
                                }
                                
                                export type number_of_dictionary_entries = {
                                    readonly 'dictionary': number_of_dictionary_entries.dictionary
                                }
                                
                                export namespace number_of_list_items {
                                    
                                    export type list = Selection_
                                    
                                }
                                
                                export type number_of_list_items = {
                                    readonly 'list': number_of_list_items.list
                                }
                                
                                export type source_column = null
                                
                                export type source_line = null
                                
                            }
                            
                            export type l_state = 
                                | readonly ['literal', l_state.literal]
                                | readonly ['copy', l_state.copy]
                                | readonly ['number of dictionary entries', l_state.number_of_dictionary_entries]
                                | readonly ['number of list items', l_state.number_of_list_items]
                                | readonly ['source column', l_state.source_column]
                                | readonly ['source line', l_state.source_line]
                            
                        }
                        
                        export type natural = {
                            readonly 'l location': natural.l_location
                            readonly 'l state': natural.l_state
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['approximation', l_state.approximation]
                        | readonly ['integer', l_state.integer]
                        | readonly ['natural', l_state.natural]
                    
                }
                
                export type number_ = {
                    readonly 'l location': number_.l_location
                    readonly 'l state': number_.l_state
                }
                
                export namespace optional {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export namespace from_boolean {
                            
                            export type source = Selection_
                            
                            export type get_set = Expression_
                            
                        }
                        
                        export type from_boolean = {
                            readonly 'source': from_boolean.source
                            readonly 'get set': from_boolean.get_set
                        }
                        
                        export namespace literal {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_state {
                                
                                export type not_set = null
                                
                                export type set_ = Expression_
                                
                            }
                            
                            export type l_state = 
                                | readonly ['not set', l_state.not_set]
                                | readonly ['set', l_state.set_]
                            
                        }
                        
                        export type literal = {
                            readonly 'l location': literal.l_location
                            readonly 'l state': literal.l_state
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
                    
                    export type l_state = 
                        | readonly ['from boolean', l_state.from_boolean]
                        | readonly ['literal', l_state.literal]
                        | readonly ['map', l_state.map]
                    
                }
                
                export type optional = {
                    readonly 'l location': optional.l_location
                    readonly 'l state': optional.l_state
                }
                
                export namespace state {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export namespace literal {
                            
                            export type option = string
                            
                            export type value = Expression_
                            
                        }
                        
                        export type literal = {
                            readonly 'option': literal.option
                            readonly 'value': literal.value
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['literal', l_state.literal]
                    
                }
                
                export type state = {
                    readonly 'l location': state.l_location
                    readonly 'l state': state.l_state
                }
                
                export namespace text {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export type copy = Selection_
                        
                        export namespace literal {
                            
                            export namespace type_ {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_state {
                                    
                                    export type identifier = null
                                    
                                    export type freeform = null
                                    
                                }
                                
                                export type l_state = 
                                    | readonly ['identifier', l_state.identifier]
                                    | readonly ['freeform', l_state.freeform]
                                
                            }
                            
                            export type type_ = {
                                readonly 'l location': type_.l_location
                                readonly 'l state': type_.l_state
                            }
                            
                            export type value = string
                            
                        }
                        
                        export type literal = {
                            readonly 'type': literal.type_
                            readonly 'value': literal.value
                        }
                        
                        export type source_document = null
                        
                    }
                    
                    export type l_state = 
                        | readonly ['copy', l_state.copy]
                        | readonly ['literal', l_state.literal]
                        | readonly ['source document', l_state.source_document]
                    
                }
                
                export type text = {
                    readonly 'l location': text.l_location
                    readonly 'l state': text.l_state
                }
                
            }
            
            export type l_state = 
                | readonly ['boolean', l_state.boolean_]
                | readonly ['dictionary', l_state.dictionary]
                | readonly ['group', l_state.group]
                | readonly ['list', l_state.list]
                | readonly ['nothing', l_state.nothing]
                | readonly ['number', l_state.number_]
                | readonly ['optional', l_state.optional]
                | readonly ['state', l_state.state]
                | readonly ['text', l_state.text]
            
        }
        
        export type initialize = {
            readonly 'l location': initialize.l_location
            readonly 'l state': initialize.l_state
        }
        
        export type select = Selection_
        
        export namespace special {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export type abort = Expression_
                
                export namespace assert {
                    
                    export type tester = Expression_
                    
                    export type normal_flow = Expression_
                    
                }
                
                export type assert = {
                    readonly 'tester': assert.tester
                    readonly 'normal flow': assert.normal_flow
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
                
                export namespace iterate {
                    
                    export type list = Selection_
                    
                    export type handler = Expression_
                    
                }
                
                export type iterate = {
                    readonly 'list': iterate.list
                    readonly 'handler': iterate.handler
                }
                
                export type unreachable = null
                
            }
            
            export type l_state = 
                | readonly ['abort', l_state.abort]
                | readonly ['assert', l_state.assert]
                | readonly ['change context', l_state.change_context]
                | readonly ['implement me', l_state.implement_me]
                | readonly ['iterate', l_state.iterate]
                | readonly ['unreachable', l_state.unreachable]
            
        }
        
        export type special = {
            readonly 'l location': special.l_location
            readonly 'l state': special.l_state
        }
        
    }
    
    export type l_state = 
        | readonly ['decide', l_state.decide]
        | readonly ['initialize', l_state.initialize]
        | readonly ['select', l_state.select]
        | readonly ['special', l_state.special]
    
}

export type Expression_ = {
    readonly 'l location': Expression_.l_location
    readonly 'l state': Expression_.l_state
}

export namespace Lookup_Selection_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export type implement_me = string
        
        export type from_resolved_dictionary = Selection_
        
        export namespace from_siblings {
            
            export type cycles_allowed = boolean
            
        }
        
        export type from_siblings = {
            readonly 'cycles allowed': from_siblings.cycles_allowed
        }
        
        export type from_parameter = string
        
        export type not_set = null
        
    }
    
    export type l_state = 
        | readonly ['implement me', l_state.implement_me]
        | readonly ['from resolved dictionary', l_state.from_resolved_dictionary]
        | readonly ['from siblings', l_state.from_siblings]
        | readonly ['from parameter', l_state.from_parameter]
        | readonly ['not set', l_state.not_set]
    
}

export type Lookup_Selection_ = {
    readonly 'l location': Lookup_Selection_.l_location
    readonly 'l state': Lookup_Selection_.l_state
}

export { 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Temp_Type_Node_Reference_ as Temp_Type_Node_Reference, 
    Selection_ as Selection, 
    Expression_ as Expression, 
    Lookup_Selection_ as Lookup_Selection, 
}
