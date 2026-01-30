
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data/unresolved"

export namespace Imports_ {
    
    export type I = string
    
    export type O = i_out.Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
    abort: _pi.Abort<Imports_.E>,
    parameters: {
        readonly 'document resource identifier': Imports_.P.document_resource_identifier
        readonly 'tab size': Imports_.P.tab_size
    },
) => Imports_.O

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

export namespace Module_Reference_ {
    
    export type I = string
    
    export type O = i_out.Module_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Module_Reference_ = (
    context: Module_Reference_.I,
    abort: _pi.Abort<Module_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Module_Reference_.P.document_resource_identifier
        readonly 'tab size': Module_Reference_.P.tab_size
    },
) => Module_Reference_.O

export namespace Value_ {
    
    export type I = string
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
    parameters: {
        readonly 'document resource identifier': Value_.P.document_resource_identifier
        readonly 'tab size': Value_.P.tab_size
    },
) => Value_.O

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Module_Reference_ as Module_Reference, 
    Value_ as Value, 
}
