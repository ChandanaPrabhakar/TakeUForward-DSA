class AlphaRampTriangle:
    def printPattern(self, n):
        ch = 'A'
        for i in range(0, n):
            for j in range(0, i+1):
                print(ch+" ", end = "")
            print()
            ch = chr(ord('A')+i+1)
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

alphaRampTriangle = AlphaRampTriangle()
alphaRampTriangle.run()