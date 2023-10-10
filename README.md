# Functions Exercises
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


**1. Add Up.**
Create a function named `sumIntFrom1ToN` that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples:
* `sumIntFrom1ToN(4)` ➞ 10
* `sumIntFrom1ToN(13)` ➞ 91
* `sumIntFrom1ToN(600)` ➞ 180300

**2. Cubed.**
Create a function named `sumOfCubes` that takes in three numbers and returns the sum of its cubes.

Examples:
* `sumOfCubes(1, 5, 9)` ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* `sumOfCubes(2, 8)` ➞ NaN // incorrect number arguments
* `sumOfCubes()` ➞ NaN

**3. String Check.**
Create a function named `isStrStartOfWord` that takes 2 strings as parameters, where the second string is a word and returns `true` or `false` depending on whether the word starts with the string passed to the first parameter.


Examples:
* `isStrStartOfWord("bu", "button")` ➞ true
* `isStrStartOfWord("tri", "triplet")` ➞ true
* `isStrStartOfWord("beau", "pastry")` ➞ false

**4. Less Than or Equal to Zero?**
Create a function named `isLEQZero` that takes a number as its only argument and returns `true` if it's less than or equal to zero, otherwise return `false`.

Examples:
* `isLEQZero(3)` ➞ false
* `isLEQZero(0)` ➞ true
* `isLEQZero(-4)` ➞ true
* `isLEQZero(10)` ➞ false

**5. Count Occurrences.**
Create a function named `countOccurrences` that accepts two arguments: a string and a letter. The function should return the number of occurrences of that letter in the string.

Example:
* `countOccurrences("this is a string", "i")` ➞ 3

**6. X To The Power of X.**
Create a function named `calcBaseToExponent` that takes a base number and an exponent number as parameters and returns the result. **NB:** All test inputs will be positive integers.

Examples:
* `calcBaseToExponent(5, 3)` ➞ 125
* `calcBaseToExponent(10, 10)` ➞ 10000000000
* `calcBaseToExponent(3, 3)` ➞ 27

**7. Dog Years.**
Create a function named `dogAge` which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the assumtion that 1 human year = 7 dog years. The function should return a string like in the example below.

Example:
* `dogAge(4)` ➞ "Your doggo is 28 years old in dog years!"

**8. A Lifetime Supply...**
You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".  Create a function named `calcLifetimeSupply` to help you calculate that amount for yourself. The function should accept two arguments: current age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100. The function should return a string like in the example below.

Examples:
* `calcLifetimeSupply(25, 2)` ➞ "The snack company should provide you with 54 units, until you are a ripe old age of 100. Happy snacking!"

* `calcLifetimeSupply(40, 3)` ➞ "The snack company should provide you with 65 units, until you are a ripe old age of 100. Happy snacking!"

**Bonus:** 
1) Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off). 
2) Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).

    * `calcLifetimeSupply(32, 0.58, 65)` ➞ "The snack company should provide you with 6991 units, until you are a ripe old age of 65. Happy snacking!"

**9. Where's Waldo?**
Create a function named `isWaldoHere` that takes a string and returns `true` if Waldo is found, and `false` if he's not.

Examples:
* `isWaldoHere("is there a wal here?")` ➞ false
* `isWaldoHere("I found you Waldo!")` ➞ true
* `isWaldoHere("Wait, don't you mean Wally?")` ➞ false
* `isWaldoHere("waldo is here")` ➞ true

**10. Pie.**
Create a function named `isEqualSlices` that determines whether or not it's possible to split a pie fairly given these three parameters:

* Total number of slices.
* Number of recipients.
* How many slices each person gets. (in that order)

Examples:
* `isEqualSlices(11, 5, 3)` ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

* `isEqualSlices(8, 3, 2)` ➞ true
* `isEqualSlices(8, 3, 3)` ➞ false
* `isEqualSlices(24, 12, 2)` ➞ true

**11. XO**
Create a function named `isEqualNumXandOs` that takes a string, checks if it has the same number of 'x's and 'o's and returns either `true` or `false`.

Notes:

* Return a boolean value (`true` or `false`).
* The string can contain any character.
* When neither an x nor an o is in the string, return `true`.

Examples:
* `isEqualNumXandOs("ooxx")` ➞ true
* `isEqualNumXandOs("xooxx")` ➞ false
* `isEqualNumXandOs("ooxXm")` ➞ true (case insensitive)
* `isEqualNumXandOs("zpzpzpp")` ➞ true (returns true if no x and o)
* `isEqualNumXandOs("zzoo")` ➞ false

**12. isPrime?**
Create a function named `isPrime` that returns `true` if a number is a prime number, and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

Examples:
* `isPrime(7)` ➞ true
* `isPrime(9)` ➞ false
* `isPrime(10)` ➞ false

**Good Luck & Enjoy :)**

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Add up

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `sumIntFrom1ToN` function exists |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | function returns the sum of all numbers leading up to and including passed number |

### 2. Cubed

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `sumOfCubes` function exists |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | function returns sum of cubes of 3 passed numbers |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | function returns NaN if passed less than 3 arguments |

### 3. String Check

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `isStrStartOfWord` function exists |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | function returns `true` if second passed string starts with first passed string |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | function returns `false` if second passed string doesn't start with first passed string |

### 4. Less Than or Equal To Zero?

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `isLEQZero` function exists |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | function returns `true` if passed number is less than or equal to zero |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | function returns `false` if passed argument is greater than zero |

### 5. Count Occurences

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | `countOccurrences` function exists |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | function returns number of occurences of letter passed as second argument in string passed as first argument |

### 6. X To The Power of X

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status13.svg) | `calcBaseToExponent` function exists |
| ![Status](../../blob/badges/.github/badges/main/status14.svg) | function returns result of first argument to the power of second argument  |

### 7. Dog Years

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status15.svg) | `dogAge` function exists |
| ![Status](../../blob/badges/.github/badges/main/status16.svg) | Function returns string with number of dog years |

### 8. A Lifetime Supply

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status17.svg) | `calcLifetimeSupply` function exists |
| ![Status](../../blob/badges/.github/badges/main/status18.svg) | function returns string with number of units for lifetime supply based on passed numbers |

### 9. Where's Waldo?

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status19.svg) | `isWaldoHere` function exists |
| ![Status](../../blob/badges/.github/badges/main/status20.svg) | function returns `true` if passed string contains 'Waldo' |
| ![Status](../../blob/badges/.github/badges/main/status21.svg) | function returns `false` if passed string doesn't contain 'Waldo' |

### 10. Pie

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status22.svg) | `isEqualSlices` function exists |
| ![Status](../../blob/badges/.github/badges/main/status23.svg) | function returns `true` if arguments result in even split |
| ![Status](../../blob/badges/.github/badges/main/status24.svg) | function returns `false` if split is not possible with provided arguments |

### 11. XO

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status25.svg) | `isEqualNumXandOs` function exists |
| ![Status](../../blob/badges/.github/badges/main/status26.svg) | function returns `true` if passed string has equal number of 'x's and 'o's |
| ![Status](../../blob/badges/.github/badges/main/status27.svg) | function returns `false` if passed string doesn't contain equal number of 'x's and 'o's |

### 12. isPrime?

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status28.svg) | `isPrime` function exists |
| ![Status](../../blob/badges/.github/badges/main/status29.svg) | function reurns `true` if argument is prime number |
| ![Status](../../blob/badges/.github/badges/main/status30.svg) | function reurns `false` if argument is not a prime number |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-functions)


[//]: # (autograding info end)