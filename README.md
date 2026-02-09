# Pareto

A TypeScript library for the Pareto programming language - a functional programming language designed for type-safe data transformation and code generation.

[![npm version](https://img.shields.io/npm/v/pareto?color=blue&style=flat-square)](https://www.npmjs.com/package/pareto)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Apache%202.0-green?style=flat-square)](LICENSE)

## Overview

Pareto is a functional programming language that focuses on type safety, immutability, and powerful data transformation capabilities. It provides a robust foundation for building complex data processing pipelines and code generation tools.

## Installation

```bash
npm install pareto
```

## Key Features

- **🎯 Type Safety**: Full static typing with TypeScript integration
- **⚡ Functional Programming**: Immutable data structures and pure functions
- **🔄 Data Transformation**: Powerful APIs for data manipulation and conversion
- **🛠️ Code Generation**: Built-in support for generating source code
- **📦 Modular Design**: Component-based architecture with clear separation of concerns

## Architecture

Pareto is built on several core concepts:

### Transformations
Convert data from one format to another while maintaining type safety:

```typescript
import * as pareto from 'pareto'

// Transform TypeScript AST to formatted source code
const sourceCode = transformToTypeScript(ast, {
    'indentation': '    ',
    'line ending': '\n'
})
```

### Operations
Reusable functions for common data operations:

```typescript
// Dictionary operations
const processedData = dictionary.map(inputData, (value, key) => {
    return transformValue(value)
})

// List operations
const filteredItems = list.filter(items, (item) => {
    return item.isValid
})
```

### Procedures
Higher-level functions that orchestrate complex workflows:

```typescript
// Generate complete project structure
const generateProject = procedure.create((config) => {
    return {
        'files': generateFiles(config),
        'directories': createDirectories(config),
        'dependencies': resolveDependencies(config)
    }
})
```

## Core Modules

### Transformations
- **TypeScript Light**: Generate clean TypeScript code
- **Interface**: Transform between different interface representations
- **Implementation**: Convert specifications to concrete implementations

### Operations
- **Dictionary**: Key-value data manipulation
- **List**: Array processing and transformation
- **String**: Text processing utilities
- **Validation**: Data validation and error handling

### Generated Code
- **Interfaces**: Type definitions and contracts
- **Implementations**: Concrete realizations of interfaces
- **Utilities**: Helper functions and common patterns

## Usage Examples

### Basic Data Transformation

```typescript
import * as pareto from 'pareto'

// Transform a data structure
const result = pareto.transform.process(inputData, {
    'target_format': 'typescript',
    'options': {
        'strict_mode': true,
        'include_types': true
    }
})
```

### Code Generation

```typescript
import * as typescript from 'pareto/transformations/typescript_light'

// Generate TypeScript interface
const interfaceCode = typescript.Interface({
    'name': 'UserData',
    'properties': {
        'id': { 'type': 'string', 'optional': false },
        'name': { 'type': 'string', 'optional': false },
        'email': { 'type': 'string', 'optional': true }
    }
})
```

### Error Handling

```typescript
import * as validation from 'pareto/operations/validation'

const result = validation.validateStructure(data, schema)

if (result.success) {
    console.log('Data is valid:', result.data)
} else {
    console.error('Validation failed:', result.errors)
}
```

## Integration with Other Libraries

Pareto works seamlessly with other libraries in the ecosystem:

- **ASTN**: Parse and generate ASTN (Abstract Syntax Tree Notation) files
- **Pareto Fountain Pen**: Generate formatted text output with proper indentation
- **Pareto Standard Operations**: Common functional programming operations

```typescript
import * as astn from 'astn'
import * as fountainPen from 'pareto-fountain-pen'
import * as pareto from 'pareto'

// Complete workflow: ASTN → Transform → Output
const source = astn.parse(astSource)
const transformed = pareto.transform(source, options)
const output = fountainPen.generate(transformed)
```

## API Reference

### Core Types

- `Transform<TInput, TOutput>`: Type-safe transformation function
- `Operation<T>`: Reusable operation on data of type T
- `Procedure<TConfig, TResult>`: Higher-level workflow function
- `ValidationResult<T>`: Result of validation with success/error states

### Main Functions

- `transform.apply<T, U>(data: T, transformer: Transform<T, U>): U`
- `operation.map<T, U>(items: T[], op: Operation<T, U>): U[]`
- `procedure.execute<T, U>(config: T, proc: Procedure<T, U>): U`

## TypeScript Integration

Pareto provides full TypeScript support with:

- **Strict typing**: All APIs are fully typed
- **Type inference**: Automatic type derivation where possible
- **Generic support**: Flexible type parameters for reusable components
- **Compile-time safety**: Catch errors during development

```typescript
// Types are automatically inferred
const result = pareto.transform.apply(
    inputData,      // Type: InputSchema
    transformer     // Type: Transform<InputSchema, OutputSchema>
)
// result is automatically typed as OutputSchema
```

## Contributing

This library is part of the Pareto ecosystem. Contributions should:

1. Maintain type safety throughout
2. Follow functional programming principles
3. Include comprehensive tests
4. Update documentation for new features

## Dependencies

- `pareto-core-alg`: Core algorithms and data structures
- `pareto-core-bin`: Binary operations and utilities
- `pareto-core-data`: Data type definitions and interfaces
- `pareto-core-dev`: Development tools and helpers
- `pareto-fountain-pen`: Text generation and formatting
- `pareto-standard-operations`: Standard functional operations

## License

Apache 2.0 License - see [LICENSE](LICENSE) file for details.

## Version

Current version: **0.1.25**

---

*Part of the Pareto ecosystem for functional programming and code generation*