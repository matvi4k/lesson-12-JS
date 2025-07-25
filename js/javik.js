// const user = {
//     name: "Matviy",
//     age: 21,
//     hobby:"IT"

// }
// const vipUser = Object.create(user)

// vipUser.weight = 77
// vipUser.iq = 102
// vipUser.id = 77256
// console.log(vipUser.weight)
// console.log(vipUser.id)

// const hasFriends = "friends" in vipUser
// console.log(hasFriends);

// // for (const key in vipUser){
// //     console.log(`${key}: ${vipUser[key]}`)
// // }
// for (const key in vipUser){
//     // console.log(`${key}`)
//     if(vipUser.hasOwnProperty(key)){
// console.log(`${key}: ${vipUser[key]}`)
//     }
// }

// // Object.keys()taForOf
// const keys = Object.keys(vipUser)
// console.log(keys);

// for (const key of keys){
//     console.log(`${key}: ${vipUser[key]}`)
// }

// // Object.values
// const salaries = {
//     Oleg: 1488,
//     Pasha:1007,
//     Yurchik:52,
//     Matviy:1000000
// }
// const saleriArray = Object.values(salaries)
// console.log(saleriArray);
// let allSalaries = 0

// for (const saleri of saleriArray){
//     console.log(`${saleri}`)
// }

const user = {
  hobby: "football",
  premium: false,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = true;
console.log(user);

const keys = Object.keys(user);
for (const key of keys) {
  console.log("Key:", user[key]);
}

// Завдання 2

const counts = {
  house: 2,
  toilet: 3,
  kitchen: 1,
};

const countProps = (obj) => Object.values(obj).length;
console.log(countProps(counts));

// Завдання 3

const workers = {
  Vlad: 3,
  Matviy: 2,
  Nazar: 5,
  Taras: 4,
};

const findBestEmployee = (employees) => {
  let topWorker = '';
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      topWorker = name;
    }
  }

  return topWorker;
};

console.log(findBestEmployee(workers));

// Завдання 4

const salaries = {
  Oleg: 1488,
  Pasha: 1007,
  Yurchik: 52,
  Matviy: 1006,
};

let total = 0;

const countTotalSalary = function (employees) {
  const values = Object.values(employees);

  for (const value of values) {
  total += value;
  }
return console.log(total);
};

countTotalSalary(salaries);

// Завдання 5

const products = [
  { name: "Apple", price: 30, totalCount: 200 },
  { name: "Banana", price: 20, totalCount: 100 },
  { name: "Mango", price: 50, totalCount: 30 },
];




const getAllPropValues = (arr, prop) => {
  const values = [];

  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
};

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "totalCount"));

//Завдання 6

const calculateTotalPrice = (allProducts, productName) => {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
};

console.log(calculateTotalPrice(products, "Apple"));
console.log(calculateTotalPrice(products, "Banana"));
console.log(calculateTotalPrice(products, "Mango"));
