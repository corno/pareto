import { API } from "./api.generated"
import { $$ as ia_$provided_$algorithm } from "./implementations/a_provided_algorithm.s.p"
import { $$ as ia_$provided_$algorithm_$with_$an_$implementation_$parameter } from "./implementations/a_provided_algorithm_with_an_implementation_parameter.s.p"
import { $$ as ia_$provided_$algorithm_$with_$dependencies } from "./implementations/a_provided_algorithm_with_dependencies.s.p"
import { $$ as ia_$provided_$asynchronous_$function } from "./implementations/a_provided_asynchronous_function.a.f"
import { $$ as ia_$provided_$constructor } from "./implementations/a_provided_constructor.a.c"
import { $$ as ia_$provided_$procedure } from "./implementations/a_provided_procedure.s.p"
import { $$ as ia_$provided_$resource } from "./implementations/a_provided_resource.a.r"
import { $$ as ia_$provided_$synchronous_$function } from "./implementations/a_provided_synchronous_function.s.f"

export const $api: API = {
    'a_provided_algorithm': ia_$provided_$algorithm,
    'a_provided_algorithm_with_an_implementation_parameter': ia_$provided_$algorithm_$with_$an_$implementation_$parameter,
    'a_provided_algorithm_with_dependencies': ia_$provided_$algorithm_$with_$dependencies,
    'a_provided_asynchronous_function': ia_$provided_$asynchronous_$function,
    'a_provided_constructor': ia_$provided_$constructor,
    'a_provided_procedure': ia_$provided_$procedure,
    'a_provided_resource': ia_$provided_$resource,
    'a_provided_synchronous_function': ia_$provided_$synchronous_$function,
}