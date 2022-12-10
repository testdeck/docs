import Admonition from '@theme/Admonition';
import React from 'react';

export function HookConventions() {
    return (
        <Admonition type="info">
            Hooks are realized based on method naming and scoping conventions.
        </Admonition>
    );
}

export function IdealizedApi() {
    return (
        <Admonition type="note">
            This API represents an idealized version of the actual API and does not necessarily comply with the standard <em><a href="https://en.wikipedia.org/wiki/Domain-specific_language" target="_blank">DSL</a></em> for <em><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html" target="_blank">TypeScript declaration files</a></em>.
            The actual API can even be more complex, yet showing you that information here would make things less comprehensible.
        </Admonition>
    );
}
