
import * as _pt from 'pareto-core-types'

namespace _ {
    
    export type Address<T> = { get: () => T, set: ($: T) => void } 
}

export namespace pareto__lang__data {
    
    export namespace Unresolved {
        
        export namespace Flat {
            
            export type Atom__Types$D$<_TAnnotation> = null
            
            export type Atom__Types$<_TAnnotation> = _pt.Dictionary<Atom__Types$D$<_TAnnotation>>
            
            export type Atom$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Atom$<_TAnnotation> = {
                readonly 'type': Atom$type$<_TAnnotation>
            }
            
            export type Property$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Property$<_TAnnotation> = {
                readonly 'type': Property$type$<_TAnnotation>
            }
            
            export type PropertyResolver$type$<_TAnnotation> = TypeResolver$<_TAnnotation>
            
            export type PropertyResolver$<_TAnnotation> = {
                readonly 'type': PropertyResolver$type$<_TAnnotation>
            }
            
            export type Type$type$array$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$array$<_TAnnotation> = {
                readonly 'type': Type$type$array$type$<_TAnnotation>
            }
            
            export type Type$type$atom$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$atom$<_TAnnotation> = {
                readonly 'atom': Type$type$atom$atom$<_TAnnotation>
            }
            
            export type Type$type$component$type$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$component$<_TAnnotation> = {
                readonly 'type': Type$type$component$type$<_TAnnotation>
            }
            
            export type Type$type$constraint$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Type$type$cyclic__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$cyclic__reference$sibling$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$cyclic__reference$<_TAnnotation> = {
                readonly 'atom': Type$type$cyclic__reference$atom$<_TAnnotation>
                readonly 'sibling': Type$type$cyclic__reference$sibling$<_TAnnotation>
            }
            
            export type Type$type$dictionary$key$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation> = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation> = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation> = 
                | ['no', Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>]
                | ['yes', Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>]
            
            export type Type$type$dictionary$constraints$D$dictionary$<_TAnnotation> = {
                readonly 'dense': Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>
                readonly 'dictionary': Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>
            }
            
            export type Type$type$dictionary$constraints$D$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$dictionary$constraints$D$<_TAnnotation> = 
                | ['dictionary', Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>]
                | ['lookup', Type$type$dictionary$constraints$D$lookup$<_TAnnotation>]
            
            export type Type$type$dictionary$constraints$<_TAnnotation> = _pt.Dictionary<Type$type$dictionary$constraints$D$<_TAnnotation>>
            
            export type Type$type$dictionary$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$dictionary$<_TAnnotation> = {
                readonly 'constraints': Type$type$dictionary$constraints$<_TAnnotation>
                readonly 'key': Type$type$dictionary$key$<_TAnnotation>
                readonly 'type': Type$type$dictionary$type$<_TAnnotation>
            }
            
            export type Type$type$group$properties$D$<_TAnnotation> = Property$<_TAnnotation>
            
            export type Type$type$group$properties$<_TAnnotation> = _pt.Dictionary<Type$type$group$properties$D$<_TAnnotation>>
            
            export type Type$type$group$<_TAnnotation> = {
                readonly 'properties': Type$type$group$properties$<_TAnnotation>
            }
            
            export type Type$type$nothing$<_TAnnotation> = null
            
            export type Type$type$optional$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$optional$<_TAnnotation> = {
                readonly 'type': Type$type$optional$type$<_TAnnotation>
            }
            
            export type Type$type$resolved__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$resolved__reference$value$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>
            
            export type Type$type$resolved__reference$value$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$resolved__reference$value$<_TAnnotation> = 
                | ['dictionary', Type$type$resolved__reference$value$dictionary$<_TAnnotation>]
                | ['lookup', Type$type$resolved__reference$value$lookup$<_TAnnotation>]
            
            export type Type$type$resolved__reference$<_TAnnotation> = {
                readonly 'atom': Type$type$resolved__reference$atom$<_TAnnotation>
                readonly 'value': Type$type$resolved__reference$value$<_TAnnotation>
            }
            
            export type Type$type$state__group$states$D$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$state__group$states$D$<_TAnnotation> = {
                readonly 'type': Type$type$state__group$states$D$type$<_TAnnotation>
            }
            
            export type Type$type$state__group$states$<_TAnnotation> = _pt.Dictionary<Type$type$state__group$states$D$<_TAnnotation>>
            
            export type Type$type$state__group$<_TAnnotation> = {
                readonly 'states': Type$type$state__group$states$<_TAnnotation>
            }
            
            export type Type$type$<_TAnnotation> = 
                | ['array', Type$type$array$<_TAnnotation>]
                | ['atom', Type$type$atom$<_TAnnotation>]
                | ['component', Type$type$component$<_TAnnotation>]
                | ['constraint', Type$type$constraint$<_TAnnotation>]
                | ['cyclic reference', Type$type$cyclic__reference$<_TAnnotation>]
                | ['dictionary', Type$type$dictionary$<_TAnnotation>]
                | ['group', Type$type$group$<_TAnnotation>]
                | ['nothing', Type$type$nothing$<_TAnnotation>]
                | ['optional', Type$type$optional$<_TAnnotation>]
                | ['resolved reference', Type$type$resolved__reference$<_TAnnotation>]
                | ['state group', Type$type$state__group$<_TAnnotation>]
            
            export type Type$<_TAnnotation> = {
                readonly 'type': Type$type$<_TAnnotation>
            }
            
            export type TypeResolver$type$array$type$<_TAnnotation> = TypeResolver$<_TAnnotation>
            
            export type TypeResolver$type$array$<_TAnnotation> = {
                readonly 'type': TypeResolver$type$array$type$<_TAnnotation>
            }
            
            export type TypeResolver$type$atom$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type TypeResolver$type$atom$<_TAnnotation> = {
                readonly 'atom': TypeResolver$type$atom$atom$<_TAnnotation>
            }
            
            export type TypeResolver$type$component$type$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type TypeResolver$type$component$arguments$D$<_TAnnotation> = null
            
            export type TypeResolver$type$component$arguments$<_TAnnotation> = _pt.Dictionary<TypeResolver$type$component$arguments$D$<_TAnnotation>>
            
            export type TypeResolver$type$component$<_TAnnotation> = {
                readonly 'arguments': TypeResolver$type$component$arguments$<_TAnnotation>
                readonly 'type': TypeResolver$type$component$type$<_TAnnotation>
            }
            
            export type TypeResolver$type$constraint$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type TypeResolver$type$cyclic__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type TypeResolver$type$cyclic__reference$sibling$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type TypeResolver$type$cyclic__reference$<_TAnnotation> = {
                readonly 'atom': TypeResolver$type$cyclic__reference$atom$<_TAnnotation>
                readonly 'sibling': TypeResolver$type$cyclic__reference$sibling$<_TAnnotation>
            }
            
            export type TypeResolver$type$dictionary$key$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type TypeResolver$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>
            
            export type TypeResolver$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation> = null
            
            export type TypeResolver$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation> = null
            
            export type TypeResolver$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation> = 
                | ['no', TypeResolver$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>]
                | ['yes', TypeResolver$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>]
            
            export type TypeResolver$type$dictionary$constraints$D$dictionary$<_TAnnotation> = {
                readonly 'dense': TypeResolver$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>
                readonly 'dictionary': TypeResolver$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>
            }
            
            export type TypeResolver$type$dictionary$constraints$D$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type TypeResolver$type$dictionary$constraints$D$<_TAnnotation> = 
                | ['dictionary', TypeResolver$type$dictionary$constraints$D$dictionary$<_TAnnotation>]
                | ['lookup', TypeResolver$type$dictionary$constraints$D$lookup$<_TAnnotation>]
            
            export type TypeResolver$type$dictionary$constraints$<_TAnnotation> = _pt.Dictionary<TypeResolver$type$dictionary$constraints$D$<_TAnnotation>>
            
            export type TypeResolver$type$dictionary$type$<_TAnnotation> = TypeResolver$<_TAnnotation>
            
            export type TypeResolver$type$dictionary$<_TAnnotation> = {
                readonly 'constraints': TypeResolver$type$dictionary$constraints$<_TAnnotation>
                readonly 'key': TypeResolver$type$dictionary$key$<_TAnnotation>
                readonly 'type': TypeResolver$type$dictionary$type$<_TAnnotation>
            }
            
            export type TypeResolver$type$group$properties$D$<_TAnnotation> = PropertyResolver$<_TAnnotation>
            
            export type TypeResolver$type$group$properties$<_TAnnotation> = _pt.Dictionary<TypeResolver$type$group$properties$D$<_TAnnotation>>
            
            export type TypeResolver$type$group$<_TAnnotation> = {
                readonly 'properties': TypeResolver$type$group$properties$<_TAnnotation>
            }
            
            export type TypeResolver$type$nothing$<_TAnnotation> = null
            
            export type TypeResolver$type$optional$type$<_TAnnotation> = TypeResolver$<_TAnnotation>
            
            export type TypeResolver$type$optional$<_TAnnotation> = {
                readonly 'type': TypeResolver$type$optional$type$<_TAnnotation>
            }
            
            export type TypeResolver$type$resolved__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type TypeResolver$type$resolved__reference$value$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>
            
            export type TypeResolver$type$resolved__reference$value$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type TypeResolver$type$resolved__reference$value$<_TAnnotation> = 
                | ['dictionary', TypeResolver$type$resolved__reference$value$dictionary$<_TAnnotation>]
                | ['lookup', TypeResolver$type$resolved__reference$value$lookup$<_TAnnotation>]
            
            export type TypeResolver$type$resolved__reference$<_TAnnotation> = {
                readonly 'atom': TypeResolver$type$resolved__reference$atom$<_TAnnotation>
                readonly 'value': TypeResolver$type$resolved__reference$value$<_TAnnotation>
            }
            
            export type TypeResolver$type$state__group$states$D$type$<_TAnnotation> = TypeResolver$<_TAnnotation>
            
            export type TypeResolver$type$state__group$states$D$<_TAnnotation> = {
                readonly 'type': TypeResolver$type$state__group$states$D$type$<_TAnnotation>
            }
            
            export type TypeResolver$type$state__group$states$<_TAnnotation> = _pt.Dictionary<TypeResolver$type$state__group$states$D$<_TAnnotation>>
            
            export type TypeResolver$type$state__group$<_TAnnotation> = {
                readonly 'states': TypeResolver$type$state__group$states$<_TAnnotation>
            }
            
            export type TypeResolver$type$<_TAnnotation> = 
                | ['array', TypeResolver$type$array$<_TAnnotation>]
                | ['atom', TypeResolver$type$atom$<_TAnnotation>]
                | ['component', TypeResolver$type$component$<_TAnnotation>]
                | ['constraint', TypeResolver$type$constraint$<_TAnnotation>]
                | ['cyclic reference', TypeResolver$type$cyclic__reference$<_TAnnotation>]
                | ['dictionary', TypeResolver$type$dictionary$<_TAnnotation>]
                | ['group', TypeResolver$type$group$<_TAnnotation>]
                | ['nothing', TypeResolver$type$nothing$<_TAnnotation>]
                | ['optional', TypeResolver$type$optional$<_TAnnotation>]
                | ['resolved reference', TypeResolver$type$resolved__reference$<_TAnnotation>]
                | ['state group', TypeResolver$type$state__group$<_TAnnotation>]
            
            export type TypeResolver$<_TAnnotation> = {
                readonly 'type': TypeResolver$type$<_TAnnotation>
            }
            
            export type Imports$D$library$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Imports$D$<_TAnnotation> = {
                readonly 'library': Imports$D$library$<_TAnnotation>
            }
            
            export type Imports$<_TAnnotation> = _pt.Dictionary<Imports$D$<_TAnnotation>>
            
            export type Parameters$D$type$resolved__value$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Parameters$D$type$sibling__lookup$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Parameters$D$type$cyclic__sibling__lookup$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Parameters$D$type$key$<_TAnnotation> = null
            
            export type Parameters$D$type$<_TAnnotation> = 
                | ['cyclic sibling lookup', Parameters$D$type$cyclic__sibling__lookup$<_TAnnotation>]
                | ['key', Parameters$D$type$key$<_TAnnotation>]
                | ['resolved value', Parameters$D$type$resolved__value$<_TAnnotation>]
                | ['sibling lookup', Parameters$D$type$sibling__lookup$<_TAnnotation>]
            
            export type Parameters$D$optional$O$<_TAnnotation> = null
            
            export type Parameters$D$optional$<_TAnnotation> = _pt.OptionalValue<Parameters$D$optional$O$<_TAnnotation>>
            
