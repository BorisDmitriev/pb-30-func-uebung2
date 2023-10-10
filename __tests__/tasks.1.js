const rewire = require("rewire");

describe("1. Add up", () => {
  test("`sumIntFrom1ToN` function exists", () => {
    const solution = rewire("../solution");
    const sumIntFrom1ToN = solution.__get__('sumIntFrom1ToN')
    expect(sumIntFrom1ToN).toBeDefined();
  });
  test("function returns the sum of all numbers leading up to and including passed number", () => {
    const solution = rewire("../solution");
    const sumIntFrom1ToN = solution.__get__('sumIntFrom1ToN')
    expect(sumIntFrom1ToN(600)).toBe(180300)
  });
});
describe('2. Cubed', () => {
  test("`sumOfCubes` function exists", () => {
    const solution = rewire("../solution");
    const sumOfCubes = solution.__get__('sumOfCubes')
    expect(sumOfCubes).toBeDefined();
  });
  test("function returns sum of cubes of 3 passed numbers", () => {
    const solution = rewire("../solution");
    const sumOfCubes = solution.__get__('sumOfCubes')
    expect(sumOfCubes(1, 5, 9)).toBe(855)
  });
  test("function returns NaN if passed less than 3 arguments", () => {
    const solution = rewire("../solution");
    const sumOfCubes = solution.__get__('sumOfCubes')
    expect(sumOfCubes(1, 5)).toBe(NaN)
    expect(sumOfCubes()).toBe(NaN)
  });
});
describe('3. String Check', () => {
  test("`isStrStartOfWord` function exists", () => {
    const solution = rewire("../solution");
    const isStrStartOfWord = solution.__get__('isStrStartOfWord')
    expect(isStrStartOfWord).toBeDefined();
  });
  test("function returns `true` if second passed string starts with first passed string", () => {
    const solution = rewire("../solution");
    const isStrStartOfWord = solution.__get__('isStrStartOfWord')
    expect(isStrStartOfWord("bu", "button")).toBeTruthy()
  });
  test("function returns `false` if second passed string doesn't start with first passed string", () => {
    const solution = rewire("../solution");
    const isStrStartOfWord = solution.__get__('isStrStartOfWord')
    expect(isStrStartOfWord("hi", "button")).toBe(false)
  });
})

describe('4. Less Than or Equal To Zero?', () => {
  test("`isLEQZero` function exists", () => {
    const solution = rewire("../solution");
    const isLEQZero = solution.__get__('isLEQZero')
    expect(isLEQZero).toBeDefined();
  });
  test("function returns `true` if passed number is less than or equal to zero", () => {
    const solution = rewire("../solution");
    const isLEQZero = solution.__get__('isLEQZero')
    expect(isLEQZero(0)).toBeTruthy()
    expect(isLEQZero(-3)).toBeTruthy()
  });
  test("function returns `false` if passed argument is greater than zero", () => {
    const solution = rewire("../solution");
    const isLEQZero = solution.__get__('isLEQZero')
    expect(isLEQZero(3)).toBe(false)
  });
})

describe('5. Count Occurences', () => {
  test("`countOccurrences` function exists", () => {
    const solution = rewire("../solution");
    const countOccurrences = solution.__get__('countOccurrences')
    expect(countOccurrences).toBeDefined();
  });
  test("function returns number of occurences of letter passed as second argument in string passed as first argument", () => {
    const solution = rewire("../solution");
    const countOccurrences = solution.__get__('countOccurrences')
    expect(countOccurrences("this is a string", "i")).toBe(3)
  });
});

describe('6. X To The Power of X', () => {
  test("`calcBaseToExponent` function exists", () => {
    const solution = rewire("../solution");
    const calcBaseToExponent = solution.__get__('calcBaseToExponent')
    expect(calcBaseToExponent).toBeDefined();
  });
  test("function returns result of first argument to the power of second argument ", () => {
    const solution = rewire("../solution");
    const calcBaseToExponent = solution.__get__('calcBaseToExponent')
    expect(calcBaseToExponent(5, 3)).toBe(125)
  });
});

