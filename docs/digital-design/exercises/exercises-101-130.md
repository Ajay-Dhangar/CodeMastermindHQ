---
id: exercises-101-130
title: Exercises 1.1-1.30
date: 2021-02-16 13:16:51
description: Harrises Exercises 1.1-1.30 and Solutions
---

[All Exercises](all-exercises)

View all answers: [Harris Solutions](../../pdf/harris-solutions.pdf)

<!-- And my Solutions below. Solutions marked with ![alt text][logo] symbol I must explore! -->

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

## Exercise 1.1 Three level of abstraction

 a) Biological abstraction at the cell level:  

<textarea>
Your answer:
</textarea>

Solution:

Biologists study cells at many levels. The cells are built from organelles such as the mitochondria, ribosomes, and chloroplasts. Organelles are built of macromolecules such as proteins, lipids, nucleic acids, and carbohydrates. These biochemical macromolecules are built simpler molecules such as carbon chains and amino acids. When studying at one of these levels of abstraction, biologists are usually interested in the levels above and below: what the structures at that level are used to build, and how the structures themselves are built.

b) Abstractions of chemistry about material:

<textarea>
Your answer:
</textarea>

Solution:

The fundamental building blocks of chemistry are electrons, protons, and neutrons (physicists are interested in how the protons and neutrons are built). These blocks combine to form atoms. Atoms combine to form molecules. For example, when chemists study molecules, they can abstract away the lower levels of detail so that they can describe the general properties of a molecule such as benzene without having to calculate the motion of the individual electrons in the molecule.

## Exercise 1.2 Using Hierarchy, Modularity, Regularity

a) By automobile designers

<textarea>
Your answer:
</textarea>

Solution:

Automobile designers use hierarchy to construct a car from major assemblies such as the engine, body, and suspension. The assemblies are constructed from subassemblies; for example, the engine contains cylinders, fuel injectors, the ignition system, and the drive shaft. Modularity allows components to be swapped without redesigning the rest of the car; for example, the seats can be cloth, leather, or leather with a built in heater depending on the model of the vehicle, so long as they all mount to the body in the same place. Regularity involves the use of interchangeable parts and the sharing of parts between different vehicles; a 65R14 tire can be used on many different cars.

b) By businessman in daily deals

<textarea>
Your answer:
</textarea>

Solution:

Businesses use hierarchy in their organization chart. An employee reports to a manager, who reports to a general manager who reports to a vice president who reports to the president. Modularity includes well-defined interfaces between divisions. The salesperson who spills a coke in his laptop calls a single number for technical support and does not need to know the detailed organization of the information systems department. Regularity includes the use of standard procedures. Accountants follow a well-defined set of rules to calculate profit and loss so that the finances of each division can be combined to determine the finances of the company and so that the finances of the company can be reported to investors who can make a straightforward comparison with other companies.

## Exercise 1.3 Ben Bitdiddle is building a house. Save him money and time with three y's principals

<textarea>
Your answer:
</textarea>

Solution:

Hierarchy:

- Design: how many bedrooms, bathrooms, kitchens and other rooms he would like.
- Jump level up: house layout and dimensions of the house.
- Top level hierarchy - material he would like to use, what kind of roof etc.
- Jump level down: layout of each room with doors, windows etc.

Regularity:

- framing of the house
- scale framing to each room
- choose doors and windows (sizes, material)

Modularity:

- the dimensions of the windows are the same

And he could save by buying some items (like windows) in bulk.

## Exercise 1.4 Voltage: in 0-5V range. Measure accuracy: ±50mV. How many bits it convey?

<textarea>
Your answer:
</textarea>

Solution:

±50mV is 100mV intervals. 50 intervals. log<sub>2</sub>50=5.65 bits

:::caution
5.65 bits - is the amount of information. Don't be confused with how many bits of a binary number is necessary to include this value.
:::

## Exercise 1.5 Old clock without a minute hand

a) You can read the hour each 15 minutes. How many bits you can convey?

b) If include am and pm, how many bits added?

<textarea>
Your answer:
</textarea>

Solution:

a) 60min/15min=4 12hours*4=48 log<sub>2</sub>40=5.58 bits

b) 1 bit

:::tip Bit
Two discrete values - are 1 bit. See [Bit](../binary-numbers/bit)
:::

## Exercise 1.6 4000 years ago Babylonian developed sexagesimal numbers (base 60)

