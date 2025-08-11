//TASK NUMBER 1

const lowest = [167, 190, 120, 165, 137, 272];

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
const minimum = getMin(lowest);
console.log("min number is", minimum);


// TASK NUMBER 2

const names = ["rahim", "robin", "rafi", "roni", "rashed", "abdulbarik", "raj"];
 function smallName(yourNames) {
    let minName = yourNames[0];
    for ( const name of yourNames){
        if ( name.length < minName.length){
           minName = name; 
        }
    }
    return minName;
 }
 const smlName = smallName(names);
 console.log("small name is", smlName);



 // TASK NUMBER 3
const prodacts = [
{ name: "laptop", Price: 35000, quantity: 2},
{ name: "tablet", Price: 15000, quantity: 5},
{ name: "mobile", Price: 20000, quantity: 3},
]
function cardTotal(prodacts){
  let sum = 0;
  for ( const prodact of prodacts){
    const thisProdactCost = prodact.Price * prodact.quantity;
    sum =  sum + thisProdactCost;
  }
  return sum;
}
const shippingCast = cardTotal(prodacts);
console.log("Pockat thaka jabea aj", shippingCast);


// task number 4
 const phones = [
   { model: "PhoneA", brand: "Iphone", price: 95000 },
   { model: "PhoneB", brand: "Samsung", price: 40000 },
   { model: "PhoneC", brand: "Oppo", price: 26000 },
   { model: "PhoneD", brand: "Nokia", price: 35000 },
   { model: "PhoneE", brand: "Iphone", price: 105000 },
   { model: "PhoneF", brand: "HTC", price: 48000 },
 ];

 function findAveragePhonePrice(phones) {
   let sum = 0;
   for (const phone of phones) {
     sum = sum + phone.price;
   }
   console.log(phones.length);
   return sum / phones.length;
 }
 const average = findAveragePhonePrice(phones);
 console.log("average phone price is", average.toFixed(2), "TK");

 //Task number 5 (Hard)

  const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
  ];
  function salaryCalculator(employees) {
    let sum = 0;
    for (const employee of employees) {
      let parsonTotalSalary =
        employee.experience * employee.increment + employee.starting;
      sum = sum + parsonTotalSalary;
    }
    return sum;
  }

  const totalSalary = salaryCalculator(employees);
  console.log("Total payout par mounth", totalSalary, "taka only");

  console.log(`Total payout per month: ${totalSalary} taka only`);

