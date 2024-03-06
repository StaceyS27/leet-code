// Roman to Integer

// covert roman numbers, the input string s, into an integer
// roman numerals are usually written from largest to smallest (VII) is 7 
// but if there is a larger number next to the current number (a smaller number) ex: IX, 
// then that usually results in the subtraction of the current number from the next number ex: X(10) - I(1) to give 9 
// so in the solution below, the value of the next character in the string is checked in the map 
// and if it is larger then the curr, the curr will be subtracted from the integer, 
// which is keeping track of the integer being formed with the addition of roman numerals 
// results in the same number ex: IX. I comes before X so integer goes from 0 to -1 then when X is the curr character, and bc it is greater than the next,
// bc there is no next, it is added to integer ex: -1 + 10 = 9 

function romanToInt(s) {
    let integer = 0;

    let map = new Map(
        [["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]]
    )
    
    for(let i=0; i<s.length; i++){                                        // roman numerals are written from largest to smallest 
        let next = s[i+1]                                                 // so if the number next to the current number in the iteration is larger, then subtract it 
        let curr = s[i]

        let nextValue = map.get(next)
        let currValue = map.get(curr)

        if(nextValue>currValue){                                         // could be rewritten as if this line, else integer+=currValue
            integer -= currValue;
            continue
        }

        integer += currValue
    }

    return integer
}


// time complexity - O(n)
    // iterate through the input string of roman numberals (s) once 
// space complexity - O(1)
    // even though a map is used store the values of the different roman numbers
    // its size is not dependent on the input string's size
    // it stays constant no matter how large or small the roman numeral string 's' is 




























var romanToInt = function (s) {
    let map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100],
    ["D", 500], ["M", 1000]])

    let integer = 0;

    for (let i = 0; i < s.length; i++) {
        if ((s[i] === "I" || s[i] === "X" || s[i] === "C") && (s[i + 1] === "V" || s[i + 1] === "X" || s[i + 1] === "L" || s[i + 1] === "C" || s[i + 1] === "D" || s[i + 1] === "M")) {
            let num1 = map.get(s[i + 1]);
            let num2 = map.get(s[i]);
            integer += (num1 - num2);
        } else if ((s[i] === "V" || s[i] === "X" || s[i] === "L" || s[i] === "C" || s[i] === "D" || s[i] === "M") && (s[i - 1] === "I" || s[i - 1] === "X" || s[i - 1] === "C")) {
            continue
        } else {
            integer += (map.get(s[i]))
        }
    }

    return integer
}