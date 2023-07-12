---
id: three-ideas-signed-binary-numbers
title: Three Ideas of Signed Binary Numbers
---
Big trilemma!

In early years of digital computing, the computer industry faced a challenge - how to implement signed binary numbers. Competing ideas emerged both at the hardware and mathematical levels. Scientists have split into three camps. The first camp implemented the idea of [ones' complement](ones-complement), the second - the idea of [two's complement](twos-complement) (this idea is the main one today), the third - the idea of [sign-with-magnitude](sign-with-magnitude).

## Comparison Number Systems

8-bit numbers representation

Binary Value| Unsigned | Sign and Magnitude | ones' complement | Two's complement 
:-:|:-:|:-:|:-:|:-:
00000000|0|+0|+0|0
00000001|1|1|1|1
..|..|..|..|..
01111110|126|126|126|126
01111111|127|127|127|127
10000000|128|-0|-127|-128
10000001|129|-1|-126|-127
10000010|130|-2|-125|-126
..|..|..|..|..
11111110|254|-126|-1|-2
11111111|255|-127|-0|-1

[Signed number representations (Wikipedia)](https://en.wikipedia.org/wiki/Signed_number_representations)

## Other Systems

[Google's Protocol Buffers](../../data/googles-protocol-buffers)

## Resources

- [Weird Number](weird-number)
- [Crash Due to Overflow](crash-due-to-overflow)
- [Twos Complement Overflow](twos-complement-overflow)
- [Range Number Systems](range-number-systems)
- [Sign Extension](sign-extension)
