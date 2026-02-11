package BasicMaths.CheckPalindrome;

import java.util.Scanner;

public class CheckPalindrome {
    private static void isPalindrome(int number) {
        int reversedNumber = reverse(number);
        System.out.println(reversedNumber == number);
    }

    private static int reverse(int number) {
        int reversedNumber = 0;
        while (number > 0) {
            reversedNumber = reversedNumber * 10 + (number % 10);
            number /= 10;
        }
        return reversedNumber;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        isPalindrome(n);
        in.close();
    }
}
