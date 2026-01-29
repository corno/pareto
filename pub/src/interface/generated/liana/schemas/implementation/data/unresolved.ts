
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

import * as i__imports_interface from "../../interface/data/unresolved"

export namespace Module_ {
    
    export namespace type_ {
        
        export type location = i__location.Relative_Location
        
        export namespace state {
            
            export type serializer = null
            
            export type deserializer = null
            
            export type transformer = null
            
            export type refiner = null
            
        }
        
        export type state = 
            | readonly ['serializer', state.serializer]
            | readonly ['deserializer', state.deserializer]
            | readonly ['transformer', state.transformer]
            | readonly ['refiner', state.refiner]
        
    }
    
    export type type_ = {
        readonly 'location': type_.location
        readonly 'state': type_.state
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
        
        export type location = i__location.Relative_Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace entry {
                    
                    export namespace tail {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace list {
                            
                            export namespace L {
                                
                                export type location = i__location.Relative_Location
                                
                                export type item = string
                                
                            }
                            
                            export type L = {
                                readonly 'location': L.location
                                readonly 'item': L.item
                            }
                            
                        }
                        
                        export type list = _pi.List<list.L>
                        
                    }
                    
                    export type tail = {
                        readonly 'location': tail.location
                        readonly 'list': tail.list
                    }
                    
                    export namespace type_ {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace state {
                            
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
                        
                        export type state = 
                            | readonly ['ancestor', state.ancestor]
                            | readonly ['external', state.external]
                            | readonly ['sibling', state.sibling]
                        
                    }
                    
                    export type type_ = {
                        readonly 'location': type_.location
                        readonly 'state': type_.state
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
        
        export type location = i__location.Relative_Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace entry {
                    
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
                
                export type entry = {
                    readonly 'type': entry.type_
                    readonly 'expression': entry.expression
                    readonly 'temp has abort': entry.temp_has_abort
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
    readonly 'specials': Module_.specials
    readonly 'type imports': Module_.type_imports
    readonly 'variable imports': Module_.variable_imports
    readonly 'algorithms': Module_.algorithms
}

export namespace Module_Set_ {
    
    export type location = i__location.Relative_Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Relative_Location
            
            export namespace entry {
                
                export type location = i__location.Relative_Location
                
                export namespace state {
                    
                    export type module_ = Module_
                    
                    export type set_ = Module_Set_
                    
                }
                
                export type state = 
                    | readonly ['module', state.module_]
                    | readonly ['set', state.set_]
                
            }
            
            export type entry = {
                readonly 'location': entry.location
                readonly 'state': entry.state
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
        
        export type location = i__location.Relative_Location
        
        export namespace list {
            
            export namespace L {
                
                export type location = i__location.Relative_Location
                
                export namespace item {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
                        export type dictionary = null
                        
                        export type group = string
                        
                        export type list = null
                        
                        export type optional = null
                        
                        export type state = string
                        
                    }
                    
                    export type state = 
                        | readonly ['dictionary', state.dictionary]
                        | readonly ['group', state.group]
                        | readonly ['list', state.list]
                        | readonly ['optional', state.optional]
                        | readonly ['state', state.state]
                    
                }
                
                export type item = {
                    readonly 'location': item.location
                    readonly 'state': item.state
                }
                
            }
            
            export type L = {
                readonly 'location': L.location
                readonly 'item': L.item
            }
            
        }
        
        export type list = _pi.List<list.L>
        
    }
    
    export type sub_selection = {
        readonly 'location': sub_selection.location
        readonly 'list': sub_selection.list
    }
    
}

export type Temp_Type_Node_Reference_ = {
    readonly 'type': Temp_Type_Node_Reference_.type_
    readonly 'sub selection': Temp_Type_Node_Reference_.sub_selection
}

export namespace Selection_ {
    
    export type location = i__location.Relative_Location
    
    export namespace state {
        
        export type implement_me = string
        
        export namespace regular {
            
            export namespace start {
                
                export type location = i__location.Relative_Location
                
                export namespace state {
                    
                    export namespace call {
                        
                        export type source = Selection_
                        
                        export type context = Expression_
                        
                        export namespace abort {
                            
                            export type O = Expression_
                            
                        }
                        
                        export type abort = _pi.Optional_Value<abort.O>
                        
                        export namespace arguments_ {
                            
                            export namespace O {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace dictionary {
                                    
                                    export namespace D {
                                        
                                        export type location = i__location.Relative_Location
                                        
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
                        readonly 'abort': call.abort
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
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace state {
                            
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
                        
                        export type state = 
                            | readonly ['local', state.local]
                            | readonly ['imported', state.imported]
                        
                    }
                    
                    export type variable = {
                        readonly 'location': variable.location
                        readonly 'state': variable.state
                    }
                    
                    export type parameter = string
                    
                }
                
                export type state = 
                    | readonly ['call', state.call]
                    | readonly ['context', state.context]
                    | readonly ['entry', state.entry]
                    | readonly ['variable', state.variable]
                    | readonly ['parameter', state.parameter]
                
            }
            
            export type start = {
                readonly 'location': start.location
                readonly 'state': start.state
            }
            
            export namespace tail {
                
                export type location = i__location.Relative_Location
                
                export namespace list {
                    
                    export namespace L {
                        
                        export type location = i__location.Relative_Location
                        
                        export type item = string
                        
                    }
                    
                    export type L = {
                        readonly 'location': L.location
                        readonly 'item': L.item
                    }
                    
                }
                
                export type list = _pi.List<list.L>
                
            }
            
            export type tail = {
                readonly 'location': tail.location
                readonly 'list': tail.list
            }
            
        }
        
        export type regular = {
            readonly 'start': regular.start
            readonly 'tail': regular.tail
        }
        
    }
    
    export type state = 
        | readonly ['implement me', state.implement_me]
        | readonly ['regular', state.regular]
    
}

export type Selection_ = {
    readonly 'location': Selection_.location
    readonly 'state': Selection_.state
}

export namespace Expression_ {
    
    export type location = i__location.Relative_Location
    
    export namespace state {
        
        export namespace decide {
            
            export namespace type_ {
                
                export type location = i__location.Relative_Location
                
                export namespace state {
                    
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
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace state {
                            
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
                        
                        export type state = 
                            | readonly ['has entries', state.has_entries]
                        
                    }
                    
                    export type dictionary = {
                        readonly 'location': dictionary.location
                        readonly 'state': dictionary.state
                    }
                    
                    export namespace list {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace state {
                            
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
                        
                        export type state = 
                            | readonly ['has first item', state.has_first_item]
                            | readonly ['has last item', state.has_last_item]
                            | readonly ['has items', state.has_items]
                        
                    }
                    
                    export type list = {
                        readonly 'location': list.location
                        readonly 'state': list.state
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
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace state {
                                
                                export namespace partial {
                                    
                                    export namespace options {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace dictionary {
                                            
                                            export namespace D {
                                                
                                                export type location = i__location.Relative_Location
                                                
                                                export type entry = Expression_
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'location': D.location
                                                readonly 'entry': D.entry
                                            }
                                            
                                        }
                                        
                                        export type dictionary = _pi.Dictionary<dictionary.D>
                                        
                                    }
                                    
                                    export type options = {
                                        readonly 'location': options.location
                                        readonly 'dictionary': options.dictionary
                                    }
                                    
                                    export type default_ = Expression_
                                    
                                }
                                
                                export type partial = {
                                    readonly 'options': partial.options
                                    readonly 'default': partial.default_
                                }
                                
                                export namespace full {
                                    
                                    export namespace options {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace dictionary {
                                            
                                            export namespace D {
                                                
                                                export type location = i__location.Relative_Location
                                                
                                                export type entry = Expression_
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'location': D.location
                                                readonly 'entry': D.entry
                                            }
                                            
                                        }
                                        
                                        export type dictionary = _pi.Dictionary<dictionary.D>
                                        
                                    }
                                    
                                    export type options = {
                                        readonly 'location': options.location
                                        readonly 'dictionary': options.dictionary
                                    }
                                    
                                }
                                
                                export type full = {
                                    readonly 'options': full.options
                                }
                                
                            }
                            
                            export type state = 
                                | readonly ['partial', state.partial]
                                | readonly ['full', state.full]
                            
                        }
                        
                        export type type_ = {
                            readonly 'location': type_.location
                            readonly 'state': type_.state
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
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Relative_Location
                                    
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
                    
                    export type text = {
                        readonly 'source': text.source
                        readonly 'temp resulting node': text.temp_resulting_node
                        readonly 'cases': text.cases
                        readonly 'default': text.default_
                    }
                    
                }
                
                export type state = 
                    | readonly ['boolean', state.boolean_]
                    | readonly ['dictionary', state.dictionary]
                    | readonly ['list', state.list]
                    | readonly ['optional', state.optional]
                    | readonly ['state', state.state]
                    | readonly ['text', state.text]
                
            }
            
            export type type_ = {
                readonly 'location': type_.location
                readonly 'state': type_.state
            }
            
        }
        
        export type decide = {
            readonly 'type': decide.type_
        }
        
        export namespace initialize {
            
            export type location = i__location.Relative_Location
            
            export namespace state {
                
                export namespace boolean_ {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
                        export namespace literal {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace state {
                                
                                export type false_ = null
                                
                                export type true_ = null
                                
                            }
                            
                            export type state = 
                                | readonly ['false', state.false_]
                                | readonly ['true', state.true_]
                            
                        }
                        
                        export type literal = {
                            readonly 'location': literal.location
                            readonly 'state': literal.state
                        }
                        
                        export type not = Selection_
                        
                        export type copy = Selection_
                        
                        export type dictionary_is_empty = Selection_
                        
                        export type list_is_empty = Selection_
                        
                    }
                    
                    export type state = 
                        | readonly ['literal', state.literal]
                        | readonly ['not', state.not]
                        | readonly ['copy', state.copy]
                        | readonly ['dictionary is empty', state.dictionary_is_empty]
                        | readonly ['list is empty', state.list_is_empty]
                    
                }
                
                export type boolean_ = {
                    readonly 'location': boolean_.location
                    readonly 'state': boolean_.state
                }
                
                export namespace dictionary {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
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
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Relative_Location
                                    
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
                        
                        export namespace resolve {
                            
                            export type source = Selection_
                            
                            export type entry_handler = Expression_
                            
                        }
                        
                        export type resolve = {
                            readonly 'source': resolve.source
                            readonly 'entry handler': resolve.entry_handler
                        }
                        
                    }
                    
                    export type state = 
                        | readonly ['filter', state.filter]
                        | readonly ['from list', state.from_list]
                        | readonly ['literal', state.literal]
                        | readonly ['map', state.map]
                        | readonly ['resolve', state.resolve]
                    
                }
                
                export type dictionary = {
                    readonly 'location': dictionary.location
                    readonly 'state': dictionary.state
                }
                
                export namespace group {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
                        export namespace literal {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Relative_Location
                                    
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
                        
                        export namespace resolve {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type entry = Expression_
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly 'entry': D.entry
                                }
                                
                            }
                            
                            export type dictionary = _pi.Dictionary<dictionary.D>
                            
                        }
                        
                        export type resolve = {
                            readonly 'location': resolve.location
                            readonly 'dictionary': resolve.dictionary
                        }
                        
                    }
                    
                    export type state = 
                        | readonly ['literal', state.literal]
                        | readonly ['resolve', state.resolve]
                    
                }
                
                export type group = {
                    readonly 'location': group.location
                    readonly 'state': group.state
                }
                
                export namespace list {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
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
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace list {
                                
                                export namespace L {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type item = Expression_
                                    
                                }
                                
                                export type L = {
                                    readonly 'location': L.location
                                    readonly 'item': L.item
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
                    
                    export type state = 
                        | readonly ['filter', state.filter]
                        | readonly ['from dictionary', state.from_dictionary]
                        | readonly ['literal', state.literal]
                        | readonly ['map', state.map]
                        | readonly ['map with state', state.map_with_state]
                        | readonly ['reduce', state.reduce]
                        | readonly ['reverse', state.reverse]
                    
                }
                
                export type list = {
                    readonly 'location': list.location
                    readonly 'state': list.state
                }
                
                export type nothing = null
                
                export namespace number_ {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
                        export namespace approximation {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace state {
                                
                                export type literal = number
                                
                                export type copy = Selection_
                                
                            }
                            
                            export type state = 
                                | readonly ['literal', state.literal]
                                | readonly ['copy', state.copy]
                            
                        }
                        
                        export type approximation = {
                            readonly 'location': approximation.location
                            readonly 'state': approximation.state
                        }
                        
                        export namespace integer {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace state {
                                
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
                            
                            export type state = 
                                | readonly ['copy', state.copy]
                                | readonly ['divide', state.divide]
                                | readonly ['literal', state.literal]
                            
                        }
                        
                        export type integer = {
                            readonly 'location': integer.location
                            readonly 'state': integer.state
                        }
                        
                        export namespace natural {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace state {
                                
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
                            
                            export type state = 
                                | readonly ['literal', state.literal]
                                | readonly ['copy', state.copy]
                                | readonly ['number of dictionary entries', state.number_of_dictionary_entries]
                                | readonly ['number of list items', state.number_of_list_items]
                                | readonly ['source column', state.source_column]
                                | readonly ['source line', state.source_line]
                            
                        }
                        
                        export type natural = {
                            readonly 'location': natural.location
                            readonly 'state': natural.state
                        }
                        
                    }
                    
                    export type state = 
                        | readonly ['approximation', state.approximation]
                        | readonly ['integer', state.integer]
                        | readonly ['natural', state.natural]
                    
                }
                
                export type number_ = {
                    readonly 'location': number_.location
                    readonly 'state': number_.state
                }
                
                export namespace optional {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
                        export namespace from_boolean {
                            
                            export type source = Selection_
                            
                            export type get_set = Expression_
                            
                        }
                        
                        export type from_boolean = {
                            readonly 'source': from_boolean.source
                            readonly 'get set': from_boolean.get_set
                        }
                        
                        export namespace literal {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace state {
                                
                                export type not_set = null
                                
                                export type set_ = Expression_
                                
                            }
                            
                            export type state = 
                                | readonly ['not set', state.not_set]
                                | readonly ['set', state.set_]
                            
                        }
                        
                        export type literal = {
                            readonly 'location': literal.location
                            readonly 'state': literal.state
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
                    
                    export type state = 
                        | readonly ['from boolean', state.from_boolean]
                        | readonly ['literal', state.literal]
                        | readonly ['map', state.map]
                    
                }
                
                export type optional = {
                    readonly 'location': optional.location
                    readonly 'state': optional.state
                }
                
                export namespace state {
                    
                    export type location = i__location.Relative_Location
                    
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
                    
                }
                
                export type state = {
                    readonly 'location': state.location
                    readonly 'state': state.state
                }
                
                export namespace text {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
                        export type copy = Selection_
                        
                        export namespace literal {
                            
                            export namespace type_ {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace state {
                                    
                                    export type identifier = null
                                    
                                    export type freeform = null
                                    
                                }
                                
                                export type state = 
                                    | readonly ['identifier', state.identifier]
                                    | readonly ['freeform', state.freeform]
                                
                            }
                            
                            export type type_ = {
                                readonly 'location': type_.location
                                readonly 'state': type_.state
                            }
                            
                            export type value = string
                            
                        }
                        
                        export type literal = {
                            readonly 'type': literal.type_
                            readonly 'value': literal.value
                        }
                        
                        export type source_document = null
                        
                    }
                    
                    export type state = 
                        | readonly ['copy', state.copy]
                        | readonly ['literal', state.literal]
                        | readonly ['source document', state.source_document]
                    
                }
                
                export type text = {
                    readonly 'location': text.location
                    readonly 'state': text.state
                }
                
            }
            
            export type state = 
                | readonly ['boolean', state.boolean_]
                | readonly ['dictionary', state.dictionary]
                | readonly ['group', state.group]
                | readonly ['list', state.list]
                | readonly ['nothing', state.nothing]
                | readonly ['number', state.number_]
                | readonly ['optional', state.optional]
                | readonly ['state', state.state]
                | readonly ['text', state.text]
            
        }
        
        export type initialize = {
            readonly 'location': initialize.location
            readonly 'state': initialize.state
        }
        
        export type select = Selection_
        
        export namespace special {
            
            export type location = i__location.Relative_Location
            
            export namespace state {
                
                export type abort = Expression_
                
                export namespace assert {
                    
                    export type tester = Expression_
                    
                    export type normal_flow = Expression_
                    
                }
                
                export type assert = {
                    readonly 'tester': assert.tester
                    readonly 'normal flow': assert.normal_flow
                }
                
                export namespace block {
                    
                    export namespace variables {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace entry {
                                    
                                    export namespace type_ {
                                        
                                        export type O = Temp_Type_Node_Reference_
                                        
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
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace list {
                            
                            export namespace L {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace item {
                                    
                                    export type name = string
                                    
                                    export namespace type_ {
                                        
                                        export type O = Temp_Type_Node_Reference_
                                        
                                    }
                                    
                                    export type type_ = _pi.Optional_Value<type_.O>
                                    
                                    export type expression = Expression_
                                    
                                }
                                
                                export type item = {
                                    readonly 'name': item.name
                                    readonly 'type': item.type_
                                    readonly 'expression': item.expression
                                }
                                
                            }
                            
                            export type L = {
                                readonly 'location': L.location
                                readonly 'item': L.item
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
            
            export type state = 
                | readonly ['abort', state.abort]
                | readonly ['assert', state.assert]
                | readonly ['block', state.block]
                | readonly ['change context', state.change_context]
                | readonly ['implement me', state.implement_me]
                | readonly ['iterate', state.iterate]
                | readonly ['unreachable', state.unreachable]
            
        }
        
        export type special = {
            readonly 'location': special.location
            readonly 'state': special.state
        }
        
    }
    
    export type state = 
        | readonly ['decide', state.decide]
        | readonly ['initialize', state.initialize]
        | readonly ['select', state.select]
        | readonly ['special', state.special]
    
}

export type Expression_ = {
    readonly 'location': Expression_.location
    readonly 'state': Expression_.state
}

export { 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Temp_Type_Node_Reference_ as Temp_Type_Node_Reference, 
    Selection_ as Selection, 
    Expression_ as Expression, 
}