describe('7. Dog Years', () => {
  test("`dogAge` function exists", () => {
    const solution = rewire("../solution");
    const dogAge = solution.__get__('dogAge')
    expect(dogAge).toBeDefined();
  });
  test("Function returns string with number of dog years", () => {
    const solution = rewire("../solution");
    const dogAge = solution.__get__('dogAge')
    expect(dogAge(5)).toEqual(expect.any(String));
    expect(dogAge(5)).toContain("35")
  });
});

describe('8. A Lifetime Supply', () => {
  test("`calcLifetimeSupply` function exists", () => {
    const solution = rewire("../solution");
    const calcLifetimeSupply = solution.__get__('calcLifetimeSupply')
    expect(calcLifetimeSupply).toBeDefined();
  });
  test("function returns string with number of units for lifetime supply based on passed numbers", () => {
    const solution = rewire("../solution");
    const calcLifetimeSupply = solution.__get__('calcLifetimeSupply')
    expect(calcLifetimeSupply(40, 3)).toEqual(expect.any(String));
    expect(calcLifetimeSupply(40, 3)).toContain("65")
  });
});

describe("9. Where's Waldo?", () => {
  test("`isWaldoHere` function exists", () => {
    const solution = rewire("../solution");
    const isWaldoHere = solution.__get__('isWaldoHere')
    expect(isWaldoHere).toBeDefined();
  });
  test("function returns `true` if passed string contains 'Waldo'", () => {
    const solution = rewire("../solution");
    const isWaldoHere = solution.__get__('isWaldoHere')
    expect(isWaldoHere("waldo is here")).toBeTruthy()
  });
  test("function returns `false` if passed string doesn't contain 'Waldo'", () => {
    const solution = rewire("../solution");
    const isWaldoHere = solution.__get__('isWaldoHere')
    expect(isWaldoHere("Wait, don't you mean Wally?")).toBe(false)
  });
});

describe("10. Pie", () => {
  test("`isEqualSlices` function exists", () => {
    const solution = rewire("../solution");
    const isEqualSlices = solution.__get__('isEqualSlices')
    expect(isEqualSlices).toBeDefined();
  });
  test("function returns `true` if arguments result in even split", () => {
    const solution = rewire("../solution");
    const isEqualSlices = solution.__get__('isEqualSlices')
    expect(isEqualSlices(8, 3, 2)).toBeTruthy();
  });
  test("function returns `false` if split is not possible with provided arguments", () => {
    const solution = rewire("../solution");
    const isEqualSlices = solution.__get__('isEqualSlices')
    expect(isEqualSlices(8, 3, 3)).toBe(false);
  });
});

describe("11. XO", () => {
  test("`isEqualNumXandOs` function exists", () => {
    const solution = rewire("../solution");
    const isEqualNumXandOs = solution.__get__('isEqualNumXandOs')
    expect(isEqualNumXandOs).toBeDefined();
  });
  test("function returns `true` if passed string has equal number of 'x's and 'o's", () => {
    const solution = rewire("../solution");
    const isEqualNumXandOs = solution.__get__('isEqualNumXandOs')
    expect(isEqualNumXandOs("ooxx")).toBeTruthy();
  });
  test("function returns `false` if passed string doesn't contain equal number of 'x's and 'o's", () => {
    const solution = rewire("../solution");
    const isEqualNumXandOs = solution.__get__('isEqualNumXandOs')
    expect(isEqualNumXandOs("xooxx")).toBe(false);
  });
});

describe("12. isPrime?", () => {
  test("`isPrime` function exists", () => {
    const solution = rewire("../solution");
    const isPrime = solution.__get__('isPrime')
    expect(isPrime).toBeDefined();
  });
  test("function reurns `true` if argument is prime number", () => {
    const solution = rewire("../solution");
    const isPrime = solution.__get__('isPrime')
    expect(isPrime(7)).toBeTruthy();
  });
  test("function reurns `false` if argument is not a prime number", () => {
    const solution = rewire("../solution");
    const isPrime = solution.__get__('isPrime')
    expect(isPrime(9)).toBe(false);
  });
});
