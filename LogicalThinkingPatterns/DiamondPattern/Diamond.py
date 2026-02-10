class Diamond:
    def printPattern(self, n):
        for i in range(0,n):
            pattern = ""
            for j in range(n - i - 1, 0, -1):
                pattern += " "
            for k in range(0, i+1):
                pattern += "* "

            print(pattern)
        
        for i in range(n,0,-1):
            pattern = ""
            for j in range(n - i, 0, -1):
                pattern += " "
            for k in range(0, i):
                pattern += "* "
            print(pattern)
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

diamond = Diamond()
diamond.run()