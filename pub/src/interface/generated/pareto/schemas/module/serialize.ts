import * as _pi from 'pareto-core-interface'

import * as _i_in from "./data_types/source"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Operations = (
    $$_: _i_in._T_Operations,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Module = (
    $$_: _i_in._T_Module,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Operations = _T_Operations

export type Module = _T_Module

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Operations {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Operations
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Module
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Operations {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Operations
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Module
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}
