/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */
function minMax(input) {
    return [Math.min.apply(Math, input), Math.max.apply(Math, input)];
}

var someArr = [5, 2, 1, 7, 10];

//console.log(minMax(someArr));
/**
 * Filter out Strings from an Array
 * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 *
 * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Notes
 * Zero is a non-negative integer.
 * The given array only has integers and strings.
 * Numbers in the array should not repeat.
 * The original order must be maintained.
 */

function filterArray(arr) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            filteredArray.push(arr[i])
        }
    }
    return filteredArray
}


array = [1, 3, '6', 9, 'asdf', 'hello']
var nums = array.filter(filterArray)
//console.log(filterArray(array))
//console.log(array)
//console.log(nums);
/**
 * Is the Average of All Elements a Whole Number?
 * Create a function named isAvgWhole that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
 *
 * Examples
 *
 * >> isAvgWhole([1, 3]) ➞ true
 * >> isAvgWhole([1, 2, 3, 4]) ➞ false
 * >> isAvgWhole([1, 5, 6]) ➞ true
 * >> isAvgWhole([1, 1, 1]) ➞ true
 * >> isAvgWhole([9, 2, 2, 5]) ➞ false
 */
function isAvgWhole(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i])
    }
    var avg = sum / arr.length;
    console.log(avg)
    return avg % 2 === 0 || avg % 1 === 0
}

var array2 = [5, 2, 3, 2, 4, 2];
// console.log(array2)
//console.log(isAvgWhole(array2));
/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */
function sortDrinksByPrice(arr) {
    return arr.sort(function (a, b) {
        return a.price - b.price
    })
}

var item1 = {
    name: 'lime',
    price: 20
}
var item2 = {
    name: 'lemon',
    price: 12
}
var item3 = {
    name: 'pecan',
    price: 25
}
var item4 = {
    name: 'apple',
    price: 30
}
var item5 = {
    name: 'cherry',
    price: 27
}


someArr2 = [item1, item2, item3, item4, item5]
//console.log(sortDrinksByPrice(someArr2));
/**
 * Scrabble Hand
 * Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
 *
 * Here's an example hand:
 *
 * [
 *      { tile: "N", score: 1 },
 *      { tile: "K", score: 5 },
 *      { tile: "Z", score: 10 },
 *      { tile: "X", score: 8 },
 *      { tile: "D", score: 2 },
 *      { tile: "A", score: 1 },
 *      { tile: "E", score: 1 }
 * ]
 *
 * The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
 *
 * Examples
 *
 * >> maximumScore([
 *      { tile: "N", score: 1 },
 *      { tile: "K", score: 5 },
 *      { tile: "Z", score: 10 },
 *      { tile: "X", score: 8 },
 *      { tile: "D", score: 2 },
 *      { tile: "A", score: 1 },
 *      { tile: "E", score: 1 }
 *    ]) ➞ 28
 *
 * >> maximumScore([
 *      { tile: "B", score: 2 },
 *      { tile: "V", score: 4 },
 *      { tile: "F", score: 4 },
 *      { tile: "U", score: 1 },
 *      { tile: "D", score: 2 },
 *      { tile: "O", score: 1 },
 *      { tile: "U", score: 1 }
 *    ]) ➞ 15
 *
 * Notes
 * Each tile is represented as an object with two keys: tile and score.
 */

var maximumScore = ([
    {tile: "B", score: 2},
    {tile: "V", score: 4},
    {tile: "F", score: 4},
    {tile: "U", score: 1},
    {tile: "D", score: 2},
    {tile: "O", score: 1},
    {tile: "U", score: 1}
])
var tiles = [
    {
        tile: 'A',
        score: 1
    },
    {
        tile: 'B',
        score: 2
    },
    {
        tile: 'C',
        score: 3
    },
    {
        tile: 'D',
        score: 4
    },
    {
        tile: 'E',
        score: 5
    },
    {
        tile: 'F',
        score: 6
    },
    {
        tile: 'G',
        score: 7
    }

]

function maxScore(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i].score
    }
    return total;
}

// console.log(maxScore(tiles));
//console.log(maxScore(maximumScore));

/**
 * Converting Objects to Arrays
 * Write a function named toArray that converts an object into an array, where each element represents a key-value pair in the form of an array.
 *
 * Examples
 *
 * >> toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
 * >> toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
 * >> toArray({}) ➞ []
 *
 * Notes
 * Return an empty array if the object is empty.
 */


/**
 * Array of Multiples
 * Create a function named arrayOfMultiples that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
 *
 * Examples
 *
 * >> arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 * >> arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 * >> arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 *
 * Notes
 * Notice that num is also included in the returned array.
 */
function arrayOfMultiples(num, len) {
    var arr = []
    for (var i = 1; i <= len; i++) {
        var total = num * [i]
        arr.push(total);
    }
    return arr;
}

//console.log(arrayOfMultiples(7, 5));
/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

var people = ([
    {name: "John", age: 21, budget: 29000},
    {name: "Steve", age: 32, budget: 32000},
    {name: "Martin", age: 16, budget: 1600}
])


function getBudgets(items) {
    var total = 0
    for (let i = 0; i < items.length; i++) {
        total = total + items[i].budget
    }
    return total
}

