import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Errors = _i_core._T_List<null, {
    readonly 'range': _T_Range
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['error', _i_core._T_State_Group<null, 
            | readonly ['duplicate property', {
                readonly 'name': string
            }]
            | readonly ['invalid value type', {
                readonly 'expected': _i_core._T_State_Group<null, 
                    | readonly ['dictionary', null]
                    | readonly ['group', null]
                    | readonly ['list', null]
                    | readonly ['not set', null]
                    | readonly ['set or not set', null]
                    | readonly ['text', null]
                >
            }]
            | readonly ['missing property', {
                readonly 'name': string
            }]
            | readonly ['state', _i_core._T_State_Group<null, 
                | readonly ['missing state name', null]
                | readonly ['missing value', null]
                | readonly ['more than 2 elements', null]
                | readonly ['state is not a string', null]
                | readonly ['unknown state', {
                    readonly 'expected': _i_core._T_Dictionary<null, null>
                    readonly 'found': string
                }]
            >]
        >]
        | readonly ['warning', _i_core._T_State_Group<null, 
            | readonly ['expected apostrophed string', null]
            | readonly ['expected backticked string', null]
            | readonly ['expected quoted string', null]
            | readonly ['expected undelimited string', null]
        >]
    >
}>

export type _T_Location = {
    readonly 'absolute': number
    readonly 'relative': _T_Relative_Location
}

export type _T_Range = {
    readonly 'end': _T_Location
    readonly 'start': _T_Location
}

