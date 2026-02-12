class Divisors {
  static findDivisors(n: number): void {
    let divisors: number[] = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        divisors.push(i);

        if (i !== n / i) {
          divisors.push(n / i);
        }
      }
    }
    divisors.sort((a, b) => a - b);
    console.log(divisors.join(" "));
  }
}

Divisors.findDivisors(36);
