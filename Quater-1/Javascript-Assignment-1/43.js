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

const mgician = ["Wahaj", "xyz", "yyyy"];

const greatMgcian = mgicianPrint(mgician);

show_magician(mgician)
show_magician(greatMgcian)