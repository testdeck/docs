## TypeScript OOP test UI
{: .hero-heading}
``` typescript
@suite class Hello {
  @test world() {
    assert(false);
  }
}
```
{: .hero-trailing}

## What is Testdeck?
***Testdeck*** is a ***decorator*** based test UI wrapper around your favourite JavaScript test framework.

With ***Testdeck***, you can write your tests in ***object-oriented*** style, effectfully making use of inheritance to encapsulate test suite behaviour.

***Testdeck*** supports browser based testing (for example using ***Karma***).

***Testdeck*** makes no assumptions about the assertion/expectation frameworks you use.

***Testdeck*** is also the successor of ***mocha-typescript***.

## Getting Started
Select your testing framework:
<menu class="framework">
  <li class="mocha"><a href="javascript: void selectTestFramework('mocha')"><em>Mocha</em></a></li>
  <li class="jest"><a href="javascript: void selectTestFramework('jest')"><em>Jest</em></a></li>
  <li class="jasmine"><a href="javascript: void selectTestFramework('jasmine')"><em>Jasmine</em></a></li>
</menu>

Install the test framework, TypeScript, typings and the Testdeck module for your test framework:
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

Enable `experimentalDecorators` in the `tsconfig.json`:
```
```

Then use the ***Testdeck OOP test UI***:

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
