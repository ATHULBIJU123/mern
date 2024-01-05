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

    //String(Sequence of characters)
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
//Operators -----(05-1-24)

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

}


{
//Assignment Operators
    let x = 100;
    console.log("x:",x)

    let y = 200;
    console.log("y:",y)

    x=y;
    console.log("x:",x)

    x+=y;//x=x+y
    console.log("x:",x)

}


{
//Comparison Operators
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
    console.log("val3 + val4:", val3 + val4)

}