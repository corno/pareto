
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data/unresolved"

export namespace Module_ {
    
    export type I = string
    
    export type O = i_out.Module
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Module_ = (
    context: Module_.I,
    abort: _pi.Abort<Module_.E>,
    parameters: {
        readonly 'document resource identifier': Module_.P.document_resource_identifier
        readonly 'tab size': Module_.P.tab_size
    },
) => Module_.O

export namespace Module_Set_ {
    
    export type I = string
    
    export type O = i_out.Module_Set
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Module_Set_ = (
    context: Module_Set_.I,
    abort: _pi.Abort<Module_Set_.E>,
    parameters: {
        readonly 'document resource identifier': Module_Set_.P.document_resource_identifier
        readonly 'tab size': Module_Set_.P.tab_size
    },
) => Module_Set_.O

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

export { 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Temp_Type_Node_Reference_ as Temp_Type_Node_Reference, 
    Selection_ as Selection, 
    Expression_ as Expression, 
}
