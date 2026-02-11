package LogicalThinkingPatterns.AlphaHillPattern;

import java.util.Scanner;

public class AlphaHill {
    private static void printPattern(int n) {
        for (int i = 0; i < n; i++) {
            char ch = 'A';
            for (int j = n - i - 1; j > 0; j--) {
                System.out.print("  ");
            }
            for (int j = 0; j <= i; j++) {
                System.out.print(ch++ + " ");
            }

            ch -= 2;
            for (int j = 0; j < i; j++) {
                System.out.print(ch-- + " ");
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
