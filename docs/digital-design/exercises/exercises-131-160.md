---
id: exercises-131-160
title: Exercises 1.31-1.60
date: 2021-02-17 12:22:46
description: Harrises Exercises 1.30-1.60 and Solutions
---

[All Exercises](all-exercises)

## Exercise 1.31 Convert the following decimal numbers to 8-bit sign/magnitude numbers or indicate that the decimal number would overflow the range

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

b) −63<sub>10</sub> = 1x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 1011 1111<sub>2</sub>

c) 124<sub>10</sub> = 1x64(2<sup>6</sup>) + 1x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 0x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 0111 1100<sub>2</sub>

d) −128<sub>10</sub> = overflow

e) 133<sub>10</sub> = overflow

## Exercise 1.32 Convert the following decimal numbers to 8-bit sign/magnitude numbers or indicate that the decimal number would overflow the range

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

b) −59<sub>10</sub> = 1011 1011<sub>2</sub>

c) 128<sub>10</sub> = overflow

d) −150<sub>10</sub> = overflow

e) 127<sub>10</sub> = 0111 1111<sub>2</sub>

## Exercise 1.33 Convert the following 4-bit two's complement numbers to 8-bit two's complement numbers

a) 0101<sub>2</sub>

b) 1010<sub>2</sub>

<textarea>
Your answer:
a) 0101=
b) 1010=
</textarea>

Solution:

a) 0101<sub>2</sub> = 0000 0101<sub>2</sub>

b) 1010<sub>2</sub> = 1111 1010<sub>2</sub>

## Exercise 1.34 Convert the following 4-bit two's complement numbers to 8-bit two's complement numbers

a) 0111<sub>2</sub>

b) 1001<sub>2</sub>

<textarea>
Your answer:
a) 0111=
b) 1001=
</textarea>

Solution:

a) 0111<sub>2</sub> = 0000 0111<sub>2</sub>

b) 1001<sub>2</sub> = 1111 1001<sub>2</sub>

## Exercise 1.35 Repeat exercise 1.33 if the numbers are unsigned rather than two's complement

a) 0101<sub>2</sub>

b) 1010<sub>2</sub>

<textarea>
Your answer:
a) 0101=
b) 1010=
</textarea>

Solution:

a) 0101<sub>2</sub> = 0000 0101<sub>2</sub>

b) 1010<sub>2</sub> = 0000 1010<sub>2</sub>

## Exercise 1.36 Repeat exercise 1.34 if the numbers are unsigned rather than two's complement

a) 0111<sub>2</sub>

b) 1001<sub>2</sub>

<textarea>
Your answer:
a) 0111=
b) 1001=
</textarea>

Solution:

a) 0111<sub>2</sub> = 0000 0111<sub>2</sub>

b) 1001<sub>2</sub> = 0000 1001<sub>2</sub>

## Exercise 1.37 Base 8 is referred to as *octal*. Convert each of the numbers from exercise 1.25 to octal

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

a) 42<sub>10</sub> = 5x8(8<sup>1</sup>) + 2x1(8<sup>0</sup>) = 52<sub>8</sub>

b) 63<sub>10</sub> = 7x8(8<sup>1</sup>) + 7x1(8<sup>0</sup>) = 77<sub>8</sub>

c) 229<sub>10</sub> = 3x64(8<sup>2</sup>) + 4x8(8<sup>1</sup>) + 5x1(8<sup>0</sup>) = 345<sub>8</sub>

d) 845<sub>10</sub> = 1x512(8<sup>3</sup>) + 5x64(8<sup>2</sup>) + 1x8(8<sup>1</sup>) + 5x1(8<sup>0</sup>) = 1515<sub>8</sub>

## Exercise 1.38 Base 8 is referred to as *octal*. Convert each of the numbers from exercise 1.26 to octal

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

a) 0o16

b) 0o64

c) 0o523

d) 0o1307

## Exercise 1.39 Convert each of the following octal numbers to binary, hexadecimal, and decimal

