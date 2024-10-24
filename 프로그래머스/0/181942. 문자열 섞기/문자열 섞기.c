#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

//문자를 번갈아가면서 출력하도록 변환하는 함수
char* solution(const char* str1, const char* str2) {

	//문자열 길이를 구함
	int length = strlen(str1);
	char* answer = (char*)malloc((2 * length + 1) * sizeof(char));

	int index = 0;
	
	//두 문자열을 for문을 이용하여 나란히 반복
	for (int i = 0; i < length; i++)
	{
		//첫번째 문자열의 i값 입력
		answer[index++] = str1[i];
		//두번째 문자열 i값 입력
		answer[index++] = str2[i];
	}

	//끝까지 반복
	answer[index] = '\0';

	return answer;
}