export type _T_Relative_Location = {
    readonly 'column': number
    readonly 'line': number
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Errors = _T_Errors

export type Location = _T_Location

export type Range = _T_Range

export type Relative_Location = _T_Relative_Location

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Errors {
    
    export namespace L {
        
        export namespace range {
        }
        export type range = _T_Range
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace error {
                    
                    export namespace SG {
                        
                        export namespace duplicate_property {
                            export type name = string
                        }
                        export type duplicate_property = {
                            readonly 'name': string
                        }
                        
                        export namespace invalid_value_type {
                            
                            export namespace expected {
                                
                                export namespace SG {
                                    export type dictionary = null
                                    export type group = null
                                    export type list = null
                                    export type not_set = null
                                    export type set_or_not_set = null
                                    export type text = null
                                }
                                export type SG = 
                                    | readonly ['dictionary', null]
                                    | readonly ['group', null]
                                    | readonly ['list', null]
                                    | readonly ['not set', null]
                                    | readonly ['set or not set', null]
                                    | readonly ['text', null]
                            }
                            export type expected = _i_core._T_State_Group<null, 
                                | readonly ['dictionary', null]
                                | readonly ['group', null]
                                | readonly ['list', null]
                                | readonly ['not set', null]
                                | readonly ['set or not set', null]
                                | readonly ['text', null]
                            >
                        }
                        export type invalid_value_type = {
                            readonly 'expected': _i_core._T_State_Group<null, 
                                | readonly ['dictionary', null]
                                | readonly ['group', null]
                                | readonly ['list', null]
                                | readonly ['not set', null]
                                | readonly ['set or not set', null]
                                | readonly ['text', null]
                            >
                        }
                        
                        export namespace missing_property {
                            export type name = string
                        }
                        export type missing_property = {
                            readonly 'name': string
                        }
                        
                        export namespace state {
                            
                            export namespace SG {
                                export type missing_state_name = null
                                export type missing_value = null
                                export type more_than_2_elements = null
                                export type state_is_not_a_string = null
                                
                                export namespace unknown_state {
                                    
                                    export namespace expected {
                                        export type D = null
                                    }
                                    export type expected = _i_core._T_Dictionary<null, null>
                                    export type found = string
                                }
                                export type unknown_state = {
                                    readonly 'expected': _i_core._T_Dictionary<null, null>
                                    readonly 'found': string
                                }
                            }
                            export type SG = 
                                | readonly ['missing state name', null]
                                | readonly ['missing value', null]
                                | readonly ['more than 2 elements', null]
                                | readonly ['state is not a string', null]
                                | readonly ['unknown state', {
                                    readonly 'expected': _i_core._T_Dictionary<null, null>
                                    readonly 'found': string
                                }]
                        }
                        export type state = _i_core._T_State_Group<null, 
                            | readonly ['missing state name', null]
                            | readonly ['missing value', null]
                            | readonly ['more than 2 elements', null]
                            | readonly ['state is not a string', null]
                            | readonly ['unknown state', {
                                readonly 'expected': _i_core._T_Dictionary<null, null>
                                readonly 'found': string
                            }]
                        >
                    }
                    export type SG = 
                        | readonly ['duplicate property', {
                            readonly 'name': string
                        }]
                        | readonly ['invalid value type', {
                            readonly 'expected': _i_core._T_State_Group<null, 
                                | readonly ['dictionary', null]
                                | readonly ['group', null]
                                | readonly ['list', null]
                                | readonly ['not set', null]
                                | readonly ['set or not set', null]
                                | readonly ['text', null]
                            >
                        }]
                        | readonly ['missing property', {
                            readonly 'name': string
                        }]
                        | readonly ['state', _i_core._T_State_Group<null, 
                            | readonly ['missing state name', null]
                            | readonly ['missing value', null]
                            | readonly ['more than 2 elements', null]
                            | readonly ['state is not a string', null]
                            | readonly ['unknown state', {
                                readonly 'expected': _i_core._T_Dictionary<null, null>
                                readonly 'found': string
                            }]
                        >]
                }
                export type error = _i_core._T_State_Group<null, 
                    | readonly ['duplicate property', {
                        readonly 'name': string
                    }]
                    | readonly ['invalid value type', {
                        readonly 'expected': _i_core._T_State_Group<null, 
                            | readonly ['dictionary', null]
                            | readonly ['group', null]
                            | readonly ['list', null]
                            | readonly ['not set', null]
                            | readonly ['set or not set', null]
                            | readonly ['text', null]
                        >
                    }]
                    | readonly ['missing property', {
                        readonly 'name': string
                    }]
                    | readonly ['state', _i_core._T_State_Group<null, 
                        | readonly ['missing state name', null]
                        | readonly ['missing value', null]
                        | readonly ['more than 2 elements', null]
                        | readonly ['state is not a string', null]
                        | readonly ['unknown state', {
                            readonly 'expected': _i_core._T_Dictionary<null, null>
                            readonly 'found': string
                        }]
                    >]
                >
                
                export namespace warning {
                    
                    export namespace SG {
                        export type expected_apostrophed_string = null
                        export type expected_backticked_string = null
                        export type expected_quoted_string = null
                        export type expected_undelimited_string = null
                    }
                    export type SG = 
                        | readonly ['expected apostrophed string', null]
                        | readonly ['expected backticked string', null]
                        | readonly ['expected quoted string', null]
                        | readonly ['expected undelimited string', null]
                }
                export type warning = _i_core._T_State_Group<null, 
                    | readonly ['expected apostrophed string', null]
                    | readonly ['expected backticked string', null]
                    | readonly ['expected quoted string', null]
                    | readonly ['expected undelimited string', null]
                >
            }
            export type SG = 
                | readonly ['error', _i_core._T_State_Group<null, 
                    | readonly ['duplicate property', {
                        readonly 'name': string
                    }]
                    | readonly ['invalid value type', {
                        readonly 'expected': _i_core._T_State_Group<null, 
                            | readonly ['dictionary', null]
                            | readonly ['group', null]
                            | readonly ['list', null]
                            | readonly ['not set', null]
                            | readonly ['set or not set', null]
                            | readonly ['text', null]
                        >
                    }]
                    | readonly ['missing property', {
                        readonly 'name': string
                    }]
                    | readonly ['state', _i_core._T_State_Group<null, 
                        | readonly ['missing state name', null]
                        | readonly ['missing value', null]
                        | readonly ['more than 2 elements', null]
                        | readonly ['state is not a string', null]
                        | readonly ['unknown state', {
                            readonly 'expected': _i_core._T_Dictionary<null, null>
                            readonly 'found': string
                        }]
                    >]
                >]
                | readonly ['warning', _i_core._T_State_Group<null, 
                    | readonly ['expected apostrophed string', null]
                    | readonly ['expected backticked string', null]
                    | readonly ['expected quoted string', null]
                    | readonly ['expected undelimited string', null]
                >]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['error', _i_core._T_State_Group<null, 
                | readonly ['duplicate property', {
                    readonly 'name': string
                }]
                | readonly ['invalid value type', {
                    readonly 'expected': _i_core._T_State_Group<null, 
                        | readonly ['dictionary', null]
                        | readonly ['group', null]
                        | readonly ['list', null]
                        | readonly ['not set', null]
                        | readonly ['set or not set', null]
                        | readonly ['text', null]
                    >
                }]
                | readonly ['missing property', {
                    readonly 'name': string
                }]
                | readonly ['state', _i_core._T_State_Group<null, 
                    | readonly ['missing state name', null]
                    | readonly ['missing value', null]
                    | readonly ['more than 2 elements', null]
                    | readonly ['state is not a string', null]
                    | readonly ['unknown state', {
                        readonly 'expected': _i_core._T_Dictionary<null, null>
                        readonly 'found': string
                    }]
                >]
            >]
            | readonly ['warning', _i_core._T_State_Group<null, 
                | readonly ['expected apostrophed string', null]
                | readonly ['expected backticked string', null]
                | readonly ['expected quoted string', null]
                | readonly ['expected undelimited string', null]
            >]
        >
    }
    export type L = {
        readonly 'range': _T_Range
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['error', _i_core._T_State_Group<null, 
                | readonly ['duplicate property', {
                    readonly 'name': string
                }]
                | readonly ['invalid value type', {
                    readonly 'expected': _i_core._T_State_Group<null, 
                        | readonly ['dictionary', null]
                        | readonly ['group', null]
                        | readonly ['list', null]
                        | readonly ['not set', null]
                        | readonly ['set or not set', null]
                        | readonly ['text', null]
                    >
                }]
                | readonly ['missing property', {
                    readonly 'name': string
                }]
                | readonly ['state', _i_core._T_State_Group<null, 
                    | readonly ['missing state name', null]
                    | readonly ['missing value', null]
                    | readonly ['more than 2 elements', null]
                    | readonly ['state is not a string', null]
                    | readonly ['unknown state', {
                        readonly 'expected': _i_core._T_Dictionary<null, null>
                        readonly 'found': string
                    }]
                >]
            >]
            | readonly ['warning', _i_core._T_State_Group<null, 
                | readonly ['expected apostrophed string', null]
                | readonly ['expected backticked string', null]
                | readonly ['expected quoted string', null]
                | readonly ['expected undelimited string', null]
            >]
        >
    }
}

