package LogicalThinkingPatterns.AlphaRampTrianglePattern;

import java.util.Scanner;

public class AlphaRampTriangle {
    private static void printPattern(int n) {
        char ch = 'A';
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(ch + " ");
            }
            ch = (char) ('A' + i + 1);
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
