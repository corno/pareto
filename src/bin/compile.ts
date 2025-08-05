import * as compiler from "../other/compile_astn"

compiler.generate_source_code(
    null,
    {
        'path': "./out/source_code/src/generated"
    }
)

import * as serializer from "../other/serialize_schemas"

serializer.serialize_schemas(
    null,
    {
        'path': "./out/serialized"
    }
)