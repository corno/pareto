import * as _edata from 'exupery-core-data'

import * as g_ from "../generated/interface/schemas/module/data_types/unresolved"

import { $ as m_astn } from "./astn/module.astn"
import { $ as m_exupery } from "./exupery/module.astn"
import { $ as m_pareto } from "./pareto/module.astn"
import { $ as m_pareto_fountain_pen } from "./pareto-fountain-pen/module.astn"
import { $ as m_pareto_json } from "./pareto-json/module.astn"
import { $ as m_pareto_targets } from "./pareto-targets/module.astn"
import { $ as m_accounting_ruwe_data } from "./accounting_ruwe_data/module.astn"

export const $ = _edata.d<g_.Module<_edata.Source_Location> >({
    "accounting_ruwe_data": m_accounting_ruwe_data,
    "astn": m_astn,
    "exupery": m_exupery,
    "pareto": m_pareto,
    "pareto-fountain-pen": m_pareto_fountain_pen,
    "pareto-json": m_pareto_json,
    "pareto-targets": m_pareto_targets,
})