
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

export namespace Imports_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export namespace type_ {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
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
                    
                    export type l_value = 
                        | readonly ['external', l_value.external]
                        | readonly ['ancestor', l_value.ancestor]
                        | readonly ['sibling', l_value.sibling]
                    
                }
                
                export type type_ = {
                    readonly 'l location': type_.l_location
                    readonly 'l value': type_.l_value
                }
                
                export namespace tail {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace L {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_item = string
                            
                        }
                        
                        export type L = {
                            readonly 'l location': L.l_location
                            readonly 'l item': L.l_item
                        }
                        
                    }
                    
                    export type l_value = _pi.List<l_value.L>
                    
                }
                
                export type tail = {
                    readonly 'l location': tail.l_location
                    readonly 'l value': tail.l_value
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
    
    export type l_value = _pi.Dictionary<l_value.D>
    
}

export type Imports_ = {
    readonly 'l location': Imports_.l_location
    readonly 'l value': Imports_.l_value
}

export namespace Module_ {
    
    export type imports = Imports_
    
    export namespace types {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_value {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_entry {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export type data = Type_Node_
                        
                        export namespace algorithm {
                            
                            export type result = Type_Node_
                            
                            export type context = Type_Node_
                            
                            export namespace type_ {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
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
                                                
                                                export namespace l_value {
                                                    
                                                    export namespace D {
                                                        
                                                        export type l_location = i__location.Relative_Location
                                                        
                                                        export namespace l_entry {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_value {
                                                                
                                                                export type acyclic = Type_Node_
                                                                
                                                                export type cyclic = Type_Node_
                                                                
                                                                export type stack = Type_Node_
                                                                
                                                            }
                                                            
                                                            export type l_value = 
                                                                | readonly ['acyclic', l_value.acyclic]
                                                                | readonly ['cyclic', l_value.cyclic]
                                                                | readonly ['stack', l_value.stack]
                                                            
                                                        }
                                                        
                                                        export type l_entry = {
                                                            readonly 'l location': l_entry.l_location
                                                            readonly 'l value': l_entry.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type D = {
                                                        readonly 'l location': D.l_location
                                                        readonly 'l entry': D.l_entry
                                                    }
                                                    
                                                }
                                                
                                                export type l_value = _pi.Dictionary<l_value.D>
                                                
                                            }
                                            
                                            export type O = {
                                                readonly 'l location': O.l_location
                                                readonly 'l value': O.l_value
                                            }
                                            
                                        }
                                        
                                        export type lookups = _pi.Optional_Value<lookups.O>
                                        
                                    }
                                    
                                    export type refiner = {
                                        readonly 'error': refiner.error
                                        readonly 'lookups': refiner.lookups
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['transformer', l_value.transformer]
                                    | readonly ['refiner', l_value.refiner]
                                
                            }
                            
                            export type type_ = {
                                readonly 'l location': type_.l_location
                                readonly 'l value': type_.l_value
                            }
                            
                            export namespace parameters {
                                
                                export namespace O {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export namespace l_value {
                                        
                                        export namespace D {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export type l_entry = Type_Node_
                                            
                                        }
                                        
                                        export type D = {
                                            readonly 'l location': D.l_location
                                            readonly 'l entry': D.l_entry
                                        }
                                        
                                    }
                                    
                                    export type l_value = _pi.Dictionary<l_value.D>
                                    
                                }
                                
                                export type O = {
                                    readonly 'l location': O.l_location
                                    readonly 'l value': O.l_value
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
                    
                    export type l_value = 
                        | readonly ['data', l_value.data]
                        | readonly ['algorithm', l_value.algorithm]
                    
                }
                
                export type l_entry = {
                    readonly 'l location': l_entry.l_location
                    readonly 'l value': l_entry.l_value
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_value = _pi.Dictionary<l_value.D>
        
    }
    
