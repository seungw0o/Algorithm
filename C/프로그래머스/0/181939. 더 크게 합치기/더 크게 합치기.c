#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <stdlib.h>

// 두 정수 중 더 큰 값을 반환
int getMax(int a, int b) {
	return (a > b) ? a : b;
}

// 두 정수를 연결한 값을 계산
int concatenate(int a, int b) {
	int power = 1;
	while (power <= b)
		power *= 10;
	return (a * power) + b;
}

//A+B, B+A를 계산한 뒤 더 큰 값을 반환
int solution(int a, int b) {
	int ab = concatenate(a, b);
	int ba = concatenate(b, a);

	return getMax(ab, ba);
}

int main() {
	int a, b;
	scanf("%d %d", &a, &b);

	int result = solution(a, b);

	printf("%d", result);

	return 0;
}