const mappingEmployee = (employees) => {
  return employees.map((employee) => {
    return {
      name: employee.name,
      email: employee.email,
      workInfo: {
        workingDays: employee.workingDays,
        lateDays: employee.lateDays,
      },
    };
  });
};

const employees = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    workingDays: 22,
    lateDays: 2,
    salary: 2000,
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    workingDays: 20,
    lateDays: 0,
    salary: 2500,
  },
  {
    id: 3,
    name: "Mark",
    email: "mark@example.com",
    workingDays: 25,
    lateDays: 1,
    salary: 3000,
  },
];

console.log(mappingEmployee(employees));
