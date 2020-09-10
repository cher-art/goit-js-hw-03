// //////////ЗАДАЧА 3//////////////
const findBestEmployee = function(employees) {
  const values = Object.values(employees);

 const max = Math.max(...values);
 const indexMax = values.indexOf(max);
 const keyEmployee = Object.keys(employees);

 return keyEmployee[indexMax];
};


/*
* Вызовы функции для проверки работоспособности твоей реализации.
*/
console.log(
 findBestEmployee({
   ann: 29,
   david: 35,
   helen: 1,
   lorence: 99,
 }),
); // lorence

console.log(
 findBestEmployee({
   poly: 12,
   mango: 17,
   ajax: 4,
 }),
); // mango

console.log(
 findBestEmployee({
   lux: 147,
   david: 21,
   kiwi: 19,
   chelsy: 38,
 }),
); // lux
