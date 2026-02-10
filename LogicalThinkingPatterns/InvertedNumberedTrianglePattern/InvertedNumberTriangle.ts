class InvertedNumberedTriangle {
  public printPattern(n: number): void {
    for (let i = n; i > 0; i--) {
      let pattern: string = "";
      for (let j = 1; j <= i; j++) {
        pattern += j + " ";
      }
      console.log(pattern);
    }
  }
}

const triangle = new InvertedNumberedTriangle();
triangle.printPattern(5);