//console.log(getBudgets(people));
/**
 * Special Arrays
 * An array is special if every even index contains an even number and every odd index contains an odd number.
 * Create a function named isSpecialArray that returns true if an array is special, and false otherwise.
 *
 * Examples
 *
 * >> isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
 *    // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
 * >> isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
 *    // Index 2 has an odd number 9.
 * >> isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
 *    // Index 3 has an even number 8.
 */

var arr = [2, 7, 4, 9, 6, 1, 6, 3];

function isSpecialArray(input) {
    var specialArray = []
    for (var i = 0; i < input.length; i++) {
        specialArray.push(input[i] % 2 === 0);


    }
    console.log(specialArray)
}

//isSpecialArray(arr);
/**
 * Remove Duplicates from an Array
 * Create a function named removeDuplicates that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
 *
 * Examples
 * >> removeDuplicates([1, 0, 1, 0]) ➞ [1, 0]
 * >> removeDuplicates(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
 * >> removeDuplicates(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
 *
 * Notes
 * Tests contain arrays with both strings and numbers.
 * Tests are case sensitive.
 * Each array item is unique.
 */

var someArray = [1, 0, 1, 0, 5, 7, 7];

function removeDuplicates(array) {
    var arr = []
    return array.filter(function (item) {
        return arr.hasOwnProperty(item) ? false : (arr[item] = true)
    })
}

//console.log(removeDuplicates(someArray));

/**
 * Lowercase and Uppercase Map
 * Create a function named mapping that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
 *
 * Examples
 *
 * >> mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
 * >> mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
 * >> mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
 *
 * Notes
 * All of the letters in the input list will always be lowercase.
 */
function mapping(input) {
    var data = ''
    var obj = {}

    for (var i = 0; i < input.length; i++) {
        var lowerCaseInput = input[i].toLowerCase()
        var upperCaseInput = input[i].toUpperCase()
        data += lowerCaseInput + ': ' + upperCaseInput + ', '
    }
    obj.body = data
    return obj
}
var testArr = ['A', 'b', 'c', 'x', 'y', 'z']
//console.log(mapping(testArr));

/**
 * Can You Spare a Square?
 * Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?
 *
 * Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
 *
 * Create a function named tpChecker that will receive an object with two key/values:
 *
 *   people — Number of people in the household.
 *   tp — Number of rolls.
 *
 * Return a statement telling the user if they need to buy more TP!
 *
 * Examples
 *
 * >> tpChecker({ people: 4, tp: 1 }) ➞ "Your TP will only last 2 days, buy more!"
 * >> tpChecker({ people: 3, tp: 20 }) ➞ "Your TP will last 58 days, no need to panic!"
 * >> tpChecker({ people: 4, tp: 12 }) ➞ "Your TP will last 26 days, no need to panic!"
 */
function tpChecker(arg) {
    var newTp = arg.tp * 500
    var peopleUsedTp = arg.people * 57
    var tpLastsHowManyDays = Math.round(newTp / peopleUsedTp)
    if (tpLastsHowManyDays < 10) {
        return 'Your tp will only last ' + tpLastsHowManyDays + ' more days, buy more now!'
    } else {
        return 'Your tp will last ' + tpLastsHowManyDays + ' more days, no need to get more'
    }
}

var tpObj = {
    people: 10,
    tp: 10
}
console.log(tpChecker(tpObj));

//* Get Student Top Notes
//* Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
//* If the student does not have notes then let's assume their top note is equal to 0.

//* Examples

var studentTopNotes = [
    {
        id: 1,
        name: "Jacek",
        notes: [5, 3, 4, 2, 5, 7]
    },
    {
        id: 2,
        name: "Ewa",
        notes: [2, 3, 3, 3, 2, 5]
    },
    {
        id: 3,
        name: "Zygmunt",
        notes: [2, 2, 4, 4, 3, 3]
    }
]

function getStudentsTopNotes(arg) {
    var topNote = []
    for (var i = 0; i < arg.length; i++) {
        var notes = arg[i].notes
        topNote.push(Math.max(...notes))
        //console.log(topNote)
    }
    return topNote
}

console.log(getStudentsTopNotes(studentTopNotes));


// * The Frugal Gentleman
// * Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
// *
// * Given an array of wine objects, write a function named chosenWine that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.
// *
// * Examples
// *
var chosenWine = ([
    {name: "Wine A", price: 8.99},
    {name: "Wine 32", price: 13.99},
    {name: "Wine 9", price: 10.99}
])
var testWine = ([
    {name: 'horid wine', price: 32.75}
])
//"Wine 9"
// * >> chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
// * >> chosenWine([]) ➞ null
// *
// * Notes
// * All wines will be different prices, so there is no confusion in the ordering.
// */

function secondMax(arr) {
    if(arr === undefined) return null

    var array = []
    for (var i = 0; i < arr.length; i++) {
        if(arr.length === 1) return arr[i].price
        var price = arr[i].price
        array.unshift(price)
    }
    var max = Math.max.apply(null, array)
    array.splice(array.indexOf(max), 1)
    return Math.max.apply(null, array)
}

console.log(secondMax(chosenWine));

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 */
function addressToObject(str) {
    var split = str.split(' ')
    for (var i = 0; i < split.length; i++) {
        var newStreetNum = {'streetNumber': split[0], 'streetName': split[1] + ' ' + split[2]}
    }
    return newStreetNum
}

//console.log(addressToObject('123 sunny lane'));
/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */


var totalPets = ([
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
])

function totalPet(arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i].pets)
        sum = sum + arr[i].pets
    }
    return sum
}

//console.log(totalPet(totalPets));