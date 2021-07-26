const person = {name: 'Jack William', age: 22, job:'facebooker', phone: '01821223223', friends: ['shamim','yeasin']};

// const {phone, job, age,friends} = person;
// console.log(job , phone,age,friends);
// console.log(job, phone, age);

const friends = ['Sakib khan', 'aamir khan', 'banglar khan', 'ami khan', 'tumi khan'];
const [prothom, ...bakiFriend] = friends;
console.log(bakiFriend);