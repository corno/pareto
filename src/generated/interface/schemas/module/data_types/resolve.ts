import * as _pt from 'exupery-core-types'

import * as _i_resolve from "../../../core/resolve"
import * as _i_resolved from "./resolved"
import * as _i_unresolved from "./unresolved"

// **** TYPES

export type _T_Module = <F_Source>(
    $$_: _i_unresolved._T_Module<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Module

export type _T_Operations = <F_Source>(
    $$_: _i_unresolved._T_Operations<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Operations

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Module = _T_Module

export type Operations = _T_Operations

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Module {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Module<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Module
}

export namespace _T_Operations {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Operations<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Operations
}

// *** ALIASES FOR NESTED TYPES

export namespace Module {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Module<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Module
}

export namespace Operations {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Operations<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Operations
}
