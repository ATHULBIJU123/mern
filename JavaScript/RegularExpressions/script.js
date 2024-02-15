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

