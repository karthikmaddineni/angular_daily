const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 75000,
    stock: 10,
    rating: 4.5
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 40000,
    stock: 0,
    rating: 4.2
  },
  {
    id: 3,
    name: "Book",
    category: "Education",
    price: 500,
    stock: 100,
    rating: 4.9
  },
  {
    id: 4,
    name: "Desk Chair",
    category: "Furniture",
    price: 3500,
    stock: 25,
    rating: 4.0
  }
];

// const most_exp=products.reduce((prev,curr)=>{
//     if(curr.price>prev.price){
//         return curr
//     }else{
//         return prev
//     }
// })
// console.log(most_exp)

const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    type: "Tablet",
    price: 20,
    stock: 50,
    expiryDate: "2026-12-31"
  },
  {
    id: 2,
    name: "Cough Syrup",
    type: "Syrup",
    price: 60,
    stock: 0,
    expiryDate: "2025-06-30"
  },
  {
    id: 3,
    name: "Ibuprofen",
    type: "Tablet",
    price: 25,
    stock: 100,
    expiryDate: "2024-11-15"
  },
  {
    id: 4,
    name: "Antacid",
    type: "Tablet",
    price: 10,
    stock: 200,
    expiryDate: "2027-01-01"
  }
];

const exp_date = new Date("2025-07-08");
const non_exp=[]

for(i of medicines){
    
    if(new Date(i.expiryDate) > exp_date){
        console.log(i.expiryDate)
        non_exp.push(i)
    }
}
console.log(non_exp)

const expiringSoon = medicines.filter(med => new Date(med.expiryDate) < exp_date);

console.log(expiringSoon);

const students = [
  {
    id: 1,
    name: "Alice",
    age: 20,
    grade: "A",
    marks: 85,
    enrolled: true
  },
  {
    id: 2,
    name: "Bob",
    age: 22,
    grade: "B",
    marks: 70,
    enrolled: false
  },
  {
    id: 3,
    name: "Charlie",
    age: 19,
    grade: "A",
    marks: 90,
    enrolled: true
  },
  {
    id: 4,
    name: "David",
    age: 21,
    grade: "C",
    marks: 60,
    enrolled: true
  },
  {
    id: 5,
    name: "Eva",
    age: 20,
    grade: "B",
    marks: 75,
    enrolled: false
  }
];

a={}
for(i of students){
    if(i.grade in a){
        a[i.grade]=a[i.grade]+1
    }else{
        a[i.grade]=1
    }
}
console.log(a);


const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 190, change: -1.2, volume: 1500000 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 2700, change: +12.5, volume: 800000 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 700, change: +5.0, volume: 2000000 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 3300, change: -8.3, volume: 600000 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 310, change: +2.0, volume: 1000000 }
];
const profit=[]
const loose=[]
for(i of stocks){
    if(i.change>0){
        profit.push(i)
    }
    else{
        loose.push(i)
    }
    
}
// console.log('profit stocks',profit)
// console.log('loose stocks',loose)

