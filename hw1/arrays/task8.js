function swapF(arr) {
    let element;
    let x = (arr.length)/2 + (arr.length)%2;
    x = Math.floor(x);
    for (let i = 0; i < Math.floor(arr.length/2); i++){
        element = arr[i];
        arr[i] = arr[x + i];
        arr[x + i] = element;
    }
    return(arr);
}