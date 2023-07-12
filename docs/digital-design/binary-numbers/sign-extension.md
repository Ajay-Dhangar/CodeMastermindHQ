---
id: sign-extension
title: Sign Extension
---

When you do *sign extension*, you take the higher bit (sign digit) from small-bit-number and fill the rest of the most significant bits in the larger-bit-number with that sign digit.

**Example:**

```sh title="Sign extension"
4-bit to 8-bit
1000 -> 11111000
0101 -> 00000101
```

[Harris D. M., Harris S. L. - Digital Design and Computer Architecture, 2nd Edition - 2012](../../pdf/harris-d-m-harris-s-l-digital-design-and-computer-architecture-2nd-edition-2012.pdf)  
1.4.6 Signed Binary Numbers - 18 page

## Resources

- [Three Ideas of Signed Binary Numbers](three-ideas-signed-binary-numbers)
- [Weird Number](weird-number)
- [Crash Due to Overflow](crash-due-to-overflow)
- [Twos Complement Overflow](twos-complement-overflow)
- [Range Number Systems](range-number-systems)