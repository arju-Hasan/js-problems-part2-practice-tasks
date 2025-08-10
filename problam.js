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
