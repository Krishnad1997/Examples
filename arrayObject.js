cart= [ { item : 'HomeNeeds' , cost : 5300 }, { item : 'laptop' , cost : 150000 },{ item: 'Cloths' , cost:2500},{item:'kitchen' , cost : 6458},{item:'furniture' , cost : 25000} ];


let sum=0
for (let i = 0; i < cart.length; i++) {
    
    let item = cart[i]
    let cost = item.cost;
    sum = sum + cost

}
let deliveryCost = 100
percentageGST = sum *18/100
totalCost = sum + percentageGST + deliveryCost
console.log('sum of all item : ' + sum)
console.log('GST(18%) : ' + percentageGST)
console.log('DeliveryCost : ' + deliveryCost)
console.log('TotalCost : ' + totalCost)


function bmiCalculator(a,b){
    BMI = a/(b*b)
    console.log(BMI + ' kg/m2')
}
bmiCalculator(95,1.84)

if (BMI<18.5) {
    console.log('person is underWeight')
} else if ((BMI <24.9)){
    console.log('Person is normalWeight')
} else if ((BMI <29.9)){
    console.log('Person is overWeight')
} else if((BMI >= 30)){
    console.log('Person is Obese')
}