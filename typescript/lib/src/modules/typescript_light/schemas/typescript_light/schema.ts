import * as p_ from 'pareto-core/schema'

// types

type Block_ = Statements_

namespace Source_File_ {
    
    export type statements = Statements_
}

type Source_File_ = {
    readonly 'statements': Source_File_.statements
}

namespace Directory_ {
    
    export namespace content {
        
        export namespace directories {
            
            export type D = Directory_
        }
        
        export type directories = p_.Dictionary<
            directories.D
        >
        
        export namespace files {
            
            export type D = Source_File_
        }
        
        export type files = p_.Dictionary<
            files.D
        >
        
        export namespace mixed {
            
            export type D = Node_
        }
        
        export type mixed = p_.Dictionary<
            mixed.D
        >
    }
    
    export type content = 
        | readonly ['directories', content.directories]
        | readonly ['files', content.files]
        | readonly ['mixed', content.mixed]
}

type Directory_ = {
    readonly 'content': Directory_.content
}

namespace Expression_ {
    
    export namespace array_literal {
        
        export type L = Expression_
    }
    
    export type array_literal = p_.List<
        array_literal.L
    >
    
    export namespace arrow_function {
        
        export type declaration = Function_Declaration_
        
        export namespace body {
            
            export type block = Block_
            
            export type expression = Expression_
        }
        
        export type body = 
            | readonly ['block', body.block]
            | readonly ['expression', body.expression]
    }
    
    export type arrow_function = {
        readonly 'declaration': arrow_function.declaration
        readonly 'body': arrow_function.body
    }
    
    export namespace assignment {
        
        export type left = Expression_
        
        export type right = Expression_
    }
    
    export type assignment = {
        readonly 'left': assignment.left
        readonly 'right': assignment.right
    }
    
    export namespace call {
        
        export type function_selection = Expression_
        
        export type arguments_on_own_line = boolean
        
        export namespace arguments_ {
            
            export type L = Expression_
        }
        
        export type arguments_ = p_.List<
            arguments_.L
        >
    }
    
    export type call = {
        readonly 'function selection': call.function_selection
        readonly 'arguments on own line': call.arguments_on_own_line
        readonly 'arguments': call.arguments_
    }
    
    export namespace compare {
        
        export type left = Expression_
        
        export namespace operator {
            
            export type strictly_equal = null
            
            export type strictly_not_equal = null
            
            export type smaller_than = null
            
            export type smaller_than_or_equal = null
            
            export type greater_than = null
            
            export type greater_than_or_equal = null
        }
        
        export type operator = 
            | readonly ['strictly equal', operator.strictly_equal]
            | readonly ['strictly not equal', operator.strictly_not_equal]
            | readonly ['smaller than', operator.smaller_than]
            | readonly ['smaller than or equal', operator.smaller_than_or_equal]
            | readonly ['greater than', operator.greater_than]
            | readonly ['greater than or equal', operator.greater_than_or_equal]
        
        export type right = Expression_
    }
    
    export type compare = {
        readonly 'left': compare.left
        readonly 'operator': compare.operator
        readonly 'right': compare.right
    }
    
    export namespace conditional {
        
        export type condition = Expression_
        
        export type if_true = Expression_
        
        export type if_false = Expression_
    }
    
    export type conditional = {
        readonly 'condition': conditional.condition
        readonly 'if true': conditional.if_true
        readonly 'if false': conditional.if_false
    }
    
    export namespace element_access {
        
        export type collection = Expression_
        
        export type index = Expression_
    }
    
    export type element_access = {
        readonly 'collection': element_access.collection
        readonly 'index': element_access.index
    }
    
    export type identifier = Identifier_
    
    export type false_ = null
    
    export type null_ = null
    
    export type number_literal = number
    
    export namespace object_literal {
        
        export namespace properties {
            
            export namespace L {
                
                export namespace key {
                    
                    export type identifier = Identifier_
                    
                    export type string_literal = String_Literal_
                }
                
                export type key = 
                    | readonly ['identifier', key.identifier]
                    | readonly ['string literal', key.string_literal]
                
