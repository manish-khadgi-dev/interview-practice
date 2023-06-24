// const arrayOfSheep = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// const array1 = [1, 4, 9, 16, 1];
// const newA = () => {
//   let sum = 0;
//   for (let i = 0; i < array1.length; i++) {
//     sum += array1[i];
//   }
//   return sum;
// };
// console.log(newA());

// const newArr = (e) => {
//   let count = 0;
//   for (let x = 0; x < arrayOfSheep.length; x++) {
//     if (arrayOfSheep[x] == false) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(newArr());

// const newArg = array1.map((x) => {
//   x * 2;
// });

// console.log(newArg);

// const newArr = () => {
//   str = "I love arrays they are my favorite";
//   return str.split(" ");
// };

// console.log(newArr());

// const isAnagram = () => {
//   s = "caat";
//   t = "taca";
//   sSorted = s.split("").sort().join();

//   tSorted = s.split("").sort().join();
//   if (sSorted === tSorted) {
//     return true;
//   }
// };
// console.log(isAnagram());

const isAnagram = () => {
  s = "canat";
  t = "tkcak";

  if (s.length !== t.length) return false;
  const sCount = {};
  const tCount = {};

  const Nlen = s.length;
  for (let i = 0; i < Nlen; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0;
    if (!tCount[t[i]]) tCount[t[i]] = 0;
    sCount[s[i]]++;
    tCount[s[i]]++;
  }
  console.log(sCount, tCount);

  for (let ch in sCount) {
    if (sCount[ch] !== tCount[ch]) return false;
  }
  return true;
};
console.log(isAnagram());
