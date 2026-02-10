class Pyramid:
    def printPattern(self,n):
        for i in range(n):
            pattern = ""
            for j in range(n - i - 1, 0, -1):
                pattern += " "
            for k in range(0, i+1):
                pattern +="* "
            print(pattern)
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

starPyramid = Pyramid()
starPyramid.run()
