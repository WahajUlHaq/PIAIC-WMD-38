const checkUserNames = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.includes(arr2[i])) {
            console.log("You cannot add " + arr2[i] + " this name already exist")
        } else {
            console.log("You can add " + arr2[i] + " this name dont exist")
        }
    }
}   

const lowerCase = (arr) => {
    let lc = arr.map(item => {
    return item.toLowerCase();
  });

  return lc;
}

const array = ["Wahaj", "Afan", "Ammar"]
const newUser = ["Wahaj", "Arham", "Ammar"]

checkUserNames(lowerCase(array), lowerCase(newUser))


