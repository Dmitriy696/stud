function indMax(arr) {
let maxArray = arr[0];
let indMax = 0;
    
for (let i = 0; i < arr.length; i++){
    if (maxArray < arr[i]){
        maxArray = arr[i];
        indMax = i;
    }
}
return(indMax);
}