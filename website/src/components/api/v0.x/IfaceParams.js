import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';

import { IdealizedApi } from '@site/src/components/api/v0.x/admonitions';
import { determineExecutionMode, determineReturnType, importStatement, optionDecorators } from './utils';

export default function IfaceParams({ packageName, timeout = false, retry = false, slow = false, done = false } = props) {
    return <>
        <Synopsis {...{ packageName, timeout, retry, slow, done }} />
        <Declaration />
        <ExampleUsages {...{ packageName, timeout, retry, slow, done }} />
    </>;
}

function Synopsis({ packageName, timeout = false, retry = false, slow = false, done = false } = props) {
    const imports = importStatement({ suite: true, test: true, params: true, packageName, timeout, retry, slow });
    const decorators = optionDecorators({ indent: true, timeout, retry, slow });
    const returnType = determineReturnType({ nil: true, promise: true });
    const parameters = done ? 'done: ((err?: Error) => void)' : '';
    const testMethod = `[async] test(${parameters}): ${returnType} { /* ... */ }`;

    const code = [];

    code.push(imports);
    code.push('');
    code.push(`\
@suite()
class TestSuite {
    @test()${decorators}
    [@params.naming((<any>) => <string>)]
    @params[.(pending|skip|only)](<any>[, <string>])
    ...
    ${testMethod}
}`
    );

    return <>
        <h3>SYNOPSIS</h3>
        <CodeBlock language="typescript">{`${code.join('\n')}`}</CodeBlock>
    </>;
}

function Declaration() {
    const code = [];

    code.push(`\
export interface params {
    (params: any, name?: string): MethodDecorator;
    pending: (params: any, name?: string): MethodDecorator;
    skip: (params: any, name?: string): MethodDecorator;
    only: (params: any, name?: string): MethodDecorator;
    naming: ((params: any) => string);
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
        <h2>EXAMPLE USAGE</h2>
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
        <TabItem key="params-sync" value="sync" label="Sync">
            <Usage {...{ nil: true, mode, packageName, timeout, retry, slow }} />
        </TabItem>
    );

    tabItems.push(
        <TabItem key="params-async" value="async" label="Async">
            <Usage {...{ promise: true, mode, packageName, timeout, retry, slow }} />
        </TabItem>
    );

    if (done) {
        tabItems.push(
            <TabItem key="params-callback" value="callback" label="Callback">
                <Usage {...{ done: true, nil: true, mode, packageName, timeout, retry, slow }} />
            </TabItem>
        );
    }

    return <Tabs groupId="execution-model">
        {tabItems}
    </Tabs>;
}

function Usage({ packageName, mode, timeout = false, retry = false, slow = false, done = false, nil = false, promise = false } = props) {
    const exmode = determineExecutionMode(mode);
    const imports = importStatement({ suite: true, test: true, params: true, packageName, timeout, retry, slow });
    const decorators = optionDecorators({ indent: true, timeout, retry, slow });
    const asynchronous = promise ? 'async ' : '';
    const returnType = determineReturnType({ nil, promise });
    const paramsParameter = 'params: any'
    const parameters = done ? `done: ((err?: Error) => void), ${paramsParameter}` : paramsParameter;
    const testMethod = `${asynchronous}test(${parameters}): ${returnType} { /* ... */ }`;

    return <CodeBlock language="typescript" showLineNumbers>{`\
${imports}

@suite()
class TestSuite {
    @test()${decorators}
    @params.naming((params) => \`testing \${params}\`)
    @params${exmode}([1,2,3])
    ${testMethod}
}`
    }</CodeBlock>;
}
