---
id: twos-complement-overflow
title: Two's Complement Overflow
---

Unlike unsigned numbers, a carry out of the most significant column
does not indicate overflow. 

When adding N-bit numbers, the carry out the Nth bit (i.e. the N + 1th bit) is discarded.

**Example:** Compute 1101<sub>2</sub> + 1001<sub>2</sub>

```
   1101 = (-8+4+1) = -3
+  1011 = (-8+2+1) = -5
   ====
 1 1000 = -8 (no overflow)
```

There is no overflow when adding numbers with different sing. 

If, after adding two numbers with same sign, you get a result with other sign - this is overflow.

**Example:** 
Compute 4<sub>10</sub>+5<sub>10</sub> using two's complement numbers.

```sh title="4-bit Overflow"
  0100 = 4
+
  0101 = 5
  ----
  1001 = -7 -> Overflow
```

In this case [sign extension](sign-extension) will help.

<!-- $$
  f(x)=\int_{-\infty}^{\infty}
  \hat f(\xi)\,e^{2 \pi i \xi x}
  \,d\xi
$$ -->

Overflow can be very dangerous. [Crash due to overflow](crash-due-to-overflow).

From: [Harris D. M., Harris S. L. - Digital Design and Computer Architecture, 2nd Edition - 2012](../../pdf/harris-d-m-harris-s-l-digital-design-and-computer-architecture-2nd-edition-2012.pdf)  
1.4.6 Signed Binary Numbers - 18 page

## Resources

- [Three Ideas of Signed Binary Numbers](three-ideas-signed-binary-numbers)
- [Weird Number](weird-number)
- [Crash Due to Overflow](crash-due-to-overflow)
- [Range Number Systems](range-number-systems)
- [Sign Extension](sign-extension)