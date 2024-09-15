import { API } from "./api.generated"
import { $$ as igenerateSubmodules } from "./implementations/generateSubmodules.s.p"

export const $api: API = {
    'generateSubmodules': igenerateSubmodules,
}