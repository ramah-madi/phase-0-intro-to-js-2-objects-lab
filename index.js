// Write your solution in this file!
const employee = {};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee,
             [key]:value};
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
      employee[key] = value;
      return employee
};

function deleteFromEmployeeByKey(employee, key) {
    const employeeRemove = { ...employee };
    delete employeeRemove[key];
    return employeeRemove
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};