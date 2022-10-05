const sandwich = (...options) => {
    console.log("\nYour Sandwich items are")

    for (let i = 0; i < options.length; i++) {
        console.log(options[i])
    }
}


sandwich("Bread", "Onion")
console.log("------\n")
sandwich("Bread", "Onion", "Ketchup")
console.log("------\n")
sandwich("Bread", "Onion", "Ketchup", "Vegies")

