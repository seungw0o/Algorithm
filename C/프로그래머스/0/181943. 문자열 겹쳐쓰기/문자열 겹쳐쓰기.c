#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

char* solution(const char* my_string, const char* overwrite_string, int s) {
	// my_string의 길이 구하기
	size_t my_string_length = strlen(my_string);
    // overwrite_string의 길이 구하기
	size_t overwrite_length = strlen(overwrite_string);

	// 결과를 저장할 새로운 문자열의 메모리 공간 할당
	char* answer = (char*)malloc((my_string_length + 1) * sizeof(char));
    // my_string을 answer에 복사
	strcpy(answer, my_string);
	// overwrite_string으로 대체할 부분을 answer에 복사
	strncpy(answer + s, overwrite_string, overwrite_length);

	return answer;
}

int main() {
	// 입력 받을 문자열의 최대 길이
	const int MAX_LENGTH = 1000;
	
    //각 string에 메모리 할당
	char* my_string = (char*)malloc(MAX_LENGTH * sizeof(char));
	char* overwrite_string = (char*)malloc(MAX_LENGTH * sizeof(char));
	int s;

	//my_string, overwrite_string, s 입력받기
	scanf("%s %s %d", my_string, overwrite_string, &s);

	// solution 함수를 통해 문자열 겹치기
	char* result = solution(my_string, overwrite_string, s);
    // 결과 출력
	printf("%s\n", result);
    // 메모리 해제
    // segmentation fault가 떠서...
	free(result);
	free(my_string);
	free(overwrite_string);

	return 0;
}