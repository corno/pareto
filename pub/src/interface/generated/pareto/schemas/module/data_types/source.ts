import * as _pi from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"
import * as _i_imports_schema from "../../schema/data_types/source"

// **** TYPES

export type _T_Operations = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
    | readonly ['operation', {
        readonly 'type parameters': _i_imports_schema._T_Type_Parameters
        readonly 'context': _i_imports_schema._T_Type_Node
        readonly 'parameters': _i_core._T_Dictionary<null, _i_imports_schema._T_Type_Node>
        readonly 'result': _i_imports_schema._T_Type_Node
    }]
    | readonly ['set', _T_Operations]
>>

export type _T_Module = {
    readonly 'schema tree': _i_imports_schema._T_Schema_Tree
    readonly 'operations': _T_Operations
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Operations = _T_Operations

export type Module = _T_Module

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Operations {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace operation {
                
                export namespace type_parameters {
                }
                export type type_parameters = _i_imports_schema._T_Type_Parameters
                
                export namespace context {
                }
                export type context = _i_imports_schema._T_Type_Node
                
                export namespace parameters {
                    
                    export namespace D {
                    }
                    export type D = _i_imports_schema._T_Type_Node
                }
                export type parameters = _i_core._T_Dictionary<null, _i_imports_schema._T_Type_Node>
                
                export namespace result {
                }
                export type result = _i_imports_schema._T_Type_Node
            }
            export type operation = {
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters
                readonly 'context': _i_imports_schema._T_Type_Node
                readonly 'parameters': _i_core._T_Dictionary<null, _i_imports_schema._T_Type_Node>
                readonly 'result': _i_imports_schema._T_Type_Node
            }
            
            export namespace _set {
            }
            export type _set = _T_Operations
        }
        export type SG = 
            | readonly ['operation', {
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters
                readonly 'context': _i_imports_schema._T_Type_Node
                readonly 'parameters': _i_core._T_Dictionary<null, _i_imports_schema._T_Type_Node>
                readonly 'result': _i_imports_schema._T_Type_Node
            }]
            | readonly ['set', _T_Operations]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['operation', {
            readonly 'type parameters': _i_imports_schema._T_Type_Parameters
            readonly 'context': _i_imports_schema._T_Type_Node
            readonly 'parameters': _i_core._T_Dictionary<null, _i_imports_schema._T_Type_Node>
            readonly 'result': _i_imports_schema._T_Type_Node
        }]
        | readonly ['set', _T_Operations]
    >
}

export namespace _T_Module {
    
    export namespace schema_tree {
    }
    export type schema_tree = _i_imports_schema._T_Schema_Tree
    
    export namespace operations {
    }
    export type operations = _T_Operations
}

// *** ALIASES FOR NESTED TYPES

export namespace Operations {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace operation {
                
                export namespace type_parameters {
                }
                export type type_parameters = _i_imports_schema._T_Type_Parameters
                
                export namespace context {
                }
                export type context = _i_imports_schema._T_Type_Node
                
                export namespace parameters {
                    
                    export namespace D {
                    }
                    export type D = _i_imports_schema._T_Type_Node
                }
                export type parameters = _i_core._T_Dictionary<null, _i_imports_schema._T_Type_Node>
                
                export namespace result {
                }
                export type result = _i_imports_schema._T_Type_Node
            }
            export type operation = {
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters
                readonly 'context': _i_imports_schema._T_Type_Node
                readonly 'parameters': _i_core._T_Dictionary<null, _i_imports_schema._T_Type_Node>
                readonly 'result': _i_imports_schema._T_Type_Node
            }
            
            export namespace _set {
            }
            export type _set = _T_Operations
        }
        export type SG = 
            | readonly ['operation', {
                readonly 'type parameters': _i_imports_schema._T_Type_Parameters
                readonly 'context': _i_imports_schema._T_Type_Node
                readonly 'parameters': _i_core._T_Dictionary<null, _i_imports_schema._T_Type_Node>
                readonly 'result': _i_imports_schema._T_Type_Node
            }]
            | readonly ['set', _T_Operations]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['operation', {
            readonly 'type parameters': _i_imports_schema._T_Type_Parameters
            readonly 'context': _i_imports_schema._T_Type_Node
            readonly 'parameters': _i_core._T_Dictionary<null, _i_imports_schema._T_Type_Node>
            readonly 'result': _i_imports_schema._T_Type_Node
        }]
        | readonly ['set', _T_Operations]
    >
}

export namespace Module {
    
    export namespace schema_tree {
    }
    export type schema_tree = _i_imports_schema._T_Schema_Tree
    
    export namespace operations {
    }
    export type operations = _T_Operations
}
