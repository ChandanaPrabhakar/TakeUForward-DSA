class InvertedLetteredTriangle {
  printPattern(n: number): void {
    for (let i = n; i > 0; i--) {
      let pattern: string = "";
      for (let ch = 65; ch < 65 + i; ch++) {
        pattern += String.fromCharCode(ch) + " ";
      }
      console.log(pattern);
    }
  }
}

const invertedLetteredTriangle = new InvertedLetteredTriangle();
invertedLetteredTriangle.printPattern(5);
