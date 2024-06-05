#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main(void) {
	int a, b, c;
	while (1){
		scanf("%d %d %d", &a, &b, &c);
		if ((c>a) && (c>b)){
			if ((a*a) + (b*b) == (c*c)){
				printf("right\n");
			}
			else {
				printf("wrong\n");
			}
		}else if ((b > a) && (b > c)) {
			if ((a * a) + (c * c) == (b * b)) {
				printf("right\n");
			}
			else {
				printf("wrong\n");
			}
		}
		else if ((a > b) && (a > c)) {
			if ((c * c) + (b * b) == (a * a)) {
				printf("right\n");
			}
			else {
				printf("wrong\n");
			}
		}
		else if ((a == 0) && (b == 0) && (c == 0)) {
			break;
		}
	}
	return 0;
}