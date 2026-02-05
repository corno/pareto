    
    import * as _pi from "pareto-core/dist/interface"
    
    export namespace Directory_ {
        
        export namespace D {
            
            export namespace file {
                
                export type statements = Statements_
                
            }
            
            export type file = {
                readonly 'statements': file.statements
            }
            
            export type directory = Directory_
            
        }
        
        export type D = 
            | readonly ['file', D.file]
            | readonly ['directory', D.directory]
        
    }
    
    export type Directory_ = _pi.Dictionary<Directory_.D>
    
    export type Block_ = Statements_
    
    export namespace Statements_ {
        
        export namespace L {
            
            export type block = Block_
            
            export namespace export_ {
                
                export namespace type_ {
                    
                    export namespace named_exports {
                        
                        export namespace specifiers {
                            
                            export namespace L {
                                
                                export type name = Identifier_
                                
                                export namespace as_ {
                                    
                                    export type O = Identifier_
                                    
                                }
                                
                                export type as_ = _pi.Optional_Value<as_.O>
                                
                            }
                            
                            export type L = {
                                readonly 'name': L.name
                                readonly 'as': L.as_
                            }
                            
                        }
                        
                        export type specifiers = _pi.List<specifiers.L>
                        
                        export namespace from_ {
                            
                            export type O = string
                            
                        }
                        
                        export type from_ = _pi.Optional_Value<from_.O>
                        
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
                                
                                export type as_ = _pi.Optional_Value<as_.O>
                                
                            }
                            
                            export type L = {
                                readonly 'name': L.name
                                readonly 'as': L.as_
                            }
                            
                        }
                        
                        export type specifiers = _pi.List<specifiers.L>
                        
                    }
                    
                    export type named = {
                        readonly 'specifiers': named.specifiers
                    }
                    
                }
                
                export type type_ = 
                    | readonly ['default', type_.default_]
                    | readonly ['namespace', type_.namespace]
                    | readonly ['named', type_.named]
                
                export type from_ = string
                
            }
            
            export type import_ = {
                readonly 'type': import_.type_
                readonly 'from': import_.from_
            }
            
            export namespace module_declaration {
                
                export type export_ = boolean
                
                export type name = Identifier_
                
                export type block = Block_
                
            }
            
            export type module_declaration = {
                readonly 'export': module_declaration.export_
                readonly 'name': module_declaration.name
                readonly 'block': module_declaration.block
            }
            
            export namespace return_ {
                
                export type O = Expression_
                
            }
            
            export type return_ = _pi.Optional_Value<return_.O>
            
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
                        
                        export type statements = Statements_
                        
                    }
                    
                    export type L = {
                        readonly 'type': L.type_
                        readonly 'statements': L.statements
                    }
                    
                }
                
                export type clauses = _pi.List<clauses.L>
                
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
                
                export type parameters = _pi.List<parameters.L>
                
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
                
                export type type_ = _pi.Optional_Value<type_.O>
                
                export namespace expression {
                    
                    export type O = Expression_
                    
                }
                
                export type expression = _pi.Optional_Value<expression.O>
                
            }
            
            export type variable = {
                readonly 'export': variable.export_
                readonly 'const': variable.const_
                readonly 'name': variable.name
                readonly 'type': variable.type_
                readonly 'expression': variable.expression
            }
            
        }
        
        export type L = 
            | readonly ['block', L.block]
            | readonly ['export', L.export_]
            | readonly ['expression', L.expression]
            | readonly ['import', L.import_]
            | readonly ['module declaration', L.module_declaration]
            | readonly ['return', L.return_]
            | readonly ['switch', L.switch_]
            | readonly ['type alias declaration', L.type_alias_declaration]
            | readonly ['variable', L.variable]
        
    }
    
    export type Statements_ = _pi.List<Statements_.L>
    
    export namespace Type_ {
        
        export type boolean_ = null
        
        export namespace function_ {
            
            export namespace type_parameters {
                
                export type L = Type_
                
            }
            
            export type type_parameters = _pi.List<type_parameters.L>
            
            export type parameters = Function_Parameters_
            
            export type return_ = Type_
            
        }
        
        export type function_ = {
            readonly 'type parameters': function_.type_parameters
            readonly 'parameters': function_.parameters
            readonly 'return': function_.return_
        }
        
        export type literal_type = String_Literal_
        
        export type null_ = null
        
        export type number_ = null
        
        export type string_ = null
        
        export namespace tuple {
            
            export type readonly = boolean
            
            export namespace elements {
                
                export type L = Type_
                
            }
            
            export type elements = _pi.List<elements.L>
            
        }
        
        export type tuple = {
            readonly 'readonly': tuple.readonly
            readonly 'elements': tuple.elements
        }
        
        export namespace type_literal {
            
            export namespace properties {
                
                export namespace D {
                    
                    export type readonly = boolean
                    
                    export type type_ = Type_
                    
                }
                
                export type D = {
                    readonly 'readonly': D.readonly
                    readonly 'type': D.type_
                }
                
            }
            
            export type properties = _pi.Dictionary<properties.D>
            
        }
        
        export type type_literal = {
            readonly 'properties': type_literal.properties
        }
        
        export namespace type_reference {
            
            export type start = Identifier_
            
            export namespace tail {
                
                export type L = Identifier_
                
            }
            
            export type tail = _pi.List<tail.L>
            
            export namespace type_arguments {
                
                export type L = Type_
                
            }
            
            export type type_arguments = _pi.List<type_arguments.L>
            
        }
        
        export type type_reference = {
            readonly 'start': type_reference.start
            readonly 'tail': type_reference.tail
            readonly 'type arguments': type_reference.type_arguments
        }
        
        export namespace union {
            
            export type L = Type_
            
        }
        
        export type union = _pi.List<union.L>
        
        export type void_ = null
        
    }
    
    export type Type_ = 
        | readonly ['boolean', Type_.boolean_]
        | readonly ['function', Type_.function_]
        | readonly ['literal type', Type_.literal_type]
        | readonly ['null', Type_.null_]
        | readonly ['number', Type_.number_]
        | readonly ['string', Type_.string_]
        | readonly ['tuple', Type_.tuple]
        | readonly ['type literal', Type_.type_literal]
        | readonly ['type reference', Type_.type_reference]
        | readonly ['union', Type_.union]
        | readonly ['void', Type_.void_]
    
    export namespace Function_Parameters_ {
        
        export namespace L {
            
            export type name = Identifier_
            
            export namespace type_ {
                
                export type O = Type_
                
            }
            
            export type type_ = _pi.Optional_Value<type_.O>
            
        }
        
        export type L = {
            readonly 'name': L.name
            readonly 'type': L.type_
        }
        
    }
    
    export type Function_Parameters_ = _pi.List<Function_Parameters_.L>
    
    export namespace Expression_ {
        
        export namespace array_literal {
            
            export type L = Expression_
            
        }
        
        export type array_literal = _pi.List<array_literal.L>
        
        export namespace arrow_function {
            
            export type parameters = Function_Parameters_
            
            export namespace return_type {
                
                export type O = Type_
                
            }
            
            export type return_type = _pi.Optional_Value<return_type.O>
            
            export namespace body {
                
                export type block = Block_
                
                export type expression = Expression_
                
            }
            
            export type body = 
                | readonly ['block', body.block]
                | readonly ['expression', body.expression]
            
        }
        
        export type arrow_function = {
            readonly 'parameters': arrow_function.parameters
            readonly 'return type': arrow_function.return_type
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
            
            export namespace arguments_ {
                
                export type L = Expression_
                
            }
            
            export type arguments_ = _pi.List<arguments_.L>
            
        }
        
        export type call = {
            readonly 'function selection': call.function_selection
            readonly 'arguments': call.arguments_
        }
        
        export namespace compare {
            
            export type left = Expression_
            
            export namespace operator {
                
                export type loosely_equal = null
                
                export type strictly_equal = null
                
                export type loosely_not_equal = null
                
                export type strictly_not_equal = null
                
                export type smaller_than = null
                
                export type smaller_than_or_equal = null
                
                export type greater_than = null
                
                export type greater_than_or_equal = null
                
            }
            
            export type operator = 
                | readonly ['loosely equal', operator.loosely_equal]
                | readonly ['strictly equal', operator.strictly_equal]
                | readonly ['loosely not equal', operator.loosely_not_equal]
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
                
                export type D = Expression_
                
            }
            
            export type properties = _pi.Dictionary<properties.D>
            
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
    
    export type Expression_ = 
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
    
    export namespace String_Literal_ {
        
        export namespace delimiter {
            
            export type quote = null
            
            export type apostrophe = null
            
        }
        
        export type delimiter = 
            | readonly ['quote', delimiter.quote]
            | readonly ['apostrophe', delimiter.apostrophe]
        
        export type value = string
        
    }
    
    export type String_Literal_ = {
        readonly 'delimiter': String_Literal_.delimiter
        readonly 'value': String_Literal_.value
    }
    
    export namespace Identifier_ {
        
        export type value = string
        
    }
    
    export type Identifier_ = {
        readonly 'value': Identifier_.value
    }
    
    export { 
        Directory_ as Directory, 
        Block_ as Block, 
        Statements_ as Statements, 
        Type_ as Type, 
        Function_Parameters_ as Function_Parameters, 
        Expression_ as Expression, 
        String_Literal_ as String_Literal, 
        Identifier_ as Identifier, 
    }
