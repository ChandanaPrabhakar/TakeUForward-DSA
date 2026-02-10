package LogicalThinkingPatterns.InvertedNumberedTrianglePattern;

import java.util.Scanner;

public class InvertedNumberTriangle {
    private static void printPattern(int n) {
        for (int i = n; i > 0; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = in.nextInt();
        printPattern(n);
        in.close();
    }
}
