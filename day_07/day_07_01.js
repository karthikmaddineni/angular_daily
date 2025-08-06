let cars=['tata','mahindra','maruti','toyota'];
//for-loop
for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}
console.log('---===----');
//for-in
for(i in cars){
    console.log(cars[i],i);
}
console.log('---===----');
//for-of
for(i of cars){
    console.log(i)
}
console.log('---===----');
//forEach()
cars.forEach((a,b,c)=>{
    console.log(a,b,c)
})