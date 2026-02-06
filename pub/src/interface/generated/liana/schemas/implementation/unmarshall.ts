    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"
    
    import * as i_out from "./data/unresolved"
    
    import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
    
    export namespace Package_Set_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Package_Set
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Package_Set_ = (
        context: Package_Set_.I,
        abort: _pi.Abort<Package_Set_.E>,
    ) => Package_Set_.O
    
    export namespace Package_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Package
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Package_ = (
        context: Package_.I,
        abort: _pi.Abort<Package_.E>,
    ) => Package_.O
    
    export namespace Temp_Value_Type_Specification_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Temp_Value_Type_Specification
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Temp_Value_Type_Specification_ = (
        context: Temp_Value_Type_Specification_.I,
        abort: _pi.Abort<Temp_Value_Type_Specification_.E>,
    ) => Temp_Value_Type_Specification_.O
    
    export namespace Expression_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Expression
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Expression_ = (
        context: Expression_.I,
        abort: _pi.Abort<Expression_.E>,
    ) => Expression_.O
    
    export namespace Value_Selection_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Value_Selection
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Value_Selection_ = (
        context: Value_Selection_.I,
        abort: _pi.Abort<Value_Selection_.E>,
    ) => Value_Selection_.O
    
    export namespace Lookup_Selection_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Lookup_Selection
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Lookup_Selection_ = (
        context: Lookup_Selection_.I,
        abort: _pi.Abort<Lookup_Selection_.E>,
    ) => Lookup_Selection_.O
    
    export { 
        Package_Set_ as Package_Set, 
        Package_ as Package, 
        Temp_Value_Type_Specification_ as Temp_Value_Type_Specification, 
        Expression_ as Expression, 
        Value_Selection_ as Value_Selection, 
        Lookup_Selection_ as Lookup_Selection, 
    }
