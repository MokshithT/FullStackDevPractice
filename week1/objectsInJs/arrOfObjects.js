/**
 * creating Array of Objects in js
 */

//synatx:
// const arr=[{,},{,},{,}]

const arr=[{
    fName:'Mokshith',
    age:20
},{
    fName:"Sreeja",
    age:20
},{
    fName:"Yaswanth",
    age:21
}]

for(i=0;i<arr.length;i++){
    if(arr[i]['age']==20){
        console.log(arr[i]['fName']);
        
    }
}