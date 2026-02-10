package LogicalThinkingPatterns.NumberCrownPattern;

import java.util.Scanner;

public class NumberCrown {
    private static void printPattern(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            for (int k = 0; k < 4 * (n - i); k++) {
                System.out.print(" ");
            }

            for (int l = i; l >= 1; l--) {
                System.out.print(l + " ");
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
