/*
 তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে।
সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। 
 array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
*/

var students = ['rudra', 'kabya', 'sraoshi', 'mitu','rimpi']

const lengthOfArray=students.length;
students[4]='debjani';

console.log(lengthOfArray);
console.log(students);
students.push('koushik','chinki');
console.log(students);

students.pop();
console.log(students);

