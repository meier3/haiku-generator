let syllable = require('syllable');
const words = require('categorized-words');

<<<<<<< HEAD
<<<<<<< HEAD
console.log(syllable('we\'ve'));


client.search('aardvark');
=======
=======



>>>>>>> ab7caca7195fc47be3eddbf1b13d9c59f766be2b
/*

N	noun	47004
V	verb	31232
A	adjective	14903
I	interjection	188
C	conjunction/preposition	139
P	pronoun	78
S	spoken contraction	9
Total of all classes	93553

 google_image.search([query],[top_n_count],[callback])
*/

let line1;
let line2;
let line3;
let testNoun;
let testVerb;
let testAdj;
let testCon;
let searchWord;


let sylCt = 0;

while(sylCt !=5){

    testNoun = words.N[getRandomInt(0,47004)];
    testVerb = words.V[getRandomInt(0,31232)];
    line1 = testNoun+" "+testVerb;
    sylCt = syllable(line1);

}
searchWord = testNoun;

while(sylCt !=7){

    testAdj = words.A[getRandomInt(0,14903)]
    testNoun = words.N[getRandomInt(0,47004)];
    testCon = words.I[getRandomInt(0,188)];
    line2 = testAdj+" "+testNoun+" "+testCon;
    sylCt = syllable(line2);
}


while(sylCt!=5){
    testNoun = words.N[getRandomInt(0,47004)];
    testVerb = words.V[getRandomInt(0,31232)];
    line3 = testVerb+" "+testNoun;
    sylCt = syllable(line3);

}





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
>>>>>>> 09e8559ce40ea3a915c0e5ddb106267226c91a54
