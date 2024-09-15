import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'

import * as g_2glossary from "../../2glossary"

import { A } from "../api.generated"

export const $$: A.generateSubmodules = ($d,) => {
    return ($) => {
        function foo(name: string, settings: g_2glossary.T.Mapping__Settings) {

            const glossary = $d.map2Glossary({
                'library': $.data.library,
                'atom mappings': $.data['atom mappings'],
                // 'atom mappings': pm.wrapRawDictionary({
                //     "text": ['string', null],
                //     "identifier": ['string', null],
                // }),
                'mapping settings': settings
            })

            $d.createFile(
                ($i) => {
                    $i(
                        $d.merge(pm.wrapRawArray([$.path, pm.wrapRawArray([name, "glossary.generated.ts"])])),
                        ($i) => {
                            $d.serializeGlossary(glossary, $i)
                        }
                    )
                },
                {
                    'logError': () => {

                    }
                }
            )
        }
        foo("unresolved", {
            'constraints mapping': {
                'constraints': [false],
                'terminal values': true,
            },
            'create annotations': true,
        })
        foo("resolved", {
            'constraints mapping': {
                'constraints': [true, ['required', null]],
                'terminal values': true,
            },
            'create annotations': false,
        })
        foo("possiblyresolved", {
            'constraints mapping': {
                'constraints': [true, ['optional', null]],
                'terminal values': true,
            },
            'create annotations': false,
        })
    }
}