class SymmetricVoid:
    def printPattern(self, n):
        for i in range(n, 0,-1):
            pattern = ""
            for j in range(i, 0 , -1):
                pattern += "* "
            for k in range(4*(n-i), 0, -1):
                pattern += " "
            for l in range(i, 0 ,-1):
                pattern += "* "
            print(pattern)
        
        for i in range(0,n):
            pattern = ""
            for j in range(0, i+1):
                pattern += "* "
            for k in range(0,4*(n-i-1)):
                pattern += " "
            for l in range(i, -1, -1):
                pattern += "* "
            print(pattern)
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

symmetricVoid = SymmetricVoid()
symmetricVoid.run()