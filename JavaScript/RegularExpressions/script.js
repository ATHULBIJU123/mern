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