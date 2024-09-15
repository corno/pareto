import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as a_2glossary from "../../submodules/2glossary"
import * as a_dictionary from "res-pareto-dictionary"
import * as a_array from "res-pareto-array"

import { A } from "../api.generated"

export const $$: A.map2Glossary = () => {
    return a_2glossary.$a.map({
        'filter': a_dictionary.$r.filter(),
        'isEmpty': a_dictionary.$r.isEmpty(),
        'merge': a_array.$r.merge()
    })
}