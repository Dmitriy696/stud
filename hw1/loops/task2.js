function prime(num) {
        if (num <= 1)
        return ('Число не относится ни к простым, ни к не простым');
        let bool = true;
        for (let i = 2; i < num; i++){
            if (num%i == 0)
            bool = false;
        }
        if (bool)
        return ('Число простое');
        if (!bool)
        return ('Число не простое');
    }