                export type value = Expression_
            }
            
            export type L = {
                readonly 'key': L.key
                readonly 'value': L.value
            }
        }
        
        export type properties = p_.List<
            properties.L
        >
    }
    
    export type object_literal = {
        readonly 'properties': object_literal.properties
    }
    
    export type parenthesized = Expression_
    
    export namespace property_access {
        
        export type object_ = Expression_
        
        export type property = Identifier_
    }
    
    export type property_access = {
        readonly 'object': property_access.object_
        readonly 'property': property_access.property
    }
    
    export type string_literal = String_Literal_
    
    export type true_ = null
    
    export namespace unary_operation {
        
        export namespace operator {
            
            export type negation = null
            
            export type logical_not = null
        }
        
        export type operator = 
            | readonly ['negation', operator.negation]
            | readonly ['logical not', operator.logical_not]
        
        export type operand = Expression_
    }
    
    export type unary_operation = {
        readonly 'operator': unary_operation.operator
        readonly 'operand': unary_operation.operand
    }
}

type Expression_ = 
    | readonly ['array literal', Expression_.array_literal]
    | readonly ['arrow function', Expression_.arrow_function]
    | readonly ['assignment', Expression_.assignment]
    | readonly ['call', Expression_.call]
    | readonly ['compare', Expression_.compare]
    | readonly ['conditional', Expression_.conditional]
    | readonly ['element access', Expression_.element_access]
    | readonly ['identifier', Expression_.identifier]
    | readonly ['false', Expression_.false_]
    | readonly ['null', Expression_.null_]
    | readonly ['number literal', Expression_.number_literal]
    | readonly ['object literal', Expression_.object_literal]
    | readonly ['parenthesized', Expression_.parenthesized]
    | readonly ['property access', Expression_.property_access]
    | readonly ['string literal', Expression_.string_literal]
    | readonly ['true', Expression_.true_]
    | readonly ['unary operation', Expression_.unary_operation]

namespace Function_Declaration_ {
    
    export namespace type_parameters {
        
        export type L = Type_
    }
    
    export type type_parameters = p_.List<
        type_parameters.L
    >
    
    export namespace parameters {
        
        export namespace L {
            
            export type name = Identifier_
            
            export namespace type_ {
                
                export type O = Type_
            }
            
            export type type_ = p_.Optional_Value<
                type_.O
            >
        }
        
        export type L = {
            readonly 'name': L.name
            readonly 'type': L.type_
        }
    }
    
    export type parameters = p_.List<
        parameters.L
    >
    
    export namespace return_type {
        
        export type O = Type_
    }
    
    export type return_type = p_.Optional_Value<
        return_type.O
    >
}

type Function_Declaration_ = {
    readonly 'type parameters': Function_Declaration_.type_parameters
    readonly 'parameters': Function_Declaration_.parameters
    readonly 'return type': Function_Declaration_.return_type
}

namespace Identifier_ {
    
    export type raw = string
    
    export type escaped = string
}

type Identifier_ = 
    | readonly ['raw', Identifier_.raw]
    | readonly ['escaped', Identifier_.escaped]

namespace Node_ {
    
    export type directory = Directory_
    
    export type file = Source_File_
}

type Node_ = 
    | readonly ['directory', Node_.directory]
    | readonly ['file', Node_.file]

namespace Statement_ {
    
    export type block = Block_
    
    export type empty_line = null
    
    export namespace export_ {
        
        export namespace type_ {
            
            export namespace named_exports {
                
                export namespace specifiers {
                    
                    export namespace L {
                        
                        export type type_only = boolean
                        
                        export type name = Identifier_
                        
                        export namespace as_ {
                            
                            export type O = Identifier_
                        }
                        
                        export type as_ = p_.Optional_Value<
                            as_.O
                        >
                    }
                    
                    export type L = {
                        readonly 'type only': L.type_only
                        readonly 'name': L.name
                        readonly 'as': L.as_
                    }
                }
                
                export type specifiers = p_.List<
                    specifiers.L
                >
                
                export namespace from_ {
                    
                    export type O = String_Literal_
                }
                
