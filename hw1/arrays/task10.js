function sortQuick(arr) {

for (let i = 1; i < arr.length; i++){
    const current = arr[i];
    let j = i;
    while (arr[j - 1] > current){
        arr[j] = arr[j - 1];
        j--;
    }
    arr[j] = current;
}
return(arr);
}