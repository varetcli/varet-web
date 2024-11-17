# Custom Plugins

`varet` has a package called `@varet/core` that contains everything needed to create a `VaretPlugin`.

First, install `@varet/plugins/boilerplate`:

```bash
yarn global add @varet/plugins/boilerplate
```

Then you should be able to run boilerplate as a job:

```bash
varet boilerplate
```

`boilerplate` generates a boilerplate varet plugin project in the current directory. You can then edit this project to create your own plugin.

## How to use Custom Plugins

There are two ways to use Custom Plugins: local, and remote.

### Local

In the project `boilerplate` created, build the project, and install globally:

```bash
yarn build && yarn global add "file:$PWD"
```

This adds your local `varet` package to the global module list, and everytime you build the project, it gets updated.

### Remote

> Your project's name must include `varet-plugin` to be installable.

Publish your project to npm:

```bash
yarn publish
```

Then, install it globally:

```bash
yarn global add project_name@latest
```

You can now run your custom plugin's jobs:

```bash
varet custom_job
```
