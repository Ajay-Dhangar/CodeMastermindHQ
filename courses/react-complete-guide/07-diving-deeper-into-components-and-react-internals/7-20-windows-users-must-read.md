---
id: 7-20-windows-users-must-read
title: 7.20 Windows Users Must Read
date: 2021-04-06 16:16:48
---

**On Windows**, the `Aux.js`  filename is not allowed in ZIP archives. Hence when extracting the attached source code, you might get prompted to rename the `Aux.js`  file. You might also **face difficulties creating an Aux folder** and Aux.js file.

I really apologize for that inconvenience, Windows is really doing an amazing job here ;-).

Follow these fixes:

#### **1) Problems when unzipping the attached file:**

Simply **skip this step** (e.g. by pressing **"No"**) and **ignore** the upcoming error message.

In the extracted folder, you'll then find **all source files** EXCEPT for the `Aux.js`  file. In later course modules (where we work on the course project), the `Aux.js`  file can be found in an `Aux/`  subfolder inside `hoc/` .

Make sure to take the `Aux.js`  file **attached to this lecture** and place it inside the `hoc/`  or `hoc/Aux/`  folder (which ever of the two you got).

#### **2) Problems with the creation of an Aux folder and/ or file:**

Simply name both differently. For example, you may create an `Auxiliary`  folder and name the file inside of it `Auxiliary.js` . Make sure to then adjust your imports (`import Aux from './path/to/Auxiliary/Auxiliary'` ) and you should be fine.
