import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/unmarshall_errors/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Relative_Location: _i_signatures._T_Relative_Location = ($, $p) => _i_serialize.Document(
    _i_marshall.Relative_Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Location: _i_signatures._T_Location = ($, $p) => _i_serialize.Document(
    _i_marshall.Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Range: _i_signatures._T_Range = ($, $p) => _i_serialize.Document(
    _i_marshall.Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Errors: _i_signatures._T_Errors = ($, $p) => _i_serialize.Document(
    _i_marshall.Errors(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
