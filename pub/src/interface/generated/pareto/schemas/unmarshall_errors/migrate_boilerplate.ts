import * as _pi from "pareto-core-interface"
    
    import * as _i_out from "./data_types/target"
    import * as _i_in from "./data_types/source"
    
    // **** TYPES
    
    export type _T_Relative_Location = (
        $$_: _i_in._T_Relative_Location,
        $$_p: null,
    ) => _i_out._T_Relative_Location
    
    export type _T_Location = (
        $$_: _i_in._T_Location,
        $$_p: null,
    ) => _i_out._T_Location
    
    export type _T_Range = (
        $$_: _i_in._T_Range,
        $$_p: null,
    ) => _i_out._T_Range
    
    export type _T_Errors = (
        $$_: _i_in._T_Errors,
        $$_p: null,
    ) => _i_out._T_Errors
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Relative_Location = _T_Relative_Location
    
    export type Location = _T_Location
    
    export type Range = _T_Range
    
    export type Errors = _T_Errors
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Relative_Location {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Relative_Location
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Relative_Location
    }
    
    export namespace _T_Location {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Location
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Location
    }
    
    export namespace _T_Range {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Range
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Range
    }
    
    export namespace _T_Errors {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Errors
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Errors
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Relative_Location {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Relative_Location
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Relative_Location
    }
    
    export namespace Location {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Location
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Location
    }
    
    export namespace Range {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Range
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Range
    }
    
    export namespace Errors {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Errors
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Errors
    }
