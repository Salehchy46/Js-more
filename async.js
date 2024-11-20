console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
setTimeout(doSomething, 5000);//5000 is set time as mili second; it can be an arrow function also

function doSomething(){
  console.log('Lazy dog');
}

let num = 0;
const intervalId = setInterval(() => {
  console.log(num++)
}, 3000)