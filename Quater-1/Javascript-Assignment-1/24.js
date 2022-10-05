const checkColor = () => {
    if (aleinColor === 'green') {
        console.log("Passed the test, you just earned 5 points")
    }
}

let aleinColor = "green";
checkColor()

aleinColor = "red";
checkColor()
