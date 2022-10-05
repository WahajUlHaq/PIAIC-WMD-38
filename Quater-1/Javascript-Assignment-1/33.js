const printOrdinal = () => {
    for (let i =1; i <10; i++ ) {
        if (i === 1) {
            console.log ("1st\n")
        }
        else if (i === 2) {
            console.log ("2nd\n")
        }
        else {
            console.log (`${i}th\n`)
        }
    }
}

printOrdinal();