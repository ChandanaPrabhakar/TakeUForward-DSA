import math
class Divisors:
    def findDivisors(self, number):
        divisors = []
        for i in range(1, int(number**0.5) + 1):
            if(number % i == 0):
                divisors.append(i)
                if(i != number // i):
                    divisors.append(number // i)
        
        divisors.sort()
        print(*divisors)
    
    def run(self):
        n = int(input("Enter the number: "))
        self.findDivisors(n)

divisors = Divisors()
divisors.run()