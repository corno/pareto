import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_in from "../../resolved"
import * as g_out from "lib-proto-typesystem/dist/submodules/unresolved"

export namespace N {}

export namespace T {
    
    export namespace Atom__Mapping {
        
        export namespace D {
            
            export namespace _lboolean {}
            
            export type _lboolean = null
            
            export namespace _lnumber {}
            
            export type _lnumber = null
            
            export namespace _lstring {}
            
            export type _lstring = null
        }
        
        export type D = 
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
    }
    
    export type Atom__Mapping = pt.Dictionary<
        | ['boolean', null]
        | ['number', null]
        | ['string', null]
    >
    
    export namespace MapParameters {
        
        export namespace atom__mappings {
            
            export type D = T.Atom__Mapping
        }
        
        export type atom__mappings = pt.Dictionary<T.Atom__Mapping>
        
        export type data = g_in.T.Project
    }
    
    export type MapParameters = {
        readonly 'atom mappings': pt.Dictionary<T.Atom__Mapping>
        readonly 'data': g_in.T.Project
    }
    
    export namespace SourceLocation {
        
        export type column = number
        
        export type file = string
        
        export type line = number
    }
    
    export type SourceLocation = {
        readonly 'column': number
        readonly 'file': string
        readonly 'line': number
    }
}