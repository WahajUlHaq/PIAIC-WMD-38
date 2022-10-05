const mgicianPrint = (arr) => {
  let temp=[];

  for (let i = 0; i < arr.length; i++) {
    temp.push("Great_"+arr[i]);
  }

  return temp;
};

const show_magician = (arr) => { 
  console.log(arr)
}

let mgician = ["Wahaj", "xyz", "yyyy"];
mgician = mgicianPrint(mgician);

show_magician(mgician)