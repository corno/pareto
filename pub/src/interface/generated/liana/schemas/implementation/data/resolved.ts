
import * as _pi from "pareto-core/dist/interface"

import * as i__imports_interface from "../../interface/data/resolved"

export namespace Package_Set_ {
    
    export namespace D {
        
        export type package_ = Package_
        
        export type set_ = Package_Set_
        
    }
    
    export type D = 
        | readonly ['package', D.package_]
        | readonly ['set', D.set_]
    
}

export type Package_Set_ = _pi.Dictionary<Package_Set_.D>

export namespace Package_ {
    
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
    
    export namespace specials {
        
        export type abort = boolean
        
        export type change_context = boolean
        
        export type implement_me = boolean
        
        export type iterate = boolean
        
        export type lookups = boolean
        
        export type unreachable_code_path = boolean
        
        export type variables = boolean
        
    }
    
    export type specials = {
        readonly 'abort': specials.abort
        readonly 'change context': specials.change_context
        readonly 'implement me': specials.implement_me
        readonly 'iterate': specials.iterate
        readonly 'lookups': specials.lookups
        readonly 'unreachable code path': specials.unreachable_code_path
        readonly 'variables': specials.variables
    }
    
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

export type Package_ = {
    readonly 'type': Package_.type_
    readonly 'specials': Package_.specials
    readonly 'type imports': Package_.type_imports
    readonly 'variable imports': Package_.variable_imports
    readonly 'algorithms': Package_.algorithms
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

export type Temp_Type_Node_Reference_ = {
    readonly 'type': Temp_Type_Node_Reference_.type_
    readonly 'sub selection': Temp_Type_Node_Reference_.sub_selection
}

export namespace Expression_ {
    
    export namespace decide {
        
        export namespace type_ {
            
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
            
            export type dictionary = 
                | readonly ['has entries', dictionary.has_entries]
            
            export namespace list {
                
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
            
            export type list = 
                | readonly ['has first item', list.has_first_item]
                | readonly ['has last item', list.has_last_item]
                | readonly ['has items', list.has_items]
            
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
                    
                    export namespace partial {
                        
                        export namespace options {
                            
                            export type D = Expression_
                            
                        }
                        
                        export type options = _pi.Dictionary<options.D>
                        
                        export type default_ = Expression_
                        
                    }
                    
                    export type partial = {
                        readonly 'options': partial.options
                        readonly 'default': partial.default_
                    }
                    
                    export namespace full {
                        
                        export namespace options {
                            
                            export type D = Expression_
                            
                        }
                        
                        export type options = _pi.Dictionary<options.D>
                        
                    }
                    
                    export type full = {
                        readonly 'options': full.options
                    }
                    
                    export namespace single {
                        
                        export type option = string
                        
                        export type if_true = Expression_
                        
                        export type if_false = Expression_
                        
                    }
                    
                    export type single = {
                        readonly 'option': single.option
                        readonly 'if true': single.if_true
                        readonly 'if false': single.if_false
                    }
                    
                }
                
                export type type_ = 
                    | readonly ['partial', type_.partial]
                    | readonly ['full', type_.full]
                    | readonly ['single', type_.single]
                
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
                    
                    export type D = Expression_
                    
                }
                
                export type cases = _pi.Dictionary<cases.D>
                
                export type default_ = Expression_
                
            }
            
            export type text = {
                readonly 'source': text.source
                readonly 'temp resulting node': text.temp_resulting_node
                readonly 'cases': text.cases
                readonly 'default': text.default_
            }
            
        }
        
        export type type_ = 
            | readonly ['boolean', type_.boolean_]
            | readonly ['dictionary', type_.dictionary]
            | readonly ['list', type_.list]
            | readonly ['optional', type_.optional]
            | readonly ['state', type_.state]
            | readonly ['text', type_.text]
        
    }
    
    export type decide = {
        readonly 'type': decide.type_
    }
    
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
            
            export type copy = Selection_
            
            export type dictionary_is_empty = Selection_
            
