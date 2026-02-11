class HallowRectangle:
    def printPattern(self, n):
        for i in range(0,n):
            pattern =""
            for j in range(0, n):
                if (i == 0 or i == n-1 or j == 0 or j == n-1):
                    pattern += "* "
                else:
                    pattern += "  "
            print(pattern)
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

hallowRectangle = HallowRectangle()
hallowRectangle.run()