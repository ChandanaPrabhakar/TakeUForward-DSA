class AlphaTriangle:
    def printPattern(self, n):
        for i in range(0, n):
            start = ord('A') + n - i - 1
            for ch in range(start, ord('A') + n):
                print(chr(ch)+" ", end="")
            print()

    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

alphaTriangle = AlphaTriangle()
alphaTriangle.run()