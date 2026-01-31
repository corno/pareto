
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data/unresolved"

export namespace Package_Set_ {
    
    export type I = string
    
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
    
    export type I = string
    
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

export namespace Temp_Type_Node_Reference_ {
    
    export type I = string
    
    export type O = i_out.Temp_Type_Node_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Temp_Type_Node_Reference_ = (
    context: Temp_Type_Node_Reference_.I,
    abort: _pi.Abort<Temp_Type_Node_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Temp_Type_Node_Reference_.P.document_resource_identifier
        readonly 'tab size': Temp_Type_Node_Reference_.P.tab_size
    },
) => Temp_Type_Node_Reference_.O

export namespace Expression_ {
    
    export type I = string
    
    export type O = i_out.Expression
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Expression_ = (
    context: Expression_.I,
    abort: _pi.Abort<Expression_.E>,
    parameters: {
        readonly 'document resource identifier': Expression_.P.document_resource_identifier
        readonly 'tab size': Expression_.P.tab_size
    },
) => Expression_.O

export namespace Selection_ {
    
    export type I = string
    
    export type O = i_out.Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Selection_ = (
    context: Selection_.I,
    abort: _pi.Abort<Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Selection_.P.document_resource_identifier
        readonly 'tab size': Selection_.P.tab_size
    },
) => Selection_.O

export namespace Lookup_Selection_ {
    
    export type I = string
    
    export type O = i_out.Lookup_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Lookup_Selection_ = (
    context: Lookup_Selection_.I,
    abort: _pi.Abort<Lookup_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Lookup_Selection_.P.document_resource_identifier
        readonly 'tab size': Lookup_Selection_.P.tab_size
    },
) => Lookup_Selection_.O

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Temp_Type_Node_Reference_ as Temp_Type_Node_Reference, 
    Expression_ as Expression, 
    Selection_ as Selection, 
    Lookup_Selection_ as Lookup_Selection, 
}
