const findFav = (fav, from) => {
    const res = from.includes (fav)

    if (res) {
        console.log(fav + " exisit in favourtes array")
    } else {
        console.log(fav + " not exisit in favourtes array")
    }
}


const favorite_fruits = ["Mango", "Apple", "Banana"]

findFav("Apple", favorite_fruits)
findFav("lychee", favorite_fruits)
