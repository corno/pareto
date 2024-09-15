import * as _pt from 'pareto-core-types';
export declare namespace pareto__lang__data {
    namespace Unresolved {
        namespace Flat {
            type Atom__Types$D$<_TAnnotation> = null;
            type Atom__Types$<_TAnnotation> = _pt.Dictionary<Atom__Types$D$<_TAnnotation>>;
            type Atom$type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Atom$<_TAnnotation> = {
                readonly 'type': Atom$type$<_TAnnotation>;
            };
            type Type$type$array$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$type$array$<_TAnnotation> = {
                readonly 'type': Type$type$array$type$<_TAnnotation>;
            };
            type Type$type$atom$atom$<_TAnnotation> = Atom$<_TAnnotation>;
            type Type$type$atom$<_TAnnotation> = {
                readonly 'atom': Type$type$atom$atom$<_TAnnotation>;
            };
            type Type$type$component$type$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>;
            type Type$type$component$arguments$D$<_TAnnotation> = null;
            type Type$type$component$arguments$<_TAnnotation> = _pt.Dictionary<Type$type$component$arguments$D$<_TAnnotation>>;
            type Type$type$component$<_TAnnotation> = {
                readonly 'arguments': Type$type$component$arguments$<_TAnnotation>;
                readonly 'type': Type$type$component$type$<_TAnnotation>;
            };
            type Type$type$constraint$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Type$type$cyclic__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>;
            type Type$type$cyclic__reference$sibling$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>;
            type Type$type$cyclic__reference$<_TAnnotation> = {
                readonly 'atom': Type$type$cyclic__reference$atom$<_TAnnotation>;
                readonly 'sibling': Type$type$cyclic__reference$sibling$<_TAnnotation>;
            };
            type Type$type$dictionary$key$<_TAnnotation> = Atom$<_TAnnotation>;
            type Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>;
            type Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation> = null;
            type Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation> = null;
            type Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation> = ['no', Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>] | ['yes', Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>];
            type Type$type$dictionary$constraints$D$dictionary$<_TAnnotation> = {
                readonly 'dense': Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>;
                readonly 'dictionary': Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>;
            };
            type Type$type$dictionary$constraints$D$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>;
            type Type$type$dictionary$constraints$D$<_TAnnotation> = ['dictionary', Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>] | ['lookup', Type$type$dictionary$constraints$D$lookup$<_TAnnotation>];
            type Type$type$dictionary$constraints$<_TAnnotation> = _pt.Dictionary<Type$type$dictionary$constraints$D$<_TAnnotation>>;
            type Type$type$dictionary$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$type$dictionary$<_TAnnotation> = {
                readonly 'constraints': Type$type$dictionary$constraints$<_TAnnotation>;
                readonly 'key': Type$type$dictionary$key$<_TAnnotation>;
                readonly 'type': Type$type$dictionary$type$<_TAnnotation>;
            };
            type Type$type$group$properties$D$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$type$group$properties$D$<_TAnnotation> = {
                readonly 'type': Type$type$group$properties$D$type$<_TAnnotation>;
            };
            type Type$type$group$properties$<_TAnnotation> = _pt.Dictionary<Type$type$group$properties$D$<_TAnnotation>>;
            type Type$type$group$<_TAnnotation> = {
                readonly 'properties': Type$type$group$properties$<_TAnnotation>;
            };
            type Type$type$nothing$<_TAnnotation> = null;
            type Type$type$optional$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$type$optional$<_TAnnotation> = {
                readonly 'type': Type$type$optional$type$<_TAnnotation>;
            };
            type Type$type$resolved__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>;
            type Type$type$resolved__reference$value$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>;
            type Type$type$resolved__reference$value$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>;
            type Type$type$resolved__reference$value$<_TAnnotation> = ['dictionary', Type$type$resolved__reference$value$dictionary$<_TAnnotation>] | ['lookup', Type$type$resolved__reference$value$lookup$<_TAnnotation>];
            type Type$type$resolved__reference$<_TAnnotation> = {
                readonly 'atom': Type$type$resolved__reference$atom$<_TAnnotation>;
                readonly 'value': Type$type$resolved__reference$value$<_TAnnotation>;
            };
            type Type$type$state__group$states$D$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$type$state__group$states$D$<_TAnnotation> = {
                readonly 'type': Type$type$state__group$states$D$type$<_TAnnotation>;
            };
            type Type$type$state__group$states$<_TAnnotation> = _pt.Dictionary<Type$type$state__group$states$D$<_TAnnotation>>;
            type Type$type$state__group$<_TAnnotation> = {
                readonly 'states': Type$type$state__group$states$<_TAnnotation>;
            };
            type Type$type$<_TAnnotation> = ['array', Type$type$array$<_TAnnotation>] | ['atom', Type$type$atom$<_TAnnotation>] | ['component', Type$type$component$<_TAnnotation>] | ['constraint', Type$type$constraint$<_TAnnotation>] | ['cyclic reference', Type$type$cyclic__reference$<_TAnnotation>] | ['dictionary', Type$type$dictionary$<_TAnnotation>] | ['group', Type$type$group$<_TAnnotation>] | ['nothing', Type$type$nothing$<_TAnnotation>] | ['optional', Type$type$optional$<_TAnnotation>] | ['resolved reference', Type$type$resolved__reference$<_TAnnotation>] | ['state group', Type$type$state__group$<_TAnnotation>];
            type Type$<_TAnnotation> = {
                readonly 'type': Type$type$<_TAnnotation>;
            };
            type Imports$D$library$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Imports$D$<_TAnnotation> = {
                readonly 'library': Imports$D$library$<_TAnnotation>;
            };
            type Imports$<_TAnnotation> = _pt.Dictionary<Imports$D$<_TAnnotation>>;
            type Global__Type__Declaration$parameters$D$type$resolved__value$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Declaration$parameters$D$type$sibling__lookup$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Declaration$parameters$D$type$<_TAnnotation> = ['cyclic sibling lookup', Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$<_TAnnotation>] | ['resolved value', Global__Type__Declaration$parameters$D$type$resolved__value$<_TAnnotation>] | ['sibling lookup', Global__Type__Declaration$parameters$D$type$sibling__lookup$<_TAnnotation>];
            type Global__Type__Declaration$parameters$D$optional$O$<_TAnnotation> = null;
            type Global__Type__Declaration$parameters$D$optional$<_TAnnotation> = _pt.OptionalValue<Global__Type__Declaration$parameters$D$optional$O$<_TAnnotation>>;
            type Global__Type__Declaration$parameters$D$<_TAnnotation> = {
                readonly 'optional': Global__Type__Declaration$parameters$D$optional$<_TAnnotation>;
                readonly 'type': Global__Type__Declaration$parameters$D$type$<_TAnnotation>;
            };
            type Global__Type__Declaration$parameters$<_TAnnotation> = _pt.Dictionary<Global__Type__Declaration$parameters$D$<_TAnnotation>>;
            type Global__Type__Declaration$result$O$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Declaration$result$<_TAnnotation> = _pt.OptionalValue<Global__Type__Declaration$result$O$<_TAnnotation>>;
            type Global__Type__Declaration$<_TAnnotation> = {
                readonly 'parameters': Global__Type__Declaration$parameters$<_TAnnotation>;
                readonly 'result': Global__Type__Declaration$result$<_TAnnotation>;
            };
            type Global__Type__Declarations$D$<_TAnnotation> = Global__Type__Declaration$<_TAnnotation>;
            type Global__Type__Declarations$<_TAnnotation> = _pt.Dictionary<Global__Type__Declarations$D$<_TAnnotation>>;
            type Global__Type__Definition$declaration$<_TAnnotation> = _TAnnotation;
            type Global__Type__Definition$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Global__Type__Definition$<_TAnnotation> = {
                readonly 'declaration': Global__Type__Definition$declaration$<_TAnnotation>;
                readonly 'type': Global__Type__Definition$type$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation> = _TAnnotation;
            type Type__Selection__Tail$step__type$dictionary$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>;
            type Type__Selection__Tail$step__type$dictionary$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$dictionary$tail$O$<_TAnnotation>>;
            type Type__Selection__Tail$step__type$dictionary$<_TAnnotation> = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>;
                readonly 'tail': Type__Selection__Tail$step__type$dictionary$tail$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$optional$optional$<_TAnnotation> = _TAnnotation;
            type Type__Selection__Tail$step__type$optional$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>;
            type Type__Selection__Tail$step__type$optional$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$optional$tail$O$<_TAnnotation>>;
            type Type__Selection__Tail$step__type$optional$<_TAnnotation> = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>;
                readonly 'tail': Type__Selection__Tail$step__type$optional$tail$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$array$array$<_TAnnotation> = _TAnnotation;
            type Type__Selection__Tail$step__type$array$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>;
            type Type__Selection__Tail$step__type$array$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$array$tail$O$<_TAnnotation>>;
            type Type__Selection__Tail$step__type$array$<_TAnnotation> = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$<_TAnnotation>;
                readonly 'tail': Type__Selection__Tail$step__type$array$tail$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$group$group$<_TAnnotation> = _TAnnotation;
            type Type__Selection__Tail$step__type$group$property$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection__Tail$step__type$group$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>;
            type Type__Selection__Tail$step__type$group$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$group$tail$O$<_TAnnotation>>;
            type Type__Selection__Tail$step__type$group$<_TAnnotation> = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$<_TAnnotation>;
                readonly 'property': Type__Selection__Tail$step__type$group$property$<_TAnnotation>;
                readonly 'tail': Type__Selection__Tail$step__type$group$tail$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation> = _TAnnotation;
            type Type__Selection__Tail$step__type$state__group$state$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection__Tail$step__type$state__group$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>;
            type Type__Selection__Tail$step__type$state__group$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$state__group$tail$O$<_TAnnotation>>;
            type Type__Selection__Tail$step__type$state__group$<_TAnnotation> = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>;
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>;
                readonly 'tail': Type__Selection__Tail$step__type$state__group$tail$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$<_TAnnotation> = ['array', Type__Selection__Tail$step__type$array$<_TAnnotation>] | ['dictionary', Type__Selection__Tail$step__type$dictionary$<_TAnnotation>] | ['group', Type__Selection__Tail$step__type$group$<_TAnnotation>] | ['optional', Type__Selection__Tail$step__type$optional$<_TAnnotation>] | ['state group', Type__Selection__Tail$step__type$state__group$<_TAnnotation>];
            type Type__Selection__Tail$<_TAnnotation> = {
                readonly 'step type': Type__Selection__Tail$step__type$<_TAnnotation>;
            };
            type Type__Selection$import$O$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection$import$<_TAnnotation> = _pt.OptionalValue<Type__Selection$import$O$<_TAnnotation>>;
            type Type__Selection$global__type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>;
            type Type__Selection$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection$tail$O$<_TAnnotation>>;
            type Type__Selection$<_TAnnotation> = {
                readonly 'global type': Type__Selection$global__type$<_TAnnotation>;
                readonly 'import': Type__Selection$import$<_TAnnotation>;
                readonly 'tail': Type__Selection$tail$<_TAnnotation>;
            };
            type Dictionary__Selection$type$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Dictionary__Selection$dictionary$<_TAnnotation> = _TAnnotation;
            type Dictionary__Selection$<_TAnnotation> = {
                readonly 'dictionary': Dictionary__Selection$dictionary$<_TAnnotation>;
                readonly 'type': Dictionary__Selection$type$<_TAnnotation>;
            };
            type Type__Library$imports$<_TAnnotation> = Imports$<_TAnnotation>;
            type Type__Library$atom__types$<_TAnnotation> = Atom__Types$<_TAnnotation>;
            type Type__Library$global__types$declarations$<_TAnnotation> = Global__Type__Declarations$<_TAnnotation>;
            type Type__Library$global__types$definitions$D$<_TAnnotation> = Global__Type__Definition$<_TAnnotation>;
            type Type__Library$global__types$definitions$<_TAnnotation> = _pt.Dictionary<Type__Library$global__types$definitions$D$<_TAnnotation>>;
            type Type__Library$global__types$<_TAnnotation> = {
                readonly 'declarations': Type__Library$global__types$declarations$<_TAnnotation>;
                readonly 'definitions': Type__Library$global__types$definitions$<_TAnnotation>;
            };
            type Type__Library$<_TAnnotation> = {
                readonly 'atom types': Type__Library$atom__types$<_TAnnotation>;
                readonly 'global types': Type__Library$global__types$<_TAnnotation>;
                readonly 'imports': Type__Library$imports$<_TAnnotation>;
            };
            type Global__Type__Selection$resolved__sibling$type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Selection$resolved__sibling$<_TAnnotation> = {
                readonly 'type': Global__Type__Selection$resolved__sibling$type$<_TAnnotation>;
            };
            type Global__Type__Selection$import$library$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Selection$import$type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Selection$import$<_TAnnotation> = {
                readonly 'library': Global__Type__Selection$import$library$<_TAnnotation>;
                readonly 'type': Global__Type__Selection$import$type$<_TAnnotation>;
            };
            type Global__Type__Selection$cyclic__sibling$type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Selection$cyclic__sibling$<_TAnnotation> = {
                readonly 'type': Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>;
            };
            type Global__Type__Selection$<_TAnnotation> = ['cyclic sibling', Global__Type__Selection$cyclic__sibling$<_TAnnotation>] | ['import', Global__Type__Selection$import$<_TAnnotation>] | ['resolved sibling', Global__Type__Selection$resolved__sibling$<_TAnnotation>];
            type Model$type__library$<_TAnnotation> = Type__Library$<_TAnnotation>;
            type Model$root$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Model$<_TAnnotation> = {
                readonly 'root': Model$root$<_TAnnotation>;
                readonly 'type library': Model$type__library$<_TAnnotation>;
            };
            type Project$type__libraries$D$<_TAnnotation> = Type__Library$<_TAnnotation>;
            type Project$type__libraries$<_TAnnotation> = _pt.Dictionary<Project$type__libraries$D$<_TAnnotation>>;
            type Project$<_TAnnotation> = {
                readonly 'type libraries': Project$type__libraries$<_TAnnotation>;
            };
            type Root$<_TAnnotation> = Project$<_TAnnotation>;
            type Variable$parent__variable$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Variable$<_TAnnotation> = ['parent variable', Variable$parent__variable$<_TAnnotation>];
            type Variables$D$<_TAnnotation> = Variable$<_TAnnotation>;
            type Variables$<_TAnnotation> = _pt.Dictionary<Variables$D$<_TAnnotation>>;
            type Value__Selection__Tail$reference$reference$<_TAnnotation> = _TAnnotation;
            type Value__Selection__Tail$reference$tail$O$<_TAnnotation> = Value__Selection__Tail$<_TAnnotation>;
            type Value__Selection__Tail$reference$tail$<_TAnnotation> = _pt.OptionalValue<Value__Selection__Tail$reference$tail$O$<_TAnnotation>>;
            type Value__Selection__Tail$reference$<_TAnnotation> = {
                readonly 'reference': Value__Selection__Tail$reference$reference$<_TAnnotation>;
                readonly 'tail': Value__Selection__Tail$reference$tail$<_TAnnotation>;
            };
            type Value__Selection__Tail$component$component$<_TAnnotation> = _TAnnotation;
            type Value__Selection__Tail$component$tail$O$<_TAnnotation> = Value__Selection__Tail$<_TAnnotation>;
            type Value__Selection__Tail$component$tail$<_TAnnotation> = _pt.OptionalValue<Value__Selection__Tail$component$tail$O$<_TAnnotation>>;
            type Value__Selection__Tail$component$<_TAnnotation> = {
                readonly 'component': Value__Selection__Tail$component$component$<_TAnnotation>;
                readonly 'tail': Value__Selection__Tail$component$tail$<_TAnnotation>;
            };
            type Value__Selection__Tail$state__group$state__group$<_TAnnotation> = _TAnnotation;
            type Value__Selection__Tail$state__group$result__type$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>;
            type Value__Selection__Tail$state__group$states$D$<_TAnnotation> = Any__Value__Selection$<_TAnnotation>;
            type Value__Selection__Tail$state__group$states$<_TAnnotation> = _pt.Dictionary<Value__Selection__Tail$state__group$states$D$<_TAnnotation>>;
            type Value__Selection__Tail$state__group$<_TAnnotation> = {
                readonly 'result type': Value__Selection__Tail$state__group$result__type$<_TAnnotation>;
                readonly 'state group': Value__Selection__Tail$state__group$state__group$<_TAnnotation>;
                readonly 'states': Value__Selection__Tail$state__group$states$<_TAnnotation>;
            };
            type Value__Selection__Tail$group$group$<_TAnnotation> = _TAnnotation;
            type Value__Selection__Tail$group$property$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Value__Selection__Tail$group$tail$O$<_TAnnotation> = Value__Selection__Tail$<_TAnnotation>;
            type Value__Selection__Tail$group$tail$<_TAnnotation> = _pt.OptionalValue<Value__Selection__Tail$group$tail$O$<_TAnnotation>>;
            type Value__Selection__Tail$group$<_TAnnotation> = {
                readonly 'group': Value__Selection__Tail$group$group$<_TAnnotation>;
                readonly 'property': Value__Selection__Tail$group$property$<_TAnnotation>;
                readonly 'tail': Value__Selection__Tail$group$tail$<_TAnnotation>;
            };
            type Value__Selection__Tail$<_TAnnotation> = ['component', Value__Selection__Tail$component$<_TAnnotation>] | ['group', Value__Selection__Tail$group$<_TAnnotation>] | ['reference', Value__Selection__Tail$reference$<_TAnnotation>] | ['state group', Value__Selection__Tail$state__group$<_TAnnotation>];
            type No__Context__Value__Selection$start$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type No__Context__Value__Selection$tail$O$<_TAnnotation> = Value__Selection__Tail$<_TAnnotation>;
            type No__Context__Value__Selection$tail$<_TAnnotation> = _pt.OptionalValue<No__Context__Value__Selection$tail$O$<_TAnnotation>>;
            type No__Context__Value__Selection$<_TAnnotation> = {
                readonly 'start': No__Context__Value__Selection$start$<_TAnnotation>;
                readonly 'tail': No__Context__Value__Selection$tail$<_TAnnotation>;
            };
            type Any__Value__Selection$start$O$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Any__Value__Selection$start$<_TAnnotation> = _pt.OptionalValue<Any__Value__Selection$start$O$<_TAnnotation>>;
            type Any__Value__Selection$tail$O$<_TAnnotation> = Value__Selection__Tail$<_TAnnotation>;
            type Any__Value__Selection$tail$<_TAnnotation> = _pt.OptionalValue<Any__Value__Selection$tail$O$<_TAnnotation>>;
            type Any__Value__Selection$<_TAnnotation> = {
                readonly 'start': Any__Value__Selection$start$<_TAnnotation>;
                readonly 'tail': Any__Value__Selection$tail$<_TAnnotation>;
            };
        }
        namespace T {
            import _IFlat = Flat;
            namespace Atom__Types {
                namespace D {
                    type $<_TAnnotation> = _IFlat.Atom__Types$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Atom__Types$<_TAnnotation>;
            }
            namespace Atom {
                namespace _ltype {
                    type $<_TAnnotation> = _IFlat.Atom$type$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Atom$<_TAnnotation>;
            }
            namespace TType {
                namespace _ltype {
                    namespace array {
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$type$array$type$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$array$<_TAnnotation>;
                    }
                    namespace atom {
                        namespace atom {
                            type $<_TAnnotation> = _IFlat.Type$type$atom$atom$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$atom$<_TAnnotation>;
                    }
                    namespace component {
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$type$component$type$<_TAnnotation>;
                        }
                        namespace _larguments {
                            namespace D {
                                type $<_TAnnotation> = _IFlat.Type$type$component$arguments$D$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$type$component$arguments$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$component$<_TAnnotation>;
                    }
                    namespace constraint {
                        type $<_TAnnotation> = _IFlat.Type$type$constraint$<_TAnnotation>;
                    }
                    namespace cyclic__reference {
                        namespace atom {
                            type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$atom$<_TAnnotation>;
                        }
                        namespace sibling {
                            type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$sibling$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$<_TAnnotation>;
                    }
                    namespace dictionary {
                        namespace key {
                            type $<_TAnnotation> = _IFlat.Type$type$dictionary$key$<_TAnnotation>;
                        }
                        namespace constraints {
                            namespace D {
                                namespace dictionary {
                                    namespace dictionary {
                                        type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>;
                                    }
                                    namespace dense {
                                        namespace no {
                                            type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>;
                                        }
                                        namespace yes {
                                            type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>;
                                        }
                                        type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>;
                                    }
                                    type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>;
                                }
                                namespace lookup {
                                    type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$lookup$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$<_TAnnotation>;
                        }
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$type$dictionary$type$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$dictionary$<_TAnnotation>;
                    }
                    namespace group {
                        namespace properties {
                            namespace D {
                                namespace _ltype {
                                    type $<_TAnnotation> = _IFlat.Type$type$group$properties$D$type$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Type$type$group$properties$D$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$type$group$properties$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$group$<_TAnnotation>;
                    }
                    namespace nothing {
                        type $<_TAnnotation> = _IFlat.Type$type$nothing$<_TAnnotation>;
                    }
                    namespace optional {
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$type$optional$type$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$optional$<_TAnnotation>;
                    }
                    namespace resolved__reference {
                        namespace atom {
                            type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$atom$<_TAnnotation>;
                        }
                        namespace value {
                            namespace dictionary {
                                type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$dictionary$<_TAnnotation>;
                            }
                            namespace lookup {
                                type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$lookup$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$<_TAnnotation>;
                    }
                    namespace state__group {
                        namespace states {
                            namespace D {
                                namespace _ltype {
                                    type $<_TAnnotation> = _IFlat.Type$type$state__group$states$D$type$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Type$type$state__group$states$D$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$type$state__group$states$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$state__group$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$type$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type$<_TAnnotation>;
            }
            namespace Imports {
                namespace D {
                    namespace library {
                        type $<_TAnnotation> = _IFlat.Imports$D$library$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Imports$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Imports$<_TAnnotation>;
            }
            namespace Global__Type__Declaration {
                namespace parameters {
                    namespace D {
                        namespace _ltype {
                            namespace resolved__value {
                                type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$type$resolved__value$<_TAnnotation>;
                            }
                            namespace sibling__lookup {
                                type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$type$sibling__lookup$<_TAnnotation>;
                            }
                            namespace cyclic__sibling__lookup {
                                type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$type$<_TAnnotation>;
                        }
                        namespace optional {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$optional$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$optional$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$<_TAnnotation>;
                }
                namespace result {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.Global__Type__Declaration$result$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Global__Type__Declaration$result$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Global__Type__Declaration$<_TAnnotation>;
            }
            namespace Global__Type__Declarations {
                namespace D {
                    type $<_TAnnotation> = _IFlat.Global__Type__Declarations$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Global__Type__Declarations$<_TAnnotation>;
            }
            namespace Global__Type__Definition {
                namespace declaration {
                    type $<_TAnnotation> = _IFlat.Global__Type__Definition$declaration$<_TAnnotation>;
                }
                namespace _ltype {
                    type $<_TAnnotation> = _IFlat.Global__Type__Definition$type$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Global__Type__Definition$<_TAnnotation>;
            }
            namespace TType__Selection__Tail {
                namespace step__type {
                    namespace dictionary {
                        namespace dictionary {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>;
                        }
                        namespace tail {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$<_TAnnotation>;
                    }
                    namespace optional {
                        namespace optional {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>;
                        }
                        namespace tail {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$tail$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$tail$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$<_TAnnotation>;
                    }
                    namespace array {
                        namespace array {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$array$<_TAnnotation>;
                        }
                        namespace tail {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$tail$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$tail$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$<_TAnnotation>;
                    }
                    namespace group {
                        namespace group {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$group$<_TAnnotation>;
                        }
                        namespace property {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$property$<_TAnnotation>;
                        }
                        namespace tail {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$tail$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$tail$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$<_TAnnotation>;
                    }
                    namespace state__group {
                        namespace state__group {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>;
                        }
                        namespace state {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>;
                        }
                        namespace tail {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$tail$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$tail$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Selection__Tail$<_TAnnotation>;
            }
            namespace TType__Selection {
                namespace _limport {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.Type__Selection$import$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Selection$import$<_TAnnotation>;
                }
                namespace global__type {
                    type $<_TAnnotation> = _IFlat.Type__Selection$global__type$<_TAnnotation>;
                }
                namespace tail {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.Type__Selection$tail$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Selection$tail$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Selection$<_TAnnotation>;
            }
            namespace Dictionary__Selection {
                namespace _ltype {
                    type $<_TAnnotation> = _IFlat.Dictionary__Selection$type$<_TAnnotation>;
                }
                namespace dictionary {
                    type $<_TAnnotation> = _IFlat.Dictionary__Selection$dictionary$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Dictionary__Selection$<_TAnnotation>;
            }
            namespace TType__Library {
                namespace imports {
                    type $<_TAnnotation> = _IFlat.Type__Library$imports$<_TAnnotation>;
                }
                namespace atom__types {
                    type $<_TAnnotation> = _IFlat.Type__Library$atom__types$<_TAnnotation>;
                }
                namespace global__types {
                    namespace declarations {
                        type $<_TAnnotation> = _IFlat.Type__Library$global__types$declarations$<_TAnnotation>;
                    }
                    namespace definitions {
                        namespace D {
                            type $<_TAnnotation> = _IFlat.Type__Library$global__types$definitions$D$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Library$global__types$definitions$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Library$global__types$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Library$<_TAnnotation>;
            }
            namespace Global__Type__Selection {
                namespace resolved__sibling {
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Global__Type__Selection$resolved__sibling$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Global__Type__Selection$resolved__sibling$<_TAnnotation>;
                }
                namespace _limport {
                    namespace library {
                        type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$library$<_TAnnotation>;
                    }
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$<_TAnnotation>;
                }
                namespace cyclic__sibling {
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Global__Type__Selection$cyclic__sibling$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Global__Type__Selection$<_TAnnotation>;
            }
            namespace Model {
                namespace type__library {
                    type $<_TAnnotation> = _IFlat.Model$type__library$<_TAnnotation>;
                }
                namespace root {
                    type $<_TAnnotation> = _IFlat.Model$root$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Model$<_TAnnotation>;
            }
            namespace Project {
                namespace type__libraries {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Project$type__libraries$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Project$type__libraries$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Project$<_TAnnotation>;
            }
            namespace Root {
                type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>;
            }
            namespace Variable {
                namespace parent__variable {
                    type $<_TAnnotation> = _IFlat.Variable$parent__variable$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Variable$<_TAnnotation>;
            }
            namespace Variables {
                namespace D {
                    type $<_TAnnotation> = _IFlat.Variables$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Variables$<_TAnnotation>;
            }
            namespace Value__Selection__Tail {
                namespace reference {
                    namespace reference {
                        type $<_TAnnotation> = _IFlat.Value__Selection__Tail$reference$reference$<_TAnnotation>;
                    }
                    namespace tail {
                        namespace O {
                            type $<_TAnnotation> = _IFlat.Value__Selection__Tail$reference$tail$O$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Value__Selection__Tail$reference$tail$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Value__Selection__Tail$reference$<_TAnnotation>;
                }
                namespace component {
                    namespace component {
                        type $<_TAnnotation> = _IFlat.Value__Selection__Tail$component$component$<_TAnnotation>;
                    }
                    namespace tail {
                        namespace O {
                            type $<_TAnnotation> = _IFlat.Value__Selection__Tail$component$tail$O$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Value__Selection__Tail$component$tail$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Value__Selection__Tail$component$<_TAnnotation>;
                }
                namespace state__group {
                    namespace state__group {
                        type $<_TAnnotation> = _IFlat.Value__Selection__Tail$state__group$state__group$<_TAnnotation>;
                    }
                    namespace result__type {
                        type $<_TAnnotation> = _IFlat.Value__Selection__Tail$state__group$result__type$<_TAnnotation>;
                    }
                    namespace states {
                        namespace D {
                            type $<_TAnnotation> = _IFlat.Value__Selection__Tail$state__group$states$D$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Value__Selection__Tail$state__group$states$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Value__Selection__Tail$state__group$<_TAnnotation>;
                }
                namespace group {
                    namespace group {
                        type $<_TAnnotation> = _IFlat.Value__Selection__Tail$group$group$<_TAnnotation>;
                    }
                    namespace property {
                        type $<_TAnnotation> = _IFlat.Value__Selection__Tail$group$property$<_TAnnotation>;
                    }
                    namespace tail {
                        namespace O {
                            type $<_TAnnotation> = _IFlat.Value__Selection__Tail$group$tail$O$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Value__Selection__Tail$group$tail$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Value__Selection__Tail$group$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Value__Selection__Tail$<_TAnnotation>;
            }
            namespace No__Context__Value__Selection {
                namespace start {
                    type $<_TAnnotation> = _IFlat.No__Context__Value__Selection$start$<_TAnnotation>;
                }
                namespace tail {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.No__Context__Value__Selection$tail$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.No__Context__Value__Selection$tail$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.No__Context__Value__Selection$<_TAnnotation>;
            }
            namespace Any__Value__Selection {
                namespace start {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.Any__Value__Selection$start$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Any__Value__Selection$start$<_TAnnotation>;
                }
                namespace tail {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.Any__Value__Selection$tail$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Any__Value__Selection$tail$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Any__Value__Selection$<_TAnnotation>;
            }
        }
    }
    namespace Resolved {
        namespace Flat {
            type Atom__Types$D$ = null;
            type Atom__Types$ = _pt.Dictionary<Atom__Types$D$>;
            type Atom$type$ = {
                readonly 'key': string;
                readonly 'referent': Atom__Types$D$;
            };
            type Atom$ = {
                readonly 'type': Atom$type$;
            };
            type Type$type$array$type$ = Type$;
            type Type$type$array$ = {
                readonly 'type': Type$type$array$type$;
            };
            type Type$type$atom$atom$ = Atom$;
            type Type$type$atom$ = {
                readonly 'atom': Type$type$atom$atom$;
            };
            type Type$type$component$type$ = Global__Type__Selection$;
            type Type$type$component$arguments$D$ = null;
            type Type$type$component$arguments$ = _pt.Dictionary<Type$type$component$arguments$D$>;
            type Type$type$component$ = {
                readonly 'arguments': Type$type$component$arguments$;
                readonly 'type': Type$type$component$type$;
            };
            type Type$type$constraint$ = Type__Selection$;
            type Type$type$cyclic__reference$atom$ = Atom$;
            type Type$type$cyclic__reference$sibling$ = Global__Type__Selection$;
            type Type$type$cyclic__reference$ = {
                readonly 'atom': Type$type$cyclic__reference$atom$;
                readonly 'sibling': Type$type$cyclic__reference$sibling$;
            };
            type Type$type$dictionary$key$ = Atom$;
            type Type$type$dictionary$constraints$D$dictionary$dictionary$ = Dictionary__Selection$;
            type Type$type$dictionary$constraints$D$dictionary$dense$no$ = null;
            type Type$type$dictionary$constraints$D$dictionary$dense$yes$ = null;
            type Type$type$dictionary$constraints$D$dictionary$dense$ = ['no', Type$type$dictionary$constraints$D$dictionary$dense$no$] | ['yes', Type$type$dictionary$constraints$D$dictionary$dense$yes$];
            type Type$type$dictionary$constraints$D$dictionary$ = {
                readonly 'dense': Type$type$dictionary$constraints$D$dictionary$dense$;
                readonly 'dictionary': Type$type$dictionary$constraints$D$dictionary$dictionary$;
            };
            type Type$type$dictionary$constraints$D$lookup$ = Global__Type__Selection$;
            type Type$type$dictionary$constraints$D$ = ['dictionary', Type$type$dictionary$constraints$D$dictionary$] | ['lookup', Type$type$dictionary$constraints$D$lookup$];
            type Type$type$dictionary$constraints$ = _pt.Dictionary<Type$type$dictionary$constraints$D$>;
            type Type$type$dictionary$type$ = Type$;
            type Type$type$dictionary$ = {
                readonly 'constraints': Type$type$dictionary$constraints$;
                readonly 'key': Type$type$dictionary$key$;
                readonly 'type': Type$type$dictionary$type$;
            };
            type Type$type$group$properties$D$type$ = Type$;
            type Type$type$group$properties$D$ = {
                readonly 'type': Type$type$group$properties$D$type$;
            };
            type Type$type$group$properties$ = _pt.Dictionary<Type$type$group$properties$D$>;
            type Type$type$group$ = {
                readonly 'properties': Type$type$group$properties$;
            };
            type Type$type$nothing$ = null;
            type Type$type$optional$type$ = Type$;
            type Type$type$optional$ = {
                readonly 'type': Type$type$optional$type$;
            };
            type Type$type$resolved__reference$atom$ = Atom$;
            type Type$type$resolved__reference$value$dictionary$ = Dictionary__Selection$;
            type Type$type$resolved__reference$value$lookup$ = Global__Type__Selection$;
            type Type$type$resolved__reference$value$ = ['dictionary', Type$type$resolved__reference$value$dictionary$] | ['lookup', Type$type$resolved__reference$value$lookup$];
            type Type$type$resolved__reference$ = {
                readonly 'atom': Type$type$resolved__reference$atom$;
                readonly 'value': Type$type$resolved__reference$value$;
            };
            type Type$type$state__group$states$D$type$ = Type$;
            type Type$type$state__group$states$D$ = {
                readonly 'type': Type$type$state__group$states$D$type$;
            };
            type Type$type$state__group$states$ = _pt.Dictionary<Type$type$state__group$states$D$>;
            type Type$type$state__group$ = {
                readonly 'states': Type$type$state__group$states$;
            };
            type Type$type$ = ['array', Type$type$array$] | ['atom', Type$type$atom$] | ['component', Type$type$component$] | ['constraint', Type$type$constraint$] | ['cyclic reference', Type$type$cyclic__reference$] | ['dictionary', Type$type$dictionary$] | ['group', Type$type$group$] | ['nothing', Type$type$nothing$] | ['optional', Type$type$optional$] | ['resolved reference', Type$type$resolved__reference$] | ['state group', Type$type$state__group$];
            type Type$ = {
                readonly 'type': Type$type$;
            };
            type Imports$D$library$ = {
                readonly 'key': string;
                readonly 'referent': Type__Library$;
            };
            type Imports$D$ = {
                readonly 'library': Imports$D$library$;
            };
            type Imports$ = _pt.Dictionary<Imports$D$>;
            type Global__Type__Declaration$parameters$D$type$resolved__value$ = {
                readonly 'key': string;
                readonly 'referent': _pt.ComputedValue<Global__Type__Declaration$>;
            };
            type Global__Type__Declaration$parameters$D$type$sibling__lookup$ = {
                readonly 'key': string;
                readonly 'referent': _pt.ComputedValue<Global__Type__Declaration$>;
            };
            type Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$ = {
                readonly 'key': string;
                readonly 'referent': _pt.ComputedValue<Global__Type__Declaration$>;
            };
            type Global__Type__Declaration$parameters$D$type$ = ['cyclic sibling lookup', Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$] | ['resolved value', Global__Type__Declaration$parameters$D$type$resolved__value$] | ['sibling lookup', Global__Type__Declaration$parameters$D$type$sibling__lookup$];
            type Global__Type__Declaration$parameters$D$optional$O$ = null;
            type Global__Type__Declaration$parameters$D$optional$ = _pt.OptionalValue<Global__Type__Declaration$parameters$D$optional$O$>;
            type Global__Type__Declaration$parameters$D$ = {
                readonly 'optional': Global__Type__Declaration$parameters$D$optional$;
                readonly 'type': Global__Type__Declaration$parameters$D$type$;
            };
            type Global__Type__Declaration$parameters$ = _pt.Dictionary<Global__Type__Declaration$parameters$D$>;
            type Global__Type__Declaration$result$O$ = {
                readonly 'key': string;
                readonly 'referent': _pt.ComputedValue<Global__Type__Declaration$>;
            };
            type Global__Type__Declaration$result$ = _pt.OptionalValue<Global__Type__Declaration$result$O$>;
            type Global__Type__Declaration$ = {
                readonly 'parameters': Global__Type__Declaration$parameters$;
                readonly 'result': Global__Type__Declaration$result$;
            };
            type Global__Type__Declarations$D$ = Global__Type__Declaration$;
            type Global__Type__Declarations$ = _pt.Dictionary<Global__Type__Declarations$D$>;
            type Global__Type__Definition$declaration$ = Global__Type__Declarations$D$;
            type Global__Type__Definition$type$ = Type$;
            type Global__Type__Definition$ = {
                readonly 'declaration': Global__Type__Definition$declaration$;
                readonly 'type': Global__Type__Definition$type$;
            };
            type Type__Selection__Tail$step__type$dictionary$dictionary$ = Type$type$dictionary$;
            type Type__Selection__Tail$step__type$dictionary$tail$O$ = Type__Selection__Tail$;
            type Type__Selection__Tail$step__type$dictionary$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$dictionary$tail$O$>;
            type Type__Selection__Tail$step__type$dictionary$ = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$;
                readonly 'tail': Type__Selection__Tail$step__type$dictionary$tail$;
            };
            type Type__Selection__Tail$step__type$optional$optional$ = Type$type$optional$;
            type Type__Selection__Tail$step__type$optional$tail$O$ = Type__Selection__Tail$;
            type Type__Selection__Tail$step__type$optional$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$optional$tail$O$>;
            type Type__Selection__Tail$step__type$optional$ = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$;
                readonly 'tail': Type__Selection__Tail$step__type$optional$tail$;
            };
            type Type__Selection__Tail$step__type$array$array$ = Type$type$array$;
            type Type__Selection__Tail$step__type$array$tail$O$ = Type__Selection__Tail$;
            type Type__Selection__Tail$step__type$array$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$array$tail$O$>;
            type Type__Selection__Tail$step__type$array$ = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$;
                readonly 'tail': Type__Selection__Tail$step__type$array$tail$;
            };
            type Type__Selection__Tail$step__type$group$group$ = Type$type$group$;
            type Type__Selection__Tail$step__type$group$property$ = {
                readonly 'key': string;
                readonly 'referent': Type$type$group$properties$D$;
            };
            type Type__Selection__Tail$step__type$group$tail$O$ = Type__Selection__Tail$;
            type Type__Selection__Tail$step__type$group$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$group$tail$O$>;
            type Type__Selection__Tail$step__type$group$ = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$;
                readonly 'property': Type__Selection__Tail$step__type$group$property$;
                readonly 'tail': Type__Selection__Tail$step__type$group$tail$;
            };
            type Type__Selection__Tail$step__type$state__group$state__group$ = Type$type$state__group$;
            type Type__Selection__Tail$step__type$state__group$state$ = {
                readonly 'key': string;
                readonly 'referent': Type$type$state__group$states$D$;
            };
            type Type__Selection__Tail$step__type$state__group$tail$O$ = Type__Selection__Tail$;
            type Type__Selection__Tail$step__type$state__group$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$state__group$tail$O$>;
            type Type__Selection__Tail$step__type$state__group$ = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$;
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$;
                readonly 'tail': Type__Selection__Tail$step__type$state__group$tail$;
            };
            type Type__Selection__Tail$step__type$ = ['array', Type__Selection__Tail$step__type$array$] | ['dictionary', Type__Selection__Tail$step__type$dictionary$] | ['group', Type__Selection__Tail$step__type$group$] | ['optional', Type__Selection__Tail$step__type$optional$] | ['state group', Type__Selection__Tail$step__type$state__group$];
            type Type__Selection__Tail$ = {
                readonly 'step type': Type__Selection__Tail$step__type$;
            };
            type Type__Selection$import$O$ = {
                readonly 'key': string;
                readonly 'referent': Imports$D$;
            };
            type Type__Selection$import$ = _pt.OptionalValue<Type__Selection$import$O$>;
            type Type__Selection$global__type$ = {
                readonly 'key': string;
                readonly 'referent': Global__Type__Definition$;
            };
            type Type__Selection$tail$O$ = Type__Selection__Tail$;
            type Type__Selection$tail$ = _pt.OptionalValue<Type__Selection$tail$O$>;
            type Type__Selection$ = {
                readonly 'global type': Type__Selection$global__type$;
                readonly 'import': Type__Selection$import$;
                readonly 'tail': Type__Selection$tail$;
            };
            type Dictionary__Selection$type$ = Type__Selection$;
            type Dictionary__Selection$dictionary$ = Type$type$dictionary$;
            type Dictionary__Selection$ = {
                readonly 'dictionary': Dictionary__Selection$dictionary$;
                readonly 'type': Dictionary__Selection$type$;
            };
            type Type__Library$imports$ = Imports$;
            type Type__Library$atom__types$ = Atom__Types$;
            type Type__Library$global__types$declarations$ = Global__Type__Declarations$;
            type Type__Library$global__types$definitions$D$ = Global__Type__Definition$;
            type Type__Library$global__types$definitions$ = _pt.Dictionary<Type__Library$global__types$definitions$D$>;
            type Type__Library$global__types$ = {
                readonly 'declarations': Type__Library$global__types$declarations$;
                readonly 'definitions': Type__Library$global__types$definitions$;
            };
            type Type__Library$ = {
                readonly 'atom types': Type__Library$atom__types$;
                readonly 'global types': Type__Library$global__types$;
                readonly 'imports': Type__Library$imports$;
            };
            type Global__Type__Selection$resolved__sibling$type$ = {
                readonly 'key': string;
                readonly 'referent': Global__Type__Definition$;
            };
            type Global__Type__Selection$resolved__sibling$ = {
                readonly 'type': Global__Type__Selection$resolved__sibling$type$;
            };
            type Global__Type__Selection$import$library$ = {
                readonly 'key': string;
                readonly 'referent': Imports$D$;
            };
            type Global__Type__Selection$import$type$ = {
                readonly 'key': string;
                readonly 'referent': Type__Library$global__types$definitions$D$;
            };
            type Global__Type__Selection$import$ = {
                readonly 'library': Global__Type__Selection$import$library$;
                readonly 'type': Global__Type__Selection$import$type$;
            };
            type Global__Type__Selection$cyclic__sibling$type$ = {
                readonly 'key': string;
                readonly 'referent': _pt.ComputedValue<Global__Type__Definition$>;
            };
            type Global__Type__Selection$cyclic__sibling$ = {
                readonly 'type': Global__Type__Selection$cyclic__sibling$type$;
            };
            type Global__Type__Selection$ = ['cyclic sibling', Global__Type__Selection$cyclic__sibling$] | ['import', Global__Type__Selection$import$] | ['resolved sibling', Global__Type__Selection$resolved__sibling$];
            type Model$type__library$ = Type__Library$;
            type Model$root$ = {
                readonly 'key': string;
                readonly 'referent': Type__Library$global__types$definitions$D$;
            };
            type Model$ = {
                readonly 'root': Model$root$;
                readonly 'type library': Model$type__library$;
            };
            type Project$type__libraries$D$ = Type__Library$;
            type Project$type__libraries$ = _pt.Dictionary<Project$type__libraries$D$>;
            type Project$ = {
                readonly 'type libraries': Project$type__libraries$;
            };
            type Root$ = Project$;
            type Variable$parent__variable$ = {
                readonly 'key': string;
                readonly 'referent': Variable$;
            };
            type Variable$ = ['parent variable', Variable$parent__variable$];
            type Variables$D$ = Variable$;
            type Variables$ = _pt.Dictionary<Variables$D$>;
            type Value__Selection__Tail$reference$reference$ = Type$type$resolved__reference$;
            type Value__Selection__Tail$reference$tail$O$ = Value__Selection__Tail$;
            type Value__Selection__Tail$reference$tail$ = _pt.OptionalValue<Value__Selection__Tail$reference$tail$O$>;
            type Value__Selection__Tail$reference$ = {
                readonly 'reference': Value__Selection__Tail$reference$reference$;
                readonly 'tail': Value__Selection__Tail$reference$tail$;
            };
            type Value__Selection__Tail$component$component$ = Type$type$component$;
            type Value__Selection__Tail$component$tail$O$ = Value__Selection__Tail$;
            type Value__Selection__Tail$component$tail$ = _pt.OptionalValue<Value__Selection__Tail$component$tail$O$>;
            type Value__Selection__Tail$component$ = {
                readonly 'component': Value__Selection__Tail$component$component$;
                readonly 'tail': Value__Selection__Tail$component$tail$;
            };
            type Value__Selection__Tail$state__group$state__group$ = Type$type$state__group$;
            type Value__Selection__Tail$state__group$result__type$ = Global__Type__Selection$;
            type Value__Selection__Tail$state__group$states$D$ = Any__Value__Selection$;
            type Value__Selection__Tail$state__group$states$ = _pt.Dictionary<Value__Selection__Tail$state__group$states$D$>;
            type Value__Selection__Tail$state__group$ = {
                readonly 'result type': Value__Selection__Tail$state__group$result__type$;
                readonly 'state group': Value__Selection__Tail$state__group$state__group$;
                readonly 'states': Value__Selection__Tail$state__group$states$;
            };
            type Value__Selection__Tail$group$group$ = Type$type$group$;
            type Value__Selection__Tail$group$property$ = {
                readonly 'key': string;
                readonly 'referent': Type$type$group$properties$D$;
            };
            type Value__Selection__Tail$group$tail$O$ = Value__Selection__Tail$;
            type Value__Selection__Tail$group$tail$ = _pt.OptionalValue<Value__Selection__Tail$group$tail$O$>;
            type Value__Selection__Tail$group$ = {
                readonly 'group': Value__Selection__Tail$group$group$;
                readonly 'property': Value__Selection__Tail$group$property$;
                readonly 'tail': Value__Selection__Tail$group$tail$;
            };
            type Value__Selection__Tail$ = ['component', Value__Selection__Tail$component$] | ['group', Value__Selection__Tail$group$] | ['reference', Value__Selection__Tail$reference$] | ['state group', Value__Selection__Tail$state__group$];
            type No__Context__Value__Selection$start$ = {
                readonly 'key': string;
                readonly 'referent': Variables$D$;
            };
            type No__Context__Value__Selection$tail$O$ = Value__Selection__Tail$;
            type No__Context__Value__Selection$tail$ = _pt.OptionalValue<No__Context__Value__Selection$tail$O$>;
            type No__Context__Value__Selection$ = {
                readonly 'start': No__Context__Value__Selection$start$;
                readonly 'tail': No__Context__Value__Selection$tail$;
            };
            type Any__Value__Selection$start$O$ = {
                readonly 'key': string;
                readonly 'referent': Variables$D$;
            };
            type Any__Value__Selection$start$ = _pt.OptionalValue<Any__Value__Selection$start$O$>;
            type Any__Value__Selection$tail$O$ = Value__Selection__Tail$;
            type Any__Value__Selection$tail$ = _pt.OptionalValue<Any__Value__Selection$tail$O$>;
            type Any__Value__Selection$ = {
                readonly 'start': Any__Value__Selection$start$;
                readonly 'tail': Any__Value__Selection$tail$;
            };
        }
        namespace T {
            import _IFlat = Flat;
            namespace Atom__Types {
                namespace D {
                    type $ = _IFlat.Atom__Types$D$;
                }
                type $ = _IFlat.Atom__Types$;
            }
            namespace Atom {
                namespace _ltype {
                    type $ = _IFlat.Atom$type$;
                }
                type $ = _IFlat.Atom$;
            }
            namespace TType {
                namespace _ltype {
                    namespace array {
                        namespace _ltype {
                            type $ = _IFlat.Type$type$array$type$;
                        }
                        type $ = _IFlat.Type$type$array$;
                    }
                    namespace atom {
                        namespace atom {
                            type $ = _IFlat.Type$type$atom$atom$;
                        }
                        type $ = _IFlat.Type$type$atom$;
                    }
                    namespace component {
                        namespace _ltype {
                            type $ = _IFlat.Type$type$component$type$;
                        }
                        namespace _larguments {
                            namespace D {
                                type $ = _IFlat.Type$type$component$arguments$D$;
                            }
                            type $ = _IFlat.Type$type$component$arguments$;
                        }
                        type $ = _IFlat.Type$type$component$;
                    }
                    namespace constraint {
                        type $ = _IFlat.Type$type$constraint$;
                    }
                    namespace cyclic__reference {
                        namespace atom {
                            type $ = _IFlat.Type$type$cyclic__reference$atom$;
                        }
                        namespace sibling {
                            type $ = _IFlat.Type$type$cyclic__reference$sibling$;
                        }
                        type $ = _IFlat.Type$type$cyclic__reference$;
                    }
                    namespace dictionary {
                        namespace key {
                            type $ = _IFlat.Type$type$dictionary$key$;
                        }
                        namespace constraints {
                            namespace D {
                                namespace dictionary {
                                    namespace dictionary {
                                        type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dictionary$;
                                    }
                                    namespace dense {
                                        namespace no {
                                            type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$no$;
                                        }
                                        namespace yes {
                                            type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$yes$;
                                        }
                                        type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$;
                                    }
                                    type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$;
                                }
                                namespace lookup {
                                    type $ = _IFlat.Type$type$dictionary$constraints$D$lookup$;
                                }
                                type $ = _IFlat.Type$type$dictionary$constraints$D$;
                            }
                            type $ = _IFlat.Type$type$dictionary$constraints$;
                        }
                        namespace _ltype {
                            type $ = _IFlat.Type$type$dictionary$type$;
                        }
                        type $ = _IFlat.Type$type$dictionary$;
                    }
                    namespace group {
                        namespace properties {
                            namespace D {
                                namespace _ltype {
                                    type $ = _IFlat.Type$type$group$properties$D$type$;
                                }
                                type $ = _IFlat.Type$type$group$properties$D$;
                            }
                            type $ = _IFlat.Type$type$group$properties$;
                        }
                        type $ = _IFlat.Type$type$group$;
                    }
                    namespace nothing {
                        type $ = _IFlat.Type$type$nothing$;
                    }
                    namespace optional {
                        namespace _ltype {
                            type $ = _IFlat.Type$type$optional$type$;
                        }
                        type $ = _IFlat.Type$type$optional$;
                    }
                    namespace resolved__reference {
                        namespace atom {
                            type $ = _IFlat.Type$type$resolved__reference$atom$;
                        }
                        namespace value {
                            namespace dictionary {
                                type $ = _IFlat.Type$type$resolved__reference$value$dictionary$;
                            }
                            namespace lookup {
                                type $ = _IFlat.Type$type$resolved__reference$value$lookup$;
                            }
                            type $ = _IFlat.Type$type$resolved__reference$value$;
                        }
                        type $ = _IFlat.Type$type$resolved__reference$;
                    }
                    namespace state__group {
                        namespace states {
                            namespace D {
                                namespace _ltype {
                                    type $ = _IFlat.Type$type$state__group$states$D$type$;
                                }
                                type $ = _IFlat.Type$type$state__group$states$D$;
                            }
                            type $ = _IFlat.Type$type$state__group$states$;
                        }
                        type $ = _IFlat.Type$type$state__group$;
                    }
                    type $ = _IFlat.Type$type$;
                }
                type $ = _IFlat.Type$;
            }
            namespace Imports {
                namespace D {
                    namespace library {
                        type $ = _IFlat.Imports$D$library$;
                    }
                    type $ = _IFlat.Imports$D$;
                }
                type $ = _IFlat.Imports$;
            }
            namespace Global__Type__Declaration {
                namespace parameters {
                    namespace D {
                        namespace _ltype {
                            namespace resolved__value {
                                type $ = _IFlat.Global__Type__Declaration$parameters$D$type$resolved__value$;
                            }
                            namespace sibling__lookup {
                                type $ = _IFlat.Global__Type__Declaration$parameters$D$type$sibling__lookup$;
                            }
                            namespace cyclic__sibling__lookup {
                                type $ = _IFlat.Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$;
                            }
                            type $ = _IFlat.Global__Type__Declaration$parameters$D$type$;
                        }
                        namespace optional {
                            namespace O {
                                type $ = _IFlat.Global__Type__Declaration$parameters$D$optional$O$;
                            }
                            type $ = _IFlat.Global__Type__Declaration$parameters$D$optional$;
                        }
                        type $ = _IFlat.Global__Type__Declaration$parameters$D$;
                    }
                    type $ = _IFlat.Global__Type__Declaration$parameters$;
                }
                namespace result {
                    namespace O {
                        type $ = _IFlat.Global__Type__Declaration$result$O$;
                    }
                    type $ = _IFlat.Global__Type__Declaration$result$;
                }
                type $ = _IFlat.Global__Type__Declaration$;
            }
            namespace Global__Type__Declarations {
                namespace D {
                    type $ = _IFlat.Global__Type__Declarations$D$;
                }
                type $ = _IFlat.Global__Type__Declarations$;
            }
            namespace Global__Type__Definition {
                namespace declaration {
                    type $ = _IFlat.Global__Type__Definition$declaration$;
                }
                namespace _ltype {
                    type $ = _IFlat.Global__Type__Definition$type$;
                }
                type $ = _IFlat.Global__Type__Definition$;
            }
            namespace TType__Selection__Tail {
                namespace step__type {
                    namespace dictionary {
                        namespace dictionary {
                            type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$;
                        }
                        namespace tail {
                            namespace O {
                                type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$O$;
                            }
                            type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$;
                        }
                        type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$;
                    }
                    namespace optional {
                        namespace optional {
                            type $ = _IFlat.Type__Selection__Tail$step__type$optional$optional$;
                        }
                        namespace tail {
                            namespace O {
                                type $ = _IFlat.Type__Selection__Tail$step__type$optional$tail$O$;
                            }
                            type $ = _IFlat.Type__Selection__Tail$step__type$optional$tail$;
                        }
                        type $ = _IFlat.Type__Selection__Tail$step__type$optional$;
                    }
                    namespace array {
                        namespace array {
                            type $ = _IFlat.Type__Selection__Tail$step__type$array$array$;
                        }
                        namespace tail {
                            namespace O {
                                type $ = _IFlat.Type__Selection__Tail$step__type$array$tail$O$;
                            }
                            type $ = _IFlat.Type__Selection__Tail$step__type$array$tail$;
                        }
                        type $ = _IFlat.Type__Selection__Tail$step__type$array$;
                    }
                    namespace group {
                        namespace group {
                            type $ = _IFlat.Type__Selection__Tail$step__type$group$group$;
                        }
                        namespace property {
                            type $ = _IFlat.Type__Selection__Tail$step__type$group$property$;
                        }
                        namespace tail {
                            namespace O {
                                type $ = _IFlat.Type__Selection__Tail$step__type$group$tail$O$;
                            }
                            type $ = _IFlat.Type__Selection__Tail$step__type$group$tail$;
                        }
                        type $ = _IFlat.Type__Selection__Tail$step__type$group$;
                    }
                    namespace state__group {
                        namespace state__group {
                            type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$;
                        }
                        namespace state {
                            type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state$;
                        }
                        namespace tail {
                            namespace O {
                                type $ = _IFlat.Type__Selection__Tail$step__type$state__group$tail$O$;
                            }
                            type $ = _IFlat.Type__Selection__Tail$step__type$state__group$tail$;
                        }
                        type $ = _IFlat.Type__Selection__Tail$step__type$state__group$;
                    }
                    type $ = _IFlat.Type__Selection__Tail$step__type$;
                }
                type $ = _IFlat.Type__Selection__Tail$;
            }
            namespace TType__Selection {
                namespace _limport {
                    namespace O {
                        type $ = _IFlat.Type__Selection$import$O$;
                    }
                    type $ = _IFlat.Type__Selection$import$;
                }
                namespace global__type {
                    type $ = _IFlat.Type__Selection$global__type$;
                }
                namespace tail {
                    namespace O {
                        type $ = _IFlat.Type__Selection$tail$O$;
                    }
                    type $ = _IFlat.Type__Selection$tail$;
                }
                type $ = _IFlat.Type__Selection$;
            }
            namespace Dictionary__Selection {
                namespace _ltype {
                    type $ = _IFlat.Dictionary__Selection$type$;
                }
                namespace dictionary {
                    type $ = _IFlat.Dictionary__Selection$dictionary$;
                }
                type $ = _IFlat.Dictionary__Selection$;
            }
            namespace TType__Library {
                namespace imports {
                    type $ = _IFlat.Type__Library$imports$;
                }
                namespace atom__types {
                    type $ = _IFlat.Type__Library$atom__types$;
                }
                namespace global__types {
                    namespace declarations {
                        type $ = _IFlat.Type__Library$global__types$declarations$;
                    }
                    namespace definitions {
                        namespace D {
                            type $ = _IFlat.Type__Library$global__types$definitions$D$;
                        }
                        type $ = _IFlat.Type__Library$global__types$definitions$;
                    }
                    type $ = _IFlat.Type__Library$global__types$;
                }
                type $ = _IFlat.Type__Library$;
            }
            namespace Global__Type__Selection {
                namespace resolved__sibling {
                    namespace _ltype {
                        type $ = _IFlat.Global__Type__Selection$resolved__sibling$type$;
                    }
                    type $ = _IFlat.Global__Type__Selection$resolved__sibling$;
                }
                namespace _limport {
                    namespace library {
                        type $ = _IFlat.Global__Type__Selection$import$library$;
                    }
                    namespace _ltype {
                        type $ = _IFlat.Global__Type__Selection$import$type$;
                    }
                    type $ = _IFlat.Global__Type__Selection$import$;
                }
                namespace cyclic__sibling {
                    namespace _ltype {
                        type $ = _IFlat.Global__Type__Selection$cyclic__sibling$type$;
                    }
                    type $ = _IFlat.Global__Type__Selection$cyclic__sibling$;
                }
                type $ = _IFlat.Global__Type__Selection$;
            }
            namespace Model {
                namespace type__library {
                    type $ = _IFlat.Model$type__library$;
                }
                namespace root {
                    type $ = _IFlat.Model$root$;
                }
                type $ = _IFlat.Model$;
            }
            namespace Project {
                namespace type__libraries {
                    namespace D {
                        type $ = _IFlat.Project$type__libraries$D$;
                    }
                    type $ = _IFlat.Project$type__libraries$;
                }
                type $ = _IFlat.Project$;
            }
            namespace Root {
                type $ = _IFlat.Root$;
            }
            namespace Variable {
                namespace parent__variable {
                    type $ = _IFlat.Variable$parent__variable$;
                }
                type $ = _IFlat.Variable$;
            }
            namespace Variables {
                namespace D {
                    type $ = _IFlat.Variables$D$;
                }
                type $ = _IFlat.Variables$;
            }
            namespace Value__Selection__Tail {
                namespace reference {
                    namespace reference {
                        type $ = _IFlat.Value__Selection__Tail$reference$reference$;
                    }
                    namespace tail {
                        namespace O {
                            type $ = _IFlat.Value__Selection__Tail$reference$tail$O$;
                        }
                        type $ = _IFlat.Value__Selection__Tail$reference$tail$;
                    }
                    type $ = _IFlat.Value__Selection__Tail$reference$;
                }
                namespace component {
                    namespace component {
                        type $ = _IFlat.Value__Selection__Tail$component$component$;
                    }
                    namespace tail {
                        namespace O {
                            type $ = _IFlat.Value__Selection__Tail$component$tail$O$;
                        }
                        type $ = _IFlat.Value__Selection__Tail$component$tail$;
                    }
                    type $ = _IFlat.Value__Selection__Tail$component$;
                }
                namespace state__group {
                    namespace state__group {
                        type $ = _IFlat.Value__Selection__Tail$state__group$state__group$;
                    }
                    namespace result__type {
                        type $ = _IFlat.Value__Selection__Tail$state__group$result__type$;
                    }
                    namespace states {
                        namespace D {
                            type $ = _IFlat.Value__Selection__Tail$state__group$states$D$;
                        }
                        type $ = _IFlat.Value__Selection__Tail$state__group$states$;
                    }
                    type $ = _IFlat.Value__Selection__Tail$state__group$;
                }
                namespace group {
                    namespace group {
                        type $ = _IFlat.Value__Selection__Tail$group$group$;
                    }
                    namespace property {
                        type $ = _IFlat.Value__Selection__Tail$group$property$;
                    }
                    namespace tail {
                        namespace O {
                            type $ = _IFlat.Value__Selection__Tail$group$tail$O$;
                        }
                        type $ = _IFlat.Value__Selection__Tail$group$tail$;
                    }
                    type $ = _IFlat.Value__Selection__Tail$group$;
                }
                type $ = _IFlat.Value__Selection__Tail$;
            }
            namespace No__Context__Value__Selection {
                namespace start {
                    type $ = _IFlat.No__Context__Value__Selection$start$;
                }
                namespace tail {
                    namespace O {
                        type $ = _IFlat.No__Context__Value__Selection$tail$O$;
                    }
                    type $ = _IFlat.No__Context__Value__Selection$tail$;
                }
                type $ = _IFlat.No__Context__Value__Selection$;
            }
            namespace Any__Value__Selection {
                namespace start {
                    namespace O {
                        type $ = _IFlat.Any__Value__Selection$start$O$;
                    }
                    type $ = _IFlat.Any__Value__Selection$start$;
                }
                namespace tail {
                    namespace O {
                        type $ = _IFlat.Any__Value__Selection$tail$O$;
                    }
                    type $ = _IFlat.Any__Value__Selection$tail$;
                }
                type $ = _IFlat.Any__Value__Selection$;
            }
        }
    }
    namespace Resolve {
        import _IResolved = Resolved;
        import _IUnresolved = Unresolved;
        namespace selectors {
            type Type__Selection__Tail = ($: _IResolved.Flat.Type__Selection__Tail$) => _IResolved.Flat.Type$;
            type Type__Selection = ($: _IResolved.Flat.Type__Selection$) => _IResolved.Flat.Type$;
        }
        namespace resolvers {
            type Any__Value__Selection = <_TAnnotation>($: _IUnresolved.Flat.Any__Value__Selection$<_TAnnotation>) => _IResolved.Flat.Any__Value__Selection$;
            type Atom__Types = <_TAnnotation>($: _IUnresolved.Flat.Atom__Types$<_TAnnotation>) => _IResolved.Flat.Atom__Types$;
            type Atom = <_TAnnotation>($: _IUnresolved.Flat.Atom$<_TAnnotation>, $p: {
                readonly 'atom types': _IResolved.Flat.Atom__Types$;
            }) => _IResolved.Flat.Atom$;
            type Dictionary__Selection = <_TAnnotation>($: _IUnresolved.Flat.Dictionary__Selection$<_TAnnotation>, $p: {
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>;
                readonly 'imports': _IResolved.Flat.Imports$;
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>;
            }) => _IResolved.Flat.Dictionary__Selection$;
            type Global__Type__Declaration = <_TAnnotation>($: _IUnresolved.Flat.Global__Type__Declaration$<_TAnnotation>, $p: {
                readonly 'all siblings': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Declaration$>>;
            }) => _IResolved.Flat.Global__Type__Declaration$;
            type Global__Type__Declarations = <_TAnnotation>($: _IUnresolved.Flat.Global__Type__Declarations$<_TAnnotation>) => _IResolved.Flat.Global__Type__Declarations$;
            type Global__Type__Definition = <_TAnnotation>($: _IUnresolved.Flat.Global__Type__Definition$<_TAnnotation>, $p: {
                readonly 'all siblings': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>;
                readonly 'atom types': _IResolved.Flat.Atom__Types$;
                readonly 'global type declarations': _IResolved.Flat.Global__Type__Declarations$;
                readonly 'imports': _IResolved.Flat.Imports$;
                readonly 'key': string;
                readonly 'non cyclic siblings': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>;
            }) => _IResolved.Flat.Global__Type__Definition$;
            type Global__Type__Selection = <_TAnnotation>($: _IUnresolved.Flat.Global__Type__Selection$<_TAnnotation>, $p: {
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>;
                readonly 'imports': _IResolved.Flat.Imports$;
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>;
            }) => _IResolved.Flat.Global__Type__Selection$;
            type Imports = <_TAnnotation>($: _IUnresolved.Flat.Imports$<_TAnnotation>, $p: {
                readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>;
            }) => _IResolved.Flat.Imports$;
            type Model = <_TAnnotation>($: _IUnresolved.Flat.Model$<_TAnnotation>, $p: {
                readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>;
            }) => _IResolved.Flat.Model$;
            type No__Context__Value__Selection = <_TAnnotation>($: _IUnresolved.Flat.No__Context__Value__Selection$<_TAnnotation>) => _IResolved.Flat.No__Context__Value__Selection$;
            type Project = <_TAnnotation>($: _IUnresolved.Flat.Project$<_TAnnotation>) => _IResolved.Flat.Project$;
            type Root = <_TAnnotation>($: _IUnresolved.Flat.Root$<_TAnnotation>) => _IResolved.Flat.Root$;
            type Type__Library = <_TAnnotation>($: _IUnresolved.Flat.Type__Library$<_TAnnotation>, $p: {
                readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>;
            }) => _IResolved.Flat.Type__Library$;
            type Type__Selection__Tail = <_TAnnotation>($: _IUnresolved.Flat.Type__Selection__Tail$<_TAnnotation>, $p: {
                readonly 'context': _IResolved.Flat.Type$;
            }) => _IResolved.Flat.Type__Selection__Tail$;
            type Type__Selection = <_TAnnotation>($: _IUnresolved.Flat.Type__Selection$<_TAnnotation>, $p: {
                readonly 'imports': _IResolved.Flat.Imports$;
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>;
            }) => _IResolved.Flat.Type__Selection$;
            type Type = <_TAnnotation>($: _IUnresolved.Flat.Type$<_TAnnotation>, $p: {
                readonly 'atom types': _IResolved.Flat.Atom__Types$;
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>;
                readonly 'imports': _IResolved.Flat.Imports$;
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>;
            }) => _IResolved.Flat.Type$;
            type Value__Selection__Tail = <_TAnnotation>($: _IUnresolved.Flat.Value__Selection__Tail$<_TAnnotation>) => _IResolved.Flat.Value__Selection__Tail$;
            type Variable = <_TAnnotation>($: _IUnresolved.Flat.Variable$<_TAnnotation>) => _IResolved.Flat.Variable$;
            type Variables = <_TAnnotation>($: _IUnresolved.Flat.Variables$<_TAnnotation>) => _IResolved.Flat.Variables$;
        }
        type $ = {
            readonly 'Any Value Selection': resolvers.Any__Value__Selection;
            readonly 'Atom': resolvers.Atom;
            readonly 'Atom Types': resolvers.Atom__Types;
            readonly 'Dictionary Selection': resolvers.Dictionary__Selection;
            readonly 'Global Type Declaration': resolvers.Global__Type__Declaration;
            readonly 'Global Type Declarations': resolvers.Global__Type__Declarations;
            readonly 'Global Type Definition': resolvers.Global__Type__Definition;
            readonly 'Global Type Selection': resolvers.Global__Type__Selection;
            readonly 'Imports': resolvers.Imports;
            readonly 'Model': resolvers.Model;
            readonly 'No Context Value Selection': resolvers.No__Context__Value__Selection;
            readonly 'Project': resolvers.Project;
            readonly 'Root': resolvers.Root;
            readonly 'Type': resolvers.Type;
            readonly 'Type Library': resolvers.Type__Library;
            readonly 'Type Selection': resolvers.Type__Selection;
            readonly 'Type Selection Tail': resolvers.Type__Selection__Tail;
            readonly 'Value Selection Tail': resolvers.Value__Selection__Tail;
            readonly 'Variable': resolvers.Variable;
            readonly 'Variables': resolvers.Variables;
        };
    }
    namespace Serialize {
        import _IResolved = Resolved;
        namespace types {
            type Atom__Types = ($: _IResolved.Flat.Atom__Types$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Atom = ($: _IResolved.Flat.Atom$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Type = ($: _IResolved.Flat.Type$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Imports = ($: _IResolved.Flat.Imports$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Global__Type__Declaration = ($: _IResolved.Flat.Global__Type__Declaration$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Global__Type__Declarations = ($: _IResolved.Flat.Global__Type__Declarations$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Global__Type__Definition = ($: _IResolved.Flat.Global__Type__Definition$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Type__Selection__Tail = ($: _IResolved.Flat.Type__Selection__Tail$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Type__Selection = ($: _IResolved.Flat.Type__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Dictionary__Selection = ($: _IResolved.Flat.Dictionary__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Type__Library = ($: _IResolved.Flat.Type__Library$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Global__Type__Selection = ($: _IResolved.Flat.Global__Type__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Model = ($: _IResolved.Flat.Model$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Project = ($: _IResolved.Flat.Project$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Root = ($: _IResolved.Flat.Root$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Variable = ($: _IResolved.Flat.Variable$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Variables = ($: _IResolved.Flat.Variables$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Value__Selection__Tail = ($: _IResolved.Flat.Value__Selection__Tail$, $p: {
                readonly 'out': boolean;
            }) => void;
            type No__Context__Value__Selection = ($: _IResolved.Flat.No__Context__Value__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Any__Value__Selection = ($: _IResolved.Flat.Any__Value__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
        }
        type $ = {
            readonly 'Any Value Selection': types.Any__Value__Selection;
            readonly 'Atom': types.Atom;
            readonly 'Atom Types': types.Atom__Types;
            readonly 'Dictionary Selection': types.Dictionary__Selection;
            readonly 'Global Type Declaration': types.Global__Type__Declaration;
            readonly 'Global Type Declarations': types.Global__Type__Declarations;
            readonly 'Global Type Definition': types.Global__Type__Definition;
            readonly 'Global Type Selection': types.Global__Type__Selection;
            readonly 'Imports': types.Imports;
            readonly 'Model': types.Model;
            readonly 'No Context Value Selection': types.No__Context__Value__Selection;
            readonly 'Project': types.Project;
            readonly 'Root': types.Root;
            readonly 'Type': types.Type;
            readonly 'Type Library': types.Type__Library;
            readonly 'Type Selection': types.Type__Selection;
            readonly 'Type Selection Tail': types.Type__Selection__Tail;
            readonly 'Value Selection Tail': types.Value__Selection__Tail;
            readonly 'Variable': types.Variable;
            readonly 'Variables': types.Variables;
        };
    }
}
export declare namespace proto__typesystem {
    namespace Unresolved {
        namespace Flat {
            type Aggregated__Type__Parameters$D$<_TAnnotation> = null;
            type Aggregated__Type__Parameters$<_TAnnotation> = _pt.Dictionary<Aggregated__Type__Parameters$D$<_TAnnotation>>;
            type Type__Parameters$local$D$<_TAnnotation> = null;
            type Type__Parameters$local$<_TAnnotation> = _pt.Dictionary<Type__Parameters$local$D$<_TAnnotation>>;
            type Type__Parameters$aggregated$<_TAnnotation> = Aggregated__Type__Parameters$<_TAnnotation>;
            type Type__Parameters$<_TAnnotation> = {
                readonly 'aggregated': Type__Parameters$aggregated$<_TAnnotation>;
                readonly 'local': Type__Parameters$local$<_TAnnotation>;
            };
            type Function__Declaration$type__parameters$<_TAnnotation> = Type__Parameters$<_TAnnotation>;
            type Function__Declaration$context$<_TAnnotation> = Type$<_TAnnotation>;
            type Function__Declaration$parameters$D$<_TAnnotation> = Type$<_TAnnotation>;
            type Function__Declaration$parameters$<_TAnnotation> = _pt.Dictionary<Function__Declaration$parameters$D$<_TAnnotation>>;
            type Function__Declaration$<_TAnnotation> = {
                readonly 'context': Function__Declaration$context$<_TAnnotation>;
                readonly 'parameters': Function__Declaration$parameters$<_TAnnotation>;
                readonly 'type parameters': Function__Declaration$type__parameters$<_TAnnotation>;
            };
            type Imports$D$<_TAnnotation> = Import$<_TAnnotation>;
            type Imports$<_TAnnotation> = _pt.Dictionary<Imports$D$<_TAnnotation>>;
            type Nested__Namespace$imports$<_TAnnotation> = Imports$<_TAnnotation>;
            type Nested__Namespace$namespace$<_TAnnotation> = Namespace$<_TAnnotation>;
            type Nested__Namespace$<_TAnnotation> = {
                readonly 'imports': Nested__Namespace$imports$<_TAnnotation>;
                readonly 'namespace': Nested__Namespace$namespace$<_TAnnotation>;
            };
            type Import$sibling$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Import$parent__import$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Import$<_TAnnotation> = ['parent import', Import$parent__import$<_TAnnotation>] | ['sibling', Import$sibling$<_TAnnotation>];
            type Namespace$namespaces$D$<_TAnnotation> = Nested__Namespace$<_TAnnotation>;
            type Namespace$namespaces$<_TAnnotation> = _pt.Dictionary<Namespace$namespaces$D$<_TAnnotation>>;
            type Namespace$parameters$<_TAnnotation> = Type__Parameters$<_TAnnotation>;
            type Namespace$types$D$<_TAnnotation> = Type$<_TAnnotation>;
            type Namespace$types$<_TAnnotation> = _pt.Dictionary<Namespace$types$D$<_TAnnotation>>;
            type Namespace$<_TAnnotation> = {
                readonly 'namespaces': Namespace$namespaces$<_TAnnotation>;
                readonly 'parameters': Namespace$parameters$<_TAnnotation>;
                readonly 'types': Namespace$types$<_TAnnotation>;
            };
            type Type$address__function$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>;
            type Type$address__function$return__type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$address__function$<_TAnnotation> = {
                readonly 'declaration': Type$address__function$declaration$<_TAnnotation>;
                readonly 'return type': Type$address__function$return__type$<_TAnnotation>;
            };
            type Type$array$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$boolean$<_TAnnotation> = null;
            type Type$computed$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$dictionary$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$group$D$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$group$D$mutable$O$<_TAnnotation> = null;
            type Type$group$D$mutable$<_TAnnotation> = _pt.OptionalValue<Type$group$D$mutable$O$<_TAnnotation>>;
            type Type$group$D$<_TAnnotation> = {
                readonly 'mutable': Type$group$D$mutable$<_TAnnotation>;
                readonly 'type': Type$group$D$type$<_TAnnotation>;
            };
            type Type$group$<_TAnnotation> = _pt.Dictionary<Type$group$D$<_TAnnotation>>;
            type Type$lookup$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$null$<_TAnnotation> = null;
            type Type$number$<_TAnnotation> = null;
            type Type$optional$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$procedure$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>;
            type Type$procedure$<_TAnnotation> = {
                readonly 'declaration': Type$procedure$declaration$<_TAnnotation>;
            };
            type Type$string$<_TAnnotation> = null;
            type Type$tagged__union$D$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$tagged__union$<_TAnnotation> = _pt.Dictionary<Type$tagged__union$D$<_TAnnotation>>;
            type Type$type__parameter$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type$type__reference$external$namespace__path$<_TAnnotation> = Namespace__Selection$<_TAnnotation>;
            type Type$type__reference$external$type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type$type__reference$external$<_TAnnotation> = {
                readonly 'namespace path': Type$type__reference$external$namespace__path$<_TAnnotation>;
                readonly 'type': Type$type__reference$external$type$<_TAnnotation>;
            };
            type Type$type__reference$sibling$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type$type__reference$cyclic__sibling$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type$type__reference$<_TAnnotation> = ['cyclic sibling', Type$type__reference$cyclic__sibling$<_TAnnotation>] | ['external', Type$type__reference$external$<_TAnnotation>] | ['sibling', Type$type__reference$sibling$<_TAnnotation>];
            type Type$value__function$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>;
            type Type$value__function$return__type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$value__function$<_TAnnotation> = {
                readonly 'declaration': Type$value__function$declaration$<_TAnnotation>;
                readonly 'return type': Type$value__function$return__type$<_TAnnotation>;
            };
            type Type$<_TAnnotation> = ['address function', Type$address__function$<_TAnnotation>] | ['array', Type$array$<_TAnnotation>] | ['boolean', Type$boolean$<_TAnnotation>] | ['computed', Type$computed$<_TAnnotation>] | ['dictionary', Type$dictionary$<_TAnnotation>] | ['group', Type$group$<_TAnnotation>] | ['lookup', Type$lookup$<_TAnnotation>] | ['null', Type$null$<_TAnnotation>] | ['number', Type$number$<_TAnnotation>] | ['optional', Type$optional$<_TAnnotation>] | ['procedure', Type$procedure$<_TAnnotation>] | ['string', Type$string$<_TAnnotation>] | ['tagged union', Type$tagged__union$<_TAnnotation>] | ['type parameter', Type$type__parameter$<_TAnnotation>] | ['type reference', Type$type__reference$<_TAnnotation>] | ['value function', Type$value__function$<_TAnnotation>];
            type Type__Arguments$D$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type__Arguments$D$<_TAnnotation> = {
                readonly 'type': Type__Arguments$D$type$<_TAnnotation>;
            };
            type Type__Arguments$<_TAnnotation> = _pt.Dictionary<Type__Arguments$D$<_TAnnotation>>;
            type Namespace__Selection__Tail$namespace$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Namespace__Selection__Tail$arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>;
            type Namespace__Selection__Tail$tail$O$<_TAnnotation> = Namespace__Selection__Tail$<_TAnnotation>;
            type Namespace__Selection__Tail$tail$<_TAnnotation> = _pt.OptionalValue<Namespace__Selection__Tail$tail$O$<_TAnnotation>>;
            type Namespace__Selection__Tail$<_TAnnotation> = {
                readonly 'arguments': Namespace__Selection__Tail$arguments$<_TAnnotation>;
                readonly 'namespace': Namespace__Selection__Tail$namespace$<_TAnnotation>;
                readonly 'tail': Namespace__Selection__Tail$tail$<_TAnnotation>;
            };
            type Namespace__Selection$start$import$namespace$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Namespace__Selection$start$import$arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>;
            type Namespace__Selection$start$import$tail$O$<_TAnnotation> = Namespace__Selection__Tail$<_TAnnotation>;
            type Namespace__Selection$start$import$tail$<_TAnnotation> = _pt.OptionalValue<Namespace__Selection$start$import$tail$O$<_TAnnotation>>;
            type Namespace__Selection$start$import$<_TAnnotation> = {
                readonly 'arguments': Namespace__Selection$start$import$arguments$<_TAnnotation>;
                readonly 'namespace': Namespace__Selection$start$import$namespace$<_TAnnotation>;
                readonly 'tail': Namespace__Selection$start$import$tail$<_TAnnotation>;
            };
            type Namespace__Selection$start$local$namespace$<_TAnnotation> = Namespace__Selection__Tail$<_TAnnotation>;
            type Namespace__Selection$start$local$<_TAnnotation> = {
                readonly 'namespace': Namespace__Selection$start$local$namespace$<_TAnnotation>;
            };
            type Namespace__Selection$start$<_TAnnotation> = ['import', Namespace__Selection$start$import$<_TAnnotation>] | ['local', Namespace__Selection$start$local$<_TAnnotation>];
            type Namespace__Selection$<_TAnnotation> = {
                readonly 'start': Namespace__Selection$start$<_TAnnotation>;
            };
            type Root$<_TAnnotation> = Namespace$<_TAnnotation>;
        }
        namespace T {
            import _IFlat = Flat;
            namespace Aggregated__Type__Parameters {
                namespace D {
                    type $<_TAnnotation> = _IFlat.Aggregated__Type__Parameters$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Aggregated__Type__Parameters$<_TAnnotation>;
            }
            namespace TType__Parameters {
                namespace local {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Type__Parameters$local$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Parameters$local$<_TAnnotation>;
                }
                namespace aggregated {
                    type $<_TAnnotation> = _IFlat.Type__Parameters$aggregated$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Parameters$<_TAnnotation>;
            }
            namespace Function__Declaration {
                namespace type__parameters {
                    type $<_TAnnotation> = _IFlat.Function__Declaration$type__parameters$<_TAnnotation>;
                }
                namespace context {
                    type $<_TAnnotation> = _IFlat.Function__Declaration$context$<_TAnnotation>;
                }
                namespace parameters {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Function__Declaration$parameters$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Function__Declaration$parameters$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Function__Declaration$<_TAnnotation>;
            }
            namespace Imports {
                namespace D {
                    type $<_TAnnotation> = _IFlat.Imports$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Imports$<_TAnnotation>;
            }
            namespace Nested__Namespace {
                namespace imports {
                    type $<_TAnnotation> = _IFlat.Nested__Namespace$imports$<_TAnnotation>;
                }
                namespace namespace {
                    type $<_TAnnotation> = _IFlat.Nested__Namespace$namespace$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Nested__Namespace$<_TAnnotation>;
            }
            namespace Import {
                namespace sibling {
                    type $<_TAnnotation> = _IFlat.Import$sibling$<_TAnnotation>;
                }
                namespace parent__import {
                    type $<_TAnnotation> = _IFlat.Import$parent__import$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Import$<_TAnnotation>;
            }
            namespace Namespace {
                namespace namespaces {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Namespace$namespaces$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Namespace$namespaces$<_TAnnotation>;
                }
                namespace parameters {
                    type $<_TAnnotation> = _IFlat.Namespace$parameters$<_TAnnotation>;
                }
                namespace types {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Namespace$types$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Namespace$types$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Namespace$<_TAnnotation>;
            }
            namespace TType {
                namespace address__function {
                    namespace declaration {
                        type $<_TAnnotation> = _IFlat.Type$address__function$declaration$<_TAnnotation>;
                    }
                    namespace return__type {
                        type $<_TAnnotation> = _IFlat.Type$address__function$return__type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$address__function$<_TAnnotation>;
                }
                namespace array {
                    type $<_TAnnotation> = _IFlat.Type$array$<_TAnnotation>;
                }
                namespace _lboolean {
                    type $<_TAnnotation> = _IFlat.Type$boolean$<_TAnnotation>;
                }
                namespace computed {
                    type $<_TAnnotation> = _IFlat.Type$computed$<_TAnnotation>;
                }
                namespace dictionary {
                    type $<_TAnnotation> = _IFlat.Type$dictionary$<_TAnnotation>;
                }
                namespace group {
                    namespace D {
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$group$D$type$<_TAnnotation>;
                        }
                        namespace mutable {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Type$group$D$mutable$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$group$D$mutable$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$group$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$group$<_TAnnotation>;
                }
                namespace lookup {
                    type $<_TAnnotation> = _IFlat.Type$lookup$<_TAnnotation>;
                }
                namespace _lnull {
                    type $<_TAnnotation> = _IFlat.Type$null$<_TAnnotation>;
                }
                namespace _lnumber {
                    type $<_TAnnotation> = _IFlat.Type$number$<_TAnnotation>;
                }
                namespace optional {
                    type $<_TAnnotation> = _IFlat.Type$optional$<_TAnnotation>;
                }
                namespace procedure {
                    namespace declaration {
                        type $<_TAnnotation> = _IFlat.Type$procedure$declaration$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$procedure$<_TAnnotation>;
                }
                namespace _lstring {
                    type $<_TAnnotation> = _IFlat.Type$string$<_TAnnotation>;
                }
                namespace tagged__union {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Type$tagged__union$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$tagged__union$<_TAnnotation>;
                }
                namespace type__parameter {
                    type $<_TAnnotation> = _IFlat.Type$type__parameter$<_TAnnotation>;
                }
                namespace type__reference {
                    namespace external {
                        namespace namespace__path {
                            type $<_TAnnotation> = _IFlat.Type$type__reference$external$namespace__path$<_TAnnotation>;
                        }
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$type__reference$external$type$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type__reference$external$<_TAnnotation>;
                    }
                    namespace sibling {
                        type $<_TAnnotation> = _IFlat.Type$type__reference$sibling$<_TAnnotation>;
                    }
                    namespace cyclic__sibling {
                        type $<_TAnnotation> = _IFlat.Type$type__reference$cyclic__sibling$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$type__reference$<_TAnnotation>;
                }
                namespace value__function {
                    namespace declaration {
                        type $<_TAnnotation> = _IFlat.Type$value__function$declaration$<_TAnnotation>;
                    }
                    namespace return__type {
                        type $<_TAnnotation> = _IFlat.Type$value__function$return__type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$value__function$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type$<_TAnnotation>;
            }
            namespace TType__Arguments {
                namespace D {
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Type__Arguments$D$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Arguments$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Arguments$<_TAnnotation>;
            }
            namespace Namespace__Selection__Tail {
                namespace namespace {
                    type $<_TAnnotation> = _IFlat.Namespace__Selection__Tail$namespace$<_TAnnotation>;
                }
                namespace _larguments {
                    type $<_TAnnotation> = _IFlat.Namespace__Selection__Tail$arguments$<_TAnnotation>;
                }
                namespace tail {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.Namespace__Selection__Tail$tail$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Namespace__Selection__Tail$tail$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Namespace__Selection__Tail$<_TAnnotation>;
            }
            namespace Namespace__Selection {
                namespace start {
                    namespace _limport {
                        namespace namespace {
                            type $<_TAnnotation> = _IFlat.Namespace__Selection$start$import$namespace$<_TAnnotation>;
                        }
                        namespace _larguments {
                            type $<_TAnnotation> = _IFlat.Namespace__Selection$start$import$arguments$<_TAnnotation>;
                        }
                        namespace tail {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Namespace__Selection$start$import$tail$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Namespace__Selection$start$import$tail$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Namespace__Selection$start$import$<_TAnnotation>;
                    }
                    namespace local {
                        namespace namespace {
                            type $<_TAnnotation> = _IFlat.Namespace__Selection$start$local$namespace$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Namespace__Selection$start$local$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Namespace__Selection$start$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Namespace__Selection$<_TAnnotation>;
            }
            namespace Root {
                type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>;
            }
        }
    }
    namespace Resolved {
        namespace Flat {
            type Aggregated__Type__Parameters$D$ = null;
            type Aggregated__Type__Parameters$ = _pt.Dictionary<Aggregated__Type__Parameters$D$>;
            type Type__Parameters$local$D$ = null;
            type Type__Parameters$local$ = _pt.Dictionary<Type__Parameters$local$D$>;
            type Type__Parameters$aggregated$ = Aggregated__Type__Parameters$;
            type Type__Parameters$ = {
                readonly 'aggregated': Type__Parameters$aggregated$;
                readonly 'local': Type__Parameters$local$;
            };
            type Function__Declaration$type__parameters$ = Type__Parameters$;
            type Function__Declaration$context$ = Type$;
            type Function__Declaration$parameters$D$ = Type$;
            type Function__Declaration$parameters$ = _pt.Dictionary<Function__Declaration$parameters$D$>;
            type Function__Declaration$ = {
                readonly 'context': Function__Declaration$context$;
                readonly 'parameters': Function__Declaration$parameters$;
                readonly 'type parameters': Function__Declaration$type__parameters$;
            };
            type Imports$D$ = Import$;
            type Imports$ = _pt.Dictionary<Imports$D$>;
            type Nested__Namespace$imports$ = Imports$;
            type Nested__Namespace$namespace$ = Namespace$;
            type Nested__Namespace$ = {
                readonly 'imports': Nested__Namespace$imports$;
                readonly 'namespace': Nested__Namespace$namespace$;
            };
            type Import$sibling$ = {
                readonly 'key': string;
                readonly 'referent': Nested__Namespace$;
            };
            type Import$parent__import$ = {
                readonly 'key': string;
                readonly 'referent': Imports$D$;
            };
            type Import$ = ['parent import', Import$parent__import$] | ['sibling', Import$sibling$];
            type Namespace$namespaces$D$ = Nested__Namespace$;
            type Namespace$namespaces$ = _pt.Dictionary<Namespace$namespaces$D$>;
            type Namespace$parameters$ = Type__Parameters$;
            type Namespace$types$D$ = Type$;
            type Namespace$types$ = _pt.Dictionary<Namespace$types$D$>;
            type Namespace$ = {
                readonly 'namespaces': Namespace$namespaces$;
                readonly 'parameters': Namespace$parameters$;
                readonly 'types': Namespace$types$;
            };
            type Type$address__function$declaration$ = Function__Declaration$;
            type Type$address__function$return__type$ = Type$;
            type Type$address__function$ = {
                readonly 'declaration': Type$address__function$declaration$;
                readonly 'return type': Type$address__function$return__type$;
            };
            type Type$array$ = Type$;
            type Type$boolean$ = null;
            type Type$computed$ = Type$;
            type Type$dictionary$ = Type$;
            type Type$group$D$type$ = Type$;
            type Type$group$D$mutable$O$ = null;
            type Type$group$D$mutable$ = _pt.OptionalValue<Type$group$D$mutable$O$>;
            type Type$group$D$ = {
                readonly 'mutable': Type$group$D$mutable$;
                readonly 'type': Type$group$D$type$;
            };
            type Type$group$ = _pt.Dictionary<Type$group$D$>;
            type Type$lookup$ = Type$;
            type Type$null$ = null;
            type Type$number$ = null;
            type Type$optional$ = Type$;
            type Type$procedure$declaration$ = Function__Declaration$;
            type Type$procedure$ = {
                readonly 'declaration': Type$procedure$declaration$;
            };
            type Type$string$ = null;
            type Type$tagged__union$D$ = Type$;
            type Type$tagged__union$ = _pt.Dictionary<Type$tagged__union$D$>;
            type Type$type__parameter$ = {
                readonly 'key': string;
                readonly 'referent': Aggregated__Type__Parameters$D$;
            };
            type Type$type__reference$external$namespace__path$ = Namespace__Selection$;
            type Type$type__reference$external$type$ = {
                readonly 'key': string;
                readonly 'referent': Namespace$types$D$;
            };
            type Type$type__reference$external$ = {
                readonly 'namespace path': Type$type__reference$external$namespace__path$;
                readonly 'type': Type$type__reference$external$type$;
            };
            type Type$type__reference$sibling$ = {
                readonly 'key': string;
                readonly 'referent': Type$;
            };
            type Type$type__reference$cyclic__sibling$ = {
                readonly 'key': string;
                readonly 'referent': _pt.ComputedValue<Type$>;
            };
            type Type$type__reference$ = ['cyclic sibling', Type$type__reference$cyclic__sibling$] | ['external', Type$type__reference$external$] | ['sibling', Type$type__reference$sibling$];
            type Type$value__function$declaration$ = Function__Declaration$;
            type Type$value__function$return__type$ = Type$;
            type Type$value__function$ = {
                readonly 'declaration': Type$value__function$declaration$;
                readonly 'return type': Type$value__function$return__type$;
            };
            type Type$ = ['address function', Type$address__function$] | ['array', Type$array$] | ['boolean', Type$boolean$] | ['computed', Type$computed$] | ['dictionary', Type$dictionary$] | ['group', Type$group$] | ['lookup', Type$lookup$] | ['null', Type$null$] | ['number', Type$number$] | ['optional', Type$optional$] | ['procedure', Type$procedure$] | ['string', Type$string$] | ['tagged union', Type$tagged__union$] | ['type parameter', Type$type__parameter$] | ['type reference', Type$type__reference$] | ['value function', Type$value__function$];
            type Type__Arguments$D$type$ = Type$;
            type Type__Arguments$D$ = {
                readonly 'type': Type__Arguments$D$type$;
            };
            type Type__Arguments$ = _pt.Dictionary<Type__Arguments$D$>;
            type Namespace__Selection__Tail$namespace$ = {
                readonly 'key': string;
                readonly 'referent': Namespace$namespaces$D$;
            };
            type Namespace__Selection__Tail$arguments$ = Type__Arguments$;
            type Namespace__Selection__Tail$tail$O$ = Namespace__Selection__Tail$;
            type Namespace__Selection__Tail$tail$ = _pt.OptionalValue<Namespace__Selection__Tail$tail$O$>;
            type Namespace__Selection__Tail$ = {
                readonly 'arguments': Namespace__Selection__Tail$arguments$;
                readonly 'namespace': Namespace__Selection__Tail$namespace$;
                readonly 'tail': Namespace__Selection__Tail$tail$;
            };
            type Namespace__Selection$start$import$namespace$ = {
                readonly 'key': string;
                readonly 'referent': Imports$D$;
            };
            type Namespace__Selection$start$import$arguments$ = Type__Arguments$;
            type Namespace__Selection$start$import$tail$O$ = Namespace__Selection__Tail$;
            type Namespace__Selection$start$import$tail$ = _pt.OptionalValue<Namespace__Selection$start$import$tail$O$>;
            type Namespace__Selection$start$import$ = {
                readonly 'arguments': Namespace__Selection$start$import$arguments$;
                readonly 'namespace': Namespace__Selection$start$import$namespace$;
                readonly 'tail': Namespace__Selection$start$import$tail$;
            };
            type Namespace__Selection$start$local$namespace$ = Namespace__Selection__Tail$;
            type Namespace__Selection$start$local$ = {
                readonly 'namespace': Namespace__Selection$start$local$namespace$;
            };
            type Namespace__Selection$start$ = ['import', Namespace__Selection$start$import$] | ['local', Namespace__Selection$start$local$];
            type Namespace__Selection$ = {
                readonly 'start': Namespace__Selection$start$;
            };
            type Root$ = Namespace$;
        }
        namespace T {
            import _IFlat = Flat;
            namespace Aggregated__Type__Parameters {
                namespace D {
                    type $ = _IFlat.Aggregated__Type__Parameters$D$;
                }
                type $ = _IFlat.Aggregated__Type__Parameters$;
            }
            namespace TType__Parameters {
                namespace local {
                    namespace D {
                        type $ = _IFlat.Type__Parameters$local$D$;
                    }
                    type $ = _IFlat.Type__Parameters$local$;
                }
                namespace aggregated {
                    type $ = _IFlat.Type__Parameters$aggregated$;
                }
                type $ = _IFlat.Type__Parameters$;
            }
            namespace Function__Declaration {
                namespace type__parameters {
                    type $ = _IFlat.Function__Declaration$type__parameters$;
                }
                namespace context {
                    type $ = _IFlat.Function__Declaration$context$;
                }
                namespace parameters {
                    namespace D {
                        type $ = _IFlat.Function__Declaration$parameters$D$;
                    }
                    type $ = _IFlat.Function__Declaration$parameters$;
                }
                type $ = _IFlat.Function__Declaration$;
            }
            namespace Imports {
                namespace D {
                    type $ = _IFlat.Imports$D$;
                }
                type $ = _IFlat.Imports$;
            }
            namespace Nested__Namespace {
                namespace imports {
                    type $ = _IFlat.Nested__Namespace$imports$;
                }
                namespace namespace {
                    type $ = _IFlat.Nested__Namespace$namespace$;
                }
                type $ = _IFlat.Nested__Namespace$;
            }
            namespace Import {
                namespace sibling {
                    type $ = _IFlat.Import$sibling$;
                }
                namespace parent__import {
                    type $ = _IFlat.Import$parent__import$;
                }
                type $ = _IFlat.Import$;
            }
            namespace Namespace {
                namespace namespaces {
                    namespace D {
                        type $ = _IFlat.Namespace$namespaces$D$;
                    }
                    type $ = _IFlat.Namespace$namespaces$;
                }
                namespace parameters {
                    type $ = _IFlat.Namespace$parameters$;
                }
                namespace types {
                    namespace D {
                        type $ = _IFlat.Namespace$types$D$;
                    }
                    type $ = _IFlat.Namespace$types$;
                }
                type $ = _IFlat.Namespace$;
            }
            namespace TType {
                namespace address__function {
                    namespace declaration {
                        type $ = _IFlat.Type$address__function$declaration$;
                    }
                    namespace return__type {
                        type $ = _IFlat.Type$address__function$return__type$;
                    }
                    type $ = _IFlat.Type$address__function$;
                }
                namespace array {
                    type $ = _IFlat.Type$array$;
                }
                namespace _lboolean {
                    type $ = _IFlat.Type$boolean$;
                }
                namespace computed {
                    type $ = _IFlat.Type$computed$;
                }
                namespace dictionary {
                    type $ = _IFlat.Type$dictionary$;
                }
                namespace group {
                    namespace D {
                        namespace _ltype {
                            type $ = _IFlat.Type$group$D$type$;
                        }
                        namespace mutable {
                            namespace O {
                                type $ = _IFlat.Type$group$D$mutable$O$;
                            }
                            type $ = _IFlat.Type$group$D$mutable$;
                        }
                        type $ = _IFlat.Type$group$D$;
                    }
                    type $ = _IFlat.Type$group$;
                }
                namespace lookup {
                    type $ = _IFlat.Type$lookup$;
                }
                namespace _lnull {
                    type $ = _IFlat.Type$null$;
                }
                namespace _lnumber {
                    type $ = _IFlat.Type$number$;
                }
                namespace optional {
                    type $ = _IFlat.Type$optional$;
                }
                namespace procedure {
                    namespace declaration {
                        type $ = _IFlat.Type$procedure$declaration$;
                    }
                    type $ = _IFlat.Type$procedure$;
                }
                namespace _lstring {
                    type $ = _IFlat.Type$string$;
                }
                namespace tagged__union {
                    namespace D {
                        type $ = _IFlat.Type$tagged__union$D$;
                    }
                    type $ = _IFlat.Type$tagged__union$;
                }
                namespace type__parameter {
                    type $ = _IFlat.Type$type__parameter$;
                }
                namespace type__reference {
                    namespace external {
                        namespace namespace__path {
                            type $ = _IFlat.Type$type__reference$external$namespace__path$;
                        }
                        namespace _ltype {
                            type $ = _IFlat.Type$type__reference$external$type$;
                        }
                        type $ = _IFlat.Type$type__reference$external$;
                    }
                    namespace sibling {
                        type $ = _IFlat.Type$type__reference$sibling$;
                    }
                    namespace cyclic__sibling {
                        type $ = _IFlat.Type$type__reference$cyclic__sibling$;
                    }
                    type $ = _IFlat.Type$type__reference$;
                }
                namespace value__function {
                    namespace declaration {
                        type $ = _IFlat.Type$value__function$declaration$;
                    }
                    namespace return__type {
                        type $ = _IFlat.Type$value__function$return__type$;
                    }
                    type $ = _IFlat.Type$value__function$;
                }
                type $ = _IFlat.Type$;
            }
            namespace TType__Arguments {
                namespace D {
                    namespace _ltype {
                        type $ = _IFlat.Type__Arguments$D$type$;
                    }
                    type $ = _IFlat.Type__Arguments$D$;
                }
                type $ = _IFlat.Type__Arguments$;
            }
            namespace Namespace__Selection__Tail {
                namespace namespace {
                    type $ = _IFlat.Namespace__Selection__Tail$namespace$;
                }
                namespace _larguments {
                    type $ = _IFlat.Namespace__Selection__Tail$arguments$;
                }
                namespace tail {
                    namespace O {
                        type $ = _IFlat.Namespace__Selection__Tail$tail$O$;
                    }
                    type $ = _IFlat.Namespace__Selection__Tail$tail$;
                }
                type $ = _IFlat.Namespace__Selection__Tail$;
            }
            namespace Namespace__Selection {
                namespace start {
                    namespace _limport {
                        namespace namespace {
                            type $ = _IFlat.Namespace__Selection$start$import$namespace$;
                        }
                        namespace _larguments {
                            type $ = _IFlat.Namespace__Selection$start$import$arguments$;
                        }
                        namespace tail {
                            namespace O {
                                type $ = _IFlat.Namespace__Selection$start$import$tail$O$;
                            }
                            type $ = _IFlat.Namespace__Selection$start$import$tail$;
                        }
                        type $ = _IFlat.Namespace__Selection$start$import$;
                    }
                    namespace local {
                        namespace namespace {
                            type $ = _IFlat.Namespace__Selection$start$local$namespace$;
                        }
                        type $ = _IFlat.Namespace__Selection$start$local$;
                    }
                    type $ = _IFlat.Namespace__Selection$start$;
                }
                type $ = _IFlat.Namespace__Selection$;
            }
            namespace Root {
                type $ = _IFlat.Root$;
            }
        }
    }
    namespace Resolve {
        import _IResolved = Resolved;
        import _IUnresolved = Unresolved;
        namespace selectors {
            type Nested__Namespace = ($: _IResolved.Flat.Nested__Namespace$) => _IResolved.Flat.Namespace$;
            type Namespace__Selection = ($: _IResolved.Flat.Namespace__Selection$) => _IResolved.Flat.Nested__Namespace$;
        }
        namespace resolvers {
            type Aggregated__Type__Parameters = <_TAnnotation>($: _IUnresolved.Flat.Aggregated__Type__Parameters$<_TAnnotation>) => _IResolved.Flat.Aggregated__Type__Parameters$;
            type Function__Declaration = <_TAnnotation>($: _IUnresolved.Flat.Function__Declaration$<_TAnnotation>, $p: {
                readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>;
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Nested__Namespace$>;
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>;
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$;
            }) => _IResolved.Flat.Function__Declaration$;
            type Import = <_TAnnotation>($: _IUnresolved.Flat.Import$<_TAnnotation>) => _IResolved.Flat.Import$;
            type Imports = <_TAnnotation>($: _IUnresolved.Flat.Imports$<_TAnnotation>) => _IResolved.Flat.Imports$;
            type Namespace = <_TAnnotation>($: _IUnresolved.Flat.Namespace$<_TAnnotation>, $p: {
                readonly 'parent type parameters': _pt.OptionalValue<_IResolved.Flat.Aggregated__Type__Parameters$>;
                readonly 'resolved sibling namespaces': _pt.OptionalValue<_pt.Lookup<_IResolved.Flat.Nested__Namespace$>>;
            }) => _IResolved.Flat.Namespace$;
            type Nested__Namespace = <_TAnnotation>($: _IUnresolved.Flat.Nested__Namespace$<_TAnnotation>, $p: {
                readonly 'resolved parent sibling namespaces': _pt.OptionalValue<_pt.Lookup<_IResolved.Flat.Nested__Namespace$>>;
            }) => _IResolved.Flat.Nested__Namespace$;
            type Namespace__Selection = <_TAnnotation>($: _IUnresolved.Flat.Namespace__Selection$<_TAnnotation>, $p: {
                readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>;
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Nested__Namespace$>;
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>;
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$;
            }) => _IResolved.Flat.Namespace__Selection$;
            type Namespace__Selection__Tail = <_TAnnotation>($: _IUnresolved.Flat.Namespace__Selection__Tail$<_TAnnotation>) => _IResolved.Flat.Namespace__Selection__Tail$;
            type Root = <_TAnnotation>($: _IUnresolved.Flat.Root$<_TAnnotation>) => _IResolved.Flat.Root$;
            type Type__Arguments = <_TAnnotation>($: _IUnresolved.Flat.Type__Arguments$<_TAnnotation>) => _IResolved.Flat.Type__Arguments$;
            type Type__Parameters = <_TAnnotation>($: _IUnresolved.Flat.Type__Parameters$<_TAnnotation>, $p: {
                readonly 'parent type parameters': _pt.OptionalValue<_IResolved.Flat.Aggregated__Type__Parameters$>;
            }) => _IResolved.Flat.Type__Parameters$;
            type Type = <_TAnnotation>($: _IUnresolved.Flat.Type$<_TAnnotation>, $p: {
                readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>;
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Nested__Namespace$>;
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>;
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$;
            }) => _IResolved.Flat.Type$;
        }
        type $ = {
            readonly 'Aggregated Type Parameters': resolvers.Aggregated__Type__Parameters;
            readonly 'Function Declaration': resolvers.Function__Declaration;
            readonly 'Import': resolvers.Import;
            readonly 'Imports': resolvers.Imports;
            readonly 'Namespace': resolvers.Namespace;
            readonly 'Namespace Selection': resolvers.Namespace__Selection;
            readonly 'Namespace Selection Tail': resolvers.Namespace__Selection__Tail;
            readonly 'Nested Namespace': resolvers.Nested__Namespace;
            readonly 'Root': resolvers.Root;
            readonly 'Type': resolvers.Type;
            readonly 'Type Arguments': resolvers.Type__Arguments;
            readonly 'Type Parameters': resolvers.Type__Parameters;
        };
    }
    namespace Serialize {
        import _IResolved = Resolved;
        namespace types {
            type Aggregated__Type__Parameters = ($: _IResolved.Flat.Aggregated__Type__Parameters$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Type__Parameters = ($: _IResolved.Flat.Type__Parameters$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Function__Declaration = ($: _IResolved.Flat.Function__Declaration$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Imports = ($: _IResolved.Flat.Imports$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Nested__Namespace = ($: _IResolved.Flat.Nested__Namespace$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Import = ($: _IResolved.Flat.Import$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Namespace = ($: _IResolved.Flat.Namespace$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Type = ($: _IResolved.Flat.Type$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Type__Arguments = ($: _IResolved.Flat.Type__Arguments$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Namespace__Selection__Tail = ($: _IResolved.Flat.Namespace__Selection__Tail$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Namespace__Selection = ($: _IResolved.Flat.Namespace__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Root = ($: _IResolved.Flat.Root$, $p: {
                readonly 'out': boolean;
            }) => void;
        }
        type $ = {
            readonly 'Aggregated Type Parameters': types.Aggregated__Type__Parameters;
            readonly 'Function Declaration': types.Function__Declaration;
            readonly 'Import': types.Import;
            readonly 'Imports': types.Imports;
            readonly 'Namespace': types.Namespace;
            readonly 'Namespace Selection': types.Namespace__Selection;
            readonly 'Namespace Selection Tail': types.Namespace__Selection__Tail;
            readonly 'Nested Namespace': types.Nested__Namespace;
            readonly 'Root': types.Root;
            readonly 'Type': types.Type;
            readonly 'Type Arguments': types.Type__Arguments;
            readonly 'Type Parameters': types.Type__Parameters;
        };
    }
}
export declare namespace proto__implementation {
    import _Itypesystem = proto__typesystem;
    namespace Unresolved {
        namespace Flat {
            type Type__Selection$current__namespaceXXXXX$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection$child__namespace$namespacex$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection$child__namespace$selection$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Type__Selection$child__namespace$<_TAnnotation> = {
                readonly 'namespacex': Type__Selection$child__namespace$namespacex$<_TAnnotation>;
                readonly 'selection': Type__Selection$child__namespace$selection$<_TAnnotation>;
            };
            type Type__Selection$<_TAnnotation> = ['child namespace', Type__Selection$child__namespace$<_TAnnotation>] | ['current namespaceXXXXX', Type__Selection$current__namespaceXXXXX$<_TAnnotation>];
            type Type__Arguments$D$type$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Type__Arguments$D$<_TAnnotation> = {
                readonly 'type': Type__Arguments$D$type$<_TAnnotation>;
            };
            type Type__Arguments$<_TAnnotation> = _pt.Dictionary<Type__Arguments$D$<_TAnnotation>>;
            type Local__Variables$D$type$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Local__Variables$D$initialization$<_TAnnotation> = Initialization$<_TAnnotation>;
            type Local__Variables$D$<_TAnnotation> = {
                readonly 'initialization': Local__Variables$D$initialization$<_TAnnotation>;
                readonly 'type': Local__Variables$D$type$<_TAnnotation>;
            };
            type Local__Variables$<_TAnnotation> = _pt.Dictionary<Local__Variables$D$<_TAnnotation>>;
            type Aggregated__Variable$type$variable__stack2$variable$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Aggregated__Variable$type$variable__stack2$<_TAnnotation> = {
                readonly 'variable': Aggregated__Variable$type$variable__stack2$variable$<_TAnnotation>;
            };
            type Aggregated__Variable$type$local$<_TAnnotation> = null;
            type Aggregated__Variable$type$<_TAnnotation> = ['local', Aggregated__Variable$type$local$<_TAnnotation>] | ['variable stack2', Aggregated__Variable$type$variable__stack2$<_TAnnotation>];
            type Aggregated__Variable$<_TAnnotation> = {
                readonly 'type': Aggregated__Variable$type$<_TAnnotation>;
            };
            type Aggregated__Variables$D$<_TAnnotation> = Aggregated__Variable$<_TAnnotation>;
            type Aggregated__Variables$<_TAnnotation> = _pt.Dictionary<Aggregated__Variables$D$<_TAnnotation>>;
            type Variables$local$<_TAnnotation> = Local__Variables$<_TAnnotation>;
            type Variables$aggregated$<_TAnnotation> = Aggregated__Variables$<_TAnnotation>;
            type Variables$<_TAnnotation> = {
                readonly 'aggregated': Variables$aggregated$<_TAnnotation>;
                readonly 'local': Variables$local$<_TAnnotation>;
            };
            type Target__Selection__Tail$O$step$property$group$<_TAnnotation> = _TAnnotation;
            type Target__Selection__Tail$O$step$property$property$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Target__Selection__Tail$O$step$property$<_TAnnotation> = {
                readonly 'group': Target__Selection__Tail$O$step$property$group$<_TAnnotation>;
                readonly 'property': Target__Selection__Tail$O$step$property$property$<_TAnnotation>;
            };
            type Target__Selection__Tail$O$step$<_TAnnotation> = ['property', Target__Selection__Tail$O$step$property$<_TAnnotation>];
            type Target__Selection__Tail$O$tail$<_TAnnotation> = Target__Selection__Tail$<_TAnnotation>;
            type Target__Selection__Tail$O$<_TAnnotation> = {
                readonly 'step': Target__Selection__Tail$O$step$<_TAnnotation>;
                readonly 'tail': Target__Selection__Tail$O$tail$<_TAnnotation>;
            };
            type Target__Selection__Tail$<_TAnnotation> = _pt.OptionalValue<Target__Selection__Tail$O$<_TAnnotation>>;
            type Target__Selection$variable$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Target__Selection$tail$<_TAnnotation> = Target__Selection__Tail$<_TAnnotation>;
            type Target__Selection$<_TAnnotation> = {
                readonly 'tail': Target__Selection$tail$<_TAnnotation>;
                readonly 'variable': Target__Selection$variable$<_TAnnotation>;
            };
            type Source__Selection__Tail$O$step$call$address__function$<_TAnnotation> = _TAnnotation;
            type Source__Selection__Tail$O$step$call$type__arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>;
            type Source__Selection__Tail$O$step$call$context$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Source__Selection__Tail$O$step$call$arguments$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Source__Selection__Tail$O$step$call$arguments$<_TAnnotation> = _pt.Dictionary<Source__Selection__Tail$O$step$call$arguments$D$<_TAnnotation>>;
            type Source__Selection__Tail$O$step$call$<_TAnnotation> = {
                readonly 'address function': Source__Selection__Tail$O$step$call$address__function$<_TAnnotation>;
                readonly 'arguments': Source__Selection__Tail$O$step$call$arguments$<_TAnnotation>;
                readonly 'context': Source__Selection__Tail$O$step$call$context$<_TAnnotation>;
                readonly 'type arguments': Source__Selection__Tail$O$step$call$type__arguments$<_TAnnotation>;
            };
            type Source__Selection__Tail$O$step$property$group$<_TAnnotation> = _TAnnotation;
            type Source__Selection__Tail$O$step$property$property$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Source__Selection__Tail$O$step$property$<_TAnnotation> = {
                readonly 'group': Source__Selection__Tail$O$step$property$group$<_TAnnotation>;
                readonly 'property': Source__Selection__Tail$O$step$property$property$<_TAnnotation>;
            };
            type Source__Selection__Tail$O$step$<_TAnnotation> = ['call', Source__Selection__Tail$O$step$call$<_TAnnotation>] | ['property', Source__Selection__Tail$O$step$property$<_TAnnotation>];
            type Source__Selection__Tail$O$tail$<_TAnnotation> = Source__Selection__Tail$<_TAnnotation>;
            type Source__Selection__Tail$O$<_TAnnotation> = {
                readonly 'step': Source__Selection__Tail$O$step$<_TAnnotation>;
                readonly 'tail': Source__Selection__Tail$O$tail$<_TAnnotation>;
            };
            type Source__Selection__Tail$<_TAnnotation> = _pt.OptionalValue<Source__Selection__Tail$O$<_TAnnotation>>;
            type Source__Selection$start$context$<_TAnnotation> = null;
            type Source__Selection$start$variable$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Source__Selection$start$<_TAnnotation> = ['context', Source__Selection$start$context$<_TAnnotation>] | ['variable', Source__Selection$start$variable$<_TAnnotation>];
            type Source__Selection$tail$<_TAnnotation> = Source__Selection__Tail$<_TAnnotation>;
            type Source__Selection$<_TAnnotation> = {
                readonly 'start': Source__Selection$start$<_TAnnotation>;
                readonly 'tail': Source__Selection$tail$<_TAnnotation>;
            };
            type Initialization__Or__Selection$initialization$<_TAnnotation> = Initialization$<_TAnnotation>;
            type Initialization__Or__Selection$selection$selection$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'selection': Initialization__Or__Selection$selection$selection$<_TAnnotation>;
            };
            type Initialization__Or__Selection$<_TAnnotation> = ['initialization', Initialization__Or__Selection$initialization$<_TAnnotation>] | ['selection', Initialization__Or__Selection$selection$<_TAnnotation>];
            type String__Initialization__Or__Selection$initialization$<_TAnnotation> = String__Initialization$<_TAnnotation>;
            type String__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type String__Initialization__Or__Selection$selection$string$<_TAnnotation> = _TAnnotation;
            type String__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'selection': String__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                readonly 'string': String__Initialization__Or__Selection$selection$string$<_TAnnotation>;
            };
            type String__Initialization__Or__Selection$<_TAnnotation> = ['initialization', String__Initialization__Or__Selection$initialization$<_TAnnotation>] | ['selection', String__Initialization__Or__Selection$selection$<_TAnnotation>];
            type Numerical__Initialization__Or__Selection$initialization$<_TAnnotation> = Numerical__Initialization$<_TAnnotation>;
            type Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation> = _TAnnotation;
            type Numerical__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'number': Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation>;
                readonly 'selection': Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
            };
            type Numerical__Initialization__Or__Selection$<_TAnnotation> = ['initialization', Numerical__Initialization__Or__Selection$initialization$<_TAnnotation>] | ['selection', Numerical__Initialization__Or__Selection$selection$<_TAnnotation>];
            type Boolean__Initialization__Or__Selection$initialization$<_TAnnotation> = Boolean__Initialization$<_TAnnotation>;
            type Boolean__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Boolean__Initialization__Or__Selection$selection$boolean$<_TAnnotation> = _TAnnotation;
            type Boolean__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'boolean': Boolean__Initialization__Or__Selection$selection$boolean$<_TAnnotation>;
                readonly 'selection': Boolean__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
            };
            type Boolean__Initialization__Or__Selection$<_TAnnotation> = ['initialization', Boolean__Initialization__Or__Selection$initialization$<_TAnnotation>] | ['selection', Boolean__Initialization__Or__Selection$selection$<_TAnnotation>];
            type Boolean__Initialization$and$left__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$and$right__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$and$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$and$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$and$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$or$left__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$or$right__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$or$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$or$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$or$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$false$<_TAnnotation> = null;
            type Boolean__Initialization$not$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$true$<_TAnnotation> = null;
            type Boolean__Initialization$string__equals$left__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$string__equals$right__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$string__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$string__equals$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$string__equals$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$string__not__equals$left__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$string__not__equals$right__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$string__not__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$string__not__equals$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$string__not__equals$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$number__equals$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$number__equals$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$number__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$number__equals$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$number__equals$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$number__not__equals$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$number__not__equals$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$number__not__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$number__not__equals$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$number__not__equals$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$greater__than$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$greater__than$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$greater__than$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$greater__than$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$greater__than$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$less__than$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$less__than$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$less__than$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$less__than$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$less__than$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$<_TAnnotation> = ['and', Boolean__Initialization$and$<_TAnnotation>] | ['false', Boolean__Initialization$false$<_TAnnotation>] | ['greater than', Boolean__Initialization$greater__than$<_TAnnotation>] | ['less than', Boolean__Initialization$less__than$<_TAnnotation>] | ['not', Boolean__Initialization$not$<_TAnnotation>] | ['number equals', Boolean__Initialization$number__equals$<_TAnnotation>] | ['number not equals', Boolean__Initialization$number__not__equals$<_TAnnotation>] | ['or', Boolean__Initialization$or$<_TAnnotation>] | ['string equals', Boolean__Initialization$string__equals$<_TAnnotation>] | ['string not equals', Boolean__Initialization$string__not__equals$<_TAnnotation>] | ['true', Boolean__Initialization$true$<_TAnnotation>];
            type Numerical__Initialization$minus$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$minus$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$minus$<_TAnnotation> = {
                readonly 'left hand side': Numerical__Initialization$minus$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Numerical__Initialization$minus$right__hand__side$<_TAnnotation>;
            };
            type Numerical__Initialization$plus$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$plus$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$plus$<_TAnnotation> = {
                readonly 'left hand side': Numerical__Initialization$plus$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Numerical__Initialization$plus$right__hand__side$<_TAnnotation>;
            };
            type Numerical__Initialization$predecrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$preincrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$postdecrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$postincrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$numeric__literal$<_TAnnotation> = number;
            type Numerical__Initialization$<_TAnnotation> = ['minus', Numerical__Initialization$minus$<_TAnnotation>] | ['numeric literal', Numerical__Initialization$numeric__literal$<_TAnnotation>] | ['plus', Numerical__Initialization$plus$<_TAnnotation>] | ['postdecrement', Numerical__Initialization$postdecrement$<_TAnnotation>] | ['postincrement', Numerical__Initialization$postincrement$<_TAnnotation>] | ['predecrement', Numerical__Initialization$predecrement$<_TAnnotation>] | ['preincrement', Numerical__Initialization$preincrement$<_TAnnotation>];
            type String__Initialization$string__literal$<_TAnnotation> = string;
            type String__Initialization$<_TAnnotation> = ['string literal', String__Initialization$string__literal$<_TAnnotation>];
            type Initialization$array__literal$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$array__literal$initialization$A$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$array__literal$initialization$<_TAnnotation> = _pt.Array<Initialization$array__literal$initialization$A$<_TAnnotation>>;
            type Initialization$array__literal$<_TAnnotation> = {
                readonly 'definition': Initialization$array__literal$definition$<_TAnnotation>;
                readonly 'initialization': Initialization$array__literal$initialization$<_TAnnotation>;
            };
            type Initialization$array__map$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$array__map$source$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Initialization$array__map$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$array__map$<_TAnnotation> = {
                readonly 'definition': Initialization$array__map$definition$<_TAnnotation>;
                readonly 'initialization': Initialization$array__map$initialization$<_TAnnotation>;
                readonly 'source': Initialization$array__map$source$<_TAnnotation>;
            };
            type Initialization$boolean$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$boolean$initialization$<_TAnnotation> = Boolean__Initialization$<_TAnnotation>;
            type Initialization$boolean$<_TAnnotation> = {
                readonly 'definition': Initialization$boolean$definition$<_TAnnotation>;
                readonly 'initialization': Initialization$boolean$initialization$<_TAnnotation>;
            };
            type Initialization$change__context$source$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Initialization$change__context$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$change__context$<_TAnnotation> = {
                readonly 'initialization': Initialization$change__context$initialization$<_TAnnotation>;
                readonly 'source': Initialization$change__context$source$<_TAnnotation>;
            };
            type Initialization$dictionary__literal$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$dictionary__literal$initialization$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$dictionary__literal$initialization$<_TAnnotation> = _pt.Dictionary<Initialization$dictionary__literal$initialization$D$<_TAnnotation>>;
            type Initialization$dictionary__literal$<_TAnnotation> = {
                readonly 'definition': Initialization$dictionary__literal$definition$<_TAnnotation>;
                readonly 'initialization': Initialization$dictionary__literal$initialization$<_TAnnotation>;
            };
            type Initialization$dictionary__map$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$dictionary__map$source$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Initialization$dictionary__map$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$dictionary__map$<_TAnnotation> = {
                readonly 'definition': Initialization$dictionary__map$definition$<_TAnnotation>;
                readonly 'initialization': Initialization$dictionary__map$initialization$<_TAnnotation>;
                readonly 'source': Initialization$dictionary__map$source$<_TAnnotation>;
            };
            type Initialization$group__literal$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$group__literal$properties$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$group__literal$properties$<_TAnnotation> = _pt.Dictionary<Initialization$group__literal$properties$D$<_TAnnotation>>;
            type Initialization$group__literal$<_TAnnotation> = {
                readonly 'definition': Initialization$group__literal$definition$<_TAnnotation>;
                readonly 'properties': Initialization$group__literal$properties$<_TAnnotation>;
            };
            type Initialization$implement__me$<_TAnnotation> = string;
            type Initialization$null$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$null$<_TAnnotation> = {
                readonly 'definition': Initialization$null$definition$<_TAnnotation>;
            };
            type Initialization$numerical$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$numerical$initialization$<_TAnnotation> = Numerical__Initialization$<_TAnnotation>;
            type Initialization$numerical$<_TAnnotation> = {
                readonly 'definition': Initialization$numerical$definition$<_TAnnotation>;
                readonly 'initialization': Initialization$numerical$initialization$<_TAnnotation>;
            };
            type Initialization$optional$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$optional$<_TAnnotation> = {
                readonly 'definition': Initialization$optional$definition$<_TAnnotation>;
            };
            type Initialization$procedure$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$procedure$temp__has__parameters$O$<_TAnnotation> = null;
            type Initialization$procedure$temp__has__parameters$<_TAnnotation> = _pt.OptionalValue<Initialization$procedure$temp__has__parameters$O$<_TAnnotation>>;
            type Initialization$procedure$variables$<_TAnnotation> = Aggregated__Variables$<_TAnnotation>;
            type Initialization$procedure$block$<_TAnnotation> = Block$<_TAnnotation>;
            type Initialization$procedure$<_TAnnotation> = {
                readonly 'block': Initialization$procedure$block$<_TAnnotation>;
                readonly 'definition': Initialization$procedure$definition$<_TAnnotation>;
                readonly 'temp has parameters': Initialization$procedure$temp__has__parameters$<_TAnnotation>;
                readonly 'variables': Initialization$procedure$variables$<_TAnnotation>;
            };
            type Initialization$tagged__union__literal$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$tagged__union__literal$state$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Initialization$tagged__union__literal$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$tagged__union__literal$<_TAnnotation> = {
                readonly 'definition': Initialization$tagged__union__literal$definition$<_TAnnotation>;
                readonly 'initialization': Initialization$tagged__union__literal$initialization$<_TAnnotation>;
                readonly 'state': Initialization$tagged__union__literal$state$<_TAnnotation>;
            };
            type Initialization$string$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$string$initialization$<_TAnnotation> = String__Initialization$<_TAnnotation>;
            type Initialization$string$<_TAnnotation> = {
                readonly 'definition': Initialization$string$definition$<_TAnnotation>;
                readonly 'initialization': Initialization$string$initialization$<_TAnnotation>;
            };
            type Initialization$switch$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$switch$temp__type$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Initialization$switch$source$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Initialization$switch$cases$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$switch$cases$<_TAnnotation> = _pt.Dictionary<Initialization$switch$cases$D$<_TAnnotation>>;
            type Initialization$switch$default$O$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$switch$default$<_TAnnotation> = _pt.OptionalValue<Initialization$switch$default$O$<_TAnnotation>>;
            type Initialization$switch$<_TAnnotation> = {
                readonly 'cases': Initialization$switch$cases$<_TAnnotation>;
                readonly 'default': Initialization$switch$default$<_TAnnotation>;
                readonly 'definition': Initialization$switch$definition$<_TAnnotation>;
                readonly 'source': Initialization$switch$source$<_TAnnotation>;
                readonly 'temp type': Initialization$switch$temp__type$<_TAnnotation>;
            };
            type Initialization$value__function$definition$<_TAnnotation> = _TAnnotation;
            type Initialization$value__function$temp__has__parameters$O$<_TAnnotation> = null;
            type Initialization$value__function$temp__has__parameters$<_TAnnotation> = _pt.OptionalValue<Initialization$value__function$temp__has__parameters$O$<_TAnnotation>>;
            type Initialization$value__function$variables$<_TAnnotation> = Aggregated__Variables$<_TAnnotation>;
            type Initialization$value__function$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$value__function$<_TAnnotation> = {
                readonly 'definition': Initialization$value__function$definition$<_TAnnotation>;
                readonly 'initialization': Initialization$value__function$initialization$<_TAnnotation>;
                readonly 'temp has parameters': Initialization$value__function$temp__has__parameters$<_TAnnotation>;
                readonly 'variables': Initialization$value__function$variables$<_TAnnotation>;
            };
            type Initialization$variables$variables$<_TAnnotation> = Variables$<_TAnnotation>;
            type Initialization$variables$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$variables$<_TAnnotation> = {
                readonly 'initialization': Initialization$variables$initialization$<_TAnnotation>;
                readonly 'variables': Initialization$variables$variables$<_TAnnotation>;
            };
            type Initialization$<_TAnnotation> = ['array literal', Initialization$array__literal$<_TAnnotation>] | ['array map', Initialization$array__map$<_TAnnotation>] | ['boolean', Initialization$boolean$<_TAnnotation>] | ['change context', Initialization$change__context$<_TAnnotation>] | ['dictionary literal', Initialization$dictionary__literal$<_TAnnotation>] | ['dictionary map', Initialization$dictionary__map$<_TAnnotation>] | ['group literal', Initialization$group__literal$<_TAnnotation>] | ['implement me', Initialization$implement__me$<_TAnnotation>] | ['null', Initialization$null$<_TAnnotation>] | ['numerical', Initialization$numerical$<_TAnnotation>] | ['optional', Initialization$optional$<_TAnnotation>] | ['procedure', Initialization$procedure$<_TAnnotation>] | ['string', Initialization$string$<_TAnnotation>] | ['switch', Initialization$switch$<_TAnnotation>] | ['tagged union literal', Initialization$tagged__union__literal$<_TAnnotation>] | ['value function', Initialization$value__function$<_TAnnotation>] | ['variables', Initialization$variables$<_TAnnotation>];
            type Block$variables$<_TAnnotation> = Variables$<_TAnnotation>;
            type Block$statements$<_TAnnotation> = Statements$<_TAnnotation>;
            type Block$<_TAnnotation> = {
                readonly 'statements': Block$statements$<_TAnnotation>;
                readonly 'variables': Block$variables$<_TAnnotation>;
            };
            type Assign$target$<_TAnnotation> = Target__Selection$<_TAnnotation>;
            type Assign$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Assign$<_TAnnotation> = {
                readonly 'initialization': Assign$initialization$<_TAnnotation>;
                readonly 'target': Assign$target$<_TAnnotation>;
            };
            type Statements$A$block$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$call$function$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Statements$A$call$context__definition$<_TAnnotation> = _TAnnotation;
            type Statements$A$call$context$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Statements$A$call$arguments$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Statements$A$call$arguments$<_TAnnotation> = _pt.Dictionary<Statements$A$call$arguments$D$<_TAnnotation>>;
            type Statements$A$call$<_TAnnotation> = {
                readonly 'arguments': Statements$A$call$arguments$<_TAnnotation>;
                readonly 'context': Statements$A$call$context$<_TAnnotation>;
                readonly 'context definition': Statements$A$call$context__definition$<_TAnnotation>;
                readonly 'function': Statements$A$call$function$<_TAnnotation>;
            };
            type Statements$A$change__context$source$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Statements$A$change__context$block$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$change__context$<_TAnnotation> = {
                readonly 'block': Statements$A$change__context$block$<_TAnnotation>;
                readonly 'source': Statements$A$change__context$source$<_TAnnotation>;
            };
            type Statements$A$if$condition$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Statements$A$if$then$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$if$else$O$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$if$else$<_TAnnotation> = _pt.OptionalValue<Statements$A$if$else$O$<_TAnnotation>>;
            type Statements$A$if$<_TAnnotation> = {
                readonly 'condition': Statements$A$if$condition$<_TAnnotation>;
                readonly 'else': Statements$A$if$else$<_TAnnotation>;
                readonly 'then': Statements$A$if$then$<_TAnnotation>;
            };
            type Statements$A$switch$source$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Statements$A$switch$context__definition$<_TAnnotation> = _TAnnotation;
            type Statements$A$switch$cases$D$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$switch$cases$<_TAnnotation> = _pt.Dictionary<Statements$A$switch$cases$D$<_TAnnotation>>;
            type Statements$A$switch$default$O$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$switch$default$<_TAnnotation> = _pt.OptionalValue<Statements$A$switch$default$O$<_TAnnotation>>;
            type Statements$A$switch$<_TAnnotation> = {
                readonly 'cases': Statements$A$switch$cases$<_TAnnotation>;
                readonly 'context definition': Statements$A$switch$context__definition$<_TAnnotation>;
                readonly 'default': Statements$A$switch$default$<_TAnnotation>;
                readonly 'source': Statements$A$switch$source$<_TAnnotation>;
            };
            type Statements$A$with$source$<_TAnnotation> = Source__Selection$<_TAnnotation>;
            type Statements$A$with$action$assign$<_TAnnotation> = Assign$<_TAnnotation>;
            type Statements$A$with$action$minus__assign$number$<_TAnnotation> = _TAnnotation;
            type Statements$A$with$action$minus__assign$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Statements$A$with$action$minus__assign$<_TAnnotation> = {
                readonly 'number': Statements$A$with$action$minus__assign$number$<_TAnnotation>;
                readonly 'right hand side': Statements$A$with$action$minus__assign$right__hand__side$<_TAnnotation>;
            };
            type Statements$A$with$action$plus__assign$number$<_TAnnotation> = _TAnnotation;
            type Statements$A$with$action$plus__assign$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Statements$A$with$action$plus__assign$<_TAnnotation> = {
                readonly 'number': Statements$A$with$action$plus__assign$number$<_TAnnotation>;
                readonly 'right hand side': Statements$A$with$action$plus__assign$right__hand__side$<_TAnnotation>;
            };
            type Statements$A$with$action$<_TAnnotation> = ['assign', Statements$A$with$action$assign$<_TAnnotation>] | ['minus assign', Statements$A$with$action$minus__assign$<_TAnnotation>] | ['plus assign', Statements$A$with$action$plus__assign$<_TAnnotation>];
            type Statements$A$with$<_TAnnotation> = {
                readonly 'action': Statements$A$with$action$<_TAnnotation>;
                readonly 'source': Statements$A$with$source$<_TAnnotation>;
            };
            type Statements$A$while$condition$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Statements$A$while$block$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$while$<_TAnnotation> = {
                readonly 'block': Statements$A$while$block$<_TAnnotation>;
                readonly 'condition': Statements$A$while$condition$<_TAnnotation>;
            };
            type Statements$A$<_TAnnotation> = ['block', Statements$A$block$<_TAnnotation>] | ['call', Statements$A$call$<_TAnnotation>] | ['change context', Statements$A$change__context$<_TAnnotation>] | ['if', Statements$A$if$<_TAnnotation>] | ['switch', Statements$A$switch$<_TAnnotation>] | ['while', Statements$A$while$<_TAnnotation>] | ['with', Statements$A$with$<_TAnnotation>];
            type Statements$<_TAnnotation> = _pt.Array<Statements$A$<_TAnnotation>>;
            type Source__File$type$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Source__File$initialization$<_TAnnotation> = Initialization$<_TAnnotation>;
            type Source__File$<_TAnnotation> = {
                readonly 'initialization': Source__File$initialization$<_TAnnotation>;
                readonly 'type': Source__File$type$<_TAnnotation>;
            };
            type Root$<_TAnnotation> = Source__File$<_TAnnotation>;
        }
        namespace T {
            import _IFlat = Flat;
            namespace TType__Selection {
                namespace current__namespaceXXXXX {
                    type $<_TAnnotation> = _IFlat.Type__Selection$current__namespaceXXXXX$<_TAnnotation>;
                }
                namespace child__namespace {
                    namespace namespacex {
                        type $<_TAnnotation> = _IFlat.Type__Selection$child__namespace$namespacex$<_TAnnotation>;
                    }
                    namespace selection {
                        type $<_TAnnotation> = _IFlat.Type__Selection$child__namespace$selection$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Selection$child__namespace$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Selection$<_TAnnotation>;
            }
            namespace TType__Arguments {
                namespace D {
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Type__Arguments$D$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Arguments$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Arguments$<_TAnnotation>;
            }
            namespace Local__Variables {
                namespace D {
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Local__Variables$D$type$<_TAnnotation>;
                    }
                    namespace initialization {
                        type $<_TAnnotation> = _IFlat.Local__Variables$D$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Local__Variables$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Local__Variables$<_TAnnotation>;
            }
            namespace Aggregated__Variable {
                namespace _ltype {
                    namespace variable__stack2 {
                        namespace variable {
                            type $<_TAnnotation> = _IFlat.Aggregated__Variable$type$variable__stack2$variable$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Aggregated__Variable$type$variable__stack2$<_TAnnotation>;
                    }
                    namespace local {
                        type $<_TAnnotation> = _IFlat.Aggregated__Variable$type$local$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Aggregated__Variable$type$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Aggregated__Variable$<_TAnnotation>;
            }
            namespace Aggregated__Variables {
                namespace D {
                    type $<_TAnnotation> = _IFlat.Aggregated__Variables$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Aggregated__Variables$<_TAnnotation>;
            }
            namespace Variables {
                namespace local {
                    type $<_TAnnotation> = _IFlat.Variables$local$<_TAnnotation>;
                }
                namespace aggregated {
                    type $<_TAnnotation> = _IFlat.Variables$aggregated$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Variables$<_TAnnotation>;
            }
            namespace TTarget__Selection__Tail {
                namespace O {
                    namespace step {
                        namespace property {
                            namespace group {
                                type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$step$property$group$<_TAnnotation>;
                            }
                            namespace property {
                                type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$step$property$property$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$step$property$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$step$<_TAnnotation>;
                    }
                    namespace tail {
                        type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$tail$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Target__Selection__Tail$<_TAnnotation>;
            }
            namespace TTarget__Selection {
                namespace variable {
                    type $<_TAnnotation> = _IFlat.Target__Selection$variable$<_TAnnotation>;
                }
                namespace tail {
                    type $<_TAnnotation> = _IFlat.Target__Selection$tail$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Target__Selection$<_TAnnotation>;
            }
            namespace Source__Selection__Tail {
                namespace O {
                    namespace step {
                        namespace call {
                            namespace address__function {
                                type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$address__function$<_TAnnotation>;
                            }
                            namespace type__arguments {
                                type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$type__arguments$<_TAnnotation>;
                            }
                            namespace context {
                                type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$context$<_TAnnotation>;
                            }
                            namespace _larguments {
                                namespace D {
                                    type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$arguments$D$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$arguments$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$<_TAnnotation>;
                        }
                        namespace property {
                            namespace group {
                                type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$property$group$<_TAnnotation>;
                            }
                            namespace property {
                                type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$property$property$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$property$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$<_TAnnotation>;
                    }
                    namespace tail {
                        type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$tail$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Source__Selection__Tail$<_TAnnotation>;
            }
            namespace Source__Selection {
                namespace start {
                    namespace context {
                        type $<_TAnnotation> = _IFlat.Source__Selection$start$context$<_TAnnotation>;
                    }
                    namespace variable {
                        type $<_TAnnotation> = _IFlat.Source__Selection$start$variable$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Source__Selection$start$<_TAnnotation>;
                }
                namespace tail {
                    type $<_TAnnotation> = _IFlat.Source__Selection$tail$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Source__Selection$<_TAnnotation>;
            }
            namespace Initialization__Or__Selection {
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$initialization$<_TAnnotation>;
                }
                namespace selection {
                    namespace selection {
                        type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$selection$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$<_TAnnotation>;
            }
            namespace String__Initialization__Or__Selection {
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$initialization$<_TAnnotation>;
                }
                namespace selection {
                    namespace selection {
                        type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                    }
                    namespace _lstring {
                        type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$selection$string$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$selection$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$<_TAnnotation>;
            }
            namespace Numerical__Initialization__Or__Selection {
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$initialization$<_TAnnotation>;
                }
                namespace selection {
                    namespace selection {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                    }
                    namespace _lnumber {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$selection$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$<_TAnnotation>;
            }
            namespace Boolean__Initialization__Or__Selection {
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$initialization$<_TAnnotation>;
                }
                namespace selection {
                    namespace selection {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                    }
                    namespace _lboolean {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$selection$boolean$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$selection$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$<_TAnnotation>;
            }
            namespace Boolean__Initialization {
                namespace and {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$and$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$and$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$and$<_TAnnotation>;
                }
                namespace or {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$or$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$or$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$or$<_TAnnotation>;
                }
                namespace _lfalse {
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$false$<_TAnnotation>;
                }
                namespace not {
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$not$<_TAnnotation>;
                }
                namespace _ltrue {
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$true$<_TAnnotation>;
                }
                namespace string__equals {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__equals$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__equals$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__equals$<_TAnnotation>;
                }
                namespace string__not__equals {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__not__equals$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__not__equals$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__not__equals$<_TAnnotation>;
                }
                namespace number__equals {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__equals$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__equals$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__equals$<_TAnnotation>;
                }
                namespace number__not__equals {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__not__equals$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__not__equals$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__not__equals$<_TAnnotation>;
                }
                namespace greater__than {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$greater__than$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$greater__than$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$greater__than$<_TAnnotation>;
                }
                namespace less__than {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$less__than$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$less__than$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$less__than$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Boolean__Initialization$<_TAnnotation>;
            }
            namespace Numerical__Initialization {
                namespace minus {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization$minus$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization$minus$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$minus$<_TAnnotation>;
                }
                namespace plus {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization$plus$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization$plus$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$plus$<_TAnnotation>;
                }
                namespace predecrement {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$predecrement$<_TAnnotation>;
                }
                namespace preincrement {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$preincrement$<_TAnnotation>;
                }
                namespace postdecrement {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$postdecrement$<_TAnnotation>;
                }
                namespace postincrement {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$postincrement$<_TAnnotation>;
                }
                namespace numeric__literal {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$numeric__literal$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Numerical__Initialization$<_TAnnotation>;
            }
            namespace String__Initialization {
                namespace string__literal {
                    type $<_TAnnotation> = _IFlat.String__Initialization$string__literal$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.String__Initialization$<_TAnnotation>;
            }
            namespace Initialization {
                namespace array__literal {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$array__literal$definition$<_TAnnotation>;
                    }
                    namespace initialization {
                        namespace A {
                            type $<_TAnnotation> = _IFlat.Initialization$array__literal$initialization$A$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Initialization$array__literal$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$array__literal$<_TAnnotation>;
                }
                namespace array__map {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$array__map$definition$<_TAnnotation>;
                    }
                    namespace source {
                        type $<_TAnnotation> = _IFlat.Initialization$array__map$source$<_TAnnotation>;
                    }
                    namespace initialization {
                        type $<_TAnnotation> = _IFlat.Initialization$array__map$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$array__map$<_TAnnotation>;
                }
                namespace _lboolean {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$boolean$definition$<_TAnnotation>;
                    }
                    namespace initialization {
                        type $<_TAnnotation> = _IFlat.Initialization$boolean$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$boolean$<_TAnnotation>;
                }
                namespace change__context {
                    namespace source {
                        type $<_TAnnotation> = _IFlat.Initialization$change__context$source$<_TAnnotation>;
                    }
                    namespace initialization {
                        type $<_TAnnotation> = _IFlat.Initialization$change__context$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$change__context$<_TAnnotation>;
                }
                namespace dictionary__literal {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$dictionary__literal$definition$<_TAnnotation>;
                    }
                    namespace initialization {
                        namespace D {
                            type $<_TAnnotation> = _IFlat.Initialization$dictionary__literal$initialization$D$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Initialization$dictionary__literal$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$dictionary__literal$<_TAnnotation>;
                }
                namespace dictionary__map {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$dictionary__map$definition$<_TAnnotation>;
                    }
                    namespace source {
                        type $<_TAnnotation> = _IFlat.Initialization$dictionary__map$source$<_TAnnotation>;
                    }
                    namespace initialization {
                        type $<_TAnnotation> = _IFlat.Initialization$dictionary__map$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$dictionary__map$<_TAnnotation>;
                }
                namespace group__literal {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$group__literal$definition$<_TAnnotation>;
                    }
                    namespace properties {
                        namespace D {
                            type $<_TAnnotation> = _IFlat.Initialization$group__literal$properties$D$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Initialization$group__literal$properties$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$group__literal$<_TAnnotation>;
                }
                namespace implement__me {
                    type $<_TAnnotation> = _IFlat.Initialization$implement__me$<_TAnnotation>;
                }
                namespace _lnull {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$null$definition$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$null$<_TAnnotation>;
                }
                namespace numerical {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$numerical$definition$<_TAnnotation>;
                    }
                    namespace initialization {
                        type $<_TAnnotation> = _IFlat.Initialization$numerical$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$numerical$<_TAnnotation>;
                }
                namespace optional {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$optional$definition$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$optional$<_TAnnotation>;
                }
                namespace procedure {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$procedure$definition$<_TAnnotation>;
                    }
                    namespace temp__has__parameters {
                        namespace O {
                            type $<_TAnnotation> = _IFlat.Initialization$procedure$temp__has__parameters$O$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Initialization$procedure$temp__has__parameters$<_TAnnotation>;
                    }
                    namespace variables {
                        type $<_TAnnotation> = _IFlat.Initialization$procedure$variables$<_TAnnotation>;
                    }
                    namespace block {
                        type $<_TAnnotation> = _IFlat.Initialization$procedure$block$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$procedure$<_TAnnotation>;
                }
                namespace tagged__union__literal {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$tagged__union__literal$definition$<_TAnnotation>;
                    }
                    namespace state {
                        type $<_TAnnotation> = _IFlat.Initialization$tagged__union__literal$state$<_TAnnotation>;
                    }
                    namespace initialization {
                        type $<_TAnnotation> = _IFlat.Initialization$tagged__union__literal$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$tagged__union__literal$<_TAnnotation>;
                }
                namespace _lstring {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$string$definition$<_TAnnotation>;
                    }
                    namespace initialization {
                        type $<_TAnnotation> = _IFlat.Initialization$string$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$string$<_TAnnotation>;
                }
                namespace _lswitch {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$switch$definition$<_TAnnotation>;
                    }
                    namespace temp__type {
                        type $<_TAnnotation> = _IFlat.Initialization$switch$temp__type$<_TAnnotation>;
                    }
                    namespace source {
                        type $<_TAnnotation> = _IFlat.Initialization$switch$source$<_TAnnotation>;
                    }
                    namespace cases {
                        namespace D {
                            type $<_TAnnotation> = _IFlat.Initialization$switch$cases$D$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Initialization$switch$cases$<_TAnnotation>;
                    }
                    namespace _ldefault {
                        namespace O {
                            type $<_TAnnotation> = _IFlat.Initialization$switch$default$O$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Initialization$switch$default$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$switch$<_TAnnotation>;
                }
                namespace value__function {
                    namespace definition {
                        type $<_TAnnotation> = _IFlat.Initialization$value__function$definition$<_TAnnotation>;
                    }
                    namespace temp__has__parameters {
                        namespace O {
                            type $<_TAnnotation> = _IFlat.Initialization$value__function$temp__has__parameters$O$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Initialization$value__function$temp__has__parameters$<_TAnnotation>;
                    }
                    namespace variables {
                        type $<_TAnnotation> = _IFlat.Initialization$value__function$variables$<_TAnnotation>;
                    }
                    namespace initialization {
                        type $<_TAnnotation> = _IFlat.Initialization$value__function$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$value__function$<_TAnnotation>;
                }
                namespace variables {
                    namespace variables {
                        type $<_TAnnotation> = _IFlat.Initialization$variables$variables$<_TAnnotation>;
                    }
                    namespace initialization {
                        type $<_TAnnotation> = _IFlat.Initialization$variables$initialization$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$variables$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Initialization$<_TAnnotation>;
            }
            namespace Block {
                namespace variables {
                    type $<_TAnnotation> = _IFlat.Block$variables$<_TAnnotation>;
                }
                namespace statements {
                    type $<_TAnnotation> = _IFlat.Block$statements$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Block$<_TAnnotation>;
            }
            namespace Assign {
                namespace target {
                    type $<_TAnnotation> = _IFlat.Assign$target$<_TAnnotation>;
                }
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.Assign$initialization$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Assign$<_TAnnotation>;
            }
            namespace Statements {
                namespace A {
                    namespace block {
                        type $<_TAnnotation> = _IFlat.Statements$A$block$<_TAnnotation>;
                    }
                    namespace call {
                        namespace _lfunction {
                            type $<_TAnnotation> = _IFlat.Statements$A$call$function$<_TAnnotation>;
                        }
                        namespace context__definition {
                            type $<_TAnnotation> = _IFlat.Statements$A$call$context__definition$<_TAnnotation>;
                        }
                        namespace context {
                            type $<_TAnnotation> = _IFlat.Statements$A$call$context$<_TAnnotation>;
                        }
                        namespace _larguments {
                            namespace D {
                                type $<_TAnnotation> = _IFlat.Statements$A$call$arguments$D$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Statements$A$call$arguments$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Statements$A$call$<_TAnnotation>;
                    }
                    namespace change__context {
                        namespace source {
                            type $<_TAnnotation> = _IFlat.Statements$A$change__context$source$<_TAnnotation>;
                        }
                        namespace block {
                            type $<_TAnnotation> = _IFlat.Statements$A$change__context$block$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Statements$A$change__context$<_TAnnotation>;
                    }
                    namespace _lif {
                        namespace condition {
                            type $<_TAnnotation> = _IFlat.Statements$A$if$condition$<_TAnnotation>;
                        }
                        namespace then {
                            type $<_TAnnotation> = _IFlat.Statements$A$if$then$<_TAnnotation>;
                        }
                        namespace _lelse {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Statements$A$if$else$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Statements$A$if$else$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Statements$A$if$<_TAnnotation>;
                    }
                    namespace _lswitch {
                        namespace source {
                            type $<_TAnnotation> = _IFlat.Statements$A$switch$source$<_TAnnotation>;
                        }
                        namespace context__definition {
                            type $<_TAnnotation> = _IFlat.Statements$A$switch$context__definition$<_TAnnotation>;
                        }
                        namespace cases {
                            namespace D {
                                type $<_TAnnotation> = _IFlat.Statements$A$switch$cases$D$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Statements$A$switch$cases$<_TAnnotation>;
                        }
                        namespace _ldefault {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Statements$A$switch$default$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Statements$A$switch$default$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Statements$A$switch$<_TAnnotation>;
                    }
                    namespace _lwith {
                        namespace source {
                            type $<_TAnnotation> = _IFlat.Statements$A$with$source$<_TAnnotation>;
                        }
                        namespace action {
                            namespace assign {
                                type $<_TAnnotation> = _IFlat.Statements$A$with$action$assign$<_TAnnotation>;
                            }
                            namespace minus__assign {
                                namespace _lnumber {
                                    type $<_TAnnotation> = _IFlat.Statements$A$with$action$minus__assign$number$<_TAnnotation>;
                                }
                                namespace right__hand__side {
                                    type $<_TAnnotation> = _IFlat.Statements$A$with$action$minus__assign$right__hand__side$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Statements$A$with$action$minus__assign$<_TAnnotation>;
                            }
                            namespace plus__assign {
                                namespace _lnumber {
                                    type $<_TAnnotation> = _IFlat.Statements$A$with$action$plus__assign$number$<_TAnnotation>;
                                }
                                namespace right__hand__side {
                                    type $<_TAnnotation> = _IFlat.Statements$A$with$action$plus__assign$right__hand__side$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Statements$A$with$action$plus__assign$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Statements$A$with$action$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Statements$A$with$<_TAnnotation>;
                    }
                    namespace _lwhile {
                        namespace condition {
                            type $<_TAnnotation> = _IFlat.Statements$A$while$condition$<_TAnnotation>;
                        }
                        namespace block {
                            type $<_TAnnotation> = _IFlat.Statements$A$while$block$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Statements$A$while$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Statements$A$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Statements$<_TAnnotation>;
            }
            namespace Source__File {
                namespace _ltype {
                    type $<_TAnnotation> = _IFlat.Source__File$type$<_TAnnotation>;
                }
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.Source__File$initialization$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Source__File$<_TAnnotation>;
            }
            namespace Root {
                type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>;
            }
        }
    }
    namespace Resolved {
        namespace Flat {
            type Type__Selection$current__namespaceXXXXX$ = {
                readonly 'key': string;
                readonly 'referent': _Itypesystem.Resolved.Flat.Namespace$types$D$;
            };
            type Type__Selection$child__namespace$namespacex$ = {
                readonly 'key': string;
                readonly 'referent': _Itypesystem.Resolved.Flat.Namespace$namespaces$D$;
            };
            type Type__Selection$child__namespace$selection$ = Type__Selection$;
            type Type__Selection$child__namespace$ = {
                readonly 'namespacex': Type__Selection$child__namespace$namespacex$;
                readonly 'selection': Type__Selection$child__namespace$selection$;
            };
            type Type__Selection$ = ['child namespace', Type__Selection$child__namespace$] | ['current namespaceXXXXX', Type__Selection$current__namespaceXXXXX$];
            type Type__Arguments$D$type$ = Type__Selection$;
            type Type__Arguments$D$ = {
                readonly 'type': Type__Arguments$D$type$;
            };
            type Type__Arguments$ = _pt.Dictionary<Type__Arguments$D$>;
            type Local__Variables$D$type$ = Type__Selection$;
            type Local__Variables$D$initialization$ = Initialization$;
            type Local__Variables$D$ = {
                readonly 'initialization': Local__Variables$D$initialization$;
                readonly 'type': Local__Variables$D$type$;
            };
            type Local__Variables$ = _pt.Dictionary<Local__Variables$D$>;
            type Aggregated__Variable$type$variable__stack2$variable$ = {
                readonly 'key': string;
                readonly 'referent': Aggregated__Variable$;
            };
            type Aggregated__Variable$type$variable__stack2$ = {
                readonly 'variable': Aggregated__Variable$type$variable__stack2$variable$;
            };
            type Aggregated__Variable$type$local$ = null;
            type Aggregated__Variable$type$ = ['local', Aggregated__Variable$type$local$] | ['variable stack2', Aggregated__Variable$type$variable__stack2$];
            type Aggregated__Variable$ = {
                readonly 'type': Aggregated__Variable$type$;
            };
            type Aggregated__Variables$D$ = Aggregated__Variable$;
            type Aggregated__Variables$ = _pt.Dictionary<Aggregated__Variables$D$>;
            type Variables$local$ = Local__Variables$;
            type Variables$aggregated$ = Aggregated__Variables$;
            type Variables$ = {
                readonly 'aggregated': Variables$aggregated$;
                readonly 'local': Variables$local$;
            };
            type Target__Selection__Tail$O$step$property$group$ = _Itypesystem.Resolved.Flat.Type$group$;
            type Target__Selection__Tail$O$step$property$property$ = {
                readonly 'key': string;
                readonly 'referent': _Itypesystem.Resolved.Flat.Type$group$D$;
            };
            type Target__Selection__Tail$O$step$property$ = {
                readonly 'group': Target__Selection__Tail$O$step$property$group$;
                readonly 'property': Target__Selection__Tail$O$step$property$property$;
            };
            type Target__Selection__Tail$O$step$ = ['property', Target__Selection__Tail$O$step$property$];
            type Target__Selection__Tail$O$tail$ = Target__Selection__Tail$;
            type Target__Selection__Tail$O$ = {
                readonly 'step': Target__Selection__Tail$O$step$;
                readonly 'tail': Target__Selection__Tail$O$tail$;
            };
            type Target__Selection__Tail$ = _pt.OptionalValue<Target__Selection__Tail$O$>;
            type Target__Selection$variable$ = {
                readonly 'key': string;
                readonly 'referent': Aggregated__Variables$D$;
            };
            type Target__Selection$tail$ = Target__Selection__Tail$;
            type Target__Selection$ = {
                readonly 'tail': Target__Selection$tail$;
                readonly 'variable': Target__Selection$variable$;
            };
            type Source__Selection__Tail$O$step$call$address__function$ = _Itypesystem.Resolved.Flat.Type$address__function$;
            type Source__Selection__Tail$O$step$call$type__arguments$ = Type__Arguments$;
            type Source__Selection__Tail$O$step$call$context$ = Initialization__Or__Selection$;
            type Source__Selection__Tail$O$step$call$arguments$D$ = Initialization__Or__Selection$;
            type Source__Selection__Tail$O$step$call$arguments$ = _pt.Dictionary<Source__Selection__Tail$O$step$call$arguments$D$>;
            type Source__Selection__Tail$O$step$call$ = {
                readonly 'address function': Source__Selection__Tail$O$step$call$address__function$;
                readonly 'arguments': Source__Selection__Tail$O$step$call$arguments$;
                readonly 'context': Source__Selection__Tail$O$step$call$context$;
                readonly 'type arguments': Source__Selection__Tail$O$step$call$type__arguments$;
            };
            type Source__Selection__Tail$O$step$property$group$ = _Itypesystem.Resolved.Flat.Type$group$;
            type Source__Selection__Tail$O$step$property$property$ = {
                readonly 'key': string;
                readonly 'referent': _Itypesystem.Resolved.Flat.Type$group$D$;
            };
            type Source__Selection__Tail$O$step$property$ = {
                readonly 'group': Source__Selection__Tail$O$step$property$group$;
                readonly 'property': Source__Selection__Tail$O$step$property$property$;
            };
            type Source__Selection__Tail$O$step$ = ['call', Source__Selection__Tail$O$step$call$] | ['property', Source__Selection__Tail$O$step$property$];
            type Source__Selection__Tail$O$tail$ = Source__Selection__Tail$;
            type Source__Selection__Tail$O$ = {
                readonly 'step': Source__Selection__Tail$O$step$;
                readonly 'tail': Source__Selection__Tail$O$tail$;
            };
            type Source__Selection__Tail$ = _pt.OptionalValue<Source__Selection__Tail$O$>;
            type Source__Selection$start$context$ = null;
            type Source__Selection$start$variable$ = {
                readonly 'key': string;
                readonly 'referent': Aggregated__Variables$D$;
            };
            type Source__Selection$start$ = ['context', Source__Selection$start$context$] | ['variable', Source__Selection$start$variable$];
            type Source__Selection$tail$ = Source__Selection__Tail$;
            type Source__Selection$ = {
                readonly 'start': Source__Selection$start$;
                readonly 'tail': Source__Selection$tail$;
            };
            type Initialization__Or__Selection$initialization$ = Initialization$;
            type Initialization__Or__Selection$selection$selection$ = Source__Selection$;
            type Initialization__Or__Selection$selection$ = {
                readonly 'selection': Initialization__Or__Selection$selection$selection$;
            };
            type Initialization__Or__Selection$ = ['initialization', Initialization__Or__Selection$initialization$] | ['selection', Initialization__Or__Selection$selection$];
            type String__Initialization__Or__Selection$initialization$ = String__Initialization$;
            type String__Initialization__Or__Selection$selection$selection$ = Source__Selection$;
            type String__Initialization__Or__Selection$selection$string$ = _Itypesystem.Resolved.Flat.Type$string$;
            type String__Initialization__Or__Selection$selection$ = {
                readonly 'selection': String__Initialization__Or__Selection$selection$selection$;
                readonly 'string': String__Initialization__Or__Selection$selection$string$;
            };
            type String__Initialization__Or__Selection$ = ['initialization', String__Initialization__Or__Selection$initialization$] | ['selection', String__Initialization__Or__Selection$selection$];
            type Numerical__Initialization__Or__Selection$initialization$ = Numerical__Initialization$;
            type Numerical__Initialization__Or__Selection$selection$selection$ = Source__Selection$;
            type Numerical__Initialization__Or__Selection$selection$number$ = _Itypesystem.Resolved.Flat.Type$number$;
            type Numerical__Initialization__Or__Selection$selection$ = {
                readonly 'number': Numerical__Initialization__Or__Selection$selection$number$;
                readonly 'selection': Numerical__Initialization__Or__Selection$selection$selection$;
            };
            type Numerical__Initialization__Or__Selection$ = ['initialization', Numerical__Initialization__Or__Selection$initialization$] | ['selection', Numerical__Initialization__Or__Selection$selection$];
            type Boolean__Initialization__Or__Selection$initialization$ = Boolean__Initialization$;
            type Boolean__Initialization__Or__Selection$selection$selection$ = Source__Selection$;
            type Boolean__Initialization__Or__Selection$selection$boolean$ = _Itypesystem.Resolved.Flat.Type$boolean$;
            type Boolean__Initialization__Or__Selection$selection$ = {
                readonly 'boolean': Boolean__Initialization__Or__Selection$selection$boolean$;
                readonly 'selection': Boolean__Initialization__Or__Selection$selection$selection$;
            };
            type Boolean__Initialization__Or__Selection$ = ['initialization', Boolean__Initialization__Or__Selection$initialization$] | ['selection', Boolean__Initialization__Or__Selection$selection$];
            type Boolean__Initialization$and$left__hand__side$ = Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization$and$right__hand__side$ = Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization$and$ = {
                readonly 'left hand side': Boolean__Initialization$and$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$and$right__hand__side$;
            };
            type Boolean__Initialization$or$left__hand__side$ = Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization$or$right__hand__side$ = Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization$or$ = {
                readonly 'left hand side': Boolean__Initialization$or$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$or$right__hand__side$;
            };
            type Boolean__Initialization$false$ = null;
            type Boolean__Initialization$not$ = Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization$true$ = null;
            type Boolean__Initialization$string__equals$left__hand__side$ = String__Initialization__Or__Selection$;
            type Boolean__Initialization$string__equals$right__hand__side$ = String__Initialization__Or__Selection$;
            type Boolean__Initialization$string__equals$ = {
                readonly 'left hand side': Boolean__Initialization$string__equals$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$string__equals$right__hand__side$;
            };
            type Boolean__Initialization$string__not__equals$left__hand__side$ = String__Initialization__Or__Selection$;
            type Boolean__Initialization$string__not__equals$right__hand__side$ = String__Initialization__Or__Selection$;
            type Boolean__Initialization$string__not__equals$ = {
                readonly 'left hand side': Boolean__Initialization$string__not__equals$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$string__not__equals$right__hand__side$;
            };
            type Boolean__Initialization$number__equals$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$number__equals$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$number__equals$ = {
                readonly 'left hand side': Boolean__Initialization$number__equals$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$number__equals$right__hand__side$;
            };
            type Boolean__Initialization$number__not__equals$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$number__not__equals$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$number__not__equals$ = {
                readonly 'left hand side': Boolean__Initialization$number__not__equals$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$number__not__equals$right__hand__side$;
            };
            type Boolean__Initialization$greater__than$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$greater__than$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$greater__than$ = {
                readonly 'left hand side': Boolean__Initialization$greater__than$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$greater__than$right__hand__side$;
            };
            type Boolean__Initialization$less__than$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$less__than$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$less__than$ = {
                readonly 'left hand side': Boolean__Initialization$less__than$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$less__than$right__hand__side$;
            };
            type Boolean__Initialization$ = ['and', Boolean__Initialization$and$] | ['false', Boolean__Initialization$false$] | ['greater than', Boolean__Initialization$greater__than$] | ['less than', Boolean__Initialization$less__than$] | ['not', Boolean__Initialization$not$] | ['number equals', Boolean__Initialization$number__equals$] | ['number not equals', Boolean__Initialization$number__not__equals$] | ['or', Boolean__Initialization$or$] | ['string equals', Boolean__Initialization$string__equals$] | ['string not equals', Boolean__Initialization$string__not__equals$] | ['true', Boolean__Initialization$true$];
            type Numerical__Initialization$minus$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$minus$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$minus$ = {
                readonly 'left hand side': Numerical__Initialization$minus$left__hand__side$;
                readonly 'right hand side': Numerical__Initialization$minus$right__hand__side$;
            };
            type Numerical__Initialization$plus$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$plus$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$plus$ = {
                readonly 'left hand side': Numerical__Initialization$plus$left__hand__side$;
                readonly 'right hand side': Numerical__Initialization$plus$right__hand__side$;
            };
            type Numerical__Initialization$predecrement$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$preincrement$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$postdecrement$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$postincrement$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$numeric__literal$ = number;
            type Numerical__Initialization$ = ['minus', Numerical__Initialization$minus$] | ['numeric literal', Numerical__Initialization$numeric__literal$] | ['plus', Numerical__Initialization$plus$] | ['postdecrement', Numerical__Initialization$postdecrement$] | ['postincrement', Numerical__Initialization$postincrement$] | ['predecrement', Numerical__Initialization$predecrement$] | ['preincrement', Numerical__Initialization$preincrement$];
            type String__Initialization$string__literal$ = string;
            type String__Initialization$ = ['string literal', String__Initialization$string__literal$];
            type Initialization$array__literal$definition$ = _Itypesystem.Resolved.Flat.Type$array$;
            type Initialization$array__literal$initialization$A$ = Initialization__Or__Selection$;
            type Initialization$array__literal$initialization$ = _pt.Array<Initialization$array__literal$initialization$A$>;
            type Initialization$array__literal$ = {
                readonly 'definition': Initialization$array__literal$definition$;
                readonly 'initialization': Initialization$array__literal$initialization$;
            };
            type Initialization$array__map$definition$ = _Itypesystem.Resolved.Flat.Type$array$;
            type Initialization$array__map$source$ = Source__Selection$;
            type Initialization$array__map$initialization$ = Initialization__Or__Selection$;
            type Initialization$array__map$ = {
                readonly 'definition': Initialization$array__map$definition$;
                readonly 'initialization': Initialization$array__map$initialization$;
                readonly 'source': Initialization$array__map$source$;
            };
            type Initialization$boolean$definition$ = _Itypesystem.Resolved.Flat.Type$boolean$;
            type Initialization$boolean$initialization$ = Boolean__Initialization$;
            type Initialization$boolean$ = {
                readonly 'definition': Initialization$boolean$definition$;
                readonly 'initialization': Initialization$boolean$initialization$;
            };
            type Initialization$change__context$source$ = Source__Selection$;
            type Initialization$change__context$initialization$ = Initialization__Or__Selection$;
            type Initialization$change__context$ = {
                readonly 'initialization': Initialization$change__context$initialization$;
                readonly 'source': Initialization$change__context$source$;
            };
            type Initialization$dictionary__literal$definition$ = _Itypesystem.Resolved.Flat.Type$dictionary$;
            type Initialization$dictionary__literal$initialization$D$ = Initialization__Or__Selection$;
            type Initialization$dictionary__literal$initialization$ = _pt.Dictionary<Initialization$dictionary__literal$initialization$D$>;
            type Initialization$dictionary__literal$ = {
                readonly 'definition': Initialization$dictionary__literal$definition$;
                readonly 'initialization': Initialization$dictionary__literal$initialization$;
            };
            type Initialization$dictionary__map$definition$ = _Itypesystem.Resolved.Flat.Type$dictionary$;
            type Initialization$dictionary__map$source$ = Source__Selection$;
            type Initialization$dictionary__map$initialization$ = Initialization__Or__Selection$;
            type Initialization$dictionary__map$ = {
                readonly 'definition': Initialization$dictionary__map$definition$;
                readonly 'initialization': Initialization$dictionary__map$initialization$;
                readonly 'source': Initialization$dictionary__map$source$;
            };
            type Initialization$group__literal$definition$ = _Itypesystem.Resolved.Flat.Type$group$;
            type Initialization$group__literal$properties$D$ = Initialization__Or__Selection$;
            type Initialization$group__literal$properties$ = _pt.Dictionary<Initialization$group__literal$properties$D$>;
            type Initialization$group__literal$ = {
                readonly 'definition': Initialization$group__literal$definition$;
                readonly 'properties': Initialization$group__literal$properties$;
            };
            type Initialization$implement__me$ = string;
            type Initialization$null$definition$ = _Itypesystem.Resolved.Flat.Type$null$;
            type Initialization$null$ = {
                readonly 'definition': Initialization$null$definition$;
            };
            type Initialization$numerical$definition$ = _Itypesystem.Resolved.Flat.Type$number$;
            type Initialization$numerical$initialization$ = Numerical__Initialization$;
            type Initialization$numerical$ = {
                readonly 'definition': Initialization$numerical$definition$;
                readonly 'initialization': Initialization$numerical$initialization$;
            };
            type Initialization$optional$definition$ = _Itypesystem.Resolved.Flat.Type$optional$;
            type Initialization$optional$ = {
                readonly 'definition': Initialization$optional$definition$;
            };
            type Initialization$procedure$definition$ = _Itypesystem.Resolved.Flat.Type$procedure$;
            type Initialization$procedure$temp__has__parameters$O$ = null;
            type Initialization$procedure$temp__has__parameters$ = _pt.OptionalValue<Initialization$procedure$temp__has__parameters$O$>;
            type Initialization$procedure$variables$ = Aggregated__Variables$;
            type Initialization$procedure$block$ = Block$;
            type Initialization$procedure$ = {
                readonly 'block': Initialization$procedure$block$;
                readonly 'definition': Initialization$procedure$definition$;
                readonly 'temp has parameters': Initialization$procedure$temp__has__parameters$;
                readonly 'variables': Initialization$procedure$variables$;
            };
            type Initialization$tagged__union__literal$definition$ = _Itypesystem.Resolved.Flat.Type$tagged__union$;
            type Initialization$tagged__union__literal$state$ = {
                readonly 'key': string;
                readonly 'referent': _Itypesystem.Resolved.Flat.Type$tagged__union$D$;
            };
            type Initialization$tagged__union__literal$initialization$ = Initialization__Or__Selection$;
            type Initialization$tagged__union__literal$ = {
                readonly 'definition': Initialization$tagged__union__literal$definition$;
                readonly 'initialization': Initialization$tagged__union__literal$initialization$;
                readonly 'state': Initialization$tagged__union__literal$state$;
            };
            type Initialization$string$definition$ = _Itypesystem.Resolved.Flat.Type$string$;
            type Initialization$string$initialization$ = String__Initialization$;
            type Initialization$string$ = {
                readonly 'definition': Initialization$string$definition$;
                readonly 'initialization': Initialization$string$initialization$;
            };
            type Initialization$switch$definition$ = _Itypesystem.Resolved.Flat.Type$tagged__union$;
            type Initialization$switch$temp__type$ = Type__Selection$;
            type Initialization$switch$source$ = Source__Selection$;
            type Initialization$switch$cases$D$ = Initialization__Or__Selection$;
            type Initialization$switch$cases$ = _pt.Dictionary<Initialization$switch$cases$D$>;
            type Initialization$switch$default$O$ = Initialization__Or__Selection$;
            type Initialization$switch$default$ = _pt.OptionalValue<Initialization$switch$default$O$>;
            type Initialization$switch$ = {
                readonly 'cases': Initialization$switch$cases$;
                readonly 'default': Initialization$switch$default$;
                readonly 'definition': Initialization$switch$definition$;
                readonly 'source': Initialization$switch$source$;
                readonly 'temp type': Initialization$switch$temp__type$;
            };
            type Initialization$value__function$definition$ = _Itypesystem.Resolved.Flat.Type$procedure$;
            type Initialization$value__function$temp__has__parameters$O$ = null;
            type Initialization$value__function$temp__has__parameters$ = _pt.OptionalValue<Initialization$value__function$temp__has__parameters$O$>;
            type Initialization$value__function$variables$ = Aggregated__Variables$;
            type Initialization$value__function$initialization$ = Initialization__Or__Selection$;
            type Initialization$value__function$ = {
                readonly 'definition': Initialization$value__function$definition$;
                readonly 'initialization': Initialization$value__function$initialization$;
                readonly 'temp has parameters': Initialization$value__function$temp__has__parameters$;
                readonly 'variables': Initialization$value__function$variables$;
            };
            type Initialization$variables$variables$ = Variables$;
            type Initialization$variables$initialization$ = Initialization__Or__Selection$;
            type Initialization$variables$ = {
                readonly 'initialization': Initialization$variables$initialization$;
                readonly 'variables': Initialization$variables$variables$;
            };
            type Initialization$ = ['array literal', Initialization$array__literal$] | ['array map', Initialization$array__map$] | ['boolean', Initialization$boolean$] | ['change context', Initialization$change__context$] | ['dictionary literal', Initialization$dictionary__literal$] | ['dictionary map', Initialization$dictionary__map$] | ['group literal', Initialization$group__literal$] | ['implement me', Initialization$implement__me$] | ['null', Initialization$null$] | ['numerical', Initialization$numerical$] | ['optional', Initialization$optional$] | ['procedure', Initialization$procedure$] | ['string', Initialization$string$] | ['switch', Initialization$switch$] | ['tagged union literal', Initialization$tagged__union__literal$] | ['value function', Initialization$value__function$] | ['variables', Initialization$variables$];
            type Block$variables$ = Variables$;
            type Block$statements$ = Statements$;
            type Block$ = {
                readonly 'statements': Block$statements$;
                readonly 'variables': Block$variables$;
            };
            type Assign$target$ = Target__Selection$;
            type Assign$initialization$ = Initialization__Or__Selection$;
            type Assign$ = {
                readonly 'initialization': Assign$initialization$;
                readonly 'target': Assign$target$;
            };
            type Statements$A$block$ = Block$;
            type Statements$A$call$function$ = Source__Selection$;
            type Statements$A$call$context__definition$ = _Itypesystem.Resolved.Flat.Type$procedure$;
            type Statements$A$call$context$ = Source__Selection$;
            type Statements$A$call$arguments$D$ = Initialization__Or__Selection$;
            type Statements$A$call$arguments$ = _pt.Dictionary<Statements$A$call$arguments$D$>;
            type Statements$A$call$ = {
                readonly 'arguments': Statements$A$call$arguments$;
                readonly 'context': Statements$A$call$context$;
                readonly 'context definition': Statements$A$call$context__definition$;
                readonly 'function': Statements$A$call$function$;
            };
            type Statements$A$change__context$source$ = Source__Selection$;
            type Statements$A$change__context$block$ = Block$;
            type Statements$A$change__context$ = {
                readonly 'block': Statements$A$change__context$block$;
                readonly 'source': Statements$A$change__context$source$;
            };
            type Statements$A$if$condition$ = Boolean__Initialization__Or__Selection$;
            type Statements$A$if$then$ = Block$;
            type Statements$A$if$else$O$ = Block$;
            type Statements$A$if$else$ = _pt.OptionalValue<Statements$A$if$else$O$>;
            type Statements$A$if$ = {
                readonly 'condition': Statements$A$if$condition$;
                readonly 'else': Statements$A$if$else$;
                readonly 'then': Statements$A$if$then$;
            };
            type Statements$A$switch$source$ = Source__Selection$;
            type Statements$A$switch$context__definition$ = _Itypesystem.Resolved.Flat.Type$tagged__union$;
            type Statements$A$switch$cases$D$ = Block$;
            type Statements$A$switch$cases$ = _pt.Dictionary<Statements$A$switch$cases$D$>;
            type Statements$A$switch$default$O$ = Block$;
            type Statements$A$switch$default$ = _pt.OptionalValue<Statements$A$switch$default$O$>;
            type Statements$A$switch$ = {
                readonly 'cases': Statements$A$switch$cases$;
                readonly 'context definition': Statements$A$switch$context__definition$;
                readonly 'default': Statements$A$switch$default$;
                readonly 'source': Statements$A$switch$source$;
            };
            type Statements$A$with$source$ = Source__Selection$;
            type Statements$A$with$action$assign$ = Assign$;
            type Statements$A$with$action$minus__assign$number$ = _Itypesystem.Resolved.Flat.Type$number$;
            type Statements$A$with$action$minus__assign$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Statements$A$with$action$minus__assign$ = {
                readonly 'number': Statements$A$with$action$minus__assign$number$;
                readonly 'right hand side': Statements$A$with$action$minus__assign$right__hand__side$;
            };
            type Statements$A$with$action$plus__assign$number$ = _Itypesystem.Resolved.Flat.Type$number$;
            type Statements$A$with$action$plus__assign$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Statements$A$with$action$plus__assign$ = {
                readonly 'number': Statements$A$with$action$plus__assign$number$;
                readonly 'right hand side': Statements$A$with$action$plus__assign$right__hand__side$;
            };
            type Statements$A$with$action$ = ['assign', Statements$A$with$action$assign$] | ['minus assign', Statements$A$with$action$minus__assign$] | ['plus assign', Statements$A$with$action$plus__assign$];
            type Statements$A$with$ = {
                readonly 'action': Statements$A$with$action$;
                readonly 'source': Statements$A$with$source$;
            };
            type Statements$A$while$condition$ = Boolean__Initialization__Or__Selection$;
            type Statements$A$while$block$ = Block$;
            type Statements$A$while$ = {
                readonly 'block': Statements$A$while$block$;
                readonly 'condition': Statements$A$while$condition$;
            };
            type Statements$A$ = ['block', Statements$A$block$] | ['call', Statements$A$call$] | ['change context', Statements$A$change__context$] | ['if', Statements$A$if$] | ['switch', Statements$A$switch$] | ['while', Statements$A$while$] | ['with', Statements$A$with$];
            type Statements$ = _pt.Array<Statements$A$>;
            type Source__File$type$ = Type__Selection$;
            type Source__File$initialization$ = Initialization$;
            type Source__File$ = {
                readonly 'initialization': Source__File$initialization$;
                readonly 'type': Source__File$type$;
            };
            type Root$ = Source__File$;
        }
        namespace T {
            import _IFlat = Flat;
            namespace TType__Selection {
                namespace current__namespaceXXXXX {
                    type $ = _IFlat.Type__Selection$current__namespaceXXXXX$;
                }
                namespace child__namespace {
                    namespace namespacex {
                        type $ = _IFlat.Type__Selection$child__namespace$namespacex$;
                    }
                    namespace selection {
                        type $ = _IFlat.Type__Selection$child__namespace$selection$;
                    }
                    type $ = _IFlat.Type__Selection$child__namespace$;
                }
                type $ = _IFlat.Type__Selection$;
            }
            namespace TType__Arguments {
                namespace D {
                    namespace _ltype {
                        type $ = _IFlat.Type__Arguments$D$type$;
                    }
                    type $ = _IFlat.Type__Arguments$D$;
                }
                type $ = _IFlat.Type__Arguments$;
            }
            namespace Local__Variables {
                namespace D {
                    namespace _ltype {
                        type $ = _IFlat.Local__Variables$D$type$;
                    }
                    namespace initialization {
                        type $ = _IFlat.Local__Variables$D$initialization$;
                    }
                    type $ = _IFlat.Local__Variables$D$;
                }
                type $ = _IFlat.Local__Variables$;
            }
            namespace Aggregated__Variable {
                namespace _ltype {
                    namespace variable__stack2 {
                        namespace variable {
                            type $ = _IFlat.Aggregated__Variable$type$variable__stack2$variable$;
                        }
                        type $ = _IFlat.Aggregated__Variable$type$variable__stack2$;
                    }
                    namespace local {
                        type $ = _IFlat.Aggregated__Variable$type$local$;
                    }
                    type $ = _IFlat.Aggregated__Variable$type$;
                }
                type $ = _IFlat.Aggregated__Variable$;
            }
            namespace Aggregated__Variables {
                namespace D {
                    type $ = _IFlat.Aggregated__Variables$D$;
                }
                type $ = _IFlat.Aggregated__Variables$;
            }
            namespace Variables {
                namespace local {
                    type $ = _IFlat.Variables$local$;
                }
                namespace aggregated {
                    type $ = _IFlat.Variables$aggregated$;
                }
                type $ = _IFlat.Variables$;
            }
            namespace TTarget__Selection__Tail {
                namespace O {
                    namespace step {
                        namespace property {
                            namespace group {
                                type $ = _IFlat.Target__Selection__Tail$O$step$property$group$;
                            }
                            namespace property {
                                type $ = _IFlat.Target__Selection__Tail$O$step$property$property$;
                            }
                            type $ = _IFlat.Target__Selection__Tail$O$step$property$;
                        }
                        type $ = _IFlat.Target__Selection__Tail$O$step$;
                    }
                    namespace tail {
                        type $ = _IFlat.Target__Selection__Tail$O$tail$;
                    }
                    type $ = _IFlat.Target__Selection__Tail$O$;
                }
                type $ = _IFlat.Target__Selection__Tail$;
            }
            namespace TTarget__Selection {
                namespace variable {
                    type $ = _IFlat.Target__Selection$variable$;
                }
                namespace tail {
                    type $ = _IFlat.Target__Selection$tail$;
                }
                type $ = _IFlat.Target__Selection$;
            }
            namespace Source__Selection__Tail {
                namespace O {
                    namespace step {
                        namespace call {
                            namespace address__function {
                                type $ = _IFlat.Source__Selection__Tail$O$step$call$address__function$;
                            }
                            namespace type__arguments {
                                type $ = _IFlat.Source__Selection__Tail$O$step$call$type__arguments$;
                            }
                            namespace context {
                                type $ = _IFlat.Source__Selection__Tail$O$step$call$context$;
                            }
                            namespace _larguments {
                                namespace D {
                                    type $ = _IFlat.Source__Selection__Tail$O$step$call$arguments$D$;
                                }
                                type $ = _IFlat.Source__Selection__Tail$O$step$call$arguments$;
                            }
                            type $ = _IFlat.Source__Selection__Tail$O$step$call$;
                        }
                        namespace property {
                            namespace group {
                                type $ = _IFlat.Source__Selection__Tail$O$step$property$group$;
                            }
                            namespace property {
                                type $ = _IFlat.Source__Selection__Tail$O$step$property$property$;
                            }
                            type $ = _IFlat.Source__Selection__Tail$O$step$property$;
                        }
                        type $ = _IFlat.Source__Selection__Tail$O$step$;
                    }
                    namespace tail {
                        type $ = _IFlat.Source__Selection__Tail$O$tail$;
                    }
                    type $ = _IFlat.Source__Selection__Tail$O$;
                }
                type $ = _IFlat.Source__Selection__Tail$;
            }
            namespace Source__Selection {
                namespace start {
                    namespace context {
                        type $ = _IFlat.Source__Selection$start$context$;
                    }
                    namespace variable {
                        type $ = _IFlat.Source__Selection$start$variable$;
                    }
                    type $ = _IFlat.Source__Selection$start$;
                }
                namespace tail {
                    type $ = _IFlat.Source__Selection$tail$;
                }
                type $ = _IFlat.Source__Selection$;
            }
            namespace Initialization__Or__Selection {
                namespace initialization {
                    type $ = _IFlat.Initialization__Or__Selection$initialization$;
                }
                namespace selection {
                    namespace selection {
                        type $ = _IFlat.Initialization__Or__Selection$selection$selection$;
                    }
                    type $ = _IFlat.Initialization__Or__Selection$selection$;
                }
                type $ = _IFlat.Initialization__Or__Selection$;
            }
            namespace String__Initialization__Or__Selection {
                namespace initialization {
                    type $ = _IFlat.String__Initialization__Or__Selection$initialization$;
                }
                namespace selection {
                    namespace selection {
                        type $ = _IFlat.String__Initialization__Or__Selection$selection$selection$;
                    }
                    namespace _lstring {
                        type $ = _IFlat.String__Initialization__Or__Selection$selection$string$;
                    }
                    type $ = _IFlat.String__Initialization__Or__Selection$selection$;
                }
                type $ = _IFlat.String__Initialization__Or__Selection$;
            }
            namespace Numerical__Initialization__Or__Selection {
                namespace initialization {
                    type $ = _IFlat.Numerical__Initialization__Or__Selection$initialization$;
                }
                namespace selection {
                    namespace selection {
                        type $ = _IFlat.Numerical__Initialization__Or__Selection$selection$selection$;
                    }
                    namespace _lnumber {
                        type $ = _IFlat.Numerical__Initialization__Or__Selection$selection$number$;
                    }
                    type $ = _IFlat.Numerical__Initialization__Or__Selection$selection$;
                }
                type $ = _IFlat.Numerical__Initialization__Or__Selection$;
            }
            namespace Boolean__Initialization__Or__Selection {
                namespace initialization {
                    type $ = _IFlat.Boolean__Initialization__Or__Selection$initialization$;
                }
                namespace selection {
                    namespace selection {
                        type $ = _IFlat.Boolean__Initialization__Or__Selection$selection$selection$;
                    }
                    namespace _lboolean {
                        type $ = _IFlat.Boolean__Initialization__Or__Selection$selection$boolean$;
                    }
                    type $ = _IFlat.Boolean__Initialization__Or__Selection$selection$;
                }
                type $ = _IFlat.Boolean__Initialization__Or__Selection$;
            }
            namespace Boolean__Initialization {
                namespace and {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$and$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$and$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$and$;
                }
                namespace or {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$or$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$or$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$or$;
                }
                namespace _lfalse {
                    type $ = _IFlat.Boolean__Initialization$false$;
                }
                namespace not {
                    type $ = _IFlat.Boolean__Initialization$not$;
                }
                namespace _ltrue {
                    type $ = _IFlat.Boolean__Initialization$true$;
                }
                namespace string__equals {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$string__equals$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$string__equals$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$string__equals$;
                }
                namespace string__not__equals {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$string__not__equals$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$string__not__equals$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$string__not__equals$;
                }
                namespace number__equals {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$number__equals$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$number__equals$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$number__equals$;
                }
                namespace number__not__equals {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$number__not__equals$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$number__not__equals$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$number__not__equals$;
                }
                namespace greater__than {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$greater__than$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$greater__than$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$greater__than$;
                }
                namespace less__than {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$less__than$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$less__than$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$less__than$;
                }
                type $ = _IFlat.Boolean__Initialization$;
            }
            namespace Numerical__Initialization {
                namespace minus {
                    namespace left__hand__side {
                        type $ = _IFlat.Numerical__Initialization$minus$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Numerical__Initialization$minus$right__hand__side$;
                    }
                    type $ = _IFlat.Numerical__Initialization$minus$;
                }
                namespace plus {
                    namespace left__hand__side {
                        type $ = _IFlat.Numerical__Initialization$plus$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Numerical__Initialization$plus$right__hand__side$;
                    }
                    type $ = _IFlat.Numerical__Initialization$plus$;
                }
                namespace predecrement {
                    type $ = _IFlat.Numerical__Initialization$predecrement$;
                }
                namespace preincrement {
                    type $ = _IFlat.Numerical__Initialization$preincrement$;
                }
                namespace postdecrement {
                    type $ = _IFlat.Numerical__Initialization$postdecrement$;
                }
                namespace postincrement {
                    type $ = _IFlat.Numerical__Initialization$postincrement$;
                }
                namespace numeric__literal {
                    type $ = _IFlat.Numerical__Initialization$numeric__literal$;
                }
                type $ = _IFlat.Numerical__Initialization$;
            }
            namespace String__Initialization {
                namespace string__literal {
                    type $ = _IFlat.String__Initialization$string__literal$;
                }
                type $ = _IFlat.String__Initialization$;
            }
            namespace Initialization {
                namespace array__literal {
                    namespace definition {
                        type $ = _IFlat.Initialization$array__literal$definition$;
                    }
                    namespace initialization {
                        namespace A {
                            type $ = _IFlat.Initialization$array__literal$initialization$A$;
                        }
                        type $ = _IFlat.Initialization$array__literal$initialization$;
                    }
                    type $ = _IFlat.Initialization$array__literal$;
                }
                namespace array__map {
                    namespace definition {
                        type $ = _IFlat.Initialization$array__map$definition$;
                    }
                    namespace source {
                        type $ = _IFlat.Initialization$array__map$source$;
                    }
                    namespace initialization {
                        type $ = _IFlat.Initialization$array__map$initialization$;
                    }
                    type $ = _IFlat.Initialization$array__map$;
                }
                namespace _lboolean {
                    namespace definition {
                        type $ = _IFlat.Initialization$boolean$definition$;
                    }
                    namespace initialization {
                        type $ = _IFlat.Initialization$boolean$initialization$;
                    }
                    type $ = _IFlat.Initialization$boolean$;
                }
                namespace change__context {
                    namespace source {
                        type $ = _IFlat.Initialization$change__context$source$;
                    }
                    namespace initialization {
                        type $ = _IFlat.Initialization$change__context$initialization$;
                    }
                    type $ = _IFlat.Initialization$change__context$;
                }
                namespace dictionary__literal {
                    namespace definition {
                        type $ = _IFlat.Initialization$dictionary__literal$definition$;
                    }
                    namespace initialization {
                        namespace D {
                            type $ = _IFlat.Initialization$dictionary__literal$initialization$D$;
                        }
                        type $ = _IFlat.Initialization$dictionary__literal$initialization$;
                    }
                    type $ = _IFlat.Initialization$dictionary__literal$;
                }
                namespace dictionary__map {
                    namespace definition {
                        type $ = _IFlat.Initialization$dictionary__map$definition$;
                    }
                    namespace source {
                        type $ = _IFlat.Initialization$dictionary__map$source$;
                    }
                    namespace initialization {
                        type $ = _IFlat.Initialization$dictionary__map$initialization$;
                    }
                    type $ = _IFlat.Initialization$dictionary__map$;
                }
                namespace group__literal {
                    namespace definition {
                        type $ = _IFlat.Initialization$group__literal$definition$;
                    }
                    namespace properties {
                        namespace D {
                            type $ = _IFlat.Initialization$group__literal$properties$D$;
                        }
                        type $ = _IFlat.Initialization$group__literal$properties$;
                    }
                    type $ = _IFlat.Initialization$group__literal$;
                }
                namespace implement__me {
                    type $ = _IFlat.Initialization$implement__me$;
                }
                namespace _lnull {
                    namespace definition {
                        type $ = _IFlat.Initialization$null$definition$;
                    }
                    type $ = _IFlat.Initialization$null$;
                }
                namespace numerical {
                    namespace definition {
                        type $ = _IFlat.Initialization$numerical$definition$;
                    }
                    namespace initialization {
                        type $ = _IFlat.Initialization$numerical$initialization$;
                    }
                    type $ = _IFlat.Initialization$numerical$;
                }
                namespace optional {
                    namespace definition {
                        type $ = _IFlat.Initialization$optional$definition$;
                    }
                    type $ = _IFlat.Initialization$optional$;
                }
                namespace procedure {
                    namespace definition {
                        type $ = _IFlat.Initialization$procedure$definition$;
                    }
                    namespace temp__has__parameters {
                        namespace O {
                            type $ = _IFlat.Initialization$procedure$temp__has__parameters$O$;
                        }
                        type $ = _IFlat.Initialization$procedure$temp__has__parameters$;
                    }
                    namespace variables {
                        type $ = _IFlat.Initialization$procedure$variables$;
                    }
                    namespace block {
                        type $ = _IFlat.Initialization$procedure$block$;
                    }
                    type $ = _IFlat.Initialization$procedure$;
                }
                namespace tagged__union__literal {
                    namespace definition {
                        type $ = _IFlat.Initialization$tagged__union__literal$definition$;
                    }
                    namespace state {
                        type $ = _IFlat.Initialization$tagged__union__literal$state$;
                    }
                    namespace initialization {
                        type $ = _IFlat.Initialization$tagged__union__literal$initialization$;
                    }
                    type $ = _IFlat.Initialization$tagged__union__literal$;
                }
                namespace _lstring {
                    namespace definition {
                        type $ = _IFlat.Initialization$string$definition$;
                    }
                    namespace initialization {
                        type $ = _IFlat.Initialization$string$initialization$;
                    }
                    type $ = _IFlat.Initialization$string$;
                }
                namespace _lswitch {
                    namespace definition {
                        type $ = _IFlat.Initialization$switch$definition$;
                    }
                    namespace temp__type {
                        type $ = _IFlat.Initialization$switch$temp__type$;
                    }
                    namespace source {
                        type $ = _IFlat.Initialization$switch$source$;
                    }
                    namespace cases {
                        namespace D {
                            type $ = _IFlat.Initialization$switch$cases$D$;
                        }
                        type $ = _IFlat.Initialization$switch$cases$;
                    }
                    namespace _ldefault {
                        namespace O {
                            type $ = _IFlat.Initialization$switch$default$O$;
                        }
                        type $ = _IFlat.Initialization$switch$default$;
                    }
                    type $ = _IFlat.Initialization$switch$;
                }
                namespace value__function {
                    namespace definition {
                        type $ = _IFlat.Initialization$value__function$definition$;
                    }
                    namespace temp__has__parameters {
                        namespace O {
                            type $ = _IFlat.Initialization$value__function$temp__has__parameters$O$;
                        }
                        type $ = _IFlat.Initialization$value__function$temp__has__parameters$;
                    }
                    namespace variables {
                        type $ = _IFlat.Initialization$value__function$variables$;
                    }
                    namespace initialization {
                        type $ = _IFlat.Initialization$value__function$initialization$;
                    }
                    type $ = _IFlat.Initialization$value__function$;
                }
                namespace variables {
                    namespace variables {
                        type $ = _IFlat.Initialization$variables$variables$;
                    }
                    namespace initialization {
                        type $ = _IFlat.Initialization$variables$initialization$;
                    }
                    type $ = _IFlat.Initialization$variables$;
                }
                type $ = _IFlat.Initialization$;
            }
            namespace Block {
                namespace variables {
                    type $ = _IFlat.Block$variables$;
                }
                namespace statements {
                    type $ = _IFlat.Block$statements$;
                }
                type $ = _IFlat.Block$;
            }
            namespace Assign {
                namespace target {
                    type $ = _IFlat.Assign$target$;
                }
                namespace initialization {
                    type $ = _IFlat.Assign$initialization$;
                }
                type $ = _IFlat.Assign$;
            }
            namespace Statements {
                namespace A {
                    namespace block {
                        type $ = _IFlat.Statements$A$block$;
                    }
                    namespace call {
                        namespace _lfunction {
                            type $ = _IFlat.Statements$A$call$function$;
                        }
                        namespace context__definition {
                            type $ = _IFlat.Statements$A$call$context__definition$;
                        }
                        namespace context {
                            type $ = _IFlat.Statements$A$call$context$;
                        }
                        namespace _larguments {
                            namespace D {
                                type $ = _IFlat.Statements$A$call$arguments$D$;
                            }
                            type $ = _IFlat.Statements$A$call$arguments$;
                        }
                        type $ = _IFlat.Statements$A$call$;
                    }
                    namespace change__context {
                        namespace source {
                            type $ = _IFlat.Statements$A$change__context$source$;
                        }
                        namespace block {
                            type $ = _IFlat.Statements$A$change__context$block$;
                        }
                        type $ = _IFlat.Statements$A$change__context$;
                    }
                    namespace _lif {
                        namespace condition {
                            type $ = _IFlat.Statements$A$if$condition$;
                        }
                        namespace then {
                            type $ = _IFlat.Statements$A$if$then$;
                        }
                        namespace _lelse {
                            namespace O {
                                type $ = _IFlat.Statements$A$if$else$O$;
                            }
                            type $ = _IFlat.Statements$A$if$else$;
                        }
                        type $ = _IFlat.Statements$A$if$;
                    }
                    namespace _lswitch {
                        namespace source {
                            type $ = _IFlat.Statements$A$switch$source$;
                        }
                        namespace context__definition {
                            type $ = _IFlat.Statements$A$switch$context__definition$;
                        }
                        namespace cases {
                            namespace D {
                                type $ = _IFlat.Statements$A$switch$cases$D$;
                            }
                            type $ = _IFlat.Statements$A$switch$cases$;
                        }
                        namespace _ldefault {
                            namespace O {
                                type $ = _IFlat.Statements$A$switch$default$O$;
                            }
                            type $ = _IFlat.Statements$A$switch$default$;
                        }
                        type $ = _IFlat.Statements$A$switch$;
                    }
                    namespace _lwith {
                        namespace source {
                            type $ = _IFlat.Statements$A$with$source$;
                        }
                        namespace action {
                            namespace assign {
                                type $ = _IFlat.Statements$A$with$action$assign$;
                            }
                            namespace minus__assign {
                                namespace _lnumber {
                                    type $ = _IFlat.Statements$A$with$action$minus__assign$number$;
                                }
                                namespace right__hand__side {
                                    type $ = _IFlat.Statements$A$with$action$minus__assign$right__hand__side$;
                                }
                                type $ = _IFlat.Statements$A$with$action$minus__assign$;
                            }
                            namespace plus__assign {
                                namespace _lnumber {
                                    type $ = _IFlat.Statements$A$with$action$plus__assign$number$;
                                }
                                namespace right__hand__side {
                                    type $ = _IFlat.Statements$A$with$action$plus__assign$right__hand__side$;
                                }
                                type $ = _IFlat.Statements$A$with$action$plus__assign$;
                            }
                            type $ = _IFlat.Statements$A$with$action$;
                        }
                        type $ = _IFlat.Statements$A$with$;
                    }
                    namespace _lwhile {
                        namespace condition {
                            type $ = _IFlat.Statements$A$while$condition$;
                        }
                        namespace block {
                            type $ = _IFlat.Statements$A$while$block$;
                        }
                        type $ = _IFlat.Statements$A$while$;
                    }
                    type $ = _IFlat.Statements$A$;
                }
                type $ = _IFlat.Statements$;
            }
            namespace Source__File {
                namespace _ltype {
                    type $ = _IFlat.Source__File$type$;
                }
                namespace initialization {
                    type $ = _IFlat.Source__File$initialization$;
                }
                type $ = _IFlat.Source__File$;
            }
            namespace Root {
                type $ = _IFlat.Root$;
            }
        }
    }
    namespace Resolve {
        import _IResolved = Resolved;
        import _IUnresolved = Unresolved;
        namespace selectors {
        }
        namespace resolvers {
            type Aggregated__Variable = <_TAnnotation>($: _IUnresolved.Flat.Aggregated__Variable$<_TAnnotation>) => _IResolved.Flat.Aggregated__Variable$;
            type Aggregated__Variables = <_TAnnotation>($: _IUnresolved.Flat.Aggregated__Variables$<_TAnnotation>) => _IResolved.Flat.Aggregated__Variables$;
            type Assign = <_TAnnotation>($: _IUnresolved.Flat.Assign$<_TAnnotation>) => _IResolved.Flat.Assign$;
            type Block = <_TAnnotation>($: _IUnresolved.Flat.Block$<_TAnnotation>) => _IResolved.Flat.Block$;
            type Boolean__Initialization__Or__Selection = <_TAnnotation>($: _IUnresolved.Flat.Boolean__Initialization__Or__Selection$<_TAnnotation>) => _IResolved.Flat.Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization = <_TAnnotation>($: _IUnresolved.Flat.Boolean__Initialization$<_TAnnotation>) => _IResolved.Flat.Boolean__Initialization$;
            type Initialization__Or__Selection = <_TAnnotation>($: _IUnresolved.Flat.Initialization__Or__Selection$<_TAnnotation>) => _IResolved.Flat.Initialization__Or__Selection$;
            type Initialization = <_TAnnotation>($: _IUnresolved.Flat.Initialization$<_TAnnotation>) => _IResolved.Flat.Initialization$;
            type Local__Variables = <_TAnnotation>($: _IUnresolved.Flat.Local__Variables$<_TAnnotation>) => _IResolved.Flat.Local__Variables$;
            type Numerical__Initialization__Or__Selection = <_TAnnotation>($: _IUnresolved.Flat.Numerical__Initialization__Or__Selection$<_TAnnotation>) => _IResolved.Flat.Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization = <_TAnnotation>($: _IUnresolved.Flat.Numerical__Initialization$<_TAnnotation>) => _IResolved.Flat.Numerical__Initialization$;
            type Root = <_TAnnotation>($: _IUnresolved.Flat.Root$<_TAnnotation>) => _IResolved.Flat.Root$;
            type Source__File = <_TAnnotation>($: _IUnresolved.Flat.Source__File$<_TAnnotation>) => _IResolved.Flat.Source__File$;
            type Source__Selection__Tail = <_TAnnotation>($: _IUnresolved.Flat.Source__Selection__Tail$<_TAnnotation>) => _IResolved.Flat.Source__Selection__Tail$;
            type Source__Selection = <_TAnnotation>($: _IUnresolved.Flat.Source__Selection$<_TAnnotation>) => _IResolved.Flat.Source__Selection$;
            type Statements = <_TAnnotation>($: _IUnresolved.Flat.Statements$<_TAnnotation>) => _IResolved.Flat.Statements$;
            type String__Initialization__Or__Selection = <_TAnnotation>($: _IUnresolved.Flat.String__Initialization__Or__Selection$<_TAnnotation>) => _IResolved.Flat.String__Initialization__Or__Selection$;
            type String__Initialization = <_TAnnotation>($: _IUnresolved.Flat.String__Initialization$<_TAnnotation>) => _IResolved.Flat.String__Initialization$;
            type Target__Selection__Tail = <_TAnnotation>($: _IUnresolved.Flat.Target__Selection__Tail$<_TAnnotation>) => _IResolved.Flat.Target__Selection__Tail$;
            type Target__Selection = <_TAnnotation>($: _IUnresolved.Flat.Target__Selection$<_TAnnotation>) => _IResolved.Flat.Target__Selection$;
            type Type__Arguments = <_TAnnotation>($: _IUnresolved.Flat.Type__Arguments$<_TAnnotation>) => _IResolved.Flat.Type__Arguments$;
            type Type__Selection = <_TAnnotation>($: _IUnresolved.Flat.Type__Selection$<_TAnnotation>) => _IResolved.Flat.Type__Selection$;
            type Variables = <_TAnnotation>($: _IUnresolved.Flat.Variables$<_TAnnotation>) => _IResolved.Flat.Variables$;
        }
        type $ = {
            readonly 'Aggregated Variable': resolvers.Aggregated__Variable;
            readonly 'Aggregated Variables': resolvers.Aggregated__Variables;
            readonly 'Assign': resolvers.Assign;
            readonly 'Block': resolvers.Block;
            readonly 'Boolean Initialization': resolvers.Boolean__Initialization;
            readonly 'Boolean Initialization Or Selection': resolvers.Boolean__Initialization__Or__Selection;
            readonly 'Initialization': resolvers.Initialization;
            readonly 'Initialization Or Selection': resolvers.Initialization__Or__Selection;
            readonly 'Local Variables': resolvers.Local__Variables;
            readonly 'Numerical Initialization': resolvers.Numerical__Initialization;
            readonly 'Numerical Initialization Or Selection': resolvers.Numerical__Initialization__Or__Selection;
            readonly 'Root': resolvers.Root;
            readonly 'Source File': resolvers.Source__File;
            readonly 'Source Selection': resolvers.Source__Selection;
            readonly 'Source Selection Tail': resolvers.Source__Selection__Tail;
            readonly 'Statements': resolvers.Statements;
            readonly 'String Initialization': resolvers.String__Initialization;
            readonly 'String Initialization Or Selection': resolvers.String__Initialization__Or__Selection;
            readonly 'Target Selection': resolvers.Target__Selection;
            readonly 'Target Selection Tail': resolvers.Target__Selection__Tail;
            readonly 'Type Arguments': resolvers.Type__Arguments;
            readonly 'Type Selection': resolvers.Type__Selection;
            readonly 'Variables': resolvers.Variables;
        };
    }
    namespace Serialize {
        import _IResolved = Resolved;
        namespace types {
            type Type__Selection = ($: _IResolved.Flat.Type__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Type__Arguments = ($: _IResolved.Flat.Type__Arguments$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Local__Variables = ($: _IResolved.Flat.Local__Variables$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Aggregated__Variable = ($: _IResolved.Flat.Aggregated__Variable$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Aggregated__Variables = ($: _IResolved.Flat.Aggregated__Variables$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Variables = ($: _IResolved.Flat.Variables$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Target__Selection__Tail = ($: _IResolved.Flat.Target__Selection__Tail$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Target__Selection = ($: _IResolved.Flat.Target__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Source__Selection__Tail = ($: _IResolved.Flat.Source__Selection__Tail$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Source__Selection = ($: _IResolved.Flat.Source__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Initialization__Or__Selection = ($: _IResolved.Flat.Initialization__Or__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type String__Initialization__Or__Selection = ($: _IResolved.Flat.String__Initialization__Or__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Numerical__Initialization__Or__Selection = ($: _IResolved.Flat.Numerical__Initialization__Or__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Boolean__Initialization__Or__Selection = ($: _IResolved.Flat.Boolean__Initialization__Or__Selection$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Boolean__Initialization = ($: _IResolved.Flat.Boolean__Initialization$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Numerical__Initialization = ($: _IResolved.Flat.Numerical__Initialization$, $p: {
                readonly 'out': boolean;
            }) => void;
            type String__Initialization = ($: _IResolved.Flat.String__Initialization$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Initialization = ($: _IResolved.Flat.Initialization$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Block = ($: _IResolved.Flat.Block$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Assign = ($: _IResolved.Flat.Assign$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Statements = ($: _IResolved.Flat.Statements$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Source__File = ($: _IResolved.Flat.Source__File$, $p: {
                readonly 'out': boolean;
            }) => void;
            type Root = ($: _IResolved.Flat.Root$, $p: {
                readonly 'out': boolean;
            }) => void;
        }
        type $ = {
            readonly 'Aggregated Variable': types.Aggregated__Variable;
            readonly 'Aggregated Variables': types.Aggregated__Variables;
            readonly 'Assign': types.Assign;
            readonly 'Block': types.Block;
            readonly 'Boolean Initialization': types.Boolean__Initialization;
            readonly 'Boolean Initialization Or Selection': types.Boolean__Initialization__Or__Selection;
            readonly 'Initialization': types.Initialization;
            readonly 'Initialization Or Selection': types.Initialization__Or__Selection;
            readonly 'Local Variables': types.Local__Variables;
            readonly 'Numerical Initialization': types.Numerical__Initialization;
            readonly 'Numerical Initialization Or Selection': types.Numerical__Initialization__Or__Selection;
            readonly 'Root': types.Root;
            readonly 'Source File': types.Source__File;
            readonly 'Source Selection': types.Source__Selection;
            readonly 'Source Selection Tail': types.Source__Selection__Tail;
            readonly 'Statements': types.Statements;
            readonly 'String Initialization': types.String__Initialization;
            readonly 'String Initialization Or Selection': types.String__Initialization__Or__Selection;
            readonly 'Target Selection': types.Target__Selection;
            readonly 'Target Selection Tail': types.Target__Selection__Tail;
            readonly 'Type Arguments': types.Type__Arguments;
            readonly 'Type Selection': types.Type__Selection;
            readonly 'Variables': types.Variables;
        };
    }
}
export type $ = {
    readonly 'pareto lang data': {
        readonly 'createResolveContext': ($: null) => pareto__lang__data.Resolve.$;
        readonly 'createSerializeContext': ($: null) => pareto__lang__data.Serialize.$;
    };
    readonly 'proto implementation': {
        readonly 'createResolveContext': ($: null) => proto__implementation.Resolve.$;
        readonly 'createSerializeContext': ($: null) => proto__implementation.Serialize.$;
    };
    readonly 'proto typesystem': {
        readonly 'createResolveContext': ($: null) => proto__typesystem.Resolve.$;
        readonly 'createSerializeContext': ($: null) => proto__typesystem.Serialize.$;
    };
};
