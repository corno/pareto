import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/module/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"
import * as _i_r_schema from "../schema/serialize"


export const Operations: _i_signatures._T_Operations = ($, $p) => _i_serialize.Document(
    _i_marshall.Operations(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Module: _i_signatures._T_Module = ($, $p) => _i_serialize.Document(
    _i_marshall.Module(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
