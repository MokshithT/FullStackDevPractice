arr=[1,2,5,7,3,6]

max1=arr[0]
for(i=1;i<arr.length;i++){
    if(arr[i]>max1){
        max1=arr[i]
    }
}
console.log(max1);