a) 42<sub>8</sub>

b) 63<sub>8</sub>

c) 255<sub>8</sub>

d) 3047<sub>8</sub>

<textarea>
Your answer:
a) 42=
b) 63=
c) 255=
d) 3047=
</textarea>

Solution:

:::tip Convert Binary to Octal
Break a binary number into groups of 3 digits and convert each group separately. After that, just concatenate all the resulting octal digits.
:::

a) 42<sub>8</sub> = 100 010<sub>2</sub> = 0010 0010<sub>2</sub> = 22<sub>16</sub> = 2x16 + 2 = 34<sub>10</sub>

b) 63<sub>8</sub> = 110 011<sub>2</sub> = 0011 0011<sub>2</sub> = 33<sub>16</sub> = 3x16 + 3 = 51<sub>10</sub>

c) 255<sub>8</sub> = 010 101 101<sub>2</sub> = 1010 1101<sub>2</sub> = AD<sub>16</sub> = 10x16 + 13 = 173<sub>10</sub>

d) 3047<sub>8</sub> = 011 000 100 111<sub>2</sub> = 0110 0010 0111<sub>2</sub> = 627<sub>16</sub> = 6x256 + 2x16 + 7 = 1575<sub>10</sub>

## Exercise 1.40 Convert each of the following octal numbers to binary, hexadecimal, and decimal

a) 23<sub>8</sub>

b) 45<sub>8</sub>

c) 371<sub>8</sub>

d) 2560<sub>8</sub>

<textarea>
Your answer:
a) 23=
b) 45=
c) 371=
d) 2560=
</textarea>

Solution:

a) 0b10011; 0x13; 19

b) 0b100101; 0x25; 37

c) 0b11111001; 0xF9; 249

d) 0b10101110000; 0x570; 1392

## Exercise 1.41 How many 5-bit two's complement numbers are greater than 0? How many are less than 0? How would your answer differ for sign/magnitude numbers?

<textarea>
Your answer:
a)
b)
c)
</textarea>

Solution:

a) 15 greater than 0

b) 16 less than 0

c) 15 greater and 15 less for sign/magnitude

## Exercise 1.42 How many 7-bit two's complement numbers are greater than 0? How many are less than 0? How would your answers differ for sign/magnitude numbers?

<textarea>
Your answer:
a)
b)
c)
</textarea>

Solution:

a) (2<sup>6</sup>-1) are greater than 0 = 63

b) 2<sup>6</sup> are less than 0 = 64

c) For sign/magnitude numbers,
(2<sup>6</sup>-1)=63 are still greater than 0, but (2<sup>6</sup>-1)=63 are less than 0

## Exercise 1.43 How many bytes are in a 32-bit word? How many nibbles are in the word?

<textarea>
Your answer:
a)
b)
</textarea>

Solution:

a) 4

b) 8

## Exercise 1.44 How many bytes are in a 64-bit word?

<textarea>
Your answer:

</textarea>

Solution:

8

## Exercise 1.45 A particular DSL modem operates at 768 kbit/sec. How many bytes can it receive in 1 minute?

<textarea>
Your answer:
768kbit/sec =
</textarea>

Solution:

5760000

## Exercise 1.46 USB 3.0 can send data at 5Gbits/sec. How many bytes can it send in 1 minute?

<textarea>
Your answer:
5Gbits/sec =
</textarea>

Solution:

(5×10<sup>9</sup> bits/second)(60 seconds/minute)(1 byte/8 bits) = 3.75×10<sup>10</sup> bytes

## Exercise 1.47 Hard disk manufacturers use the term "megabyte" to mean 10<sup>6</sup> bytes and "gigabyte" to mean 10<sup>9</sup> bytes. How many real GBs of music you can store on a 50GB hard disk?

<textarea>
Your answer:
50GB =
</textarea>

Solution:

50x10<sup>9</sup>/2<sup>30</sup>=50 000 000 000 / 1 073 741 824 = 46.566 GBytes

