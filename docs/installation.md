# Installation

`varet` requires `node` to be installed on your system.

Install: https://nodejs.org/en/download/package-manager

Add `varet` as a global dependency:

```bash
yarn global add varet@latest
```

Add an alias to `v` _(optional)_:

```bash
alias v='varet'
```

Confirm installation:
::: code-group

```bash [v]
v
```

```bash [varet]
varet
```

:::

```
                                  __
 __  __    __      _ __     __   /\ \__
/\ \/\ \ /'__`\   /\` __\ / ,.`\ \ \ ,_\
\ \ \/ |/\ \_\.\_ \ \ \/ /\  __/  \ \ \/
 \ \___/\ \__/.\_\ \ \_\ \ \____\  \ \ \_
  \/__/  \/__/\/_/  \/_/  \/____/   \ \__\
                                     \/__/


Usage: varet [options] [command]

Options:
  -h, --help      display help for command

Commands:
  git             git init, .gitignore
  rps             Rock paper scissors
  version         Displays the current version of varet
  ls              lists all available jobs
  help [command]  display help for command
```

You should see `varet` help page, with the velvet logo on top.
