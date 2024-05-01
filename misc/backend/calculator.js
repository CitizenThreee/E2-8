function Sum(args){
    let sum = 0; 

    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }

    return sum;
}

function Sub(args){
    let sub = 0;

    for(let i = 0; i < args.length; i++){
        sub -= args[i];
    }

    return sub;
}

function Div(args){
    let div = args[0];

    for(let i = 1; i < args.length; i++){
        div /= args[i];
    }

    return div;
}

function Mul(args){
    let mul = args[0];

    for(let i = 1; i < args.length; i++){
        mul *= args[i];
    }

    return mul;
}

function Dif(a, b){
    let dif = 0; 

    for(let i = 0; i < args.length; i++){
        sum -= args[i];
    }

    return dif;
}

console.log(Mul([4, 6, 1, 7]));

