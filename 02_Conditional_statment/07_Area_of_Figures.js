function areaOfFigures(input){
    let type = input[0];
    let x = Number(input[1]);
    let y = Number(input[2])

    if (type === "square") {
        let result = x * x;
        console.log(result.toFixed(3))
    } else if (type === "rectangle") {
       let result = x * y;
       console.log(result.toFixed(3));
    } else if (type === "circle") {
        let result = Math.PI * Math.pow(x, 2);
        console.log(result.toFixed(3))
    } else {
        let result= x * y / 2;
        console.log(result.toFixed(3))
    }
}
areaOfFigures(["triangle","4.5","20"])