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

Setup your ***test framework*** and ***TypeScript***.

Enable `experimentalDecorators` in the `tsconfig.json`:
``` json
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```

Then use the ***Testdeck OOP test UI*** in your `test.ts`:

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

## Features
### Suites and Methods
To make a class suite - create a new class, decorate it with the `@suite` decorator.

To create a test - create a method within a suite class, decorate it with the `@test` decorator.


``` typescript
@suite
class MyTestSuite1 {
  @test
  testMethod1() {
  }

  @test
  testMethod2() {
  }
}

@suite("Custom Suite Class Name")
class MyTestSuite2 {
  @test("Custom test name")
  testMethod1() {
  }

  @test "string literal test name"() {
  }
}

describe("Testdeck OOP ui", () => {
  it("can execute side by side TDD/BDD UI", () => {
  });

  @suite
  class MyTestSuite3 {
    @test
    testMethod1() {
    }
  }
});
```
### Async Tests
> Some test frameworks moved away from `done` callback async tests, but Testdeck supports them where possible.

***Testdeck*** works well with promises.

***Testdeck*** works well with `done` callback.
``` typescript
@suite class AsyncSuite {
  @test test1(done) {
    setTimeout(done, 1000);
  }

  @test async test2(): Promise<void> {
    await fetch('http://testdeck.org');
  }
}
```
### Lifecycle Hooks
All test suites allow initialization and teardown and expose hooks that execute:
 - before all tests in the test suite
 - before each test in the test suite
 - after each test in the test suite
 - after all tests in the test suite

***Testdeck*** exposes these as:
 - instance `before` and `after` methods,  
  that execute before and after each test in the class
 - static `before` and `after` methods,
  that execute before and after all tests in the class

``` typescript
@suite
class MyClass {

  static before() {
    console.log("- static before");
  }

  constructor() {
    console.log("  - new");
  }

  before() {
    console.log("    - instance before");
  }

  @test test1() {
    console.log("    - test1");
  }
  @test test2() {
    console.log("    - test2");
  }

  after() {
    console.log("    - instance after");
  }

  static after() {
    console.log("- static after");
  }
}
```

This prints:

- static before
  - new
    - instance before
    - test1
    - instance after
  - new
    - instance before
    - test2
    - instance after
- static after

### Focused Tests
#### Only
#### Skip
### Test Modifiers
#### Timeout
### Test Data
### Dependency Injection
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
The `@suite` and `@test` decoratros will declare suites and tests. And class tests can be placed near, or within TDD/BDD style suites.

The decorators are implemented to execute code like this:
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

// Testdeck implements the @suite and @test,
// to execute code roughly like:
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
The actual implementation is a bit more complicated and involves handling async code and test modifiers like timeout or focus tests.

***Testdeck*** aims to provide ***1:1*** mapping between ***Testdeck OOP test UI*** features and the native test framework features.

***Testdeck*** uses the TDD/BDD functional UI from existing frameworks, to implement TypeScript class decorators, that enable the ***OOP style test UI***. That makes it play well with others and integrate with any existing functional style tests.
