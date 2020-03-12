function sqrt(num) {
if(num < 0)
return("данное число меньше нуля");
let sqrt = 0;
for (let i = 1; i <= num; num -= i, i += 2)
    sqrt++;
    return (sqrt);
}