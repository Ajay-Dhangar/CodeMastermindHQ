---
id: trans
title: Trans
date: 2022-08-31 18:50:30
---

Command-line translator using Google Translate, Bing Translator, Yandex.Translate and other translation engines.

<div style={{width: 'fit-content', margin: 'auto'}}>

| All Engines |
| :---------: |
|  apertium   |
|   aspell    |
|   \* auto   |
|    bing     |
|   google    |
|  hunspell   |
|    spell    |
|   yandex    |

</div>

\* - default

## Install Translate-Shell (via git)

```bash
trans -V       # check version

cd ~
git clone --depth 1 https://github.com/soimort/translate-shell      # get only the last commit of the master branch

cd translate-shell/

ls -lsah

make
sudo make install

trans -V       # check version

trans -b ru:en мама     # translating example

rm -rf translate-shell/   # remove installer
```
