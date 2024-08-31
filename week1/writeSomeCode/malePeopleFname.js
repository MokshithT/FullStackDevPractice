const arr=[{
    fName:'Mokshith',
    age:20,
    gender:'male'
},{
    fName:"Sreeja",
    age:20,
    gender:'female'
},{
    fName:"Yaswanth",
    age:21,
    gender:'male'
}]

for(i=0;i<arr.length;i++){
    if(arr[i]['gender']=='male'){
        console.log(arr[i]['fName']);
    }
}