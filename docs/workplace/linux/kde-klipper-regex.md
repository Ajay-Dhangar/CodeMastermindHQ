---
id: kde-klipper-regex
title: KDE Klipper Regex
date: 2021-03-13 22:35:53
---

Right click on Klipper icon > Open Configure > Actions > + Add Action

## Simple Translation

- Description (for edit):
- Command:
- Output Handling: `Add to Clipboard`
- Description (for Ctrl+Alt+R menu):

## Auto Detect Language Traslation

## Squeeze annoying spaces and newlines

## Remove Subtitle Timers

- Description: `remove subtitle timers`
- Command:

  ```bash
  echo %s | sed  's/^[0-9][^A-Za-z]*$//' | sed ':a;N;$!ba;s/\(.\)\n\n/\1 /g' | sed ':a;N;$!ba;s/\n//g'
  ```

  <details>
    <summary>Explanation: simple and GNU sed</summary>

  1. First sed removes all the digits before each text block.
  2. Then two GNU sed follow. They read the whole fragment in a loop (':a;N;$!ba). And the first one removes the double /n before each text block. And the second one is after text block.

  </details>

- Output Handling: `Add to Clipboard`
- Description: `Remove Subtitle Timers`

Copy the snippet with timer encoding from any .srt file:

<details>

<summary>.srt fragment</summary>

```
1
00:00:04,190 --> 00:00:08,120
Hi there, welcome ethereal and Solidity Development Chorus Preview.

2
00:00:08,150 --> 00:00:10,670
My name is Phillip and I love your instructor.

3
00:00:11,030 --> 00:00:16,220
Now let's take a look at what you are going to build in this course, and after that, I will be talking

4
00:00:16,220 --> 00:00:20,380
about the requirements and features you are going to work on.
```

</details>

and press Ctrl+Alt+R > Select Remove Subtitle. Then hover your mouse over Clipboard icon. You have to see:

<details>
<summary>Result</summary>
Hi there, welcome ethereal and Solidity Development Chorus Preview. My name is Phillip and I love your instructor. Now let's take a look at what you are going to build in this course, and after that, I will be talking about the requirements and features you are going to work on.</details>

## Clear & Translate

This command first clears the line, and then translates it:

- Description: `clear & translate`

- Command:

  ```bash
  translate en ru $(echo %s | sed  's/^[0-9][^A-Za-z]*$//' | sed ':a;N;$!ba;s/\(.\)\n\n/\1 /g' | sed ':a;N;$!ba;s/\n//g' )
  ```

:::tip

We have now redirected the above output to a variable.

:::

- Output Handling: `Add to Clipboard`

- Description: `Clear & Translate`

Read more: <a href='https://stackoverflow.com/questions/2559076/how-do-i-redirect-output-to-a-variable-in-shell' class='external'>stackoverflow.com: How Do I Redirect Output To A Variable In Shell</a>

## Sources

GNU `sed`:<a href='https://stackoverflow.com/questions/1251999/how-can-i-replace-a-newline-n-using-sed' class='external'>stackoverflow.com</a>

`Klipper` example: <a href='https://www.linux-magazine.com/Online/Blogs/Productivity-Sauce/Use-Klipper-Clipboard-Actions-for-Better-Productivity' class='external'>linux-magazine.com: Use Klipper Clipboard Actions For Better Productivity</a>

`Klipper` docs:<a href='https://docs.kde.org/stable5/en/plasma-workspace/klipper/actions-page.html' class='external'>docs.kde.org: Actions Page</a>
