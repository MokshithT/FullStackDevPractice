function sum(a,b,funToCall) {
    let result=a+b
    funToCall(result);
}

function displayResult(data){
    console.log("Result of sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Passive result is : "+data);
}

const num=sum(11,5,displayResultPassive);
