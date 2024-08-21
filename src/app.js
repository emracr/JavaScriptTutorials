// let credits = ["Konut Kredisi", "Taşıt Kredisi", "Emlak Kredisi", "Kamu Kredisi", "SGK Kredisi"]

// console.log("<ul>")

// for(let credit of credits)
//     console.log("<li>" + credit + "</ul>")

// console.log("</ul")

let add = (id, ...products) => {
    console.log(id)
    console.log(products)
}

add(874, "Kivi","Kavun","Karpuz")

let cities = ["Mardin", "İstanbul", "Ankara"]

let [city] = cities;

let anyFunction = ([city], number) => {
    console.log(city)
    console.log(number)
}
console.log(city);
anyFunction(cities, 10)

