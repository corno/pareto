import * as pt from 'pareto-core-types';
import * as g_this from "../../../ts";
import In = g_this.pareto__lang__data.Resolved.T;
export declare namespace N { }
export declare namespace T {
    namespace Atom__Mapping {
        namespace D {
            namespace _lboolean { }
            type _lboolean = null;
            namespace _lnumber { }
            type _lnumber = null;
            namespace _lstring { }
            type _lstring = null;
        }
        type D = ['boolean', null] | ['number', null] | ['string', null];
    }
    type Atom__Mapping = pt.Dictionary<['boolean', null] | ['number', null] | ['string', null]>;
    namespace MapParameters {
        namespace atom__mappings {
            type D = T.Atom__Mapping;
        }
        type atom__mappings = pt.Dictionary<T.Atom__Mapping>;
        type data = In.Project.$;
    }
    type MapParameters = {
        readonly 'atom mappings': pt.Dictionary<T.Atom__Mapping>;
        readonly 'data': In.Project.$;
    };
    namespace SourceLocation {
        type column = number;
        type file = string;
        type line = number;
    }
    type SourceLocation = {
        readonly 'column': number;
        readonly 'file': string;
        readonly 'line': number;
    };
}
