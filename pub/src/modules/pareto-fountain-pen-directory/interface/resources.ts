import * as _et from 'exupery-core-types'

import * as D from "./to_be_generated/temp_types"

export namespace commands {

    export type write_to_directory = _et.Command<D.Directory_Error, D.Directory_Parameters>
    export type write_to_file = _et.Command<D.File_Error, D.File_Parameters>
    export type write_to_node = _et.Command<D.Node_Error, D.Node_Parameters>


}