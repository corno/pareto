import * as $$ from "../other/compile_astn"

$$.$(
    null,
    {
        'path': "./out/source_code/src/generated"
    }
)

import * as serializer from "../other/serialize_schemas"

serializer.$(
    null,
    {
        'path': "./out/serialized"
    }
)