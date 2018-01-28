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

let line1,line2,line3; //lines in haiku
let word1,word2,word3,word4,word5,word6,word7; //words in haiku
let currentType,nextType,nextType2; //integer values representing pos
let randNext; //randomly generated number to determine next pos
let posArr = [words.N,words.A,words.I,words.C,words.P,words.V];
let posNext = [[5,5,3,3],[0,0,0,0],[0,1,3,4],[0,1,4,5],[0,1,3,5],[0,0,4,4]]; //pos of speech that can follow each pos in posArr
let posNumArr = [46990,14889,180,134,78,31213]; //number of words for each pos in posArr

//generates pos for line1
currentType = getRandomInt(0,4);
console.log(currentType);
randNext = getRandomInt(0,3);
nextType = posNext[currentType][randNext];
console.log(nextType);

let sylCt = 0; //syllable count

//generates words for line1
while(sylCt !=5){
    word1 = posArr[currentType][getRandomInt(0,posNumArr[currentType])];
    word2 = posArr[nextType][getRandomInt(0,posNumArr[nextType])];
    line1 = word1+" "+word2;
    sylCt = syllable(line1);
}

//generates pos for line2 words 1 and 2
randNext = getRandomInt(0,3);
currentType = posNext[nextType][randNext];
console.log(currentType);
randNext = getRandomInt(0,3);
nextType = posNext[currentType][randNext];
console.log(nextType);

//generates pos for line2 word3
randNext = getRandomInt(0,3);
nextType2 = posNext[nextType][randNext];
console.log(nextType2);

//generates words for line2
while(sylCt !=7){
    word3 = posArr[currentType][getRandomInt(0,posNumArr[currentType])];
    word4 = posArr[nextType][getRandomInt(0,posNumArr[nextType])];
    word5 = posArr[nextType2][getRandomInt(0,posNumArr[nextType2])];
    line2 = word3 +" "+ word4 +" "+ word5 ;
    sylCt = syllable(line2);
}

//generates pos for line3
randNext = getRandomInt(0,3);
currentType = posNext[nextType2][randNext];
console.log(currentType);
randNext = getRandomInt(0,3);
nextType = posNext[currentType][randNext];
console.log(nextType);

//generates words for line3
while(sylCt !=5){
    word6 = posArr[currentType][getRandomInt(0,posNumArr[currentType])];
    word7 = posArr[nextType][getRandomInt(0,posNumArr[nextType])];
    line3 = word6 +" "+ word7;
    sylCt = syllable(line3);

}

//displays haiku
console.log(line1+"\n"+line2+"\n"+line3);

//takes in min and max and generates random value
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
