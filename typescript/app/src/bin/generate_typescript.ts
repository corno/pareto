#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'


import * as rs_filesystem_unrestricted from "pareto-resource-filesystem-unrestricted/index"
import * as rs_stream from "pareto-resource-stream/index"

import { $$ as c_command } from "pareto-common/modules/file_in_directory_out/implementation/commands/operation"

import { $$ as q_query } from "lib/implementation/queries/pareto_to_typescript"

//data
import * as data_module from "../data/simple_module.js"

p_h.run_main_command(
    () => c_command(
        {
            'error message indentation': "    ",
        },
        {
            'read file': rs_filesystem_unrestricted.$.queries['read file'],
            'process data': q_query(
                {
                    'serialization parameters': {
                        'indentation': "    ",
                        'typescript': {
                            'replace empty type literals by symbol': true,
                        }
                    },
                    'module': data_module.$
                },
                null
            ),
        },
        {
            'write file': rs_filesystem_unrestricted.$.commands['write file'],
            'log error lines': rs_stream.$.commands['log error lines'],
        },
    ),
)
