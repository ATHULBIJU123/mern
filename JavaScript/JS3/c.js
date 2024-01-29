function miniCalc() {
    let n1 = Number (document.getElementById("num1").value);
    console.log("n1 : ",n1);

    let opr = document.getElementById('opr').value
    console.log("Operator :" ,opr)

    let n2 = Number (document.getElementById("num2").value);
    console.log("n2 : ",n2);

    function add(num1, num2) {
        return num1 + num2;
    }

    function sub(num1, num2) {
        return num1 - num2;
    }

    function mult(num1, num2) {
        return num1 * num2;
    }

    function div(num1, num2) {
        return num1 / num2;
    }

    function calc(n1, opr, n2) {
        switch (opr) {
            case '+' :
                return add(num1, num2);
            case '-':
                return sub(num1, num2);
            case '*':
                return mult(num1, num2);
            case '/':
                return div(num1, num2);
            default:
                return "Invalid operator";
        }
    }

    let output = calc(opr, num1, num2);
    console.log("result: ", output);

}