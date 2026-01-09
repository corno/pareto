import * as _pi from 'pareto-core-interface'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Relative_Location = {
    readonly 'line': number
    readonly 'column': number
}

export type _T_Location = {
    readonly 'relative': _T_Relative_Location
    readonly 'absolute': number
}

export type _T_Range = {
    readonly 'start': _T_Location
    readonly 'end': _T_Location
}

export type _T_Errors = _i_core._T_List<null, {
    readonly 'range': _T_Range
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['error', _i_core._T_State_Group<null, 
            | readonly ['invalid value type', {
                readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['text', null]
                    | readonly ['verbose group', null]
                    | readonly ['concise group', null]
                    | readonly ['dictionary', null]
                    | readonly ['not set', null]
                    | readonly ['set', null]
                    | readonly ['list', null]
                    | readonly ['state', null]
                >>
            }]
            | readonly ['duplicate property', {
                readonly 'name': string
            }]
            | readonly ['missing property', {
                readonly 'name': string
            }]
            | readonly ['superfluous property', {
                readonly 'name': string
            }]
            | readonly ['state', _i_core._T_State_Group<null, 
                | readonly ['more than 2 elements', null]
                | readonly ['missing state name', null]
                | readonly ['state is not a string', null]
                | readonly ['missing value', null]
                | readonly ['unknown state', {
                    readonly 'found': string
                    readonly 'expected': _i_core._T_Dictionary<null, null>
                }]
                | readonly ['missing data marker', null]
            >]
        >]
        | readonly ['warning', _i_core._T_State_Group<null, 
            | readonly ['expected apostrophed string', null]
            | readonly ['expected quoted string', null]
            | readonly ['expected backticked string', null]
            | readonly ['expected undelimited string', null]
        >]
    >
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Relative_Location = _T_Relative_Location

export type Location = _T_Location

export type Range = _T_Range

export type Errors = _T_Errors

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Relative_Location {
    export type line = number
    export type column = number
}

export namespace _T_Location {
    
    export namespace relative {
    }
    export type relative = _T_Relative_Location
    export type absolute = number
}

export namespace _T_Range {
    
    export namespace start {
    }
    export type start = _T_Location
    
    export namespace end {
    }
    export type end = _T_Location
}

export namespace _T_Errors {
    
    export namespace L {
        
        export namespace range {
        }
        export type range = _T_Range
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace error {
                    
                    export namespace SG {
                        
                        export namespace invalid_value_type {
                            
                            export namespace expected {
                                
                                export namespace L {
                                    
                                    export namespace SG {
                                        export type text = null
                                        export type verbose_group = null
                                        export type concise_group = null
                                        export type dictionary = null
                                        export type not_set = null
                                        export type _set = null
                                        export type list = null
                                        export type state = null
                                    }
                                    export type SG = 
                                        | readonly ['text', null]
                                        | readonly ['verbose group', null]
                                        | readonly ['concise group', null]
                                        | readonly ['dictionary', null]
                                        | readonly ['not set', null]
                                        | readonly ['set', null]
                                        | readonly ['list', null]
                                        | readonly ['state', null]
                                }
                                export type L = _i_core._T_State_Group<null, 
                                    | readonly ['text', null]
                                    | readonly ['verbose group', null]
                                    | readonly ['concise group', null]
                                    | readonly ['dictionary', null]
                                    | readonly ['not set', null]
                                    | readonly ['set', null]
                                    | readonly ['list', null]
                                    | readonly ['state', null]
                                >
                            }
                            export type expected = _i_core._T_List<null, _i_core._T_State_Group<null, 
                                | readonly ['text', null]
                                | readonly ['verbose group', null]
                                | readonly ['concise group', null]
                                | readonly ['dictionary', null]
                                | readonly ['not set', null]
                                | readonly ['set', null]
                                | readonly ['list', null]
                                | readonly ['state', null]
                            >>
                        }
                        export type invalid_value_type = {
                            readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                                | readonly ['text', null]
                                | readonly ['verbose group', null]
                                | readonly ['concise group', null]
                                | readonly ['dictionary', null]
                                | readonly ['not set', null]
                                | readonly ['set', null]
                                | readonly ['list', null]
                                | readonly ['state', null]
                            >>
                        }
                        
                        export namespace duplicate_property {
                            export type name = string
                        }
                        export type duplicate_property = {
                            readonly 'name': string
                        }
                        
                        export namespace missing_property {
                            export type name = string
                        }
                        export type missing_property = {
                            readonly 'name': string
                        }
                        
                        export namespace superfluous_property {
                            export type name = string
                        }
                        export type superfluous_property = {
                            readonly 'name': string
                        }
                        
                        export namespace state {
                            
                            export namespace SG {
                                export type more_than_2_elements = null
                                export type missing_state_name = null
                                export type state_is_not_a_string = null
                                export type missing_value = null
                                
                                export namespace unknown_state {
                                    export type found = string
                                    
                                    export namespace expected {
                                        export type D = null
                                    }
                                    export type expected = _i_core._T_Dictionary<null, null>
                                }
                                export type unknown_state = {
                                    readonly 'found': string
                                    readonly 'expected': _i_core._T_Dictionary<null, null>
                                }
                                export type missing_data_marker = null
                            }
                            export type SG = 
                                | readonly ['more than 2 elements', null]
                                | readonly ['missing state name', null]
                                | readonly ['state is not a string', null]
                                | readonly ['missing value', null]
                                | readonly ['unknown state', {
                                    readonly 'found': string
                                    readonly 'expected': _i_core._T_Dictionary<null, null>
                                }]
                                | readonly ['missing data marker', null]
                        }
                        export type state = _i_core._T_State_Group<null, 
                            | readonly ['more than 2 elements', null]
                            | readonly ['missing state name', null]
                            | readonly ['state is not a string', null]
                            | readonly ['missing value', null]
                            | readonly ['unknown state', {
                                readonly 'found': string
                                readonly 'expected': _i_core._T_Dictionary<null, null>
                            }]
                            | readonly ['missing data marker', null]
                        >
                    }
                    export type SG = 
                        | readonly ['invalid value type', {
                            readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                                | readonly ['text', null]
                                | readonly ['verbose group', null]
                                | readonly ['concise group', null]
                                | readonly ['dictionary', null]
                                | readonly ['not set', null]
                                | readonly ['set', null]
                                | readonly ['list', null]
                                | readonly ['state', null]
                            >>
                        }]
                        | readonly ['duplicate property', {
                            readonly 'name': string
                        }]
                        | readonly ['missing property', {
                            readonly 'name': string
                        }]
                        | readonly ['superfluous property', {
                            readonly 'name': string
                        }]
                        | readonly ['state', _i_core._T_State_Group<null, 
                            | readonly ['more than 2 elements', null]
                            | readonly ['missing state name', null]
                            | readonly ['state is not a string', null]
                            | readonly ['missing value', null]
                            | readonly ['unknown state', {
                                readonly 'found': string
                                readonly 'expected': _i_core._T_Dictionary<null, null>
                            }]
                            | readonly ['missing data marker', null]
                        >]
                }
                export type error = _i_core._T_State_Group<null, 
                    | readonly ['invalid value type', {
                        readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                            | readonly ['text', null]
                            | readonly ['verbose group', null]
                            | readonly ['concise group', null]
                            | readonly ['dictionary', null]
                            | readonly ['not set', null]
                            | readonly ['set', null]
                            | readonly ['list', null]
                            | readonly ['state', null]
                        >>
                    }]
                    | readonly ['duplicate property', {
                        readonly 'name': string
                    }]
                    | readonly ['missing property', {
                        readonly 'name': string
                    }]
                    | readonly ['superfluous property', {
                        readonly 'name': string
                    }]
                    | readonly ['state', _i_core._T_State_Group<null, 
                        | readonly ['more than 2 elements', null]
                        | readonly ['missing state name', null]
                        | readonly ['state is not a string', null]
                        | readonly ['missing value', null]
                        | readonly ['unknown state', {
                            readonly 'found': string
                            readonly 'expected': _i_core._T_Dictionary<null, null>
                        }]
                        | readonly ['missing data marker', null]
                    >]
                >
                
                export namespace warning {
                    
                    export namespace SG {
                        export type expected_apostrophed_string = null
                        export type expected_quoted_string = null
                        export type expected_backticked_string = null
                        export type expected_undelimited_string = null
                    }
                    export type SG = 
                        | readonly ['expected apostrophed string', null]
                        | readonly ['expected quoted string', null]
                        | readonly ['expected backticked string', null]
                        | readonly ['expected undelimited string', null]
                }
                export type warning = _i_core._T_State_Group<null, 
                    | readonly ['expected apostrophed string', null]
                    | readonly ['expected quoted string', null]
                    | readonly ['expected backticked string', null]
                    | readonly ['expected undelimited string', null]
                >
            }
            export type SG = 
                | readonly ['error', _i_core._T_State_Group<null, 
                    | readonly ['invalid value type', {
                        readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                            | readonly ['text', null]
                            | readonly ['verbose group', null]
                            | readonly ['concise group', null]
                            | readonly ['dictionary', null]
                            | readonly ['not set', null]
                            | readonly ['set', null]
                            | readonly ['list', null]
                            | readonly ['state', null]
                        >>
                    }]
                    | readonly ['duplicate property', {
                        readonly 'name': string
                    }]
                    | readonly ['missing property', {
                        readonly 'name': string
                    }]
                    | readonly ['superfluous property', {
                        readonly 'name': string
                    }]
                    | readonly ['state', _i_core._T_State_Group<null, 
                        | readonly ['more than 2 elements', null]
                        | readonly ['missing state name', null]
                        | readonly ['state is not a string', null]
                        | readonly ['missing value', null]
                        | readonly ['unknown state', {
                            readonly 'found': string
                            readonly 'expected': _i_core._T_Dictionary<null, null>
                        }]
                        | readonly ['missing data marker', null]
                    >]
                >]
                | readonly ['warning', _i_core._T_State_Group<null, 
                    | readonly ['expected apostrophed string', null]
                    | readonly ['expected quoted string', null]
                    | readonly ['expected backticked string', null]
                    | readonly ['expected undelimited string', null]
                >]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['error', _i_core._T_State_Group<null, 
                | readonly ['invalid value type', {
                    readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                        | readonly ['text', null]
                        | readonly ['verbose group', null]
                        | readonly ['concise group', null]
                        | readonly ['dictionary', null]
                        | readonly ['not set', null]
                        | readonly ['set', null]
                        | readonly ['list', null]
                        | readonly ['state', null]
                    >>
                }]
                | readonly ['duplicate property', {
                    readonly 'name': string
                }]
                | readonly ['missing property', {
                    readonly 'name': string
                }]
                | readonly ['superfluous property', {
                    readonly 'name': string
                }]
                | readonly ['state', _i_core._T_State_Group<null, 
                    | readonly ['more than 2 elements', null]
                    | readonly ['missing state name', null]
                    | readonly ['state is not a string', null]
                    | readonly ['missing value', null]
                    | readonly ['unknown state', {
                        readonly 'found': string
                        readonly 'expected': _i_core._T_Dictionary<null, null>
                    }]
                    | readonly ['missing data marker', null]
                >]
            >]
            | readonly ['warning', _i_core._T_State_Group<null, 
                | readonly ['expected apostrophed string', null]
                | readonly ['expected quoted string', null]
                | readonly ['expected backticked string', null]
                | readonly ['expected undelimited string', null]
            >]
        >
    }
    export type L = {
        readonly 'range': _T_Range
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['error', _i_core._T_State_Group<null, 
                | readonly ['invalid value type', {
                    readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                        | readonly ['text', null]
                        | readonly ['verbose group', null]
                        | readonly ['concise group', null]
                        | readonly ['dictionary', null]
                        | readonly ['not set', null]
                        | readonly ['set', null]
                        | readonly ['list', null]
                        | readonly ['state', null]
                    >>
                }]
                | readonly ['duplicate property', {
                    readonly 'name': string
                }]
                | readonly ['missing property', {
                    readonly 'name': string
                }]
                | readonly ['superfluous property', {
                    readonly 'name': string
                }]
                | readonly ['state', _i_core._T_State_Group<null, 
                    | readonly ['more than 2 elements', null]
                    | readonly ['missing state name', null]
                    | readonly ['state is not a string', null]
                    | readonly ['missing value', null]
                    | readonly ['unknown state', {
                        readonly 'found': string
                        readonly 'expected': _i_core._T_Dictionary<null, null>
                    }]
                    | readonly ['missing data marker', null]
                >]
            >]
            | readonly ['warning', _i_core._T_State_Group<null, 
                | readonly ['expected apostrophed string', null]
                | readonly ['expected quoted string', null]
                | readonly ['expected backticked string', null]
                | readonly ['expected undelimited string', null]
            >]
        >
    }
}