a) How many bits they conveyed with one digit?

b) 4000<sub>10</sub> in sexagesimal?

<textarea>
Your answer:
</textarea>

Solution:

a) log<sub>2</sub>60 = ~6

b) 1 6 40<sub>60</sub>

## Exercise 1.7 How many different numbers can be represent with 16 bits?

<textarea>
Your answer:
</textarea>

Solution:

2<sup>16</sup> = 65536

## Exercise 1.8 What is the largest unsigned 32-bit binary number?

<textarea>
Your answer:
</textarea>

Solution:

22<sup>32</sup>-1 = 4 294 967 295

## Exercise 1.9 What is the largest 16-bit binary number that can be represented with

a) unsigned numbers?

b) two's complement numbers?

c) sign/magnitude numbers?

<textarea>
Your answer: a)  b)  c)
</textarea>

Solution:

a) 2<sup>16</sup>-1 = 65535

b) 2<sup>15</sup>-1 = 32767

c) 2<sup>15</sup>-1 = 32767

## Exercise 1.10 What is the largest 32-bit binary number that can be represented with

a) unsigned numbers?

b) two's complement numbers?

c) sign/magnitude numbers?

<textarea>
Your answer: a)  b)  c)
</textarea>

Solution:

a) 2<sup>32</sup>-1 = 4 294 967 295

b) 2<sup>31</sup>-1 = 2 147 483 647

c) 2<sup>31</sup>-1 = 2 147 483 647

## Exercise 1.11 What is the smallest (most negative) 16-bit binary number that can be represented with

a) unsigned numbers?

b) two's complement numbers?

c) sign/magnitude numbers?

<textarea>
Your answer: a)  b)  c)
</textarea>

Solution:

a) 0

b) -2<sup>15</sup> = -32768

c) -(2<sup>15</sup>-1) = -32767

## Exercise 1.12 What is the smallest (most negative) 32-bit binary number that can represented with

a) unsigned numbers?

b) two's complement numbers?

c) sign/magnitude numbers?

<textarea>
Your answer: a)  b)  c)
</textarea>

Solution:

a) 0

b) -2<sup>31</sup> = -2 147 483 648

c) -(2<sup>31</sup>-1) = -2 147 483 647

## Exercise 1.13 Convert unsigned numbers to decimal. Show your work

a) 1010<sub>2</sub>

b) 110110<sub>2</sub>

c) 11110000<sub>2</sub>

d) 0001100010100111<sub>2</sub>

<textarea>
Your answer:
a) 1010=
b) 110110=
c) 11110000=
d) 0001100010100111=
</textarea>

Solution:

a) 1010<sub>2</sub> = 1x2<sup>3</sup> + 0x2<sup>2</sup> + 1x2<sup>1</sup> + 0x2<sup>0</sup> = 8 + 0 + 2 + 0 = 10<sub>10</sub>

b) 110110<sub>2</sub> = 1x2<sup>5</sup> + 1x2<sup>4</sup> + 0x2<sup>3</sup> + 1x2<sup>2</sup> + 1x2<sup>1</sup> + 0x2<sup>0</sup> = 32 + 16 + 0 + 4 + 2 + 0 = 54<sub>10</sub>

c) 11110000<sub>2</sub> = 1x2<sup>7</sup> + 1x2<sup>6</sup> + 1x2<sup>5</sup> + 1x2<sup>4</sup> + 0x2<sup>3</sup> + 0x2<sup>2</sup> + 0x2<sup>1</sup> + 0x2<sup>0</sup> = 128 + 64 + 32 + 16 + 0 + 0 + 0 + 0= 240<sub>10</sub>

d) 0001100010100111<sub>2</sub> = 0 + 0 + 0 + 1x2<sup>12</sup> + 1x2<sup>11</sup> + 0x2<sup>10</sup> + 0x2<sup>9</sup> + 0x2<sup>8</sup> + 1x2<sup>7</sup> + 0x2<sup>6</sup> + 1x2<sup>5</sup> 0x2<sup>4</sup> + 0x2<sup>3</sup> + 1x2<sup>2</sup> + 1x2<sup>1</sup> + 1x2<sup>0</sup> = 4096 + 2048 + 128 + 32 + 4 + 2 + 1 = 6311<sub>10</sub>

## Exercise 1.14 Convert the following unsigned binary numbers to decimal. Show your work

a) 1110<sub>2</sub>

b) 100100<sub>2</sub>

