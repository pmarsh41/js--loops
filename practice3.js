/**
 * use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

// var arrayOfNumber = [1, 2, 3, 4]
// var total = 1;

// for (var i = 0; i < arrayOfNumber.length; i++) {

//     total *= arrayOfNumber[i]

// }

function forEach(array, callback) { //array must be passed an array type and callback must be passed an array type
    "use strict"


    for (var i = 0; i < array.length; i++) {
        // code goes here
        // do shit x amount  of times
        callback(array[i])

    }

}

var arrayOfNumber = [1, 2, 3, 4]
var total = 1;


forEach(arrayOfNumber, function(a) {
    total *= a;
});

// print(total)

console.assert(24 === total)

////


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum() {
    "use strict";
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var total = 0
    args.forEach(function(number) {
        total += number;

    });
    return total;

}
console.assert(sum(1, 2, 3, 4, 5) === 15);

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average() {
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // add the numbers inside the array
    var total = 0
    args.forEach(function(number) {
        total += number;

    });

    // divide by the amount of numbers in the array (args.length)

    total /= args.length;

    return total;


}

console.assert(average(2, 4, 6, 8) === 5)

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest() {
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE

    var theLargestNumber = 0
    args.forEach(function(number) {

        if (theLargestNumber < number) {
            theLargestNumber = number;
        } else {
            // do nothing

        }

    })
    return theLargestNumber


}

// console.log(largest(2, 4, 6, 8));
console.assert(largest(2, 4, 6, 8) === 8)

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest() {
    "use strict"
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE

    var theLargestWord = '';

    args.forEach(function(word) {

        if (word.length > theLargestWord.length) {

            theLargestWord = word;
        }
    });

    return theLargestWord.length;


}

console.assert(longest('the', 'quick', 'brownstone', 'foxy') === 10)

// 5. write a function that can sort an array of Date objects (returns a NEW ARRAY of Date's)

function sort() {
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE

    args.sort(function(a, b) {

        return a - b;


    });
    return args;
}

var dates = [
    new Date("Oct 2, 2015"),
    new Date("Oct 1, 2015"),
    new Date("Jan 2, 2015"),
    new Date("Dec 5, 2014"),
    new Date("Mar 27, 2015")
]

// var sorted = sort(dates[0], dates[1], dates[2], dates[3], dates[4]);
// console.log(sorted)
// console.assert(
//     sorted[0] === dates[3] &&
//     sorted[1] === dates[2] &&
//     sorted[2] === dates[4] &&
//     sorted[3] === dates[1] &&
//     sorted[4] === dates[0]
//)

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

var myColors = ['red', 'blue', 'green', 'purple', 'lavender'];
// var sorted = sort(red[0], blue[1], green[2], purple[3], lavender[4];

myColors.sort(function(a, b) {
    return a.length - b.length;

});

console.log(myColors);
//console.assert ((0, 1, 2, 3, 4) === 4;
//index 4 of myColors array = 'lavender'
console.assert(myColors[4] === 'lavender');


// .concat()


var myName = ["Phil", "Nicole", "Allen", "Alex", "Kristen"];
var myName2 = ["Marshall", "Cano", "Williams", "Allen", "Deans"];
var fullName = myName.concat(myName2);
console.log(fullName);
//index 1 of myname2 array has the shortest length in the array
console.assert(fullName.length === 10);


// .indexOf()

var beatles = ["george", "ringo", "paul", "john", ];
var findb = beatles.indexOf("john");
console.log(findb)
console.assert(findb === 3);

// .split()

var str1 = "I'm tired but must keep going";
var res = str1.split(" ");
console.log(res)
console.assert(res.length < str1.length);

// .join()

var metallica = ["James", "Kirk", "Lars", "Cliff"]
var lineup = metallica.join(" ");
console.log(lineup)
console.assert(lineup.length > metallica.length);
//console.log(metallica.length);
//console.log(lineup.length);

// .pop()

var rhcp = ["anthony", "flea", "chris", "john"]
rhcp.pop();
console.log(rhcp);
///console.assert(rhcp[0].length > undefined);
//console.log(rhcp[4]);
console.assert(rhcp[4]=== undefined);


// .push()
var nirvana = ["Kurt", "Kris", "Dave"];
nirvana.push("Pat");
console.log(nirvana);
console.assert(nirvana[3].length===3);


// .slice()
var wutang = ["methodman", "ghostface", "capadona", "raekwon", "gza", "rza"];
var halfwu = wutang.slice(2, 5);
console.log(halfwu);
console.assert(halfwu[1].length > halfwu[2].length);

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()

/**
 * PART III
 *
 * Fill in the sections below marked 'YOUR CODE HERE'.
 *
 * The code below should find all customers whose first-names start with 'J',
 * map() those people into an array of objects that have a name property:
 *
 * i.e. { name : c.firstname + " " + c.lastname }
 *
 * then sort them alphabetically
 */

// set up arrays
// var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
// var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

// var customers = [{
//     firstname: 'Joe',
//     lastname: 'Blogs'
// }, {
//     firstname: 'John',
//     lastname: 'Smith'
// }, {
//     firstname: 'Dave',
//     lastname: 'Jones'
// }, {
//     firstname: 'Jack',
//     lastname: 'White'
// }];

// console.log(customers);

// var projections = customers
//     .filter(function(c) {
//         // YOUR CODE HERE
//     })
//     .map(function(c) {
//         // YOUR CODE HERE
//     })
//     .sort(sortByName);

// function sortByName(c1, c2) {
//     "use strict";
//     //...
// }

// console.log(projections);
