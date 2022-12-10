import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';

import { IdealizedApi } from './admonitions';
import { capitalizeName, determineExecutionOptionDecoratorName, importStatement } from './utils';

export default function IfaceExecutionOptionDecorator({ packageName, timeout = false, retry = false, done = false, defaultValue = 0, value, classDecorator = false } = props) {
    const decoratorName = determineExecutionOptionDecoratorName({ timeout, retry });
    return <>
        <Synopsis {...{ packageName, decoratorName, classDecorator, done, defaultValue, value }} />
        <Declaration {...{ packageName, decoratorName, classDecorator }} />
        <ExampleUsages {...{ packageName, decoratorName, classDecorator, done, defaultValue, value }} />
    </>;
}

function Synopsis({ packageName, decoratorName, classDecorator = false, done = false } = props) {
    const imports = importStatement({ suite: true, test: true, packageName, decoratorName });
    const code = [];
    const decorator = `@${decoratorName}(<number>)`;
    const parameters = [];
    if (done) {
        parameters.push('[done: ((err?: Error) => void)]');
    }

    code.push(imports);
    code.push('');
    code.push('@suite()');
    if (classDecorator) {
        code.push(decorator);
    }
    code.push(`\
class TestSuite {
    @test()
    ${decorator}
    [async] test(${parameters.join(', ')}): void|Promise<void> { /* ... */ }
}`
    );

    return <>
        <h3>SYNOPSIS</h3>
        <CodeBlock language="typescript">{`${code.join('\n')}`}</CodeBlock>
    </>;
}

function Declaration({ decoratorName, classDecorator = false } = props) {
    const code = [];
    const returnType = ['MethodDecorator'];
    if (classDecorator) {
        returnType.push('ClassDecorator');
    }

    code.push(`export declare function ${decoratorName}(value: number): ${returnType.join('|')};`);

    return <>
        <h3>DECLARATION</h3>
        <IdealizedApi />
        <CodeBlock language="typescript">{`${code.join('\n')}`}</CodeBlock>
    </>;
}

function ExampleUsages({ packageName, decoratorName, classDecorator = false, done = false, defaultValue = 0, value } = props) {
    const imports = importStatement({ suite: true, test: true, packageName, decoratorName });
    const capitalizedName = capitalizeName(decoratorName);
    const tabItems = [];
    let parameters = '';
    if (done) {
        parameters = 'done: ((err?: Error) => void)';
    }
    let classDecoratorUsage = '';
    if (classDecorator) {
        classDecoratorUsage = `\n@${decoratorName}(${defaultValue}) // suite standard`;
    }
    tabItems.push(
        <TabItem key="execution-modifier-sync" value="sync" label="Sync">
            {/* <Usage {...props} /> */}
            <CodeBlock language="typescript" showLineNumbers>{`\
${imports}

@suite()${classDecoratorUsage}
class TestSuite {
    @test()
    testWithStandard${capitalizedName}(): void { /* ... */ }

    @test()
    @${decoratorName}(${value})
    testWithSpecific${capitalizedName}(): void { /* ... */ }
}`
            }</CodeBlock>
        </TabItem>
    );
    tabItems.push(
        <TabItem key="execution-modifier-async" value="async" label="Async">
            <CodeBlock language="typescript" showLineNumbers>{`\
${imports}

@suite()${classDecoratorUsage}
class TestSuite {
    @test()
    async testWithStandard${capitalizedName}(): Promise<void> { /* ... */ }

    @test()
    @${decoratorName}(${value})
    async testWithSpecific${capitalizedName}(): Promise<void> { /* ... */ }
}`
            }</CodeBlock>
        </TabItem>
    );
    if (done) {
        tabItems.push(
            <TabItem key="execution-modifier-callback" value="callback" label="Callback">
                <CodeBlock language="typescript" showLineNumbers>{`\
${imports}

@suite()${classDecoratorUsage}
class TestSuite {
    @test()
    testWithStandard${capitalizedName}(done: ((err?: Error) => void)): void { /* ... */ }

    @test()
    @${decoratorName}(${value})
    testWithSpecific${capitalizedName}(done: ((err?: Error) => void)): void { /* ... */ }
}`
                }</CodeBlock>
            </TabItem>
        );
    }
    return <>
        <h3>EXAMPLE USAGE</h3>
        <Tabs groupId="execution-model">
            {tabItems}
        </Tabs>
    </>;
}
