---
id: gorizont-dacha-bus
title: Gorizont Dacha Bus
date: 2022-06-01 14:31:41
---

## Initial State

**Маршрут №100 «Клиффорд – с/о Ростоши 2 »**

Клиффорд

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 7.28 | 8.00 | 8.35 | 9.11 | 9.43 | 10.18 | 10.54 | 11.26 | 12.01 | 13.05 | 13.37 | 14.12 | 14.49 | 15.21 | 15.56 | 17.06 | 17.38 | 18.13 | 18.49 | 19.21 | 19.56 |

Конечная (сады)

|8.18|8.50|9.25|10.01|10.33|11.08|11.44|12.16|12.51|13.55|14.27|15.02|15.39|16.11|16.46|17.56|18.28|19.03|19.39|20.11|20.46|

**Перевозчик – ООО «Оренбурггазтранс», телефон диспетчерской 73-20-50**

## Regex for VS Code

Just for table view.

Remove a redundant new lines after copy/past from Windows Chrome markdown extension (with scissors icon).

| Find                 | Replace |
| -------------------- | ------- |
| `\|\n\n([^\n]+)\n\n` | `\|$1`  |

## Given

### Source

- https://www.orenburg.ru/background/raspisanie_sadovodcheskikh_marshrutov/marshrut_100/
- https://www.orenburg.ru/background/raspisanie_sadovodcheskikh_marshrutov/marshrut_110/

<details>

<summary>Source Content</summary>

<p><b><font size="4" color="#fff100" style={{backgroundColor: 'rgb(0, 84, 165)'}}>Маршрут №110 &laquo;Клиффорд &ndash; с/о Ростоши 3&raquo;                                                   </font></b></p>
 
<p>Рабочие дни</p>
 
<h5><font size="2">      Клиффорд</font></h5>
 
<div><font size="2"> 
    <br />
   </font></div>

<table>
  <tbody>
    <tr>
      <td style={{borderImage: 'initial'}}>
        <p>8.18</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>8.50</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>9.25</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>10.01</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>10.33</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>11.08</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>11.44</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>12.16</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>12.51</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>13.55</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>14.27</p>
      </td>
    </tr>
    <tr>
      <td style={{borderImage: 'initial'}}>
        <p>15.02</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>15.39</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>16.11</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>16.46</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>17.56</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>18.28</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>19.03</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>19.39</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>20.11</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p>20.46</p>
      </td>
      <td style={{borderImage: 'initial'}}>
        <p></p>
      </td>
    </tr>
  </tbody>
</table>

</details>

## Result

### Initial Shell Script

```shell title="gorizont.sh"
#! /bin/bash

#cat rasp.txt | grep "<p>[0-9].*</p>" | sed -r "s/.*<p>(.*)<\/p>/\1/"

curl -s https://www.orenburg.ru/background/raspisanie_sadovodcheskikh_marshrutov/marshrut_100/ | sed "/Маршрут/d" | grep "\(Клиффорд\|Конечная\|Рабочие\|Выходные\|<p>[0-9].*\)" | sed -r -e "s/.*>([^<]+).*/\1/" | sed 's/^[^[:alnum:]]\+//g' > rasp100.txt

curl -s https://www.orenburg.ru/background/raspisanie_sadovodcheskikh_marshrutov/marshrut_110/ | sed "/Маршрут/d" | grep "\(Клиффорд\|Конечная\|Рабочие\|Выходные\|<p>[0-9].*\)" | sed -r -e "s/.*>([^<]+).*/\1/" | sed 's/^[^[:alnum:]]\+//g' > rasp110.txt

#curl -s https://www.orenburg.ru/background/raspisanie_sadovodcheskikh_marshrutov/marshrut_100/ | grep "\(<p>К\|<p>[0-9].*\)" | sed -r "s/.*<p>(.*)<\/p>/\1/" > rasp100.txt
#curl -s https://www.orenburg.ru/background/raspisanie_sadovodcheskikh_marshrutov/marshrut_110/ | grep "\(<p>К\|<p>[0-9].*\)" | sed -r "s/.*<p>(.*)<\/p>/\1/" > rasp110.txt

```

### Remove all spaces

see [sed remove all but alnum](../utils/unix/sed-remove-all-but-alnum) (../shells/commands/sed/sed-remove-all-but-alnum)

### Output Table Design

import card from '@site/src/css/markdown.module.css'

<div className={card.wrap}>

Клиффорд

<div className={card.maxwidth}>

| 100  |
| :--: |
|  -   |
| 8.18 |

</div>
<div className={card.maxwidth}>

| 110 раб | 110 вых |
| :-----: | :-----: |
|  7.45   |  7.45   |

</div>
</div>

<div className={card.wrap}>

Сады

<div className={card.maxwidth}>

| 100  |
| :--: |
|  -   |
| 8.18 |

</div>
<div className={card.maxwidth}>

| 110 раб | 110 вых |
| :-----: | :-----: |
|  7.45   |  7.45   |

</div>
</div>

## TODO

shell script:

- join two files
  - remove dot
  - sort
- edit
- output

jsx:

- run shell script when page enter
- gif with condition

other work:

- create page 297 & 296 buses
