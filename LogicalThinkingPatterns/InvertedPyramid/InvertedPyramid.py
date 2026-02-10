class InvertedPyramid:
    def printPattern(self, n):
        for i in range(n, 0, -1):
            pattern = ""
            for j in range(n-i, 0, -1):
                pattern += " "
            for k in range(0, i):
                pattern += "* "
            print(pattern)
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)


starInverted = InvertedPyramid()
starInverted.run()