:::tip
2<sup>10</sup> = 1024 ≈ 10<sup>3</sup> bytes (1 KBytes)

2<sup>20</sup> = 1 048 578 ≈ 10<sup>6</sup> bytes (1 MBytes)

2<sup>30</sup> = 1 073 741 824 ≈ 10<sup>9</sup> bytes (1 GBytes)
:::

## Exercise 1.48 Estimate the value of 2<sup>31</sup>

<textarea>
Your answer:
2^31=

</textarea>

Solution:

2<sup>31</sup>=2<sup>30</sup>x2<sup>1</sup>  
2<sup>30</sup> ≈ 1x10<sup>9</sup> ≈ 1 000 000 000  
So 2<sup>31</sup> ≈ 2 000 000 000

## Exercise 1.49 A memory on the Pentium II microprocessor is organized as a rectangular array of bits with 2<sup>8</sup> rows and 2<sup>9</sup> columns. Estimate how many bits it has without using a calculator?

<textarea>
Your answer:
2^8x2^9=

</textarea>

Solution:

2<sup>8</sup> x 2<sup>9</sup> = 2<sup>17</sup> = 2<sup>10</sup> + 2<sup>7</sup> = 1 Kbits x 128 = 128 Kbits

## Exercise 1.50 Draw a number line analogous to Figure 1.11 (see below) for 3-bit unsigned, two's complement, and sign/magnitude numbers

|[![](../binary-numbers/number-line-and-4-bit-binary-encodings.png)](../binary-numbers/number-line-and-4-bit-binary-encodings.png)|
|-|

<textarea>
Your answer:

</textarea>

Solution:

||-4|-3|-2|-1|0|1|2|3|4|5|6|7
-|-|-|-|-|-|-|-|-|-|-|-|-
|un|||||000|001|010|011|100|101|110|111
two|100|101|110|111|000|001|010|011
S/M||111|110|101|000 100|001|010|011

## Exercise 1.51 Draw a number line analogous to Figure 1.11 for 2-bit unsigned, two's complement, and sign/magnitude numbers

<textarea>
Your answer:

</textarea>

Solution:

||-2|-1|0|1|2|3|
-|:-:|:-:|:-:|:-:|:-:|:-:
|unsigned|||00|01|10|11
two's|10|11|00|01
Sign/M||11|00 10|01

## Exercise 1.52 Perform the following additions of unsigned binary numbers. Indicate whether or not the sum overflows a 4-bit result

a) 1001<sub>2</sub> + 0100<sub>2</sub>

b) 1101<sub>2</sub> + 1011<sub>2</sub>

<textarea>
Your answer:
a) 1001 + 0100 =
b) 1101 + 1011 =
</textarea>

Solution:

a) 1101

```
  1001
+ 0100
  ====
  1101   
```

b) ~~11110~~ (overflow)

```
  1101
+ 1011
  ====
1 1000  <- overflow
```

:::caution Unsigned Numbers
When the msb (most significant bit) is carried out, it's an overflow. For ***unsigned numbers***.
:::

## Exercise 1.53 Perform the following additions of unsigned binary numbers. Indicate whether or not the sum overflows an 8-bit result

a) 10011001<sub>2</sub> + 01000100<sub>2</sub>

b) 11010010<sub>2</sub> + 10110110<sub>2</sub>

<textarea>
Your answer:
a) 10011001 + 01000100 =
b) 11010010 + 10110110 =
</textarea>

Solution:

a) 11011101

```
  10011001
+ 01000100
  ========
  11011101
```

b) ~~110001000~~ (overflow)

```
  11010010
+ 10110110
  ========
1 10001000  <- overflow
```

## Exercise 1.54 Repeat exercise 1.52, assuming that the binary numbers are in two's complement form

a) 1001<sub>2</sub> + 0100<sub>2</sub>

b) 1101<sub>2</sub> + 1011<sub>2</sub>

<textarea>
Your answer:
a) 1001 + 0100 =
b) 1101 + 1011 =
</textarea>

Solution:

a) 1101 (no overflow)

