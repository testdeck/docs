---
sidebar_position: 1
sidebar_label: '@testdeck/mocha'
description: Mocha Integration
---

import IfaceSuite from '@site/src/components/api/v0.x/IfaceSuite';
import IfaceExecutionOptionDecorator from '@site/src/components/api/v0.x/IfaceExecutionOptionDecorator';
import IfaceParams from '@site/src/components/api/v0.x/IfaceParams';
import IfaceHook from '@site/src/components/api/v0.x/IfaceHook';
import IfaceTest from '@site/src/components/api/v0.x/IfaceTest';
import { HookConventions } from '@site/src/components/api/v0.x/admonitions';

# @testdeck/mocha

This package integrates [Mocha](https://mochajs.org/).

## Suite Decorator

:::info
See also the section about [BDD](https://mochajs.org/#bdd) in the official ***Mocha*** documentation.
:::

<IfaceSuite packageName="@testdeck/mocha" timeout retry slow />

## Test Decorator

:::info
See also the sections about [inclusive tests](https://mochajs.org/#inclusive-tests), and [exclusive tests](https://mochajs.org/#exclusive-tests) in the official ***Mocha*** documentation.
:::

<IfaceTest packageName="@testdeck/mocha" timeout retry slow done />

## Params Decorator

:::info
See also the section about [dynamically generating tests](https://mochajs.org/#dynamically-generating-tests) in the official ***Mocha*** documentation.
:::

<IfaceParams packageName="@testdeck/mocha" timeout slow retry done />

## Timeout Decorator

:::info
See also the section about [timeouts](https://mochajs.org/#timeouts) in the official ***Mocha*** documentation.
:::

<IfaceExecutionOptionDecorator packageName="@testdeck/mocha" classDecorator done value="5000" defaultValue="0" timeout />

## Slow Decorator

:::info
See also the section about [test duration](https://mochajs.org/#test-duration) in the official ***Mocha*** documentation.
:::

<IfaceExecutionOptionDecorator packageName="@testdeck/mocha" slow classDecorator done value="500" defaultValue="0" />

## Retries Decorator

:::info
See also the section about [retrying tests](https://mochajs.org/#retry-tests) in the official ***Mocha*** documentation.
:::

<IfaceExecutionOptionDecorator packageName="@testdeck/mocha" retry classDecorator done value="5" defaultValue="0" />

## Hooks

<HookConventions/>

:::info
See also the section about [hooks](https://mochajs.org/#hooks) in the official ***Mocha*** documentation.
:::

### Before All

<IfaceHook packageName="@testdeck/mocha" done />

### After All

<IfaceHook packageName="@testdeck/mocha" after done />

### Before Each

<IfaceHook packageName="@testdeck/mocha" each done />

### After Each

<IfaceHook packageName="@testdeck/mocha" after each done />

## Mocha Context

:::info
The mocha context object can be accessed by `this[context]` in the constructor, in hooks, and in test methods.
:::

```typescript showLineNumbers
import { suite, test, context } from "@testdeck/mocha";

@suite
class TestSuite {
    constructor() {
        console.log("constructor");
        console.log(this[context]);
    }

    static before() : void {
        console.log("before all");
        console.log(this[context]);
    }

    static after() : void {
        console.log("after all");
        console.log(this[context]);
    }

    before() : void {
        console.log("before each");
        console.log(this[context]);
    }

    after() : void {
        console.log("after each");
        console.log(this[context]);
    }

    @test
    test() : void {
        console.log("test");
        console.log(this[context]);
    }
}
```
