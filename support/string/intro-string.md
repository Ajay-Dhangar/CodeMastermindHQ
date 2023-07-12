---
id: string-intro
title: String Manipulation
tags: [CodeMasterMindHQ, strings in dsa, strings all problems, string in dsa]
sidebar_position: 1
---

In programming, a string is a sequence of characters. In Java, strings are represented by the String class, which provides various methods for string manipulation, traversal, and searching. Strings in Java are immutable, meaning their values cannot be changed once assigned. You can perform various operations on strings, such as concatenation, conversion to uppercase or lowercase, and substring extraction.

### String Traversal and Manipulation:
String traversal refers to accessing each character of a string one by one. In Java, strings are immutable, meaning they cannot be modified after creation. However, you can perform various operations on strings without modifying the original string.

***Here's an example of string traversal and manipulation:***

```java title="Main.java"
String str = "Hello, World!";

// String traversal
for (int i = 0; i < str.length(); i++) {
    char c = str.charAt(i);
    System.out.println(c);
}

// String manipulation
String upperCaseStr = str.toUpperCase();
String lowerCaseStr = str.toLowerCase();
String trimmedStr = str.trim(); // Removes leading and trailing whitespaces

System.out.println(upperCaseStr); // Output: HELLO, WORLD!
System.out.println(lowerCaseStr); // Output: hello, world!
System.out.println(trimmedStr);   // Output: Hello, World!
```

### String Searching Algorithms:
String searching algorithms are used to find patterns or substrings within a larger string. Two popular algorithms for string searching are the Knuth-Morris-Pratt (KMP) algorithm and the Rabin-Karp algorithm.

The KMP algorithm finds occurrences of a pattern string within a larger text string in linear time complexity. It utilizes a prefix function to skip unnecessary comparisons.

***Here's an example implementation of the KMP algorithm in Java:***

```java title="Main.java"
public class KMP {
    private int[] computePrefix(String pattern) {
        int[] prefix = new int[pattern.length()];
        prefix[0] = 0;
        int k = 0;
        
        for (int i = 1; i < pattern.length(); i++) {
            while (k > 0 && pattern.charAt(k) != pattern.charAt(i)) {
                k = prefix[k - 1];
            }
            
            if (pattern.charAt(k) == pattern.charAt(i)) {
                k++;
            }
            
            prefix[i] = k;
        }
        
        return prefix;
    }
    
    public int search(String text, String pattern) {
        int[] prefix = computePrefix(pattern);
        int n = text.length();
        int m = pattern.length();
        int j = 0;
        
        for (int i = 0; i < n; i++) {
            while (j > 0 && text.charAt(i) != pattern.charAt(j)) {
                j = prefix[j - 1];
            }
            
            if (text.charAt(i) == pattern.charAt(j)) {
                j++;
            }
            
            if (j == m) {
                return i - m + 1; // Pattern found at index (i - m + 1)
            }
        }
        
        return -1; // Pattern not found
    }
    
    public static void main(String[] args) {
        KMP kmp = new KMP();
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        
        int index = kmp.search(text, pattern);
        
        if (index != -1) {
            System.out.println("Pattern found at index " + index);
        } else {
            System.out.println("Pattern not found");
        }
    }
}
```

The Rabin-Karp algorithm is a hashing-based algorithm that efficiently searches for a pattern in a string. It computes hash values for the pattern and compares them with hash values of substrings of the text.

***Here's an example implementation of the Rabin-Karp algorithm in Java:***

```java title="Main.java"
public class RabinKarp {
    private final static

 int d = 256; // Number of characters in the input alphabet
    private final static int q = 101; // A prime number
    
    public void search(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        int patternHash = 0; // Hash value for the pattern
        int textHash = 0;    // Hash value for the current text window
        
        // Calculate the hash value of the pattern and the first window of text
        for (int i = 0; i < m; i++) {
            patternHash = (d * patternHash + pattern.charAt(i)) % q;
            textHash = (d * textHash + text.charAt(i)) % q;
        }
        
        int h = 1;
        for (int i = 0; i < m - 1; i++) {
            h = (h * d) % q;
        }
        
        // Slide the pattern over the text and check for a match
        for (int i = 0; i <= n - m; i++) {
            if (patternHash == textHash) {
                boolean match = true;
                
                for (int j = 0; j < m; j++) {
                    if (text.charAt(i + j) != pattern.charAt(j)) {
                        match = false;
                        break;
                    }
                }
                
                if (match) {
                    System.out.println("Pattern found at index " + i);
                }
            }
            
            if (i < n - m) {
                textHash = (d * (textHash - text.charAt(i) * h) + text.charAt(i + m)) % q;
                
                if (textHash < 0) {
                    textHash += q;
                }
            }
        }
    }
    
    public static void main(String[] args) {
        RabinKarp rk = new RabinKarp();
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        
        rk.search(text, pattern);
    }
}
```

### String Manipulation Problems:
String manipulation problems involve tasks such as checking if a string is a palindrome, finding anagrams, or generating permutations.

***Here's an example of solving a palindrome problem in Java:***

```java title="Main.java"
public class Palindrome {
    public static boolean isPalindrome(String str) {
        int left = 0;
        int right = str.length() - 1;
        
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        String str = "level";
        
        if (isPalindrome(str)) {
            System.out.println(str + " is a palindrome");
        } else {
            System.out.println(str + " is not a palindrome");
        }
    }
}
```

This code checks if the given string `str` is a palindrome by comparing characters from both ends until the middle of the string.

Similarly, you can explore and implement solutions for anagram detection and string permutation problems.