    export type types = {
        readonly 'l location': types.l_location
        readonly 'l value': types.l_value
    }
    
}

export type Module_ = {
    readonly 'imports': Module_.imports
    readonly 'types': Module_.types
}

export namespace Module_Set_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_value {
                    
                    export type module_ = Module_
                    
                    export type set_ = Module_Set_
                    
                }
                
                export type l_value = 
                    | readonly ['module', l_value.module_]
                    | readonly ['set', l_value.set_]
                
            }
            
            export type l_entry = {
                readonly 'l location': l_entry.l_location
                readonly 'l value': l_entry.l_value
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_value = _pi.Dictionary<l_value.D>
    
}

export type Module_Set_ = {
    readonly 'l location': Module_Set_.l_location
    readonly 'l value': Module_Set_.l_value
}

export namespace Type_Reference_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
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
    
    export type l_value = 
        | readonly ['import', l_value.import_]
        | readonly ['local', l_value.local]
    
}

export type Type_Reference_ = {
    readonly 'l location': Type_Reference_.l_location
    readonly 'l value': Type_Reference_.l_value
}

export namespace Type_Node_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
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
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_entry = Type_Node_
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type group = {
            readonly 'l location': group.l_location
            readonly 'l value': group.l_value
        }
        
        export type list = Type_Node_
        
        export type nothing = null
        
        export namespace number_ {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace exact {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export type natural = null
                        
                        export type integer = null
                        
                    }
                    
                    export type l_value = 
                        | readonly ['natural', l_value.natural]
                        | readonly ['integer', l_value.integer]
                    
                }
                
                export type exact = {
                    readonly 'l location': exact.l_location
                    readonly 'l value': exact.l_value
                }
                
                export type approximation = null
                
            }
            
            export type l_value = 
                | readonly ['exact', l_value.exact]
                | readonly ['approximation', l_value.approximation]
            
        }
        
        export type number_ = {
            readonly 'l location': number_.l_location
            readonly 'l value': number_.l_value
        }
        
        export type optional = Type_Node_
        
        export namespace reference {
            
            export type location = Type_Reference_
            
            export namespace sub_selection {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_value {
                    
                    export namespace L {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_item {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_value {
                                
                                export type dictionary = null
                                
                                export type group = string
                                
                                export type list = null
                                
                                export type optional = null
                                
                                export type state = string
                                
                            }
                            
                            export type l_value = 
                                | readonly ['dictionary', l_value.dictionary]
                                | readonly ['group', l_value.group]
                                | readonly ['list', l_value.list]
                                | readonly ['optional', l_value.optional]
                                | readonly ['state', l_value.state]
                            
                        }
                        
                        export type l_item = {
                            readonly 'l location': l_item.l_location
                            readonly 'l value': l_item.l_value
                        }
                        
                    }
                    
                    export type L = {
                        readonly 'l location': L.l_location
                        readonly 'l item': L.l_item
                    }
                    
                }
                
                export type l_value = _pi.List<l_value.L>
                
            }
            
            export type sub_selection = {
                readonly 'l location': sub_selection.l_location
                readonly 'l value': sub_selection.l_value
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
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_entry = Type_Node_
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type state = {
            readonly 'l location': state.l_location
            readonly 'l value': state.l_value
        }
        
        export type text = null
        
    }
    
    export type l_value = 
        | readonly ['boolean', l_value.boolean_]
        | readonly ['component', l_value.component]
        | readonly ['dictionary', l_value.dictionary]
        | readonly ['group', l_value.group]
        | readonly ['list', l_value.list]
        | readonly ['nothing', l_value.nothing]
        | readonly ['number', l_value.number_]
        | readonly ['optional', l_value.optional]
        | readonly ['reference', l_value.reference]
        | readonly ['state', l_value.state]
        | readonly ['text', l_value.text]
    
}

export type Type_Node_ = {
    readonly 'l location': Type_Node_.l_location
    readonly 'l value': Type_Node_.l_value
}

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_Reference_ as Type_Reference, 
    Type_Node_ as Type_Node, 
}
