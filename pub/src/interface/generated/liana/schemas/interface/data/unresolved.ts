
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

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

export namespace Module_ {
    
    export type imports = Imports_
    
    export namespace types {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_entry {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export type data = Type_Node_
                        
                        export namespace algorithm {
                            
                            export type result = Type_Node_
                            
                            export type context = Type_Node_
                            
                            export namespace type_ {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_state {
                                    
                                    export namespace transformer {
                                        
                                    }
                                    
                                    export type transformer = null
                                    
                                    export namespace refiner {
                                        
                                        export namespace error {
                                            
                                            export type O = Type_Node_
                                            
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
                                                                
                                                                export type acyclic = Type_Node_
                                                                
                                                                export type cyclic = Type_Node_
                                                                
                                                                export type stack = Type_Node_
                                                                
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
                                            
                                            export type l_entry = Type_Node_
                                            
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
                        
                        export type algorithm = {
                            readonly 'result': algorithm.result
                            readonly 'context': algorithm.context
                            readonly 'type': algorithm.type_
                            readonly 'parameters': algorithm.parameters
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['data', l_state.data]
                        | readonly ['algorithm', l_state.algorithm]
                    
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
    
    export type types = {
        readonly 'l location': types.l_location
        readonly 'l dictionary': types.l_dictionary
    }
    
}

export type Module_ = {
    readonly 'imports': Module_.imports
    readonly 'types': Module_.types
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

export namespace Type_Reference_ {
    
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

export type Type_Reference_ = {
    readonly 'l location': Type_Reference_.l_location
    readonly 'l state': Type_Reference_.l_state
}

export namespace Type_Node_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export type boolean_ = null
        
        export namespace component {
            
            export type location = Type_Reference_
            
        }
        
        export type component = {
            readonly 'location': component.location
        }
        
        export type dictionary = Type_Node_
        
        export namespace group {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_entry = Type_Node_
                    
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
        
        export type list = Type_Node_
        
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
        
        export type optional = Type_Node_
        
        export namespace reference {
            
            export type location = Type_Reference_
            
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
                    
                    export type l_entry = Type_Node_
                    
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

export type Type_Node_ = {
    readonly 'l location': Type_Node_.l_location
    readonly 'l state': Type_Node_.l_state
}

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_Reference_ as Type_Reference, 
    Type_Node_ as Type_Node, 
}
