---
title: Install MongoDB Linux
author: Ajay Dhangar
tags: [database, mongodb, mongosh, linux, debian, bullseye]
date: 2022-11-27 21:03:34
description: Installation MongoDB and mongosh
draft: false
---

:::warning

Caution about this caution:

:::

:::caution mongodb official caution

The `mongodb` package provided by Debian is **not** maintained by MongoDB Inc. and conflicts with the official `mongodb-org` package. If you have already installed the `mongodb` package on your Debian system, you **must** first uninstall the `mongodb` package before proceeding with these instructions.

:::

:::warning

Although the mongodb staff is trying to fix the situation, it only makes things worse. "Would that it were so simple!"

:::

<!--truncate-->

## Configure Install Settings

#### 1. Import the MongoDB public GPG Key

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
```

Should be 'OK'.

If not, see: <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/#import-the-public-key-used-by-the-package-management-system' class='external'>mongodb.com: Import The Public Key</a>

#### 2. Create a 'list file' for MongoDB

First, check your Debian version:

```bash
lsb_release -a
```

:::info

You can check the availability of MongoDB distro for your version of Debian. Open [https://repo.mongodb.org/apt/](https://repo.mongodb.org/apt/), click to Debian, and try to find your version.

:::

Edit code below depend on your version of Debian:

```bash
echo "deb http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Run the above command.

#### 3. Reload local package database

```bash
sudo apt-get update
```

#### 4. Install the MongoDB packages

import Tabs from '@theme/Tabs'  
import TabItem from '@theme/TabItem'

<Tabs>
  <TabItem value="latest" label="latest" default>

```bash
sudo apt-get install -y mongodb-org
```

  </TabItem>
  <TabItem value="specific" label="specific">

```bash
sudo apt-get install -y mongodb-org=6.0.3 mongodb-org-database=6.0.3 mongodb-org-server=6.0.3 mongodb-mongosh=6.0.3 mongodb-org-mongos=6.0.3 mongodb-org-tools=6.0.3
```

Although you can specify any available version of MongoDB, `apt-get` will upgrade the packages when a newer version becomes available.

  </TabItem>
</Tabs>

To prevent unintended upgrades see <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/#install-the-mongodb-packages' class='external'>mongodb.com: Install The Mongodb Packages</a>.

<details>
<summary>After install mongodb-org (6.0)</summary>

```shell
~ $ sudo apt-get install -y mongodb-org
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  mongodb-mongosh mongodb-org-database mongodb-org-database-tools-extra mongodb-org-mongos mongodb-org-server
  mongodb-org-shell mongodb-org-tools
The following NEW packages will be installed:
  mongodb-mongosh mongodb-org mongodb-org-database mongodb-org-database-tools-extra mongodb-org-mongos mongodb-org-server
  mongodb-org-shell mongodb-org-tools
0 upgraded, 8 newly installed, 0 to remove and 1 not upgraded.
Need to get 49.2 MB/86.9 MB of archives.
After this operation, 464 MB of additional disk space will be used.
Get:1 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-shell amd64 6.0.3 [3,080 B]
Get:2 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-server amd64 6.0.3 [28.9 MB]
Get:3 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-mongos amd64 6.0.3 [20.3 MB]
Get:4 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-database-tools-extra amd64 6.0.3 [7,752 B]
Get:5 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-database amd64 6.0.3 [3,540 B]
Get:6 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-tools amd64 6.0.3 [2,892 B]
Get:7 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org amd64 6.0.3 [2,932 B]
Fetched 49.2 MB in 7s (6,612 kB/s)
Selecting previously unselected package mongodb-mongosh.
(Reading database ... 489953 files and directories currently installed.)
Preparing to unpack .../0-mongodb-mongosh_1.6.1_amd64.deb ...
Unpacking mongodb-mongosh (1.6.1) ...
Selecting previously unselected package mongodb-org-shell.
Preparing to unpack .../1-mongodb-org-shell_6.0.3_amd64.deb ...
Unpacking mongodb-org-shell (6.0.3) ...
Selecting previously unselected package mongodb-org-server.
Preparing to unpack .../2-mongodb-org-server_6.0.3_amd64.deb ...
Unpacking mongodb-org-server (6.0.3) ...
Selecting previously unselected package mongodb-org-mongos.
Preparing to unpack .../3-mongodb-org-mongos_6.0.3_amd64.deb ...
Unpacking mongodb-org-mongos (6.0.3) ...
Selecting previously unselected package mongodb-org-database-tools-extra.
Preparing to unpack .../4-mongodb-org-database-tools-extra_6.0.3_amd64.deb ...
Unpacking mongodb-org-database-tools-extra (6.0.3) ...
Selecting previously unselected package mongodb-org-database.
Preparing to unpack .../5-mongodb-org-database_6.0.3_amd64.deb ...
Unpacking mongodb-org-database (6.0.3) ...
Selecting previously unselected package mongodb-org-tools.
Preparing to unpack .../6-mongodb-org-tools_6.0.3_amd64.deb ...
Unpacking mongodb-org-tools (6.0.3) ...
Selecting previously unselected package mongodb-org.
Preparing to unpack .../7-mongodb-org_6.0.3_amd64.deb ...
Unpacking mongodb-org (6.0.3) ...
Setting up mongodb-mongosh (1.6.1) ...
Setting up mongodb-org-server (6.0.3) ...
System has not been booted with systemd as init system (PID 1). Can't operate.
Failed to connect to bus: Host is down
Setting up mongodb-org-shell (6.0.3) ...
Setting up mongodb-org-mongos (6.0.3) ...
Setting up mongodb-org-database-tools-extra (6.0.3) ...
Setting up mongodb-org-database (6.0.3) ...
Setting up mongodb-org-tools (6.0.3) ...
Setting up mongodb-org (6.0.3) ...
Processing triggers for man-db (2.9.4-2) ...
```

