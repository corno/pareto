import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data_types/target"

import { $ as x_copy } from "./schemas/copy/$.module.astn"
import { $ as x_log } from "./schemas/log/$.module.astn"
import { $ as x_log_error } from "./schemas/log_error/$.module.astn"
import { $ as x_make_directory } from "./schemas/make_directory/$.module.astn"
import { $ as x_remove } from "./schemas/remove/$.module.astn"
import { $ as x_write_file } from "./schemas/write_file/$.module.astn"
import { $ as x_get_instream_data } from "./schemas/get_instream_data/$.module.astn"
import { $ as x_read_directory } from "./schemas/read_directory/$.module.astn"
import { $ as x_read_file } from "./schemas/read_file/$.module.astn"
import { $ as x_execute_procedure_executable } from "./schemas/execute_procedure_executable/$.module.astn"
import { $ as x_execute_query_executable } from "./schemas/execute_query_executable/$.module.astn"
import { $ as x_execute_query_executable_and_catch } from "./schemas/execute_query_executable_and_catch/$.module.astn"
import { $ as x_stat } from "./schemas/stat/$.module.astn"

export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "copy": x_copy,
    "log": x_log,
    "log error": x_log_error,
    "make directory": x_make_directory,
    "remove": x_remove,
    "write file": x_write_file,
    "get instream data": x_get_instream_data,
    "read directory": x_read_directory,
    "read file": x_read_file,
    "execute procedure executable": x_execute_procedure_executable,
    "execute query executable": x_execute_query_executable,
    "execute query executable and catch": x_execute_query_executable_and_catch,
    "stat": x_stat,
})