                export type from_ = p_.Optional_Value<
                    from_.O
                >
            }
            
            export type named_exports = {
                readonly 'specifiers': named_exports.specifiers
                readonly 'from': named_exports.from_
            }
        }
        
        export type type_ = 
            | readonly ['named exports', type_.named_exports]
    }
    
    export type export_ = {
        readonly 'type': export_.type_
    }
    
    export type expression = Expression_
    
    export namespace import_ {
        
        export namespace type_ {
            
            export type default_ = Identifier_
            
            export type namespace = Identifier_
            
            export namespace named {
                
                export namespace specifiers {
                    
                    export namespace L {
                        
                        export type name = Identifier_
                        
                        export namespace as_ {
                            
                            export type O = Identifier_
                        }
                        
                        export type as_ = p_.Optional_Value<
                            as_.O
                        >
                    }
                    
                    export type L = {
                        readonly 'name': L.name
                        readonly 'as': L.as_
                    }
                }
                
                export type specifiers = p_.List<
                    specifiers.L
                >
            }
            
            export type named = {
                readonly 'specifiers': named.specifiers
            }
        }
        
        export type type_ = 
            | readonly ['default', type_.default_]
            | readonly ['namespace', type_.namespace]
            | readonly ['named', type_.named]
        
        export type from_ = String_Literal_
    }
    
    export type import_ = {
        readonly 'type': import_.type_
        readonly 'from': import_.from_
    }
    
    export type line_comment = string
    
    export namespace namespace {
        
        export type export_ = boolean
        
        export type name = Identifier_
        
        export type block = Block_
    }
    
    export type namespace = {
        readonly 'export': namespace.export_
        readonly 'name': namespace.name
        readonly 'block': namespace.block
    }
    
    export namespace return_ {
        
        export type O = Expression_
    }
    
    export type return_ = p_.Optional_Value<
        return_.O
    >
    
    export namespace switch_ {
        
        export type expression = Expression_
        
        export namespace clauses {
            
            export namespace L {
                
                export namespace type_ {
                    
                    export type case_ = Expression_
                    
                    export type default_ = null
                }
                
                export type type_ = 
                    | readonly ['case', type_.case_]
                    | readonly ['default', type_.default_]
                
                export namespace body {
                    
                    export type statement = Statement_
                    
                    export type statements = Statements_
                }
                
                export type body = 
                    | readonly ['statement', body.statement]
                    | readonly ['statements', body.statements]
            }
            
            export type L = {
                readonly 'type': L.type_
                readonly 'body': L.body
            }
        }
        
        export type clauses = p_.List<
            clauses.L
        >
    }
    
    export type switch_ = {
        readonly 'expression': switch_.expression
        readonly 'clauses': switch_.clauses
    }
    
    export namespace type_alias_declaration {
        
        export type export_ = boolean
        
        export type name = Identifier_
        
        export namespace parameters {
            
            export type L = Identifier_
        }
        
        export type parameters = p_.List<
            parameters.L
        >
        
        export type type_ = Type_
    }
    
    export type type_alias_declaration = {
        readonly 'export': type_alias_declaration.export_
        readonly 'name': type_alias_declaration.name
        readonly 'parameters': type_alias_declaration.parameters
        readonly 'type': type_alias_declaration.type_
    }
    
    export namespace variable {
        
        export type export_ = boolean
        
        export type const_ = boolean
        
        export type name = Identifier_
        
        export namespace type_ {
            
            export type O = Type_
        }
        
        export type type_ = p_.Optional_Value<
            type_.O
        >
        
        export namespace expression {
            
            export type O = Expression_
        }
        
        export type expression = p_.Optional_Value<
            expression.O
        >
    }
    
    export type variable = {
        readonly 'export': variable.export_
        readonly 'const': variable.const_
        readonly 'name': variable.name
        readonly 'type': variable.type_
        readonly 'expression': variable.expression
    }
}

