'use strict' 

let username = prompt ('What is your name');
alert('Hello ' + username)
console.log(`Say hey to ${username}`)

function userinput(){
  document.write(`Hi ${username} I had fun playing with you.`)

}
userinput()

let welcome = prompt ('Welcome to my world!!')
console.log('welcome user to Site');

let play = prompt('Ready to Play A Game');
switch(play.toLowerCase())
{
  case 'yes':
    console.log('Lets Play A Game');
    alert('Lets Go Play!!');
    break;
  case 'no':
    alert('Ok Maybe Next Time')
    break;
    default:
    console.log('ok Maybe Next Time');
}

let job = prompt('My first job was at Gamestop');
switch(job.toLowerCase())
{
  case 'yes':
    console.log('Correct');
    alert('Yes Correct Best Job Ever!!');
    break;
  case 'no':
    console.log('Incorrect');
    alert('Incorrect read the Bio again');
    break;
    default:
 alert('Invalid');
}
let age = prompt('I am 35 years old ');
switch(age.toLowerCase())
{
  case 'yes':
    console.log('False');
    alert('No Im not that old!!');
    break;
  case 'no':
    console.log('Exactly thanks for paying attention');
    alert('Exactly thanks for paying attention');
    break;
    default:
    alert('Invalid');
    
}

let Tenn = prompt('I am from Tennesse');
switch(Tenn.toLowerCase())
{ 
  case 'yes':
  console.log('Wrong again');
  alert('Wrong Again I am from Mississippi');
  break;
case 'no':
  console.log('Where are you from');
  alert('I see you read the Bio on my page');
  break;
  default:
    alert('invalid');
}

let family = prompt('Do I have two siblings?');
switch(family.toLowerCase())
{
  case 'yes':
  console.log(`You are Wrong!!`);
  alert('You are Wrong!!');
  break; 
  
  case 'no':
    console.log('Correct I have four beautiful siblings');
    alert('Correct I have four beautiful siblings');
    default:
      console.log(`${username} thanks for stopping by to get to know me.`);
  }

  let guessday = "";
  let i = 0;
  while(guessday !== '3'){
  console.log('guess the day')
  guessday = prompt('Guess what day of june was i born');
  if(guessday < 3){
    alert('too low');
  }else if (guessday > 3){
      alert('too high');
  }else if (guessday ==='3'){
      alert('correct');
   break;
  
   }
 i=i+1;
 if(i===5){
  alert('too many attempts')
  break;
 }
 }

 let userpoints = 0;
 let listofitems = ['strawberries','blueberries','peaches','watermelon'];

 for (let i = 0; i < listofitems.length; i=i+1) {
  console.log(listofitems[i]);
listofitems = prompt('Guess the fruits I like');
if(listofitems === 'strawberries'){
alert('correct');
}else if(listofitems === 'peaches'){
alert('correct');
}else if(listofitems === 'blueberries')
alert('correct');
else if(listofitems ==='watermelon'){
alert('correct');
if (listofitems ==='')
alert('Try again')
break;
  

}

if (i === 6) {
  userPoints++;
} alert('better luck next time');
alert(`you have ${userPoints} points`);
 break;
}
  

  
  
