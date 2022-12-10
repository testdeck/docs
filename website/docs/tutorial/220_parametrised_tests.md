---
sidebar_label: Parametrised Tests
sidebar_position: 220
title: Parametrised Tests
label: Parametrised Tests
description: |
  Parametrised Tests
---

## Parametrised Tests

```typescript showLineNumbers
import { suite, params } from '@testdeck/mocha';

@suite
class Suite {

  @params({ arg1: 'foo', arg2: 'bar' })
  @params({ arg1: 'bar', arg2: 'foo' }, 'custom test name')
  test({ arg1, arg2 }) {
  }
}
```

### Run Tests

```shell showLineNumbers
npm test

...

  Suite
    test
      ✓ test 0
      ✓ custom test name

...
```



## Parametrised Test Naming

```typescript showLineNumbers
import { suite, params } from '@testdeck/mocha';

@suite
class Suite {

  @params({ arg1: 'foo', arg2: 'bar' }, 'a custom test name')
  @params({ arg1: 'bar', arg2: 'foo' })
  @params.naming(({ arg1, arg2 }) => `test foobar against ${arg1} and ${arg2}`)
  test({ arg1, arg2 }) {
  }
}
```

### Run Tests

```shell showLineNumbers
npm test

...

  Suite
    test
      ✓ a custom test name
      ✓ test foobar against bar and foo

...
```



## Pending Parameter Sets

```typescript showLineNumbers
import { suite, params } from '@testdeck/mocha';

@suite
class Suite {

  @params({ arg1: 'foo', arg2: 'bar' })
  @params.pending({ arg1: 'bar', arg2: 'foo' }, 'SUT does not yet support this')
  "test foobar against parameters"({ arg1, arg2 }) {
  }
}
```

### Run Tests

```shell showLineNumbers
npm test

...

  Suite
    test foobar against parameters
      ✓ test foobar against parameters 0
      - SUT does not yet support this

...
```



## Skipping Parameter Sets

```typescript showLineNumbers
import { suite, params } from '@testdeck/mocha';

@suite
class Suite {

  @params({ arg1: 'foo', arg2: 'bar' })
  @params.skip({ arg1: 'bar', arg2: 'foo' }, 'test fails on this, no time fixing')
  test({ arg1, arg2 }) {
  }
}
```

### Run Tests

```shell showLineNumbers
npm test

...

  Suite
    test
      ✓ test 0
      - test fails on this, no time fixing

...
```



## Focused Parameter Set Testing

```typescript showLineNumbers
import { suite, params } from '@testdeck/mocha';

@suite
class Suite {

  @params({ arg1: 'foo', arg2: 'bar' })
  @params.only({ arg1: 'bar', arg2: 'foo' }, 'should be fixed now...')
  test({ arg1, arg2 }) {
  }
}
```

### Run Tests

```shell showLineNumbers
npm test

...

  Suite
    test
      ✓ should be fixed now...

...
```
