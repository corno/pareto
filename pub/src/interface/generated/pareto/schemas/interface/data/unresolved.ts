
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../../core/location"

export namespace Imports_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export namespace entry {
                
                export namespace _type {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
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
                    
                    export type state_group = 
                        | readonly ['external', state_group.external]
                        | readonly ['ancestor', state_group.ancestor]
                        | readonly ['sibling', state_group.sibling]
                    
                }
                
                export type _type = {
                    readonly 'location': _type.location
                    readonly 'state group': _type.state_group
                }
                
                export namespace tail {
                    
                    export type location = i__location.Location
                    
                    export namespace list {
                        
                        export namespace L {
                            
                            export type location = i__location.Location
                            
                            export type element = string
                            
                        }
                        
                        export type L = {
                            readonly 'location': L.location
                            readonly 'element': L.element
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
                readonly 'type': entry._type
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
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export type data = Type_
                        
                        export namespace algorithm {
                            
                            export type result = Type_
                            
                            export type context = Type_
                            
                            export namespace _type {
                                
                                export type location = i__location.Location
                                
                                export namespace state_group {
                                    
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
                                                
                                                export type location = i__location.Location
                                                
                                                export namespace dictionary {
                                                    
                                                    export namespace D {
                                                        
                                                        export type location = i__location.Location
                                                        
                                                        export namespace entry {
                                                            
                                                            export type location = i__location.Location
                                                            
                                                            export namespace state_group {
                                                                
                                                                export type acyclic = Type_
                                                                
                                                                export type cyclic = Type_
                                                                
                                                                export type stack = Type_
                                                                
                                                            }
                                                            
                                                            export type state_group = 
                                                                | readonly ['acyclic', state_group.acyclic]
                                                                | readonly ['cyclic', state_group.cyclic]
                                                                | readonly ['stack', state_group.stack]
                                                            
                                                        }
                                                        
                                                        export type entry = {
                                                            readonly 'location': entry.location
                                                            readonly 'state group': entry.state_group
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
                                
                                export type state_group = 
                                    | readonly ['transformer', state_group.transformer]
                                    | readonly ['refiner', state_group.refiner]
                                
                            }
                            
                            export type _type = {
                                readonly 'location': _type.location
                                readonly 'state group': _type.state_group
                            }
                            
                            export namespace parameters {
                                
                                export namespace O {
                                    
                                    export type location = i__location.Location
                                    
                                    export namespace dictionary {
                                        
                                        export namespace D {
                                            
                                            export type location = i__location.Location
                                            
                                            export type entry = Type_
                                            
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
                            readonly 'type': algorithm._type
                            readonly 'parameters': algorithm.parameters
                        }
                        
                    }
                    
                    export type state_group = 
                        | readonly ['data', state_group.data]
                        | readonly ['algorithm', state_group.algorithm]
                    
                }
                
                export type entry = {
                    readonly 'location': entry.location
                    readonly 'state group': entry.state_group
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
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export namespace entry {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
                    export type _module = Module_
                    
                    export type _set = Module_Set_
                    
                }
                
                export type state_group = 
                    | readonly ['module', state_group._module]
                    | readonly ['set', state_group._set]
                
            }
            
            export type entry = {
                readonly 'location': entry.location
                readonly 'state group': entry.state_group
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

export namespace Type_ {
    
    export type location = i__location.Location
    
    export namespace state_group {
        
        export type _boolean = null
        
        export namespace component {
            
            export namespace location {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
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
                
                export type state_group = 
                    | readonly ['import', state_group._import]
                    | readonly ['sibling', state_group.sibling]
                
            }
            
            export type location = {
                readonly 'location': location.location
                readonly 'state group': location.state_group
            }
            
        }
        
        export type component = {
            readonly 'location': component.location
        }
        
        export type dictionary = Type_
        
        export namespace group {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export type entry = Type_
                    
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
        
        export type list = Type_
        
        export type nothing = null
        
        export namespace _number {
            
            export type location = i__location.Location
            
            export namespace state_group {
                
                export namespace exact {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export type natural = null
                        
                        export type integer = null
                        
                    }
                    
                    export type state_group = 
                        | readonly ['natural', state_group.natural]
                        | readonly ['integer', state_group.integer]
                    
                }
                
                export type exact = {
                    readonly 'location': exact.location
                    readonly 'state group': exact.state_group
                }
                
                export type approximation = null
                
            }
            
            export type state_group = 
                | readonly ['exact', state_group.exact]
                | readonly ['approximation', state_group.approximation]
            
        }
        
        export type _number = {
            readonly 'location': _number.location
            readonly 'state group': _number.state_group
        }
        
        export type optional = Type_
        
        export namespace reference {
            
            export namespace location {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
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
                
                export type state_group = 
                    | readonly ['import', state_group._import]
                    | readonly ['sibling', state_group.sibling]
                
            }
            
            export type location = {
                readonly 'location': location.location
                readonly 'state group': location.state_group
            }
            
            export namespace sub_selection {
                
                export type location = i__location.Location
                
                export namespace list {
                    
                    export namespace L {
                        
                        export type location = i__location.Location
                        
                        export namespace element {
                            
                            export type location = i__location.Location
                            
                            export namespace state_group {
                                
                                export type dictionary = null
                                
                                export type group = string
                                
                                export type list = null
                                
                                export type optional = null
                                
                                export type state_group = string
                                
                            }
                            
                            export type state_group = 
                                | readonly ['dictionary', state_group.dictionary]
                                | readonly ['group', state_group.group]
                                | readonly ['list', state_group.list]
                                | readonly ['optional', state_group.optional]
                                | readonly ['state group', state_group.state_group]
                            
                        }
                        
                        export type element = {
                            readonly 'location': element.location
                            readonly 'state group': element.state_group
                        }
                        
                    }
                    
                    export type L = {
                        readonly 'location': L.location
                        readonly 'element': L.element
                    }
                    
                }
                
                export type list = _pi.List<list.L>
                
            }
            
            export type sub_selection = {
                readonly 'location': sub_selection.location
                readonly 'list': sub_selection.list
            }
            
        }
        
        export type reference = {
            readonly 'location': reference.location
            readonly 'sub selection': reference.sub_selection
        }
        
        export namespace state_group {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export type entry = Type_
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type state_group = {
            readonly 'location': state_group.location
            readonly 'dictionary': state_group.dictionary
        }
        
        export type text = null
        
    }
    
    export type state_group = 
        | readonly ['boolean', state_group._boolean]
        | readonly ['component', state_group.component]
        | readonly ['dictionary', state_group.dictionary]
        | readonly ['group', state_group.group]
        | readonly ['list', state_group.list]
        | readonly ['nothing', state_group.nothing]
        | readonly ['number', state_group._number]
        | readonly ['optional', state_group.optional]
        | readonly ['reference', state_group.reference]
        | readonly ['state group', state_group.state_group]
        | readonly ['text', state_group.text]
    
}

export type Type_ = {
    readonly 'location': Type_.location
    readonly 'state group': Type_.state_group
}

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_ as Type, 
}
