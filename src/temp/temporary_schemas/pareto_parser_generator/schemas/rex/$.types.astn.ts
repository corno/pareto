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
 * this is a manual translation of the grammar in REx.ebnf (https://www.bottlecaps.de/rex/REx.ebnf) to ASTN types
 * (the linked grammar is pasted at the bottom of this file as well)
 * 
 * Decisions made:
 * The grammar was followed as closely as possible, with the following exceptions:
 * -mostly it is all the syntax definitions, but some lexical definitions needed to be included as well;
 * -CharRange, 
 * -CharCodeRange,
 * -EquivalenceLookAhead,
 * 
 * for readibility; if a definition is used only once, it has been inlined and removed.
 * 
 * everywhere where you see "first": xxx, "rest": yyy, this represents a non-empty list; ( ... )+
 */

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Grammar": type(t.group({
            "prolog": prop(t.list(t.component("Processing Instruction"))),
            "syntax definition": prop(t.group({
                "syntax productions": prop(t.group({
                    "first": prop(t.component("Syntax Production")),
                    "rest": prop(t.list(t.component("Syntax Production"))),
                })),
            })),
            "lexical definition": prop(t.optional(t.group({
                "lexical rules": prop(t.list(t.state_group({
                    "lexical production": tstate(t.group({
                        "name": prop(t.state_group({
                            "dot": tstate(t.nothing()), // what does this mean? 'any something'?
                            "name": tstate(t.text_local(text('single line'))),
                        })),
                        "non greedy": prop(t.boolean()), // ?
                        "context choice": prop(t.group({
                            "first": prop(t.component("Context Expression")),
                            "rest": prop(t.list(t.component("Context Expression"))),
                        })),
                        "options": prop(t.list(t.component("Whitespace Option"))),
                    })),
                    "preference": tstate(t.group({
                        "base": prop(t.component("Name Or String")),
                        "direction": prop(t.state_group({
                            ">>": tstate(t.group({
                                "first": prop(t.component("Name Or String")),
                                "rest": prop(t.list(t.component("Name Or String"))),
                            })),
                            "<<": tstate(t.group({
                                "first": prop(t.component("Name Or String")),
                                "rest": prop(t.list(t.component("Name Or String"))),
                            })),
                        })),
                    })),
                    "lookahead list": tstate(t.group({ // (aka Delimiter): Name '\\' Name1 Name2
                        "name": prop(t.text_local(text('single line'))),
                        "names or strings": prop(t.group({
                            "first": prop(t.component("Name Or String")),
                            "rest": prop(t.list(t.component("Name Or String"))),
                        })),
                    })),
                    "equivalence": tstate(t.group({
                        "look ahead": prop(t.group({
                            "char class": prop(t.component("Char Class Option")),
                        })),
                        "left hand side": prop(t.component("Equivalence Char Range")),
                        "right hand side": prop(t.component("Equivalence Char Range")),
                    })),
                }))),
            }))),
            "encore": prop(t.optional(t.list(t.component("Processing Instruction")))),
        })),
        "Processing Instruction": type(t.group({
            "name": prop(t.text_local(text('single line'))),
            "dir pi contents": prop(t.text_local(text('single line'))),
        })),
        /**
         * only exists because of a non empty list requirement
         */
        "Syntax Production": type(t.group({
            "name": prop(t.text_local(text('single line'))),
            "syntax choice": prop(t.component("Syntax Choice")),
            "options": prop(t.list(t.component("Whitespace Option"))),
        })),
        "Syntax Choice": type(t.group({
            "first": prop(t.component("Syntax Sequence")),
            "rest": prop(t.optional(t.state_group({
                "unordered": tstate(t.group({ // 'a' | 'b' | 'c'
                    "sequence": prop(t.list(t.component("Syntax Sequence"))),
                })),
                "ordered": tstate(t.group({ // 'a' / 'b' / 'c'
                    "sequence": prop(t.list(t.component("Syntax Sequence"))),
                })),
            }))),
        })),
        "Syntax Sequence": type(t.group({
            "items": prop(t.list(t.group({
                "syntax primary": prop(t.state_group({
                    "name or string": tstate(t.component("Name Or String")),
                    "parenthesized": tstate(t.group({
                        "syntax choice": prop(t.component_cyclic("Syntax Choice")),
                    })),
                    "processing instruction": tstate(t.component("Processing Instruction")),
                })),
                "quantifier": prop(t.optional(t.state_group({
                    "?": tstate(t.nothing()),
                    "*": tstate(t.nothing()),
                    "+": tstate(t.nothing()),
                }))),
            }))),
        })),
        /**
         * only exists because of a non empty list requirement
         */
        "Context Expression": type(t.group({
            "lexical sequence": prop(t.component("Lexical Sequence")),
            "lookahead": prop(t.optional(t.component("Lexical Item"))),
        })),
        "Lexical Sequence": type(t.group({
            "first": prop(t.component("Lexical Item")),
            "second": prop((t.state_group({
                "multiple": tstate(t.list(t.component("Lexical Item"))),
                "exclusion": tstate(t.group({ // 'a' - 'b'
                    "what to exclude": prop(t.component("Lexical Item")),
                })),
            }))),
        })),
        "Lexical Item": type(t.group({
            "lexical primary": prop(t.state_group({
                "name or any character": tstate(t.state_group({
                    "name": tstate(t.text_local(text('single line'))),
                    "any character ": tstate(t.nothing()), // .
                })),
                "string literal": tstate(t.text_local(text('single line'))),
                "parenthesized": tstate(t.group({
                    "lexical choice": prop(t.group({
                        "first": prop(t.component_cyclic("Lexical Sequence")),
                        "rest": prop(t.list(t.component_cyclic("Lexical Sequence"))),
                    })),
                })),
                "end of input": tstate(t.nothing()), // $
                "char code": tstate(t.text_local(text('single line'))),
                "char class": tstate(t.group({
                    "negated": prop(t.boolean()),
                    "items": prop(t.group({
                        "first": prop(t.component("Char Class Option")),
                        "rest": prop(t.list(t.component("Char Class Option"))),
                    })),
                })),
            })),
            "quantifier": prop(t.optional(t.state_group({
                "optional": tstate(t.nothing()), // ?
                "multiple": tstate(t.nothing()), // *
                "more than one": tstate(t.nothing()), // +
            }))),
        })),
        "Name Or String": type(t.state_group({
            "name": tstate(t.group({
                "name": prop(t.text_local(text('single line'))),
                "context": prop(t.optional(t.component("Context"))),
            })),
            "string": tstate(t.group({
                "string literal": prop(t.text_local(text('single line'))),
                "context": prop(t.optional(t.component("Context"))),
            })),
        })),
        /**
         * semantically only used once, in Name Or String
         */
        "Context": type(t.group({ // if a caret is present, the name refers to a lexical rule, needed for when a name is overloaded in the syntax and lexical definitions
            "caret name": prop(t.text_local(text('single line'))),
        })),
        /**
         * this one does not exist in the original grammar, but is specified multiple times
         */
        "Char Class Option": type(t.state_group({
            "char": tstate(t.text_local(text('single line'))),
            "char code": tstate(t.text_local(text('single line'))),
            "char range": tstate(t.group({
                "from": prop(t.text_local(text('single line'))),
                "to": prop(t.text_local(text('single line'))),
            })),
            "char code range": tstate(t.group({
                "from": prop(t.text_local(text('single line'))),
                "to": prop(t.text_local(text('single line'))),
            })),
        })),
        "Whitespace Option": type(t.state_group({
            "explicit": tstate(t.nothing()),
            "definition": tstate(t.nothing()),
        })),
        "Equivalence Char Range": type(t.state_group({
            "string literal": tstate(t.text_local(text('single line'))),
            "char class": tstate(t.component("Char Class Option")),
        })),
    }
)


