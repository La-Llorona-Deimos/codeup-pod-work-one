(function () {
    "use strict";
    // https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
    // Implement a function likes :: [String] -> String, which must take in input array,
    // containing the names of people who like an item.
    // It must return the display text as shown in the examples:
    // 0 like = no one likes this
    // 1 likes= ...likes this
    // 2 likes= ... and ... likes this
    // 3 likes= ..., ... and ... like this
    // 4+ likes= ..., ... and # others like this

//     function likes(names) {
//         if (names.length === 0) {
//             return "no one likes this";
//         } else if (names.length === 1) {
//             return names[0] + " likes this";
//         } else if (names.length === 2) {
//             return names[0] + " and " + names[1] + " like this";
//         } else if (names.length === 3) {
//             return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//         } else if (names.length > 3) {
//             return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
//         }
//     }
//
//     console.log(likes([]), 'no one likes this');
//     console.log(likes(['Peter']), 'Peter likes this');
//     console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
//     console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
//     console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//
//
//
//
//
//
// //coffee objects
//
//     var coffees = [
//         {
//             name: "Inza #2",
//             roaster: "Flat Track",
//             country: "Columbia",
//             region: "South America",
//             altitude: 1800,
//             price: 18.00,
//             process: "washed",
//             notes: ["plum", "caramel", "black cherry"]
//         },
//         {
//             name: "Chirinos",
//             roaster: "Wild Gift",
//             country: "Peru",
//             region: "South America",
//             altitude: 1700,
//             price: 16.00,
//             process: "washed",
//             notes: ["plum", "Sugar", "apple"]
//         },
//         {
//             name: "Finca De Dios",
//             roaster: "Madcap",
//             country: "Guatemala",
//             region: "Central America",
//             altitude: 1750,
//             price: 18.00,
//             process: "washed",
//             notes: ["lime", "peach", "cardamom"]
//         },
//         {
//             name: "Chelba",
//             roaster: "Cat and Cloud",
//             country: "Ethiopia",
//             region: "Africa",
//             altitude: 1900,
//             price: 17.50,
//             process: "Natural",
//             notes: ["blueberry", "chocolate", "port sweetness"]
//         },
//         {
//             name: "Worka Sakaro",
//             roaster: "Heart",
//             country: "Ethiopia",
//             region: "Africa",
//             altitude: 2100,
//             price: 19.00,
//             process: "washed",
//             notes: ["mango", "currant", "brown sugar"]
//         },
//     ];
//
//
//     function showCoffeeInfo(coffee, i) {
//         var output = "";
//         output += "#" + (i + 1) + "\n";
//         output += "Name: " + coffee.name + "\n";
//         output += "Roaster: " + coffee.roaster + "\n";
//         output += "Country: " + coffee.country + "\n";
//         output += "Region: " + coffee.region + "\n";
//         output += "Altitude: " + coffee.altitude + "\n";
//         output += "Price: " + coffee.price + "\n";
//         output += "Process: " + coffee.process + "\n";
//         output += "Tasting Notes: " + coffee.notes[0]  + ", " + coffee.notes[1]+ ", " + coffee.notes[2]  + "\n";
//         output += "---";
//         console.log(output);
//     }
//     coffees.forEach(showCoffeeInfo);
//
//     coffees.forEach(function (coffee) {
//     console.log(coffee.name + " cost $" + coffee.price)
// });
//
//     var input = document.getElementById("initial");
//     var submit = document.getElementById("ok");
//     var value = "";
//     var splitted = "";
//     var output = document.getElementById("output");
//
//     submit.addEventListener("click", function() {
//         value = input.value;
//         splitted = value.split("");
//         var lSplitted = splitted.length;
//
//         for (var i = 0; i < lSplitted; i += 2) {
//             splitted[i] = splitted[i].toUpperCase();
//         }
//
//         for (var i = 1; i < lSplitted; i += 3) {
//             splitted[i] = splitted[i].toLowerCase();
//         }
//
//         output.innerHTML = splitted.join('');
//     });


//pyramid
var z = parseInt(prompt("how long would you like your triangle?"));
var x,y,chr;
function pyramid(z) {

for(x=1; x <=z; x++)
{
    for (y=1; y < x; y++)
    {
        chr=chr+("*");
    }
    console.log(chr);
    chr='';
}
}

    console.log(pyramid(z));
})();
