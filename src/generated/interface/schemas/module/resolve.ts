import * as _pt from 'exupery-core-types'

import * as _i_resolve from "../../core/resolve"
import * as _i_resolved from "./resolved"
import * as _i_unresolved from "./unresolved"

// **** TYPES

export type _T_Module<G_Source> = (
    $$_: _i_unresolved._T_Module<G_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<G_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Module

export type _T_Operations<G_Source> = (
    $$_: _i_unresolved._T_Operations<G_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<G_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Operations

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Module<G_Source> = _T_Module<G_Source>

export type Operations<G_Source> = _T_Operations<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Module {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Module<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_resolve._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Module
}

export namespace _T_Operations {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Operations<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_resolve._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Operations
}

// *** ALIASES FOR NESTED TYPES

export namespace Module {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Module<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_resolve._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Module
}

export namespace Operations {
    
    export namespace CONTEXT {
        export type Source<G_Source> = G_Source
    }
    export type CONTEXT<G_Source> = _i_unresolved._T_Operations<G_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<G_Source> = G_Source
        }
        export type location_2_string<G_Source> = _i_resolve._T_Location_2_String<G_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<G_Source> = null
            
            export namespace values {
            }
            export type values<G_Source> = null
        }
        export type parameters<G_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<G_Source> = _i_resolved._T_Operations
}
