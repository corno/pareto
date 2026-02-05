    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_generic from "liana-core/dist/interface/to_be_generated/resolve"
    
    import * as i_resolved from "./data/resolved"
    
    import * as i_unresolved from "./data/unresolved"
    
    export namespace Package_Set_ {
        
        export type I = i_unresolved.Package_Set
        
        export type O = i_resolved.Package_Set
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Package_Set_ = (
        context: Package_Set_.I,
        abort: _pi.Abort<Package_Set_.E>,
        lookups: null,
        parameters: null,
    ) => Package_Set_.O
    
    export namespace Package_ {
        
        export type I = i_unresolved.Package
        
        export type O = i_resolved.Package
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Package_ = (
        context: Package_.I,
        abort: _pi.Abort<Package_.E>,
        lookups: null,
        parameters: null,
    ) => Package_.O
    
    export namespace Temp_Value_Type_Specification_ {
        
        export type I = i_unresolved.Temp_Value_Type_Specification
        
        export type O = i_resolved.Temp_Value_Type_Specification
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Temp_Value_Type_Specification_ = (
        context: Temp_Value_Type_Specification_.I,
        abort: _pi.Abort<Temp_Value_Type_Specification_.E>,
        lookups: null,
        parameters: null,
    ) => Temp_Value_Type_Specification_.O
    
    export namespace Expression_ {
        
        export type I = i_unresolved.Expression
        
        export type O = i_resolved.Expression
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Expression_ = (
        context: Expression_.I,
        abort: _pi.Abort<Expression_.E>,
        lookups: null,
        parameters: null,
    ) => Expression_.O
    
    export namespace Value_Selection_ {
        
        export type I = i_unresolved.Value_Selection
        
        export type O = i_resolved.Value_Selection
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Value_Selection_ = (
        context: Value_Selection_.I,
        abort: _pi.Abort<Value_Selection_.E>,
        lookups: null,
        parameters: null,
    ) => Value_Selection_.O
    
    export namespace Lookup_Selection_ {
        
        export type I = i_unresolved.Lookup_Selection
        
        export type O = i_resolved.Lookup_Selection
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Lookup_Selection_ = (
        context: Lookup_Selection_.I,
        abort: _pi.Abort<Lookup_Selection_.E>,
        lookups: null,
        parameters: null,
    ) => Lookup_Selection_.O
    
    export { 
        Package_Set_ as Package_Set, 
        Package_ as Package, 
        Temp_Value_Type_Specification_ as Temp_Value_Type_Specification, 
        Expression_ as Expression, 
        Value_Selection_ as Value_Selection, 
        Lookup_Selection_ as Lookup_Selection, 
    }
