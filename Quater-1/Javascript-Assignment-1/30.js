const greetingMsg = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log("Hello " + arr[i])
    }
}

const users = ["Wahaj", "Dan", "Sam"]

greetingMsg(users)