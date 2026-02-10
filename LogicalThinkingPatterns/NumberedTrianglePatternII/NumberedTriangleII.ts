class NumberedTriangleII {
  printPattern(n: number) {
    for (let i = 1; i <= n; i++) {
      let pattern = "";
      for (let j = 1; j <= i; j++) {
        pattern += i + " ";
      }
      console.log(pattern);
    }
  }
}

const triangleII = new NumberedTriangleII();
triangleII.printPattern(5);