export namespace _T_Location {
    export type absolute = number
    
    export namespace relative {
    }
    export type relative = _T_Relative_Location
}

export namespace _T_Range {
    
    export namespace end {
    }
    export type end = _T_Location
    
    export namespace start {
    }
    export type start = _T_Location
}

export namespace _T_Relative_Location {
    export type column = number
    export type line = number
}

// *** ALIASES FOR NESTED TYPES

export namespace Errors {
    
    export namespace L {
        
        export namespace range {
        }
        export type range = _T_Range
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace error {
                    
                    export namespace SG {
                        
                        export namespace duplicate_property {
                            export type name = string
                        }
                        export type duplicate_property = {
                            readonly 'name': string
                        }
                        
                        export namespace invalid_value_type {
                            
                            export namespace expected {
                                
                                export namespace SG {
                                    export type dictionary = null
                                    export type group = null
                                    export type list = null
                                    export type not_set = null
                                    export type set_or_not_set = null
                                    export type text = null
                                }
                                export type SG = 
                                    | readonly ['dictionary', null]
                                    | readonly ['group', null]
                                    | readonly ['list', null]
                                    | readonly ['not set', null]
                                    | readonly ['set or not set', null]
                                    | readonly ['text', null]
                            }
                            export type expected = _i_core._T_State_Group<null, 
                                | readonly ['dictionary', null]
                                | readonly ['group', null]
                                | readonly ['list', null]
                                | readonly ['not set', null]
                                | readonly ['set or not set', null]
                                | readonly ['text', null]
                            >
                        }
                        export type invalid_value_type = {
                            readonly 'expected': _i_core._T_State_Group<null, 
                                | readonly ['dictionary', null]
                                | readonly ['group', null]
                                | readonly ['list', null]
                                | readonly ['not set', null]
                                | readonly ['set or not set', null]
                                | readonly ['text', null]
                            >
                        }
                        
                        export namespace missing_property {
                            export type name = string
                        }
                        export type missing_property = {
                            readonly 'name': string
                        }
                        
                        export namespace state {
                            
                            export namespace SG {
                                export type missing_state_name = null
                                export type missing_value = null
                                export type more_than_2_elements = null
                                export type state_is_not_a_string = null
                                
                                export namespace unknown_state {
                                    
                                    export namespace expected {
                                        export type D = null
                                    }
                                    export type expected = _i_core._T_Dictionary<null, null>
                                    export type found = string
                                }
                                export type unknown_state = {
                                    readonly 'expected': _i_core._T_Dictionary<null, null>
                                    readonly 'found': string
                                }
                            }
                            export type SG = 
                                | readonly ['missing state name', null]
                                | readonly ['missing value', null]
                                | readonly ['more than 2 elements', null]
                                | readonly ['state is not a string', null]
                                | readonly ['unknown state', {
                                    readonly 'expected': _i_core._T_Dictionary<null, null>
                                    readonly 'found': string
                                }]
                        }
                        export type state = _i_core._T_State_Group<null, 
                            | readonly ['missing state name', null]
                            | readonly ['missing value', null]
                            | readonly ['more than 2 elements', null]
                            | readonly ['state is not a string', null]
                            | readonly ['unknown state', {
                                readonly 'expected': _i_core._T_Dictionary<null, null>
                                readonly 'found': string
                            }]
                        >
                    }
                    export type SG = 
                        | readonly ['duplicate property', {
                            readonly 'name': string
                        }]
                        | readonly ['invalid value type', {
                            readonly 'expected': _i_core._T_State_Group<null, 
                                | readonly ['dictionary', null]
                                | readonly ['group', null]
                                | readonly ['list', null]
                                | readonly ['not set', null]
                                | readonly ['set or not set', null]
                                | readonly ['text', null]
                            >
                        }]
                        | readonly ['missing property', {
                            readonly 'name': string
                        }]
                        | readonly ['state', _i_core._T_State_Group<null, 
                            | readonly ['missing state name', null]
                            | readonly ['missing value', null]
                            | readonly ['more than 2 elements', null]
                            | readonly ['state is not a string', null]
                            | readonly ['unknown state', {
                                readonly 'expected': _i_core._T_Dictionary<null, null>
                                readonly 'found': string
                            }]
                        >]
                }
                export type error = _i_core._T_State_Group<null, 
                    | readonly ['duplicate property', {
                        readonly 'name': string
                    }]
                    | readonly ['invalid value type', {
                        readonly 'expected': _i_core._T_State_Group<null, 
                            | readonly ['dictionary', null]
                            | readonly ['group', null]
                            | readonly ['list', null]
                            | readonly ['not set', null]
                            | readonly ['set or not set', null]
                            | readonly ['text', null]
                        >
                    }]
                    | readonly ['missing property', {
                        readonly 'name': string
                    }]
                    | readonly ['state', _i_core._T_State_Group<null, 
                        | readonly ['missing state name', null]
                        | readonly ['missing value', null]
                        | readonly ['more than 2 elements', null]
                        | readonly ['state is not a string', null]
                        | readonly ['unknown state', {
                            readonly 'expected': _i_core._T_Dictionary<null, null>
                            readonly 'found': string
                        }]
                    >]
                >
                
