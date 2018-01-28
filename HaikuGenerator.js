let syllable = require('syllable');
const words = require('categorized-words');
/*

N	noun
V	verb
A	adjective
I	interjection
C	conjunction/preposition
P	pronoun
S	spoken contraction
Total of all classes

*/

let line1,line2,line3; //lines in haiku
let l1 = [];
let l2 = [];
let l3 = [];
let word;
let keyword;
let sylNum = 0;
let currentType; //integer values representing pos
let randNext; //randomly generated number to determine next pos
let posArr = [words.N,words.A,words.I,words.C,words.P,words.V];
let posNext = [[5,5,3,3],[0,0,0,0],[0,4,3,1],[0,5,4,1],[0,5,3,1],[0,4,0,4]]; //pos of speech that can follow each pos in posArr
let posNumArr = [words.N.length,words.A.length,words.I.length,words.C.length,words.P.length,words.V.length]; //number of words for each pos in posArr
let sylCt = 0; //syllable count


//generates pos for line1
/////////////////////////TO DO: FIX THOSE YOUNG LONG SYLLABLE WORDS
currentType = getRandomInt(0,4);
l1.push(posArr[currentType][getRandomInt(0,posNumArr[currentType])]);
sylNum+=syllable(l1[0]);

l1 = l1.concat(makeline(5,3));
l2 = makeline(7,3);
l3 = makeline(5,1);

console.log(printLine(l1));
console.log(printLine(l2));
console.log(printLine(l3));

document.getElementById("line1").innerHTML = printLine(l1);
document.getElementById("line2").innerHTML = printLine(l2);
document.getElementById("line3").innerHTML = printLine(l3);

function makeline(syl,max) {
  let r = [];
  while(sylNum<syl){
    randNext = getRandomInt(0,max);
    currentType = posNext[currentType][randNext];
    do{
      word = (posArr[currentType][getRandomInt(0,posNumArr[currentType])]);
      newSyl = syllable(word);
    }while((newSyl+sylNum)>syl); 
    if (currentType=0) //keyword = last noun
      keyword=word;
    r.push(word);
    sylNum+=newSyl;
  };
  sylNum = 0;
  return r;
}

function printLine(line){
  let str="";
  for(let i = 0; i < line.length; i++)
    str += line[i]+" ";
  return str;
}

//takes in min and max and generates random value
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
