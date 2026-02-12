package BasicMaths.AllDivisors;

import java.util.*;

public class Divisors {

    private static void findAllDivisors(int number) {

        List<Integer> divisors = new ArrayList<>();
        for (int i = 1; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                divisors.add(i);
                if (i != number / i) {
                    divisors.add(number / i);
                }
            }
        }

        Collections.sort(divisors);
        for (int d : divisors) {
            System.out.print(d + " ");
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        findAllDivisors(n);
        in.close();
    }
}
