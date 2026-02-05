    
    import * as _p from "pareto-core/dist/expression"
    
    import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/interface/deserialize"
    
    import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"
    
    import * as v_unmarshall from "./astn_parse_tree"
    
    export const Package_Set: t_signatures.Package_Set = ($, abort, $p) => v_unmarshall.Package_Set(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['tbd', null],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['tbd', null],
        ),
    )
    
    export const Package: t_signatures.Package = ($, abort, $p) => v_unmarshall.Package(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['tbd', null],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['tbd', null],
        ),
    )
    
    export const Imports: t_signatures.Imports = ($, abort, $p) => v_unmarshall.Imports(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['tbd', null],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['tbd', null],
        ),
    )
    
    export const Value: t_signatures.Value = ($, abort, $p) => v_unmarshall.Value(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['tbd', null],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['tbd', null],
        ),
    )
    
    export const Module_Reference: t_signatures.Module_Reference = ($, abort, $p) => v_unmarshall.Module_Reference(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['tbd', null],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['tbd', null],
        ),
    )
