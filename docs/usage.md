# Usage

`varet` is used to run predefined jobs from you terminal. Some common use cases are:

- git initialization
- prettier config
- vscode config

With `veret`, you can run a job by providing its name:

```bash
varet git
```

This triggers the `git` job, which is configured to run `git init`, and then create a `.gitignore` with sensible defaults if the user pleases. These are called **steps**.

Currrently, there are several core plugins to use:

```bash
varet
```

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
