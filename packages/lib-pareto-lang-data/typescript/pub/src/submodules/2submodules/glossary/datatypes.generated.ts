import * as pt from 'pareto-core-types'

import * as g_2glossary from "../../2glossary"
import * as g_common from "glo-pareto-common"
import * as g_model from "../../resolved"

export namespace N {}

export namespace T {
    
    export namespace GenerateSubmodulesParameters {
        
        export namespace data {
            
            export type atom__mappings = g_2glossary.T.Atom__Mappings
            
            export type library = g_model.T.Type__Library
        }
        
        export type data = {
            readonly 'atom mappings': g_2glossary.T.Atom__Mappings
            readonly 'library': g_model.T.Type__Library
        }
        
        export type path = g_common.T.Path
    }
    
    export type GenerateSubmodulesParameters = {
        readonly 'data': {
            readonly 'atom mappings': g_2glossary.T.Atom__Mappings
            readonly 'library': g_model.T.Type__Library
        }
        readonly 'path': g_common.T.Path
    }
}