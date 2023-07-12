---
id: sign-with-magnitude
title: Sign/Magnitude
---

2021-02-06 17:45:10

This is simplest method. The most significant bit is a sign bit: 1 - negative, 0 - positive. Others bits is a magnitude (absolute value). No need the inverting or something else. Range in N-bit numbers: [-2<sup>N-1</sup>+1, 2<sup>N-1</sup>-1].

**Example:**

```sh title="8-bit"
binary -> decimal
1000 0001 = -1
0000 0001 = 1

8-bit min = 1111 1111 (-127)
8-bit max = 0111 1111 (+127)
```

## Limitations

- Two representation of zero: 0000 0000 (0) and 1000 0000 (-0). This needs additional verification.
- Addition doesn't work, for example: 

```
  1001 = -6
+
  0110 = 6
  ----
  1111 -> Wrong!
```  
:::tip
Addition and subtraction require different behavior depending on the sign bit. (Whereas [ones' complement](ones-complement) can ignore sign bit and just do the end-around carry. And [two's complement](twos-complement) can ignore sign bit and depend on the overflow behavior.)
:::

- Comparing two numbers also requires additional sign check.
- Minimal negative number: -127 (instead -128 in *two's complement*)


Some early binary computers ([IBM 7090](https://en.wikipedia.org/wiki/IBM_7090)) used this representation. Perhaps because of its naturalistic.

From: [Signed Number Representation (Wikipedia)](https://en.wikipedia.org/wiki/Signed_number_representations#Signed_magnitude_representation)



