class AlphaRampTriangle {
  printPattern(n: number): void {
    let ch: number = 65;
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let j = 0; j <= i; j++) {
        pattern += String.fromCharCode(ch) + " ";
      }
      console.log(pattern);
      ch++;
    }
  }
}

const alphaRampTriangle = new AlphaRampTriangle();
alphaRampTriangle.printPattern(5);
