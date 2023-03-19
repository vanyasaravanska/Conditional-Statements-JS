function time15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes + 15;

    let finalHours = Math.floor(totalMinutes / 60);
    let finalMinutes = totalMinutes % 60; // za da vidim ostataka


    if (finalHours === 24) {
        finalHours = 0;
    }

    if (finalMinutes < 10) {
        console.log(`${finalHours}:0${finalMinutes}`)
    } else {
        console.log(`${finalHours}:${finalMinutes}`)
    }
}
time15Minutes(["23", "55"])