/*
তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। 
তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
*/


var num = 7;
let oddNumber = [];
let evenNumber = [];
while (num <= 19) {
    let number=num;
    if (number % 2 != 0) {

        

        oddNumber.push(number);
    }
    else {
        evenNumber.push(number);
    }

    num++
}
console.log('The odd Number is :', oddNumber);
console.log('This is Even', evenNumber);