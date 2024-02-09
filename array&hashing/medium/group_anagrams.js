// Group Anagrams

// solved by creating a map where the sorted version of the word would be stored as the key 
// and an array of the words that match that key when sorted will be stored as values 

// ex: when sorted lexicographically (dictionary order), 'eat' and 'tea' are both 'aet'
// 'aet' would be the key and the value with the anagramGroups map will be 'eat' and 'tea'
// {ate => [eat, tea]}

// split method takes the word "eat" and forms an array of individual characters: ["e","a","t"]
// the paramter passed in to split ("") makes it so that the string is split at every character vs " " which would be where there is a space

// sort method takes the array ["e","a","t"] and sorts it in dictionary/lexicographical order ["a","e","t"]

// join method concatenates the elements of an array into a single string, the argument passed determines how the elements eill be seperated (seperator)
// if not specified join() will result in e-a-t. join("") means join with no space betweem the elements of the array 

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

function groupAnagrams(strs) {
    const anagramGroups = new Map;

    for(let i=0; i<strs.length; i++) {
        const word = strs[i];                                   // ex: "eat"

        const sortedWord = word.split("").sort().join("");

        if(anagramGroups.has(sortedWord)) {
            anagramGroups.get(sortedWord).push(word)            // get the value array for that sorted key and push the word(not sorted)
        } else {
            anagramGroups.set(sortedWord, [word])               // set a new key value pair in the map, with the value being an array to push into if need be 
        }
    }

    const result = [];
    for(const group of anagramGroups.values()) {                // for of loop used to iterate through iterate objects such as an array or map
        result.push(group);                                     // anagramGroups.values() | method that returns iterator object (that must be iterated on using for of loop to get values)
                                                                // push the individual value array (gotten when iterated on) to the result array | [] pushing([eat, tea, ate])
    }

    return result 
}

console.log(groupAnagrams(strs))                // [['eat','tea','ate'], ['tan','nat], ['bat]]