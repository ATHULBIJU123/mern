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
    console.log("type of name : ")
}