c) 11010111<sub>2</sub>

d) 011101010100100<sub>2</sub>

<textarea>
Your answer:
a) 1110=
b) 100100=
c) 11010111=
d) 011101010100100=
</textarea>

Solution:

a) 1110<sub>2</sub> = 1x2<sup>3</sup> + 1x2<sup>2</sup> + 1x2<sup>1</sup> + 0x2<sup>0</sup> = 8 + 4 + 2 + 0 = 14<sub>10</sub>

b) 100100<sub>2</sub> = 1x2<sup>5</sup> + 0x2<sup>4</sup> + 0x2<sup>3</sup> + 1x2<sup>2</sup> + 0x2<sup>1</sup> + 0x2<sup>0</sup> = 32 + 0 + 0 + 4 + 0 + 0 = 36<sub>10</sub>

c) 11010111<sub>2</sub> =1x2<sup>7</sup> + 1x2<sup>6</sup> + 0x2<sup>5</sup> + 1x2<sup>4</sup> + 0x2<sup>3</sup> + 1x2<sup>2</sup> + 1x2<sup>1</sup> + 1x2<sup>0</sup> = 128 + 64 + 0 + 16 + 0 + 4 + 2 + 1 = 215<sub>10</sub>

d) 011101010100100<sub>2</sub> = 1x2<sup>13</sup> + 1x2<sup>12</sup> + 1x2<sup>11</sup> 0x2<sup>10</sup> 1x2<sup>9</sup> + 0x2<sup>8</sup> + 1x2<sup>7</sup> + 0x2<sup>6</sup> + 1x2<sup>5</sup> + 0x2<sup>4</sup> + 0x2<sup>3</sup> + 1x2<sup>2</sup> + 0x2<sup>1</sup> + 0x2<sup>1</sup> = 8192 + 4096 + 2048 + 0 + 512 + 0 + 128 + 32 + 4 = 15012<sub>10</sub>

## Exercise 1.15 Repeat Exercise 1.13, but convert in hexadecimal

a) 1010<sub>2</sub>

b) 110110<sub>2</sub>

c) 11110000<sub>2</sub>

d) 0001100010100111<sub>2</sub>

<textarea>
Your answer:
a) 1010=
b) 110110=
c) 11110000=
d) 0001100010100111=
</textarea>

Solution:

a) 1010<sub>2</sub> = A<sub>16</sub>

b) 11 0110<sub>2</sub> = 36<sub>16</sub>

c) 1111 0000<sub>2</sub> = F0<sub>16</sub>

d) 0001 1000 1010 0111<sub>2</sub> = 18A7<sub>16</sub>

:::tip Convert Binary to Hexadecimal
Break a binary number into groups of 4 digits and convert each group separately. After that, just concatenate all the resulting hexadecimal digits.
:::

## Exercise 1.16 Repeat exercise 1.14, but convert to hexadecimal

a) 1110<sub>2</sub>

b) 100100<sub>2</sub>

c) 11010111<sub>2</sub>

d) 011101010100100<sub>2</sub>

<textarea>
Your answer:
a) 1110=
b) 100100=
c) 11010111=
d) 011101010100100=
</textarea>

Solution:

a) 1110<sub>2</sub> = E<sub>16</sub>

b) 10 0100<sub>2</sub> = 24<sub>16</sub>

c) 1101 0111<sub>2</sub> = D7<sub>16</sub>

d) 011 1010 1010 0100<sub>2</sub> = 3AA4<sub>16</sub>

## Exercise 1.17 Convert the following hexadecimal numbers to decimal. Show your work

a) A5<sub>16</sub>

b) 3B<sub>16</sub>

c) FFFF<sub>16</sub>

d) D0000000<sub>16</sub>

<textarea>
Your answer:
a) A5=
b) 3B=
c) FFFF=
d) D0000000=
</textarea>

Solution:

a) A5<sub>16</sub> = 10x16<sup>1</sup> + 5x16<sup>0</sup> = 160 + 5  = 165<sub>10</sub>

b) 3B<sub>16</sub> = 3x16<sup>1</sup> + 11x16<sup>0</sup> = 48 + 11 = 59<sub>10</sub>

c) FFFF<sub>16</sub> = 15x16<sup>3</sup> + 15x16<sup>2</sup> + 15x16<sup>1</sup> + 15x16<sup>0</sup> = 61440 + 3840 + 240 + 15 = 65535<sub>10</sub> (2<sup>16</sup>-1)

