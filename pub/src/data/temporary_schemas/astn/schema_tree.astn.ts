import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data_types/target"

import { $ as m_astn_schema } from "./schemas/astn_schema/$.module.astn"
import { $ as m_authoring_parse_tree } from "./schemas/authoring_parse_tree/$.module.astn"
import { $ as m_authoring_parse_result } from "./schemas/authoring_parse_result/$.module.astn"
import { $ as m_authoring_target } from "./schemas/authoring_target/$.module.astn"
import { $ as m_ide } from "./schemas/ide/$.module.astn"
import { $ as m_sealed_target } from "./schemas/sealed_target/$.module.astn"
import { $ as m_token } from "./schemas/token/$.module.astn"


export const $: g_.Schema_Tree<_pi.Deprecated_Source_Location> = st.set({
    "astn schema": m_astn_schema,
    "authoring parse tree": m_authoring_parse_tree,
    "authoring parse result": m_authoring_parse_result,
    "authoring target": m_authoring_target,
    "ide": m_ide,
    "sealed target": m_sealed_target,
    "token": m_token,
})