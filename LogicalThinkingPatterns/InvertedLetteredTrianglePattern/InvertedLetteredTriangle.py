class InvertedLetteredTriangle:
    def printPattern(self, n):
        for i in range(n, 0, -1):
            for ch in range(ord('A'), ord('A') + i):
                print(chr(ch)+" ", end ="")
            print()

    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

invertedLetteredTriangle = InvertedLetteredTriangle()
invertedLetteredTriangle.run()