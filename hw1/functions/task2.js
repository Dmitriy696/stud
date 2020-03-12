    function numStr(num) {
    let arr = [];
    let tmp;
    let i = 0;
    while (num){
        tmp = num % 10;
        num = (num - tmp)/10;
        arr.push(tmp);
        i++;
    }
    arr.reverse();

    if (i == 1)
        return(Digits(arr[0]));
    if (i == 2)
        return(Tens(arr[0]) + " " + Digits(arr[1]));
    if (i == 3)
        return(Hundreds(arr[0]) + " " + Tens(arr[1]) + " " + Digits(arr[2]));      
    if (i == 1 && arr[0] == 0)
        return('Ноль');
    if (i == 2 && arr[1] == 0)
        return(Tens(arr[0]));
    if (i == 3 && arr[2] == 0)
        return(Hundreds(arr[0]) + " " + Tens(arr[1]));
    if (i == 3 && arr[1] == 0 && arr[2] == 0)
        return(Hundreds(arr[0]));
    if (i == 3 && arr[1] == 0)
        return(Hundreds(arr[0]) + " " + Digits(arr[2]));
    if (i == 2 && arr[0] == 1)
        return(Numbers(arr[1]));
    if (i == 3 && arr[1] == 1)
        return(Hundreds(arr[0]) + " " + Numbers(arr[2]));
}


function Numbers(num)
{
    var number;
    switch(num){
        case 1:
            number = 'Одиннадцать';
            break;
        case 2:
            number = 'Двенадцать';
            break;
        case 3:
            number = 'Тринадцать';
            break;
        case 4:
            number = 'Четарнадцать';
            break;
        case 5:
            number = 'Пятнадцать';
            break;
        case 6:
            number = 'Шестнадцать';
            break;
        case 7:
            number = 'Семьнадцать';
            break;
        case 8:
            number = 'Восемьнадцать';
            break;
        case 9:
            number = 'Девятнадцать';
            break;
    }
    return number;
}
function Digits(num1)
{
    var num;
    switch(num1){
        case 1:
        num = 'Один';
        break;
        case 2:
        num = 'Два';
        break;
        case 3:
        num = 'Три';
        break;
        case 4:
        num = 'Четыре';
        break;
        case 5:
        num = 'Пять';
        break;
        case 6:
        num = 'Шесть';
        break;
        case 7:
        num = 'Семь';
        break;
        case 8:
        num = 'Восемь';
        break;
        case 9:
        num = 'Девять';
        break;
    }
    return num;
}
function Tens(number)
{
    var num;
    switch(number){
        case 2:
        num = 'Двадцать';
        break;
        case 3:
        num = 'Тридцать';
        break;
        case 4:
        num = 'Сорок';
        break;
        case 5:
        num = 'Пятьдесят';
        break;
        case 6:
        num = 'Шестьдесят';
        break;
        case 7:
        num = 'Семьдесят';
        break;
        case 8:
        num = 'Восемьдесят';
        break;
        case 9:
        num = 'Девяносто';
        break;
    }
    return num;   
}
function Hundreds(number)
{
    var num;
    switch(number){
        case 1:
        num = 'Сто';
        break;
        case 2:
        num = 'Двести';
        break;
        case 3:
        num = 'Триста';
        break;
        case 4:
        num = 'Четыреста';
        break;
        case 5:
        num = 'Пятьсот';
        break;
        case 6:
        num = 'Шестьсот';
        break;
        case 7:
        num = 'Семьсот';
        break;
        case 8:
        num = 'Восемьсот';
        break;
        case 9:
        num = 'Девятьсот';
        break;
    }
    return num;   
}