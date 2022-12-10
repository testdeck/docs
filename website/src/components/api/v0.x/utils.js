export function determineExecutionMode(mode) {
    return mode === 'immediate' ? '' : `.${mode}`;
}

export function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export function importStatement({ packageName, suite = false, test = false, params = false, timeout = false, retry = false, slow = false, decoratorName = '' } = props) {
    const imports = [];

    if (decoratorName) {
        imports.push(decoratorName);
    }
    if (retry) {
        imports.push('retries');
    }
    if (slow) {
        imports.push('slow');
    }
    if (timeout) {
        imports.push('timeout');
    }
    if (params) {
        imports.push('params');
    }
    if (suite) {
        imports.push('suite');
    }
    if (test) {
        imports.push('test');
    }

    return `import { ${imports.join(', ')} } from "${packageName}";`
}

export function optionDecorators({ indent = false, timeout = false, retry = false, slow = false, usage = false } = props) {
    const decorators = [''];
    const indentLevel = indent ? '    ' : '';
    if (timeout) {
        decorators.push(`// @timeout(${usage ? 5000 : '<number>'})`);
    }
    if (retry) {
        decorators.push(`// @retries(${usage ? 5 : '<number>'})`);
    }
    if (slow) {
        decorators.push(`// @slow(${usage ? 500 : '<number>'})`);
    }
    return decorators.length > 1 ? decorators.join(`\n${indentLevel}`) : '';
}

export function determineHookScope(each) {
    return each ? '' : 'static ';
}

export function determineReturnType({ nil = false, promise = false } = props) {
    const returnValue = [];
    if (nil) {
        returnValue.push('void');
    }
    if (promise) {
        returnValue.push('Promise<void>');
    }
    return returnValue.join('|');
}

export function determineHookName(after) {
    return after ? 'after' : 'before';
}

export function synopsisParameters({ leading = '', timeout = false, retry = false, slow = false } = props) {
    const parameters = [];
    if (leading) {
        leading.split(',')
            .map(name => parameters.push(`[<${name}>]`));
    }
    if (timeout) {
        parameters.push('[[, ]timeout(<number>)]');
    }
    if (retry) {
        parameters.push('[[, ]retries(<number>)]');
    }
    if (slow) {
        parameters.push('[[, ]slow(<number>)]');
    }
    return parameters.join('');
}

export function declarationOptionsParameter({ timeout = false, retry = false, slow = false } = props) {
    const parameters = [];
    if (timeout) {
        parameters.push('TimeoutOption');
    }
    if (retry) {
        parameters.push('RetryOption');
    }
    if (slow) {
        parameters.push('SlowOption');
    }
    return parameters.length ? `, ...options: (${parameters.join('|')})[]` : '';
}

export function decoratorUsageParameters({ timeout = false, retry = false, slow = false } = props) {
    const parameters = [];
    if (timeout) {
        parameters.push('timeout(5000)');
    }
    if (retry) {
        parameters.push('retries(5)');
    }
    if (slow) {
        parameters.push('slow(500)');
    }
    return parameters.length ? `${parameters.join(', ')}` : '';
}

function optionDeclaration(name) {
    return `export declare function ${name}(value: number): ${capitalizeName(name)}Option;`;
}

export function optionDeclarations({ timeout = false, retry = false, slow = false } = props) {
    const declarations = [];
    if (timeout) {
        declarations.push(optionDeclaration('timeout'));
    }
    if (retry) {
        declarations.push(optionDeclaration('retries'));
    }
    if (slow) {
        declarations.push(optionDeclaration('slow'));
    }
    return declarations.join('\n');
}

export function determineExecutionOptionDecoratorName({ timeout = false, retry = false } = props) {
    return timeout ? 'timeout' : (retry ? 'retries' : 'slow');
}
