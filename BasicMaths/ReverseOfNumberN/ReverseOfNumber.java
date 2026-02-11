package BasicMaths.ReverseOfNumberN;

import java.util.Scanner;

public class ReverseOfNumber {
    private static void reverseNumber(int number) {
        int reverse = 0;
        while (number > 0) {
            reverse = reverse * 10 + (number % 10);
            number /= 10;
        }
        System.out.println(reverse);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        reverseNumber(n);
        in.close();
    }
}
