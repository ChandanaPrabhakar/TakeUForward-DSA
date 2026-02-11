class SymmetricButterfly {
  printPattern(n: number): void {
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let j = 0; j <= i; j++) {
        pattern += "* ";
      }
      for (let k = 4 * (n - i - 1); k > 0; k--) {
        pattern += " ";
      }
      for (let l = 0; l <= i; l++) {
        pattern += "* ";
      }
      console.log(pattern);
    }

    for (let i = n - 1; i > 0; i--) {
      let pattern: string = "";
      for (let j = 0; j < i; j++) {
        pattern += "* ";
      }
      for (let k = 0; k < 4 * (n - i); k++) {
        pattern += " ";
      }
      for (let l = 0; l < i; l++) {
        pattern += "* ";
      }
      console.log(pattern);
    }
  }
}

const butterfly = new SymmetricButterfly();
butterfly.printPattern(5);
