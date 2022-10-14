function add() {
    console.log("added to database")
}

let addFunction = () => {
    add()
}

addFunction()


let product1 = {productName: "Mouse", quantity: 1, price: 150}
let product2 = {productName: "Keyboard", quantity: 1, price: 150}

product1 = product2
product2.productName = "Motherboard"


console.log(product1.productName);


//Rest Operator
function sum(...numbers) {
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    console.log(total);
}

sum(10,24,78,22)

//Spread
let numbers = [12, 58, 40, 98, 311]
console.log(...numbers)

//Destructuring
let regions = [
    {name: "Marmara", population: "30M"},
    {name: "Akdeniz", population: "20M"},
    {name: "Karadeniz", population: "5M"},
]

let [marmara, akdeniz, karadeniz] = regions

console.log(marmara)
console.log(akdeniz)
console.log(karadeniz)

let product3 = {productName: "Lenovo Ideapad Gaming 3", quantity: 1, price: 13000}

let {productName, quantity, price} = product3
console.log(productName);
console.log(quantity);
console.log(price);