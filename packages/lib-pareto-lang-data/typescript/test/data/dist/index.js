"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ = void 0;
const _pl = __importStar(require("pareto-core-lib"));
const _pd = __importStar(require("pareto-core-dev"));
exports.$ = {
    'pareto lang data': {
        'createResolveContext': ($) => _pl.cc($, ($) => {
            const r_$Atom__Types = ($) => $.map(($) => _pl.cc($, ($) => {
                return null;
            }));
            const r_$Atom = ($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                return {
                    'type': _ltype,
                };
            });
            const r_$Type = ($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => _pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'array': return _pl.ss($, ($) => ['array', _pl.cc($, ($) => {
                                const _ltype = _pl.cc($['type'], ($) => r_$Type($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }));
                                return {
                                    'type': _ltype,
                                };
                            })]);
                        case 'atom': return _pl.ss($, ($) => ['atom', _pl.cc($, ($) => {
                                const atom = _pl.cc($['atom'], ($) => r_$Atom($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                }));
                                return {
                                    'atom': atom,
                                };
                            })]);
                        case 'component': return _pl.ss($, ($) => ['component', _pl.cc($, ($) => {
                                const _ltype = _pl.cc($['type'], ($) => r_$Global__Type__Selection($, {
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }));
                                const _larguments = _pl.cc($['arguments'], ($) => $.map(($) => _pl.cc($, ($) => {
                                    return null;
                                })));
                                return {
                                    'arguments': _larguments,
                                    'type': _ltype,
                                };
                            })]);
                        case 'constraint': return _pl.ss($, ($) => ['constraint', r_$Type__Selection($, {
                                'imports': _pd.implementMe("ARGS"),
                                'sibling global types': _pd.implementMe("ARGS"),
                            })]);
                        case 'cyclic reference': return _pl.ss($, ($) => ['cyclic reference', _pl.cc($, ($) => {
                                const atom = _pl.cc($['atom'], ($) => r_$Atom($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                }));
                                const sibling = _pl.cc($['sibling'], ($) => r_$Global__Type__Selection($, {
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }));
                                return {
                                    'atom': atom,
                                    'sibling': sibling,
                                };
                            })]);
                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                                const key = _pl.cc($['key'], ($) => r_$Atom($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                }));
                                const constraints = _pl.cc($['constraints'], ($) => $.map(($) => _pl.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                                                const dictionary = _pl.cc($['dictionary'], ($) => r_$Dictionary__Selection($, {
                                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                                    'imports': _pd.implementMe("ARGS"),
                                                    'sibling global types': _pd.implementMe("ARGS"),
                                                }));
                                                const dense = _pl.cc($['dense'], ($) => _pl.cc($, ($) => {
                                                    switch ($[0]) {
                                                        case 'no': return _pl.ss($, ($) => ['no', _pl.cc($, ($) => {
                                                                return null;
                                                            })]);
                                                        case 'yes': return _pl.ss($, ($) => ['yes', _pl.cc($, ($) => {
                                                                return null;
                                                            })]);
                                                        default: return _pl.au($[0]);
                                                    }
                                                }));
                                                return {
                                                    'dense': dense,
                                                    'dictionary': dictionary,
                                                };
                                            })]);
                                        case 'lookup': return _pl.ss($, ($) => ['lookup', r_$Global__Type__Selection($, {
                                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                                'imports': _pd.implementMe("ARGS"),
                                                'sibling global types': _pd.implementMe("ARGS"),
                                            })]);
                                        default: return _pl.au($[0]);
                                    }
                                })));
                                const _ltype = _pl.cc($['type'], ($) => r_$Type($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }));
                                return {
                                    'constraints': constraints,
                                    'key': key,
                                    'type': _ltype,
                                };
                            })]);
                        case 'group': return _pl.ss($, ($) => ['group', _pl.cc($, ($) => {
                                const properties = _pl.cc($['properties'], ($) => $.map(($) => _pl.cc($, ($) => {
                                    const _ltype = _pl.cc($['type'], ($) => r_$Type($, {
                                        'atom types': _pd.implementMe("ARGS"),
                                        'cyclic sibling global types': _pd.implementMe("ARGS"),
                                        'imports': _pd.implementMe("ARGS"),
                                        'sibling global types': _pd.implementMe("ARGS"),
                                    }));
                                    return {
                                        'type': _ltype,
                                    };
                                })));
                                return {
                                    'properties': properties,
                                };
                            })]);
                        case 'nothing': return _pl.ss($, ($) => ['nothing', _pl.cc($, ($) => {
                                return null;
                            })]);
                        case 'optional': return _pl.ss($, ($) => ['optional', _pl.cc($, ($) => {
                                const _ltype = _pl.cc($['type'], ($) => r_$Type($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }));
                                return {
                                    'type': _ltype,
                                };
                            })]);
                        case 'resolved reference': return _pl.ss($, ($) => ['resolved reference', _pl.cc($, ($) => {
                                const atom = _pl.cc($['atom'], ($) => r_$Atom($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                }));
                                const value = _pl.cc($['value'], ($) => _pl.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', r_$Dictionary__Selection($, {
                                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                                'imports': _pd.implementMe("ARGS"),
                                                'sibling global types': _pd.implementMe("ARGS"),
                                            })]);
                                        case 'lookup': return _pl.ss($, ($) => ['lookup', r_$Global__Type__Selection($, {
                                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                                'imports': _pd.implementMe("ARGS"),
                                                'sibling global types': _pd.implementMe("ARGS"),
                                            })]);
                                        default: return _pl.au($[0]);
                                    }
                                }));
                                return {
                                    'atom': atom,
                                    'value': value,
                                };
                            })]);
                        case 'state group': return _pl.ss($, ($) => ['state group', _pl.cc($, ($) => {
                                const states = _pl.cc($['states'], ($) => $.map(($) => _pl.cc($, ($) => {
                                    const _ltype = _pl.cc($['type'], ($) => r_$Type($, {
                                        'atom types': _pd.implementMe("ARGS"),
                                        'cyclic sibling global types': _pd.implementMe("ARGS"),
                                        'imports': _pd.implementMe("ARGS"),
                                        'sibling global types': _pd.implementMe("ARGS"),
                                    }));
                                    return {
                                        'type': _ltype,
                                    };
                                })));
                                return {
                                    'states': states,
                                };
                            })]);
                        default: return _pl.au($[0]);
                    }
                }));
                return {
                    'type': _ltype,
                };
            });
            const r_$Imports = ($) => $.map(($) => _pl.cc($, ($) => {
                const library = _pl.cc($['library'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                return {
                    'library': library,
                };
            }));
            const r_$Global__Type__Declaration = ($) => _pl.cc($, ($) => {
                const parameters = _pl.cc($['parameters'], ($) => $.map(($) => _pl.cc($, ($) => {
                    const _ltype = _pl.cc($['type'], ($) => _pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'resolved value': return _pl.ss($, ($) => ['resolved value', _pd.implementMe("CyCLIC REFERENCE")]);
                            case 'sibling lookup': return _pl.ss($, ($) => ['sibling lookup', _pd.implementMe("CyCLIC REFERENCE")]);
                            case 'cyclic sibling lookup': return _pl.ss($, ($) => ['cyclic sibling lookup', _pd.implementMe("CyCLIC REFERENCE")]);
                            default: return _pl.au($[0]);
                        }
                    }));
                    const optional = _pl.cc($['optional'], ($) => _pd.implementMe("OPTIONAL"));
                    return {
                        'optional': optional,
                        'type': _ltype,
                    };
                })));
                const result = _pl.cc($['result'], ($) => _pd.implementMe("OPTIONAL"));
                return {
                    'parameters': parameters,
                    'result': result,
                };
            });
            const r_$Global__Type__Declarations = ($) => $.map(($) => r_$Global__Type__Declaration($, {
                'all siblings': _pd.implementMe("ARGS"),
            }));
            const r_$Global__Type__Definition = ($) => _pl.cc($, ($) => {
                const declaration = _pl.cc($['declaration'], ($) => _pd.implementMe("CONSTRAINT"));
                const _ltype = _pl.cc($['type'], ($) => r_$Type($, {
                    'atom types': _pd.implementMe("ARGS"),
                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                    'imports': _pd.implementMe("ARGS"),
                    'sibling global types': _pd.implementMe("ARGS"),
                }));
                return {
                    'declaration': declaration,
                    'type': _ltype,
                };
            });
            const r_$Type__Selection__Tail = ($) => _pl.cc($, ($) => {
                const step__type = _pl.cc($['step type'], ($) => _pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                                const dictionary = _pl.cc($['dictionary'], ($) => _pd.implementMe("CONSTRAINT"));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'dictionary': dictionary,
                                    'tail': tail,
                                };
                            })]);
                        case 'optional': return _pl.ss($, ($) => ['optional', _pl.cc($, ($) => {
                                const optional = _pl.cc($['optional'], ($) => _pd.implementMe("CONSTRAINT"));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'optional': optional,
                                    'tail': tail,
                                };
                            })]);
                        case 'array': return _pl.ss($, ($) => ['array', _pl.cc($, ($) => {
                                const array = _pl.cc($['array'], ($) => _pd.implementMe("CONSTRAINT"));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'array': array,
                                    'tail': tail,
                                };
                            })]);
                        case 'group': return _pl.ss($, ($) => ['group', _pl.cc($, ($) => {
                                const group = _pl.cc($['group'], ($) => _pd.implementMe("CONSTRAINT"));
                                const property = _pl.cc($['property'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'group': group,
                                    'property': property,
                                    'tail': tail,
                                };
                            })]);
                        case 'state group': return _pl.ss($, ($) => ['state group', _pl.cc($, ($) => {
                                const state__group = _pl.cc($['state group'], ($) => _pd.implementMe("CONSTRAINT"));
                                const state = _pl.cc($['state'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'state': state,
                                    'state group': state__group,
                                    'tail': tail,
                                };
                            })]);
                        default: return _pl.au($[0]);
                    }
                }));
                return {
                    'step type': step__type,
                };
            });
            const r_$Type__Selection = ($) => _pl.cc($, ($) => {
                const _limport = _pl.cc($['import'], ($) => _pd.implementMe("OPTIONAL"));
                const global__type = _pl.cc($['global type'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                return {
                    'global type': global__type,
                    'import': _limport,
                    'tail': tail,
                };
            });
            const r_$Dictionary__Selection = ($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => r_$Type__Selection($, {
                    'imports': _pd.implementMe("ARGS"),
                    'sibling global types': _pd.implementMe("ARGS"),
                }));
                const dictionary = _pl.cc($['dictionary'], ($) => _pd.implementMe("CONSTRAINT"));
                return {
                    'dictionary': dictionary,
                    'type': _ltype,
                };
            });
            const r_$Type__Library = ($) => _pl.cc($, ($) => {
                const imports = _pl.cc($['imports'], ($) => r_$Imports($, {
                    'external type libraries': _pd.implementMe("ARGS"),
                }));
                const atom__types = _pl.cc($['atom types'], ($) => r_$Atom__Types($));
                const global__types = _pl.cc($['global types'], ($) => _pl.cc($, ($) => {
                    const declarations = _pl.cc($['declarations'], ($) => r_$Global__Type__Declarations($));
                    const definitions = _pl.cc($['definitions'], ($) => $.map(($) => r_$Global__Type__Definition($, {
                        'all siblings': _pd.implementMe("ARGS"),
                        'atom types': _pd.implementMe("ARGS"),
                        'global type declarations': _pd.implementMe("ARGS"),
                        'imports': _pd.implementMe("ARGS"),
                        'key': _pd.implementMe("ARGS"),
                        'non cyclic siblings': _pd.implementMe("ARGS"),
                    })));
                    return {
                        'declarations': declarations,
                        'definitions': definitions,
                    };
                }));
                return {
                    'atom types': atom__types,
                    'global types': global__types,
                    'imports': imports,
                };
            });
            const r_$Global__Type__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'resolved sibling': return _pl.ss($, ($) => ['resolved sibling', _pl.cc($, ($) => {
                            const _ltype = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            return {
                                'type': _ltype,
                            };
                        })]);
                    case 'import': return _pl.ss($, ($) => ['import', _pl.cc($, ($) => {
                            const library = _pl.cc($['library'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            const _ltype = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            return {
                                'library': library,
                                'type': _ltype,
                            };
                        })]);
                    case 'cyclic sibling': return _pl.ss($, ($) => ['cyclic sibling', _pl.cc($, ($) => {
                            const _ltype = _pl.cc($['type'], ($) => _pd.implementMe("CyCLIC REFERENCE"));
                            return {
                                'type': _ltype,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Model = ($) => _pl.cc($, ($) => {
                const type__library = _pl.cc($['type library'], ($) => r_$Type__Library($, {
                    'external type libraries': _pd.implementMe("ARGS"),
                }));
                const root = _pl.cc($['root'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                return {
                    'root': root,
                    'type library': type__library,
                };
            });
            const r_$Project = ($) => _pl.cc($, ($) => {
                const type__libraries = _pl.cc($['type libraries'], ($) => $.map(($) => r_$Type__Library($, {
                    'external type libraries': _pd.implementMe("ARGS"),
                })));
                return {
                    'type libraries': type__libraries,
                };
            });
            const r_$Root = ($) => r_$Project($);
            const r_$Variable = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'parent variable': return _pl.ss($, ($) => ['parent variable', _pd.implementMe("RESOLVED REFERENCE")]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Variables = ($) => $.map(($) => r_$Variable($));
            const r_$Value__Selection__Tail = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'reference': return _pl.ss($, ($) => ['reference', _pl.cc($, ($) => {
                            const reference = _pl.cc($['reference'], ($) => _pd.implementMe("CONSTRAINT"));
                            const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'reference': reference,
                                'tail': tail,
                            };
                        })]);
                    case 'component': return _pl.ss($, ($) => ['component', _pl.cc($, ($) => {
                            const component = _pl.cc($['component'], ($) => _pd.implementMe("CONSTRAINT"));
                            const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'component': component,
                                'tail': tail,
                            };
                        })]);
                    case 'state group': return _pl.ss($, ($) => ['state group', _pl.cc($, ($) => {
                            const state__group = _pl.cc($['state group'], ($) => _pd.implementMe("CONSTRAINT"));
                            const result__type = _pl.cc($['result type'], ($) => r_$Global__Type__Selection($, {
                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                'imports': _pd.implementMe("ARGS"),
                                'sibling global types': _pd.implementMe("ARGS"),
                            }));
                            const states = _pl.cc($['states'], ($) => $.map(($) => r_$Any__Value__Selection($)));
                            return {
                                'result type': result__type,
                                'state group': state__group,
                                'states': states,
                            };
                        })]);
                    case 'group': return _pl.ss($, ($) => ['group', _pl.cc($, ($) => {
                            const group = _pl.cc($['group'], ($) => _pd.implementMe("CONSTRAINT"));
                            const property = _pl.cc($['property'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'group': group,
                                'property': property,
                                'tail': tail,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$No__Context__Value__Selection = ($) => _pl.cc($, ($) => {
                const start = _pl.cc($['start'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                return {
                    'start': start,
                    'tail': tail,
                };
            });
            const r_$Any__Value__Selection = ($) => _pl.cc($, ($) => {
                const start = _pl.cc($['start'], ($) => _pd.implementMe("OPTIONAL"));
                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                return {
                    'start': start,
                    'tail': tail,
                };
            });
            return {
                'Any Value Selection': r_$Any__Value__Selection,
                'Atom': r_$Atom,
                'Atom Types': r_$Atom__Types,
                'Dictionary Selection': r_$Dictionary__Selection,
                'Global Type Declaration': r_$Global__Type__Declaration,
                'Global Type Declarations': r_$Global__Type__Declarations,
                'Global Type Definition': r_$Global__Type__Definition,
                'Global Type Selection': r_$Global__Type__Selection,
                'Imports': r_$Imports,
                'Model': r_$Model,
                'No Context Value Selection': r_$No__Context__Value__Selection,
                'Project': r_$Project,
                'Root': r_$Root,
                'Type': r_$Type,
                'Type Library': r_$Type__Library,
                'Type Selection': r_$Type__Selection,
                'Type Selection Tail': r_$Type__Selection__Tail,
                'Value Selection Tail': r_$Value__Selection__Tail,
                'Variable': r_$Variable,
                'Variables': r_$Variables,
            };
        }),
        'createSerializeContext': ($) => ({
            'Any Value Selection': ($) => { },
            'Atom': ($) => { },
            'Atom Types': ($) => { },
            'Dictionary Selection': ($) => { },
            'Global Type Declaration': ($) => { },
            'Global Type Declarations': ($) => { },
            'Global Type Definition': ($) => { },
            'Global Type Selection': ($) => { },
            'Imports': ($) => { },
            'Model': ($) => { },
            'No Context Value Selection': ($) => { },
            'Project': ($) => { },
            'Root': ($) => { },
            'Type': ($) => { },
            'Type Library': ($) => { },
            'Type Selection': ($) => { },
            'Type Selection Tail': ($) => { },
            'Value Selection Tail': ($) => { },
            'Variable': ($) => { },
            'Variables': ($) => { },
        }),
    },
    'proto implementation': {
        'createResolveContext': ($) => _pl.cc($, ($) => {
            const r_$Type__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'current namespaceXXXXX': return _pl.ss($, ($) => ['current namespaceXXXXX', _pd.implementMe("RESOLVED REFERENCE")]);
                    case 'child namespace': return _pl.ss($, ($) => ['child namespace', _pl.cc($, ($) => {
                            const namespacex = _pl.cc($['namespacex'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            const selection = _pl.cc($['selection'], ($) => r_$Type__Selection($));
                            return {
                                'namespacex': namespacex,
                                'selection': selection,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Type__Arguments = ($) => $.map(($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => r_$Type__Selection($));
                return {
                    'type': _ltype,
                };
            }));
            const r_$Local__Variables = ($) => $.map(($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => r_$Type__Selection($));
                const initialization = _pl.cc($['initialization'], ($) => r_$Initialization($));
                return {
                    'initialization': initialization,
                    'type': _ltype,
                };
            }));
            const r_$Aggregated__Variable = ($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => _pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'variable stack2': return _pl.ss($, ($) => ['variable stack2', _pl.cc($, ($) => {
                                const variable = _pl.cc($['variable'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                                return {
                                    'variable': variable,
                                };
                            })]);
                        case 'local': return _pl.ss($, ($) => ['local', _pl.cc($, ($) => {
                                return null;
                            })]);
                        default: return _pl.au($[0]);
                    }
                }));
                return {
                    'type': _ltype,
                };
            });
            const r_$Aggregated__Variables = ($) => $.map(($) => r_$Aggregated__Variable($));
            const r_$Variables = ($) => _pl.cc($, ($) => {
                const local = _pl.cc($['local'], ($) => r_$Local__Variables($));
                const aggregated = _pl.cc($['aggregated'], ($) => r_$Aggregated__Variables($));
                return {
                    'aggregated': aggregated,
                    'local': local,
                };
            });
            const r_$Target__Selection__Tail = ($) => _pd.implementMe("OPTIONAL");
            const r_$Target__Selection = ($) => _pl.cc($, ($) => {
                const variable = _pl.cc($['variable'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                const tail = _pl.cc($['tail'], ($) => r_$Target__Selection__Tail($));
                return {
                    'tail': tail,
                    'variable': variable,
                };
            });
            const r_$Source__Selection__Tail = ($) => _pd.implementMe("OPTIONAL");
            const r_$Source__Selection = ($) => _pl.cc($, ($) => {
                const start = _pl.cc($['start'], ($) => _pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'context': return _pl.ss($, ($) => ['context', _pl.cc($, ($) => {
                                return null;
                            })]);
                        case 'variable': return _pl.ss($, ($) => ['variable', _pd.implementMe("RESOLVED REFERENCE")]);
                        default: return _pl.au($[0]);
                    }
                }));
                const tail = _pl.cc($['tail'], ($) => r_$Source__Selection__Tail($));
                return {
                    'start': start,
                    'tail': tail,
                };
            });
            const r_$Initialization__Or__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'initialization': return _pl.ss($, ($) => ['initialization', r_$Initialization($)]);
                    case 'selection': return _pl.ss($, ($) => ['selection', _pl.cc($, ($) => {
                            const selection = _pl.cc($['selection'], ($) => r_$Source__Selection($));
                            return {
                                'selection': selection,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$String__Initialization__Or__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'initialization': return _pl.ss($, ($) => ['initialization', r_$String__Initialization($)]);
                    case 'selection': return _pl.ss($, ($) => ['selection', _pl.cc($, ($) => {
                            const selection = _pl.cc($['selection'], ($) => r_$Source__Selection($));
                            const _lstring = _pl.cc($['string'], ($) => _pd.implementMe("CONSTRAINT"));
                            return {
                                'selection': selection,
                                'string': _lstring,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Numerical__Initialization__Or__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'initialization': return _pl.ss($, ($) => ['initialization', r_$Numerical__Initialization($)]);
                    case 'selection': return _pl.ss($, ($) => ['selection', _pl.cc($, ($) => {
                            const selection = _pl.cc($['selection'], ($) => r_$Source__Selection($));
                            const _lnumber = _pl.cc($['number'], ($) => _pd.implementMe("CONSTRAINT"));
                            return {
                                'number': _lnumber,
                                'selection': selection,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Boolean__Initialization__Or__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'initialization': return _pl.ss($, ($) => ['initialization', r_$Boolean__Initialization($)]);
                    case 'selection': return _pl.ss($, ($) => ['selection', _pl.cc($, ($) => {
                            const selection = _pl.cc($['selection'], ($) => r_$Source__Selection($));
                            const _lboolean = _pl.cc($['boolean'], ($) => _pd.implementMe("CONSTRAINT"));
                            return {
                                'boolean': _lboolean,
                                'selection': selection,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Boolean__Initialization = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'and': return _pl.ss($, ($) => ['and', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => r_$Boolean__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$Boolean__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'or': return _pl.ss($, ($) => ['or', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => r_$Boolean__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$Boolean__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'false': return _pl.ss($, ($) => ['false', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'not': return _pl.ss($, ($) => ['not', r_$Boolean__Initialization__Or__Selection($)]);
                    case 'true': return _pl.ss($, ($) => ['true', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'string equals': return _pl.ss($, ($) => ['string equals', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => r_$String__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$String__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'string not equals': return _pl.ss($, ($) => ['string not equals', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => r_$String__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$String__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'number equals': return _pl.ss($, ($) => ['number equals', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'number not equals': return _pl.ss($, ($) => ['number not equals', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'greater than': return _pl.ss($, ($) => ['greater than', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'less than': return _pl.ss($, ($) => ['less than', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Numerical__Initialization = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'minus': return _pl.ss($, ($) => ['minus', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'plus': return _pl.ss($, ($) => ['plus', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'predecrement': return _pl.ss($, ($) => ['predecrement', r_$Numerical__Initialization__Or__Selection($)]);
                    case 'preincrement': return _pl.ss($, ($) => ['preincrement', r_$Numerical__Initialization__Or__Selection($)]);
                    case 'postdecrement': return _pl.ss($, ($) => ['postdecrement', r_$Numerical__Initialization__Or__Selection($)]);
                    case 'postincrement': return _pl.ss($, ($) => ['postincrement', r_$Numerical__Initialization__Or__Selection($)]);
                    case 'numeric literal': return _pl.ss($, ($) => ['numeric literal', $]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$String__Initialization = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'string literal': return _pl.ss($, ($) => ['string literal', $]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Initialization = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'array literal': return _pl.ss($, ($) => ['array literal', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const initialization = _pl.cc($['initialization'], ($) => $.map(($) => r_$Initialization__Or__Selection($)));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                            };
                        })]);
                    case 'array map': return _pl.ss($, ($) => ['array map', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const source = _pl.cc($['source'], ($) => r_$Source__Selection($));
                            const initialization = _pl.cc($['initialization'], ($) => r_$Initialization__Or__Selection($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                                'source': source,
                            };
                        })]);
                    case 'boolean': return _pl.ss($, ($) => ['boolean', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const initialization = _pl.cc($['initialization'], ($) => r_$Boolean__Initialization($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                            };
                        })]);
                    case 'change context': return _pl.ss($, ($) => ['change context', _pl.cc($, ($) => {
                            const source = _pl.cc($['source'], ($) => r_$Source__Selection($));
                            const initialization = _pl.cc($['initialization'], ($) => r_$Initialization__Or__Selection($));
                            return {
                                'initialization': initialization,
                                'source': source,
                            };
                        })]);
                    case 'dictionary literal': return _pl.ss($, ($) => ['dictionary literal', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const initialization = _pl.cc($['initialization'], ($) => $.map(($) => r_$Initialization__Or__Selection($)));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                            };
                        })]);
                    case 'dictionary map': return _pl.ss($, ($) => ['dictionary map', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const source = _pl.cc($['source'], ($) => r_$Source__Selection($));
                            const initialization = _pl.cc($['initialization'], ($) => r_$Initialization__Or__Selection($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                                'source': source,
                            };
                        })]);
                    case 'group literal': return _pl.ss($, ($) => ['group literal', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const properties = _pl.cc($['properties'], ($) => $.map(($) => r_$Initialization__Or__Selection($)));
                            return {
                                'definition': definition,
                                'properties': properties,
                            };
                        })]);
                    case 'implement me': return _pl.ss($, ($) => ['implement me', $]);
                    case 'null': return _pl.ss($, ($) => ['null', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            return {
                                'definition': definition,
                            };
                        })]);
                    case 'numerical': return _pl.ss($, ($) => ['numerical', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const initialization = _pl.cc($['initialization'], ($) => r_$Numerical__Initialization($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                            };
                        })]);
                    case 'optional': return _pl.ss($, ($) => ['optional', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            return {
                                'definition': definition,
                            };
                        })]);
                    case 'procedure': return _pl.ss($, ($) => ['procedure', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const temp__has__parameters = _pl.cc($['temp has parameters'], ($) => _pd.implementMe("OPTIONAL"));
                            const variables = _pl.cc($['variables'], ($) => r_$Aggregated__Variables($));
                            const block = _pl.cc($['block'], ($) => r_$Block($));
                            return {
                                'block': block,
                                'definition': definition,
                                'temp has parameters': temp__has__parameters,
                                'variables': variables,
                            };
                        })]);
                    case 'tagged union literal': return _pl.ss($, ($) => ['tagged union literal', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const state = _pl.cc($['state'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            const initialization = _pl.cc($['initialization'], ($) => r_$Initialization__Or__Selection($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                                'state': state,
                            };
                        })]);
                    case 'string': return _pl.ss($, ($) => ['string', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const initialization = _pl.cc($['initialization'], ($) => r_$String__Initialization($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                            };
                        })]);
                    case 'switch': return _pl.ss($, ($) => ['switch', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const temp__type = _pl.cc($['temp type'], ($) => r_$Type__Selection($));
                            const source = _pl.cc($['source'], ($) => r_$Source__Selection($));
                            const cases = _pl.cc($['cases'], ($) => $.map(($) => r_$Initialization__Or__Selection($)));
                            const _ldefault = _pl.cc($['default'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'cases': cases,
                                'default': _ldefault,
                                'definition': definition,
                                'source': source,
                                'temp type': temp__type,
                            };
                        })]);
                    case 'value function': return _pl.ss($, ($) => ['value function', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const temp__has__parameters = _pl.cc($['temp has parameters'], ($) => _pd.implementMe("OPTIONAL"));
                            const variables = _pl.cc($['variables'], ($) => r_$Aggregated__Variables($));
                            const initialization = _pl.cc($['initialization'], ($) => r_$Initialization__Or__Selection($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                                'temp has parameters': temp__has__parameters,
                                'variables': variables,
                            };
                        })]);
                    case 'variables': return _pl.ss($, ($) => ['variables', _pl.cc($, ($) => {
                            const variables = _pl.cc($['variables'], ($) => r_$Variables($));
                            const initialization = _pl.cc($['initialization'], ($) => r_$Initialization__Or__Selection($));
                            return {
                                'initialization': initialization,
                                'variables': variables,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Block = ($) => _pl.cc($, ($) => {
                const variables = _pl.cc($['variables'], ($) => r_$Variables($));
                const statements = _pl.cc($['statements'], ($) => r_$Statements($));
                return {
                    'statements': statements,
                    'variables': variables,
                };
            });
            const r_$Assign = ($) => _pl.cc($, ($) => {
                const target = _pl.cc($['target'], ($) => r_$Target__Selection($));
                const initialization = _pl.cc($['initialization'], ($) => r_$Initialization__Or__Selection($));
                return {
                    'initialization': initialization,
                    'target': target,
                };
            });
            const r_$Statements = ($) => $.map(($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'block': return _pl.ss($, ($) => ['block', r_$Block($)]);
                    case 'call': return _pl.ss($, ($) => ['call', _pl.cc($, ($) => {
                            const _lfunction = _pl.cc($['function'], ($) => r_$Source__Selection($));
                            const context__definition = _pl.cc($['context definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const context = _pl.cc($['context'], ($) => r_$Source__Selection($));
                            const _larguments = _pl.cc($['arguments'], ($) => $.map(($) => r_$Initialization__Or__Selection($)));
                            return {
                                'arguments': _larguments,
                                'context': context,
                                'context definition': context__definition,
                                'function': _lfunction,
                            };
                        })]);
                    case 'change context': return _pl.ss($, ($) => ['change context', _pl.cc($, ($) => {
                            const source = _pl.cc($['source'], ($) => r_$Source__Selection($));
                            const block = _pl.cc($['block'], ($) => r_$Block($));
                            return {
                                'block': block,
                                'source': source,
                            };
                        })]);
                    case 'if': return _pl.ss($, ($) => ['if', _pl.cc($, ($) => {
                            const condition = _pl.cc($['condition'], ($) => r_$Boolean__Initialization__Or__Selection($));
                            const then = _pl.cc($['then'], ($) => r_$Block($));
                            const _lelse = _pl.cc($['else'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'condition': condition,
                                'else': _lelse,
                                'then': then,
                            };
                        })]);
                    case 'switch': return _pl.ss($, ($) => ['switch', _pl.cc($, ($) => {
                            const source = _pl.cc($['source'], ($) => r_$Source__Selection($));
                            const context__definition = _pl.cc($['context definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const cases = _pl.cc($['cases'], ($) => $.map(($) => r_$Block($)));
                            const _ldefault = _pl.cc($['default'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'cases': cases,
                                'context definition': context__definition,
                                'default': _ldefault,
                                'source': source,
                            };
                        })]);
                    case 'with': return _pl.ss($, ($) => ['with', _pl.cc($, ($) => {
                            const source = _pl.cc($['source'], ($) => r_$Source__Selection($));
                            const action = _pl.cc($['action'], ($) => _pl.cc($, ($) => {
                                switch ($[0]) {
                                    case 'assign': return _pl.ss($, ($) => ['assign', r_$Assign($)]);
                                    case 'minus assign': return _pl.ss($, ($) => ['minus assign', _pl.cc($, ($) => {
                                            const _lnumber = _pl.cc($['number'], ($) => _pd.implementMe("CONSTRAINT"));
                                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                                            return {
                                                'number': _lnumber,
                                                'right hand side': right__hand__side,
                                            };
                                        })]);
                                    case 'plus assign': return _pl.ss($, ($) => ['plus assign', _pl.cc($, ($) => {
                                            const _lnumber = _pl.cc($['number'], ($) => _pd.implementMe("CONSTRAINT"));
                                            const right__hand__side = _pl.cc($['right hand side'], ($) => r_$Numerical__Initialization__Or__Selection($));
                                            return {
                                                'number': _lnumber,
                                                'right hand side': right__hand__side,
                                            };
                                        })]);
                                    default: return _pl.au($[0]);
                                }
                            }));
                            return {
                                'action': action,
                                'source': source,
                            };
                        })]);
                    case 'while': return _pl.ss($, ($) => ['while', _pl.cc($, ($) => {
                            const condition = _pl.cc($['condition'], ($) => r_$Boolean__Initialization__Or__Selection($));
                            const block = _pl.cc($['block'], ($) => r_$Block($));
                            return {
                                'block': block,
                                'condition': condition,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            }));
            const r_$Source__File = ($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => r_$Type__Selection($));
                const initialization = _pl.cc($['initialization'], ($) => r_$Initialization($));
                return {
                    'initialization': initialization,
                    'type': _ltype,
                };
            });
            const r_$Root = ($) => r_$Source__File($);
            return {
                'Aggregated Variable': r_$Aggregated__Variable,
                'Aggregated Variables': r_$Aggregated__Variables,
                'Assign': r_$Assign,
                'Block': r_$Block,
                'Boolean Initialization': r_$Boolean__Initialization,
                'Boolean Initialization Or Selection': r_$Boolean__Initialization__Or__Selection,
                'Initialization': r_$Initialization,
                'Initialization Or Selection': r_$Initialization__Or__Selection,
                'Local Variables': r_$Local__Variables,
                'Numerical Initialization': r_$Numerical__Initialization,
                'Numerical Initialization Or Selection': r_$Numerical__Initialization__Or__Selection,
                'Root': r_$Root,
                'Source File': r_$Source__File,
                'Source Selection': r_$Source__Selection,
                'Source Selection Tail': r_$Source__Selection__Tail,
                'Statements': r_$Statements,
                'String Initialization': r_$String__Initialization,
                'String Initialization Or Selection': r_$String__Initialization__Or__Selection,
                'Target Selection': r_$Target__Selection,
                'Target Selection Tail': r_$Target__Selection__Tail,
                'Type Arguments': r_$Type__Arguments,
                'Type Selection': r_$Type__Selection,
                'Variables': r_$Variables,
            };
        }),
        'createSerializeContext': ($) => ({
            'Aggregated Variable': ($) => { },
            'Aggregated Variables': ($) => { },
            'Assign': ($) => { },
            'Block': ($) => { },
            'Boolean Initialization': ($) => { },
            'Boolean Initialization Or Selection': ($) => { },
            'Initialization': ($) => { },
            'Initialization Or Selection': ($) => { },
            'Local Variables': ($) => { },
            'Numerical Initialization': ($) => { },
            'Numerical Initialization Or Selection': ($) => { },
            'Root': ($) => { },
            'Source File': ($) => { },
            'Source Selection': ($) => { },
            'Source Selection Tail': ($) => { },
            'Statements': ($) => { },
            'String Initialization': ($) => { },
            'String Initialization Or Selection': ($) => { },
            'Target Selection': ($) => { },
            'Target Selection Tail': ($) => { },
            'Type Arguments': ($) => { },
            'Type Selection': ($) => { },
            'Variables': ($) => { },
        }),
    },
    'proto typesystem': {
        'createResolveContext': ($) => _pl.cc($, ($) => {
            const r_$Aggregated__Type__Parameters = ($) => $.map(($) => _pl.cc($, ($) => {
                return null;
            }));
            const r_$Type__Parameters = ($) => _pl.cc($, ($) => {
                const local = _pl.cc($['local'], ($) => $.map(($) => _pl.cc($, ($) => {
                    return null;
                })));
                const aggregated = _pl.cc($['aggregated'], ($) => r_$Aggregated__Type__Parameters($));
                return {
                    'aggregated': aggregated,
                    'local': local,
                };
            });
            const r_$Function__Declaration = ($) => _pl.cc($, ($) => {
                const type__parameters = _pl.cc($['type parameters'], ($) => r_$Type__Parameters($, {
                    'parent type parameters': _pd.implementMe("ARGS"),
                }));
                const context = _pl.cc($['context'], ($) => r_$Type($, {
                    'cyclic sibling types': _pd.implementMe("ARGS"),
                    'resolved namespaces': _pd.implementMe("ARGS"),
                    'resolved sibling types': _pd.implementMe("ARGS"),
                    'type parameters': _pd.implementMe("ARGS"),
                }));
                const parameters = _pl.cc($['parameters'], ($) => $.map(($) => r_$Type($, {
                    'cyclic sibling types': _pd.implementMe("ARGS"),
                    'resolved namespaces': _pd.implementMe("ARGS"),
                    'resolved sibling types': _pd.implementMe("ARGS"),
                    'type parameters': _pd.implementMe("ARGS"),
                })));
                return {
                    'context': context,
                    'parameters': parameters,
                    'type parameters': type__parameters,
                };
            });
            const r_$Imports = ($) => $.map(($) => r_$Import($));
            const r_$Nested__Namespace = ($) => _pl.cc($, ($) => {
                const imports = _pl.cc($['imports'], ($) => r_$Imports($));
                const namespace = _pl.cc($['namespace'], ($) => r_$Namespace($, {
                    'parent type parameters': _pd.implementMe("ARGS"),
                    'resolved sibling namespaces': _pd.implementMe("ARGS"),
                }));
                return {
                    'imports': imports,
                    'namespace': namespace,
                };
            });
            const r_$Import = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'sibling': return _pl.ss($, ($) => ['sibling', _pd.implementMe("RESOLVED REFERENCE")]);
                    case 'parent import': return _pl.ss($, ($) => ['parent import', _pd.implementMe("RESOLVED REFERENCE")]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Namespace = ($) => _pl.cc($, ($) => {
                const namespaces = _pl.cc($['namespaces'], ($) => $.map(($) => r_$Nested__Namespace($, {
                    'resolved parent sibling namespaces': _pd.implementMe("ARGS"),
                })));
                const parameters = _pl.cc($['parameters'], ($) => r_$Type__Parameters($, {
                    'parent type parameters': _pd.implementMe("ARGS"),
                }));
                const types = _pl.cc($['types'], ($) => $.map(($) => r_$Type($, {
                    'cyclic sibling types': _pd.implementMe("ARGS"),
                    'resolved namespaces': _pd.implementMe("ARGS"),
                    'resolved sibling types': _pd.implementMe("ARGS"),
                    'type parameters': _pd.implementMe("ARGS"),
                })));
                return {
                    'namespaces': namespaces,
                    'parameters': parameters,
                    'types': types,
                };
            });
            const r_$Type = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'address function': return _pl.ss($, ($) => ['address function', _pl.cc($, ($) => {
                            const declaration = _pl.cc($['declaration'], ($) => r_$Function__Declaration($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            const return__type = _pl.cc($['return type'], ($) => r_$Type($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            return {
                                'declaration': declaration,
                                'return type': return__type,
                            };
                        })]);
                    case 'array': return _pl.ss($, ($) => ['array', r_$Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        })]);
                    case 'boolean': return _pl.ss($, ($) => ['boolean', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'computed': return _pl.ss($, ($) => ['computed', r_$Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        })]);
                    case 'dictionary': return _pl.ss($, ($) => ['dictionary', r_$Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        })]);
                    case 'group': return _pl.ss($, ($) => ['group', $.map(($) => _pl.cc($, ($) => {
                            const _ltype = _pl.cc($['type'], ($) => r_$Type($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            const mutable = _pl.cc($['mutable'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'mutable': mutable,
                                'type': _ltype,
                            };
                        }))]);
                    case 'lookup': return _pl.ss($, ($) => ['lookup', r_$Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        })]);
                    case 'null': return _pl.ss($, ($) => ['null', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'number': return _pl.ss($, ($) => ['number', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'optional': return _pl.ss($, ($) => ['optional', r_$Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        })]);
                    case 'procedure': return _pl.ss($, ($) => ['procedure', _pl.cc($, ($) => {
                            const declaration = _pl.cc($['declaration'], ($) => r_$Function__Declaration($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            return {
                                'declaration': declaration,
                            };
                        })]);
                    case 'string': return _pl.ss($, ($) => ['string', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'tagged union': return _pl.ss($, ($) => ['tagged union', $.map(($) => r_$Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        }))]);
                    case 'type parameter': return _pl.ss($, ($) => ['type parameter', _pd.implementMe("RESOLVED REFERENCE")]);
                    case 'type reference': return _pl.ss($, ($) => ['type reference', _pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'external': return _pl.ss($, ($) => ['external', _pl.cc($, ($) => {
                                        const namespace__path = _pl.cc($['namespace path'], ($) => r_$Namespace__Selection($, {
                                            'cyclic sibling types': _pd.implementMe("ARGS"),
                                            'resolved namespaces': _pd.implementMe("ARGS"),
                                            'resolved sibling types': _pd.implementMe("ARGS"),
                                            'type parameters': _pd.implementMe("ARGS"),
                                        }));
                                        const _ltype = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                                        return {
                                            'namespace path': namespace__path,
                                            'type': _ltype,
                                        };
                                    })]);
                                case 'sibling': return _pl.ss($, ($) => ['sibling', _pd.implementMe("RESOLVED REFERENCE")]);
                                case 'cyclic sibling': return _pl.ss($, ($) => ['cyclic sibling', _pd.implementMe("CyCLIC REFERENCE")]);
                                default: return _pl.au($[0]);
                            }
                        })]);
                    case 'value function': return _pl.ss($, ($) => ['value function', _pl.cc($, ($) => {
                            const declaration = _pl.cc($['declaration'], ($) => r_$Function__Declaration($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            const return__type = _pl.cc($['return type'], ($) => r_$Type($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            return {
                                'declaration': declaration,
                                'return type': return__type,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const r_$Type__Arguments = ($) => $.map(($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => r_$Type($, {
                    'cyclic sibling types': _pd.implementMe("ARGS"),
                    'resolved namespaces': _pd.implementMe("ARGS"),
                    'resolved sibling types': _pd.implementMe("ARGS"),
                    'type parameters': _pd.implementMe("ARGS"),
                }));
                return {
                    'type': _ltype,
                };
            }));
            const r_$Namespace__Selection__Tail = ($) => _pl.cc($, ($) => {
                const namespace = _pl.cc($['namespace'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                const _larguments = _pl.cc($['arguments'], ($) => r_$Type__Arguments($));
                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                return {
                    'arguments': _larguments,
                    'namespace': namespace,
                    'tail': tail,
                };
            });
            const r_$Namespace__Selection = ($) => _pl.cc($, ($) => {
                const start = _pl.cc($['start'], ($) => _pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'import': return _pl.ss($, ($) => ['import', _pl.cc($, ($) => {
                                const namespace = _pl.cc($['namespace'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                                const _larguments = _pl.cc($['arguments'], ($) => r_$Type__Arguments($));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'arguments': _larguments,
                                    'namespace': namespace,
                                    'tail': tail,
                                };
                            })]);
                        case 'local': return _pl.ss($, ($) => ['local', _pl.cc($, ($) => {
                                const namespace = _pl.cc($['namespace'], ($) => r_$Namespace__Selection__Tail($));
                                return {
                                    'namespace': namespace,
                                };
                            })]);
                        default: return _pl.au($[0]);
                    }
                }));
                return {
                    'start': start,
                };
            });
            const r_$Root = ($) => r_$Namespace($, {
                'parent type parameters': _pd.implementMe("ARGS"),
                'resolved sibling namespaces': _pd.implementMe("ARGS"),
            });
            return {
                'Aggregated Type Parameters': r_$Aggregated__Type__Parameters,
                'Function Declaration': r_$Function__Declaration,
                'Import': r_$Import,
                'Imports': r_$Imports,
                'Namespace': r_$Namespace,
                'Namespace Selection': r_$Namespace__Selection,
                'Namespace Selection Tail': r_$Namespace__Selection__Tail,
                'Nested Namespace': r_$Nested__Namespace,
                'Root': r_$Root,
                'Type': r_$Type,
                'Type Arguments': r_$Type__Arguments,
                'Type Parameters': r_$Type__Parameters,
            };
        }),
        'createSerializeContext': ($) => ({
            'Aggregated Type Parameters': ($) => { },
            'Function Declaration': ($) => { },
            'Import': ($) => { },
            'Imports': ($) => { },
            'Namespace': ($) => { },
            'Namespace Selection': ($) => { },
            'Namespace Selection Tail': ($) => { },
            'Nested Namespace': ($) => { },
            'Root': ($) => { },
            'Type': ($) => { },
            'Type Arguments': ($) => { },
            'Type Parameters': ($) => { },
        }),
    },
};
