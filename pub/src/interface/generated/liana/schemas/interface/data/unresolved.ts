
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

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
    
    export type imports = Imports_
    
    export namespace content {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export namespace data_modules {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_dictionary {
                    
                    export namespace D {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_entry = Value_
                        
                    }
                    
                    export type D = {
                        readonly 'l location': D.l_location
                        readonly 'l entry': D.l_entry
                    }
                    
                }
                
                export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                
            }
            
            export type data_modules = {
                readonly 'l location': data_modules.l_location
                readonly 'l dictionary': data_modules.l_dictionary
            }
            
            export namespace functions {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_dictionary {
                    
                    export namespace D {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_entry {
                            
                            export type result = Value_
                            
                            export type context = Value_
                            
                            export namespace type_ {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_state {
                                    
                                    export type transformer = null
                                    
                                    export namespace refiner {
                                        
                                        export namespace error {
                                            
                                            export type O = Value_
                                            
                                        }
                                        
                                        export type error = _pi.Optional_Value<error.O>
                                        
                                        export namespace lookups {
                                            
                                            export namespace O {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export namespace l_dictionary {
                                                    
                                                    export namespace D {
                                                        
                                                        export type l_location = i__location.Relative_Location
                                                        
                                                        export namespace l_entry {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_state {
                                                                
                                                                export type acyclic = Value_
                                                                
                                                                export type cyclic = Value_
                                                                
                                                                export type stack = Value_
                                                                
                                                            }
                                                            
                                                            export type l_state = 
                                                                | readonly ['acyclic', l_state.acyclic]
                                                                | readonly ['cyclic', l_state.cyclic]
                                                                | readonly ['stack', l_state.stack]
                                                            
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
                                            
                                            export type O = {
                                                readonly 'l location': O.l_location
                                                readonly 'l dictionary': O.l_dictionary
                                            }
                                            
                                        }
                                        
                                        export type lookups = _pi.Optional_Value<lookups.O>
                                        
                                    }
                                    
                                    export type refiner = {
                                        readonly 'error': refiner.error
                                        readonly 'lookups': refiner.lookups
                                    }
                                    
                                }
                                
                                export type l_state = 
                                    | readonly ['transformer', l_state.transformer]
                                    | readonly ['refiner', l_state.refiner]
                                
                            }
                            
                            export type type_ = {
                                readonly 'l location': type_.l_location
                                readonly 'l state': type_.l_state
                            }
                            
                            export namespace parameters {
                                
                                export namespace O {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export namespace l_dictionary {
                                        
                                        export namespace D {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export type l_entry = Value_
                                            
                                        }
                                        
                                        export type D = {
                                            readonly 'l location': D.l_location
                                            readonly 'l entry': D.l_entry
                                        }
                                        
                                    }
                                    
                                    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                                    
                                }
                                
                                export type O = {
                                    readonly 'l location': O.l_location
                                    readonly 'l dictionary': O.l_dictionary
                                }
                                
                            }
                            
                            export type parameters = _pi.Optional_Value<parameters.O>
                            
                        }
                        
                        export type l_entry = {
                            readonly 'result': l_entry.result
                            readonly 'context': l_entry.context
                            readonly 'type': l_entry.type_
                            readonly 'parameters': l_entry.parameters
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
        
        export type l_state = 
            | readonly ['data modules', l_state.data_modules]
            | readonly ['functions', l_state.functions]
        
    }
    
    export type content = {
        readonly 'l location': content.l_location
        readonly 'l state': content.l_state
    }
    
}

export type Package_ = {
    readonly 'imports': Package_.imports
    readonly 'content': Package_.content
}

export namespace Imports_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export namespace type_ {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export type external = string
                        
                        export namespace ancestor {
                            
                            export type number_of_steps = number
                            
                            export type dependency = string
                            
                        }
                        
                        export type ancestor = {
                            readonly 'number of steps': ancestor.number_of_steps
                            readonly 'dependency': ancestor.dependency
                        }
                        
                        export type sibling = string
                        
                    }
                    
                    export type l_state = 
                        | readonly ['external', l_state.external]
                        | readonly ['ancestor', l_state.ancestor]
                        | readonly ['sibling', l_state.sibling]
                    
                }
                
                export type type_ = {
                    readonly 'l location': type_.l_location
                    readonly 'l state': type_.l_state
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
            
            export type l_entry = {
                readonly 'type': l_entry.type_
                readonly 'tail': l_entry.tail
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Imports_ = {
    readonly 'l location': Imports_.l_location
    readonly 'l dictionary': Imports_.l_dictionary
}

export namespace Value_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export type boolean_ = null
        
        export namespace component {
            
            export type location = Module_Reference_
            
        }
        
        export type component = {
            readonly 'location': component.location
        }
        
        export type dictionary = Value_
        
        export namespace group {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_entry = Value_
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = _pi.Dictionary<l_dictionary.D>
            
        }
        
        export type group = {
            readonly 'l location': group.l_location
            readonly 'l dictionary': group.l_dictionary
        }
        
        export type list = Value_
        
        export type nothing = null
        
        export namespace number_ {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export namespace exact {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export type natural = null
                        
                        export type integer = null
                        
                    }
                    
                    export type l_state = 
                        | readonly ['natural', l_state.natural]
                        | readonly ['integer', l_state.integer]
                    
                }
                
                export type exact = {
                    readonly 'l location': exact.l_location
                    readonly 'l state': exact.l_state
                }
                
                export type approximation = null
                
            }
            
            export type l_state = 
                | readonly ['exact', l_state.exact]
                | readonly ['approximation', l_state.approximation]
            
        }
        
        export type number_ = {
            readonly 'l location': number_.l_location
            readonly 'l state': number_.l_state
        }
        
        export type optional = Value_
        
        export namespace reference {
            
            export type location = Module_Reference_
            
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
            
            export type cyclic = boolean
            
        }
        
        export type reference = {
            readonly 'location': reference.location
            readonly 'sub selection': reference.sub_selection
            readonly 'cyclic': reference.cyclic
        }
        
        export namespace state {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_entry = Value_
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = _pi.Dictionary<l_dictionary.D>
            
        }
        
        export type state = {
            readonly 'l location': state.l_location
            readonly 'l dictionary': state.l_dictionary
        }
        
        export type text = null
        
    }
    
    export type l_state = 
        | readonly ['boolean', l_state.boolean_]
        | readonly ['component', l_state.component]
        | readonly ['dictionary', l_state.dictionary]
        | readonly ['group', l_state.group]
        | readonly ['list', l_state.list]
        | readonly ['nothing', l_state.nothing]
        | readonly ['number', l_state.number_]
        | readonly ['optional', l_state.optional]
        | readonly ['reference', l_state.reference]
        | readonly ['state', l_state.state]
        | readonly ['text', l_state.text]
    
}

export type Value_ = {
    readonly 'l location': Value_.l_location
    readonly 'l state': Value_.l_state
}

export namespace Module_Reference_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export namespace import_ {
            
            export type import_ = string
            
            export type type_ = string
            
        }
        
        export type import_ = {
            readonly 'import': import_.import_
            readonly 'type': import_.type_
        }
        
        export type local = string
        
    }
    
    export type l_state = 
        | readonly ['import', l_state.import_]
        | readonly ['local', l_state.local]
    
}

export type Module_Reference_ = {
    readonly 'l location': Module_Reference_.l_location
    readonly 'l state': Module_Reference_.l_state
}

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Imports_ as Imports, 
    Value_ as Value, 
    Module_Reference_ as Module_Reference, 
}
