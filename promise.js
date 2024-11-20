

const getData = new Promise((resolve, reject) => {
  // resolve(4555);
  

  const num = Math.random()*10;
  console.log(num);
  if (num < 7){
    resolve(4555);
  }
  else{
    reject('No data Available');
  }
})

getData
  .then(data => console.log(data + 34))
  .catch(err => console.error('ERR', err)
  )