const printMessage = (guest) => {
    for (let i=0; i < guest.length; i++) {
        console.log(`I would like to invite ${guest[i]}, for today dinner.`)
    }
}

const removeUser = (guest, amountnotToremove) => {
    for (let i=guest.length-1; i > amountnotToremove-1; i--) {
        guest.pop();
        console.log(`Appoligies ${guest[i-1]}, we cannot invite you today.`)
    }
}

const removeUser_All = (guest) => {
    for (let i= guest.length-1; i >-1; i--) {
        console.log(`Appoligies ${guest[i]}, we cannot invite you today.`)
        guest.pop();
    }
}

const findIndexOfNC = (param) => {
    return param === "Shaheed";
}

const guest = ["Babar", "Rizwan", "Shaheed", "Asif"]
printMessage(guest)
// Suppose Shaheed cannot come to dinner so i am sending a new invitation and removing shaheed.

const notCommingId = guest.findIndex(findIndexOfNC)
guest[notCommingId] = "Affan"

console.log("\n")
printMessage(guest)

console.log("\n")
console.log("We have now a big table for dinner we can now have more 3 friends.")

guest.splice(Math.round((guest.length - 1) / 2), 0, "Fakhar")
guest.splice(0, 0, "Aamna")
guest.push("Arishfa")

console.log("\n")
printMessage(guest)

console.log("\n")

removeUser(guest, 2)
console.log("\n")

printMessage(guest)
console.log("\n")

removeUser_All(guest)
console.log(guest)

