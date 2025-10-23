import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

/**
 * this is a manual translation of the railroad diagram grammar (hhttps://www.bottlecaps.de/rr/ui) to ASTN types
 * (the linked grammar is pasted at the bottom of this file as well)
 * 
 * Decisions made:
 * The grammar was followed as closely as possible, with the following exceptions:
 * -mostly it is all the syntax definitions, but some lexical definitions needed to be included as well;

 * 
 * for readibility; if a definition is used only once, it has been inlined and removed.
 * 
 * everywhere where you see "first": xxx, "rest": yyy, this represents a non-empty list; ( ... )+
 */
export const $: g_.Types<pd.Source_Location> = types(
    {
        "Grammar": type(t.group({
            "productions": prop(t.list(t.group({
                "name": prop(t.text_local(text('single line'))),
                "definition": prop(t.state_group({
                    "choice": tstate(t.component("Choice")),
                    "link": tstate(t.group({
                        "url": prop(t.text_local(text('single line'))), // [^#x5D:/?#]+ '://' [^#x5D#]+ ('#' NCName)?
                    })),
                })),
            }))),
        })),
        "Choice": type(t.group({
            "first": prop(t.component("Composite Expression")),
            "rest": prop(t.list(t.component("Composite Expression"))),
        })),
        "Composite Expression": type(t.group({
            "head": prop(t.component("Item")),
            "tail": prop(t.optional(t.state_group({
                "special": tstate(t.group({
                    "operator": prop(t.state_group({
                        "-": tstate(t.nothing()),
                        "**": tstate(t.nothing()),
                        "++": tstate(t.nothing()),
                    })),
                    "item": prop(t.component("Item")),
                })),
                "siblings": tstate(t.group({
                    "items": prop(t.list(t.component("Item"))),
                })),
            }))),
        })),
        "Item": type(t.group({
            "primary": prop(t.state_group({
                "name": tstate(t.text_local(text('single line'))), //NCName
                "string literal": tstate(t.component("String Literal")),
                "char code": tstate(t.component("Char Code")),
                "char class": tstate(t.group({
                    "negated": prop(t.boolean()),
                    "first": prop(t.component("Char Class Element")),
                    "rest": prop(t.list(t.component("Char Class Element"))),
                })),
                "choice": tstate(t.component_cyclic("Choice")),
            })),
            "quantifier": prop(t.optional(t.state_group({
                "?": tstate(t.nothing()),
                "*": tstate(t.nothing()),
                "+": tstate(t.nothing()),
            }))),
        })),
        "String Literal": type(t.group({
            "delimiter": prop(t.state_group({
                "quote": tstate(t.text_local(text('single line'))),
                "apostrophe": tstate(t.text_local(text('single line'))),
            })),
        })),
        "Char Code": type(t.text_local(text('single line'))), // #x[0-9a-fA-F]+
        "Char Class Element": type(t.state_group({
            "char": tstate(t.text_local(text('single line'))), //Char
            "char code": tstate(t.component("Char Code")),
            "char range": tstate(t.group({
                "from": prop(t.text_local(text('single line'))), //Char
                "to": prop(t.text_local(text('single line'))), //Char - ']'
            })),
            "char code range": tstate(t.group({
                "from": prop(t.component("Char Code")),
                "to": prop(t.component("Char Code")),
            })),
        })),
    }
)

// Grammar  ::= Production*
// Production
//          ::= NCName '::=' ( Choice | Link )
// NCName   ::= [http://www.w3.org/TR/xml-names/#NT-NCName]
// Choice   ::= CompositeExpression ( '|' CompositeExpression )*
// CompositeExpression
//          ::= ( Item ( ( '-' | '**' | '++' ) Item | Item* ) )?
// Item     ::= Primary ( '?' | '*' | '+' )?
// Primary  ::= NCName | StringLiteral | CharCode | CharClass | '(' Choice ')'
// StringLiteral
//          ::= '"' [^"]* '"' | "'" [^']* "'"
//           /* ws: explicit */
// CharCode ::= '#x' [0-9a-fA-F]+
//           /* ws: explicit */
// CharClass
//          ::= '[' '^'? ( Char | CharCode | CharRange | CharCodeRange )+ ']'
//           /* ws: explicit */
// Char     ::= [http://www.w3.org/TR/xml#NT-Char]
// CharRange
//          ::= Char '-' ( Char - ']' )
//           /* ws: explicit */
// CharCodeRange
//          ::= CharCode '-' CharCode
//           /* ws: explicit */
// Link     ::= '[' URL ']'
// URL      ::= [^#x5D:/?#]+ '://' [^#x5D#]+ ('#' NCName)?
//           /* ws: explicit */
// Whitespace
//          ::= S | Comment
// S        ::= #x9 | #xA | #xD | #x20
// Comment  ::= '/*' ( [^*] | '*'+ [^*/] )* '*'* '*/'
//           /* ws: explicit */