// *** ALIASES FOR NESTED TYPES

export namespace Relative_Location {
    export type line = number
    export type column = number
}

export namespace Location {
    
    export namespace relative {
    }
    export type relative = _T_Relative_Location
    export type absolute = number
}

export namespace Range {
    
    export namespace start {
    }
    export type start = _T_Location
    
    export namespace end {
    }
    export type end = _T_Location
}

export namespace Errors {
    
    export namespace L {
        
        export namespace range {
        }
        export type range = _T_Range
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace error {
                    
                    export namespace SG {
                        
                        export namespace invalid_value_type {
                            
                            export namespace expected {
                                
                                export namespace L {
                                    
                                    export namespace SG {
                                        export type text = null
                                        export type verbose_group = null
                                        export type concise_group = null
                                        export type dictionary = null
                                        export type not_set = null
                                        export type _set = null
                                        export type list = null
                                        export type state = null
                                    }
                                    export type SG = 
                                        | readonly ['text', null]
                                        | readonly ['verbose group', null]
                                        | readonly ['concise group', null]
                                        | readonly ['dictionary', null]
                                        | readonly ['not set', null]
                                        | readonly ['set', null]
                                        | readonly ['list', null]
                                        | readonly ['state', null]
                                }
                                export type L = _i_core._T_State_Group<null, 
                                    | readonly ['text', null]
                                    | readonly ['verbose group', null]
                                    | readonly ['concise group', null]
                                    | readonly ['dictionary', null]
                                    | readonly ['not set', null]
                                    | readonly ['set', null]
                                    | readonly ['list', null]
                                    | readonly ['state', null]
                                >
                            }
                            export type expected = _i_core._T_List<null, _i_core._T_State_Group<null, 
                                | readonly ['text', null]
                                | readonly ['verbose group', null]
                                | readonly ['concise group', null]
                                | readonly ['dictionary', null]
                                | readonly ['not set', null]
                                | readonly ['set', null]
                                | readonly ['list', null]
                                | readonly ['state', null]
                            >>
                        }
                        export type invalid_value_type = {
                            readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                                | readonly ['text', null]
                                | readonly ['verbose group', null]
                                | readonly ['concise group', null]
                                | readonly ['dictionary', null]
                                | readonly ['not set', null]
                                | readonly ['set', null]
                                | readonly ['list', null]
                                | readonly ['state', null]
                            >>
                        }
                        
                        export namespace duplicate_property {
                            export type name = string
                        }
                        export type duplicate_property = {
                            readonly 'name': string
                        }
                        
                        export namespace missing_property {
                            export type name = string
                        }
                        export type missing_property = {
                            readonly 'name': string
                        }
                        
                        export namespace superfluous_property {
                            export type name = string
                        }
                        export type superfluous_property = {
                            readonly 'name': string
                        }
                        
                        export namespace state {
                            
                            export namespace SG {
                                export type more_than_2_elements = null
                                export type missing_state_name = null
                                export type state_is_not_a_string = null
                                export type missing_value = null
                                
                                export namespace unknown_state {
                                    export type found = string
                                    
                                    export namespace expected {
                                        export type D = null
                                    }
                                    export type expected = _i_core._T_Dictionary<null, null>
                                }
                                export type unknown_state = {
                                    readonly 'found': string
                                    readonly 'expected': _i_core._T_Dictionary<null, null>
                                }
                                export type missing_data_marker = null
                            }
                            export type SG = 
                                | readonly ['more than 2 elements', null]
                                | readonly ['missing state name', null]
                                | readonly ['state is not a string', null]
                                | readonly ['missing value', null]
                                | readonly ['unknown state', {
                                    readonly 'found': string
                                    readonly 'expected': _i_core._T_Dictionary<null, null>
                                }]
                                | readonly ['missing data marker', null]
                        }
                        export type state = _i_core._T_State_Group<null, 
                            | readonly ['more than 2 elements', null]
                            | readonly ['missing state name', null]
                            | readonly ['state is not a string', null]
                            | readonly ['missing value', null]
                            | readonly ['unknown state', {
                                readonly 'found': string
                                readonly 'expected': _i_core._T_Dictionary<null, null>
                            }]
                            | readonly ['missing data marker', null]
                        >
                    }
                    export type SG = 
                        | readonly ['invalid value type', {
                            readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                                | readonly ['text', null]
                                | readonly ['verbose group', null]
                                | readonly ['concise group', null]
                                | readonly ['dictionary', null]
                                | readonly ['not set', null]
                                | readonly ['set', null]
                                | readonly ['list', null]
                                | readonly ['state', null]
                            >>
                        }]
                        | readonly ['duplicate property', {
                            readonly 'name': string
                        }]
                        | readonly ['missing property', {
                            readonly 'name': string
                        }]
                        | readonly ['superfluous property', {
                            readonly 'name': string
                        }]
                        | readonly ['state', _i_core._T_State_Group<null, 
                            | readonly ['more than 2 elements', null]
                            | readonly ['missing state name', null]
                            | readonly ['state is not a string', null]
                            | readonly ['missing value', null]
                            | readonly ['unknown state', {
                                readonly 'found': string
                                readonly 'expected': _i_core._T_Dictionary<null, null>
                            }]
                            | readonly ['missing data marker', null]
                        >]
                }
                export type error = _i_core._T_State_Group<null, 
                    | readonly ['invalid value type', {
                        readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                            | readonly ['text', null]
                            | readonly ['verbose group', null]
                            | readonly ['concise group', null]
                            | readonly ['dictionary', null]
                            | readonly ['not set', null]
                            | readonly ['set', null]
                            | readonly ['list', null]
                            | readonly ['state', null]
                        >>
                    }]
                    | readonly ['duplicate property', {
                        readonly 'name': string
                    }]
                    | readonly ['missing property', {
                        readonly 'name': string
                    }]
                    | readonly ['superfluous property', {
                        readonly 'name': string
                    }]
                    | readonly ['state', _i_core._T_State_Group<null, 
                        | readonly ['more than 2 elements', null]
                        | readonly ['missing state name', null]
                        | readonly ['state is not a string', null]
                        | readonly ['missing value', null]
                        | readonly ['unknown state', {
                            readonly 'found': string
                            readonly 'expected': _i_core._T_Dictionary<null, null>
                        }]
                        | readonly ['missing data marker', null]
                    >]
                >
                
