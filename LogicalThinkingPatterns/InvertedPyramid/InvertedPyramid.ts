class InvertedPyramid {
  printPattern(n: number): void {
    for (let i = n; i > 0; i--) {
      let pattern: string = "";
      for (let j = n - i; j > 0; j--) {
        pattern += " ";
      }
      for (let k = 0; k < i; k++) {
        pattern += "* ";
      }
      console.log(pattern);
    }
  }
}

const starInverted = new InvertedPyramid();
starInverted.printPattern(5);
