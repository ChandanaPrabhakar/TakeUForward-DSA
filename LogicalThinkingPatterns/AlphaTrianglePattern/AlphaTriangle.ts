class AlphaTriangle {
  printPattern(n: number): void {
    for (let i = 0; i < n; i++) {
      let start: number = 65 + n - i - 1;
      let pattern: string = "";
      for (let j = start; j <= 65 + n - 1; j++) {
        pattern += String.fromCharCode(j) + " ";
      }
      console.log(pattern);
    }
  }
}

const alphaTriangle = new AlphaTriangle();
alphaTriangle.printPattern(5);
