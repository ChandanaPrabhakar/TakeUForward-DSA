class PrimeNumber:
    def isPrime(self, number):
        if number <= 1:
            return False
        if number == 2:
            return True
        if number % 2 == 0:
            return False

        for i in range(3, int(number ** 0.5) + 1, 2):
            if number % i == 0:
                return False

        return True

    
    def run(self):
        n = int(input("Entre the number: "))
        print(self.isPrime())

prime = PrimeNumber()
prime.run()