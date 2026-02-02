#include <stdio.h>

void primeFactorization(int n) {

    while (n % 2 == 0) {
        printf("2 ");
        n = n / 2;
    }


    for (int i = 3; i * i <= n; i += 2) {
        while (n % i == 0) {
            printf("%d ", i);
            n = n / i;
        }
    }


    if (n > 2) {
        printf("%d ", n);
    }
}

int gcd(int a, int b) {
    int gcd = 1;
    int i;
    
    // Prime factorize the first number
    printf("Prime factors of %d: ", a);
    primeFactorization(a);
    printf("\n");

    // Prime factorize the second number
    printf("Prime factors of %d: ", b);
    primeFactorization(b);
    printf("\n");
    
    // Find the GCD based on prime factors
    for (i = 2; i <= a && i <= b; i++) {
        while (a % i == 0 && b % i == 0) {
            gcd *= i;
            a = a / i;
            b = b / i;
        }
    }
    
    return gcd;
}

int main() {
    int num1, num2;

    // Input two numbers
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);

    // Calculate and display the GCD
    printf("The GCD of the two numbers is: %d\n", gcd(num1, num2));

    return 0;
}
