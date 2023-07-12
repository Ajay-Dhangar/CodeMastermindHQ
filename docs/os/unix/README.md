---
id: README
title: Unix
date: 2022-05-26 12:27:05
---

import styles from '@site/src/css/markdown.module.css'

<div className={styles.colorRed}>

<dl>
  <dt>Start develop</dt>
  <dd>1969</dd>
  <dt>Developer</dt>
  <dd>Ken Thompson, Dennis Ritchie, and others (Bell Labs)</dd>
  <dt>Language</dt>
  <dd>Assembler -> C</dd>
</dl>

</div>

## 1970s - Minicomputers era

After AT&T Bell Labs had dropped out of the Multics project, the Unix operating system was conceived and implemented by Ken Thompson and Dennis Ritchie (both of AT&T Bell Laboratories) in 1969 and first released in 1970.

![Ken Thompson (sitting) and Dennis Ritchie working together at a PDP-11](Ken_Thompson_sitting_and_Dennis_Ritchie_at_PDP-11.jpg 'Ken Thompson (sitting) and Dennis Ritchie working together at a PDP-11')

Later they rewrote it in a new programming language, C, to make it portable. The availability and portability of Unix caused it to be widely adopted, copied and modified by academic institutions and businesses.

Unix philosophy:

- small is better
- make each program do one thing well
- everything is a file
- store data in human-readable text files

## 1980s - Open Source era

### GNU

In 1983, Richard Stallman started the <abbr title="GNU's Not Unix">GNU</abbr> project with the goal of creating a free UNIX-like operating system. By the early 1990s, there was almost enough available software to create a full operating system. However, the GNU kernel, called [Hurd](https://www.gnu.org/software/hurd/hurd.html), failed to attract enough development effort, leaving GNU incomplete.

### 32-bit CPU

In 1985, Intel introduced the 80386, a 32-bit microprocessor.

### Book about Unix kernel

In 1986, Maurice J. Bach, of AT&T Bell Labs, published The Design of the UNIX Operating System. This definitive description principally covered the System V Release 2 kernel, with some new features from Release 3 and BSD.

### Minix

In 1987, MINIX was created by Andrew S. Tanenbaum, a computer science professor, and released in 1987 as a minimal Unix-like operating system targeted at students and others who wanted to learn operating system principles.

## 1990s - Free OS era

### Linux kernel

In 1991, while studying computer science at University of Helsinki, Linus Torvalds began a project that later became the Linux kernel.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';


<DocCardList items={useCurrentSidebarCategory().items}/>
```
