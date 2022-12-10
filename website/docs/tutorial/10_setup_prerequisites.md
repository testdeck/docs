---
sidebar_position: 10
sidebar_label: Setup Prerequisites
title: Setup Prerequisites
description: |
  This tutorial runs you through the steps
  required to set up your development
  environment.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { NodeDependency } from '@site/src/components/admonitions';

This tutorial runs you through the steps required to set up your development environment.

## Version Control System

We strongly recommend using a [version control system](https://en.wikipedia.org/wiki/Version_control).

:::info
We will use [GIT](https://git-scm.com/) and [GitHub](https://github.com) in all the presented examples.
:::

<Tabs groupId="operating-system">
<TabItem value="linux" label="Linux">

Install the `git` package.

:::caution TIP
Depending on your distribution and package manager, the below step will be different.
:::

```
sudo apt-get install git
```

</TabItem>

<TabItem value="macos" label="MacOS">

Follow the instructions for [MacOS](https://git-scm.com/download/mac) to install.

</TabItem>

<TabItem value="windows" label="Windows">

Follow the instructions on [Git for Windows](https://gitforwindows.org/) to install.

</TabItem>
</Tabs>


## Integrated Development Environment (IDE)

We also strongly recommend you install and use an [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment).

### VSCode

[VSCode](https://code.visualstudio.com/) is an [open source](https://github.com/microsoft/vscode) and free to use IDE from [Microsoft](https://en.wikipedia.org/wiki/Microsoft) that is
available for a wide variety of operating systems.


## Node Version Manager (NVM)

We also recommend that you use a node version manager like [nvm](https://github.com/nvm-sh/nvm) when working on [Unix-like](https://en.wikipedia.org/wiki/Unix-like) operating systems such as [Linux](https://en.wikipedia.org/wiki/Linux), [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD), or [MacOS](https://en.wikipedia.org/wiki/MacOS).

For [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) you can use [nvm-windows](https://github.com/coreybutler/nvm-windows) instead.

<Tabs groupId="operating-system">
<TabItem value="linux" label="Linux">

Follow the [official installation instructions](https://github.com/nvm-sh/nvm#installing-and-updating) to install ***nvm***.

See also [Troubleshooting Linux](https://github.com/nvm-sh/nvm#troubleshooting-on-linux) if you encounter any issues.

</TabItem>

<TabItem value="macos" label="MacOS">

Follow the [official installation instructions](https://github.com/nvm-sh/nvm#installing-and-updating) to install ***nvm***.

See also [Troubleshooting MacOS](https://github.com/nvm-sh/nvm#troubleshooting-on-macos) if you encounter any issues.

</TabItem>

<TabItem value="windows" label="Windows">

Follow the [official installation instructions](https://github.com/coreybutler/nvm-windows#install-nvm-windows) to install ***nvm-windows***.

</TabItem>
</Tabs>



### Node.js

Now is the perfect time to install [Node.js](https://nodejs.org/en/about/).

:::tip
Using ***nvm*** makes this step very easy, and one can choose between installed versions at all times.
:::

:::info
We will install and use the latest ***long-term support release (lts)***.
:::

<Tabs groupId="operating-system">
<TabItem value="linux" label="Linux">

```shell showLineNumbers
nvm install lts
nvm use lts
```

:::tip
You can use the following commands to manage Node.js versions:

- ***nvm ls*** to see the installed versions.
- ***nvm ls-remote*** to see which versions are available for installation.
- ***nvm install &lt;version-id&gt;*** to install a specific version.
- ***nvm use &lt;version-id&gt;*** to use a specific version.
:::

</TabItem>

<TabItem value="macos" label="MacOS">

```shell showLineNumbers
nvm install lts
nvm use lts
```

:::tip
You can use the following commands to manage Node.js versions:

- ***nvm ls*** to see the installed versions.
- ***nvm ls-remote*** to see which versions are available for installation.
- ***nvm install &lt;version-id&gt;*** to install a specific version.
- ***nvm use &lt;version-id&gt;*** to use a specific version.
:::

</TabItem>

<TabItem value="windows" label="Windows">

```shell showLineNumbers
nvm install lts
nvm use lts
```

:::tip
You can use the following commands to manage Node.js versions:

- ***nvm list*** to see the installed versions.
- ***nvm list available*** to see which versions are available for installation.
- ***nvm install &lt;version-id&gt;*** to install a specific version.
- ***nvm use &lt;version-id&gt;*** to use a specific version.
:::

</TabItem>
</Tabs>



## Node Package Manager

### Upgrade NPM (optional)

Next, you might want to upgrade `npm` to its latest version.

<NodeDependency packageName="npm" version="latest" />

```shell showLineNumbers
npm install --global npm@latest
```



### Yarn (optional)

By default, [npm](https://docs.npmjs.com/) will be provided for [package management and package dependency management](https://en.wikipedia.org/wiki/Package_manager).

If you prefer [yarn](https://yarnpkg.com/), follow the below steps to install it globally.

<NodeDependency packageName="yarn" version="latest" />

```shell showLineNumbers
npm install --global yarn@latest
```


## TypeScript (optional)

For some use cases, you might want to install [TypeScript](https://www.typescriptlang.org/) globally.

<NodeDependency packageName="typescript" version="latest" />

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell showLineNumbers
npm install --global typescript@latest
```

</TabItem>

<TabItem value="yarn" label="yarn">

```shell showLineNumbers
yarn global add typescript@latest
```

</TabItem>
</Tabs>
