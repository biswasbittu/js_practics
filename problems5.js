/*
তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? 
তাহলে তুমি সেই কোড করে ফেলো 
*/

let num=[23,90,50,444,267,18,60,50,35,60,430,650,280]
// console.log(num.length)

for(i=0;i<num.length;i++){
    let element=num[i];
    // console.log(element);
    
    if(element>80){
        // console.log('The number that gratterthan 80 is:',element);
        console.log(element);
    }
}