            export type list_is_empty = Selection_
            
        }
        
        export type boolean_ = 
            | readonly ['literal', boolean_.literal]
            | readonly ['not', boolean_.not]
            | readonly ['copy', boolean_.copy]
            | readonly ['dictionary is empty', boolean_.dictionary_is_empty]
            | readonly ['list is empty', boolean_.list_is_empty]
        
        export namespace dictionary {
            
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
        
        export type dictionary = 
            | readonly ['filter', dictionary.filter]
            | readonly ['from list', dictionary.from_list]
            | readonly ['literal', dictionary.literal]
            | readonly ['map', dictionary.map]
            | readonly ['resolve', dictionary.resolve]
        
        export namespace group {
            
            export namespace literal {
                
                export type D = Expression_
                
            }
            
            export type literal = _pi.Dictionary<literal.D>
            
            export namespace resolve {
                
                export type D = Expression_
                
            }
            
            export type resolve = _pi.Dictionary<resolve.D>
            
        }
        
        export type group = 
            | readonly ['literal', group.literal]
            | readonly ['resolve', group.resolve]
        
        export namespace list {
            
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
        
        export type list = 
            | readonly ['filter', list.filter]
            | readonly ['from dictionary', list.from_dictionary]
            | readonly ['literal', list.literal]
            | readonly ['map', list.map]
            | readonly ['map with state', list.map_with_state]
            | readonly ['reduce', list.reduce]
            | readonly ['reverse', list.reverse]
        
        export type nothing = null
        
        export namespace number_ {
            
            export namespace approximation {
                
                export type literal = number
                
                export type copy = Selection_
                
            }
            
            export type approximation = 
                | readonly ['literal', approximation.literal]
                | readonly ['copy', approximation.copy]
            
            export namespace integer {
                
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
            
            export type integer = 
                | readonly ['copy', integer.copy]
                | readonly ['divide', integer.divide]
                | readonly ['literal', integer.literal]
            
            export namespace natural {
                
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
            
            export type natural = 
                | readonly ['literal', natural.literal]
                | readonly ['copy', natural.copy]
                | readonly ['number of dictionary entries', natural.number_of_dictionary_entries]
                | readonly ['number of list items', natural.number_of_list_items]
                | readonly ['source column', natural.source_column]
                | readonly ['source line', natural.source_line]
            
        }
        
        export type number_ = 
            | readonly ['approximation', number_.approximation]
            | readonly ['integer', number_.integer]
            | readonly ['natural', number_.natural]
        
        export namespace optional {
            
            export namespace from_boolean {
                
                export type source = Selection_
                
                export type get_set = Expression_
                
            }
            
            export type from_boolean = {
                readonly 'source': from_boolean.source
                readonly 'get set': from_boolean.get_set
            }
            
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
            | readonly ['from boolean', optional.from_boolean]
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
            
            export type copy = Selection_
            
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
            
            export type source_document = null
            
        }
        
        export type text = 
            | readonly ['copy', text.copy]
            | readonly ['literal', text.literal]
            | readonly ['source document', text.source_document]
        
    }
    
    export type initialize = 
        | readonly ['boolean', initialize.boolean_]
        | readonly ['dictionary', initialize.dictionary]
        | readonly ['group', initialize.group]
        | readonly ['list', initialize.list]
        | readonly ['nothing', initialize.nothing]
        | readonly ['number', initialize.number_]
        | readonly ['optional', initialize.optional]
        | readonly ['state', initialize.state]
        | readonly ['text', initialize.text]
    
    export type select = Selection_
    
    export namespace special {
        
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
        
        export namespace variables {
            
            export namespace variables {
                
                export type D = Expression_
                
            }
            
            export type variables = _pi.Dictionary<variables.D>
            
            export type callback = Expression_
            
        }
        
        export type variables = {
            readonly 'variables': variables.variables
            readonly 'callback': variables.callback
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
    
    export type special = 
        | readonly ['abort', special.abort]
        | readonly ['assert', special.assert]
        | readonly ['change context', special.change_context]
        | readonly ['variables', special.variables]
        | readonly ['implement me', special.implement_me]
        | readonly ['iterate', special.iterate]
        | readonly ['unreachable', special.unreachable]
    
}

export type Expression_ = 
    | readonly ['decide', Expression_.decide]
    | readonly ['initialize', Expression_.initialize]
    | readonly ['select', Expression_.select]
    | readonly ['special', Expression_.special]

export namespace Selection_ {
    
    export type implement_me = string
    
    export namespace regular {
        
        export namespace start {
            
            export namespace call {
                
                export namespace source {
                    
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
                
                export type source = 
                    | readonly ['local', source.local]
                    | readonly ['imported', source.imported]
                
                export type context = Expression_
                
                export namespace abort {
                    
                    export type O = Expression_
                    
                }
                
                export type abort = _pi.Optional_Value<abort.O>
                
                export namespace lookups {
                    
                    export namespace O {
                        
                        export namespace initialize {
                            
                            export type D = Lookup_Selection_
                            
                        }
                        
                        export type initialize = _pi.Dictionary<initialize.D>
                        
                        export type pass_through = null
                        
                    }
                    
                    export type O = 
                        | readonly ['initialize', O.initialize]
                        | readonly ['pass through', O.pass_through]
                    
                }
                
                export type lookups = _pi.Optional_Value<lookups.O>
                
                export namespace arguments_ {
                    
                    export namespace O {
                        
                        export namespace initialize {
                            
                            export type D = Expression_
                            
                        }
                        
                        export type initialize = _pi.Dictionary<initialize.D>
                        
                        export type pass_through = null
                        
                    }
                    
                    export type O = 
                        | readonly ['initialize', O.initialize]
                        | readonly ['pass through', O.pass_through]
                    
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
            
            export namespace dictionary_entry {
                
                export type dictionary = Selection_
                
                export type id = Expression_
                
                export type abort_handler = Expression_
                
            }
            
            export type dictionary_entry = {
                readonly 'dictionary': dictionary_entry.dictionary
                readonly 'id': dictionary_entry.id
                readonly 'abort handler': dictionary_entry.abort_handler
            }
            
            export namespace lookup_entry {
                
                export type lookup = Lookup_Selection_
                
                export type id = Expression_
                
                export namespace abort_handlers {
                    
                    export type no_such_entry = Expression_
                    
                    export type no_context_lookup = Expression_
                    
                    export type cycle_detected = Expression_
                    
                }
                
                export type abort_handlers = {
                    readonly 'no such entry': abort_handlers.no_such_entry
                    readonly 'no context lookup': abort_handlers.no_context_lookup
                    readonly 'cycle detected': abort_handlers.cycle_detected
                }
                
            }
            
            export type lookup_entry = {
                readonly 'lookup': lookup_entry.lookup
                readonly 'id': lookup_entry.id
                readonly 'abort handlers': lookup_entry.abort_handlers
            }
            
            export namespace lookup_entry_depth {
                
                export type lookup = Lookup_Selection_
                
                export type id = Expression_
                
                export namespace abort_handlers {
                    
                    export type no_such_entry = Expression_
                    
                    export type no_context_lookup = Expression_
                    
                    export type cycle_detected = Expression_
                    
                }
                
                export type abort_handlers = {
                    readonly 'no such entry': abort_handlers.no_such_entry
                    readonly 'no context lookup': abort_handlers.no_context_lookup
                    readonly 'cycle detected': abort_handlers.cycle_detected
                }
                
            }
            
            export type lookup_entry_depth = {
                readonly 'lookup': lookup_entry_depth.lookup
                readonly 'id': lookup_entry_depth.id
                readonly 'abort handlers': lookup_entry_depth.abort_handlers
            }
            
            export type parameter = string
            
            export type parent_sibling = string
            
            export type sibling = string
            
            export type state = null
            
            export type variable = string
            
        }
        
        export type start = 
            | readonly ['call', start.call]
            | readonly ['context', start.context]
            | readonly ['dictionary entry', start.dictionary_entry]
            | readonly ['lookup entry', start.lookup_entry]
            | readonly ['lookup entry depth', start.lookup_entry_depth]
            | readonly ['parameter', start.parameter]
            | readonly ['parent sibling', start.parent_sibling]
            | readonly ['sibling', start.sibling]
            | readonly ['state', start.state]
            | readonly ['variable', start.variable]
        
        export namespace tail {
            
            export type L = string
            
        }
        
        export type tail = _pi.List<tail.L>
        
    }
    
    export type regular = {
        readonly 'start': regular.start
        readonly 'tail': regular.tail
    }
    
}

export type Selection_ = 
    | readonly ['implement me', Selection_.implement_me]
    | readonly ['regular', Selection_.regular]

export namespace Lookup_Selection_ {
    
    export type implement_me = string
    
    export type from_parameter = string
    
    export namespace stack {
        
        export type empty = null
        
        export namespace push {
            
            export type stack = Lookup_Selection_
            
            export type acyclic = Lookup_Selection_
            
        }
        
        export type push = {
            readonly 'stack': push.stack
            readonly 'acyclic': push.acyclic
        }
        
    }
    
    export type stack = 
        | readonly ['empty', stack.empty]
        | readonly ['push', stack.push]
    
    export namespace acyclic {
        
        export type not_set = null
        
        export type siblings = null
        
        export type resolved_dictionary = Selection_
        
    }
    
    export type acyclic = 
        | readonly ['not set', acyclic.not_set]
        | readonly ['siblings', acyclic.siblings]
        | readonly ['resolved dictionary', acyclic.resolved_dictionary]
    
    export namespace cyclic {
        
        export type not_set = null
        
        export type siblings = null
        
    }
    
    export type cyclic = 
        | readonly ['not set', cyclic.not_set]
        | readonly ['siblings', cyclic.siblings]
    
}

export type Lookup_Selection_ = 
    | readonly ['implement me', Lookup_Selection_.implement_me]
    | readonly ['from parameter', Lookup_Selection_.from_parameter]
    | readonly ['stack', Lookup_Selection_.stack]
    | readonly ['acyclic', Lookup_Selection_.acyclic]
    | readonly ['cyclic', Lookup_Selection_.cyclic]

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Temp_Type_Node_Reference_ as Temp_Type_Node_Reference, 
    Expression_ as Expression, 
    Selection_ as Selection, 
    Lookup_Selection_ as Lookup_Selection, 
}
