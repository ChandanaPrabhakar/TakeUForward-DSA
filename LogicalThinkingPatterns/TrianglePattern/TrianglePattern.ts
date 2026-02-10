class RightAngledTriangle {
  printPattern(n: number) {
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let j = 0; j < i + 1; j++) {
        pattern += "* ";
      }
      console.log(pattern);
    }
  }
}

const triangle = new RightAngledTriangle();
triangle.printPattern(5);
