
let numbers = []
function oddNumbers(n){
    for (let i = 0; i <= n; i++) {
    if (i%2!==0){
       numbers.push(i);
    } 
    }
    console.log(numbers);
    numbers.reverse()
    console.log(numbers);

}
oddNumbers(10)