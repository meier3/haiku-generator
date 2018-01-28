let syllable = require('syllable');
const words = require('categorized-words');
/*

N	noun	47004
V	verb	31232
A	adjective	14903
I	interjection	188
C	conjunction/preposition	139
P	pronoun	78
S	spoken contraction	9
Total of all classes	93553

*/

let line1;
let line2;
let line3;
let testNoun;
let testVerb;
let testAdj;
let testCon;
let startType;
let startArr = [['N',47004],['A',14903],['I',188],['C',139],['P',78],['V',31232];


/* N=0,A=1,I=2,C=3,P=4*/
startType = getRandomInt(0,4);


let sylCt = 0;

while(sylCt !=5){

    testNoun = words.startArr[startType][getRandomInt(0,47004)];
    testVerb = words.V[getRandomInt(0,31232)];
    line1 = testNoun+" "+testVerb;
    sylCt = syllable(line1);

}


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




console.log(line1+"\n"+line2+"\n"+line3);




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
