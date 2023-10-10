//1
const sumIntFrom1ToN = num => {
    let numArray = [];
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        numArray.push(i);
    }

    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }

    return sum;

    //alternative
    // return numArray.reduce( (a,b) => a+b );
}
console.log(sumIntFrom1ToN(4));


//2
const sumOfCubes = (num1, num2, num3) => Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
//alternative
// const sumOfCubes = (num1,num2,num3) => [num1,num2,num3].map( a => Math.pow(a,3) ).reduce( (a,b) => a+b );
console.log(sumOfCubes(1, 5, 9));


//3
const isStrStartOfWord = (str1, str2) => str2.startsWith(str1);

console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("tri", "triplet"));
console.log(isStrStartOfWord("beau", "pastry"));


//4
const isLEQZero = num => num <= 0 ? true : false;

//5
const countOccurrences = (str, letter) => {
    let occurrences = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) occurrences += 1;
    }
    return occurrences;

    //alternative
    // str.split("").forEach( e => e === letter? occurrences+=1 : 0 );

    return occurrences;
}
countOccurrences("this is a string", "i");

//6
const calcBaseToExponent = (base, exp) => Math.pow(base, exp);
console.log(calcBaseToExponent(5, 3));

//7
const dogAge = age => `Your doggo is ${age * 7} years old in dog years!`;
dogAge(4)

//8
const MAX_AGE = 100;
const DAYS_IN_YEAR = 365;
const calcLifetimeSupply = (age, amount) => `The snack company should provide you with ${(MAX_AGE - age) * DAYS_IN_YEAR * amount} units, until you are a ripe old age of 100. Happy snacking!`;
console.log(calcLifetimeSupply(25, 2));

//bonus
const calcLifetimeSupply2 = (age, amount) => `The snack company should provide you with ${(MAX_AGE - age) * DAYS_IN_YEAR * amount} units, until you are a ripe old age of 100. Happy snacking!`;
console.log(calcLifetimeSupply2(25, 2));

//9
const isWaldoHere = str => str.includes("waldo".toLowerCase());
console.log(isWaldoHere("Wait, don't you mean Wally?"));

//10
const isEqualSlices = (totalNumberOfSlices, numberOfRecipients, slicesPerPerson) => numberOfRecipients * slicesPerPerson < totalNumberOfSlices;
console.log(isEqualSlices(11, 5, 3));

//11
const isEqualNumXandOs = str => {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") x += 1;
        if (str[i].toLowerCase() === "o") o += 1;
    }

    if (x === o || (x === 0 && o === 0)) return true;
    else return false;


    // alternative
    // let x = str.split("").filter(e => e.toLowerCase() === "x");
    // let o = str.split("").filter(e => e.toLowerCase() === "o");
    // if (x.length === o.length || (x.length === 0 && o.length === 0)) return true;
    // else return false;
}
console.log(isEqualNumXandOs("ooxx"));
console.log(isEqualNumXandOs("xooxx"));
console.log(isEqualNumXandOs("ooxXm"));
console.log(isEqualNumXandOs("zpzpzpp"));
console.log(isEqualNumXandOs("zzoo"));

//12
const isPrime = num => {
    let occurrences = 0;
    for (let i = 2; i < num; i++) {
        if( num % i === 0 ) occurrences +=1;
    }
    return !occurrences>0;
}
console.log(isPrime(29));