// Grammar  ::= Prolog SyntaxDefinition LexicalDefinition? Encore? EOF
// Prolog   ::= ProcessingInstruction*
// ProcessingInstruction
//          ::= '<?' Name ( Space+ DirPIContents? )? '?>'
//           /* ws: explicit */
// SyntaxDefinition
//          ::= SyntaxProduction+
// SyntaxProduction
//          ::= Name '::=' SyntaxChoice Option*
// SyntaxChoice
//          ::= SyntaxSequence ( ( '|' SyntaxSequence )+ | ( '/' SyntaxSequence )+ )?
// SyntaxSequence
//          ::= SyntaxItem*
// SyntaxItem
//          ::= SyntaxPrimary ( '?' | '*' | '+' )?
// SyntaxPrimary
//          ::= NameOrString
//            | '(' SyntaxChoice ')'
//            | ProcessingInstruction
// LexicalDefinition
//          ::= '<?TOKENS?>' ( LexicalProduction | Preference | Delimiter | Equivalence )*
// LexicalProduction
//          ::= ( Name | '.' ) '?'? '::=' ContextChoice Option*
// ContextChoice
//          ::= ContextExpression ( '|' ContextExpression )*
// LexicalChoice
//          ::= LexicalSequence ( '|' LexicalSequence )*
// ContextExpression
//          ::= LexicalSequence ( '&' LexicalItem )?
// LexicalSequence
//          ::=
//            | LexicalItem ( '-' LexicalItem | LexicalItem* )
// LexicalItem
//          ::= LexicalPrimary ( '?' | '*' | '+' )?
// LexicalPrimary
//          ::= ( Name | '.' )
//            | StringLiteral
//            | '(' LexicalChoice ')'
//            | '$'
//            | CharCode
//            | CharClass
// NameOrString
//          ::= Name Context?
//            | StringLiteral Context?
// Context  ::= CaretName
// CharClass
//          ::= ( '[' | '[^' ) ( Char | CharCode | CharRange | CharCodeRange )+ ']'
//           /* ws: explicit */
// Option   ::= '/*' Space* 'ws' ':' Space* ( 'explicit' | 'definition' ) Space* '*/'
//           /* ws: explicit */
// Preference
//          ::= NameOrString ( '>>' NameOrString+ | '<<' NameOrString+ )
// Delimiter
//          ::= Name '\\' NameOrString+
// Equivalence
//          ::= EquivalenceLookAhead EquivalenceCharRange '==' EquivalenceCharRange
// EquivalenceCharRange
//          ::= StringLiteral
//            | '[' ( Char | CharCode | CharRange | CharCodeRange ) ']'
//           /* ws: explicit */
// Encore   ::= '<?ENCORE?>' ProcessingInstruction*

