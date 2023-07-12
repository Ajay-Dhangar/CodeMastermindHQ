---
id: gitignore-dont-hide-file
title: .gitignore don't Hide File
date: 2021-03-12 10:43:54
---

The `.gitignore` file does not affect files that are already checked in to the repository. You will have to do two things:

- delete sidebars.auto.js
- add it to .gitignore

Once both changes are committed, it won't show up in Git any more, even if the file exists on the file system.

From: <a href='https://stackoverflow.com/questions/31126210/gitignore-does-not-hide-itself-and-doesnot-hide-a-file' class='external'>stackoverflow.com</a>
