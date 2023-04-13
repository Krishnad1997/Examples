let ROI = {
  A: 5,
  B: 7,
  C: 8,
  D: 10,
  E: 3,
};

function FD(principalAmount, years) {
  if (principalAmount < 2000 && years > 2) {
    totalDeposit = principalAmount * ((1 + ROI.A / 100) * years - 1);
    console.log(totalDeposit);
  } else if (principalAmount < 6000 && years >= 2) {
    totalDeposit = principalAmount * ((1 + ROI.B / 100) * years - 1);
    console.log(totalDeposit);
  } else if (principalAmount > 6000 && years < 5) {
    totalDeposit = principalAmount * ((1 + ROI.C / 100) * years - 1);
    console.log(totalDeposit);
  } else if (principalAmount && years >= 5) {
    totalDeposit = principalAmount * ((1 + ROI.D / 100) * years - 1);
    console.log(totalDeposit);
  } else {
    totalDeposit = principalAmount * ((1 + ROI.E / 100) * years - 1);
    console.log(totalDeposit);
  }
}
FD(7000, 4);
