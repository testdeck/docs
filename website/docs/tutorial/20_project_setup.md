---
sidebar_position: 20
sidebar_label: Project Setup
title: Project Setup
description: |
  This tutorial leads you through the steps
  to set up your project to start working
  with Testdeck.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { NodeDependency } from '@site/src/components/admonitions';



## Preface

This tutorial runs you through the steps required to set up your project.



### Create Project

We will create a new project first. Fire up a command shell (***bash*** on *Linux* or ***Git Bash*** on *Windows*) and then run the following commands.

:::caution tip
In our examples we will be using ***bash*** on both *Linux* and *MacOS* and ***Git Bash*** on *Windows*.

If you are using a different shell, you might have to adjust the provided scripts so that they will work in your environment.
:::

<Tabs groupId="operating-system">
<TabItem value="linux" label="Linux">

```shell showLineNumbers
mkdir my-package
cd my-package
```

</TabItem>

<TabItem value="macos" label="MacOS">

```shell showLineNumbers
mkdir my-package
cd my-package
```

</TabItem>

<TabItem value="windows" label="Windows">

```shell showLineNumbers
mkdir my-package
cd my-package
```

</TabItem>
</Tabs>



### Initialize Project

Now, we will initialize our project. Just follow the instructions when running the below commands.

:::info
The command will create a [package.json](https://docs.npmjs.com/creating-a-package-json-file) file based on the provided information.
:::

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell showLineNumbers
npm init
```

#### OUTPUT

```shell showLineNumbers
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (my-package)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to [.../]my-package/package.json:

{
  "name": "my-package",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this OK? (yes)
```

</TabItem>

<TabItem value="yarn" label="yarn">

```shell showLineNumbers
yarn init
```

#### OUTPUT

```shell showLineNumbers
yarn init <yarn-version-id>
question name (my-package):
question version (1.0.0):
question description:
question entry point (index.js):
question repository url:
question author:
question license (MIT):
question private:
success Saved package.json
Done in ...s.
```

</TabItem>
</Tabs>



### Initialize Git Repository

```shell showLineNumbers
git init
```


## Install Development Dependencies

Having initialized the project, we will install the dependencies used during development.



### Install TypeScript

First, we will install [TypeScript](https://www.typescriptlang.org/) as a development dependency.

:::caution Important
Even if you installed TypeScript globally as part of the optional [prerequisites](prerequisites.md#typescript-optional), you still have to install it as a development dependency. Otherwise, the package scripts we will add to `package.json` will not work on other systems.
:::

<NodeDependency packageName="typescript" version="latest" />

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell showLineNumbers
npm install --save-dev typescript@latest
```

</TabItem>

<TabItem value="yarn" label="yarn">

```shell showLineNumbers
yarn add --dev typescript@latest
```

</TabItem>
</Tabs>


### Install reflect-metadata

<NodeDependency packageName="reflect-metadata" version="latest" />

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell showLineNumbers
npm install --save-dev reflect-metadata@latest
```

</TabItem>

<TabItem value="yarn" label="yarn">

```shell showLineNumbers
yarn add --dev reflect-metadata@latest
```

</TabItem>
</Tabs>



### Install Testdeck and Test Framework

Next, we will install ***Testdeck*** and the required test framework dependencies.

<Tabs groupId="test-framework">
<TabItem value="mocha" label="Mocha">

<NodeDependency packageName="mocha" version="latest" />
<NodeDependency packageName="@types/mocha" version="latest" />

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell showLineNumbers
npm install --save-dev @testdeck/mocha@0.3
npm install --save-dev @types/mocha@latest
npm install --save-dev mocha@latest
```

</TabItem>

<TabItem value="yarn" label="yarn">

```shell showLineNumbers
yarn add --dev @testdeck/mocha@0.3
yarn add --dev @types/mocha@latest
yarn add --dev mocha@latest
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="jest" label="Jest">

<NodeDependency packageName="jest" version="latest" />
<NodeDependency packageName="@types/jest" version="latest" />

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell showLineNumbers
npm install --save-dev @testdeck/jest@0.3
npm install --save-dev @types/jest@latest
npm install --save-dev jest@latest
```

</TabItem>

<TabItem value="yarn" label="yarn">

```shell showLineNumbers
yarn add --dev @testdeck/jest@0.3
yarn add --dev @types/jest@latest
yarn add --dev jest@latest
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="vitest" label="Vitest">

<NodeDependency packageName="vitest" version="latest" />
<NodeDependency packageName="vite" version="latest" />

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell showLineNumbers
npm install --save-dev @testdeck/vitest@0.3
npm install --save-dev vitest@latest
npm install --save-dev vite@latest
```

</TabItem>

<TabItem value="yarn" label="yarn">

```shell showLineNumbers
yarn add --dev @testdeck/vitest@0.3
yarn add --dev vitest@latest
yarn add --dev vite@latest
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="jasmine" label="Jasmine">

<NodeDependency packageName="jasmine" version="latest" />
<NodeDependency packageName="@types/jasmine" version="latest" />

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell showLineNumbers
npm install --save-dev @testdeck/jasmine@0.3
npm install --save-dev @types/jasmine@latest
npm install --save-dev jasmine@latest
```

</TabItem>

<TabItem value="yarn" label="yarn">

```shell showLineNumbers
yarn add --dev @testdeck/jasmine@0.3
yarn add --dev @types/jasmine@latest
yarn add --dev jasmine@latest
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>



### Install ESLint (optional)

<NodeDependency packageName="eslint" version="latest" />
<NodeDependency packageName="typescript-eslint" version="latest" />

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell showLineNumbers
npm install --save-dev eslint@latest
npm install --save-dev typescript-eslint@latest
```

</TabItem>

<TabItem value="yarn" label="yarn">

```shell showLineNumbers
yarn add --dev eslint@latest
yarn add --dev typescript-eslint@latest
```

</TabItem>
</Tabs>



### Install NYC (optional)

:::info
Both ***jest*** and ***vitest*** already include support for code coverage.
:::

<NodeDependency packageName="nyc" version="latest" />
<NodeDependency packageName="@istanbuljs/nyc-config-typescript" version="latest" />
<NodeDependency packageName="requirejs" version="latest" />

<Tabs groupId="test-framework">
<TabItem value="mocha" label="Mocha">

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell showLineNumbers
npm install --save-dev requirejs@latest
npm install --save-dev nyc@latest
npm install --save-dev @istanbuljs/nyc-config-typescript@latest
```

</TabItem>

<TabItem value="yarn" label="yarn">

```shell showLineNumbers
yarn add --dev requirejs@latest
yarn add --dev nyc@latest
yarn add --dev @istanbuljs/nyc-config-typescript@latest
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="jasmine" label="Jasmine">

TODO

</TabItem>
</Tabs>



## Configure Dependencies

### Configure Typescript

First, we will create a basic [TypeScript configuration](typescriptlang.org/tsconfig) file.

:::info
For Testdeck, we have to enable the `experimentalDecorators` feature, which is *[still experimental](https://github.com/tc39/proposal-decorators)*.
In addition, we will also enable the `emitDecoratorMetadata` feature required by [reflect-metadata](https://www.npmjs.com/package/reflect-metadata), which we already installed.
:::

```json showLineNumbers title=tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": [ "es6" ],
    "noImplicitAny": true,
    "removeComments": false,
    "preserveConstEnums": true,
    "sourceMap": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```



### Configure Test Framework

<Tabs groupId="test-framework">
<TabItem value="mocha" label="Mocha">

TODO .mocharc.json

#### Package Scripts

```json showLineNumbers title=package.json
"scripts": {
  "test": "mocha ..."
}
```

</TabItem>

<TabItem value="jest" label="Jest">

TODO jest.config.js

#### Package Scripts

```json showLineNumbers title=package.json
"scripts": {
  "test": "jest ..."
}
```

</TabItem>

<TabItem value="vitest" label="Vitest">

TODO vitest.config.ts

#### Package Scripts

```json showLineNumbers title=package.json
"scripts": {
  "test": "vitest ..."
}
```

</TabItem>

<TabItem value="jasmine" label="Jasmine">

TODO jasmine.json

#### Package Scripts

```json showLineNumbers title=package.json
"scripts": {
  "test": "jasmine ..."
}
```

</TabItem>
</Tabs>



### Configure ESLint (optional)

<Tabs groupId="test-framework">
<TabItem value="mocha" label="Mocha">

TODO .eslintignore

TODO .eslintrc.js

</TabItem>

<TabItem value="jest" label="Jest">

TODO .eslintignore

TODO .eslintrc.js

</TabItem>

<TabItem value="vitest" label="Vitest">

TODO .eslintignore

TODO .eslintrc.js

</TabItem>

<TabItem value="jasmine" label="Jasmine">

TODO .eslintignore

TODO .eslintrc.js

</TabItem>
</Tabs>

#### Package Scripts

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```json showLineNumbers title=package.json
"scripts": {
  "prebuild": "npm run lint",
  "lint": "eslint ...",
  "lint-fix": "eslint --fix ..."
}
```

</TabItem>

<TabItem value="yarn" label="yarn">

```json showLineNumbers title=package.json
"scripts": {
  "prebuild": "yarn run lint",
  "lint": "eslint ...",
  "lint-fix": "eslint --fix ..."
}
```

</TabItem>
</Tabs>



### Configure NYC (optional)

<Tabs groupId="test-framework">
<TabItem value="mocha" label="Mocha">

TODO .nycrc

</TabItem>

<TabItem value="jest" label="Jest">
</TabItem>

<TabItem value="vitest" label="Vitest">
</TabItem>

<TabItem value="jasmine" label="Jasmine">

```json showLineNumbers title=.nycrc
{
    "extends": "@istanbuljs/nyc-config-typescript",
    "all": true,
    "report-dir": "coverage",
    "reporter": [
        "lcov",
        "clover",
        "json",
        "text"
    ],
    "include": [
        "index.ts"
    ],
    "check-coverage": true,
    "branches": 80,
    "lines": 80,
    "functions": 80,
    "statements": 80
}
```

</TabItem>
</Tabs>



## Configure Package Scripts

### Basic Setup

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```json showLineNumbers title=package.json
"scripts": {
  "build": "tsc",
  "clean": "npx rimraf dist",
  "pretest": "npm run clean && npm run build"
}
```

</TabItem>

<TabItem value="yarn" label="yarn">

```json showLineNumbers title=package.json
"scripts": {
  "build": "tsc",
  "clean": "npx rimraf dist",
  "pretest": "yarn run clean && yarn run build"
}
```

</TabItem>
</Tabs>

### Integrate Test Framework

### Integrate ESLint (optional)

### Integrate NYC (optional)



## Summary

:::caution todo
achievements
:::
