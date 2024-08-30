// callbacks & foreach
let people ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
people.forEach(function(){
  console.log('something');
});

//
// callbacks & foreach in array calling callback function
!
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
people.forEach(function(person) {
  console.log('something');
});
