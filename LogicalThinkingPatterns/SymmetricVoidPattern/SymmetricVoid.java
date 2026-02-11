package LogicalThinkingPatterns.SymmetricVoidPattern;

import java.util.Scanner;

public class SymmetricVoid {
    private static void printPattern(int n) {
        for (int i = n; i > 0; i--) {
            for (int j = i; j > 0; j--) {
                System.out.print("* ");
            }
            for (int j = 4 * (n - i); j > 0; j--) {
                System.out.print(" ");
            }
            for (int k = i; k > 0; k--) {
                System.out.print("* ");
            }
            System.out.println();
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("* ");
            }
            for (int k = 0; k < 4 * (n - i - 1); k++) {
                System.out.print(" ");
            }
            for (int l = i; l >= 0; l--) {
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
