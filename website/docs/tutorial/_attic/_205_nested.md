---
sidebar_label: Nested Suites
sidebar_position: 205
title: Nested Suites
label: Nested Suites
description: |
  Nested Suites
---


## Nested Suites

Just like your favourite test framework, `Testdeck` supports nested suites.

```typescript showLineNumbers
import { suite, test } from '@testdeck/jasmine';

describe('a suite', function() {

  describe('nested suite', function () {

    @suite
    class DeeplyNestedSuite {

      @test
      failingTest() {

        throw new Error('not implemented yet');
      }
    }
  });
});
```


## The Power of Nesting

Nesting gives you the power of dynamically generating suites from, say, test fixtures.


## Suite Inheritance

And while nesting is a powerful mechanism, we want to point out that there is also inheritance.

With `Testdeck` you can define (abstract) base classes from which your concrete test suites will inherit from, regardless of the language used for implementing such tests. And given other mechanisms such as `mixins`, you are free to make your test suites work as you need them to.

See [Suite Inheritance](inheritance).
