const checkColor = () => {
    if (aleinColor === 'green') {
        console.log("you just earned 5 points")
    } else if (aleinColor === 'yellow')  {
        console.log("you just earned 10 points")
    }
    else if (aleinColor === 'red'){
        console.log("you just earned 15 points")
    }
}

let aleinColor = "green";
checkColor()

aleinColor = "yellow";
checkColor()

aleinColor = "red";
checkColor()
