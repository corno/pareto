import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type a__reference__to__another__asynchronous__interface<Ga_glossary_parameter> = ASYNC.I.a__stream__consumer<Ga_glossary_parameter>
        
        export type a__reference__to__another__interface__with__a__type__argument<Ga_glossary_parameter> = ASYNC.I.an__asynchronous__method__with__a__type__parameter<Ga_glossary_parameter, T.a__type<Ga_glossary_parameter>>
        
        export type a__stream__consumer<Ga_glossary_parameter> = {
            'data': ($: T.a__type<Ga_glossary_parameter>, ) => void
            'end': () => void
        }
        
        export type an__asynchronous__interface<Ga_glossary_parameter> = () => void
        
        export type an__asynchronous__method__with__a__type__parameter<Ga_glossary_parameter, Ta_type_parameter> = () => void
        
        export type an__asynchronous__method__with__data<Ga_glossary_parameter> = ($: T.a__type<Ga_glossary_parameter>, ) => void
        
        export type an__asynchronous__method__with__result__interface<Ga_glossary_parameter> = () => ($: T.a__type<Ga_glossary_parameter>, ) => void
        
        export type an__asynchronous__method__without__data__or__result__interface<Ga_glossary_parameter> = () => void
        
        export type an__interface__choice<Ga_glossary_parameter> = {
            readonly 'a': () => void
            readonly 'b': () => void
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type a__constructor<Ga_glossary_parameter> = {
                'construct': ($is: {
                    readonly 'a downstream interface': ASYNC.I.an__asynchronous__interface<Ga_glossary_parameter>
                    readonly 'an external downstream interface': g_common.ASYNC.I.Number
                }) => ASYNC.I.an__asynchronous__interface<Ga_glossary_parameter>
            }
        }
        
        
        export namespace R {
            export type a__resource<Ga_glossary_parameter> = {
                'consume': (
                    $: T.a__type<Ga_glossary_parameter>,
                    $i: ASYNC.I.an__asynchronous__interface<Ga_glossary_parameter>
                ) => void
            }
        }
        
        
        export namespace R {
            export type a__resource__with__a__type__parameter<Ga_glossary_parameter> = {
                'consume': <Ta_type_parameter>(
                    $: T.a__type<Ga_glossary_parameter>,
                    $i: ASYNC.I.an__asynchronous__interface<Ga_glossary_parameter>
                ) => void
            }
        }
        
        
        export namespace F {
            export type an__asynchronous__function<Ga_glossary_parameter> = ($: T.a__type<Ga_glossary_parameter>) => pt.AsyncValue<T.a__type<Ga_glossary_parameter>>
        }
        
        
        export namespace F {
            export type an__asynchronous__function__with__a__type__parameter<Ga_glossary_parameter> = <Ta_type_parameter>($: Ta_type_parameter) => pt.AsyncValue<T.a__type<Ga_glossary_parameter>>
        }
    }
}

export namespace SYNC {
    
    export namespace I {
        
        export type a__synchronous__interface<Ga_glossary_parameter> = ($: T.a__type<Ga_glossary_parameter>, ) => void
        
        export type an__synchronous__method<Ga_glossary_parameter> = ($: T.a__type<Ga_glossary_parameter>, ) => void
    }
    
    export namespace A {
        
        
        export namespace F {
            export type a__function__with__a__callback<Ga_glossary_parameter> = ($: T.a__type<Ga_glossary_parameter>, $c: {
                'a callback': ($: T.a__type<Ga_glossary_parameter>) => T.a__type<Ga_glossary_parameter>,
                'a callback with a lookup': ($: T.a__type<Ga_glossary_parameter>, $l: {
                    'a lookup': pt.Lookup<T.a__type<Ga_glossary_parameter>>
                }) => T.a__type<Ga_glossary_parameter>,
            }) => T.a__type<Ga_glossary_parameter>
        }
        
        
        export namespace P {
            export type a__procedure<Ga_glossary_parameter> = ($: T.a__type<Ga_glossary_parameter>, $i: SYNC.I.a__synchronous__interface<Ga_glossary_parameter>) => void
        }
        
        
        export namespace P {
            export type a__procedure__accepting__data<Ga_glossary_parameter> = ($: T.a__type<Ga_glossary_parameter>, $i: SYNC.I.a__synchronous__interface<Ga_glossary_parameter>) => void
        }
        
        
        export namespace P {
            export type a__procedure__accepting__data__with__an__external__interface<Ga_glossary_parameter> = ($: T.a__type<Ga_glossary_parameter>, $i: g_common.SYNC.I.Number) => void
        }
        
        
        export namespace P {
            export type a__procedure__providing__an__interface<Ga_glossary_parameter> = ($c: ($i: SYNC.I.a__synchronous__interface<Ga_glossary_parameter>) => void, $i: SYNC.I.a__synchronous__interface<Ga_glossary_parameter>) => void
        }
        
        
        export namespace P {
            export type a__procedure__with__type__parameters<Ga_glossary_parameter> = <Ta_type_parameter>($: T.a__type<Ga_glossary_parameter>, $i: SYNC.I.a__synchronous__interface<Ga_glossary_parameter>) => void
        }
        
        
        export namespace F {
            export type a__synchronous__function<Ga_glossary_parameter> = ($: T.a__type<Ga_glossary_parameter>) => T.a__type<Ga_glossary_parameter>
        }
        
        
        export namespace F {
            export type a__synchronous__function__providing__an__interface<Ga_glossary_parameter> = ($c: ($i: SYNC.I.a__synchronous__interface<Ga_glossary_parameter>) => void) => T.a__type<Ga_glossary_parameter>
        }
        
        
        export namespace F {
            export type a__synchronous__function__with__a__type__parameter<Ga_glossary_parameter> = <Ta_type_parameter>($: T.a__type<Ga_glossary_parameter>) => T.a__type<Ga_glossary_parameter>
        }
    }
}