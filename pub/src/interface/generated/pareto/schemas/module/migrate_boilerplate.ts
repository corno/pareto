import * as _pi from "pareto-core-interface"
    
    import * as _i_out from "./data_types/target"
    import * as _i_in from "./data_types/source"
    
    // **** TYPES
    
    export type _T_Operations = (
        $$_: _i_in._T_Operations,
        $$_p: null,
    ) => _i_out._T_Operations<null>
    
    export type _T_Module = (
        $$_: _i_in._T_Module,
        $$_p: null,
    ) => _i_out._T_Module<null>
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Operations = _T_Operations
    
    export type Module = _T_Module
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Operations {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Operations
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Operations<null>
    }
    
    export namespace _T_Module {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Module
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Module<null>
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Operations {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Operations
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Operations<null>
    }
    
    export namespace Module {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Module
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
            export type annotation = null
        }
        export type RESULT = _i_out._T_Module<null>
    }
