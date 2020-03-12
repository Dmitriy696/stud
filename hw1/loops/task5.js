function myFunc(num) {
        let sum = 0;
        let tmp = 0;
        let q = 0;
        if(num < 0)
        num *= -1;
        while (num){
            tmp = num % 10;
            num = (num - tmp)/10;
            sum += tmp;
            q++;
        }
        sum = Math.round (sum);
        return(sum);
    }