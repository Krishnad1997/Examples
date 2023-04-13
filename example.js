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