import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';

import { determineHookName, determineHookScope, determineReturnType, importStatement } from './utils';

export default function IfaceHook({ packageName, after = false, each = false, done = false } = props) {
    return (<>
        <Synopsis {...{ packageName, after, each, done }} />
        <ExampleUsages {...{ packageName, after, each, done }} />
    </>);
}

function Synopsis({ packageName, after = false, each = false, done = false, nil = false, promise = false } = props) {
    const imports = importStatement({ suite: true, test: true, packageName });
    const hookName = determineHookName(after);
    const scope = determineHookScope(each);
    const returnType = determineReturnType({ nil, promise });
    const parameters = [];
    const code = [];

    if (done) {
        parameters.push('[done: ((err?: Error) => void)]');
    }

    const hookSignature = `${scope}[async] ${hookName}(${parameters.join(', ')}): ${returnType}`;

    code.push(`\
${imports}

abstract class TestSuiteBase {
    ${hookSignature} { /* ... */ }

    @test()
    baseTest() { /* ... */ }
}

@suite()
class TestSuite extends TestSuiteBase {
    ${hookSignature} { /* ... */ }

    @test()
    test() { /* ... */ }
}`
    );

    return <>
        <h3>SYNOPSIS</h3>
        <CodeBlock language="typescript">{`${code.join('\n')}`}</CodeBlock>
    </>;
}

function ExampleUsages({ packageName, after = false, each = false, done = false } = props) {
    const tabItems = [];
    tabItems.push(
        <TabItem key="hook-sync" value="sync" label="Sync">
            <Usage {...{ nil: true, packageName, after, each }} />
        </TabItem>
    )

    tabItems.push(
        <TabItem key="hook-async" value="async" label="Async">
            <Usage {...{ promise: true, packageName, after, each }} />
        </TabItem>
    );

    if (done) {
        tabItems.push(
            <TabItem key="hook-callback" value="callback" label="Callback">
                <Usage {...{ done: true, nil: true, packageName, after, each }} />
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

function Usage({ packageName, after = false, each = false, done = false, nil = false, promise = false } = props) {
    const code = [];

    const imports = importStatement({ suite: true, test: true, packageName });
    const hookName = determineHookName(after);
    const scope = determineHookScope(each);
    const returnType = determineReturnType({ nil, promise });
    const parameters = [];
    if (done) {
        parameters.push('done: ((err?: Error) => void)');
    }

    const hookSignature = [];
    hookSignature.push(scope);
    if (promise) {
        hookSignature.push('async ');
    }
    hookSignature.push(`${hookName}(${parameters.join(', ')}): ${returnType}`);

    code.push(imports);
    code.push('');
    code.push(`\
abstract class TestSuiteBase {
    ${hookSignature.join('')} { /* ... */ }

    @test()
    baseTest(): void { /* ... */ }
}`
    );
    code.push('');

    code.push(`\
@suite()
class TestSuite extends TestSuiteBase {`
    );

    if (each) {
        code.push(`\
    // overrides TestSuiteBase#${hookName}(...)`
        );
    }
    code.push(`\
    ${hookSignature.join('')} {`
    );

    if (done) {
        HookUsageChainingCallback(after, hookName, code);
    } else if (promise) {
        HookUsageChainingAsync(after, hookName, code);
    } else {
        HookUsageChainingSync(after, hookName, code);
    }

    code.push('');
    code.push(`\
    @test()
    test(): void { /* ... */ }
}`
    );

    return <CodeBlock language="typescript">{`${code.join('\n')}`}</CodeBlock>;
}

function HookUsageChainingCallback(after, hookName, code) {
    if (after) {
        code.push(`\
        try {
            /* ... */
            return super.${hookName}(done);
        } catch (err) {
            /* ... */
            return done(err);
        }
    }`
        );
    } else {
        code.push(`\
        super.${hookName}((err?: Error) => {
            if (err) {
                return done(err);
            } else {
                try {
                    /* ... */
                    return done();
                } catch (err) {
                    /* ... */
                    return done(err);
                }
            }
        });
    }`
        );
    }
}

function HookUsageChainingSync(after, hookName, code) {
    if (after) {
        code.push(`\
        try {
            /* ... */
        } catch (err) {
            /* handle error or rethrow */
        }
        return super.${hookName}();
    }`
        );
    } else {
        code.push(`\
        super.${hookName}();
        try {
            /* ... */
        } catch (err) {
            /* handle error or rethrow */
        }
    }`
        );
    }
}

function HookUsageChainingAsync(after, hookName, code) {
    if (after) {
        code.push(`\
        return new Promise((resolve, reject) => {
            try {
                /* ... */
                return super.${hookName}();
            } catch (err) {
                /* ... */
                return reject(err);
            }
        });
    }`
        );
    } else {
        code.push(`\
        return super.before().then(() => {
            return new Promise((resolve, reject) => {
                try {
                    /* ... */
                    return resolve();
                } catch (err) {
                    /* ... */
                    return reject(err);
                }
            });
        });
    }`
        );
    }
}
