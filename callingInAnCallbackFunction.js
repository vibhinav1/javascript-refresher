const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html
people.forEach(function(person){
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
