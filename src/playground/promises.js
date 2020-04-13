const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Mario',
      age: 23
    });
    reject('Soemething went wrong!');
  }, 2000);
});

console.log('before');

promise.then((data) => {
  console.log(1, data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(('This is my other Promise'));
    }, 2000);
  });
}).then((str) => {
  console.log(('does this run?', str));
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');