package LogicalThinkingPatterns.SymmetricButterflyPattern;

import java.util.Scanner;

public class SymmetricButterfly {
    private static void printPattern(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("* ");
            }
            for (int k = 4 * (n - i - 1); k > 0; k--) {
                System.out.print(" ");
            }
            for (int l = 0; l <= i; l++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        for (int i = n - 1; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print("* ");
            }
            for (int k = 0; k < 4 * (n - i); k++) {
                System.out.print(" ");
            }
            for (int l = i; l >= 1; l--) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        printPattern(n);
        in.close();
    }
}
