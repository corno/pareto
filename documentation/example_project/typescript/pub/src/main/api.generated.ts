import * as pt from 'pareto-core-types'

import * as g_this_glossary from "./glossary"

export namespace D {
    
    
    
    export type a_$provided_$algorithm_$with_$dependencies = {
        readonly 'a dependency on an algorithm': g_this_glossary.SYNC.A.P.a__procedure<string>
    }
    
    
    
    
    
}

export namespace A {
    
    export type a_$provided_$algorithm = () => g_this_glossary.SYNC.A.P.a__procedure<string>
    
    export type a_$provided_$algorithm_$with_$an_$implementation_$parameter = <Gan_$implementation_$parameter>() => g_this_glossary.SYNC.A.P.a__procedure<Gan_$implementation_$parameter>
    
    export type a_$provided_$algorithm_$with_$dependencies = ($d: D.a_$provided_$algorithm_$with_$dependencies, ) => g_this_glossary.SYNC.A.P.a__procedure<string>
    
    export type a_$provided_$asynchronous_$function = () => g_this_glossary.ASYNC.A.F.an__asynchronous__function<string>
    
    export type a_$provided_$constructor = () => g_this_glossary.ASYNC.A.C.a__constructor<string>
    
    export type a_$provided_$procedure = () => g_this_glossary.SYNC.A.P.a__procedure<string>
    
    export type a_$provided_$resource = () => g_this_glossary.ASYNC.A.R.a__resource<string>
    
    export type a_$provided_$synchronous_$function = () => g_this_glossary.SYNC.A.F.a__synchronous__function<string>
}

export type API = {
    readonly 'a_provided_algorithm': A.a_$provided_$algorithm
    readonly 'a_provided_algorithm_with_an_implementation_parameter': A.a_$provided_$algorithm_$with_$an_$implementation_$parameter
    readonly 'a_provided_algorithm_with_dependencies': A.a_$provided_$algorithm_$with_$dependencies
    readonly 'a_provided_asynchronous_function': A.a_$provided_$asynchronous_$function
    readonly 'a_provided_constructor': A.a_$provided_$constructor
    readonly 'a_provided_procedure': A.a_$provided_$procedure
    readonly 'a_provided_resource': A.a_$provided_$resource
    readonly 'a_provided_synchronous_function': A.a_$provided_$synchronous_$function
}