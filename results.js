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

/** *
 * Check if student is promoted
 * Total percentage with grade
 * Percentage of languages with grade
 * Percentage of MSS with grade
 */

/**
 * Check if student is promoted
 * Steps :
 * Check each subject
 * If any one of the subject has less than 35, declare as failed
 * */

function result(student) {
  if (student.Kannada < 35) {
    console.log("Fail");
  } else if (student.English < 35) {
    console.log("Fail");
  } else if (student.Hindi < 35) {
    console.log("Fail");
  } else if (student.Maths < 35) {
    console.log("Fail");
  } else if (student.Social < 35) {
    console.log("Fail");
  } else if (student.Science < 35) {
    console.log("Fail");
  } else {
    console.log("Pass");
  }
}

/**
 * Steps:
 * Add all subjects marks
 * Divide it by total marks
 * Multiply by 100
 * Give grade accordingly
 * */
function totalPercentage(student) {
  // Add marks of all subjects
  let totalSecuredMarks =
    student.English +
    student.Hindi +
    student.Kannada +
    student.Maths +
    student.Science +
    student.Social;

  let totalMarks = 600;

  let totalPercentage = (totalSecuredMarks / totalMarks) * 100;
  console.log("Total percentage : " + totalPercentage);

  /**
   * Grade calculation
   * 80-100 : A
   * 60-80  : B
   * 40-60  : C
   * 35-40  : D
   * Below 35 : F
   * */

  if (totalPercentage > 80) {
    console.log("Grade : A");
  } else if (totalPercentage > 60) {
    console.log("Grade : B");
  } else if (totalPercentage > 40) {
    console.log("Grade : C");
  } else if (totalPercentage > 35) {
    console.log("Grade : D");
  } else {
    console.log("Grade : F");
  }
}
// result(vishnu);
// totalPercentage(vishnu);

function totalLanguages(student) {
 let securedLanguagesMarks = student.English+student.Hindi+student.Kannada;

   let totalMarks = 300;

   let percentageLanguages = securedLanguagesMarks/totalMarks*100
    console.log("Total percentage of Languages : " + percentageLanguages)

    if (percentageLanguages > 80) {
        console.log("Grade : A");
      } else if (percentageLanguages > 60) {
        console.log("Grade : B");
      } else if (percentageLanguages > 40) {
        console.log("Grade : C");
      } else if (percentageLanguages > 35) {
        console.log("Grade : D");
      } else {
        console.log("Grade : F");
      }

}
// result(vishnu);
// totalPercentage(vishnu);
// totalLanguages(vishnu)

function otherLanguages(student) {
    let securedOtherLanguagesMarks = student.Maths+student.Science+student.Social;
   
      let totalMarks = 300;
   
      let percentageOtherLanguages = securedOtherLanguagesMarks/totalMarks*100
       console.log("Total percentage of otherLanguages : " + percentageOtherLanguages)
   
       if (percentageOtherLanguages > 80) {
           console.log("Grade : A");
         } else if (percentageOtherLanguages > 60) {
           console.log("Grade : B");
         } else if (percentageOtherLanguages > 40) {
           console.log("Grade : C");
         } else if (percentageOtherLanguages > 35) {
           console.log("Grade : D");
         } else {
           console.log("Grade : F");
         }
   
   }
   result(vishnu);
   totalPercentage(vishnu);
   totalLanguages(vishnu);
   otherLanguages(vishnu)