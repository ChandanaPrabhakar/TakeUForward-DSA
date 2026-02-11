import math
class ArmstrongNumber:
    def isArmstrongNumber(self, number):
        if number == 0:
            print(True)
        else:
            duplicate = number
            digits = int(math.log10(number) + 1)
            sum = 0
            while(number > 0):
                sum += int(math.pow(number % 10, digits))
                number //= 10
            print(duplicate == sum)
    
    def run(self):
        n = int(input("Enter the number: "))
        self.isArmstrongNumber(n)
armstrongNumber = ArmstrongNumber()
armstrongNumber.run()

