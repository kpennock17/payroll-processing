//step2
let employees = [
    {name:"Esther",hourlyRate:20, hoursWorked:50},
    {name:"Alejandra",hourlyRate:17, hoursWorked:40},
    {name:"Mauro",hourlyRate:40, hoursWorked:80},
];
//step 3
// I tried to make the hours custom but since assigment said 40 hour limit I did 40
function calculateBasePay(rate,hours) {
    return rate * 40;
}
employees.forEach(emp => {
  let basePay = calculateBasePay(emp.hourlyRate, emp.hoursWorked);
  //console.log(`${emp.name}'s base pay: $${basePay}`);
});
//step 4



function calculateOvertimePay(rate, hours) {
  if (hours > 40) {
    let overtimeHours = hours - 40;
    return overtimeHours * rate * 1.5;}
    return 0; 
}
employees.forEach(emp2 => {
  let overtimePay = calculateOvertimePay(emp2.hourlyRate, emp2.hoursWorked);
  //console.log(`${emp2.name}'s overtime pay is: $${overtimePay}`);
});
//step 5



function calculateTaxes(grossPay){
    return grossPay * .15
}
employees.forEach(emp3 => {
  let basePay = calculateBasePay(emp3.hourlyRate, emp3.hoursWorked);
  let overtimePay = calculateOvertimePay(emp3.hourlyRate, emp3.hoursWorked);
  let grossPay = basePay + overtimePay;
  let taxDeduction = calculateTaxes(grossPay);
  //console.log(`${emp3.name}'s tax deduction is: $${taxDeduction}`);
});
//step 6


function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let taxDeduction = calculateTaxes(grossPay);
    let netPay = grossPay - taxDeduction 
   return {
        name: employee.name,
        basePay:(basePay),
        overtimePay:(overtimePay),
        grossPay:(grossPay),
        netPay:(netPay)
    };
};
const singleEmployee = employees[0];
const payrollResult = processPayroll(singleEmployee);
//console.log(`${payrollResult.name}'s Payroll:
//  Base Pay: $${payrollResult.basePay}
//  Overtime Pay: $${payrollResult.overtimePay}
//  Gross Pay: $${payrollResult.grossPay}
//  Net Pay: $${payrollResult.netPay}`);

//step 7
employees.forEach(employee => {
    const payrollResult = processPayroll(employee);
    console.log(`${payrollResult.name}'s Payroll:
  Base Pay: $${payrollResult.basePay}
  Overtime Pay: $${payrollResult.overtimePay}
  Gross Pay: $${payrollResult.grossPay}
  Net Pay: $${payrollResult.netPay}`);
  });
