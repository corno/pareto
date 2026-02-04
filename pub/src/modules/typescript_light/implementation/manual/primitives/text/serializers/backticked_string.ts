import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/expression'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/to_be_generated/text"

import { $$ as s_escaped } from "./escaped"

export type Signature = _pi.Transformer<string, d_out.Text>

export const $$: Signature = ($) => _p.list.nested_literal_old([
    [
        0x60, // `
    ],
    s_escaped(
        $,
    ),
    [
        0x60, // `
    ]
])