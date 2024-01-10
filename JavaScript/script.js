console.log("Hello World, frm ext JS");

// Comments

    //Single Line Comment

    /*
    This is
    a multiline
    comment
    */

//Variables
//Variables is simply a name of Storage Location
var a;  //Variable Declaration, var - Variable Scope
a=10;   //Variable Intialization

//Rules for variable declaration
/*
1.Name must start with a letter (a to z or A to Z), UnderScore(_) or Dollar($) Sign
2.After first letter, we can use digits.
3.Case Sensitive ('A' and 'a' are treated differently)
*/

    //Variable Scopes
    //Global(function) Scope
    {
        //Can be declared multiple times in a program
        //Not a Block Scope
        //Hoisted
        var a;
        // a=12;
        a=10;
        console.log("a : ",a);//Var can be declared at both inside and outside of block.
    }
    var d;
    d=20;
    console.log("d:value of d is ",d);
    
    //Block Scope
    // {} - Block
{
    //let and const are not hoisted
    let b;//Initialization and declaration can be done in two lines
    b = 1;
    console.log("b : ", b); //Gives output, as b is defined inside the block, const variables only can be accessed inside the block 

    const c = 10;
    console.log("c : ", c); //Gives output, c is not defined, const variables cannot be accessed outside the block    // a=12;
}

{
    let b;
    b = 20;
    console.log("b : ", b); //Gives output, as b is defined inside the block.
    const c = 1000;
    console.log("c : ", c); //Gives output, as c is defined inside the block.
}

//Window
console.log("window:",window);
window.console.log("Hello world");

var fruit="apple"; //Corrupts window object
console.log("window.fruit:",window.fruit);

//Doesn't corrupt window object
let vehicle="bike";
console.log("window.vehicle:",window.vehicle);
const place = "Ernakulam";
console.log("window.place:",window.place);


{
  //Datatype

    //String(Sequence of characters) (Strings are immutable)
    let name = 'John';
    console.log("name: ",name);
    console.log("type of name : ",typeof(name));

    //Number (Represents Numerical Values)
    let num=100;
    console.log("num: ",num);
    console.log("num : ---",typeof(num))

    //Boolean values (Either true or false)
    let boolTrue = true;
    console.log("booltrue:",boolTrue);
    console.log("type of booltrue :  ", typeof(boolTrue));

    let boolFalse = false;
    console.log('type of boolFalse : ', typeof(boolFalse));

    //Undefined(Represents undefined value)
    let varUndefined = undefined;
    console.log("varUndefined: - ", varUndefined);
    console.log('type of varUndefined : ', typeof(varUndefined));

    let x;
    console.log("x : ",x);

    //Null(Represents no value at all)
    let varNull = null;
    console.log("varNull: - ", varNull);
    console.log("type of varNull :  ", typeof(varNull));

}


{
//Javascript String Methods
    let str = "Hello";
    console.log("str:",str);

    let stringLength = str.length;//Finds the lenght of String
    console.log("stringLength:",stringLength);

    let strToUpperCase = str.toUpperCase();//Converts all letters in strigng to uppercase
    console.log("strToUpperCase :",strToUpperCase);

    let strToLowerCase = str.toLowerCase();//Check caps of words
    console.log("strToLowerCase:",strToLowerCase);

    let trimmedString = str.trim();//Removes spaces from left and right
    console.log("trimmedString : ", trimmedString);
    console.log("trimmedString length: ", trimmedString.length);

    let leftTrimmedString = str.trimLeft();//trimEnd
    console.log("leftTrimmedString : ", leftTrimmedString);
    console.log("leftTrimmedString length: ", leftTrimmedString.length);

    let rightTrimmedString = str.trimRight();//trimEnd
    console.log("rightTrimmedString : ", rightTrimmedString);
    console.log("rightTrimmedString length: ", rightTrimmedString.length);

    let subString = str.substring(1,3);
    console.log("subString : ", subString);

    let replacedString = str.replace("lo","iw")
    console.log("replacedString : ", replacedString);

    console.log("Is string starts with h or not?", str.startsWith('H'));
    console.log("Is string ends with o or not?", str.endsWith('o'));

    let splittedString = str.split(',');//Converts string to an array
    console.log("splittedString ; ", splittedString);

    let joinedString = splittedString.join(',');//Converts array to string
    console.log("joinedString : ",joinedString);

}


