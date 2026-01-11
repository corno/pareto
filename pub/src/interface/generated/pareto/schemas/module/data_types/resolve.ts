import * as _pi from "pareto-core-interface"
    
    import * as _i_resolve from "pareto-core-internals/dist/algorithm_types/refiner/resolve"
    import * as _i_resolved from "./source"
    import * as _i_unresolved from "./target"
    
    // **** TYPES
    
    export type _T_Module = <F_Source>(
        $$_: _i_unresolved._T_Module<F_Source>,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': null
            }
            readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        },
    ) => _i_resolved._T_Module
    
    export type _T_Operations = <F_Source>(
        $$_: _i_unresolved._T_Operations<F_Source>,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': null
            }
            readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
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
            
            export namespace parameters {
                
                export namespace values {
                }
                export type values<F_Source> = null
                
                export namespace lookups {
                }
                export type lookups<F_Source> = null
            }
            export type parameters<F_Source> = {
                readonly 'values': null
                readonly 'lookups': null
            }
            
            export namespace location_2_string {
                export type Source<F_Source> = F_Source
            }
            export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
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
            
            export namespace parameters {
                
                export namespace values {
                }
                export type values<F_Source> = null
                
                export namespace lookups {
                }
                export type lookups<F_Source> = null
            }
            export type parameters<F_Source> = {
                readonly 'values': null
                readonly 'lookups': null
            }
            
            export namespace location_2_string {
                export type Source<F_Source> = F_Source
            }
            export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
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
            
            export namespace parameters {
                
                export namespace values {
                }
                export type values<F_Source> = null
                
                export namespace lookups {
                }
                export type lookups<F_Source> = null
            }
            export type parameters<F_Source> = {
                readonly 'values': null
                readonly 'lookups': null
            }
            
            export namespace location_2_string {
                export type Source<F_Source> = F_Source
            }
            export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
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
            
            export namespace parameters {
                
                export namespace values {
                }
                export type values<F_Source> = null
                
                export namespace lookups {
                }
                export type lookups<F_Source> = null
            }
            export type parameters<F_Source> = {
                readonly 'values': null
                readonly 'lookups': null
            }
            
            export namespace location_2_string {
                export type Source<F_Source> = F_Source
            }
            export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        }
        
        export namespace RESULT {
        }
        export type RESULT<F_Source> = _i_resolved._T_Operations
    }
