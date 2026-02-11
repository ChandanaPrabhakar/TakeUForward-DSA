class AlphaHill:
    def printPattern(self, n):
        for i in range(0, n):
            for j in range(n - i - 1, 0, -1):
                print("  ", end ="")
            
            ch = 'A'
            for k in range(0, i+1):
                print(ch+" ", end="")
                ch = chr(ord(ch)+1)
            
            ch = chr(ord(ch) - 2)
            for l in range(0, i):
                print(ch+" ", end="")
                ch = chr(ord(ch) - 1)
            
            print()
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

alphaHill = AlphaHill()
alphaHill.run()