d) D000 0000<sub>16</sub> = 13x16<sup>7</sup> = 3 489 660 928<sub>10</sub>

## Exercise 1.18 Convert the following hexadecimal numbers to decimal. Show your work

a) 4E<sub>16</sub>

b) 7C<sub>16</sub>

c) ED3A<sub>16</sub>

d) 403FB001<sub>16</sub>

<textarea>
Your answer:
a) 4E=
b) 7C=
c) ED3A=
d) 403FB001=
</textarea>

Solution:

a) 4E<sub>16</sub> = 4x16<sup>1</sup> + 14x16<sup>0</sup> = 64 + 14 = 78<sub>10</sub>

b) 7C<sub>16</sub> = 7x16<sup>1</sup> + 12x16<sup>0</sup> = 112 + 12 = 124<sub>10</sub>

c) ED3A<sub>16</sub> = 14x16<sup>3</sup> + 13x16<sup>2</sup> + 3x16<sup>1</sup> + 10x16<sup>0</sup> = 57344 + 3328 + 48 + 10 = 60730<sub>10</sub>

d) 403FB001<sub>16</sub> = 4x16<sup>7</sup> + 0x16<sup>6</sup> + 3x16<sup>5</sup> + 15x16<sup>4</sup> + 11x16<sup>3</sup> + 0x16<sup>2</sup> + 0x16<sup>1</sup> + 1x16<sup>0</sup> =
1 073 741 824 + 0 + 3 145 728 + 983 040 + 45056 + 0 + 0 + 1 = 1 077 915 649<sub>10</sub>

## Exercise 1.19 Repeat exercise 1.17, but convert to unsigned binary

a) A5<sub>16</sub>

b) 3B<sub>16</sub>

c) FFFF<sub>16</sub>

d) D0000000<sub>16</sub>

<textarea>
Your answer:
a) A5=
b) 3B=
c) FFFF=
d) D0000000=
</textarea>

Solution:

a) A5<sub>16</sub> = 1010 0101<sub>2</sub>

b) 3B<sub>16</sub> = 0011 1011<sub>2</sub>

c) FFFF<sub>16</sub> = 1111 1111 1111 1111<sub>2</sub>

d) D0000000<sub>16</sub> = 1101 0000 0000 0000 0000 0000 0000 0000<sub>2</sub>

## Exercise 1.20 Repeat exercise 1.18, but convert to unsigned binary

a) 4E<sub>16</sub>

b) 7C<sub>16</sub>

c) ED3A<sub>16</sub>

d) 403FB001<sub>16</sub>

<textarea>
Your answer:
a) 4E=
b) 7C=
c) ED3A=
d) 403FB001=
</textarea>

Solution:

a) 4E<sub>16</sub> = 100 1110<sub>2</sub>

b) 7C<sub>16</sub> = 111 1100<sub>2</sub>

c) ED3A<sub>16</sub> = 1110 1101 0011 1010<sub>2</sub>

d) 403FB001<sub>16</sub> = 100 0000 0011 1111 1011 0000 0000 0001<sub>2</sub>

## Exercise 1.21 Convert the following two's complement binary numbers to decimal

a) 1010<sub>2</sub>

b) 110110<sub>2</sub>

c) 01110000<sub>2</sub>

d) 10011111<sub>2</sub>

<textarea>
Your answer:
a) 1010=
b) 110110=
c) 01110000=
d) 10011111=
</textarea>

Solution:

a) 1010<sub>2</sub> = -8 +2 = -6<sub>10</sub>

:::tip
This is another way to convert ***negative two's complement binary numbers*** to decimal numbers. The most significant bit is taken with a minus sign, and the remaining bits are taken with a plus sign:

```
1010 <- binary digits
8421 <- position weight
====
-1x8 + 0x4 + 1x2 + 0x0 
-8 + 2 = -6
```

:::

or you can find the magnitude (modulus) of a negative number by ***taking the two's complement***:

```sh title="Magnitude"
1010
0101 <- invert
+  1
====
0110 = 6 (thus, -6)
```

b) 110110<sub>2</sub> = -32+16+4+2=-10<sub>10</sub> or

```sh title="Magnitude"
110110
001001
+    1
======
001010 = 10 (thus, -10)
```

c) 01110000<sub>2</sub> = 64 + 32 + 16 = 112<sub>10</sub>

