function minElem(arr) {

let minArray = arr[0];
for (let i = 0; i < arr.length; i++){
    if (minArray > arr[i]){
        minArray = arr[i];
    }
}
return(minArray);
}