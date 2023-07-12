---
id: ones-complement
title: Ones' Complement
---

Another system representation of negative numbers is **ones' complement**.

"Ones' complement" because a negative number is a "complement" to its positive counterpart up to 1. That is, if you add, bit by bit, the number and its negative counterpart, you get 11..111<sub>2</sub>.

> To find negative counterpart, simply invert all bits of a given positive number. 

Ones' complement form of 01101100<sub>2</sub>(99<sub>10</sub>) is 10010011<sub>2</sub>(-99<sub>10</sub>). If you add this two numbers, you get 1 in all bits.

```sh
 01101100   99
+    
 10010011  -99
 ---------
 11111111
```

But this is just a clarification of the term "ones' complement".

To add two numbers represented in this system, you need:  
1. Find counterpart
2. Add bit by bit (not forget about carry)
3. If occurred do the end-around carry

**Example:** Add +2<sub>10</sub> and -1<sub>10</sub>

```sh 8-bit Adding
    binary   decimal
  00000010    +2
+ 
  11111110    -1
  --------    --
1 00000000     0    incorrect
+
         1          add carry
  --------    
  00000001    +1    correct
```

## Limitations

- two zeros

From: [Signed Number Representation (Wikipedia)](https://en.wikipedia.org/wiki/Signed_number_representations#Ones'_complement)