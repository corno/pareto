import * as _et from 'exupery-core-types'

import * as resources from "./resources"
import * as resources_exupery_resources from "exupery-resources/dist/interface/resources"

export namespace queries {

    export type load_pareto_document = _et.Query_Function<resources.queries.load_pareto_document, {
        'read file': resources_exupery_resources.queries.read_file
    }>

    export type load_pareto_file = _et.Query_Function<resources.queries.load_pareto_file, {
        'read file': resources_exupery_resources.queries.read_file
    }>

}