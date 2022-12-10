import Admonition from '@theme/Admonition';
import React from 'react';

export function DeprecatedApi({ version, target, url, feature, replacement, children } = props) {
    let featureName = feature ? `<em>${feature}</em>` : 'The feature';
    let info = `${featureName} was deprecated in <em>${version}</em>, `;

    if (replacement) {
        info += ` and will be replaced by <em>${replacement}</em> in <em>${target}</em>.`;
    } else {
        info += ` and will be removed in <em>${target}</em>.`;
    }

    return <>
        <Admonition type="caution" title="Deprecated">
            <em>{info}</em>
            {children && <p>{children}</p>}
            {url && <p>See <em><a href={url} target="_blank">{url}</a></em> for more information.</p>}
        </Admonition>
    </>;
}
