import math
class CountDigits:
    def digitCount(self,number):
        count = int(math.log10(number) + 1)

        print(count)
    
    def run(self):
        n = int(input("Enter the number: "))
        self.digitCount(n)

countDigits = CountDigits()
countDigits.run()