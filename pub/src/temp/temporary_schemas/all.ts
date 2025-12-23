import * as _edata from 'exupery-core-data'

import * as g_ from "../../interface/generated/pareto/schemas/module/data_types/target"

import { $ as m_accounting_ruwe_data } from "./accounting_ruwe_data/module.astn"
import { $ as m_antlr } from "./antlr/module.astn"
import { $ as m_astn } from "./astn/module.astn"
import { $ as m_astn_to_xml } from "./astn-to-xml/module.astn"
import { $ as m_exupery } from "./exupery/module.astn"
import { $ as m_exupery_resources } from "./exupery-resources/module.astn"
import { $ as m_git } from "./git/module.astn"
import { $ as m_json_to_astn } from "./json-to-astn/module.astn"
import { $ as m_pareto } from "./pareto/module.astn"
import { $ as m_pareto_boekhouding } from "./pareto-boekhouding/module.astn"
import { $ as m_development_tools } from "./pareto-development-tools/module.astn"
import { $ as m_pareto_fountain_pen } from "./pareto-fountain-pen/module.astn"
import { $ as m_pareto_graphviz } from "./pareto-graphviz/module.astn"
import { $ as m_pareto_json } from "./pareto-json/module.astn"
import { $ as m_pareto_lionweb } from "./pareto-lionweb/module.astn"
import { $ as m_pareto_static_html } from "./pareto-static-html/module.astn"
import { $ as m_pareto_test } from "./pareto-test/module.astn"
import { $ as m_pareto_targets } from "./pareto-targets/module.astn"
import { $ as m_pareto_vscode_backend } from "./pareto-vscode-backend/module.astn"
import { m } from 'exupery/dist/shorthands/implementation'


export const $ = _edata.d<{
    'target path': string,
    'module': g_.Module<_edata.Source_Location>
}>({
    "accounting_ruwe_data": {
        'target path': `../../../pareto-rosetta/accounting_ruwe_data`,
        'module': m_accounting_ruwe_data,
    },
    "antlr": {
        'target path': `../../../pareto-rosetta/antlr`,
        'module': m_antlr,
    },
    "astn": {
        'target path': `../astn`,
        'module': m_astn,
    },
    "astn-to-xml": {
        'target path': `../astn-to-xml`,
        'module': m_astn_to_xml,
    },
    "exupery": {
        'target path': `../exupery`,
        'module': m_exupery,
    },
    "exupery-resources": {
        'target path': `../exupery-resources`,
        'module': m_exupery_resources,
    },
    "json-to-astn": {
        'target path': `../../../pareto-rosetta/json-to-astn`,
        'module': m_json_to_astn,
    },
    "git": {
        'target path': `../git`,
        'module': m_git,
    },
    "pareto": {
        'target path': `../pareto`,
        'module': m_pareto,
    },
    "pareto-boekhouding": {
        'target path': `../pareto-boekhouding`,
        'module': m_pareto_boekhouding,
    },
    "pareto-development-tools": {
        'target path': `../pareto-development-tools`,
        'module': m_development_tools,
    },
    "pareto-fountain-pen": {
        'target path': `../pareto-fountain-pen`,
        'module': m_pareto_fountain_pen,
    },
    "pareto-json": {
        'target path': `../pareto-json`,
        'module': m_pareto_json,
    },
    "pareto-graphviz": {
        'target path': `../pareto-graphviz`,
        'module': m_pareto_graphviz,
    },
    "pareto-lionweb": {
        'target path': `../pareto-lionweb`,
        'module': m_pareto_lionweb,
    },
    "pareto-static-html": {
        'target path': `../pareto-static-html`,
        'module': m_pareto_static_html,
    },
    "pareto-targets": {
        'target path': `../pareto-targets`,
        'module': m_pareto_targets,
    },
    "pareto-test": {
        'target path': `../pareto-test`,
        'module': m_pareto_test,
    },
    "pareto-vscode-backend": {
        'target path': `../pareto-vscode-backend`,
        'module': m_pareto_vscode_backend,
    },
})