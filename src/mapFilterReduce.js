let cart = [
    {id: 1, productName: "Lenovo Ideapad Gaming 3", quantity: 1, unitPrice: 13000},
    {id: 2, productName: "Samsung Galaxy A20", quantity: 1, unitPrice: 4000},
    {id: 3, productName: "Yüzüklerin Efendisi Yüzük Kardeşliği", quantity: 1, unitPrice: 100},
    {id: 4, productName: "Logitech M170 Mouse", quantity: 1, unitPrice: 110},
    {id: 5, productName: "Samsung SSD", quantity: 1, unitPrice: 2000},
]

cart.map(item => {
    console.log(item);
})

//filter result a new reference accourred (very important)
let priceMoreThanTwoThousand = cart.filter(item => item.unitPrice > 2000)
console.log(priceMoreThanTwoThousand)

//accumulator as acc, 0 is start value to acc
let total = cart.reduce((acc, item) => acc + item.unitPrice, 0)
console.log("Total price: " + total)