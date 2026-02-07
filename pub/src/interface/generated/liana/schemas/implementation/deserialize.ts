
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as i_out from "./data/unresolved"

export namespace Package_Set_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Package_Set
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Package_Set_ = (
    context: Package_Set_.I,
    abort: _pi.Abort<Package_Set_.E>,
    parameters: {
        readonly 'document resource identifier': Package_Set_.P.document_resource_identifier
        readonly 'tab size': Package_Set_.P.tab_size
    },
) => Package_Set_.O

export namespace Package_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Package
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Package_ = (
    context: Package_.I,
    abort: _pi.Abort<Package_.E>,
    parameters: {
        readonly 'document resource identifier': Package_.P.document_resource_identifier
        readonly 'tab size': Package_.P.tab_size
    },
) => Package_.O

export namespace Temp_Value_Type_Specification_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Temp_Value_Type_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Temp_Value_Type_Specification_ = (
    context: Temp_Value_Type_Specification_.I,
    abort: _pi.Abort<Temp_Value_Type_Specification_.E>,
    parameters: {
        readonly 'document resource identifier': Temp_Value_Type_Specification_.P.document_resource_identifier
        readonly 'tab size': Temp_Value_Type_Specification_.P.tab_size
    },
) => Temp_Value_Type_Specification_.O

export namespace Assign_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Assign
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Assign_ = (
    context: Assign_.I,
    abort: _pi.Abort<Assign_.E>,
    parameters: {
        readonly 'document resource identifier': Assign_.P.document_resource_identifier
        readonly 'tab size': Assign_.P.tab_size
    },
) => Assign_.O

export namespace Select_Value_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Select_Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Select_Value_ = (
    context: Select_Value_.I,
    abort: _pi.Abort<Select_Value_.E>,
    parameters: {
        readonly 'document resource identifier': Select_Value_.P.document_resource_identifier
        readonly 'tab size': Select_Value_.P.tab_size
    },
) => Select_Value_.O

export namespace Select_Lookup_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Select_Lookup
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Select_Lookup_ = (
    context: Select_Lookup_.I,
    abort: _pi.Abort<Select_Lookup_.E>,
    parameters: {
        readonly 'document resource identifier': Select_Lookup_.P.document_resource_identifier
        readonly 'tab size': Select_Lookup_.P.tab_size
    },
) => Select_Lookup_.O

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Temp_Value_Type_Specification_ as Temp_Value_Type_Specification, 
    Assign_ as Assign, 
    Select_Value_ as Select_Value, 
    Select_Lookup_ as Select_Lookup, 
}
