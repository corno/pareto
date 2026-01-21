import * as _p from 'pareto-core-serializer'
import * as _pi from 'pareto-core-interface'

import { $$ as s_escaped } from "./escaped"

export type Signature = _pi.Text_Serializer

export const $$: Signature = ($) => "'" + s_escaped($) + "'"