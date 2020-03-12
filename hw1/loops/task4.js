function factorial(num) {
        if(num < 0)
        return("не определён");
        let factorial = 1;
        for (let i = 2; i <= num; i++){
            factorial *= i;
        }
        return(factorial);
    }