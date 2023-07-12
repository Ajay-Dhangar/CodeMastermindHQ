---
id: sed-remove-all-but-alnum
title: Sed Remove All But Letters and Digits
date: 2022-06-02 11:08:28
---

`[^[:alnum:]]` property will find all non-alphanumerical characters.

## Given

'file' with this content:

```shell
MytextOnly !@#!text@@32423#@$text#%$#text%#t23432ext$32342%^-_+-=-_++_;:"'][}}{|\/
```

## Solved Initial

```shell
sed 's/[^[:alnum:]]\+//g' file
MytextOnlytext32423texttextt23432ext32342
```

## Update

Check my updated answer for allowing forward slash. @Tiago: Quantifier + is used for efficiency so that less # of replacements happen.

```shell
sed 's~[^[:alnum:]/]\+~~g' file
MytextOnlytext32423texttextt23432ext32342/
```

## Source

- <a href='https://stackoverflow.com/a/28617593' class='external'>stackoverflow.com: 28617593</a>
