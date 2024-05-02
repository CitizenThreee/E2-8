//This function returns the sum of all values in an array
function Sum(args){
}

if(Sum([6, 2, 7]) != 15){console.log("error")}
if(Sum([3, 5, "8"]) != 16){console.log("error")}
if(Sum([3, -5, 5]) == 3){console.log("sum correct")}
if(Sum([3, "9", 5]) == 17){console.log("sum correct")}

function Sum(args){
    let sum = 0; 

    for(let i = 0; i < args.length; i++){
        sum += Number(args[i]);
    }

    return sum;
}

//This function returns the subraction of two values
function Sub(a, b){
}

if(Sub(-12, 7) != -19){console.log("error")}
if(Sub(26, "25") != 1){console.log("error")}
if(Sub(3, 10) == -7){console.log("sub correct")}
if(Sub(29, "9") == 20){console.log("sub correct")}

function Sub(a, b){
    return Number(a) - Number(b);
}

//This function returns the result of var a divided by var b
function Div(a, b){
}

if(Div(14, 7) != 2){console.log("error")}
if(Div(28, 0) != Infinity){console.log("error")}
if(Div(10, 2.5) == 4){console.log("div correct")}
if(Div(29, "1") == 29){console.log("div correct")}

function Div(a, b){
    return Number(a) / Number(b);
}

//This function returns the result of var a multiplied by var b
function Mul(a, b){
}

if(Mul(4, 8) != 32){console.log("error")}
if(Mul(28, 0) != 0){console.log("error")}
if(Mul(10, 2.5) == 25){console.log("mul correct")}
if(Mul(29, "1") == 29){console.log("mul correct")}

function Mul(a, b){
    return a * b;
}

//This function returns the difference of a and b
function Dif(a, b){
}

if(Dif(4, 8) != 4){console.log("error")}
if(Dif(28, 5) != 23){console.log("error")}
if(Dif(10, 2.5) == 7.5){console.log("dif correct")}
if(Dif(29, 3) == 26){console.log("dif correct")}

function Dif(a, b){
    return a > b ? a - b : b - a;
}

//This function returns the absolute of value (the distance from 0)
function Abs(value){
}

if(Abs(-12) != 12){console.log("error")}
if(Abs(14) != 14){console.log("error")}
if(Abs(10) == 10){console.log("abs correct")}
if(Abs(-1.45) == 1.45){console.log("abs correct")}

function Abs(value) {
    return value < 0 ? -value : value;
}