d) 10011111<sub>2</sub> = -128+16+8+4+2+1=-97<sub>10</sub> or

```sh title="Magnitude"
10011111
01100000
+      1
========
01100001 = 97 (thus, -97)
```

## Exercise 1.22 Convert the following two's complement binary numbers to decimal

a) 1110<sub>2</sub>

b) 100011<sub>2</sub>

c) 01001110<sub>2</sub>

d) 10110101<sub>2</sub>

<textarea>
Your answer:
a) 1110=
b) 100011=
c) 01001110=
d) 10110101=
</textarea>

Solution:

a) 1110<sub>2</sub> = -8+4+2 = -2<sub>10</sub> or

```sh title="Magnitude"
1110
0001
+  1
====
0010 = 2 (thus, -2)
```

b) 100011<sub>2</sub> = -32+2+1 = -29<sub>10</sub> or

```sh title="Magnitude"
100011
011100
+    1
======
011101 = 29 (thus, -29)
```

c) 01001110<sub>2</sub> = 64+8+4+2 = 78<sub>10</sub>

d) 10110101<sub>2</sub> = -128+32+16+4+1 = -75<sub>10</sub> or

```sh title="Magnitude"
10110101
01001010
+      1
========
01001011 = 75 (thus, -75)
```

## Exercise 1.23 Repeat exercise 1.21, assuming the binary numbers are in sigh/magnitude form rather than two's complement representation

a) 1010<sub>2</sub>

b) 110110<sub>2</sub>

c) 01110000<sub>2</sub>

d) 10011111<sub>2</sub>

<textarea>
Your answer:
a) 1010=
b) 110110=
c) 01110000=
d) 10011111=
</textarea>

Solution:

a) 1010<sub>2</sub> = -2<sub>10</sub>

b) 110110<sub>2</sub> = -22<sub>10</sub>

c) 01110000<sub>2</sub> = 112<sub>10</sub>

d) 10011111<sub>2</sub> = -31<sub>10</sub>

## Exercise 1.24 Repeat exercise 1.22, assuming the binary numbers are in sign/magnitude form rather than two's complement representation

a) 1110<sub>2</sub>

b) 100011<sub>2</sub>

c) 01001110<sub>2</sub>

d) 10110101<sub>2</sub>

<textarea>
Your answer:
a) 1110=
b) 100011=
c) 01001110=
d) 10110101=
</textarea>

Solution:

a) 1110<sub>2</sub> = -6<sub>10</sub>

b) 100011<sub>2</sub> = -3<sub>10</sub>

c) 01001110<sub>2</sub> = 78<sub>10</sub>

d) 10110101<sub>2</sub> = -53<sub>10</sub>

## Exercise 1.25 Convert the following decimal numbers to unsigned binary numbers

a) 42<sub>10</sub>

b) 63<sub>10</sub>

c) 229<sub>10</sub>

d) 845<sub>10</sub>

<textarea>
Your answer:
a) 42=
b) 63=
c) 229=
d) 845=
</textarea>

Solution:

a) 42<sub>10</sub> = 1x32(2<sup>5</sup>) + 0x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 0x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 101010<sub>2</sub>

b) 63<sub>10</sub> = 1x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 111111<sub>2</sub>

c) 229<sub>10</sub> = 1x128(2<sup>7</sup>) + 1x64(2<sup>6</sup>) + 1x32(2<sup>5</sup>) + 0x16(2<sup>4</sup>) + 0x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 0x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 1110 0101<sub>2</sub>

d) 845<sub>10</sub> = 1x512(2<sup>9</sup>) + 1x256(2<sup>8</sup>) + 0x128(2<sup>7</sup>) + 1x64(2<sup>6</sup>) + 0x32(2<sup>5</sup>) + 0x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 0x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 11 0100 1101<sub>2</sub>

## Exercise 1.26 Convert the following decimal numbers to unsigned binary numbers

a) 14<sub>10</sub>

b) 52<sub>10</sub>

c) 339<sub>10</sub>

d) 711<sub>10</sub>

<textarea>
Your answer:
a) 14=
b) 52=
c) 339=
d) 711=
</textarea>

Solution:

a) 14<sub>10</sub> = 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 1110<sub>2</sub>

b) 52<sub>10</sub> = 1x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 0x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 0x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 110100<sub>2</sub>

