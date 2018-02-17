function forLoop(array){
for (var i = 0; i < 25; i++) {

    if (i===1){
    array.push("I am 1 strange loop.");
  } else {
    array.push(`I am ${i} strange loops.`);
  }
}
return array;
}

forLoop();


function whileLoop(n){
  while (n > 0){
    console.log(--n);
  } return 'done'
}

whileloop(5);


function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}
 
do {
  console.log('doo-bee-doo-bee-doo')
} while (array.lenght> 0 && maybeTrue());

}

whileloop(5);