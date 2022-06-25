function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) {
    return false;
  }
  return new Date(currentDate).getTime() <= new Date(expirationDate).getTime();
}
