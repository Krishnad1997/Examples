const sampath = {
    Usn: 420,
    Kannada: 65,
    Hindi: 40,
    English: 35,
    Maths: 90,
    Science: 34,
    Social: 55,
  };
  
  const vishnu = {
    Usn: 421,
    Kannada: 38,
    Hindi: 40,
    English: 35,
    Maths: 90,
    Science: 35,
    Social: 55,
  };

  const Rot = {
    A:6,
    B:7,
    C:8,
    D:10,
    F:12
  }

function totalIntresest(student){
    let totalSecuredMarks = student.English+student.Kannada+student.Hindi+student.Science+student.Maths+student.Social;

    let totalMarks = 600;
    let totalPercentage = (totalSecuredMarks / totalMarks)*100;
    let totalResult = totalPercentage.toFixed(2)
    console.log('Total Percentage : ' + totalResult)

    let fees = 45000;
    let years = 4;
    const totalFees = fees*years

    if (totalResult > 80){
        const SI = Math.round((totalFees*Rot.A))/100
        const totalSI = SI.toFixed(2)
        console.log('Intreset :' + totalSI)
    } else if (totalPercentage > 60) {
        const SI = Math.round((totalFees*Rot.B))/100
        const totalSI = SI.toFixed(2)
        console.log('Intreset :' + totalSI)
    } else if (totalResult > 40){
        const SI = (totalFees*Rot.C)/100
        const totalSI = SI.toFixed(2)
        console.log('Intreset :' + totalSI)
    } else if  (totalResult > 35){
        const SI = (totalFees*Rot.D)/100
        const totalSI = SI.toFixed(2)
        console.log('Intreset :' + totalSI)
    } else {
        const SI = (totalFees*Rot.F)/100
        const totalSI = SI.toFixed(2)
         console.log('Intreset :' + totalSI)
}
}
console.log('Vishnu');
totalIntresest(vishnu)

console.log("");

console.log("Sampath");
totalIntresest(sampath)