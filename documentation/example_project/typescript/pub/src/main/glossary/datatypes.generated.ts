import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {
    
    export namespace a_$_$namespace {
        
        export namespace N {
            
            export namespace a_$_$nested_$_$namespace {
                
                export namespace N {}
                
                export namespace T {}
            }
        }
        
        export namespace T {
            
            export type a__type<Ga_glossary_parameter> = string
        }
    }
}

export namespace T {
    
    export namespace a__parametrized__type__with__all__flavors__of__references {
        
        export type a__reference__to__a__glossary__parameter<Ga_glossary_parameter, Ta_type_parameter> = Ga_glossary_parameter
        
        export type a__reference__to__a__type<Ga_glossary_parameter, Ta_type_parameter> = T.a__type<Ga_glossary_parameter>
        
        export type a__reference__to__a__type__parameter<Ga_glossary_parameter, Ta_type_parameter> = Ta_type_parameter
        
        export type a__reference__to__an__external__type<Ga_glossary_parameter, Ta_type_parameter> = g_common.T.Number
    }
    
    export type a__parametrized__type__with__all__flavors__of__references<Ga_glossary_parameter, Ta_type_parameter> = {
        readonly 'a reference to a glossary parameter': Ga_glossary_parameter
        readonly 'a reference to a type': T.a__type<Ga_glossary_parameter>
        readonly 'a reference to a type parameter': Ta_type_parameter
        readonly 'a reference to an external type': g_common.T.Number
    }
    
    export type a__type<Ga_glossary_parameter> = number
    
    export namespace a__type__containing__all__flavors {
        
        export type a__boolean<Ga_glossary_parameter> = boolean
        
        export namespace a__computed__value {
            
            export type C<Ga_glossary_parameter> = string
        }
        
        export type a__computed__value<Ga_glossary_parameter> = () => string
        
        export namespace a__dictionary__of__strings {
            
            export type D<Ga_glossary_parameter> = string
        }
        
        export type a__dictionary__of__strings<Ga_glossary_parameter> = pt.Dictionary<string>
        
        export namespace a__group {
            
            export type a__member<Ga_glossary_parameter> = string
        }
        
        export type a__group<Ga_glossary_parameter> = {
            readonly 'a member': string
        }
        
        export type a__null<Ga_glossary_parameter> = null
        
        export type a__number<Ga_glossary_parameter> = number
        
        export type a__reference<Ga_glossary_parameter> = Ga_glossary_parameter
        
        export type a__string<Ga_glossary_parameter> = string
        
        export namespace a__tagged__union {
            
            export type option__a<Ga_glossary_parameter> = string
            
            export type option__b<Ga_glossary_parameter> = number
        }
        
        export type a__tagged__union<Ga_glossary_parameter> = 
            | ['option a', string]
            | ['option b', number]
        
        export namespace an__array__of__strings {
            
            export type A<Ga_glossary_parameter> = string
        }
        
        export type an__array__of__strings<Ga_glossary_parameter> = pt.Array<string>
        
        export namespace an__optional__value {
            
            export type O<Ga_glossary_parameter> = string
        }
        
        export type an__optional__value<Ga_glossary_parameter> = [ false ] | [ true, string]
    }
    
    export type a__type__containing__all__flavors<Ga_glossary_parameter> = {
        readonly 'a boolean': boolean
        readonly 'a computed value': () => string
        readonly 'a dictionary of strings': pt.Dictionary<string>
        readonly 'a group': {
            readonly 'a member': string
        }
        readonly 'a null': null
        readonly 'a number': number
        readonly 'a reference': Ga_glossary_parameter
        readonly 'a string': string
        readonly 'a tagged union': 
            | ['option a', string]
            | ['option b', number]
        readonly 'an array of strings': pt.Array<string>
        readonly 'an optional value': [ false ] | [ true, string]
    }
}