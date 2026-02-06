    
    import * as _pi from "pareto-core/dist/interface"
    
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
    
    export namespace Imports_ {
        
        export type I = i_in.List_of_Characters
        
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
    
    export namespace Value_ {
        
        export type I = i_in.List_of_Characters
        
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
    
    export namespace Module_Reference_ {
        
        export type I = i_in.List_of_Characters
        
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
    
    export { 
        Package_Set_ as Package_Set, 
        Package_ as Package, 
        Imports_ as Imports, 
        Value_ as Value, 
        Module_Reference_ as Module_Reference, 
    }
