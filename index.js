// let a = setTimeout(() => {
//     alert("please suscribe");
// }, 5000);
// clearTimeout(a);
// let a = setInterval(() => {
//     alert("please suscribe");
// },5000);
// clearInterval(a);

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   resolve("foo");
//     reject('foo');
//     }, 3000);
//   });
//   myPromise.then((resolve)=>{
//     console.log(resolve);
//   }).catch((error)=>{
//     console.log(error);
//   });

// promise.all()
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo');
// // reject(23);
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// }).catch((error)=>{
//     console.log(error);
// });

// promise.allSettled()

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'foo'));
// const promises = [promise1, promise2];

// Promise.allSettled(promises).
//   then((results) => results.forEach((result) => console.log(result.status)));

//   const promise1 = Promise.resolve(3);
//   const promise2 = 42;
//   const promise3 = new Promise((resolve, reject) => {
//   //   setTimeout(resolve, 100, 'foo');
//   reject(23);
//   });
  
//   Promise.allSettled([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
//   }).catch((error)=>{
//       console.log(error);
//   }); 

//promise.any()

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve,reject) => setTimeout(reject, 1000, 'quick'));
// const promise3 = new Promise((resolve,reject) => setTimeout(reject, 5000, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value)).catch((error)=>console.log(error));

// const promise1 = Promise.reject(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 1000, 'foo');
// reject(23);
// });

// Promise.any([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// }).catch((error)=>{
//     console.log(error);
// });

//promise.race()

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//   }).catch((error)=> console.log(Error));


// const promise1 = Promise.reject(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
// //   setTimeout(resolve, 1000, 'foo');
// reject(23);
// });

// Promise.race([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// }).catch((error)=>{
//     console.log(error);
// });


// const getRollNo = ()=>{
//   setTimeout(()=>{
//      console.log("API getting roll no");
//      let roll_no = [1,2,3,4,5];
//      console.log(roll_no);
//   setTimeout((rollno)=>{
//      const biodata = {
//         name:'vinod',
//         age:26
//     }
//     console.log(`My roll no is ${rollno}.My name is ${biodata.name} and I am ${biodata.age} years old`);
//   setTimeout((name) => {
//     biodata.gender = 'male';
//     console.log(`My roll no is ${rollno}.My name is ${biodata.name} and I am ${biodata.age} years old and I am ${biodata.gender}`);
//   },2000,biodata.name);  
//   },2000,roll_no[2])   
//   },2000);
// }
// getRollNo();