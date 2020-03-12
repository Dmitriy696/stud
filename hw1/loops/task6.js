function rvrs(num) {
    num = num.toString();
    let arr = [];
    for(let i = num.length-1; i >= 0; i--){
        arr += num[i];
    }
    return(arr);
}
