function maxF(a, b, c) {
        let mult;
        let sum;
        mult = a*b*c;
        sum = a + b + c;

        if (mult > sum)
        return(mult + 3);
        if (sum > mult)
        return(sum + 3);
        if (sum == mult)
        return(sum + 3);
}