class GCD {
  findGCD(a: number, b: number): number {
    if (b == 0) return a;
    return this.findGCD(b, a % b);
  }

  main(): void {
    const gcd = this.findGCD(9, 12);
    console.log("GCD of two numbers: " + gcd);
  }
}

const gcd = new GCD();
gcd.main();
