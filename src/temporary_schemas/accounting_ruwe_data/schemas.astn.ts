import * as pd from 'exupery-core-data'

import { schemas } from "../../shorthands/schema"
import * as g_ from "../../generated/interface/schemas/schema/unresolved"


import { $ as x_alan_light_oldstyle } from "./schemas/alan_light_oldstyle/$.module.astn"
import { $ as x_boekhouding } from "./schemas/boekhouding/$.module.astn"
import { $ as x_boekhouding_oude_model } from "./schemas/boekhouding_oude_model/$.module.astn"
import { $ as x_builder_configuration } from "./schemas/builder_configuration/$.module.astn"
import { $ as x_csv } from "./schemas/csv/$.module.astn"
import { $ as x_html } from "./schemas/html/$.module.astn"
import { $ as x_json_annotated } from "./schemas/json/annotated/$.module.astn"
import { $ as x_json_simple } from "./schemas/json/simple/$.module.astn"
import { $ as x_json_schema } from "./schemas/json_schema/$.module.astn"
import { $ as x_legacy_schema } from "./schemas/legacy_schema/$.module.astn"
import { $ as x_railroad_diagram } from "./schemas/railroad_diagram/$.module.astn"
import { $ as x_regular_expression } from "./schemas/regular_expression/$.module.astn"
import { $ as x_semantic_versioning } from "./schemas/semantic_versioning/$.module.astn"
import { $ as x_xml_simple } from "./schemas/xml/simple/$.module.astn"
import { $ as x_xml_parse_result } from "./schemas/xml/parse_result/$.module.astn"

export const $: g_.Schemas<pd.Source_Location> = schemas({
    "alan light oldstyle": x_alan_light_oldstyle,
    "boekhouding": x_boekhouding,
    "boekhouding oude model": x_boekhouding_oude_model,
    //"builder configuration": x_builder_configuration,
    "csv": x_csv,
    "json annotated": x_json_annotated,
    "json simple": x_json_simple,
    "json schema": x_json_schema,
    "legacy schema": x_legacy_schema,
    "html": x_html,
    "railroad diagram": x_railroad_diagram,
    "regular expression": x_regular_expression,
    "semantic versioning": x_semantic_versioning,
    "xml parse result": x_xml_parse_result,
    "xml simple": x_xml_simple,
})