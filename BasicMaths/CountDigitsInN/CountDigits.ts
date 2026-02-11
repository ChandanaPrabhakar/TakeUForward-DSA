class CountDigits {
  digitCount(n: number): void {
    let count: number = Math.floor(Math.log10(n) + 1);
    console.log(count);
  }
}

const countDigits = new CountDigits();
countDigits.digitCount(1234567);
