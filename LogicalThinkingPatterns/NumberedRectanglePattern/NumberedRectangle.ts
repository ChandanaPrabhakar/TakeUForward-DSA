class NumberedRectangle {
  printPattern(n: number): void {
    for (let i = 0; i < 2 * n - 1; i++) {
      let pattern: string = "";
      for (let j = 0; j < 2 * n - 1; j++) {
        let top: number = i;
        let left: number = j;
        let bottom: number = 2 * n - 2 - i;
        let right: number = 2 * n - 2 - j;
        pattern +=
          n - Math.min(Math.min(top, bottom), Math.min(left, right)) + " ";
      }
      console.log(pattern);
    }
  }
}

const numberedRectangle = new NumberedRectangle();
numberedRectangle.printPattern(4);