// <?TOKENS?>

// NameStartChar
//          ::= [A-Z]
//            | '_'
//            | [a-z]
//            | [#xC0-#xD6]
//            | [#xD8-#xF6]
//            | [#xF8-#x2FF]
//            | [#x370-#x37D]
//            | [#x37F-#x1FFF]
//            | [#x200C-#x200D]
//            | [#x2070-#x218F]
//            | [#x2C00-#x2FEF]
//            | [#x3001-#xD7FF]
//            | [#xF900-#xFDCF]
//            | [#xFDF0-#xFFFD]
//            | [#x10000-#xEFFFF]
// NameChar ::= NameStartChar
//            | '-'
//            | '.'
//            | [0-9]
//            | #xB7
//            | [#x0300-#x036F]
//            | [#x203F-#x2040]
// Name     ::= NameStartChar NameChar*
// Space    ::= ( #x9 | #xD | #x20 )+
//            | #xA
// DirPIContents
//          ::= ( [^?#x9#xD#x20#xA] | '?'+ [^?>] ) ( [^?] | '?'+ [^?>] )* '?'* &'?>'
// StringLiteral
//          ::= '"' [^"#x9#xA#xD]* '"'
//            | "'" [^'#x9#xA#xD]* "'"
// CaretName
//          ::= '^' Name?
// CharCode ::= '#x' [0-9a-fA-F]+
// Char     ::= [^#x9#xA#xD#x23#x5D]
//            | '#' &[^0-9a-fA-F]
// CharRange
//          ::= Char '-' Char
// CharCodeRange
//          ::= CharCode '-' CharCode
// SingleLineComment
//          ::= '//' [^#xA]* #xA?
// MultiLineComment
//          ::= '/*' ( ( .* - ( .* '*/' .* ) ) - ( Space* 'ws' Space* ':' .* ) ) '*/'
// EOF      ::= $
// EquivalenceLookAhead
//          ::= &( '[' ( Char | CharCode | CharRange | CharCodeRange ) ']' Whitespace? '==' )
// Whitespace
//          ::= ( Space | SingleLineComment | MultiLineComment )+
//           /* ws: definition */