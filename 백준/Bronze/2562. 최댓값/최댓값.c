#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int n[9];
	int max, min, answer;
	max = 0;
	min = 100;
	for (int i = 0; i < 9; i++)
	{
		scanf("%d", &n[i]);
		if (n[i] > max)
		{
			max = n[i];
			answer = i;
		}
		
	}
	printf("%d\n%d", max, answer+1);
    return 0;
}