function qunt(arr) {
let t = 0;
for (let i = 0; i < arr.length; i++){
    if(arr[i] < 0)
    arr[i] *= -1;
    if(arr[i] % 2 != 0)
        t++;
}
return(t);
}