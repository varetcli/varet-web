# What is `varet`?

`varet` is a command-line tool designed to streamline and automate predefined tasks, referred to as “jobs.” It provides a straightforward interface for running jobs directly from your terminal, making repetitive setup tasks faster and more efficient.

## Key Features

• Predefined Jobs: Execute predefined workflows with a single command.

• Core Plugins: Access a variety of built-in commands and functionalities.

• Simplified Workflow: Automate steps like initializing Git repositories, configuring Prettier, or setting up VS Code with minimal effort.

## How Does It Work?

At its core, `varet` executes jobs by triggering a series of steps defined within each job. For example, running the git job performs tasks like:

1. Initializing a Git repository with git init.
2. Creating a .gitignore file with sensible defaults, allowing the user to confirm the details.

### Example Usage

To run a job, simply provide its name as an argument:

::: code-group

```bash [v]
v git
```

```bash [varet]
varet git
```

:::

> [!IMPORTANT]
> We recommend running `alias v='varet'` for ease of use. If you don't want to set an alias, you can also see the `varet` commands in the examples.

This command runs the git job, automating tasks for Git initialization. Similarly, you can explore and execute other jobs as needed.

To view all available jobs, use:

::: code-group

```bash [v]
v
```

```bash [varet]
varet
```

:::

## Why Use `varet`?

`varet` simplifies the process of setting up and automating common developer tasks. Instead of repeatedly running multiple commands for routine setups, you can rely on `varet` to handle the details, saving you time and effort.

Whether you’re initializing a project, setting up configurations, or exploring the available jobs, `varet` makes the process efficient and user-friendly.

## Some Use Cases

Varet is designed to simplify repetitive tasks in your development workflow. Here are some common scenarios where Varet can save time and effort:

### Initializing a Git Repository

Manually setting up a Git repository can involve multiple steps. With Varet, you can streamline this process:
::: code-group

```bash [v]
v git
```

```bash [varet]
varet git
```

:::
What it does:

- Runs `git init` to initialize a repository.

- Creates a `.gitignore` file with sensible defaults. _(optional)_

### Configuring Prettier

Setting up Prettier across projects often involves repetitive configuration. Varet can handle this setup for you:
::: code-group

```bash [v]
v prettier
```

```bash [varet]
varet prettier
```

:::
What it does:

- Creates a `.pretierrc` file.
- If it can find the preferred package manager, installs `prettier` as a dev dependency.
- Adds a `format` command to `package.json`.
- Runs the formatter.

### Internal Tools

`varet` has a plugin based architecture that uses npm packages as plugins. This means that anyone can create a plugin, and then use it with `varet`.

#### A custom gitflow plugin:

::: code-group

```bash [v]
$ v plugin gitflow
✓ Successfully installed plugin: gitflow


$ v gitflow -n new-plugin -i 1234

✓ Created branch feature-1234/new-plugin from develop.
> Would you like to switch to feature-1234/new-plugin? (Y/n)

---

$ v gitflow publish
✓ Created a pull request on GitHub from feature-1234/new-plugin to develop.
```

```bash [varet]
$ varet plugin gitflow
✓ Successfully installed plugin: gitflow


$ varet gitflow -n new-plugin -i 1234

✓ Created branch feature-1234/new-plugin from develop.
> Would you like to switch to feature-1234/new-plugin? (Y/n)

---

$ varet gitflow publish
✓ Created a pull request on GitHub from feature-1234/new-plugin to develop.

```

:::

#### A custom Jenkins plugin:

::: code-group

```bash [v]
$ v jenkins fe_build
> Ok to run Jenkins Job: fe_build for branch feature-1234/new-plugin? (Y/n)
✓ Triggered Jenkins Job: fe_build
```

```bash [varet]
$ varet jenkins fe_build
> Ok to run Jenkins Job: fe_build for branch feature-1234/new-plugin? (Y/n)
✓ Triggered Jenkins Job: fe_build
```

:::
