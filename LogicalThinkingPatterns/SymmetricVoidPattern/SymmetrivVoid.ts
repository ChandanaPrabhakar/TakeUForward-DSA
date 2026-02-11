class SymmetricVoid {
  printPattern(n: number): void {
    for (let i = n; i > 0; i--) {
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
    for (let i = 1; i <= n; i++) {
      let pattern: string = "";
      for (let j = 0; j < i; j++) {
        pattern += "* ";
      }
      for (let k = 4 * (n - i); k > 0; k--) {
        pattern += " ";
      }
      for (let l = i; l >= 1; l--) {
        pattern += "* ";
      }
      console.log(pattern);
    }
  }
}

const symmetricVoid = new SymmetricVoid();
symmetricVoid.printPattern(5);
