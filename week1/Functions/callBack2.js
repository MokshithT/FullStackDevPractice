function calculateArithmetic(a,b,type) {
    if (type=="sum") {
        return a+b;
    }
    if(type=="minus"){
        return a-b;
    }
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

let x=calculateArithmetic(1,5,'sum')
console.log(x);