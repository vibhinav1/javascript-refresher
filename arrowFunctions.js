// practise arrow functions
// const greet = function() {
// return 'hello, world';
// };
// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);
const bill = function (products, tax){
  let total 0;
            -
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
}
