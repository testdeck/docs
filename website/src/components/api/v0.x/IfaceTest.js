// import Admonition from '@theme/Admonition';
// <Admonition type="caution" title="TODO">proper test method signature</Admonition>
import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';

import { IdealizedApi } from './admonitions';
import { declarationOptionsParameter, decoratorUsageParameters, determineExecutionMode, determineReturnType, importStatement, optionDeclarations, optionDecorators, synopsisParameters } from './utils';

export default function IfaceTest({ packageName, timeout = false, retry = false, slow = false, done = false } = props) {
    return <>
        <Synopsis {...{ packageName, timeout, retry, slow, done }} />
        <Declaration {...{ timeout, retry, slow, done }} />
        <ExampleUsages {...{ packageName, timeout, retry, slow, done }} />
    </>;
}

function Synopsis({ packageName, timeout = false, retry = false, slow = false, done = false } = props) {
    const imports = importStatement({ suite: true, test: true, packageName, timeout, retry, slow });
    const decoratorParameters = synopsisParameters({ leading: 'string', timeout, retry, slow });
    const decorators = optionDecorators({ indent: true, timeout, retry, slow });
    const returnValue = determineReturnType({ nil: true, promise: true });
    const parameters = done ? '[done: ((err?: Error) => void)]' : '';
    const testMethod = `[async] test(${parameters}): ${returnValue} { /* ... */ }`;
    const code = [];

    code.push(imports);
    code.push('');
    code.push(`\
@suite()
class TestSuite {
    @test[.(pending|skip|only)][(${decoratorParameters})]${decorators}
    ${testMethod}
}`
    );

    return <>
        <h3>SYNOPSIS</h3>
        <CodeBlock language="typescript">{`${code.join('\n')}`}</CodeBlock>
    </>;
}

function Declaration({ timeout = false, retry = false, slow = false } = props) {
    const declarations = optionDeclarations({ timeout, retry, slow });
    const optionsParameter = declarationOptionsParameter({ timeout, retry, slow });
    const code = [];
    if (declarations) {
        code.push(declarations);
        code.push('');
    }
    code.push(`\
export interface test {
    (name?: string${optionsParameter}): MethodDecorator;
    pending: (name?: string${optionsParameter}): MethodDecorator;
    skip: (name?: string${optionsParameter}): MethodDecorator;
    only: (name?: string${optionsParameter}): MethodDecorator;
}`
    );

    return <>
        <h3>DECLARATION</h3>
        <IdealizedApi />
        <CodeBlock language="typescript">{`${code.join('\n')}`}</CodeBlock>
    </>;
}

function ExampleUsages({ packageName, timeout = false, retry = false, slow = false, done = false } = props) {
    return <>
        <h3>EXAMPLE USAGE</h3>
        <Tabs groupId="execution-modifier">
            <TabItem value="immediate" label="Immediate">
                <ExecutionModelUsages {...{ mode: "immediate", packageName, timeout, retry, slow, done }} />
            </TabItem>

            <TabItem value="pending" label="Pending">
                <ExecutionModelUsages {...{ mode: "pending", packageName, timeout, retry, slow, done }} />
            </TabItem>

            <TabItem value="skip" label="Skip">
                <ExecutionModelUsages {...{ mode: "skip", packageName, timeout, retry, slow, done }} />
            </TabItem>

            <TabItem value="only" label="Only">
                <ExecutionModelUsages {...{ mode: "only", packageName, timeout, retry, slow, done }} />
            </TabItem>
        </Tabs>
    </>;
}

function ExecutionModelUsages({ packageName, mode, timeout = false, retry = false, slow = false, done = false } = props) {
    const tabItems = [];

    tabItems.push(
        <TabItem key="test-sync" value="sync" label="Sync">
            <Usage {...{ mode, nil: true, packageName, timeout, retry, slow }} />
        </TabItem>
    );

    tabItems.push(
        <TabItem key="test-async" value="async" label="Async">
            <Usage {...{ mode, promise: true, packageName, timeout, retry, slow }} />
        </TabItem>
    );

    if (done) {
        tabItems.push(
            <TabItem key="test-callback" value="callback" label="Callback">
                <Usage {...{ mode, done: true, nil: true, packageName, timeout, retry, slow }} />
            </TabItem>
        );
    }

    return <Tabs groupId="execution-model">
        {tabItems}
    </Tabs>;
}

function Usage({ packageName, mode, timeout = false, retry = false, slow = false, done = false, nil = false, promise = false } = props) {
    const imports = importStatement({ suite: true, test: true, packageName, timeout, retry, slow });
    const decorators = optionDecorators({ indent: true, usage: true, timeout, retry, slow });
    const decoratorParameters = decoratorUsageParameters({ timeout, retry, slow });
    const exmode = determineExecutionMode(mode);
    const asynchronous = promise ? 'async ' : '';
    const returnType = determineReturnType({ nil, promise });
    const parameters = done ? 'done: ((err?: Error) => void)' : '';
    const testMethod = `${asynchronous}test(${parameters}): ${returnType} { /* ... */ }`;
    const code = [];
    code.push(imports);
    code.push('');
    code.push(`\
@suite()
class TestSuite {
    @test${exmode}()${decorators}
    ${testMethod}`
    );
    code.push('');
    if (decoratorParameters) {
        code.push(`\
    @test${exmode}(${decoratorParameters})
    ${testMethod}`
        );
        code.push('');
    }
    code.push(`\
    @test${exmode}("named test")${decorators}
    ${testMethod}`
    );
    if (decoratorParameters) {
        code.push('');
        code.push(`\
    @test${exmode}("named test", ${decoratorParameters})
    ${testMethod}`
        );
    }
    code.push('}');

    return <CodeBlock language="typescript" showLineNumbers>{`${code.join('\n')} `}</CodeBlock>;
}
