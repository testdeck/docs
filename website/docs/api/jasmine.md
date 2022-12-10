---
sidebar_position: 4
sidebar_label: '@testdeck/jasmine'
description: Jasmine Integration
---

import IfaceSuite from '@site/src/components/api/v0.x/IfaceSuite';
import IfaceTest from '@site/src/components/api/v0.x/IfaceTest';
import IfaceExecutionOptionDecorator from '@site/src/components/api/v0.x/IfaceExecutionOptionDecorator';
import IfaceParams from '@site/src/components/api/v0.x/IfaceParams';
import IfaceHook from '@site/src/components/api/v0.x/IfaceHook';
import { HookConventions } from '@site/src/components/api/v0.x/admonitions';

# @testdeck/jasmine

This package integrates [Jasmine](https://jasmine.github.io/).

## Suite Decorator

:::info
See also the sections about [describe](https://jasmine.github.io/api/edge/global.html#describe), [fdescribe](https://jasmine.github.io/api/edge/global.html#fdescribe), and [xdescribe](https://jasmine.github.io/api/edge/global.html#xdescribe) in the official ***Jasmine*** documentation.
:::

<IfaceSuite packageName="@testdeck/jasmine" />

## Test Decorator

:::info
See also the sections about [it](https://jasmine.github.io/api/edge/global.html#it), [fit](https://jasmine.github.io/api/edge/global.html#fit), [xit](https://jasmine.github.io/api/edge/global.html#xit), and [async](https://jasmine.github.io/tutorials/async) in the official ***Jasmine*** documentation.
:::

<IfaceTest packageName="@testdeck/jasmine" timeout done />

## Params Decorator

<IfaceParams packageName="@testdeck/jasmine" timeout done />

## Timeout Decorator

<IfaceExecutionOptionDecorator packageName="@testdeck/jasmine" timeout done />

## Hooks

<HookConventions/>

### Before All Hook

:::info
See also the section on [beforeAll](https://jasmine.github.io/api/edge/global.html#beforeAll) in the official ***Jasmine*** documentation.
:::

<IfaceHook packageName="@testdeck/jasmine" timeout done />

### After All Hook

:::info
See also the section on [afterAll](https://jasmine.github.io/api/edge/global.html#afterAll) in the official ***Jasmine*** documentation.
:::

<IfaceHook packageName="@testdeck/jasmine" after timeout done />

### Before Each Hook

:::info
See also the section on [beforeEach](https://jasmine.github.io/api/edge/global.html#beforeEach) in the official ***Jasmine*** documentation.
:::

<IfaceHook packageName="@testdeck/jasmine" each timeout done />

### After Each Hook

:::info
See also the section on [afterEach](https://jasmine.github.io/api/edge/global.html#afterEach) in the official ***Jasmine*** documentation.
:::

<IfaceHook packageName="@testdeck/jasmine" after each timeout done />
