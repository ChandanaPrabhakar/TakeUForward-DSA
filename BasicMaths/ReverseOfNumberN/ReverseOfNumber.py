class ReverseOfNumber:
    def reverseNumber(self,number):
        reversedNumber = 0
        while(number > 0):
            reversedNumber = reversedNumber * 10 + (number % 10)
            number //= 10
        print(reversedNumber)
    
    def run(self):
        n = int(input("Enter the number: "))
        self.reverseNumber(n)

reverse = ReverseOfNumber()
reverse.run()