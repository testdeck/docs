import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

export default function Templates() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Templates"
            description="Description will go into a meta tag in <head />">
            <main>
                Project templates
            </main>
        </Layout>
    );
}
