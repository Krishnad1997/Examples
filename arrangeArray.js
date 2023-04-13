let numbers = [1 ,4, 2, 8, 22, 3]

numbers.sort(function(a,b){return(a-b)})
console.log('ascending : '+numbers)

numbers.sort(function(a,b){return(b-a)});
console.log('Desending : '+ numbers);