class Diamond {
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

const diamond = new Diamond();
diamond.printPattern(5);
