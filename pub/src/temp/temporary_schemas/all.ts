import * as _edata from 'exupery-core-data'

import * as g_ from "../../generated/interface/schemas/module/data_types/target"

import { $ as m_accounting_ruwe_data } from "./accounting_ruwe_data/module.astn"
import { $ as m_antlr } from "./antlr/module.astn"
import { $ as m_astn } from "./astn/module.astn"
import { $ as m_exupery } from "./exupery/module.astn"
import { $ as m_exupery_resources } from "./exupery-resources/module.astn"
import { $ as m_json_to_astn } from "./json-to-astn/module.astn"
import { $ as m_pareto_lionweb } from "./pareto-lionweb/module.astn"
import { $ as m_pareto } from "./pareto/module.astn"
import { $ as m_pareto_boekhouding } from "./pareto-boekhouding/module.astn"
import { $ as m_pareto_fountain_pen } from "./pareto-fountain-pen/module.astn"
import { $ as m_pareto_json } from "./pareto-json/module.astn"
import { $ as m_pareto_targets } from "./pareto-targets/module.astn"
import { $ as m_pareto_parser_generator } from "./pareto_parser_generator/module.astn"
import { $ as m_pareto_vscode_backend } from "./pareto-vscode-backend/module.astn"


export const $ = _edata.d<g_.Module<_edata.Source_Location> >({
    "accounting_ruwe_data": m_accounting_ruwe_data,
    "antlr": m_antlr,
    "astn": m_astn,
    "exupery": m_exupery,
    "exupery-resources": m_exupery_resources,
    "json-to-astn": m_json_to_astn,
    "pareto": m_pareto,
    "pareto-boekhouding": m_pareto_boekhouding,
    "pareto-fountain-pen": m_pareto_fountain_pen,
    "pareto-json": m_pareto_json,
    "pareto-lionweb": m_pareto_lionweb,
    "pareto-parser-generator": m_pareto_parser_generator,
    "pareto-targets": m_pareto_targets,
    "pareto-vscode-backend": m_pareto_vscode_backend,
})