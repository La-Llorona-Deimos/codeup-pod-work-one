"use strict";

// Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabet_order(str)
{
    return str.split('').sort().join('');
}
console.log(alphabet_order("little puppy dog"));

//I got this from W3Resources

///Mr. despair wants to jump off Dutch act, So he came to the top of a building.
//
// Scientific research shows that a man jumped from the top of the roof,
// when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6,
// the person will not immediately die, he would scream. (without proof).

//Mr. despair jumped from the 2 floor, the voice is "Aa~"
//He fell on the ground, the voice is "Pa!"
//He did not die immediately, and the final voice was "Aa!"

//if floor<=1, Mr. despair is safe, return ""
function willManDie(floor){
    if(floor === 1){
        return "No harm done."
    } else if (floor <= 6){
        return "AHHH! MY LEGS!!"
    } else {
        return "Instant death."
    }
}

console.log(willManDie(4));


//I got this problem from CodeWars



//Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.