{
//Operators in JavaScript-----(05-1-24)

    //Arithmetic Operators

    //  ++ -> add 1
    //  -- -> subs 1

    //PreIncrement  - increments and returns value.
    let a =10;
    let PreIncrement = ++a;
    console.log("PreIncrement : ", PreIncrement);

    //PostIncrement - increments, but doesn't returns value
    let b=20;
    let PostIncrement = b++;
    console.log("PostIncrement : ", PostIncrement);

    //PreDecrement  - decrements and returns value.
    let c = 30;
    let PreDecrement = --c;
    console.log("PreDecrement : ", PreDecrement);

    //PostDecrement - decrements, but doesn't returns value
    let d= 40;
    let PostDecrement = d--;
    console.log("PostDecrement : ", PostDecrement);

    let x = 100;
    console.log("x:",x);

    let y = 200;
    console.log("y:",y);

    x=x+y
    console.log("x:",x);

    x=x-y;
    console.log("x:",x);

    x=y/x;
    console.log("x1:",x);

    x=y%x;
    console.log("x1:",x);

    x=x*y;
    console.log("x:",x);
    
    x=x**y;
    console.log("x:",x);

//Assignment Operators
    console.log("Assignment Operators");
    x=y;
    console.log("x:",x);

    x+=y;//x=x+y
    console.log("x1:",x);

    x-=y;//x=x-y
    console.log("x2:",x);

    x*=y;//x=x*y
    console.log("x3:",x);

    x/=y;//x=x/y
    console.log("x4:",x);

}


{
//Comparison Operators
    console.log("Comparison Operators");

    let a=10;
    let b=11;

    console.log("a == b : ",a==b);
    console.log("a !=b : ",a !=b);
    console.log("a === b : ",a===b);//Check both value and datatype, true if both type and value are same
    console.log("a !==b : ",a!==b);//Checks both value and datatype, true if type or value is same
    console.log("a < b : ",a<b);
    console.log("a > b : ",a>b);
    console.log("a <= b : ",a<=b);//true if a<b or a=b
    console.log("a >= b :",a>=b);//true if a>b or a=b


    //Ternary Operator
    let age = 10;
    age>18?console.log("Allowed"):console.log("Not Allowed");

    //Logical Operator
    let hasPassport = true;
    let hasId = false;

    console.log("Logical AND");
    age>18 && hasPassport && hasId?console.log("Allow"):console.log("Not Allowed");

    console.log("Logical OR")
    age>18 || hasPassport || hasId?console.log("Allow"):console.log("Not Allowed");

    console.log("!hasPassport : ", !hasPassport);

    //Concatenation
    let val1 = "10"
    let val2 = "20"
    console.log("val1+val2 : ", val1+val2);

    let val3 = "Hello";
    let val4 = "World";
    console.log("val3 + val4:", val3 + val4);

}

{
    // Arrays(06-01-24)
    //Arrays are variable which can hold more than one value amd the values in an array is stored in continuous memory locations. 
    let a=10;//variable
    let arr = [10,20,"hello",true,false,undefined,null];//Array
    console.log("array : ",arr);

    //Array Methods
    let fruits = ["Apple","Orange","Grapes","Jackfruit","Pappaya","Pineapple"];
    console.log("fruits : ", fruits);
    
    let apple = fruits[0];
    console.log(apple);

    let pappaya = fruits[4];
    console.log(pappaya);

    let Pineapple = fruits.at(5) //Another method using .at to print element
    console.log(Pineapple);


    let noOfFruits = fruits.length; //Finds the number of elements in an array
    console.log(noOfFruits);

    let fruitsString = fruits.join(' '); //Converts Array to String
    console.log("Array to String : ",fruitsString);

    let grapeIndex = fruits.indexOf('Grapes'); //Finds index number of an element
    console.log("grapeIndex : ",grapeIndex);

    fruits.push("Greenapple"); //Adds element to the end of an Array
    console.log("fruits : ", fruits);

    fruits.unshift("Strawberry"); //Adds element to the start of an array
    console.log('fruits : ', fruits);

    fruits.pop(); //Removes element from the end of an array
    console.log("fruits : ", fruits);

    fruits.shift(); //Removes from the start of an array
    console.log("fruits : ",fruits);

    //Replacing elements in an array
    fruits[3] = "Watermelon";
    console.log("fruits : ",fruits);
    
    //Splice
    fruits.splice(1,0,"Blueberry");
    console.log("fruits : ",fruits);

}


