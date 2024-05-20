#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int A, B;
    int a;
    scanf("%d %d", &A, &B);
    a = (A + B) * (A - B);
    printf("%d", a);
    return 0;
}