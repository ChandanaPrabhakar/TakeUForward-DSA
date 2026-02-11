class ArmstrongNumber {
  isArmstrongNumber(n: number): void {
    if (n == 0) console.log(true);
    else {
      let duplicate: number = n;
      let sum: number = 0;
      let digits: number = Math.floor(Math.log10(n) + 1);
      while (n > 0) {
        sum += Math.floor(Math.pow(n % 10, digits));
        n = Math.floor(n / 10);
      }
      console.log(duplicate == sum);
    }
  }
}

const armstrongNumber = new ArmstrongNumber();
armstrongNumber.isArmstrongNumber(9474);
armstrongNumber.isArmstrongNumber(1234);
