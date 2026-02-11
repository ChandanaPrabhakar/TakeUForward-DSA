class GCD:
    def findGCD(self, a, b):
        if b == 0:
            return a
        return self.findGCD(b, a % b)
    
    def run(self):
        a = int(input("Enter the value of a: "))
        b = int(input("Enter the value of b: "))
        gcd = self.findGCD(a, b)
        print("GCD of two numbers: "+str(gcd))
    
gcd = GCD()
gcd.run()