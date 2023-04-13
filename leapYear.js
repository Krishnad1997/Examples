function leapYear(year) {
  if ((0 == year % 4 && 0 !== year % 100) || 0 == year % 400) {
    console.log(year + " Given year is a leap Year ");
  } else {
    console.log(year + " Given year is not a leap Year");
  }
}
leapYear(2023);
