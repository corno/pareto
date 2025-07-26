import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/unresolved"
import * as _i_imports_schema from "../schema/unresolved"

// **** TYPES

export type _T_Module<G_Source> = {
    readonly 'operations': _T_Operations<G_Source>
    readonly 'schemas': _i_imports_schema._T_Schemas<G_Source>
}

export type _T_Operations<G_Source> = _i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
    | readonly ['operation', {
        readonly 'context': _i_imports_schema._T_Type_Node<G_Source>
        readonly 'parameters': _i_core._T_Dictionary<G_Source, _i_imports_schema._T_Type_Node<G_Source>>
        readonly 'result': _i_imports_schema._T_Type_Node<G_Source>
        readonly 'type parameters': _i_imports_schema._T_Type_Parameters<G_Source>
    }]
    | readonly ['set', _T_Operations<G_Source>]
>>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Module<G_Source> = _T_Module<G_Source>

export type Operations<G_Source> = _T_Operations<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Module {
    
    export namespace operations {
    }
    export type operations<G_Source> = _T_Operations<G_Source>
    
    export namespace schemas {
    }
    export type schemas<G_Source> = _i_imports_schema._T_Schemas<G_Source>
}

export namespace _T_Operations {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace operation {
                
                export namespace context {
                }
                export type context<G_Source> = _i_imports_schema._T_Type_Node<G_Source>
                
                export namespace parameters {
                    
                    export namespace D {
                    }
                    export type D<G_Source> = _i_imports_schema._T_Type_Node<G_Source>
                }
                export type parameters<G_Source> = _i_core._T_Dictionary<G_Source, _i_imports_schema._T_Type_Node<G_Source>>
                
                export namespace result {
                }
                export type result<G_Source> = _i_imports_schema._T_Type_Node<G_Source>
                
                export namespace type_parameters {
                }
                export type type_parameters<G_Source> = _i_imports_schema._T_Type_Parameters<G_Source>
            }
            export type operation<G_Source> = {
                readonly 'context': _i_imports_schema._T_Type_Node<G_Source>
                readonly 'parameters': _i_core._T_Dictionary<G_Source, _i_imports_schema._T_Type_Node<G_Source>>
                readonly 'result': _i_imports_schema._T_Type_Node<G_Source>
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters<G_Source>
            }
            
            export namespace _set {
            }
            export type _set<G_Source> = _T_Operations<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['operation', {
                readonly 'context': _i_imports_schema._T_Type_Node<G_Source>
                readonly 'parameters': _i_core._T_Dictionary<G_Source, _i_imports_schema._T_Type_Node<G_Source>>
                readonly 'result': _i_imports_schema._T_Type_Node<G_Source>
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters<G_Source>
            }]
            | readonly ['set', _T_Operations<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['operation', {
            readonly 'context': _i_imports_schema._T_Type_Node<G_Source>
            readonly 'parameters': _i_core._T_Dictionary<G_Source, _i_imports_schema._T_Type_Node<G_Source>>
            readonly 'result': _i_imports_schema._T_Type_Node<G_Source>
            readonly 'type parameters': _i_imports_schema._T_Type_Parameters<G_Source>
        }]
        | readonly ['set', _T_Operations<G_Source>]
    >
}

// *** ALIASES FOR NESTED TYPES

export namespace Module {
    
    export namespace operations {
    }
    export type operations<G_Source> = _T_Operations<G_Source>
    
    export namespace schemas {
    }
    export type schemas<G_Source> = _i_imports_schema._T_Schemas<G_Source>
}

export namespace Operations {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace operation {
                
                export namespace context {
                }
                export type context<G_Source> = _i_imports_schema._T_Type_Node<G_Source>
                
                export namespace parameters {
                    
                    export namespace D {
                    }
                    export type D<G_Source> = _i_imports_schema._T_Type_Node<G_Source>
                }
                export type parameters<G_Source> = _i_core._T_Dictionary<G_Source, _i_imports_schema._T_Type_Node<G_Source>>
                
                export namespace result {
                }
                export type result<G_Source> = _i_imports_schema._T_Type_Node<G_Source>
                
                export namespace type_parameters {
                }
                export type type_parameters<G_Source> = _i_imports_schema._T_Type_Parameters<G_Source>
            }
            export type operation<G_Source> = {
                readonly 'context': _i_imports_schema._T_Type_Node<G_Source>
                readonly 'parameters': _i_core._T_Dictionary<G_Source, _i_imports_schema._T_Type_Node<G_Source>>
                readonly 'result': _i_imports_schema._T_Type_Node<G_Source>
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters<G_Source>
            }
            
            export namespace _set {
            }
            export type _set<G_Source> = _T_Operations<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['operation', {
                readonly 'context': _i_imports_schema._T_Type_Node<G_Source>
                readonly 'parameters': _i_core._T_Dictionary<G_Source, _i_imports_schema._T_Type_Node<G_Source>>
                readonly 'result': _i_imports_schema._T_Type_Node<G_Source>
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters<G_Source>
            }]
            | readonly ['set', _T_Operations<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['operation', {
            readonly 'context': _i_imports_schema._T_Type_Node<G_Source>
            readonly 'parameters': _i_core._T_Dictionary<G_Source, _i_imports_schema._T_Type_Node<G_Source>>
            readonly 'result': _i_imports_schema._T_Type_Node<G_Source>
            readonly 'type parameters': _i_imports_schema._T_Type_Parameters<G_Source>
        }]
        | readonly ['set', _T_Operations<G_Source>]
    >
}
