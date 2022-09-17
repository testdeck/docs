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

## Hall of Fame
To all of our contributors - a big thank you!

<a href="https://github.com/pana-cc"><img src="https://avatars2.githubusercontent.com/u/24751471?v=4" title="pana-cc" width="80" height="80"></a>
<a href="https://github.com/silkentrance"><img src="https://avatars3.githubusercontent.com/u/6068824?v=4" title="silkentrance" width="80" height="80"></a>
<a href="https://github.com/dimastark"><img src="https://avatars3.githubusercontent.com/u/11780431?v=4" title="dimastark" width="80" height="80"></a>
<a href="https://github.com/Haringat"><img src="https://avatars1.githubusercontent.com/u/3000678?v=4" title="Haringat" width="80" height="80"></a>
<a href="https://github.com/godart"><img src="https://avatars2.githubusercontent.com/u/5794761?v=4" title="godart" width="80" height="80"></a>
<a href="https://github.com/Eronana"><img src="https://avatars3.githubusercontent.com/u/9164153?v=4" title="Eronana" width="80" height="80"></a>
<a href="https://github.com/FabianLauer"><img src="https://avatars0.githubusercontent.com/u/2205595?v=4" title="FabianLauer" width="80" height="80"></a>
<a href="https://github.com/JoshuaKGoldberg"><img src="https://avatars1.githubusercontent.com/u/3335181?v=4" title="JoshuaKGoldberg" width="80" height="80"></a>
<a href="https://github.com/gallayl"><img src="https://avatars0.githubusercontent.com/u/16716099?v=4" title="gallayl" width="80" height="80"></a>
<a href="https://github.com/richardspence"><img src="https://avatars2.githubusercontent.com/u/9914123?v=4" title="richardspence" width="80" height="80"></a>
<a href="https://github.com/sergebat"><img src="https://avatars1.githubusercontent.com/u/5421460?v=4" title="sergebat" width="80" height="80"></a>
<a href="https://github.com/cexoso"><img src="https://avatars2.githubusercontent.com/u/11764107?v=4" title="cexoso" width="80" height="80"></a>
<a href="https://github.com/dcharbonnier"><img src="https://avatars3.githubusercontent.com/u/6220422?v=4" title="dcharbonnier" width="80" height="80"></a>
<a href="https://github.com/itaysabato"><img src="https://avatars0.githubusercontent.com/u/2768658?v=4" title="itaysabato" width="80" height="80"></a>
<a href="https://github.com/stanhuff"><img src="https://avatars2.githubusercontent.com/u/4603784?v=4" title="stanhuff" width="80" height="80"></a>

## Getting Started
Select your testing framework:
<menu class="framework list">
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
 - ***instance*** `before` and `after` methods,  
  that execute before and after each test in the class
 - ***static*** `before` and `after` methods,  
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

### Test Execution Options
#### Timeout
If the test execution takes more than the given time, it will fail.

``` typescript
import { suite, test, timeout } from "@testdeck/mocha";

@suite
class Suite {

  @test(timeout(3000))
  timeout(done) {}

  @test
  @timeout(3000)
  timeout(done) {}
}
```

#### Slow
If the test execution takes more than the given time, it will be marked in the test run result summary as slow.

``` typescript
import { suite, test, slow } from "@testdeck/mocha";

@suite
class Suite {

  @test(slow(2000))
  slow(done) {}

  @test
  @slow(2000) {}
}
```

#### Retries
Retries will let a test attempt to run multiple times.

``` typescript
import { suite, test, retries } from "@testdeck/mocha";

@suite
class Suite {

  @test(retries(2))
  retried1() {}

  @test
  @retries(2)
  retried2() {}
}
```

#### Test Naming
Class suite names will use the name of the class, or can be provided as string to the `@suite` decorator.

Test names will use the name of the method name, or can be provided as string to the `@test` decorator. ES6 classes allow string literals for method names.

``` typescript
import { suite, test } from '@testdeck/mocha';

/**
 * The name of this suite will be "Suite".
 */
@suite
class Suite {

  /**
   * The name of this test will be "test1".
   */
  @test
  test1() {}

  @test('a custom name for the test')
  test2() {}
  
  @test 'alternate naming'() {}
}
```

#### Pending Tests
A test can be marked as pending.

``` typescript
import { suite, test, pending } from '@testdeck/mocha';

@suite
class Suite {

  @test.pending
  pending1() {}

  @test
  @pending
  pending2() {}

  @test
  @pending(isCondition)
  conditionallyPending() {
  }
}
```

#### Skipping Tests
A test can be marked for being skipped.

``` typescript
import { suite, test, skip } from '@testdeck/mocha';

@suite
class Suite {

  @test.skip
  skipped1() {}

  @test
  @skip
  skipped2() {}

  @test
  @skip(isCondition)
  conditionallySkipped() {}
}
```

#### Only
A test can be marked as focused.

When working in a particular part of your test suite, you can mark tests or suites to be the ***only*** one that execute on a test run.

``` typescript
import { suite, test, only } from '@testdeck/mocha';

@suite.only
class Suite {
  @test
  focused() {
  }
}

@suite
@only
class Suite {
  @test
  focused() {
  }
}

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

  @test
  "this won't run while there are other tests marked as 'only'"() {}
}
```

## Advanced
### Parameterized Tests
You can parameterize tests, or execute a test multiple times passing test data.

``` typescript
import { suite, params } from '@testdeck/mocha';

@suite
class Suite {

  @params({ arg1: 'foo', arg2: 'bar' })
  @params({ arg1: 'bar', arg2: 'foo' }, 'custom test name')
  test({ arg1, arg2 }) {
  }
}
```

TODO: Read more...

### Dependency Injection

TODO: Read more...

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
