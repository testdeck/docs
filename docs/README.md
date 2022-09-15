<div class="hero-banner" style="margin: 120px; 0px;">
# TypeScript OOP test UI
``` typescript
@suite class Hello {
  @test world() {
    assert(false);
  }
}
```
</div>

## Getting Started
Works with:
 - [mocha](https://mochajs.org/)
 - [jest](https://jestjs.io/)
 - [jasmine](https://jasmine.github.io/)

```
npm i --save-dev mocha typescript @types/mocha @testdeck/mocha
```
{: .mocha}

```
npm i --save-dev jest typescript @testdeck/jest
```
{: .jest}

```
npm i --save-dev jasmine typescript @testdeck/jasmine
```
{: .jasmine}

Setup your test runner with TypeScript.

Then the ***Testdeck OOP test UI*** is used, on top of your test framework, like:

``` typescript
import { suite, test } from "@testdeck/mocha";

@suite class Hello {
  @test world() {
    assert(false);
  }
}
```
{: .mocha}

``` typescript
import { suite, test } from "@testdeck/jest";

@suite class Hello {
  @test world() {
    assert(false);
  }
}
```
{: .jest}

``` typescript
import { suite, test } from "@testdeck/jasmine";

@suite class Hello {
  @test world() {
    assert(false);
  }
}
```
{: .jasmine}

## Interoperability
Compatible with standard functional TDD interfaces:
``` typescript
suite("Top suite", () => {
  test("functional test", () => {
    assert(false);
  });

  @suite OOPTest {
    @test "oop test"() {
    }
  }
});
```

Under the hood the decorators execute in a way like:
``` typescript
// Actual Testdeck test
@suite class Hello {
  static before() {}
  before() {}

  @test world() {
    assert(false);
  }

  after() {}
  static after() {}
}

// Testdeck implements the @suite and @test decorators so
// they emit to the test framework roughly to following:
class Hello {
  static before() {}
  before() {}

  world() {
    assert(false);
  }

  after();
  static after();
}

suite("Hello", () => {
  let instance: null | Hello = null;

  beforeAll(() => Hello?.before());

  beforeEach(() => instance = new Hello());
  beforeEach(() => instance?.before());

  test("world", () => instance.world());

  afterEach(() => instance?.after());
  afterEach(() => instance = null);

  afterAll(() => Hello?.after());
});
```

***Testdeck*** aims to provide ***1:1*** mapping between ***Testdeck OOP test UI*** features and the native test framework features.

***Testdeck*** uses the TDD/BDD functional UI from existing frameworks, to implement TypeScript class decorators, that enable the ***OOP style test UI***. That makes it play well with others and integrate with any existing functional style tests.
