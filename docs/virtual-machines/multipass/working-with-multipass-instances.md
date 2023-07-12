---
title: Working with Multipass Instances
---

source: https://discourse.ubuntu.com/t/working-with-multipass-instances/8422

This page is a quick primer on how to use Multipass.

Launching your first instance
-----------------------------

After having installed it, the `multipass` command line utility is your main entry point.

```powershell title="PowerShell"
$ multipass launch
…
Launched: keen-yak

```

The `launch` command creates a new Ubuntu instance using the default, at this point in time, image. It’s most likely going to be the latest cloud image of the newest Ubuntu LTS (Long Term Support) release. You can also choose another image, use [`find`](https://discourse.ubuntu.com/t/multipass-find-command/8351) to see what’s available.

It will use a catchy name for you, but you can use the `--name` option to give it a name of your own. As is usual, you can pass `--help` to see all the available options.

Executing commands
------------------

There are a couple ways you can access the instance: `exec` and `shell` (or `sh` for short), which will execute the given command directly, or open a shell inside the instance, respectively:

```
$ multipass exec keen-yak -- lsb_release --description
Description:    Ubuntu 18.04.1 LTS

```

```
$ multipass shell keen-yak
Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-36-generic x86_64)
…
multipass@keen-yak:~$

```

Note the `--` passed to the `exec` command - use it to separate the options passed to `multipass` from those passed to the command being executed.

From there you can work inside your instance as with any other Ubuntu installation. To install software, use `snap` or `apt`, both are available.

Getting more information
------------------------

To get some information about your instances, you can `list` them (`ls` for short):

```
$ multipass ls
Name                    State             IPv4             Release
keen-yak                RUNNING           10.140.94.253    Ubuntu 18.04 LTS
snapcraft-multipass     STOPPED           --               Ubuntu Snapcraft builder for Core 16

```

Or you can ask for an extended status report:

```
$ multipass info keen-yak
Name:           keen-yak
State:          RUNNING
IPv4:           10.140.94.253
Release:        Ubuntu 18.04.1 LTS
Image hash:     d53116c67a41 (Ubuntu 18.04 LTS)
Load:           0.00 0.12 0.18
Disk usage:     1.1G out of 4.7G
Memory usage:   71.6M out of 985.4M

```

Sharing data with the instance
------------------------------

The recommended way to share data between your host and the instance is the `mount` command:

```
$ multipass mount $HOME keen-yak
$ multipass info keen-yak
…
Mounts:         /home/ubuntu => /home/ubuntu

```

From this point on `/home/ubuntu` will be available inside the instance. Use `umount` to unmount it again and you can change the target by passing it after the instance name:

```
$ multipass umount keen-yak
$ multipass mount $HOME keen-yak:/some/path
$ multipass info keen-yak                
…
Mounts:         /home/michal => /some/path

```

You can also use `transfer` to just copy files around - prefix the path with `<name>:` if it’s inside an instance:

```
$ multipass transfer keen-yak:/etc/crontab keen-yak:/etc/fstab .
$ ls -l crontab fstab
-rw-r--r-- 1 ubuntu ubuntu 722 Oct 18 12:13 crontab
-rw-r--r-- 1 ubuntu ubuntu  82 Oct 18 12:13 fstab
$ multipass transfer crontab fstab keen-yak:
$ multipass exec keen-yak -- ls -l crontab fstab
-rw-rw-r-- 1 multipass multipass 722 Oct 18 12:14 crontab
-rw-rw-r-- 1 multipass multipass  82 Oct 18 12:14 fstab

```

Deleting the instance
---------------------

When you’re done with it, you can `delete` the instance:

```
$ multipass delete keen-yak

```

You will see in `list` that it’s actually just marked for deletion (or to put it in other words, put in the Recycle bin):

```
$ multipass list
Name                    State             IPv4             Release
keen-yak                DELETED           --               Not Available

```

You can then `recover` it, or `purge` to remove all deleted instances completely:

```
$ multipass recover keen-yak
$ multipass list
Name                    State             IPv4             Release
keen-yak                STOPPED           --               Ubuntu 18.04 LTS
$ multipass delete keen-yak
$ multipass purge
$ multipass ls
No instances found.

```

And more…
---------

See our [Command-line reference](https://discourse.ubuntu.com/t/multipass-documentation-outline/8294#command-line-reference) for a complete listing of the available commands and their options.


## Additional Resources

- [Local K3s Cluster Made Easy With Multipass](local-k3s-cluster-multipass)