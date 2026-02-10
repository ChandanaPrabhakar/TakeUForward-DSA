class NumberedTriangle {
  printPattern(n: number) {
    for (let i = 1; i <= n; i++) {
      let pattern: string = "";
      for (let j = 1; j <= i; j++) {
        pattern += j + " ";
      }
      console.log(pattern);
    }
  }
}

const triangle = new NumberedTriangle();
triangle.printPattern(5);
