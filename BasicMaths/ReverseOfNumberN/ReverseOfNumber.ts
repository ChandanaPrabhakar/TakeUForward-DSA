class ReverseOfNumber {
  reverseNumber(n: number): void {
    let reversedNumber: number = 0;
    while (n > 0) {
      reversedNumber = reversedNumber * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    console.log("The reverse of number: " + reversedNumber);
  }
}

const reverse = new ReverseOfNumber();
reverse.reverseNumber(1234567);
