//Promises in JavaScript are a way to handle asynchronous operations. They represent a value that might be available now, or in the future, or never. Promises have three states: pending, fulfilled, or rejected. They are commonly used for handling asynchronous operations such as fetching data from a server, reading a file, or any other task that takes some time to complete.



const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    const isSuccess = Math.random() >= 0.5;
  
    if (isSuccess) {
      // Simulate a successful operation
      const result = 'Success!';
      resolve(result);
    } else {
      // Simulate an error
      const errorReason = 'Error occurred!';
      reject(errorReason);
    }
  });
  
  // Using the promise
  myPromise
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      console.log('Finally block executed regardless of success or error.');
    });
  