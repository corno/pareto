import * as _pt from 'exupery-core-types'

import * as _i_in from "../../core/astn_source"
import * as _i_out from "./data_types/unresolved"

// **** TYPES

export type _T_Module = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_Module<null>

export type _T_Operations = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_Operations<null>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Module = _T_Module

export type Operations = _T_Operations

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Module<null>
}

export namespace _T_Operations {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Operations<null>
}

// *** ALIASES FOR NESTED TYPES

export namespace Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Module<null>
}

export namespace Operations {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Operations<null>
}
