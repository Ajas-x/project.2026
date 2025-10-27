// function sampleFunction() {
//     age = 20;
//     if (age >= 19) {
//         console.log("he is an adult");
//         console.log("age:", age);
//     }
//     else if (age == 18) {
//         console.log("age is exactly 18");
//         console.log("age:", age);
//     } else {
//         console.log("age is less than 18");
//         console.log("age:", age);
//     }

// }

// sampleFunction();
// let totalMarks = 10;
// markCalculater();
// function markCalculater() {
//     if (totalMarks <= 25) {
//         console.log("Grade D");
//     } else if (totalMarks <= 50) {
//         console.log("Grade C");
//     } else if (totalMarks <= 75) {
//         console.log("Grade B");
//     } else {
//         console.log("Grade A");
//     }
// }

//Loop's in JavaScript
// for (let i = 1; i <= 10; i++) {
//     console.log("5x" + i + "=" + (5 * i));

// }
//Loop to print odd numbers between 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log("this is odd number:", i);
    }
    else {
        console.log("This is even number:", i);
    }
}
// while loop in java script 
let i = 1;
while (i <= 10) {
    if (i % 2 == 0) {
        console.log("even number:", i);
    }
    else {
        console.log("odd number:", i);
    }
    i++;  
}