c) 339<sub>10</sub> = 1x256(2<sup>8</sup>) + 0x128(2<sup>7</sup>) + 1x64(2<sup>6</sup>) + 0x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 0x8(2<sup>3</sup>) + 0x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 1 0101 0011<sub>2</sub>

d) 711<sub>10</sub> = 1x512(2<sup>9</sup>) + 0x256(2<sup>8</sup>) + 1x128(2<sup>7</sup>) + 1x64(2<sup>6</sup>) + 0x32(2<sup>5</sup>) + 0x16(2<sup>4</sup>) + 0x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 10 1100 0111<sub>2</sub>

## Exercise 1.27 Repeat exercise 1.25, but convert to hexadecimal

a) 42<sub>10</sub>

b) 63<sub>10</sub>

c) 229<sub>10</sub>

d) 845<sub>10</sub>

<textarea>
Your answer:
a) 42=
b) 63=
c) 229=
d) 845=
</textarea>

Solution:

a) 42<sub>10</sub> = 2x16(16<sup>1</sup>) + 10x16(16<sup>0</sup>) = 2A<sub>16</sub>

b) 63<sub>10</sub> = 3x16(16<sup>1</sup>) + 15x16(16<sup>0</sup>) = 3F<sub>16</sub>

c) 229<sub>10</sub> = 14x16(16<sup>1</sup>) + 5x16(16<sup>0</sup>) = E5<sub>16</sub>

d) 845<sub>10</sub> = 3x16(16<sup>2</sup>) + 4x16(16<sup>1</sup>) + 13x16(16<sup>0</sup>) = 34D<sub>16</sub>

## Exercise 1.28 Repeat exercise 1.26, but convert to hexadecimal

a) 14<sub>10</sub>

b) 52<sub>10</sub>

c) 339<sub>10</sub>

d) 711<sub>10</sub>

<textarea>
Your answer:
a) 14=
b) 52=
c) 339=
d) 711=
</textarea>

Solution:

:::info
You can take the binary results from exercise 1.26 and convert them to hexadecimal more easily
:::

a) 14<sub>10</sub> = 14x16(16<sup>0</sup>) = E<sub>16</sub>

b) 52<sub>10</sub> = 3x16(16<sup>1</sup>) + 4x16(16<sup>0</sup>) = 34<sub>16</sub>

c) 339<sub>10</sub> = 1x16(16<sup>2</sup>) + 5x16(16<sup>1</sup>) + 3x16(16<sup>0</sup>) = 153<sub>16</sub>

d) 711<sub>10</sub> = 2x16(16<sup>2</sup>) + 12x16(16<sup>1</sup>) + 7x16(16<sup>0</sup>) = 2C7<sub>16</sub>

## Exercise 1.29 Convert the following decimal numbers to 8-bit two's complement numbers or indicate that the decimal number would overflow the range

a) 42<sub>10</sub>

b) −63<sub>10</sub>

c) 124<sub>10</sub>

d) −128<sub>10</sub>

e) 133<sub>10</sub>

<textarea>
Your answer:
a) 42=
b) −63=
c) 124=
d) −128=
e) 133=
</textarea>

Solution:

a) 42<sub>10</sub> = 1x32(2<sup>5</sup>) + 0x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 0x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 0010 1010<sub>2</sub>

b) −63<sub>10</sub> = 1x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 00111111 = 11000000 + 1 = 1100 0001<sub>2</sub>

c) 124<sub>10</sub> = 1x64(2<sup>6</sup>) + 1x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 0x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 0111 1100<sub>2</sub>

d) −128<sub>10</sub> = 1000 0000<sub>2</sub>

e) 133<sub>10</sub> = overflow

## Exercise 1.30 Convert the following decimal numbers to 8-bit two's complement numbers or indicate that the decimal number would overflow the range

a) 24<sub>10</sub>

b) −59<sub>10</sub>

c) 128<sub>10</sub>

d) −150<sub>10</sub>

e) 127<sub>10</sub>

<textarea>
Your answer:
a) 24=
b) −59=
c) 128=
d) −150=
e) 127=
</textarea>

Solution:

a) 24<sub>10</sub> = 0001 1000<sub>2</sub>

b) −59<sub>10</sub> = 0011 1011 = 1100 0101<sub>2</sub>

c) 128<sub>10</sub> = overflow

d) −150<sub>10</sub> = overflow

e) 127<sub>10</sub> = 0111 1111<sub>2</sub>

---

[All Exercises](all-exercises)
