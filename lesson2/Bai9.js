const groupByName = (arr) => {
  const output = {};
  arr.forEach((item) => {
    if (!output[item.name]) {
      output[item.name] = [item];
    } else {
      output[item.name].push(item);
    }
  });
  return output;
};

const employees = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
  { id: 4, name: "John", salary: 2200 },
];

console.log(groupByName(employees));
