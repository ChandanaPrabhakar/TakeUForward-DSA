class BinaryNumberTriangle {
  printPattern(n: number): void {
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let j = 0; j <= i; j++) {
        if (i % 2 == 0) {
          if (j % 2 == 0) {
            pattern += "1 ";
          } else {
            pattern += "0 ";
          }
        } else {
          if (j % 2 == 0) {
            pattern += "0 ";
          } else {
            pattern += "1 ";
          }
        }
      }
      console.log(pattern);
    }
  }
}

const binaryNumberTriangle = new BinaryNumberTriangle();
binaryNumberTriangle.printPattern(5);
