---
sidebar_position: 2
sidebar_label: '@testdeck/jest'
description: Jest Integration
---

import IfaceSuite from '@site/src/components/api/v0.x/IfaceSuite';
import IfaceTest from '@site/src/components/api/v0.x/IfaceTest';
import IfaceExecutionOptionDecorator from '@site/src/components/api/v0.x/IfaceExecutionOptionDecorator';
import IfaceParams from '@site/src/components/api/v0.x/IfaceParams';
import IfaceHook from '@site/src/components/api/v0.x/IfaceHook';
import { HookConventions } from '@site/src/components/api/v0.x/admonitions';

# @testdeck/jest

This package integrates [Jest](https://jestjs.io/).

## Suite Decorator

:::info
See also the sections about [describe](https://jestjs.io/docs/api#describename-fn), [describe.only](https://jestjs.io/docs/api#describeonlyname-fn), and [describe.skip](https://jestjs.io/docs/api#describeskipname-fn) in the official ***Jest*** documentation.
:::

<IfaceSuite packageName="@testdeck/jest" />

## Test Decorator

:::info
See also the sections about [test](https://jestjs.io/docs/api#testname-fn-timeout), [test.only](https://jestjs.io/docs/api#testonlyname-fn-timeout), [test.skip](https://jestjs.io/docs/api#testskipname-fn), and [test.todo](https://jestjs.io/docs/api#testtodoname) in the official ***Jest*** documentation.
:::

<IfaceTest packageName="@testdeck/jest" timeout done />

## Params Decorator

:::info
See also the sections about [test.each](https://jestjs.io/docs/api#testeachtablename-fn-timeout), [test.only.each](https://jestjs.io/docs/api#testonlyeachtablename-fn-1), and [test.skip.each](https://jestjs.io/docs/api#testskipeachtablename-fn) in the official ***Jest*** documentation.
:::

<IfaceParams package="@testdeck/jest" timeout done />

## Timeout Decorator

<IfaceExecutionOptionDecorator packageName="@testdeck/jest" timeout done />

## Hooks

<HookConventions/>

### Before All Hook

:::info
See also the section on [beforeAll](https://jestjs.io/docs/api#beforeallfn-timeout) in the official ***Jest*** documentation.
:::

<IfaceHook packageName="@testdeck/jest" before timeout done />

### After All Hook

:::info
See also the section on [afterAll](https://jestjs.io/docs/api#afterallfn-timeout) in the official ***Jest*** documentation.
:::

<IfaceHook packageName="@testdeck/jest" after timeout done />

### Before Each Hook

:::info
See also the section on [beforeEach](https://jestjs.io/docs/api#beforeeachfn-timeout) in the official ***Jest*** documentation.
:::

<IfaceHook packageName="@testdeck/jest" each timeout done />

### After Each Hook

:::info
See also the section on [afterEach](https://jestjs.io/docs/api#aftereachfn-timeout) in the official ***Jest*** documentation.
:::

<IfaceHook packageName="@testdeck/jest" after each timeout done />
