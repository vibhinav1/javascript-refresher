let age = 30;
if (true)
    {
   let age = 40;          //defined the age here .(if we used age = 40 only, the result of inside block will be  40 as above )
  console.log('inside 1st code block:', age);
    }

    console.log('outside code block:', age);

//

const age = 30;
if(true){
  const age = 40;
  const name = 'shaun';
  console.log('inside 1st code block: ', age, name);
  if(true){
    const age = 50;
    console.log('inside 2nd code block: ', age);|
  }
}
console.log('outside code block: age, name, test);
