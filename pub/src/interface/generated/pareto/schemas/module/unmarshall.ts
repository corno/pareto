import * as _pt from 'exupery-core-types'

import * as _i_in from "../../core/astn_source"
import * as _i_out from "./data_types/target"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Module = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Module<_i_in._T_Range>

export type _T_Operations = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Operations<_i_in._T_Range>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Module = _T_Module

export type Operations = _T_Operations

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Module<_i_in._T_Range>
}

export namespace _T_Operations {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Operations<_i_in._T_Range>
}

// *** ALIASES FOR NESTED TYPES

export namespace Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Module<_i_in._T_Range>
}

export namespace Operations {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Operations<_i_in._T_Range>
}
