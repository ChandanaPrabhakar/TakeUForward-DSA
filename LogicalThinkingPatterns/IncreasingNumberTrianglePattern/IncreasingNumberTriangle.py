class IncreasingNumberTriangle:
    def printPattern(self, n):
        count = 1;
        for i in range(0, n):
            pattern = ""
            for j in range(0, i+1):
                pattern += str(count) + " "
                count += 1
            print(pattern)
        
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

triangle = IncreasingNumberTriangle()
triangle.run()