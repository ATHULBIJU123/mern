{
    //Work(08-01-24)
        //Arrays
    let numbers = [1,2,3,4,5];
    console.log(`numbers : ${numbers}`);

    numbers.push(6);
    console.log(`numbers : ${numbers}`);

    numbers.shift();
    console.log(`numbers : ${numbers}`);

    let result =  Array.isArray(numbers);
    console.log("result : ",result);

    let index4 = numbers.indexOf(4);
    console.log("index of 4 : ",index4);

        
        //Objects
    let person = {
        name : "Peter",
        age : 28,
        city : "New Street",
    }
    console.log("person : ",person)

    person.age = 30;
    console.log("person : ",person)
    console.log("age : ",person.age)

    person.gender = "male";
    console.log("person : ",person)

    console.log(Object.hasOwn(person,'country'));

    let address = {
        city : "myCity",
        street : "Street0001",
        house : "Home 101",
    }

    let PersonalDetails ={
        ...person,
        ...address
    }
    console.log("PersonalDetails : ",PersonalDetails)
}

{
    //Work(10-01-2024)

    // Chapter 2
    let age = 1;
    age>10 && age<20? console.log("Age lies between 10 and 20"):console.log("Age doesn't lies between 10 and 20")

    age>18?console.log("You can drive"):console.log("You cannot drive");

    let x = 11
    if (x%2 == 0){
        console.log(`${x} is divisible by 2`);
    }else if (x%3==0){
        console.log(`${x} is divisible by 3`);
    }else {
        console.log(`${x} is not divisible by 2 and 3`);   
    }

    let y = 9;
    if (y%2 == 0 || y%3 == 0){
        console.log(`${y} is divisible by 2 or 3`)
    }else {
        console.log(`${y} is not divisible by 2 or 3`);     
    }

    //Chapter 4
    console.log("har\"".length);

    let str = "HELLO WORLD!";
    let out = str.toLowerCase();
    console.log("out : ",out);
    console.log(str.length);

    let string = "Please give me Rs 1000";
    let amount = string.substring(18);
    console.log("Amount is Rs",amount)
}

