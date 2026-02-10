class InvertedTriangle {
  printPattern(n: number): void {
    for (let i = n; i > 0; i--) {
      let pattern: string = "";
      for (let j = 0; j < i; j++) {
        pattern += "* ";
      }
      console.log(pattern);
    }
  }
}

const triangle = new InvertedTriangle();
triangle.printPattern(5);
