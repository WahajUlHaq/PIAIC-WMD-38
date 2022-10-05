const checkColor = () => {
    if (aleinColor === 'green') {
        console.log("you just earned 5 points")
    } else {
        console.log("you just earned 10 points")
    }
}

let aleinColor = "green";
checkColor()

aleinColor = "red";
checkColor()