</details>

:::warning

After endlessly trying to install MongoDB, I ran `sudo apt-get install gnupg` and found that `mongodb-database-tools` was also installed:

```shell {6-7}
~ $ sudo apt-get install gnupg
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
gnupg is already the newest version (2.2.27-2+deb11u2).
The following package was automatically installed and is no longer required:
  mongodb-database-tools
Use 'sudo apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
```

:::

So if you're stuck like me, you should:

```shell
apt list | grep mongodb-database-tools  # check
sudo apt-get install mongodb-database-tools # install
```

## Configure after Install

### Check Unix `ulimit` settings

```shell
ulimit -a   # show all limits
```

> #### Recommended `ulimit` Settings
>
> - `-f` (file size): `unlimited`
> - `-t` (cpu time): `unlimited`
> - `-v` (virtual memory): `unlimited`
> - `-l` (locked-in-memory size): `unlimited`
> - `-n` (open files): `64000`
> - `-m` (memory size): `unlimited`
> - `-u` (processes/threads): `64000`
>
> Source: <a href='https://www.mongodb.com/docs/manual/reference/ulimit/' class='external'>UNIX ulimit Settings</a>

:::note official warning

Since MongoDB 4.4, if `-n` is less than `64000`, a startup error is generated.

:::

### Change `ulimit`

In my case I need change:

```shell
-n  (nofile)   1024   ->  64000
-l  (memlock)  64     ->  unlimited
-u  (nproc)    63371  ->  64000
```

Add to the end of the 3 files below as _root_:

1.  ```shell title=" /etc/security/limits.conf"
    *               soft    nofile          64000
    *               hard    nofile          64000
    *               soft    memlock         unlimited
    *               hard    memlock         unlimited
    *               soft    nproc           64000
    *               hard    nproc           64000
    ```

2.  ```shell title="/etc/pam.d/common-session"
    session required        pam_limits.so
    ```

3.  ```shell title="/etc/pam.d/common-session-noninteractive"
    session required        pam_limits.so
    ```

Re-login (no reboot required) and check:

```bash
$ ulimit -n -Hn -Sn
open files                          (-n) 64000
open files                          (-n) 64000  # Hard limit
open files                          (-n) 64000  # Soft limit
```

And two other limits in a similar way...

Source: <a href='https://superuser.com/a/1200818' class='external'>superuser.com: 1200818</a>

### Default Directories

Automatically created dirs:

- `/var/lib/mongodb` - data files
- `/var/log/mongodb` - log files

:::note official caution

If you installed MongoDB by downloading the tarballs, you must create these directories manually.

:::

<details>
  <summary>Possible Permission Issues</summary>

These commands may help you:

