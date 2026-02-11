package BasicMaths.CountDigitsInN;

import java.util.Scanner;

public class CountDigits {
    private static void countDigits(int number) {
        int count = (int) (Math.log10(number) + 1);
        System.out.println(count);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        countDigits(n);
        in.close();
    }
}
