import * as pt from 'pareto-core-types'

import * as g_2glossary from "../submodules/2glossary"
import * as g_2submodules from "../submodules/2submodules"
import * as g_main from "../main"
import * as g_resolve from "../submodules/resolve"

export namespace D {
    
    
    
}

export namespace A {
    
    export type generateSubmodules = () => g_2submodules.SYNC.A.P.GenerateSubmodules
    
    export type map2Glossary = () => g_2glossary.SYNC.A.F.Map
    
    export type resolve = <GAnnotation>($se: {
        readonly 'onError': g_resolve.SYNC.I.OnError<GAnnotation>
    }) => g_resolve.SYNC.A.F.Resolve<GAnnotation>
}

export type API = {
    readonly 'generateSubmodules': A.generateSubmodules
    readonly 'map2Glossary': A.map2Glossary
    readonly 'resolve': A.resolve
}