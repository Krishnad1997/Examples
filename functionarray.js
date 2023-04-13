const cartOne= [ { item : 'HomeNeeds' , cost : 5300 }, { item : 'laptop' , cost : 150000 },{ item: 'Cloths' , cost:2500},{item:'kitchen' , cost : 6458},{item:'furniture' , cost : 25000} ];
const cartTwo= [ { item : 'HomeNeeds' , cost : 1126 }, { item : 'laptop' , cost : 250000 },{ item: 'Cloths' , cost:4500},{item:'kitchen' , cost : 7549},{item:'furniture' , cost : 74000} ];
function checkoutCalculator(cart) {
    let sum=0
    for (let i = 0; i < cart.length; i++) {
        
        let item = cart[i]
        let cost = item.cost;
        sum = sum + cost
    
    }
    let deliveryCost = 100
    const percentageGST = sum *18/100
    const totalCost = sum + percentageGST + deliveryCost
    console.log('sum of all item : ' + sum)
    console.log('GST(18%) : ' + percentageGST)
    console.log('DeliveryCost : ' + deliveryCost)
    console.log('TotalCost : ' + totalCost)

}
checkoutCalculator(cartOne)
checkoutCalculator(cartTwo)