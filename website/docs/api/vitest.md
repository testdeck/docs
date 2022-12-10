---
sidebar_position: 3
sidebar_label: '@testdeck/vitest'
description: Vitest Integration
---

import IfaceSuite from '@site/src/components/api/v0.x/IfaceSuite';
import IfaceTest from '@site/src/components/api/v0.x/IfaceTest';
import IfaceExecutionOptionDecorator from '@site/src/components/api/v0.x/IfaceExecutionOptionDecorator';
import IfaceParams from '@site/src/components/api/v0.x/IfaceParams';
import IfaceHook from '@site/src/components/api/v0.x/IfaceHook';
import { HookConventions } from '@site/src/components/api/v0.x/admonitions';

# @testdeck/vitest

This package integrates [Vitest](https://vitest.dev/).

## Suite Decorator

:::info
See the sections about [describe](https://vitest.dev/api/#describe), [describe.skip](https://vitest.dev/api/#describe-skip), [describe.only](https://vitest.dev/api/#describe-only), and [describe.todo](https://vitest.dev/api/#describe-todo) in the official ***Vitest*** documentation.
:::

<IfaceSuite packageName="@testdeck/vitest" />

## Test Decorator

:::info
See the sections about [test](https://vitest.dev/api/#test), [test.skip](https://vitest.dev/api/#test-skip), [test.only](https://vitest.dev/api/#test-only), and [test.todo](https://vitest.dev/api/#test-todo) in the official ***Vitest*** documentation.
:::

<IfaceTest packageName="@testdeck/vitest" timeout retry />

## Params Decorator

<IfaceParams package="@testdeck/vitest" timeout retry />

## Timeout Decorator

<IfaceExecutionOptionDecorator packageName="@testdeck/vitest" timeout value="5000" defaultValue="0" />

## Retries Decorator

<IfaceExecutionOptionDecorator packageName="@testdeck/vitest" retry value="5" defaultValue="0" />

## Hooks

<HookConventions/>

:::info
See also the section about [setup and teardown](https://vitest.dev/api/#setup-and-teardown) in the official ***Vitest*** documentation.
:::

### Before All Hook

:::info
See the section on [beforeAll](https://vitest.dev/api/#beforeall) in the official ***Vitest*** documentation.
:::

<IfaceHook packageName="@testdeck/vitest" timeout />

### After All Hook

:::info
See the section on [afterAll](https://vitest.dev/api/#afterall) in the official ***Vitest*** documentation.
:::

<IfaceHook packageName="@testdeck/vitest" after timeout />

### Before Each Hook

:::info
See the section on [beforeEach](https://vitest.dev/api/#beforeeach) in the official ***Vitest*** documentation.
:::

<IfaceHook packageName="@testdeck/vitest" each timeout />

### After Each Hook

:::info
See the section on [afterEach](https://vitest.dev/api/#aftereach) in the official ***Vitest*** documentation.
:::

<IfaceHook packageName="@testdeck/vitest" after each timeout />
