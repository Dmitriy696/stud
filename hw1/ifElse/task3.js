function sumF(a, b, c) {
        let sum = 0;

        if (a > 0)
        sum += a;
        if (b > 0)
        sum += b;
        if (c > 0)
        sum += c;
        if (sum > 0)
        return (sum);
        if (a == 0 && b == 0 && c == 0)
        return ('All numbers are zero!');
        if (a < 0 && b < 0 && c < 0)
        return ('All numbers are negative!');
}