const str1 = "The cat is white";
const str2 = "rat eats fish";
const str3 = "Is it ok fishe";
const str4 = `
Hello
good meat
is always good
Hai`;
//Refer regex101.com(regular expression validator)
const regexp1 = /a/;
const result1 = regexp1.test(str1);//Checks if str1 contains letter 'a'
console.log('result1 :',result1);//true

const regexp2 = /A/i;
const result2 = regexp2.test(str1);//Checks if str1 contains letter 'a' and performs case-insensitive search
console.log('result2 :',result2);//true

const regexp3 = /ab/;
const result3 = regexp3.test(str1);//Checks if str1 contains 'ab'
console.log('result3 :',result3);//false

// const regexp4 = /b/;
// const result4 = regexp4.test(str1);//Checks if str1 contains 'b'
// console.log('result4 :',result4);//false


//[] - represents range
const regexp4 = /[crb]a/;
const result4 = regexp4.test(str1);//Checks if str1 contains 'c' 'r' 'b' before 'a'
console.log('result4 :',result4);//true

const regexp5 = /[a-z]a/i;
const result5 = regexp5.test(str1);//Checks if str1 contains any letters in between 'a' to 'z' before a, also represents case insensitive search
console.log('result5 :', result5);//true

const regexp6 = /[a-z0-9]a/i;
const result6 = regexp6.test(str1);//Checks if str1 contains any letters in between 'a' to 'z' or any digits in between 0 to 9 before 'a'
console.log('result6: ', result6);//true


// ^represents start of a string
const regexp7 = /^rat/i;
const result7 = regexp7.test(str2);//Checks if str2 starts with 'rat'
console.log('result7: ', result7);//true

//$ represents end of a string
const regexp8 = /fish$/i;
const result8 = regexp8.test(str2);//Checks if str2 ends with fish" 
console.log("result8 :", result8);//true

const regexp9 = /good/im; //m-flag represents multiline matching 
const result9 = regexp9.test(str4);//Checks if str4 starts with "good" 
console.log("result9 :",result9);//true

const regexp10 = /goods/im; //m-flag represents multiline matching
const result10 = regexp10.test(str4);//Checks if strd ends with "good" 
console.log("result10", result10);//false

const regexp11 = /fishes?/im; //word before ? is optional for matching
const result11 = regexp11.test(str3);//it matches both fishe and fishes, 's' is optional 
console.log('resultll :', result11);//true

const regexp12 = /fish(es)?/im; //() represents groups 
const result12 = regexp12.test(str3);//it matches both fish and fishes, 'es' is optional
console.log("result12", result12);//true

const regexp13 = /fishes*$/i;//The letter before can occur multiple times in a string 
const result13 = regexp13.test(str3);//It matches fishe, fishes, fishesssss.. 
console.log("result13 :",result13);//true

const regexp14 = /fishes+$/i;//The letter before + also can occur multiple times in a string, but atleast one occurence is required 
const result14 =  regexp14.test(str3);// Here it matches fishes, fishesssss...
console.log("result14", result14);//false

const regexp15 = /fish.$/i;//Any character can occur after fish, '.' represents any type of character
const result15 = regexp15.test(str3);//liere it matches fishe, fisha, fishb, fishl, fish2.... but does not matches fish, a character in place of as a sust 
console.log("result15", result15);//true

const regexp16 = /fish.*$/i;
const result16 = regexp16.test(str3);//Here it matches fishe, fishes, fishesss..... 
console.log("result16 :",result16);//true

const str5 = "Hello"

const regexp17 = /[kjm]/i;
const result17 = regexp17.test(str5);//If there is a 'k' or 'j' or 'm' then it will be true
console.log("result17 :",result17);//False

const regexp18 = /[^kjm]/i;
const result18 = regexp18.test(str5);//If there is no 'k' or 'j' or 'm' then it will be true
console.log("result18 :",result18);//true

const regexp19 = /[H+]/i;
const result19 = regexp18.test(str5);//Atleast one 'H' is required
console.log("result19 :",result19);//true

const regexp20 = /O$/i;
const result20 = regexp20.test(str5);//String end with "O"
console.log("result20 :",result20);//true

const regexp21 = /O?$/i;
const result21 = regexp21.test(str5);//"O" in the string ending and it is optional\
console.log("result21 :",result21);//true

//{} - indicates the number of characters, a{2} means "aa", ie 2 * a is required.
const regexp22 = /L{2}o$/i; //'o' should be exactly after between 2 to 4 L's
const result22 = regexp22.test(str5);//
console.log("result22 :",result22);//true

const regexp24 = /L{2,4}o$/i;//"O" should be exactly after betwenn 2 to 4 L's
const result24 = regexp24.test(str5);//
console.log("result24 :",result24);//true

const regexp25 = /HeL{2,4}o$/i;//"o" should be exactly after "He" and also after 2 to 4 L's and 'o' is required at the ending
const result25 = regexp25.test(str5);//
console.log("result25 :",result25);//true

const regexp26 = /HeL{2,}o$/i;//2 or more "L" is required
const result26 = regexp26.test(str5);//
console.log("result26 :",result26);//true

// \ - indicates escape character, usd for matchiong any characters which has special meaning
const regexp27 = /\d/i; //If there is any digits, it will be true, else it will be false
const result27 = regexp27.test(str5);//
console.log("result27 :",result27);//false

const regexp28 = /\D/i; //If there is any non-digits it will be true, if there is only digits it will be false
const result28 = regexp28.test(str5);//
console.log("result28 :",result28);//true

//Suppose we want to match '.' in a string, since '.' has a special meaning in regular expressions it will not work as expected and will match everything

const regexp29 = /./i; //If there is a '.' or anything in the string, it will match and gives true
const result29 = regexp29.test(str5);//
console.log("result29 :",result29);//true

//So we can write it as 
const regexp30 = /\./i; //If there is a '.' in the string it matches, else it will be false
const result30 = regexp30.test(str5);//
console.log("result30 :",result30);//false

//So '\' (backslash) is uded to escape special characters

// console.log("\nData Validation")
// //Data Validation

// //1
// const regexpForDate = /^\d{1,2}-\d{1,2}-\d{4}$/i; //String should start with 1 or 2 digits, then after '-' symbol, then again 1 or 2 digits, after '-', ending should be 4

// //2
// // | - indicates or case 0 | 1 means either 0 or 1 can occur
// const redexpForDate1 = /^([012]?\d|3[01])-([0]\d|[1][012])








