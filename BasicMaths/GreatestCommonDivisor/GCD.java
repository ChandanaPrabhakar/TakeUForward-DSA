package BasicMaths.GreatestCommonDivisor;

import java.util.Scanner;

public class GCD {
    private static int findGCD(int a, int b) {
        if (b == 0)
            return a;
        return findGCD(b, a % b);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter two numbers: ");
        int a = in.nextInt();
        int b = in.nextInt();
        int gcd = findGCD(a, b);
        System.out.println("GCD of two numbers: " + gcd);
        in.close();
    }
}
