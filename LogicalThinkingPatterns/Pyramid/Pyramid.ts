class Pyramid {
  printPattern(n: number): void {
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let j = n - i - 1; j > 0; j--) {
        pattern += " ";
      }
      for (let k = 0; k <= i; k++) {
        pattern += "* ";
      }
      console.log(pattern);
    }
  }
}

const starPyramid = new Pyramid();
starPyramid.printPattern(5);
