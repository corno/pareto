# PARETO

This is a pareto project.

## Directory Structure

Pareto projects adhere to a very strict directory structure. During the build phase this directory structure is validated.

The directory structure is a mix of generated files and handwritten files.

- scripts

        all callable scripts. All generated. Manual changes will be ignored/overwritten
- pareto

        Define the project configuration and the API here. After everything is configured, the skeleton typescript code can be generated. 

- .gitignore 

    this file is generated
-typescript

    Here is the source code

scripts/
pareto/
.gitignore
typescript/
    pub
    test

## API

there is a set of core libraries.

### pareto-core-data
preferred abbreviation: **pd**

purpose: for defining data structures

api:
- **d**: shorthand for 'dictionary', creates a JSON object.

    example:
    ```
    const x = pd.d({ "A": true, "B": false })
    ```
    

## pareto-core-lib

this library mimics language features that are not supported by TypeScript

## Setting up a new project

- create a directory
- in this directory, create a directory named 'scripts'.
- in the 'scripts' directory, create an executable file named 'initialize.sh' and with this content:
    ```
    #!/usr/bin/env bash

    paretoBuildEnvDir=`realpath $(dirname "$0")`

    "$paretoBuildEnvDir/node_modules/pareto-buildenvironment/initializeProject.sh" "$paretoBuildEnvDir/.."
    ```
- make it executable: 'chmod +x initialize.sh'
- in the 'scripts' directory install the node module 'pareto-buildenvironment' ('npm install pareto-buildenvironment')
- in root directory, type './scripts/initialize.sh', the 'scripts' directory should now be populated
- in the root directory, type './scripts/scripts/buildFromScratch.sh', a directory structure should now be scaffolded, and you will be presented with errors because files are missing. These you will need to add manually.
-the first file to add is '/pareto/src/data/project.data.ts' with this content: [project definition](./templates/pareto%20definition.ts)

### Algorithmics
The concept of algorithmics in Pareto is quite unique compared to other programmings languages. It takes some time to master, but it results in better control of the code base.

First of all, it is important to understand that Asynchonicity is supported is a very distint way. Where in many languages the synchonic language concepts are extended to support asynchonicity.

In Pareto there are 2 sublanguages; 1 for synchronous arithmetic and 1 for asynchronous. This separation helps to conceptualize the scope and impact of a piece of algorithmic

#### Synchronous algorithmics
For the synchronous part, there are 2 entities that can be defined; algorithms and interfaces.
Algorithms

A synchronous algorithm can

```
"Number": sInterface(sInterfaceMethod(typeReference("Number")))
```

translates in

```
"Number": ($: T.Number) => void
```

### Asynchronous algorithmics
```
    "Number": aInterface(aInterfaceMethod(typeReference("Number"))),
```
translates to
```
```


There are 3 types of asynchronous functions;

- constructor
- function
- resource

There are 2 types of synchronous algorithms;
- function
- procedure


### constructor (async)

produces  a

### asynchronous function

example

filesystem -> unlink

### resource (async)

### synchronous function

example


### procedure (sync)

example
fountain pen -> CreateFile (with interface instead of data)


### Project

[model](https://github.com/corno/lib-pareto-typescript-project/blob/master/prebuild/src/data/models/project.data.ts)


[shorthands](https://github.com/corno/lib-pareto-typescript-project/blob/master/typescript/pub/src/submodules/project/shorthands.ts)

### Glossary

[model](https://github.com/corno/lib-pareto-typescript-project/blob/master/prebuild/src/data/models/glossary.data.ts)


[shorthands](https://github.com/corno/lib-pareto-typescript-project/blob/master/typescript/pub/src/submodules/glossary/shorthands.ts)



