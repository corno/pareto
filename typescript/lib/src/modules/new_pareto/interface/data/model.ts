import * as p_ from 'pareto-core/interface/data'

export type Module = {
    'interface': Module.interface_
    'declarations': Module.declarations
    'implementation': Module.implementation
    'modules': p_.Dictionary<Module>
}

export namespace Module {

    export type interface_ = {
        'data sets': p_.Dictionary<interface_.data_set>
    }

    export namespace interface_ {

        export type data_set = {
            'imports': p_.Dictionary<Data_Import>
            'types': p_.Dictionary<Type>
        }
    }

    export type declarations = {
        'transformers': p_.Dictionary<declarations.transformer>
        'refiners': p_.Dictionary<declarations.refiner>
        'queries': p_.Dictionary<declarations.query>
        'commands': p_.Dictionary<declarations.command>
    }
    export namespace declarations {


        export type transformer = {
            'in': Path
            'targets': p_.Dictionary<transformer.target>
            //FIXME
        }
        export namespace transformer {

            export type target = {
                'out': Path
                'types': p_.Dictionary<target__type>
            }

            export type target__type = {
                'parameter': p_.Optional_Value<{
                    'path': Path
                    'type': string
                }>
            }

        }

        export type refiner = {
            //FIXME
        }

        export type query = {
            //FIXME
        }

        export type command = {
            //FIXME
        }

    }

    export type implementation = {
        'transformers': p_.Dictionary<implementation.transformer>
        'refiners': p_.Dictionary<implementation.refiner>
        'queries': p_.Dictionary<implementation.query>
        'commands': p_.Dictionary<implementation.command>
    }

    export namespace implementation {
        export type transformer = {

            'dependencies': p_.Dictionary<Path>
            'types': p_.Dictionary<transformer.type>
        }

        export namespace transformer {
            export type type = {
            }
        }


        export type refiner = {
            //FIXME
        }

        export type query = {
            //FIXME
        }

        export type command = {
            //FIXME
        }
    }




}

export type Path = {
    //FIXME
}

export type Type = {
}

export type Data_Import = 
| ['local', {
    'name': string
}]
| ['imported', {
    'path': Path
}]
| ['module', {
    'name': string
    'dataset name': string
}]