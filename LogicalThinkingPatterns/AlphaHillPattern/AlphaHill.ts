class AlphaHill {
  printPattern(n: number): void {
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let j = n - i - 1; j > 0; j--) {
        pattern += "  ";
      }
      let ch: number = 65;
      for (let k = 0; k <= i; k++) {
        pattern += String.fromCharCode(ch) + " ";
        ++ch;
      }

      ch -= 2;
      for (let l = 0; l < i; l++) {
        pattern += String.fromCharCode(ch) + " ";
        --ch;
      }
      console.log(pattern);
    }
  }
}

const alphaHill = new AlphaHill();
alphaHill.printPattern(5);
