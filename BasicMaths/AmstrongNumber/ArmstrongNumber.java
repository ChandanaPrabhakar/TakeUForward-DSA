package BasicMaths.AmstrongNumber;

import java.util.Scanner;

public class ArmstrongNumber {
    private static void isArmstrongNumber(int number) {
        if (number == 0)
            System.out.println(true);
        else {
            int duplicate = number;
            int digits = (int) Math.log10(number) + 1;
            int sum = 0;
            while (number > 0) {
                sum += (int) (Math.pow(number % 10, digits));
                number /= 10;
            }
            System.out.println(sum == duplicate);
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        isArmstrongNumber(n);
        in.close();
    }
}