console.log("Objects")
{
    //7-01-2024
    
    let arr = ["John",18,70];

    //Objects (Important!!)
    //A Javascript object is an entity stored as key value pairs
    let details = {
        name : "John",  //name, age and mark are key values
        age : 18,
        mark : 70,
        address : {
            city : "myCity",
            street: "myStreet",
            house: "myHouse",
        },
        hobbies : ["Reading","Games","Hockey"],
    }

    console.log("details : ", details);
    console.log("type of details : ", typeof(details));

    //Acquiring data
    console.log("name : ", details.name);
    console.log("age : ", details.age);
    console.log("mark : ",details.mark);

    //Updating value
    details.age = 30;
    console.log("details : ",details);

    //Adding new key value pairs
    details.country = "America";
    console.log("details : ", details);

    //In arrays, we can also pass another array and object as values
    let fruits = ["Apple","Orange","Grapes","Jackfruit",["Pappaya","Pineapple"],{country : "India", state : "kerala"}];
    console.log("fruits : ",fruits);

    //Template Literals
    let name = "John";  //cut and paste
    console.log(`name : ${name}`);

    //JSON
    //JSON(Javascript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate
    let obj = {
        "fruit" : "Jackfruit",
        "bike" : "Hero Honda",
        "car" : "Suzuki"
    };
    console.log("obj : ", obj);
    console.log("typeof(obj) : ", typeof(obj));
    console.log("fruit : ", obj.fruit);
    console.log("bike : ", obj.bike);
    console.log("car : ", obj.car);

    let data = {
        name : "John",
        email : "john@gmail.com",
        password : "John#123"
    }

    console.log(`data : ${data}`);
    console.log(`typeof(data) : ${typeof(data)}`);

    //Converting javascript object to JSON
    let jsonData = JSON.stringify(data);
    console.log(`jsonData : ${jsonData}`);
    console.log(`typeof(jsonData) : ${typeof(jsonData)}`);

    //Parsing JSON
    let parsedJsonData = JSON.parse(jsonData);
    console.log(`parsedJsonData : ${parsedJsonData}`)  //
    // console.log("parsedJsonData : ",parsedJsonData)  //Gives output in the console

    console.log(`typeof(parsedJsonData) : ${typeof(parsedJsonData)}`);

}

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
    //10-1-2024
    //Javascript Conditional Statements
    console.log("Javascript Conditional Statements")

    let age =17;

    //(I)if, if-else, if-elseif-else

    if(age >18){
        console.log("Allowed");
    }else{
        console.log("Not Allowed")
    }

    if(age > 18){
        console.log("Allowed");
    }else if(age > 10 && age<18){
        console.log("You are a Kid");
    }else{
        console.log("Not Allowed");
    }
}

{
    let number1 = /*prompt*/("Enter a number"); //Prompt always gives input as string
    let num1=Number(number1); // converting to type as "number"
    console.log("num1 : ", num1);
    console.log("typeof(num1) : ", typeof(num1));

    let number2 = /*prompt*/("Enter another number");
    let num2=Number(number2);
    console.log("num2 : ", num2);
    console.log("typeof(num2) : ", typeof(num2));

    if(num1>num2){
        console.log(`${num1} greater than ${num2}`);
    }else if(num2 > num1){
        console.log(`${num2} greater than ${num1}`);
    }else if(num1 === num2) {
        console.log('Both are equal')
    }else {
        console.log('Invalid Number');
    }
}

{
    //(II)Switch Statement
    let day = Number(/*prompt*/("Enter a number for a day"));

    switch(day){
        case 1 :
            console.log("Monday");
            break;
        case 2 :
            console.log("Tuesday");
            break;
        case 3 :
            console.log("Wednesday");
            break;
        case 4 :
            console.log("Thursday");
            break;
        case 5 :
            console.log("Friday");
            break;
        case 6 :
            console.log("Saturday");
            break;
        case 7 :
            console.log("Sunday");
            break;
        default :
            console.log("Invalid number for day")
    }

    let color = /*prompt*/("Enter a color");

    switch(color) {
        case 'green' :
            console.log("You can go")
            break;
        case 'red' :
            console.log("Stop, you cannot go");
            break;
        case 'yellow' :
            console.log("Slow Down!, wait for some time");
            break;
        default :
            console.log("Invalid traffic light color")
    }
}