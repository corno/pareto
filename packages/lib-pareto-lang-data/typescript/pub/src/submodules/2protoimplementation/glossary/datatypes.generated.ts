import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_in from "../../resolved"
import * as g_out from "lib-proto-implementation/dist/submodules/unresolved"

export namespace N {}

export namespace T {
    
    export namespace MapParameters {
        
        export type data = g_in.T.Project
    }
    
    export type MapParameters = {
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