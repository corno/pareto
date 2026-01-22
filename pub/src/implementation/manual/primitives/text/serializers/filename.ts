import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import * as _ps from 'pareto-core/dist/serializer'
import * as _pd from 'pareto-core/dist/deserializer'

export type Signature = _pi.Text_Serializer

export const $$: Signature = ($) => {
    return _ps.text.deprecated_build(($i) => {
        _pd.list.from_text($, ($) => $).__for_each(($) => {
            if ($ === 36) { // $
                $i['add character'](36) //dollar
                $i['add character'](36) //dollar
            } else if ($ === 95) { // _
                $i['add character'](36) //dollar
                $i['add character'](95) //underscore    

            } else if ($ === 32) { // space
                $i['add character'](95) //underscore    
            } else {
                $i['add character']($)
            }
        })
    })
}