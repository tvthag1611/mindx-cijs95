const findIndexInArray = (arr, value) => {
  // Tìm vị trí của value trong mảng arr
  const index = arr.indexOf(value);
  // Nếu không tìm thấy, trả về "Không tìm thấy"
  if (index === -1) return "Không tìm thấy";
  return index;
};

const objectToString = (object) => {
  // Trả về chuỗi "Bạn {name} {age} tuổi"
  return `Bạn ${object.name} ${object.age} tuổi`;
};
// Export 2 hàm findIndexInArray và objectToString
export { findIndexInArray, objectToString };
