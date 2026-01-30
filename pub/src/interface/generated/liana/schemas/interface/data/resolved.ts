
import * as _pi from "pareto-core/dist/interface"

export namespace Imports_ {
    
    export namespace D {
        
        export namespace type_ {
            
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
        
        export type type_ = 
            | readonly ['external', type_.external]
            | readonly ['ancestor', type_.ancestor]
            | readonly ['sibling', type_.sibling]
        
        export namespace tail {
            
            export type L = string
            
        }
        
        export type tail = _pi.List<tail.L>
        
    }
    
    export type D = {
        readonly 'type': D.type_
        readonly 'tail': D.tail
    }
    
}

export type Imports_ = _pi.Dictionary<Imports_.D>

export namespace Module_ {
    
    export type imports = Imports_
    
    export namespace types {
        
        export namespace D {
            
            export type data = Value_
            
            export namespace algorithm {
                
                export type result = Value_
                
                export type context = Value_
                
                export namespace type_ {
                    
                    export namespace transformer {
                        
                    }
                    
                    export type transformer = null
                    
                    export namespace refiner {
                        
                        export namespace error {
                            
                            export type O = Value_
                            
                        }
                        
                        export type error = _pi.Optional_Value<error.O>
                        
                        export namespace lookups {
                            
                            export namespace O {
                                
                                export namespace D {
                                    
                                    export type acyclic = Value_
                                    
                                    export type cyclic = Value_
                                    
                                    export type stack = Value_
                                    
                                }
                                
                                export type D = 
                                    | readonly ['acyclic', D.acyclic]
                                    | readonly ['cyclic', D.cyclic]
                                    | readonly ['stack', D.stack]
                                
                            }
                            
                            export type O = _pi.Dictionary<O.D>
                            
                        }
                        
                        export type lookups = _pi.Optional_Value<lookups.O>
                        
                    }
                    
                    export type refiner = {
                        readonly 'error': refiner.error
                        readonly 'lookups': refiner.lookups
                    }
                    
                }
                
                export type type_ = 
                    | readonly ['transformer', type_.transformer]
                    | readonly ['refiner', type_.refiner]
                
                export namespace parameters {
                    
                    export namespace O {
                        
                        export type D = Value_
                        
                    }
                    
                    export type O = _pi.Dictionary<O.D>
                    
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
        
        export type D = 
            | readonly ['data', D.data]
            | readonly ['algorithm', D.algorithm]
        
    }
    
    export type types = _pi.Dictionary<types.D>
    
}

export type Module_ = {
    readonly 'imports': Module_.imports
    readonly 'types': Module_.types
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

export namespace Module_Reference_ {
    
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

export type Module_Reference_ = 
    | readonly ['import', Module_Reference_.import_]
    | readonly ['local', Module_Reference_.local]

export namespace Value_ {
    
    export type boolean_ = null
    
    export namespace component {
        
        export type location = Module_Reference_
        
    }
    
    export type component = {
        readonly 'location': component.location
    }
    
    export type dictionary = Value_
    
    export namespace group {
        
        export type D = Value_
        
    }
    
    export type group = _pi.Dictionary<group.D>
    
    export type list = Value_
    
    export type nothing = null
    
    export namespace number_ {
        
        export namespace exact {
            
            export type natural = null
            
            export type integer = null
            
        }
        
        export type exact = 
            | readonly ['natural', exact.natural]
            | readonly ['integer', exact.integer]
        
        export type approximation = null
        
    }
    
    export type number_ = 
        | readonly ['exact', number_.exact]
        | readonly ['approximation', number_.approximation]
    
    export type optional = Value_
    
    export namespace reference {
        
        export type location = Module_Reference_
        
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
        
        export type cyclic = boolean
        
    }
    
    export type reference = {
        readonly 'location': reference.location
        readonly 'sub selection': reference.sub_selection
        readonly 'cyclic': reference.cyclic
    }
    
    export namespace state {
        
        export type D = Value_
        
    }
    
    export type state = _pi.Dictionary<state.D>
    
    export type text = null
    
}

export type Value_ = 
    | readonly ['boolean', Value_.boolean_]
    | readonly ['component', Value_.component]
    | readonly ['dictionary', Value_.dictionary]
    | readonly ['group', Value_.group]
    | readonly ['list', Value_.list]
    | readonly ['nothing', Value_.nothing]
    | readonly ['number', Value_.number_]
    | readonly ['optional', Value_.optional]
    | readonly ['reference', Value_.reference]
    | readonly ['state', Value_.state]
    | readonly ['text', Value_.text]

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Module_Reference_ as Module_Reference, 
    Value_ as Value, 
}
