import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_main from "res-pareto-main"

export namespace ASYNC {
    
    export namespace I {
        
        export type an__asynchronous__binding__interface = () => void
    }
    
    export namespace A {
        
        
        export namespace C {
            export type an__asynchronous__binding = {
                'construct': () => g_main.ASYNC.I.Main
            }
        }
    }
}

export namespace SYNC {}