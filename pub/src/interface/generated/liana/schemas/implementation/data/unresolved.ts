
import * as _pi from 'pareto-core/dist/interface'

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

import * as i__imports_interface from "../../interface/data/unresolved"

export namespace Package_Set_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export type package_ = Package_
                    
                    export type set_ = Package_Set_
                    
                }
                
                export type l_state = 
                    | readonly ['package', l_state.package_]
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

export type Package_Set_ = {
    readonly 'l location': Package_Set_.l_location
    readonly 'l dictionary': Package_Set_.l_dictionary
}

export namespace Package_ {
    
    export namespace specials {
        
        export type abort = boolean
        
        export type change_context = boolean
        
        export type implement_me = boolean
        
        export type iterate = boolean
        
        export type lookups = boolean
        
        export type list_from_text = boolean
        
        export type text_from_list = boolean
        
        export type unreachable_code_path = boolean
        
        export type variables = boolean
        
    }
    
    export type specials = {
        readonly 'abort': specials.abort
        readonly 'change context': specials.change_context
        readonly 'implement me': specials.implement_me
        readonly 'iterate': specials.iterate
        readonly 'lookups': specials.lookups
        readonly 'list from text': specials.list_from_text
        readonly 'text from list': specials.text_from_list
        readonly 'unreachable code path': specials.unreachable_code_path
        readonly 'variables': specials.variables
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
    
    export namespace functions {
        
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
                    
                    export type expression = Assign_
                    
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
    
    export type functions = {
        readonly 'l location': functions.l_location
        readonly 'l dictionary': functions.l_dictionary
    }
    
}

export type Package_ = {
    readonly 'specials': Package_.specials
    readonly 'type imports': Package_.type_imports
    readonly 'variable imports': Package_.variable_imports
    readonly 'functions': Package_.functions
}

export namespace Temp_Value_Type_Specification_ {
    
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

export type Temp_Value_Type_Specification_ = {
    readonly 'type': Temp_Value_Type_Specification_.type_
    readonly 'sub selection': Temp_Value_Type_Specification_.sub_selection
}

export namespace Assign_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export namespace decide {
            
            export type source = Select_Value_
            
            export namespace type_ {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export namespace boolean_ {
                        
                        export namespace temp_resulting_node {
                            
                            export type O = Temp_Value_Type_Specification_
                            
                        }
                        
                        export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                        
                        export type if_false = Assign_
                        
                        export type if_true = Assign_
                        
                    }
                    
                    export type boolean_ = {
                        readonly 'temp resulting node': boolean_.temp_resulting_node
                        readonly 'if false': boolean_.if_false
                        readonly 'if true': boolean_.if_true
                    }
                    
                    export namespace optional {
                        
                        export namespace temp_resulting_node {
                            
                            export type O = Temp_Value_Type_Specification_
                            
                        }
                        
                        export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                        
                        export type if_not_set = Assign_
                        
                        export type if_set = Assign_
                        
                    }
                    
                    export type optional = {
                        readonly 'temp resulting node': optional.temp_resulting_node
                        readonly 'if not set': optional.if_not_set
                        readonly 'if set': optional.if_set
                    }
                    
                    export namespace state {
                        
                        export namespace temp_resulting_node {
                            
                            export type O = Temp_Value_Type_Specification_
                            
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
                                                
                                                export type l_entry = Assign_
                                                
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
                                    
                                    export type default_ = Assign_
                                    
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
                                                
                                                export type l_entry = Assign_
                                                
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
                                
                                export namespace single {
                                    
                                    export type option = string
                                    
                                    export type if_true = Assign_
                                    
                                    export type if_false = Assign_
                                    
                                }
                                
                                export type single = {
                                    readonly 'option': single.option
                                    readonly 'if true': single.if_true
                                    readonly 'if false': single.if_false
                                }
                                
                            }
                            
                            export type l_state = 
                                | readonly ['partial', l_state.partial]
                                | readonly ['full', l_state.full]
                                | readonly ['single', l_state.single]
                            
                        }
                        
                        export type type_ = {
                            readonly 'l location': type_.l_location
                            readonly 'l state': type_.l_state
                        }
                        
                    }
                    
                    export type state = {
                        readonly 'temp resulting node': state.temp_resulting_node
                        readonly 'type': state.type_
                    }
                    
                    export namespace text {
                        
                        export namespace temp_resulting_node {
                            
                            export type O = Temp_Value_Type_Specification_
                            
                        }
                        
                        export type temp_resulting_node = _pi.Optional_Value<temp_resulting_node.O>
                        
                        export namespace cases {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export type l_entry = Assign_
                                    
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
                        
                        export type default_ = Assign_
                        
                    }
                    
                    export type text = {
                        readonly 'temp resulting node': text.temp_resulting_node
                        readonly 'cases': text.cases
                        readonly 'default': text.default_
                    }
                    
                }
                
                export type l_state = 
                    | readonly ['boolean', l_state.boolean_]
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
            readonly 'source': decide.source
            readonly 'type': decide.type_
        }
        
        export namespace construct {
            
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
                        
                        export namespace from_ {
                            
                            export type selection = Select_Value_
                            
                            export namespace type_ {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_state {
                                    
                                    export namespace boolean_ {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export type not = null
                                            
                                            export type copy = null
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['not', l_state.not]
                                            | readonly ['copy', l_state.copy]
                                        
                                    }
                                    
                                    export type boolean_ = {
                                        readonly 'l location': boolean_.l_location
                                        readonly 'l state': boolean_.l_state
                                    }
                                    
                                    export namespace dictionary {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export type is_empty = null
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['is empty', l_state.is_empty]
                                        
                                    }
                                    
                                    export type dictionary = {
                                        readonly 'l location': dictionary.l_location
                                        readonly 'l state': dictionary.l_state
                                    }
                                    
                                    export namespace list {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export type is_empty = null
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['is empty', l_state.is_empty]
                                        
                                    }
                                    
                                    export type list = {
                                        readonly 'l location': list.l_location
                                        readonly 'l state': list.l_state
                                    }
                                    
                                }
                                
                                export type l_state = 
                                    | readonly ['boolean', l_state.boolean_]
                                    | readonly ['dictionary', l_state.dictionary]
                                    | readonly ['list', l_state.list]
                                
                            }
                            
                            export type type_ = {
                                readonly 'l location': type_.l_location
                                readonly 'l state': type_.l_state
                            }
                            
                        }
                        
                        export type from_ = {
                            readonly 'selection': from_.selection
                            readonly 'type': from_.type_
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['literal', l_state.literal]
                        | readonly ['from', l_state.from_]
                    
                }
                
                export type boolean_ = {
                    readonly 'l location': boolean_.l_location
                    readonly 'l state': boolean_.l_state
                }
                
                export namespace dictionary {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export namespace literal {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export type l_entry = Assign_
                                    
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
                        
                        export namespace from_ {
                            
                            export type selection = Select_Value_
                            
                            export namespace type_ {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_state {
                                    
                                    export namespace dictionary {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export namespace filter {
                                                
                                                export type assign_entry = Assign_
                                                
                                            }
                                            
                                            export type filter = {
                                                readonly 'assign entry': filter.assign_entry
                                            }
                                            
                                            export namespace map {
                                                
                                                export type assign_entry = Assign_
                                                
                                            }
                                            
                                            export type map = {
                                                readonly 'assign entry': map.assign_entry
                                            }
                                            
                                            export namespace resolve {
                                                
                                                export type assign_entry = Assign_
                                                
                                                export type temp_resulting_entry_node = Temp_Value_Type_Specification_
                                                
                                            }
                                            
                                            export type resolve = {
                                                readonly 'assign entry': resolve.assign_entry
                                                readonly 'temp resulting entry node': resolve.temp_resulting_entry_node
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['filter', l_state.filter]
                                            | readonly ['map', l_state.map]
                                            | readonly ['resolve', l_state.resolve]
                                        
                                    }
                                    
                                    export type dictionary = {
                                        readonly 'l location': dictionary.l_location
                                        readonly 'l state': dictionary.l_state
                                    }
                                    
                                    export namespace list {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export namespace convert {
                                                
                                                export type assign_id = Assign_
                                                
                                                export type assign_entry = Assign_
                                                
                                                export type abort = Assign_
                                                
                                            }
                                            
                                            export type convert = {
                                                readonly 'assign id': convert.assign_id
                                                readonly 'assign entry': convert.assign_entry
                                                readonly 'abort': convert.abort
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['convert', l_state.convert]
                                        
                                    }
                                    
                                    export type list = {
                                        readonly 'l location': list.l_location
                                        readonly 'l state': list.l_state
                                    }
                                    
                                }
                                
                                export type l_state = 
                                    | readonly ['dictionary', l_state.dictionary]
                                    | readonly ['list', l_state.list]
                                
                            }
                            
                            export type type_ = {
                                readonly 'l location': type_.l_location
                                readonly 'l state': type_.l_state
                            }
                            
                        }
                        
                        export type from_ = {
                            readonly 'selection': from_.selection
                            readonly 'type': from_.type_
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['literal', l_state.literal]
                        | readonly ['from', l_state.from_]
                    
                }
                
                export type dictionary = {
                    readonly 'l location': dictionary.l_location
                    readonly 'l state': dictionary.l_state
                }
                
                export namespace group {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export namespace literal {
                            
                            export namespace properties {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_dictionary {
                                    
                                    export namespace D {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_entry = Assign_
                                        
                                    }
                                    
                                    export type D = {
                                        readonly 'l location': D.l_location
                                        readonly 'l entry': D.l_entry
                                    }
                                    
                                }
                                
                                export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                                
                            }
                            
                            export type properties = {
                                readonly 'l location': properties.l_location
                                readonly 'l dictionary': properties.l_dictionary
                            }
                            
                            export type have_dependencies = boolean
                            
                        }
                        
                        export type literal = {
                            readonly 'properties': literal.properties
                            readonly 'have dependencies': literal.have_dependencies
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['literal', l_state.literal]
                    
                }
                
                export type group = {
                    readonly 'l location': group.l_location
                    readonly 'l state': group.l_state
                }
                
                export namespace list {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export namespace literal {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_list {
                                
                                export namespace L {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export type l_item = Assign_
                                    
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
                        
                        export namespace from_ {
                            
                            export type selection = Select_Value_
                            
                            export namespace type_ {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_state {
                                    
                                    export namespace dictionary {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export namespace convert {
                                                
                                                export type assign_entry = Assign_
                                                
                                            }
                                            
                                            export type convert = {
                                                readonly 'assign entry': convert.assign_entry
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['convert', l_state.convert]
                                        
                                    }
                                    
                                    export type dictionary = {
                                        readonly 'l location': dictionary.l_location
                                        readonly 'l state': dictionary.l_state
                                    }
                                    
                                    export namespace list {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export namespace filter {
                                                
                                                export type assign_item = Assign_
                                                
                                            }
                                            
                                            export type filter = {
                                                readonly 'assign item': filter.assign_item
                                            }
                                            
                                            export namespace map {
                                                
                                                export type assign_item = Assign_
                                                
                                            }
                                            
                                            export type map = {
                                                readonly 'assign item': map.assign_item
                                            }
                                            
                                            export namespace map_with_state {
                                                
                                                export type initialize_state = Assign_
                                                
                                                export type assign_item = Assign_
                                                
                                                export type update_state = Assign_
                                                
                                                export type wrap_up = Assign_
                                                
                                            }
                                            
                                            export type map_with_state = {
                                                readonly 'initialize state': map_with_state.initialize_state
                                                readonly 'assign item': map_with_state.assign_item
                                                readonly 'update state': map_with_state.update_state
                                                readonly 'wrap up': map_with_state.wrap_up
                                            }
                                            
                                            export namespace reduce {
                                                
                                                export type initialize_state = Assign_
                                                
                                                export type assign_item = Assign_
                                                
                                            }
                                            
                                            export type reduce = {
                                                readonly 'initialize state': reduce.initialize_state
                                                readonly 'assign item': reduce.assign_item
                                            }
                                            
                                            export type reverse = null
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['filter', l_state.filter]
                                            | readonly ['map', l_state.map]
                                            | readonly ['map with state', l_state.map_with_state]
                                            | readonly ['reduce', l_state.reduce]
                                            | readonly ['reverse', l_state.reverse]
                                        
                                    }
                                    
                                    export type list = {
                                        readonly 'l location': list.l_location
                                        readonly 'l state': list.l_state
                                    }
                                    
                                }
                                
                                export type l_state = 
                                    | readonly ['dictionary', l_state.dictionary]
                                    | readonly ['list', l_state.list]
                                
                            }
                            
                            export type type_ = {
                                readonly 'l location': type_.l_location
                                readonly 'l state': type_.l_state
                            }
                            
                        }
                        
                        export type from_ = {
                            readonly 'selection': from_.selection
                            readonly 'type': from_.type_
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['literal', l_state.literal]
                        | readonly ['from', l_state.from_]
                    
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
                                
                                export type copy = Select_Value_
                                
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
                                
                                export type copy = Select_Value_
                                
                                export namespace divide {
                                    
                                    export type assign_dividend = Select_Value_
                                    
                                    export type assign_divisor = Select_Value_
                                    
                                    export type abort = Assign_
                                    
                                }
                                
                                export type divide = {
                                    readonly 'assign dividend': divide.assign_dividend
                                    readonly 'assign divisor': divide.assign_divisor
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
                                
                                export type copy = Select_Value_
                                
                                export namespace number_of_dictionary_entries {
                                    
                                    export type dictionary = Select_Value_
                                    
                                }
                                
                                export type number_of_dictionary_entries = {
                                    readonly 'dictionary': number_of_dictionary_entries.dictionary
                                }
                                
                                export namespace number_of_list_items {
                                    
                                    export type list = Select_Value_
                                    
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
                        
                        export namespace literal {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_state {
                                
                                export type not_set = null
                                
                                export type set_ = Assign_
                                
                            }
                            
                            export type l_state = 
                                | readonly ['not set', l_state.not_set]
                                | readonly ['set', l_state.set_]
                            
                        }
                        
                        export type literal = {
                            readonly 'l location': literal.l_location
                            readonly 'l state': literal.l_state
                        }
                        
                        export namespace from_ {
                            
                            export type selection = Select_Value_
                            
                            export namespace type_ {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_state {
                                    
                                    export namespace boolean_ {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export namespace convert {
                                                
                                                export type assign_set = Assign_
                                                
                                            }
                                            
                                            export type convert = {
                                                readonly 'assign set': convert.assign_set
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['convert', l_state.convert]
                                        
                                    }
                                    
                                    export type boolean_ = {
                                        readonly 'l location': boolean_.l_location
                                        readonly 'l state': boolean_.l_state
                                    }
                                    
                                    export namespace optional {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export namespace map {
                                                
                                                export type assign_set = Assign_
                                                
                                            }
                                            
                                            export type map = {
                                                readonly 'assign set': map.assign_set
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['map', l_state.map]
                                        
                                    }
                                    
                                    export type optional = {
                                        readonly 'l location': optional.l_location
                                        readonly 'l state': optional.l_state
                                    }
                                    
                                }
                                
                                export type l_state = 
                                    | readonly ['boolean', l_state.boolean_]
                                    | readonly ['optional', l_state.optional]
                                
                            }
                            
                            export type type_ = {
                                readonly 'l location': type_.l_location
                                readonly 'l state': type_.l_state
                            }
                            
                        }
                        
                        export type from_ = {
                            readonly 'selection': from_.selection
                            readonly 'type': from_.type_
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['literal', l_state.literal]
                        | readonly ['from', l_state.from_]
                    
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
                            
                            export type assign_option = Assign_
                            
                        }
                        
                        export type literal = {
                            readonly 'option': literal.option
                            readonly 'assign option': literal.assign_option
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
                        
                        export namespace from_ {
                            
                            export type selection = Select_Value_
                            
                            export namespace type_ {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_state {
                                    
                                    export namespace text {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export type copy = null
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['copy', l_state.copy]
                                        
                                    }
                                    
                                    export type text = {
                                        readonly 'l location': text.l_location
                                        readonly 'l state': text.l_state
                                    }
                                    
                                }
                                
                                export type l_state = 
                                    | readonly ['text', l_state.text]
                                
                            }
                            
                            export type type_ = {
                                readonly 'l location': type_.l_location
                                readonly 'l state': type_.l_state
                            }
                            
                        }
                        
                        export type from_ = {
                            readonly 'selection': from_.selection
                            readonly 'type': from_.type_
                        }
                        
                        export type source_document = null
                        
                    }
                    
                    export type l_state = 
                        | readonly ['literal', l_state.literal]
                        | readonly ['from', l_state.from_]
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
        
        export type construct = {
            readonly 'l location': construct.l_location
            readonly 'l state': construct.l_state
        }
        
        export type select = Select_Value_
        
        export namespace special {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export type abort = Assign_
                
                export namespace assert {
                    
                    export type tester = Assign_
                    
                    export type normal_flow = Assign_
                    
                }
                
                export type assert = {
                    readonly 'tester': assert.tester
                    readonly 'normal flow': assert.normal_flow
                }
                
                export namespace change_context {
                    
                    export type new_context = Select_Value_
                    
                    export type expression = Assign_
                    
                }
                
                export type change_context = {
                    readonly 'new context': change_context.new_context
                    readonly 'expression': change_context.expression
                }
                
                export namespace variables {
                    
                    export namespace variables {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_entry = Assign_
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type variables = {
                        readonly 'l location': variables.l_location
                        readonly 'l dictionary': variables.l_dictionary
                    }
                    
                    export type assign = Assign_
                    
                }
                
                export type variables = {
                    readonly 'variables': variables.variables
                    readonly 'assign': variables.assign
                }
                
                export type implement_me = string
                
                export namespace iterate {
                    
                    export type list = Select_Value_
                    
                    export type assign = Assign_
                    
                }
                
                export type iterate = {
                    readonly 'list': iterate.list
                    readonly 'assign': iterate.assign
                }
                
                export namespace unreachable {
                    
                    export type explanation = string
                    
                }
                
                export type unreachable = {
                    readonly 'explanation': unreachable.explanation
                }
                
            }
            
            export type l_state = 
                | readonly ['abort', l_state.abort]
                | readonly ['assert', l_state.assert]
                | readonly ['change context', l_state.change_context]
                | readonly ['variables', l_state.variables]
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
        | readonly ['construct', l_state.construct]
        | readonly ['select', l_state.select]
        | readonly ['special', l_state.special]
    
}

export type Assign_ = {
    readonly 'l location': Assign_.l_location
    readonly 'l state': Assign_.l_state
}

export namespace Select_Value_ {
    
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
                        
                        export type context = Assign_
                        
                        export namespace abort {
                            
                            export type O = Assign_
                            
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
                                                
                                                export type l_entry = Select_Lookup_
                                                
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
                                                
                                                export type l_entry = Assign_
                                                
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
                    
                    export namespace dictionary_entry {
                        
                        export type dictionary = Select_Value_
                        
                        export type id = Assign_
                        
                        export type no_such_entry_handler = Assign_
                        
                    }
                    
                    export type dictionary_entry = {
                        readonly 'dictionary': dictionary_entry.dictionary
                        readonly 'id': dictionary_entry.id
                        readonly 'no such entry handler': dictionary_entry.no_such_entry_handler
                    }
                    
                    export namespace list_from_text {
                        
                        export type source = Select_Value_
                        
                        export type assign_item = Assign_
                        
                    }
                    
                    export type list_from_text = {
                        readonly 'source': list_from_text.source
                        readonly 'assign item': list_from_text.assign_item
                    }
                    
                    export namespace lookup_entry {
                        
                        export type lookup = Select_Lookup_
                        
                        export type id = Assign_
                        
                        export namespace abort_handlers {
                            
                            export type no_such_entry = Assign_
                            
                            export type no_context_lookup = Assign_
                            
                            export type cycle_detected = Assign_
                            
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
                        
                        export type lookup = Select_Lookup_
                        
                        export type id = Assign_
                        
                        export namespace abort_handlers {
                            
                            export type no_such_entry = Assign_
                            
                            export type no_context_lookup = Assign_
                            
                            export type cycle_detected = Assign_
                            
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
                    
                    export namespace text_from_list {
                        
                        export type source = Select_Value_
                        
                        export type assign_character = Assign_
                        
                    }
                    
                    export type text_from_list = {
                        readonly 'source': text_from_list.source
                        readonly 'assign character': text_from_list.assign_character
                    }
                    
                    export type variable = string
                    
                }
                
                export type l_state = 
                    | readonly ['call', l_state.call]
                    | readonly ['context', l_state.context]
                    | readonly ['dictionary entry', l_state.dictionary_entry]
                    | readonly ['list from text', l_state.list_from_text]
                    | readonly ['lookup entry', l_state.lookup_entry]
                    | readonly ['lookup entry depth', l_state.lookup_entry_depth]
                    | readonly ['parameter', l_state.parameter]
                    | readonly ['parent sibling', l_state.parent_sibling]
                    | readonly ['sibling', l_state.sibling]
                    | readonly ['state', l_state.state]
                    | readonly ['text from list', l_state.text_from_list]
                    | readonly ['variable', l_state.variable]
                
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

export type Select_Value_ = {
    readonly 'l location': Select_Value_.l_location
    readonly 'l state': Select_Value_.l_state
}

export namespace Select_Lookup_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export type implement_me = string
        
        export type from_parameter = string
        
        export namespace stack {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export type empty = null
                
                export namespace push {
                    
                    export type stack = Select_Lookup_
                    
                    export type acyclic = Select_Lookup_
                    
                }
                
                export type push = {
                    readonly 'stack': push.stack
                    readonly 'acyclic': push.acyclic
                }
                
            }
            
            export type l_state = 
                | readonly ['empty', l_state.empty]
                | readonly ['push', l_state.push]
            
        }
        
        export type stack = {
            readonly 'l location': stack.l_location
            readonly 'l state': stack.l_state
        }
        
        export namespace acyclic {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export type not_set = null
                
                export type siblings = null
                
                export type resolved_dictionary = Select_Value_
                
            }
            
            export type l_state = 
                | readonly ['not set', l_state.not_set]
                | readonly ['siblings', l_state.siblings]
                | readonly ['resolved dictionary', l_state.resolved_dictionary]
            
        }
        
        export type acyclic = {
            readonly 'l location': acyclic.l_location
            readonly 'l state': acyclic.l_state
        }
        
        export namespace cyclic {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export type not_set = null
                
                export type siblings = null
                
            }
            
            export type l_state = 
                | readonly ['not set', l_state.not_set]
                | readonly ['siblings', l_state.siblings]
            
        }
        
        export type cyclic = {
            readonly 'l location': cyclic.l_location
            readonly 'l state': cyclic.l_state
        }
        
    }
    
    export type l_state = 
        | readonly ['implement me', l_state.implement_me]
        | readonly ['from parameter', l_state.from_parameter]
        | readonly ['stack', l_state.stack]
        | readonly ['acyclic', l_state.acyclic]
        | readonly ['cyclic', l_state.cyclic]
    
}

export type Select_Lookup_ = {
    readonly 'l location': Select_Lookup_.l_location
    readonly 'l state': Select_Lookup_.l_state
}

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Temp_Value_Type_Specification_ as Temp_Value_Type_Specification, 
    Assign_ as Assign, 
    Select_Value_ as Select_Value, 
    Select_Lookup_ as Select_Lookup, 
}
