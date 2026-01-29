
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

export namespace Imports_ {
    
    export type location = i__location.Relative_Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Relative_Location
            
            export namespace entry {
                
                export namespace type_ {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
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
                    
                    export type state = 
                        | readonly ['external', state.external]
                        | readonly ['ancestor', state.ancestor]
                        | readonly ['sibling', state.sibling]
                    
                }
                
                export type type_ = {
                    readonly 'location': type_.location
                    readonly 'state': type_.state
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
            
            export type entry = {
                readonly 'type': entry.type_
                readonly 'tail': entry.tail
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Imports_ = {
    readonly 'location': Imports_.location
    readonly 'dictionary': Imports_.dictionary
}

export namespace Module_ {
    
    export type imports = Imports_
    
    export namespace types {
        
        export type location = i__location.Relative_Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace entry {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
                        export type data = Type_Node_
                        
                        export namespace algorithm {
                            
                            export type result = Type_Node_
                            
                            export type context = Type_Node_
                            
                            export namespace type_ {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace state {
                                    
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
                                                
                                                export type location = i__location.Relative_Location
                                                
                                                export namespace dictionary {
                                                    
                                                    export namespace D {
                                                        
                                                        export type location = i__location.Relative_Location
                                                        
                                                        export namespace entry {
                                                            
                                                            export type location = i__location.Relative_Location
                                                            
                                                            export namespace state {
                                                                
                                                                export type acyclic = Type_Node_
                                                                
                                                                export type cyclic = Type_Node_
                                                                
                                                                export type stack = Type_Node_
                                                                
                                                            }
                                                            
                                                            export type state = 
                                                                | readonly ['acyclic', state.acyclic]
                                                                | readonly ['cyclic', state.cyclic]
                                                                | readonly ['stack', state.stack]
                                                            
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
                                            
                                            export type O = {
                                                readonly 'location': O.location
                                                readonly 'dictionary': O.dictionary
                                            }
                                            
                                        }
                                        
                                        export type lookups = _pi.Optional_Value<lookups.O>
                                        
                                    }
                                    
                                    export type refiner = {
                                        readonly 'error': refiner.error
                                        readonly 'lookups': refiner.lookups
                                    }
                                    
                                }
                                
                                export type state = 
                                    | readonly ['transformer', state.transformer]
                                    | readonly ['refiner', state.refiner]
                                
                            }
                            
                            export type type_ = {
                                readonly 'location': type_.location
                                readonly 'state': type_.state
                            }
                            
                            export namespace parameters {
                                
                                export namespace O {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export namespace dictionary {
                                        
                                        export namespace D {
                                            
                                            export type location = i__location.Relative_Location
                                            
                                            export type entry = Type_Node_
                                            
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
                            
                            export type parameters = _pi.Optional_Value<parameters.O>
                            
                        }
                        
                        export type algorithm = {
                            readonly 'result': algorithm.result
                            readonly 'context': algorithm.context
                            readonly 'type': algorithm.type_
                            readonly 'parameters': algorithm.parameters
                        }
                        
                    }
                    
                    export type state = 
                        | readonly ['data', state.data]
                        | readonly ['algorithm', state.algorithm]
                    
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
    
    export type types = {
        readonly 'location': types.location
        readonly 'dictionary': types.dictionary
    }
    
}

export type Module_ = {
    readonly 'imports': Module_.imports
    readonly 'types': Module_.types
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

export namespace Type_Reference_ {
    
    export type location = i__location.Relative_Location
    
    export namespace state {
        
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
    
    export type state = 
        | readonly ['import', state.import_]
        | readonly ['local', state.local]
    
}

export type Type_Reference_ = {
    readonly 'location': Type_Reference_.location
    readonly 'state': Type_Reference_.state
}

export namespace Type_Node_ {
    
    export type location = i__location.Relative_Location
    
    export namespace state {
        
        export type boolean_ = null
        
        export namespace component {
            
            export type location = Type_Reference_
            
        }
        
        export type component = {
            readonly 'location': component.location
        }
        
        export type dictionary = Type_Node_
        
        export namespace group {
            
            export type location = i__location.Relative_Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export type entry = Type_Node_
                    
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
        
        export type list = Type_Node_
        
        export type nothing = null
        
        export namespace number_ {
            
            export type location = i__location.Relative_Location
            
            export namespace state {
                
                export namespace exact {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace state {
                        
                        export type natural = null
                        
                        export type integer = null
                        
                    }
                    
                    export type state = 
                        | readonly ['natural', state.natural]
                        | readonly ['integer', state.integer]
                    
                }
                
                export type exact = {
                    readonly 'location': exact.location
                    readonly 'state': exact.state
                }
                
                export type approximation = null
                
            }
            
            export type state = 
                | readonly ['exact', state.exact]
                | readonly ['approximation', state.approximation]
            
        }
        
        export type number_ = {
            readonly 'location': number_.location
            readonly 'state': number_.state
        }
        
        export type optional = Type_Node_
        
        export namespace reference {
            
            export type location = Type_Reference_
            
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
            
            export type cyclic = boolean
            
        }
        
        export type reference = {
            readonly 'location': reference.location
            readonly 'sub selection': reference.sub_selection
            readonly 'cyclic': reference.cyclic
        }
        
        export namespace state {
            
            export type location = i__location.Relative_Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export type entry = Type_Node_
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type state = {
            readonly 'location': state.location
            readonly 'dictionary': state.dictionary
        }
        
        export type text = null
        
    }
    
    export type state = 
        | readonly ['boolean', state.boolean_]
        | readonly ['component', state.component]
        | readonly ['dictionary', state.dictionary]
        | readonly ['group', state.group]
        | readonly ['list', state.list]
        | readonly ['nothing', state.nothing]
        | readonly ['number', state.number_]
        | readonly ['optional', state.optional]
        | readonly ['reference', state.reference]
        | readonly ['state', state.state]
        | readonly ['text', state.text]
    
}

export type Type_Node_ = {
    readonly 'location': Type_Node_.location
    readonly 'state': Type_Node_.state
}

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_Reference_ as Type_Reference, 
    Type_Node_ as Type_Node, 
}
