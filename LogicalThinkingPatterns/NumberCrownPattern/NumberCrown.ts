class NumberCrown {
  printPattern(n: number): void {
    for (let i = 1; i <= n; i++) {
      let pattern = "";
      for (let j = 1; j <= i; j++) {
        pattern += j + " ";
      }
      for (let k = 0; k < 4 * (n - i); k++) {
        pattern += " ";
      }
      for (let l = i; l >= 1; l--) {
        pattern += l + " ";
      }
      console.log(pattern);
    }
  }
}

const crown = new NumberCrown();
crown.printPattern(5);
