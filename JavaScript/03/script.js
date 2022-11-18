let banana = "Banane";
let apple =  " Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let bananaavgPerKilo = 0.34;
let appleavgPerKilo = 0.22;

//Preis von 8 Äpfeln
let appleKiloof8 = 8 * 0.22;
let resultof8 = appleKiloof8 * applePricePerKilo;
console.log("The price of 8 apples is: " + resultof8);

//Preis von 17 Bananen
let bananaKiloof17 = 17 * 0.34;
let resultof17 = bananaKiloof17 * bananaPricePerKilo;
console.log("The price of 17 bananas is: " + resultof17);

//Preis von 1 Tonne Äpfel
let apple1ton = 1000 * 0.22;
let apple1tonprice = apple1ton * 3.43;
console.log("The price of 1 ton apple is: " + apple1tonprice);

//Preis von 1 Tonne Bananen
let banana1ton = 1000 * 0.34;
let banana1tonprice = banana1ton * 2.14;
console.log("The price of 1 ton banana is: " + banana1tonprice);
