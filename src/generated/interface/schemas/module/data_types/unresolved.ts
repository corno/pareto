import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unresolved"
import * as _i_imports_schema from "../../schema/data_types/unresolved"

// **** TYPES

export type _T_Module<M_Source> = {
    readonly 'operations': _T_Operations<M_Source>
    readonly 'schema tree': _i_imports_schema._T_Schema_Tree<M_Source>
}

export type _T_Operations<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
    | readonly ['operation', {
        readonly 'context': _i_imports_schema._T_Type_Node<M_Source>
        readonly 'parameters': _i_core._T_Dictionary<M_Source, _i_imports_schema._T_Type_Node<M_Source>>
        readonly 'result': _i_imports_schema._T_Type_Node<M_Source>
        readonly 'type parameters': _i_imports_schema._T_Type_Parameters<M_Source>
    }]
    | readonly ['set', _T_Operations<M_Source>]
>>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Module<M_Source> = _T_Module<M_Source>

export type Operations<M_Source> = _T_Operations<M_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Module {
    
    export namespace operations {
    }
    export type operations<M_Source> = _T_Operations<M_Source>
    
    export namespace schema_tree {
    }
    export type schema_tree<M_Source> = _i_imports_schema._T_Schema_Tree<M_Source>
}

export namespace _T_Operations {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace operation {
                
                export namespace context {
                }
                export type context<M_Source> = _i_imports_schema._T_Type_Node<M_Source>
                
                export namespace parameters {
                    
                    export namespace D {
                    }
                    export type D<M_Source> = _i_imports_schema._T_Type_Node<M_Source>
                }
                export type parameters<M_Source> = _i_core._T_Dictionary<M_Source, _i_imports_schema._T_Type_Node<M_Source>>
                
                export namespace result {
                }
                export type result<M_Source> = _i_imports_schema._T_Type_Node<M_Source>
                
                export namespace type_parameters {
                }
                export type type_parameters<M_Source> = _i_imports_schema._T_Type_Parameters<M_Source>
            }
            export type operation<M_Source> = {
                readonly 'context': _i_imports_schema._T_Type_Node<M_Source>
                readonly 'parameters': _i_core._T_Dictionary<M_Source, _i_imports_schema._T_Type_Node<M_Source>>
                readonly 'result': _i_imports_schema._T_Type_Node<M_Source>
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters<M_Source>
            }
            
            export namespace _set {
            }
            export type _set<M_Source> = _T_Operations<M_Source>
        }
        export type SG<M_Source> = 
            | readonly ['operation', {
                readonly 'context': _i_imports_schema._T_Type_Node<M_Source>
                readonly 'parameters': _i_core._T_Dictionary<M_Source, _i_imports_schema._T_Type_Node<M_Source>>
                readonly 'result': _i_imports_schema._T_Type_Node<M_Source>
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters<M_Source>
            }]
            | readonly ['set', _T_Operations<M_Source>]
    }
    export type D<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['operation', {
            readonly 'context': _i_imports_schema._T_Type_Node<M_Source>
            readonly 'parameters': _i_core._T_Dictionary<M_Source, _i_imports_schema._T_Type_Node<M_Source>>
            readonly 'result': _i_imports_schema._T_Type_Node<M_Source>
            readonly 'type parameters': _i_imports_schema._T_Type_Parameters<M_Source>
        }]
        | readonly ['set', _T_Operations<M_Source>]
    >
}

// *** ALIASES FOR NESTED TYPES

export namespace Module {
    
    export namespace operations {
    }
    export type operations<M_Source> = _T_Operations<M_Source>
    
    export namespace schema_tree {
    }
    export type schema_tree<M_Source> = _i_imports_schema._T_Schema_Tree<M_Source>
}

export namespace Operations {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace operation {
                
                export namespace context {
                }
                export type context<M_Source> = _i_imports_schema._T_Type_Node<M_Source>
                
                export namespace parameters {
                    
                    export namespace D {
                    }
                    export type D<M_Source> = _i_imports_schema._T_Type_Node<M_Source>
                }
                export type parameters<M_Source> = _i_core._T_Dictionary<M_Source, _i_imports_schema._T_Type_Node<M_Source>>
                
                export namespace result {
                }
                export type result<M_Source> = _i_imports_schema._T_Type_Node<M_Source>
                
                export namespace type_parameters {
                }
                export type type_parameters<M_Source> = _i_imports_schema._T_Type_Parameters<M_Source>
            }
            export type operation<M_Source> = {
                readonly 'context': _i_imports_schema._T_Type_Node<M_Source>
                readonly 'parameters': _i_core._T_Dictionary<M_Source, _i_imports_schema._T_Type_Node<M_Source>>
                readonly 'result': _i_imports_schema._T_Type_Node<M_Source>
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters<M_Source>
            }
            
            export namespace _set {
            }
            export type _set<M_Source> = _T_Operations<M_Source>
        }
        export type SG<M_Source> = 
            | readonly ['operation', {
                readonly 'context': _i_imports_schema._T_Type_Node<M_Source>
                readonly 'parameters': _i_core._T_Dictionary<M_Source, _i_imports_schema._T_Type_Node<M_Source>>
                readonly 'result': _i_imports_schema._T_Type_Node<M_Source>
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters<M_Source>
            }]
            | readonly ['set', _T_Operations<M_Source>]
    }
    export type D<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['operation', {
            readonly 'context': _i_imports_schema._T_Type_Node<M_Source>
            readonly 'parameters': _i_core._T_Dictionary<M_Source, _i_imports_schema._T_Type_Node<M_Source>>
            readonly 'result': _i_imports_schema._T_Type_Node<M_Source>
            readonly 'type parameters': _i_imports_schema._T_Type_Parameters<M_Source>
        }]
        | readonly ['set', _T_Operations<M_Source>]
    >
}
