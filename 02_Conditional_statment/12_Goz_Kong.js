function filmMoney(input) {
  let budget = Number(input[0]);
  let statistCount = Number(input[1]);
  let dressFor1stat = Number(input[2])

  let decor = budget * 0.1;
  let dressPrice = statistCount * dressFor1stat;
  if (statistCount > 150) {
    dressPriceDiscount = dressPrice - dressPrice * 0.1;
  } 
  
  let filmCosts = dressPrice + decor;

  if (filmCosts <= budget) {
    let moneyLeft = budget - filmCosts;
    console.log(`Action! Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
  } else {
    let moneyNeeded = filmCosts - budget;
    console.log(`Not enough money! Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)

  }
}
filmMoney(["20000", "120", "55.5"])
filmMoney(["15437.62", "186", "57.99"])
filmMoney(["9587.88", "222", "55.68"])