let employees = [
    {name:"Esther",hourlyRate:"20",hoursWorked:"50"},
    {name:"Alejandra",hourlyRate:"17",hoursWorked:"40"},
    {name:"Mauro",hourlyRate:"40",hoursWorked:"80"},
];

function calculateBasePay(rate,hours) {
    return rate * hours 
}
console.log(calculateBasePay(30,40))