class CheckPalindrome {
  isPalindrome(n: number): void {
    let reversedNumber: number = this.reverse(n);
    console.log(reversedNumber == n);
  }

  reverse(n: number): number {
    let reversedNumber: number = 0;
    while (n > 0) {
      reversedNumber = reversedNumber * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return reversedNumber;
  }
}

const palindrome = new CheckPalindrome();
palindrome.isPalindrome(1221);
palindrome.isPalindrome(123456);