                export namespace warning {
                    
                    export namespace SG {
                        export type expected_apostrophed_string = null
                        export type expected_quoted_string = null
                        export type expected_backticked_string = null
                        export type expected_undelimited_string = null
                    }
                    export type SG = 
                        | readonly ['expected apostrophed string', null]
                        | readonly ['expected quoted string', null]
                        | readonly ['expected backticked string', null]
                        | readonly ['expected undelimited string', null]
                }
                export type warning = _i_core._T_State_Group<null, 
                    | readonly ['expected apostrophed string', null]
                    | readonly ['expected quoted string', null]
                    | readonly ['expected backticked string', null]
                    | readonly ['expected undelimited string', null]
                >
            }
            export type SG = 
                | readonly ['error', _i_core._T_State_Group<null, 
                    | readonly ['invalid value type', {
                        readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                            | readonly ['text', null]
                            | readonly ['verbose group', null]
                            | readonly ['concise group', null]
                            | readonly ['dictionary', null]
                            | readonly ['not set', null]
                            | readonly ['set', null]
                            | readonly ['list', null]
                            | readonly ['state', null]
                        >>
                    }]
                    | readonly ['duplicate property', {
                        readonly 'name': string
                    }]
                    | readonly ['missing property', {
                        readonly 'name': string
                    }]
                    | readonly ['superfluous property', {
                        readonly 'name': string
                    }]
                    | readonly ['state', _i_core._T_State_Group<null, 
                        | readonly ['more than 2 elements', null]
                        | readonly ['missing state name', null]
                        | readonly ['state is not a string', null]
                        | readonly ['missing value', null]
                        | readonly ['unknown state', {
                            readonly 'found': string
                            readonly 'expected': _i_core._T_Dictionary<null, null>
                        }]
                        | readonly ['missing data marker', null]
                    >]
                >]
                | readonly ['warning', _i_core._T_State_Group<null, 
                    | readonly ['expected apostrophed string', null]
                    | readonly ['expected quoted string', null]
                    | readonly ['expected backticked string', null]
                    | readonly ['expected undelimited string', null]
                >]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['error', _i_core._T_State_Group<null, 
                | readonly ['invalid value type', {
                    readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                        | readonly ['text', null]
                        | readonly ['verbose group', null]
                        | readonly ['concise group', null]
                        | readonly ['dictionary', null]
                        | readonly ['not set', null]
                        | readonly ['set', null]
                        | readonly ['list', null]
                        | readonly ['state', null]
                    >>
                }]
                | readonly ['duplicate property', {
                    readonly 'name': string
                }]
                | readonly ['missing property', {
                    readonly 'name': string
                }]
                | readonly ['superfluous property', {
                    readonly 'name': string
                }]
                | readonly ['state', _i_core._T_State_Group<null, 
                    | readonly ['more than 2 elements', null]
                    | readonly ['missing state name', null]
                    | readonly ['state is not a string', null]
                    | readonly ['missing value', null]
                    | readonly ['unknown state', {
                        readonly 'found': string
                        readonly 'expected': _i_core._T_Dictionary<null, null>
                    }]
                    | readonly ['missing data marker', null]
                >]
            >]
            | readonly ['warning', _i_core._T_State_Group<null, 
                | readonly ['expected apostrophed string', null]
                | readonly ['expected quoted string', null]
                | readonly ['expected backticked string', null]
                | readonly ['expected undelimited string', null]
            >]
        >
    }
    export type L = {
        readonly 'range': _T_Range
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['error', _i_core._T_State_Group<null, 
                | readonly ['invalid value type', {
                    readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                        | readonly ['text', null]
                        | readonly ['verbose group', null]
                        | readonly ['concise group', null]
                        | readonly ['dictionary', null]
                        | readonly ['not set', null]
                        | readonly ['set', null]
                        | readonly ['list', null]
                        | readonly ['state', null]
                    >>
                }]
                | readonly ['duplicate property', {
                    readonly 'name': string
                }]
                | readonly ['missing property', {
                    readonly 'name': string
                }]
                | readonly ['superfluous property', {
                    readonly 'name': string
                }]
                | readonly ['state', _i_core._T_State_Group<null, 
                    | readonly ['more than 2 elements', null]
                    | readonly ['missing state name', null]
                    | readonly ['state is not a string', null]
                    | readonly ['missing value', null]
                    | readonly ['unknown state', {
                        readonly 'found': string
                        readonly 'expected': _i_core._T_Dictionary<null, null>
                    }]
                    | readonly ['missing data marker', null]
                >]
            >]
            | readonly ['warning', _i_core._T_State_Group<null, 
                | readonly ['expected apostrophed string', null]
                | readonly ['expected quoted string', null]
                | readonly ['expected backticked string', null]
                | readonly ['expected undelimited string', null]
            >]
        >
    }
}
