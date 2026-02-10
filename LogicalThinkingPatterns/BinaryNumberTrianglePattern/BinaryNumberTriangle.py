class BinaryNumberTriangle:
    def printPattern(self, n):
        for i in range(0, n):
            pattern = ""
            for j in range(0,i+1):
                if (i % 2 == 0):
                    if (j % 2 == 0):
                        pattern += "1 "
                    else:
                        pattern += "0 "
                else:
                    if(j % 2 == 0):
                        pattern += "0 "
                    else:
                        pattern += "1 "
            print(pattern)
    
    def run(self):
        n = int(input("Enter the number of rows: "))
        self.printPattern(n)

binaryNumberTriangle = BinaryNumberTriangle()
binaryNumberTriangle.run()