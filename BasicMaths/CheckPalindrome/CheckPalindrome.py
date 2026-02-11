class CheckPalindrome:
    def isPalindrome(self, number):
        reversedNumber = self.reverse(number)
        print(reversedNumber == number)
    
    def reverse(self, number):
        reversedNumber = 0
        while(number > 0):
            reversedNumber = reversedNumber * 10 + (number % 10)
            number //= 10
        
        return reversedNumber
    
    def run(self):
        n = int(input("Enter the number: "))
        self.isPalindrome(n)

palindrome = CheckPalindrome()
palindrome.run()