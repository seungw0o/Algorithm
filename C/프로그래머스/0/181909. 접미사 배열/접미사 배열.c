#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// 문자열 비교 함수 (사전순으로 정렬하기 위해 사용)
int compare(const void* a, const void* b) {
    return strcmp(*(const char**)a, *(const char**)b);
}

char** solution(char* my_string) {
    int len = strlen(my_string);
    int num_suffixes = len; // 접미사 개수 계산
    char** result = malloc(num_suffixes * sizeof(char*)); // 문자열 배열 동적 할당

    for (int i = 0; i < len; i++) {
        int suffix_len = len - i;
        result[i] = malloc((suffix_len + 1) * sizeof(char)); // 각 접미사에 대해 메모리 할당
        strncpy(result[i], my_string + i, suffix_len);
        result[i][suffix_len] = '\0'; // 문자열 마지막에 null 문자 추가
    }

    qsort(result, num_suffixes, sizeof(char*), compare); // 사전순으로 정렬

    return result;
}

int main() {
    char* my_string = "banana";
    char** result = solution(my_string);

    int len = strlen(my_string);
    int num_suffixes = len;

    for (int i = 0; i < num_suffixes; i++) {
        printf("%s\n", result[i]);
        free(result[i]); // 각 접미사에 할당된 메모리 해제
    }

    free(result); // 문자열 배열에 할당된 메모리 해제

    return 0;
}
