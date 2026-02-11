class HallowReactangle {
  printPattern(n: number): void {
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let j = 0; j < n; j++) {
        if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
          pattern += "* ";
        } else {
          pattern += "  ";
        }
      }
      console.log(pattern);
    }
  }
}

const hallowRectangle = new HallowReactangle();
hallowRectangle.printPattern(5);