            export type Parameters$D$<_TAnnotation> = {
                readonly 'optional': Parameters$D$optional$<_TAnnotation>
                readonly 'type': Parameters$D$type$<_TAnnotation>
            }
            
            export type Parameters$<_TAnnotation> = _pt.Dictionary<Parameters$D$<_TAnnotation>>
            
            export type Global__Type__Resolver__Declaration$parameters$<_TAnnotation> = Parameters$<_TAnnotation>
            
            export type Global__Type__Resolver__Declaration$result$O$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Resolver__Declaration$result$<_TAnnotation> = _pt.OptionalValue<Global__Type__Resolver__Declaration$result$O$<_TAnnotation>>
            
            export type Global__Type__Resolver__Declaration$<_TAnnotation> = {
                readonly 'parameters': Global__Type__Resolver__Declaration$parameters$<_TAnnotation>
                readonly 'result': Global__Type__Resolver__Declaration$result$<_TAnnotation>
            }
            
            export type Global__Type__Resolver__Declarations$D$<_TAnnotation> = Global__Type__Resolver__Declaration$<_TAnnotation>
            
            export type Global__Type__Resolver__Declarations$<_TAnnotation> = _pt.Dictionary<Global__Type__Resolver__Declarations$D$<_TAnnotation>>
            
            export type Variable$parameter$parameter$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Variable$parameter$resolved__value$<_TAnnotation> = _TAnnotation
            
            export type Variable$parameter$<_TAnnotation> = {
                readonly 'parameter': Variable$parameter$parameter$<_TAnnotation>
                readonly 'resolved value': Variable$parameter$resolved__value$<_TAnnotation>
            }
            
            export type Variable$parent__variable$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Variable$<_TAnnotation> = 
                | ['parameter', Variable$parameter$<_TAnnotation>]
                | ['parent variable', Variable$parent__variable$<_TAnnotation>]
            
            export type Variables$D$<_TAnnotation> = Variable$<_TAnnotation>
            
            export type Variables$<_TAnnotation> = _pt.Dictionary<Variables$D$<_TAnnotation>>
            
            export type Global__Type__Resolver__Implementation$variables$<_TAnnotation> = Variables$<_TAnnotation>
            
            export type Global__Type__Resolver__Implementation$type$<_TAnnotation> = TypeResolver$<_TAnnotation>
            
            export type Global__Type__Resolver__Implementation$result$O$<_TAnnotation> = Value__Selection__Tail$<_TAnnotation>
            
            export type Global__Type__Resolver__Implementation$result$<_TAnnotation> = _pt.OptionalValue<Global__Type__Resolver__Implementation$result$O$<_TAnnotation>>
            
            export type Global__Type__Resolver__Implementation$<_TAnnotation> = {
                readonly 'result': Global__Type__Resolver__Implementation$result$<_TAnnotation>
                readonly 'type': Global__Type__Resolver__Implementation$type$<_TAnnotation>
                readonly 'variables': Global__Type__Resolver__Implementation$variables$<_TAnnotation>
            }
            
