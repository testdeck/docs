---
sidebar_position: 20
sidebar_label: '@testdeck/core'
description: Core API
---

# @testdeck/core

This package provides the core infrastructure for integrating both test frameworks and IOC containers.

:::tip
See for example [@testdeck/mocha](https://github.com/testdeck/testdeck/blob/v0.3.3/packages/mocha/index.ts) to learn how we integrated ***Mocha***.
:::

## Test Framework Integration API

```typescript
export type PromiseOrVoid = void | Promise<void>;

export type FrameworkContext = any;

export type Done = (err?: any) => void;

export type SuiteCallback = (this: FrameworkContext) => void;

export type CallbackOptionallyAsync = (this: FrameworkContext, done?: Done) => PromiseOrVoid;

export interface SuiteDecoratorOrName extends ClassDecorator {
    (name: string, ...decorators: ClassDecorator[]): ClassDecorator;
    (...decorator: ClassDecorator[]): ClassDecorator;
}

export interface SuiteDecorator extends SuiteDecoratorOrName {
    only: SuiteDecoratorOrName;
    skip: SuiteDecoratorOrName;
    pending: SuiteDecoratorOrName;
}

export interface TestDecoratorOrName extends MethodDecorator {
    (name: string, ...decorator: MethodDecorator[]): MethodDecorator;
    (...decorator: MethodDecorator[]): MethodDecorator;
}

export interface TestDecorator extends TestDecoratorOrName {
    only: TestDecoratorOrName;
    skip: TestDecoratorOrName;
    pending: TestDecoratorOrName;
}

export interface ParameterisedTestDecorator {
    (params: any, name?: string): MethodDecorator;
    skip(params: any, name?: string): MethodDecorator;
    only(params: any, name?: string): MethodDecorator;
    pending(params: any, name?: string): MethodDecorator;
    naming(nameForParameters: (params: any) => string): MethodDecorator;
}

/**
 * Test or suite execution.
 * The `undefined` means execute as normal.
 */
export type Execution = undefined | "pending" | "only" | "skip";

export interface SuiteSettings {
    execution?: Execution;
    timeout?: number;
    slow?: number;
    retries?: number;
}

export interface TestSettings {
    execution?: Execution;
    timeout?: number;
    slow?: number;
    retries?: number;
}

export interface LifecycleSettings {
    timeout?: number;
    slow?: number;
}

export interface TestRunner {
    suite(name: string, callback: SuiteCallback, settings?: SuiteSettings): void;
    test(name: string, callback: CallbackOptionallyAsync, settings?: TestSettings): void;
    beforeAll(name: string, callback: CallbackOptionallyAsync, settings?: LifecycleSettings): void;
    beforeEach(name: string, callback: CallbackOptionallyAsync, settings?: LifecycleSettings): void;
    afterEach(name: string, callback: CallbackOptionallyAsync, settings?: LifecycleSettings): void;
    afterAll(name: string, callback: CallbackOptionallyAsync, settings?: LifecycleSettings): void;
}

export declare abstract class ClassTestUI {
    readonly executeAfterHooksInReverseOrder: boolean;

    readonly suite: SuiteDecorator;
    readonly test: TestDecorator;
    readonly params: ParametrisedTestDecorator;

    readonly slow: ClassOrMethodDecorator;
    readonly timeout: ClassOrMethodDecorator;
    readonly retries: ClassOrMethodDecorator;

    readonly pending: ClassOrMethodDecorator;
    readonly only: ClassOrMethodDecorator;
    readonly skip: ClassOrMethodDecorator;

    constructor(runner: TestRunner);
}
```

## IOC Container Integration API

:::tip
See for example [@testdeck/di-typedi](https://github.com/testdeck/testdeck/blob/v0.3.3/packages/di-typedi/index.ts) to learn how we integrated ***TypeDI***.
:::

```typescript
export type PromiseOrVoid = void | Promise<void>;

export type Done = (err?: any) => void;

export interface TestInstance {
    before?(done?: Done): PromiseOrVoid;
    after?(done?: Done): PromiseOrVoid;
}

export interface TestClass<T extends TestInstance> {
    new(...args: any[]): T;
    prototype: T;
    before?(done?: Done): PromiseOrVoid;
    after?(done?: Done): PromiseOrVoid;
}

export interface DependencyInjectionSystem {
    handles<T extends TestInstance>(cls: TestClass<T>): boolean;
    create<T extends TestInstance>(cls: TestClass<T>): T;
}

/**
 * Register a dependency injection system to be used when instantiating test classes.
 * @param instantiator The dependency injection system implementation.
 */
export declare function registerDI(instantiator: DependencyInjectionSystem): void;
```