type Statement_ = 
    | readonly ['block', Statement_.block]
    | readonly ['empty line', Statement_.empty_line]
    | readonly ['export', Statement_.export_]
    | readonly ['expression', Statement_.expression]
    | readonly ['import', Statement_.import_]
    | readonly ['line comment', Statement_.line_comment]
    | readonly ['namespace', Statement_.namespace]
    | readonly ['return', Statement_.return_]
    | readonly ['switch', Statement_.switch_]
    | readonly ['type alias declaration', Statement_.type_alias_declaration]
    | readonly ['variable', Statement_.variable]

namespace Statements_ {
    
    export type L = Statement_
}

type Statements_ = p_.List<
    Statements_.L
>

namespace String_Literal_ {
    
    export namespace delimiter {
        
        export type quote = null
        
        export type apostrophe = null
    }
    
    export type delimiter = 
        | readonly ['quote', delimiter.quote]
        | readonly ['apostrophe', delimiter.apostrophe]
    
    export type value = string
}

type String_Literal_ = {
    readonly 'delimiter': String_Literal_.delimiter
    readonly 'value': String_Literal_.value
}

namespace Type_ {
    
    export type boolean_ = null
    
    export namespace function_ {
        
        export type declaration = Function_Declaration_
    }
    
    export type function_ = {
        readonly 'declaration': function_.declaration
    }
    
    export type literal_type = String_Literal_
    
    export type never_ = null
    
    export type null_ = null
    
    export type number_ = null
    
    export type string_ = null
    
    export namespace tuple {
        
        export type readonly = boolean
        
        export namespace elements {
            
            export type L = Type_
        }
        
        export type elements = p_.List<
            elements.L
        >
    }
    
    export type tuple = {
        readonly 'readonly': tuple.readonly
        readonly 'elements': tuple.elements
    }
    
    export namespace type_literal {
        
        export namespace properties {
            
            export namespace L {
                
                export namespace key {
                    
                    export type identifier = Identifier_
                    
                    export type string_literal = String_Literal_
                }
                
                export type key = 
                    | readonly ['identifier', key.identifier]
                    | readonly ['string literal', key.string_literal]
                
                export type readonly = boolean
                
                export type type_ = Type_
            }
            
            export type L = {
                readonly 'key': L.key
                readonly 'readonly': L.readonly
                readonly 'type': L.type_
            }
        }
        
        export type properties = p_.List<
            properties.L
        >
    }
    
    export type type_literal = {
        readonly 'properties': type_literal.properties
    }
    
    export namespace type_reference {
        
        export type start = Identifier_
        
        export namespace tail {
            
            export type L = Identifier_
        }
        
        export type tail = p_.List<
            tail.L
        >
        
        export namespace type_arguments {
            
            export type L = Type_
        }
        
        export type type_arguments = p_.List<
            type_arguments.L
        >
    }
    
    export type type_reference = {
        readonly 'start': type_reference.start
        readonly 'tail': type_reference.tail
        readonly 'type arguments': type_reference.type_arguments
    }
    
    export type undefined_ = null
    
    export namespace union {
        
        export type L = Type_
    }
    
    export type union = p_.List<
        union.L
    >
    
    export type void_ = null
}

type Type_ = 
    | readonly ['boolean', Type_.boolean_]
    | readonly ['function', Type_.function_]
    | readonly ['literal type', Type_.literal_type]
    | readonly ['never', Type_.never_]
    | readonly ['null', Type_.null_]
    | readonly ['number', Type_.number_]
    | readonly ['string', Type_.string_]
    | readonly ['tuple', Type_.tuple]
    | readonly ['type literal', Type_.type_literal]
    | readonly ['type reference', Type_.type_reference]
    | readonly ['undefined', Type_.undefined_]
    | readonly ['union', Type_.union]
    | readonly ['void', Type_.void_]

// exported root types
export { 
    type Block_ as Block, 
    type Source_File_ as Source_File, 
    type Directory_ as Directory, 
    type Expression_ as Expression, 
    type Function_Declaration_ as Function_Declaration, 
    type Identifier_ as Identifier, 
    type Node_ as Node, 
    type Statement_ as Statement, 
    type Statements_ as Statements, 
    type String_Literal_ as String_Literal, 
    type Type_ as Type, 
}
