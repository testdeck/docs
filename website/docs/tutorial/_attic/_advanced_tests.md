---
layout: guide
section: guide
role: page
order: 60
toc: true
title: Advanced Tests
label: Advanced Tests
description: |
  Advanced Tests
---


## Advanced Tests


## Test Execution Options

```
import { suite, test, retries, slow, timeout } from '@testdeck/mocha';

@suite
class Suite {

  @test(retries(5))
  @timeout(1500)
  retried(done) {

    setTimeout(done, 1800);
  }

  @test(slow(1000), timeout(2000))
  slow(done) {

    setTimeout(done, 1500);
  }
}
```



### retries

`retries` can be used as either a decorator or passed as a parameter to the `@test` decorator.

```
import { suite, test, retries } from '@testdeck/mocha';

@suite
class Suite {

  @test(retries(2))
  @retries(2)
  retried() {

    throw new Error('failed');
  }
}
```



### slow

`slow` can be used as either a decorator or passed as a parameter to the `@test` decorator.

```
import { suite, test, slow } from '@testdeck/mocha';

@suite
class Suite {

  @test(slow(2000))
  @slow(2000)
  slow(done) {

    setTimeout(done, 2100);
  }
}
```



### timeout

`timeout` can be used as either a decorator or passed as a parameter to the `@test` decorator.

```
import { suite, test, timeout } from '@testdeck/mocha';

@suite
class Suite {

  @test(timeout(3000))
  @timeout(3000)
  timeout(done) {

    setTimeout(done, 3500);
  }
}
```



## Test Naming

```
import { suite, test } from '@testdeck/mocha';

@suite
class Suite {

  @test('a custom name for the test')
  test() {
  }

  @test 'alternate naming'() {
  }
}
```



## Pending Tests

A test can be marked as pending.

The `@pending` decorator takes an optional boolean parameter. That way one can make individual tests pending based on
a given condition.

```
import { suite, test, pending } from '@testdeck/mocha';

@suite
class Suite {

  @test.pending
  pending() {
  }

  @test
  @pending
  alsoPending() {
  }

  @test
  @pending(isCondition)
  conditionallyPending() {
  }
}
```



## Skipping Tests

A test can be marked for being skipped.

The `@skip` decorator takes an optional boolean parameter. That way one can make individual tests skip based on
a given condition.

```
import { suite, test, skip } from '@testdeck/mocha';

@suite
class Suite {

  @test.skip
  skipped() {
  }

  @test
  @skip
  alsoSkipped() {
  }

  @test
  @skip(isCondition)
  conditionallySkipped() {
  }
}
```



## Focused Tests

A test can be marked as focused.

The `@only` decorator takes an optional boolean parameter. That way one can make individual focused based on
a given condition.

```
import { suite, test, only } from '@testdeck/mocha';

@suite
class Suite {

  @test.only
  focused() {
  }

  @test
  @only
  alsoFocused() {
  }

  @test
  @only(isCondition)
  conditionallyFocused() {
  }
}
```
