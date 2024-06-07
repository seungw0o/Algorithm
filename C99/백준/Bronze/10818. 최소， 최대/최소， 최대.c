#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <limits.h>

int main(void) {
	int N;
	int min = INT_MAX; 
	int max = INT_MIN; 
	int num[1000000];
	scanf("%d", &N);
	while (getchar() != '\n');
	for (int i = 0; i < N; i++)
	{
		scanf("%d", &num[i]);
		if (num[i] > max)
		{
			max = num[i];
		}
		if (num[i] < min)
		{
			min = num[i];
		}
	}
	printf("%d %d", min, max);
	return 0;
}
