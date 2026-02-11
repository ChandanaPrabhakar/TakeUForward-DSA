package LogicalThinkingPatterns.AlphaTrianglePattern;

import java.util.Scanner;

public class AlphaTriangle {
    private static void printPattern(int n) {
        for (int i = 0; i < n; i++) {
            char start = (char) ('A' + n - i - 1);
            for (char ch = start; ch <= 'A' + n - 1; ch++) {
                System.out.print(ch + " ");
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
