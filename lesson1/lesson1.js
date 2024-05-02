import { findIndexInArray, objectToString } from "./utils.js";

const arr = [10, 20, 30, 40, 50];
const object = {
  name: "Teo",
  age: 10,
};
// Sử dụng 2 hàm findIndexInArray và objectToString
console.log(findIndexInArray(arr, 55));
console.log(objectToString(object));
