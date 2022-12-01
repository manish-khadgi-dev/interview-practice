const arrayOfSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

const array1 = [1, 4, 9, 16];

const newArr = (e) => {
  let count = 0;
  for (let x = 0; x < arrayOfSheep.length; x++) {
    if (arrayOfSheep[x] == false) {
      count++;
    }
  }
  return count;
};

console.log(newArr());

const newArg = array1.map((x) => {
  x * 2;
});

console.log(newArg);
