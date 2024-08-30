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

///
// callbacks & foreach (same as above just )
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
const logPerson = (person, index) => {
  console.log(${index} - hello ${person}`);
};
people.forEach (logPerson);
