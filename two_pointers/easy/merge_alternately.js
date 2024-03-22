// 1768. Merge Strings Alternately 

// given 2 strings word1 and word2, merge the strings by adding letters alternately
// starting with word1
// if of different lengths, append the remaining letters onto the end of the merged string 

function mergeAlternately(word1, word2) {
    let word1P = 0;
    let word2P = 0;

    let mergedStr = ""

    while (word1P < word1.length && word2P < word2.length) {
        mergedStr += word1[word1P];
        mergedStr += word2[word2P];

        word1P++;
        word2P++;
    }

    if (word1P !== word1.length) {
        for (let i = word1P; i < word1.length; i++) {
            mergedStr += word1[i]
        }
    }

    if (word2P !== word2.length) {
        for (let i = word2P; i < word2.length; i++) {
            mergedStr += word2[i]
        }
    }

    return mergedStr
}