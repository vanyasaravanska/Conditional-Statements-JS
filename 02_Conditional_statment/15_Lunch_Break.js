function lunchBreak (input){
  let movieName = input[0];
  let episodeDuration = Number(input[1]);
  let breakDuration = Number(input[2]);

  let lunchTime = (1/8)*breakDuration;
  let freeTime = (1/4)*breakDuration;

  let totalTimeNoMovie = lunchTime + freeTime;
  let movieTime = breakDuration - totalTimeNoMovie;

  if (movieTime >= episodeDuration) {
    let timeLeft = Math.ceil(movieTime - episodeDuration)
    console.log(`You have enough time to watch ${movieName} and left with ${timeLeft} minutes free time.`);
  } else {
    let timeNeeded = Math.ceil(episodeDuration - movieTime)
    console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`)
  }
}
lunchBreak(["Game of Thrones","60","96"])
lunchBreak(["Teen Wolf","48","60"])
