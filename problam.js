//TASK NUMBER 1
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

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

/*
TASK NUMBER 2
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/
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
//  Your task is to calculate the total budget required to buy electronics:
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



 //TASK MUNMER 4
 /* 
 You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.
  */ 

 const phones = [
   { model: "PhoneA", brand: "Iphone", price: 95000 },
   { model: "PhoneB", brand: "Samsung", price: 40000 },
   { model: "PhoneC", brand: "Oppo", price: 26000 },
   { model: "PhoneD", brand: "Nokia", price: 35000 },
   { model: "PhoneE", brand: "Iphone", price: 105000 },
   { model: "PhoneF", brand: "HTC", price: 48000 },
 ];

 function findAveragePhonePrice(phones){
    let sum =0;
    for ( const phone of phones){
        sum = sum + phone.price
    }
    console.log(phones.length);
    return sum / phones.length;
 }
 const average = findAveragePhonePrice(phones)
console.log("average phone price is" , average.toFixed(2), "TK")