import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_2glossary from "../../2glossary"
import * as g_common from "glo-pareto-common"
import * as g_model from "../../resolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Nothing = null
    }
    
    export namespace A {
        
        
        export namespace P {
            export type GenerateSubmodules = ($: T.GenerateSubmodulesParameters, $i: SYNC.I.Nothing) => void
        }
    }
}