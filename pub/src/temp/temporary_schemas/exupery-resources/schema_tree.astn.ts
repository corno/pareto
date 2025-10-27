import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../generated/interface/schemas/schema/data_types/target"

import { $ as x_copy } from "./schemas/copy/$.module.astn"
import { $ as x_log } from "./schemas/log/$.module.astn"
import { $ as x_log_error } from "./schemas/log_error/$.module.astn"
import { $ as x_make_directory } from "./schemas/make_directory/$.module.astn"
import { $ as x_remove } from "./schemas/remove/$.module.astn"
import { $ as x_write_file } from "./schemas/write_file/$.module.astn"
import { $ as x_get_instream_data } from "./schemas/get_instream_data/$.module.astn"
import { $ as x_read_directory } from "./schemas/read_directory/$.module.astn"
import { $ as x_read_file } from "./schemas/read_file/$.module.astn"
import { $ as x_run_query_executable } from "./schemas/run_query_executable/$.module.astn"
import { $ as x_run_query_executable_and_catch } from "./schemas/run_query_executable_and_catch/$.module.astn"
import { $ as x_stat } from "./schemas/stat/$.module.astn"

export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "copy": x_copy,
    "log": x_log,
    "log_error": x_log_error,
    "make_directory": x_make_directory,
    "remove": x_remove,
    "write_file": x_write_file,
    "get_instream_data": x_get_instream_data,
    "read_directory": x_read_directory,
    "read_file": x_read_file,
    "run_query_executable": x_run_query_executable,
    "run_query_executable_and_catch": x_run_query_executable_and_catch,
    "stat": x_stat,
})