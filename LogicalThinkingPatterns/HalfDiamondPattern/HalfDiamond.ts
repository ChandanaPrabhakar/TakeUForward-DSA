class HalfDiamond {
  printPattern(n: number): void {
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let j = 0; j <= i; j++) {
        pattern += "* ";
      }
      console.log(pattern);
    }
    for (let i = n - 1; i > 0; i--) {
      let pattern: string = "";
      for (let j = 0; j < i; j++) {
        pattern += "* ";
      }
      console.log(pattern);
    }
  }
}

const halfDiamond = new HalfDiamond();
halfDiamond.printPattern(5);
