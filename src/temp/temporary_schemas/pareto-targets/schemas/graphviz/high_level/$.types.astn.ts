import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {


        "Graph": type(t.group({
            "name": t.optional(t.text_global("Text Value")),
            "tree": t.component("Tree"),
            "type": t.state_group({
                "undirected": t.group({
                    "edges": t.list(t.group({
                        "yin": t.component("End Point Specification"),
                        "yang": t.component("End Point Specification"),
                        "attributes": t.component("Edge Attributes"),
                    }))
                }),
                "directed": t.group({
                    "edges": t.list(t.group({
                        "from": t.component("End Point Specification"),
                        "to": t.component("End Point Specification"),
                        "attributes": t.component("Edge Attributes"),
                    }))
                }),
            }),
        })),

        /**
         * a tree contains nodes and subgraphs
         */
        "Tree": type(t.group({
            "attributes": t.component("Graph Attributes"),
            "elements": t.dictionary(t.state_group({
                "node": t.group({
                    "attributes": t.component("Node Attributes"),
                }),
                "sub": t.group({
                    "type": t.state_group({
                        "group": t.nothing(),
                        "cluster": t.nothing(),
                        "subgraph": t.nothing(),
                    }),
                    "tree": t.component_cyclic("Tree"),
                }),
            //}), 'ordered') cannot be ordered until the schema is constrained
            }))
        })),

        "End Point Specification": type(t.group({
            "start": t.text_global("Text Value"),
            "tail": t.list(t.text_global("Text Value")),
            "port data": t.optional(t.group({
                "port": t.text_global("Text Value"),
                "compass direction": t.optional(t.text_global("Text Value")),
            })),
        })),



        "Graph Attributes": type(t.list(t.state_group({
            "concentrate": t.boolean(),
            "charset": t.text_global("Text Value"),
            "clusterrank": t.state_group({
                "none": t.nothing(),
                "local": t.nothing(),
                "global": t.nothing(),
            }),
            "color": t.text_global("Text Value"),
            "color scheme": t.text_global("Text Value"),
            "comment": t.text_global("Text Value"),
            "compound": t.boolean(),
            "dpi": t.number_local(n.integer()),
            "font color": t.text_global("Text Value"),
            "font name": t.text_global("Text Value"),
            "font path": t.text_global("Text Value"),
            "font size": t.number_local(n.integer()),
            "label": t.text_global("Text Value"),
            "label distance": t.number_local(n.integer()),
            "label scheme": t.number_local(n.integer()),
            "label location": t.state_group({
                "top": t.nothing(),
                "bottom": t.nothing(),
            }),
            "landscape": t.boolean(),
            "layer list": t.text_global("Text Value"),
            "layer separator": t.text_global("Text Value"),
            "layers": t.text_global("Text Value"),
            "margin": t.text_global("Text Value"),
            "max iteration": t.number_local(n.integer()),
            "mclimit": t.number_local(n.integer()),
            "mindist": t.number_local(n.integer()),
            "mode": t.state_group({
                "no output": t.nothing(),
                "out": t.nothing(),
                "in": t.nothing(),
                "in out": t.nothing(),
            }),
            "newrank": t.boolean(),
            "no loop": t.boolean(),
            "normalize": t.boolean(),
            "ordering": t.state_group({
                "out": t.nothing(),
                "in": t.nothing(),
                "in out": t.nothing(),
            }),
            "orientation": t.number_local(n.integer()),
            "output order": t.state_group({
                "breadth first": t.nothing(),
                "dfs": t.nothing(),
            }),
            "overlap": t.text_global("Text Value"),
            "output mode": t.state_group({
                "edges first": t.nothing(),
                "nodes first": t.nothing(),
            }),
            "pack": t.boolean(),
            "pack mode": t.state_group({
                "node": t.nothing(),
                "graph": t.nothing(),
            }),
            "pad": t.number_local(n.integer()),
            "page": t.text_global("Text Value"),
            "quadtree": t.boolean(),
            "quantum": t.number_local(n.integer()),
            "rankdir": t.state_group({
                "top bottom": t.nothing(),
                "bottom top": t.nothing(),
                "left right": t.nothing(),
                "right left": t.nothing(),
            }),
            "ranksep": t.text_global("Text Value"),
            "ratio": t.text_global("Text Value"),
            "remincross": t.boolean(),
            "rotate": t.number_local(n.integer()),
            "scale": t.text_global("Text Value"),
            "searchsize": t.number_local(n.integer()),
            "sep": t.text_global("Text Value"),
            "showboxes": t.boolean(),
            "size": t.text_global("Text Value"),
            "smoothing": t.state_group({
                "none": t.nothing(),
                "spring": t.nothing(),
                "triangle": t.nothing(),
            }),
            "sortv": t.boolean(),
            "splines": t.text_global("Text Value"),
            "start": t.number_local(n.integer()),
            "style": t.text_global("Text Value"),
            "stylesheet": t.text_global("Text Value"),
            "target": t.text_global("Text Value"),
            "tooltip": t.text_global("Text Value"),
            "truecolor": t.boolean(),
            "viewport": t.text_global("Text Value"),
            "width": t.number_local(n.integer()),
            "xdotversion": t.number_local(n.integer()),
            "xlabel": t.text_global("Text Value"),
        }))),

        "Node Attributes": type(t.list(t.state_group({
            "color": t.text_global("Text Value"),
            "colorscheme": t.text_global("Text Value"),
            "comment": t.text_global("Text Value"),
            "concentrate": t.boolean(),
            "fill color": t.text_global("Text Value"),
            "fixed size": t.boolean(),
            "font color": t.text_global("Text Value"),
            "font name": t.text_global("Text Value"),
            "font size": t.number_local(n.integer()),
            "group": t.text_global("Text Value"),
            "height": t.number_local(n.approximation(10)),
            "image": t.text_global("Text Value"),
            "label": t.text_global("Text Value"),
            "labelloc": t.state_group({
                "top": t.nothing(),
                "center": t.nothing(),
                "bottom": t.nothing(),
            }),
            "layers": t.text_global("Text Value"),
            "margin": t.text_global("Text Value"),
            "nojustify": t.boolean(),
            "orientation": t.number_local(n.integer()),
            "pen width": t.number_local(n.approximation(10)),
            "peripheries": t.number_local(n.integer()),
            "pos": t.text_global("Text Value"),
            "rects": t.text_global("Text Value"),
            "regular": t.boolean(),
            "root": t.boolean(),
            "shape": t.text_global("Text Value"),
            "showboxes": t.boolean(),
            "sides": t.number_local(n.integer()),
            "skew": t.number_local(n.approximation(10)),
            "style": t.text_global("Text Value"),
            "target": t.text_global("Text Value"),
            "tooltip": t.text_global("Text Value"),
            "width": t.number_local(n.approximation(10)),
            "xlabel": t.text_global("Text Value"),
            "xlp": t.text_global("Text Value"),
        }))),

        "Edge Attributes": type(t.list(t.state_group({
            "arrowhead": t.text_global("Text Value"),
            "arrowsize": t.number_local(n.approximation(10)),
            "arrowtail": t.text_global("Text Value"),
            "bgcolor": t.text_global("Text Value"),
            "color": t.text_global("Text Value"),
            "colorscheme": t.text_global("Text Value"),
            "comment": t.text_global("Text Value"),
            "constraint": t.boolean(),
            "decorate": t.boolean(),
            "dir": t.state_group({
                "forward": t.nothing(),
                "back": t.nothing(),
                "both": t.nothing(),
                "none": t.nothing(),
            }),
            "edge url": t.text_global("Text Value"),
            "edge lp": t.text_global("Text Value"),
            "edge target": t.text_global("Text Value"),
            "edge tooltip": t.text_global("Text Value"),
            "head lp": t.text_global("Text Value"),
            "headclip": t.boolean(),
            "headlabel": t.text_global("Text Value"),
            "headport": t.text_global("Text Value"),
            "height": t.number_local(n.approximation(10)),
            "id": t.text_global("Text Value"),
            "label": t.text_global("Text Value"),
            "label distance": t.number_local(n.approximation(10)),
            "label angle": t.number_local(n.approximation(10)),
            "label float": t.boolean(),
            "labelfloat": t.boolean(),
            "labelhref": t.text_global("Text Value"),
            "label lp": t.text_global("Text Value"),
            "layer": t.text_global("Text Value"),
            "len": t.number_local(n.approximation(10)),
            "lhead": t.text_global("Text Value"),
            "lp": t.text_global("Text Value"),
            "ltail": t.text_global("Text Value"),
            "minlen": t.number_local(n.integer()),
            "pen width": t.number_local(n.approximation(10)),
            "pos": t.text_global("Text Value"),
            "same head": t.boolean(),
            "same tail": t.boolean(),
            "showboxes": t.boolean(),
            "style": t.text_global("Text Value"),
            "tail lp": t.text_global("Text Value"),
            "tailclip": t.boolean(),
            "taillabel": t.text_global("Text Value"),
            "tailport": t.text_global("Text Value"),
            "tooltip": t.text_global("Text Value"),
            "weight": t.number_local(n.integer()),
            "xlabel": t.text_global("Text Value"),
            "xlp": t.text_global("Text Value"),
        }))),

        /**
         * 
         */
        "Attribute Value": type(t.state_group({
            "number": t.text_global("Text Value"),
            "string": t.text_global("Text Value"),
            "html string": t.text_global("Text Value"),
        })),
    }
)


