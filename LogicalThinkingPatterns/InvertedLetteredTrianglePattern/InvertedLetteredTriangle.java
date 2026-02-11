package LogicalThinkingPatterns.InvertedLetteredTrianglePattern;

import java.util.Scanner;

public class InvertedLetteredTriangle {
    private static void printPattern(int n) {
        for (int i = n; i > 0; i--) {
            for (char ch = 'A'; ch < 'A' + i; ch++) {
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
