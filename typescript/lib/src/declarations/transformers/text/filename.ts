import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as s_out from "pareto-fountain-pen/interface/data/list_of_characters"



export type Text = p_.Transformer<
    string, s_out.List_of_Characters
>


