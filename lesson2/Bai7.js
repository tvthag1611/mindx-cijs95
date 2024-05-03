// Cách 1

const findSalaryMax = (arr) => {
  let max = arr[0];
  arr.forEach((item) => {
    if (item.salary > max.salary) {
      max = item;
    }
  });
  return max;
};

// Cách 2

const findSalaryMaxUseReduce = (arr) => {
  return arr.reduce((max, item) => {
    if (item.salary > max.salary) {
      return item;
    }
    return max;
  }, arr[0]);
};

const employees = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
];

console.log(findSalaryMaxUseReduce(employees));
