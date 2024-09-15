import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as a_2submodules from "../../submodules/2submodules"
import * as a_2glossary from "../../submodules/2glossary"
import * as a_glossary from "lib-pareto-typescript-project"
import * as a_fp from "lib-fountain-pen"
import * as a_array from "res-pareto-array"
import { $$ as x } from "./map2Glossary.b"

import { A } from "../api.generated"

export const $$: A.generateSubmodules = () => {
    return a_2submodules.$a.generateSubmodules({
        'createFile': a_fp.$b.createFile(),
        'map2Glossary': x(),
        'merge': a_array.$r.merge(),
        'serializeGlossary': a_glossary.$b.serializeGlossary(),
    })
}