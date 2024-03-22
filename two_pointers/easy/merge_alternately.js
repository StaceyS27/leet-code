// 1768. Merge Strings Alternately 

// given 2 strings word1 and word2, merge the strings by adding letters alternately
// starting with word1
// if of different lengths, append the remaining letters onto the end of the merged string 

function mergeAlternately(word1, word2) {
    let word1P = 0;                                                     // setting pointers on word1 and word2
    let word2P = 0;

    let mergedStr = ""                                                

    while (word1P < word1.length && word2P < word2.length) {            // while both pointers are still not past the last index for either strings,
        mergedStr += word1[word1P];                                     // can add each character alternately and move both pointers
        mergedStr += word2[word2P];                                     // however, when the either of the pointers are passed the last index, will exit while loop
                                                                        // both statements in while loop have to be true to continue 
        word1P++;                                                       // if not, will exit and which ever string has not been fully iterated through 
        word2P++;                                                       // will be appended to mergedStr using either for loops below                                                 
    }                                                                   // this scenerio will happen when the strings are not of the same length             

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

    return mergedStr;
}

// time complexity - O(max(m, n))
    // this expression above says that the time complexity is Big O of the longer string (lengths of word1 and 2 represented by m and n)
    // this is the case because the 2 strings are iterated thru at the same time 
    // and then if there is a longer string, the iteration continues from where the pointer left off until its iterated thru completely 
        // so not 0(n+m) because its happening at one time ?

// space complexity - O(n + m)
    // where n amd m are the lengths of word1 and word2 respectively 
    // the space occupied by the mergedStr variable is directly related to the summation of the lengths of both word1 and 2 