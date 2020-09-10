///////////////////////////////// ЗАДАЧА 5///////////////////////////////

const getAllPropValues = function(arr, prop) {
  const velues = [];
  for (const product of products) {
    if (prop in product) {
      velues.push(product[prop]);
    }
  }

  return velues;
};

/*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []


