console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++){
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++){
  let output = "";  
    if (i % 3 == 0) {
        output = "FIZZ";
    } if (i % 5 == 0) {
        output += "BUZZ";
    }
    console.log (output);
   
}

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
// EX 1
for (let i = 1; i < 100; i++)
while (i < 100){
    if (i % 2 !== 0){
        console.log(i);
    }
    i++;
}

let a = 1;
do {
    if (a % 2 !== 0) {
        console.log(a);
    }
    a++;
}while (a < 100);

// EX 2
let i = 1;
while ( i <= 100){
    let output = "";
    if (i % 3 == 0 ) {
        output = "FIZZ";
    }
    if (i % 5 == 0){
        output += "BUZZ"
    }
    console.log(output);
    i++
}

let x = 1;

do {
    let output = "";

    if (x % 3 == 0 ) {
        output = "FIZZ";
    }
    if (x % 5 == 0){
        output += "BUZZ"
    }
    console.log(output);
    x++;

} while (x <= 100);

//Exercise 4
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let found = false;

for(let i = 1; i <= n; i++) {
    if (i == value){
        console.log(`Found ${value}!`);
        break;
    } 
    
    if (i == n) {
        console.log(`Did not find ${value}`);
    }

}