```
  1001
+ 0100
  ====
  1101 (-8+4+1)=-3  
```

:::info Two's complement numbers
Overflow never occurs when adding two numbers with different signs
:::

b) 1000 (no overflow)

```
  1101 = -3
+ 1011 = -5
  ====
1 1000 <- carry discarded
  1000 -> result: -8
```

:::info Two's Complement Numbers
When adding numbers in the two's complement form, the carry out from msb is discarding. See [two's complement overflow](../binary-numbers/twos-complement-overflow)
:::

:::warning
Unlike unsigned numbers, a carry out of the most significant column
does not indicate overflow
:::

:::tip
Instead, overflow occurs if the two numbers being added have the same sign bit and the result has the opposite sign bit.
:::

## Exercise 1.55 Repeat exercise 1.53, assuming that the binary numbers are in two's complement form

a) 10011001<sub>2</sub> + 01000100<sub>2</sub>

b) 11010010<sub>2</sub> + 10110110<sub>2</sub>

<textarea>
Your answer:
a) 10011001 + 01000100 =
b) 11010010 + 10110110 =
</textarea>

Solution:

a) 11011101

```
  10011001
+ 01000100
  ========
  11011101
```

b) 10001000

```
  11010010
+ 10110110
  ========
1 10001000  <- no overflow
  10001000  -> result
```

## Exercise 1.56 Convert the following decimal numbers to 6-bit two's complement binary numbers and add them. Indicate whether or not the sum overflows a 6-bit result

a) 16<sub>10</sub>+ 9<sub>10</sub>

b) 27<sub>10</sub> + 31<sub>10</sub>

c) −4<sub>10</sub> + 19<sub>10</sub>

d) 3<sub>10</sub> + −32<sub>10</sub>

e) −16<sub>10</sub> + −9<sub>10</sub>

f) −27<sub>10</sub> + −31<sub>10</sub>

<textarea>
Your answer:
a) 16 + 9 =
b) 27 + 31 =
c) −4 + 19 =
d) 3 + −32 =
e) −16 + −9 =
f) −27 + −31 =
</textarea>

Solution:

a) 010000 + 001001 = 011001

```
   010000
+  001001
   ======
   011001 = 25
```

b) 011011 + 011111 = 111010 (overflow)

```
   011011 = 16+8+2+1=27
+  011111 = 16+8+4+2+1=31
   ======
   111010 <- sign bit changed (overflow)
   result: -32+16+8+2=-6
```

c) 111100 + 010011 = 001111

```
   111100
+  010011
   ======
 1 001111 -> discard carry
   001111 = 15
```

d) 000011 + 100000 = 100011

```
   000011
+  100000
   ======
   100011 = -32+2+1=-29
```

e) 110000 + 110111 = 100111

```
   110000 = -32+16=-16
+  110111 = -32+16+4+2+1=-9
   ======
 1 100111 -> discard carry
   100111 = -32+4+2+1=-25
```

f) 100101 + 100001 = 000110 (overflow)

```
   100101 = -32+4+1=-27
+  100001 = -32+1=-31
   ======
 1 000110 -> discard carry
   000110 -> changed msb
   overflow!
```

## Exercise 1.57 Repeat exercise 1.56 for the following numbers

a) 7<sub>10</sub> + 13<sub>10</sub>

b) 17<sub>10</sub> + 25<sub>10</sub>

c) −26<sub>10</sub> + 8<sub>10</sub>

d) 31<sub>10</sub> + −14<sub>10</sub>

e) −19<sub>10</sub> + −22<sub>10</sub>

f) −2<sub>10</sub> + −29<sub>10</sub>

<textarea>
Your answer:
a) 7 + 13 =
b) 17 + 25 =
c) −26 + 8 =
d) 31 + −14 =
e) −19 + −22 =
f) −2 + −29 =
</textarea>

Solution:

a) 000111 + 001101 = 010100

```
000111 7
001101 13
======
010100
```

b) 010001 + 011001 = 101010, overflow

