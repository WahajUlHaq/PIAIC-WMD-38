const name = "Syed Muhammad Wahaj Ul Haq";
const lowerCase = name.toLowerCase();
const upperCase = name.toUpperCase();
const titleCase = name.toLowerCase().split(" ");

for (let i = 0; i < titleCase.length; i++) {
  titleCase[i] = titleCase[i][0].toUpperCase() + titleCase[i].slice(1);
}

console.log(lowerCase);
console.log(upperCase);
console.log(titleCase.join(" "));