```shell
sudo mkdir -p /data/db
sudo chmod -R go+w /data/db

# or

sudo chown -R $USER /data/db
```

```shell
sudo chown -R mongod:mongod /var/lib/mongodb
sudo chown -R mongod:mongod /var/log/mongodb
sudo chown mongod:mongod /etc/mongod.conf

sudo chown mongod:mongod /var/run/mongod.pid
```

```shell
mongod --repair
```

</details>

## Run MongoDB

<details>
  <summary>Start MongoDB Directly</summary>

Source: <a href='https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-mongodb' class='external'>learn.microsoft.com: Install Mongodb</a>

If you cannot start MongoDB as a service, you can try starting it directly:

```shell
mongod --version                # Get the version number
mkdir -p ~/data/db              # Make a directory to store data
sudo mongod --dbpath ~/data/db  # Run a Mongo instance
ps -e | grep 'mongod'           # Check to see that your MongoDB instance is running
```

</details>

### Start MongoDB as a Service

First, check which init system your platform uses:

```shell
ps --no-headers -o comm 1
```

Start MongoDB depend on your output:

<Tabs>

  <TabItem value="init" label="init" default>

Download the `init.d` script:

:::warning

This variant **Doesn't work!** (at the moment: 01/12/2022):

```shell
curl https://raw.githubusercontent.com/mongodb/mongo/master/debian/init.d | sudo tee /etc/init.d/mongod >/dev/null
```

:::

use this:

```shell
curl https://raw.githubusercontent.com/mongodb/mongo/cad54eb5ebdff24ecec53b56788cd151d8d64272/debian/init.d | sudo tee /etc/init.d/mongod >/dev/null
```

Source: <a href='https://stackoverflow.com/a/74190626' class='external'>stackoverflow.com: 74190626</a>

Assign that script executable permissions:

```shell
sudo chmod +x /etc/init.d/mongod
```

Now you can use MongoDB service commands:

```shell
sudo service mongod start   # start
sudo service mongod status  # verify
sudo service mongod stop    # stop
sudo service mongod restart # restart
```

<details>
<summary>Logs & Settings</summary>

You can view the logs, find the lines with errors and try to fix them:

```shell
cat /var/log/mongodb/mongod.log
```

Useful information about MongoDB settings can be found here:

```shell
/etc/mongod.conf
/lib/systemd/system/mongod.service
```

</details>

  </TabItem>
  <TabItem value="systemd" label="systemd">

Read more: <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/#procedure' class='external'>mongodb.com: Procedure</a>

  </TabItem>
</Tabs>

## Begin Using MongoDB

:::note official note

The legacy `mongo` shell is no longer included in server packages as of MongoDB 6.0. `mongo` has been superseded by the [new MongoDB Shell ( `mongosh` )](https://www.mongodb.com/docs/mongodb-shell/)

:::

Start mongoDB shell:

```shell
mongosh
```

<details>
<summary>Quick mongosh examples</summary>

Initial `mongosh` command line:

```shell
test>
```

Create database "first":

```shell
test> use first
```

Insert one item:

```shell
first> db.pizza.insertOne({type: "Cheese"})
```

Insert many items:

```shell
first> db.pizza.insertMany([{type: "Veggie"},{type: "Olive"}])
```

Show all items:

```shell
first> db.pizza.find()
```

Remove all items:

```shell
db.pizza.deleteMany({})
```

</details>

### `localhost` issue in `node`

:::caution

If you are using latest `nodejs` (v17.x and above) , use `127.0.0.1` instead of `localhost`:

```shell title="index.js"
const mongoose = require("mongoose");   # MongoDB library
...
//This will error
const DB_URL = "mongodb://localhost/first";  # Error
const DB_URL = "mongodb://127.0.0.1/first";  # Work!
...
```

:::

## Uninstall MongoDB

```shell
ls -l /etc/apt/sources.list.d/
sudo rm /etc/apt/sources.list.d/mongodb-org-6.0.list

sudo service mongod stop
sudo apt-get purge mongodb-org*

sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb
```

:::warning

These commands will delete your databases!!!

```shell
sudo rm -rf /data/db/*
sudo rm -rf /tmp/mongod*
```

:::

## Source

- <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian' class='external'>mongodb.com: Install Mongodb Community Edition On Debian</a>
