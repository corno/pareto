import { API } from "./api.generated"
import { $$ as igenerateSubmodules } from "./implementations/generateSubmodules.b"
import { $$ as imap2Glossary } from "./implementations/map2Glossary.b"
import { $$ as iresolve } from "./implementations/resolve.b"

export const $api: API = {
    'generateSubmodules': igenerateSubmodules,
    'map2Glossary': imap2Glossary,
    'resolve': iresolve,
}