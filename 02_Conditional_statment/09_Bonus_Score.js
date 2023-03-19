function bonusScore (input) {
    let number = Number(input[0]);
    let bonus = 0;
    
    if (number <= 100) {
        bonus = 5;
    } else if (number <= 1000) { // Имаме условие. Проверили сме ако не е по-малко или равно на 100.
       bonus = 0.20 * number;
    } else { // Всеки друг случай, ако предишните не са вярни.
        bonus = 0.10 * number;
    }

    if (number % 2 === 0) { // модулно деление на 2 за четно число
       bonus = bonus + 1;
    } else if (number % 10 === 5) { // не казваме за всички нечетни, трябва да е нечетно и да завършва на 5. Затова else if
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(number + bonus);
}
bonusScore(["175"]);