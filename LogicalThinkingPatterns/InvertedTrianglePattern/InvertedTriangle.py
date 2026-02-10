class InvertedTriangle:
    def printPattern(self,n):
        for i in range(n, 0, -1):
            pattern = ""
            for j in range(i):
                pattern += "* "
            print(pattern)
    
    def run(self):
        n = int(input("Enter number of rows: "))
        self.printPattern(n)

triangle = InvertedTriangle()
triangle.run()