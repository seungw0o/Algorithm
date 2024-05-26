#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(void) {
	int a,b;
	int n = 0;
	while (1)
	{
		scanf("%d %d", &a, &b);
		
		if ((a != 0) && (b != 0))
		{
			printf("%d\n", a + b);
		}
		else
		{
			break;
		}
	}
	return 0;
}