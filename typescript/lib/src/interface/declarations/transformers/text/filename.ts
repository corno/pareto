import * as p_ from 'pareto-core/implementation/transformer'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"

export namespace interface_ {

    export type Text = p_i.Transformer<
        string, d_out.List_of_Characters
    >

}
