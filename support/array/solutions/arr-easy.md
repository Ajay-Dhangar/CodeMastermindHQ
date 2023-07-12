---
id: array-easy-problems-solution
title: Array Easy Problems Solution
tags: [CodeMasterMindHQ, arrays in java, arrays in dsa, array easy problems, array, max-min, reverse array, max-sub-array, Pascal's Triangle]
sidebar_position: 1
---

***Let's start by some basic Easy Arrays problems solve in DSA***

### 1. Maximum and Minimum Element in an Array 

![Maximum and Minimum Element in an Array](./../img/1-maximum-and-minimum-element-in-an-array.svg)

**Explanation:**

1. The code starts by taking input from the user for the size of the array (`n`) and then the elements of the array (`arr`).

2. The `Solution` class contains the `MaxMinArray` method, which takes the array `arr` and its size `n` as input and returns an array containing the minimum and maximum values.

3. Inside the `MaxMinArray` method, we initialize two variables, `minValue` and `maxValue`, to the first element of the array (`arr[0]`). This is done as we need some initial values to start comparing with the rest of the array elements.

4. We then iterate through the array starting from index 1 (since we have already initialized the variables with the first element).

5. Inside the loop, we use the `Math.min()` method to find the minimum value between the current `minValue` and the element at index `i` in the array. This way, we keep updating the `minValue` if we find a smaller element in the array.

6. Similarly, we use the `Math.max()` method to find the maximum value between the current `maxValue` and the element at index `i` in the array. This way, we keep updating the `maxValue` if we find a larger element in the array.

7. After the loop, we have obtained the `minValue` and `maxValue`, so we return them as a new array using the `return new int[]{minValue, maxValue};`.

**Time Complexity:**
- The time complexity of this solution is ***O(n)*** because we are iterating through the array once to find the minimum and maximum values.

**Space Complexity:**
- The space complexity is ***O(1)*** because we are using a constant amount of extra space (two integer variables) regardless of the

### 2. Reverse the Array 
   

### 3. Maximum-Subarray (Kadane's Algorithm) 

### 4. Contains Duplicate 

### 5. Chocolate Distribution Problem 

### 6. Search in Rotated Sorted Array 

![Search in Rotated Sorted Array](./../img/search-in-rotated-sorted-array.svg)

### 7. Pascal's Triangle 

### 8. Best Time to Buy and Sell Stock 

### 9.  Merge Sorted Array 

### 10. Majority Element

### 11. Two Sum

### 12. Remove Duplicates from Sorted Array

### 13. Plus One

### 14. Convert Sorted Array to Binary Search Tree


### 15. Single Number

### 16. Missing Ranges

### 17. Contains Duplicate

### 18. Missing Number


### 19. Move Zeroes

### 20. Intersection of Two Arrays II