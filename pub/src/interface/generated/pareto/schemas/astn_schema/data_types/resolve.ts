import * as _pt from 'exupery-core-types'

import * as _i_resolve from "../../../core/resolve"
import * as _i_resolved from "./source"
import * as _i_unresolved from "./target"

// **** TYPES

export type _T_Dictionary = <F_Source>(
    $$_: _i_unresolved._T_Dictionary<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    },
) => _i_resolved._T_Dictionary

export type _T_Globals = <F_Source>(
    $$_: _i_unresolved._T_Globals<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Globals

export type _T_Group = <F_Source>(
    $$_: _i_unresolved._T_Group<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    },
) => _i_resolved._T_Group

export type _T_Imports = <F_Source>(
    $$_: _i_unresolved._T_Imports<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Imports

export type _T_Schema = <F_Source>(
    $$_: _i_unresolved._T_Schema<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Schema

export type _T_Schema_Tree = <F_Source>(
    $$_: _i_unresolved._T_Schema_Tree<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Schema_Tree

export type _T_Schemas = <F_Source>(
    $$_: _i_unresolved._T_Schemas<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Schemas

export type _T_Text_Type = <F_Source>(
    $$_: _i_unresolved._T_Text_Type<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Text_Type

export type _T_Type = <F_Source>(
    $$_: _i_unresolved._T_Type<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    },
) => _i_resolved._T_Type

export type _T_Type_Node = <F_Source>(
    $$_: _i_unresolved._T_Type_Node<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    },
) => _i_resolved._T_Type_Node

export type _T_Types = <F_Source>(
    $$_: _i_unresolved._T_Types<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    },
) => _i_resolved._T_Types

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Dictionary = _T_Dictionary

export type Globals = _T_Globals

export type Group = _T_Group

export type Imports = _T_Imports

export type Schema = _T_Schema

export type Schema_Tree = _T_Schema_Tree

export type Schemas = _T_Schemas

export type Text_Type = _T_Text_Type

export type Type = _T_Type

export type Type_Node = _T_Type_Node

export type Types = _T_Types

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Dictionary {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Dictionary<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _pt.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _pt.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Dictionary
}

export namespace _T_Globals {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Globals<F_Source>
    
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
    export type RESULT<F_Source> = _i_resolved._T_Globals
}

export namespace _T_Group {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Group<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _pt.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _pt.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Group
}

export namespace _T_Imports {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Imports<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Imports
}

export namespace _T_Schema {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schema<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schema
}

export namespace _T_Schema_Tree {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schema_Tree<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schema_Tree
}

export namespace _T_Schemas {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schemas<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schemas
}

export namespace _T_Text_Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Text_Type<F_Source>
    
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
    export type RESULT<F_Source> = _i_resolved._T_Text_Type
}

export namespace _T_Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _pt.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _pt.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type
}

export namespace _T_Type_Node {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Node<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _pt.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _pt.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Node
}

export namespace _T_Types {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Types<F_Source>
    
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
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _pt.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _pt.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Types
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Dictionary<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _pt.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _pt.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Dictionary
}

export namespace Globals {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Globals<F_Source>
    
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
    export type RESULT<F_Source> = _i_resolved._T_Globals
}

export namespace Group {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Group<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _pt.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _pt.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Group
}

export namespace Imports {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Imports<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Imports
}

export namespace Schema {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schema<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schema
}

export namespace Schema_Tree {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schema_Tree<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schema_Tree
}

export namespace Schemas {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Schemas<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace sibling_schemas {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Schemas.D
                }
                export type sibling_schemas<F_Source> = _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            export type lookups<F_Source> = {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'sibling schemas': _i_resolve._T_Lookup_Stack<_i_resolved._T_Schemas.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Schemas
}

export namespace Text_Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Text_Type<F_Source>
    
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
    export type RESULT<F_Source> = _i_resolved._T_Text_Type
}

export namespace Type {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _pt.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _pt.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type
}

export namespace Type_Node {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Type_Node<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace noncircular_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type noncircular_sibling_types<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                
                export namespace possibly_circular_dependent_sibling_types {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Types.D
                }
                export type possibly_circular_dependent_sibling_types<F_Source> = _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            export type lookups<F_Source> = {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            
            export namespace values {
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _pt.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _pt.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'noncircular sibling types': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Types.D>
                readonly 'possibly circular dependent sibling types': _i_resolve._T_Cyclic_Lookup<_i_resolved._T_Types.D>
            }
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Type_Node
}

export namespace Types {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Types<F_Source>
    
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
                
                export namespace globals {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Globals
                }
                export type globals<F_Source> = _pt.Optional_Value<_i_resolved._T_Globals>
                
                export namespace imports {
                    
                    export namespace O {
                    }
                    export type O<F_Source> = _i_resolved._T_Imports
                }
                export type imports<F_Source> = _pt.Optional_Value<_i_resolved._T_Imports>
            }
            export type values<F_Source> = {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'globals': _pt.Optional_Value<_i_resolved._T_Globals>
                readonly 'imports': _pt.Optional_Value<_i_resolved._T_Imports>
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Types
}
