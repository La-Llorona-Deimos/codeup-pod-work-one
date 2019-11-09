"use strict";


//Write a JavaScript function that accept a list of country
// names as input and returns the longest country name as output.


/*Implement the function unique_in_order which takes as argument
a sequence and returns a list of items without any elements with
the same value next to each other and preserving the original order of elements.*/

/*for(var j = 0; j < str.length; j++) {
     for (var k = 0; k < newArr.length; k++) {
         if (str[j] === newArr[k]){
             start = true;
         }
     }
     count++;
     if (count == 1 && start == false) {
         newArr.push(str[j]);
     }
 }*/


/*########################################################*/

/*function uniqueInOrder(str){
    //make a new array with commas
    //from codewars: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
    var newArr = str.split('');
    console.log(newArr);
}*/

// function uniqueInOrder(num) {
//     var x,
//         len = num.length,
//         out = [],
//         obj = {};
// console.log(len);
// console.log(out);
// console.log(obj);
//     for (x = 0; x < len; x++) {
//         obj[num[x]] = 0;
//     }
//     for (x in obj) {
//         out.push(x);
//     }
//     return out;
// }
//
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder('ABBCcAD'));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));
// /*###########################################################*/
//
// random number function between a min and max
// function randomIntBetween(min, max) {
//
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// console.log(randomIntBetween(1, 12));
//
// random number function between 0, 1 randomly. Simulating a coin flip
// function coinFlip() {
//     return randomIntBetween(0, 2);
// }
//
// console.log(coinFlip());
//
// random number function "die" that return a random integer between 1 and 20
// function twentySidedDie() {
//     return randomIntBetween(1, 21);
// }

// console.log(twentySidedDie());

/*#############################################*
/
/*Daily Code Workout

# Space Age

Given an age in seconds, calculate how old someone would be on:

    Earth: orbital period 365.25 Earth days, or 31557600 seconds
    Mercury: orbital period 0.2408467 Earth years
    Venus: orbital period 0.61519726 Earth years
    Mars: orbital period 1.8808158 Earth years
    Jupiter: orbital period 11.862615 Earth years
    Saturn: orbital period 29.447498 Earth years
    Uranus: orbital period 84.016846 Earth years
    Neptune: orbital period 164.79132 Earth years

So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.
 */


//make an array of object planets
//set orbital period characteristic
// var planets = [
//     {
//         earth: {
//             orbitalPeriod: 1 //earth year
//         }
//     },
//     {
//         mercury: {
//             orbitalPeriod: 0.2408467 //earth yrs
//         }
//
//     },
//     {
//         venus: {
//             orbitalPeriod: 0.61519726 //earth yrs
//         }
//
//     },
//     {
//         mars: {
//             orbitalPeriod: 0.61519726 //earth yrs
//         }
//
//     },
//     {
//         jupiter: {
//             orbitalPeriod: 1.8808158 //earth yrs
//         }
//
//     },
//     {
//         saturn: {
//             orbitalPeriod: 29.447498 //earth yrs
//         }
//
//     },
//     {
//         uranus: {
//             orbitalPeriod: 84.016846
//         }
//
//     },
//     {
//         neptune: {
//             orbitalPeriod: 164.79132
//         }
//
//     }
// ];
//create a function that retrieves each planets
//when prompted how old you are on what planet
// function findAge() {
//     planets.forEach(function(planet){
//         console.log(planet);
//         for(var i = 0; i < planets.length; i++){
//             console.log(planets[i].orbitalPeriod)
//         }
//
//     });
// }
// // console.log("The orbital year period of Earth is " + planets[0].earth.orbitalPeriod + "! ");
//
// console.log(findAge());
//date is fundamentally specified as the number of milliseconds that have
//elapsed since midnight of january 1, 1970!
//getTime() returns the number of milliseconds between midnight of 01/01/1970
//make a function that calculates age


/*function calculate_age(dob){
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
// pass string into new Date
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
console.log(calculate_age(234135246));*/

//
// var time = new Date().getTime();
// console.log(time);

// var moonLanding = new Date('July 20, 69 00:20:18 GMT+00:00');
//
// // milliseconds since Jan 1, 1970, 00:00:00.000 GMT
// console.log(moonLanding.getTime());


//write an isogram - codewars
//
// var isIsogram = function(word){
//     this.word = word;
//     for (var i = 0; i < this.word.length; i++) {
//         if (this.word[i].toLowerCase() !== this.word[i].toUpperCase() && this.word.toLowerCase().lastIndexOf(this.word[i].toLowerCase()) !== i) {
//
//             return false;
//         }
//     }
//     return true;
// };
// let isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);


// console.log(isIsogram('Dermatoglyphics')); //true
// console.log(isIsogram('isogram')); //true
// console.log(isIsogram('aba')); //false "same chars may not be adjacent"
// console.log(isIsogram('moOse')); //false "same chars may not be same case"
// console.log(isIsogram('isIsogram')); //false
// console.log(isIsogram("")); //true "an empty string is a valid isogram"


//Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times
// you must multiply the digits in num until you reach a single digit.
// function persistence(num) {
//     var times = 0;
//     num = num.toString();
//     while (num.length > 1) {
//         times++;
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
//     return times;
// }
//
// console.log(persistence(39), 3);
// console.log(persistence(4), 0);
// console.log(persistence(25), 2);
// console.log(persistence(999), 4);

//MORE CODE STUFF BELOW

//idea came from code wars
//try ES6 to try and get a little bit ahead

const decodeMorse = (morseCode) => {
    let bucket = [];
    let word = "";


    let ref = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..:",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
        0: "-----"
    };

    let first = morseCode.split('   ');
    first.forEach((f, i) => {
        console.log(i);
        word = "";

        let split = f.split(' ');

        split.forEach((f) => {
            let values = Object.values(ref);
            if (values.includes(f)) {

                let keys = Object.keys(ref);
                let index = values.indexOf(f);

                let letter = keys[index];

                word += letter;
            }
        });

        bucket.push(word)
    });

    let join = bucket.join(" ");
    return join;
    console.log(join)


};

console.log(decodeMorse(".-- --- .-. -..   .-- --- .-. -.."));


// console.log(decodeMorse('a'));

//code wars
// function iqTest(numbers){
//    // i need to be able to differentiate which numbers are evenly divisible by each other
//
//
// }
// console.log(iqTest("2 4 7 8 10")); //3 index
// console.log(iqTest("1 2 2")); //1 index


