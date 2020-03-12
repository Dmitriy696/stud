function rating(mark) {

        if (mark >= 0 && mark <= 19)
        return('Оценка: F');
        if (mark >= 20 && mark <= 39)
        return('Оценка: E');
        if (mark >= 40 && mark <= 59)
        return('Оценка: D');
        if (mark >= 60 && mark <= 74)
        return('Оценка: C');
        if (mark >= 75 && mark <= 89)
        return('Оценка: B');
        if (mark >=90 && mark <= 100)
        return('Оценка: A');
        if (mark < 0 || mark > 100)
        return('Рейтенговая оценка введена неправильно!');
}