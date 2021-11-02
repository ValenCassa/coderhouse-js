let userName = prompt('Your name is...');

if (userName.length > 7) {
    alert('You have a long name');
 }else if (userName.length > 4 && userName.length < 7) {
    alert('Your name has an average lenght');
 }else {
    alert('You have a short name');
 };