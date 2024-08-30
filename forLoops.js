// for loops
// for(let i = 0; i < 5; i++){
// console.log('in loop:', i);
// }
// console.log('loop finished');
const names = ['shaun', 'mario', 'luigi'];
for(let i = 0; i < names.length; i++){
  //console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}


//
const bill = function (products, tax){
  let total 0;
            -
  for(let i = 0; i < products.length; i++){
! total += products[i] + products[i] * tax;
  }
  return total;
}
console.log(bill([10,15,30], 0.2));
