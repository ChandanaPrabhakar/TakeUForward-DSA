class NumberCrown:
    def printPattern(self,n):
        for i in range(1, n+1):
            pattern = ""
            for j in range(1, i+1):
                pattern += str(j)+" "
            for k in range(0, 4*(n-i)):
                pattern += " "
            for l in range(i, 0, -1):
                pattern += str(l)+" "
            print(pattern)
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

crown = NumberCrown()
crown.run()