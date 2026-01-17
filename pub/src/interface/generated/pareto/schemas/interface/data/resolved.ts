
import * as _pi from "pareto-core-interface"

import * as i__location from "../../../core/location"

export namespace Imports_ {
    
    export namespace D {
        
        export namespace _type {
            
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
        
        export type _type = 
            | readonly ['external', _type.external]
            | readonly ['ancestor', _type.ancestor]
            | readonly ['sibling', _type.sibling]
        
        export namespace tail {
            
            export type L = string
            
        }
        
        export type tail = _pi.List<tail.L>
        
    }
    
    export type D = {
        readonly 'type': D._type
        readonly 'tail': D.tail
    }
    
}

export type Imports_ = _pi.Dictionary<Imports_.D>

export namespace Module_ {
    
    export type imports = Imports_
    
    export namespace types {
        
        export namespace D {
            
            export type data = Type_
            
            export namespace algorithm {
                
                export type result = Type_
                
                export type context = Type_
                
                export namespace _type {
                    
                    export namespace transformer {
                        
                    }
                    
                    export type transformer = null
                    
                    export namespace refiner {
                        
                        export namespace error {
                            
                            export type O = Type_
                            
                        }
                        
                        export type error = _pi.Optional_Value<error.O>
                        
                        export namespace lookups {
                            
                            export namespace O {
                                
                                export namespace D {
                                    
                                    export type acyclic = Type_
                                    
                                    export type cyclic = Type_
                                    
                                    export type stack = Type_
                                    
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
                
                export type _type = 
                    | readonly ['transformer', _type.transformer]
                    | readonly ['refiner', _type.refiner]
                
                export namespace parameters {
                    
                    export namespace O {
                        
                        export type D = Type_
                        
                    }
                    
                    export type O = _pi.Dictionary<O.D>
                    
                }
                
                export type parameters = _pi.Optional_Value<parameters.O>
                
            }
            
            export type algorithm = {
                readonly 'result': algorithm.result
                readonly 'context': algorithm.context
                readonly 'type': algorithm._type
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
        
        export type _module = Module_
        
        export type _set = Module_Set_
        
    }
    
    export type D = 
        | readonly ['module', D._module]
        | readonly ['set', D._set]
    
}

export type Module_Set_ = _pi.Dictionary<Module_Set_.D>

export namespace Type_ {
    
    export type _boolean = null
    
    export namespace component {
        
        export namespace location {
            
            export namespace _import {
                
                export type _import = string
                
                export type _type = string
                
            }
            
            export type _import = {
                readonly 'import': _import._import
                readonly 'type': _import._type
            }
            
            export type sibling = string
            
        }
        
        export type location = 
            | readonly ['import', location._import]
            | readonly ['sibling', location.sibling]
        
    }
    
    export type component = {
        readonly 'location': component.location
    }
    
    export type dictionary = Type_
    
    export namespace group {
        
        export type D = Type_
        
    }
    
    export type group = _pi.Dictionary<group.D>
    
    export type list = Type_
    
    export type nothing = null
    
    export namespace _number {
        
        export namespace exact {
            
            export type natural = null
            
            export type integer = null
            
        }
        
        export type exact = 
            | readonly ['natural', exact.natural]
            | readonly ['integer', exact.integer]
        
        export type approximation = null
        
    }
    
    export type _number = 
        | readonly ['exact', _number.exact]
        | readonly ['approximation', _number.approximation]
    
    export type optional = Type_
    
    export namespace reference {
        
        export namespace location {
            
            export namespace _import {
                
                export type _import = string
                
                export type _type = string
                
            }
            
            export type _import = {
                readonly 'import': _import._import
                readonly 'type': _import._type
            }
            
            export namespace sibling {
                
                export type sibling = string
                
                export type circular_dependent = boolean
                
            }
            
            export type sibling = {
                readonly 'sibling': sibling.sibling
                readonly 'circular dependent': sibling.circular_dependent
            }
            
        }
        
        export type location = 
            | readonly ['import', location._import]
            | readonly ['sibling', location.sibling]
        
        export namespace sub_selection {
            
            export namespace L {
                
                export type dictionary = null
                
                export type group = string
                
                export type list = null
                
                export type optional = null
                
                export type state_group = string
                
            }
            
            export type L = 
                | readonly ['dictionary', L.dictionary]
                | readonly ['group', L.group]
                | readonly ['list', L.list]
                | readonly ['optional', L.optional]
                | readonly ['state group', L.state_group]
            
        }
        
        export type sub_selection = _pi.List<sub_selection.L>
        
    }
    
    export type reference = {
        readonly 'location': reference.location
        readonly 'sub selection': reference.sub_selection
    }
    
    export namespace state_group {
        
        export type D = Type_
        
    }
    
    export type state_group = _pi.Dictionary<state_group.D>
    
    export type text = null
    
}

export type Type_ = 
    | readonly ['boolean', Type_._boolean]
    | readonly ['component', Type_.component]
    | readonly ['dictionary', Type_.dictionary]
    | readonly ['group', Type_.group]
    | readonly ['list', Type_.list]
    | readonly ['nothing', Type_.nothing]
    | readonly ['number', Type_._number]
    | readonly ['optional', Type_.optional]
    | readonly ['reference', Type_.reference]
    | readonly ['state group', Type_.state_group]
    | readonly ['text', Type_.text]

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_ as Type, 
}
