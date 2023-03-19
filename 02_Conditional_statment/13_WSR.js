function worldSRecord (input) {
    let recordTime = Number(input[0]); 
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);
    
    let swimmngTime = distance * timePerMeter;

    let delaysCount = Math.floor(distance / 15);
    let delayTime = delaysCount * 12.5;

    let totalTime = swimmngTime + delayTime;

    if (totalTime < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let insSeconds = totalTime - recordTime;
        console.log(`No, he failed! He was ${insSeconds.toFixed(2)} seconds slower.`);
    }

}
worldSRecord(["10464", "1500", "20"])
worldSRecord(["55555.67","3017","5.03"])

