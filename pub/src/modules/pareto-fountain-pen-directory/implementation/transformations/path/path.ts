import * as _ea from 'exupery-core-alg'
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/target"

const replace = ($: string, search: number, replace: number): string => {
    return _ea.build_text(($i) => {
        _ea.text_to_character_list($).__for_each(($) => {
            if ($ === search) {
                $i['add character'](replace)
            } else {
                $i['add character']($)
            }
        })
    })
}

export const replace_space_in_context_path = ($: d_path.Node_Path): d_path.Node_Path => {
    const replace_space = ($: string): string => {
        return replace($, 32, 95 /* space -> underscore */)
    }
    return {
        'context': {
            'start': $.context.start,
            'subpath': $.context.subpath.map(($) => replace_space($)),
        },
        'node': replace_space($.node)
    }
}