import * as _pt from 'exupery-core-types'

import * as _i_in from "../../core/astn_source"
import * as _i_out from "./data_types/unconstrained"

// **** TYPES

export type _T_Errors = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_Errors

export type _T_Location = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_Location

export type _T_Range = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_Range

export type _T_Relative_Location = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_Relative_Location

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Errors = _T_Errors

export type Location = _T_Location

export type Range = _T_Range

export type Relative_Location = _T_Relative_Location

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Errors {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Errors
}

export namespace _T_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Location
}

export namespace _T_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Range
}

export namespace _T_Relative_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Relative_Location
}

// *** ALIASES FOR NESTED TYPES

export namespace Errors {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Errors
}

export namespace Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Location
}

export namespace Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Range
}

export namespace Relative_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Relative_Location
}
