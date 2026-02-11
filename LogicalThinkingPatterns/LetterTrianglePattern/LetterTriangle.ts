class LetterTriangle {
  printPattern(n: number): void {
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let ch = 65; ch <= 65 + i; ch++) {
        pattern += String.fromCharCode(ch) + " ";
      }
      console.log(pattern);
    }
  }
}

const letterTriangle = new LetterTriangle();
letterTriangle.printPattern(5);
