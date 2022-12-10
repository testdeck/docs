import Admonition from '@theme/Admonition';
import React from 'react';

export function NodeDependency({ type = "caution", version = "latest", packageName, title = "tip" } = props) {
    const url = `https://npmjs.com/package/${packageName}`;

    return <Admonition type={type} title={title}>
        We are using <em><a href={url} target="_blank">{packageName}@{version}</a></em> in our examples.

        You might want a different version instead.
    </Admonition>;
}
