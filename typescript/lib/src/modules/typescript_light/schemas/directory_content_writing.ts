

import * as s_file_write_parameters from "pareto-filesystem-unrestricted-api/modules/helpers/schemas/write_directory_content"
import * as s_serialization_parameters from "./serialization.js"

export type Parameters = {
    'file write parameters': s_file_write_parameters.File_Write_Parameters
    'serialization parameters': s_serialization_parameters.Source_File_Parameters
}