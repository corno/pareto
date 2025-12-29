import * as _pi from 'pareto-core-interface'

import * as resources from "./resources"
import * as resources_exupery_resources from "exupery-resources/dist/interface/resources"

export namespace queries {

    export type load_pareto_document = _pi.Query_Function<resources.queries.load_pareto_document, {
        'read file': resources_exupery_resources.queries.read_file
    }>

    export type load_pareto_file = _pi.Query_Function<resources.queries.load_pareto_file, {
        'read file': resources_exupery_resources.queries.read_file
    }>

}