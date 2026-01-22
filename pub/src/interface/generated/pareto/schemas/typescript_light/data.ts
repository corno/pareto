
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../core/location"

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

export namespace Type_ {
    
    export type _boolean = null
    
    export namespace _function {
        
        export namespace type_parameters {
            
            export type L = string
            
        }
        
        export type type_parameters = _pi.List<type_parameters.L>
        
        export namespace parameters {
            
            export namespace L {
                
                export type name = string
                
                export namespace _type {
                    
                    export type O = Type_
                    
                }
                
                export type _type = _pi.Optional_Value<_type.O>
                
            }
            
            export type L = {
                readonly 'name': L.name
                readonly 'type': L._type
            }
            
        }
        
        export type parameters = _pi.List<parameters.L>
        
        export type _return = Type_
        
    }
    
    export type _function = {
        readonly 'type parameters': _function.type_parameters
        readonly 'parameters': _function.parameters
        readonly 'return': _function._return
    }
    
    export type literal_type = String_Literal_
    
    export type _null = null
    
    export type _number = null
    
    export type _string = null
    
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
                
                export type _type = Type_
                
            }
            
            export type D = {
                readonly 'readonly': D.readonly
                readonly 'type': D._type
            }
            
        }
        
        export type properties = _pi.Dictionary<properties.D>
        
    }
    
    export type type_literal = {
        readonly 'properties': type_literal.properties
    }
    
    export namespace type_reference {
        
        export type start = string
        
        export namespace tail {
            
            export type L = string
            
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
    
    export type _void = null
    
}

export type Type_ = 
    | readonly ['boolean', Type_._boolean]
    | readonly ['function', Type_._function]
    | readonly ['literal type', Type_.literal_type]
    | readonly ['null', Type_._null]
    | readonly ['number', Type_._number]
    | readonly ['string', Type_._string]
    | readonly ['tuple', Type_.tuple]
    | readonly ['type literal', Type_.type_literal]
    | readonly ['type reference', Type_.type_reference]
    | readonly ['union', Type_.union]
    | readonly ['void', Type_._void]

export namespace Block_Part_ {
    
    export type snippet = string
    
    export type indent = Group_
    
    export type sub_block = Block_
    
    export namespace optional {
        
        export type O = Block_Part_
        
    }
    
    export type optional = _pi.Optional_Value<optional.O>
    
    export type nothing = null
    
}

export type Block_Part_ = 
    | readonly ['snippet', Block_Part_.snippet]
    | readonly ['indent', Block_Part_.indent]
    | readonly ['sub block', Block_Part_.sub_block]
    | readonly ['optional', Block_Part_.optional]
    | readonly ['nothing', Block_Part_.nothing]

export namespace Expression_ {
    
    export type raw = Block_Part_
    
    export type number_literal = number
    
    export type _true = null
    
    export type _false = null
    
    export type _null = null
    
    export type string_literal = String_Literal_
    
    export namespace object_literal {
        
        export namespace properties {
            
            export type D = Expression_
            
        }
        
        export type properties = _pi.Dictionary<properties.D>
        
    }
    
    export type object_literal = {
        readonly 'properties': object_literal.properties
    }
    
    export namespace array_literal {
        
        export type L = Expression_
        
    }
    
    export type array_literal = _pi.List<array_literal.L>
    
    export namespace arrow_function {
        
        export namespace parameters {
            
            export namespace L {
                
                export type name = string
                
                export namespace _type {
                    
                    export type O = Type_
                    
                }
                
                export type _type = _pi.Optional_Value<_type.O>
                
            }
            
            export type L = {
                readonly 'name': L.name
                readonly 'type': L._type
            }
            
        }
        
        export type parameters = _pi.List<parameters.L>
        
        export namespace return_type {
            
            export type O = Type_
            
        }
        
        export type return_type = _pi.Optional_Value<return_type.O>
        
        export namespace _type {
            
            export type block = Statements_
            
            export type expression = Expression_
            
        }
        
        export type _type = 
            | readonly ['block', _type.block]
            | readonly ['expression', _type.expression]
        
    }
    
    export type arrow_function = {
        readonly 'parameters': arrow_function.parameters
        readonly 'return type': arrow_function.return_type
        readonly 'type': arrow_function._type
    }
    
    export namespace call {
        
        export type function_selection = Expression_
        
        export namespace _arguments {
            
            export type L = Expression_
            
        }
        
        export type _arguments = _pi.List<_arguments.L>
        
    }
    
    export type call = {
        readonly 'function selection': call.function_selection
        readonly 'arguments': call._arguments
    }
    
}

export type Expression_ = 
    | readonly ['raw', Expression_.raw]
    | readonly ['number literal', Expression_.number_literal]
    | readonly ['true', Expression_._true]
    | readonly ['false', Expression_._false]
    | readonly ['null', Expression_._null]
    | readonly ['string literal', Expression_.string_literal]
    | readonly ['object literal', Expression_.object_literal]
    | readonly ['array literal', Expression_.array_literal]
    | readonly ['arrow function', Expression_.arrow_function]
    | readonly ['call', Expression_.call]

export namespace Block_ {
    
    export type L = Block_Part_
    
}

export type Block_ = _pi.List<Block_.L>

export namespace Group_Part_ {
    
    export type nested_block = Block_
    
    export type block = string
    
    export type sub_group = Group_
    
    export namespace optional {
        
        export type O = Group_Part_
        
    }
    
    export type optional = _pi.Optional_Value<optional.O>
    
    export type nothing = null
    
}

export type Group_Part_ = 
    | readonly ['nested block', Group_Part_.nested_block]
    | readonly ['block', Group_Part_.block]
    | readonly ['sub group', Group_Part_.sub_group]
    | readonly ['optional', Group_Part_.optional]
    | readonly ['nothing', Group_Part_.nothing]

export namespace Group_ {
    
    export type L = Group_Part_
    
}

export type Group_ = _pi.List<Group_.L>

export namespace Statements_ {
    
    export namespace L {
        
        export namespace _import {
            
            export namespace _type {
                
                export type namespace = string
                
                export namespace named {
                    
                    export namespace specifiers {
                        
                        export namespace L {
                            
                            export type name = string
                            
                            export namespace _as {
                                
                                export type O = string
                                
                            }
                            
                            export type _as = _pi.Optional_Value<_as.O>
                            
                        }
                        
                        export type L = {
                            readonly 'name': L.name
                            readonly 'as': L._as
                        }
                        
                    }
                    
                    export type specifiers = _pi.List<specifiers.L>
                    
                }
                
                export type named = {
                    readonly 'specifiers': named.specifiers
                }
                
            }
            
            export type _type = 
                | readonly ['namespace', _type.namespace]
                | readonly ['named', _type.named]
            
            export type _from = string
            
        }
        
        export type _import = {
            readonly 'type': _import._type
            readonly 'from': _import._from
        }
        
        export namespace _export {
            
            export namespace _type {
                
                export namespace named_exports {
                    
                    export namespace specifiers {
                        
                        export namespace L {
                            
                            export type name = string
                            
                            export namespace _as {
                                
                                export type O = string
                                
                            }
                            
                            export type _as = _pi.Optional_Value<_as.O>
                            
                        }
                        
                        export type L = {
                            readonly 'name': L.name
                            readonly 'as': L._as
                        }
                        
                    }
                    
                    export type specifiers = _pi.List<specifiers.L>
                    
                    export namespace _from {
                        
                        export type O = string
                        
                    }
                    
                    export type _from = _pi.Optional_Value<_from.O>
                    
                }
                
                export type named_exports = {
                    readonly 'specifiers': named_exports.specifiers
                    readonly 'from': named_exports._from
                }
                
            }
            
            export type _type = 
                | readonly ['named exports', _type.named_exports]
            
        }
        
        export type _export = {
            readonly 'type': _export._type
        }
        
        export namespace module_declaration {
            
            export type _export = boolean
            
            export type name = string
            
            export type block = Statements_
            
        }
        
        export type module_declaration = {
            readonly 'export': module_declaration._export
            readonly 'name': module_declaration.name
            readonly 'block': module_declaration.block
        }
        
        export namespace type_alias_declaration {
            
            export type _export = boolean
            
            export type name = string
            
            export namespace parameters {
                
                export type L = string
                
            }
            
            export type parameters = _pi.List<parameters.L>
            
            export type _type = Type_
            
        }
        
        export type type_alias_declaration = {
            readonly 'export': type_alias_declaration._export
            readonly 'name': type_alias_declaration.name
            readonly 'parameters': type_alias_declaration.parameters
            readonly 'type': type_alias_declaration._type
        }
        
        export namespace variable {
            
            export type _export = boolean
            
            export type _const = boolean
            
            export type name = string
            
            export namespace _type {
                
                export type O = Type_
                
            }
            
            export type _type = _pi.Optional_Value<_type.O>
            
            export namespace expression {
                
                export type O = Expression_
                
            }
            
            export type expression = _pi.Optional_Value<expression.O>
            
        }
        
        export type variable = {
            readonly 'export': variable._export
            readonly 'const': variable._const
            readonly 'name': variable.name
            readonly 'type': variable._type
            readonly 'expression': variable.expression
        }
        
        export type raw = Group_
        
    }
    
    export type L = 
        | readonly ['import', L._import]
        | readonly ['export', L._export]
        | readonly ['module declaration', L.module_declaration]
        | readonly ['type alias declaration', L.type_alias_declaration]
        | readonly ['variable', L.variable]
        | readonly ['raw', L.raw]
    
}

export type Statements_ = _pi.List<Statements_.L>

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

export { 
    String_Literal_ as String_Literal, 
    Type_ as Type, 
    Block_Part_ as Block_Part, 
    Expression_ as Expression, 
    Block_ as Block, 
    Group_Part_ as Group_Part, 
    Group_ as Group, 
    Statements_ as Statements, 
    Directory_ as Directory, 
}
