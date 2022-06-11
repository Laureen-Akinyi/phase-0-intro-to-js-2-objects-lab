// Write your solution in this file!
var employee = {
    name: "Nyeri",
    streetAddress: 3245,
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let newObject={...employee}
    newObject[key] = value
    return newObject
    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key]=value
     return employee
}
function deleteFromEmployeeByKey(employee, key){
  let newEmployee = {
      ...employee
  }
    delete newEmployee[key]
    return newEmployee

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
  return employee;
}