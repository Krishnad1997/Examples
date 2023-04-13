// function fibonacci(n){
//     if (n<=0){
//         return 0;
//     } else if (n === 1){
//         console.log(0);
//         return 1;
//     } else {
//         let fib = fibonacci(n-1) + fibonacci (n-2);
//         console.log(fib);
//         return fib;
//     }
// }
// fibonacci(10)

function fibonacci(n){
    let a=0, b=1, c;
    console.log(a);
    console.log(b);
    for(let i=2;i<n;i++){
    const c=a+b;
    let newArray = [];
    newArray.push(c)
    console.log(newArray)
    a=b;
    b=c;
    }
}
fibonacci(10)