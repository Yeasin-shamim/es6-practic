const ages = [12,23,12,14,15,34];
const ages2 = [34,12,12,33,22,32];
const ages3 = [34,23,22,43];
const allAges = ages.concat(ages2).concat([2,3]).concat(ages3);

const allAges2 = [...ages, ...ages2, 2,...ages3];

// console.log(allAges2);

const takaPoisa = [650,340,233.77];
const maximum = Math.max(...takaPoisa);
console.log( maximum);