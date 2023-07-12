---
id: nvm-per-project-folder
title: nvm per Project Folder
date: 2021-09-11 16:03:29
---

If you want to set a specific `node` version for the certain project, you can do so by created one new `.nvmrc` file and modifying your `.bashrc`.

## .nvmrc

Just `cd` (`cd /mnt/sdc2/static/textblock` in my case) to your project root folder and run:

```bash
echo "10" > .nvmrc
```

`.nvmrc` file will be crated wih just one line. `10` is the required node version.

## .bashrc

Find the `.bashrc` file in your home directory (`cd ~`) and add this code to the end of the `.bashrc`:

```bash title=".bashrc"
cdnvm() {
    cd "$@";
    nvm_path=$(nvm_find_up .nvmrc | tr -d '\n')

    # If there are no .nvmrc file, use the default nvm version
    if [[ ! $nvm_path = *[^[:space:]]* ]]; then

        declare default_version;
        default_version=$(nvm version default);

        # If there is no default version, set it to `node`
        # This will use the latest version on your machine
        if [[ $default_version == "N/A" ]]; then
            nvm alias default node;
            default_version=$(nvm version default);
        fi

        # If the current version is not the default version, set it to use the default version
        if [[ $(nvm current) != "$default_version" ]]; then
            nvm use default;
        fi

        elif [[ -s $nvm_path/.nvmrc && -r $nvm_path/.nvmrc ]]; then
        declare nvm_version
        nvm_version=$(<"$nvm_path"/.nvmrc)

        declare locally_resolved_nvm_version
        # `nvm ls` will check all locally-available versions
        # If there are multiple matching versions, take the latest one
        # Remove the `->` and `*` characters and spaces
        # `locally_resolved_nvm_version` will be `N/A` if no local versions are found
        locally_resolved_nvm_version=$(nvm ls --no-colors "$nvm_version" | tail -1 | tr -d '\->*' | tr -d '[:space:]')

        # If it is not already installed, install it
        # `nvm install` will implicitly use the newly-installed version
        if [[ "$locally_resolved_nvm_version" == "N/A" ]]; then
            nvm install "$nvm_version";
        elif [[ $(nvm current) != "$locally_resolved_nvm_version" ]]; then
            nvm use "$nvm_version";
        fi
    fi
}
alias cd='cdnvm'
cd $PWD
```

## Usage

Then run in your project folder:

```bash
nvm use
```

`nvm use` will traverse directory structure upwards from the current directory looking for the `.nvmrc` file. And you should see:

```bash
$ nvm use
Found '/mnt/sdc2/static/textblock/.nvmrc' with version <10>
Now using node v10.23.0 (npm v6.14.8)
```

After that, all other parent folders will use the [default node version](nvm#set-the-default-node-version).

You can check current version of `node` in certain folder:

```bash
node -v     # or node --version
```

Source: <a href='https://github.com/nvm-sh/nvm#nvmrc' class='external'>github.com: .nvmrc</a>
