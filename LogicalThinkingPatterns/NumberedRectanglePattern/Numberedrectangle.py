class NumberedRectangle:
    def printPattern(self, n):
        for i in range(0, 2* n - 1):
            pattern = ""
            for j in range(0, 2 * n - 1):
                top = i
                bottom = 2* n - 2 - i
                left = j
                right = 2 * n - 2 - j
                pattern += str(n - min(min(top,bottom), min(left, right)))+" "
            print(pattern)
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

numberedRectangle = NumberedRectangle()
numberedRectangle.run()
