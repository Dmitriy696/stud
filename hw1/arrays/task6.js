function rev(arr) {
let q = arr.length;
for(let i = 0, j = arr.length - 1; i < j; i++, j--){
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
return(arr);
}
