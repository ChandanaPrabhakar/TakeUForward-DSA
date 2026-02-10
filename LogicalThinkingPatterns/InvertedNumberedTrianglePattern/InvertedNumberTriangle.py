class InvertedNumberedTriangle:
    def printPattern(self, n):
        for i in range(n, 0, -1):
            pattern = ""
            for j in range(1, i+1):
                pattern += str(j)+" "
            print(pattern)

    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

triangle = InvertedNumberedTriangle()
triangle.run()