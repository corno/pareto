import * as pt from 'pareto-core-types'

import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

export namespace types {

    export type Atom<Annotation> = (
        $: g_in.T.Atom<Annotation>,
        $p: {
            'atom types': g_out.T.Atom__Types,
        }
    ) => g_out.T.Atom

    export type Dictionary__Selection<Annotation> = (
        $: g_in.T.Dictionary__Selection<Annotation>,
        $p: {
            'type sources': TypeSources
        },
    ) => g_out.T.Dictionary__Selection

    export type Global__Type__Selection<Annotation> = (
        $: g_in.T.Global__Type__Selection<Annotation>,
        $p: {
            'type sources': TypeSources,
        },
    ) => g_out.T.Global__Type__Selection

    export type Atom__Types<Annotation> = (
        $: g_in.T.Atom__Types<Annotation>,
        // $p: {
        //     //'external type libraries': pt.Lookup<g_out.T.Type__Library>,
        // }
    ) => g_out.T.Atom__Types

    // export type Model<Annotation> = (
    //     $: g_in.T.Model<Annotation>,
    //     $p: {
    //         'external type libraries': pt.Lookup<g_out.T.Type__Library>,
    //     }
    // ) => g_out.T.Model

    export type Root<Annotation> = (
        $: g_in.T.Root<Annotation>,
    ) => g_out.T.Root

    export type TypeSources = {
        'imports': g_out.T.Imports,
        'sibling global types': pt.Lookup<g_out.T.Global__Type__Definition>,
        'cyclic sibling global types': pt.Lookup<() => g_out.T.Global__Type__Definition>,
    }

    export type TypeResolver<Annotation> = (
        $: g_in.T.TypeResolver<Annotation>,
        $p: {
            'atom types': g_out.T.Atom__Types,
            'type sources': TypeSources
            'variables': g_out.T.Variables
        }
    ) => g_out.T.TypeResolver

    export type Type<Annotation> = (
        $: g_in.T.Type<Annotation>,
        $p: {
            'atom types': g_out.T.Atom__Types,
            'type sources': TypeSources
            //'variables': g_out.T.Variables
        }
    ) => g_out.T.Type

    export type Type__Selection<Annotation> = (
        $: g_in.T.Type__Selection<Annotation>,
        $p: {
            'imports': g_out.T.Imports,
            'sibling global types': pt.Lookup<g_out.T.Global__Type__Definition>
        },
    ) => g_out.T.Type__Selection

    export type Type__Selection__Tail<Annotation> = (
        $: g_in.T.Type__Selection__Tail<Annotation>,
        $p: {
            'context': g_out.T.Type,
        },
    ) => g_out.T.Type__Selection__Tail

    // export type No__Context__Value__Selection<Annotation> = (
    //     $: g_in.T.No__Context__Value__Selection<Annotation>,
    //     $p: {
    //         'variables': g_out.T.Variables,
    //     },
    // ) => g_out.T.No__Context__Value__Selection

    export type Imports<Annotation> = (
        $: g_in.T.Imports<Annotation>,
        $p: {
            'external type libraries': pt.Lookup<g_out.T.Type__Library>,
        }
    ) => g_out.T.Imports

    export type Type__Library<Annotation> = (
        $: g_in.T.Type__Library<Annotation>,
        $p: {
            'external type libraries': pt.Lookup<g_out.T.Type__Library>,
        }
    ) => g_out.T.Type__Library

    export type Project<Annotation> = (
        $: g_in.T.Project<Annotation>,
    ) => g_out.T.Project

    export type Global__Type__Declaration<Annotation> = (
        $: g_in.T.Global__Type__Resolver__Declaration<Annotation>,
        $p: {
            'all siblings': pt.Lookup<() => g_out.T.Global__Type__Resolver__Declaration>
        }
    ) => g_out.T.Global__Type__Resolver__Declaration

    export type Global__Type__Resolver__Declarations<Annotation> = (
        $: g_in.T.Global__Type__Resolver__Declarations<Annotation>,
    ) => g_out.T.Global__Type__Resolver__Declarations

    export type Global__Type__Resolver__Implementation<Annotation> = (
        $: g_in.T.Global__Type__Resolver__Implementation<Annotation>,
        $p: {
            'key': string,
            'global type declarations': g_out.T.Global__Type__Resolver__Declarations
            'atom types': g_out.T.Atom__Types
            'type sources': TypeSources
        }
    ) => g_out.T.Global__Type__Resolver__Implementation

    export type Global__Type__Definition<Annotation> = (
        $: g_in.T.Global__Type__Definition<Annotation>,
        $p: {
            'key': string,
            'global type declarations': g_out.T.Global__Type__Resolver__Declarations
            'atom types': g_out.T.Atom__Types
            'type sources': TypeSources
        }
    ) => g_out.T.Global__Type__Definition

    export type Value__Selection__Tail<Annotation> = (
        $: g_in.T.Value__Selection__Tail<Annotation>,
        $p: {
            'context': g_out.T.Type,
        }
    ) => g_out.T.Value__Selection__Tail

    export type Variable<Annotation> = (
        $: g_in.T.Variable<Annotation>,
        $p: {
            'parent variables': pt.OptionalValue<g_out.T.Variables>
            'parameters': pt.OptionalValue<g_out.T.Parameters>
        }
    ) => g_out.T.Variable

    export type Variables<Annotation> = (
        $: g_in.T.Variables<Annotation>,
        $p: {
            'parent variables': pt.OptionalValue<g_out.T.Variables>
            'parameters': pt.OptionalValue<g_out.T.Parameters>
        }
    ) => g_out.T.Variables
}


export type $<Annotation> = {
    'Atom Types': types.Atom__Types<Annotation>
    'Atom': types.Atom<Annotation>
    'Dictionary Selection': types.Dictionary__Selection<Annotation>
    'Global Type Declaration': types.Global__Type__Declaration<Annotation>
    'Global Type Resolver Declarations': types.Global__Type__Resolver__Declarations<Annotation>
    //'Global Type Resolver Implementaion': types.Global__Type__Declarations<Annotation>
    'Global Type Definition': types.Global__Type__Definition<Annotation>
    'Global Type Selection': types.Global__Type__Selection<Annotation>
    'Imports': types.Imports<Annotation>
    //'Model': types.Model<Annotation>
    'Project': types.Project<Annotation>
    'Root': types.Root<Annotation>
    'Type': types.Type<Annotation>
    'Type Library': types.Type__Library<Annotation>
    'Type Selection': types.Type__Selection<Annotation>
    'Type Selection Tail': types.Type__Selection__Tail<Annotation>
    'Value Selection Tail': types.Value__Selection__Tail<Annotation>
    'Variables': types.Variables<Annotation>
    'Variable': types.Variable<Annotation>
}