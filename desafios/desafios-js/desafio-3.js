let correct = false;

do {
   let userName = prompt('Your name is...');
   if (isNaN(userName)) {
      alert('Hi ' + userName + '!');
      correct = true;
      break;
   }else {
      alert('Enter a valid name');
   }
}while(!correct);