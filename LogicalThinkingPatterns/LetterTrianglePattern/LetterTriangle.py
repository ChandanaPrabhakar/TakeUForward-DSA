class LetterTriangle:
    def printPattern(self, n):
        for i in range(0, n):
            for ch in range(ord('A'), ord('A') + i + 1):
                print(chr(ch)+" ", end ="")
            print()
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

letterTriangle = LetterTriangle()
letterTriangle.run()