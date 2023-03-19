function shopping(input) {
    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramPametCount = Number(input[3])

    let videoCardsPrice = videoCardsCount * 250;
    let processorsPrice = videoCardsPrice * 0.35 * processorsCount;
    let ramPametPrice = videoCardsPrice * 0.1 * ramPametCount;

    totalPrice = videoCardsPrice + processorsPrice + ramPametPrice;
 
    if (videoCardsCount > processorsCount) {
        totalPrice = totalPrice - totalPrice * 0.15
    }


    if (totalPrice <= budget) {
        let moneyLeft = budget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}
shopping(["900","2","1","3"]);
shopping(["920.45","3","1","1"]);