```
010001 17
011001 25
======
101010 -> overflow
```

c) 100110 + 001000 = 101110

```
100110 -26
001000  8
======
101110
```

d) 011111 + 110010 = 010001

```
 011111 31
 110010 -14
 ======
1010001
 010001
```

e) 101101 + 101010 = 010111, overflow

```
 101101 -19
 101010 -22
 ======
1010111
 010111 -> overflow
```

f) 111110 + 100011 = 100001

```
 111110 -2
 100011 -29
 ======
1100001
 100001 = -31
```

## Exercise 1.58 Perform the following additions of unsigned hexadecimal numbers. Indicate whether or not the sum overflows an 8-bit (two hex digit) result

a) 7<sub>16</sub> + 9<sub>16</sub>

b) 13<sub>16</sub> + 28<sub>16</sub>

c) AB<sub>16</sub> + 3E<sub>16</sub>

d) 8F<sub>16</sub> + AD<sub>16</sub>

<textarea>
Your answer:
a) 7 + 9 =
b) 13 + 28 =
c) AB + 3E =
d) 8F + AD =
</textarea>

Solution:

a) 7 + 9 = 10<sub>16</sub>

```
 0111 
 1001
 ====
10000
```

b) 13 + 28 = 3B

```
0001 0011
0010 1000
=========
0011 1011
```

c) AB + 3E = E9

```
1010 1011
0011 1110
=========
1110 1001
```

d) 8F + AD = 13С (overflow)

```
 1000 1111
 1010 1101
 =========
10011 1100 -> overflow
```

## Exercise 1.59 Perform the following additions of unsigned hexadecimal numbers. Indicate whether or not the sum overflows an 8-bit (two hex digit) result

(a) 22<sub>16</sub> + 8<sub>16</sub>

(b) 73<sub>16</sub> + 2C<sub>16</sub>

(c) 7F<sub>16</sub> + 7F<sub>16</sub>

(d) C2<sub>16</sub> + A4<sub>16</sub>

<textarea>
Your answer:
(a) 22 + 8 =
(b) 73 + 2C =
(c) 7F + 7F =
(d) C2 + A4 =
</textarea>

Solution:

a) 22 + 8 = 0x2A

```
0010 0010
0000 1000
=========
0010 1010
```

b) 73 + 2C = 0x9F

```
0111 0011
0010 1100
=========
1001 1111
```

c) 7F + 7F = 0xFE

```
0111 1111
0111 1111
=========
1111 1110
```

d) C2 + A4 = 0x166, overflow

```
 1100 0010
 1010 0100
 =========
10110 0110
```

## Exercise 1.60 Convert the following decimal numbers to 5-bit two's complement binary numbers and subtract them. Indicate whether or not the difference overflows a 5-bit result

a) 9<sub>10</sub> − 7<sub>10</sub>

b) 12<sub>10</sub> − 15<sub>10</sub>

c) −6<sub>10</sub> − 11<sub>10</sub>

d) 4<sub>10</sub> − −8<sub>10</sub>

<textarea>
Your answer:
a) 9 − 7 =
b) 12 − 15 =
c) −6 − 11 =
d) 4 − −8 =
</textarea>

Solution:

a) 9 - 7 = 01001 - 00111 = 00010

```
   01001 9
+  11001 -7
   =====
 1 00010 <- carry discarded 
```

b) 12 -15 = 01100 - 01111 = 11101

```
   01100 12    01100 12
-  01111 15  + 10001 -15
   =====       =====
   11101   =   11101
```

c) −6 − 11 = 11010 - 01011 = 01111 (overflow)

```
  11010 -6     11010  -6
+ 10101 -11  - 01011  11
  =====        =====
1 01111 15     10111  -9
   
   both error !! overflow
```

d) 4 − −8 = 00100 - 11000 = 01100

```
  00100 4   00100 4
+ 01000 8   10111
  =====     +   1
  01100   - 11000 -8
            =====
          1 01100 12 <- carry discard
```

[All Exercises](all-exercises)
