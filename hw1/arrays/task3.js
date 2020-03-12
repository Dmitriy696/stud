function indMin(arr) {
let minArray = arr[0];
let indMin = 0;

for (let i = 0; i < arr.length; i++){
    if (minArray > arr[i]) {
        minArray = arr[i];
        indMin = i;
    }
}
return(indMin);
}