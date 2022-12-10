---
sidebar_label: Mocha Context
title: Mocha Context
label: Mocha Context
description: |
  Mocha Context
---

:::caution Mocha only
This applies to [Mocha](https://mochajs.org/) only.
:::

:::info
See also [Mocha Context](../api/mocha.md#mocha-context) in the API documentation.
:::

To obtain the mocha context in `@testdeck/mocha`, use the `context` symbol as follows:

:::caution TODO
- proper context usage examples
- link to issues requesting mocha context access
:::

```typescript showLineNumbers
import { suite, test, context } from "@testdeck/mocha";

@suite
class SuiteContext {

    [static] [async] before(): void|Promise<void> {
        this[context].timeout(50);
    }

    constructor() {
        // Context is the Mocha Suite
        this[context]...;
    }

    @test
    [async] testHasContext([done]): void|Promise<void> {
        this[context].timeout(50);
    }
}
```
