class IncreasingNumberTriangle {
  printPattern(n: number): void {
    let count = 1;
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let j = 0; j <= i; j++) {
        pattern += count + " ";
        count++;
      }
      console.log(pattern);
    }
  }
}

const triangle = new IncreasingNumberTriangle();
triangle.printPattern(5);
