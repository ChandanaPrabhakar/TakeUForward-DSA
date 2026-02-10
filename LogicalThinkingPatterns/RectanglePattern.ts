class RectanglePattern {
  printPattern(n: number) {
    for (let i = 0; i < n; i++) {
      let pattern: string = "";
      for (let j = 0; j < n; j++) {
        pattern += "* ";
      }
      console.log(pattern);
    }
  }
}

const rectangle = new RectanglePattern();
rectangle.printPattern(5);