                export namespace warning {
                    
                    export namespace SG {
                        export type expected_apostrophed_string = null
                        export type expected_backticked_string = null
                        export type expected_quoted_string = null
                        export type expected_undelimited_string = null
                    }
                    export type SG = 
                        | readonly ['expected apostrophed string', null]
                        | readonly ['expected backticked string', null]
                        | readonly ['expected quoted string', null]
                        | readonly ['expected undelimited string', null]
                }
                export type warning = _i_core._T_State_Group<null, 
                    | readonly ['expected apostrophed string', null]
                    | readonly ['expected backticked string', null]
                    | readonly ['expected quoted string', null]
                    | readonly ['expected undelimited string', null]
                >
            }
            export type SG = 
                | readonly ['error', _i_core._T_State_Group<null, 
                    | readonly ['duplicate property', {
                        readonly 'name': string
                    }]
                    | readonly ['invalid value type', {
                        readonly 'expected': _i_core._T_State_Group<null, 
                            | readonly ['dictionary', null]
                            | readonly ['group', null]
                            | readonly ['list', null]
                            | readonly ['not set', null]
                            | readonly ['set or not set', null]
                            | readonly ['text', null]
                        >
                    }]
                    | readonly ['missing property', {
                        readonly 'name': string
                    }]
                    | readonly ['state', _i_core._T_State_Group<null, 
                        | readonly ['missing state name', null]
                        | readonly ['missing value', null]
                        | readonly ['more than 2 elements', null]
                        | readonly ['state is not a string', null]
                        | readonly ['unknown state', {
                            readonly 'expected': _i_core._T_Dictionary<null, null>
                            readonly 'found': string
                        }]
                    >]
                >]
                | readonly ['warning', _i_core._T_State_Group<null, 
                    | readonly ['expected apostrophed string', null]
                    | readonly ['expected backticked string', null]
                    | readonly ['expected quoted string', null]
                    | readonly ['expected undelimited string', null]
                >]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['error', _i_core._T_State_Group<null, 
                | readonly ['duplicate property', {
                    readonly 'name': string
                }]
                | readonly ['invalid value type', {
                    readonly 'expected': _i_core._T_State_Group<null, 
                        | readonly ['dictionary', null]
                        | readonly ['group', null]
                        | readonly ['list', null]
                        | readonly ['not set', null]
                        | readonly ['set or not set', null]
                        | readonly ['text', null]
                    >
                }]
                | readonly ['missing property', {
                    readonly 'name': string
                }]
                | readonly ['state', _i_core._T_State_Group<null, 
                    | readonly ['missing state name', null]
                    | readonly ['missing value', null]
                    | readonly ['more than 2 elements', null]
                    | readonly ['state is not a string', null]
                    | readonly ['unknown state', {
                        readonly 'expected': _i_core._T_Dictionary<null, null>
                        readonly 'found': string
                    }]
                >]
            >]
            | readonly ['warning', _i_core._T_State_Group<null, 
                | readonly ['expected apostrophed string', null]
                | readonly ['expected backticked string', null]
                | readonly ['expected quoted string', null]
                | readonly ['expected undelimited string', null]
            >]
        >
    }
    export type L = {
        readonly 'range': _T_Range
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['error', _i_core._T_State_Group<null, 
                | readonly ['duplicate property', {
                    readonly 'name': string
                }]
                | readonly ['invalid value type', {
                    readonly 'expected': _i_core._T_State_Group<null, 
                        | readonly ['dictionary', null]
                        | readonly ['group', null]
                        | readonly ['list', null]
                        | readonly ['not set', null]
                        | readonly ['set or not set', null]
                        | readonly ['text', null]
                    >
                }]
                | readonly ['missing property', {
                    readonly 'name': string
                }]
                | readonly ['state', _i_core._T_State_Group<null, 
                    | readonly ['missing state name', null]
                    | readonly ['missing value', null]
                    | readonly ['more than 2 elements', null]
                    | readonly ['state is not a string', null]
                    | readonly ['unknown state', {
                        readonly 'expected': _i_core._T_Dictionary<null, null>
                        readonly 'found': string
                    }]
                >]
            >]
            | readonly ['warning', _i_core._T_State_Group<null, 
                | readonly ['expected apostrophed string', null]
                | readonly ['expected backticked string', null]
                | readonly ['expected quoted string', null]
                | readonly ['expected undelimited string', null]
            >]
        >
    }
}

export namespace Location {
    export type absolute = number
    
    export namespace relative {
    }
    export type relative = _T_Relative_Location
}

export namespace Range {
    
    export namespace end {
    }
    export type end = _T_Location
    
    export namespace start {
    }
    export type start = _T_Location
}

export namespace Relative_Location {
    export type column = number
    export type line = number
}
