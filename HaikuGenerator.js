let syllable = require('syllable');
const words = require('categorized-words');
//let Scraper = require('images-scraper');
//let bing = new Scraper.Bing();
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
//let url = "http://31.media.tumblr.com/27b422302aeacaca02ef9f4e6e0b77e9/tumblr_mq3ib2U7u71s1u8odo2_r1_1280.gif";
let sylNum = 0;
let currentType; //integer values representing pos
let randNext; //randomly generated number to determine next pos
let posArr = [words.N,words.A,words.I,words.C,words.P,words.V];
let posNext = [[5,5,3,3],[0,0,0,0],[0,4,3,1],[0,5,4,1],[0,5,3,1],[0,4,0,4]]; //pos of speech that can follow each pos in posArr
let posNumArr = [words.N.length,words.A.length,words.I.length,words.C.length,words.P.length,words.V.length]; //number of words for each pos in posArr
let sylCt = 0; //syllable count


//generates pos for line1
async function main(){
    currentType = getRandomInt(0,4);
    do{
        sylNum=0;
        word = posArr[currentType][getRandomInt(0,posNumArr[currentType])];
        sylNum = syllable(word);
    }while(sylNum>5);
    l1.push(word);
    sylNum=0;
    sylNum+=syllable(l1[0]);

    l1 = l1.concat(makeline(5,3));
    l2 = makeline(7,3);
    l3 = makeline(5,3);

    console.log(printLine(l1));
    console.log(printLine(l2));
    console.log(printLine(l3));
    //getImageUrl("banana");
    //await sleep(1000);
    //console.log(url);


    document.getElementById("line1").innerHTML = printLine(l1);
    document.getElementById("line2").innerHTML = printLine(l2);
    document.getElementById("line3").innerHTML = printLine(l3);

    //document.getElementById("image").src = url;
}


function makeline(syl,max) {
  let r = [];
  while(sylNum<syl){
    randNext = getRandomInt(0,max);
    currentType = posNext[currentType][randNext];
    do{
      word = (posArr[currentType][getRandomInt(0,posNumArr[currentType])]);
      newSyl = syllable(word);
    }while((newSyl+sylNum)>syl);
    if ((newSyl+sylNum)==syl) {
      if (currentType!=1&&currentType!=3&&currentType!=4) {
        r.push(word);
        sylNum+=newSyl;
      }
    }
    else {
      r.push(word);
      sylNum+=newSyl;
    }

  };
  sylNum = 0;
  return r;
}

function printLine(line){
  let str="";
  for(let i = 0; i < line.length; i++)
    str = str + line[i] + '&ensp;&ensp;&ensp;';
  console.log(str);
  return str;
}

function getImageUrl(word){

    bing.list({
        keyword: word,
        num: 1,
        detail: true
    })
    .then(function (res) {
        res.forEach(function(item){
            //console.log("In function "+item.url);
            url = item.url;
            //console.log("URL: "+url);
        });
        //console.log(res);

    }).catch(function(err) {
        console.log('err',err);
    })

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//takes in min and max and generates random value
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

main();