            export type Global__Type__Definition$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Global__Type__Definition$<_TAnnotation> = {
                readonly 'type': Global__Type__Definition$type$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$dictionary$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$step__type$dictionary$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$dictionary$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$step__type$dictionary$<_TAnnotation> = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$step__type$dictionary$tail$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$optional$optional$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$optional$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$step__type$optional$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$optional$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$step__type$optional$<_TAnnotation> = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$step__type$optional$tail$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$array$array$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$array$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$step__type$array$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$array$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$step__type$array$<_TAnnotation> = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$step__type$array$tail$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$group$group$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$group$property$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection__Tail$step__type$group$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$step__type$group$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$group$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$step__type$group$<_TAnnotation> = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$<_TAnnotation>
                readonly 'property': Type__Selection__Tail$step__type$group$property$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$step__type$group$tail$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$state__group$state$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection__Tail$step__type$state__group$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$step__type$state__group$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$state__group$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$step__type$state__group$<_TAnnotation> = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$step__type$state__group$tail$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$<_TAnnotation> = 
                | ['array', Type__Selection__Tail$step__type$array$<_TAnnotation>]
                | ['dictionary', Type__Selection__Tail$step__type$dictionary$<_TAnnotation>]
                | ['group', Type__Selection__Tail$step__type$group$<_TAnnotation>]
                | ['optional', Type__Selection__Tail$step__type$optional$<_TAnnotation>]
                | ['state group', Type__Selection__Tail$step__type$state__group$<_TAnnotation>]
            
            export type Type__Selection__Tail$<_TAnnotation> = {
                readonly 'step type': Type__Selection__Tail$step__type$<_TAnnotation>
            }
            
            export type Type__Selection$import$O$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection$import$<_TAnnotation> = _pt.OptionalValue<Type__Selection$import$O$<_TAnnotation>>
            
            export type Type__Selection$global__type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection$tail$O$<_TAnnotation>>
            
            export type Type__Selection$<_TAnnotation> = {
                readonly 'global type': Type__Selection$global__type$<_TAnnotation>
                readonly 'import': Type__Selection$import$<_TAnnotation>
                readonly 'tail': Type__Selection$tail$<_TAnnotation>
            }
            
            export type Dictionary__Selection$type$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Dictionary__Selection$dictionary$<_TAnnotation> = _TAnnotation
            
            export type Dictionary__Selection$<_TAnnotation> = {
                readonly 'dictionary': Dictionary__Selection$dictionary$<_TAnnotation>
                readonly 'type': Dictionary__Selection$type$<_TAnnotation>
            }
            
            export type Type__Library$imports$<_TAnnotation> = Imports$<_TAnnotation>
            
            export type Type__Library$atom__types$<_TAnnotation> = Atom__Types$<_TAnnotation>
            
            export type Type__Library$global__types$definitions$D$<_TAnnotation> = Global__Type__Definition$<_TAnnotation>
            
            export type Type__Library$global__types$definitions$<_TAnnotation> = _pt.Dictionary<Type__Library$global__types$definitions$D$<_TAnnotation>>
            
            export type Type__Library$global__types$declarations$<_TAnnotation> = Global__Type__Resolver__Declarations$<_TAnnotation>
            
            export type Type__Library$global__types$implementations$D$<_TAnnotation> = Global__Type__Resolver__Implementation$<_TAnnotation>
            
            export type Type__Library$global__types$implementations$<_TAnnotation> = _pt.Dictionary<Type__Library$global__types$implementations$D$<_TAnnotation>>
            
            export type Type__Library$global__types$<_TAnnotation> = {
                readonly 'declarations': Type__Library$global__types$declarations$<_TAnnotation>
                readonly 'definitions': Type__Library$global__types$definitions$<_TAnnotation>
                readonly 'implementations': Type__Library$global__types$implementations$<_TAnnotation>
            }
            
            export type Type__Library$<_TAnnotation> = {
                readonly 'atom types': Type__Library$atom__types$<_TAnnotation>
                readonly 'global types': Type__Library$global__types$<_TAnnotation>
                readonly 'imports': Type__Library$imports$<_TAnnotation>
            }
            
            export type Merged__Type__Library$imports$<_TAnnotation> = Imports$<_TAnnotation>
            
            export type Merged__Type__Library$atom__types$<_TAnnotation> = Atom__Types$<_TAnnotation>
            
            export type Merged__Type__Library$global__types$D$declaration$<_TAnnotation> = Global__Type__Resolver__Declaration$<_TAnnotation>
            
            export type Merged__Type__Library$global__types$D$definition$<_TAnnotation> = Global__Type__Resolver__Implementation$<_TAnnotation>
            
            export type Merged__Type__Library$global__types$D$<_TAnnotation> = {
                readonly 'declaration': Merged__Type__Library$global__types$D$declaration$<_TAnnotation>
                readonly 'definition': Merged__Type__Library$global__types$D$definition$<_TAnnotation>
            }
            
            export type Merged__Type__Library$global__types$<_TAnnotation> = _pt.Dictionary<Merged__Type__Library$global__types$D$<_TAnnotation>>
            
            export type Merged__Type__Library$<_TAnnotation> = {
                readonly 'atom types': Merged__Type__Library$atom__types$<_TAnnotation>
                readonly 'global types': Merged__Type__Library$global__types$<_TAnnotation>
                readonly 'imports': Merged__Type__Library$imports$<_TAnnotation>
            }
            
            export type Global__Type__Selection$resolved__sibling$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$resolved__sibling$<_TAnnotation> = {
                readonly 'type': Global__Type__Selection$resolved__sibling$type$<_TAnnotation>
            }
            
            export type Global__Type__Selection$import$library$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$import$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$import$<_TAnnotation> = {
                readonly 'library': Global__Type__Selection$import$library$<_TAnnotation>
                readonly 'type': Global__Type__Selection$import$type$<_TAnnotation>
            }
            
            export type Global__Type__Selection$cyclic__sibling$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$cyclic__sibling$<_TAnnotation> = {
                readonly 'type': Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>
            }
            
            export type Global__Type__Selection$<_TAnnotation> = 
                | ['cyclic sibling', Global__Type__Selection$cyclic__sibling$<_TAnnotation>]
                | ['import', Global__Type__Selection$import$<_TAnnotation>]
                | ['resolved sibling', Global__Type__Selection$resolved__sibling$<_TAnnotation>]
            
            export type Model$type__library$<_TAnnotation> = Type__Library$<_TAnnotation>
            
            export type Model$root$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Model$<_TAnnotation> = {
                readonly 'root': Model$root$<_TAnnotation>
                readonly 'type library': Model$type__library$<_TAnnotation>
            }
            
            export type Project$type__libraries$D$<_TAnnotation> = Type__Library$<_TAnnotation>
            
            export type Project$type__libraries$<_TAnnotation> = _pt.Dictionary<Project$type__libraries$D$<_TAnnotation>>
            
            export type Project$<_TAnnotation> = {
                readonly 'type libraries': Project$type__libraries$<_TAnnotation>
            }
            
            export type Merged__Project$type__libraries$D$<_TAnnotation> = Merged__Type__Library$<_TAnnotation>
            
            export type Merged__Project$type__libraries$<_TAnnotation> = _pt.Dictionary<Merged__Project$type__libraries$D$<_TAnnotation>>
            
            export type Merged__Project$<_TAnnotation> = {
                readonly 'type libraries': Merged__Project$type__libraries$<_TAnnotation>
            }
            
            export type Root$<_TAnnotation> = Project$<_TAnnotation>
            
            export type Value__Selection__Tail$reference$reference$<_TAnnotation> = _TAnnotation
            
            export type Value__Selection__Tail$reference$tail$O$<_TAnnotation> = Value__Selection__Tail$<_TAnnotation>
            
            export type Value__Selection__Tail$reference$tail$<_TAnnotation> = _pt.OptionalValue<Value__Selection__Tail$reference$tail$O$<_TAnnotation>>
            
            export type Value__Selection__Tail$reference$<_TAnnotation> = {
                readonly 'reference': Value__Selection__Tail$reference$reference$<_TAnnotation>
                readonly 'tail': Value__Selection__Tail$reference$tail$<_TAnnotation>
            }
            
            export type Value__Selection__Tail$component$component$<_TAnnotation> = _TAnnotation
            
            export type Value__Selection__Tail$component$tail$O$<_TAnnotation> = Value__Selection__Tail$<_TAnnotation>
            
            export type Value__Selection__Tail$component$tail$<_TAnnotation> = _pt.OptionalValue<Value__Selection__Tail$component$tail$O$<_TAnnotation>>
            
            export type Value__Selection__Tail$component$<_TAnnotation> = {
                readonly 'component': Value__Selection__Tail$component$component$<_TAnnotation>
                readonly 'tail': Value__Selection__Tail$component$tail$<_TAnnotation>
            }
            
            export type Value__Selection__Tail$state__group$state__group$<_TAnnotation> = _TAnnotation
            
            export type Value__Selection__Tail$state__group$result__type$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Value__Selection__Tail$state__group$states$D$<_TAnnotation> = Any__Value__Selection$<_TAnnotation>
            
            export type Value__Selection__Tail$state__group$states$<_TAnnotation> = _pt.Dictionary<Value__Selection__Tail$state__group$states$D$<_TAnnotation>>
            
            export type Value__Selection__Tail$state__group$<_TAnnotation> = {
                readonly 'result type': Value__Selection__Tail$state__group$result__type$<_TAnnotation>
                readonly 'state group': Value__Selection__Tail$state__group$state__group$<_TAnnotation>
                readonly 'states': Value__Selection__Tail$state__group$states$<_TAnnotation>
            }
            
            export type Value__Selection__Tail$group$group$<_TAnnotation> = _TAnnotation
            
            export type Value__Selection__Tail$group$property$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Value__Selection__Tail$group$tail$O$<_TAnnotation> = Value__Selection__Tail$<_TAnnotation>
            
            export type Value__Selection__Tail$group$tail$<_TAnnotation> = _pt.OptionalValue<Value__Selection__Tail$group$tail$O$<_TAnnotation>>
            
            export type Value__Selection__Tail$group$<_TAnnotation> = {
                readonly 'group': Value__Selection__Tail$group$group$<_TAnnotation>
                readonly 'property': Value__Selection__Tail$group$property$<_TAnnotation>
                readonly 'tail': Value__Selection__Tail$group$tail$<_TAnnotation>
            }
            
            export type Value__Selection__Tail$<_TAnnotation> = 
                | ['component', Value__Selection__Tail$component$<_TAnnotation>]
                | ['group', Value__Selection__Tail$group$<_TAnnotation>]
                | ['reference', Value__Selection__Tail$reference$<_TAnnotation>]
                | ['state group', Value__Selection__Tail$state__group$<_TAnnotation>]
            
            export type Any__Value__Selection$start$O$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Any__Value__Selection$start$<_TAnnotation> = _pt.OptionalValue<Any__Value__Selection$start$O$<_TAnnotation>>
            
            export type Any__Value__Selection$tail$O$<_TAnnotation> = Value__Selection__Tail$<_TAnnotation>
            
            export type Any__Value__Selection$tail$<_TAnnotation> = _pt.OptionalValue<Any__Value__Selection$tail$O$<_TAnnotation>>
            
            export type Any__Value__Selection$<_TAnnotation> = {
                readonly 'start': Any__Value__Selection$start$<_TAnnotation>
                readonly 'tail': Any__Value__Selection$tail$<_TAnnotation>
            }
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            export namespace Atom__Types {
                
                
                export namespace D {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Atom__Types$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Atom__Types$<_TAnnotation>
            }
            
            export namespace Atom {
                
                
                export namespace _ltype {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Atom$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Atom$<_TAnnotation>
            }
            
            export namespace Property {
                
                
                export namespace _ltype {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Property$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Property$<_TAnnotation>
            }
            
            export namespace PropertyResolver {
                
                
                export namespace _ltype {
                    
                    
                    export type $<_TAnnotation> = _IFlat.PropertyResolver$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.PropertyResolver$<_TAnnotation>
            }
            
            export namespace TType {
                
                
                export namespace _ltype {
                    
                    
                    export namespace array {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$array$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$array$<_TAnnotation>
                    }
                    
                    export namespace atom {
                        
                        
                        export namespace atom {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$atom$atom$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$atom$<_TAnnotation>
                    }
                    
                    export namespace component {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$component$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$component$<_TAnnotation>
                    }
                    
                    export namespace constraint {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$constraint$<_TAnnotation>
                    }
                    
                    export namespace cyclic__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$atom$<_TAnnotation>
                        }
                        
                        export namespace sibling {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$sibling$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$<_TAnnotation>
                    }
                    
                    export namespace dictionary {
                        
                        
                        export namespace key {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$key$<_TAnnotation>
                        }
                        
                        export namespace constraints {
                            
                            
                            export namespace D {
                                
                                
                                export namespace dictionary {
                                    
                                    
                                    export namespace dictionary {
                                        
                                        
                                        export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>
                                    }
                                    
                                    export namespace dense {
                                        
                                        
                                        export namespace no {
                                            
                                            
                                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>
                                        }
                                        
                                        export namespace yes {
                                            
                                            
                                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>
                                        }
                                        
                                        export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>
                                    }
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>
                                }
                                
                                export namespace lookup {
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$lookup$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$<_TAnnotation>
                        }
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$dictionary$<_TAnnotation>
                    }
                    
                    export namespace group {
                        
                        
                        export namespace properties {
                            
                            
                            export namespace D {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$group$properties$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$group$properties$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$group$<_TAnnotation>
                    }
                    
                    export namespace nothing {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$nothing$<_TAnnotation>
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$optional$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$optional$<_TAnnotation>
                    }
                    
                    export namespace resolved__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$atom$<_TAnnotation>
                        }
                        
                        export namespace value {
                            
                            
                            export namespace dictionary {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$dictionary$<_TAnnotation>
                            }
                            
                            export namespace lookup {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$lookup$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$<_TAnnotation>
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace states {
                            
                            
                            export namespace D {
                                
                                
                                export namespace _ltype {
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$state__group$states$D$type$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$state__group$states$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$state__group$states$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$state__group$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type$<_TAnnotation>
            }
            
            export namespace TTypeResolver {
                
                
                export namespace _ltype {
                    
                    
                    export namespace array {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$array$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$array$<_TAnnotation>
                    }
                    
                    export namespace atom {
                        
                        
                        export namespace atom {
                            
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$atom$atom$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$atom$<_TAnnotation>
                    }
                    
                    export namespace component {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$component$type$<_TAnnotation>
                        }
                        
                        export namespace _larguments {
                            
                            
                            export namespace D {
                                
                                
                                export type $<_TAnnotation> = _IFlat.TypeResolver$type$component$arguments$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$component$arguments$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$component$<_TAnnotation>
                    }
                    
                    export namespace constraint {
                        
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$constraint$<_TAnnotation>
                    }
                    
                    export namespace cyclic__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$cyclic__reference$atom$<_TAnnotation>
                        }
                        
                        export namespace sibling {
                            
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$cyclic__reference$sibling$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$cyclic__reference$<_TAnnotation>
                    }
                    
                    export namespace dictionary {
                        
                        
                        export namespace key {
                            
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$key$<_TAnnotation>
                        }
                        
                        export namespace constraints {
                            
                            
                            export namespace D {
                                
                                
                                export namespace dictionary {
                                    
                                    
                                    export namespace dictionary {
                                        
                                        
                                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>
                                    }
                                    
                                    export namespace dense {
                                        
                                        
                                        export namespace no {
                                            
                                            
                                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>
                                        }
                                        
                                        export namespace yes {
                                            
                                            
                                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>
                                        }
                                        
                                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>
                                    }
                                    
                                    export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$constraints$D$dictionary$<_TAnnotation>
                                }
                                
                                export namespace lookup {
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$constraints$D$lookup$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$constraints$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$constraints$<_TAnnotation>
                        }
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$dictionary$<_TAnnotation>
                    }
                    
                    export namespace group {
                        
                        
                        export namespace properties {
                            
                            
                            export namespace D {
                                
                                
                                export type $<_TAnnotation> = _IFlat.TypeResolver$type$group$properties$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$group$properties$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$group$<_TAnnotation>
                    }
                    
                    export namespace nothing {
                        
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$nothing$<_TAnnotation>
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$optional$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$optional$<_TAnnotation>
                    }
                    
                    export namespace resolved__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$resolved__reference$atom$<_TAnnotation>
                        }
                        
                        export namespace value {
                            
                            
                            export namespace dictionary {
                                
                                
                                export type $<_TAnnotation> = _IFlat.TypeResolver$type$resolved__reference$value$dictionary$<_TAnnotation>
                            }
                            
                            export namespace lookup {
                                
                                
                                export type $<_TAnnotation> = _IFlat.TypeResolver$type$resolved__reference$value$lookup$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$resolved__reference$value$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$resolved__reference$<_TAnnotation>
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace states {
                            
                            
                            export namespace D {
                                
                                
                                export namespace _ltype {
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.TypeResolver$type$state__group$states$D$type$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.TypeResolver$type$state__group$states$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.TypeResolver$type$state__group$states$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.TypeResolver$type$state__group$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.TypeResolver$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.TypeResolver$<_TAnnotation>
            }
            
            export namespace Imports {
                
                
                export namespace D {
                    
                    
                    export namespace library {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Imports$D$library$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Imports$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Imports$<_TAnnotation>
            }
            
            export namespace Parameters {
                
                
                export namespace D {
                    
                    
                    export namespace _ltype {
                        
                        
                        export namespace resolved__value {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Parameters$D$type$resolved__value$<_TAnnotation>
                        }
                        
                        export namespace sibling__lookup {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Parameters$D$type$sibling__lookup$<_TAnnotation>
                        }
                        
                        export namespace cyclic__sibling__lookup {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Parameters$D$type$cyclic__sibling__lookup$<_TAnnotation>
                        }
                        
                        export namespace key {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Parameters$D$type$key$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Parameters$D$type$<_TAnnotation>
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace O {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Parameters$D$optional$O$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Parameters$D$optional$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Parameters$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Parameters$<_TAnnotation>
            }
            
            export namespace Global__Type__Resolver__Declaration {
                
                
                export namespace parameters {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Declaration$parameters$<_TAnnotation>
                }
                
                export namespace result {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Declaration$result$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Declaration$result$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Declaration$<_TAnnotation>
            }
            
            export namespace Global__Type__Resolver__Declarations {
                
                
                export namespace D {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Declarations$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Declarations$<_TAnnotation>
            }
            
            export namespace Variable {
                
                
                export namespace parameter {
                    
                    
                    export namespace parameter {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Variable$parameter$parameter$<_TAnnotation>
                    }
                    
                    export namespace resolved__value {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Variable$parameter$resolved__value$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Variable$parameter$<_TAnnotation>
                }
                
                export namespace parent__variable {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Variable$parent__variable$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Variable$<_TAnnotation>
            }
            
            export namespace Variables {
                
                
                export namespace D {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Variables$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Variables$<_TAnnotation>
            }
            
            export namespace Global__Type__Resolver__Implementation {
                
                
                export namespace variables {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Implementation$variables$<_TAnnotation>
                }
                
                export namespace _ltype {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Implementation$type$<_TAnnotation>
                }
                
                export namespace result {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Implementation$result$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Implementation$result$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type__Resolver__Implementation$<_TAnnotation>
            }
            
            export namespace Global__Type__Definition {
                
                
                export namespace _ltype {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Definition$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type__Definition$<_TAnnotation>
            }
            
            export namespace TType__Selection__Tail {
                
                
                export namespace step__type {
                    
                    
                    export namespace dictionary {
                        
                        
                        export namespace dictionary {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$<_TAnnotation>
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace optional {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$<_TAnnotation>
                    }
                    
                    export namespace array {
                        
                        
                        export namespace array {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$array$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$<_TAnnotation>
                    }
                    
                    export namespace group {
                        
                        
                        export namespace group {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$group$<_TAnnotation>
                        }
                        
                        export namespace property {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$property$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$<_TAnnotation>
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace state__group {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>
                        }
                        
                        export namespace state {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$<_TAnnotation>
            }
            
            export namespace TType__Selection {
                
                
                export namespace _limport {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection$import$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$import$<_TAnnotation>
                }
                
                export namespace global__type {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$global__type$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection$tail$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$tail$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Selection$<_TAnnotation>
            }
            
            export namespace Dictionary__Selection {
                
                
                export namespace _ltype {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Dictionary__Selection$type$<_TAnnotation>
                }
                
                export namespace dictionary {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Dictionary__Selection$dictionary$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Dictionary__Selection$<_TAnnotation>
            }
            
            export namespace TType__Library {
                
                
                export namespace imports {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type__Library$imports$<_TAnnotation>
                }
                
                export namespace atom__types {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type__Library$atom__types$<_TAnnotation>
                }
                
                export namespace global__types {
                    
                    
                    export namespace definitions {
                        
                        
                        export namespace D {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Library$global__types$definitions$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Library$global__types$definitions$<_TAnnotation>
                    }
                    
                    export namespace declarations {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Library$global__types$declarations$<_TAnnotation>
                    }
                    
                    export namespace implementations {
                        
                        
                        export namespace D {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Library$global__types$implementations$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Library$global__types$implementations$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Library$global__types$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Library$<_TAnnotation>
            }
            
            export namespace Merged__Type__Library {
                
                
                export namespace imports {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Merged__Type__Library$imports$<_TAnnotation>
                }
                
                export namespace atom__types {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Merged__Type__Library$atom__types$<_TAnnotation>
                }
                
                export namespace global__types {
                    
                    
                    export namespace D {
                        
                        
                        export namespace declaration {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Merged__Type__Library$global__types$D$declaration$<_TAnnotation>
                        }
                        
                        export namespace definition {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Merged__Type__Library$global__types$D$definition$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Merged__Type__Library$global__types$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Merged__Type__Library$global__types$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Merged__Type__Library$<_TAnnotation>
            }
            
            export namespace Global__Type__Selection {
                
                
                export namespace resolved__sibling {
                    
                    
                    export namespace _ltype {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$resolved__sibling$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Selection$resolved__sibling$<_TAnnotation>
                }
                
                export namespace _limport {
                    
                    
                    export namespace library {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$library$<_TAnnotation>
                    }
                    
                    export namespace _ltype {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$<_TAnnotation>
                }
                
                export namespace cyclic__sibling {
                    
                    
                    export namespace _ltype {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Selection$cyclic__sibling$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type__Selection$<_TAnnotation>
            }
            
            export namespace Model {
                
                
                export namespace type__library {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Model$type__library$<_TAnnotation>
                }
                
                export namespace root {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Model$root$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Model$<_TAnnotation>
            }
            
            export namespace Project {
                
                
                export namespace type__libraries {
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Project$type__libraries$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Project$type__libraries$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Project$<_TAnnotation>
            }
            
            export namespace Merged__Project {
                
                
                export namespace type__libraries {
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Merged__Project$type__libraries$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Merged__Project$type__libraries$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Merged__Project$<_TAnnotation>
            }
            
            export namespace Root {
                
                
                export type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>
            }
            
            export namespace Value__Selection__Tail {
                
                
                export namespace reference {
                    
                    
                    export namespace reference {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$reference$reference$<_TAnnotation>
                    }
                    
                    export namespace tail {
                        
                        
                        export namespace O {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$reference$tail$O$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$reference$tail$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$reference$<_TAnnotation>
                }
                
                export namespace component {
                    
                    
                    export namespace component {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$component$component$<_TAnnotation>
                    }
                    
                    export namespace tail {
                        
                        
                        export namespace O {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$component$tail$O$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$component$tail$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$component$<_TAnnotation>
                }
                
                export namespace state__group {
                    
                    
                    export namespace state__group {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$state__group$state__group$<_TAnnotation>
                    }
                    
                    export namespace result__type {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$state__group$result__type$<_TAnnotation>
                    }
                    
                    export namespace states {
                        
                        
                        export namespace D {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$state__group$states$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$state__group$states$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$state__group$<_TAnnotation>
                }
                
                export namespace group {
                    
                    
                    export namespace group {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$group$group$<_TAnnotation>
                    }
                    
                    export namespace property {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$group$property$<_TAnnotation>
                    }
                    
                    export namespace tail {
                        
                        
                        export namespace O {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$group$tail$O$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$group$tail$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$group$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Value__Selection__Tail$<_TAnnotation>
            }
            
            export namespace Any__Value__Selection {
                
                
                export namespace start {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Any__Value__Selection$start$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Any__Value__Selection$start$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Any__Value__Selection$tail$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Any__Value__Selection$tail$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Any__Value__Selection$<_TAnnotation>
            }
        }
    }
    
    export namespace Resolved {
        
        export namespace Flat {
            
            export type Atom__Types$D$ = null
            
            export type Atom__Types$ = _pt.Dictionary<Atom__Types$D$>
            
            export type Atom$type$ = {
                readonly 'key': string
                readonly 'referent': Atom__Types$D$
            }
            
            export type Atom$ = {
                readonly 'type': Atom$type$
            }
            
            export type Property$type$ = Type$
            
            export type Property$ = {
                readonly 'type': Property$type$
            }
            
            export type PropertyResolver$type$ = TypeResolver$
            
            export type PropertyResolver$ = {
                readonly 'type': PropertyResolver$type$
            }
            
            export type Type$type$array$type$ = Type$
            
            export type Type$type$array$ = {
                readonly 'type': Type$type$array$type$
            }
            
            export type Type$type$atom$atom$ = Atom$
            
            export type Type$type$atom$ = {
                readonly 'atom': Type$type$atom$atom$
            }
            
            export type Type$type$component$type$ = Global__Type__Selection$
            
            export type Type$type$component$ = {
                readonly 'type': Type$type$component$type$
            }
            
            export type Type$type$constraint$ = Type__Selection$
            
            export type Type$type$cyclic__reference$atom$ = Atom$
            
            export type Type$type$cyclic__reference$sibling$ = Global__Type__Selection$
            
            export type Type$type$cyclic__reference$ = {
                readonly 'atom': Type$type$cyclic__reference$atom$
                readonly 'sibling': Type$type$cyclic__reference$sibling$
            }
            
            export type Type$type$dictionary$key$ = Atom$
            
            export type Type$type$dictionary$constraints$D$dictionary$dictionary$ = Dictionary__Selection$
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$no$ = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$yes$ = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$ = 
                | ['no', Type$type$dictionary$constraints$D$dictionary$dense$no$]
                | ['yes', Type$type$dictionary$constraints$D$dictionary$dense$yes$]
            
            export type Type$type$dictionary$constraints$D$dictionary$ = {
                readonly 'dense': Type$type$dictionary$constraints$D$dictionary$dense$
                readonly 'dictionary': Type$type$dictionary$constraints$D$dictionary$dictionary$
            }
            
            export type Type$type$dictionary$constraints$D$lookup$ = Global__Type__Selection$
            
            export type Type$type$dictionary$constraints$D$ = 
                | ['dictionary', Type$type$dictionary$constraints$D$dictionary$]
                | ['lookup', Type$type$dictionary$constraints$D$lookup$]
            
            export type Type$type$dictionary$constraints$ = _pt.Dictionary<Type$type$dictionary$constraints$D$>
            
            export type Type$type$dictionary$type$ = Type$
            
            export type Type$type$dictionary$ = {
                readonly 'constraints': Type$type$dictionary$constraints$
                readonly 'key': Type$type$dictionary$key$
                readonly 'type': Type$type$dictionary$type$
            }
            
            export type Type$type$group$properties$D$ = Property$
            
            export type Type$type$group$properties$ = _pt.Dictionary<Type$type$group$properties$D$>
            
            export type Type$type$group$ = {
                readonly 'properties': Type$type$group$properties$
            }
            
            export type Type$type$nothing$ = null
            
            export type Type$type$optional$type$ = Type$
            
            export type Type$type$optional$ = {
                readonly 'type': Type$type$optional$type$
            }
            
            export type Type$type$resolved__reference$atom$ = Atom$
            
            export type Type$type$resolved__reference$value$dictionary$ = Dictionary__Selection$
            
            export type Type$type$resolved__reference$value$lookup$ = Global__Type__Selection$
            
            export type Type$type$resolved__reference$value$ = 
                | ['dictionary', Type$type$resolved__reference$value$dictionary$]
                | ['lookup', Type$type$resolved__reference$value$lookup$]
            
            export type Type$type$resolved__reference$ = {
                readonly 'atom': Type$type$resolved__reference$atom$
                readonly 'value': Type$type$resolved__reference$value$
            }
            
            export type Type$type$state__group$states$D$type$ = Type$
            
            export type Type$type$state__group$states$D$ = {
                readonly 'type': Type$type$state__group$states$D$type$
            }
            
            export type Type$type$state__group$states$ = _pt.Dictionary<Type$type$state__group$states$D$>
            
            export type Type$type$state__group$ = {
                readonly 'states': Type$type$state__group$states$
            }
            
            export type Type$type$ = 
                | ['array', Type$type$array$]
                | ['atom', Type$type$atom$]
                | ['component', Type$type$component$]
                | ['constraint', Type$type$constraint$]
                | ['cyclic reference', Type$type$cyclic__reference$]
                | ['dictionary', Type$type$dictionary$]
                | ['group', Type$type$group$]
                | ['nothing', Type$type$nothing$]
                | ['optional', Type$type$optional$]
                | ['resolved reference', Type$type$resolved__reference$]
                | ['state group', Type$type$state__group$]
            
            export type Type$ = {
                readonly 'type': Type$type$
            }
            
            export type TypeResolver$type$array$type$ = TypeResolver$
            
            export type TypeResolver$type$array$ = {
                readonly 'type': TypeResolver$type$array$type$
            }
            
            export type TypeResolver$type$atom$atom$ = Atom$
            
            export type TypeResolver$type$atom$ = {
                readonly 'atom': TypeResolver$type$atom$atom$
            }
            
            export type TypeResolver$type$component$type$ = Global__Type__Selection$
            
            export type TypeResolver$type$component$arguments$D$ = null
            
            export type TypeResolver$type$component$arguments$ = _pt.Dictionary<TypeResolver$type$component$arguments$D$>
            
            export type TypeResolver$type$component$ = {
                readonly 'arguments': TypeResolver$type$component$arguments$
                readonly 'type': TypeResolver$type$component$type$
            }
            
            export type TypeResolver$type$constraint$ = Type__Selection$
            
            export type TypeResolver$type$cyclic__reference$atom$ = Atom$
            
            export type TypeResolver$type$cyclic__reference$sibling$ = Global__Type__Selection$
            
            export type TypeResolver$type$cyclic__reference$ = {
                readonly 'atom': TypeResolver$type$cyclic__reference$atom$
                readonly 'sibling': TypeResolver$type$cyclic__reference$sibling$
            }
            
            export type TypeResolver$type$dictionary$key$ = Atom$
            
            export type TypeResolver$type$dictionary$constraints$D$dictionary$dictionary$ = Dictionary__Selection$
            
            export type TypeResolver$type$dictionary$constraints$D$dictionary$dense$no$ = null
            
            export type TypeResolver$type$dictionary$constraints$D$dictionary$dense$yes$ = null
            
            export type TypeResolver$type$dictionary$constraints$D$dictionary$dense$ = 
                | ['no', TypeResolver$type$dictionary$constraints$D$dictionary$dense$no$]
                | ['yes', TypeResolver$type$dictionary$constraints$D$dictionary$dense$yes$]
            
            export type TypeResolver$type$dictionary$constraints$D$dictionary$ = {
                readonly 'dense': TypeResolver$type$dictionary$constraints$D$dictionary$dense$
                readonly 'dictionary': TypeResolver$type$dictionary$constraints$D$dictionary$dictionary$
            }
            
            export type TypeResolver$type$dictionary$constraints$D$lookup$ = Global__Type__Selection$
            
            export type TypeResolver$type$dictionary$constraints$D$ = 
                | ['dictionary', TypeResolver$type$dictionary$constraints$D$dictionary$]
                | ['lookup', TypeResolver$type$dictionary$constraints$D$lookup$]
            
            export type TypeResolver$type$dictionary$constraints$ = _pt.Dictionary<TypeResolver$type$dictionary$constraints$D$>
            
            export type TypeResolver$type$dictionary$type$ = TypeResolver$
            
            export type TypeResolver$type$dictionary$ = {
                readonly 'constraints': TypeResolver$type$dictionary$constraints$
                readonly 'key': TypeResolver$type$dictionary$key$
                readonly 'type': TypeResolver$type$dictionary$type$
            }
            
            export type TypeResolver$type$group$properties$D$ = PropertyResolver$
            
            export type TypeResolver$type$group$properties$ = _pt.Dictionary<TypeResolver$type$group$properties$D$>
            
            export type TypeResolver$type$group$ = {
                readonly 'properties': TypeResolver$type$group$properties$
            }
            
            export type TypeResolver$type$nothing$ = null
            
            export type TypeResolver$type$optional$type$ = TypeResolver$
            
            export type TypeResolver$type$optional$ = {
                readonly 'type': TypeResolver$type$optional$type$
            }
            
            export type TypeResolver$type$resolved__reference$atom$ = Atom$
            
            export type TypeResolver$type$resolved__reference$value$dictionary$ = Dictionary__Selection$
            
            export type TypeResolver$type$resolved__reference$value$lookup$ = Global__Type__Selection$
            
            export type TypeResolver$type$resolved__reference$value$ = 
                | ['dictionary', TypeResolver$type$resolved__reference$value$dictionary$]
                | ['lookup', TypeResolver$type$resolved__reference$value$lookup$]
            
            export type TypeResolver$type$resolved__reference$ = {
                readonly 'atom': TypeResolver$type$resolved__reference$atom$
                readonly 'value': TypeResolver$type$resolved__reference$value$
            }
            
            export type TypeResolver$type$state__group$states$D$type$ = TypeResolver$
            
            export type TypeResolver$type$state__group$states$D$ = {
                readonly 'type': TypeResolver$type$state__group$states$D$type$
            }
            
            export type TypeResolver$type$state__group$states$ = _pt.Dictionary<TypeResolver$type$state__group$states$D$>
            
            export type TypeResolver$type$state__group$ = {
                readonly 'states': TypeResolver$type$state__group$states$
            }
            
            export type TypeResolver$type$ = 
                | ['array', TypeResolver$type$array$]
                | ['atom', TypeResolver$type$atom$]
                | ['component', TypeResolver$type$component$]
                | ['constraint', TypeResolver$type$constraint$]
                | ['cyclic reference', TypeResolver$type$cyclic__reference$]
                | ['dictionary', TypeResolver$type$dictionary$]
                | ['group', TypeResolver$type$group$]
                | ['nothing', TypeResolver$type$nothing$]
                | ['optional', TypeResolver$type$optional$]
                | ['resolved reference', TypeResolver$type$resolved__reference$]
                | ['state group', TypeResolver$type$state__group$]
            
            export type TypeResolver$ = {
                readonly 'type': TypeResolver$type$
            }
            
            export type Imports$D$library$ = {
                readonly 'key': string
                readonly 'referent': Type__Library$
            }
            
            export type Imports$D$ = {
                readonly 'library': Imports$D$library$
            }
            
            export type Imports$ = _pt.Dictionary<Imports$D$>
            
            export type Parameters$D$type$resolved__value$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type__Resolver__Declaration$>
            }
            
            export type Parameters$D$type$sibling__lookup$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type__Resolver__Declaration$>
            }
            
            export type Parameters$D$type$cyclic__sibling__lookup$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type__Resolver__Declaration$>
            }
            
            export type Parameters$D$type$key$ = null
            
            export type Parameters$D$type$ = 
                | ['cyclic sibling lookup', Parameters$D$type$cyclic__sibling__lookup$]
                | ['key', Parameters$D$type$key$]
                | ['resolved value', Parameters$D$type$resolved__value$]
                | ['sibling lookup', Parameters$D$type$sibling__lookup$]
            
            export type Parameters$D$optional$O$ = null
            
            export type Parameters$D$optional$ = _pt.OptionalValue<Parameters$D$optional$O$>
            
            export type Parameters$D$ = {
                readonly 'optional': Parameters$D$optional$
                readonly 'type': Parameters$D$type$
            }
            
            export type Parameters$ = _pt.Dictionary<Parameters$D$>
            
            export type Global__Type__Resolver__Declaration$parameters$ = Parameters$
            
            export type Global__Type__Resolver__Declaration$result$O$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type__Resolver__Declaration$>
            }
            
            export type Global__Type__Resolver__Declaration$result$ = _pt.OptionalValue<Global__Type__Resolver__Declaration$result$O$>
            
            export type Global__Type__Resolver__Declaration$ = {
                readonly 'parameters': Global__Type__Resolver__Declaration$parameters$
                readonly 'result': Global__Type__Resolver__Declaration$result$
            }
            
            export type Global__Type__Resolver__Declarations$D$ = Global__Type__Resolver__Declaration$
            
            export type Global__Type__Resolver__Declarations$ = _pt.Dictionary<Global__Type__Resolver__Declarations$D$>
            
            export type Variable$parameter$parameter$ = {
                readonly 'key': string
                readonly 'referent': Parameters$D$
            }
            
            export type Variable$parameter$resolved__value$ = Parameters$D$type$resolved__value$
            
            export type Variable$parameter$ = {
                readonly 'parameter': Variable$parameter$parameter$
                readonly 'resolved value': Variable$parameter$resolved__value$
            }
            
            export type Variable$parent__variable$ = {
                readonly 'key': string
                readonly 'referent': Variable$
            }
            
            export type Variable$ = 
                | ['parameter', Variable$parameter$]
                | ['parent variable', Variable$parent__variable$]
            
            export type Variables$D$ = Variable$
            
            export type Variables$ = _pt.Dictionary<Variables$D$>
            
            export type Global__Type__Resolver__Implementation$variables$ = Variables$
            
            export type Global__Type__Resolver__Implementation$type$ = TypeResolver$
            
            export type Global__Type__Resolver__Implementation$result$O$ = Value__Selection__Tail$
            
            export type Global__Type__Resolver__Implementation$result$ = _pt.OptionalValue<Global__Type__Resolver__Implementation$result$O$>
            
            export type Global__Type__Resolver__Implementation$ = {
                readonly 'result': Global__Type__Resolver__Implementation$result$
                readonly 'type': Global__Type__Resolver__Implementation$type$
                readonly 'variables': Global__Type__Resolver__Implementation$variables$
            }
            
            export type Global__Type__Definition$type$ = Type$
            
            export type Global__Type__Definition$ = {
                readonly 'type': Global__Type__Definition$type$
            }
            
            export type Type__Selection__Tail$step__type$dictionary$dictionary$ = Type$type$dictionary$
            
            export type Type__Selection__Tail$step__type$dictionary$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$step__type$dictionary$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$dictionary$tail$O$>
            
            export type Type__Selection__Tail$step__type$dictionary$ = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$
                readonly 'tail': Type__Selection__Tail$step__type$dictionary$tail$
            }
            
            export type Type__Selection__Tail$step__type$optional$optional$ = Type$type$optional$
            
            export type Type__Selection__Tail$step__type$optional$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$step__type$optional$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$optional$tail$O$>
            
            export type Type__Selection__Tail$step__type$optional$ = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$
                readonly 'tail': Type__Selection__Tail$step__type$optional$tail$
            }
            
            export type Type__Selection__Tail$step__type$array$array$ = Type$type$array$
            
            export type Type__Selection__Tail$step__type$array$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$step__type$array$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$array$tail$O$>
            
            export type Type__Selection__Tail$step__type$array$ = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$
                readonly 'tail': Type__Selection__Tail$step__type$array$tail$
            }
            
            export type Type__Selection__Tail$step__type$group$group$ = Type$type$group$
            
            export type Type__Selection__Tail$step__type$group$property$ = {
                readonly 'key': string
                readonly 'referent': Type$type$group$properties$D$
            }
            
            export type Type__Selection__Tail$step__type$group$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$step__type$group$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$group$tail$O$>
            
            export type Type__Selection__Tail$step__type$group$ = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$
                readonly 'property': Type__Selection__Tail$step__type$group$property$
                readonly 'tail': Type__Selection__Tail$step__type$group$tail$
            }
            
            export type Type__Selection__Tail$step__type$state__group$state__group$ = Type$type$state__group$
            
            export type Type__Selection__Tail$step__type$state__group$state$ = {
                readonly 'key': string
                readonly 'referent': Type$type$state__group$states$D$
            }
            
            export type Type__Selection__Tail$step__type$state__group$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$step__type$state__group$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$state__group$tail$O$>
            
            export type Type__Selection__Tail$step__type$state__group$ = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$
                readonly 'tail': Type__Selection__Tail$step__type$state__group$tail$
            }
            
            export type Type__Selection__Tail$step__type$ = 
                | ['array', Type__Selection__Tail$step__type$array$]
                | ['dictionary', Type__Selection__Tail$step__type$dictionary$]
                | ['group', Type__Selection__Tail$step__type$group$]
                | ['optional', Type__Selection__Tail$step__type$optional$]
                | ['state group', Type__Selection__Tail$step__type$state__group$]
            
            export type Type__Selection__Tail$ = {
                readonly 'step type': Type__Selection__Tail$step__type$
            }
            
            export type Type__Selection$import$O$ = {
                readonly 'key': string
                readonly 'referent': Imports$D$
            }
            
            export type Type__Selection$import$ = _pt.OptionalValue<Type__Selection$import$O$>
            
            export type Type__Selection$global__type$ = {
                readonly 'key': string
                readonly 'referent': Global__Type__Definition$
            }
            
            export type Type__Selection$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection$tail$ = _pt.OptionalValue<Type__Selection$tail$O$>
            
            export type Type__Selection$ = {
                readonly 'global type': Type__Selection$global__type$
                readonly 'import': Type__Selection$import$
                readonly 'tail': Type__Selection$tail$
            }
            
            export type Dictionary__Selection$type$ = Type__Selection$
            
            export type Dictionary__Selection$dictionary$ = Type$type$dictionary$
            
            export type Dictionary__Selection$ = {
                readonly 'dictionary': Dictionary__Selection$dictionary$
                readonly 'type': Dictionary__Selection$type$
            }
            
            export type Type__Library$imports$ = Imports$
            
            export type Type__Library$atom__types$ = Atom__Types$
            
            export type Type__Library$global__types$definitions$D$ = Global__Type__Definition$
            
            export type Type__Library$global__types$definitions$ = _pt.Dictionary<Type__Library$global__types$definitions$D$>
            
            export type Type__Library$global__types$declarations$ = Global__Type__Resolver__Declarations$
            
            export type Type__Library$global__types$implementations$D$ = Global__Type__Resolver__Implementation$
            
            export type Type__Library$global__types$implementations$ = _pt.Dictionary<Type__Library$global__types$implementations$D$>
            
            export type Type__Library$global__types$ = {
                readonly 'declarations': Type__Library$global__types$declarations$
                readonly 'definitions': Type__Library$global__types$definitions$
                readonly 'implementations': Type__Library$global__types$implementations$
            }
            
            export type Type__Library$ = {
                readonly 'atom types': Type__Library$atom__types$
                readonly 'global types': Type__Library$global__types$
                readonly 'imports': Type__Library$imports$
            }
            
            export type Merged__Type__Library$imports$ = Imports$
            
            export type Merged__Type__Library$atom__types$ = Atom__Types$
            
            export type Merged__Type__Library$global__types$D$declaration$ = Global__Type__Resolver__Declaration$
            
            export type Merged__Type__Library$global__types$D$definition$ = Global__Type__Resolver__Implementation$
            
            export type Merged__Type__Library$global__types$D$ = {
                readonly 'declaration': Merged__Type__Library$global__types$D$declaration$
                readonly 'definition': Merged__Type__Library$global__types$D$definition$
            }
            
            export type Merged__Type__Library$global__types$ = _pt.Dictionary<Merged__Type__Library$global__types$D$>
            
            export type Merged__Type__Library$ = {
                readonly 'atom types': Merged__Type__Library$atom__types$
                readonly 'global types': Merged__Type__Library$global__types$
                readonly 'imports': Merged__Type__Library$imports$
            }
            
            export type Global__Type__Selection$resolved__sibling$type$ = {
                readonly 'key': string
                readonly 'referent': Global__Type__Definition$
            }
            
            export type Global__Type__Selection$resolved__sibling$ = {
                readonly 'type': Global__Type__Selection$resolved__sibling$type$
            }
            
            export type Global__Type__Selection$import$library$ = {
                readonly 'key': string
                readonly 'referent': Imports$D$
            }
            
            export type Global__Type__Selection$import$type$ = {
                readonly 'key': string
                readonly 'referent': Type__Library$global__types$definitions$D$
            }
            
            export type Global__Type__Selection$import$ = {
                readonly 'library': Global__Type__Selection$import$library$
                readonly 'type': Global__Type__Selection$import$type$
            }
            
            export type Global__Type__Selection$cyclic__sibling$type$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type__Definition$>
            }
            
            export type Global__Type__Selection$cyclic__sibling$ = {
                readonly 'type': Global__Type__Selection$cyclic__sibling$type$
            }
            
            export type Global__Type__Selection$ = 
                | ['cyclic sibling', Global__Type__Selection$cyclic__sibling$]
                | ['import', Global__Type__Selection$import$]
                | ['resolved sibling', Global__Type__Selection$resolved__sibling$]
            
            export type Model$type__library$ = Type__Library$
            
            export type Model$root$ = {
                readonly 'key': string
                readonly 'referent': Type__Library$global__types$definitions$D$
            }
            
            export type Model$ = {
                readonly 'root': Model$root$
                readonly 'type library': Model$type__library$
            }
            
            export type Project$type__libraries$D$ = Type__Library$
            
            export type Project$type__libraries$ = _pt.Dictionary<Project$type__libraries$D$>
            
            export type Project$ = {
                readonly 'type libraries': Project$type__libraries$
            }
            
            export type Merged__Project$type__libraries$D$ = Merged__Type__Library$
            
            export type Merged__Project$type__libraries$ = _pt.Dictionary<Merged__Project$type__libraries$D$>
            
            export type Merged__Project$ = {
                readonly 'type libraries': Merged__Project$type__libraries$
            }
            
            export type Root$ = Project$
            
            export type Value__Selection__Tail$reference$reference$ = Type$type$resolved__reference$
            
            export type Value__Selection__Tail$reference$tail$O$ = Value__Selection__Tail$
            
            export type Value__Selection__Tail$reference$tail$ = _pt.OptionalValue<Value__Selection__Tail$reference$tail$O$>
            
            export type Value__Selection__Tail$reference$ = {
                readonly 'reference': Value__Selection__Tail$reference$reference$
                readonly 'tail': Value__Selection__Tail$reference$tail$
            }
            
            export type Value__Selection__Tail$component$component$ = Type$type$component$
            
            export type Value__Selection__Tail$component$tail$O$ = Value__Selection__Tail$
            
            export type Value__Selection__Tail$component$tail$ = _pt.OptionalValue<Value__Selection__Tail$component$tail$O$>
            
            export type Value__Selection__Tail$component$ = {
                readonly 'component': Value__Selection__Tail$component$component$
                readonly 'tail': Value__Selection__Tail$component$tail$
            }
            
            export type Value__Selection__Tail$state__group$state__group$ = Type$type$state__group$
            
            export type Value__Selection__Tail$state__group$result__type$ = Global__Type__Selection$
            
            export type Value__Selection__Tail$state__group$states$D$ = Any__Value__Selection$
            
            export type Value__Selection__Tail$state__group$states$ = _pt.Dictionary<Value__Selection__Tail$state__group$states$D$>
            
            export type Value__Selection__Tail$state__group$ = {
                readonly 'result type': Value__Selection__Tail$state__group$result__type$
                readonly 'state group': Value__Selection__Tail$state__group$state__group$
                readonly 'states': Value__Selection__Tail$state__group$states$
            }
            
            export type Value__Selection__Tail$group$group$ = Type$type$group$
            
            export type Value__Selection__Tail$group$property$ = {
                readonly 'key': string
                readonly 'referent': Type$type$group$properties$D$
            }
            
            export type Value__Selection__Tail$group$tail$O$ = Value__Selection__Tail$
            
            export type Value__Selection__Tail$group$tail$ = _pt.OptionalValue<Value__Selection__Tail$group$tail$O$>
            
            export type Value__Selection__Tail$group$ = {
                readonly 'group': Value__Selection__Tail$group$group$
                readonly 'property': Value__Selection__Tail$group$property$
                readonly 'tail': Value__Selection__Tail$group$tail$
            }
            
            export type Value__Selection__Tail$ = 
                | ['component', Value__Selection__Tail$component$]
                | ['group', Value__Selection__Tail$group$]
                | ['reference', Value__Selection__Tail$reference$]
                | ['state group', Value__Selection__Tail$state__group$]
            
            export type Any__Value__Selection$start$O$ = {
                readonly 'key': string
                readonly 'referent': Variables$D$
            }
            
            export type Any__Value__Selection$start$ = _pt.OptionalValue<Any__Value__Selection$start$O$>
            
            export type Any__Value__Selection$tail$O$ = Value__Selection__Tail$
            
            export type Any__Value__Selection$tail$ = _pt.OptionalValue<Any__Value__Selection$tail$O$>
            
            export type Any__Value__Selection$ = {
                readonly 'start': Any__Value__Selection$start$
                readonly 'tail': Any__Value__Selection$tail$
            }
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            export namespace Atom__Types {
                
                
                export namespace D {
                    
                    
                    export type $ = _IFlat.Atom__Types$D$
                }
                
                export type $ = _IFlat.Atom__Types$
            }
            
            export namespace Atom {
                
                
                export namespace _ltype {
                    
                    
                    export type $ = _IFlat.Atom$type$
                }
                
                export type $ = _IFlat.Atom$
            }
            
            export namespace Property {
                
                
                export namespace _ltype {
                    
                    
                    export type $ = _IFlat.Property$type$
                }
                
                export type $ = _IFlat.Property$
            }
            
            export namespace PropertyResolver {
                
                
                export namespace _ltype {
                    
                    
                    export type $ = _IFlat.PropertyResolver$type$
                }
                
                export type $ = _IFlat.PropertyResolver$
            }
            
            export namespace TType {
                
                
                export namespace _ltype {
                    
                    
                    export namespace array {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.Type$type$array$type$
                        }
                        
                        export type $ = _IFlat.Type$type$array$
                    }
                    
                    export namespace atom {
                        
                        
                        export namespace atom {
                            
                            
                            export type $ = _IFlat.Type$type$atom$atom$
                        }
                        
                        export type $ = _IFlat.Type$type$atom$
                    }
                    
                    export namespace component {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.Type$type$component$type$
                        }
                        
                        export type $ = _IFlat.Type$type$component$
                    }
                    
                    export namespace constraint {
                        
                        
                        export type $ = _IFlat.Type$type$constraint$
                    }
                    
                    export namespace cyclic__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $ = _IFlat.Type$type$cyclic__reference$atom$
                        }
                        
                        export namespace sibling {
                            
                            
                            export type $ = _IFlat.Type$type$cyclic__reference$sibling$
                        }
                        
                        export type $ = _IFlat.Type$type$cyclic__reference$
                    }
                    
                    export namespace dictionary {
                        
                        
                        export namespace key {
                            
                            
                            export type $ = _IFlat.Type$type$dictionary$key$
                        }
                        
                        export namespace constraints {
                            
                            
                            export namespace D {
                                
                                
                                export namespace dictionary {
                                    
                                    
                                    export namespace dictionary {
                                        
                                        
                                        export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dictionary$
                                    }
                                    
                                    export namespace dense {
                                        
                                        
                                        export namespace no {
                                            
                                            
                                            export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$no$
                                        }
                                        
                                        export namespace yes {
                                            
                                            
                                            export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$yes$
                                        }
                                        
                                        export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$
                                    }
                                    
                                    export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$
                                }
                                
                                export namespace lookup {
                                    
                                    
                                    export type $ = _IFlat.Type$type$dictionary$constraints$D$lookup$
                                }
                                
                                export type $ = _IFlat.Type$type$dictionary$constraints$D$
                            }
                            
                            export type $ = _IFlat.Type$type$dictionary$constraints$
                        }
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.Type$type$dictionary$type$
                        }
                        
                        export type $ = _IFlat.Type$type$dictionary$
                    }
                    
                    export namespace group {
                        
                        
                        export namespace properties {
                            
                            
                            export namespace D {
                                
                                
                                export type $ = _IFlat.Type$type$group$properties$D$
                            }
                            
                            export type $ = _IFlat.Type$type$group$properties$
                        }
                        
                        export type $ = _IFlat.Type$type$group$
                    }
                    
                    export namespace nothing {
                        
                        
                        export type $ = _IFlat.Type$type$nothing$
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.Type$type$optional$type$
                        }
                        
                        export type $ = _IFlat.Type$type$optional$
                    }
                    
                    export namespace resolved__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $ = _IFlat.Type$type$resolved__reference$atom$
                        }
                        
                        export namespace value {
                            
                            
                            export namespace dictionary {
                                
                                
                                export type $ = _IFlat.Type$type$resolved__reference$value$dictionary$
                            }
                            
                            export namespace lookup {
                                
                                
                                export type $ = _IFlat.Type$type$resolved__reference$value$lookup$
                            }
                            
                            export type $ = _IFlat.Type$type$resolved__reference$value$
                        }
                        
                        export type $ = _IFlat.Type$type$resolved__reference$
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace states {
                            
                            
                            export namespace D {
                                
                                
                                export namespace _ltype {
                                    
                                    
                                    export type $ = _IFlat.Type$type$state__group$states$D$type$
                                }
                                
                                export type $ = _IFlat.Type$type$state__group$states$D$
                            }
                            
                            export type $ = _IFlat.Type$type$state__group$states$
                        }
                        
                        export type $ = _IFlat.Type$type$state__group$
                    }
                    
                    export type $ = _IFlat.Type$type$
                }
                
                export type $ = _IFlat.Type$
            }
            
            export namespace TTypeResolver {
                
                
                export namespace _ltype {
                    
                    
                    export namespace array {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.TypeResolver$type$array$type$
                        }
                        
                        export type $ = _IFlat.TypeResolver$type$array$
                    }
                    
                    export namespace atom {
                        
                        
                        export namespace atom {
                            
                            
                            export type $ = _IFlat.TypeResolver$type$atom$atom$
                        }
                        
                        export type $ = _IFlat.TypeResolver$type$atom$
                    }
                    
                    export namespace component {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.TypeResolver$type$component$type$
                        }
                        
                        export namespace _larguments {
                            
                            
                            export namespace D {
                                
                                
                                export type $ = _IFlat.TypeResolver$type$component$arguments$D$
                            }
                            
                            export type $ = _IFlat.TypeResolver$type$component$arguments$
                        }
                        
                        export type $ = _IFlat.TypeResolver$type$component$
                    }
                    
                    export namespace constraint {
                        
                        
                        export type $ = _IFlat.TypeResolver$type$constraint$
                    }
                    
                    export namespace cyclic__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $ = _IFlat.TypeResolver$type$cyclic__reference$atom$
                        }
                        
                        export namespace sibling {
                            
                            
                            export type $ = _IFlat.TypeResolver$type$cyclic__reference$sibling$
                        }
                        
                        export type $ = _IFlat.TypeResolver$type$cyclic__reference$
                    }
                    
                    export namespace dictionary {
                        
                        
                        export namespace key {
                            
                            
                            export type $ = _IFlat.TypeResolver$type$dictionary$key$
                        }
                        
                        export namespace constraints {
                            
                            
                            export namespace D {
                                
                                
                                export namespace dictionary {
                                    
                                    
                                    export namespace dictionary {
                                        
                                        
                                        export type $ = _IFlat.TypeResolver$type$dictionary$constraints$D$dictionary$dictionary$
                                    }
                                    
                                    export namespace dense {
                                        
                                        
                                        export namespace no {
                                            
                                            
                                            export type $ = _IFlat.TypeResolver$type$dictionary$constraints$D$dictionary$dense$no$
                                        }
                                        
                                        export namespace yes {
                                            
                                            
                                            export type $ = _IFlat.TypeResolver$type$dictionary$constraints$D$dictionary$dense$yes$
                                        }
                                        
                                        export type $ = _IFlat.TypeResolver$type$dictionary$constraints$D$dictionary$dense$
                                    }
                                    
                                    export type $ = _IFlat.TypeResolver$type$dictionary$constraints$D$dictionary$
                                }
                                
                                export namespace lookup {
                                    
                                    
                                    export type $ = _IFlat.TypeResolver$type$dictionary$constraints$D$lookup$
                                }
                                
                                export type $ = _IFlat.TypeResolver$type$dictionary$constraints$D$
                            }
                            
                            export type $ = _IFlat.TypeResolver$type$dictionary$constraints$
                        }
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.TypeResolver$type$dictionary$type$
                        }
                        
                        export type $ = _IFlat.TypeResolver$type$dictionary$
                    }
                    
                    export namespace group {
                        
                        
                        export namespace properties {
                            
                            
                            export namespace D {
                                
                                
                                export type $ = _IFlat.TypeResolver$type$group$properties$D$
                            }
                            
                            export type $ = _IFlat.TypeResolver$type$group$properties$
                        }
                        
                        export type $ = _IFlat.TypeResolver$type$group$
                    }
                    
                    export namespace nothing {
                        
                        
                        export type $ = _IFlat.TypeResolver$type$nothing$
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.TypeResolver$type$optional$type$
                        }
                        
                        export type $ = _IFlat.TypeResolver$type$optional$
                    }
                    
                    export namespace resolved__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $ = _IFlat.TypeResolver$type$resolved__reference$atom$
                        }
                        
                        export namespace value {
                            
                            
                            export namespace dictionary {
                                
                                
                                export type $ = _IFlat.TypeResolver$type$resolved__reference$value$dictionary$
                            }
                            
                            export namespace lookup {
                                
                                
                                export type $ = _IFlat.TypeResolver$type$resolved__reference$value$lookup$
                            }
                            
                            export type $ = _IFlat.TypeResolver$type$resolved__reference$value$
                        }
                        
                        export type $ = _IFlat.TypeResolver$type$resolved__reference$
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace states {
                            
                            
                            export namespace D {
                                
                                
                                export namespace _ltype {
                                    
                                    
                                    export type $ = _IFlat.TypeResolver$type$state__group$states$D$type$
                                }
                                
                                export type $ = _IFlat.TypeResolver$type$state__group$states$D$
                            }
                            
                            export type $ = _IFlat.TypeResolver$type$state__group$states$
                        }
                        
                        export type $ = _IFlat.TypeResolver$type$state__group$
                    }
                    
                    export type $ = _IFlat.TypeResolver$type$
                }
                
                export type $ = _IFlat.TypeResolver$
            }
            
            export namespace Imports {
                
                
                export namespace D {
                    
                    
                    export namespace library {
                        
                        
                        export type $ = _IFlat.Imports$D$library$
                    }
                    
                    export type $ = _IFlat.Imports$D$
                }
                
                export type $ = _IFlat.Imports$
            }
            
            export namespace Parameters {
                
                
                export namespace D {
                    
                    
                    export namespace _ltype {
                        
                        
                        export namespace resolved__value {
                            
                            
                            export type $ = _IFlat.Parameters$D$type$resolved__value$
                        }
                        
                        export namespace sibling__lookup {
                            
                            
                            export type $ = _IFlat.Parameters$D$type$sibling__lookup$
                        }
                        
                        export namespace cyclic__sibling__lookup {
                            
                            
                            export type $ = _IFlat.Parameters$D$type$cyclic__sibling__lookup$
                        }
                        
                        export namespace key {
                            
                            
                            export type $ = _IFlat.Parameters$D$type$key$
                        }
                        
                        export type $ = _IFlat.Parameters$D$type$
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace O {
                            
                            
                            export type $ = _IFlat.Parameters$D$optional$O$
                        }
                        
                        export type $ = _IFlat.Parameters$D$optional$
                    }
                    
                    export type $ = _IFlat.Parameters$D$
                }
                
                export type $ = _IFlat.Parameters$
            }
            
            export namespace Global__Type__Resolver__Declaration {
                
                
                export namespace parameters {
                    
                    
                    export type $ = _IFlat.Global__Type__Resolver__Declaration$parameters$
                }
                
                export namespace result {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Global__Type__Resolver__Declaration$result$O$
                    }
                    
                    export type $ = _IFlat.Global__Type__Resolver__Declaration$result$
                }
                
                export type $ = _IFlat.Global__Type__Resolver__Declaration$
            }
            
            export namespace Global__Type__Resolver__Declarations {
                
                
                export namespace D {
                    
                    
                    export type $ = _IFlat.Global__Type__Resolver__Declarations$D$
                }
                
                export type $ = _IFlat.Global__Type__Resolver__Declarations$
            }
            
            export namespace Variable {
                
                
                export namespace parameter {
                    
                    
                    export namespace parameter {
                        
                        
                        export type $ = _IFlat.Variable$parameter$parameter$
                    }
                    
                    export namespace resolved__value {
                        
                        
                        export type $ = _IFlat.Variable$parameter$resolved__value$
                    }
                    
                    export type $ = _IFlat.Variable$parameter$
                }
                
                export namespace parent__variable {
                    
                    
                    export type $ = _IFlat.Variable$parent__variable$
                }
                
                export type $ = _IFlat.Variable$
            }
            
            export namespace Variables {
                
                
                export namespace D {
                    
                    
                    export type $ = _IFlat.Variables$D$
                }
                
                export type $ = _IFlat.Variables$
            }
            
            export namespace Global__Type__Resolver__Implementation {
                
                
                export namespace variables {
                    
                    
                    export type $ = _IFlat.Global__Type__Resolver__Implementation$variables$
                }
                
                export namespace _ltype {
                    
                    
                    export type $ = _IFlat.Global__Type__Resolver__Implementation$type$
                }
                
                export namespace result {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Global__Type__Resolver__Implementation$result$O$
                    }
                    
                    export type $ = _IFlat.Global__Type__Resolver__Implementation$result$
                }
                
                export type $ = _IFlat.Global__Type__Resolver__Implementation$
            }
            
            export namespace Global__Type__Definition {
                
                
                export namespace _ltype {
                    
                    
                    export type $ = _IFlat.Global__Type__Definition$type$
                }
                
                export type $ = _IFlat.Global__Type__Definition$
            }
            
            export namespace TType__Selection__Tail {
                
                
                export namespace step__type {
                    
                    
                    export namespace dictionary {
                        
                        
                        export namespace dictionary {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$O$
                            }
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace optional {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$optional$optional$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type__Selection__Tail$step__type$optional$tail$O$
                            }
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$optional$tail$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$optional$
                    }
                    
                    export namespace array {
                        
                        
                        export namespace array {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$array$array$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type__Selection__Tail$step__type$array$tail$O$
                            }
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$array$tail$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$array$
                    }
                    
                    export namespace group {
                        
                        
                        export namespace group {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$group$group$
                        }
                        
                        export namespace property {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$group$property$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type__Selection__Tail$step__type$group$tail$O$
                            }
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$group$tail$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$group$
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace state__group {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$
                        }
                        
                        export namespace state {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$tail$O$
                            }
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$tail$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$
                    }
                    
                    export type $ = _IFlat.Type__Selection__Tail$step__type$
                }
                
                export type $ = _IFlat.Type__Selection__Tail$
            }
            
            export namespace TType__Selection {
                
                
                export namespace _limport {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Type__Selection$import$O$
                    }
                    
                    export type $ = _IFlat.Type__Selection$import$
                }
                
                export namespace global__type {
                    
                    
                    export type $ = _IFlat.Type__Selection$global__type$
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Type__Selection$tail$O$
                    }
                    
                    export type $ = _IFlat.Type__Selection$tail$
                }
                
                export type $ = _IFlat.Type__Selection$
            }
            
            export namespace Dictionary__Selection {
                
                
                export namespace _ltype {
                    
                    
                    export type $ = _IFlat.Dictionary__Selection$type$
                }
                
                export namespace dictionary {
                    
                    
                    export type $ = _IFlat.Dictionary__Selection$dictionary$
                }
                
                export type $ = _IFlat.Dictionary__Selection$
            }
            
            export namespace TType__Library {
                
                
                export namespace imports {
                    
                    
                    export type $ = _IFlat.Type__Library$imports$
                }
                
                export namespace atom__types {
                    
                    
                    export type $ = _IFlat.Type__Library$atom__types$
                }
                
                export namespace global__types {
                    
                    
                    export namespace definitions {
                        
                        
                        export namespace D {
                            
                            
                            export type $ = _IFlat.Type__Library$global__types$definitions$D$
                        }
                        
                        export type $ = _IFlat.Type__Library$global__types$definitions$
                    }
                    
                    export namespace declarations {
                        
                        
                        export type $ = _IFlat.Type__Library$global__types$declarations$
                    }
                    
                    export namespace implementations {
                        
                        
                        export namespace D {
                            
                            
                            export type $ = _IFlat.Type__Library$global__types$implementations$D$
                        }
                        
                        export type $ = _IFlat.Type__Library$global__types$implementations$
                    }
                    
                    export type $ = _IFlat.Type__Library$global__types$
                }
                
                export type $ = _IFlat.Type__Library$
            }
            
            export namespace Merged__Type__Library {
                
                
                export namespace imports {
                    
                    
                    export type $ = _IFlat.Merged__Type__Library$imports$
                }
                
                export namespace atom__types {
                    
                    
                    export type $ = _IFlat.Merged__Type__Library$atom__types$
                }
                
                export namespace global__types {
                    
                    
                    export namespace D {
                        
                        
                        export namespace declaration {
                            
                            
                            export type $ = _IFlat.Merged__Type__Library$global__types$D$declaration$
                        }
                        
                        export namespace definition {
                            
                            
                            export type $ = _IFlat.Merged__Type__Library$global__types$D$definition$
                        }
                        
                        export type $ = _IFlat.Merged__Type__Library$global__types$D$
                    }
                    
                    export type $ = _IFlat.Merged__Type__Library$global__types$
                }
                
                export type $ = _IFlat.Merged__Type__Library$
            }
            
            export namespace Global__Type__Selection {
                
                
                export namespace resolved__sibling {
                    
                    
                    export namespace _ltype {
                        
                        
                        export type $ = _IFlat.Global__Type__Selection$resolved__sibling$type$
                    }
                    
                    export type $ = _IFlat.Global__Type__Selection$resolved__sibling$
                }
                
                export namespace _limport {
                    
                    
                    export namespace library {
                        
                        
                        export type $ = _IFlat.Global__Type__Selection$import$library$
                    }
                    
                    export namespace _ltype {
                        
                        
                        export type $ = _IFlat.Global__Type__Selection$import$type$
                    }
                    
                    export type $ = _IFlat.Global__Type__Selection$import$
                }
                
                export namespace cyclic__sibling {
                    
                    
                    export namespace _ltype {
                        
                        
                        export type $ = _IFlat.Global__Type__Selection$cyclic__sibling$type$
                    }
                    
                    export type $ = _IFlat.Global__Type__Selection$cyclic__sibling$
                }
                
                export type $ = _IFlat.Global__Type__Selection$
            }
            
            export namespace Model {
                
                
                export namespace type__library {
                    
                    
                    export type $ = _IFlat.Model$type__library$
                }
                
                export namespace root {
                    
                    
                    export type $ = _IFlat.Model$root$
                }
                
                export type $ = _IFlat.Model$
            }
            
            export namespace Project {
                
                
                export namespace type__libraries {
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Project$type__libraries$D$
                    }
                    
                    export type $ = _IFlat.Project$type__libraries$
                }
                
                export type $ = _IFlat.Project$
            }
            
            export namespace Merged__Project {
                
                
                export namespace type__libraries {
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Merged__Project$type__libraries$D$
                    }
                    
                    export type $ = _IFlat.Merged__Project$type__libraries$
                }
                
                export type $ = _IFlat.Merged__Project$
            }
            
            export namespace Root {
                
                
                export type $ = _IFlat.Root$
            }
            
            export namespace Value__Selection__Tail {
                
                
                export namespace reference {
                    
                    
                    export namespace reference {
                        
                        
                        export type $ = _IFlat.Value__Selection__Tail$reference$reference$
                    }
                    
                    export namespace tail {
                        
                        
                        export namespace O {
                            
                            
                            export type $ = _IFlat.Value__Selection__Tail$reference$tail$O$
                        }
                        
                        export type $ = _IFlat.Value__Selection__Tail$reference$tail$
                    }
                    
                    export type $ = _IFlat.Value__Selection__Tail$reference$
                }
                
                export namespace component {
                    
                    
                    export namespace component {
                        
                        
                        export type $ = _IFlat.Value__Selection__Tail$component$component$
                    }
                    
                    export namespace tail {
                        
                        
                        export namespace O {
                            
                            
                            export type $ = _IFlat.Value__Selection__Tail$component$tail$O$
                        }
                        
                        export type $ = _IFlat.Value__Selection__Tail$component$tail$
                    }
                    
                    export type $ = _IFlat.Value__Selection__Tail$component$
                }
                
                export namespace state__group {
                    
                    
                    export namespace state__group {
                        
                        
                        export type $ = _IFlat.Value__Selection__Tail$state__group$state__group$
                    }
                    
                    export namespace result__type {
                        
                        
                        export type $ = _IFlat.Value__Selection__Tail$state__group$result__type$
                    }
                    
                    export namespace states {
                        
                        
                        export namespace D {
                            
                            
                            export type $ = _IFlat.Value__Selection__Tail$state__group$states$D$
                        }
                        
                        export type $ = _IFlat.Value__Selection__Tail$state__group$states$
                    }
                    
                    export type $ = _IFlat.Value__Selection__Tail$state__group$
                }
                
                export namespace group {
                    
                    
                    export namespace group {
                        
                        
                        export type $ = _IFlat.Value__Selection__Tail$group$group$
                    }
                    
                    export namespace property {
                        
                        
                        export type $ = _IFlat.Value__Selection__Tail$group$property$
                    }
                    
                    export namespace tail {
                        
                        
                        export namespace O {
                            
                            
                            export type $ = _IFlat.Value__Selection__Tail$group$tail$O$
                        }
                        
                        export type $ = _IFlat.Value__Selection__Tail$group$tail$
                    }
                    
                    export type $ = _IFlat.Value__Selection__Tail$group$
                }
                
                export type $ = _IFlat.Value__Selection__Tail$
            }
            
            export namespace Any__Value__Selection {
                
                
                export namespace start {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Any__Value__Selection$start$O$
                    }
                    
                    export type $ = _IFlat.Any__Value__Selection$start$
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Any__Value__Selection$tail$O$
                    }
                    
                    export type $ = _IFlat.Any__Value__Selection$tail$
                }
                
                export type $ = _IFlat.Any__Value__Selection$
            }
        }
    }
    
    export namespace Resolve {
        
        import _IResolved = Resolved
        
        import _IUnresolved = Unresolved
        
        export namespace selectors {
            
            
        }
        
        export namespace resolvers {
            
            
            
            export type Atom__Types = <_TAnnotation>(
                $: _IUnresolved.Flat.Atom__Types$<_TAnnotation>,
            ) => _IResolved.Flat.Atom__Types$
            
            export type Atom = <_TAnnotation>(
                $: _IUnresolved.Flat.Atom$<_TAnnotation>,
                $p: {
                    readonly 'atom types': _IResolved.Flat.Atom__Types$
                }
            ) => _IResolved.Flat.Atom$
            
            export type Property = <_TAnnotation>(
                $: _IUnresolved.Flat.Property$<_TAnnotation>,
                $p: {
                    readonly 'atom types': _IResolved.Flat.Atom__Types$
                    readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                    readonly 'imports': _IResolved.Flat.Imports$
                    readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
                }
            ) => _IResolved.Flat.Property$
            
            export type PropertyResolver = <_TAnnotation>(
                $: _IUnresolved.Flat.PropertyResolver$<_TAnnotation>,
                $p: {
                    readonly 'atom types': _IResolved.Flat.Atom__Types$
                    readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                    readonly 'imports': _IResolved.Flat.Imports$
                    readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
                }
            ) => _IResolved.Flat.PropertyResolver$
            
            export type Type = <_TAnnotation>(
                $: _IUnresolved.Flat.Type$<_TAnnotation>,
                $p: {
                    readonly 'atom types': _IResolved.Flat.Atom__Types$
                    readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                    readonly 'imports': _IResolved.Flat.Imports$
                    readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
                }
            ) => _IResolved.Flat.Type$
            
            export type TypeResolver = <_TAnnotation>(
                $: _IUnresolved.Flat.TypeResolver$<_TAnnotation>,
                $p: {
                    readonly 'atom types': _IResolved.Flat.Atom__Types$
                    readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                    readonly 'imports': _IResolved.Flat.Imports$
                    readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
                }
            ) => _IResolved.Flat.TypeResolver$
            
            export type Imports = <_TAnnotation>(
                $: _IUnresolved.Flat.Imports$<_TAnnotation>,
                $p: {
                    readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>
                }
            ) => _IResolved.Flat.Imports$
            
            export type Parameters = <_TAnnotation>(
                $: _IUnresolved.Flat.Parameters$<_TAnnotation>,
            ) => _IResolved.Flat.Parameters$
            
            export type Global__Type__Resolver__Declaration = <_TAnnotation>(
                $: _IUnresolved.Flat.Global__Type__Resolver__Declaration$<_TAnnotation>,
                $p: {
                    readonly 'all siblings': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Resolver__Declaration$>>
                }
            ) => _IResolved.Flat.Global__Type__Resolver__Declaration$
            
            export type Global__Type__Resolver__Declarations = <_TAnnotation>(
                $: _IUnresolved.Flat.Global__Type__Resolver__Declarations$<_TAnnotation>,
            ) => _IResolved.Flat.Global__Type__Resolver__Declarations$
            
            export type Global__Type__Resolver__Implementation = <_TAnnotation>(
                $: _IUnresolved.Flat.Global__Type__Resolver__Implementation$<_TAnnotation>,
                $p: {
                    readonly 'all siblings': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                    readonly 'atom types': _IResolved.Flat.Atom__Types$
                    readonly 'imports': _IResolved.Flat.Imports$
                    readonly 'key': _IResolved.Flat.Atom$
                    readonly 'non cyclic siblings': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
                }
            ) => _IResolved.Flat.Global__Type__Resolver__Implementation$
            
            export type Global__Type__Definition = <_TAnnotation>(
                $: _IUnresolved.Flat.Global__Type__Definition$<_TAnnotation>,
                $p: {
                    readonly 'all siblings': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                    readonly 'atom types': _IResolved.Flat.Atom__Types$
                    readonly 'imports': _IResolved.Flat.Imports$
                    readonly 'key': _IResolved.Flat.Atom$
                    readonly 'non cyclic siblings': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
                }
            ) => _IResolved.Flat.Global__Type__Definition$
            
            export type Type__Selection__Tail = <_TAnnotation>(
                $: _IUnresolved.Flat.Type__Selection__Tail$<_TAnnotation>,
                $p: {
                    readonly 'context': _IResolved.Flat.Type$
                }
            ) => _IResolved.Flat.Type__Selection__Tail$
            
            export type Type__Selection = <_TAnnotation>(
                $: _IUnresolved.Flat.Type__Selection$<_TAnnotation>,
                $p: {
                    readonly 'imports': _IResolved.Flat.Imports$
                    readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
                }
            ) => _IResolved.Flat.Type__Selection$
            
            export type Dictionary__Selection = <_TAnnotation>(
                $: _IUnresolved.Flat.Dictionary__Selection$<_TAnnotation>,
                $p: {
                    readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                    readonly 'imports': _IResolved.Flat.Imports$
                    readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
                }
            ) => _IResolved.Flat.Dictionary__Selection$
            
            export type Type__Library = <_TAnnotation>(
                $: _IUnresolved.Flat.Type__Library$<_TAnnotation>,
                $p: {
                    readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>
                }
            ) => _IResolved.Flat.Type__Library$
            
            export type Merged__Type__Library = <_TAnnotation>(
                $: _IUnresolved.Flat.Merged__Type__Library$<_TAnnotation>,
            ) => _IResolved.Flat.Merged__Type__Library$
            
            export type Global__Type__Selection = <_TAnnotation>(
                $: _IUnresolved.Flat.Global__Type__Selection$<_TAnnotation>,
                $p: {
                    readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                    readonly 'imports': _IResolved.Flat.Imports$
                    readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
                }
            ) => _IResolved.Flat.Global__Type__Selection$
            
            export type Model = <_TAnnotation>(
                $: _IUnresolved.Flat.Model$<_TAnnotation>,
                $p: {
                    readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>
                }
            ) => _IResolved.Flat.Model$
            
            export type Project = <_TAnnotation>(
                $: _IUnresolved.Flat.Project$<_TAnnotation>,
            ) => _IResolved.Flat.Project$
            
            export type Merged__Project = <_TAnnotation>(
                $: _IUnresolved.Flat.Merged__Project$<_TAnnotation>,
            ) => _IResolved.Flat.Merged__Project$
            
            export type Root = <_TAnnotation>(
                $: _IUnresolved.Flat.Root$<_TAnnotation>,
            ) => _IResolved.Flat.Root$
            
            export type Variable = <_TAnnotation>(
                $: _IUnresolved.Flat.Variable$<_TAnnotation>,
            ) => _IResolved.Flat.Variable$
            
            export type Variables = <_TAnnotation>(
                $: _IUnresolved.Flat.Variables$<_TAnnotation>,
            ) => _IResolved.Flat.Variables$
            
            export type Value__Selection__Tail = <_TAnnotation>(
                $: _IUnresolved.Flat.Value__Selection__Tail$<_TAnnotation>,
            ) => _IResolved.Flat.Value__Selection__Tail$
            
            export type Any__Value__Selection = <_TAnnotation>(
                $: _IUnresolved.Flat.Any__Value__Selection$<_TAnnotation>,
            ) => _IResolved.Flat.Any__Value__Selection$
        }
        
        export type $ = {
            readonly 'Any Value Selection': resolvers.Any__Value__Selection
            readonly 'Atom': resolvers.Atom
            readonly 'Atom Types': resolvers.Atom__Types
            readonly 'Dictionary Selection': resolvers.Dictionary__Selection
            readonly 'Global Type Definition': resolvers.Global__Type__Definition
            readonly 'Global Type Resolver Declaration': resolvers.Global__Type__Resolver__Declaration
            readonly 'Global Type Resolver Declarations': resolvers.Global__Type__Resolver__Declarations
            readonly 'Global Type Resolver Implementation': resolvers.Global__Type__Resolver__Implementation
            readonly 'Global Type Selection': resolvers.Global__Type__Selection
            readonly 'Imports': resolvers.Imports
            readonly 'Merged Project': resolvers.Merged__Project
            readonly 'Merged Type Library': resolvers.Merged__Type__Library
            readonly 'Model': resolvers.Model
            readonly 'Parameters': resolvers.Parameters
            readonly 'Project': resolvers.Project
            readonly 'Property': resolvers.Property
            readonly 'PropertyResolver': resolvers.PropertyResolver
            readonly 'Root': resolvers.Root
            readonly 'Type': resolvers.Type
            readonly 'Type Library': resolvers.Type__Library
            readonly 'Type Selection': resolvers.Type__Selection
            readonly 'Type Selection Tail': resolvers.Type__Selection__Tail
            readonly 'TypeResolver': resolvers.TypeResolver
            readonly 'Value Selection Tail': resolvers.Value__Selection__Tail
            readonly 'Variable': resolvers.Variable
            readonly 'Variables': resolvers.Variables
        }
    }
    
    export namespace Serialize {
        
        import _IResolved = Resolved
        
        export namespace types {
            
            
            export type Atom__Types = (
                $: _IResolved.Flat.Atom__Types$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Atom = (
                $: _IResolved.Flat.Atom$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Property = (
                $: _IResolved.Flat.Property$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type PropertyResolver = (
                $: _IResolved.Flat.PropertyResolver$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Type = (
                $: _IResolved.Flat.Type$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type TypeResolver = (
                $: _IResolved.Flat.TypeResolver$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Imports = (
                $: _IResolved.Flat.Imports$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Parameters = (
                $: _IResolved.Flat.Parameters$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Global__Type__Resolver__Declaration = (
                $: _IResolved.Flat.Global__Type__Resolver__Declaration$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Global__Type__Resolver__Declarations = (
                $: _IResolved.Flat.Global__Type__Resolver__Declarations$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Variable = (
                $: _IResolved.Flat.Variable$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Variables = (
                $: _IResolved.Flat.Variables$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Global__Type__Resolver__Implementation = (
                $: _IResolved.Flat.Global__Type__Resolver__Implementation$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Global__Type__Definition = (
                $: _IResolved.Flat.Global__Type__Definition$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Type__Selection__Tail = (
                $: _IResolved.Flat.Type__Selection__Tail$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Type__Selection = (
                $: _IResolved.Flat.Type__Selection$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Dictionary__Selection = (
                $: _IResolved.Flat.Dictionary__Selection$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Type__Library = (
                $: _IResolved.Flat.Type__Library$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Merged__Type__Library = (
                $: _IResolved.Flat.Merged__Type__Library$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Global__Type__Selection = (
                $: _IResolved.Flat.Global__Type__Selection$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Model = (
                $: _IResolved.Flat.Model$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Project = (
                $: _IResolved.Flat.Project$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Merged__Project = (
                $: _IResolved.Flat.Merged__Project$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Root = (
                $: _IResolved.Flat.Root$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Value__Selection__Tail = (
                $: _IResolved.Flat.Value__Selection__Tail$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
            
            export type Any__Value__Selection = (
                $: _IResolved.Flat.Any__Value__Selection$,
                $p: {
                    readonly 'out': boolean
                }
            ) => void
        }
        
        export type $ = {
            readonly 'Any Value Selection': types.Any__Value__Selection
            readonly 'Atom': types.Atom
            readonly 'Atom Types': types.Atom__Types
            readonly 'Dictionary Selection': types.Dictionary__Selection
            readonly 'Global Type Definition': types.Global__Type__Definition
            readonly 'Global Type Resolver Declaration': types.Global__Type__Resolver__Declaration
            readonly 'Global Type Resolver Declarations': types.Global__Type__Resolver__Declarations
            readonly 'Global Type Resolver Implementation': types.Global__Type__Resolver__Implementation
            readonly 'Global Type Selection': types.Global__Type__Selection
            readonly 'Imports': types.Imports
            readonly 'Merged Project': types.Merged__Project
            readonly 'Merged Type Library': types.Merged__Type__Library
            readonly 'Model': types.Model
            readonly 'Parameters': types.Parameters
            readonly 'Project': types.Project
            readonly 'Property': types.Property
            readonly 'PropertyResolver': types.PropertyResolver
            readonly 'Root': types.Root
            readonly 'Type': types.Type
            readonly 'Type Library': types.Type__Library
            readonly 'Type Selection': types.Type__Selection
            readonly 'Type Selection Tail': types.Type__Selection__Tail
            readonly 'TypeResolver': types.TypeResolver
            readonly 'Value Selection Tail': types.Value__Selection__Tail
            readonly 'Variable': types.Variable
            readonly 'Variables': types.Variables
        }
    }
}

export type $ = {
    readonly 'pareto lang data': {
        readonly 'createResolveContext': (
            $: null,
        ) => pareto__lang__data.Resolve.$
        readonly 'createSerializeContext': (
            $: null,
        ) => pareto__lang__data.Serialize.$
    }
}