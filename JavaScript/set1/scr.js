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
    console.group("chapter 2")
    let age = 15;
    age>10 && age<20? console.log("Age lies between 10 and 20"):console.log("Age doesn't lies between 10 and 20")

    age>18?console.log("You can drive"):console.log("You cannot drive");

    let x = 12
    if (x%2 == 0 && x%3 == 0){
        console.log(`${x} is divisible by 2 and 3`);
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
    console.log("Chapter 4")
    console.log("har\"".length);

    let str = "HELLO WORLD!";
    let out = str.toLowerCase();
    console.log("out : ",out);
    console.log(str.length);

    let string = "Please give me Rs 1000";
    let amount = string.substring(18);
    console.log("Amount is Rs",amount)
}


{
    let person = {
        "name" : "Alex",
        "age" : "26",
        "address" : "101, myStreet"
    };

    console.log("Person : ",person)
    console.log("type of person : ",typeof(person))
    let jsonPerson = JSON.stringify(person);
    // console.log(`jsonPerson1 : ${jsonPerson}`);
    console.log("jsonPerson : ",jsonPerson);
    console.log(`typeof(jsonPerson) : ${typeof(jsonPerson)}`);

    let parsedJsonPerson = JSON.parse(jsonPerson);
    // console.log(`parsedJsonPerson : ${parsedJsonPerson}`)
    console.log("parsedJsonPerson : ",parsedJsonPerson)
    console.log("type of parsedJsonPerson : ",typeof(parsedJsonPerson))

    person.place ="NewCity"
    console.log("PesonDetails : ",person);
}

{
    let a= 0;
    if (a > 0) {
        console.log("Positive") ;
    } else if (a < 0) {
        console.log("Negative") ;
    } else {
        console.log("Zero") ;
    }
}

{
    let day = String(/*prompt*/("Enter a Day"))
    switch(day){

        case 'Monday' :
            console.log("WeekDay");
            break;
        case 'Tuesday' :
            console.log("WeekDay");
            break;
        case 'Wednesday' :
            console.log("WeekDay");
            break;
        case 'Thursday' :
            console.log("WeekDay");
            break;

        case 'Friday' :
            console.log("WeekEnd");
            break;
        case 'Saturday' :
            console.log("WeekEnd");
            break;
        case "Sunday" :
            console.log("WeekEnd");
            break;
        default :
            console.log("Invalid Day")

    }
}

{   
    let car = [
        {
            make: "Volvo",
            model: "XCL",
            year: "2020",
        },
        // {
        // make: "Ford",
        // model: "Mustang",
        // year: "1989",
        // }
    ]
    console.log(car);
    if(car.year<=1990){
        console.log("Classic Car")
    }else{
        console.log("Modern Car")
    }
}

{   //Calculator
    let num1=3
    let num2=4

    let operator = /*prompt*/("Enter the operator")

    switch(operator){
        case '+' :
            console.log(num1 + num2);
            break;
        case '-' :
            console.log(num1 - num2);
            break;
        case '*' :
            console.log(num1 * num2);
            break;
        case '/' :
            console.log(num1 / num2);
            break;
        default :
            console.log("Enter a proper operator")
    }
}

{
    //isAdmin
    let user = {
        username : "Alan",
        email : "alan@gmail.com",
        isAdmin : true,
    }
    if(user.isAdmin = true){
        console.log("Is an Admin")
    }else{
        console.log("Not an Admin")
    }
}
{
    //student data
    let student = [
        {
            Name : "Alex",
            Age : "22",
            Grade : "35"
        },
        {

        
            Name : "Akhil",
            Age : "23",
            Grade : "60"
        },

        {
            Name : "Ben",
            Age : "24",
            Grade : "80"
        }
    ]

    if(student.Grade > 40 ){
        console.log("Passed Students :", student.Grade)
    }else{
        console.log("FailednStudents :", student.Grade)
    }
}
{
    //list of countries
    let country = [
        {
        "name" : "India",
        "population" : 1000,
        "capital" : "Delhi"
    },
    {
        "name" : "England",
        "population" : 100,
        "capital" : "London"
    }
]
console.log("countrydetails :" ,country);
}
