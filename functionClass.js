const classFive = [
    {student : 'A',  
     usn:001,
     Kannada:36,
     Hindi:55,
     English:40,
     Science:88,
     Maths:55,
     Social:36
    },
    {Student:'B',
     Usn:002,
     Kannada:36,
     Hindi:33,
     English:41,
     Science:75,
     Maths:66,
     Social:35
    },
    {Student:'C',
     Usn:003,
     Kannada:37,
     Hindi:51,
     English:42,
     Science:81,
     Maths:55,
     Social:38
    },
     {Student:'D',
     Usn:004,
     Kannada:37,
     Hindi:51,
     English:32,
     Science:84,
     Maths:58,
     Social:38
    },
    {Student:'E',
     Usn:005,
     Kannada:88,
     Hindi:88,
     English:65,
     Science:60,
     Maths:78,
     Social:66
       },  
]
const Rot = {
    A:6,
    B:7,
    C:8,
    D:10,
    F:12
  }

function Intrest(classFive){
    for (let i = 0; i < classFive.length; i++) {
        let student = classFive[i]
        totalIntresest(student)
         console.log(student)
    }
    
}
Intrest(classFive)



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
        const SI = (totalFees*Rot.A)/100
        const totalSI = SI.toFixed(2)
        console.log('Intreset :' + totalSI)
    } else if (totalPercentage > 60) {
        const SI = (totalFees*Rot.B)/100
        const totalSI = SI.toFixed(2)
        console.log( 'Intreset :' + totalSI)
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





