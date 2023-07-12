---
title: Install MongoDB Windows
author: Ajay Dhangar
tags: [database, mongodb, mongosh, windows]
date: 2022-05-01 17:35:28
description: Installation MongoDB and mongosh
draft: false
---

1. Download the _.msi_ installer: <a href='https://www.mongodb.com/try/download/community?tck=docs_server' class='external'>mongodb.com: Community Edition</a>
<!--truncate-->
2. Start the wizard by double-clicking the _.msi_ file
3. In wizard:  
   a. Change location to _F:\Program Files\MongoDB\Server\5.0\bin_  
   b. Uncheck the _Install MongoDB as a Service_  
   c. Uncheck the _Install MongoDB Compass_  
   d. Click Install

4. Add _C:\Program Files\MongoDB\Server\5.0\bin_ to your <a href="/docs/workplace/windows/set-environment-variable-windows">PATH environment variable</a>

## Install mongosh

1. Download and run the MongoDB Shell _.msi_ installer: <a href='https://www.mongodb.com/try/download/shell?jmp=docs' class='external'>mongodb.com: Shell</a>
2. Accept location: _F:\Users\parsh\AppData\Local\Programs\mongosh_
3. Add the mongosh binary (F:\Users\parsh\AppData\Local\Programs\mongosh\) to your <a href="/docs/workplace/windows/set-environment-variable-windows">PATH environment variable</a>

## Run MongoDB

1. Run _cmd_ as admin and create the data directory:

   ```cmd title="cmd"
   c:
   md "\data\db"
   ```

2. Start MongoDB database:

   ```cmd title="cmd"
   "F:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="c:\data\db"

   # or simply

   mongod --dbpath="c:\data\db"
   ```

3. Connect to MongoDB:

   ```cmd title="cmd"
   mongosh
   ```

   After running this command, you should see information about your MongoDB shell, the local server connection, and some additional information printed to the terminal.

## Source

- <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/' class='external'>mongodb.com: Install Mongodb On Windows</a>
