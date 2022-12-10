import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';

import { IdealizedApi } from './admonitions';
import { declarationOptionsParameter, decoratorUsageParameters, determineExecutionMode, importStatement, optionDeclarations, optionDecorators, synopsisParameters } from './utils';

export default function IfaceSuite({ packageName, timeout = false, retry = false, slow = false } = props) {
    return <>
        <Synopsis {...{ packageName, timeout, retry, slow }} />
        <Declaration {...{ packageName, timeout, retry, slow }} />
        <ExampleUsages {...{ packageName, timeout, retry, slow }} />
    </>;
}

function Synopsis({ packageName, timeout = false, retry = false, slow = false } = props) {
    const imports = importStatement({ suite: true, packageName, timeout, retry, slow });
    const parameters = synopsisParameters({ leading: 'string', timeout, retry, slow });
    const decorators = optionDecorators({ timeout, retry, slow });
    const code = [];

    code.push(imports);
    code.push('');
    code.push(`\
@suite[.(pending|skip|only)][(${parameters})]${decorators}
class TestSuite { /* ... */ }`
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
export interface suite {
    (name?: string${optionsParameter}): ClassDecorator;
    pending: (name?: string${optionsParameter}): ClassDecorator;
    skip: (name?: string${optionsParameter}): ClassDecorator;
    only: (name?: string${optionsParameter}): ClassDecorator;
}`
    );

    return <>
        <h3>DECLARATION</h3>
        <IdealizedApi />
        <CodeBlock language="typescript">{`${code.join('\n')}`}</CodeBlock>
    </>;
}

function ExampleUsages({ packageName, timeout = false, retry = false, slow = false } = props) {
    return <>
        <h2>EXAMPLE USAGE</h2>
        <Tabs groupId="execution-modifier">
            <TabItem value="immediate" label="Immediate">
                <Usage {...{ mode: "immediate", packageName, timeout, retry, slow }} />
            </TabItem>

            <TabItem value="pending" label="Pending">
                <Usage {...{ mode: "pending", packageName, timeout, retry, slow }} />
            </TabItem>

            <TabItem value="skip" label="Skip">
                <Usage {...{ mode: "skip", packageName, timeout, retry, slow }} />
            </TabItem>

            <TabItem value="only" label="Only">
                <Usage {...{ mode: "only", packageName, timeout, retry, slow }} />
            </TabItem>
        </Tabs>
    </>;
}

function Usage({ packageName, mode, timeout = false, retry = false, slow = false } = props) {
    const imports = importStatement({ suite: true, packageName, timeout, retry, slow });
    const parameters = decoratorUsageParameters({ timeout, retry, slow });
    const decorators = optionDecorators({ usage: true, timeout, retry, slow });
    const exmode = determineExecutionMode(mode);
    const code = [];

    code.push(imports);
    code.push('');
    code.push(`\
@suite${exmode}()${decorators}
class TestSuite { /* ... */ }`
    );
    code.push('');
    if (parameters) {
        code.push(`\
@suite${exmode}(${parameters})
class TestSuite { /* ... */ }`
        );
        code.push('');
    }
    code.push(`\
@suite${exmode}('named suite')${decorators}
class NamedTestSuite { /* ... */ }`
    );
    if (parameters) {
        code.push('');
        code.push(`\
@suite${exmode}('named suite', ${parameters})
class NamedTestSuite { /* ... */ }`
        );
    }

    return <CodeBlock language="typescript" showLineNumbers>{`${code.join('\n')} `}</CodeBlock>;
}
