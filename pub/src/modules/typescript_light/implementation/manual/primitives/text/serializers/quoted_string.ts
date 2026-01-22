import * as _p from 'pareto-core/dist/serializer'
import * as _pi from 'pareto-core/dist/interface'

import { $$ as s_escaped } from "./escaped"

export type Signature = _pi.Text_Serializer

export const $$: Signature = ($) => "\"" + s_escaped($) + "\""