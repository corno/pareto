
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data/unresolved"

export namespace Type_Reference_ {
    
    export type I = string
    
    export type O = i_out.Type_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Type_Reference_ = (
    context: Type_Reference_.I,
    abort: _pi.Abort<Type_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Reference_.P.document_resource_identifier
        readonly 'indentation': Type_Reference_.P.indentation
    },
) => Type_Reference_.O

export namespace Module_ {
    
    export type I = string
    
    export type O = i_out.Module
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Module_ = (
    context: Module_.I,
    abort: _pi.Abort<Module_.E>,
    parameters: {
        readonly 'document resource identifier': Module_.P.document_resource_identifier
        readonly 'indentation': Module_.P.indentation
    },
) => Module_.O

export namespace Module_Set_ {
    
    export type I = string
    
    export type O = i_out.Module_Set
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Module_Set_ = (
    context: Module_Set_.I,
    abort: _pi.Abort<Module_Set_.E>,
    parameters: {
        readonly 'document resource identifier': Module_Set_.P.document_resource_identifier
        readonly 'indentation': Module_Set_.P.indentation
    },
) => Module_Set_.O

export namespace Type_Node_Reference_ {
    
    export type I = string
    
    export type O = i_out.Type_Node_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Type_Node_Reference_ = (
    context: Type_Node_Reference_.I,
    abort: _pi.Abort<Type_Node_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Node_Reference_.P.document_resource_identifier
        readonly 'indentation': Type_Node_Reference_.P.indentation
    },
) => Type_Node_Reference_.O

export namespace Abort_Expression_ {
    
    export type I = string
    
    export type O = i_out.Abort_Expression
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Abort_Expression_ = (
    context: Abort_Expression_.I,
    abort: _pi.Abort<Abort_Expression_.E>,
    parameters: {
        readonly 'document resource identifier': Abort_Expression_.P.document_resource_identifier
        readonly 'indentation': Abort_Expression_.P.indentation
    },
) => Abort_Expression_.O

export namespace Selection_ {
    
    export type I = string
    
    export type O = i_out.Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Selection_ = (
    context: Selection_.I,
    abort: _pi.Abort<Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Selection_.P.document_resource_identifier
        readonly 'indentation': Selection_.P.indentation
    },
) => Selection_.O

export namespace Expression_ {
    
    export type I = string
    
    export type O = i_out.Expression
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Expression_ = (
    context: Expression_.I,
    abort: _pi.Abort<Expression_.E>,
    parameters: {
        readonly 'document resource identifier': Expression_.P.document_resource_identifier
        readonly 'indentation': Expression_.P.indentation
    },
) => Expression_.O

export { 
    Type_Reference_ as Type_Reference, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_Node_Reference_ as Type_Node_Reference, 
    Abort_Expression_ as Abort_Expression, 
    Selection_ as Selection, 
    Expression_ as Expression, 
}
